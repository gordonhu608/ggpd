package com.inspur.ggpd.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @Description 公共工具定义
 */

public class CommonUtil {


    /**
     * @Title: isNull
     * @Description: 判断是否为空, true为空，false为非空
     */
    public static boolean isNull(String... val) {
        if (val == null)
            return true;
        if (val.length == 0)
            return true;
        String v = val[0];
        if (v == null)
            return true;
        if (v.trim().length() == 0)
            return true;
        if ("NULL".equalsIgnoreCase(v))
            return true;
        return false;
    }

    /**
     * @Title: getCurrentDateTime
     * @Description: 当前日期时间，格式：yyyy-MM-dd HH:mm:ss
     */
    public static String getCurrentDateTime() {

        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
    }

    /**
     * @Title: getCurrentDate
     * @Description: 当前日期，格式：yyyy-MM-dd
     */
    public static String getCurrentDate() {

        return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
    }

    /**
     * @Title: getTimeAWeekAgo
     * @Description: 获取一周前时间，格式：yyyy-MM-dd HH:mm:ss
     */
    public static String getTimeAWeekAgo(String time) {
        Calendar c = Calendar.getInstance();
        Date date = null;
        try {
            date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(time);
        } catch (ParseException e) {
            return time;
        }
        c.setTime(date);
        int day = c.get(Calendar.DATE);
        c.set(Calendar.DATE, day - 7);

        String dayAfter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(c.getTime());
        return dayAfter;
    }

    /**
     * @param count
     * @Title: createRandomKey
     * @Description: 生成随机密钥
     * @return: String
     */
    public static String createRandomKey(int count) {
        String randomcode = "";
        String model = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";
        char[] m = model.toCharArray();
        for (int j = 0; j < 6; j++) {
            char c = m[(int) (Math.random() * model.length())];
            if (randomcode.contains(String.valueOf(c))) {
                j--;
                continue;
            }
            randomcode = randomcode + c;
        }
        return randomcode;
    }

    /**
     * 将Object对象里面的属性和值转化成Map对象
     *
     * @param obj
     * @return
     * @throws IllegalAccessException
     */
    public static Map<String, Object> objectToMap(Object obj) throws IllegalAccessException {
        Map<String, Object> map = new HashMap<String, Object>();
        Class<?> clazz = obj.getClass();
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            String fieldName = field.getName();
            Object value = field.get(obj);
            map.put(fieldName, value);
        }
        return map;
    }

    /**
     * 检查对象的每个属性，确保不为null或空字符串，否则返回false
     *
     * @param obj
     * @return
     * @throws IllegalAccessException
     */
    public static Boolean objAllPropertiesIsNotNull(Object obj) throws IllegalAccessException {
        Class<?> clazz = obj.getClass();
        Boolean result = true;
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            String fieldName = field.getName();
            Object value = field.get(obj);
            if (value == null || String.valueOf(value).trim().equals("")) {
                result = false;
            }
        }
        return result;
    }

    /**
     * 执行名称获取返回结果
     *
     * @param cmds
     * @return
     */
    public static String execCurl(String[] cmds) {
        ProcessBuilder process = new ProcessBuilder(cmds);
        Process p;
        try {
            p = process.start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));
            StringBuilder builder = new StringBuilder();
            String line = null;
            while ((line = reader.readLine()) != null) {
                builder.append(line);
                builder.append(System.getProperty("line.separator"));
            }
            return builder.toString();

        } catch (IOException e) {
            System.out.print("error");
            e.printStackTrace();
        }
        return null;
    }
}
