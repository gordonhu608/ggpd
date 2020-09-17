//查询国内苹果平均价格
function getAvgPrice(tab, buttonText) {
    $.ajax({
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify({}),
        error: function (XMLHttpRequest, textStatus, errorThrown) {},
        success: function (result) {
            avgXData = [];
            // 超市价
            avgYData3 = [];
            // 集市价
            avgYData2 = [];
            // 批发价
            avgYData1 = [];
            for (var i = 0;i < result.length;i++){
                var item = result[i];
                avgXData.push(item.SJ);
                avgYData1.push(item.PFJ);
                avgYData2.push(item.JSJ);
                avgYData3.push(item.CSJ);
            }
            updateAvgPriceChart(buttonText);
        },
        type: "post",
        url: route(tab, buttonText)
    })
}

//国内苹果平均价格
var avgPriceChart = echarts.init(document.getElementById("avgPriceChart"));
var avgXData = [];
var avgYData3 = [];
var avgYData2 = [];
var avgYData1 = [];
function updateAvgPriceChart(buttonText) {
    var start = 80;
    if (buttonText === '月') {
        start = Math.max(0, 100 - Math.floor(1200 / avgYData1.length));
    } else if (buttonText === '年') {
        start = Math.max(0, 100 - Math.floor(500 / avgYData1.length));
    } else if (buttonText === '旬') {
        start = Math.max(0, 100 - Math.floor(3650 / avgXData.length)) - 0.5;
    }

    var avgPriceChartOption = {
        color: ["#01D8AF", "#005491", "#FF7145"],
        dataZoom: [{
            bottom: "5%",
            end: 100,
            height: 20,
            left: "10%",
            right: "10%",
            show: true,
            start: start,
            textStyle: { fontSize: 11 },
            type: "slider"
        }, { type: "inside" }],
        grid: { bottom: "15%", containLabel: true, left: "6%", right: "5%", top: "10%" },
        legend: {
            data: ["批发价", "集市价", "超市价"],
            icon: "rect",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: { fontSize: 13 },
            x: "center",
            y: "1%"
        },
        tooltip: {
            trigger: "axis",
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type:'批发价', unit:'元/公斤'}, {type:'集市价', unit:'元/公斤'}, {type:'超市价', unit:'元/公斤'}]);
            }
        },
        xAxis: [{
            axisLabel: { color: "#74726D", margin: 15, showMaxLabel:true },
            axisLine: { show: false },
            axisTick: { length: 9, lineStyle: { color: "#B1ADA7" } },
            boundaryGap: false,
            data: avgXData,
            interval: 0,
            type: "category"
        }],
        yAxis: [{
            axisLabel: { color: "#74726D" },
            axisLine: { show: false },
            axisTick: { show: false },
            name: "元/公斤",
            splitLine: { lineStyle: { color: "#EDEBE9" } },
            type: "value"
        }],
        series: [{
            connectNulls: true,
            data: avgYData3,
            lineStyle: { type: 'dotted', width: 1 },
            name: '超市价',
            type: 'line',
            yAxisIndex: 0
        }, {
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { color: "#CAF2E7", offset: 0 }, { color: "#ffe", offset: 1 }
                ])
            },
            data: avgYData3,
            name: "超市价",
            type: "line"
        }, {
            connectNulls: true,
            data: avgYData2,
            lineStyle: { type: 'dotted', width: 1 },
            name: '集市价',
            type: 'line'
        }, {
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { color: "#AACBD9", offset: 0 }, { color: "#ffe", offset: 1 }
                ])
            },
            data: avgYData2,
            name: "集市价",
            type: "line"
        }, {
            connectNulls: true,
            data: avgYData1,
            lineStyle: { type: 'dotted', width: 1 },
            name: '批发价',
            type: 'line'
        }, {
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { color: "#FBD2C2", offset: 0 }, { color: "#ffe", offset: 1 }
                ])
            },
            data: avgYData1,
            name: "批发价",
            type: "line"
        }]
    };
    avgPriceChart.setOption(avgPriceChartOption,true);
}

