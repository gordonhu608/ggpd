package com.inspur.ggpd.data.onemap.service;

import com.inspur.ggpd.data.onemap.data.WisdomOrchardData;

import java.util.Map;

public interface IWisdomOrchardService {
    /**
     * 功能描述: 获取所有智慧果园相关geojson信息
     *
     * @Title getWisdomOrchardData
     * @param
     * @return WisdomOrchardData
     */
    WisdomOrchardData getWisdomOrchardData();

    /**
     * 功能描述: 根据果园编号查询智慧果园气象和熵情情数据
     *
     * @Title getWisdomOrchardDataByGYBH
     * @param map
     * @return Map<String, Object>
     */
    Map<String, Object> getWisdomOrchardDataByGYBH(Map<String, Object> map);
}
