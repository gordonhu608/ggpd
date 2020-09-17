package com.inspur.ggpd.resource.catalog.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Title:资源目录表
 * Copyright: Copyright (c)
 * Company: inspur
 * Description:对应数据库的 资源目录表表
 *
 * @author txianwei
 * @date 2020-07-31 14:44:03 中国标准时间
 */

@Data
@Table(name = "SOURCE_CATALOG")
public class SourceCatalog implements Serializable {
    private static final long serialVersionUID = 1L;
    //主键
    @Id
    private String id;
    //资源名称
    @Column(name = "SOURCE_NAME")
    private String sourceName;
    //父ID
    @Column(name = "PARENT_ID")
    private String parentId;
    //资源类别:01 为产业目录，02为资源目录
    @Column(name = "SOURCE_TYPE")
    private String sourceType;
    //动作路径
    @Column(name = "ACTION_URL")
    private String actionUrl;
    //资源Code，数据库表名
    @Column(name = "TABLE_CODE")
    private String tableCode;
    //排序号
    @Column(name = "ORDER_NO")
    private Integer orderNo;
}
