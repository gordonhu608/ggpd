package com.inspur.ggpd.data.onemap.sjzydao;

import com.inspur.ggpd.data.onemap.data.SjyztMrtj;
import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;

/**
 * Title:每日数据量统计信息
 * Copyright: Copyright (c)
 * Company:
 * Description:SjyztMrtjDao层 对应数据库的 每日数据量统计信息表
 *
 * @date 2020-08-13 18:57:21 中国标准时间
 */
public interface SjzyMapper {

    Long getInside(List<String> tables);

    Long getOutside(List<String> tables);

    Long getInternet(List<String> tables);

    Long getIOT(List<String> tables);

    Long getAmount(List<String> tables);

    Long getStorage(List<String> tables);

    /**
     * 获取每日新增数据
     *
     * @param tables
     * @return
     */
    Long getDailyData(List<String> tables);

    /**
     * 获取累计数据数量
     * @param tables
     * @return
     */
    Long getAccumulatedData(List<String> tables);
}
