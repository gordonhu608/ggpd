package com.inspur.ggpd.data.onemap.dao;

import com.inspur.ggpd.data.onemap.data.SjyztMrtj;
import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;

/**
 * @ClassName SjzyMapper
 * @Deacription
 * @Author tangxianwei
 * @Date 2020/8/14 14:20
 * @Version 1.0
 **/
public interface SjyztMrtjMapper extends EntityMapper<SjyztMrtj> {

    List<SjyztMrtj> queryList();

    /**
     * 获取本周新增数据量
     *
     * @return
     */
    Long getThisWeekData();

    /**
     * 获取本月新增数据量
     *
     * @return
     */
    Long getThisMonthData();

    /**
     * 获取上月最后一天统计数据总量
     *
     * @return
     */
    Long getLastMonthTotalData();


    /**
     * 获取上年同月最后一天统计数据总量
     *
     * @return
     */
    Long getLastYearSameMonthTotalData();

    /**
     * 获取昨日累计数据
     *
     * @return
     */
    Long getLastDayTotalData();

    SjyztMrtj getByDate(String date);

    /**
     * 获取非结构数据本周新增GB
     *
     * @return
     */
    Double getFjgThisWeek();

    /**
     * 获取非结构数据本月新增GB
     *
     * @return
     */
    Double getFjgThisMonth();

    /**
     * 获取非结构数据上月最后一天GB
     */
    Double getFjgLastMonth();

    /**
     * 获取非结构数据上年同月最后一天GB
     */
    Double getFjgLastYearSameMonth();


    /**
     * 获取本年新增数据量
     *
     * @return
     */
    Long getThisYearData();

    /**
     * 获取非结构化数据本年新增数据量
     *
     * @return
     */
    Double getFjgThisYearData();

}
