package com.inspur.ggpd.util;

import java.io.UnsupportedEncodingException;
import java.util.Iterator;
import java.util.Properties;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class PropertiesUtil {
	
	private static Log log = LogFactory.getLog(PropertiesUtil.class);
	
	private static Properties prop = new Properties();
	static{
		try {
			prop.load(Thread.currentThread().getContextClassLoader().getResourceAsStream("ggpd.properties"));
			
			//转码处理
			Set<Object> keyset = prop.keySet();
			Iterator<Object> iter = keyset.iterator();
			while (iter.hasNext()) {
				String key = (String) iter.next();
				String newValue = null;
				try {
					//属性配置文件自身的编码
					String propertiesFileEncode = "utf-8";
					newValue = new String(prop.getProperty(key).getBytes("ISO-8859-1"),propertiesFileEncode);
				} catch (UnsupportedEncodingException e) {
					newValue = prop.getProperty(key);
					if (log.isErrorEnabled())
						log.error("读取配置文件ggpd.properties出错!"+e);
					
				}
				prop.setProperty(key, newValue);
			}
		} catch (Exception e) {
			if (log.isErrorEnabled())
				log.error("读取配置文件ggpd.properties出错！"+e);
		}
	}

	/**
	 * @Title:getValueByKey
	 * @Description:根据key，取得对应的value值
	 * 
	 * @param:@param key
	 * @param:@return
	 * @return:String
	 */
	public static String getValueByKey(String key){
		if(key == null){
			return null;
		}
		if(null==prop.getProperty(key)){
			return null;
		}else{
			return prop.getProperty(key).trim();
		}
	}

}