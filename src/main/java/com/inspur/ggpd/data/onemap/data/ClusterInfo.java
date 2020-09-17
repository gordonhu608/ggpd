package com.inspur.ggpd.data.onemap.data;

import java.util.List;

/**
 * @ClassName ClusterInfo
 * @Deacription HDFS集群信息
 * @Author tangxianwei
 * @Date 2020/9/2 14:36
 * @Version 1.0
 **/
public class ClusterInfo {


    /**
     * href : http://10.221.13.64:8080/api/v1/clusters
     * items : [{"href":"http://10.221.13.64:8080/api/v1/clusters/cluster1","Clusters":{"cluster_name":"cluster1"}}]
     */

    private String href;
    private List<ItemsBean> items;

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public List<ItemsBean> getItems() {
        return items;
    }

    public void setItems(List<ItemsBean> items) {
        this.items = items;
    }

    public static class ItemsBean {
        /**
         * href : http://10.221.13.64:8080/api/v1/clusters/cluster1
         * Clusters : {"cluster_name":"cluster1"}
         */

        private String href;
        private ClustersBean Clusters;

        public String getHref() {
            return href;
        }

        public void setHref(String href) {
            this.href = href;
        }

        public ClustersBean getClusters() {
            return Clusters;
        }

        public void setClusters(ClustersBean Clusters) {
            this.Clusters = Clusters;
        }

        public static class ClustersBean {
            /**
             * cluster_name : cluster1
             */

            private String cluster_name;

            public String getCluster_name() {
                return cluster_name;
            }

            public void setCluster_name(String cluster_name) {
                this.cluster_name = cluster_name;
            }
        }
    }
}
