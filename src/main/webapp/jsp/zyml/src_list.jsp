<%@ page contentType="text/html;charset=UTF-8" isELIgnored="false" pageEncoding="UTF-8" %>
<%@ taglib uri="/tags/loushang-web" prefix="l" %>
<html>
<head>
    <l:link path="css/bootstrap.css,css/datatables.css,css/font-awesome.css,css/form.css,css/ui.css,css/ztree.css,css/zyml/src_list.css"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>资源目录</title>
</head>
<body>
<div class="crumbs">当前位置: <span class="home">首页</span> > <span>资源目录</span></div>
<div class="container">
    <div class="catalog">
        <ul class="nav nav-pills src-tree-nav" id="myTab">
            <li class="active"><a href="#industry">产业目录</a></li>
            <li><a href="#index">指标目录</a></li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane" id="index">
                <ul class="ztree" id="treeIndex"></ul>
            </div>
            <div class="active tab-pane" id="industry">
                <ul class="ztree" id="treeIndustry"></ul>
            </div>
        </div>
    </div>
    <div class="list" id="src-list">
        <div class="sub-crumbs" v-text="'当前目录：' + route"></div>
        <form class="form-inline" id="form" onsubmit="return false;">
            <div class="col-sm-3 form-group" style="width: 180px;">
                <label class="control-label">地区 </label>
                <select :disabled="searchConfig.areaShowFlag === '0' ? 'disabled' : false" class="form-control ue-form"
                        id="area" style="width: 70%;" title="">
                    <option value="">全国</option>
                    <option :key="opt" :value="opt" v-for="opt in areas">{{ opt }}</option>
                </select>
            </div>
            <div class="col-sm-6 form-group" style="margin-left: -20px;">
                <label class="control-label">时间区间 </label>
                <div class="input-group date" style="width: 180px;">
                    <input :disabled="searchConfig.timeShowFlag === '0' ? 'disabled' : false"
                           :placeholder="searchConfig.timeShowFlag === '1' ? '选择开始时间' : ''" class="form-control ue-form"
                           id="startTime" type="text">
                    <span class="input-group-addon ue-form-btn">
                        <i class="fa fa-calendar"></i>
                    </span>
                </div>
                <div class="input-group date" style="width: 180px;">
                    <input :disabled="searchConfig.timeShowFlag === '0' ? 'disabled' : false"
                           :placeholder="searchConfig.timeShowFlag === '1' ? '选择结束时间' : ''" class="form-control ue-form"
                           id="endTime" type="text">
                    <span class="input-group-addon ue-form-btn">
                        <i class="fa fa-calendar"></i>
                    </span>
                </div>

            </div>
            <div class="col-sm-2 form-group" style="width: 280px;margin-left: -30px;">
                <label class="control-label">关键词搜索</label>
                <input :disabled="searchConfig.keywordShowFlag === '0' ? 'disabled' : false"
                       :placeholder="searchConfig.keywordShowFlag === '1' ? '请输入关键词' : ''"
                       class="form-control ue-form" id="keyword" style="width: 70%;" type="text">
            </div>
            <div class="pull-left">
                <button @click="query" class="btn ue-btn" id="query" type="button">
                    <span class="fa fa-search"></span> 查询
                </button>
            </div>
        </form>
        <div class="table-container">
            <table id="srcList" class="table table-bordered table-hover"></table>
        </div>
    </div>
</div>
</body>
<script type="text/javascript">
    var context = "<%=request.getContextPath()%>";
</script>
<l:script path="jquery.js,bootstrap.js,datatables.js,form.js,loushang-framework.js,vue.js,ztree.js,zyml/src_list.js"/>
<script>
    $("body").on("click", ".home", function () {
        $('.nav-menu-item', window.parent.document).eq(0).addClass('active').siblings('.nav-menu-item').removeClass('active');
        $('#mainFrame', window.parent.document).attr('src', "./jsp/index/index.jsp");
    })
</script>
</html>
