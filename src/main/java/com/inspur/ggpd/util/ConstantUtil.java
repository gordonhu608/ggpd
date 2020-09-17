package com.inspur.ggpd.util;

/**
 * @description 常量定义
 */
public class ConstantUtil {
	
    //适用于两状态
	public static final String STATE_NO = "0";// 否/未启用
	public static final String STATE_YES = "1";// 是/启用

    //适用于三、四状态
	public static final String STATE_AUDITING = "0";// 待审核    /待处理
	public static final String STATE_PASSED = "1";  // 审核通过/已处理
	public static final String STATE_REJECTED = "2";// 驳回       /驳回
	public static final String STATE_DRAFT = "3";   // 草稿       /草稿
	public static final String STATE_REVOKE = "3";   // 取消授权       /取消
	//数据库类型
	public static final String DATABASE_TYPE_SDE = "01";//SDE类型
	public static final String DATABASE_TYPE_SUPERMAP = "02";//SuperMap
	public static final String DATABASE_TYPE_FILEGDB = "03";//FileGDB
	public static final String DATABASE_TYPE_MAPGIS = "04";//MapGIS
	public static final String DATABASE_TYPE_ORACLE = "11";//ORACLE
	public static final String DATABASE_TYPE_MYSQL = "12";//MYSQL
	public static final String DATABASE_TYPE_POSTGRESQL = "13";//POSTGRESQL
	public static final String DATABASE_TYPE_SQLSERVER = "14";//SQLSERVER
	
	//服务相关常量
	public static final String SERVICE_TYPE_DATASERVICE = "01";//服务类型-数据服务
	public static final String SERVICE_TYPE_ANALYSIS_SERVICE = "04";//服务类型-分析服务
	public static final String SERVICE_TYPE_THIRD_PARTY = "05";//服务类型-第三方注册服务
	public static final String SERVICE_PROXY_TYPE_RESTFUL = "01";//代理类型-restful
	public static final String SERVICE_PROXY_TYPE_WEBSERVICE = "02";//代理类型-webservice
	public static final String SERVICE_PROXY_TYPE_HTTP = "03";//代理类型-http
	
	//服务监控中ApplicationEvent内extendinfo存储所用关键字
	public static final String APPLICATION_EVENT_EXTENDINFO_KEY = "APPLICATION_EVENT_EXTEND";
	
	//服务授权类型
	public static final String SERVICE_AUTHORIZE_TYPE_AUTO = "01";//自动审核通过
	public static final String SERVICE_AUTHORIZE_TYPE_ADMIN = "02";//管理员审核
	public static final String SERVICE_AUTHORIZE_TYPE_PROVIDER = "03";//服务提供者审核
}