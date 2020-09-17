package com.inspur.ggpd.data.onemap.service;

import com.inspur.ggpd.data.onemap.data.SjyztMrtj;

import java.util.List;

/**
 * Title:每日数据量统计信息
 * Copyright: Copyright (c)
 * Company:
 * Description:SjyztMrtj Service层
 *
 * @date 2020-08-13 18:57:21 中国标准时间
 */
public interface SjyztMrtjService {

    Long getInside(List<String> tables);

    Long getOutside(List<String> tables);

    Long getInternet(List<String> tables);

    Long getIOT(List<String> tables);

    Long getAmount(List<String> tables);

    Long getStorage(List<String> tables);

    Long getAccumulatedData(List<String> tables);

    void insert(SjyztMrtj sjyztMrtj);

    List<SjyztMrtj> query();

    SjyztMrtj getByDate(String date);

    Double getUnstructuredDataTotal();
}
