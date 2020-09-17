package com.inspur.ggpd.homePage.controller;

import com.inspur.ggpd.homePage.service.IHomePageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

@Controller
@RequestMapping({"/homePage"})
public class HomePageController {

    @Resource
    private IHomePageService homePageService;

    /**
     * @Title: getApplePlantAreaAndYield
     * @Description: 获取种植面积、产量
     * @param: paramMap
     * @return: Map
     * @date: 2020年08月17日
     */
    @RequestMapping({"/getApplePlantAreaAndYield"})
    @ResponseBody
    public List<Map<String, Object>> getApplePlantAreaAndYield(Map<String, Object> param) {
        return homePageService.getApplePlantAreaAndYield(param);
    }

    /**
     * @Title: getPlantingDistributionList
     * @Description: 苹果生产分布（种植面积）
     * @param: paramMap
     * @return: List
     * @date: 2020年08月18日
     */
    @RequestMapping({"/getPlantingDistributionList"})
    @ResponseBody
    public List<Map<String, Object>> getPlantingDistributionList(Map<String, Object> paramMap) {
        return homePageService.getPlantingDistributionList(paramMap);
    }

    /**
     * @Title: getYieldDistributionList
     * @Description: 苹果生产分布（产量）
     * @param: paramMap
     * @return: List
     * @date: 2020年09月12日
     */
    @RequestMapping({"/getYieldDistributionList"})
    @ResponseBody
    public List<Map<String, Object>> getYieldDistributionList(Map<String, Object> paramMap) {
        return homePageService.getYieldDistributionList(paramMap);
    }

    /**
     * @Title: getCostBenefit
     * @Description: 获取成本收益
     * @param: paramMap
     * @return: List
     * @date: 2020年8月17日
     */
    @RequestMapping({"/getCostBenefit"})
    @ResponseBody
    public List<Map<String, Object>> getCostBenefit(@RequestBody Map<String,Object> paramMap) {
        return homePageService.getCostBenefit(paramMap);
    }

    /**
     * @Title: getTradeFlowList
     * @Description: 获取全国苹果贸易流向数据列表
     * @param: paramMap
     * @return: List<Map<String, Object>>
     * @date: 2020年8月18日
     */
    @RequestMapping({"/getTradeFlowList"})
    @ResponseBody
    public List<Map<String, Object>> getTradeFlowList(@RequestBody Map<String,Object> paramMap) {
        return homePageService.getTradeFlowList(paramMap);
    }

    /**
     * @Title: getPriceDistribution
     * @Description: 价格分布（批发市场-富士苹果）
     * @param: paramMap
     * @return: List
     * @date: 2020年08月18日
     */
    @RequestMapping({"/getPriceDistribution"})
    @ResponseBody
    public List<Map<String, Object>> getPriceDistribution(Map<String, Object> paramMap) {
        return homePageService.getPriceDistribution(paramMap);
    }

    /**
     * @Title: queryBjPrice
     * @Description: 查询北京价格
     * @return: List
     * @date: 2020年8月17日
     */
    @GetMapping("/queryBjPrice")
    @ResponseBody
    public List<Map<String, Object>> queryBjPrice() {
        return homePageService.queryPrice("北京");
    }

    /**
     * @Title: queryGzPrice
     * @Description: 查询广州价格
     * @return: List
     * @date: 2020年8月17日
     */
    @GetMapping("/queryGzPrice")
    @ResponseBody
    public List<Map<String, Object>> queryGzPrice() {
        return homePageService.queryPrice("广州");
    }

    /**
     * @Title: queryOriginalPrice
     * @Description: 查询田头价格
     * @param: paramMap
     * @return: List
     * @date: 2020年8月17日
     */
    @GetMapping("/queryOriginalPrice")
    @ResponseBody
    public List<Map<String, Object>> queryOriginalPrice() {
        return homePageService.queryOriginalPrice();
    }

    /**
     * @Title: queryShPrice
     * @Description: 查询上海价格
     * @return: List
     * @date: 2020年8月17日
     */
    @GetMapping("/queryShPrice")
    @ResponseBody
    public List<Map<String, Object>> queryShPrice() {
        return homePageService.queryPrice("上海");
    }

    /**
     * @Title: queryCurrentIndex
     * @Description: 查询最新指数
     * @return: List
     * @date: 2020年8月17日
     */
    @GetMapping("/queryCurrentIndex")
    @ResponseBody
    public List<Map<String, Object>> queryCurrentIndex() {
        return homePageService.queryCurrentIndex();
    }

    /**
     * @Title: getCostBenefit
     * @Description: 查询指数
     * @return: List
     * @date: 2020年8月18日
     */
    @GetMapping("/queryIndex")
    @ResponseBody
    public List<Map<String, Object>> queryIndex() {
        return homePageService.queryIndex();
    }
}
