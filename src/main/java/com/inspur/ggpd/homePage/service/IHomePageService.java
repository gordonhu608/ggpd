package com.inspur.ggpd.homePage.service;

import java.util.List;
import java.util.Map;

public interface IHomePageService {
    /**
     * @Title: getPriceDistribution
     * @Description: 价格分布（批发市场-富士苹果）
     * @param: paramMap
     * @return: List
     * @date: 2020年08月18日
     */
    List<Map<String, Object>> getPriceDistribution(Map<String, Object> paramMap);

    /**
     * @Title: getApplePlantAreaAndYield
     * @Description: 获取种植面积、产量
     * @param: paramMap
     * @return: Map
     * @date: 2020年08月17日
     */
    List<Map<String, Object>> getApplePlantAreaAndYield(Map<String, Object> param);

    /**
     * @Title: getPlantingDistributionList
     * @Description: 苹果生产分布（种植面积）
     * @param: paramMap
     * @return: List
     * @date: 2020年08月18日
     */
    List<Map<String, Object>> getPlantingDistributionList(Map<String, Object> paramMap);

    /**
     * @Title: getCostBenefit
     * @Description: 获取成本收益
     * @param: paramMap
     * @return: Map
     * @date: 2020年8月17日
     */
    List<Map<String, Object>> getCostBenefit(Map<String, Object> paramMap);
    List<Map<String, Object>> queryOriginalPrice();

    List<Map<String, Object>> queryPrice(String city);

    List<Map<String, Object>> queryCurrentIndex();

    List<Map<String, Object>> queryIndex();

    /**
     * @Title: getTradeFlowList
     * @Description: 获取全国苹果贸易流向数据列表
     * @param: paramMap
     * @return: List<Map<String, Object>>
     * @date: 2020年8月18日
     */
    List<Map<String, Object>> getTradeFlowList(Map<String, Object> paramMap);

    /**
     * @Title: getYieldDistributionList
     * @Description: 苹果生产分布（产量）
     * @param: paramMap
     * @return: List
     * @date: 2020年09月12日
     */
    List<Map<String, Object>> getYieldDistributionList(Map<String, Object> paramMap);
}
