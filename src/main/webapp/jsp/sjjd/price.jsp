<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="l" uri="/tags/loushang-web"%>
<html>
<head>
    <l:link path="css/bootstrap.css,css/sjjd/template.css"/>
    <title>生产解读</title>
    <style type="text/css">
        span{
            text-decoration:underline;
        }
        .home,.parent,.detail{
            text-decoration: none;
        }
        .sub-title > label {
            margin: 0 0.4rem;
        }
        .content-title {
            font-size: 0.2rem;
            font-weight: 700;
        }
        .content_info{
            line-height: 0.3rem;
            margin: 0rem 0.2rem 0.3rem 0.3rem;
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
        <span class="detail">数据解读详情</span></div>
    <div class="container content" id="template">
        <h3 v-text="dataObj.year + '年' + dataObj.month + '月价格数据解读'"></h3>
        <div class="sub-title">
            <label v-text="'发布时间：' + dataObj.publishDate"></label>
            <label>来源：农业农村部信息中心</label>
        </div>
        <%--<div class="income_select">
            <select id="incomeSelect">
                <option value="08081000">鲜苹果</option>
                <option value="08133000">苹果干</option>
                <option value="20097000">苹果汁</option>
            </select>
        </div>--%>
        <div class="chart" id="chart"></div><%--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--%>
        <div class="content_info">
            <div class="content-title">一、富士苹果批发价格解读</div>&nbsp; &nbsp; &nbsp; &nbsp; 本月全国富士苹果批发价均价每公斤
            <span v-text="dataObj.text.QGPFJ"></span>元，同比
            <span v-text="dataObj.text.QGPFJTB"></span>%，环比
            <span v-text="dataObj.text.QGPFJHB"></span>%；其中陕西富士苹果批发价均价每公斤
            <span v-text="dataObj.text.SXPFJ"></span>元，同比
            <span v-text="dataObj.text.SXPFJTB"></span>%，环比
            <span v-text="dataObj.text.SXPFJHB"></span>%，山东富士苹果批发价均价每公斤
            <span v-text="dataObj.text.SDPFJ"></span>元，同比
            <span v-text="dataObj.text.SDPFJTB"></span>%，环比
            <span v-text="dataObj.text.SDPFJHB"></span>%；
            <span v-text="dataObj.text.PFJGZFSFTOP1"></span>批发价格
            <span v-text="dataObj.text.PFJGZFTOP1"></span>%，
            <span v-text="dataObj.text.PFJGZFSFTOP2"></span>批发价格
            <span v-text="dataObj.text.PFJGZFTOP2"></span>%，
            <span v-text="dataObj.text.PFJGZFSFTOP3"></span>批发价格
            <span v-text="dataObj.text.PFJGZFTOP3"></span>%，
            <span v-text="dataObj.text.PFJGDFSFTOP1"></span>批发价格
            <span v-text="dataObj.text.PFJGDFTOP1"></span>%，
            <span v-text="dataObj.text.PFJGDFSFTOP2"></span>批发价格
            <span v-text="dataObj.text.PFJGDFTOP2"></span>%，
            <span v-text="dataObj.text.PFJGDFSFTOP3"></span>批发价格
            <span v-text="dataObj.text.PFJGDFTOP3"></span>%。
            <div class="content-title">二、富士苹果集市价格解读</div>&nbsp; &nbsp; &nbsp; &nbsp; 本月全国富士苹果集市价均价每公斤
            <span v-text="dataObj.text.QGJSJ"></span>元，同比
            <span v-text="dataObj.text.QGJSJTB"></span>%，环比
            <span v-text="dataObj.text.QGJSJHB"></span>%；其中陕西富士苹果集市价均价每公斤
            <span v-text="dataObj.text.SXJSJ"></span>元，同比
            <span v-text="dataObj.text.SXJSJTB"></span>%，环比
            <span v-text="dataObj.text.SXJSJHB"></span>%，山东富士苹果集市价均价每公斤
            <span v-text="dataObj.text.SDJSJ"></span>元，同比
            <span v-text="dataObj.text.SDJSJTB"></span>%，环比
            <span v-text="dataObj.text.SDJSJHB"></span>%；
            <span v-text="dataObj.text.JSJGZFSFTOP1"></span>集市价格
            <span v-text="dataObj.text.JSJGZFTOP1"></span>%，
            <span v-text="dataObj.text.JSJGZFSFTOP2"></span>集市价格
            <span v-text="dataObj.text.JSJGZFTOP2"></span>%，
            <span v-text="dataObj.text.JSJGZFSFTOP3"></span>集市价格
            <span v-text="dataObj.text.JSJGZFTOP3"></span>%，
            <span v-text="dataObj.text.JSJGDFSFTOP1"></span>集市价格
            <span v-text="dataObj.text.JSJGDFTOP1"></span>%，
            <span v-text="dataObj.text.JSJGDFSFTOP2"></span>集市价格
            <span v-text="dataObj.text.JSJGDFTOP2"></span>%，
            <span v-text="dataObj.text.JSJGDFSFTOP3"></span>集市价格
            <span v-text="dataObj.text.JSJGDFTOP3"></span>%。
            <div class="content-title">三、富士苹果超市价格解读</div>&nbsp; &nbsp; &nbsp; &nbsp; 本月全国富士苹果超市价均价每公斤
            <span v-text="dataObj.text.QGCSJ"></span>元，同比
            <span v-text="dataObj.text.QGCSJTB"></span>%，环比
            <span v-text="dataObj.text.QGCSJHB"></span>%；其中陕西富士苹果超市价均价每公斤
            <span v-text="dataObj.text.SXCSJ"></span>元，同比
            <span v-text="dataObj.text.SXCSJTB"></span>%，环比
            <span v-text="dataObj.text.SXCSJHB"></span>%，山东富士苹果超市价均价每公斤
            <span v-text="dataObj.text.SDCSJ"></span>元，同比
            <span v-text="dataObj.text.SDCSJTB"></span>%；环比
            <span v-text="dataObj.text.SDCSJHB"></span>%；
            <span v-text="dataObj.text.CSJGZFSFTOP1"></span>超市价格
            <span v-text="dataObj.text.CSJGZFTOP1"></span>%，
            <span v-text="dataObj.text.CSJGZFSFTOP2"></span>超市价格
            <span v-text="dataObj.text.CSJGZFTOP2"></span>%，
            <span v-text="dataObj.text.CSJGZFSFTOP3"></span>超市价格
            <span v-text="dataObj.text.CSJGZFTOP3"></span>%，
            <span v-text="dataObj.text.CSJGDFSFTOP1"></span>超市价格
            <span v-text="dataObj.text.CSJGDFTOP1"></span>%，
            <span v-text="dataObj.text.CSJGDFSFTOP2"></span>超市价格
            <span v-text="dataObj.text.CSJGDFTOP2"></span>%，
            <span v-text="dataObj.text.CSJGDFSFTOP3"></span>超市价格
            <span v-text="dataObj.text.CSJGDFTOP3"></span>%。
            <div class="content-title">四、苹果期货成交情况</div>&nbsp; &nbsp; &nbsp; &nbsp; 本月期货苹果平均开盘价
            <span v-text="dataObj.text.KPJ"></span>、平均收盘价
            <span v-text="dataObj.text.SPJ"></span>、最高价
            <span v-text="dataObj.text.ZGJ"></span>、最低价
            <span v-text="dataObj.text.ZDJ"></span>、累计成交量
            <span v-text="dataObj.text.CJL"></span>手、环比
            <span v-text="dataObj.text.CJLHB"></span>%，累计持仓量
            <span v-text="dataObj.text.CCL"></span>手、环比
            <span v-text="dataObj.text.CCLHB"></span>%。
        </div>
    </div>
</body>
<script type="text/javascript">
    var context = "<%=request.getContextPath()%>";
    var id = "<%=request.getParameter("id")%>";
</script>
<l:script path="jquery.js,echarts-custom.js,vue.js,sjjd/price.js"/>
</html>
