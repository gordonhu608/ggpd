package com.inspur.ggpd.resource.catalog.sjzydao;

import com.inspur.ggpd.priceIndices.data.PriceIndices;
import org.apache.ibatis.annotations.Param;
import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;
import java.util.Map;

/**
 * @author zhengyunshuo
 * @date 2020/8/13 - 15:24
 */
public interface PriceIndicesMapper extends EntityMapper<PriceIndices> {

    /**
     * @Title: getPriceDistribution
     * @Description: 价格分布（批发市场-富士苹果）
     * @param: paramMap
     * @return: List
     * @date: 2020年08月18日
     */
    List<Map<String, Object>> getPriceDistribution(Map<String, Object> paramMap);

    /**
     * @Description: 查询旬均价
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> getAvgByTenDay(Map<String, Object> paramMap);

    /**
     * @Description: 查询旬均价
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> getAvgByMonth(Map<String, Object> paramMap);

    /**
     * @Description: 查询旬均价
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

    /**
     * @Description: 查询田头价格
     * @return: Map
     */
    List<Map<String, Object>> queryOriginalPrice();

    /**
     * @Description: 查询旬均价
     * @param: city
     * @return: Map
     */
    List<Map<String, Object>> queryPrice(@Param("city") String city);

    /**
     * @Description: 查询指数
     * @return: Map
     */
    List<Map<String, Object>> queryIndex();

    /**
     * @Description: 获取价格解读数据
     * @param: paramMap
     * @return: Map
     */
    Map<String,Object> getPriceDecode(Map<String, Object> paramMap);

    /**
     * @Description: 获取价格解读echarts数据
     * @param: paramMap
     * @return: Map
     */
    List<Map<String, Object>> getPriceDecodeChart(Map<String, Object> paramMap);
    List<Map<String, Object>> currentTwoHundredIndexByMonth();
}
