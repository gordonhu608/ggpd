package com.inspur.ggpd.data.onemap.service.impl;

import com.inspur.ggpd.data.onemap.dao.SjyztBzkyskMapper;
import com.inspur.ggpd.data.onemap.service.SjyztBzkyskService;
import com.inspur.ggpd.data.onemap.yskdao.YskMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class SjyztBzkyskServiceImpl implements SjyztBzkyskService {

    @Resource
    private SjyztBzkyskMapper bzkyskMapper;
    @Resource
    private YskMapper yskMapper;

    @Override
    public List<String> queryTableCode() {
        return bzkyskMapper.queryTableCode();
    }

    @Override
    public Long getCollection(List<String> tables) {
        return yskMapper.getCount(tables);
    }
}
