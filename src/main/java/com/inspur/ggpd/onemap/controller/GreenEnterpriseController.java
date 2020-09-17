package com.inspur.ggpd.onemap.controller;

import com.inspur.ggpd.onemap.service.impl.GreenEnterpriseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * @author zhengyunshuo
 * @date 2020/9/2 - 12:02
 */
@Controller
@RequestMapping({"/greenEnterprise"})
public class GreenEnterpriseController {

    @Autowired
    private GreenEnterpriseServiceImpl greenEnterpriseService;

    /**
     * @param paramMap
     * @Description: 查询合作社与绿色企业信息
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/getGreenEnterpriseData"})
    @ResponseBody
    public List<Map<String,Object>> getGreenEnterpriseData(@RequestBody Map<String,Object> paramMap){
        return greenEnterpriseService.getGreenEnterpriseData(paramMap);
    }

    /**
     * @param paramMap
     * @Description: 查询进出口贸易流向信息
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/getTradeFlowData"})
    @ResponseBody
    public List<Map<String,Object>> getTradeFlowData(@RequestBody Map<String,Object> paramMap){
        return greenEnterpriseService.getTradeFlowData(paramMap);
    }

    /**
     * @param paramMap
     * @Description: 查询进出口贸易流向信息
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/getTradeFlowMessage"})
    @ResponseBody
    public List<Map<String,Object>> getTradeFlowMessage(@RequestBody Map<String,Object> paramMap){
        return greenEnterpriseService.getTradeFlowData(paramMap);
    }

}
