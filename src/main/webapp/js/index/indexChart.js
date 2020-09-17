/* 全国种植面积及产量 */
var plantChart = echarts.init(document.getElementById("plantChart"));

function applePlantAreaAndYield() {
    var plantChartOption = {
        color: ["#01D8AF", "#f9b878"],
        grid: {bottom: "10%", containLabel: true, top: "25%"},
        legend: {data: ["种植面积", "产量"], icon: "rect", itemHeight: 12, itemWidth: 12, top: "10%"},
        series: [{
            barWidth: 17,
            data: [],
            name: "种植面积",
            type: "bar"
        }, {
            barWidth: 17,
            data: [],
            name: "产量",
            type: "bar",
            yAxisIndex: 1
        }],
        tooltip: {
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type: "种植面积", unit: "万亩"}, {type: "产量", unit: "万吨"}]);
            },
            trigger: "axis"
        },
        xAxis: {
            axisLabel: {color: "#74726D"},
            axisLine: {show: false},
            axisTick: {length: 9, lineStyle: {color: "#B1ADA7"}},
            data: []
        },
        yAxis: [{
            axisLabel: {color: "#74726D"},
            axisLine: {show: false},
            axisTick: {show: false},
            name: "万亩",
            nameTextStyle: {padding: [0, 0, 0, -40]},
            splitLine: {lineStyle: {color: "#EDEBE9"}}
        }, {
            axisLabel: {color: "#74726D"},
            axisLine: {show: false},
            axisTick: {show: false},
            name: "万吨",
            nameTextStyle: {padding: [0, 0, 0, 40]},
            splitLine: {lineStyle: {color: "#EDEBE9"}}
        }]
    };

    $.ajax({
        contentType: "application/json;charset=UTF-8",
        success: function (result) {
            var max = 0;
            for (var i = 0; i < result.length; ++i) {
                var data = result[i];
                plantChartOption.xAxis.data.push(data.SJ);
                plantChartOption.series[1].data.push(data.QGCL);
                plantChartOption.series[0].data.push(data.QGZZMJ);
                max = Math.max(data.QGCL, data.QGZZMJ, max);
            }
            plantChartOption.yAxis[0].max = plantChartOption.yAxis[1].max = parseInt(max / 1000 + 1) * 1000;
            plantChart.setOption(plantChartOption, true);
        },
        type: "post",
        url: context + "/service/homePage/getApplePlantAreaAndYield"
    });
}

/* 我国进出口贸易 */
var trendChart = echarts.init(document.getElementById("trendChart"));

function chinaImportAndExportTradeFunction() {
    var trendChartOption = {
        color: ["#01D8AF", "#f9b878", "#00C0C8", "#FF7046"],
        grid: {bottom: "10%", containLabel: true, top: "25%"},
        legend: {
            data: [
                {name: "出口数量", icon: "rect", itemWidth: 12, itemHeight: 12},
                {name: "进口数量", icon: "rect", itemWidth: 12, itemHeight: 12}, "出口金额", "进口金额"
            ],
            top: "10%"
        },
        series: [
            {barCategoryGap: "30%", data: [], name: "出口数量", type: "bar"},
            {data: [], name: "进口数量", type: "bar"},
            {data: [], name: "出口金额", symbolSize: 6, type: "line", yAxisIndex: 1},
            {data: [], name: "进口金额", symbolSize: 6, type: "line", yAxisIndex: 1}
        ],
        tooltip: {
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type: "出口数量", unit: "万吨"}, {type: "进口数量", unit: "万吨"}, {
                    type: "出口金额",
                    unit: "万元"
                }, {type: "进口金额", unit: "万元"}]);
            },
            trigger: "axis"
        },
        xAxis: {
            axisLabel: {color: "#74726D"}, axisLine: {show: false}, axisTick: {show: false}, data: [], interval: 0
        },
        yAxis: [{
            axisLabel: {color: "#74726D"},
            axisLine: {show: false},
            axisTick: {show: false},
            name: "万吨",
            nameTextStyle: {padding: [0, 0, 0, -40]},
            splitLine: {lineStyle: {color: "#EDEBE9"}}
        }, {
            axisLabel: {color: "#74726D"},
            axisLine: {show: false},
            axisTick: {show: false},
            name: "  万元",
            nameTextStyle: {align: "left"},
            splitLine: {show: false}
        }]
    };

    $.ajax({
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({product: "08081000"}),
        success: function (result) {
            var sj = [];
            var ckl = [];
            var jkl = [];
            var cke = [];
            var jke = [];
            for (var i = 0; i < 6; i++) {
                if (i >= result.length) {
                    break;
                }
                var item = result[i];
                sj.push(item.SJ);
                ckl.push((item.DQCKL / 10000).toFixed(2));
                jkl.push((item.DQJKL / 10000).toFixed(2));
                cke.push((item.CKEY / 10000).toFixed(2));
                jke.push((item.JKEY / 10000).toFixed(2));
            }
            trendChartOption.xAxis.data = sj.reverse();
            trendChartOption.series[0].data = ckl.reverse();
            trendChartOption.series[1].data = jkl.reverse();
            trendChartOption.series[2].data = cke.reverse();
            trendChartOption.series[3].data = jke.reverse();
            trendChart.setOption(trendChartOption, true);
        },
        type: "post",
        url: context + "/service/priceIndices/getImportAndExportMessage"
    });
}

/* 电商交易信息 */
/*var dealChart = echarts.init(document.getElementById("dealChart"));
var dealChartOption = {
    grid: {
        top: "25%",
        bottom: "10%",
        containLabel: true
    },
    legend: {
        top: "10%",
        data: ["交易总量", "交易金额"],
        itemWidth: 12,
        itemHeight: 12,
        icon: "rect"
    },
    tooltip: {
        trigger: "axis",
        formatter: function (params) {//提示框自定义
            return formatterTip(params, [{type:"交易总量", unit:"吨"}, {type:"交易金额", unit:"万元"}]);
        }
        // axisPointer: {
        //     type: "cross",
        //     label: {
        //         backgroundColor: "#283b56"
        //     }
        // }
    },
    xAxis: {
        type: "category",
        data: ["2019-12", "2020-1", "2020-2", "2020-3", "2020-4", "2020-5", "2020-6"],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            length: 9,
            lineStyle: {
                color: "#B1ADA7"
            }
        },
        axisLabel: {
            color: "#74726D"
        }
    },
    yAxis: [{
        type: "value",
        name: "单位: 吨",
        nameTextStyle: {
            // align: "left"
            padding:[0,0,0,-40],
        },
        axisLine: {
            show: false
        },
        splitLine: {
            // show: false
            lineStyle: {
                color: "#EDEBE9"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#74726D"
        },
    },
    {
        type: "value",
        name: "单位: 万元",
        nameTextStyle: {
            // align: "left"
            padding:[0,0,0,25],
        },
        axisLine: {
            show: false
        },
        splitLine: {
            // show: false
            lineStyle: {
                color: "#EDEBE9"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#74726D"
        },
    }
    ],
    color: ["#00C7D4", "#FF724B"],
    series: [{
        name: "交易总量",
        data: [135, 568, 365, 551, 400, 500, 326],
        type: "line",
        smooth: true,
        symbolSize: 0,
    }, {
        name: "交易金额",
        data: [260, 521, 401, 531, 316, 398, 327],
        type: "line",
        smooth: true,
        symbolSize: 0,
        yAxisIndex: 1,
    }
    ]
};
dealChart.setOption(dealChartOption);*/

/* 成本收益 */
var incomeChart = echarts.init(document.getElementById("incomeChart"));

function costBenefitFunction(param) {
    /*var incomeData = {
        "china": [{
            name: "每亩总成本",
            data: [1350, 5680, 3650, 5510, 4000, 5000, 3060],
            type: "line",
            symbolSize: 0
        }, {
            name: "每亩净利润",
            data: [2600, 5210, 4010, 5310, 3160, 3980, 3270],
            type: "line",
            symbolSize: 0
        }],
        "shandong": [{
            name: "每亩总成本",
            data: [1050, 5080, 3050, 5010, 4200, 5200, 3260],
            type: "line",
            symbolSize: 0
        }, {
            name: "每亩净利润",
            data: [2000, 5010, 4210, 5010, 3060, 3280, 3070],
            type: "line",
            symbolSize: 0
        }],
        "beijing": [{
            name: "每亩总成本",
            data: [1000, 5000, 3000, 5000, 4220, 5220, 3220],
            type: "line",
            symbolSize: 0
        }, {
            name: "每亩净利润",
            data: [2000, 5000, 4220, 5000, 3000, 3220, 3000],
            type: "line",
            symbolSize: 0
        }]
    };*/
    var incomeChartOption = {
        grid: {
            top: "25%",
            bottom: "10%",
            containLabel: true
        },
        tooltip: {
            trigger: "axis",
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type: "每亩总成本", unit: "元"}, {type: "每亩净利润", unit: "元"}]);
            }
            // axisPointer: {
            //     type: "cross",
            //     label: {
            //         backgroundColor: "#283b56"
            //     }
            // }
        },
        legend: {
            top: "10%",
            data: ["每亩总成本", "每亩净利润"]
        },
        xAxis: {
            type: "category",
            data: [/*"2013", "2014", "2015", "2016", "2017", "2018", "2019"*/],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false,
                length: 9,
                lineStyle: {
                    color: "#B1ADA7"
                }
            },
            axisLabel: {
                color: "#74726D"
            }
        },
        yAxis: [{
            type: "value",
            name: "元",
            nameTextStyle: {
                // align: "left"
                padding: [0, 0, 0, -45],
            },
            axisLine: {
                show: false
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: "#EDEBE9"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#74726D"
            },
        }
        ],
        color: ["#00C0C8", "#FF724B"],
        series: [{
            name: "每亩总成本",
            data: [/*1350, 5680, 3650, 5510, 4000, 5000, 3060*/],
            type: "bar",
            symbolSize: 0
        }, {
            name: "每亩净利润",
            data: [/*2600, 5210, 4010, 5310, 3160, 3980, 3270*/],
            type: "bar",
            symbolSize: 0
        }]
    };
    incomeChart.setOption(incomeChartOption, true);
    var url = context + "/service/homePage/getCostBenefit";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        data: JSON.stringify(param),
        success: function (result) {
            for (var i = result.length - 7; i < result.length; i++) {
                var value = result[i];
                incomeChartOption.xAxis.data.push(value.SJ);
                incomeChartOption.series[0].data.push(value.MMZCBSZ);
                incomeChartOption.series[1].data.push(value.MMJLRSZ);
            }
            incomeChart.setOption(incomeChartOption, true);
        }
    });
}

/* 北京批发及零售价 */
var bjChart = echarts.init(document.getElementById("bjChart"));
$.get(context + "/service/homePage/queryBjPrice", function (res) {
    var xData = [];
    var yData3 = [];
    var yData2 = [];
    var yData1 = [];
    res.forEach(function (value) {
        xData.push(value.SJ);
        yData1.push(value.PFJ);
        yData2.push(value.JSJ);
        yData3.push(value.CSJ);
    });
    var bjChartOption = {
        color: ["#FF7344", "#005391", "#01D8AF"],
        tooltip: {
            trigger: "axis",
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type: "批发价", unit: "元/公斤"}, {type: "集市价", unit: "元/公斤"}, {
                    type: "超市价",
                    unit: "元/公斤"
                }]);
            }
        },
        legend: {
            x: "center",
            y: "40px",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                fontSize: 13
            },
            icon: "rect",
            data: ["批发价", "集市价", "超市价"]
        },
        dataZoom: [{
            type: "slider",
            show: true,
            height: 20,
            left: "10%",
            right: "10%",
            bottom: "2%",
            start: Math.max(0, 100 - Math.ceil(3700 / res.length)),
            end: 100,
            textStyle: {
                fontSize: 11
            }
        }, {
            type: "inside"
        }

        ],
        grid: {
            right: "5%",
            bottom: "10%",
            left: "2%",
            top: "80px",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: xData,
            interval: 0,
            axisLine: {
                show: false
            },
            axisTick: {
                length: 9,
                lineStyle: {
                    color: "#B1ADA7"
                }
            },
            axisLabel: {
                color: "#74726D",
                showMaxLabel: true,
                showMinLabel: true
            }
        }],
        yAxis: [{
            name: "元/公斤",
            type: "value",
            axisLine: {
                show: false
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: "#EDEBE9"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#74726D"
            }
        }],
        series: [{
            name: "批发价",
            type: "line",
            yAxisIndex: 0,
            connectNulls: true,
            lineStyle: {
                type: "dotted",
                width: 1
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#FBD2C2"
                }, {
                    offset: 1,
                    color: "#ffe"
                }])
            },
            data: yData1
        }, {
            name: "批发价",
            type: "line",
            yAxisIndex: 0,
            data: yData1
        },
            {
                name: "集市价",
                type: "line",
                yAxisIndex: 0,
                connectNulls: true,
                lineStyle: {
                    type: "dotted",
                    width: 1
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#AACBD9"
                    }, {
                        offset: 1,
                        color: "#ffe"
                    }])
                },
                data: yData2
            }, {
                name: "集市价",
                type: "line",
                yAxisIndex: 0,
                data: yData2
            },
            {
                name: "超市价",
                type: "line",
                yAxisIndex: 0,
                connectNulls: true,
                lineStyle: {
                    type: "dotted",
                    width: 1
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#CAF2E7"
                    }, {
                        offset: 1,
                        color: "#ffe"
                    }])
                },
                data: yData3
            },
            {
                name: "超市价",
                type: "line",
                yAxisIndex: 0,
                data: yData3
            }

        ]
    };
    bjChart.setOption(bjChartOption);
});

