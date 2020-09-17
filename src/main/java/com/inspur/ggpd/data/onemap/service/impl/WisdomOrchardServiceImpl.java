package com.inspur.ggpd.data.onemap.service.impl;

import com.inspur.ggpd.data.onemap.data.GeometryEntity;
import com.inspur.ggpd.data.onemap.data.OrchardFeaturesEntity;
import com.inspur.ggpd.data.onemap.data.OrchardPropertiesEntity;
import com.inspur.ggpd.data.onemap.data.WisdomOrchardData;
import com.inspur.ggpd.data.onemap.service.IWisdomOrchardService;
import com.inspur.ggpd.data.onemap.sjzydao.WisdomOrchardMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class WisdomOrchardServiceImpl implements IWisdomOrchardService {

    @Resource
    WisdomOrchardMapper wisdomOrchardMapper;

    @Override
    public WisdomOrchardData getWisdomOrchardData() {
        //智慧果园相关属性信息
        List<OrchardPropertiesEntity> orchardPropertiesEntities = wisdomOrchardMapper.getWisdomOrchardData();
        WisdomOrchardData wisdomOrchardData = new WisdomOrchardData();
        wisdomOrchardData.setType("FeatureCollection");

        List<OrchardFeaturesEntity> orchardFeaturesEntities = new ArrayList<>();
        for (OrchardPropertiesEntity orchardPropertiesEntity : orchardPropertiesEntities) {
            OrchardFeaturesEntity orchardFeaturesEntity = new OrchardFeaturesEntity();
            orchardFeaturesEntity.setType("Feature");
            GeometryEntity geometryEntity = new GeometryEntity();
            geometryEntity.setType("Point");
            //取出坐标属性
            List<Double> doubleList = new ArrayList<>();
            doubleList.add(orchardPropertiesEntity.getGdjd());
            doubleList.add(orchardPropertiesEntity.getGdwd());
            geometryEntity.setCoordinates(doubleList);
            //设置坐标属性
            orchardFeaturesEntity.setGeometry(geometryEntity);

            orchardFeaturesEntity.setProperties(orchardPropertiesEntity);
            orchardFeaturesEntities.add(orchardFeaturesEntity);
        }
        wisdomOrchardData.setFeatures(orchardFeaturesEntities);
        return wisdomOrchardData;
    }

    /**
     * 功能描述: 根据果园编号查询智慧果园气象和熵情情数据
     *
     * @Title getWisdomOrchardDataByGYBH
     * @param map
     * @return Map<String, Object>
     */
    @Override
    public Map<String, Object> getWisdomOrchardDataByGYBH(Map<String, Object> map) {
        return wisdomOrchardMapper.getWisdomOrchardDataByGYBH(map);
    }
}