function formatterTip(params, unitArr) {
    var chartTime = params[0].name;
    var tipTitle = '';
    if (chartTime.indexOf("年") !== -1 || chartTime.indexOf("月") !== -1 || chartTime.indexOf("日") !== -1) {
        tipTitle = chartTime;
    } else if (chartTime.indexOf("-") !== -1) {
        var timeArr = chartTime.split('-');
        tipTitle = timeArr.length < 2 ? timeArr[0] + '年' : timeArr.length < 3 ? timeArr[0] + '年' + parseInt(timeArr[1]) + '月' : timeArr[0] + '年' + parseInt(timeArr[1]) + '月' + parseInt(timeArr[2]) + '日';
    } else {
        tipTitle = chartTime.length <= 4 ? chartTime.substring(0, 4) + '年' : chartTime.length <= 6 ? chartTime.substring(0, 4) + '年' + parseInt(chartTime.substring(4, 6)) + '月' : chartTime.substring(0, 4) + '年' + parseInt(chartTime.substring(4, 6)) + '月' + parseInt(chartTime.substring(6)) + '日';
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
    var unit = '';
    var tip = tipTitle + '<br/>';
    for (var i = 0; i < params.length; i++) {//这里是自己定义样式， params[i].marker 表示是否显示左边的那个小圆圈
        if (params[i].value !== 0 && params[i].value !== undefined) {
            if(unitArr && unitArr.length > 0){
                for(var ui = 0; ui < unitArr.length; ui++) {
                    if(params[i].seriesName === unitArr[ui].type) {
                        unit = unitArr[ui].unit;
                    }
                }
            }
            tip = tip + params[i].marker + params[i].seriesName.split('(')[0] + ' : ' + parseFloat(params[i].value).toFixed(2) + unit + '<br/>';
        }
    }
    return tip;
}

//查询苹果进出口情况
function getImportAndExportMessage() {
    var appleCategory =  $("#appleCategory option:selected").val();
    var url = appleCategory === '20097900' ? context + "/service/priceIndices/getAppleJuiceImportAndExportMessage"
                                           : context + "/service/priceIndices/getImportAndExportMessage";
    $.ajax({
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify({ product: appleCategory }),
        error: function (XMLHttpRequest, textStatus, errorThrown) {},
        success: function (result) {
            importExportLegend = [];
            importExportCategory = [];
            importExportCKE = [];
            importExportCKEHB = [];
            importExportCKETB = [];
            importExportJKE = [];
            importExportJKEHB = [];
            importExportJKETB = [];
            importExportUnit = "";
            maxPrice = 0;
            maxRate = 0;
            minRate = 0;
            if ($("#productWay option:selected").text() === "进出口量") {
                importExportLegend = ["出口数量","出口数量环比","出口数量同比","进口数量","进口数量环比","进口数量同比"];
                importExportUnit = "吨";
            } else {
                importExportLegend = ["出口金额","出口金额环比","出口金额同比","进口金额","进口金额环比","进口金额同比"];
                importExportUnit = "万美元";
            }
            for(var i = 0; i < result.length;i++){
                var item = result[i];
                importExportCategory.push(item.SJ);
                importExportCKE.push(item.DQCKL);
                importExportCKEHB.push(item.CKLHB);
                importExportCKETB.push(item.CKLTB);
                importExportJKE.push(item.DQJKL);
                importExportJKEHB.push(item.JKLHB);
                importExportJKETB.push(item.JKLTB);
                maxPrice = Math.max(maxPrice, item.DQCKL, item.DQJKL);
                maxRate = Math.max(maxRate, item.CKLHB, item.CKLTB, item.JKLHB, item.JKLTB);
                minRate = Math.min(minRate, item.CKLHB, item.CKLTB, item.JKLHB, item.JKLTB);
            }
            maxPrice = parseInt(maxPrice / 1000 + 1) * 1000;
            maxRate = parseInt(maxRate / 100 + 1) * 100;
            minRate = parseInt(minRate / 100 - 1) * 100;
            importExportCategory.reverse();
            importExportCKE.reverse();
            importExportCKEHB.reverse();
            importExportCKETB.reverse();
            importExportJKE.reverse();
            importExportJKEHB.reverse();
            importExportJKETB.reverse();
            updateImportExportChart();
        },
        type: "post",
        url: url
    })
}

//苹果进出口情况
var importExportLegend = [];
var importExportCategory = [];
var importExportCKE = [];
var importExportCKEHB = [];
var importExportCKETB = [];
var importExportJKE = [];
var importExportJKEHB = [];
var importExportJKETB = [];
var importExportUnit = "万美元";
var maxPrice = 0;
var maxRate = 0;
var minRate = 0;
var importExportChart = echarts.init(document.getElementById("importExportChart"));
function updateImportExportChart() {
    var importExportChartOption = {
        color: ["#008AC6", "#005492", "#00B2EA", "#FF7044", "#D13432", "#FFB46C"],
        dataZoom: [{
            bottom: "5%",
            end: 100,
            height: 20,
            left: "10%",
            right: "10%",
            show: true,
            start: Math.max(0, 100 - Math.floor(600 / importExportCategory.length)),
            textStyle: { fontSize: 11 },
            type: "slider"
        }, { type: "inside" }],
        grid: { bottom: "15%", containLabel: true, left: "5%", right: "5%", top: "16%" },
        legend: {
            data: [
                { icon: "rect", name: importExportLegend[0] }, importExportLegend[1], importExportLegend[2],
                { icon: "rect", name: importExportLegend[3] }, importExportLegend[4], importExportLegend[5]
            ],
            itemHeight: 12,
            itemWidth: 12,
            top: 0,
            width: 300
        },
        series: [
            { barCategoryGap: "40%", data: importExportCKE, name: importExportLegend[0], type: "bar" },
            { data: importExportCKEHB, name: importExportLegend[1], showSymbol: false, type: "line", yAxisIndex: 1 },
            { data: importExportCKETB, name: importExportLegend[2], showSymbol: false, type: "line", yAxisIndex: 1 },
            { data: importExportJKE, name: importExportLegend[3], type: "bar" },
            { data: importExportJKEHB, name: importExportLegend[4], showSymbol: false, type: "line", yAxisIndex: 1 },
            { data: importExportJKETB, name: importExportLegend[5], showSymbol: false, type: "line", yAxisIndex: 1 }
        ],
        tooltip: {
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type:'出口金额', unit:''}, {type:'出口金额环比', unit:''}, {type:'出口金额同比', unit:''}, {type:'进口金额', unit:''}, {type:'进口金额环比', unit:''}, {type:'进口金额同比', unit:''}]);
            },
            trigger: "axis"
        },
        xAxis: {
            axisLabel: { color: "#74726D" },
            axisLine: { show: false },
            axisTick: { show: false },
            data: importExportCategory
        },
        yAxis: [{
            axisLabel: { color: "#74726D", formatter: function(value) { return value; } },
            axisLine: { show: false },
            axisTick: { show: false },
            name: importExportUnit,
            nameTextStyle: { align: "right" },
            splitLine: { lineStyle: { color: "#EDEBE9" } }
        }, {
            axisLabel: { color: "#74726D", formatter: "{value}%" },
            axisLine: { show: false },
            axisTick: { show: false },
            name: "百分比",
            nameTextStyle: { align: "left" },
            splitLine: { show: false }
        }]
    };
    importExportChart.setOption(importExportChartOption,true);

}

