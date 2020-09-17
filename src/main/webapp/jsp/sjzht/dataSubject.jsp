<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib uri="/tags/loushang-web" prefix="l"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="com.inspur.ggpd.util.PropertiesUtil"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>数据专题</title>
    <!-- 引入css文件 -->
    <link rel="stylesheet" type="text/css" href="<l:asset path='css/sjzht/idangerous.swiper.css'/>" />
    <l:link path="css/font-awesome.css,css/sjzht/dataSubject.css" />
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="<l:asset path='html5shiv.js'/>"></script>
    <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
    <script type="text/javascript">
        // 项目上下文
        var context = "<%=request.getContextPath()%>";
        // 遥感影像底图服务
        var baseLayerUrl = "<%=PropertiesUtil.getValueByKey("map.baseLayer.url")%>";
    </script>
</head>

<body>
<div class="crumbs">当前位置: <span class="home">首页</span> > <span>数据专题</span></div>
<div class="container">
    <div class="content_wrapper">
        <div class="left_content">
            <div class="left_tab">
                <div>生产数据</div>
                <div class="active">价格数据</div>
                <div id="trade">贸易数据</div>
                <div>绿色企业</div>
                <div>智慧果园</div>
                <div>遥感数据</div>
            </div>
        </div>
        <div class="right_content">
            <div class="tab_content">
                <div class="product_data_content">
                    <div class="tab_content_title">全国苹果产量信息</div>
                    <iframe  width="100%" id="productFrame" name="productFrame" frameborder="0" style="height: 100%"
                             scrolling="no" src="<%=request.getContextPath()%>/jsp/production/scale/space.jsp"></iframe>
                </div>
                <div class="price_data_content" style="display: block;">
                   <div class="tab_content_title">全国富士苹果批发价格分布</div>
                   <div class="btn_group">
                        <div class="btn_tabs">
                            <div class="active" data-type="1" data-code="dwmj">日度</div>
                            <div data-type="2" data-code="dwmj">周度</div>
                            <div data-type="3" data-code="dwmj">月度</div>
                            <div data-type="4" data-code="dwmj">年度</div>
                        </div>
                    </div>
                    <div class="chart_content">
                        <iframe width="100%" id="priceDataFrame" name="priceDataFrame" frameborder="0" style="height:calc(100% - 0.5rem);float:left;position:absolute;"
                                scrolling="no" src="<%=request.getContextPath()%>/jsp/sjzht/dataMap.jsp?mapType=1&dateType=1"></iframe>
                        <%--<div class="map_chart" id="priceDistribute"></div>--%>
                        <div class="bar_chart" id="priceSort"></div>
                    </div>
                </div>
                <div class="trade_data_content">
                    <div class="tab_content_title"><span class="time">2020年</span>中国<span>鲜苹果</span>贸易流向</div>
