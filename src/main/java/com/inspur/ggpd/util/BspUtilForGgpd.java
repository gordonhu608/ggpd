package com.inspur.ggpd.util;

import org.loushang.bsp.api.OrganServiceFactory;
import org.loushang.bsp.api.organ.IOrganMgmtService;
import org.loushang.bsp.security.context.GetBspInfo;
import org.loushang.framework.util.UUIDGenerator;


public class BspUtilForGgpd {

	private volatile static BspUtilForGgpd bspUtilForLQHD = null;

	public static BspUtilForGgpd getInstance() {
		if (bspUtilForLQHD == null) {
			bspUtilForLQHD = new BspUtilForGgpd();
		}
		return bspUtilForLQHD;
	}

	/**
	 * @Title:getUUID
	 * @Description:获取uuid
	 * 
	 * @param:@return
	 * @return:String
	 */
	public String getUUID() {
		return UUIDGenerator.getUUID();
	}

	/**
	 * @Title:getLoginUserId
	 * @Description:获取当前登陆人id
	 * 
	 * @param:@return
	 * @return:String
	 */
	public String getLoginUserId() {
		return GetBspInfo.getBspInfo().getUserId();
	}

	/**
	 * @Title:getLoginUserName
	 * @Description:获取当前登陆人姓名
	 * 
	 * @param:@return
	 * @return:String
	 */
	public String getLoginUserName() {

		return GetBspInfo.getBspInfo().getUserName();
	}

	/**
	 * @Title:getLoginUserDeptId
	 * @Description:获取当前登陆人部门id
	 * 
	 * @param:@return
	 * @return:String
	 */
	public String getLoginUserDeptId() {

		return GetBspInfo.getBspInfo().getDepartmentOrganId();
	}
	
	/**
	 * @Title:getEmployeeStruId
	 * @Description:获取当前登陆人StruId
	 * 
	 * @param:@return
	 * @return:String
	 */
	public String getEmployeeStruId() {
		return GetBspInfo.getBspInfo().getEmployeeStruId();
	}

	/**
	 * @Title:getLoginUserDeptName
	 * @Description:获取当前登陆人部门名称
	 * 
	 * @param:@return
	 * @return:String
	 */
	public String getLoginUserDeptName() {
		IOrganMgmtService oms = OrganServiceFactory.getOrganMgmtService();
		return oms.getLoginUserDepartName();
	}
	
	/**
	 * @Title:isAdmin
	 * @Description:判断用户是否是管理员
	 * 
	 * @param:@return
	 * @return:Boolean
	 */
	public static boolean isAdmin() {
		
		return GetBspInfo.getBspInfo().isAdmin();
	}
	

}
