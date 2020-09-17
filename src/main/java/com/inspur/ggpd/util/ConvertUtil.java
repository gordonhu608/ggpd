package com.inspur.ggpd.util;

public class ConvertUtil {
    /**
     * @Title: getConverData
     * @Description: 根据数据判断增减，转换字符串。
     */
    public static String getConverData(String data) {
        Double doubleData = Double.parseDouble(data);
        String result = "";
        if (doubleData>0){
            result = "上涨" + doubleData;
        }else if(doubleData<0){
            result = "下跌" + Math.abs(doubleData);
        }else if(doubleData==0){
            result = "持平";
        }else {
            result = doubleData.toString();
        }
        return result;
    }
}
