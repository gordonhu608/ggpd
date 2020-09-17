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
<html lang="en" style="height:100%;">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=10" />

    <link rel="stylesheet" type="text/css" href="<l:asset path='css/font-awesome.css'/>" />
    <link rel="stylesheet" type="text/css" href="<l:asset path='../css/ol/ol.css'/>" />

    <title>数据地图</title>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 8]>
    <script src="<l:asset path='html5shiv.js'/>"></script>
    <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
    <style type="text/css">
        .map{
            width: 100%;
            height: 100%;
        }
        .ol-control {
            /*隐藏地图控件*/
            display: none;
        }
        .map_legend{
            position: fixed;
            bottom: 2rem;
        }
        .ol-popup {
            position: absolute;
            background-color: white;
            box-shadow: 0 1px 4px rgba(0,0,0,0.2);
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #cccccc;
            bottom: 12px;
            left: -50px;
            min-width: 150px;
        }
        .ol-popup:after, .ol-popup:before {
            top: 100%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
        }
        .ol-popup:after {
            border-top-color: white;
            border-width: 10px;
            left: 48px;
            margin-left: -10px;
        }
        .ol-popup:before {
            border-top-color: #cccccc;
            border-width: 11px;
            left: 48px;
            margin-left: -11px;
        }
        .ol-popup-closer {
            text-decoration: none;
            position: absolute;
            top: 2px;
            right: 8px;
        }
        .ol-popup-closer:after {
            content: "";
        }
        .redFont{
            color: red;
            font-size: 20px;
        }
    </style>
    <script type="text/javascript">
        // 项目上下文
        var context = "<%=request.getContextPath()%>";
        // 影像底图服务
        var baseLayerUrl = "<%=PropertiesUtil.getValueByKey("map.baseLayer.url")%>";
        function getUrlParam (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }

        var mapType = getUrlParam("mapType");
        var dateType = getUrlParam("dateType");

        console.log(dateType);
        var dataUrl = context + "/service/appleTradePrice/getMarketAndPriceData?dateType="+dateType;
        var dataUrl2 = context + "/service/wisdomOrchard/getWisdomOrchardData";
    </script>
</head>
<body style="margin:0;height:100%;">
<div style="height:100%;">
    <div id='map' class="map">
    </div>
    <%-- 地图弹出框 --%>
    <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content" style="width:auto;"></div>
    </div>
    <div id="map-legend" class="map_legend" style="display: none;">
        <div><span></span>>50</div>
    </div>
</div>
<script type="text/javascript" src="<l:asset path='ol/ol.js'/>"></script>
<script type="text/javascript" src="<l:asset path='ol/iclient-ol.min.js'/>"></script>
<script type="text/javascript" src="<l:asset path='sjzht/dataMap.js'/>"></script>
</body>
</html>