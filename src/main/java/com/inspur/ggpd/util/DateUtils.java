package com.inspur.ggpd.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtils {
	
	/**
     * 获取本月开始日期 支持(yyyy-MM-dd、 yyyyMMdd等 )
     * @return String
     * **/
    public static String getMonthStart( String DateFormat){
        Calendar cal=Calendar.getInstance();
        cal.add(Calendar.MONTH, 0);
        cal.set(Calendar.DAY_OF_MONTH, 1);
        Date time=cal.getTime();
        return new SimpleDateFormat(DateFormat).format(time) ;
    }
    
    /**
     * 获取上个月开始日期 支持(yyyy-MM-dd、 yyyyMMdd等 )
     * @return String
     * **/
    public static String getLastMonthStart( String DateFormat){
        Calendar cal=Calendar.getInstance();
        cal.add(Calendar.MONTH, -1);
        cal.set(Calendar.DAY_OF_MONTH, 1);
        Date time=cal.getTime();
        return new SimpleDateFormat(DateFormat).format(time) ;
    }
    /**
     * 获取上个月结束日期 支持(yyyy-MM-dd、 yyyyMMdd等 )
     * @return String
     * **/
    public static String getLastMonthEnd( String DateFormat){
        Calendar cal=Calendar.getInstance();
         
          
        cal.set(Calendar.DAY_OF_MONTH,0);//设置为1号,当前日期既为本月第一天 
 
        return new SimpleDateFormat(DateFormat).format(cal.getTime()) ;
    }

    /**
     * 获取本周的第一天
     * @return String
     * **/
    public static String getWeekStart(String DateFormat){
        Calendar cal=Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_MONTH, 0);
        cal.set(Calendar.DAY_OF_WEEK, 2);
        Date time=cal.getTime();
        return new SimpleDateFormat(DateFormat).format(time) ;
    }
    /**
     * 获取上周的第一天
     * @return String
     * **/
    public static String getLastWeekStart(String DateFormat) {
        Calendar cal = Calendar.getInstance();
        // 将每周第一天设为星期一，默认是星期天
        cal.setFirstDayOfWeek(Calendar.MONDAY);
        cal.add(Calendar.DATE, -1 * 7);
        cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);

        cal.set(Calendar.HOUR_OF_DAY, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MILLISECOND, 0);
        Date time=cal.getTime();
        return new SimpleDateFormat(DateFormat).format(time) ;
    }
    
    /**
     * 获取上周最后第一天
     * @return String
     * **/
    public static String getLastWeekEnd(String DateFormat) 
    {
    	Calendar cal = Calendar.getInstance();
        //将每周第一天设为星期一，默认是星期天
        cal.setFirstDayOfWeek(Calendar.MONDAY);
        cal.add(Calendar.DATE, -1*7);
        cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);

        cal.set(Calendar.HOUR_OF_DAY, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MILLISECOND, 0);
        Date time=cal.getTime();
        return new SimpleDateFormat(DateFormat).format(time) ;
    }
    /**
     * 获取本年的第一天( 目前支持 yyyyMMdd 格式)
     * @return String
     * **/
    public static String getYearStart(){
        return new SimpleDateFormat("yyyy").format(new Date())+"0101";
    }

    /**
     * 获取根据当前日期获取本周的开始日期
     * @return String
     * **/
    public static String getStartDateByWeekByDate(String date) {
        Calendar cal = Calendar.getInstance();
        try {
            Date a =new SimpleDateFormat("yyyyMMdd").parse(date);
            cal.setTime(a);
            cal.setFirstDayOfWeek(Calendar.MONDAY);
            cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
            cal.set(Calendar.HOUR_OF_DAY, 0);
            cal.set(Calendar.MINUTE, 0);
            cal.set(Calendar.SECOND, 0);
            cal.set(Calendar.MILLISECOND, 0);
            cal.add(Calendar.DAY_OF_YEAR, -6);
            Date time2=cal.getTime();
            return new SimpleDateFormat("yyyyMMdd").format(time2);
        } catch (Exception e) {
            e.printStackTrace();
            return "no";
        }
    }
    /**
     * 获取根据当前日期获取本周的结束日期
     * @return String
     * **/
    public static String getEndDateByWeekByDate(String date) {
        Calendar cal = Calendar.getInstance();
        try {
            Date a =new SimpleDateFormat("yyyyMMdd").parse(date);
            cal.setTime(a);
            cal.setFirstDayOfWeek(Calendar.MONDAY);
            cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
            cal.set(Calendar.HOUR_OF_DAY, 0);
            cal.set(Calendar.MINUTE, 0);
            cal.set(Calendar.SECOND, 0);
            cal.set(Calendar.MILLISECOND, 0);
            Date time=cal.getTime();
            return new SimpleDateFormat("yyyy-MM-dd").format(time);
        } catch (Exception e) {
            e.printStackTrace();
            return "no";
        }
    }

    /**
     * 获取本周的最后一天
     * @return String
     * **/
    public static String getWeekEnd(String dateFormat){
        Calendar cal=Calendar.getInstance();
        cal.set(Calendar.DAY_OF_WEEK, cal.getActualMaximum(Calendar.DAY_OF_WEEK));
        cal.add(Calendar.DAY_OF_WEEK, 1);
        Date time=cal.getTime();
        return new SimpleDateFormat(dateFormat).format(time);
    }

    /**
     * 获取今天
     * @return String
     * */
    public static String getToday(String dateFormat){
        return new SimpleDateFormat(dateFormat).format(new Date());
    }

    public static void main(String[] args)
    {
        Calendar cal = Calendar.getInstance();
        try {
            Date a =new SimpleDateFormat("yyyyMMdd").parse("20200806");
            cal.setTime(a);
            cal.setFirstDayOfWeek(Calendar.MONDAY);
            cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
            cal.set(Calendar.HOUR_OF_DAY, 0);
            cal.set(Calendar.MINUTE, 0);
            cal.set(Calendar.SECOND, 0);
            cal.set(Calendar.MILLISECOND, 0);
            Date time=cal.getTime();

            System.out.println(" end  "+new SimpleDateFormat("yyyyMMdd").format(time));
            cal.add(Calendar.DAY_OF_YEAR, -6);

            Date time2=cal.getTime();
            System.out.println("start " +new SimpleDateFormat("yyyyMMdd").format(time2));

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

}
