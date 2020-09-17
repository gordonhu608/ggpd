package com.inspur.ggpd.data.onemap.data;

import java.util.List;

/**
 * @ClassName NameNodeInfo
 * @Deacription HDFS NAMENODE
 * @Author tangxianwei
 * @Date 2020/9/2 15:43
 * @Version 1.0
 **/
public class NameNodeInfo {


    /**
     * href : http://10.221.13.64:8080/api/v1/clusters/cluster1/services/HDFS/components/NAMENODE
     * ServiceComponentInfo : {"CapacityRemaining":1428629569915,"CapacityTotal":1606605078528,"CapacityUsed":77053604377,"DeadNodes":"{}","DecomNodes":"{}","HeapMemoryMax":1052770304,"HeapMemoryUsed":573137328,"LiveNodes":"{\"indata-10-221-13-84.indata.com:1019\":{\"infoAddr\":\"10.221.13.84:1022\",\"infoSecureAddr\":\"10.221.13.84:0\",\"xferaddr\":\"10.221.13.84:1019\",\"lastContact\":2,\"usedSpace\":25684914355,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":19009011533,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25684914355,\"remaining\":488507730729,\"blockScheduled\":0,\"blockPoolUsed\":25684914355,\"blockPoolUsedPercent\":4.796122,\"volfails\":0,\"lastBlockReport\":145},\"indata-10-221-13-113.indata.com:1019\":{\"infoAddr\":\"10.221.13.113:1022\",\"infoSecureAddr\":\"10.221.13.113:0\",\"xferaddr\":\"10.221.13.113:1019\",\"lastContact\":2,\"usedSpace\":25692753895,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":10742890521,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25692753895,\"remaining\":496766012201,\"blockScheduled\":0,\"blockPoolUsed\":25692753895,\"blockPoolUsedPercent\":4.797586,\"volfails\":0,\"lastBlockReport\":62},\"indata-10-221-13-64.indata.com:1019\":{\"infoAddr\":\"10.221.13.64:1022\",\"infoSecureAddr\":\"10.221.13.64:0\",\"xferaddr\":\"10.221.13.64:1019\",\"lastContact\":1,\"usedSpace\":25675936127,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":64169893505,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25675936127,\"remaining\":443355826985,\"blockScheduled\":0,\"blockPoolUsed\":25675936127,\"blockPoolUsedPercent\":4.7944455,\"volfails\":0,\"lastBlockReport\":203}}","NonDfsUsedSpace":93921795559,"NonHeapMemoryMax":-1,"NonHeapMemoryUsed":147385520,"PercentRemaining":88.922264,"PercentUsed":4.7960515,"Safemode":"","StartTime":1597908772628,"UpgradeFinalized":true,"Version":"3.1.1.3.1.0.0-78, re4f82af51faec922b4804d0232a637422ec29e64","category":"MASTER","cluster_name":"cluster1","component_name":"NAMENODE","desired_stack":"HDP-3.1","desired_version":"3.1.0.0-78","display_name":"NameNode","init_count":0,"install_failed_count":0,"installed_and_maintenance_off_count":0,"installed_count":0,"recovery_enabled":"true","repository_state":"CURRENT","service_name":"HDFS","started_count":2,"state":"STARTED","total_count":2,"unknown_count":0}
     * metrics : {"dfs":{"FSNamesystem":{"BlockCapacity":2097152,"BlocksTotal":4831,"CapacityRemaining":1428629569915,"CapacityRemainingGB":1331,"CapacityTotal":1606605078528,"CapacityTotalGB":1496,"CapacityUsed":77053604377,"CapacityUsedGB":72,"CorruptBlocks":0,"ExcessBlocks":0,"ExpiredHeartbeats":0,"FilesTotal":8886,"LastCheckpointTime":1599032070911,"LastWrittenTransactionId":1066435,"MillisSinceLastLoadedEdits":0,"MissingBlocks":0,"MissingReplOneBlocks":0,"PendingDataNodeMessageCount":0,"PendingDeletionBlocks":0,"PendingReplicationBlocks":0,"PostponedMisreplicatedBlocks":0,"ScheduledReplicationBlocks":0,"Snapshots":0,"SnapshottableDirectories":0,"StaleDataNodes":0,"TotalLoad":115,"TransactionsSinceLastCheckpoint":169,"TransactionsSinceLastLogRoll":44,"UnderReplicatedBlocks":608},"namenode":{"ClusterId":"CID-4df6d19e-978c-4b3c-8227-31c13b79379d","CorruptFiles":"[]","DeadNodes":"{}","DecomNodes":"{}","Free":1428629569915,"LiveNodes":"{\"indata-10-221-13-84.indata.com:1019\":{\"infoAddr\":\"10.221.13.84:1022\",\"infoSecureAddr\":\"10.221.13.84:0\",\"xferaddr\":\"10.221.13.84:1019\",\"lastContact\":2,\"usedSpace\":25684914355,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":19009011533,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25684914355,\"remaining\":488507730729,\"blockScheduled\":0,\"blockPoolUsed\":25684914355,\"blockPoolUsedPercent\":4.796122,\"volfails\":0,\"lastBlockReport\":145},\"indata-10-221-13-113.indata.com:1019\":{\"infoAddr\":\"10.221.13.113:1022\",\"infoSecureAddr\":\"10.221.13.113:0\",\"xferaddr\":\"10.221.13.113:1019\",\"lastContact\":2,\"usedSpace\":25692753895,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":10742890521,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25692753895,\"remaining\":496766012201,\"blockScheduled\":0,\"blockPoolUsed\":25692753895,\"blockPoolUsedPercent\":4.797586,\"volfails\":0,\"lastBlockReport\":62},\"indata-10-221-13-64.indata.com:1019\":{\"infoAddr\":\"10.221.13.64:1022\",\"infoSecureAddr\":\"10.221.13.64:0\",\"xferaddr\":\"10.221.13.64:1019\",\"lastContact\":1,\"usedSpace\":25675936127,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":64169893505,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25675936127,\"remaining\":443355826985,\"blockScheduled\":0,\"blockPoolUsed\":25675936127,\"blockPoolUsedPercent\":4.7944455,\"volfails\":0,\"lastBlockReport\":203}}","NameDirStatuses":"{\"active\":{\"/indata/disk_0/namenode\":\"IMAGE_AND_EDITS\"},\"failed\":{}}","NonDfsUsedSpace":93921795559,"PercentRemaining":88.922264,"PercentUsed":4.7960515,"Safemode":"","Threads":170,"Total":1606605078528,"TotalBlocks":4831,"UpgradeFinalized":true,"Used":77053604377,"Version":"3.1.1.3.1.0.0-78, re4f82af51faec922b4804d0232a637422ec29e64"}},"jvm":{"GcCountConcurrentMarkSweep":2,"GcTimeMillisConcurrentMarkSweep":142,"gcCount":5646,"gcTimeMillis":136860,"logError":3,"logFatal":0,"logInfo":1060276,"logWarn":565,"memHeapCommittedM":1004,"memHeapUsedM":544.5051,"memMaxM":1004,"memNonHeapCommittedM":143.00781,"memNonHeapUsedM":140.55779,"threadsBlocked":1,"threadsNew":0,"threadsRunnable":13,"threadsTerminated":0,"threadsTimedWaiting":140,"threadsWaiting":16},"rpc":{"client":{"NumOpenConnections":25,"ReceivedBytes":4239225039,"RpcProcessingTimeAvgTime":0.024390243902439025,"RpcQueueTimeAvgTime":0.3170731707317073,"SentBytes":6949750636}}}
     * host_components : [{"href":"http://10.221.13.64:8080/api/v1/clusters/cluster1/hosts/indata-10-221-13-113.indata.com/host_components/NAMENODE","HostRoles":{"cluster_name":"cluster1","component_name":"NAMENODE","host_name":"indata-10-221-13-113.indata.com"}},{"href":"http://10.221.13.64:8080/api/v1/clusters/cluster1/hosts/indata-10-221-13-84.indata.com/host_components/NAMENODE","HostRoles":{"cluster_name":"cluster1","component_name":"NAMENODE","host_name":"indata-10-221-13-84.indata.com"}}]
     */

