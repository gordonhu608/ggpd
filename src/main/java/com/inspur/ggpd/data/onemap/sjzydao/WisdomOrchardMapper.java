package com.inspur.ggpd.data.onemap.sjzydao;

import com.inspur.ggpd.data.onemap.data.OrchardPropertiesEntity;

import java.util.List;
import java.util.Map;

public interface WisdomOrchardMapper {
    //获取智慧果园所有信息
    List<OrchardPropertiesEntity> getWisdomOrchardData();

    //根据果园编号获取熵情数据
    Map<String, Object> getWisdomOrchardDataByGYBH(Map<String, Object> map);
}
