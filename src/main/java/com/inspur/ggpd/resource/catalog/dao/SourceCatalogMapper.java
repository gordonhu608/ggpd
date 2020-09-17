package com.inspur.ggpd.resource.catalog.dao;

import com.inspur.ggpd.resource.catalog.data.SourceCatalog;
import org.apache.ibatis.annotations.Param;
import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;

/**
 * Title:资源目录表
 * Copyright: Copyright (c)
 * Company:
 * Description:SourceCatalogDao层 对应数据库的 资源目录表表
 *
 * @date 2020-07-31 14:44:03 中国标准时间
 */
public interface SourceCatalogMapper extends EntityMapper<SourceCatalog> {

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
    List<String> queryTableCode(@Param("type") String type);
}
