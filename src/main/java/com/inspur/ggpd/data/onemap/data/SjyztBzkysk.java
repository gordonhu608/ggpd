package com.inspur.ggpd.data.onemap.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;


/**
 * Title:标准库与原始库对应关系
 * Copyright: Copyright (c)
 * Company:
 * Description:对应数据库的 标准库与原始库对应关系表
 *
 * @author
 * @date 2020-08-15 17:21:03 中国标准时间
 */

@Data
@Table(name = "SJYZT_BZKYSK")
public class SjyztBzkysk implements Serializable {
    private static final long serialVersionUID = 1L;
    //主键
    @Id
    private String id;
    //标准库表名
    @Column(name = "BZKBM")
    private String bzkbm;
    //原始库表名
    @Column(name = "YSKBM")
    private String yskbm;
}