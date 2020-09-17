package com.inspur.ggpd.homePage.service.impl;

import com.inspur.ggpd.homePage.service.IHomePageService;
import com.inspur.ggpd.homePage.sjzydao.AppleBenefitMessageMapper;
import com.inspur.ggpd.homePage.sjzydao.AppleTradeConditionMapper;
import com.inspur.ggpd.homePage.sjzydao.ProductionStatisticalInformationMapper;
import com.inspur.ggpd.resource.catalog.sjzydao.PriceIndicesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HomePageServiceImpl implements IHomePageService {

    @Resource
    private ProductionStatisticalInformationMapper productionStatisticalInformationMapper;

    @Resource
    private AppleBenefitMessageMapper appleBenefitMessageMapper;

    @Resource
    private AppleTradeConditionMapper appleTradeConditionMapper;

    @Resource
    private PriceIndicesMapper priceIndicesMapper;

    /**
     * @Title: getPriceDistribution
     * @Description: 价格分布（批发市场-富士苹果）
     * @param: paramMap
     * @return: List
     * @date: 2020年08月18日
     */
    @Override
    public List<Map<String, Object>> getPriceDistribution(Map<String, Object> paramMap) {
        return priceIndicesMapper.getPriceDistribution(paramMap);
    }

    /**
     * @Title: getApplePlantAreaAndYield
     * @Description: 获取种植面积、产量
     * @param: paramMap
     * @return: Map
     * @date: 2020年08月17日
     */
    @Override
    public List<Map<String, Object>> getApplePlantAreaAndYield(Map<String, Object> param) {
        return productionStatisticalInformationMapper.getApplePlantAreaAndYield(param);
    }

    /**
     * @Title: getPlantingDistributionList
     * @Description: 苹果生产分布（种植面积）
     * @param: paramMap
     * @return: List
     * @date: 2020年08月18日
     */
    @Override
    public List<Map<String, Object>> getPlantingDistributionList(Map<String, Object> paramMap) {
        return productionStatisticalInformationMapper.getPlantingDistributionList(paramMap);
    }

    /**
     * @Title: getCostBenefit
     * @Description: 获取成本收益
     * @param: paramMap
     * @return: Map
     * @date: 2020年8月17日
     */
    @Override
    public List<Map<String, Object>> getCostBenefit(Map<String, Object> paramMap) {
        return appleBenefitMessageMapper.getAppleBenefitMessage(paramMap);
    }

    /**
     * @Title: getTradeFlowList
     * @Description: 获取全国苹果贸易流向数据列表
     * @param: paramMap
     * @return: List<Map<String, Object>>
     * @date: 2020年8月18日
     */
    @Override
    public List<Map<String, Object>> getTradeFlowList(Map<String, Object> paramMap) {
        return appleTradeConditionMapper.getTradeFlowList(paramMap);
    }

    /**
     * @Title: getYieldDistributionList
     * @Description: 苹果生产分布（产量）
     * @param: paramMap
     * @return: List
     * @date: 2020年09月12日
     */
    @Override
    public List<Map<String, Object>> getYieldDistributionList(Map<String, Object> paramMap) {
        return productionStatisticalInformationMapper.getYieldDistributionList(paramMap);
    }

    @Override
    public List<Map<String, Object>> queryOriginalPrice() {
        return priceIndicesMapper.queryOriginalPrice();
    }

    @Override
    public List<Map<String, Object>> queryPrice(String city) {
        return priceIndicesMapper.queryPrice(city);
    }

    @Override
    public List<Map<String, Object>> queryCurrentIndex() {
        return priceIndicesMapper.currentTwoHundredIndexByMonth();
    }

    @Override
    public List<Map<String, Object>> queryIndex() {
        return priceIndicesMapper.queryIndex();
    }
}
