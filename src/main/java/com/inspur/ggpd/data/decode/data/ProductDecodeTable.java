package com.inspur.ggpd.data.decode.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Table;

/**
 * @ClassName ProductDecodeTable
 * @Deacription 生产解读对应表格数据实体类
 * @Author tangxianwei
 * @Date 2020/8/26 16:27
 * @Version 1.0
 **/
@Data
@Table(name = "JJSJ_CBSY_SYXX")
public class ProductDecodeTable {

    /**
     * province : 全国
     * cost : 4904.82
     * laborCost : 3065.22
     * laborProportion : 62.49
     * expenses : 1513.38
     * expensesProportion : 30.85
     */

    //年份
    @Column(name = "YEAR")
    private String year;
    //省份
    @Column(name = "PROVINCE")
    private String province;
    //亩成本
    @Column(name = "COST")
    private double cost;
    //亩人工成本
    @Column(name = "LABOR_COST")
    private double laborCost;
    //人工占比
    @Column(name = "LABORP_ROPORTION")
    private double laborProportion;
    //每亩物质与服务费用
    @Column(name = "EXPENSES")
    private double expenses;
    //物质与服务费用占比
    @Column(name = "EXPENSES_PROPORTION")
    private double expensesProportion;

}
