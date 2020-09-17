package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

/**
 * @ClassName FeaturesEntity
 * @Deacription TODO
 * @Author tangxianwei
 * @Date 2020/9/8 11:41
 * @Version 1.0
 **/
@Data
public class FeaturesEntity {
    private GeometryEntity geometry;
    private String type;
    private PropertiesEntity properties;
}
