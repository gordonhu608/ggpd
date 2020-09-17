package com.inspur.ggpd.data.onemap.task;

import com.inspur.ggpd.data.onemap.data.SjyztMrtj;
import com.inspur.ggpd.data.onemap.service.SjyztBzkyskService;
import com.inspur.ggpd.data.onemap.service.SjyztMrtjService;
import com.inspur.ggpd.resource.catalog.service.SourceCatalogService;
import com.inspur.ggpd.util.CommonUtil;
import org.loushang.framework.util.UUIDGenerator;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @ClassName SjyztMrtjTask
 * @Deacription 定时任务
 * @Author tangxianwei
 * @Date 2020/8/14 8:42
 * @Version 1.0
 **/
@Component
public class SjyztMrtjTask {

    @Resource
    private SjyztBzkyskService bzkyskService;
    @Resource
    private SjyztMrtjService mrtjService;
    @Resource
    private SourceCatalogService catalogService;

    @Scheduled(cron = "0 0 0 * * ?")
    public void get() {
        String date = new SimpleDateFormat("yyyy-MM-dd").format(new Date().getTime() - 24 * 60 * 60 * 1000);
        SjyztMrtj mrtj = mrtjService.getByDate(date);
        if (null != mrtj) {
            return;
        }

        List<String> allTables = catalogService.queryTableCode(null);
        List<String> economyTables = catalogService.queryTableCode("经济数据");
        List<String> meteorologyTables = catalogService.queryTableCode("气象数据");
        List<String> plantTables = catalogService.queryTableCode("栽培管理");
        List<String> germplasmTables = catalogService.queryTableCode("种质资源");
        List<String> productionTables = catalogService.queryTableCode("生产资料");
        List<String> industryTables = catalogService.queryTableCode("产业支撑");
        List<String> processTables = catalogService.queryTableCode("产后加工");
        List<String> originalTables = bzkyskService.queryTableCode();

        SjyztMrtj sjyztMrtj = new SjyztMrtj();
        sjyztMrtj.setId(UUIDGenerator.getUUID());
        sjyztMrtj.setRq(date);
        sjyztMrtj.setNb(mrtjService.getInside(allTables));
        sjyztMrtj.setWb(mrtjService.getOutside(allTables));
        sjyztMrtj.setHlw(mrtjService.getInternet(allTables));
        sjyztMrtj.setWlw(mrtjService.getIOT(allTables));
        sjyztMrtj.setJj(mrtjService.getAmount(economyTables));
        sjyztMrtj.setQx(mrtjService.getAmount(meteorologyTables));
        sjyztMrtj.setZpgl(mrtjService.getAmount(plantTables));
        sjyztMrtj.setZzzy(mrtjService.getAmount(germplasmTables));
        sjyztMrtj.setSczl(mrtjService.getAmount(productionTables));
        sjyztMrtj.setCyzc(mrtjService.getAmount(industryTables));
        sjyztMrtj.setChjg(mrtjService.getAmount(processTables));
        sjyztMrtj.setSjcj(bzkyskService.getCollection(originalTables));
        sjyztMrtj.setRk(mrtjService.getStorage(allTables));
        sjyztMrtj.setXzsjl(sjyztMrtj.getRk());
        sjyztMrtj.setLj(mrtjService.getAccumulatedData(allTables).doubleValue());
        sjyztMrtj.setCjsj(CommonUtil.getCurrentDateTime());
        sjyztMrtj.setFjgzl(mrtjService.getUnstructuredDataTotal());
        mrtjService.insert(sjyztMrtj);
    }
}
