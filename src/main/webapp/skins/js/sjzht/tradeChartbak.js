$(function () {
    initMap();

    $('.toggle_btn').on('click', function () {
        if($(this).hasClass('hide')) {
            $('.orchard_info_content').animate({'right' : '0'}, 500);
            $(this).removeClass('hide');
        }else {
            $('.orchard_info_content').animate({'right' : '-3.41rem'}, 500);
            $(this).addClass('hide');
        }
    });

    // 下拉显示
    $("#checked-category").on('click', function(){
        $(".choose_category ul").show();
    });
    // 下拉选择
    $(".choose_category ul").on('click', 'li', function(){
        $("#checked-category").text($(this).text());
        params.tradeProduct = $(this).attr("data-type");
        params.tradeProductCode = $(this).attr("data-code");
        swtichDir();
        $('.choose_category ul').hide();
    });

    $(document).mouseup(function(e) {
        var locationUL = $('.choose_category ul');
        if(!locationUL.is(e.target) && locationUL.has(e.target).length === 0) {
            locationUL.hide();
        }
    });

    $('.btn_tabs > div').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
        isCdXd = $(this).text();
        params.tradeFlow = $(this).attr("data-vlaue");
        swtichDir();
    });
    createTimeList();
    createTimeline(timeList, '#mapTimeline', ['#year', '#year1'], initSelectYear);

    var timer = null;
    window.onresize = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            createTimeline(timeList, '#mapTimeline', ['#year', '#year1'], initSelectYear);
        }, 800);
    };

    swtichDir();

})
var isCdXd = '出口';
var echartslayer;
var timeList = [
    { name: '', time: '1998' },
    { name: '', time: '1999' },
    { name: '', time: '2000' },
    { name: '', time: '2001' },
    { name: '', time: '2002' },
    { name: '', time: '2003' },
    { name: '', time: '2004' },
    { name: '', time: '2005' },
    { name: '', time: '2006' },
    { name: '', time: '2007' },
    { name: '', time: '2008' },
    { name: '', time: '2009' },
    { name: '', time: '2010' },
    { name: '', time: '2011' },
    { name: '', time: '2012' },
    { name: '', time: '2013' },
    { name: '', time: '2014' },
    { name: '', time: '2015' },
    { name: '', time: '2016' },
    { name: '', time: '2017' },
    { name: '', time: '2018' },
    { name: '', time: '2019' },
    { name: '', time: '2020' }
];
//地图初始化
function initMap() {
    map = new ol.Map({
        target: 'map',
        view: new ol.View({
            center: [0, 0],
            zoom: 2,
            maxZoom:2,
            minZoom:2,
            projection: 'EPSG:4326',
            multiWorld: true
        }),
    });
    addBaseLayer();

    echartslayer = new ol3Echarts(getOption());
    echartslayer.appendTo(map);

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

var BJData = [
    [{name: '中国'}, {name: '美国', value: 95}],
    [{name: '中国'}, {name: '日本', value: 90}],
    [{name: '中国'}, {name: '德国', value: 80}],
    [{name: '中国'}, {name: '巴西', value: 70}],
    [{name: '中国'}, {name: '澳大利亚', value: 60}],
    [{name: '中国'}, {name: '坦桑尼亚', value: 50}],
    [{name: '中国'}, {name: '赞比亚', value: 40}],
    [{name: '中国'}, {name: '赞比亚', value: 20}],
    [{name: '中国'}, {name: '乌克兰', value: 10}]
];
function getOption () {

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var convertData = function(data) {
        var res = [];
        for(var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = isCdXd=='出口'?geoCoordMap[dataItem[0].name]:geoCoordMap[dataItem[1].name];
            var toCoord = isCdXd=='出口'?geoCoordMap[dataItem[1].name]:geoCoordMap[dataItem[0].name];
            if(fromCoord && toCoord) {
                res.push({
                    fromName:  isCdXd=='出口'?dataItem[0].name:dataItem[1].name,
                    toName: isCdXd=='出口'?dataItem[1].name:dataItem[0].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };
    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var emphasisLineColor = isCdXd =='出口'?"blue":"red";
    var normalLineColor = isCdXd =='出口'?'cyan':'yellow';
    var series = [];
    [
        ['中国', BJData]
    ].forEach(
        function(item, i) {
            series.push(
                //飞机尾气
                {
                    name: 'top10',
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
					//飞机线
                {
                    name: isCdXd,
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
                            color: normalLineColor,
                            width: 2,
                            opacity: 0.4,
                            curveness: 0.2
                        },
                        emphasis: {
                            color: emphasisLineColor
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: isCdXd,
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
                    // symbolSize: function(val) {
                    //     return val[2] / 8;
                    // },
                    symbolSize: 12,
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
                    name: isCdXd,
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
            trigger: "item",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#ddd",
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines"&&params.seriesName!='top10') {
                    if(params.seriesName === "进口"){
                        return '<div style="padding:10px;">' +
                            '<div style="color:red;font-size:20px;margin-bottom:5px;">' + params.data.fromName + "→中国</div>" +
                            "进口量: " + params.data.value + "吨</div>";
                    }
                    if(params.seriesName === "出口"){
                        return '<div style="padding:10px;">' +
                            '<div style="color:#0080B9;font-size:20px;margin-bottom:5px;">中国→' + params.data.toName + "</div>" +
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
        series: series
    };
}
var params = {
    year:'2018',
    tradeFlow : 'export',
    tradeProduct : 0,
    tradeProductCode : '08081000'
};
function swtichDir(){
    var url = context + "/service/greenEnterprise/getTradeFlowData";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        data: JSON.stringify(params),
        success: function (result) {
            BJData = [];
            var maxLength =  10>=result.length?result.length:10;
            for(var i = 0; i < maxLength;i++){
                var item = result[i];
                var dataItem =  [{name: '中国'}, {name: item.GJMC, value: isCdXd =='出口'?item.cksl:item.jksl}];
                BJData.push(dataItem);
            }
            echartslayer.setChartOptions(getOption());
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {}
    });

}

var initSelectYear = new Date().getFullYear();
//根据当前时间创建时间轴数组 数据起始于2011年
function createTimeList() {
    var date = new Date();
    var currentYear = date.getFullYear();
    timeList = []
    //临时修改
    for(var i = '2011'; i <= currentYear; i++){
        var timeLineItem = { name: '', time: i };
        timeList.push(timeLineItem);
    }
    initSelectYear = timeList.length - 1;
    params.year = timeList[initSelectYear].time;
}
/*
参数对应：
时间轴数据, 时间轴外容器, 时间轴对应要刷新的图表名称(与setChartOption方法中的名称一致), 时间轴要改变的标题名, 默认选中哪个时间
*/
function createTimeline(data, ele, titleTime, activeIndex) {
    var html = '';
    $.each(data, function (i, item) {
        if (i == 0 || i == data.length - 1) {
            html += '<li><div class="half_line"></div><div class="time_point"></div><div class="time_name">' + item.time + '</div></li>';
        } else {
            html += '<li><div class="time_point"></div><div class="time_name">' + item.time + '</div></li>';
        }
    });
    $(ele + ' ul').html(html);
    $(ele + ' ul li').eq(activeIndex).children('.time_point').addClass('active').siblings('li').removeClass('active');
    $(ele + ' ul').css('width', $(ele + ' ul li').width() * (data.length + 1) + 'px');
    pointMove($(ele + ' ul li').eq(activeIndex).children('.time_point'));
    $(ele + ' .time_point').on('click', function () {
        $(this).addClass('active').parent().siblings('li').children('.time_point').removeClass('active');

        pointMove($(this));

        var _this = this;

        var timeName = $(_this).siblings('.time_name').text();
        timeName = timeName.indexOf("-") != -1 ? timeName.split('-')[0] + '年' + timeName.split('-')[1] + '月' : timeName + '年';

        // 改变标题时间
        $.each(titleTime, function (i, item) {
            var timeName = $(_this).siblings('.time_name').text();
            timeName = timeName.indexOf("-") != -1 ? timeName.split('-')[0] + '年' + timeName.split('-')[1] + '月' : timeName + '年';
            $(item).text(timeName);

            params.year = $(_this).siblings('.time_name').text();
            swtichDir();
        });

        // TODO: 更新图表数据

    });
}
/* 时间轴移动 */
function pointMove(point) {
    var w = $(point).parent().width();
    var ind = $(point).parent().index();
    var ppw = $(point).parent().parent().parent().width();
    var pw = $(point).parent().parent().width();
    var left = -w * ind + ppw / 2;
//  if (left < ppw - pw)
//      left = ppw - pw;
    if (left <= ppw - pw + w)
        left = ppw - pw + w;
    else if (left > 0)
        left = 0;
    $(point).parent().parent().animate({ 'left': left + 'px' }, 500);
}


