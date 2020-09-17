package com.inspur.ggpd.newsPopularFeelings.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * @Title: NewsInfo
 * @Description: 产业支撑_新闻舆情_新闻信息
 */
@Data
@Table(name = "CYZC_XWYQ_XWXX")
public class NewsInfo {

    //ID
    @Id
    @Column(name = "ID")
    private String id;

    //标题
    @Column(name = "BT")
    private String bt;

    //来源
    @Column(name = "LY")
    private String ly;

    //内容
    @Column(name = "NR")
    private String nr;

    //路径
    @Column(name = "LJ")
    private String lj;

    //数据来源
    @Column(name = "SJLY")
    private String sjly;

    //创建时间
    @Column(name = "CJSJ")
    private String cjsj;

    //更新时间
    @Column(name = "GXSJ")
    private String gxsj;

    //文章ID
    @Column(name = "WZID")
    private String wzid;

    //摘要
    @Column(name = "ZY")
    private String zy;

    //作者
    @Column(name = "ZZ")
    private String zz;

    //发布时间
    @Column(name = "FBSJ")
    private String fbsj;
}