/* 上海批发及零售价 */
var shhChart = echarts.init(document.getElementById("shhChart"));
$.get(context + "/service/homePage/queryShPrice", function (res) {
    var xData = [];
    var yData3 = [];
    var yData2 = [];
    var yData1 = [];
    res.forEach(function (value) {
        xData.push(value.SJ);
        yData1.push(value.PFJ);
        yData2.push(value.JSJ);
        yData3.push(value.CSJ);
    });
    var shChartOption = {
        color: ["#FF7344", "#005391", "#01D8AF"],
        tooltip: {
            trigger: "axis",
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type: "批发价", unit: "元/公斤"}, {type: "集市价", unit: "元/公斤"}, {
                    type: "超市价",
                    unit: "元/公斤"
                }]);
            }
        },
        legend: {
            x: "center",
            y: "40px",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                fontSize: 13
            },
            icon: "rect",
            data: ["批发价", "集市价", "超市价"]
        },
        dataZoom: [{
            type: "slider",
            show: true,
            height: 20,
            left: "10%",
            right: "10%",
            bottom: "2%",
            start: Math.max(0, 100 - Math.ceil(3700 / res.length)),
            end: 100,
            textStyle: {
                fontSize: 11
            }
        }, {
            type: "inside"
        }

        ],
        grid: {
            right: "5%",
            bottom: "10%",
            left: "2%",
            top: "80px",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: xData,
            interval: 0,
            axisLine: {
                show: false
            },
            axisTick: {
                length: 9,
                lineStyle: {
                    color: "#B1ADA7"
                }
            },
            axisLabel: {
                color: "#74726D",
                showMaxLabel: true,
                showMinLabel: true
            }
        }],
        yAxis: [{
            name: "元/公斤",
            type: "value",
            axisLine: {
                show: false
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: "#EDEBE9"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#74726D"
            }
        }],
        series: [{
            name: "批发价",
            type: "line",
            yAxisIndex: 0,
            connectNulls: true,
            lineStyle: {
                type: "dotted",
                width: 1
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#FBD2C2"
                }, {
                    offset: 1,
                    color: "#ffe"
                }])
            },
            data: yData1
        }, {
            name: "批发价",
            type: "line",
            yAxisIndex: 0,
            data: yData1
        },
            {
                name: "集市价",
                type: "line",
                yAxisIndex: 0,
                connectNulls: true,
                lineStyle: {
                    type: "dotted",
                    width: 1
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#AACBD9"
                    }, {
                        offset: 1,
                        color: "#ffe"
                    }])
                },
                data: yData2
            },
            {
                name: "集市价",
                type: "line",
                yAxisIndex: 0,
                data: yData2
            },
            {
                name: "超市价",
                type: "line",
                yAxisIndex: 0,
                connectNulls: true,
                lineStyle: {
                    type: "dotted",
                    width: 1
                },
                itemStyle: {
                    normal: {
                        // color: "#0EF100",
                    }
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#CAF2E7"
                    }, {
                        offset: 1,
                        color: "#ffe"
                    }])
                },
                data: yData3
            },
            {
                name: "超市价",
                type: "line",
                yAxisIndex: 0,
                data: yData3
            }

        ]
    };
    shhChart.setOption(shChartOption);
});

function formatterTip(params, unitArr) {
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
            if (unitArr && unitArr.length > 0) {
                for (var ui = 0; ui < unitArr.length; ui++) {
                    if (params[i].seriesName === unitArr[ui].type) {
                        unit = unitArr[ui].unit;
                    }
                }
            }
            tip = tip + params[i].marker + params[i].seriesName.split("(")[0] + " : " + parseFloat(params[i].value).toFixed(2) + unit + "<br/>";
        }
    }
    return tip;
}

/* 广州批发及零售价 */
var gzhChart = echarts.init(document.getElementById("gzhChart"));
$.get(context + "/service/homePage/queryGzPrice", function (res) {
    var xData = [];
    var yData3 = [];
    var yData2 = [];
    var yData1 = [];
    res.forEach(function (value) {
        xData.push(value.SJ);
        yData1.push(value.PFJ);
        yData2.push(value.JSJ);
        yData3.push(value.CSJ);
    });
    var gzhChartOption = {
        color: ["#FF7344", "#005391", "#01D8AF"],
        tooltip: {
            trigger: "axis",
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type: "批发价", unit: "元/公斤"}, {type: "集市价", unit: "元/公斤"}, {
                    type: "超市价",
                    unit: "元/公斤"
                }]);
            }
        },
        legend: {
            x: "center",
            y: "40px",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                fontSize: 13
            },
            icon: "rect",
            data: ["批发价", "集市价", "超市价"]
        },
        dataZoom: [{
            type: "slider",
            show: true,
            height: 20,
            left: "10%",
            right: "10%",
            bottom: "2%",
            start: Math.max(0, 100 - Math.ceil(3700 / res.length)),
            end: 100,
            textStyle: {
                fontSize: 11
            }
        }, {
            type: "inside"
        }

        ],
        grid: {
            right: "5%",
            bottom: "10%",
            left: "2%",
            top: "80px",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: xData,
            interval: 0,
            axisLine: {
                show: false
            },
            axisTick: {
                length: 9,
                lineStyle: {
                    color: "#B1ADA7"
                }
            },
            axisLabel: {
                color: "#74726D",
                showMaxLabel: true,
                showMinLabel: true
            }
        }],
        yAxis: [{
            name: "元/公斤",
            type: "value",
            axisLine: {
                show: false
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: "#EDEBE9"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#74726D"
            }
        }],
        series: [{
            name: "批发价",
            type: "line",
            yAxisIndex: 0,
            connectNulls: true,
            lineStyle: {
                type: "dotted",
                width: 1
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#FBD2C2"
                }, {
                    offset: 1,
                    color: "#ffe"
                }])
            },
            data: yData1
        },
            {
                name: "批发价",
                type: "line",
                yAxisIndex: 0,
                data: yData1
            },
            {
                name: "集市价",
                type: "line",
                yAxisIndex: 0,
                connectNulls: true,
                lineStyle: {
                    type: "dotted",
                    width: 1
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#AACBD9"
                    }, {
                        offset: 1,
                        color: "#ffe"
                    }])
                },
                data: yData2
            },
            {
                name: "集市价",
                type: "line",
                yAxisIndex: 0,
                data: yData2
            },
            {
                name: "超市价",
                type: "line",
                yAxisIndex: 0,
                connectNulls: true,
                lineStyle: {
                    type: "dotted",
                    width: 1
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#CAF2E7"
                    }, {
                        offset: 1,
                        color: "#ffe"
                    }])
                },
                data: yData3
            },
            {
                name: "超市价",
                type: "line",
                yAxisIndex: 0,
                data: yData3
            }

        ]
    };
    gzhChart.setOption(gzhChartOption);
});

/* 主产区田头价 */
var zcqChart = echarts.init(document.getElementById("zcqChart"));
$.get(context + "/service/homePage/queryOriginalPrice", function (res) {
    var xData = [];
    var yData3 = [];
    var yData2 = [];
    var yData1 = [];
    res.forEach(function (value) {
        xData.push(value.SJ);
        yData1.push(value.QX);
        yData2.push(value.HYX);
        yData3.push(value.LCX);
    });
    var zcqChartOption = {
        color: ["#FF7344", "#005391", "#01D8AF"],
        tooltip: {
            trigger: "axis",
            formatter: function (params) {//提示框自定义
                return formatterTip(params, [{type: "咸阳市乾县", unit: "元/公斤"}, {type: "合阳县", unit: "元/公斤"}, {
                    type: "洛川县",
                    unit: "元/公斤"
                }]);
            }
            // axisPointer: {
            //     type: "cross"
            // }
        },
        legend: {
            x: "center",
            y: "40px",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                fontSize: 13
            },
            icon: "rect",
            data: ["咸阳市乾县", "渭南市合阳县", "延安市洛川县"]
        },
        dataZoom: [{
            type: "slider",
            show: true,
            height: 20,
            left: "10%",
            right: "10%",
            bottom: "2%",
            start: Math.max(0, 100 - Math.floor(1300 / res.length)),
            end: 100,
            textStyle: {
                fontSize: 11
            }
        }, {
            type: "inside"
        }

        ],
        grid: {
            right: "5%",
            bottom: "10%",
            left: "2%",
            top: "80px",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: xData,
            interval: 0,
            axisLine: {
                show: false
            },
            axisTick: {
                length: 9,
                lineStyle: {
                    color: "#B1ADA7"
                }
            },
            axisLabel: {
                color: "#74726D",
                showMaxLabel: true,
                showMinLabel: true
            }
        }],
        yAxis: [{
            name: "元/公斤",
            type: "value",
            axisLine: {
                show: false
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: "#EDEBE9"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#74726D"
            },
        },],
        series: [{
            name: "咸阳市乾县",
            type: "line",
            yAxisIndex: 0,
            data: yData1
        }, {
            name: "渭南市合阳县",
            type: "line",
            yAxisIndex: 0,
            data: yData2
        }, {
            name: "延安市洛川县",
            type: "line",
            yAxisIndex: 0,
            data: yData3
        }

        ]
    };
    zcqChart.setOption(zcqChartOption);
});

/* 苹果价格指数 */
var indicesChart = echarts.init(document.getElementById("indicesChart"));
$.get(context + "/service/homePage/queryIndex", function (res) {
    var currentMonth = parseInt(res[res.length - 1].MONTH.substr(5, 2)) + "月";
    $(".indices_title span").text(currentMonth);

    var xData = [];
    var yData3 = [];
    var yData2 = [];
    var yData1 = [];
    res.forEach(function (value) {
        xData.push(value.MONTH);
        yData1.push(value.TOTAL);
        yData2.push(value.FRUIT);
        yData3.push(value.APPLE);
    });
    var indicesChartOption = {
        color: ["#008BC9", "#00B3EC", "#FF7046"],
        tooltip: {
            formatter: function (params) {
                return formatterTip(params, [{type: "200总指数", unit: ""}, {type: "水果指数", unit: ""}, {
                    type: "富士苹果指数",
                    unit: ""
                }])
            },
            trigger: "axis"
        },
        legend: {
            x: "center",
            // y: 0,
            itemWidth: 12,
            itemHeight: 4,
            textStyle: {
                fontSize: 13,
            },
            icon: "rect",
            data: ["富士苹果指数", "水果指数", "200总指数"]
        },
        dataZoom: [{
            type: "slider",
            show: true,
            height: 20,
            left: "10%",
            right: "10%",
            bottom: "3%",
            start: Math.max(0, 100 - Math.ceil(1800 / xData.length)),
            end: 100,
            textStyle: {
                fontSize: 11,
            },
        }, {
            type: "inside"
        }

        ],
        grid: {
            right: "8%",
            bottom: "16%",
            left: "8%",
            top: "12%",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: xData,
            interval: 0,
            axisLine: {
                show: false
            },
            axisTick: {
                length: 9,
                lineStyle: {
                    color: "#B1ADA7"
                }
            },
            axisLabel: {
                color: "#74726D"
            }
        }],
        yAxis: [{
            type: "value",
            axisLine: {
                show: false
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: "#EDEBE9"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#74726D"
            },
        },],
        series: [{
            name: "富士苹果指数",
            type: "line",
            yAxisIndex: 0,
            symbolSize: 0,
            itemStyle: {
                normal: {
                    // color: "#0EF100",
                }
            },
            data: yData3
        }, {
            name: "水果指数",
            type: "line",
            yAxisIndex: 0,
            symbolSize: 0,
            itemStyle: {
                normal: {
                    // color: "#0EF100",
                }
            },
            data: yData2
        }, {
            name: "200总指数",
            type: "line",
            yAxisIndex: 0,
            symbolSize: 0,
            itemStyle: {
                normal: {
                    // color: "#FC30EE",
                }
            },
            data: yData1
        }]
    };
    indicesChart.setOption(indicesChartOption);
});

