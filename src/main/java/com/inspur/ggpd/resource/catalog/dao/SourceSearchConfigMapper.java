package com.inspur.ggpd.resource.catalog.dao;

import com.inspur.ggpd.resource.catalog.data.SourceSearchConfig;
import org.loushang.framework.mybatis.mapper.EntityMapper;

/**
 * Title:资源搜索配置表
 * Copyright: Copyright (c)
 * Company:
 * Description:SourceSearchConfigDao层 对应数据库的 资源搜索配置表表
 *
 * @date 2020-07-31 14:45:27 中国标准时间
 */
public interface SourceSearchConfigMapper extends EntityMapper<SourceSearchConfig> {

    /**
     * @Title: getByTableCode
     * @Description: 获取资源搜索配置
     * @param: tableCode 资源表Code
     * @return: SourceSearchConfig
     * @date: 2020年8月1日
     */
    SourceSearchConfig getByTableCode(String tableCode);
}
