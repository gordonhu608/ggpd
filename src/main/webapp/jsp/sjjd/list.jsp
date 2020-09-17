<%@ page contentType="text/html;charset=UTF-8" isELIgnored="false" pageEncoding="UTF-8" %>
<%@ taglib uri="/tags/loushang-web" prefix="l" %>
<html>
<head>
    <l:link path="css/bootstrap.css,css/font-awesome.css,css/form.css,css/ui.css,css/sjjd/list.css"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>数据解读</title>
</head>
<body>
<div class="crumbs">当前位置: <span class="home">首页</span> > <span>数据解读</span></div>
<div class="container" id="app">
    <div class="catalog">
        <div class="nav_list">
            <div class="nav_title" :class="{nav_title_active:active==-1}" @click="showAll()">全部解读</div>
            <ul class="nav nav-pills">
                <li style="float: initial" :class="{active:active==index}" v-for="(type, index) in dataTypes" @click="selectType(type.type, index,type.name)">
                    <a v-text="type.name"></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="list" id="list">
        <div>
            <form class="form-inline" id="form" onsubmit="return false;">
                <div class="list_title" v-text="listTitle"></div>
                <div class="pull-right">
                    <button class="btn ue-btn" id="query" type="button">
                        <span class="fa fa-search"></span> 查询
                    </button>
                </div>
                <div class="col-sm-3 form-group pull-right">
                    <input class="form-control ue-form" id="keyword" placeholder="请输入关键词" style="width: 100%;"
                           type="text">
                </div>
            </form>
            <div class="table-container">
                <table id="table" class="table">
                    <thead style="display: none;">
                    <tr>
                        <th data-field="bt" data-render="renderName" data-sortable="false" width="80%">标题</th>
                        <th width="20%" data-field="rq">日期</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript">
    var context = "<%=request.getContextPath()%>";
</script>
<l:script path="jquery.js,bootstrap.js,datatables.js,form.js,loushang-framework.js,vue.js,sjjd/list.js"/>
</html>
