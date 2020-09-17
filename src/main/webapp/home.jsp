<!DOCTYPE html>
<%@ page pageEncoding="UTF-8" language="java"%>
<%@ taglib uri="/tags/loushang-web" prefix="l"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html lang="en" style="height:100%">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
	<title>
		<spring:message code="home.title" text="楼上云应用支撑平台" />
	</title>

	<!-- 需要引用的CSS -->
	<link rel="shortcut icon" href="<l:asset path='platform/img/favicon.ico'/>" />
	<link rel="stylesheet" type="text/css" href="<l:asset path='css/bootstrap.css'/>" />
	<link rel="stylesheet" type="text/css" href="<l:asset path='css/font-awesome.css'/>" />
	<link rel="stylesheet" type="text/css" href="<l:asset path='css/ui.css'/>" />
	<link rel="stylesheet" type="text/css" href="<l:asset path='css/form.css'/>" />
	<link rel="stylesheet" type="text/css" href="<l:asset path='css/intro.css'/>" />
	<link href="css/style.css" rel="stylesheet" type="text/css" />

	<script type="text/javascript" src="<l:asset path='knockout.js'/>"></script>
	<!-- 引入js文件 -->
	<l:script path="jquery.js,bootstrap.js,form.js,datatables.js,loushang-framework.js,ui.js" />
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
      <script src="<l:asset path='html5shiv.js'/>"></script>
      <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
	<script type="text/javascript">
		//项目上下文
		var context = "<%=request.getContextPath()%>";
		//获取静态资源上下文路径 
		var assetPath = "<l:assetcontext/>";
		String.prototype.startsWith = String.prototype.startsWith || function (str) {
		    var reg = new RegExp("^" + str);
		    return reg.test(this);
		}
		String.prototype.endsWith = String.prototype.endsWith || function (str) {
		    var reg = new RegExp(str + "$");
		    return reg.test(this);
		}
	</script>
</head>

<body>
	<div class="contanier">
		<div id="nav-content" class="nav-menu-content-box">
			<div class="top_info" style="display: none">
				<div class="time_wrapper pull-left">
					<span class="today"></span>
					<span class="week_day"></span>
					<span class="lunar"></span>
				</div>
				<div class="pull-right">
					<a class="user_login" href="javascript:loginin();">用户登录</a>
					<div class="dropdown user_dropdown" id="userInfo">
						<a data-toggle="dropdown" data-bind="text:userName" class="username"><span
								class="caret"></span></a>
						<div class="dropdown-menu ue-dropdown-menu dropdown-menu-right">
							<span class="ue-dropdown-angle"></span>
							<img class="user-photo" src="<l:asset path='platform/img/user.jpg'/>" />
							<div class="user-info">
								<span class="user-role" data-bind="text:userName"></span>
								<a href="<%=request.getContextPath()%>/service/bsp/userinfo" target="mainFrame"
									class="user-action"><i class="fa fa-edit md">&nbsp;</i>
									<spring:message code="home.EditInfo" text="修改资料" /></a>
								<a href="#" class="user-action"><i class="fa fa-user-md md">&nbsp;</i>
									<spring:message code="home.PersonalCenter" text="个人中心" /></a>
							</div>
							<div class="exit"><a onclick="logout()">
									<spring:message code="home.SignOut" text="退出" /></a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="nav-menu-content">
				<div class="nav-menu-content-item">
					<div class="title">
