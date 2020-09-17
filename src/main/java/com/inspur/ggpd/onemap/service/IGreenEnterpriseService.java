package com.inspur.ggpd.onemap.service;

import java.util.List;
import java.util.Map;

/**
 * @author zhengyunshuo
 * @date 2020/9/2 - 11:59
 */
public interface IGreenEnterpriseService {

    /**
     * @Description: 查询合作社与绿色企业信息
     * @param: paramMap
     * @return: Map
     */
    List<Map<String,Object>> getGreenEnterpriseData(Map<String, Object> paramMap);

    /**
     * @Description: 查询进出口贸易流向信息
     * @param: paramMap
     * @return: Map
     */
    List<Map<String,Object>> getTradeFlowData(Map<String, Object> paramMap);
}
