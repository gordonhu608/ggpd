/**
 * Created by tangxianwei on 2020/8/3
 */
var vueApp = new Vue({
    el: "#app",
    data: {
        //要查询的数据ID
        id: '',
        //要查询的表
        tableCode: '',
        columns: [],
        pageData: null,
        imgSrc: ''
    },
    created: function () {
        var _self = this;
        //获取传入的ID
        _self.id = _self.getQueryVariable("id") == undefined ? '1' : _self.getQueryVariable("id");
        //获取传入的表名
        _self.tableCode = _self.getQueryVariable("tableCode") == undefined ? 'ZZZY_ZZZY_PZXX' : _self.getQueryVariable("tableCode");
        _self.getAllLables();
        _self.getTableDataById();
    },
    mounted: function () {
    },
    updated: function () {
    },
    methods: {
        /**
         * 获取参数值
         * @param variable
         * @returns {*}
         */
        getQueryVariable: function (variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
            return undefined;
        },
        /**
         * 根据传入的表名获取所有的标签
         */
        getAllLables: function () {
            var _self = this;
            $.get(context + "/service/source/varietyInformation/remarks/" + _self.tableCode, function (data) {
                _self.columns = data;
            })
        },
        /**
         * 根据ID获取数据
         */
        getTableDataById: function () {
            var _self = this;
            $.get(context + "/service/source/varietyInformation/" + _self.id + "/" + _self.tableCode, function (data) {
                _self.pageData = data;
                //图片
                _self.imgSrc = data.TX;
            })
        },
        /**
         * 根据列名获取相对应的值
         * @param column
         * @returns {*}
         */
        getColumnValue: function (column) {
            return this.pageData[column.columnName];
        }
    },
    computed: {}
})