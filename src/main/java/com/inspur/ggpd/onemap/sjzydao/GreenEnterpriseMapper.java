package com.inspur.ggpd.onemap.sjzydao;

import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;
import java.util.Map;

/**
 * @author zhengyunshuo
 * @date 2020/9/1 - 21:36
 */
public interface GreenEnterpriseMapper extends EntityMapper<GreenEnterpriseMapper> {

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
