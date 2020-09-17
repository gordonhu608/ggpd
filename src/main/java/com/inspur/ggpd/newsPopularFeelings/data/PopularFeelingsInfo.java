package com.inspur.ggpd.newsPopularFeelings.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Table;

/**
 * @Title: PopularFeelingsInfo
 * @Description: 产业支撑_新闻舆情_舆情信息
 */
@Data
@Table(name = "CYZC_XWYQ_YQXX")
public class PopularFeelingsInfo {

    //条目ID
    @Column(name = "ID")
    private String id;

    //作者名
    @Column(name = "ZZM")
    private String zzm;

    //来源
    @Column(name = "LY")
    private String ly;

    //发布时间
    @Column(name = "FBSJ")
    private String fbsj;

    //标题名
    @Column(name = "BTM")
    private String btm;

    //创建时间
    @Column(name = "CJSJ")
    private String cjsj;

    //相关链接
    @Column(name = "XGLJ")
    private String xglj;

    //数据来源
    @Column(name = "SJLY")
    private String sjly;

    //更新时间
    @Column(name = "GXSJ")
    private String gxsj;

    //原始数据ID
    @Column(name = "YSSJID")
    private String yssjid;

    //核心内容
    @Column(name = "HXNR")
    private String hxnr;

    //插入时间
    @Column(name = "CRSJ")
    private String crsj;
}
