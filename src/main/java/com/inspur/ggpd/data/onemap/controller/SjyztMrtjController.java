package com.inspur.ggpd.data.onemap.controller;

import com.inspur.ggpd.data.onemap.data.SjyztMrtj;
import com.inspur.ggpd.data.onemap.service.SjyztMrtjService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/dataOneMap")
public class SjyztMrtjController {

    @Resource
    private SjyztMrtjService sjyztMrtjService;

    @GetMapping("/query")
    @ResponseBody
    public List<SjyztMrtj> query() {
        return sjyztMrtjService.query();
    }
}
