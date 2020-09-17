package com.inspur.ggpd.data.decode.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Table;

/**
 * @ClassName TradeDecodeText
 * @Deacription 贸易解读解读对应文本数据实体类
 * @Author zhaobin
 * @Date 2020/8/26 16:27
 * @Version 1.0
 **/
@Data
@Table(name = "JJSJ_CBSY_SYXX")
public class TradeDecodeText {
    /**
     * year : 2018
     * plantArea : 2907.9
     * yield : 3923.34
     * yieldPerUnit : 1349.2
     * lastYear : 2017
     * plantAreaTb : 5.21
     * yieldTb : -0.43
     * yieldPerUnitTb : -4.8
     * costPerMu : 4929.41
     * costPerKg : 3.65
     * laborCost : 3065.22
     * laborCostProportion : 62.49
     * expenses : 1513.38
     * expensesProportion : 30.85
     * costTb : 0.31
     */

    //年份
    @Column(name = "YEAR")
    private String year;
    //种植面积
    @Column(name = "PLANT_AREA")
    private String plantArea;
    //产量
    @Column(name = "YIELD")
    private String yield;
    // 单产
    @Column(name = "YIELD_PER_UNIT")
    private String yieldPerUnit;
    // 去年年份
    @Column(name = "LAST_YEAR")
    private String lastYear;
    // 种植面积同比
    @Column(name = "PLANT_AREA_TB")
    private String plantAreaTb;
    // 产量同比
    @Column(name = "YIELD_TB")
    private String yieldTb;
    // 单产同比
    @Column(name = "YIELD_PER_UNIT_TB")
    private String yieldPerUnitTb;
    // 每亩均成本
    @Column(name = "COST_PER_MU")
    private String costPerMu;
    // 每公斤平均
    @Column(name = "COST_PER_KG")
    private String costPerKg;
    // 人工成本
    @Column(name = "LABOR_COST")
    private String laborCost;
    // 人工成本占比
    @Column(name = "LABOR_COST_PROPORTION")
    private String laborCostProportion;
    // 费用
    @Column(name = "EXPENSES")
    private String expenses;
    // 费用占比
    @Column(name = "EXPENSES_PROPORTION")
    private String expensesProportion;
    // 总成本同比
    @Column(name = "COST_TB")
    private String costTb;
}
