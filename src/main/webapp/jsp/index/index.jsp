<!DOCTYPE html>
<%@ page pageEncoding="UTF-8" language="java" %>
<%@ taglib uri="/tags/loushang-web" prefix="l" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>首页</title>

    <link rel="stylesheet" type="text/css" href="<l:asset path='css/bootstrap.css'/>"/>
    <link href="../../css/index/index.css" rel="stylesheet" type="text/css"/>

    <script type="text/javascript" src="<l:asset path='knockout.js'/>"></script>
    <!-- 引入js文件 -->
    <l:script path="jquery.js,bootstrap.js"/>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="<l:asset path='html5shiv.js'/>"></script>
    <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->

    <style type="text/css">
        .chart_content .consumer_preferences > div {
            float: left;
            /*position: relative;*/
            width: 286px;
            height: 100%;
        }
        .consumer_preferences > div:first-child {
            position: absolute;
            top:8%;
            left:5%;
        }

        .production_info {
            width: 1.82rem;
            height: 2.06rem;
            position: absolute;
            right: 0.1rem;
            bottom: 0.05rem;
        }

        .production_info > div {
            width: 100%;
            height: 100%;
        }

        .product_tab_content > div .chart {
            width: 100%;
            height: calc(100% - 0.26rem);
        }

        .production_info > div .info_title {
            padding-left: 0.26rem;
        }

        .new_content li span:first-child {
            display: block;
            float: left;
            width: 0.05rem;
            height: 0.05rem;
            background-color: #B2AEA6;
            border-radius: 0.05rem;
            margin-top: 0.18rem;
        }

        .product_tab {
            position: absolute;
            top: 0.1rem;
            right: 0.1rem;
            width: 1.4rem;
            height: 0.3rem;
            line-height: 0.3rem;
            z-index: 2;
        }

        .product_tab > div {
            float: left;
            width: 50%;
            height: 100%;
            color: #007EB9;
            border: 1px solid #0080B9;
            background-color: #fff;
            text-align: center;
            cursor: pointer;
        }

        .product_tab > div.active,
        .product_tab > div:hover {
            color: #fff;
            background-color: #0080B9;
        }

        /*.product_tab_content > div .chart {
            height: 100%;
        }*/
    </style>
    <script type="text/javascript">
        //项目上下文
        var context = "<%=request.getContextPath()%>";
        //获取静态资源上下文路径
        var assetPath = "<l:assetcontext/>";
    </script>
</head>

