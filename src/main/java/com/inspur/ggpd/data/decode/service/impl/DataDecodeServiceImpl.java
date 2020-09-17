package com.inspur.ggpd.data.decode.service.impl;

import com.alibaba.fastjson.JSON;
import com.inspur.ggpd.data.decode.FreemarkerUtil;
import com.inspur.ggpd.data.decode.dao.DataDecodeMapper;
import com.inspur.ggpd.data.decode.data.*;
import com.inspur.ggpd.data.decode.service.DataDecodeService;
import com.inspur.ggpd.data.decode.sjzydao.ProductDecodeMapper;
import com.inspur.ggpd.homePage.sjzydao.AppleTradeConditionMapper;
import com.inspur.ggpd.resource.catalog.sjzydao.PriceIndicesMapper;
import com.inspur.ggpd.util.CommonUtil;
import com.inspur.ggpd.util.ConvertUtil;
import org.loushang.framework.mybatis.PageUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Title:数据解读
 * Copyright: Copyright (c)
 * Company:
 * Description:DataDecode Service实现层
 *
 * @author
 * @date 2020-08-22 11:36:56 中国标准时间
 */

@Service
public class DataDecodeServiceImpl implements DataDecodeService {
    @Resource
    private DataDecodeMapper decodeMapper;
    @Resource
    private FreemarkerUtil freemarkerUtil;
    @Resource
    private ProductDecodeMapper productDecodeMapper;
    @Resource
    private AppleTradeConditionMapper appleTradeConditionMapper;
    @Resource
    private PriceIndicesMapper priceIndicesMapper;

    @Override
    public Map<String, Object> getDataDecodesByDataTypeAndKeyword(Map<String, Object> params) {
        Map<String, Object> result = new HashMap<>();
        List<DataDecode> data = decodeMapper.getDataDecodesByDataTypeAndKeyword(params);
        result.put("data", data);
        int total = PageUtil.getTotalCount();
        result.put("total", -1 == total ? data.size() : total);
        return result;
    }

