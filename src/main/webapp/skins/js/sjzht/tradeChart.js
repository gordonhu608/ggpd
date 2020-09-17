$(function () {
    initMap();
})
var isCdXd = '主销区--';

//地图初始化
function initMap() {
    map = new ol.Map({
        target: 'map',
        view: new ol.View({
            center: [60, 25],
            zoom: 3,
            projection: 'EPSG:4326',
            multiWorld: true
        }),
    });
    addBaseLayer();

    //迁徙图图层初始化
    var echartslayer = new ol3Echarts(getOption());
    echartslayer.appendTo(map)
}

function addBaseLayer(){
    var baseLayer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest({
            url : 'http://202.127.45.68/iserver/services/BaseMap_TiledImage/rest/maps/BaseMap_TiledImage',
            projection: 'EPSG:4326',
        }),
        zIndex: 1,
    });
    map.addLayer(baseLayer);
}

function getOption () {
    var BJData = [
        [{name: '北京'}, {name: '美国', value: 95}],
        [{name: '北京'}, {name: '日本', value: 90}],
        [{name: '北京'}, {name: '德国', value: 80}],
        [{name: '北京'}, {name: '巴西', value: 70}],
        [{name: '北京'}, {name: '澳大利亚', value: 60}],
        [{name: '北京'}, {name: '坦桑尼亚', value: 50}],
        [{name: '北京'}, {name: '赞比亚', value: 40}],
        [{name: '北京'}, {name: '赞比亚', value: 20}],
        [{name: '北京'}, {name: '乌克兰', value: 10}]
    ];
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var convertData = function(data) {
        var res = [];
        for(var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = isCdXd=='主销区'?geoCoordMap[dataItem[0].name]:geoCoordMap[dataItem[1].name];
            var toCoord = isCdXd=='主销区'?geoCoordMap[dataItem[1].name]:geoCoordMap[dataItem[0].name];
//					var fromCoord = geoCoordMap[dataItem[0].name];
//					var toCoord = geoCoordMap[dataItem[1].name];
            if(fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[0].value
                });
            }
        }
        return res;
    };
    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [
        ['北京', BJData]
    ].forEach(
        function(item, i) {
            series.push(
                //飞机尾气
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
//					//飞机线
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.4,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function(val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function(dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                },
                {
                    name: item[0] + ' Top10',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                            color: '#fff'
                        }
                    },
//			            symbolSize: function (val) {
//			                return val[2];
//			            },
                    symbolSize: 12,
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[0].name,
                            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                        };
                    })
                }
            );
        });
    return {
        tooltip: {
            trigger: 'item'
        },
        series: series
    };
}
