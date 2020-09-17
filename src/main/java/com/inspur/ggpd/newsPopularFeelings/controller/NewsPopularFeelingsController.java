package com.inspur.ggpd.newsPopularFeelings.controller;

import com.inspur.ggpd.newsPopularFeelings.data.NewsInfo;
import com.inspur.ggpd.newsPopularFeelings.data.PopularFeelingsInfo;
import com.inspur.ggpd.newsPopularFeelings.service.INewsPopularFeelingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping({"/newsPopularFeelings"})
public class NewsPopularFeelingsController {

    @Autowired
    private INewsPopularFeelingsService newsPopularFeelingsService;

    /**
     * @Title: getNewsInfo
     * @Description: 获取新闻信息
     * @param: paramMap
     * @return: Map<String,Object>
     * @date: 2020年7月22日
     */
    @RequestMapping({"/getNewsInfo"})
    @ResponseBody
    public Map<String,Object> getNewsInfo(@RequestBody Map<String,Object> paramMap) {
        return newsPopularFeelingsService.getNewsInfo(paramMap);
    }

    /**
     * @Title: getPopularFeelingsInfo
     * @Description: 获取舆情信息
     * @param: paramMap
     * @return: Map<String,Object>
     * @date: 2020年7月23日
     */
    @RequestMapping({"/getPopularFeelingsInfo"})
    @ResponseBody
    public Map<String,Object> getPopularFeelingsInfo(@RequestBody Map<String,Object> paramMap) {
        return newsPopularFeelingsService.getPopularFeelingsInfo(paramMap);
    }

    /**
     * @Title: getNewsInfoDetail
     * @Description: 获取新闻信息详情
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月24日
     */
    @RequestMapping({"/getNewsInfoDetail"})
    @ResponseBody
    public NewsInfo getNewsInfoDetail(@RequestBody Map<String,Object> paramMap) {
        return newsPopularFeelingsService.getNewsInfoDetail(paramMap);
    }

    /**
     * @Title: getPopularFeelingsInfoDetail
     * @Description: 获取舆情信息详情
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月24日
     */
    @RequestMapping({"/getPopularFeelingsInfoDetail"})
    @ResponseBody
    public PopularFeelingsInfo getPopularFeelingsInfoDetail(@RequestBody Map<String,Object> paramMap) {
        return newsPopularFeelingsService.getPopularFeelingsInfoDetail(paramMap);
    }

    /**
     * @Title: getStripNewsInfoId
     * @Description: 获取上一条新闻信息
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月30日
     */
    @RequestMapping({"/getStripNewsInfoId"})
    @ResponseBody
    public NewsInfo getStripNewsInfoId(@RequestBody Map<String,Object> paramMap) {
        return newsPopularFeelingsService.getStripNewsInfoId(paramMap);
    }


    /**
     * @Title: getNextStripNewsInfoId
     * @Description: 获取下一条新闻信息
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月30日
     */
    @RequestMapping({"/getNextStripNewsInfoId"})
    @ResponseBody
    public NewsInfo getNextStripNewsInfoId(@RequestBody Map<String,Object> paramMap) {
        return newsPopularFeelingsService.getNextStripNewsInfoId(paramMap);
    }


    /**
     * @Title: getStripPopularFeelingsInfoId
     * @Description: 获取上一条舆情信息
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月30日
     */
    @RequestMapping({"/getStripPopularFeelingsInfoId"})
    @ResponseBody
    public PopularFeelingsInfo getStripPopularFeelingsInfoId(@RequestBody Map<String,Object> paramMap) {
        return newsPopularFeelingsService.getStripPopularFeelingsInfoId(paramMap);
    }

    /**
     * @Title: getNextStripPopularFeelingsInfoId
     * @Description: 获取下一条舆情信息
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月30日
     */
    @RequestMapping({"/getNextStripPopularFeelingsInfoId"})
    @ResponseBody
    public PopularFeelingsInfo getNextStripPopularFeelingsInfoId(@RequestBody Map<String,Object> paramMap) {
        return newsPopularFeelingsService.getNextStripPopularFeelingsInfoId(paramMap);
    }
}
