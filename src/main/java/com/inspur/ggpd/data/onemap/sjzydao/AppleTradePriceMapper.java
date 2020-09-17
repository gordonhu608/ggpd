package com.inspur.ggpd.data.onemap.sjzydao;

import com.inspur.ggpd.data.onemap.data.PropertiesEntity;

import java.util.List;
import java.util.Map;

public interface AppleTradePriceMapper {
	 
    
    /**
     * @Title: getAppleTradeMarketPrice
     * @Description: 获取苹果批发价格(日度)
     * @param: paramMap
     * @return: List
     * @date: 2020年7月14日
     */
    List<Map<String, Object>> getDayAppleTradeMarketPrice(Map<String, Object> paramMap);
    /**
     * @Title: getAppleTradeMarketDistrictsPrice
     * @Description:  按地区获取批发市场价
     * @param: paramMap
     * @return: List
     * @date: 2020年8月8日
     */
    List<Map<String, Object>>  getAppleTradeMarketDistrictsPrice(Map<String, Object> paramMap);
    
    /**
     * @Title: getMonthAppleTradeMarketPrice
     * @Description: 获取苹果批发价格(月度)
     * @param: paramMap
     * @return: List
     * @date: 2020年7月16日
     */
    List<Map<String, Object>> getMonthAppleTradeMarketPrice(Map<String, Object> paramMap);
    /**
     * @Title: getWeekAppleTradeMarketPrice
     * @Description: 获取苹果批发价格(月度)
     * @param: paramMap
     * @return: List
     * @date: 2020年7月17日
     */
    List<Map<String, Object>> getWeekAppleTradeMarketPrice(Map<String, Object> paramMap);
    
    /**
     * @Title: getAppleTradeMarketPrice
     * @Description: 获取苹果批发价格(年度)
     * @param: paramMap
     * @return: List
     * @date: 2020年7月17日
     */
    List<Map<String, Object>> getYearAppleTradeMarketPrice(Map<String, Object> paramMap);

    /**
     * @Title: getAppleTradePriceTop
     * @Description: 获取苹果批发价格top10
     * @param: paramMap
     * @return: List
     * @date: 2020年7月14日
     */
    List<Map<String, Object>> getAppleTradePriceTop(Map<String, Object> paramMap);

    /**
     * 获取批发市场及价格数据
     * @return
     */
    List<PropertiesEntity> getMarketAndPrice(Map<String, Object> paramMap);

    /**
     * 获取最近的有数据的日期
     * @return
     */
    String getCurrentDate();
}
