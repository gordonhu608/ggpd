package com.inspur.ggpd.newsPopularFeelings.sjzydao;

import com.inspur.ggpd.newsPopularFeelings.data.PopularFeelingsInfo;
import org.loushang.framework.mybatis.mapper.EntityMapper;

import java.util.List;
import java.util.Map;

public interface PopularFeelingsInfoMapper extends EntityMapper<PopularFeelingsInfo> {

    /**
     * @Title: getPopularFeelingsInfo
     * @Description: 获取舆情信息
     * @param: paramMap
     * @return: List<PopularFeelingsInfo>
     * @date: 2020年7月23日
     */
    List<PopularFeelingsInfo> getPopularFeelingsInfo(Map<String, Object> paramMap);

    /**
     * @Title: getpopularFeelingsInfoTotal
     * @Description: 获取舆情信息总条数
     * @param: paramMap
     * @return: int
     * @date: 2020年7月24日
     */
    int getpopularFeelingsInfoTotal();

    /**
     * @Title: getPopularFeelingsInfoDetail
     * @Description: 获取舆情信息详情
     * @param: paramMap
     * @return: PopularFeelingsInfo
     * @date: 2020年7月24日
     */
    PopularFeelingsInfo getPopularFeelingsInfoDetail(Map<String, Object> paramMap);

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
