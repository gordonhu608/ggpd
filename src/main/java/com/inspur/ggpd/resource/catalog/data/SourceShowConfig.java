package com.inspur.ggpd.resource.catalog.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Title:资源显示配置表
 * Copyright: Copyright (c)
 * Company: inspur
 * Description:对应数据库的 资源显示配置表表
 *
 * @author txianwei
 * @date 2020-07-31 14:45:32 中国标准时间
 */

@Data
@Table(name = "SOURCE_SHOW_CONFIG")
public class SourceShowConfig implements Serializable {
    private static final long serialVersionUID = 1L;
    //ID
    @Id
    private String id;
    //资源表code
    @Column(name = "TABLE_CODE")
    private String tableCode;
    //字段名
    @Column(name = "FIELD_NAME")
    private String fieldName;
    //是否显示
    @Column(name = "SHOW_FLAG")
    private String showFlag;
    //标题头
    @Column(name = "TITLE")
    private String title;
    //显示序号
    @Column(name = "ORDER_NO")
    private Integer orderNo;
    //原始字段名
    @Column(name = "ORG_NAME")
    private String orgName;
}