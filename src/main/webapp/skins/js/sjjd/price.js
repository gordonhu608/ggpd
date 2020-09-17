var Template = new Vue({
    data: {
        dataObj: {
            year: "",
            month: '',
            publishDate: "",
            chart: {},
            text: {

            },
        }
    },
    el: "#template"
});
$(document).ready(function () {
    get();

    var body = $("body");
    body.on("click", ".home", function () {
        $(".nav-menu-item", window.parent.document).eq(0).addClass("active").siblings(".nav-menu-item").removeClass("active");
        $("#mainFrame", window.parent.document).attr("src", "./jsp/index/index.jsp");
    });
    body.on("click", ".parent", function () {
        $("#mainFrame", window.parent.document).attr("src", "./jsp/sjjd/list.jsp");
    });
});

function get() {
    $.get(context + "/service/sjjd/getTradeData/" + id, function (res) {
        Template.dataObj.year = res.nf;
        Template.dataObj.month = res.yf;
        Template.dataObj.publishDate = res.fbsj;
        Template.dataObj.text = JSON.parse(res.jdsj).text;
        Template.dataObj.chart = JSON.parse(res.jdsj).chart;
        loadChart();
    });
}

function loadChart() {
    var chart = echarts.init(document.getElementById("chart"));
    var option = {
        legend: { top: "bottom" },
        //title: { left: "center", text: "各主产区成本比较" },
        tooltip: {
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type:"批发价", unit:"元/公斤"}, {type:"集市价", unit:"元/公斤"}, {type:"超市价", unit:"元/公斤"}, {type:"批发同比", unit:"%"}, {type:"集市同比", unit:"%"}, {type:"超市同比", unit:"%"}]);
            },
            trigger: "axis"
        },
        xAxis: [{
            axisLine: { show: false },
            axisTick: { show: false },
            data: /*['201911','201912','202001','202002','202003','202004']*/Template.dataObj.chart.dateTime,
            interval: 0,
            type: "category"
        }],
        yAxis: [{
            axisLabel: { formatter: "{value}" },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            type: "value",
            name: "元/公斤",
            nameTextStyle: { padding:[0, 0, 0, -50] }
        },{
            axisLabel: { formatter: "{value}%"/*color: "#74726D"*/ },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            type: "value"
        }],
        color: ['#FE7C5A', '#51AFEC', '#245399',
            '#2B80FE','#D92E28','#FF9801'],
        series: [
            { data: Template.dataObj.chart.QGPFJList, name: "批发价", type: "bar", yAxisIndex: 0 },
            { data: Template.dataObj.chart.QGJSJList, name: "集市价", type: "bar", yAxisIndex: 0 },
            { data: Template.dataObj.chart.QGCSJList, name: "超市价", type: "bar", yAxisIndex: 0 },
            { data: Template.dataObj.chart.QGPFJTBList, name: "批发同比", type: "line", yAxisIndex: 1 },
            { data: Template.dataObj.chart.QGJSJTBList, name: "集市同比", type: "line", yAxisIndex: 1 },
            { data: Template.dataObj.chart.QGCSJTBList, name: "超市同比", type: "line", yAxisIndex: 1 }
        ]
    };
    chart.setOption(option);
}
function formatterTip (params, unitArr) {
    var chartTime = params[0].name;
    var tipTitle = "";
    if (chartTime.indexOf("年") !== -1 || chartTime.indexOf("月") !== -1 || chartTime.indexOf("日") !== -1) {
        tipTitle = chartTime;
    } else if (chartTime.indexOf("-") !== -1) {
        var timeArr = chartTime.split("-");
        tipTitle = timeArr.length < 2 ? timeArr[0] + "年" : timeArr.length < 3 ? timeArr[0] + "年" + parseInt(timeArr[1]) + "月" : timeArr[0] + "年" + parseInt(timeArr[1]) + "月" + parseInt(timeArr[2]) + "日";
    } else {
        tipTitle = chartTime.length <= 4 ? chartTime.substring(0, 4) + "年" : chartTime.length <= 6 ? chartTime.substring(0, 4) + "年" + parseInt(chartTime.substring(4, 6)) + "月" : chartTime.substring(0, 4) + "年" + parseInt(chartTime.substring(4, 6)) + "月" + parseInt(chartTime.substring(6)) + "日";
    }
    //移除重复的数据
    for (var i = 0; i < params.length; i++) {
        for (var j = params.length - 1; j > i; j--) {
            if (params[j].data === params[i].data) {
                params.splice(j, 1);
                break;
            }
        }
    }
    var unit = "";
    var tip = tipTitle + "<br/>";
    for (var i = 0; i < params.length; i++) {//这里是自己定义样式， params[i].marker 表示是否显示左边的那个小圆圈
        if (params[i].value !== 0 && params[i].value !== undefined) {
            if(unitArr && unitArr.length > 0){
                for(var ui = 0; ui < unitArr.length; ui++) {
                    if(params[i].seriesName === unitArr[ui].type) {
                        unit = unitArr[ui].unit;
                    }
                }
            }
            tip = tip + params[i].marker + params[i].seriesName.split("(")[0] + " : " + parseFloat(params[i].value).toFixed(2) + unit + "<br/>";
        }
    }
    return tip;
}
