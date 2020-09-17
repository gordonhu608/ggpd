var SrcList = new Vue({
    data: {
        areas: [
            "北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建",
            "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西",
            "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门"
        ],
        route: "价格 > 批发价格",
        searchConfig: {},
        showConfig: [],
        orderDir1: null,
        orderField1: null,
        orderDir2: null,
        orderField2: null,
        orderDir3: null,
        orderField3: null,
        orderDir4: null,
        orderField4: null,
        total: 0,
        treeNode: {sourceName: "批发价格", tableCode: "JJSJ_GNJG_PFJG"}
    },
    el: "#src-list",
    methods: {
        getColumns() {
            var column = this.showConfig.filter(function (t) {
                t.data = t.orgName === null ? t.fieldName : t.orgName;
                return t;
            });
            if (this.treeNode.tableCode === "ZZZY_ZZZY_PZXX") {
                column.push({title: "操作"})
            }
            return column;
        },
        query() {
            var startTime = $("#startTime").val();
            var endTime = $("#endTime").val();
            var time = "";
            if (endTime == "" && startTime != "") {
                var date = new Date();
                $("#endTime").val(formatDate(date));
                endTime = formatDate(date) + " 23:59:59";
                time = startTime + ' - ' + endTime;
            }
            if(startTime != ""&&endTime!=""){
                endTime =  endTime+ " 23:59:59";
                time = startTime + ' - ' + endTime;
            }
            if(startTime==""&&endTime!=""){
                alert("开始时间不能为空！")
                return;
            }

            loadTable({
                area: $("#area").val(),
                keyword: $("#keyword").val().split(" "),
                limit: 20,
                start: 0,
                time: time
            });
        }
    }
});

function formatDate(date) {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();

    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    var result = myyear + "-" + mymonth + "-" + myweekday;
    return result;//想要什么格式都可以随便自己拼
}

var setting = {
    callback: {onClick: nodeClick},
    data: {
        key: {name: "sourceName"},
        simpleData: {enable: true, idKey: "id", pIdKey: "parentId", rootPId: ""}
    }
};

$(document).ready(function () {
    initData();

    initTree("index", "02");
    initTree("industry", "01");

    $("#myTab a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $("#startTime").datetimepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        autoclose: 1,
        startView: 2,
        minView: 2
    });

    $("#endTime").datetimepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        autoclose: 1,
        startView: 2,
        minView: 2
    });

    $(document).on("click", ".detail", function () {
        var data = $("#srcList").DataTable().rows($(this).attr("id").substr(3)).data()[0];
        window.location.href = context + "/service/source/varietyInformation?id=" + data.ID;
    })
});

function click(id) {
    $.post(context + "/service/source/catalog/click/" + id)
}

function getRoute(treeNode) {
    SrcList.route = "";
    var navList = [];
    navList.push(treeNode.sourceName);
    while (treeNode.parentId) {
        treeNode = treeNode.getParentNode();
        navList.unshift(treeNode.sourceName)
    }
    navList.forEach(function (item) {
        SrcList.route += item + " > ";
    });
    SrcList.route = SrcList.route.substr(0, SrcList.route.length - 3)
}

function initData(treeNode) {
    SrcList.searchConfig = {};
    SrcList.showConfig = [];
    if (treeNode) {
        SrcList.treeNode = treeNode;
    }
    $.ajax({
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify($.extend({}, SrcList.param,
            {limit: 20, searchConfig: SrcList.searchConfig, showConfig: SrcList.showConfig, start: 0})),
        success: function (res) {
            SrcList.data = res.data;
            SrcList.searchConfig = res.searchConfig;
            SrcList.showConfig = res.showConfig;
            // if (res.msg != null) {
            //     alert(res.msg);
            // }

            if (SrcList.searchConfig != null) {
                SrcList.orderDir1 = SrcList.searchConfig.orderDir1 == null ? "DESC" : SrcList.searchConfig.orderDir1;
                SrcList.orderField1 = SrcList.searchConfig.orderField1 == null ? "CJSJ" : SrcList.searchConfig.orderField1;
                SrcList.orderDir2 = SrcList.searchConfig.orderDir2 == null ? "" : SrcList.searchConfig.orderDir2;
                SrcList.orderField2 = SrcList.searchConfig.orderField2 == null ? "" : SrcList.searchConfig.orderField2;
                SrcList.orderDir3 = SrcList.searchConfig.orderDir3 == null ? "" : SrcList.searchConfig.orderDir3;
                SrcList.orderField3 = SrcList.searchConfig.orderField3 == null ? "" : SrcList.searchConfig.orderField3;
                SrcList.orderDir4 = SrcList.searchConfig.orderDir4 == null ? "" : SrcList.searchConfig.orderDir4;
                SrcList.orderField4 = SrcList.searchConfig.orderField4 == null ? "" : SrcList.searchConfig.orderField4;
            } else {
                SrcList.searchConfig = {areaShowFlag: '0', searchConfig: '0', timeShowFlag: '0', keywordShowFlag: '0'};
                SrcList.orderDir1 = null;
                SrcList.orderField1 = null;
                SrcList.orderDir2 = null;
                SrcList.orderField2 = null;
                SrcList.orderDir3 = null;
                SrcList.orderField3 = null;
                SrcList.orderDir4 = null;
                SrcList.orderField4 = null;
            }

            if (treeNode) {
                loadTable({limit: 20, start: 0});
            } else {
                initTable({limit: 20, start: 0});
            }
            if (res.total == 0) {
                $("#srcList_paginate").hide();
            } else {
                $("#srcList_paginate").show();
            }
        },
        type: "post",
        url: context + "/service/source/treeNode/query/" + SrcList.treeNode.tableCode
    });
}

