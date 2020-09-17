<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="l" uri="/tags/loushang-web"%>
<html>
<head>
    <l:link path="css/bootstrap.css,css/sjjd/template.css"/>
    <title>生产解读</title>
    <style type="text/css">
        .income_select{
            float: right;
            margin-right: 0.7rem;
        }
        .sub-title > label {
            margin: 0 0.4rem;
        }
        .income_select select{
            width: 1.54rem;
            height: 0.3rem;
            border: 1px solid #ECEAE8;
            outline: none;
        }
        span{
            text-decoration:underline;
        }
        .home,.parent,.detail{
            text-decoration: none;
        }
        .content-title {
            /*color: #0000FF;*/
            font-size: 0.2rem;
            font-weight: 700;
            /* height: 25px; */
            /*line-height: 30px;*/
        }
        .content-title2{
            font-size: 0.15rem;
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
        <span class="detail">数据解读详情</span>
    </div>
    <div class="container content" id="template">
        <h3 v-text="dataObj.year + '年' + dataObj.month + '月国际贸易解读报告'"></h3>
        <div class="sub-title">
            <label v-text="'发布时间：' + dataObj.publishDate"></label>
            <label>来源：农业农村部信息中心</label>
        </div>
        <div class="income_select">
            <select id="incomeSelect">
                <option value="08081000">鲜苹果</option>
                <option value="08133000">苹果干</option>
                <option value="20097000">苹果汁</option>
            </select>
        </div>
        <div class="chart" id="chart"></div><%--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--%>
        <div class="content_info">
            <div class="content-title">一、出口</div>
            <div class="content-title2">&nbsp; &nbsp; &nbsp; &nbsp;（1）鲜苹果出口情况：</div>&nbsp; &nbsp; &nbsp; &nbsp; 鲜苹果当期出口量
            <span v-text="dataObj.text.XPGDQCKSL"></span>万吨，当期出口额
            <span v-text="dataObj.text.XPGDQCKJEMY"></span>万美元，出口量环比
            <span v-text="dataObj.text.XPGCKLHB"></span>%，出口额环比
            <span v-text="dataObj.text.XPGCKEHB"></span>%，出口量同比
            <span v-text="dataObj.text.XPGCKLTB"></span>%，出口额同比
            <span v-text="dataObj.text.XPGCKETB"></span>%，当年累计出口量
            <span v-text="dataObj.text.XPGYZDYCKSL"></span>万吨，当年累计出口额
            <span v-text="dataObj.text.XPGYZDYCKJEMY"></span>万美元，当年累计出口量同比
            <span v-text="dataObj.text.XPGYZDYCKSLTB"></span>% ，当年累计出口额同比
            <span v-text="dataObj.text.XPGYZDYCKJEMYTB"></span>% 。
            <div class="content-title2">&nbsp; &nbsp; &nbsp; &nbsp;（2）苹果汁出口情况：</div>&nbsp; &nbsp; &nbsp; &nbsp; 苹果汁当期出口量
            <span v-text="dataObj.text.PGZDQCKSL"></span>万吨，当期出口额
            <span v-text="dataObj.text.PGZDQCKJEMY"></span>万美元，出口量环比
            <span v-text="dataObj.text.PGZCKLHB"></span>%，出口额环比
            <span v-text="dataObj.text.PGZCKEHB"></span>%，出口量同比
            <span v-text="dataObj.text.PGZCKLTB"></span>%，出口额同比
            <span v-text="dataObj.text.PGZCKETB"></span>%，当年累计出口量
            <span v-text="dataObj.text.PGZYZDYCKSL"></span>万吨，当年累计出口额
            <span v-text="dataObj.text.PGZYZDYCKJEMY"></span>万美元，当年累计出口量同比
            <span v-text="dataObj.text.PGZYZDYCKSLTB"></span>% ，当年累计出口额同比
            <span v-text="dataObj.text.PGZYZDYCKJEMYTB"></span>%。
            <div class="content-title2">&nbsp; &nbsp; &nbsp; &nbsp;（3）苹果干出口情况：</div>&nbsp; &nbsp; &nbsp; &nbsp; 苹果干当期出口量
            <span v-text="dataObj.text.PGGDQCKSL"></span>吨，当期出口额
            <span v-text="dataObj.text.PGGDQCKJEMY"></span>美元，出口量环比
            <span v-text="dataObj.text.PGGCKLHB"></span>%，出口额环比
            <span v-text="dataObj.text.PGGCKEHB"></span>%，出口量同比
            <span v-text="dataObj.text.PGGCKLTB"></span>%，出口额同比
            <span v-text="dataObj.text.PGGCKETB"></span>%，当年累计出口量
            <span v-text="dataObj.text.PGGYZDYCKSL"></span>吨，当年累计出口额
            <span v-text="dataObj.text.PGGYZDYCKJEMY"></span>美元，当年累计出口量同比
            <span v-text="dataObj.text.PGGYZDYCKSLTB"></span>% ，当年累计出口额同比
            <span v-text="dataObj.text.PGGYZDYCKJEMYTB"></span>%。
            <div class="content-title">二、进口</div>
            <div class="content-title2">&nbsp; &nbsp; &nbsp; &nbsp;（1）鲜苹果进口情况：</div>&nbsp; &nbsp; &nbsp; &nbsp; 鲜苹果当期进口量
            <span v-text="dataObj.text.XPGDQJKSL"></span>万吨，当期进口额
            <span v-text="dataObj.text.XPGDQJKJEMY"></span>万美元，进口量环比
            <span v-text="dataObj.text.XPGJKLHB"></span>%，进口额环比
            <span v-text="dataObj.text.XPGJKEHB"></span>%，进口量同比
            <span v-text="dataObj.text.XPGJKLTB"></span>%，进口额同比
            <span v-text="dataObj.text.XPGJKETB"></span>%，当年累计进口量
            <span v-text="dataObj.text.XPGYZDQJKSL"></span>万吨，当年累计进口额
            <span v-text="dataObj.text.XPGYZDQJKJEMY"></span>万美元，当年累计进口量同比
            <span v-text="dataObj.text.XPGYZDQJKSLTB"></span>% ，当年累计进口额同比
            <span v-text="dataObj.text.XPGYZDQJKJEMYTB"></span>% 。
            <div class="content-title2">&nbsp; &nbsp; &nbsp; &nbsp;（2）苹果汁进口情况：</div>&nbsp; &nbsp; &nbsp; &nbsp; 苹果汁当期进口量
            <span v-text="dataObj.text.PGZDQJKSL"></span>万吨，当期进口额
            <span v-text="dataObj.text.PGZDQJKJEMY"></span>万美元，进口量环比
            <span v-text="dataObj.text.PGZJKLHB"></span>%，进口额环比
            <span v-text="dataObj.text.PGZJKEHB"></span>%，进口量同比
            <span v-text="dataObj.text.PGZJKLTB"></span>%，进口额同比
            <span v-text="dataObj.text.PGZJKETB"></span>%，当年累计进口量
            <span v-text="dataObj.text.PGZYZDQJKSL"></span>万吨，当年累计进口额
            <span v-text="dataObj.text.PGZYZDQJKJEMY"></span>万美元，当年累计进口量同比
            <span v-text="dataObj.text.PGZYZDQJKSLTB"></span>% ，当年累计进口额同比
            <span v-text="dataObj.text.PGZYZDQJKJEMYTB"></span>%。
            <div class="content-title2">&nbsp; &nbsp; &nbsp; &nbsp;（3）苹果干进口情况：</div>&nbsp; &nbsp; &nbsp; &nbsp; 苹果干当期进口量
            <span v-text="dataObj.text.PGGDQJKSL"></span>吨，当期进口额
            <span v-text="dataObj.text.PGGDQJKJEMY"></span>美元，进口量环比
            <span v-text="dataObj.text.PGGJKLHB"></span>%，进口额环比
            <span v-text="dataObj.text.PGGJKEHB"></span>%，进口量同比
            <span v-text="dataObj.text.PGGJKLTB"></span>%，进口额同比
            <span v-text="dataObj.text.PGGJKETB"></span>%，当年累计进口量
            <span v-text="dataObj.text.PGGYZDQJKSL"></span>吨，当年累计进口额
            <span v-text="dataObj.text.PGGYZDQJKJEMY"></span>美元，当年累计进口量同比
            <span v-text="dataObj.text.PGGYZDQJKSLTB"></span>% ，当年累计进口额同比
            <span v-text="dataObj.text.PGGYZDQJKJEMYTB"></span>%。
            <%--<div class="content-title" v-text="'（三）'+dataObj.text.year + '年' + dataObj.text.month + '月中国苹果分省贸易流向'"></div>&nbsp; &nbsp; &nbsp; &nbsp;--%>
            <div class="content-title">三、中国苹果分省贸易流向</div>
            <div class="content-title2">&nbsp; &nbsp; &nbsp; &nbsp;（1）各省出口排名前三：</div>&nbsp; &nbsp; &nbsp; &nbsp;
            <span v-text="dataObj.text.XPGCKSFTOP1"></span>出口量排名第一，出口量
            <span v-text="dataObj.text.XPGDQCKSLTOP1"></span>万吨，占比
            <span v-text="dataObj.text.XPGDQCKLZBTOP1"></span>%，出口额
            <span v-text="dataObj.text.XPGDQCKJEWMYTOP1"></span>万美元，占比
            <span v-text="dataObj.text.XPGDQCKJEMYZBTOP1"></span>%。出口量环比
            <span v-text="dataObj.text.XPGDQCKLHBTOP1"></span>%，出口额环比
            <span v-text="dataObj.text.XPGDQCKJEHBTOP1"></span>%，出口量同比
            <span v-text="dataObj.text.XPGDQCKLTBTOP1"></span>%，出口额同比
            <span v-text="dataObj.text.XPGDQCKJETBTOP1"></span>% 。
            <span v-text="dataObj.text.CKLTOP1GJMC"></span>、
            <span v-text="dataObj.text.CKLTOP2GJMC"></span>为
            <span v-text="dataObj.text.XPGCKSFTOP1"></span>鲜苹果主要的出口国家，出口量分别为
            <span v-text="dataObj.text.CKLTOP1DQCKSL"></span>万吨、
            <span v-text="dataObj.text.CKLTOP2DQCKSL"></span>万吨，出口额分别为
            <span v-text="dataObj.text.CKLTOP1DQCKJEMY"></span>万美元、
            <span v-text="dataObj.text.CKLTOP2DQCKJEMY"></span>万美元。
            <br>&nbsp; &nbsp; &nbsp; &nbsp;
            <span v-text="dataObj.text.XPGCKTOP2SF"></span>出口量排名第二，出口量
            <span v-text="dataObj.text.XPGDQCKSLTOP2"></span>万吨，占比
            <span v-text="dataObj.text.XPGDQCKLTOP2ZB"></span>%，出口额
            <span v-text="dataObj.text.XPGDQCKJEWMYTOP2"></span>万美元，占比
            <span v-text="dataObj.text.XPGDQCKJEMYTOP2ZB"></span>%。出口量环比
            <span v-text="dataObj.text.XPGDQCKLTOP2HB"></span>%，出口额环比
            <span v-text="dataObj.text.XPGDQCKJETOP2HB"></span>%，出口量同比
            <span v-text="dataObj.text.XPGDQCKLTOP2TB"></span>%，出口额同比
            <span v-text="dataObj.text.XPGDQCKJETOP2TB"></span>% 。
            <span v-text="dataObj.text.TOP2CKLTOP1GJMC"></span>、
            <span v-text="dataObj.text.TOP2CKLTOP2GJMC"></span>为
            <span v-text="dataObj.text.XPGCKTOP2SF"></span>鲜苹果主要的出口国家，出口量分别为
            <span v-text="dataObj.text.TOP2CKLTOP1DQCKSL"></span>万吨、
            <span v-text="dataObj.text.TOP2CKLTOP2DQCKSL"></span>万吨，出口额分别为
            <span v-text="dataObj.text.TOP2CKLTOP1DQCKJEMY"></span>万美元、
            <span v-text="dataObj.text.TOP2CKLTOP2DQCKJEMY"></span>万美元。
            <br>&nbsp; &nbsp; &nbsp; &nbsp;
            <span v-text="dataObj.text.XPGCKTOP3SF"></span>出口量排名第三，出口量
            <span v-text="dataObj.text.XPGDQCKSLTOP3"></span>万吨，占比
            <span v-text="dataObj.text.XPGDQCKLTOP3ZB"></span>%，出口额
            <span v-text="dataObj.text.XPGDQCKJEWMYTOP3"></span>万美元，占比
            <span v-text="dataObj.text.XPGDQCKJEMYTOP3ZB"></span>%。出口量环比
            <span v-text="dataObj.text.XPGDQCKLTOP3HB"></span>%，出口额环比
            <span v-text="dataObj.text.XPGDQCKJETOP3HB"></span>%，出口量同比
            <span v-text="dataObj.text.XPGDQCKLTOP3TB"></span>%，出口额同比
            <span v-text="dataObj.text.XPGDQCKJETOP3TB"></span>% 。
            <span v-text="dataObj.text.TOP3CKLTOP1GJMC"></span>、
            <span v-text="dataObj.text.TOP3CKLTOP2GJMC"></span>为
            <span v-text="dataObj.text.XPGCKTOP3SF"></span>鲜苹果主要的出口国家，出口量分别为
            <span v-text="dataObj.text.TOP3CKLTOP1DQCKSL"></span>万吨、
            <span v-text="dataObj.text.TOP3CKLTOP2DQCKSL"></span>万吨，出口额分别为
            <span v-text="dataObj.text.TOP3CKLTOP1DQCKJEMY"></span>万美元、
            <span v-text="dataObj.text.TOP3CKLTOP2DQCKJEMY"></span>万美元。
            <div class="content-title2">&nbsp; &nbsp; &nbsp; &nbsp;（2）各省进口排名前二：</div>&nbsp; &nbsp; &nbsp; &nbsp;
            <span v-text="dataObj.text.XPGJKSFTOP1"></span>进口量排名第一，进口量
            <span v-text="dataObj.text.XPGDQJKSLTOP1"></span>万吨，占比
            <span v-text="dataObj.text.XPGDQJKLZBTOP1"></span>%，进口额
            <span v-text="dataObj.text.XPGDQJKJEWMYTOP1"></span>万美元，占比
            <span v-text="dataObj.text.XPGDQJKJEMYZBTOP1"></span>%。进口量环比
            <span v-text="dataObj.text.XPGDQJKLHBTOP1"></span>%，进口额环比
            <span v-text="dataObj.text.XPGDQJKJEHBTOP1"></span>%，进口量同比
            <span v-text="dataObj.text.XPGDQJKLTBTOP1"></span>%，进口额同比
            <span v-text="dataObj.text.XPGDQJKJETBTOP1"></span>%。
            <span v-text="dataObj.text.JKSFTOP1JKLTOP1GJMC"></span>是
            <span v-text="dataObj.text.XPGJKSFTOP1"></span>鲜苹果主要的进口国家，进口量
            <span v-text="dataObj.text.JKSFTOP1JKLTOP1DQJKSL"></span>万吨，进口额
            <span v-text="dataObj.text.JKSFTOP1JKLTOP1DQJKJEMY"></span>万美元。
            <br>&nbsp; &nbsp; &nbsp; &nbsp;
            <span v-text="dataObj.text.XPGJKTOP2SF"></span>进口量排名第二，进口量
            <span v-text="dataObj.text.XPGDQJKSLTOP2"></span>万吨，占比
            <span v-text="dataObj.text.XPGDQJKLTOP2ZB"></span>%，进口额
            <span v-text="dataObj.text.XPGDQJKJEWMYTOP2"></span>万美元，占比
            <span v-text="dataObj.text.XPGDQJKJEMYTOP2ZB"></span>%。进口量环比
            <span v-text="dataObj.text.XPGDQJKLTOP2HB"></span>%，进口额环比
            <span v-text="dataObj.text.XPGDQJKJETOP2HB"></span>%，进口量同比
            <span v-text="dataObj.text.XPGDQJKJETOP2TB"></span>%，进口额同比
            <span v-text="dataObj.text.XPGDQJKLTOP2TB"></span>%。
            <span v-text="dataObj.text.JKSFTOP2JKLTOP1GJMC"></span>是
            <span v-text="dataObj.text.XPGJKTOP2SF"></span>鲜苹果主要的进口国家，进口量
            <span v-text="dataObj.text.JKSFTOP2JKLTOP1DQJKSL"></span>万吨，进口额
            <span v-text="dataObj.text.JKSFTOP2JKLTOP1DQJKJEMY"></span>万美元。
        </div>
    </div>
</body>
<script type="text/javascript">
    var context = "<%=request.getContextPath()%>";
    var id = "<%=request.getParameter("id")%>";
</script>
<l:script path="jquery.js,echarts-custom.js,vue.js,sjjd/trade.js"/>
</html>