/* 价格分布 */
var priceDistributionChart = echarts.init(document.getElementById("priceDistributionChart"));
var priceDistributionData = [
    /*{ name: "北京", value: 199, area: "湖南长沙共性农副产品大市场" },
    { name: "天津", value: 42, area: "湖南长沙共性农副产品大市场" },
    { name: "河北", value: 102, area: "湖南长沙共性农副产品大市场" },
    { name: "山西", value: 81, area: "湖南长沙共性农副产品大市场" },
    { name: "内蒙古", value: 47, area: "湖南长沙共性农副产品大市场" },
    { name: "辽宁", value: 67, area: "湖南长沙共性农副产品大市场" },
    { name: "吉林", value: 82, area: "湖南长沙共性农副产品大市场" },
    { name: "黑龙江", value: 123, area: "湖南长沙共性农副产品大市场" },
    { name: "上海", value: 24, area: "湖南长沙共性农副产品大市场" },
    { name: "江苏", value: 92, area: "湖南长沙共性农副产品大市场" },
    { name: "浙江", value: 114, area: "湖南长沙共性农副产品大市场" },
    { name: "安徽", value: 109, area: "湖南长沙共性农副产品大市场" },
    { name: "福建", value: 116, area: "湖南长沙共性农副产品大市场" },
    { name: "江西", value: 91, area: "湖南长沙共性农副产品大市场" },
    { name: "山东", value: 119, area: "湖南长沙共性农副产品大市场" },
    { name: "河南", value: 137, area: "湖南长沙共性农副产品大市场" },
    { name: "湖北", value: 116, area: "湖南长沙共性农副产品大市场" },
    { name: "湖南", value: 114, area: "湖南长沙共性农副产品大市场" },
    { name: "重庆", value: 91, area: "湖南长沙共性农副产品大市场" },
    { name: "四川", value: 125, area: "湖南长沙共性农副产品大市场" },
    { name: "贵州", value: 62, area: "湖南长沙共性农副产品大市场" },
    { name: "云南", value: 83, area: "湖南长沙共性农副产品大市场" },
    { name: "西藏", value: 9, area: "湖南长沙共性农副产品大市场" },
    { name: "陕西", value: 80, area: "湖南长沙共性农副产品大市场" },
    { name: "甘肃", value: 56, area: "湖南长沙共性农副产品大市场" },
    { name: "青海", value: 10, area: "湖南长沙共性农副产品大市场" },
    { name: "宁夏", value: 18, area: "湖南长沙共性农副产品大市场" },
    { name: "新疆", value: 180, area: "湖南长沙共性农副产品大市场" },
    { name: "广东", value: 123, area: "湖南长沙共性农副产品大市场" },
    { name: "甘临夏富临", value: 59, area: "甘临夏富临" },
    { name: "农博城市场", value: 14, area: "农博城市场" },*/
];

var geoCoordMap = {};

var otherArea = [
    /*{
        name: "甘临夏富临",
        cp: [120.412594, 36.175715]
    },
    {
        name: "农博城市场",
        cp: [112.867566, 36.564529]
    }*/
];

/*获取地图数据*/

// myChart.showLoading();
function loadMapData() {
    var mapFeatures = echarts.getMap("china").geoJson.features;
// myChart.hideLoading();
    mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
    });

    otherArea.forEach(function (v) {
        // 地区名称
        var name1 = v.name;
        // 地区经纬度
        geoCoordMap[name1] = v.cp;
    });
}

var convertPriceData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                area: data[i].area
            });
        }
    }
    return res;
};

function priceDistributionFunction() {
    var url = context + "/service/homePage/getPriceDistribution";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        success: function (result) {
            //priceDistributionData = result;
            var otherAreaArry = [];
            var timeDate = "";
            var html = "";
            for (var i = 0; i < result.length; i++) {
                var data = result[i];
                var otherAreaData = {
                    name: data.name,
                    cp: [data.JD, data.WD]
                };
                if (i < 5) {
                    html += "<div>"
                        + "<span>" + (i + 1) + "</span>"
                        + '<span style="font-family:sans-serif;color:#737373;font-size:12px">' + data.name + "&nbsp;" + "</span>"
                        + '<span style="font-family:sans-serif;color:#737373;font-size:12px">' + data.value + "元/斤" + "</span>"
                        + "</div>";
                }
                timeDate = data.BJRQ;
                delete result[i].JD;
                delete result[i].WD;
                delete result[i].BJRQ;
                otherAreaArry.push(otherAreaData);
            }
            priceDistributionData = result;
            otherArea = otherAreaArry;
            loadMapData();
            var month = timeDate.substring(5, 6) == "0" ? timeDate.substring(6, 7) : timeDate.substring(5, 7);
            var day = timeDate.substring(8, 9) == "0" ? timeDate.substring(9, 10) : timeDate.substring(8, 10);
            $("#timeDate").html(month + "月" + day + "日");
            $(".price_top5").append(html);
            var priceDistributionChartOption = {
                // grid: {
                //     left: "30%",
                //     right: "3%",
                //     containLabel: true
                // },
                tooltip: {
                    padding: 0,
                    enterable: true,
                    transitionDuration: 1,
                    textStyle: {
                        color: "#000",
                        decoration: "none",
                    },
                    formatter: function (params) {
                        var tipHtml = "";
                        tipHtml = '<div style="background:#fff;border-radius:5px;padding:10px;box-shadow: 1px 1px 1px #ccc;">'
                            + '<div style="font-size:20px;color:#FA3F00">' + params.data.value[2] + "元/公斤</div>"
                            + "<span>" + params.data.area + "</span>"
                            + "</div>";
                        return tipHtml;
                    }

                },
                geo: {
                    show: true,
                    map: "china",
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: "#5984B1",
                            borderColor: "#fff",
                        },
                        emphasis: {
                            areaColor: "#4499d0",
                        }
                    }
                },
                series: [
                    {
                        name: "",
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        data: convertPriceData(priceDistributionData),
                        symbolSize: function (val) {
                            return val[2] * 1.2;
                        },
                        showEffectOn: "emphasis",
                        rippleEffect: {
                            brushType: "stroke"
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: "{b}",
                                position: "left",
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#FFFF25",
                                shadowBlur: 0,
                            }
                        },
                        zlevel: 1
                    },

                ]
            };
            priceDistributionChart.setOption(priceDistributionChartOption, true);
        }
    });
}

/* 贸易流向 */
// 按月
var monthTradeFlowChart = echarts.init(document.getElementById("monthTradeFlowChart"));
var GeoCoordMap = {
    "中国": [105.501765, 33.756331],
    "美国": [-83.357567, 35.951935],
    "巴西": [-56.903606, -5.480594],
    "澳大利亚": [135.209296, -20.86882],
    "阿富汗": [67.709953, 33.93911],
    "安哥拉": [17.873887, -11.202692],
    "阿尔巴尼亚": [20.168331, 41.153332],
    "新加坡": [103.82, 1.35],
    "塞舌尔": [55.49, -4.68],
    "巴林": [50.56, 26.07],
    "香港": [114.11, 22.40],
    "澳门": [113.54, 22.20],
    "马尔代夫": [73.54, 1.98],
    "民主刚果": [15.83, -0.23],
    "朝鲜": [127.51, 40.34],
    "印度尼西亚": [113.92, -0.79],
    "巴勒斯坦": [35.13, 31.47],
    "佛得角": [-26.5153366, 30.9022976],
    "留尼汪": [-21.1344715, 55.2471091],
    "科摩罗": [-11.9011486, 43.3202681],
    "科特迪瓦": [5.316666666666666, 4.016666666666667],
    "阿联酋": [53.847818, 23.424076],
    "阿根廷": [-63.61667199999999, -38.416097],
    "亚美尼亚": [45.038189, 40.069099],
    "法属南半球和南极领地": [69.348557, -49.280366],
    //"澳大利亚": [133.775136, -25.274398],
    "奥地利": [14.550072, 47.516231],
    "阿塞拜疆": [47.576927, 40.143105],
    "布隆迪": [29.918886, -3.373056],
    "比利时": [4.469936, 50.503887],
    "贝宁": [2.315834, 9.30769],
    "布基纳法索": [-1.561593, 12.238333],
    "孟加拉国": [90.356331, 23.684994],
    "保加利亚": [25.48583, 42.733883],
    "巴哈马": [-77.39627999999999, 25.03428],
    "波斯尼亚和黑塞哥维那": [17.679076, 43.915886],
    "白俄罗斯": [27.953389, 53.709807],
    "伯利兹": [-88.49765, 17.189877],
    "百慕大": [-64.7505, 32.3078],
    "玻利维亚": [-63.58865299999999, -16.290154],
    //"巴西": [-51.92528, -14.235004],
    "文莱": [114.727669, 4.535277],
    "不丹": [90.433601, 27.514162],
    "博茨瓦纳": [24.684866, -22.328474],
    "中非共和国": [20.939444, 6.611110999999999],
    "加拿大": [-106.346771, 56.130366],
    "瑞士": [8.227511999999999, 46.818188],
    "智利": [-71.542969, -35.675147],
    //"中国": [104.195397, 35.86166],
    "象牙海岸": [-5.547079999999999, 7.539988999999999],
    "喀麦隆": [12.354722, 7.369721999999999],
    "刚果民主共和国": [21.758664, -4.038333],
    "刚果共和国": [15.827659, -0.228021],
    "哥伦比亚": [-74.297333, 4.570868],
    "哥斯达黎加": [-83.753428, 9.748916999999999],
    "古巴": [-77.781167, 21.521757],
    "北塞浦路斯": [33.429859, 35.126413],
    "塞浦路斯": [33.429859, 35.126413],
    "捷克共和国": [15.472962, 49.81749199999999],
    "德国": [10.451526, 51.165691],
    "吉布提": [42.590275, 11.825138],
    "丹麦": [9.501785, 56.26392],
    "多明尼加共和国": [-70.162651, 18.735693],
    "阿尔及利亚": [1.659626, 28.033886],
    "厄瓜多尔": [-78.18340599999999, -1.831239],
    "埃及": [30.802498, 26.820553],
    "厄立特里亚": [39.782334, 15.179384],
    "西班牙": [-3.74922, 40.46366700000001],
    "爱沙尼亚": [25.013607, 58.595272],
    "埃塞俄比亚": [40.489673, 9.145000000000001],
    "芬兰": [25.748151, 61.92410999999999],
    "斐": [178.065032, -17.713371],
    "福克兰群岛": [-59.523613, -51.796253],
    "法国": [2.213749, 46.227638],
    "加蓬": [11.609444, -0.803689],
    "英国": [-3.435973, 55.378051],
    "格鲁吉亚": [-82.9000751, 32.1656221],
    "加纳": [-1.023194, 7.946527],
    "几内亚": [-9.696645, 9.945587],
    "冈比亚": [-15.310139, 13.443182],
    "几内亚比绍": [-15.180413, 11.803749],
    "赤道几内亚": [10.267895, 1.650801],
    "希腊": [21.824312, 39.074208],
    "格陵兰": [-42.604303, 71.706936],
    "危地马拉": [-90.23075899999999, 15.783471],
    "法属圭亚那": [-53.125782, 3.933889],
    "圭亚那": [-58.93018, 4.860416],
    "洪都拉斯": [-86.241905, 15.199999],
    "克罗地亚": [15.2, 45.1],
    "海地": [-72.285215, 18.971187],
    "匈牙利": [19.503304, 47.162494],
    "印尼": [113.921327, -0.789275],
    "印度": [78.96288, 20.593684],
    "爱尔兰": [-8.24389, 53.41291],
    "伊朗": [53.688046, 32.427908],
    "伊拉克": [43.679291, 33.223191],
    "冰岛": [-19.020835, 64.963051],
    "以色列": [34.851612, 31.046051],
    "意大利": [12.56738, 41.87194],
    "牙买加": [-77.297508, 18.109581],
    "约旦": [36.238414, 30.585164],
    "日本": [138.252924, 36.204824],
    "哈萨克斯坦": [66.923684, 48.019573],
    "肯尼亚": [37.906193, -0.023559],
    "吉尔吉斯斯坦": [74.766098, 41.20438],
    "柬埔寨": [104.990963, 12.565679],
    "韩国": [127.766922, 35.907757],
    "科索沃": [20.902977, 42.6026359],
    "科威特": [47.481766, 29.31166],
    "老挝": [102.495496, 19.85627],
    "黎巴嫩": [35.862285, 33.854721],
    "利比里亚": [-9.429499000000002, 6.428055],
    "利比亚": [17.228331, 26.3351],
    "斯里兰卡": [80.77179699999999, 7.873053999999999],
    "莱索托": [28.233608, -29.609988],
    "立陶宛": [23.881275, 55.169438],
    "卢森堡": [6.129582999999999, 49.815273],
    "拉脱维亚": [24.603189, 56.879635],
    "摩洛哥": [-7.092619999999999, 31.791702],
    "摩尔多瓦": [28.369885, 47.411631],
    "马达加斯加": [46.869107, -18.766947],
    "墨西哥": [-102.552784, 23.634501],
    "马其顿": [21.745275, 41.608635],
    "马里": [-3.996166, 17.570692],
    "缅甸": [95.956223, 21.913965],
    "黑山": [19.37439, 42.708678],
    "蒙古": [103.846656, 46.862496],
    "莫桑比克": [35.529562, -18.665695],
    "毛里塔尼亚": [-10.940835, 21.00789],
    "马拉维": [34.301525, -13.254308],
    "马来西亚": [101.975766, 4.210484],
    "纳米比亚": [18.49041, -22.95764],
    "新喀里多尼亚": [165.618042, -20.904305],
    "尼日尔": [8.081666, 17.607789],
    "尼日利亚": [8.675277, 9.081999],
    "尼加拉瓜": [-85.207229, 12.865416],
    "荷兰": [5.291265999999999, 52.132633],
    "挪威": [8.468945999999999, 60.47202399999999],
    "尼泊尔": [84.12400799999999, 28.394857],
    "新西兰": [174.885971, -40.900557],
    "阿曼": [55.923255, 21.512583],
    "巴基斯坦": [69.34511599999999, 30.375321],
    "巴拿马": [-80.782127, 8.537981],
    "秘鲁": [-75.015152, -9.189967],
    "菲律宾": [121.774017, 12.879721],
    "巴布亚新几内亚": [143.95555, -6.314992999999999],
    "波兰": [19.145136, 51.919438],
    "波多黎各": [-66.590149, 18.220833],
    "北朝鲜": [127.510093, 40.339852],
    "葡萄牙": [-8.224454, 39.39987199999999],
    "巴拉圭": [-58.443832, -23.442503],
    "卡塔尔": [51.183884, 25.354826],
    "罗马尼亚": [24.96676, 45.943161],
    "俄罗斯": [105.318756, 61.52401],
    "卢旺达": [29.873888, -1.940278],
    "西撒哈拉": [-12.885834, 24.215527],
    "沙特阿拉伯": [45.079162, 23.885942],
    "苏丹": [30.217636, 12.862807],
    "南苏丹共和国": [31.3069788, 6.876991899999999],
    "塞内加尔": [-14.452362, 14.497401],
    "所罗门群岛": [160.156194, -9.64571],
    "塞拉利昂": [-11.779889, 8.460555],
    "萨尔瓦多": [-88.89653, 13.794185],
    "索马里兰": [46.8252838, 9.411743399999999],
    "索马里": [46.199616, 5.152149],
    "塞尔维亚共和国": [21.005859, 44.016521],
    "苏里南": [-56.027783, 3.919305],
    "斯洛伐克": [19.699024, 48.669026],
    "斯洛文尼亚": [14.995463, 46.151241],
    "瑞典": [18.643501, 60.12816100000001],
    "斯威士兰": [31.465866, -26.522503],
    "叙利亚": [38.996815, 34.80207499999999],
    "乍得": [18.732207, 15.454166],
    "多哥": [0.824782, 8.619543],
    "泰国": [100.992541, 15.870032],
    "塔吉克斯坦": [71.276093, 38.861034],
    "土库曼斯坦": [59.556278, 38.969719],
    "东帝汶": [125.727539, -8.874217],
    "特里尼达和多巴哥": [-61.222503, 10.691803],
    "突尼斯": [9.537499, 33.886917],
    "土耳其": [35.243322, 38.963745],
    "坦桑尼亚": [34.888822, -6.369028],
    "乌干达": [32.290275, 1.373333],
    "乌克兰": [31.16558, 48.379433],
    "乌拉圭": [-55.765835, -32.522779],
    //"美国": [-95.712891, 37.09024],
    "乌兹别克斯坦": [64.585262, 41.377491],
    "委内瑞拉": [-66.58973, 6.42375],
    "越南": [108.277199, 14.058324],
    "瓦努阿图": [166.959158, -15.376706],
    "西岸": [35.3027226, 31.9465703],
    "也门": [48.516388, 15.552727],
    "南非": [22.937506, -30.559482],
    "赞比亚": [27.849332, -13.133897],
    "津巴布韦": [29.154857, -19.015438]
};
var ckslDatas = [
    /*[{
        name: "中国",
        value: "500",
        price: 100,
        num: 2
    }],
    [{
        name: "美国",
        value: "200",
        price: 100,
        num: 2
    }],
    [{
        name: "巴西",
        value: "200",
        price: 100,
        num: 2
    }],
    [{
        name: "澳大利亚",
        value: "100",
        price: 100,
        num: 2
    }],*/
];
var jkslDatas = [];
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        // 			console.log("dataItem",dataItem) //第二个数据
        var fromCoord = [105.501765, 33.756331];
        var toCoord = GeoCoordMap[dataItem[0].name];
        // 			console.log("toCoord",toCoord);//第一个地址
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value,
                mark: 1
            }, {
                coord: toCoord,
                dataItem: dataItem,
                mark: 1
            }]);
        }
    }

    return res;
};
var convertData2 = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        // 			console.log("dataItem",dataItem) //第二个数据
        var toCoord = [105.501765, 33.756331];
        var fromCoord = GeoCoordMap[dataItem[0].name];
        // 			console.log("toCoord",toCoord);//第一个地址
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value,
                mark: 2
            }, {
                coord: toCoord,
                dataItem: dataItem,
                mark: 2
            }]);
        }
    }

    return res;
};
var planePath = "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
var worldSeries = [];

