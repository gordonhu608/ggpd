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
    <l:link path="css/font-awesome.css,css/form.css,css/xwyq/info_list.css" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="<l:asset path='html5shiv.js'/>"></script>
      <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
    <!-- 引入js文件 -->
    <l:script path="jquery.js,form.js,xwyq/info_list.js" />
    <script type="text/javascript">
        // 项目上下文
        var context = "<%=request.getContextPath()%>";
    </script>
</head>

<body>
    <div class="crumbs">当前位置: <span class="home">首页</span> > <span>新闻舆情</span></div>
    <div class="container">
        <div class="border-group">
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
        </div>
        <div class="list_content news">
            <div class="title_content">
                <div class="list_title">新闻</div>
                <div class="more"><a href="javascript:newsInfoList();">更多>></a></div>
            </div>
            <ul>
                <%--<li>
                    <span></span>
                    <span><a href="info_detail.jsp">邵通邵阳苏家院镇：以高度组织化摘取苹果产业品质“桂冠”</a></span>
                    <span class="pull-right">2020-06-18</span>
                </li>
                <li>
                    <span></span>
                    <span><a href="javascript:;">镇原 发展苹果产业实现经济生态 “双赢”</a></span>
                    <span class="pull-right">2020-06-18</span>
                </li>
                <li>
                    <span></span>
                    <span><a href="javascript:;">吉县“智慧果园”带动苹果产业转型升级</a></span>
                    <span class="pull-right">2020-06-18</span>
                </li>--%>
            </ul>
        </div>
        <div class="list_content public_opinion">
            <div class="title_content">
                <div class="list_title">舆情</div>
                <div class="more"><a href="javascript:popularFeelingsInfoList();">更多>></a></div>
            </div>
            <ul>
                <%--<li>
                    <span></span>
                    <span><a href="javascript:;">吉县“智慧果园”带动苹果产业转型升级</a></span>
                    <span class="pull-right">2020-06-18</span>
                <li>
                    <span></span>
                    <span><a href="javascript:;">邵通邵阳苏家院镇：以高度组织化摘取苹果产业品质“桂冠”</a></span>
                    <span class="pull-right">2020-06-18</span>
                </li>
                <li>
                    <span></span>
                    <span><a href="javascript:;">镇原 发展苹果产业实现经济生态 “双赢”</a></span>
                    <span class="pull-right">2020-06-18</span>
                </li>--%>
            </ul>
        </div>
    </div>
    <script>
        $("body").on("click", ".home", function(){
            $('.nav-menu-item', window.parent.document).eq(0).addClass('active').siblings('.nav-menu-item').removeClass('active');
            $('#mainFrame', window.parent.document).attr('src', "./jsp/index/index.jsp");
        })
    </script>
</body>

</html>