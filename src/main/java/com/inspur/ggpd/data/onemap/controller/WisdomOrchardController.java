package com.inspur.ggpd.data.onemap.controller;

import com.inspur.ggpd.data.onemap.service.IWisdomOrchardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/wisdomOrchard")
public class WisdomOrchardController {
    @Autowired
    IWisdomOrchardService wisdomOrchardService;

    /**
     * 功能描述: 获取智慧果园geojson格式信息
     *
     * @Title getWisdomOrchardData
     * @param
     * @return
     */
    @RequestMapping("/getWisdomOrchardData")
    @ResponseBody
    public Object getWisdomOrchardData(){
        return wisdomOrchardService.getWisdomOrchardData();
    }

    /**
     * 功能描述: 根据果园编号获取智慧果园气象监测信息
     *
     * @Title getWisdomOrchardDataByGYBH
     * @param map
     * @return
     */
    @RequestMapping("/getWisdomOrchardDataByGYBH")
    @ResponseBody
    public Map<String,Object> getWisdomOrchardDataByGYBH(@RequestBody Map<String, Object> map){
        return wisdomOrchardService.getWisdomOrchardDataByGYBH(map);
    }
}
