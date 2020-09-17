package com.inspur.ggpd.data.onemap.service;

import java.util.List;

public interface SjyztBzkyskService {
    List<String> queryTableCode();

    Long getCollection(List<String> tables);
}
