<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"%>
<%@ taglib uri="/tags/loushang-web" prefix="l"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<% response.setStatus(HttpServletResponse.SC_OK); %>
<%
if(request.getAttribute("BSP_AUTHORIZATION_EXCEPTION") != null) {
	Exception e = (Exception)request.getAttribute("BSP_AUTHORIZATION_EXCEPTION");
%>
<!-- <%=e.getMessage() %> -->
<%} %>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>error</title>

    <!-- 需要引用的CSS -->
    <link rel="stylesheet" type="text/css" href="<l:asset path='css/font-awesome.css'/>" />
    <link rel="stylesheet" type="text/css" href="<l:asset path='css/ui.css'/>" />
    <l:script path="jquery.js"/>
	<style type="text/css">
	body {
		background-color: #fff;
	}
	.content {
		background-image: url("<l:asset path='bsp/img/authz_exception.png'/>");
		background-repeat: no-repeat;
		margin: 5% auto;
		width: 590px;
		height: 380px;
	}
	.content .fa {
		margin-right: 6px;
		font-size: 18px;
	}
	ul {
		position: relative;
		top: 280px;
		padding-left: 20px;
		padding-top: 10px;
		font-family: Microsoft yahei;
	}
	li {
		line-height: 30px;
		margin-left: 190px;
		list-style:none;
	}
	a {
		color: #027bff;
		text-decoration: none;
	}
	a:hover {
		color: blue;
		text-decoration: underline;
	}
	</style>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="<l:asset path='html5shiv.js'/>"></script>
      <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
  </head>
  <body>
	<!-- 页面结构 -->
	<div class="content">
		<ul>
			<li><a href="javascript:window.location.reload();"><i class="fa fa-angle-double-left"></i><spring:message code="home.Tip43" text="刷新一下"/></a></li>
			<li><a href="javascript:history.go(-1);"><i class="fa fa-angle-double-left"></i><spring:message code="home.Tip44" text="返回上一页"/></a></li>
		</ul>
	</div>
	
    <!-- 需要引用的JS -->
    <script type="text/javascript">
	    $(function(){
	    	var url = '<%=request.getContextPath()%>'+ L.getLocaleMessage("bsp.common.003","url(skins/skin/bsp/img_en_US/authz_exception.png)");
	    	$(".content").css('background-image',"url("+url+")");
	    });
    </script>
  </body>
  
</html>