    @Override
    public List<Map<String, Object>> getAllDataType() {
        DataType[] dataTypes = DataType.values();
        List<Map<String, Object>> list = new ArrayList<>();
        try {
            for (DataType dataType : dataTypes) {
                Map<String, Object> map = new HashMap<>();
                String name = dataType.getName();
                map.put("name", name);
                map.put("type", dataType.getType());
                list.add(map);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return list;
    }

    @Override
    public String get(String id) {
        return decodeMapper.get(id).getJdsj();
    }

    @Override
    public String getProductDecodeText(Map<String, Object> dataMap, DataDecodeTemplate decodeTemplate) {
        return freemarkerUtil.getTextByTemplate(dataMap, decodeTemplate.getTemplateName(), decodeTemplate.getPath());
    }

    @Override
    public Boolean insertProductDecode(ProductDecode productDecode, DataType dataType, String text) {
        DataDecode dataDecode = new DataDecode();
        String bt = productDecode.getYear() + "年苹果生产相关数据解读";
        dataDecode.setBt(bt);
        dataDecode.setCjsj(CommonUtil.getCurrentDateTime());
        dataDecode.setFbsj(null);
        dataDecode.setGxsj(CommonUtil.getCurrentDateTime());
        dataDecode.setId(UUID.randomUUID().toString().replace("-", ""));
        dataDecode.setJdsj(JSON.toJSONString(productDecode));
        dataDecode.setLy("农业农村部信息中心");
        dataDecode.setNf(productDecode.getYear());
        dataDecode.setRq(CommonUtil.getCurrentDate());
        dataDecode.setSjlx(dataType.getType());
        dataDecode.setWbsj(text);
        dataDecode.setYf(null);
        return decodeMapper.insert(dataDecode) > 0;
    }


    /**
     * 生成解读Echarts数据
     *
     * @param productDecodeTableDataByYear
     */
    @Override
    public ProductDecodeChart getProductDecodeChart(List<ProductDecodeTable> productDecodeTableDataByYear) {
        ProductDecodeChart productDecodeChart = new ProductDecodeChart();
        List<String> province = new ArrayList<>();
        List<Double> cost = new ArrayList<>();
        List<Double> laborCost = new ArrayList<>();
        List<Double> expenses = new ArrayList<>();
        List<Double> laborProportion = new ArrayList<>();
        List<Double> expensesProportion = new ArrayList<>();
        for (ProductDecodeTable productDecodeTable : productDecodeTableDataByYear) {
            province.add(productDecodeTable.getProvince());
            cost.add(productDecodeTable.getCost());
            laborCost.add(productDecodeTable.getLaborCost());
            expenses.add(productDecodeTable.getExpenses());
            laborProportion.add(productDecodeTable.getLaborProportion());
            expensesProportion.add(productDecodeTable.getExpensesProportion());
        }
        productDecodeChart.setProvince(province);
        productDecodeChart.setCost(cost);
        productDecodeChart.setExpenses(expenses);
        productDecodeChart.setExpensesProportion(expensesProportion);
        productDecodeChart.setLaborCost(laborCost);
        productDecodeChart.setLaborProportion(laborProportion);
        return productDecodeChart;
    }

    @Override
    public ProductDecodeText getProductDecodeText(int year) {
        return productDecodeMapper.getProductDecodeTextDataByYear(year);
    }

    @Override
    public List<ProductDecodeTable> getProductDecodeTables(String year) {
        return productDecodeMapper.getProductDecodeTableDataByYear(year);
    }

    @Override
    public Boolean generateProductDecode(Integer year) {
        try {
            //先判断生产解读数据是否已经存在
            if (decodeMapper.getDataDecodeCountByTypeYearMonth(DataType.PRODUCT.getType(), String.valueOf(year), null) > 0) {
                throw new Exception(year + "年生产解读已存在！将不再生成" + year + "年生产解读");
            }
            //开始生成生产解读
            ProductDecode productDecode = new ProductDecode();
            List<ProductDecodeTable> productDecodeTableDataByYear = getProductDecodeTables(String.valueOf(year));
            if (productDecodeTableDataByYear == null || productDecodeTableDataByYear.size() == 0) {
                throw new Exception("没有获取到" + year + "年的生产数据，无法生成生产解读！");
            }
            ProductDecodeText productDecodeText = getProductDecodeText(year);
            productDecodeText.setYear(String.valueOf(year));
            productDecodeText.setLastYear(String.valueOf(year - 1));

            if (!CommonUtil.objAllPropertiesIsNotNull(productDecodeText)) {
                throw new Exception("productDecodeText 存在为空的属性，无法生成生产解读！" + productDecodeText.toString());
            }
            ProductDecodeChart productDecodeChart = getProductDecodeChart(productDecodeTableDataByYear);
            String text = getProductDecodeText(CommonUtil.objectToMap(productDecodeText), DataDecodeTemplate.PRODUCT);
            if (CommonUtil.isNull(text)) {
                throw new Exception("生产解读文本生成错误！");
            }
            productDecode.setChart(productDecodeChart);
            productDecode.setPublishDate("");
            productDecode.setTable(productDecodeTableDataByYear);
            productDecode.setText(productDecodeText);
            productDecode.setYear(String.valueOf(year));
            return insertProductDecode(productDecode, DataType.PRODUCT, text);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return false;
    }

    @Override
    public Boolean generateTradeDecode(Integer time) {
        try {
            String timeStr = String.valueOf(time);
            String year = timeStr.substring(0,4);
            String month = timeStr.substring(4);
            //先判断生产解读数据是否已经存在
            if (decodeMapper.getDataDecodeCountByTypeYearMonth(DataType.TRADE.getType(), year, month) > 0) {
                throw new Exception(year + "年"+ month +"月贸易解读已存在！将不再生成" + year + "年"+ month +"月贸易解读");
            }
            Map<String,Object> timeMap = new HashMap<>();
            timeMap.put("time",timeStr);
            //获取贸易解读相关数据
            List<Map<String, Object>> tradeDecodeChartList = appleTradeConditionMapper.getTradeDecodeChart(timeMap);
            List<Map<String, Object>> tradeDecodeAllAppleList = appleTradeConditionMapper.getTradeDecodeAllApple(timeMap);
            Map<String, Object> provincesMap = appleTradeConditionMapper.getTradeDecodeFreshAppleMajorImportAndExportProvinces(timeMap);
            Map<String, Object> countryMap = appleTradeConditionMapper.getTradeDecodeFreshAppleMajorImportAndExportCountry(timeMap);
            Map<String,Object> tradeDataMap = new HashMap<>();
            Map<String,Object> tradeJsonMap = new HashMap<>();
            Map<String,Object> tradeChartMap = new HashMap<>();
            List dateTime  = new ArrayList();
            List FreshApplesExportVolume  = new ArrayList();
            List FreshApplesImportVolume  = new ArrayList();
            List FreshApplesExportVolumeTB  = new ArrayList();
            List FreshApplesImportVolumeTB  = new ArrayList();
            List FreshApplesExportVolumeHB  = new ArrayList();
            List FreshApplesImportVolumeHB  = new ArrayList();
            List AppleJuiceExportVolume  = new ArrayList();
            List AppleJuiceImportVolume  = new ArrayList();
            List AppleJuiceExportVolumeTB  = new ArrayList();
            List AppleJuiceImportVolumeTB  = new ArrayList();
            List AppleJuiceExportVolumeHB  = new ArrayList();
            List AppleJuiceImportVolumeHB  = new ArrayList();
            List DrideAppleExportVolume  = new ArrayList();
            List DrideAppleImportVolume  = new ArrayList();
            List DrideAppleExportVolumeTB  = new ArrayList();
            List DrideAppleImportVolumeTB  = new ArrayList();
            List DrideAppleExportVolumeHB  = new ArrayList();
            List DrideAppleImportVolumeHB  = new ArrayList();
            /*贸易解读echarts图表数据*/
            for (Map<String,Object> chartDataMap :tradeDecodeChartList){
                if("08081000".equals(chartDataMap.get("CPID"))){
                    FreshApplesExportVolume.add(chartDataMap.get("DQCKSL"));
                    FreshApplesImportVolume.add(chartDataMap.get("DQJKSL"));
                    FreshApplesExportVolumeTB.add(chartDataMap.get("CKLTB"));
                    FreshApplesImportVolumeTB.add(chartDataMap.get("JKLTB"));
                    FreshApplesExportVolumeHB.add(chartDataMap.get("CKLHB"));
                    FreshApplesImportVolumeHB.add(chartDataMap.get("JKLHB"));
                }else if("08133000".equals(chartDataMap.get("CPID"))){
                    AppleJuiceExportVolume.add(chartDataMap.get("DQCKSL"));
                    AppleJuiceImportVolume.add(chartDataMap.get("DQJKSL"));
                    AppleJuiceExportVolumeTB.add(chartDataMap.get("CKLTB"));
                    AppleJuiceImportVolumeTB.add(chartDataMap.get("JKLTB"));
                    AppleJuiceExportVolumeHB.add(chartDataMap.get("CKLHB"));
                    AppleJuiceImportVolumeHB.add(chartDataMap.get("JKLHB"));
                }else if ("20097000".equals(chartDataMap.get("CPID"))){
                    DrideAppleExportVolume.add(chartDataMap.get("DQCKSL"));
                    DrideAppleImportVolume.add(chartDataMap.get("DQJKSL"));
                    DrideAppleExportVolumeTB.add(chartDataMap.get("CKLTB"));
                    DrideAppleImportVolumeTB.add(chartDataMap.get("JKLTB"));
                    DrideAppleExportVolumeHB.add(chartDataMap.get("CKLHB"));
                    DrideAppleImportVolumeHB.add(chartDataMap.get("JKLHB"));
                }
                dateTime.add(chartDataMap.get("RQ"));
            }
            tradeChartMap.put("dateTime",dateTime.stream().distinct().collect(Collectors.toList()));
            tradeChartMap.put("FreshApplesExportVolume",FreshApplesExportVolume);
            tradeChartMap.put("FreshApplesImportVolume",FreshApplesImportVolume);
            tradeChartMap.put("FreshApplesExportVolumeTB",FreshApplesExportVolumeTB);
            tradeChartMap.put("FreshApplesImportVolumeTB",FreshApplesImportVolumeTB);
            tradeChartMap.put("FreshApplesExportVolumeHB",FreshApplesExportVolumeHB);
            tradeChartMap.put("FreshApplesImportVolumeHB",FreshApplesImportVolumeHB);
            tradeChartMap.put("AppleJuiceExportVolume",AppleJuiceExportVolume);
            tradeChartMap.put("AppleJuiceImportVolume",AppleJuiceImportVolume);
            tradeChartMap.put("AppleJuiceExportVolumeTB",AppleJuiceExportVolumeTB);
            tradeChartMap.put("AppleJuiceImportVolumeTB",AppleJuiceImportVolumeTB);
            tradeChartMap.put("AppleJuiceExportVolumeHB",AppleJuiceExportVolumeHB);
            tradeChartMap.put("AppleJuiceImportVolumeHB",AppleJuiceImportVolumeHB);
            tradeChartMap.put("DrideAppleExportVolume",DrideAppleExportVolume);
            tradeChartMap.put("DrideAppleImportVolume",DrideAppleImportVolume);
            tradeChartMap.put("DrideAppleExportVolumeTB",DrideAppleExportVolumeTB);
            tradeChartMap.put("DrideAppleImportVolumeTB",DrideAppleImportVolumeTB);
            tradeChartMap.put("DrideAppleExportVolumeHB",DrideAppleExportVolumeHB);
            tradeChartMap.put("DrideAppleImportVolumeHB",DrideAppleImportVolumeHB);
            tradeDataMap.put("year",year);
            tradeDataMap.put("month",month);
            for (Map<String,Object> appleMap :tradeDecodeAllAppleList){
                if ("08081000".equals(appleMap.get("CPID"))){
                    tradeDataMap.put("XPGDQCKSL",String.format("%.2f", Double.parseDouble(appleMap.get("DQCKSL").toString())/10000));
                    tradeDataMap.put("XPGDQJKSL",String.format("%.2f", Double.parseDouble(appleMap.get("DQJKSL").toString())/10000));
                    tradeDataMap.put("XPGDQCKJEMY",String.format("%.2f", Double.parseDouble(appleMap.get("DQCKJEMY").toString())/10000));
                    tradeDataMap.put("XPGDQJKJEMY",String.format("%.2f", Double.parseDouble(appleMap.get("DQJKJEMY").toString())/10000));
                    tradeDataMap.put("XPGYZDYCKSL",String.format("%.2f", Double.parseDouble(appleMap.get("YZDYCKSL").toString())/10000));
                    tradeDataMap.put("XPGYZDYCKJEMY",String.format("%.2f", Double.parseDouble(appleMap.get("YZDYCKJEMY").toString())/10000));
                    tradeDataMap.put("XPGYZDQJKSL",String.format("%.2f", Double.parseDouble(appleMap.get("YZDQJKSL").toString())/10000));
                    tradeDataMap.put("XPGYZDQJKJEMY",String.format("%.2f", Double.parseDouble(appleMap.get("YZDQJKJEMY").toString())/10000));
                    tradeDataMap.put("XPGCKLTB",ConvertUtil.getConverData(appleMap.get("CKLTB").toString()));
                    tradeDataMap.put("XPGJKLTB",ConvertUtil.getConverData(appleMap.get("JKLTB").toString()));
                    tradeDataMap.put("XPGCKETB",ConvertUtil.getConverData(appleMap.get("CKETB").toString()));
                    tradeDataMap.put("XPGJKETB",ConvertUtil.getConverData(appleMap.get("JKETB").toString()));
                    tradeDataMap.put("XPGCKLHB",ConvertUtil.getConverData(appleMap.get("CKLHB").toString()));
                    tradeDataMap.put("XPGJKLHB",ConvertUtil.getConverData(appleMap.get("JKLHB").toString()));
                    tradeDataMap.put("XPGCKEHB",ConvertUtil.getConverData(appleMap.get("CKEHB").toString()));
                    tradeDataMap.put("XPGJKEHB",ConvertUtil.getConverData(appleMap.get("JKEHB").toString()));
                    tradeDataMap.put("XPGYZDYCKSLTB",ConvertUtil.getConverData(appleMap.get("YZDYCKSLTB").toString()));
                    tradeDataMap.put("XPGYZDQJKSLTB",ConvertUtil.getConverData(appleMap.get("YZDQJKSLTB").toString()));
                    tradeDataMap.put("XPGYZDYCKJEMYTB",ConvertUtil.getConverData(appleMap.get("YZDYCKJEMYTB").toString()));
                    tradeDataMap.put("XPGYZDQJKJEMYTB",ConvertUtil.getConverData(appleMap.get("YZDQJKJEMYTB").toString()));
                }else if("08133000".equals(appleMap.get("CPID"))){
                    tradeDataMap.put("PGGDQCKSL",appleMap.get("DQCKSL"));
                    tradeDataMap.put("PGGDQJKSL",appleMap.get("DQJKSL"));
                    tradeDataMap.put("PGGDQCKJEMY",appleMap.get("DQCKJEMY"));
                    tradeDataMap.put("PGGDQJKJEMY",appleMap.get("DQJKJEMY"));
                    tradeDataMap.put("PGGYZDYCKSL",appleMap.get("YZDYCKSL"));
                    tradeDataMap.put("PGGYZDYCKJEMY",appleMap.get("YZDYCKJEMY"));
                    tradeDataMap.put("PGGYZDQJKSL",appleMap.get("YZDQJKSL"));
                    tradeDataMap.put("PGGYZDQJKJEMY",appleMap.get("YZDQJKJEMY"));
                    tradeDataMap.put("PGGCKLTB",ConvertUtil.getConverData(appleMap.get("CKLTB").toString()));
                    tradeDataMap.put("PGGJKLTB",ConvertUtil.getConverData(appleMap.get("JKLTB").toString()));
                    tradeDataMap.put("PGGCKETB",ConvertUtil.getConverData(appleMap.get("CKETB").toString()));
                    tradeDataMap.put("PGGJKETB",ConvertUtil.getConverData(appleMap.get("JKETB").toString()));
                    tradeDataMap.put("PGGCKLHB",ConvertUtil.getConverData(appleMap.get("CKLHB").toString()));
                    tradeDataMap.put("PGGJKLHB",ConvertUtil.getConverData(appleMap.get("JKLHB").toString()));
                    tradeDataMap.put("PGGCKEHB",ConvertUtil.getConverData(appleMap.get("CKEHB").toString()));
                    tradeDataMap.put("PGGJKEHB",ConvertUtil.getConverData(appleMap.get("JKEHB").toString()));
                    tradeDataMap.put("PGGYZDYCKSLTB",ConvertUtil.getConverData(appleMap.get("YZDYCKSLTB").toString()));
                    tradeDataMap.put("PGGYZDQJKSLTB",ConvertUtil.getConverData(appleMap.get("YZDQJKSLTB").toString()));
                    tradeDataMap.put("PGGYZDYCKJEMYTB",ConvertUtil.getConverData(appleMap.get("YZDYCKJEMYTB").toString()));
                    tradeDataMap.put("PGGYZDQJKJEMYTB",ConvertUtil.getConverData(appleMap.get("YZDQJKJEMYTB").toString()));
                }else if ("20097000".equals(appleMap.get("CPID"))){
                    tradeDataMap.put("PGZDQCKSL",String.format("%.2f", Double.parseDouble(appleMap.get("DQCKSL").toString())/10000));
                    tradeDataMap.put("PGZDQJKSL",String.format("%.2f", Double.parseDouble(appleMap.get("DQJKSL").toString())/10000));
                    tradeDataMap.put("PGZDQCKJEMY",String.format("%.2f", Double.parseDouble(appleMap.get("DQCKJEMY").toString())/10000));
                    tradeDataMap.put("PGZDQJKJEMY",String.format("%.2f", Double.parseDouble(appleMap.get("DQJKJEMY").toString())/10000));
                    tradeDataMap.put("PGZYZDYCKSL",String.format("%.2f", Double.parseDouble(appleMap.get("YZDYCKSL").toString())/10000));
                    tradeDataMap.put("PGZYZDYCKJEMY",String.format("%.2f", Double.parseDouble(appleMap.get("YZDYCKJEMY").toString())/10000));
                    tradeDataMap.put("PGZYZDQJKSL",String.format("%.2f", Double.parseDouble(appleMap.get("YZDQJKSL").toString())/10000));
                    tradeDataMap.put("PGZYZDQJKJEMY",String.format("%.2f", Double.parseDouble(appleMap.get("YZDQJKJEMY").toString())/10000));
                    tradeDataMap.put("PGZCKLTB",ConvertUtil.getConverData(appleMap.get("CKLTB").toString()));
                    tradeDataMap.put("PGZJKLTB",ConvertUtil.getConverData(appleMap.get("JKLTB").toString()));
                    tradeDataMap.put("PGZCKETB",ConvertUtil.getConverData(appleMap.get("CKETB").toString()));
                    tradeDataMap.put("PGZJKETB",ConvertUtil.getConverData(appleMap.get("JKETB").toString()));
                    tradeDataMap.put("PGZCKLHB",ConvertUtil.getConverData(appleMap.get("CKLHB").toString()));
                    tradeDataMap.put("PGZJKLHB",ConvertUtil.getConverData(appleMap.get("JKLHB").toString()));
                    tradeDataMap.put("PGZCKEHB",ConvertUtil.getConverData(appleMap.get("CKEHB").toString()));
                    tradeDataMap.put("PGZJKEHB",ConvertUtil.getConverData(appleMap.get("JKEHB").toString()));
                    tradeDataMap.put("PGZYZDYCKSLTB",ConvertUtil.getConverData(appleMap.get("YZDYCKSLTB").toString()));
                    tradeDataMap.put("PGZYZDQJKSLTB",ConvertUtil.getConverData(appleMap.get("YZDQJKSLTB").toString()));
                    tradeDataMap.put("PGZYZDYCKJEMYTB",ConvertUtil.getConverData(appleMap.get("YZDYCKJEMYTB").toString()));
                    tradeDataMap.put("PGZYZDQJKJEMYTB",ConvertUtil.getConverData(appleMap.get("YZDQJKJEMYTB").toString()));
                }
            }
            //出口省份排名top1
            tradeDataMap.put("XPGCKSFTOP1",provincesMap.get("XPGCKSF"));
            tradeDataMap.put("XPGDQCKSLTOP1",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQCKSL").toString())/10000));
            tradeDataMap.put("XPGDQCKJEWMYTOP1",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQCKJEWMY").toString())/10000));
            tradeDataMap.put("XPGDQCKLZBTOP1",provincesMap.get("XPGDQCKLZB"));
            tradeDataMap.put("XPGDQCKJEMYZBTOP1",provincesMap.get("XPGDQCKJEMYZB"));
            tradeDataMap.put("XPGDQCKLTBTOP1",ConvertUtil.getConverData(provincesMap.get("XPGDQCKLTB").toString()));
            tradeDataMap.put("XPGDQCKJETBTOP1",ConvertUtil.getConverData(provincesMap.get("XPGDQCKJETB").toString()));
            tradeDataMap.put("XPGDQCKLHBTOP1",ConvertUtil.getConverData(provincesMap.get("XPGDQCKLHB").toString()));
            tradeDataMap.put("XPGDQCKJEHBTOP1",ConvertUtil.getConverData(provincesMap.get("XPGDQCKJEHB").toString()));
            //出口省份排名top2
            tradeDataMap.put("XPGCKTOP2SF",provincesMap.get("XPGCKTOP2SF"));
            tradeDataMap.put("XPGDQCKSLTOP2",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQCKSLTOP2").toString())/10000));
            tradeDataMap.put("XPGDQCKJEWMYTOP2",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQCKJEWMYTOP2").toString())/10000));
            tradeDataMap.put("XPGDQCKLTOP2ZB",provincesMap.get("XPGDQCKLTOP2ZB"));
            tradeDataMap.put("XPGDQCKJEMYTOP2ZB",provincesMap.get("XPGDQCKJEMYTOP2ZB"));
            tradeDataMap.put("XPGDQCKLTOP2TB",ConvertUtil.getConverData(provincesMap.get("XPGDQCKLTOP2TB").toString()));
            tradeDataMap.put("XPGDQCKJETOP2TB",ConvertUtil.getConverData(provincesMap.get("XPGDQCKJETOP2TB").toString()));
            tradeDataMap.put("XPGDQCKLTOP2HB",ConvertUtil.getConverData(provincesMap.get("XPGDQCKLTOP2HB").toString()));
            tradeDataMap.put("XPGDQCKJETOP2HB",ConvertUtil.getConverData(provincesMap.get("XPGDQCKJETOP2HB").toString()));
            //出口省份排名top3
            tradeDataMap.put("XPGCKTOP3SF",provincesMap.get("XPGCKTOP3SF"));
            tradeDataMap.put("XPGDQCKSLTOP3",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQCKSLTOP3").toString())/10000));
            tradeDataMap.put("XPGDQCKJEWMYTOP3",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQCKJEWMYTOP3").toString())/10000));
            tradeDataMap.put("XPGDQCKLTOP3ZB",provincesMap.get("XPGDQCKLTOP3ZB"));
            tradeDataMap.put("XPGDQCKJEMYTOP3ZB",provincesMap.get("XPGDQCKJEMYTOP3ZB"));
            tradeDataMap.put("XPGDQCKLTOP3TB",ConvertUtil.getConverData(provincesMap.get("XPGDQCKLTOP3TB").toString()));
            tradeDataMap.put("XPGDQCKJETOP3TB",ConvertUtil.getConverData(provincesMap.get("XPGDQCKJETOP3TB").toString()));
            tradeDataMap.put("XPGDQCKLTOP3HB",ConvertUtil.getConverData(provincesMap.get("XPGDQCKLTOP3HB").toString()));
            tradeDataMap.put("XPGDQCKJETOP3HB",ConvertUtil.getConverData(provincesMap.get("XPGDQCKJETOP3HB").toString()));
            //进口省份排名top1
            tradeDataMap.put("XPGJKSFTOP1",provincesMap.get("XPGJKSF"));
            tradeDataMap.put("XPGDQJKSLTOP1",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQJKSL").toString())/10000));
            tradeDataMap.put("XPGDQJKJEWMYTOP1",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQJKJEWMY").toString())/10000));
            tradeDataMap.put("XPGDQJKLZBTOP1",provincesMap.get("XPGDQJKLZB"));
            tradeDataMap.put("XPGDQJKJEMYZBTOP1",provincesMap.get("XPGDQJKJEMYZB"));
            tradeDataMap.put("XPGDQJKLTBTOP1",ConvertUtil.getConverData(provincesMap.get("XPGDQJKLTB").toString()));
            tradeDataMap.put("XPGDQJKJETBTOP1",ConvertUtil.getConverData(provincesMap.get("XPGDQJKJETB").toString()));
            tradeDataMap.put("XPGDQJKLHBTOP1",ConvertUtil.getConverData(provincesMap.get("XPGDQJKLHB").toString()));
            tradeDataMap.put("XPGDQJKJEHBTOP1",ConvertUtil.getConverData(provincesMap.get("XPGDQJKJEHB").toString()));
            //进口省份排名top2
            tradeDataMap.put("XPGJKTOP2SF",provincesMap.get("XPGJKTOP2SF"));
            tradeDataMap.put("XPGDQJKSLTOP2",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQJKSLTOP2").toString())/10000));
            tradeDataMap.put("XPGDQJKJEWMYTOP2",String.format("%.2f", Double.parseDouble(provincesMap.get("XPGDQJKJEWMYTOP2").toString())/10000));
            tradeDataMap.put("XPGDQJKLTOP2ZB",provincesMap.get("XPGDQJKLTOP2ZB"));
            tradeDataMap.put("XPGDQJKJEMYTOP2ZB",provincesMap.get("XPGDQJKJEMYTOP2ZB"));
            tradeDataMap.put("XPGDQJKLTOP2TB",ConvertUtil.getConverData(provincesMap.get("XPGDQJKLTOP2TB").toString()));
            tradeDataMap.put("XPGDQJKJETOP2TB",ConvertUtil.getConverData(provincesMap.get("XPGDQJKJETOP2TB").toString()));
            tradeDataMap.put("XPGDQJKLTOP2HB",ConvertUtil.getConverData(provincesMap.get("XPGDQJKLTOP2HB").toString()));
            tradeDataMap.put("XPGDQJKJETOP2HB",ConvertUtil.getConverData(provincesMap.get("XPGDQJKJETOP2HB").toString()));
            //鲜苹果进口省份top2主要进口国家排名top1，出口省份top1主要出口国家排名top2
            tradeDataMap.put("CKLTOP1GJMC",countryMap.get("CKLTOP1GJMC"));
            tradeDataMap.put("CKLTOP1DQCKSL",String.format("%.2f", Double.parseDouble(countryMap.get("CKLTOP1DQCKSL").toString())/10000));
            tradeDataMap.put("CKLTOP1DQCKJEMY",String.format("%.2f", Double.parseDouble(countryMap.get("CKLTOP1DQCKJEMY").toString())/10000));
            tradeDataMap.put("CKLTOP2GJMC",countryMap.get("CKLTOP2GJMC"));
            tradeDataMap.put("CKLTOP2DQCKSL",String.format("%.2f", Double.parseDouble(countryMap.get("CKLTOP2DQCKSL").toString())/10000));
            tradeDataMap.put("CKLTOP2DQCKJEMY",String.format("%.2f", Double.parseDouble(countryMap.get("CKLTOP2DQCKJEMY").toString())/10000));
            tradeDataMap.put("JKSFTOP1JKLTOP1GJMC",countryMap.get("JKSFTOP1JKLTOP1GJMC"));
            tradeDataMap.put("JKSFTOP1JKLTOP1DQJKSL",String.format("%.2f", Double.parseDouble(countryMap.get("JKSFTOP1JKLTOP1DQJKSL").toString())/10000));
            tradeDataMap.put("JKSFTOP1JKLTOP1DQJKJEMY",String.format("%.2f", Double.parseDouble(countryMap.get("JKSFTOP1JKLTOP1DQJKJEMY").toString())/10000));
            tradeDataMap.put("JKSFTOP2JKLTOP1GJMC",countryMap.get("JKSFTOP2JKLTOP1GJMC"));
            tradeDataMap.put("JKSFTOP2JKLTOP1DQJKSL",String.format("%.2f", Double.parseDouble(countryMap.get("JKSFTOP2JKLTOP1DQJKSL").toString())/10000));
            tradeDataMap.put("JKSFTOP2JKLTOP1DQJKJEMY",String.format("%.2f", Double.parseDouble(countryMap.get("JKSFTOP2JKLTOP1DQJKJEMY").toString())/10000));

            tradeDataMap.put("TOP2CKLTOP1GJMC",countryMap.get("TOP2CKLTOP1GJMC"));
            tradeDataMap.put("TOP2CKLTOP1DQCKSL",String.format("%.2f", Double.parseDouble(countryMap.get("TOP2CKLTOP1DQCKSL").toString())/10000));
            tradeDataMap.put("TOP2CKLTOP1DQCKJEMY",String.format("%.2f", Double.parseDouble(countryMap.get("TOP2CKLTOP1DQCKJEMY").toString())/10000));
            tradeDataMap.put("TOP2CKLTOP2GJMC",countryMap.get("TOP2CKLTOP2GJMC"));
            tradeDataMap.put("TOP2CKLTOP2DQCKSL",String.format("%.2f", Double.parseDouble(countryMap.get("TOP2CKLTOP2DQCKSL").toString())/10000));
            tradeDataMap.put("TOP2CKLTOP2DQCKJEMY",String.format("%.2f", Double.parseDouble(countryMap.get("TOP2CKLTOP2DQCKJEMY").toString())/10000));
            tradeDataMap.put("TOP3CKLTOP1GJMC",countryMap.get("TOP3CKLTOP1GJMC"));
            tradeDataMap.put("TOP3CKLTOP1DQCKSL",String.format("%.2f", Double.parseDouble(countryMap.get("TOP3CKLTOP1DQCKSL").toString())/10000));
            tradeDataMap.put("TOP3CKLTOP1DQCKJEMY",String.format("%.2f", Double.parseDouble(countryMap.get("TOP3CKLTOP1DQCKJEMY").toString())/10000));
            tradeDataMap.put("TOP3CKLTOP2GJMC",countryMap.get("TOP3CKLTOP2GJMC"));
            tradeDataMap.put("TOP3CKLTOP2DQCKSL",String.format("%.2f", Double.parseDouble(countryMap.get("TOP3CKLTOP2DQCKSL").toString())/10000));
            tradeDataMap.put("TOP3CKLTOP2DQCKJEMY",String.format("%.2f", Double.parseDouble(countryMap.get("TOP3CKLTOP2DQCKJEMY").toString())/10000));

            //生成文本数据
            String text = getProductDecodeText(tradeDataMap, DataDecodeTemplate.TRADE);
            //tradeJson赋值
            tradeJsonMap.put("chart",tradeChartMap);
            tradeJsonMap.put("text",tradeDataMap);
            tradeJsonMap.put("year",year);
            tradeJsonMap.put("month",month);
            //
            DataDecode dataDecode = new DataDecode();
            String bt = year + "年" + month +"月国际贸易解读报告";
            dataDecode.setId(UUID.randomUUID().toString().replace("-", ""));
            dataDecode.setBt(bt);
            dataDecode.setCjsj(CommonUtil.getCurrentDateTime());
            //发布时间暂定当前时间
            dataDecode.setFbsj(CommonUtil.getCurrentDate());
            dataDecode.setGxsj(CommonUtil.getCurrentDateTime());
            dataDecode.setJdsj(JSON.toJSONString(tradeJsonMap));
            dataDecode.setLy("农业农村部信息中心");
            dataDecode.setNf(year);
            dataDecode.setRq(CommonUtil.getCurrentDate());
            dataDecode.setSjlx(DataType.TRADE.getType());
            dataDecode.setWbsj(text);
            dataDecode.setYf(month);
            decodeMapper.insert(dataDecode);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    @Override
    public DataDecode getTradeData(String id) {
        return decodeMapper.get(id);
    }

    @Override
    public Boolean generatePriceDecode(Integer time) {
        try {
            String timeStr = String.valueOf(time);
            String year = timeStr.substring(0,4);
            String month = timeStr.substring(4);
            //先判断生产解读数据是否已经存在
            if (decodeMapper.getDataDecodeCountByTypeYearMonth(DataType.PRICE.getType(), year, month) > 0) {
                throw new Exception(year + "年"+ month +"月价格解读已存在！将不再生成" + year + "年"+ month +"月价格解读");
            }
            Map<String,Object> timeMap = new HashMap<>();
            timeMap.put("time",timeStr);
            List<Map<String, Object>> priceDecodeChart = priceIndicesMapper.getPriceDecodeChart(timeMap);
            Map<String, Object> priceDecodeData = priceIndicesMapper.getPriceDecode(timeMap);
            Map<String,Object> priceChartMap = new HashMap<>();
            //获取价格解读相关数据
            List dateTime  = new ArrayList();
            List QGPFJList  = new ArrayList();
            List QGPFJTBList  = new ArrayList();
            List QGPFJHBList  = new ArrayList();
            List QGJSJList  = new ArrayList();
            List QGJSJTBList  = new ArrayList();
            List QGJSJHBList  = new ArrayList();
            List QGCSJList  = new ArrayList();
            List QGCSJTBList  = new ArrayList();
            List QGCSJHBList  = new ArrayList();
            /*价格解读echarts图表数据*/
            for (Map<String,Object> chartDataMap :priceDecodeChart){
                dateTime.add(chartDataMap.get("BJRQ"));
                QGPFJList.add(chartDataMap.get("QGPFJ"));
                QGPFJTBList.add(chartDataMap.get("QGPFJTB"));
                QGPFJHBList.add(chartDataMap.get("QGPFJHB"));
                QGJSJList.add(chartDataMap.get("QGJSJ"));
                QGJSJTBList.add(chartDataMap.get("QGJSJTB"));
                QGJSJHBList.add(chartDataMap.get("QGJSJHB"));
                QGCSJList.add(chartDataMap.get("QGCSJ"));
                QGCSJTBList.add(chartDataMap.get("QGCSJTB"));
                QGCSJHBList.add(chartDataMap.get("QGCSJHB"));
            }
            priceChartMap.put("dateTime",dateTime);
            priceChartMap.put("QGPFJList",QGPFJList);
            priceChartMap.put("QGPFJTBList",QGPFJTBList);
            priceChartMap.put("QGPFJHBList",QGPFJHBList);
            priceChartMap.put("QGJSJList",QGJSJList);
            priceChartMap.put("QGJSJTBList",QGJSJTBList);
            priceChartMap.put("QGJSJHBList",QGJSJHBList);
            priceChartMap.put("QGCSJList",QGCSJList);
            priceChartMap.put("QGCSJTBList",QGCSJTBList);
            priceChartMap.put("QGCSJHBList",QGCSJHBList);
            priceDecodeData.put("year",year);
            priceDecodeData.put("month",month);
            //生成文本数据
            String text = getProductDecodeText(priceDecodeData, DataDecodeTemplate.PRICE);
            //tradeJson赋值
            Map<String,Object> priceJsonMap = new HashMap<>();
            priceJsonMap.put("chart",priceChartMap);
            priceJsonMap.put("text",priceDecodeData);
            priceJsonMap.put("year",year);
            priceJsonMap.put("month",month);
            //
            DataDecode dataDecode = new DataDecode();
            String bt = year + "年" + month +"月价格数据解读";
            dataDecode.setId(UUID.randomUUID().toString().replace("-", ""));
            dataDecode.setBt(bt);
            dataDecode.setCjsj(CommonUtil.getCurrentDateTime());
            //发布时间暂定当前时间
            dataDecode.setFbsj(CommonUtil.getCurrentDate());
            dataDecode.setGxsj(CommonUtil.getCurrentDateTime());
            dataDecode.setJdsj(JSON.toJSONString(priceJsonMap));
            dataDecode.setLy("农业农村部信息中心");
            dataDecode.setNf(year);
            dataDecode.setRq(CommonUtil.getCurrentDate());
            dataDecode.setSjlx(DataType.PRICE.getType());
            dataDecode.setWbsj(text);
            dataDecode.setYf(month);
            decodeMapper.insert(dataDecode);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
}
