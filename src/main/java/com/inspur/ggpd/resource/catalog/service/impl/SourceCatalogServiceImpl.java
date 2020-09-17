package com.inspur.ggpd.resource.catalog.service.impl;

import com.inspur.ggpd.resource.catalog.dao.SourceCatalogMapper;
import com.inspur.ggpd.resource.catalog.dao.SourceShowConfigMapper;
import com.inspur.ggpd.resource.catalog.data.SourceCatalog;
import com.inspur.ggpd.resource.catalog.service.SourceCatalogService;
import com.inspur.ggpd.resource.catalog.sjzydao.SourceDataMapper;
import org.loushang.framework.mybatis.PageUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Title:资源目录表
 * Copyright: Copyright (c)
 * Company:
 * Description:SourceCatalog Service实现层
 *
 * @date 2020-07-31 14:44:03 中国标准时间
 */
@Service
public class SourceCatalogServiceImpl implements SourceCatalogService {

    @Resource
    private SourceDataMapper dataMapper;
    @Resource
    private SourceCatalogMapper catalogMapper;
    @Resource
    private SourceShowConfigMapper showConfigMapper;

    /**
     * @Title: click
     * @Description: 增加资源目录点击次数
     * @param: id 资源目录id
     * @return: Boolean
     * @date: 2020年8月24日
     */
    @Override
    public Boolean click(String id) {
        return catalogMapper.click(id);
    }

    /**
     * @Title: findAll
     * @Description: 获取资源目录
     * @param: type 资源类别
     * @return: List<SourceCatalog>
     * @date: 2020年7月31日
     */
    @Override
    public List<SourceCatalog> findAll(String type) {
        return catalogMapper.findAll(type);
    }

    /**
     * @Title: queryTableCode
     * @Description: 获取资源表
     * @param: type 资源类别
     * @return: List<String>
     * @date: 2020年8月13日
     */
    @Override
    public List<String> queryTableCode(String type) {
        return catalogMapper.queryTableCode(type);
    }

    /**
     * @Title: queryList
     * @Description: 获取资源列表数据
     * @param: params
     * @return: Map<String, Object>
     * @date: 2020年8月1日
     */
    @Override
    public Map<String, Object> queryList(Map<String, Object> params) {
        if(params.get("searchConfig")==null){
            params.put("data", new ArrayList<>());
            params.put("total",0);
            params.put("msg","无法加载数据，因为缺少搜索配置信息");
            return params;
        }
        if(((ArrayList)params.get("showConfig")).size()==0){
            params.put("data", new ArrayList<>());
            params.put("total",0);
            params.put("msg","无法加载数据，缺少显示配置信息");
            return params;
        }
        String tableCode=params.get("tableCode").toString();
        params.put("showConfig", showConfigMapper.findAll_(tableCode));

        List<Map<String, Object>> sources = dataMapper.findAll(params);
        params.put("data", sources);
        int total = PageUtil.getTotalCount();
        params.put("total", -1 == total ? sources.size() : total);
        return params;
    }

    /**
     * @Title: queryList
     * @Description: 获取资源列表数据
     * @param: params
     * @return: Map<String, Object>
     * @date: 2020年8月1日
     */
    @Override
    public Map<String, Object> queryListForTreeNode(Map<String, Object> params) {
        if(params.get("searchConfig")==null){
            params.put("data", new ArrayList<>());
            params.put("total",0);
            params.put("msg","无法加载数据，因为缺少搜索配置信息");
            return params;
        }
        if(((ArrayList)params.get("showConfig")).size()==0){
            params.put("data", new ArrayList<>());
            params.put("total",0);
            params.put("msg","无法加载数据，缺少显示配置信息");
            return params;
        }
        List<Map<String, Object>> sources = dataMapper.findAll(params);
        params.put("data", sources);
        int total = PageUtil.getTotalCount();
        params.put("total", -1 == total ? sources.size() : total);
        return params;
    }
}