<%--						<div class="title_cn">国家苹果大数据公共数据频道</div>--%>
<%--						<div class="title_en">National public data channel for Apple big data</div>--%>
					</div>
					<div class="nav-menu-content-list"></div>
				</div>
			</div>
		</div>
		<div class="main_container" style="overflow-y: auto;">
			<iframe width="100%" id="mainFrame" name="mainFrame" onload="Javascript:SetCwinHeight()" frameborder="0"
				scrolling="no" src="<%=request.getContextPath()%>/jsp/index/index.jsp"></iframe>
		</div>
		<div class="bottom">主办方: 农业农村部信息中心</div>
	</div>

	<script src="js/moment.js"></script>
	<script src="js/getCNDate.js"></script>
	<script type="text/javascript">
		//用户信息视图
		var userInfoView = {
			//data
			userName: ko.observable(L.getLocaleMessage("home.Tip3", "系统管理员")),
			//behaviors
			userUpdate: function (data) {
				userName(data.userName);
			},
		};
		ko.applyBindings(userInfoView, $("#userInfo")[0]);
		//获取用户信息
		$(function getUserInfo() {
			$.ajax({
				url: context + "/service/signin/user",
				data: {},
				type: "post",
				async: false,
				success: function (data) {
					if (data !== "") {
						var userInfo = data;
						userInfoView.userName(userInfo.userName);
						isLogin = true;
						$('.userInfo').show();
						$('.user_login').hide();
					} else {
						/* $.dialog({
							type: 'alert',
							content: L.getLocaleMessage("home.Tip13", "用户没有登录！"),
							autofocus: true
						}).showModal(); */
						$('#userInfo').hide();
						$('.user_login').show();
					}

				},
				error: function () {
					/* $.dialog({
						type: 'alert',
						content: L.getLocaleMessage("home.Tip13", "用户没有登录！"),
						autofocus: true
					}).showModal(); */
					$('#userInfo').hide();
					$('.user_login').show();
				}
			});
		});
		$(document).ready(function () {
			var url = context + "/service/portal/service/menu";
			$.ajax({
				url: url,
				type: "post",
				data: {},
				success: function (data) {

					var html = '<div class="nav-menu-content-info">';
					var target = '';
					var src = '';
					for (var i = 0; i < data.length; i++) {
						menuData = data[i];
						target = menuData.target === "1" ? "" : "_blank";
						src = target === "_blank" ? menuData.url : 'javascript:;';

						html += '<div class="nav-menu-item"><div class="active_top"></div>';
						html += '<a href="' + src + '" data-src="' + menuData.url + '" target="' + target + '" class="nav-menu-title">';
						html += menuData.name;
						html += '</a></div>';
					}
					html += '</div>';
					$(".nav-menu-content-list").empty();
					$(".nav-menu-content-list").append(html);

					$('.nav-menu-item').eq(0).addClass('active').siblings('.nav-menu-item').removeClass('active');

					$('.nav-menu-title').on('click', function () {
						$(this).parent().addClass('active').siblings('.nav-menu-item').removeClass('active');
						if (!$(this).attr('target')) {
							var src = $(this).data('src');
							if(src.startsWith("http")){
								$('#mainFrame').attr('src', $(this).data('src'));
							} else {
								$('#mainFrame').attr('src', context + $(this).data('src'));
							}
						}
					});

				},
				error: function (XHR, textStatus, errorThrown) { }
			});



			$('#userInfo').hover(function () {
				$($(this).children("div")).show();
			}, function () {
				$($(this).children("div")).hide();
			});

			setInterval(function () {
				$('.today').text(moment().format('YYYY年MM月DD日'));
				$('.week_day').text(moment().format('dddd'));
				$('.lunar').text(GetCNDate());
			}, 1000);

			// iframe自动高
			window.onresize = function () {
				SetCwinHeight();
			}
		});
		function loginin() {
			window.location.href = context;
		}
		function logout() {
			$.dialog({
				type: 'confirm',
				content: L.getLocaleMessage("home.Tip19", "您确定要退出系统吗？"),
				ok: function () {
					//delCookies("topMenu,favoritesMenu,initModelName,leftMenu,ifram");
					document.location.href = context + "/logout";
					//document.location.href = context + "/home.jsp";
				},
				cancel: function () { },
				autofocus: true
			}).showModal();
		}
		var timer = null;
		function SetCwinHeight() { // iframe自动高
			clearTimeout(timer);
			var iframeid = document.getElementById("mainFrame"); //iframe id
			if (document.getElementById) {
				if (iframeid && !window.opera) {
					if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) {
						iframeid.height = iframeid.contentDocument.body.offsetHeight;
					}
					else if (iframeid.Document && iframeid.Document.body.scrollHeight) {
						iframeid.height = iframeid.Document.body.scrollHeight;
					}
				}
			}
			timer = setTimeout(function() {
				SetCwinHeight()
			},3000);
		}
	</script>

</body>

</html>