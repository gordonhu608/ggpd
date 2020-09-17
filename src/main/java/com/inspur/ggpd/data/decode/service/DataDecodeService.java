package com.inspur.ggpd.data.decode.service;

import com.inspur.ggpd.data.decode.data.*;

import java.util.List;
import java.util.Map;

/**
 * Title:数据解读
 * Copyright: Copyright (c)
 * Company:
 * Description:DataDecode Service层
 *
 * @date 2020-08-22 11:36:56 中国标准时间
 */
public interface DataDecodeService {
    /**
     * 根据数据类型与关键字查询数据解读
     */
    Map<String, Object> getDataDecodesByDataTypeAndKeyword(Map<String, Object> params);

    /**
     * 返回所有的 数据解读类型
     */
    List<Map<String, Object>> getAllDataType();

    /**
     * 获取解读数据
     */
    String get(String id);

    /**
     * 根据模板获取解读文本内容
     *
     * @param dataMap
     * @param decodeTemplate
     * @return
     */
    String getProductDecodeText(Map<String, Object> dataMap, DataDecodeTemplate decodeTemplate);

    /**
     * 新增一个生产解读数据
     *
     * @param productDecode 生产解读对象
     * @param dataType      数据类型
     * @param text          文本数据
     * @return
     */
    Boolean insertProductDecode(ProductDecode productDecode, DataType dataType, String text);

    /**
     * 生成生产解读Echarts数据
     *
     * @param productDecodeTableDataByYear
     */
    ProductDecodeChart getProductDecodeChart(List<ProductDecodeTable> productDecodeTableDataByYear);

    /**
     * 生成生产解读文本数据
     *
     * @return
     */
    ProductDecodeText getProductDecodeText(int year);

    /**
     * 生成生产解读表格数据
     *
     * @return
     */
    List<ProductDecodeTable> getProductDecodeTables(String year);

    /**
     * 生成生产解读
     *
     * @param year
     * @return
     */
    Boolean generateProductDecode(Integer year);

    /**
     * 生成贸易解读
     *
     * @param year
     * @return
     */
    Boolean generateTradeDecode(Integer year);

    /**
     * 获取贸易解读数据
     */
    DataDecode getTradeData(String id);

    /**
     * 生成贸易解读
     * @param time
     * @return
     */
    Boolean generatePriceDecode(Integer time);
}
