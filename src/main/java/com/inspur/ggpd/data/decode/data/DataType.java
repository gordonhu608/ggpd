package com.inspur.ggpd.data.decode.data;

/**
 * Title:数据解读类型枚举
 * Copyright: Copyright (c)
 * Company:
 * Description:
 *
 * @author tangxianwei
 * @date 2020-08-22 11:59:56 中国标准时间
 */
public enum DataType {
    // 贸易解读：trade 生产解读：product 价格解读：price
    PRODUCT("生产解读", "product"),
    PRICE("价格解读", "price"),
    TRADE("贸易解读", "trade");

    /**
     * 数据类型对应汉语（页面显示的内容）
     */
    private String name;
    /**
     * 数据类型对应的英文（数据库中存的值）
     */
    private String type;

    DataType(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
