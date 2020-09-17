package com.inspur.ggpd.resource.catalog.service;

import com.inspur.ggpd.resource.catalog.data.TableColumn;

import java.util.List;
import java.util.Map;

/**
 *    
 * 项目名:   ggpd
 * 包名:     com.inspur.ggpd.resource.catalog.service  
 * 接口名:    VarietyInformationService
 * 描述:     [一句话描述该接口的功能]
 * 创建人:    tangxianwei   
 * 创建时间:  2020/8/1 16:00  
 * 修改人:    tangxianwei  
 * 修改时间:  2020/8/1 16:00  
 * 修改备注:  [说明本次修改内容]  
 * 版本:     v1.0  
 *  
 */
public interface VarietyInformationService {

    /**
     * 根据数据库表名获取字段及字段注释
     *
     * @param tableCode
     * @return
     */
    List<TableColumn> getTableColumnsByTableCode(String tableCode);

    /**
     * 根据ID和表名查询数据
     * @param id 主键
     * @param tableCode 要查询的表名
     * @return
     */
    Map<String, Object> getDataById(String id, String tableCode)throws Exception;
}