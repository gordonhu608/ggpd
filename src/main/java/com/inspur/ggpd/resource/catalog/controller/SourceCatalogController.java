package com.inspur.ggpd.resource.catalog.controller;

import com.inspur.ggpd.resource.catalog.data.SourceCatalog;
import com.inspur.ggpd.resource.catalog.service.SourceCatalogService;
import com.inspur.ggpd.resource.catalog.service.SourceSearchConfigService;
import com.inspur.ggpd.resource.catalog.service.SourceShowConfigService;
import com.inspur.ggpd.resource.catalog.service.VarietyInformationService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/source")
public class SourceCatalogController {

    @Resource
    private SourceCatalogService catalogService;
    @Resource
    private SourceSearchConfigService searchConfigService;
    @Resource
    private SourceShowConfigService showConfigService;
    @Resource
    private VarietyInformationService varietyInformationService;

    /**
     * @Title: click
     * @Description: 增加资源目录点击次数
     * @param: id 资源目录id
     * @return: Boolean
     * @date: 2020年8月24日
     */
    @PostMapping("/catalog/click/{id}")
    @ResponseBody
    public Boolean click(@PathVariable String id) {
        return catalogService.click(id);
    }

    /**
     * @Title: queryCatalog
     * @Description: 获取资源目录
     * @param: type 资源类别
     * @return: List<SourceCatalog>
     * @date: 2020年7月31日
     */
    @GetMapping("/catalog/query/{type}")
    @ResponseBody
    public List<SourceCatalog> queryCatalog(@PathVariable String type) {
        return catalogService.findAll(type);
    }

    /**
     * @Title: query
     * @Description: 获取资源列表数据
     * @param: params
     * @return: Map<String, Object>
     * @date: 2020年8月1日
     */
    @PostMapping("/list/query/{tableCode}")
    @ResponseBody
    public Map<String, Object> query(@PathVariable String tableCode, @RequestBody Map<String, Object> params) {
        Map<String, Object> searchConfig = (Map<String, Object>) params.get("searchConfig");
        if (searchConfig.isEmpty()) {
            params.put("searchConfig", searchConfigService.getByTableCode(tableCode));
        }
        List<Map<String, Object>> showConfig = (List<Map<String, Object>>) params.get("showConfig");
        if (0 == showConfig.size()) {
            params.put("showConfig", showConfigService.findAll(tableCode));
        }
        params.put("tableCode", tableCode);
        return catalogService.queryList(params);
    }

    /**
     * @Title: query
     * @Description: 获取资源列表数据
     * @param: params
     * @return: Map<String, Object>
     * @date: 2020年8月1日
     */
    @PostMapping("/treeNode/query/{tableCode}")
    @ResponseBody
    public Map<String, Object> treeNodeQuery(@PathVariable String tableCode, @RequestBody Map<String, Object> params) {
        Map<String, Object> searchConfig = (Map<String, Object>) params.get("searchConfig");
        if (searchConfig.isEmpty()) {
            params.put("searchConfig", searchConfigService.getByTableCode(tableCode));
        }
        List<Map<String, Object>> showConfig = (List<Map<String, Object>>) params.get("showConfig");
        if (0 == showConfig.size()) {
            params.put("showConfig", showConfigService.findAll(tableCode));
        }
        params.put("tableCode", tableCode);
        return catalogService.queryListForTreeNode(params);
    }

    @GetMapping("/varietyInformation")
    public String varietyInformation() {
        return "zyml/more";
    }

    /**
     * 根据tableCode获取所有的列注释
     * @param tableCode 表名
     */
    @GetMapping("/varietyInformation/remarks/{tableCode}")
    @ResponseBody
    public Object getTableColumnRemarksByTableCode(@PathVariable String tableCode) {
        return varietyInformationService.getTableColumnsByTableCode(tableCode);
    }

    /**
     * 根据id和tableCode查询数据
     * @param id 主键
     * @param tableCode 表名
     */
    @GetMapping("/varietyInformation/{id}/{tableCode}")
    @ResponseBody
    public Object getVarietyInformation(@PathVariable String id,@PathVariable String tableCode){
        try{
            return varietyInformationService.getDataById(id,tableCode);
        } catch (Exception ex){

        }
        return null;
    }
}
