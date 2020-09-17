package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

/*
* 智慧果园要素实体类
* */
@Data
public class OrchardFeaturesEntity {
    private String type;
    private GeometryEntity geometry;
    private OrchardPropertiesEntity properties;
}