function createMonthMapSeries(data) {
    worldSeries.length = 0;
    if (data == "出口") {
        [
            ["中国", ckslDatas],
            ["中国", []],
        ].forEach(function (item, i) {
            //console.log(item);
            worldSeries.push(
                {
                    type: "lines",
                    name: i === 0 ? "chukou" : "jinkou",
                    zlevel: 0,
                    effect: {
                        show: true,
                        period: 6, //箭头指向速度，值越小速度越快
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            width: 1, //尾迹线条宽度
                            opacity: 1, //尾迹线条透明度
                            curveness: 0.2, //尾迹线条曲直度
                            color: function (params) { //圆环显示文字
                                return i === 0 ? "#0080B9" : "#FF7B4A"
                            },
                        },
                        emphasis: {
                            color: "red"
                        }
                    },
                    data: i === 0 ? convertData(item[1]) : convertData2(item[1])
                },
                {
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: "fill", //波纹绘制方式 stroke, fill
                        scale: 4, //波纹圆环最大限制，值越大波纹越大
                        color: "#0080B9"
                    },
                    symbol: "circle",
                    symbolSize: function (val) {
                        return 5; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            // color: "#f00"
                            color: function (params) { //圆环显示文字
                                return "	#ffffff"
                            },
                            borderWidth: 0,
                            shadowColor: "#64FFFF", //发光🉐效果
                            shadowBlur: 4
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        // 	console.log("dataItem",dataItem[0]);
                        //console.log("dataItem",dataItem[0].name);
                        return {
                            dataItem: dataItem,
                            name: dataItem[0].name,
                            value: GeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                        };
                    }),
                },
                //被攻击点
                {
                    type: "scatter",
                    coordinateSystem: "geo",
                    zlevel: 1,
                    rippleEffect: {
                        period: 4,
                        brushType: "stroke",
                        scale: 4
                    },
                    symbol: "circle",
                    // color: "rgba(100, 255, 255, .6)",
                    color: "rgba(0,128,185,0.77)",
                    // symbolSize: 20,
                    data: [{
                        name: item[0],
                        value: GeoCoordMap[item[0]],
                    }],
                }
            );
        });
    } else if (data == "进口") {
        [
            ["中国", []],
            ["中国", jkslDatas],
        ].forEach(function (item, i) {
            //console.log(item);
            worldSeries.push(
                {
                    type: "lines",
                    name: i === 0 ? "chukou" : "jinkou",
                    zlevel: 0,
                    effect: {
                        show: true,
                        period: 6, //箭头指向速度，值越小速度越快
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            width: 1, //尾迹线条宽度
                            opacity: 1, //尾迹线条透明度
                            curveness: 0.2, //尾迹线条曲直度
                            color: function (params) { //圆环显示文字
                                return i === 0 ? "#64FFFF" : "#FF7B4A"
                            },
                        },
                        emphasis: {
                            color: "red"
                        }
                    },
                    data: i === 0 ? convertData(item[1]) : convertData2(item[1])
                },
                {
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: "fill", //波纹绘制方式 stroke, fill
                        scale: 4, //波纹圆环最大限制，值越大波纹越大
                        //color: "#64FFFF"
                        color: "#FF7B4A"
                    },
                    symbol: "circle",
                    symbolSize: function (val) {
                        return 5; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            // color: "#f00"
                            color: function (params) { //圆环显示文字
                                return "	#ffffff"
                            },
                            borderWidth: 0,
                            shadowColor: "#64FFFF", //发光🉐效果
                            shadowBlur: 4
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        // 	console.log("dataItem",dataItem[0]);
                        //console.log("dataItem",dataItem[0].name);
                        return {
                            dataItem: dataItem,
                            name: dataItem[0].name,
                            value: GeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                        };
                    }),
                },
                //被攻击点
                {
                    type: "scatter",
                    coordinateSystem: "geo",
                    zlevel: 1,
                    rippleEffect: {
                        period: 4,
                        brushType: "stroke",
                        scale: 4
                    },
                    symbol: "circle",
                    // color: "rgba(100, 255, 255, .6)",
                    color: "#FF8852",
                    // symbolSize: 20,
                    data: [{
                        name: item[0],
                        value: GeoCoordMap[item[0]],
                    }],
                }
            );
        });
    }
}

var monthTradeFlowChartOption = {
    type: "map",
    mapType: "world",
    tooltip: {
        trigger: "item",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        formatter: function (params, ticket, callback) {
            //console.log(params);
            if (params.seriesType == "effectScatter") {
                return params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
                if (params.seriesName === "jinkou") {
                    return '<div style="padding:10px;">' +
                        '<div style="color:red;font-size:20px;margin-bottom:5px;">' + params.data.dataItem[0].name + "→中国</div>" +
                        "进口量: " + params.data.value + "吨</div>";
                }
                if (params.seriesName === "chukou") {
                    return '<div style="padding:10px;">' +
                        '<div style="color:#0080B9;font-size:20px;margin-bottom:5px;">中国→' + params.data.dataItem[0].name + "</div>" +
                        "出口量: " + params.data.value + "吨</div>";
                }

            } else {
                return params.name;
            }
        },
        textStyle: {
            color: "#333"
        }
    },
    geo: {
        map: "world",
        zoom: 1.2,
        label: {
            emphasis: {
                show: false,
                color: "white"
            }
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                color: "#84A1C4", //地图背景色
                borderColor: "#fff", //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                color: "rgba(104, 217, 251, 127)" //悬浮背景
            }
        }
    },
    series: worldSeries
};
monthTradeFlowChart.setOption(monthTradeFlowChartOption, true);

