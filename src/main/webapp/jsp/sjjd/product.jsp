<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="l" uri="/tags/loushang-web"%>
<html>
<head>
    <l:link path="css/bootstrap.css,css/sjjd/template.css"/>
    <title>生产解读</title>
    <style type="text/css">
        .content {
            padding: 0rem 0.5rem 0.3rem 0.5rem;
        }
        .sub-title > label {
            margin: 0 0.4rem;
        }
        .content_info{
            line-height: 0.3rem;
        }
        label {
            font-weight: normal;
        }
    </style>
</head>
<body>
    <div class="crumbs">您的位置:
        <span class="home">首页</span> >
        <span class="parent">数据解读</span> >
        <span>数据解读详情</span></div>
    <div class="container content" id="template">
        <h3 v-text="dataObj.year + '年苹果生产相关数据解读'"></h3>
        <div class="sub-title">
            <label v-text="'发布时间：' + dataObj.publishDate"></label>
            <label>来源：农业农村部信息中心</label>
        </div>
        <div class="chart" id="chart"></div><%--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--%>
        <div class="content_info">
            <span v-text="dataObj.text.year"></span>年全国苹果种植面积
            <span v-text="dataObj.text.plantArea"></span>万亩，产量
            <span v-text="dataObj.text.yield"></span>万吨，单产每亩
            <span v-text="dataObj.text.yieldPerUnit"></span>公斤；同比
            <span v-text="dataObj.text.lastYear"></span>分别增长
            <span v-text="dataObj.text.plantAreaTb"></span>%、
            <span v-text="dataObj.text.yieldTb"></span>%、
            <span v-text="dataObj.text.yieldPerUnitTb"></span>%；全国每亩均成本
            <span v-text="dataObj.text.costPerMu"></span>元，每公斤平均
            <span v-text="dataObj.text.costPerKg"></span>元，其中人工成本
            <span v-text="dataObj.text.laborCost"></span>元，占比
            <span v-text="dataObj.text.laborCostProportion"></span>%，物资与服务费用
            <span v-text="dataObj.text.expenses"></span>元，占比
            <span v-text="dataObj.text.expensesProportion"></span>%，与去年同比，总成本同比上涨
            <span v-text="dataObj.text.costTb"></span>%。
        </div>
        <table class="table table-bordered table-hover" style="margin-top: 30px; text-align: center">
            <thead>
                <tr>
                    <th :key="title" style="text-align: center" v-for="title in columns" v-text="title"></th>
                </tr>
            </thead>
            <tbody>
                <tr :key="obj.province" v-for="obj in dataObj.table">
                    <td :key="key" v-for="(title, key) in columns" v-text="obj[key]"></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
<script type="text/javascript">
    var context = "<%=request.getContextPath()%>";
    var id = "<%=request.getParameter("id")%>";
</script>
<l:script path="jquery.js,echarts-custom.js,vue.js,sjjd/template.js"/>
</html>
