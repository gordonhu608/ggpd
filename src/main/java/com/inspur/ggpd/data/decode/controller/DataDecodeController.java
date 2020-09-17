package com.inspur.ggpd.data.decode.controller;

import com.inspur.ggpd.data.decode.data.DataDecode;
import com.inspur.ggpd.data.decode.service.DataDecodeService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @ClassName DataDecodeController
 * @Deacription 数据解读控制层
 * @Author tangxianwei
 * @Date 2020/8/22 15:19
 * @Version 1.0
 **/
@Controller
@RequestMapping("/sjjd")
public class DataDecodeController {

    @Resource
    private DataDecodeService decodeService;

    @GetMapping("/list")
    public String gotoDataDecodePage() {
        return "sjjd/list";
    }

    /**
     * 获取所有数据解读类型
     */
    @GetMapping("/getAllDataType")
    @ResponseBody
    public List<Map<String, Object>> getAllDataType() {
        return decodeService.getAllDataType();
    }

    /**
     * 查询数据解读数据
     */
    @PostMapping("/getDataDecodeData")
    @ResponseBody
    public Map<String, Object> getDataDecodeData(@RequestBody Map<String, Object> params) {
        return decodeService.getDataDecodesByDataTypeAndKeyword(params);
    }

    /**
     * 获取解读数据
     */
    @GetMapping("/getData/{id}")
    @ResponseBody
    public String getData(@PathVariable String id) {
        return decodeService.get(id);
    }

    /**
     * 获取贸易解读数据
     */
    @GetMapping("/getTradeData/{id}")
    @ResponseBody
    public DataDecode getTradeData(@PathVariable String id) {
        return decodeService.getTradeData(id);
    }

    @GetMapping("/test")
    @ResponseBody
    public String test() {
        for(int time = 202001;time<202008;time++){
            decodeService.generateTradeDecode(time);
        }
        return "success";
    }

    /*@GetMapping("/test")
    @ResponseBody
    public String test() {
        for(int time = 202001;time<202009;time++){
            decodeService.generatePriceDecode(time);
        }
        return "success";
    }*/
}
