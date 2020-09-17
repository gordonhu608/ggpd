package com.inspur.ggpd.portal.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.inspur.ggpd.util.BspUtilForGgpd;
import com.inspur.ggpd.util.PropertiesUtil;

@Controller
@RequestMapping("/portal/service")
public class PortalController {

	@RequestMapping("/menu")
    @ResponseBody
	public JSONArray menu(HttpServletRequest request) {
		JSONArray menuMain = JSONArray.parseArray(PropertiesUtil.getValueByKey("key.menu.out"));
		try {
			BspUtilForGgpd.getInstance().getLoginUserId();
			JSONArray menuIn = JSONArray.parseArray(PropertiesUtil.getValueByKey("key.menu.in"));
			for (int i = 0; i < menuIn.size(); i++) {
				menuMain.add(menuIn.getJSONObject(i));
			}
			return menuMain;
		} catch (Exception e) {
			return menuMain;
		}
	}
}
