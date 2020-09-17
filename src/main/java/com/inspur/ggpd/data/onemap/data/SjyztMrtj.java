package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.io.Serializable;

/**
 * Title:每日数据量统计信息
 * Copyright: Copyright (c)
 * Company:
 * Description:对应数据库的 每日数据量统计信息表
 *
 * @author
 * @date 2020-08-13 18:57:21 中国标准时间
 */

@Data
@Table(name = "SJYZT_MRTJ")
public class SjyztMrtj implements Serializable {
    private static final long serialVersionUID = 1L;
    //主键
    @Id
    private String id;
    //日期
    @Column(name = "RQ")
    private String rq;
    //内部数据量（总）
    @Column(name = "NB")
    private Long nb;
    //外部数据量（总）
    @Column(name = "WB")
    private Long wb;
    //互联网数据量（总）
    @Column(name = "HLW")
    private Long hlw;
    //物联网数据量（总）
    @Column(name = "WLW")
    private Long wlw;
    //经济数据量（总）
    @Column(name = "JJ")
    private Long jj;
    //气象数据量（总）
    @Column(name = "QX")
    private Long qx;
    //栽培管理数据量（总）
    @Column(name = "ZPGL")
    private Long zpgl;
    //种质资源数据量（总）
    @Column(name = "ZZZY")
    private Long zzzy;
    //生产资料数据量（总）
    @Column(name = "SCZL")
    private Long sczl;
    //产业支撑数据量（总）
    @Column(name = "CYZC")
    private Long cyzc;
    //产后加工数据量（总）
    @Column(name = "CHJG")
    private Long chjg;
    //数据采集量（总）
    @Column(name = "SJCJ")
    private Long sjcj;
    //入库数量（每日）
    @Column(name = "RK")
    private Long rk;
    //数据梳理数量（每日）
    @Column(name = "SJSL")
    private Long sjsl;
    //新增数据量（每日）
    @Column(name = "XZSJL")
    private Long xzsjl;
    //累计数据量(总)
    @Column(name = "LJ")
    private Double lj;
    //创建时间
    @Column(name = "CJSJ")
    private String cjsj;
    //非结构化数据总量
    @Column(name = "FJGZL")
    private Double fjgzl;
    //本周新增数据量
    @Transient
    private Long bzxz;
    //本月新增数据量
    @Transient
    private Long byxz;
    //本年新增数据量
    @Transient
    private Long bnxz;
    //月同比增长百分比
    @Transient
    private Double ytb;
    //非结构数据本周新增
    @Transient
    private Double fjgbzxz;
    //非结构数据本月新增数据量
    @Transient
    private Double fjgbyxz;
    //非结构或数据本年新增数据量
    @Transient
    private Double fjgbnxz;

    //非结构月同比增长百分比
    @Transient
    private Double fjgytb;
}