    private String href;
    private ServiceComponentInfoBean ServiceComponentInfo;
    private MetricsBean metrics;
    private List<HostComponentsBean> host_components;

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public ServiceComponentInfoBean getServiceComponentInfo() {
        return ServiceComponentInfo;
    }

    public void setServiceComponentInfo(ServiceComponentInfoBean ServiceComponentInfo) {
        this.ServiceComponentInfo = ServiceComponentInfo;
    }

    public MetricsBean getMetrics() {
        return metrics;
    }

    public void setMetrics(MetricsBean metrics) {
        this.metrics = metrics;
    }

    public List<HostComponentsBean> getHost_components() {
        return host_components;
    }

    public void setHost_components(List<HostComponentsBean> host_components) {
        this.host_components = host_components;
    }

    public static class ServiceComponentInfoBean {
        /**
         * CapacityRemaining : 1428629569915
         * CapacityTotal : 1606605078528
         * CapacityUsed : 77053604377
         * DeadNodes : {}
         * DecomNodes : {}
         * HeapMemoryMax : 1052770304
         * HeapMemoryUsed : 573137328
         * LiveNodes : {"indata-10-221-13-84.indata.com:1019":{"infoAddr":"10.221.13.84:1022","infoSecureAddr":"10.221.13.84:0","xferaddr":"10.221.13.84:1019","lastContact":2,"usedSpace":25684914355,"adminState":"In Service","nonDfsUsedSpace":19009011533,"capacity":535535026176,"numBlocks":4798,"version":"3.1.1.3.1.0.0-78","used":25684914355,"remaining":488507730729,"blockScheduled":0,"blockPoolUsed":25684914355,"blockPoolUsedPercent":4.796122,"volfails":0,"lastBlockReport":145},"indata-10-221-13-113.indata.com:1019":{"infoAddr":"10.221.13.113:1022","infoSecureAddr":"10.221.13.113:0","xferaddr":"10.221.13.113:1019","lastContact":2,"usedSpace":25692753895,"adminState":"In Service","nonDfsUsedSpace":10742890521,"capacity":535535026176,"numBlocks":4798,"version":"3.1.1.3.1.0.0-78","used":25692753895,"remaining":496766012201,"blockScheduled":0,"blockPoolUsed":25692753895,"blockPoolUsedPercent":4.797586,"volfails":0,"lastBlockReport":62},"indata-10-221-13-64.indata.com:1019":{"infoAddr":"10.221.13.64:1022","infoSecureAddr":"10.221.13.64:0","xferaddr":"10.221.13.64:1019","lastContact":1,"usedSpace":25675936127,"adminState":"In Service","nonDfsUsedSpace":64169893505,"capacity":535535026176,"numBlocks":4798,"version":"3.1.1.3.1.0.0-78","used":25675936127,"remaining":443355826985,"blockScheduled":0,"blockPoolUsed":25675936127,"blockPoolUsedPercent":4.7944455,"volfails":0,"lastBlockReport":203}}
         * NonDfsUsedSpace : 93921795559
         * NonHeapMemoryMax : -1
         * NonHeapMemoryUsed : 147385520
         * PercentRemaining : 88.922264
         * PercentUsed : 4.7960515
         * Safemode :
         * StartTime : 1597908772628
         * UpgradeFinalized : true
         * Version : 3.1.1.3.1.0.0-78, re4f82af51faec922b4804d0232a637422ec29e64
         * category : MASTER
         * cluster_name : cluster1
         * component_name : NAMENODE
         * desired_stack : HDP-3.1
         * desired_version : 3.1.0.0-78
         * display_name : NameNode
         * init_count : 0
         * install_failed_count : 0
         * installed_and_maintenance_off_count : 0
         * installed_count : 0
         * recovery_enabled : true
         * repository_state : CURRENT
         * service_name : HDFS
         * started_count : 2
         * state : STARTED
         * total_count : 2
         * unknown_count : 0
         */

        private long CapacityRemaining;
        private long CapacityTotal;
        private long CapacityUsed;
        private String DeadNodes;
        private String DecomNodes;
        private int HeapMemoryMax;
        private int HeapMemoryUsed;
        private String LiveNodes;
        private long NonDfsUsedSpace;
        private int NonHeapMemoryMax;
        private int NonHeapMemoryUsed;
        private double PercentRemaining;
        private double PercentUsed;
        private String Safemode;
        private long StartTime;
        private boolean UpgradeFinalized;
        private String Version;
        private String category;
        private String cluster_name;
        private String component_name;
        private String desired_stack;
        private String desired_version;
        private String display_name;
        private int init_count;
        private int install_failed_count;
        private int installed_and_maintenance_off_count;
        private int installed_count;
        private String recovery_enabled;
        private String repository_state;
        private String service_name;
        private int started_count;
        private String state;
        private int total_count;
        private int unknown_count;

