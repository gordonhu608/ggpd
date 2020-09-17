package com.inspur.ggpd.resource.catalog.service;

import com.inspur.ggpd.resource.catalog.data.SourceSearchConfig;

/**
 * Title:资源搜索配置表
 * Copyright: Copyright (c)
 * Company:
 * Description:SourceSearchConfig Service层
 *
 * @date 2020-07-31 14:45:27 中国标准时间
 */
public interface SourceSearchConfigService {
    /**
     * @Title: getByTableCode
     * @Description: 获取资源搜索配置
     * @param: tableCode 资源表Code
     * @return: SourceSearchConfig
     * @date: 2020年8月1日
     */
    SourceSearchConfig getByTableCode(String tableCode);
}
