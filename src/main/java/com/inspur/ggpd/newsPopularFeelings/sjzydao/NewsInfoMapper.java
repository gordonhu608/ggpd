package com.inspur.ggpd.newsPopularFeelings.sjzydao;

import com.inspur.ggpd.newsPopularFeelings.data.NewsInfo;
import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;
import java.util.Map;

public interface NewsInfoMapper extends EntityMapper<NewsInfo> {

    /**
     * @Title: getNewsInfo
     * @Description: 获取新闻信息
     * @param: paramMap
     * @return: List<NewsInfo>
     * @date: 2020年7月22日
     */
    List<NewsInfo> getNewsInfo(Map<String, Object> paramMap);

    /**
     * @Title: getNewsInfoTotal
     * @Description: 获取新闻信息总条数
     * @param: paramMap
     * @return: int
     * @date: 2020年7月24日
     */
    int getNewsInfoTotal();

    /**
     * @Title: getNewsInfoDetail
     * @Description: 获取新闻信息详情
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月24日
     * @param paramMap
     */
    NewsInfo getNewsInfoDetail(Map<String, Object> paramMap);

    /**
     * @Title: getStripNewsInfoId
     * @Description: 获取舆情信息详情
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月30日
     */
    NewsInfo getStripNewsInfoId(Map<String, Object> paramMap);

    /**
     * @Title: getNextStripNewsInfoId
     * @Description: 获取下一条新闻信息
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月30日
     */
    NewsInfo getNextStripNewsInfoId(Map<String, Object> paramMap);
}
