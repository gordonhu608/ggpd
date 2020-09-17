<%@ page contentType="text/html;charset=UTF-8" isELIgnored="false" pageEncoding="UTF-8" %>
<%@ taglib uri="/tags/loushang-web" prefix="l" %>
<html>
<head>
    <l:link path="css/bootstrap.css,css/font-awesome.css,css/form.css,css/ui.css,css/zyml/more.css"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>更多</title>
</head>
<body>
<div class="container" id="app">
    <div class="crumbs">当前位置: 首页 > <span>资源目录 > </span><span>详情</span>
        <a class="btn btn-default pull-right" style="margin-top: 5px; margin-right: 10px;" href="javascript:history.go(-1)">返回</a>
    </div>
    <div class="link-top"></div>
    <div class="row img_tx">
        <img :src="imgSrc" alt="">
    </div>
    <div class="row" style="margin-top: 20px;">
        <div class="col-md-offset-2 col-md-4" v-for="(col,index) in columns"
             v-if="col.columnName!='ID'&& col.columnName!='TX'">
            <span v-text="col.remark+':'" class="label-text"></span>
            <span v-text="getColumnValue(col)" class="value-text"></span>
        </div>
    </div>
</div>
</body>
<script type="text/javascript">
    var context = "<%=request.getContextPath()%>";
</script>
<l:script path="jquery.js,bootstrap.js,datatables.js,form.js,loushang-framework.js,vue.js,zyml/more.js"/>
</html>
