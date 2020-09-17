<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib uri="/tags/loushang-web" prefix="l"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>新闻舆情</title>
    <!-- 引入css文件 -->
    <l:link path="css/font-awesome.css,css/form.css,css/xwyq/infoList.css" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="<l:asset path='html5shiv.js'/>"></script>
    <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->

    <script type="text/javascript">
        // 项目上下文
        var context = "<%=request.getContextPath()%>";
    </script>
</head>

<body>
<div class="crumbs">当前位置: <span class="home">首页</span> > <span>新闻舆情</span></div>
<div class="container">
    <div class="left_content">
        <div class="left_title">新闻舆情目录</div>
        <div class="left_tab">
            <div class="active" data-value="news"><span></span>新闻动态</div>
            <div data-value="yuqing"><span></span>舆情信息</div>
        </div>
        <div class="word_cloud">
            <div class="word_cloud_title">词云</div>
            <div class="word_cloud_chart" id="wordCloudChart"></div>
        </div>
    </div>
    <div class="right_content">
        <div class="right_top">
            <div class="right_title">新闻动态</div>
            <div class="input-group pull-right">
                <input class="search" type="text" id="resourceName" placeholder="请输入关键字" />
                <div class="input-group-addon search_btn" id="query">
                    <span class="fa fa-search"></span>
                    <span>查询</span>
                </div>
            </div>
        </div>
        <div class="info_list">
            <ul>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"镇原 发展苹果产业实现经济生态"双赢"镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
<%--                <li><span></span><a href="">镇原 发展苹果产业实现经济生态"双赢"</a><span>2020-04-11</span></li>--%>
            </ul>
            <div class="paging" id="pages"></div>
        </div>
    </div>
</div>

<!-- 引入js文件 -->
<l:script path="jquery.js,form.js,echarts-custom.js,echarts-wordcloud.js,xwyq/infoList.js" />
<script>
    $("body").on("click", ".home", function(){
        $('.nav-menu-item', window.parent.document).eq(0).addClass('active').siblings('.nav-menu-item').removeClass('active');
        $('#mainFrame', window.parent.document).attr('src', "./jsp/index/index.jsp");
    })
</script>
</body>

</html>