//查询农产品200指数
function getProductIndices(tab,buttonText) {
    $.get(route(tab, buttonText), function(result) {
        productIndicesCategory = [];
        productIndicesData1 = [];
        productIndicesData2 = [];
        productIndicesData3 = [];
        for(var i = 0;i < result.length;i++){
            var item = result[i];
            productIndicesCategory.push(item.SJ);
            if (twoHundredControl === "月同比") {
                productIndicesData1.push(item.APPLE_TB);
                productIndicesData2.push(item.FRUIT_TB);
                productIndicesData3.push(item.TOTAL_TB);
            } else if (twoHundredControl === "周同比") {
                productIndicesData1.push(item.APPLE_TB);
                productIndicesData2.push(item.FRUIT_TB);
                productIndicesData3.push(item.TOTAL_TB);
            } else if (twoHundredControl === "月环比") {
                productIndicesData1.push(item.APPLE_HB);
                productIndicesData2.push(item.FRUIT_HB);
                productIndicesData3.push(item.TOTAL_HB);
            } else if (twoHundredControl === "周环比") {
                productIndicesData1.push(item.APPLE_HB);
                productIndicesData2.push(item.FRUIT_HB);
                productIndicesData3.push(item.TOTAL_HB);
            } else {
                productIndicesData1.push(item.APPLE);
                productIndicesData2.push(item.FRUIT);
                productIndicesData3.push(item.TOTAL);
            }
        }
        updateProductIndices();
    })
}

