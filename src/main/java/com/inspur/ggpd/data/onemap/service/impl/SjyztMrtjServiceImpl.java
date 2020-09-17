package com.inspur.ggpd.data.onemap.service.impl;

import com.alibaba.fastjson.JSON;
import com.inspur.ggpd.data.onemap.dao.SjyztMrtjMapper;
import com.inspur.ggpd.data.onemap.data.ClusterInfo;
import com.inspur.ggpd.data.onemap.data.NameNodeInfo;
import com.inspur.ggpd.data.onemap.data.SjyztMrtj;
import com.inspur.ggpd.data.onemap.service.SjyztMrtjService;
import com.inspur.ggpd.data.onemap.sjzydao.SjzyMapper;
import com.inspur.ggpd.util.CommonUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Title:每日数据量统计信息
 * Copyright: Copyright (c)
 * Company:
 * Description:SjyztMrtj Service实现层
 *
 * @date 2020-08-13 18:57:21 中国标准时间
 */
@Service
public class SjyztMrtjServiceImpl implements SjyztMrtjService {

    @Resource
    private SjzyMapper sjzyMapper;
    @Resource
    private SjyztMrtjMapper sjyztMrtjMapper;
    //HDFS主机地址
    @Value("#{ggpdProperties['HDFS.url']}")
    public String url;
    //HDFS 用户名
    @Value("#{ggpdProperties['HDFS.userName']}")
    public String userName;
    //HDFS 密码
    @Value("#{ggpdProperties['HDFS.password']}")
    public String password;

    @Override
    public Long getInside(List<String> tables) {
        return sjzyMapper.getInside(tables);
    }

    @Override
    public Long getOutside(List<String> tables) {
        return sjzyMapper.getOutside(tables);
    }

    @Override
    public Long getInternet(List<String> tables) {
        return sjzyMapper.getInternet(tables);
    }

    @Override
    public Long getIOT(List<String> tables) {
        return sjzyMapper.getIOT(tables);
    }

    @Override
    public Long getAmount(List<String> tables) {
        return sjzyMapper.getAmount(tables);
    }

    @Override
    public Long getStorage(List<String> tables) {
        return sjzyMapper.getStorage(tables);
    }

    @Override
    public Long getAccumulatedData(List<String> tables) {
        return sjzyMapper.getAccumulatedData(tables);
    }

    @Override
    public void insert(SjyztMrtj sjyztMrtj) {
        sjyztMrtjMapper.insert(sjyztMrtj);
    }

    @Override
    public List<SjyztMrtj> query() {
        List<SjyztMrtj> sjyztMrtjList = sjyztMrtjMapper.queryList();
        SjyztMrtj sjyztMrtj = sjyztMrtjList.get(0);
        sjyztMrtj.setByxz(getThisMonthData());
        sjyztMrtj.setYtb(getMonthChainGrowth() * 100);
        sjyztMrtj.setFjgytb(getFjgMonthChainGrowth() * 100);
        sjyztMrtj.setFjgbyxz(getFjgThisMonthData());
        sjyztMrtj.setBnxz(getThisYearData());
        sjyztMrtj.setFjgbnxz(getFjgThisYearData());
        return sjyztMrtjList;
    }

    private Long getThisYearData() {
        Long result = sjyztMrtjMapper.getThisYearData();
        if (result == null) {
            return 0l;
        } else {
            return result;
        }
    }

    private Double getFjgThisYearData() {
        Double result = sjyztMrtjMapper.getFjgThisYearData();
        if (result == null) {
            return 0.0;
        } else {
            return result;
        }
    }

    @Override
    public SjyztMrtj getByDate(String date) {
        return sjyztMrtjMapper.getByDate(date);
    }

    private Long getThisWeekData() {
        return sjyztMrtjMapper.getThisWeekData();
    }

    private Double getFjgThisWeekData() {
        Double result = sjyztMrtjMapper.getFjgThisWeek();
        if (result == null) {
            return 0.0;
        } else {
            return result;
        }
    }

    private Double getFjgThisMonthData() {
        Double result = sjyztMrtjMapper.getFjgThisMonth();
        if (result == null) {
            return 0.0;
        } else {
            return result;
        }
    }

    private Long getThisMonthData() {
        Long add = sjyztMrtjMapper.getThisMonthData();
        if (null == add) {
            return 0l;
        } else {
            return add;
        }
    }

