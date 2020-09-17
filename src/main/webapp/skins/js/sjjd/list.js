/**
 * Created by tangxianwei on 2020/8/22
 */
var grid;
var vueApp = new Vue({
    created: function () {
        this.getAllDataType();
    },
    data: {dataTypes: [], selectedDataType: null, active: -1, listTitle: '全部解读'},
    el: "#app",
    methods: {
        getAllDataType: function () {
            var _self = this;
            $.get(context + "/service/sjjd/getAllDataType", function (data) {
                _self.dataTypes = data;
            });
        },
        selectType: function (type, i,name) {
            this.active = i;
            this.selectedDataType = type;
            this.listTitle = name;
            grid.setParameter('keyword',$("#keyword").val());
            grid.setParameter('type',type);
            grid.reload(context + "/service/sjjd/getDataDecodeData");
            window.parent.SetCwinHeight();
        },
        showAll: function () {
            this.listTitle = '全部解读';
            this.active = -1;
            this.selectedDataType = null;
            grid.setParameter('keyword',$("#keyword").val());
            grid.setParameter('type',null);
            grid.reload(context + "/service/sjjd/getDataDecodeData");
            window.parent.SetCwinHeight();
        }
    }
});

function renderName(data) {
    return '<div class="article-title"><span></span>' + data + '</div>';
}

$(document).ready(function () {

    //初始化datatable
    grid = new L.FlexGrid("table", context + "/service/sjjd/getDataDecodeData");
    grid.init({}); //初始化datatable
    grid.setParameter('keyword',$("#keyword").val());
    grid.setParameter('type',vueApp.selectedDataType);

    //条件查询
    $("#query").bind("click", function () {
        grid.setParameter('keyword',$("#keyword").val());
        grid.setParameter('type',vueApp.selectedDataType);
        var url = context + "/service/sjjd/getDataDecodeData";
        grid.reload(url);
    });

    $(document).on("click", ".article-title", function () {
        var obj = grid.oTable.row($(this).parents("tr")).data();
        window.location = context + "/jsp/sjjd/" + obj.sjlx + ".jsp?id=" + obj.id;
    });


    window.parent.SetCwinHeight();
});


