var Template = new Vue({
    data: {
        columns: {
            province: "省份",
            cost: "亩成本（元）",
            laborCost: "亩人工成本",
            laborProportion: "人工占比",
            expenses: "每亩物资与服务费用（元）",
            expensesProportion: "物资与服务费用占比"
        },
        dataObj: {
            year: "2018",
            publishDate: "2019.5.15",
            chart: {},
            text: {
                year: "2018", // 年份
                plantArea: "2907.9", // 种植面积
                yield: "3923.34", // 产量
                yieldPerUnit: "1349.2", // 单产
                lastYear: "2017", // 去年年份
                plantAreaTb: "5.21", // 种植面积同比
                yieldTb: "-0.43", // 产量同比
                yieldPerUnitTb: "-4.8", // 单产同比
                costPerMu: "4929.41", // 每亩均成本
                costPerKg: "3.65", // 每公斤平均
                laborCost: "3065.22", // 人工成本
                laborCostProportion: "62.49", // 人工成本占比
                expenses: "1513.38", // 费用
                expensesProportion: "30.85", // 费用占比
                costTb: "0.31" // 总成本同比
            },
            table: [{
                province: "全国",
                cost: 4904.82,
                laborCost: 3065.22,
                laborProportion: 62.49,
                expenses: 1513.38,
                expensesProportion: 30.85
            }, {
                province: "山东",
                cost: 7575.61,
                laborCost: 4690.69,
                laborProportion: 61.92,
                expenses: 2512.9,
                expensesProportion: 33.17
            }, {
                province: "甘肃",
                cost: 6935.07,
                laborCost: 5074.67,
                laborProportion: 73.17,
                expenses: 1035.41,
                expensesProportion: 14.93
            }, {
                province: "北京",
                cost: 6588.54,
                laborCost: 3657.13,
                laborProportion: 55.51,
                expenses: 917.06,
                expensesProportion: 13.92
            }, {
                province: "河南",
                cost: 4917.37,
                laborCost: 3431.96,
                laborProportion: 69.79,
                expenses: 1231.32,
                expensesProportion: 25.04
            }, {
                province: "辽宁",
                cost: 4314.32,
                laborCost: 2644.36,
                laborProportion: 61.29,
                expenses: 2624.99,
                expensesProportion: 60.84
            }, {
                province: "陕西",
                cost: 4199.64,
                laborCost: 2957.83,
                laborProportion: 70.43,
                expenses: 1270.93,
                expensesProportion: 30.26
            }, {
                province: "河北",
                cost: 3856.77,
                laborCost: 2533.73,
                laborProportion: 65.70,
                expenses: 1131.04,
                expensesProportion: 29.33
            }, {
                province: "山西",
                cost: 3575.65,
                laborCost: 2395.57,
                laborProportion: 67.00,
                expenses: 1704.74,
                expensesProportion: 47.68
            }, {
                province: "宁夏",
                cost: 2426.26,
                laborCost: 1503.61,
                laborProportion: 61.97,
                expenses: 675.35,
                expensesProportion: 27.84
            }]
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
    $.get(context + "/service/sjjd/getData/" + id, function (res) {
        Template.dataObj.chart = JSON.parse(res);
        Template.dataObj.chart = {
            cost: [], expenses: [], expensesProportion: [], laborCost: [], laborProportion: [], province: []
        };
        Template.dataObj.table.forEach(function (value) {
            for (var key in value) { Template.dataObj.chart[key].push(value[key]) }
        });
        loadChart();
    });
}

function loadChart() {
    var chart = echarts.init(document.getElementById("chart"));
    var option = {
        legend: { top: "bottom" },
        series: [
            { data: Template.dataObj.chart.cost, name: "亩成本（元）", type: "bar", yAxisIndex: 1 },
            { data: Template.dataObj.chart.laborCost, name: "亩人工成本（元）", type: "bar", yAxisIndex: 1 },
            { data: Template.dataObj.chart.expenses, name: "每亩物资与服务费用（元）", type: "bar", yAxisIndex: 1 },
            { data: Template.dataObj.chart.laborProportion, name: "人工占比", type: "line", yAxisIndex: 0 },
            { data: Template.dataObj.chart.expensesProportion, name: "物资与服务费用占比", type: "line", yAxisIndex: 0}
        ],
        title: { left: "center", text: "各主产区成本比较" },
        tooltip: { trigger: "axis" },
        xAxis: [{
            axisLine: { show: false },
            axisTick: { show: false },
            data: Template.dataObj.chart.province,
            interval: 0,
            type: "category"
        }],
        yAxis: [{
            axisLabel: { formatter: "{value}%" },
            axisLine: { show: false },
            axisTick: { show: false },
            max: 100,
            splitLine: { lineStyle: { color: "#EDEBE9" } },
            type: "value"
        }, {
            axisLabel: { color: "#74726D" },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            type: "value"
        }]
    };
    chart.setOption(option);
}