        public long getCapacityRemaining() {
            return CapacityRemaining;
        }

        public void setCapacityRemaining(long CapacityRemaining) {
            this.CapacityRemaining = CapacityRemaining;
        }

        public long getCapacityTotal() {
            return CapacityTotal;
        }

        public void setCapacityTotal(long CapacityTotal) {
            this.CapacityTotal = CapacityTotal;
        }

        public long getCapacityUsed() {
            return CapacityUsed;
        }

        public void setCapacityUsed(long CapacityUsed) {
            this.CapacityUsed = CapacityUsed;
        }

        public String getDeadNodes() {
            return DeadNodes;
        }

        public void setDeadNodes(String DeadNodes) {
            this.DeadNodes = DeadNodes;
        }

        public String getDecomNodes() {
            return DecomNodes;
        }

        public void setDecomNodes(String DecomNodes) {
            this.DecomNodes = DecomNodes;
        }

        public int getHeapMemoryMax() {
            return HeapMemoryMax;
        }

        public void setHeapMemoryMax(int HeapMemoryMax) {
            this.HeapMemoryMax = HeapMemoryMax;
        }

        public int getHeapMemoryUsed() {
            return HeapMemoryUsed;
        }

        public void setHeapMemoryUsed(int HeapMemoryUsed) {
            this.HeapMemoryUsed = HeapMemoryUsed;
        }

        public String getLiveNodes() {
            return LiveNodes;
        }

        public void setLiveNodes(String LiveNodes) {
            this.LiveNodes = LiveNodes;
        }

        public long getNonDfsUsedSpace() {
            return NonDfsUsedSpace;
        }

        public void setNonDfsUsedSpace(long NonDfsUsedSpace) {
            this.NonDfsUsedSpace = NonDfsUsedSpace;
        }

        public int getNonHeapMemoryMax() {
            return NonHeapMemoryMax;
        }

        public void setNonHeapMemoryMax(int NonHeapMemoryMax) {
            this.NonHeapMemoryMax = NonHeapMemoryMax;
        }

        public int getNonHeapMemoryUsed() {
            return NonHeapMemoryUsed;
        }

        public void setNonHeapMemoryUsed(int NonHeapMemoryUsed) {
            this.NonHeapMemoryUsed = NonHeapMemoryUsed;
        }

        public double getPercentRemaining() {
            return PercentRemaining;
        }

        public void setPercentRemaining(double PercentRemaining) {
            this.PercentRemaining = PercentRemaining;
        }

        public double getPercentUsed() {
            return PercentUsed;
        }

        public void setPercentUsed(double PercentUsed) {
            this.PercentUsed = PercentUsed;
        }

        public String getSafemode() {
            return Safemode;
        }

        public void setSafemode(String Safemode) {
            this.Safemode = Safemode;
        }

        public long getStartTime() {
            return StartTime;
        }

        public void setStartTime(long StartTime) {
            this.StartTime = StartTime;
        }

        public boolean isUpgradeFinalized() {
            return UpgradeFinalized;
        }

        public void setUpgradeFinalized(boolean UpgradeFinalized) {
            this.UpgradeFinalized = UpgradeFinalized;
        }

        public String getVersion() {
            return Version;
        }

        public void setVersion(String Version) {
            this.Version = Version;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public String getCluster_name() {
            return cluster_name;
        }

        public void setCluster_name(String cluster_name) {
            this.cluster_name = cluster_name;
        }

        public String getComponent_name() {
            return component_name;
        }

        public void setComponent_name(String component_name) {
            this.component_name = component_name;
        }

        public String getDesired_stack() {
            return desired_stack;
        }

        public void setDesired_stack(String desired_stack) {
            this.desired_stack = desired_stack;
        }

        public String getDesired_version() {
            return desired_version;
        }

        public void setDesired_version(String desired_version) {
            this.desired_version = desired_version;
        }

        public String getDisplay_name() {
            return display_name;
        }

        public void setDisplay_name(String display_name) {
            this.display_name = display_name;
        }

        public int getInit_count() {
            return init_count;
        }

        public void setInit_count(int init_count) {
            this.init_count = init_count;
        }

        public int getInstall_failed_count() {
            return install_failed_count;
        }

        public void setInstall_failed_count(int install_failed_count) {
            this.install_failed_count = install_failed_count;
        }

        public int getInstalled_and_maintenance_off_count() {
            return installed_and_maintenance_off_count;
        }

        public void setInstalled_and_maintenance_off_count(int installed_and_maintenance_off_count) {
            this.installed_and_maintenance_off_count = installed_and_maintenance_off_count;
        }

        public int getInstalled_count() {
            return installed_count;
        }

        public void setInstalled_count(int installed_count) {
            this.installed_count = installed_count;
        }

        public String getRecovery_enabled() {
            return recovery_enabled;
        }

        public void setRecovery_enabled(String recovery_enabled) {
            this.recovery_enabled = recovery_enabled;
        }

        public String getRepository_state() {
            return repository_state;
        }

        public void setRepository_state(String repository_state) {
            this.repository_state = repository_state;
        }

        public String getService_name() {
            return service_name;
        }

        public void setService_name(String service_name) {
            this.service_name = service_name;
        }

        public int getStarted_count() {
            return started_count;
        }

        public void setStarted_count(int started_count) {
            this.started_count = started_count;
        }

        public String getState() {
            return state;
        }

        public void setState(String state) {
            this.state = state;
        }

        public int getTotal_count() {
            return total_count;
        }

        public void setTotal_count(int total_count) {
            this.total_count = total_count;
        }

        public int getUnknown_count() {
            return unknown_count;
        }

        public void setUnknown_count(int unknown_count) {
            this.unknown_count = unknown_count;
        }
    }

