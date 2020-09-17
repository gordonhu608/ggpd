package com.inspur.ggpd.elasticsearch.controller;

import com.inspur.ggpd.elasticsearch.tools.FilterHtmlUtil;
import com.inspur.ggpd.elasticsearch.tools.Result;
import com.inspur.ggpd.util.PropertiesUtil;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.text.Text;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.query.WildcardQueryBuilder;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping({"/xinwen"})
public class XinWenController {

    //private ElasticSearchHelper searchHelper =new ElasticSearchHelper(ElasticSearchConfig.) ;
    @Autowired
    RestHighLevelClient highLevelClient;
    String indexName = PropertiesUtil.getValueByKey("elasticsearch.xinwen.index");// 后边改成配置的

    // 6.x版本有 。7.x版本没有
    String type = PropertiesUtil.getValueByKey("elasticsearch.xinwen.type");
    ;
    String titleField = "BT";
    String contentField = "NR";
    // 定义返回字段
    String[] fields = {"BT", "CJSJ", "ID", "LY" ,"FBSJ"};

    @RequestMapping({"/search"})
    @ResponseBody
    public Result search(@RequestBody Map<String, Object> paramMap) {

        Result result = new Result();
        // 每页大小
        String pageSize = (String) paramMap.get("pageSize");
        List resultList = new ArrayList();
        if (pageSize == null) {
            pageSize = "10";
        }
        // 第几页
        String pageNum = (String) paramMap.get("pageNum");
        if (pageNum == null) {
            pageNum = "1";
        }

        String keyword = (String) paramMap.get("keyword");

        try {
            // 6.x版本有 。7.x版本没有
            result.setTotalCount(this.getTotalSearch(paramMap));
            SearchRequest searchRequest = new SearchRequest();
            searchRequest.indices(indexName);
             searchRequest.types(type);
            SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
            searchSourceBuilder.from(Integer.valueOf(pageSize) * (Integer.valueOf(pageNum)-1));
            searchSourceBuilder.size(Integer.valueOf(pageSize));


            // 设置高亮显示

            HighlightBuilder highlightBuilder = new HighlightBuilder();
            highlightBuilder.field(contentField);//高亮的字段
            highlightBuilder.requireFieldMatch(true);//是否多个字段都高亮
            highlightBuilder.preTags("<span style='color:red'>");//前缀后缀
            highlightBuilder.postTags("</span>");
            highlightBuilder.numOfFragments(3).noMatchSize(150);
            searchSourceBuilder.highlighter(highlightBuilder);
            BoolQueryBuilder boolQueryBuilder = new BoolQueryBuilder();


            WildcardQueryBuilder titleQueryBuilder = QueryBuilders.wildcardQuery(titleField + ".keyword", "*" + keyword + "*").boost(2.0f);

            boolQueryBuilder.should(QueryBuilders.wildcardQuery(contentField + ".keyword", "*" + keyword + "*")).should(titleQueryBuilder);
            searchSourceBuilder.query(boolQueryBuilder).fetchSource(fields, null);
            searchRequest.source(searchSourceBuilder);


            // 同步查询
            SearchResponse searchResponse = null;
            try {
                //RestHighLevelClient highLevelClient = highLevelClient;
                searchResponse = highLevelClient.search(searchRequest, RequestOptions.DEFAULT);

                // Long totalHits = searchResponse.getHits().getTotalHits();

                long totalHits = searchResponse.getHits().totalHits;

                /*searchResponse.getHits().forEach(documentFields -> {

                      resultList.add(documentFields.getSourceAsMap());
                });*/
                //解析结果
                ArrayList<String> list = new ArrayList<>();

                for (SearchHit hit : searchResponse.getHits().getHits() ) {
                    //解析高亮的字段

                    Map<String, HighlightField> highlightFields = hit.getHighlightFields();

                    HighlightField content = highlightFields.get(contentField);

                    Map<String, Object> sourceAsMap = hit.getSourceAsMap();//原来的结果
                    //将原来的字段替换为高亮字段即可
                    if (content != null) {
                        Text[] fragments = content.fragments();
                        String newcontent = "";

                        for (Text text : fragments) {
                            newcontent += text;
                        }
                        // 过滤html
                        newcontent= FilterHtmlUtil.Html2Text(newcontent);
                        newcontent = newcontent.replace(keyword, "<span style='color:red'>" + keyword + "</span>");

                        sourceAsMap.put(contentField, newcontent);//替换掉原来的内容

                    }
                    resultList.add(sourceAsMap);
                }
                /*System.out.println("返回结果长度" + resultList.size());*/
                result.setDocuments(resultList);


            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (Exception e) {

            e.printStackTrace();
        }


        return result;
    }


    private long getTotalSearch(Map<String, Object> paramMap) {
        long length = 0;
        Result result = new Result();

        String keyword = (String) paramMap.get("keyword");

        try {
            // 6.x版本有 。7.x版本没有

            SearchRequest searchRequest = new SearchRequest();
            searchRequest.indices(indexName);
            // searchRequest.types(type);
            SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

            searchSourceBuilder.size(Integer.valueOf(1000));
            // 设置高亮显示

            BoolQueryBuilder boolQueryBuilder = new BoolQueryBuilder();


            WildcardQueryBuilder titleQueryBuilder = QueryBuilders.wildcardQuery(titleField + ".keyword", "*" + keyword + "*");

            boolQueryBuilder.should(QueryBuilders.wildcardQuery(contentField + ".keyword", "*" + keyword + "*")).should(titleQueryBuilder);
            searchSourceBuilder.query(boolQueryBuilder).fetchSource(fields, null);
            searchRequest.source(searchSourceBuilder);


            // 同步查询
            SearchResponse searchResponse = null;
            try {
                //RestHighLevelClient highLevelClient = highLevelClient;
                searchResponse = highLevelClient.search(searchRequest, RequestOptions.DEFAULT);

                long totalHits = searchResponse.getHits().totalHits;
                length = searchResponse.getHits().getHits().length;
                System.out.println("返回结果是多少" + length);

            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (Exception e) {

            e.printStackTrace();
        }


        return length;
    }

}
