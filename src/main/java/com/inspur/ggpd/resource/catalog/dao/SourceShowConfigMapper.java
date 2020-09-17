package com.inspur.ggpd.resource.catalog.dao;

import com.inspur.ggpd.resource.catalog.data.SourceShowConfig;
import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;

/**
 * Title:资源显示配置表
 * Copyright: Copyright (c)
 * Company:
 * Description:SourceShowConfigDao层 对应数据库的 资源显示配置表表
 *
 * @date 2020-07-31 14:45:32 中国标准时间
 */
public interface SourceShowConfigMapper extends EntityMapper<SourceShowConfig> {

    /**
     * @Title: findAll
     * @Description: 获取资源显示配置
     * @param: tableCode 资源表Code
     * @return: List<SourceShowConfig>
     * @date: 2020年8月1日
     */
    List<SourceShowConfig> findAll(String tableCode);

    List<SourceShowConfig> findAll_(String tableCode);
}
