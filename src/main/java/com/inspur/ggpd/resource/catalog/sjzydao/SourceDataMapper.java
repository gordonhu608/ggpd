package com.inspur.ggpd.resource.catalog.sjzydao;

import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface SourceDataMapper {

    /**
     * @Title: findAll
     * @Description: 获取资源列表数据
     * @param: params 条件参数
     * @param: showConfig 显示配置
     * @return: Map<String ,   Object>
     * @date: 2020年8月1日
     */
    List<Map<String, Object>> findAll(Map<String, Object> params);

    /**
     * 根据ID查询数据
     *
     * @param id 主键
     * @param tableCode 表名
     * @return
     */
    Map<String, Object> getDataById(@Param("id") String id, @Param("tableCode") String tableCode);

}
