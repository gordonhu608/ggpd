package com.inspur.ggpd.data.decode.data;

import lombok.Data;

import java.util.List;

/**
 * @ClassName ProductDecodeChart
 * @Deacription 生产解读对应ECharts数据实体类
 * @Author tangxianwei
 * @Date 2020/8/26 16:26
 * @Version 1.0
 **/
@Data
public class ProductDecodeChart {
    //省份
    private List<String> province;
    //亩成本
    private List<Double> cost;
    //亩人工成本
    private List<Double> laborCost;
    //人工占比
    private List<Double> expenses;
    //每亩物质与服务费用
    private List<Double> laborProportion;
    //物质与服务费用占比
    private List<Double> expensesProportion;
}
