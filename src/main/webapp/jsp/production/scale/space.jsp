<%--
  Created by IntelliJ IDEA.
  User: zhengyunshuo
  Date: 2020/6/12
  Time: 16:43
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE html>
<%@ page pageEncoding="UTF-8" language="java"%>
<%@ taglib uri="/tags/loushang-web" prefix="l"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@page import="com.inspur.ggpd.util.PropertiesUtil"%>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=10" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="<l:asset path='css/font-awesome.css'/>" />
    <link rel="stylesheet" type="text/css" href="<l:asset path='css/timeLine/timeLine.css'/>" />
    <link rel="stylesheet" type="text/css" href="<l:asset path='css/production/space.css'/>" />
<%--    <link rel="stylesheet" type="text/css" href="<l:asset path='css/public/button.css'/>" />--%>

    <title>空间分布</title>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 8]>
    <script src="<l:asset path='html5shiv.js'/>"></script>
    <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
<%--    <l:script path="jquery.js,bootstrap.js,form.js,datatables.js,loushang-framework.js,ui.js,ztree.js"/>--%>
    <script type="text/javascript" src="<l:asset path='echarts-custom.js'/>"></script>
    <style type="text/css">

    </style>
    <script type="text/javascript">
        // 项目上下文
        var context = "<%=request.getContextPath()%>";
        //监测预警数的上下文
        var jcyjContext= "<%=PropertiesUtil.getValueByKey("jcyj.context")%>"
		// 遥感影像底图服务
        var baseLayerUrl = "<%=PropertiesUtil.getValueByKey("map.baseLayer.url")%>";
        //时间轴初始年份
        var initYear = "<%=PropertiesUtil.getValueByKey("SPACEYEAR")%>";
    </script>
</head>
<body>
    <div class="main_container">
        <div id="scale-content" class="scale-content">
            <div id='map' class="map">

            </div>
            <div id="mapWorld" class="map-world">

            </div>
            <%--    查询条件控制--%>
            <div id="control" class="control">
                <span onclick="select(this,this.id)" id="0">中国</span><span onclick="select(this,this.id)" id="1">全球</span>&nbsp;&nbsp;
                <span onclick="select(this,this.id)" id="2">种植面积</span><span onclick="select(this,this.id)" id="3">产量</span>
            </div>
            <div class="detail-title">
                <span id="year1">2020年</span><span id="boundry1">全国</span>苹果<span id="unitText">产量3923.34万吨</span>&nbsp;&nbsp;&nbsp;<span style="display: none" id="countryNum"></span>
            </div>
            <%--    地图弹出框--%>
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content" style="width:auto;"></div>
            </div>
<%--            <div id="map-legend" class="map-legend">--%>
<%--                <div class="legend1"><span></span>>100</div>--%>
<%--                <div class="legend2"><span></span>50-100</div>--%>
<%--                <div class="legend3"><span></span>0-50</div>--%>
<%--                &lt;%&ndash;                    <div class="legend4"><span></span>无数据</div>&ndash;%&gt;--%>
<%--            </div>--%>
            <div id="map-legend" class="map_legend">
                <div><span></span>>50</div>
                <div><span></span>30-50</div>
                <div><span></span>10-30</div>
                <div><span></span>5-10</div>
                <div><span></span>1-5</div>
                <div><span></span>0.5-1</div>
            </div>
            <%--                &lt;%&ndash;    时间轴&ndash;%&gt;--%>
            <%--                <div class="cx-time-main" id="cxTime" style="z-index: 1;"></div>--%>
            <%--                &lt;%&ndash;    产量排行图表&ndash;%&gt;--%>
            <%--                <div id="rank" class="product-rank"></div>--%>

            <!--  时间轴 -->
            <div class="timeline map_timeline" id="mapTimeline">
                <ul></ul>
            </div>
            <!-- <div class="cx-time-main" id="cxTime" style="z-index: 1;"></div> -->
            <!--  产量排行图表 -->
            <div class="rank_content">
                <div class="chart_title">
                    <span class="chart_name" id="clpm">产量排名 (万吨)</span>
                    <div class="chart_info"></div>
                </div>
                <div id="rank" class="product-rank" style="display: none"></div>
                <div class="bar_toggle"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="<l:asset path='jquery-1.9.1.min.js'/>"></script>
    <script type="text/javascript" src="<l:asset path='bootstrap.js'/>"></script>
    <script type="text/javascript" src="<l:asset path='ol/ol.js'/>"></script>
    <script type="text/javascript" src="<l:asset path='ol/iclient-ol.min.js'/>"></script>
    <script type="text/javascript" src="<l:asset path='production/monitor/rem1506.js'/>"></script>
    <script type="text/javascript" src="<l:asset path='echarts/echarts.js'/>"></script>
    <script type="text/javascript" src="<l:asset path='trade/world.js'/>"></script>
    <!-- <script type="text/javascript" src="<l:asset path='timeaxis/timeAxis_new.js'/>"></script> -->
    <script type="text/javascript" src="<l:asset path='production/scale/space.js'/>"></script>
<%--	<script  type="text/javascript" src="<l:asset path='ol/ol.js'/>"></script>--%>
<%--	<script  type="text/javascript" src="<l:asset path='ol/iclient-ol.min.js'/>"></script>--%>
<%--    <script  type="text/javascript" src="<l:asset path='echarts/echarts.js'/>"></script>--%>
<%--    <script  type="text/javascript" src="<l:asset path='timeaxis/timeAxis_new.js'/>"></script>--%>
<%--	<script  type="text/javascript" src="<l:asset path='production/scale/space.js'/>"></script>--%>
</body>
</html>