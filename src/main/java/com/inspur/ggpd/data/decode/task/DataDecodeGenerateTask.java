package com.inspur.ggpd.data.decode.task;

import com.inspur.ggpd.data.decode.service.DataDecodeService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * @ClassName DataDecodeGenerateTask
 * @Deacription 数据解读生成定时任务
 * @Author tangxianwei
 * @Date 2020/8/26 14:08
 * @Version 1.0
 **/
@Component
public class DataDecodeGenerateTask {
    private static Log log = LogFactory.getLog(DataDecodeGenerateTask.class);

    @Resource
    private DataDecodeService decodeService;

    /**
     * 生产解读生成 每天生成一次，如果存在就不再生成
     */
    @Scheduled(cron = "0 0 0 * * ?")
    public void generateProductDecode() {
        try {
            //int year = Integer.parseInt(CommonUtil.getCurrentDate().substring(0, 4)) - 1;
            // TODO:  这里上线时要进行修改， 目前生产解读2019年的数据不全，故使用 2018年
            int year = 2018;
            decodeService.generateProductDecode(year);
        } catch (Exception ex) {
            log.error("生产解读定时任务错误：" + ex.getMessage());
            ex.printStackTrace();
        }
    }

    /**
     * 贸易解读生成 每天生成一次，如果存在就不再生成
     */
    @Scheduled(cron = "0 0 0 * * ?")
    public void generateTradeDecode() {
        try {
            //int year = Integer.parseInt(CommonUtil.getCurrentDate().substring(0, 4)) - 1;
            int time = 202004;
            decodeService.generateTradeDecode(time);
        } catch (Exception ex) {
            log.error("贸易解读定时任务错误：" + ex.getMessage());
            ex.printStackTrace();
        }
    }

    /**
     * 价格解读生成 每天生成一次，如果存在就不再生成
     */
    @Scheduled(cron = "0 0 0 * * ?")
    public void generatePriceDecode() {
        try {
            //int year = Integer.parseInt(CommonUtil.getCurrentDate().substring(0, 4)) - 1;
            int time = 202008;
            decodeService.generatePriceDecode(time);
        } catch (Exception ex) {
            log.error("贸易解读定时任务错误：" + ex.getMessage());
            ex.printStackTrace();
        }
    }
}
