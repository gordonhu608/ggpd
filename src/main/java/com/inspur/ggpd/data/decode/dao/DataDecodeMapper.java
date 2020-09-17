package com.inspur.ggpd.data.decode.dao;

import com.inspur.ggpd.data.decode.data.DataDecode;
import org.apache.ibatis.annotations.Param;
import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;
import java.util.Map;

/**
 * Title:数据解读
 * Copyright: Copyright (c)
 * Company:
 * Description:DataDecodeDao层 对应数据库的 数据解读表
 *
 * @author
 * @date 2020-08-22 11:36:56 中国标准时间
 */
public interface DataDecodeMapper extends EntityMapper<DataDecode> {

    /**
     * 根据数据类型与关键字查询数据解读
     *
     * @return
     */
    List<DataDecode> getDataDecodesByDataTypeAndKeyword(Map<String, Object> params);

    /**
     * 根据报告类型、年份、月份查询解读个数
     *
     * @param type
     * @param year
     * @param month
     * @return
     */
    Integer getDataDecodeCountByTypeYearMonth(@Param("type") String type, @Param("year") String year, @Param("month") String month);
}