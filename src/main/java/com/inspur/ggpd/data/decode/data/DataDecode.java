package com.inspur.ggpd.data.decode.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.io.Serializable;


/**
 * Title:数据解读
 * Copyright: Copyright (c)
 * Company:
 * Description:对应数据库的 数据解读表
 *
 * @author
 * @date 2020-08-22 11:36:56 中国标准时间
 */

@Data
@Table(name = "DATA_DECODE")
public class DataDecode implements Serializable {
    private static final long serialVersionUID = 1L;
    //主键
    @Id
    private String id;
    //标题
    @Column(name = "BT")
    private String bt;
    //数据类型，贸易解读：trade 生产解读：product 价格解读：price 解读分析：analysis
    @Column(name = "SJLX")
    private String sjlx;
    //年份
    @Column(name = "NF")
    private String nf;
    //月份
    @Column(name = "YF")
    private String yf;
    //日期
    @Column(name = "RQ")
    private String rq;
    //发布时间
    @Column(name = "FBSJ")
    private String fbsj;
    //来源
    @Column(name = "LY")
    private String ly;
    //解读数据JSON
    @Column(name = "JDSJ")
    private String jdsj;
    //文本数据
    @Column(name = "WBSJ")
    private String wbsj;
    //创建时间
    @Column(name = "CJSJ")
    private String cjsj;
    //更新时间
    @Column(name = "GXSJ")
    private String gxsj;

}