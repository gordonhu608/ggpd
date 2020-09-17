package com.inspur.ggpd.newsPopularFeelings.service;

import com.inspur.ggpd.newsPopularFeelings.data.NewsInfo;
import com.inspur.ggpd.newsPopularFeelings.data.PopularFeelingsInfo;

import java.util.Map;

public interface INewsPopularFeelingsService {

    /**
     * @Title: getNewsInfo
     * @Description: 获取新闻信息
     * @param: paramMap
     * @return: Map<String,Object>
     * @date: 2020年7月22日
     */
    Map<String,Object> getNewsInfo(Map<String, Object> paramMap);

    /**
     * @Title: getPopularFeelingsInfo
     * @Description: 获取舆情信息
     * @param: paramMap
     * @return: Map<String,Object>
     * @date: 2020年7月23日
     */
    Map<String,Object> getPopularFeelingsInfo(Map<String, Object> paramMap);

    /**
     * @Title: getNewsInfoDetail
     * @Description: 获取新闻信息详情
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月24日
     */
    NewsInfo getNewsInfoDetail(Map<String, Object> paramMap);

    /**
     * @Title: getPopularFeelingsInfoDetail
     * @Description: 获取舆情信息详情
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月24日
     */
    PopularFeelingsInfo getPopularFeelingsInfoDetail(Map<String, Object> paramMap);

    /**
     * @Title: getStripNewsInfoId
     * @Description: 获取上一条新闻信息
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月30日
     */
    NewsInfo getStripNewsInfoId(Map<String, Object> paramMap);

    /**
     * @Title: getNextStripNewsInfoId
     * @Description: 获取下一条新闻信息
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月30日
     */
    NewsInfo getNextStripNewsInfoId(Map<String, Object> paramMap);

    /**
     * @Title: getStripPopularFeelingsInfoId
     * @Description: 获取下一条舆情信息
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月30日
     */
    PopularFeelingsInfo getStripPopularFeelingsInfoId(Map<String, Object> paramMap);

    /**
     * @Title: getNextStripPopularFeelingsInfoId
     * @Description: 获取下一条舆情信息
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月30日
     */
    PopularFeelingsInfo getNextStripPopularFeelingsInfoId(Map<String, Object> paramMap);
}
