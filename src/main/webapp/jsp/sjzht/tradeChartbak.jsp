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
<%--    <script type="text/javascript" src="<l:asset path='ol/geoCoordMap.js'/>"></script>--%>
<%--    <script type="text/javascript" src="<l:asset path='ol/ol3Echarts.js'/>"></script>--%>
    <%--    <link rel="stylesheet" type="text/css" href="<l:asset path='css/public/button.css'/>" />--%>
    <l:link path="css/font-awesome.css,css/sjzht/dataSubject.css,css/sjzht/tradeChart.css" />

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
        // 遥感影像底图服务
        var baseLayerUrl = "<%=PropertiesUtil.getValueByKey("map.baseLayer.url")%>";
    </script>
</head>
<body>
<div class="main_container">
    <div id="scale-content" class="scale-content">
        <div class="btn_group btn-group-color">
            <div class="choose_category">
                <div id="checked-category">鲜苹果</div>
                <ul>
                    <li data-type="0" data-code="08081000">鲜苹果</li>
                    <li data-type="1" data-code="20097900">苹果汁</li>
                    <li data-type="0" data-code="08133000">苹果干</li>
                </ul>
            </div>
            <div class="btn_tabs">
                <div class="active" data-vlaue="export">出口</div>
                <div data-vlaue="import">进口</div>
            </div>
        </div>
        <div id='map' class="map">

        </div>
        <div class="timeline map_timeline" id="mapTimeline">
            <ul>

            </ul>
        </div>
    </div>
</div>

<script type="text/javascript" src="<l:asset path='jquery-1.9.1.min.js'/>"></script>
<script type="text/javascript" src="<l:asset path='bootstrap.js'/>"></script>
<script type="text/javascript" src="<l:asset path='ol/ol.js'/>"></script>
<script type="text/javascript" src="<l:asset path='ol/iclient-ol.min.js'/>"></script>
<script type="text/javascript" src="<l:asset path='echarts/echarts.js'/>"></script>
<script type="text/javascript" src="<l:asset path='production/monitor/rem1506.js'/>"></script>
<%--<script type="text/javascript" src="<l:asset path='sjzht/tradeChart.js'/>"></script>--%>
<script type="text/javascript" src="../../skins/js/ol/geoCoordMap.js"></script>
<script type="text/javascript" src="../../skins/js/ol/ol3Echarts.js"></script>
<script type="text/javascript" src="../../skins/js/sjzht/tradeChartbak.js"></script>

</body>
</html>