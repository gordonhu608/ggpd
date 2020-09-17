package com.inspur.ggpd.data.onemap.service.impl;

import com.inspur.ggpd.data.onemap.data.FeaturesEntity;
import com.inspur.ggpd.data.onemap.data.GeoJsonData;
import com.inspur.ggpd.data.onemap.data.GeometryEntity;
import com.inspur.ggpd.data.onemap.data.PropertiesEntity;
import com.inspur.ggpd.data.onemap.service.IAppleTradePriceService;
import com.inspur.ggpd.data.onemap.sjzydao.AppleTradePriceMapper;
import com.inspur.ggpd.util.DateUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class AppleTradePriceServiceImpl implements IAppleTradePriceService {

    @Resource
    AppleTradePriceMapper appleTradePriceMapper;

    /**
     * @Title: getAppleTradeMarketDistrictsPrice
     * @Description: 按地区获取批发市场价
     * @param: paramMap
     * @return: List
     * @date: 2020年8月8日
     */

    public List<Map<String, Object>> getAppleTradeMarketDistrictsPrice(Map<String, Object> paramMap) {
        processingDateParameters(paramMap);
        return appleTradePriceMapper.getAppleTradeMarketDistrictsPrice(paramMap);
    }

    /**
     * 处理查询的开始日期和结束日期
     *
     * @param paramMap
     */
    private void processingDateParameters(Map<String, Object> paramMap) {
        if (paramMap.get("dateType") != null && paramMap.get("dateType").toString().equals("2")) {
            // 周数据
            //获取本周最后一天的日期
            String weekEnd = DateUtils.getWeekEnd("yyyy-MM-dd");
            //查询是否有本周最后一天的价格数据，没有就获取上周的周数据
            paramMap.put("beginDate", weekEnd);
            paramMap.put("endDate", weekEnd + " 23:59:59");
            List<Map<String, Object>> list = appleTradePriceMapper.getAppleTradeMarketDistrictsPrice(paramMap);

            if (list != null && list.size() > 0) {
                //获取本周第一天的日期
                String beginDate = DateUtils.getWeekStart("yyyy-MM-dd");
                String endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
                paramMap.put("beginDate", beginDate);
                paramMap.put("endDate", endDate);
            } else {
                //获取上周第一天的日期
                String beginDate = DateUtils.getLastWeekStart("yyyy-MM-dd");
                String endDate = DateUtils.getLastWeekEnd("yyyy-MM-dd") + " 23:59:59";
                paramMap.put("beginDate", beginDate);
                paramMap.put("endDate", endDate);
            }
        } else if (paramMap.get("dateType") != null && paramMap.get("dateType").toString().equals("3")) {
            // 月数据
            String beginDate = DateUtils.getMonthStart("yyyy-MM-dd");
            String endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
            paramMap.put("beginDate", beginDate);
            paramMap.put("endDate", endDate);
        } else if (paramMap.get("dateType") != null && paramMap.get("dateType").toString().equals("4")) {
            // 年数据
            String beginDate = new SimpleDateFormat("yyyy").format(new Date()) + "-01-01";
            String endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
            paramMap.put("beginDate", beginDate);
            paramMap.put("endDate", endDate);
        } else {
            String currentDate = appleTradePriceMapper.getCurrentDate();
            //日数据
            //String beginDate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
            //String endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
            String beginDate=currentDate;
            String endDate=currentDate+ " 23:59:59";
            paramMap.put("beginDate", beginDate);
            paramMap.put("endDate", endDate);
        }
    }


    /**
     * @Title: getAppleTradePriceTop
     * @Description: 获取苹果批发价排行
     * @param: paramMap
     * @return: List
     * @date: 2020年8月8日
     */
    public List<Map<String, Object>> getAppleTradePriceTop(Map<String, Object> paramMap) {
        processingDateParameters(paramMap);
        return appleTradePriceMapper.getAppleTradePriceTop(paramMap);
    }


    @Override
    public GeoJsonData getMarketAndPriceData(Map<String, Object> paramMap) {
        processingDateParameters(paramMap);
        List<PropertiesEntity> marketAndPrice = appleTradePriceMapper.getMarketAndPrice(paramMap);
        GeoJsonData geoJsonData = new GeoJsonData();
        geoJsonData.setType("FeatureCollection");
        List<FeaturesEntity> featuresEntityList = new ArrayList<>();
        for (PropertiesEntity propertiesEntity : marketAndPrice) {
            FeaturesEntity featuresEntity = new FeaturesEntity();
            featuresEntity.setType("Feature");
            GeometryEntity geometryEntity = new GeometryEntity();
            geometryEntity.setType("Point");
            List<Double> doubleList = new ArrayList<>();
            doubleList.add(propertiesEntity.getJd());
            doubleList.add(propertiesEntity.getWd());
            geometryEntity.setCoordinates(doubleList);
            featuresEntity.setGeometry(geometryEntity);
            featuresEntity.setProperties(propertiesEntity);
            featuresEntityList.add(featuresEntity);
        }
        geoJsonData.setFeatures(featuresEntityList);
        return geoJsonData;
    }
}
