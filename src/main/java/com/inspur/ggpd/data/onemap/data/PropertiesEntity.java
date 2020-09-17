package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

import javax.persistence.Column;

/**
 * @ClassName PropertiesEntity
 * @Deacription TODO
 * @Author tangxianwei
 * @Date 2020/9/8 11:45
 * @Version 1.0
 **/
@Data
public class PropertiesEntity {
    @Column(name = "ZJJ")
    private String zjj;
    @Column(name = "PFSCJC")
    private String pfscjc;
    @Column(name = "JD")
    private Double jd;
    @Column(name = "WD")
    private Double wd;
}
