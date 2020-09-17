package com.inspur.ggpd.homePage.sjzydao;


import java.util.List;
import java.util.Map;

public interface ProductionStatisticalInformationMapper {

    /**
     * @Title: getPlantingDistributionList
     * @Description: 苹果生产分布（种植面积）
     * @param: paramMap
     * @return: List
     * @date: 2020年08月18日
     */
    List<Map<String, Object>> getPlantingDistributionList(Map<String, Object> paramMap);

    /**
     * @Title: getProductionTrendList
     * @Description: 苹果产量趋势
     * @param:
     * @return: List
     * @date: 2020年06月03日
     *//*
    List<Map<String, Object>> getProductionTrendList();*/

    /**
     * @Title: getApplePlantAreaAndYield
     * @Description: 获取种植面积、产量
     * @param: paramMap
     * @return: Map
     * @date: 2020年08月17日
     */
    List<Map<String, Object>> getApplePlantAreaAndYield(Map<String, Object> param);

    /**
     * @Title: getYieldDistributionList
     * @Description: 苹果生产分布（产量）
     * @param: paramMap
     * @return: List
     * @date: 2020年09月12日
     */
    List<Map<String, Object>> getYieldDistributionList(Map<String, Object> paramMap);

    /**
     * @Title: getPlantingAreaAndYield
     * @Description: 通过产品ID获取种植面积、产量（降序排列）
     * @param: paramMap
     * @return: Map
     * @date: 2020年06月24日
     */
    /*List<Map<String, Object>> getApplePlantAreaAndYieldByProductIdDesc(Map<String, Object> param);

    *//**
     * @Title: getPlantingAreaAndYieldChange
     * @Description: 历史演变中全国苹果种植面积、产量增减幅
     * @param: paramMap
     * @return: Map
     * @date: 2020年06月28日
     *//*
    List<Map<String, Object>> getPlantingAreaAndYieldChange(Map<String, Object> paramMap);

    *//**
     * @Title: getPerUnitYieldChange
     * @Description: 历史演变中全国苹果单产增减幅
     * @param: paramMap
     * @return: Map
     * @date: 2020年06月30日
     *//*
    List<Map<String, Object>> getPerUnitYieldChange(Map<String, Object> paramMap);


    *//**
     * @Title: getTimeYearByProductId
     * @Description: 获取苹果种植面积及产量年份列表
     * @param: paramMap
     * @return: Map
     * @date: 2020年06月28日
     *//*
    List<Map<String, Object>> getTimeYearByProductId(Map<String, Object> paramMap);*/
}
