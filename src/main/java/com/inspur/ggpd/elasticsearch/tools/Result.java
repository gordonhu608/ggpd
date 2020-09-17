package com.inspur.ggpd.elasticsearch.tools;

import java.util.List;
import java.util.Map;

public class Result {
    /**
     * 总条数
     */
    public Long totalCount;


    /**
     * 返回文档集合
     */
    public List<Map<String,Object>> documents;

    public Long getTotalCount() {
        return totalCount;
    }

    public List<Map<String, Object>> getDocuments() {
        return documents;
    }

    public void setTotalCount(Long totalCount) {
        this.totalCount = totalCount;
    }

    public void setDocuments(List<Map<String, Object>> documents) {
        this.documents = documents;
    }
}
