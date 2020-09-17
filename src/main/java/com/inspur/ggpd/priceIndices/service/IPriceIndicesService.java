package com.inspur.ggpd.priceIndices.service;

import java.util.List;
import java.util.Map;

/**
 * @author zhengyunshuo
 * @date 2020/8/13 - 15:27
 */
public interface IPriceIndicesService  {

    /**
     * @Description: 查询旬均价
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> getAvgByTenDay(Map<String, Object> paramMap);

    /**
     * @Description: 查询月均价
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> getAvgByMonth(Map<String, Object> paramMap);

    /**
     * @Description: 查询年均价
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> getAvgByYear(Map<String, Object> paramMap);

    /**
     * @Description: 查询进出口信息
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> getImportAndExportMessage(Map<String, Object> paramMap);

    /**
     * @Description: 查询进出口信息-苹果汁(三种苹果汁相加)
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> getAppleJuiceImportAndExportMessage(Map<String, Object> paramMap);

    /**
     * @Description: 查询200指数日度数据
     * @return: Map
     */
    List<Map<String, Object>> twoHundredIndexByDay();

    /**
     * @Description: 查询200指数周度数据
     * @return: Map
     */
    List<Map<String, Object>> twoHundredIndexByWeek();

    /**
     * @Description: 查询200指数月度数据
     * @return: Map
     */
    List<Map<String, Object>> twoHundredIndexByMonth();

    /**
     * @Description: 查询最新两百指数信息
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> currentTwoHundredIndexByDay(Map<String, Object> paramMap);

    /**
     * @Description: 查询最新运城指数信息
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> currentYunChengIndexByDay(Map<String, Object> paramMap);

    /**
     * @Description: 查询运城指数日度数据
     * @return: Map
     */
    List<Map<String, Object>> yunChengIndexByDay();

    /**
     * @Description: 查询运城指数周度数据
     * @return: Map
     */
    List<Map<String, Object>> yunChengIndexByWeek();

    /**
     * @Description: 查询运城指数月度数据
     * @return: Map
     */
    List<Map<String, Object>> yunChengIndexByMonth();
}
