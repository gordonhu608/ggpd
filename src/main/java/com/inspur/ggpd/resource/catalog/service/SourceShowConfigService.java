package com.inspur.ggpd.resource.catalog.service;

import com.inspur.ggpd.resource.catalog.data.SourceShowConfig;

import java.util.List;
import java.util.Map;

/**
 * Title:资源显示配置表
 * Copyright: Copyright (c)
 * Company:
 * Description:SourceShowConfig Service层
 *
 * @date 2020-07-31 14:45:32 中国标准时间
 */
public interface SourceShowConfigService {
    /**
     * @Title: findAll
     * @Description: 获取资源显示配置
     * @param: tableCode 资源表Code
     * @return: List<SourceShowConfig>
     * @date: 2020年8月1日
     */
    List<SourceShowConfig> findAll(String tableCode);
}
