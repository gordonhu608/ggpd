package com.inspur.ggpd.priceIndices.service.impl;

import com.inspur.ggpd.resource.catalog.sjzydao.PriceIndicesMapper;
import com.inspur.ggpd.priceIndices.service.IPriceIndicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author zhengyunshuo
 * @date 2020/8/13 - 15:27
 */
@Service
public class PriceIndicesServiceImpl implements IPriceIndicesService {

    @Autowired
    private PriceIndicesMapper priceIndicesMapper;

    /**
     * @param: paramMap
     * @Description: 查询旬均价
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> getAvgByTenDay(Map<String, Object> paramMap) {
        return priceIndicesMapper.getAvgByTenDay(paramMap);
    }

    /**
     * @param: paramMap
     * @Description: 查询旬均价
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> getAvgByMonth(Map<String, Object> paramMap) {
        return priceIndicesMapper.getAvgByMonth(paramMap);
    }

    /**
     * @param: paramMap
     * @Description: 查询旬均价
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> getAvgByYear(Map<String, Object> paramMap) {
        return priceIndicesMapper.getAvgByYear(paramMap);
    }

    /**
     * @param: paramMap
     * @Description: 查询进出口信息
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> getImportAndExportMessage(Map<String, Object> paramMap) {
        return priceIndicesMapper.getImportAndExportMessage(paramMap);
    }

    /**
     * @param paramMap
     * @Description: 查询进出口信息-苹果汁(三种苹果汁相加)
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> getAppleJuiceImportAndExportMessage(Map<String, Object> paramMap) {
        return priceIndicesMapper.getAppleJuiceImportAndExportMessage(paramMap);
    }

    /**
     * @Description: 查询200指数日度数据
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> twoHundredIndexByDay() {
        return priceIndicesMapper.twoHundredIndexByDay();
    }

    /**
     * @Description: 查询200指数周度数据
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> twoHundredIndexByWeek() {
        return priceIndicesMapper.twoHundredIndexByWeek();
    }

    /**
     * @Description: 查询200指数月度数据
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> twoHundredIndexByMonth() {
        return priceIndicesMapper.twoHundredIndexByMonth();
    }

    /**
     * @param: paramMap
     * @Description: 查询最新两百指数信息
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> currentTwoHundredIndexByDay(Map<String, Object> paramMap) {
        return priceIndicesMapper.currentTwoHundredIndexByDay(paramMap);
    }

    /**
     * @param: paramMap
     * @Description: 查询最新运城指数信息
     * @param: paramMap
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> currentYunChengIndexByDay(Map<String, Object> paramMap) {
        return priceIndicesMapper.currentYunChengIndexByDay(paramMap);
    }

    /**
     * @Description: 查询运城指数日度数据
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> yunChengIndexByDay() {
        return priceIndicesMapper.yunChengIndexByDay();
    }

    /**
     * @Description: 查询运城指数周度数据
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> yunChengIndexByWeek() {
        return priceIndicesMapper.yunChengIndexByWeek();
    }

    /**
     * @Description: 查询运城指数月度数据
     * @return: Map
     */
    @Override
    public List<Map<String, Object>> yunChengIndexByMonth() {
        return priceIndicesMapper.yunChengIndexByMonth();
    }
}