    public static class MetricsBean {
        /**
         * dfs : {"FSNamesystem":{"BlockCapacity":2097152,"BlocksTotal":4831,"CapacityRemaining":1428629569915,"CapacityRemainingGB":1331,"CapacityTotal":1606605078528,"CapacityTotalGB":1496,"CapacityUsed":77053604377,"CapacityUsedGB":72,"CorruptBlocks":0,"ExcessBlocks":0,"ExpiredHeartbeats":0,"FilesTotal":8886,"LastCheckpointTime":1599032070911,"LastWrittenTransactionId":1066435,"MillisSinceLastLoadedEdits":0,"MissingBlocks":0,"MissingReplOneBlocks":0,"PendingDataNodeMessageCount":0,"PendingDeletionBlocks":0,"PendingReplicationBlocks":0,"PostponedMisreplicatedBlocks":0,"ScheduledReplicationBlocks":0,"Snapshots":0,"SnapshottableDirectories":0,"StaleDataNodes":0,"TotalLoad":115,"TransactionsSinceLastCheckpoint":169,"TransactionsSinceLastLogRoll":44,"UnderReplicatedBlocks":608},"namenode":{"ClusterId":"CID-4df6d19e-978c-4b3c-8227-31c13b79379d","CorruptFiles":"[]","DeadNodes":"{}","DecomNodes":"{}","Free":1428629569915,"LiveNodes":"{\"indata-10-221-13-84.indata.com:1019\":{\"infoAddr\":\"10.221.13.84:1022\",\"infoSecureAddr\":\"10.221.13.84:0\",\"xferaddr\":\"10.221.13.84:1019\",\"lastContact\":2,\"usedSpace\":25684914355,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":19009011533,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25684914355,\"remaining\":488507730729,\"blockScheduled\":0,\"blockPoolUsed\":25684914355,\"blockPoolUsedPercent\":4.796122,\"volfails\":0,\"lastBlockReport\":145},\"indata-10-221-13-113.indata.com:1019\":{\"infoAddr\":\"10.221.13.113:1022\",\"infoSecureAddr\":\"10.221.13.113:0\",\"xferaddr\":\"10.221.13.113:1019\",\"lastContact\":2,\"usedSpace\":25692753895,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":10742890521,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25692753895,\"remaining\":496766012201,\"blockScheduled\":0,\"blockPoolUsed\":25692753895,\"blockPoolUsedPercent\":4.797586,\"volfails\":0,\"lastBlockReport\":62},\"indata-10-221-13-64.indata.com:1019\":{\"infoAddr\":\"10.221.13.64:1022\",\"infoSecureAddr\":\"10.221.13.64:0\",\"xferaddr\":\"10.221.13.64:1019\",\"lastContact\":1,\"usedSpace\":25675936127,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":64169893505,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25675936127,\"remaining\":443355826985,\"blockScheduled\":0,\"blockPoolUsed\":25675936127,\"blockPoolUsedPercent\":4.7944455,\"volfails\":0,\"lastBlockReport\":203}}","NameDirStatuses":"{\"active\":{\"/indata/disk_0/namenode\":\"IMAGE_AND_EDITS\"},\"failed\":{}}","NonDfsUsedSpace":93921795559,"PercentRemaining":88.922264,"PercentUsed":4.7960515,"Safemode":"","Threads":170,"Total":1606605078528,"TotalBlocks":4831,"UpgradeFinalized":true,"Used":77053604377,"Version":"3.1.1.3.1.0.0-78, re4f82af51faec922b4804d0232a637422ec29e64"}}
         * jvm : {"GcCountConcurrentMarkSweep":2,"GcTimeMillisConcurrentMarkSweep":142,"gcCount":5646,"gcTimeMillis":136860,"logError":3,"logFatal":0,"logInfo":1060276,"logWarn":565,"memHeapCommittedM":1004,"memHeapUsedM":544.5051,"memMaxM":1004,"memNonHeapCommittedM":143.00781,"memNonHeapUsedM":140.55779,"threadsBlocked":1,"threadsNew":0,"threadsRunnable":13,"threadsTerminated":0,"threadsTimedWaiting":140,"threadsWaiting":16}
         * rpc : {"client":{"NumOpenConnections":25,"ReceivedBytes":4239225039,"RpcProcessingTimeAvgTime":0.024390243902439025,"RpcQueueTimeAvgTime":0.3170731707317073,"SentBytes":6949750636}}
         */

        private DfsBean dfs;
        private JvmBean jvm;
        private RpcBean rpc;

        public DfsBean getDfs() {
            return dfs;
        }

        public void setDfs(DfsBean dfs) {
            this.dfs = dfs;
        }

        public JvmBean getJvm() {
            return jvm;
        }

        public void setJvm(JvmBean jvm) {
            this.jvm = jvm;
        }

        public RpcBean getRpc() {
            return rpc;
        }

        public void setRpc(RpcBean rpc) {
            this.rpc = rpc;
        }

        public static class DfsBean {
            /**
             * FSNamesystem : {"BlockCapacity":2097152,"BlocksTotal":4831,"CapacityRemaining":1428629569915,"CapacityRemainingGB":1331,"CapacityTotal":1606605078528,"CapacityTotalGB":1496,"CapacityUsed":77053604377,"CapacityUsedGB":72,"CorruptBlocks":0,"ExcessBlocks":0,"ExpiredHeartbeats":0,"FilesTotal":8886,"LastCheckpointTime":1599032070911,"LastWrittenTransactionId":1066435,"MillisSinceLastLoadedEdits":0,"MissingBlocks":0,"MissingReplOneBlocks":0,"PendingDataNodeMessageCount":0,"PendingDeletionBlocks":0,"PendingReplicationBlocks":0,"PostponedMisreplicatedBlocks":0,"ScheduledReplicationBlocks":0,"Snapshots":0,"SnapshottableDirectories":0,"StaleDataNodes":0,"TotalLoad":115,"TransactionsSinceLastCheckpoint":169,"TransactionsSinceLastLogRoll":44,"UnderReplicatedBlocks":608}
             * namenode : {"ClusterId":"CID-4df6d19e-978c-4b3c-8227-31c13b79379d","CorruptFiles":"[]","DeadNodes":"{}","DecomNodes":"{}","Free":1428629569915,"LiveNodes":"{\"indata-10-221-13-84.indata.com:1019\":{\"infoAddr\":\"10.221.13.84:1022\",\"infoSecureAddr\":\"10.221.13.84:0\",\"xferaddr\":\"10.221.13.84:1019\",\"lastContact\":2,\"usedSpace\":25684914355,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":19009011533,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25684914355,\"remaining\":488507730729,\"blockScheduled\":0,\"blockPoolUsed\":25684914355,\"blockPoolUsedPercent\":4.796122,\"volfails\":0,\"lastBlockReport\":145},\"indata-10-221-13-113.indata.com:1019\":{\"infoAddr\":\"10.221.13.113:1022\",\"infoSecureAddr\":\"10.221.13.113:0\",\"xferaddr\":\"10.221.13.113:1019\",\"lastContact\":2,\"usedSpace\":25692753895,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":10742890521,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25692753895,\"remaining\":496766012201,\"blockScheduled\":0,\"blockPoolUsed\":25692753895,\"blockPoolUsedPercent\":4.797586,\"volfails\":0,\"lastBlockReport\":62},\"indata-10-221-13-64.indata.com:1019\":{\"infoAddr\":\"10.221.13.64:1022\",\"infoSecureAddr\":\"10.221.13.64:0\",\"xferaddr\":\"10.221.13.64:1019\",\"lastContact\":1,\"usedSpace\":25675936127,\"adminState\":\"In Service\",\"nonDfsUsedSpace\":64169893505,\"capacity\":535535026176,\"numBlocks\":4798,\"version\":\"3.1.1.3.1.0.0-78\",\"used\":25675936127,\"remaining\":443355826985,\"blockScheduled\":0,\"blockPoolUsed\":25675936127,\"blockPoolUsedPercent\":4.7944455,\"volfails\":0,\"lastBlockReport\":203}}","NameDirStatuses":"{\"active\":{\"/indata/disk_0/namenode\":\"IMAGE_AND_EDITS\"},\"failed\":{}}","NonDfsUsedSpace":93921795559,"PercentRemaining":88.922264,"PercentUsed":4.7960515,"Safemode":"","Threads":170,"Total":1606605078528,"TotalBlocks":4831,"UpgradeFinalized":true,"Used":77053604377,"Version":"3.1.1.3.1.0.0-78, re4f82af51faec922b4804d0232a637422ec29e64"}
             */

