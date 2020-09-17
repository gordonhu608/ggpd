package com.inspur.ggpd.homePage.sjzydao;

import java.util.List;
import java.util.Map;

public interface AppleTradeConditionMapper{
    /**
     * @Title: getAppleForeignTradeList
     * @Description: 苹果对外贸易
     * @param:
     * @return: List
     * @date: 2020年06月08日
     */
    /*List<Map<String,Object>> getAppleForeignTradeList();

    *//**
     * @Title: getAppleTradeScaleByYearList
     * @Description: 获取全国苹果贸易规模年度
     *
     * @param param
     * @return: List<Map<String,Object>>
     *//*
    List<Map<String, Object>> getAppleTradeScaleByYearList(Map<String, Object> param);

    *//**
     * @Title: getAppleTradeScaleByMonthList
     * @Description: 获取全国苹果贸易规模月度
     *
     * @param param
     * @return: List<Map<String,Object>>
     *//*
    List<Map<String, Object>> getAppleTradeScaleByMonthList(Map<String, Object> param);

    *//**
     * @Title: getAppleImportAndExportByYearList
     * @Description: 获取全国苹果进出口价格年度
     *
     * @param param
     * @return: List<Map<String,Object>>
     *//*
    List<Map<String, Object>> getAppleImportAndExportByYearList(Map<String, Object> param);

    *//**
     * @Title: getAppleImportAndExportByMonthList
     * @Description: 获取全国苹果进出口价格月度
     *
     * @param param
     * @return: List<Map<String,Object>>
     *//*
    List<Map<String, Object>> getAppleImportAndExportByMonthList(Map<String, Object> param);

    *//**
     * @Title: getTradeFlowTimeLine
     * @Description: 获取全国苹果贸易流向时间年度列表
     * @param: paramMap
     * @return: List<Map<String, Object>>
     * @date: 2020年7月16日
     *//*
    List<Map<String, Object>> getTradeFlowTimeLineByYearList(Map<String, Object> paramMap);

    *//**
     * @Title: getTradeFlowTimeLine
     * @Description: 获取全国苹果贸易流向时间月度列表
     * @param: paramMap
     * @return: List<Map<String, Object>>
     * @date: 2020年7月16日
     *//*
    List<Map<String, Object>> getTradeFlowTimeLineByMonthList(Map<String, Object> paramMap);*/

    /**
     * @Title: getTradeFlowList
     * @Description: 获取全国苹果贸易流向数据列表
     * @param: paramMap
     * @return: List<Map<String, Object>>
     * @date: 2020年7月17日
     */
    List<Map<String, Object>> getTradeFlowList(Map<String, Object> paramMap);

    /**
     * @Title: getAppleImportProductTradeTraitByProductID
     * @Description: 通过产品ID获取苹果出口产品贸易季节性特点
     * @param: paramMap
     * @return: List
     * @date: 2020年7月21日
     */
    /*List<Map<String, Object>> getAppleImportProductTradeTraitByProductId(Map<String, Object> paramMap);

    *//**
     * @Title: getAppleExportProductTradeTraitByProductId
     * @Description: 通过产品ID获取苹果出口产品贸易季节性特点
     * @param: paramMap
     * @return: List
     * @date: 2020年7月21日
     *//*
    List<Map<String, Object>> getAppleExportProductTradeTraitByProductId(Map<String, Object> paramMap);*/

    /**
     * @Title: getTradeDecodeAllApple
     * @Description: 贸易解读月度报告鲜苹果、苹果汁和苹果干出口量、进口量、出口额、进口额以及环比同比，累计出口量、进口量、出口额、进口额以及同比
     * @param: paramMap
     * @return: List
     * @date: 2020年8月28日
     */
    List<Map<String, Object>> getTradeDecodeAllApple(Map<String, Object> paramMap);

    /**
     * @Title: getTradeDecodeFreshAppleMajorImportAndExportProvinces
     * @Description: 月度贸易报告鲜苹果进口排名top2，出口排名top1
     * @param: paramMap
     * @return: Map
     * @date: 2020年8月28日
     */
    Map<String, Object> getTradeDecodeFreshAppleMajorImportAndExportProvinces(Map<String, Object> paramMap);

    /**
     * @Title: getTradeDecodeFreshAppleMajorImportAndExportCountry
     * @Description: 鲜苹果进口省份top2主要进口国家排名top1，出口省份top1主要出口国家排名top2
     * @param: paramMap
     * @return: Map
     * @date: 2020年8月28日
     */
    Map<String, Object> getTradeDecodeFreshAppleMajorImportAndExportCountry(Map<String, Object> paramMap);

    /**
     * @Title: getTradeDecodeChart
     * @Description: 获取贸易解读中echarts图表数据。
     * @param: paramMap
     * @return: Map
     * @date: 2020年8月29日
     */
    List<Map<String, Object>> getTradeDecodeChart(Map<String, Object> timeMap);
}
