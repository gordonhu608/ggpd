package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

import java.util.List;

/*
*   智慧果园geoJson格式数据实体类
*
* */
@Data
public class WisdomOrchardData {
    private String type;
    private List<OrchardFeaturesEntity> features;
}
