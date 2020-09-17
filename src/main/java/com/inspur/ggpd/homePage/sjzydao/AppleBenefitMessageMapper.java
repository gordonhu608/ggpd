package com.inspur.ggpd.homePage.sjzydao;

import java.util.List;
import java.util.Map;

public interface AppleBenefitMessageMapper{

    /**
     * @Title: getCostBenefit
     * @Description: 获取成本收益
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getAppleBenefitMessage(Map<String, Object> paramMap);

    /**
     * @Title: getNationwideTotalCostAndLaborCostByUnitPlanting
     * @Description: 获取单位面积全国总成本与人工成本
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getNationwideTotalCostAndLaborCostByUnitPlanting(Map<String, Object> paramMap);

    /**
     * @Title: getNationwideTotalCostAndLaborCostByUnitProduct
     * @Description: 获取单位产品全国总成本与人工成本
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getNationwideTotalCostAndLaborCostByUnitProduct(Map<String, Object> paramMap);

    /**
     * @Description: 获取人工成本-单位面积
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getAppleLoborMessage(Map<String, Object> paramMap);

    /**
     * @Description: 获取人工成本-单位产量
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getAppleLoborPerKGMessage(Map<String, Object> paramMap);

    /**
     * @Description: 获取土地成本-单位面积
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getAppleLandMessage(Map<String, Object> paramMap);

    /**
     * @Description: 获取总土地成本-单位面积
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getAppleSumLandMessage(Map<String, Object> paramMap);

    /**
     * @Description: 获取土地成本-单位产量
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getAppleLandPerKGMessage(Map<String, Object> paramMap);

    /**
     * @Description: 获取总土地成本-单位产量
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月2日
     */
    List<Map<String, Object>> getAppleSumLandPerKGMessage(Map<String, Object> paramMap);

    /**
     * @Description: 获取服务与服务费用-单位面积
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月7日
     */
    List<Map<String, Object>> getAppleCostMessage(Map<String, Object> paramMap);

    /**
     * @Description: 获取服务与服务费用-单位产量
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月7日
     */
    List<Map<String, Object>> getAppleCostPerKGMessage(Map<String, Object> paramMap);

    /**
     * @Description: 获取物质与服务费用-化肥用量
     * @param: paramMap
     * @return: Map
     * @date: 2020年7月7日
     */
    List<Map<String, Object>> getAppleFertilizerMessage(Map<String, Object> paramMap);
}
