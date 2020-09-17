package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

import java.util.List;

/**
 * @ClassName GeoJsonData
 * @Deacription TODO
 * @Author tangxianwei
 * @Date 2020/9/8 11:39
 * @Version 1.0
 **/
@Data
public class GeoJsonData {
    private List<FeaturesEntity> features;
    private String type;
}
