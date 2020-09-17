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
var areaCode = '08081000';
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
    // 贸易解读数据--下拉框改变事件
    $('#incomeSelect').change(function () {
        areaCode = $(this).val();
        loadChart(areaCode);
    });
});

function get() {
    $.get(context + "/service/sjjd/getTradeData/" + id, function (res) {
        Template.dataObj.year = res.nf;
        Template.dataObj.month = res.yf;
        Template.dataObj.publishDate = res.fbsj;
        Template.dataObj.text = JSON.parse(res.jdsj).text;
        Template.dataObj.chart = JSON.parse(res.jdsj).chart;
        loadChart(areaCode);
    });
}

function loadChart(areaCode) {
    var exportVolume;
    var importVolume;
    var exportVolumeTB;
    var importVolumeTB;
    var exportVolumeHB;
    var importVolumeHB;
    if (areaCode == '08081000'){
        exportVolume = Template.dataObj.chart.FreshApplesExportVolume;
        importVolume = Template.dataObj.chart.FreshApplesImportVolume;
        exportVolumeTB = Template.dataObj.chart.FreshApplesExportVolumeTB;
        importVolumeTB = Template.dataObj.chart.FreshApplesImportVolumeTB;
        exportVolumeHB = Template.dataObj.chart.FreshApplesExportVolumeHB;
        importVolumeHB = Template.dataObj.chart.FreshApplesImportVolumeHB;
    }else if (areaCode == '20097000'){
        exportVolume = Template.dataObj.chart.AppleJuiceExportVolume;
        importVolume = Template.dataObj.chart.AppleJuiceImportVolume;
        exportVolumeTB = Template.dataObj.chart.AppleJuiceExportVolumeTB;
        importVolumeTB = Template.dataObj.chart.AppleJuiceImportVolumeTB;
        exportVolumeHB = Template.dataObj.chart.AppleJuiceExportVolumeHB;
        importVolumeHB = Template.dataObj.chart.AppleJuiceImportVolumeHB;
    }else if (areaCode == '08133000'){
        exportVolume = Template.dataObj.chart.DrideAppleExportVolume;
        importVolume = Template.dataObj.chart.DrideAppleImportVolume;
        exportVolumeTB = Template.dataObj.chart.DrideAppleExportVolumeTB;
        importVolumeTB = Template.dataObj.chart.DrideAppleImportVolumeTB;
        exportVolumeHB = Template.dataObj.chart.DrideAppleExportVolumeHB;
        importVolumeHB = Template.dataObj.chart.DrideAppleImportVolumeHB;
    }
    var chart = echarts.init(document.getElementById("chart"));
    var option = {
        legend: { top: "bottom" },
        //title: { left: "center", text: "各主产区成本比较" },
        tooltip: {
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type:"出口量", unit:"吨"}, {type:"进口量", unit:"吨"}, {type:"出口量同比", unit:"%"}, {type:"出口量环比", unit:"%"}, {type:"进口量同比", unit:"%"}, {type:"进口量环比", unit:"%"}]);
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
            name: "吨",
            nameTextStyle: { padding:[0, 0, 0, -40] }
        },{
            axisLabel: { formatter: "{value}%"/*color: "#74726D"*/ },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            type: "value"
        }],
        color: ['#51AFEC', '#FE7C5A', '#245399', '#2B80FE','#D92E28','#FF9801'],
        series: [
            { data: exportVolume, name: "出口量", type: "bar",barMaxWidth:'20%', yAxisIndex: 0 },
            { data: importVolume, name: "进口量", type: "bar",barMaxWidth:'20%', yAxisIndex: 0 },
            { data: exportVolumeTB, name: "出口量同比", type: "line", yAxisIndex: 1 },
            { data: exportVolumeHB, name: "出口量环比", type: "line", yAxisIndex: 1 },
            { data: importVolumeTB, name: "进口量同比", type: "line", yAxisIndex: 1 },
            { data: importVolumeHB, name: "进口量环比", type: "line", yAxisIndex: 1 }
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
