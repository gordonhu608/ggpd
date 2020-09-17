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
    <l:link path="css/font-awesome.css,css/form.css,css/xwyq/info_detail.css" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="<l:asset path='html5shiv.js'/>"></script>
      <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
    <!-- 引入js文件 -->
    <l:script path="jquery.js,form.js,xwyq/info_detail.js" />
    <script type="text/javascript">
        // 项目上下文
        var context = "<%=request.getContextPath()%>";
        var id = "<%=request.getParameter("id")%>";
        var type = "<%=request.getParameter("type")%>";
    </script>
</head>

<body>
    <div class="crumbs">当前位置: <span class="home">首页</span> > <span class="goback">新闻舆情</span> > <span>详情</span></div>
    <div class="container">
        <div class="border-group">
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
        </div>
        <div class="info_content">
            <div class="info_title"><%--苹果树怎么栽培?--%></div>
            <div class="article_info">
                <span id="fbsj"><%--发布时间: 2020-5-15 15:23--%></span>
                <span id="ly"><%--来源: 惠农网--%></span>
                <%--<span>作者: 惠农网小编</span>--%>
                <div class="font_config">[ 字体: <span data-size="6">大</span> <span class="active" data-size="2">中</span>
                    <span data-size="0">小</span> ]</div>
            </div>
            <div class="article_content">
                <%--<h3>物理像素</h3>
                <p>移动端浏览器可以在一个比屏幕更宽的虚拟”窗口“中渲染页面，从而无需将所有页面都压缩进小屏幕里（那样会把很多没有针对移动端进行优化的站点打乱）。用户可以通过平移和缩放来浏览页面的不同区域。比如我们把一个页面的宽度写成了10000px，那么我们照样可以通过平移缩放来看到这个页面，当然这是不可取的，所以我们就需要以上代码，将viewport的width设置为设备的宽度，缩放的倍数是1，且不让用户进行缩放（这个可以根据实际业务场景来设置）。经过以上设置，我们就可以开始进入愉快写代码的第一步了~
                </p>
                <p style="font-size: 20px;">物理像素一般在设备出厂的时候就被设置好了，也叫设备像素，单
                    位是pt（point），pt是一个物理单位，指的是组成显示器屏幕的绝对长度。我们买电视机的时候，会说，我买个70寸的电视机。</p>--%>
            </div>
            <div class="other_articales">
                <div id="strip1"><%--上一条: <a href="">一颗"冰糖心" 万户致富路————新疆阿克苏苹果产业发展</a>--%></div>
                <div id="strip2"><%--下一条: <a href="">镇原 发展苹果产业实现经济生态"双赢"</a>--%></div>
            </div>
        </div>
    </div>
</body>
<script>
    $("body").on("click", ".home", function(){
        $('.nav-menu-item', window.parent.document).eq(0).addClass('active').siblings('.nav-menu-item').removeClass('active');
        $('#mainFrame', window.parent.document).attr('src', "./jsp/index/index.jsp");
    })
    $("body").on("click", ".goback", function(){
       window.history.back()
    })
</script>
</html>