function initTable(param) {
    $("#srcList").DataTable({
        ajax: function (data, callback) {
            $.ajax({
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify($.extend({}, param, {
                    limit: data.limit,
                    orderDir: data.order.length ? data.order[0].dir : "",
                    orderField: data.order.length ? data.columns[data.order[0].column].data : "",
                    orderDir1: SrcList.orderDir1,
                    orderField1: SrcList.orderField1,
                    orderDir2: SrcList.orderDir2,
                    orderField2: SrcList.orderField2,
                    orderDir3: SrcList.orderDir3,
                    orderField3: SrcList.orderField3,
                    orderDir4: SrcList.orderDir4,
                    orderField4: SrcList.orderField4,
                    searchConfig: SrcList.searchConfig,
                    showConfig: SrcList.showConfig,
                    start: data.start
                })),
                success: function (res) {
                    SrcList.data = res.data;
                    SrcList.searchConfig = res.searchConfig;
                    SrcList.showConfig = res.showConfig;
                    callback({
                        draw: data.draw,
                        data: res.data,
                        recordsFiltered: res.total,
                        recordsTotal: res.total
                    });
                },
                type: "post",
                url: context + "/service/source/list/query/" + SrcList.treeNode.tableCode
            });
        },
        columns: SrcList.getColumns(),
        columnDefs: SrcList.treeNode.tableCode === "ZZZY_ZZZY_PZXX" ? [{
            data: "操作",
            render: function (data, type, row, cell) {
                return "<a class='detail' id='btn" + cell.row + "'>更多</a>";
            },
            targets: SrcList.showConfig.length //操作按钮目标列
        }] : [],
        language: {
            info: "显示 _START_ 到 _END_ 条 共 _TOTAL_ 条记录",
            loadingRecords: "加载中...",
            paginate: {next: "》", previous: "《"},
            zeroRecords: "未查询到数据，请检查配置信息！"
        },
        lengthChange: false,
        order: [],
        ordering: true,
        searching: false,
        serverSide: true
    });
}
;
function initTree(id, sourceType) {
    $.get(context + "/service/source/catalog/query/" + sourceType, function (res) {
        if (id == "industry") {
            var ztreeObj= $.fn.zTree.init($("#" + id), setting, res);
            //默认展开 “价格"
            var node = ztreeObj.getNodeByParam("sourceName", '价格', null);
            ztreeObj.expandNode(node);
            //默认选中“批发价格”
            var cNode = ztreeObj.getNodeByParam("tableCode", 'JJSJ_GNJG_PFJG', null);
            ztreeObj.selectNode(cNode);
        } else if (id == "index") {
            var ztree = $.fn.zTree.init($("#" + id), setting, res);
        }
    });
}

function loadTable(param) {
    var table = $("#srcList");
    table.dataTable().fnDestroy();
    table.html("");
    initTable(param);
}

function nodeClick(e, treeId, treeNode) {
    if (treeNode.tableCode) {
        click(treeNode.id);
        getRoute(treeNode);
        initData(treeNode);
    } else {
        $.fn.zTree.getZTreeObj(treeId).expandNode(treeNode);
    }
}

// Left Tab

$(".catalog-src-tab-item").on('click', function () {
    if (!$(this).hasClass("catalog-src-tab-item-active")) {
        $(this).addClass("catalog-src-tab-item-active")
            .siblings(".catalog-src-tab-item")
            .removeClass("catalog-src-tab-item-active");
        $(".catalog-src-tab-content-item").eq($(this).index()).show()
            .siblings(".catalog-src-tab-content-item").hide();
    }
});

$(".catalog-src-tab-content-item").on("click", 'li a', function () {
    if (!$(this).hasClass("catalog-item-active")) {
        $(".catalog-src-tab-content-item li a").removeClass("catalog-item-active");
        $(this).addClass("catalog-item-active");
    }
});
