// 按月-出口
var monthExportInfoChart = echarts.init(document.getElementById("monthExportInfoChart"));
var monthExportInfoChartOption = {
    tooltip: {
        show: false,
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.5)",
        // axisPointer: {
        //     lineStyle: {
        //         width: 0
        //     },
        // }
    },
    legend: {
        show: false
    },
    grid: {
        left: "3%",
        right: "15%",
        top: "8%",
        bottom: "2%",
        containLabel: true
    },
    xAxis: {
        type: "value",
        // boundaryGap: [0, 0.1],
        show: false
    },
    yAxis: {
        type: "category",
        inverse: true,
        data: [/*"菲律宾", "印度尼西亚", "越南", "孟加拉国", "泰国"*/],
        splitLine: {show: false},
        axisLabel: {
            textStyle: {
                color: "#737373",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    color: "#0080B9",
    series: [
        {
            type: "bar",
            barCategoryGap: "45%",
            label: {
                show: true,
                position: "insideLeft",
                color: "#000000",
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 3
                }
            },
            data: [/*986, 625, 389, 806, 105*/]
        }
    ]
};
monthExportInfoChart.setOption(monthExportInfoChartOption, true);

// 按月-进口
var monthImportInfoChart = echarts.init(document.getElementById("monthImportInfoChart"));
var monthImportInfoChartOption = {
    tooltip: {
        show: false,
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.5)",
        // axisPointer: {
        //     lineStyle: {
        //         width: 0
        //     },
        // }
    },
    legend: {
        show: false
    },
    grid: {
        left: "3%",
        right: "15%",
        top: "8%",
        bottom: "2%",
        containLabel: true
    },
    xAxis: {
        type: "value",
        // boundaryGap: [0, 0.1],
        show: false
    },
    yAxis: {
        type: "category",
        inverse: true,
        data: [/*"菲律宾", "印度尼西亚", "越南", "孟加拉国", "泰国"*/],
        splitLine: {show: false},
        axisLabel: {
            textStyle: {
                color: "#737373",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    color: "#FF7044",
    series: [
        {
            type: "bar",
            barCategoryGap: "45%",
            label: {
                show: true,
                position: "insideLeft",
                color: "#000000"
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 3,
                }
            },
            data: [/*986, 625, 389, 806, 105*/]
        }
    ]
};
monthImportInfoChart.setOption(monthImportInfoChartOption, true);

function monthTradeFlowFunction(data) {
    var tradeFlowUrl = context + "/service/homePage/getTradeFlowList";
    if (data == "出口") {
        //按月出口
        var exportParams = {
            "tradeFlow": "export",
            "timeCode": "month"
        };
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: tradeFlowUrl,
            async: false,
            data: JSON.stringify(exportParams),
            success: function (result) {
                //ckslDatas.length = 0;
                //worldSeries.length = 0;
                var tradeFlowDatasArray = [];
                monthExportInfoChartOption.yAxis.data.length = 0;
                monthExportInfoChartOption.series[0].data.length = 0;
                for (var i = 0; result.length < 5 ? i < result.length : i < 5; i++) {
                    var value = result[i];
                    var tradeFlowDataArray = [];
                    var tradeFlowDataObject = {
                        name: "",
                        value: "",
                        price: 100,
                        num: 2
                    };
                    tradeFlowDataObject.name = value.GJMC;
                    tradeFlowDataObject.value = value.cksl;
                    if (i < 5) {
                        monthExportInfoChartOption.yAxis.data.push(value.GJMC);
                        monthExportInfoChartOption.series[0].data.push(value.cksl);
                    }
                    tradeFlowDataArray.push(tradeFlowDataObject);
                    tradeFlowDatasArray.push(tradeFlowDataArray);
                }
                ckslDatas.length = 0;
                ckslDatas = tradeFlowDatasArray;
                createMonthMapSeries(data);
                monthTradeFlowChart.setOption(monthTradeFlowChartOption, true);
                monthExportInfoChart.setOption(monthExportInfoChartOption, true);
            }
        });
    } else if (data == "进口") {
        //按月进口
        var importParams = {
            "tradeFlow": "import",
            "timeCode": "month"
        };
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            async: false,
            url: tradeFlowUrl,
            data: JSON.stringify(importParams),
            success: function (result) {
                //ckslDatas.length = 0;
                //worldSeries.length = 0;
                var tradeFlowDatasArray = [];
                monthImportInfoChartOption.yAxis.data.length = 0;
                monthImportInfoChartOption.series[0].data.length = 0;
                for (var i = 0; result.length < 5 ? i < result.length : i < 5; i++) {
                    var value = result[i];
                    var tradeFlowDataArray = [];
                    var tradeFlowDataObject = {
                        name: "",
                        value: "",
                        price: 100,
                        num: 2
                    };
                    tradeFlowDataObject.name = value.GJMC;
                    tradeFlowDataObject.value = value.jksl;
                    if (i < 5) {
                        monthImportInfoChartOption.yAxis.data.push(value.GJMC);
                        monthImportInfoChartOption.series[0].data.push(value.jksl);
                    }
                    tradeFlowDataArray.push(tradeFlowDataObject);
                    tradeFlowDatasArray.push(tradeFlowDataArray);
                }
                jkslDatas = tradeFlowDatasArray;
                createMonthMapSeries(data);
                monthTradeFlowChart.setOption(monthTradeFlowChartOption, true);
                monthImportInfoChart.setOption(monthImportInfoChartOption, true);
            }
        });
    }

}

var ckslYearDatas = [];
var jkslYearDatas = [];

var yearWorldSeries = [];

function createYearMapSeries(data) {
    yearWorldSeries.length = 0;
    if (data == "出口") {
        [
            ["中国", ckslYearDatas],
            ["中国", []],
        ].forEach(function (item, i) {
            //console.log(item);
            yearWorldSeries.push(
                {
                    type: "lines",
                    name: i === 0 ? "chukou" : "jinkou",
                    zlevel: 0,
                    effect: {
                        show: true,
                        period: 6, //箭头指向速度，值越小速度越快
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            width: 1, //尾迹线条宽度
                            opacity: 1, //尾迹线条透明度
                            curveness: 0.2, //尾迹线条曲直度
                            color: function (params) { //圆环显示文字
                                return i === 0 ? "#0080B9" : "#FF7B4A"
                            },
                        },
                        emphasis: {
                            color: "red"
                        }
                    },
                    data: i === 0 ? convertData(item[1]) : convertData2(item[1])
                },
                {
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: "fill", //波纹绘制方式 stroke, fill
                        scale: 4, //波纹圆环最大限制，值越大波纹越大
                        color: "#0080B9"
                    },
                    symbol: "circle",
                    symbolSize: function (val) {
                        return 5; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            // color: "#f00"
                            color: function (params) { //圆环显示文字
                                return "	#ffffff"
                            },
                            borderWidth: 0,
                            shadowColor: "#64FFFF", //发光🉐效果
                            shadowBlur: 4
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        // 	console.log("dataItem",dataItem[0]);
                        //console.log("dataItem",dataItem[0].name);
                        return {
                            dataItem: dataItem,
                            name: dataItem[0].name,
                            value: GeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                        };
                    }),
                },
                //被攻击点
                {
                    type: "scatter",
                    coordinateSystem: "geo",
                    zlevel: 1,
                    rippleEffect: {
                        period: 4,
                        brushType: "stroke",
                        scale: 4
                    },
                    symbol: "circle",
                    // color: "rgba(100, 255, 255, .6)",
                    color: "rgba(0,128,185,0.78)",
                    // symbolSize: 20,
                    data: [{
                        name: item[0],
                        value: GeoCoordMap[item[0]],
                    }],
                }
            );
        });
    } else if (data == "进口") {
        [
            ["中国", []],
            ["中国", jkslYearDatas],
        ].forEach(function (item, i) {
            //console.log(item);
            yearWorldSeries.push(
                {
                    type: "lines",
                    name: i === 0 ? "chukou" : "jinkou",
                    zlevel: 0,
                    effect: {
                        show: true,
                        period: 6, //箭头指向速度，值越小速度越快
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            width: 1, //尾迹线条宽度
                            opacity: 1, //尾迹线条透明度
                            curveness: 0.2, //尾迹线条曲直度
                            color: function (params) { //圆环显示文字
                                return i === 0 ? "#64FFFF" : "#FF7B4A"
                            },
                        },
                        emphasis: {
                            color: "red"
                        }
                    },
                    data: i === 0 ? convertData(item[1]) : convertData2(item[1])
                },
                {
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: "fill", //波纹绘制方式 stroke, fill
                        scale: 4, //波纹圆环最大限制，值越大波纹越大
                        color: "#FF7B4A"
                    },
                    symbol: "circle",
                    symbolSize: function (val) {
                        return 5; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            // color: "#f00"
                            color: function (params) { //圆环显示文字
                                return "	#ffffff"
                            },
                            borderWidth: 0,
                            shadowColor: "#64FFFF", //发光🉐效果
                            shadowBlur: 4
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        // 	console.log("dataItem",dataItem[0]);
                        //console.log("dataItem",dataItem[0].name);
                        return {
                            dataItem: dataItem,
                            name: dataItem[0].name,
                            value: GeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                        };
                    }),
                },
                //被攻击点
                {
                    type: "scatter",
                    coordinateSystem: "geo",
                    zlevel: 1,
                    rippleEffect: {
                        period: 4,
                        brushType: "stroke",
                        scale: 4
                    },
                    symbol: "circle",
                    // color: "rgba(100, 255, 255, .6)",
                    color: "#FF8852",
                    // symbolSize: 20,
                    data: [{
                        name: item[0],
                        value: GeoCoordMap[item[0]],
                    }],
                }
            );
        });
    }
}

// 按年
var yearTradeFlowChart = echarts.init(document.getElementById("yearTradeFlowChart"));
var yearTradeFlowChartOption = {
    type: "map",
    mapType: "world",
    tooltip: {
        trigger: "item",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        formatter: function (params, ticket, callback) {
            //console.log(params);
            if (params.seriesType == "effectScatter") {
                return params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
                if (params.seriesName === "jinkou") {
                    return '<div style="padding:10px;">' +
                        '<div style="color:red;font-size:20px;margin-bottom:5px;">' + params.data.dataItem[0].name + "→中国</div>" +
                        "进口量: " + params.data.value + "吨</div>";
                }
                if (params.seriesName === "chukou") {
                    return '<div style="padding:10px;">' +
                        '<div style="color:#0080B9;font-size:20px;margin-bottom:5px;">中国→' + params.data.dataItem[0].name + "</div>" +
                        "出口量: " + params.data.value + "吨</div>";
                }

            } else {
                return params.name;
            }
        },
        textStyle: {
            color: "#333"
        }
    },
    geo: {
        map: "world",
        zoom: 1.2,
        label: {
            emphasis: {
                show: false,
                color: "white"
            }
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                color: "#84A1C4", //地图背景色
                borderColor: "#fff", //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                color: "rgba(104, 217, 251, 127)" //悬浮背景
            }
        }
    },
    series: yearWorldSeries
};
yearTradeFlowChart.setOption(yearTradeFlowChartOption, true);

// 按年-出口
var yearExportInfoChart = echarts.init(document.getElementById("yearExportInfoChart"));
var yearExportInfoChartOption = {
    tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.5)",
        // axisPointer: {
        //     lineStyle: {
        //         width: 0
        //     },
        // }
    },
    legend: {
        show: false
    },
    grid: {
        left: "3%",
        right: "15%",
        top: "8%",
        bottom: "2%",
        containLabel: true
    },
    xAxis: {
        type: "value",
        // boundaryGap: [0, 0.1],
        show: false
    },
    yAxis: {
        type: "category",
        inverse: true,
        data: [/*"菲律宾", "印度尼西亚", "越南", "孟加拉国", "泰国"*/],
        splitLine: {show: false},
        axisLabel: {
            textStyle: {
                color: "#737373",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    color: "#0080B9",
    series: [
        {
            type: "bar",
            barCategoryGap: "45%",
            label: {
                show: true,
                position: "insideLeft",
                color: "#000000"
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 3,
                }
            },
            data: [/*986, 625, 389, 806, 105*/]
        }
    ]
};
yearExportInfoChart.setOption(yearExportInfoChartOption, true);

// 按年-进口
var yearImportInfoChart = echarts.init(document.getElementById("yearImportInfoChart"));
var yearImportInfoChartOption = {
    tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.5)",
        // axisPointer: {
        //     lineStyle: {
        //         width: 0
        //     },
        // }
    },
    legend: {
        show: false
    },
    grid: {
        left: "3%",
        right: "15%",
        top: "8%",
        bottom: "2%",
        containLabel: true
    },
    xAxis: {
        type: "value",
        // boundaryGap: [0, 0.1],
        show: false
    },
    yAxis: {
        type: "category",
        inverse: true,
        data: [/*"菲律宾", "印度尼西亚", "越南", "孟加拉国", "泰国"*/],
        splitLine: {show: false},
        axisLabel: {
            textStyle: {
                color: "#737373",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    color: "#FF7044",
    series: [
        {
            type: "bar",
            barCategoryGap: "45%",
            label: {
                show: true,
                position: "insideLeft",
                color: "#000000"
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 3,
                }
            },
            data: [/*986, 625, 389, 806, 105*/]
        }
    ]
};
yearImportInfoChart.setOption(yearImportInfoChartOption, true);

function yearTradeFlowFunction(data) {
    var tradeFlowUrl = context + "/service/homePage/getTradeFlowList";
    if (data == "出口") {
        //按年出口
        var exportParams = {
            "tradeFlow": "export",
            "timeCode": "year"
        };
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: tradeFlowUrl,
            async: false,
            data: JSON.stringify(exportParams),
            success: function (result) {
                //ckslDatas.length = 0;
                //yearWorldSeries.length = 0;
                var tradeFlowDatasArray = [];
                yearExportInfoChartOption.yAxis.data.length = 0;
                yearExportInfoChartOption.series[0].data.length = 0;
                for (var i = 0; result.length < 5 ? i < result.length : i < 5; i++) {
                    var value = result[i];
                    var tradeFlowDataArray = [];
                    var tradeFlowDataObject = {
                        name: "",
                        value: "",
                        price: 100,
                        num: 2
                    };
                    tradeFlowDataObject.name = value.GJMC;
                    tradeFlowDataObject.value = value.cksl;
                    if (i < 5) {
                        yearExportInfoChartOption.yAxis.data.push(value.GJMC);
                        yearExportInfoChartOption.series[0].data.push(value.cksl);
                    }
                    tradeFlowDataArray.push(tradeFlowDataObject);
                    tradeFlowDatasArray.push(tradeFlowDataArray);
                }
                ckslYearDatas = tradeFlowDatasArray;
                createYearMapSeries(data);
                yearTradeFlowChart.setOption(yearTradeFlowChartOption, true);
                yearExportInfoChart.setOption(yearExportInfoChartOption, true);
            }
        });
    } else if (data == "进口") {
        //按年进口
        var importParams = {
            "tradeFlow": "import",
            "timeCode": "year"
        };
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            async: false,
            url: tradeFlowUrl,
            data: JSON.stringify(importParams),
            success: function (result) {
                //ckslDatas.length = 0;
                //yearWorldSeries.length = 0;
                var tradeFlowDatasArray = [];
                yearImportInfoChartOption.yAxis.data.length = 0;
                yearImportInfoChartOption.series[0].data.length;
                for (var i = 0; result.length < 5 ? i < result.length : i < 5; i++) {
                    var value = result[i];
                    var tradeFlowDataArray = [];
                    var tradeFlowDataObject = {
                        name: "",
                        value: "",
                        price: 100,
                        num: 2
                    };
                    tradeFlowDataObject.name = value.GJMC;
                    tradeFlowDataObject.value = value.jksl;
                    if (i < 5) {
                        yearImportInfoChartOption.yAxis.data.push(value.GJMC);
                        yearImportInfoChartOption.series[0].data.push(value.jksl);
                    }
                    tradeFlowDataArray.push(tradeFlowDataObject);
                    tradeFlowDatasArray.push(tradeFlowDataArray);
                }
                jkslYearDatas = tradeFlowDatasArray;
                createYearMapSeries(data);
                yearTradeFlowChart.setOption(yearTradeFlowChartOption, true);
                yearImportInfoChart.setOption(yearImportInfoChartOption, true);
            }
        });
    }
}