    private Double getMonthChainGrowth() {
        //本月新增数据量
        Long add = sjyztMrtjMapper.getThisMonthData();
        if (null == add) {
            add = 0l;
        }
        //上月最后一天统计数据总量
        Long total = sjyztMrtjMapper.getLastMonthTotalData();
        if (total == null || total == 0) {
            return 1.0;
        } else {
            double result = add / (double) total;
            return (double) Math.round(result * 10000) / 10000;
        }
    }

    private Double getMonthComparedWithSameGrowth() {
        //本月最新数据总量-昨日总量统计数据
        Long lastDay = sjyztMrtjMapper.getLastDayTotalData();
        //去年相同月数据
        Long lastYear = sjyztMrtjMapper.getLastYearSameMonthTotalData();
        if (lastYear == null || lastYear == 0) {
            return 1.0;
        } else {
            double result = lastDay / (double) lastYear;
            return (double) Math.round(result * 10000) / 10000;
        }
    }


    private Double getFjgMonthChainGrowth() {
        //本月新增数据量
        Double add = sjyztMrtjMapper.getFjgThisMonth();
        if (add == null) {
            add = 0.0;
        }
        //上月最后一天统计数据总量
        double total = sjyztMrtjMapper.getFjgLastMonth();
        if (add == 0) {
            return 0.0;
        }
        if (total == 0.0) {
            return 1.0;
        } else {
            double result = add / (double) total;
            return (double) Math.round(result * 10000) / 10000;
        }
    }


    private Double getFjgMonthComparedWithSameGrowth() {
        //本月最新数据总量
        double add = sjyztMrtjMapper.getFjgThisMonth();
        //去年相同月数据
        double lastYear = sjyztMrtjMapper.getFjgLastYearSameMonth();
        if (lastYear == 0) {
            return 1.0;
        } else {
            double result = add / lastYear;
            return (double) Math.round(result * 10000) / 10000;
        }
    }

    /**
     * 获取非结构数据大小(GB)
     *
     * @return
     */
    @Override
    public Double getUnstructuredDataTotal() {
        ClusterInfo clusters = getClusters();
        double result = 0l;
        List<NameNodeInfo> nameNodeList = getNameNodeList(clusters);
        if (nameNodeList.size() > 0) {
            for (NameNodeInfo nameNodeInfo : nameNodeList) {
                NameNodeInfo.MetricsBean metrics = nameNodeInfo.getMetrics();
                if (metrics != null) {
                    NameNodeInfo.MetricsBean.DfsBean dfs = metrics.getDfs();
                    if (dfs != null) {
                        NameNodeInfo.MetricsBean.DfsBean.FSNamesystemBean fsNamesystem = dfs.getFSNamesystem();
                        if (fsNamesystem != null) {
                            result += fsNamesystem.getCapacityUsedGB();
                        }
                    }
                }
            }
        }
        return result;
    }

    /**
     * 获取HDFS Cluster
     *
     * @return
     */
    private ClusterInfo getClusters() {
        String[] clustersInfoCmd = {"curl", "-u", userName + ":" + password, url + "/api/v1/clusters"};
        String result = CommonUtil.execCurl(clustersInfoCmd);
        ClusterInfo clusterInfo = JSON.parseObject(result, ClusterInfo.class);
        return clusterInfo;
    }

    /**
     * 根据 HDFS Cluster获取NameNode
     *
     * @param clusterInfo
     * @return
     */
    private List<NameNodeInfo> getNameNodeList(ClusterInfo clusterInfo) {
        List<NameNodeInfo> list = new ArrayList<>();
        if (clusterInfo != null) {
            List<ClusterInfo.ItemsBean> items = clusterInfo.getItems();
            if (items != null && items.size() > 0) {
                for (ClusterInfo.ItemsBean item : items) {
                    String[] dfsInfoCmd = {"curl", "-u", userName + ":" + password, url + "/api/v1/clusters/" + item.getClusters().getCluster_name() + "/services/HDFS/components/NAMENODE"};
                    String result = CommonUtil.execCurl(dfsInfoCmd);
                    NameNodeInfo nameNodeInfo = JSON.parseObject(result, NameNodeInfo.class);
                    list.add(nameNodeInfo);
                }
            }
        }
        return list;
    }

}
