package com.inspur.ggpd.priceIndices.controller;

import com.inspur.ggpd.priceIndices.service.impl.PriceIndicesServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @author zhengyunshuo
 * @date 2020/8/13 - 15:23
 */
@Controller
@RequestMapping({"/priceIndices"})
public class PriceIndicesController {

    @Resource
    private PriceIndicesServiceImpl priceIndicesService;

    /**
     * @param: paramMap
     * @Description: 查询旬均价
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/getAvgByTenDay"})
    @ResponseBody
    public List<Map<String, Object>> getAvgByTenDay(@RequestBody Map<String, Object> paramMap) {
        List<Map<String, Object>> list = priceIndicesService.getAvgByTenDay(paramMap);
        return list;
    }

    /**
     * @param: paramMap
     * @Description: 查询月均价
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/getAvgByMonth"})
    @ResponseBody
    public List<Map<String, Object>> getAvgByMonth(@RequestBody Map<String, Object> paramMap) {
        return priceIndicesService.getAvgByMonth(paramMap);
    }

    /**
     * @param: paramMap
     * @Description: 查询年均价
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/getAvgByYear"})
    @ResponseBody
    public List<Map<String, Object>> getAvgByYear(@RequestBody Map<String, Object> paramMap) {
        return priceIndicesService.getAvgByYear(paramMap);
    }

    /**
     * @param: paramMap
     * @Description: 查询进出口信息
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/getImportAndExportMessage"})
    @ResponseBody
    public List<Map<String, Object>> getImportAndExportMessage(@RequestBody Map<String, Object> paramMap) {
        return priceIndicesService.getImportAndExportMessage(paramMap);
    }

    /**
     * @param: paramMap
     * @Description: 查询进出口信息-苹果汁(三种苹果汁相加)
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/getAppleJuiceImportAndExportMessage"})
    @ResponseBody
    public List<Map<String, Object>> getAppleJuiceImportAndExportMessage(@RequestBody Map<String, Object> paramMap) {
        return priceIndicesService.getAppleJuiceImportAndExportMessage(paramMap);
    }

    /**
     * @Description: 查询200指数日度数据
     * @return: Map
     */
    @GetMapping({"/twoHundredIndexByDay"})
    @ResponseBody
    public List<Map<String, Object>> twoHundredIndexByDay() {
        return priceIndicesService.twoHundredIndexByDay();
    }

    /**
     * @Description: 查询200指数周度数据
     * @return: Map
     */
    @GetMapping({"/twoHundredIndexByWeek"})
    @ResponseBody
    public List<Map<String, Object>> twoHundredIndexByWeek() {
        return priceIndicesService.twoHundredIndexByWeek();
    }

    /**
     * @Description: 查询200指数月度数据
     * @return: Map
     */
    @GetMapping({"/twoHundredIndexByMonth"})
    @ResponseBody
    public List<Map<String, Object>> twoHundredIndexByMonth() {
        return priceIndicesService.twoHundredIndexByMonth();
    }

    /**
     * @param: paramMap
     * @Description: 查询最新两百指数信息
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/currentTwoHundredIndexByDay"})
    @ResponseBody
    public List<Map<String, Object>> currentTwoHundredIndexByDay(@RequestBody Map<String, Object> paramMap) {
        return priceIndicesService.currentTwoHundredIndexByDay(paramMap);
    }

    /**
     * @param: paramMap
     * @Description: 查询最新运城指数信息
     * @param: paramMap
     * @return: Map
     */
    @RequestMapping({"/currentYunChengIndexByDay"})
    @ResponseBody
    public List<Map<String, Object>> currentYunChengIndexByDay(@RequestBody Map<String, Object> paramMap) {
        return priceIndicesService.currentYunChengIndexByDay(paramMap);
    }

    /**
     * @Description: 查询运城指数日度数据
     * @return: Map
     */
    @GetMapping({"/yunChengIndexByDay"})
    @ResponseBody
    public List<Map<String, Object>> yunChengIndexByDay() {
        return priceIndicesService.yunChengIndexByDay();
    }

    /**
     * @Description: 查询运城指数周度数据
     * @return: Map
     */
    @GetMapping({"/yunChengIndexByWeek"})
    @ResponseBody
    public List<Map<String, Object>> yunChengIndexByWeek() {
        return priceIndicesService.yunChengIndexByWeek();
    }

    /**
     * @Description: 查询运城指数月度数据
     * @return: Map
     */
    @GetMapping({"/yunChengIndexByMonth"})
    @ResponseBody
    public List<Map<String, Object>> yunChengIndexByMonth() {
        return priceIndicesService.yunChengIndexByMonth();
    }
}