/* 生产分布 */
var chinaProductionDistributionChart = echarts.init(document.getElementById("chinaProductionDistributionChart"));
var chinaProductionDistributionChartOption = {
    tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
        show: true,
        formatter: "{b}: {c}万亩"

    },
    visualMap: {
        type: "piecewise",
        min: 0,
        // max: 7,
        left: "left",
        top: "bottom",
        text: ["单位: 万亩"],
        showLabel: !0,
        calculable: true,
        // show:false,
        pieces: [{
            value: 0,
            // lte: 50,
            label: "0",
            color: "#D1DBEB"
        }, {
            gt: 0,
            lte: 100,
            label: "<100",
            color: "#99B7D3"
        }, {
            gt: 100,
            lte: 200,
            label: "100-200",
            color: "#6A97C9"
        }, {
            gt: 200,
            lte: 300,
            label: "200-300",
            color: "#3474B3"
        }, {
            gt: 300,
            lte: 500,
            label: "300-500",
            color: "#06509B"
        }, {
            gt: 500,
            label: ">500",
            color: "#04347E"
        }],
        outOfRange: {
            color: "#BECEE2"
        }
    },
    geo: {
        map: "china",
        zoom: 1,
        layoutCenter: ["42%", "50%"],//距离左右，上下距离的百分比
        layoutSize: "110%",//map百分比大小
        label: {
            normal: {
                show: false,
                color: "#333"
            },
            emphasis: {
                show: false,
                color: "#fff"
            }
        },
        itemStyle: {
            normal: {
                borderColor: "#fff",
            },
            emphasis: {
                areaColor: "#34ADC2"
            }
        }
    },
    series: [{
        type: "map",
        mapType: "china",
        geoIndex: 0,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: [/*{
            name: "北京",
            value: 1,
        }, {
            name: "天津",
            value: 15,
        }, {
            name: "河北",
            value: 1,
        }, {
            name: "重庆",
            value: 2,
        }, {
            name: "云南",
            value: 2,
        }, {
            name: "贵州",
            value: 2,
        }, {
            name: "四川",
            value: 2,
        }, {
            name: "河南",
            value: 3,
        }, {
            name: "山东",
            value: 3,
        }, {
            name: "辽宁",
            value: 4,
        }, {
            name: "黑龙江",
            value: 4,
        }, {
            name: "内蒙古",
            value: 44,
        }, {
            name: "吉林",
            value: 4,
        }, {
            name: "湖南",
            value: 5,
        }, {
            name: "安徽",
            value: 25,
        }, {
            name: "浙江",
            value: 5,
        }, {
            name: "江西",
            value: 55,
        }, {
            name: "湖北",
            value: 65,
        }, {
            name: "江苏",
            value: 5,
        }, {
            name: "新疆",
            value: 16,
        }, {
            name: "甘肃",
            value: 6,
        }, {
            name: "山西",
            value: 6,
        }, {
            name: "青海",
            value: 36,
        }, {
            name: "陕西",
            value: 6,
        }, {
            name: "宁夏",
            value: 26,
        }, {
            name: "广西",
            value: 17,
        }, {
            name: "福建",
            value: 7,
        }, {
            name: "广东",
            value: 7,
        }, {
            name: "海南",
            value: 7,
        }, {
            name: "上海",
            value: 0
        }, {
            name: "西藏",
            value: 0
        }, {
            name: "台湾",
            value: 0
        }, {
            name: "香港",
            value: 0
        }, {
            name: "澳门",
            value: 0
        }, {
            name: "南海诸岛",
            value: 0
        }*/]
    }]
};
chinaProductionDistributionChart.setOption(chinaProductionDistributionChartOption, true);

//种植面积排名
var plantingAreaChart = echarts.init(document.getElementById("plantingAreaChart"));
var plantingAreaChartOption = {
    tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.5)",
        axisPointer: {
            lineStyle: {
                width: 0
            },
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: "15%",
        right: "0%",
        top: "8%",
        bottom: "2%",
        containLabel: true
    },
    xAxis: {
        type: "value",
        // boundaryGap: [0, 0.1],
        show: false
    },
    yAxis: {
        type: "category",
        inverse: true,
        data: [/*"菲律宾", "印度尼西亚", "越南", "孟加拉国", "泰国"*/],
        splitLine: {show: false},
        axisLabel: {
            textStyle: {
                color: "#737373",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    color: "#FF7044",
    series: [
        {
            type: "bar",
            barCategoryGap: "45%",
            label: {
                show: true,
                position: "insideLeft",
                color: "#000000"
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 3,
                }
            },
            data: [/*986, 625, 389, 806, 105*/]
        }
    ]
};
plantingAreaChart.setOption(plantingAreaChartOption, true);

function productionDistributionFunction() {
    var url = context + "/service/homePage/getPlantingDistributionList";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        data: JSON.stringify(param),
        success: function (result) {
            var nhzd = {
                name: "南海诸岛",
                value: 0
            };
            result[result.length] = nhzd;
            chinaProductionDistributionChartOption.series[0].data = result;
            var plantingAreaYAxisData = [];
            var plantingAreaSeriesData = [];
            for (var i = 0; i < result.length; i++) {
                var nameAndValue = result[i];
                if (nameAndValue.value >= 100) {
                    plantingAreaYAxisData.push(nameAndValue.name);
                    plantingAreaSeriesData.push(nameAndValue.value);
                }
            }
            plantingAreaChartOption.yAxis.data = plantingAreaYAxisData;
            plantingAreaChartOption.series[0].data = plantingAreaSeriesData;
            chinaProductionDistributionChart.setOption(chinaProductionDistributionChartOption, true);
            plantingAreaChart.setOption(plantingAreaChartOption, true);
        }
    });
}

var productionDistributionChart = echarts.init(document.getElementById("productionDistributionChart"));
var chinaProductionDistributionChartOption1 = {
    tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
        show: true,
        formatter: "{b}: {c}万吨"

    },
    visualMap: {
        type: "piecewise",
        min: 0,
        // max: 7,
        left: "left",
        top: "bottom",
        text: ["单位: 万吨"],
        showLabel: !0,
        calculable: true,
        // show:false,
        pieces: [{
            value: 0,
            // lte: 50,
            label: "0",
            color: "#D1DBEB"
        }, {
            gt: 0,
            lte: 100,
            label: "<100",
            color: "#99B7D3"
        }, {
            gt: 100,
            lte: 200,
            label: "100-200",
            color: "#6A97C9"
        }, {
            gt: 200,
            lte: 300,
            label: "200-300",
            color: "#3474B3"
        }, {
            gt: 300,
            lte: 500,
            label: "300-500",
            color: "#06509B"
        }, {
            gt: 500,
            label: ">500",
            color: "#04347E"
        }],
        outOfRange: {
            color: "#BECEE2"
        }
    },
    geo: {
        map: "china",
        zoom: 1,
        layoutCenter: ["42%", "50%"],//距离左右，上下距离的百分比
        layoutSize: "110%",//map百分比大小
        label: {
            normal: {
                show: false,
                color: "#333"
            },
            emphasis: {
                show: false,
                color: "#fff"
            }
        },
        itemStyle: {
            normal: {
                borderColor: "#fff",
            },
            emphasis: {
                areaColor: "#34ADC2"
            }
        }
    },
    series: [{
        type: "map",
        mapType: "china",
        geoIndex: 0,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: [/*{
            name: "北京",
            value: 1,
        }, {
            name: "天津",
            value: 15,
        }, {
            name: "河北",
            value: 1,
        }, {
            name: "重庆",
            value: 2,
        }, {
            name: "云南",
            value: 2,
        }, {
            name: "贵州",
            value: 2,
        }, {
            name: "四川",
            value: 2,
        }, {
            name: "河南",
            value: 3,
        }, {
            name: "山东",
            value: 3,
        }, {
            name: "辽宁",
            value: 4,
        }, {
            name: "黑龙江",
            value: 4,
        }, {
            name: "内蒙古",
            value: 44,
        }, {
            name: "吉林",
            value: 4,
        }, {
            name: "湖南",
            value: 5,
        }, {
            name: "安徽",
            value: 25,
        }, {
            name: "浙江",
            value: 5,
        }, {
            name: "江西",
            value: 55,
        }, {
            name: "湖北",
            value: 65,
        }, {
            name: "江苏",
            value: 5,
        }, {
            name: "新疆",
            value: 16,
        }, {
            name: "甘肃",
            value: 6,
        }, {
            name: "山西",
            value: 6,
        }, {
            name: "青海",
            value: 36,
        }, {
            name: "陕西",
            value: 6,
        }, {
            name: "宁夏",
            value: 26,
        }, {
            name: "广西",
            value: 17,
        }, {
            name: "福建",
            value: 7,
        }, {
            name: "广东",
            value: 7,
        }, {
            name: "海南",
            value: 7,
        }, {
            name: "上海",
            value: 0
        }, {
            name: "西藏",
            value: 0
        }, {
            name: "台湾",
            value: 0
        }, {
            name: "香港",
            value: 0
        }, {
            name: "澳门",
            value: 0
        }, {
            name: "南海诸岛",
            value: 0
        }*/]
    }]
};
productionDistributionChart.setOption(chinaProductionDistributionChartOption1, true);

