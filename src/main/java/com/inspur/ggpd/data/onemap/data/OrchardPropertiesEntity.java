package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

import javax.persistence.Column;
/*
*智慧果园要素中properties内容
* */
@Data
public class OrchardPropertiesEntity {
    //果园名称
    @Column(name = "GYMC")
    private String gymc;

    //高德经度
    @Column(name = "GDJD")
    private Double gdjd;

    //高德维度
    @Column(name = "GDWD")
    private Double gdwd;

    //百度经度
    @Column(name = "BDJD")
    private Double bdjd;

    //百度纬度
    @Column(name = "BDWD")
    private Double bdwd;

    //温度
    @Column(name = "WD")
    private Double wd;

    //湿度
    @Column(name = "SD")
    private Double sd;

    //总辐射
    @Column(name = "ZFS")
    private String zfs;

    //光合有效辐射
    @Column(name = "GHYXFS")
    private String ghyxfs;

    //风速
    @Column(name = "FS")
    private String fs;

    //风向
    @Column(name = "FX")
    private String fx;

    //日降水量
    @Column(name = "RJSL")
    private String rjsl;

    //日蒸发量
    @Column(name = "RZFL")
    private String rzfl;

    //20cm含水量
    @Column(name = "SQ20HSL")
    private Double sq20hsl;

    //40cm含水量
    @Column(name = "SQ40HSL")
    private Double sq40hsl;

    //60cm含水量
    @Column(name = "SQ60HSL")
    private Double sq60hsl;

    //80cm含水量
    @Column(name = "SQ80HSL")
    private Double sq80hsl;

    //20cm温度
    @Column(name = "SQ20wd")
    private Double sq20wd;

    //40cm温度
    @Column(name = "SQ40wd")
    private Double sq40wd;

    //60cm温度
    @Column(name = "SQ60wd")
    private Double sq60wd;

    //80cm温度
    @Column(name = "SQ80wd")
    private Double sq80wd;

    //检测时间
    @Column(name = "JCSJ")
    private String jcsj;
}
