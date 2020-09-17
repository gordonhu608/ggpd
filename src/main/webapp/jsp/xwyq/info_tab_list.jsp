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
	<l:link path="css/font-awesome.css,css/form.css,css/xwyq/info_tab_list.css" />

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
      <script src="<l:asset path='html5shiv.js'/>"></script>
      <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
	<!-- 引入js文件 -->
	<l:script path="jquery.js,form.js,xwyq/info_tab_list.js" />
	<script type="text/javascript">
		// 项目上下文
		var context = "<%=request.getContextPath()%>";
		var infoType = "<%=request.getParameter("infoType")%>";
	</script>
</head>

<body>
	<div class="crumbs">当前位置: 首页 > <span>新闻舆情</span></div>
	<div class="container">
		<div class="border-group">
			<div class="border1"></div>
			<div class="border2"></div>
			<div class="border3"></div>
		</div>
		<div class="btn_group">
			<button type="button" id="xinwen" data-value='xinwen' class="btn_tab active">新闻</button>
			<button type="button" id="yuqing" data-value='yuqing' class="btn_tab">舆情</button>
		</div>
		<div class="search_box">
			<div class="input-group pull-right">
				<input class="search" type="text" id="resourceName" placeholder="请输入关键字" />
				<div class="input-group-addon search_btn" id="query">
					<span class="fa fa-search"></span>
					<span>查询</span>
				</div>
			</div>
		</div>
		<div class="tab_content">
			<div>
				<div class="newslist" id="newsInfoList">
					<ul>
						<%--<li><span></span><span><a href="info_detail.jsp">镇原 发展苹果产业实现经济生态 “双赢”</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a href="javascript:alert(0);">吉县“智慧果园”带动苹果产业转型升级</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a
									href="javascript:alert(0);">邵通邵阳苏家院镇：以高度组织化摘取苹果产业品质“桂冠”</a></span><span
								class="pull-right">2020-06-18</span></li>--%>
					</ul>
				</div>
				<div class="row">
					<!-- <div class="pageinfo">显示 <span id="from"></span> 到 <span id="to"></span> 条 共 <span id="total"></span> 条记录 -->
					<!-- </div> -->
					<div class="pagination" id="pages"></div>
				</div>
			</div>
			<div style="display: none;">
				<div class="newslist" id="popularFeelingsInfoList">
					<ul>
						<%--<li><span></span><span><a
									href="javascript:alert(0);">邵通邵阳苏家院镇：以高度组织化摘取苹果产业品质“桂冠”</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a href="javascript:alert(0);">镇原 发展苹果产业实现经济生态 “双赢”</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a href="javascript:alert(0);">吉县“智慧果园”带动苹果产业转型升级</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a href="javascript:alert(0);">吉县“智慧果园”带动苹果产业转型升级</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a href="javascript:alert(0);">吉县“智慧果园”带动苹果产业转型升级</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a href="javascript:alert(0);">吉县“智慧果园”带动苹果产业转型升级</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a href="javascript:alert(0);">吉县“智慧果园”带动苹果产业转型升级</a></span><span
								class="pull-right">2020-06-18</span></li>
						<li><span></span><span><a href="javascript:alert(0);">吉县“智慧果园”带动苹果产业转型升级</a></span><span
								class="pull-right">2020-06-18</span></li>--%>
					</ul>
				</div>
				<div class="row">
					<!-- <div class="pageinfo">显示 <span id="from"></span> 到 <span id="to"></span> 条 共 <span id="total"></span> 条记录 -->
					<!-- </div> -->
					<div class="pagination2" id="pages2"></div>
				</div>
			</div>
		</div>

	</div>
</body>

</html>