//农产品200指数
var productIndicesCategory = [];
var productIndicesData1 = [];
var productIndicesData2 = [];
var productIndicesData3 = [];
var productIndicesChart = echarts.init(document.getElementById("productIndicesChart"));
function updateProductIndices() {
    var productIndicesChartOption = {
        color: ["#008BC9", "#00B3EC", "#FF7046"],
        dataZoom: [{ end: 100, start: 80, type: "inside" }, {
            end:  100,
            handleIcon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
                color: "#fff", shadowBlur: 3, shadowColor: "rgba(0, 0, 0, 0.6)", shadowOffsetX: 2, shadowOffsetY: 2
            },
            start: 0
        }],
        grid: { containLabel: true, left: "3%", right: "4%", top: "5%", y2: 50 },
        legend: { data: ["富士苹果价格指数", "水果价格指数", "200总指数"] },
        tooltip: {
            axisPointer: { lineStyle: { color: "rgba(138, 214, 245, 0.8)" } },
            backgroundColor: "transparent",
            formatter: function (param) {
                var date = param[0].name;
                if (date.indexOf("-") !== -1) {
                    date = date.substr(0, 4) + "年" + parseInt(date.substr(5, 2)) + "月"
                } else if (date.indexOf("周") !== -1) {

                } else {
                    date = date.substr(0, 4) + "年" + parseInt(date.substr(4, 2)) + "月" + parseInt(date.substr(6, 2)) + "日";
                }
                return '<div style="background-color:#fff;border: 1px solid #E7E5E2;box-shadow: 0 0 8px #E7E5E2;color: #333;padding: 15px 25px 15px 20px;border-radius:5px;">'
                    + "<div>" + date + "</div>"
                    + "<div>" + param[0].seriesName + ': <span style="color: #ff0000;">' + param[0].value + "</span></div>"
                    + "<div>" + param[1].seriesName + ': <span style="color: #ff0000;">' + param[1].value + "</span></div>"
                    + "<div>" + param[2].seriesName + ': <span style="color: #ff0000;">' + param[2].value + "</span></div>"
                    + "</div>";
            },
            trigger: "axis"
        },
        xAxis: {
            axisLabel: { showMaxLabel: true, margin: 15, textStyle: { color: "#666460" } },
            axisLine:{ show: false },
            axisTick:{ lineStyle: { color: "#EDEBE9" } },
            boundaryGap: false,
            data: productIndicesCategory,
            splitLine: { show: false },
            type: "category"
        },
        yAxis: [{
            axisLabel: { textStyle: { color: "#666460", fontFamily: "微软雅黑", fontSize: 12, fontStyle: "normal" } },
            axisLine:{ show: false },
            axisTick:{ show: false },
            splitLine: { lineStyle: { color: "#EDEBE9" }, show: true },
            type: "value"
        }],
        series: [
            { data: productIndicesData1, name: "富士苹果价格指数", showSymbol: false, type: "line" },
            { data: productIndicesData2, name: "水果价格指数", showSymbol: false, type: "line" },
            { data: productIndicesData3, name: "200总指数", showSymbol: false, type: "line" }
        ]
    };
    productIndicesChart.setOption(productIndicesChartOption, true);
}