//产量排名
var productionRankingChart = echarts.init(document.getElementById("productionRankingChart"));
var productionRankingChartOption = {
    tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.5)",
        axisPointer: {
            lineStyle: {
                width: 0
            },
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: "15%",
        right: "0%",
        top: "8%",
        bottom: "2%",
        containLabel: true
    },
    xAxis: {
        type: "value",
        // boundaryGap: [0, 0.1],
        show: false
    },
    yAxis: {
        type: "category",
        inverse: true,
        data: [/*"菲律宾", "印度尼西亚", "越南", "孟加拉国", "泰国"*/],
        splitLine: {show: false},
        axisLabel: {
            textStyle: {
                color: "#737373",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    color: "#FF7044",
    series: [
        {
            type: "bar",
            barCategoryGap: "45%",
            label: {
                show: true,
                position: "insideLeft",
                color: "#000000"
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 3,
                }
            },
            data: [/*986, 625, 389, 806, 105*/]
        }
    ]
};
productionRankingChart.setOption(productionRankingChartOption, true);

function YieldDistributionFunction() {
    var url = context + "/service/homePage/getYieldDistributionList";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        data: JSON.stringify(param),
        success: function (result) {
            var nhzd = {
                name: "南海诸岛",
                value: 0
            };
            result[result.length] = nhzd;
            chinaProductionDistributionChartOption1.series[0].data = result;
            var plantingAreaYAxisData = [];
            var plantingAreaSeriesData = [];
            for (var i = 0; i < result.length; i++) {
                var nameAndValue = result[i];
                if (nameAndValue.value >= 100) {
                    plantingAreaYAxisData.push(nameAndValue.name);
                    plantingAreaSeriesData.push(nameAndValue.value);
                }
            }
            productionRankingChartOption.yAxis.data = plantingAreaYAxisData;
            productionRankingChartOption.series[0].data = plantingAreaSeriesData;
            productionDistributionChart.setOption(chinaProductionDistributionChartOption1, true);
            productionRankingChart.setOption(productionRankingChartOption, true);
        }
    });
}

/* 灾害分布 */
var disastersDistributionChart = echarts.init(document.getElementById("disastersDistributionChart"));
//低温冻害: 图标
var iconDW = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMEVGM0YzQjhFOTExRUFCMDBEQTMzOUYzRDIwMjM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMEVGM0Y0QjhFOTExRUFCMDBEQTMzOUYzRDIwMjM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUwRUYzRjFCOEU5MTFFQUIwMERBMzM5RjNEMjAyMzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUwRUYzRjJCOEU5MTFFQUIwMERBMzM5RjNEMjAyMzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6+dFCpAAACIElEQVR42rSVTUgWURSGZz7DhRshUjANVAIlizaloCWaf6CrIrQoc1WgtBBc6ELURZsIFaSWuigRLfyJFgqJJC4MQ3BhSRAahT8RZW5cKF/jc+GdGMdxVMgPHt577pxz5sw9997PdhzH+t+/E2EP7VUrBimE89CpseUkWe9Cs5pK98NacTohCpPgwIS0JizODvt8Kj2LmKqSPdMzUEq1GzxPZbzMeNsbFwlIVAeLEIfzF6YK4Kcez0OZSSh7BD75c0Q8yVrhGcNTkAa5Wj+T+LHc6rH/yD8BuQhrjIehMqhRRXAVorKvwbjGUZ9abtP4XZGuwUv/55dCP8TIvsPbc/ZZ6+vIE8/UR3gbtKbdcEvjdUiB9yToQRM1n4k9hg5pmUxl3yALOv691O0+zhXIZTBBH+ACPIW8gGJfQQPr+12xGWaHYE8cZp9GYFB706UtLGbXPuVt5cglGIVZVdoF+QGVDqjSZcVmIqfdSr1JnyPVCvoN8WraC7PBoQnq4AYUwya80dY7A0skTfc36j70anwSVkwAjvfQH5pfwC5Bb8IvqFJCcwAag7pvGnQX/sruI8F04H2RZA2az/dMndPJ27P5J+GzqmrRmTfLYiPZ8slx56Vm7aZgQ/HBtxTdfQhLECe73df9Wo/vHCzsyXHAlmpWok2f3tbzVIj1x0UOuMRfq8OPZD/QcRzX2n6FrSNd0p6K61VhwWH87eP4j9oRYAA6hLoOLnGo5gAAAABJRU5ErkJggg=="
//干旱灾害: 图标
var iconGH = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc2OTdGNjczQjhFOTExRUFBM0M3QTg1OTI5ODVGMkY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc2OTdGNjc0QjhFOTExRUFBM0M3QTg1OTI5ODVGMkY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzY5N0Y2NzFCOEU5MTFFQUEzQzdBODU5Mjk4NUYyRjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzY5N0Y2NzJCOEU5MTFFQUEzQzdBODU5Mjk4NUYyRjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Rk71+AAABrElEQVR42rRUTShEURid5yc/m4liY0zEaqRYYMvKQpmFn6HYi4WthWxloygsmCKlxsrPxsaGQkmzlJVk2Jj8zoKJrvPVefp63jOzeG6dOd8973tnvvu+e69ljAn4PQoC/zCK9GQ8ZiVBLcD+csL0UtsBRYEroAn6F7RZxFPAExCGlnGtFIkhGsqIUysGdVNbF0PGPeRtp6Fz+c0qPiHXA6WMT9XziCPP07RExa/kcqW9sHrJK3TkeZo+q7iB/KC0RvnBcj9AGUeep+kFkGUco8Ed6J5av8o9Iw/8aQqDN9Aep5NYZjXjDfIgtFbGm+QOaNFc+3QG+ASCwBy1eX5PC1ihtsUtJmOR39ndFNVeghY4HZVtBi2NeFpV1gVN/niCWhgYznWipDLDDvdRW1WdHmIBh6Ck1jxNkSyNObcrUx0/oNam0nfJ7fmc/VtyUGkpcqWLVpGPaYj8qLQaclpptS77+bcpGhFRyzmmVqXO+5G6F0Z0ntctJc0Z44vS4YT9iIdDxppqTopY0j6WXNIwq/PpKr1BU41d6bVPpmXAu23a6ZNp9mf5fo9vAQYAOyqERBA1XgAAAAAASUVORK5CYII="
//连阴雨灾害: 图标
var iconLYY = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdGQjM0Q0YwQjhFOTExRUE4OTZDQ0E2MTdCRUY2ODVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdGQjM0Q0YxQjhFOTExRUE4OTZDQ0E2MTdCRUY2ODVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0ZCMzRDRUVCOEU5MTFFQTg5NkNDQTYxN0JFRjY4NUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZCMzRDRUZCOEU5MTFFQTg5NkNDQTYxN0JFRjY4NUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7l5SU7AAABrElEQVR42rRUPUvDUBQ9SUMr1vpRi1oUiwiiWHAQl046WRD/QEUpDro46aCjdBTERfAHiI7ioOgmLi6Cky4iLYhQUBc/wLbEPk9ICg9NQmr0wcm9932cd27efU8RQuCvm+Y0cKwjSLNEzBODVvclsT2lYc+NVLFTSsIIzWlCRapHAcKK2f/CqfdVoCiwyzBL8qodqeqw2U5CQaqfZCEGujARpj/EFdxolu6yZ6VU2dcA5McCzumViAdT8TPdIyJH1QU3pRMRKqzAGcaiXn5GA4jRZhleU8zkD6XsjNJsEZkBFVpjHadt/OuCwDvdESrOaxZhM815u4JkjCoVK0WvLcQFHUDTo8Aaw4VaSa23AEnjyMu/LNuQaablOs0Yu5X8132XTNpZ8clmJfgqkxY/BOKKD9JP05zJpPtlYOUPrv2GTJoj0jowrNd5UEbNBpgi78oqy+nie5220WwSMyQPeiUkbmESHrpdU6Nmk3Anro3lSXbn6ZXy21SbZ2+ROJDiG2Lc8tPElTR2Qsx5efriRFSKu4lWqbijLnMdSZ9qRWwTG/6by9z/+6dfAgwAjxWMQGNI0bsAAAAASUVORK5CYII="

// 低温冻害
var diwen = [
    {//庐阳区
        name: "庐阳区",
        value: [117.34234, 31.815306, 250]
    },
    {//衡水市
        name: "衡水市",
        value: [115.665993, 37.735097, 300]
    }
];

// 干旱灾害
var ganhan = [
    {//杭州
        name: "杭州",
        value: [119.5313, 29.8773, 250]
    },
    {//长治
        name: "长治",
        value: [112.867566, 36.564529, 300]
    }
];

// 连阴雨灾害
var lianyinyu = [
    {//成都
        name: "成都",
        value: [103.9526, 30.7617, 250]
    },
    {//深圳
        name: "深圳",
        value: [113.12244, 23.009505, 250]
    }
];
var disastersDistributionChartOption = {
    tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
        show: true,
        formatter: "{b}"
    },
    legend: {
        orient: "vertical",
        id: 1,
        bottom: "23%",
        x: "left",
        itemWidth: 15,
        data: [
            {
                name: "低温冻害",
                icon: iconDW
            },
            {
                name: "干旱灾害",
                icon: iconGH
            },
            {
                name: "连阴雨灾害",
                icon: iconLYY
            }
        ]
    },
    visualMap: {
        type: "piecewise",
        min: 0,
        // max: 7,
        left: "left",
        top: "bottom",
        showLabel: !0,
        calculable: true,
        // show:false,
        pieces: [{
            gte: 0,
            lte: 0,
            label: "无灾害",
            color: "#22F6FB"
        }, {
            gt: 1,
            lte: 5,
            label: "轻度灾害 (影响产量<10%)",
            color: "#F5FF36"
        }, {
            gt: 5,
            lte: 10,
            label: "中度灾害 (影响产量10%~30%)",
            color: "#FFC343"
        }, {
            gt: 10,
            lte: 30,
            label: "重度灾害 (影响产量>30%)",
            color: "#FF8299"
        }],
        outOfRange: {
            color: "#83A1C7"
        }
    },
    geo: {
        map: "china",
        zoom: 1,
        label: {
            normal: {
                show: false,
                color: "#333"
            },
            emphasis: {
                show: false,
                color: "#fff"
            }
        },
        itemStyle: {
            normal: {
                areaColor: "#83A1C7",
                borderColor: "#fff",
            },
            emphasis: {
                areaColor: "#34ADC2"
            }
        }
    },
    series: [{
        type: "map",
        mapType: "china",
        geoIndex: 0,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: [{
            name: "贵州",
            value: 2,
        }, {
            name: "四川",
            value: 2,
        }, {
            name: "吉林",
            value: 4,
        }, {
            name: "湖南",
            value: 5,
        }, {
            name: "安徽",
            value: 25,
        }, {
            name: "浙江",
            value: 5,
        }, {
            name: "山西",
            value: 6,
        }, {
            name: "福建",
            value: 7,
        }]
    }, {
        name: "低温冻害",
        type: "scatter",
        coordinateSystem: "geo",
        data: diwen,
        symbol: iconDW,
        symbolSize: 15,
        label: {
            normal: {
                show: false,
                formatter: function (params) {
                    // console.log(params);
                    return params.name;
                },
                position: "right",
                color: "#fff",
                fontSize: "8"
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: "#4bbbb2",
                borderWidth: 2,
                borderColor: "#b4dccd"
            }
        }
    },
        {
            name: "干旱灾害",
            type: "scatter",
            coordinateSystem: "geo",
            data: ganhan,
            symbol: iconGH,
            symbolSize: 15,
            label: {
                normal: {
                    show: false,
                    formatter: function (params) {
                        // console.log(params);
                        return params.name;
                    },
                    position: "right",
                    color: "#fff",
                    fontSize: "8"
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#ea6347",
                    borderWidth: 2,
                    borderColor: "#f4b391"
                }
            }
        },
        {
            name: "连阴雨灾害",
            type: "scatter",
            coordinateSystem: "geo",
            data: lianyinyu,
            symbol: iconLYY,
            symbolSize: 15,
            label: {
                normal: {
                    show: false,
                    formatter: function (params) {
                        // console.log(params);
                        return params.name;
                    },
                    position: "right",
                    color: "#fff",
                    fontSize: "8"
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#00ff00",
                    borderWidth: 2,
                    borderColor: "#55E355"
                }
            }
        }]
};
disastersDistributionChart.setOption(disastersDistributionChartOption);

/* 消费偏好 */
// var priceChart = echarts.init(document.getElementById("priceChart"));
// var priceChartOption = {
//     title: {
//         text: "包装",
//         textStyle: {
//             color: "#000000",
//             fontSize: 20,
//             fontWeight: 600
//         },
//         textAlign: "center",
//         //subtext: "(元/公斤)",
//         subtextStyle: {
//             color: "#fff",
//             fontSize: 10
//         },
//         left: "48%",
//         top: "90%",
//         itemGap: 0
//     },
//     tooltip: {
//         trigger: "item",
//         formatter: "{b}:<br/>{c}%<!--元/公斤-->"
//     },
//     color: ["#66CAFC", "#44D27E", "#096CC0", "#FE7809", "#fac114"],
//     series: [{
//         //name: "价位",
//         type: "pie",
//         radius: ["0", "70%"],
//         center: ["50%", "50%"],
//         roseType: "radius",
//         label: {
//             show: true,
//             position: "inside",
//             color: "#fff",
//             /*formatter: function(params) {
//                 return params.value
//             },*/
//             fontSize: 12,
//             fontWeight: 600
//         },
//         labelLine: {
//             show: false
//         },
//         data: [{
//             name: "1斤",
//             value: 0,
//             label: {
//                 show: false
//             }
//         },
//             {
//                 name: "3斤",
//                 value: 0.4,
//                 label: {
//                     show: false
//                 }
//             },
//             {
//                 name: "8斤",
//                 value: 1.74,
//                 label: {
//                     show: false
//                 }
//             },
//
//             {
//                 name: "15斤",
//                 value: 4.01,
//                 label: {
//                     show: false
//                 }
//             },
//             {
//                 name: "10斤",
//                 value: 9.61,
//                 label: {
//                     show: false,
//                 }
//             },
//             {
//                 name: "20斤",
//                 value: 29.37,
//                 label: {
//                     show: false
//                 }
//             },
//             {
//                 name: "5斤",
//                 value: 54.87,
//                 label: {
//                     show: true,
//                     formatter: function (params) { //标签内容
//                         return params.name;
//                     },
//                 }
//             }
//         ]
//     }]
// };
// priceChart.setOption(priceChartOption);