            private FSNamesystemBean FSNamesystem;
            private NamenodeBean namenode;

            public FSNamesystemBean getFSNamesystem() {
                return FSNamesystem;
            }

            public void setFSNamesystem(FSNamesystemBean FSNamesystem) {
                this.FSNamesystem = FSNamesystem;
            }

            public NamenodeBean getNamenode() {
                return namenode;
            }

            public void setNamenode(NamenodeBean namenode) {
                this.namenode = namenode;
            }

            public static class FSNamesystemBean {
                /**
                 * BlockCapacity : 2097152
                 * BlocksTotal : 4831
                 * CapacityRemaining : 1428629569915
                 * CapacityRemainingGB : 1331
                 * CapacityTotal : 1606605078528
                 * CapacityTotalGB : 1496
                 * CapacityUsed : 77053604377
                 * CapacityUsedGB : 72
                 * CorruptBlocks : 0
                 * ExcessBlocks : 0
                 * ExpiredHeartbeats : 0
                 * FilesTotal : 8886
                 * LastCheckpointTime : 1599032070911
                 * LastWrittenTransactionId : 1066435
                 * MillisSinceLastLoadedEdits : 0
                 * MissingBlocks : 0
                 * MissingReplOneBlocks : 0
                 * PendingDataNodeMessageCount : 0
                 * PendingDeletionBlocks : 0
                 * PendingReplicationBlocks : 0
                 * PostponedMisreplicatedBlocks : 0
                 * ScheduledReplicationBlocks : 0
                 * Snapshots : 0
                 * SnapshottableDirectories : 0
                 * StaleDataNodes : 0
                 * TotalLoad : 115
                 * TransactionsSinceLastCheckpoint : 169
                 * TransactionsSinceLastLogRoll : 44
                 * UnderReplicatedBlocks : 608
                 */

                private int BlockCapacity;
                private int BlocksTotal;
                private long CapacityRemaining;
                private double CapacityRemainingGB;
                private long CapacityTotal;
                private double CapacityTotalGB;
                private long CapacityUsed;
                private double CapacityUsedGB;
                private int CorruptBlocks;
                private int ExcessBlocks;
                private int ExpiredHeartbeats;
                private int FilesTotal;
                private long LastCheckpointTime;
                private int LastWrittenTransactionId;
                private int MillisSinceLastLoadedEdits;
                private int MissingBlocks;
                private int MissingReplOneBlocks;
                private int PendingDataNodeMessageCount;
                private int PendingDeletionBlocks;
                private int PendingReplicationBlocks;
                private int PostponedMisreplicatedBlocks;
                private int ScheduledReplicationBlocks;
                private int Snapshots;
                private int SnapshottableDirectories;
                private int StaleDataNodes;
                private int TotalLoad;
                private int TransactionsSinceLastCheckpoint;
                private int TransactionsSinceLastLogRoll;
                private int UnderReplicatedBlocks;

                public int getBlockCapacity() {
                    return BlockCapacity;
                }

                public void setBlockCapacity(int BlockCapacity) {
                    this.BlockCapacity = BlockCapacity;
                }

                public int getBlocksTotal() {
                    return BlocksTotal;
                }

                public void setBlocksTotal(int BlocksTotal) {
                    this.BlocksTotal = BlocksTotal;
                }

                public long getCapacityRemaining() {
                    return CapacityRemaining;
                }

                public void setCapacityRemaining(long CapacityRemaining) {
                    this.CapacityRemaining = CapacityRemaining;
                }

                public double getCapacityRemainingGB() {
                    return CapacityRemainingGB;
                }

                public void setCapacityRemainingGB(int CapacityRemainingGB) {
                    this.CapacityRemainingGB = CapacityRemainingGB;
                }

                public long getCapacityTotal() {
                    return CapacityTotal;
                }

                public void setCapacityTotal(long CapacityTotal) {
                    this.CapacityTotal = CapacityTotal;
                }

                public double getCapacityTotalGB() {
                    return CapacityTotalGB;
                }

                public void setCapacityTotalGB(int CapacityTotalGB) {
                    this.CapacityTotalGB = CapacityTotalGB;
                }

                public long getCapacityUsed() {
                    return CapacityUsed;
                }

                public void setCapacityUsed(long CapacityUsed) {
                    this.CapacityUsed = CapacityUsed;
                }

                public double getCapacityUsedGB() {
                    return CapacityUsedGB;
                }

                public void setCapacityUsedGB(int CapacityUsedGB) {
                    this.CapacityUsedGB = CapacityUsedGB;
                }

                public int getCorruptBlocks() {
                    return CorruptBlocks;
                }

                public void setCorruptBlocks(int CorruptBlocks) {
                    this.CorruptBlocks = CorruptBlocks;
                }

                public int getExcessBlocks() {
                    return ExcessBlocks;
                }

                public void setExcessBlocks(int ExcessBlocks) {
                    this.ExcessBlocks = ExcessBlocks;
                }

