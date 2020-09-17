var OneMap = new Vue({
    data: { data: [{}] },
    el: "#one-map"
});

$.get(context + "/service/dataOneMap/query", function (res) {
    OneMap.data = res;
    initChart();
});
var collectStructuredChart = echarts.init(document.getElementById('collectStructuredChart'));
var collectUnstructuredChart = echarts.init(document.getElementById('collectUnstructuredChart'));

var resourceUnstructuredChart = echarts.init(document.getElementById('resourceUnstructuredChart'));
var resourceStructuredChart = echarts.init(document.getElementById('resourceStructuredChart'));

var categoryStructuredChart = echarts.init(document.getElementById('categoryStructuredChart'));
var categoryUnstructuredChart = echarts.init(document.getElementById('categoryUnstructuredChart'));

var handleStructuredChart = echarts.init(document.getElementById('handleStructuredChart'));
var handleUnstructuredChart = echarts.init(document.getElementById('handleUnstructuredChart'));

function initChart() {
    /* 数据入库量 */
    var date = [];
    var collection = [];
    var fjg_collection=[]
    for (var i = OneMap.data.length - 2; i >= 0 ; --i) {
        date.push(parseInt(OneMap.data[i].rq.substr(5, 2)) + "月" + parseInt(OneMap.data[i].rq.substr(8)) + "日");
        collection.push(OneMap.data[i].rk);
        fjg_collection.push(OneMap.data[i].fjgzl - OneMap.data[i + 1].fjgzl);
    }
    var collectStructuredChartOption = {
        tooltip: {
            show: true,
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.5)',
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
            left: '3%',
            right: '8%',
            top: '8%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            // boundaryGap: [0, 0.1],
            show: false
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: date,
            splitLine: { show: false },
            axisLabel: {
                textStyle: {
                    color: '#737373',
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgb(0,178,243,1)'
        }, {
            offset: 1,
            color: 'rgb(0,209,226,1)'
        }]),
        series: [
            {
                type: 'bar',
                barCategoryGap: '35%',
                label: {
                    show: true,
                    position: 'right',
                    color: '#008BFB'
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                    }
                },
                data: collection
            }
        ]
    };

    var collectUnStructuredChartOption = {
        tooltip: {
            show: true,
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.5)',
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
            left: '3%',
            right: '8%',
            top: '8%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            // boundaryGap: [0, 0.1],
            show: false
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: date,
            splitLine: { show: false },
            axisLabel: {
                textStyle: {
                    color: '#737373',
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgb(0,178,243,1)'
        }, {
            offset: 1,
            color: 'rgb(0,209,226,1)'
        }]),
        series: [
            {
                type: 'bar',
                barCategoryGap: '35%',
                label: {
                    show: true,
                    position: 'right',
                    color: '#008BFB'
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                    }
                },
                data: fjg_collection
            }
        ]
    };

    collectStructuredChart.setOption(collectStructuredChartOption);

    collectUnstructuredChart.setOption(collectUnStructuredChartOption);

    /* 数据来源 */
    var resourceTitle = '结构化数据';
    var resourceStructuredData = [{
        name: "部内数据",
        value: OneMap.data[0].nb
    },
        {
            name: "外部数据",
            value: OneMap.data[0].wb
        },
        {
            name: "互联网数据",
            value: OneMap.data[0].hlw
        },
        {
            name: "物联网数据",
            value: OneMap.data[0].wlw
        }
    ];
    var formatNumber = function (num) {
        var reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ',');
    }
    var resourceTotal = resourceStructuredData.reduce(function(a, b) {
        return a + b.value
    }, 0);
    var resourceStructuredChartOption = {
        title: [{
            text: '{val|' + Math.ceil(resourceTotal / 10000) + '}{tag|万条}\n{name|' + resourceTitle + '}',
            top: '35%',
            left: 'center',
            textStyle: {
                rich: {
                    val: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#333333',
                    },
                    tag: {
                        fontSize: 12,
                        fontWeight: 'bold',
                    },
                    name: {
                        fontSize: 12,
                        fontWeight: 'normal',
                        color: '#999',
                        padding: [10, 0]
                    }
                }
            }
        }],
        legend: {
            y: 'bottom',
            itemWidth: 12,
            itemHeight: 12,
            icon: 'rect'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + '\n' + formatNumber(params.value) + '\n (' + params.percent + '%)';
            }
        },
        color: ['#00C5D3', '#006BBC', '#FFCA8F', '#FF704B'],
        series: [
            {
                type: 'pie',
                radius: ['43%', '58%'],
                center: ['50%', '43%'],
                startAngle:180, //起始角度
                avoidLabelOverlap: true,
                hoverAnimation: false,
                label: {
                    show: true,
                    color: '#000',
                    lineHeight: 16
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: true
                    },
                },
                labelLine: {
                    show: true,
                    // length: 35
                },
                data: resourceStructuredData
            }
        ]
    };
    resourceStructuredChart.setOption(resourceStructuredChartOption);

    resourceUnstructuredChart.setOption(resourceStructuredChartOption);

    /* 数据分类占比 */
    var categoryTitle = '结构化数据';
    var categoryStructuredData = [
        {
            name: "经济数据",
            value: OneMap.data[0].jj
        },
        {
            name: "气象数据",
            value: OneMap.data[0].qx
        },
        {
            name: "栽培管理",
            value: OneMap.data[0].zpgl
        },
        {
            name: "种质资源",
            value: OneMap.data[0].zzzy
        },
        {
            name: "生产资料",
            value: OneMap.data[0].sczl
        },
        {
            name: "产业支撑",
            value: OneMap.data[0].cyzc
        },
        {
            name: "产后加工",
            value: OneMap.data[0].chjg
        }
    ];
    var categoryTotal = categoryStructuredData.reduce(function(a, b) {
        return a + b.value
    }, 0);
    var categoryStructuredChartOption = {
        title: [{
            text: '{val|' + Math.ceil(categoryTotal / 10000) + '}{tag|万条}\n{name|' + categoryTitle + '}',
            top: '35%',
            left: 'center',
            textStyle: {
                rich: {
                    val: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#333333',
                    },
                    tag: {
                        fontSize: 12,
                        fontWeight: 'bold',
                    },
                    name: {
                        fontSize: 12,
                        fontWeight: 'normal',
                        color: '#999',
                        padding: [10, 0]
                    }
                }
            }
        }],
        legend: {
            y: 'bottom',
            itemWidth: 12,
            itemHeight: 12,
            icon: 'rect'
        },
        tooltip:{
            tragger:'item',
            formatter: function (params) {
                return params.name + '\n' + formatNumber(params.value) + '\n (' + params.percent + '%)';
            }
        },
        color: ['#FF704B', '#00B1EB', '#006BB9', '#00C4D3', '#FFC98E', '#FFA52F', '#00C054'],
        series: [
            {
                type: 'pie',
                radius: ['43%', '58%'],
                center: ['50%', '43%'],
                avoidLabelOverlap: true,
                startAngle:180,
                label: {
                    show: true,
                    color: '#000',
                    lineHeight: 16
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: true
                    },
                },
                labelLine: {
                    show: true,
                    // length: 35
                },
                data: categoryStructuredData
            }
        ]
    };
    categoryStructuredChart.setOption(categoryStructuredChartOption);

    categoryUnstructuredChart.setOption(categoryStructuredChartOption);

    /* 数据处理情况 */
    var fullDate = [];
    var storage = 0;
    var collect = 0;
    var storages = [];
    var collects = [];
    for (var i = OneMap.data.length - 2; i >= 0 ; --i) {
        fullDate.push(OneMap.data[i].rq.replace("-", "/").replace("-", "/"));
        storage = OneMap.data[i].rk;
        collect = OneMap.data[i].sjcj - OneMap.data[i + 1].sjcj;
        storages.push(storage);
        collects.push(collect);
    }
    var handleStructuredChartOption = {
        legend: {
            show: true,
            data: ['采集数量','入库数量'],
            icon: 'rect',
            itemWidth: 12,
            itemHeight: 12
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: fullDate,
            axisLabel: {
                textStyle: {
                    color: '#2A2A2A',
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#EFEEEC'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#2A2A2A',
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        color: ['#66C9F1','#005591'],
        series: [
            {
                name: '入库数量',
                data: storages,
                type: 'line',
                smooth: true,
                symbolSize: 0
            },
            {
                name: '采集数量',
                data: collects,
                type: 'line',
                smooth: true,
                symbolSize: 0
            }
        ]
    };
    handleStructuredChart.setOption(handleStructuredChartOption);

    handleUnstructuredChart.setOption(handleStructuredChartOption);
}
