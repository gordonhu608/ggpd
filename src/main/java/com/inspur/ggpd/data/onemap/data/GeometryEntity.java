package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

import java.util.List;

/**
 * @ClassName GeometryEntity
 * @Deacription TODO
 * @Author tangxianwei
 * @Date 2020/9/8 11:43
 * @Version 1.0
 **/
@Data
public class GeometryEntity {
    private List<Double> coordinates;
    private String type;

}
