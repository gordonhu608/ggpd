package com.inspur.ggpd.newsPopularFeelings.service.impl;

import com.inspur.ggpd.newsPopularFeelings.sjzydao.NewsInfoMapper;
import com.inspur.ggpd.newsPopularFeelings.sjzydao.PopularFeelingsInfoMapper;
import com.inspur.ggpd.newsPopularFeelings.data.NewsInfo;
import com.inspur.ggpd.newsPopularFeelings.data.PopularFeelingsInfo;
import com.inspur.ggpd.newsPopularFeelings.service.INewsPopularFeelingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class NewsPopularFeelingsServiceImpl implements INewsPopularFeelingsService {

    //private static Log log = LogFactory.getLog(PlotServiceImpl.class);

    @Autowired
    private NewsInfoMapper newsInfoMapper;

    @Autowired
    private PopularFeelingsInfoMapper popularFeelingsInfoMapper;

    /**
     * @Title: getNewsInfo
     * @Description: 获取新闻信息
     * @param: paramMap
     * @return: List<Map<String,Object>>
     * @date: 2020年7月22日
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
    public Map<String,Object> getNewsInfo(Map<String, Object> paramMap) {
        Map<String,Object> map = new HashMap<String, Object>();
        List<NewsInfo> newsInfoList = newsInfoMapper.getNewsInfo(paramMap);
        int newsInfoTotal = newsInfoMapper.getNewsInfoTotal();
        map.put("list",newsInfoList);
        map.put("total",newsInfoTotal);
        return map;
    }

    /**
     * @Title: getPopularFeelingsInfo
     * @Description: 获取舆情信息
     * @param: paramMap
     * @return: List<Map<String,Object>>
     * @date: 2020年7月23日
     */
    @Override
    public Map<String,Object> getPopularFeelingsInfo(Map<String, Object> paramMap) {
        Map<String,Object> map = new HashMap<String, Object>();
        List<PopularFeelingsInfo> popularFeelingsInfoList = popularFeelingsInfoMapper.getPopularFeelingsInfo(paramMap);
        int popularFeelingsInfoTotal = popularFeelingsInfoMapper.getpopularFeelingsInfoTotal();
        map.put("list",popularFeelingsInfoList);
        map.put("total",popularFeelingsInfoTotal);
        return map;
    }

    /**
     * @Title: getNewsInfoDetail
     * @Description: 获取新闻信息详情
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月24日
     */
    @Override
    public NewsInfo getNewsInfoDetail(Map<String, Object> paramMap) {
        return newsInfoMapper.getNewsInfoDetail(paramMap);
    }

    /**
     * @Title: getPopularFeelingsInfoDetail
     * @Description: 获取舆情信息详情
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月24日
     */
    @Override
    public PopularFeelingsInfo getPopularFeelingsInfoDetail(Map<String, Object> paramMap) {
        return popularFeelingsInfoMapper.getPopularFeelingsInfoDetail(paramMap);
    }

    /**
     * @Title: getStripNewsInfoId
     * @Description: 获取上一条新闻信息
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月30日
     */
    @Override
    public NewsInfo getStripNewsInfoId(Map<String, Object> paramMap) {
        return newsInfoMapper.getStripNewsInfoId(paramMap);
    }

    /**
     * @Title: getNextStripNewsInfoId
     * @Description: 获取下一条新闻信息
     * @param: paramMap
     * @return: NewsInfo
     * @date: 2020年7月30日
     */
    @Override
    public NewsInfo getNextStripNewsInfoId(Map<String, Object> paramMap) {
        return newsInfoMapper.getNextStripNewsInfoId(paramMap);
    }

    /**
     * @Title: getStripPopularFeelingsInfoId
     * @Description: 获取下一条舆情信息
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月30日
     */
    @Override
    public PopularFeelingsInfo getStripPopularFeelingsInfoId(Map<String, Object> paramMap) {
        return popularFeelingsInfoMapper.getStripPopularFeelingsInfoId(paramMap);
    }

    /**
     * @Title: getNextStripPopularFeelingsInfoId
     * @Description: 获取下一条舆情信息
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月30日
     */
    @Override
    public PopularFeelingsInfo getNextStripPopularFeelingsInfoId(Map<String, Object> paramMap) {
        return popularFeelingsInfoMapper.getNextStripPopularFeelingsInfoId(paramMap);
    }
}
