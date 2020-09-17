package com.inspur.ggpd.data.onemap.controller;

import com.inspur.ggpd.data.onemap.service.IAppleTradePriceService;
import com.inspur.ggpd.util.PropertiesUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping({"/appleTradePrice"})
public class AppleTradePriceController {

    @Autowired
    IAppleTradePriceService appleTradePriceService;

    /**
     * @Title: getAppleTradePriceTop
     * @Description: 获取苹果期批发价格top
     * @param: paramMap
     * @return: List
     * @date: 2020年7月15日
     */
    @RequestMapping({"/getAppleTradePriceTop"})
    @ResponseBody
    List<Map<String, Object>> getAppleTradePriceTop(@RequestBody Map<String, Object> paramMap) {
        String fruitCode = PropertiesUtil.getValueByKey("GNJG_FSPGCODE");
        paramMap.put("fruitCode", fruitCode);
        return appleTradePriceService.getAppleTradePriceTop(paramMap);
    }


    /**
     * @Title: getAppleTradeMarketDistrictsPrice
     * @Description: 按地区获取批发市场价
     * @param: paramMap
     * @return: List
     * @date: 2020年8月8日
     */
    @RequestMapping({"/getAppleTradeMarketDistrictsPrice"})
    @ResponseBody
    public List<Map<String, Object>> getAppleTradeMarketDistrictsPrice(@RequestBody Map<String, Object> paramMap) {
        // 富士苹果
        String fruitCode = PropertiesUtil.getValueByKey("GNJG_FSPGCODE");

        paramMap.put("fruitCode", fruitCode);
        return appleTradePriceService.getAppleTradeMarketDistrictsPrice(paramMap);
    }

    /**
     * 获取批发市场及价格
     * @param
     * @return
     */
    @RequestMapping("/getMarketAndPriceData")
    @ResponseBody
    public Object getMarketAndPriceData(String dateType){
        Map<String, Object> paramMap=new HashMap<>();
        paramMap.put("dateType",dateType);
        String fruitCode = PropertiesUtil.getValueByKey("GNJG_FSPGCODE");
        paramMap.put("fruitCode", fruitCode);
        return appleTradePriceService.getMarketAndPriceData(paramMap);
    }


}