// var diameterChart = echarts.init(document.getElementById("diameterChart"));
// var diameterChartOption = {
//     title: {
//         text: "果径",
//         textStyle: {
//             color: "#000000",
//             fontSize: 20,
//             fontWeight: 600
//         },
//         //subtext: "(毫米)",
//         subtextStyle: {
//             color: "#fff",
//             fontSize: 10
//         },
//         left: "41%",
//         top: "90%",
//         itemGap: 0
//     },
//     tooltip: {
//         trigger: "item",
//         formatter: "{b}<br/>{c}%<!--毫米-->"
//     },
//     /*legend: {
//         data: ["60-65","65-70","70-75","75-80","80-85"],
//         show: false,
//     },*/
//     color: ["#66CAFC", "#44D27E", "#096CC0", "#FE7809", "#fac114"],
//     series: [{
//         //name: "果径",
//         type: "pie",
//         radius: ["0", "70%"],
//         center: ["50%", "50%"],
//         roseType: "radius",
//         label: {
//             show: true,
//             position: "inside",
//             color: "#fff",
//             /*formatter: function(params) {
//                 return params.value
//             },*/
//             fontSize: 12,
//             fontWeight: 600
//         },
//         labelLine: {
//             show: false
//         },
//         data: [{
//             name:"<60",
//             value: 0,
//             label:{show:false}
//         },
//             {
//                 name:"65-70",
//                 value: 0,
//                 label:{show:false}
//             },
//
//             {
//                 name:">95",
//                 value: 0,
//                 label:{show:false}
//             },
//             {
//                 name:"90-95",
//                 value: 2.4,
//                 label:{show:false}
//             },
//             {
//                 name:"75-80",
//                 value: 2.8,
//                 label:{show:false}
//             },
//             {
//                 name:"60-65",
//                 value: 5.2,
//                 label:{show:false}
//             },
//             {
//                 name:"85-90",
//                 value: 7.6,
//                 label:{show:false}
//             },
//             {
//                 name:"80-85",
//                 value: 34.67,
//                 label:{show:false}
//             },
//             {
//                 name:"70-75",
//                 value: 47.33,
//                 label:{
//                     show:true,
//                     formatter:function(params){ //标签内容
//                         return  params.name+ "\n"+" mm";
//                     },
//                 }
//             }
//         ]
//     }]
// };
// diameterChart.setOption(diameterChartOption);
// 基于准备好的容器(这里的容器是id为locationChart的div)，初始化echarts实例
var locationChart = echarts.init(document.getElementById("locationChart"));
var radiusChart = echarts.init(document.getElementById("radiusChart"));

// 圆环图各环节的颜色
var color1 = ['#0AB3FD', '#FF915C', '#FFD116', '#00E5D3', '#CF64B5'];
var color2 = ['#00E99D', '#FFCB16', '#FF915C', '#FE774E', '#CD65B4', '#3E89C7', '#04BBE1'];

// 圆环图各环节的名称和值(系列中各数据项的名称和值)
var data1 = [{
    name: '河北',
    value: 320
}, {
    name: '山东',
    value: 586
}, {
    name: '山西',
    value: 874
}, {
    name: '陕西',
    value: 725
},
    {
        name: '其他',
        value: 456
    }];
var data2 = [{
    name: '(55，60mm)',
    value: 320
}, {
    name: '(60，65mm)',
    value: 586
}, {
    name: '(65,70mm)',
    value: 874
}, {
    name: '(70,75mm)',
    value: 725
},
    {
        name: '(75,80mm)',
        value: 456
    },
    {
        name: '(80,85mm)',
        value: 456
    },
    {
        name: '(85,90mm)',
        value: 456
    }];


// 指定图表的配置项和数据
var apple = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAADBklEQVRYhcXYW6gVdRTH8Y96qOjYxTC7WhFpZYgRSkFQQVA9FEV0RQSDynzrJYpQCxS0sCt0eSpIKro8VC/RjYjIEqwMoyQNQ9TSrhAZ2pUla+TfNLP38XRm94Nh71mzZv7f2f/1X2v997hVz76kj27CWXgYn/dzHo3Gj+CeW/L4DO/jbpwxaIhjiu/n4C58ihcwdVAQ21rsV+Gj4nwpLu4KYlmPa5NxGp7BIpzfFcTLuKPl2iYswfV4Hvd3BRG6BxfhdexK2ycZsOfl+bX4bjQQQ/vh+0YepQ7EcXh3NIOPFGIYF2ImjsWeXKpr8XH6LMcHuAYzcHT6bUmft0YLcTjuxHwc2eLzLR7HTqzEtBa/L/For3hpypiXYFVG/lgqsu0V+KL+zHpgBsCrHQCETseHOKEXxNQE6FIT8U49DEqIRzoGqHQSFjdBHIXLBgQRWtgE0ZYRu1KsuCurZ1dz8za+HyDEuMwj/4B4JY//RUOZbGJaNuNkHJQgX+G3IgntyYIVq+iQtG3Hzzg1z//KfDClWOY7s6bMKF5wAyZlLK4cSkPk/9k5yE/pODs/1+bncNq+ztTd5DM+bb8UPjNzRVQ+1X2/Y11ADmUVDIitODfJQ6/hFMzJ8wOwG1fjvbQ9mGV8TjFA/Bq34bE8vx0raj4BeV+2AftWR9WmHV84DhdTI0HVWrrDaj7V804sbEf4tw7OX2evqsCMKbkRG2s3l8Vre67vsmwfmkelP3Ez1hS2iQ0Qc3Pq96pXy39mEq9uc8jpmtLHJ2rFdLzZ5tCrn1jX41qlTeUbtWhLmRNSE/BHE0Rsbi4YwcD/VRE3T+HeJogfczkNQuvLMcoq+sCAADbXW4YSIpLUEwOAWFo31DurRR0D/IAn+0FESn6oQ4gFTcamzc+tWZTGWlE7XhwpROjyMQbY3atza4OIJue6MQL4FWfjm/2FCD2X+8+IkybtwA1ZMeNNmxRZN9J/7Ftb1W8bGHvPaGrmYVbuPaMNjO1dFJ1qc/w0Ls1/cKKgRUxFPYkX6S38DeDNlV4nEvJQAAAAAElFTkSuQmCC'
var display = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAACA0lEQVRIib3XT6hNURTH8c977vNkouQ/RSn5k5KRAZmIZGTsT8lEiiQTxIyJXlLEQElvoEwYGBhICSl/MlCPx8SAeopI6iW8p/2sU7fj3Ns999x7f7Une699vnuvs/daa/cN37ilA1qC79FaVn8nyDiGb3iBE1jUyqR24NPj4zNz/X1YjzN4j0uYWxU+DdtwFaMYx0dsbTJnAAcxgh3twNNOdgXwLvZjRUlvzcEdHC0arDWYtADD2FIC1ExDmMT5epuiXazB8w6CM6UFbG8GX477WNxhsPiN1zC7CD4D6dLP6wI403ycKoKnzrVdBGc6kF3BDL4wAkUvlDy8px5+OIJHr7SzHr67InSkpP0GDKZ7vjISQxWl6PcT6+JUt6JZtYjHVTWB69FaVnL7sjbBA1VX3B+nrx3tqzB3SrVwWTtKofIrPpWcuyoy4xT8S4XFp50vLWE/noGF299UgJfV63r7BH+C3z2CP8zDf+Bej+C38/Ckyz0Av8WDIngqdV52GX46qpn/4BOR6v50CZx+6818Z30+f4rjXQCPRQqdzA/ky6hzuNBB8OcosceKBosKyCM4WSHyZXqHjXjVyKBRDX4Wm9sMQOncXIxsOdrMsNkD4FHUdHvxuAVoivNXsBqHIn40VaNHQ6YU+dLjIbX0kNgUdX2qcAcD+CEO6zP8amGR/4S/JP5WQ+rdd/YAAAAASUVORK5CYII='
var option1 = {

    // 标题
    title: [{
        text: '产地偏好',
        // top: '5%',
        // left: '3%',
        x:'center',
        y:'bottom',
        textStyle: {
            color: '#000',
            fontSize: 18,
        }
    }],


    // 提示框
    tooltip: {
        show: true,                 // 是否显示提示框
        formatter: '{b} </br> 销量{c}件 </br> 占比{d}%'      // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
    },

    // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
    graphic: {
        // type: 'text',               // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
        // top: 'center',              // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
        // left: 'center',             // 同上
        // style: {
        //     text: '各服装销量对比',       // 文本块文字。可以使用 \n 来换行。[ default: '' ]
        //     fill: '#fff',           // 填充色。
        //     fontSize: 16,           // 字体大小
        //     fontWeight: 'bold'		// 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
        // }

        type: 'image',
        style: {
            image: display,
            width: 30,
            height: 30
        },
        top: 'center',
        left: 'center',
    },

    // 系列列表
    series: [
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['50%', '51%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie3()
        },

        {
            name: '圆环图系列名称',         // 系列名称
            type: 'pie',                    // 系列类型
            center: ['50%', '50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
            radius: ['30%', '45%'],         // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
            hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            color: color1,                   // 圆环图的颜色
            label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
                normal: {
                    show: true,             // 是否显示标签[ default: false ]
                    position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                    formatter: '{b}'  // 标签内容
                }
            },
            labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
                normal: {
                    show: true,             // 是否显示视觉引导线。
                    length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                    length2: 10,            // 视觉引导项第二段的长度。
                    lineStyle: {            // 视觉引导线的样式
                        //color: '#000',
                        //width: 1
                    }
                }
            },
            data: data1                      // 系列中的数据内容数组。
        },
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['24%', '25%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie3()
        },]
};
// 指定图表的配置项和数据
var option2 = {

    // 标题
    title: [{
        text: '果径',
        // top: '5%',
        // left: '3%',
        x: 'center',
        y: 'bottom',
        textStyle: {
            color: '#000',
            fontSize: 18,
        }
    }],

    // 提示框
    tooltip: {
        show: true,                 // 是否显示提示框
        formatter: '{b} </br> 销量{c}件 </br> 占比{d}%'      // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
    },

    // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
    graphic: {
        // type: 'text',               // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
        // top: 'center',              // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
        // left: 'center',             // 同上
        // style: {
        //     text: '各服装销量对比',       // 文本块文字。可以使用 \n 来换行。[ default: '' ]
        //     fill: '#fff',           // 填充色。
        //     fontSize: 16,           // 字体大小
        //     fontWeight: 'bold'		// 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
        // }

        type: 'image',
        style: {
            image: apple,
            width: 30,
            height: 30
        },
        top: 'center',
        left: 'center',
    },

    // 系列列表
    series: [
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['50%', '51%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie3()
        },
        {
            name: '圆环图系列名称',         // 系列名称
            type: 'pie',                    // 系列类型
            center: ['50%', '50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
            radius: ['30%', '45%'],         // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
            hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            color: color2,                   // 圆环图的颜色
            label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
                normal: {
                    show: true,             // 是否显示标签[ default: false ]
                    position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                    formatter: '{b}'  // 标签内容
                }
            },
            labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
                normal: {
                    show: true,             // 是否显示视觉引导线。
                    length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                    length2: 10,            // 视觉引导项第二段的长度。
                    lineStyle: {            // 视觉引导线的样式
                        //color: '#000',
                        //width: 1
                    }
                }
            },
            data: data2                      // 系列中的数据内容数组。
        },
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['24%', '25%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie3()
        },]
};

function _pie3() {
    var dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgb(222,222,223)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}

// 使用刚指定的配置项和数据显示图表
locationChart.setOption(option1)
radiusChart.setOption(option2)
