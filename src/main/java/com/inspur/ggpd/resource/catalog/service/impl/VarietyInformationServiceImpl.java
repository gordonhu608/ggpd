package com.inspur.ggpd.resource.catalog.service.impl;

import com.inspur.ggpd.resource.catalog.data.TableColumn;
import com.inspur.ggpd.resource.catalog.service.VarietyInformationService;
import com.inspur.ggpd.resource.catalog.sjzydao.SourceDataMapper;
import com.inspur.ggpd.util.DbUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 *    
 * 项目名:   ggpd
 * 包名:     com.inspur.ggpd.resource.catalog.service.impl  
 * 类名:     VarietyInformationServiceImpl
 * 描述:     [一句话描述该类的功能]
 * 创建人:    tangxianwei   
 * 创建时间:  2020/8/1 15:52  
 * 修改人:    tangxianwei  
 * 修改时间:  2020/8/1 15:52  
 * 修改备注:  [说明本次修改内容]  
 * 版本:     v1.0  
 *  
 */
@Service
public class VarietyInformationServiceImpl implements VarietyInformationService {
    @Resource
    private DbUtil dbUtil;
    @Resource
    private SourceDataMapper sourceDataMapper;

    @Override
    public List<TableColumn> getTableColumnsByTableCode(String tableCode) {
        return dbUtil.getTableColumns(tableCode);
    }

    @Override
    public Map<String, Object> getDataById(String id, String tableCode) throws Exception {
        if (id == null || id.equals("")) {
            throw new Exception("参数id不能为空！");
        }
        if (tableCode == null || tableCode.equals("")) {
            throw new Exception("参数tableCode不能为空！");
        }
        return sourceDataMapper.getDataById(id, tableCode);
    }
}