                public int getExpiredHeartbeats() {
                    return ExpiredHeartbeats;
                }

                public void setExpiredHeartbeats(int ExpiredHeartbeats) {
                    this.ExpiredHeartbeats = ExpiredHeartbeats;
                }

                public int getFilesTotal() {
                    return FilesTotal;
                }

                public void setFilesTotal(int FilesTotal) {
                    this.FilesTotal = FilesTotal;
                }

                public long getLastCheckpointTime() {
                    return LastCheckpointTime;
                }

                public void setLastCheckpointTime(long LastCheckpointTime) {
                    this.LastCheckpointTime = LastCheckpointTime;
                }

                public int getLastWrittenTransactionId() {
                    return LastWrittenTransactionId;
                }

                public void setLastWrittenTransactionId(int LastWrittenTransactionId) {
                    this.LastWrittenTransactionId = LastWrittenTransactionId;
                }

                public int getMillisSinceLastLoadedEdits() {
                    return MillisSinceLastLoadedEdits;
                }

                public void setMillisSinceLastLoadedEdits(int MillisSinceLastLoadedEdits) {
                    this.MillisSinceLastLoadedEdits = MillisSinceLastLoadedEdits;
                }

                public int getMissingBlocks() {
                    return MissingBlocks;
                }

                public void setMissingBlocks(int MissingBlocks) {
                    this.MissingBlocks = MissingBlocks;
                }

                public int getMissingReplOneBlocks() {
                    return MissingReplOneBlocks;
                }

                public void setMissingReplOneBlocks(int MissingReplOneBlocks) {
                    this.MissingReplOneBlocks = MissingReplOneBlocks;
                }

                public int getPendingDataNodeMessageCount() {
                    return PendingDataNodeMessageCount;
                }

                public void setPendingDataNodeMessageCount(int PendingDataNodeMessageCount) {
                    this.PendingDataNodeMessageCount = PendingDataNodeMessageCount;
                }

                public int getPendingDeletionBlocks() {
                    return PendingDeletionBlocks;
                }

                public void setPendingDeletionBlocks(int PendingDeletionBlocks) {
                    this.PendingDeletionBlocks = PendingDeletionBlocks;
                }

                public int getPendingReplicationBlocks() {
                    return PendingReplicationBlocks;
                }

                public void setPendingReplicationBlocks(int PendingReplicationBlocks) {
                    this.PendingReplicationBlocks = PendingReplicationBlocks;
                }

                public int getPostponedMisreplicatedBlocks() {
                    return PostponedMisreplicatedBlocks;
                }

                public void setPostponedMisreplicatedBlocks(int PostponedMisreplicatedBlocks) {
                    this.PostponedMisreplicatedBlocks = PostponedMisreplicatedBlocks;
                }

                public int getScheduledReplicationBlocks() {
                    return ScheduledReplicationBlocks;
                }

                public void setScheduledReplicationBlocks(int ScheduledReplicationBlocks) {
                    this.ScheduledReplicationBlocks = ScheduledReplicationBlocks;
                }

                public int getSnapshots() {
                    return Snapshots;
                }

                public void setSnapshots(int Snapshots) {
                    this.Snapshots = Snapshots;
                }

                public int getSnapshottableDirectories() {
                    return SnapshottableDirectories;
                }

                public void setSnapshottableDirectories(int SnapshottableDirectories) {
                    this.SnapshottableDirectories = SnapshottableDirectories;
                }

                public int getStaleDataNodes() {
                    return StaleDataNodes;
                }

                public void setStaleDataNodes(int StaleDataNodes) {
                    this.StaleDataNodes = StaleDataNodes;
                }

                public int getTotalLoad() {
                    return TotalLoad;
                }

                public void setTotalLoad(int TotalLoad) {
                    this.TotalLoad = TotalLoad;
                }

                public int getTransactionsSinceLastCheckpoint() {
                    return TransactionsSinceLastCheckpoint;
                }

                public void setTransactionsSinceLastCheckpoint(int TransactionsSinceLastCheckpoint) {
                    this.TransactionsSinceLastCheckpoint = TransactionsSinceLastCheckpoint;
                }

                public int getTransactionsSinceLastLogRoll() {
                    return TransactionsSinceLastLogRoll;
                }

                public void setTransactionsSinceLastLogRoll(int TransactionsSinceLastLogRoll) {
                    this.TransactionsSinceLastLogRoll = TransactionsSinceLastLogRoll;
                }

                public int getUnderReplicatedBlocks() {
                    return UnderReplicatedBlocks;
                }

                public void setUnderReplicatedBlocks(int UnderReplicatedBlocks) {
                    this.UnderReplicatedBlocks = UnderReplicatedBlocks;
                }
            }

            public static class NamenodeBean {
                /**
                 * ClusterId : CID-4df6d19e-978c-4b3c-8227-31c13b79379d
                 * CorruptFiles : []
                 * DeadNodes : {}
                 * DecomNodes : {}
                 * Free : 1428629569915
                 * LiveNodes : {"indata-10-221-13-84.indata.com:1019":{"infoAddr":"10.221.13.84:1022","infoSecureAddr":"10.221.13.84:0","xferaddr":"10.221.13.84:1019","lastContact":2,"usedSpace":25684914355,"adminState":"In Service","nonDfsUsedSpace":19009011533,"capacity":535535026176,"numBlocks":4798,"version":"3.1.1.3.1.0.0-78","used":25684914355,"remaining":488507730729,"blockScheduled":0,"blockPoolUsed":25684914355,"blockPoolUsedPercent":4.796122,"volfails":0,"lastBlockReport":145},"indata-10-221-13-113.indata.com:1019":{"infoAddr":"10.221.13.113:1022","infoSecureAddr":"10.221.13.113:0","xferaddr":"10.221.13.113:1019","lastContact":2,"usedSpace":25692753895,"adminState":"In Service","nonDfsUsedSpace":10742890521,"capacity":535535026176,"numBlocks":4798,"version":"3.1.1.3.1.0.0-78","used":25692753895,"remaining":496766012201,"blockScheduled":0,"blockPoolUsed":25692753895,"blockPoolUsedPercent":4.797586,"volfails":0,"lastBlockReport":62},"indata-10-221-13-64.indata.com:1019":{"infoAddr":"10.221.13.64:1022","infoSecureAddr":"10.221.13.64:0","xferaddr":"10.221.13.64:1019","lastContact":1,"usedSpace":25675936127,"adminState":"In Service","nonDfsUsedSpace":64169893505,"capacity":535535026176,"numBlocks":4798,"version":"3.1.1.3.1.0.0-78","used":25675936127,"remaining":443355826985,"blockScheduled":0,"blockPoolUsed":25675936127,"blockPoolUsedPercent":4.7944455,"volfails":0,"lastBlockReport":203}}
                 * NameDirStatuses : {"active":{"/indata/disk_0/namenode":"IMAGE_AND_EDITS"},"failed":{}}
                 * NonDfsUsedSpace : 93921795559
                 * PercentRemaining : 88.922264
                 * PercentUsed : 4.7960515
                 * Safemode :
                 * Threads : 170
                 * Total : 1606605078528
                 * TotalBlocks : 4831
                 * UpgradeFinalized : true
                 * Used : 77053604377
                 * Version : 3.1.1.3.1.0.0-78, re4f82af51faec922b4804d0232a637422ec29e64
                 */

