package com.inspur.ggpd.resource.catalog.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Title:资源搜索配置表
 * Copyright: Copyright (c)
 * Company: inspur
 * Description:对应数据库的 资源搜索配置表表
 *
 * @author txianwei
 * @date 2020-07-31 14:45:27 中国标准时间
 */

@Data
@Table(name = "SOURCE_SEARCH_CONFIG")
public class SourceSearchConfig implements Serializable {
    private static final long serialVersionUID = 1L;
    //ID
    @Id
    private String id;
    //数据库表名
    @Column(name = "TABLE_CODE")
    private String tableCode;
    //地区字段名
    @Column(name = "AREA_FIELD")
    private String areaField;
    //地区是否显示:‘1’显示，‘0’ 不显示
    @Column(name = "AREA_SHOW_FLAG")
    private String areaShowFlag;
    //时间字段
    @Column(name = "TIME_FIELD")
    private String timeField;
    //时间是否显示: ‘1’显示，‘0’ 不显示
    @Column(name = "TIME_SHOW_FLAG")
    private String timeShowFlag;
    //关键字字段名
    @Column(name = "KEYWORD_FIELD")
    private String keywordField;
    //关键字是否显示:  ‘1’显示，‘0’ 不显示
    @Column(name = "KEYWORD_SHOW_FLAG")
    private String keywordShowFlag;
    //排序字段1
    @Column(name = "ORDER_FIELD1")
    private String orderField1;
    //排序字段1方式 DESC ASC
    @Column(name = "ORDER_DIR1")
    private String orderDir1;
    //排序字段2
    @Column(name = "ORDER_FIELD2")
    private String orderField2;
    //排序字段2排序方式 DESC ASC
    @Column(name = "ORDER_DIR2")
    private String orderDir2;
    //排序字段3
    @Column(name = "ORDER_FIELD3")
    private String orderField3;
    //排序字段3排序方式 DESC ASC
    @Column(name = "ORDER_DIR3")
    private String orderDir3;
    //排序字段4
    @Column(name = "ORDER_FIELD4")
    private String orderField4;
    //排序字段4排序方式 DESC ASC
    @Column(name = "ORDER_DIR4")
    private String orderDir4;
}