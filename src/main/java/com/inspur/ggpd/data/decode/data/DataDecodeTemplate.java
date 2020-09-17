package com.inspur.ggpd.data.decode.data;


/**
 * @ClassName DataDecodeTemplate
 * @Deacription 数据解读文本模板枚举
 * @Author tangxianwei
 * @Date 2020/8/27 9:20
 * @Version 1.0
 **/
public enum DataDecodeTemplate {
    /**
     * 生产解读
     */
    PRODUCT("product.ftl", "template"),
    /**
     * 贸易解读
     */
    TRADE("trade.ftl", "template"),
    /**
     * 价格解读
     */
    PRICE("price.ftl", "template"),
    /**
     * 解读分析
     */
    ANALYSIS("analysis.ftl", "template");

    /**
     * 模板名称
     */
    private String templateName;

    /**
     * 模板路径
     */
    private String path;

    DataDecodeTemplate(String name, String path) {
        this.templateName = name;
        this.path = path;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getTemplateName() {
        return templateName;
    }

    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }
}
