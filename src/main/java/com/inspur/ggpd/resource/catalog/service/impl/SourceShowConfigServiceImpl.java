package com.inspur.ggpd.resource.catalog.service.impl;

import com.inspur.ggpd.resource.catalog.dao.SourceShowConfigMapper;
import com.inspur.ggpd.resource.catalog.data.SourceShowConfig;
import com.inspur.ggpd.resource.catalog.service.SourceShowConfigService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Title:资源显示配置表
 * Copyright: Copyright (c)
 * Company:
 * Description:SourceShowConfig Service实现层
 *
 * @date 2020-07-31 14:45:32 中国标准时间
 */
@Service
public class SourceShowConfigServiceImpl implements SourceShowConfigService {

    @Resource
    private SourceShowConfigMapper showConfigMapper;

    /**
     * @Title: findAll
     * @Description: 获取资源显示配置
     * @param: tableCode 资源表Code
     * @return: List<SourceShowConfig>
     * @date: 2020年8月1日
     */
    @Override
    public List<SourceShowConfig> findAll(String tableCode) {
        return showConfigMapper.findAll(tableCode);
    }
}
