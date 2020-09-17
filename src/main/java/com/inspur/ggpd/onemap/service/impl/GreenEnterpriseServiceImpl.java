package com.inspur.ggpd.onemap.service.impl;

import com.inspur.ggpd.onemap.service.IGreenEnterpriseService;
import com.inspur.ggpd.onemap.sjzydao.GreenEnterpriseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author zhengyunshuo
 * @date 2020/9/2 - 12:00
 */
@Service
public class GreenEnterpriseServiceImpl implements IGreenEnterpriseService {

    @Autowired
    private GreenEnterpriseMapper greenEnterpriseMapper;


    /**
     * @param paramMap
     * @Description: 查询合作社与绿色企业信息
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> getGreenEnterpriseData(Map<String, Object> paramMap) {
        return greenEnterpriseMapper.getGreenEnterpriseData(paramMap);
    }

    /**
     * @param paramMap
     * @Description: 查询进出口贸易流向信息
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> getTradeFlowData(Map<String, Object> paramMap) {
        return greenEnterpriseMapper.getTradeFlowData(paramMap);
    }
}