//查询运城苹果价格指数信息
function getYunChengIndex(tab, buttonText) {
    $.get(route(tab, buttonText), function(result) {
        appleIndicesCategory = [];
        appleIndicesData1 = [];
        appleIndicesData2 = [];
        appleIndicesData3 = [];
        appleIndicesData4 = [];
        for(var i = 0;i < result.length;i++){
            var item = result[i];
            appleIndicesCategory.push(item.SJ);
            if(yunChengControl === "月同比") {
                appleIndicesData1.push(item.P75_TB);
                appleIndicesData2.push(item.P80_TB);
                appleIndicesData3.push(item.M80_TB);
                appleIndicesData4.push(item.PM80_TB);
            } else if(yunChengControl === "周同比") {
                appleIndicesData1.push(item.P75_TB);
                appleIndicesData2.push(item.P80_TB);
                appleIndicesData3.push(item.M80_TB);
                appleIndicesData4.push(item.PM80_TB);
            } else if(yunChengControl === "月环比") {
                appleIndicesData1.push(item.P75_HB);
                appleIndicesData2.push(item.P80_HB);
                appleIndicesData3.push(item.M80_HB);
                appleIndicesData4.push(item.PM80_HB);
            } else if(yunChengControl === "周环比") {
                appleIndicesData1.push(item.P75_HB);
                appleIndicesData2.push(item.P80_HB);
                appleIndicesData3.push(item.M80_HB);
                appleIndicesData4.push(item.PM80_HB);
            } else {
                appleIndicesData1.push(item.P75);
                appleIndicesData2.push(item.P80);
                appleIndicesData3.push(item.M80);
                appleIndicesData4.push(item.PM80);
            }
        }
        updateYunChengIndexChart();
    })
}
//运城苹果价格指数
var appleIndicesCategory = [];
var appleIndicesData1 = [];
var appleIndicesData2 = [];
var appleIndicesData3 = [];
var appleIndicesData4 = [];
var appleIndicesChart = echarts.init(document.getElementById("appleIndicesChart"));
function updateYunChengIndexChart() {
    var appleIndicesChartOption = {
        dataZoom: [{ end: 100, start: 80, type: "inside" }, {
            end:  100,
            handleIcon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
                color: "#fff", shadowBlur: 3, shadowColor: "rgba(0, 0, 0, 0.6)", shadowOffsetX: 2, shadowOffsetY: 2
            },
            start: 0
        }],
        grid: { containLabel: true, left: "3%", right: "4%", top: "5%", y2: 50 },
        legend: { data: ["纸袋75指数", "纸袋80及85指数", "膜袋80及85指数", "纸加膜80及85指数"] },
        tooltip: {
            axisPointer: { lineStyle: { color: "rgba(138, 214, 245, 0.8)" } },
            backgroundColor: "transparent",
            formatter: function (param) {
                var date = param[0].name;
                if (date.indexOf("-") !== -1) {
                    date = date.substr(0, 4) + "年" + parseInt(date.substr(5, 2)) + "月"
                } else if (date.indexOf("周") !== -1) {

                } else {
                    date = date.substr(0, 4) + "年" + parseInt(date.substr(4, 2)) + "月" + parseInt(date.substr(6, 2)) + "日";
                }
                return '<div style="background-color:#fff;border: 1px solid #E7E5E2;box-shadow: 0 0 8px #E7E5E2;color: #333;padding: 15px 25px 15px 20px;border-radius:5px;">'
                    + "<div>" + date + "</div>"
                    + "<div>" + param[0].seriesName + ': <span style="color: #ff0000;">' + param[0].value + "</span></div>"
                    + "<div>" + param[1].seriesName + ': <span style="color: #ff0000;">' + param[1].value + "</span></div>"
                    + "<div>" + param[2].seriesName + ': <span style="color: #ff0000;">' + param[2].value + "</span></div>"
                    + "</div>";
            },
            trigger: "axis"
        },
        xAxis: {
            axisLabel: { showMaxLabel: true, margin: 15, textStyle: { color: "#666460" } },
            axisLine:{ show: false },
            axisTick:{ lineStyle: { color: "#EDEBE9" } },
            boundaryGap: false,
            data: appleIndicesCategory,
            splitLine: { show: false },
            type: "category"
        },
        yAxis: [{
            axisLabel: { textStyle: { color: "#666460", fontFamily: "微软雅黑", fontSize: 12, fontStyle: "normal" } },
            axisLine:{ show: false },
            axisTick:{ show: false },
            min: yunChengControl === "日" ? 600 : undefined,
            splitLine: { lineStyle: { color: "#EDEBE9" }, show: true },
            type: "value"
        }],
        series: [{
            data: appleIndicesData1,
            name: "纸袋75指数",
            showSymbol: false,
            type: "line"
        }, {
            data: appleIndicesData2,
            name: "纸袋80及85指数",
            showSymbol: false,
            type: "line"
        }, {
            data: appleIndicesData3,
            name: "膜袋80及85指数",
            showSymbol: false,
            type: "line"
        }, {
            data: appleIndicesData4,
            name: "纸加膜80及85指数",
            showSymbol: false,
            type: "line"
        }]
    };
    appleIndicesChart.setOption(appleIndicesChartOption, true);
}
