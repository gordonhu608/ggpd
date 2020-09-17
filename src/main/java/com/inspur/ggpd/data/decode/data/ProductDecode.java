package com.inspur.ggpd.data.decode.data;

import lombok.Data;

import java.util.List;

/**
 * @ClassName ProductDecode
 * @Deacription 生产解读对应实体类
 * @Author tangxianwei
 * @Date 2020/8/26 16:12
 * @Version 1.0
 **/
@Data
public class ProductDecode {
    /**
     * year : 2018
     * publishDate : 2019.5.15
     * chart : {"province":["全国","山东","甘肃","北京","河南","辽宁","陕西","河北","山西","宁夏"],"cost":[4904.82,7575.61,6935.07,6588.54,4917.37,4314.32,4199.64,3856.77,3575.65,2426.26],"laborCost":[3065.22,4690.69,5074.67,3657.13,3431.96,2644.36,2957.83,2533.73,2395.57,1503.61],"expenses":[1513.38,2512.9,1035.41,917.06,1231.32,2624.99,1270.93,1131.04,1704.74,675.35],"laborProportion":[62.49,61.92,73.17,55.51,69.79,61.29,70.43,65.7,67,61.97],"expensesProportion":[30.85,33.17,14.93,13.92,25.04,60.84,30.26,29.33,47.68,27.84]}
     * text : {"year":"2018","plantArea":"2907.9","yield":"3923.34","yieldPerUnit":"1349.2","lastYear":"2017","plantAreaTb":"5.21","yieldTb":"-0.43","yieldPerUnitTb":"-4.8","costPerMu":"4929.41","costPerKg":"3.65","laborCost":"3065.22","laborCostProportion":"62.49","expenses":"1513.38","expensesProportion":"30.85","costTb":"0.31"}
     * table : [{"province":"全国","cost":4904.82,"laborCost":3065.22,"laborProportion":62.49,"expenses":1513.38,"expensesProportion":30.85},{"province":"山东","cost":7575.61,"laborCost":4690.69,"laborProportion":61.92,"expenses":2512.9,"expensesProportion":33.17},{"province":"甘肃","cost":6935.07,"laborCost":5074.67,"laborProportion":73.17,"expenses":1035.41,"expensesProportion":14.93},{"province":"北京","cost":6588.54,"laborCost":3657.13,"laborProportion":55.51,"expenses":917.06,"expensesProportion":13.92},{"province":"河南","cost":4917.37,"laborCost":3431.96,"laborProportion":69.79,"expenses":1231.32,"expensesProportion":25.04},{"province":"辽宁","cost":4314.32,"laborCost":2644.36,"laborProportion":61.29,"expenses":2624.99,"expensesProportion":60.84},{"province":"陕西","cost":4199.64,"laborCost":2957.83,"laborProportion":70.43,"expenses":1270.93,"expensesProportion":30.26},{"province":"河北","cost":3856.77,"laborCost":2533.73,"laborProportion":65.7,"expenses":1131.04,"expensesProportion":29.33},{"province":"山西","cost":3575.65,"laborCost":2395.57,"laborProportion":67,"expenses":1704.74,"expensesProportion":47.68},{"province":"宁夏","cost":2426.26,"laborCost":1503.61,"laborProportion":61.97,"expenses":675.35,"expensesProportion":27.84}]
     */

    private String year;
    private String publishDate;
    private ProductDecodeChart chart;
    private ProductDecodeText text;
    private List<ProductDecodeTable> table;
}