                private String ClusterId;
                private String CorruptFiles;
                private String DeadNodes;
                private String DecomNodes;
                private long Free;
                private String LiveNodes;
                private String NameDirStatuses;
                private long NonDfsUsedSpace;
                private double PercentRemaining;
                private double PercentUsed;
                private String Safemode;
                private int Threads;
                private long Total;
                private int TotalBlocks;
                private boolean UpgradeFinalized;
                private long Used;
                private String Version;

                public String getClusterId() {
                    return ClusterId;
                }

                public void setClusterId(String ClusterId) {
                    this.ClusterId = ClusterId;
                }

                public String getCorruptFiles() {
                    return CorruptFiles;
                }

                public void setCorruptFiles(String CorruptFiles) {
                    this.CorruptFiles = CorruptFiles;
                }

                public String getDeadNodes() {
                    return DeadNodes;
                }

                public void setDeadNodes(String DeadNodes) {
                    this.DeadNodes = DeadNodes;
                }

                public String getDecomNodes() {
                    return DecomNodes;
                }

                public void setDecomNodes(String DecomNodes) {
                    this.DecomNodes = DecomNodes;
                }

                public long getFree() {
                    return Free;
                }

                public void setFree(long Free) {
                    this.Free = Free;
                }

                public String getLiveNodes() {
                    return LiveNodes;
                }

                public void setLiveNodes(String LiveNodes) {
                    this.LiveNodes = LiveNodes;
                }

                public String getNameDirStatuses() {
                    return NameDirStatuses;
                }

                public void setNameDirStatuses(String NameDirStatuses) {
                    this.NameDirStatuses = NameDirStatuses;
                }

                public long getNonDfsUsedSpace() {
                    return NonDfsUsedSpace;
                }

                public void setNonDfsUsedSpace(long NonDfsUsedSpace) {
                    this.NonDfsUsedSpace = NonDfsUsedSpace;
                }

                public double getPercentRemaining() {
                    return PercentRemaining;
                }

                public void setPercentRemaining(double PercentRemaining) {
                    this.PercentRemaining = PercentRemaining;
                }

                public double getPercentUsed() {
                    return PercentUsed;
                }

                public void setPercentUsed(double PercentUsed) {
                    this.PercentUsed = PercentUsed;
                }

                public String getSafemode() {
                    return Safemode;
                }

                public void setSafemode(String Safemode) {
                    this.Safemode = Safemode;
                }

                public int getThreads() {
                    return Threads;
                }

                public void setThreads(int Threads) {
                    this.Threads = Threads;
                }

                public long getTotal() {
                    return Total;
                }

                public void setTotal(long Total) {
                    this.Total = Total;
                }

                public int getTotalBlocks() {
                    return TotalBlocks;
                }

                public void setTotalBlocks(int TotalBlocks) {
                    this.TotalBlocks = TotalBlocks;
                }

                public boolean isUpgradeFinalized() {
                    return UpgradeFinalized;
                }

                public void setUpgradeFinalized(boolean UpgradeFinalized) {
                    this.UpgradeFinalized = UpgradeFinalized;
                }

                public long getUsed() {
                    return Used;
                }

                public void setUsed(long Used) {
                    this.Used = Used;
                }

                public String getVersion() {
                    return Version;
                }

                public void setVersion(String Version) {
                    this.Version = Version;
                }
            }
        }

        public static class JvmBean {
            /**
             * GcCountConcurrentMarkSweep : 2
             * GcTimeMillisConcurrentMarkSweep : 142
             * gcCount : 5646
             * gcTimeMillis : 136860
             * logError : 3
             * logFatal : 0
             * logInfo : 1060276
             * logWarn : 565
             * memHeapCommittedM : 1004
             * memHeapUsedM : 544.5051
             * memMaxM : 1004
             * memNonHeapCommittedM : 143.00781
             * memNonHeapUsedM : 140.55779
             * threadsBlocked : 1
             * threadsNew : 0
             * threadsRunnable : 13
             * threadsTerminated : 0
             * threadsTimedWaiting : 140
             * threadsWaiting : 16
             */

            private int GcCountConcurrentMarkSweep;
            private int GcTimeMillisConcurrentMarkSweep;
            private int gcCount;
            private int gcTimeMillis;
            private int logError;
            private int logFatal;
            private int logInfo;
            private int logWarn;
            private int memHeapCommittedM;
            private double memHeapUsedM;
            private int memMaxM;
            private double memNonHeapCommittedM;
            private double memNonHeapUsedM;
            private int threadsBlocked;
            private int threadsNew;
            private int threadsRunnable;
            private int threadsTerminated;
            private int threadsTimedWaiting;
            private int threadsWaiting;

            public int getGcCountConcurrentMarkSweep() {
                return GcCountConcurrentMarkSweep;
            }

            public void setGcCountConcurrentMarkSweep(int GcCountConcurrentMarkSweep) {
                this.GcCountConcurrentMarkSweep = GcCountConcurrentMarkSweep;
            }

            public int getGcTimeMillisConcurrentMarkSweep() {
                return GcTimeMillisConcurrentMarkSweep;
            }

            public void setGcTimeMillisConcurrentMarkSweep(int GcTimeMillisConcurrentMarkSweep) {
                this.GcTimeMillisConcurrentMarkSweep = GcTimeMillisConcurrentMarkSweep;
            }

            public int getGcCount() {
                return gcCount;
            }

            public void setGcCount(int gcCount) {
                this.gcCount = gcCount;
            }