<body>
<div class="index_container" id="app">
    <div class="section section1">
        <div class="key_data_trend">
            <div class="module_line"></div>
            <div class="module_title">苹果关键数据走势</div>
            <div class="trend_info">
                <div class="chart_tab">
                    <ul>
                        <li class="active">
                            <div data-value="plantAreaAndYield">我国种植面积及产量</div>
                        </li>
                        <li>
                            <div data-value="chinaImportAndExportTrade">我国进出口贸易</div>
                        </li>
                        <li>
                            <div>成本收益</div>
                        </li>
                        <li>
                            <div>电商消费喜好</div>
                        </li>
                    </ul>
                </div>
                <div class="chart_content">
                    <div id="plantChart"></div>
                    <div id="trendChart" style="display: none;"></div>
                    <div style="display: none;">
                        <div class="chart" id="incomeChart"></div>
                        <div class="income_select">
                            <select id="incomeSelect">
                                <option value="101">全国</option>
                                <option value="102">北京</option>
                                <option value="104">河北</option>
                                <option value="105">山西</option>
                                <option value="107">辽宁</option>
                                <option value="116">山东</option>
                                <option value="117">河南</option>
                                <option value="128">陕西</option>
                                <option value="129">甘肃</option>
                                <option value="131">宁夏</option>
                            </select>
                        </div>
                    </div>
                    <div class="consumer_preferences" style="display: none;">
                        <div style="display: block;">2019年8月-2020年8月消费者偏好
                        </div>
                        <%--<div class="chart" id="dealChart"></div>
                        <div class="deal_info"></div>--%>
                        <%--<div class="chart" id="diameterChart"></div>--%>
                        <%--<div class="chart" id="priceChart"></div>--%>
                        <div class="chart" id="locationChart"></div>
                        <div class="chart" id="radiusChart"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="more"><a id="moreNews">更多>></a></div>
            <div class="news_tab">
                <div id="xinwen" data-value='xinwen' class="btn_tab active">新闻</div>
                <div id="yuqing" data-value='yuqing' class="btn_tab">舆情</div>
            </div>
            <div class="new_content">
                <div class="news_info">
                    <ul>
                        <%--<li>
                            <span>1</span>
                            <span>王彦梅:灵台苹果出口第一人台苹果出口第一</span>
                            <span>2020-05-01</span>
                        </li>
                        <li>
                            <span>2</span>
                            <span>王彦梅:灵台苹果出口第一人</span>
                            <span>2020-05-01</span>
                        </li>
                        <li>
                            <span>3</span>
                            <span>王彦梅:灵台苹果出口第一人 sd sdae </span>
                            <span>2020-05-01</span>
                        </li>
                        <li>
                            <span>4</span>
                            <span>王彦梅:灵台苹果出口第一人</span>
                            <span>2020-05-01</span>
                        </li>
                        <li>
                            <span>5</span>
                            <span>王彦梅:灵台苹果出口第一人</span>
                            <span>2020-05-01</span>
                        </li>
                        <li>
                            <span>6</span>
                            <span>王彦梅:灵台苹果出口第一人</span>
                            <span>2020-05-01</span>
                        </li>
                        <li>
                            <span>7</span>
                            <span>王彦梅:灵台苹果出口第一人</span>
                            <span>2020-05-01</span>
                        </li>
                        <li>
                            <span>8</span>
                            <span>王彦梅:灵台苹果出口第一人</span>
                            <span>2020-05-01</span>
                        </li>--%>
                    </ul>
                </div>
                <div class="public_opinion" style="display: none;">
                    <ul>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="section section2">
        <div class="price_changes">
            <div class="module_line"></div>
            <div class="module_title">富士苹果价格</div>
            <div class="price_wrapper">
                <div class="price_tab">
                    <div class="active">北京批发及零售价</div>
                    <div>上海批发及零售价</div>
                    <div>广州批发及零售价</div>
                    <div>主产区田头价</div>
                </div>
                <div class="price_content">
                    <div id="bjChart"></div>
                    <div id="shhChart" style="display: none;"></div>
                    <div id="gzhChart" style="display: none;"></div>
                    <div id="zcqChart" style="display: none;"></div>
                </div>
            </div>
        </div>
        <div class="price_indices">
            <div class="module_line"></div>
            <div class="module_title">月度价格指数</div>
            <div class="unscramble"><a href="readInstructions.jsp" target="_self">解读</a></div>
            <div class="indices_wrapper">
                <div class="indices_show">
                    <div>
                        <div class="indices_title"><span></span>富士苹果指数</div>
                        <div class="indices_info">
                            <div class="indices_num"><span id="FSPGZSZ"></span></div>
                            <div><span id="FSPGZL"></span> <span id="FSPGZJF"></span></div>
                        </div>
                    </div>
                    <div>
                        <div class="indices_title"><span></span>水果指数</div>
                        <div class="indices_info">
                            <div class="indices_num"><span id="SGZSZ"></span></div>
                            <div><span id="SGZL"></span> <span id="SGZJF"></span></div>
                        </div>
                    </div>
                    <div>
                        <div class="indices_title"><span></span>200总指数</div>
                        <div class="indices_info">
                            <div class="indices_num"><span id="ZZSZ"></span></div>
                            <div><span id="ZZL"></span> <span id="ZZJF"></span></div>
                        </div>
                    </div>
                </div>
                <div class="indices_chart" id="indicesChart"></div>
            </div>
        </div>
    </div>
    <div class="section section3">
        <div class="visual">
            <div class="module_line"></div>
            <div class="module_title">可视化专题</div>
            <div class="visual_info">
                <div class="chart_tab">
                    <ul>
                        <li class="active">
                            <div>价格分布</div>
                        </li>
                        <li>
                            <div>贸易流向</div>
                        </li>
                        <li>
                            <div>生产分布</div>
                        </li>
                        <li>
                            <div>灾害分布</div>
                        </li>
                    </ul>
                </div>
                <div class="chart_content">
                    <div>
                        <div class="price_title"><span id="timeDate">6月3日</span>全国富士苹果批发价格</div>
                        <div class="chart" id="priceDistributionChart"></div>
                        <div class="price_top5">
                            <div class="top5_title">全国批发价排名TOP5</div>
                            <%--<div>
                                <span>1</span>
                                <span>北京</span>
                                <span>10.86元/斤</span>
                            </div>
                            <div>
                                <span>2</span>
                                <span>上海</span>
                                <span>11.86元/斤</span>
                            </div>
                            <div>
                                <span>3</span>
                                <span>浙江</span>
                                <span>10.00元/斤</span>
                            </div>
                            <div>
                                <span class="index-default">4</span>
                                <span>山东</span>
                                <span>10.06元/斤</span>
                            </div>
                            <div>
                                <span class="index-default">5</span>
                                <span>广东</span>
                                <span>11.23元/斤</span>
                            </div>--%>
                        </div>
                    </div>
                    <div style="display: none;">
                        <div class="price_title"><span id="tradeTimeDate">2020年6月</span>中国鲜苹果贸易情况</div>
                        <div class="time_tab">
                            <div class="active">按月</div>
                            <div>按年</div>
                        </div>
                        <div class="time_tab_content">
                            <div>
                                <div class="chart" id="monthTradeFlowChart"></div>
                                <div class="trade_flow_info month_trade_flow_info">
                                    <div class="info_tab">
                                        <div class="active">出口</div>
                                        <div>进口</div>
                                    </div>
                                    <div class="info_tab_content">
                                        <div>
                                            <div class="info_title">中国鲜果苹果出口排名 (吨)</div>
                                            <div class="chart" id="monthExportInfoChart"></div>
                                        </div>
                                        <div style="display: none;">
                                            <div class="info_title">中国鲜果苹果进口排名 (吨)</div>
                                            <div class="chart" id="monthImportInfoChart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="display: none;">
                                <div class="chart" id="yearTradeFlowChart"></div>
                                <div class="trade_flow_info year_trade_flow_info">
                                    <div class="info_tab">
                                        <div class="active">出口</div>
                                        <div>进口</div>
                                    </div>
                                    <div class="info_tab_content">
                                        <div>
                                            <div class="info_title">中国鲜果苹果出口排名 (吨)</div>
                                            <div class="chart" id="yearExportInfoChart"></div>
                                        </div>
                                        <div style="display: none;">
                                            <div class="info_title">中国鲜果苹果进口排名 (吨)</div>
                                            <div class="chart" id="yearImportInfoChart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: none;">
                        <div class="price_title product_title"><%--<span id="timeYear">2018年</span>全国苹果种植面积监测--%></div>
                        <div class="product_tab">
                            <div class="active"><%--2020年全国苹果种植--%>面积<%--监测--%></div>
                            <div>产量<%--重点县面积监测--%></div>
                        </div>
                        <div class="product_tab_content">
                            <div>
                                <div class="chart product_chart" id="chinaProductionDistributionChart"></div>
                                <div class="production_info">
                                    <div>
                                        <div class="info_title">种植面积排名(万亩)</div>
                                        <div class="chart" id="plantingAreaChart"></div>
                                    </div>
                                </div>
                            </div>
                            <div style="display: none;">
                                <div class="chart product_chart" id="productionDistributionChart"></div>
                                <div class="production_info">
                                    <div>
                                        <div class="info_title">产量排名(万吨)</div>
                                        <div class="chart" id="productionRankingChart"></div>
                                    </div>
                                </div>
                            </div>
                            <%--<div class="chart" style="display: none;" id="productionDistributionChart"></div>--%>
                        </div>
                    </div>
                    <div style="display: none;">
                        <div class="disasters_title"><span>2020年气象灾害情况展示</span></div>
                        <div class="chart" id="disastersDistributionChart"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="data_unscramble">
            <div class="more"><a href="../../service/sjjd/list" target="_self">更多>></a></div>
            <div class="data_unscramble_title">数据解读</div>
            <div class="data_unscramble_line"></div>
            <div class="data_unscramble_content">
                <ul id="jd">
                </ul>
            </div>
        </div>
    </div>
</div>

<script src="../../js/index/echarts-custom.js"></script>
<script src="../../js/index/china.js"></script>
<script src="../../js/index/world.js"></script>
<script src="../../js/index/indexChart.js"></script>
<script src="../../js/index/index.js"></script>
<script>
    $("body").on("click", "#moreNews", function () {
        $('.nav-menu-item', window.parent.document).eq(2).addClass('active').siblings('.nav-menu-item').removeClass('active');
        $('#mainFrame', window.parent.document).attr('src', "./jsp/xwyq/info_list.jsp");
    })
</script>
</body>

</html>
