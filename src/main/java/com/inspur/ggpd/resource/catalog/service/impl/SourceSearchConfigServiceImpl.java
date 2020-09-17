package com.inspur.ggpd.resource.catalog.service.impl;

import com.inspur.ggpd.resource.catalog.dao.SourceSearchConfigMapper;
import com.inspur.ggpd.resource.catalog.data.SourceSearchConfig;
import com.inspur.ggpd.resource.catalog.service.SourceSearchConfigService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Title:资源搜索配置表
 * Copyright: Copyright (c)
 * Company:
 * Description:SourceSearchConfig Service实现层
 *
 * @date 2020-07-31 14:45:27 中国标准时间
 */
@Service
public class SourceSearchConfigServiceImpl implements SourceSearchConfigService {

    @Resource
    private SourceSearchConfigMapper searchConfigMapper;

    /**
     * @Title: getByTableCode
     * @Description: 获取资源搜索配置
     * @param: tableCode 资源表Code
     * @return: SourceSearchConfig
     * @date: 2020年8月1日
     */
    @Override
    public SourceSearchConfig getByTableCode(String tableCode) {
        return searchConfigMapper.getByTableCode(tableCode);
    }
}