<%--                    <div class="btn_group">--%>
<%--                        <div class="choose_category">--%>
<%--                            <div id="checked-category">鲜苹果</div>--%>
<%--                            <ul>--%>
<%--                                <li>鲜苹果</li>--%>
<%--                                <li>苹果汁</li>--%>
<%--                                <li>苹果干</li>--%>
<%--                            </ul>--%>
<%--                        </div>--%>
<%--                        <div class="btn_tabs">--%>
<%--                            <div class="active">出口</div>--%>
<%--                            <div>进口</div>--%>
<%--                        </div>--%>
<%--                    </div>--%>
                    <div class="trade_chart" id="tradeChart">
                        <iframe  width="100%" id="tradeChartFrame" name="tradeChartFrame" frameborder="0" style="height: 100%"
                                 scrolling="no" src="<%=request.getContextPath()%>/jsp/sjzht/tradeChartbak.jsp"></iframe>
                    </div>
                </div>
                <div class="green_enterprise_content">
                    <div class="tab_content_title">全国绿色企业分布</div>
                    <div class="green_enterprise_map" id="greenEnterpriseMap">
                        <iframe  width="100%" id="greenEnterpriseFrame" name="greenEnterpriseFrame" frameborder="0" style="height: 100%"
                                 scrolling="no" src="<%=request.getContextPath()%>/jsp/sjzht/greenEnterprise.jsp"></iframe>
                    </div>
                </div>
                <div class="intelligent_orchard_content">
                    <div id="wisdomOrchardTitle" class="tab_content_title">山西西里果园</div>
                    <iframe id="wisdomOrchardFrame" name="wisdomOrchardFrame" frameborder="0" style="width:calc(100% - 3.4rem);height:100%;float:left;position:absolute;"
                            scrolling="no" src="<%=request.getContextPath()%>/jsp/sjzht/dataMap.jsp?mapType=2"></iframe>
                    <div class="orchard_info_content">
                        <div class="toggle_btn"></div>
                        <div class="orchard_name_content">
                            <div class="choose_orchard">
                                <div id="checked-orchard">山西西里果园</div>
                                <ul>
                                    <li data-value="SXXLGY">山西西里果园</li>
                                    <li data-value="GSSNXJN">甘肃省宁县聚农苹果产业资金合作社</li>
                                    <li data-value="SXLCXYGY">陕西省洛川鑫塬苹果专业合作社</li>
                                    <li data-value="SDWHLGQYJY">山东省威海市临港区樱聚缘苹果园</li>
                                    <li data-value="SXSLCX">陕西省延川县张卫庞苹果种植合作社</li>
                                </ul>
                            </div>
                        </div>
                            <div class="carousel_content">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                                <img src="../../skins/skin/img/dataSubject/guoyuan1.jpg">
                                        </div>
                                        <div class="swiper-slide">
                                                <img src="../../skins/skin/img/dataSubject/guoyuan2.jpg">
                                        </div>
                                        <div class="swiper-slide">
                                                <img src="../../skins/skin/img/dataSubject/guoyuan3.png">
                                        </div>
                                        <div class="swiper-slide">
                                                <img src="../../skins/skin/img/dataSubject/guoyuan4.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="slide_info_wrapper">
                                                <img src="../../skins/skin/img/dataSubject/guoyuan5.jpg">
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel_pagination"></div>
                            </div>
                        </div>
                        <div class="monitor_box">
                            <div class="monitor_title">气象监测</div>
                            <div class="monitor_time"></div>
                           <%-- <div class="monitor_more"><a href="">更多></a></div>--%>
                            <div class="monitor_content">
                                <div class="monitor_item">
                                    <div>空气温度</div>
                                    <div id="monitor_val_wd"></div>
                                </div>
                                <div class="monitor_item">
                                    <div>空气湿度</div>
                                    <div id="monitor_val_sd"></div>
                                </div>
                                <div class="monitor_item">
                                    <div>光照强度</div>
                                    <div id="monitor_val_gz"></div>
                                </div>
                            </div>
                        </div>
                        <div class="monitor_box">
                            <div class="monitor_title">果园监测</div>
                            <div class="monitor_time"></div>
                           <%-- <div class="monitor_more"><a href="">更多></a></div>--%>
                            <div class="monitor_content">
                                <div class="monitor_item">
                                    <div>20cm温度</div>
                                    <div id="monitor_val_wd1"></div>
                                </div>
                                <div class="monitor_item">
                                    <div>40cm温度</div>
                                    <div id="monitor_val_wd2"></div>
                                </div>
                                <div class="monitor_item">
                                    <div>60cm温度</div>
                                    <div id="monitor_val_wd3"></div>
                                </div>
                                <div class="monitor_item">
                                    <div>20cm含水量</div>
                                    <div id="monitor_val_hs1"></div>
                                </div>
                                <div class="monitor_item">
                                    <div>40cm含水量</div>
                                    <div id="monitor_val_hs2"></div>
                                </div>
                                <div class="monitor_item">
                                    <div>60cm含水量</div>
                                    <div id="monitor_val_hs3"></div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="remote_sensing_data_content"></div>
            </div>
                <div class="reomote_sensing_content">
                    <div class="tab_content_title">苹果园面积实际分布图</div>
                    <div class="green_enterprise_map" id="remoteSensingMap">
                        <iframe  width="100%" id="remoteSensingFrame" name="remoteSensingFrame" frameborder="0" style="height: 100%"
                                 scrolling="no" src="<%=request.getContextPath()%>/jsp/sjzht/remoteSensing.jsp"></iframe>
                    </div>
                </div>
        </div>
    </div>
</div>


<!-- 引入js文件 -->
<%--<l:script path="jquery.js,echarts-custom.js,sjzht/idangerous.swiper.min.js,sjzht/dataSubjectChart.js,sjzht/dataSubject.js" />--%>
    <l:script path="jquery.js,echarts-custom.js,ol/ol.js,ol/iclient-ol.min.js,sjzht/idangerous.swiper.min.js,sjzht/dataSubjectChart.js,sjzht/dataSubject.js" />
<script>
    $("body").on("click", ".home", function(){
        $('.nav-menu-item', window.parent.document).eq(0).addClass('active').siblings('.nav-menu-item').removeClass('active');
        $('#mainFrame', window.parent.document).attr('src', "./jsp/index/index.jsp");
    })
</script>
</body>

</html>
