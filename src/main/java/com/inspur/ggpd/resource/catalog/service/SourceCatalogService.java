package com.inspur.ggpd.resource.catalog.service;

import com.inspur.ggpd.resource.catalog.data.SourceCatalog;

import java.util.List;
import java.util.Map;

/**
* Title:资源目录表
* Copyright: Copyright (c)
* Company:
* Description:SourceCatalog Service层
* @date 2020-07-31 14:44:03 中国标准时间
*/
public interface SourceCatalogService {
    /**
     * @Title: click
     * @Description: 增加资源目录点击次数
     * @param: id 资源目录id
     * @return: Boolean
     * @date: 2020年8月24日
     */
    Boolean click(String id);

    /**
     * @Title: findAll
     * @Description: 获取资源目录
     * @param: type 资源类别
     * @return: List<SourceCatalog>
     * @date: 2020年7月31日
     */
    List<SourceCatalog> findAll(String type);

    /**
     * @Title: queryTableCode
     * @Description: 获取资源表
     * @param: type 资源类别
     * @return: List<String>
     * @date: 2020年8月13日
     */
    List<String> queryTableCode(String type);

    /**
     * @Title: queryList
     * @Description: 获取资源列表数据
     * @param: params
     * @return: Map<String ,  O bject>
     * @date: 2020年8月1日
     */
    Map<String, Object> queryList(Map<String, Object> params);

    /**
     * @Title: queryList
     * @Description: 获取资源列表数据
     * @param: params
     * @return: Map<String ,  O bject>
     * @date: 2020年8月1日
     */
    Map<String, Object> queryListForTreeNode(Map<String, Object> params);

}


