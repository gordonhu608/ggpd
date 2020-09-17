$(document).ready(function () {
    $('.btn_tabs>div').on('click', function () {
        $(this).addClass("active").siblings().removeClass('active');
        getBarChartData($(this).data('type'), $(this).data('code'));
        changePriceMapData($(this).data('type'));
    })
});

function changePriceMapData(dataType){
    $("#priceDataFrame")[0].src=context + "/jsp/sjzht/dataMap.jsp?mapType=1&dateType="+dataType;
}

/**
 * 获取苹果价格top10
 * @param dataType
 * @param typeCode
 */
function getBarChartData(dataType, typeCode) {
    var url = context + "/service/appleTradePrice/getAppleTradePriceTop";
    var param = {dateType: dataType, areaName: '', typeCode: typeCode};
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(param),
        success: function (result) {
            initBarCharts(result)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
}

/**
 * 初始化柱状图
 * @param data
 */
function initBarCharts(data) {
    var category = [];
    var barData = [];
    var eTitleText = '';

    for (var i = 0; i < data.length; i++) {
        category.push(data[i].name);
        barData.push(data[i].value);
    }
    var myChart = echarts.init(document.getElementById('priceSort'));
    var option = {
        title: {
            text: eTitleText,
            textStyle: {
                fontWeight: 'normal', //标题颜色
                color: '#FFFAE8'
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '5%',
            left: '10%',
            right: '15%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {

            type: 'value',
            axisLabel: {
                color: '#fff',
                textStyle: {
                    fontSize: 12
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)',
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            // max : function(value) {
            // 	return value.max * 1.2;
            // }

        },
        yAxis: {
            type: 'category',
            data: category,
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#81889B',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: '#fff', //更改坐标轴文字颜色
                    fontSize: 14
                    //更改坐标轴文字大小
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            offset: 10,
            nameTextStyle: {
                fontSize: 16
            }
        },
        series: [{
            name: '价格',
            type: 'bar',
            data: barData,
            // barCategoryGap: '30%',
            barWidth: '40%',
            // barGap : '10%',
            smooth: true,
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    label: {show: true, position: 'right', formatter: '{c}', color: 'white'},
                    barBorderRadius: 7,
                    color: "#FF7C52"
                }
            }
        }]
    };
    option.yAxis.data = category;
    option.series[0].data = barData;
    myChart.setOption(option);
}


//feature property
var mapData = [];
//地图主体设为全局变量
var mapObj;
//县界图层
var sourceXianUrl = context + "/skins/js/ol/china.geojson";
var sourceXianparam = {
    projection: 'EPSG:4326',
    url: sourceXianUrl,
    format: new ol.format.GeoJSON()
};
var sourceXian = new ol.source.Vector(sourceXianparam);
var vectorXian = new ol.layer.Vector({
    title: "县界",
    source: sourceXian,
    zIndex: 100,
    opacity: 0.8,
    visible: true
});

function initMap() {
    //地图主体
    mapObj = new Object();
    var target = document.getElementById('priceDistribute');
    var map = new ol.Map({
        target: target,
        view: new ol.View({
            center: [114.35, 35.49],
            zoom: 7,
            projection: 'EPSG:4326',
            multiWorld: true
        }),
    });
    mapObj.map = map;
    // 添加图层天地图影像地图(含注记)
    var baseLayer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest({
            url: baseLayerUrl,
            wrapX: true
        }),
        projection: 'EPSG:4326'
    });
    map.addLayer(baseLayer);
    //添加自定义县界图层
    map.addLayer(vectorXian);
}