            public int getGcTimeMillis() {
                return gcTimeMillis;
            }

            public void setGcTimeMillis(int gcTimeMillis) {
                this.gcTimeMillis = gcTimeMillis;
            }

            public int getLogError() {
                return logError;
            }

            public void setLogError(int logError) {
                this.logError = logError;
            }

            public int getLogFatal() {
                return logFatal;
            }

            public void setLogFatal(int logFatal) {
                this.logFatal = logFatal;
            }

            public int getLogInfo() {
                return logInfo;
            }

            public void setLogInfo(int logInfo) {
                this.logInfo = logInfo;
            }

            public int getLogWarn() {
                return logWarn;
            }

            public void setLogWarn(int logWarn) {
                this.logWarn = logWarn;
            }

            public int getMemHeapCommittedM() {
                return memHeapCommittedM;
            }

            public void setMemHeapCommittedM(int memHeapCommittedM) {
                this.memHeapCommittedM = memHeapCommittedM;
            }

            public double getMemHeapUsedM() {
                return memHeapUsedM;
            }

            public void setMemHeapUsedM(double memHeapUsedM) {
                this.memHeapUsedM = memHeapUsedM;
            }

            public int getMemMaxM() {
                return memMaxM;
            }

            public void setMemMaxM(int memMaxM) {
                this.memMaxM = memMaxM;
            }

            public double getMemNonHeapCommittedM() {
                return memNonHeapCommittedM;
            }

            public void setMemNonHeapCommittedM(double memNonHeapCommittedM) {
                this.memNonHeapCommittedM = memNonHeapCommittedM;
            }

            public double getMemNonHeapUsedM() {
                return memNonHeapUsedM;
            }

            public void setMemNonHeapUsedM(double memNonHeapUsedM) {
                this.memNonHeapUsedM = memNonHeapUsedM;
            }

            public int getThreadsBlocked() {
                return threadsBlocked;
            }

            public void setThreadsBlocked(int threadsBlocked) {
                this.threadsBlocked = threadsBlocked;
            }

            public int getThreadsNew() {
                return threadsNew;
            }

            public void setThreadsNew(int threadsNew) {
                this.threadsNew = threadsNew;
            }

            public int getThreadsRunnable() {
                return threadsRunnable;
            }

            public void setThreadsRunnable(int threadsRunnable) {
                this.threadsRunnable = threadsRunnable;
            }

            public int getThreadsTerminated() {
                return threadsTerminated;
            }

            public void setThreadsTerminated(int threadsTerminated) {
                this.threadsTerminated = threadsTerminated;
            }

            public int getThreadsTimedWaiting() {
                return threadsTimedWaiting;
            }

            public void setThreadsTimedWaiting(int threadsTimedWaiting) {
                this.threadsTimedWaiting = threadsTimedWaiting;
            }

            public int getThreadsWaiting() {
                return threadsWaiting;
            }

            public void setThreadsWaiting(int threadsWaiting) {
                this.threadsWaiting = threadsWaiting;
            }
        }

        public static class RpcBean {
            /**
             * client : {"NumOpenConnections":25,"ReceivedBytes":4239225039,"RpcProcessingTimeAvgTime":0.024390243902439025,"RpcQueueTimeAvgTime":0.3170731707317073,"SentBytes":6949750636}
             */

            private ClientBean client;

            public ClientBean getClient() {
                return client;
            }

            public void setClient(ClientBean client) {
                this.client = client;
            }

            public static class ClientBean {
                /**
                 * NumOpenConnections : 25
                 * ReceivedBytes : 4239225039
                 * RpcProcessingTimeAvgTime : 0.024390243902439025
                 * RpcQueueTimeAvgTime : 0.3170731707317073
                 * SentBytes : 6949750636
                 */

                private int NumOpenConnections;
                private long ReceivedBytes;
                private double RpcProcessingTimeAvgTime;
                private double RpcQueueTimeAvgTime;
                private long SentBytes;

                public int getNumOpenConnections() {
                    return NumOpenConnections;
                }

                public void setNumOpenConnections(int NumOpenConnections) {
                    this.NumOpenConnections = NumOpenConnections;
                }

                public long getReceivedBytes() {
                    return ReceivedBytes;
                }

                public void setReceivedBytes(long ReceivedBytes) {
                    this.ReceivedBytes = ReceivedBytes;
                }

                public double getRpcProcessingTimeAvgTime() {
                    return RpcProcessingTimeAvgTime;
                }

                public void setRpcProcessingTimeAvgTime(double RpcProcessingTimeAvgTime) {
                    this.RpcProcessingTimeAvgTime = RpcProcessingTimeAvgTime;
                }

                public double getRpcQueueTimeAvgTime() {
                    return RpcQueueTimeAvgTime;
                }

                public void setRpcQueueTimeAvgTime(double RpcQueueTimeAvgTime) {
                    this.RpcQueueTimeAvgTime = RpcQueueTimeAvgTime;
                }

                public long getSentBytes() {
                    return SentBytes;
                }

                public void setSentBytes(long SentBytes) {
                    this.SentBytes = SentBytes;
                }
            }
        }
    }

    public static class HostComponentsBean {
        /**
         * href : http://10.221.13.64:8080/api/v1/clusters/cluster1/hosts/indata-10-221-13-113.indata.com/host_components/NAMENODE
         * HostRoles : {"cluster_name":"cluster1","component_name":"NAMENODE","host_name":"indata-10-221-13-113.indata.com"}
         */

        private String href;
        private HostRolesBean HostRoles;

        public String getHref() {
            return href;
        }

        public void setHref(String href) {
            this.href = href;
        }

        public HostRolesBean getHostRoles() {
            return HostRoles;
        }

        public void setHostRoles(HostRolesBean HostRoles) {
            this.HostRoles = HostRoles;
        }

        public static class HostRolesBean {
            /**
             * cluster_name : cluster1
             * component_name : NAMENODE
             * host_name : indata-10-221-13-113.indata.com
             */

            private String cluster_name;
            private String component_name;
            private String host_name;

            public String getCluster_name() {
                return cluster_name;
            }

            public void setCluster_name(String cluster_name) {
                this.cluster_name = cluster_name;
            }

            public String getComponent_name() {
                return component_name;
            }

            public void setComponent_name(String component_name) {
                this.component_name = component_name;
            }

            public String getHost_name() {
                return host_name;
            }

            public void setHost_name(String host_name) {
                this.host_name = host_name;
            }
        }
    }
}
