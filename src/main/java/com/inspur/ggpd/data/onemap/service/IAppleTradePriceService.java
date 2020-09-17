package com.inspur.ggpd.data.onemap.service;

import com.inspur.ggpd.data.onemap.data.GeoJsonData;

import java.util.List;
import java.util.Map;

public interface IAppleTradePriceService {

    /**
     * @Title: getAppleTradePriceTop
     * @Description: 获取苹果批发价排行
     * @param: paramMap
     * @return: List
     * @date: 2020年8月8日
     */
    List<Map<String, Object>> getAppleTradePriceTop(Map<String, Object> paramMap);

    /**
     * @Title: getAppleTradeMarketDistrictsPrice
     * @Description: 按地区获取批发市场价
     * @param: paramMap
     * @return: List
     * @date: 2020年8月8日
     */

    List<Map<String, Object>> getAppleTradeMarketDistrictsPrice(Map<String, Object> paramMap);

    /**
     * 获取批发价格和坐标信息
     * @return
     */
    GeoJsonData getMarketAndPriceData(Map<String, Object> paramMap);

}
