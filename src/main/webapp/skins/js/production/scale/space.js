//页面初始化
var currentTabid = '3';
var untiControl = '112716';
var boundaryControl = '中国';
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
var initSelectYear = '2018';
window.onload = function () {



    initMap();
    createTimeList();
    initSelect();
    createTimeline(timeList, '#mapTimeline', ['#year', '#year1'], initSelectYear);
    //提示信息
    $(".chart_info").popover({
        placement: "right",
        content: "数据起始于1982年，级别为县级，来源于农业农村部。",
        trigger: "hover"
    });

    echartsFunction();

    $('.bar_toggle i').click(function () {

        // $('#product-rank').show();
        $(this).toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        $('.rank_content').toggleClass('height');
        $('.product-rank').toggle();
        myChart.resize();
        //this.myChart3.resize();
    });

    $('.bar_toggle i').click();

    $('.bar_toggle i').click();

    var timer = null;
    window.onresize = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            createTimeline(timeList, '#mapTimeline', ['#year', '#year1'], initSelectYear);
        }, 800);
    };
}

//feature property
var mapData = [];
//地图主体设为全局变量
var mapObj;
//县界图层
var sourceXianUrl = context+"/skins/js/ol/china.geojson";
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
function initMap(){
    //地图主体
    mapObj = new Object();
    var target = document.getElementById('map');
    var map = new ol.Map({
        target: target,
        view: new ol.View({
            center: [114.35,35.49],
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

    //openlayrs3.x 4.x 6.x
    //popup弹出框,使用overlay实现
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');
    var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度. 单位为毫秒（ms）
        }
    });

    //关闭弹出框
    closer.onclick = function() {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };

    //左键单击弹出popup事件
    map.addEventListener('click', function(evt) {
        var coordinate = evt.coordinate;
        var feature = map.forEachFeatureAtPixel(map.getPixelFromCoordinate(evt.coordinate), function(feature) {
            return feature
        });
//        content.innerHTML = '<p>名称：</p><code>' + feature.getProperties().name + '</code></br>'+
//            '<p>产量：</p><code>' + feature.getProperties().num + '</code></br>';
        var degree = feature.getProperties().degree;
        var degreeText = '';
        if(degree.substring(0,1) == '-'){
            degreeText = '减幅：';
            degree = degree.substring(1);
        }else if(degree.substring(0,1) == '.'){
            degreeText = '增幅：';
            degree = '0' + degree;
        }else{
            degreeText = '增幅：';
        }
        var productUnit = untiControl=='121689'?'（万亩）':'（万吨）';
        content.innerHTML = '<div class="info-content"><label>名称: </label><label>' + feature.getProperties().name + '</label></div>';
        content.innerHTML += '<div class="info-content"><label>' + document.getElementById(currentTabid).innerHTML + ': </label><label>' + feature.getProperties().num + productUnit +'</label></div>';
        content.innerHTML += '<div class="info-content"><label>'+degreeText+'</label><label>' + degree + '</label></div>';
        overlay.setPosition(coordinate);
        map.addOverlay(overlay);
    });

}

//根据当前时间创建时间轴数组 数据起始于1982年
function createTimeList() {
    var date = new Date();
    var currentYear = date.getFullYear();
    timeList = []
    //临时修改
    for(var i = '1982'; i <= currentYear-2; i++){
        var timeLineItem = { name: '', time: i };
        timeList.push(timeLineItem);
    }
    initSelectYear = timeList.length - 1;
    year = timeList[initSelectYear].time;
    $('#year').text(year + '年');
    $('#year1').text(year + '年');
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

        // 改变标题时间
        $.each(titleTime, function (i, item) {
            var timeName = $(_this).siblings('.time_name').text();
            year = $(_this).siblings('.time_name').text();
            getAppleOutputMessage();
            timeName = timeName.indexOf("-") != -1 ? timeName.split('-')[0] + '年' + timeName.split('-')[1] + '月' : timeName + '年';
            $(item).text(timeName);
        });

        // TODO: 更新图表数据

    });
};
/* 时间轴移动 */
function pointMove(point) {
    var w = $(point).parent().width();
    var ind = $(point).parent().index();
    var ppw = $(point).parent().parent().parent().width();
    var pw = $(point).parent().parent().width();
    var left = -w * ind + ppw / 2;
    if (left <= ppw - pw + w)
        left = ppw - pw + w;
    else if (left > 0)
        left = 0;
    $(point).parent().parent().animate({ 'left': left + 'px' }, 500);
};


//查询条件初始状态
function initSelect(){
    var select1 = document.getElementById('0');
    var select2 = document.getElementById('2');
    select(select1,0);
    select(select2,2);
};
var controls = new Array(4);
for(var i = 0; i < controls.length; i++){
    controls[i] = 0;
}

//按钮选中事件
function select(element,id){
    controls[id]++;
    //取消选中
    if(controls[id]%2==0){
        //element.style.backgroundColor = '"rgba(9,34,111,0.6)"';
        $("#"+id).removeClass('active');
    }
    //选中
    if(controls[id]%2==1){
        if(id == '0'){
            //document.getElementById('1').style.backgroundColor = '"rgba(9,34,111,0.6)"';
            $("#1").removeClass('active');
            $("#0").addClass('active');
            controls[id]++;
            boundaryControl = '中国';
        }
        if(id == '1'){
            //展开echarts图表
            $('.bar_toggle i').click();
            //document.getElementById('0').style.backgroundColor = '"rgba(9,34,111,0.6)"';
            $("#0").removeClass('active');
            $("#1").addClass('active');
            controls[id]++;
            boundaryControl = '全球';
        }
        if(id == '2'){
            currentTabid = '2';
            //document.getElementById('3').style.backgroundColor = '"rgba(9,34,111,0.6)"';
            $("#3").removeClass('active');
            $("#2").addClass('active');
            controls[id]++;
            untiControl = '121689';
        }
        if(id == '3'){
            currentTabid = '3';
            //document.getElementById('2').style.backgroundColor = '"rgba(9,34,111,0.6)"';
            $("#2").removeClass('active');
            $("#3").addClass('active');
            controls[id]++;
            untiControl = '112716';
        }
        element.style.backgroundColor = 'rgba(39, 98, 186, 0.2); ';
        if(element.textContent =='中国'){
            // initMap();
            //地图缩放为中国范围
            var viewChina = new ol.View({
                // center: [110.3, 37.9],
                center: [114.35,35.49],
                zoom: 6,
                projection: 'EPSG:4326',
                multiWorld: true
            });
            mapObj.map.setView(viewChina);
            if(worldChart){
                worldChart.dispose();
            }
            document.getElementById('mapWorld').style.display="none";
            $('#map').show();
            $('#map-legend').show();
            getAppleOutputMessage(params);
        }
        if(element.textContent == '种植面积'){
            getAppleOutputMessage(params);
        }
        if(element.textContent == '产量'){
            getAppleOutputMessage(params);
        }
        if(element.textContent =='全球'){
            getAppleOutputMessage(params);
            switchWorld();
        }
    }
}


var category,barData,eTitleText,myChart;
//产量排名
function echartsFunction(){
     myChart = echarts.init(document.getElementById('rank'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '10%',
            right: '15%',
            top: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            show: false,
            type: 'value',
            splitLine: { show: false },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: category,
            splitLine: { show: false },
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: '#0080B9',  //更改坐标轴文字颜色
                    fontSize: 14      //更改坐标轴文字大小
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
                fontSize: 15
            }
        },
        series: [
            {
                name: '数量',
                type: 'bar',
                data: barData,
                barWidth: 14,
                barGap: 10,
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'right', //数值显示在右侧
                        formatter: '{c}',
                        color:'white',
                    }
                },
                itemStyle: {
                    emphasis: {
                        barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 7,
                        color: "#FF7C52"
                    }
                }
            }
        ]
    };
    myChart.setOption(option,true);
    $(window).resize(function () {
    	myChart.resize();
    })
};

//请求产量/种植面积数据
var params = {};
var year;
function getAppleOutputMessage(params){
    params = {
        year : year,
        unit : untiControl,
        boundary : boundaryControl
    }
    console.info('params'+JSON.stringify(params));
    $('#countryNum').text('');
    if(boundaryControl == '中国'){
        var url = jcyjContext + "/service/api/production/getAppleOutputMessage";
        var urlTop = jcyjContext + "/service/api/production/getAppleOutputMessageTop";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: url,
            data:JSON.stringify(params),
            success: function(result) {
                console.info(result);
                if(result&&result.length > 0){
                    // //取前十条数据组合top10
                    // category = [];
                    // barData = [];
                    // untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // // untiControl=='121689'?eTitleText = '种植面积（万亩）':eTitleText = '产量排名（万吨）';
                    // for(var i = 1; i <= 10; i++){
                    //     var item = result[i];
                    //     category.push(item.AREA_NAME);
                    //     untiControl=='121689'?barData.push((item.SUM_DATA*1.5).toFixed(2)):barData.push(item.SUM_DATA);
                    // }
                    // //数组排序、
                    // category = category.sort(function(a, b){return  a - b});
                    // barData = barData.sort(function(a, b){return  a - b});
                    // // category = category.reverse();
                    // // barData = barData.reverse();
                    //组合地图数据
                    var sum = 0;
                    for(var i = 1; i < result.length; i++){
                        var item = result[i];
                        var featureData = {
                            name: item.AREA_NAME,
                            num: item.SUM_DATA,
                            degree: item.DEGREE
                        }
                        mapData.push(featureData);
                        sum = sum + item.SUM_DATA;
                    }
                    // untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // untiControl=='121689'?eTitleText = '种植面积（万亩）':eTitleText = '产量排名（万吨）';
                    var contentText = untiControl=='121689'?'种植面积'+(1.5*result[0].SUM_DATA).toFixed(2)+'万亩':'产量'+result[0].SUM_DATA.toFixed(2)+'万吨';
                    // $('#countryNum').text('苹果主产县'+(result.length - 1)+'个');
                    $('#boundry').text('全国');
                    $('#boundry1').text('全国');
                    $('#unitText').text(contentText);
                    // initMap();
                    //echartsFunction();
                    //mapObj.map.vectorXian.getSource().changed();
                    refreshVector();
                }else{
                    category = [];
                    barData = [];
                    // untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // untiControl=='121689'?eTitleText = '种植面积（万亩）':eTitleText = '产量排名（万吨）';
                    var contentText = untiControl=='121689'?'种植面积--万亩':'产量--万吨';
                    $('#unitText').text(contentText);
                    mapData = [];
                    //echartsFunction();
                    //mapObj.map.vectorXian.getSource().changed();
                    refreshVector();
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {}
        });
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: urlTop,
            data:JSON.stringify(params),
            success: function(result) {
                console.info(result);
                if(result&&result.length > 0){
                    //取前十条数据组合top10
                    category = [];
                    barData = [];
                    untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // untiControl=='121689'?eTitleText = '种植面积（万亩）':eTitleText = '产量排名（万吨）';
                    var length=result.length<10?result.length:10;
                    for(var i = 0; i < length; i++){
                        var item = result[i];
                        category.push(item.DQMC);
                        untiControl=='121689'?barData.push((item.ZHSJ*1.5).toFixed(2)):barData.push(item.ZHSJ);
                    }
                    //数组排序、
                    category = category.reverse();
                    barData = barData.reverse();
                    $('#countryNum').text('苹果生产县'+result.length+'个');
                    untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // var contentText = untiControl=='121689'?'种植面积'+(1.5*result[0].SUM_DATA).toFixed(2)+'万亩':'产量'+result[0].SUM_DATA.toFixed(2)+'万吨';
                    // // $('#countryNum').text('苹果主产县'+(result.length - 1)+'个');
                    // $('#boundry').text('全国');
                    // $('#boundry1').text('全国');
                    // $('#unitText').text(contentText);
                    echartsFunction();
                }else{
                    category = [];
                    barData = [];
                    untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // // untiControl=='121689'?eTitleText = '种植面积（万亩）':eTitleText = '产量排名（万吨）';
                    // var contentText = untiControl=='121689'?'种植面积--万亩':'产量--万吨';
                    // $('#unitText').text(contentText);
                    // mapData = [];
                    echartsFunction();
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {}
        });
    }
    if(boundaryControl == '全球'){
        if(untiControl == '121689'){
            //查询种植面积
            var urlworld = jcyjContext + "/service/api/production/getWorldAppleAreaMessage";
            params.unit = '收获面积';
        }else{
            //查询产量
            var urlworld = jcyjContext + "/service/api/production/getWorldAppleOutputMessage";
            params.unit = '生产';
        }
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: urlworld,
            data:JSON.stringify(params),
            success: function(result) {
                if(result&&result.length > 0){
                    //取前十条数据组合top10
                    category = [];
                    barData = [];
                    untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // untiControl=='121689'?eTitleText = '种植面积（万亩）':eTitleText = '产量排名（万吨）';
                    for(var i = 1; i <= 10; i++){
                        var item = result[i];
                        category.push(item.GJMC);
                        barData.push(item.SZ);
                    }
                    category = category.reverse();
                    barData = barData.reverse();
                    //组合地图数据
                    var sum = 0;
                    worldData = [];
                    for(var i = 1; i < result.length; i++){
                        var item = result[i];
                        var featureData = {
                            name: item.GJMC,
                            value: item.SZ,
                        }
                        worldData.push(featureData);
                        sum = sum + item.SZ;
                    }
                    untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // untiControl=='121689'?eTitleText = '种植面积（万亩）':eTitleText = '产量排名（万吨）';
                    var contentText = untiControl=='121689'?'种植面积'+result[0].SZ.toFixed(2)+'万亩':'产量'+result[0].SZ.toFixed(2)+'万吨';
                    $('#boundry').text('全球');
                    $('#boundry1').text('全球');
                    $('#unitText').text(contentText);
                    upateWorldMap();
                    echartsFunction();
                }else{
                    category = [];
                    barData = [];
                    untiControl=='121689'?$('#clpm').text('种植面积（万亩）'):$('#clpm').text('产量排名（万吨）');
                    // untiControl=='121689'?eTitleText = '种植面积（万亩）':eTitleText = '产量排名（万吨）';
                    var contentText = untiControl=='121689'?'种植面积--万亩':'产量--万吨';
                    $('#unitText').text(contentText);
                    worldData=[];
                    mapData = [];
                    upateWorldMap();
                    echartsFunction();
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {}
        });
    }

}

//刷新图层数据
function refreshVector(){
    mapObj.map.removeLayer(vectorXian);
    vectorXian = new ol.layer.Vector({
        title: "县界",
        source: sourceXian,
        zIndex: 100,
        opacity: 0.8,
        style: function(feature){
            var geometry=feature.getGeometry();
            var county = feature.getProperties().name;
            feature.setProperties({'num':'--'});
            feature.setProperties({'degree':'--'})
            //测试数据
            for(var i = 0; i < mapData.length; i++){
                if(county==mapData[i].name){
                    feature.setProperties({'num':mapData[i].num});
                    feature.setProperties({'degree':mapData[i].degree});
                }
            }
            var styles = null
            //数据分级渲染
            if(feature.getProperties().num >= 50){
                styles= new ol.style.Style({
                    fill:new ol.style.Fill({
                        // color:'rbg(178,92,12)'
                        color:'#F14F00'
                    }),
                    stroke: new ol.style.Stroke({
                        // color: 'rbg(178,92,12)',
                        color:'#008DC7',
                        width: 0.3
                    })
                })
            }else if(feature.getProperties().num >= 30){
                styles= new ol.style.Style({
                    fill:new ol.style.Fill({
                        color:'#F68500'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#008DC7',
                        width: 0.3
                    })
                })
            }else if(feature.getProperties().num >= 10){
                styles= new ol.style.Style({
                    fill:new ol.style.Fill({
                        color:'#CFA40D'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#008DC7',
                        width: 0.3
                    })
                })
            }else if(feature.getProperties().num >= 5){
                styles= new ol.style.Style({
                    fill:new ol.style.Fill({
                        color:'#C4E228'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#008DC7',
                        width: 0.3
                    })
                })
            }else if(feature.getProperties().num >= 1){
                styles= new ol.style.Style({
                    fill:new ol.style.Fill({
                        color:'#FEFF2C'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#008DC7',
                        width: 0.3
                    })
                })
            }else if(feature.getProperties().num >= 0.5){
                styles= new ol.style.Style({
                    fill:new ol.style.Fill({
                        color:'#0073B3'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#008DC7',
                        width: 0.3
                    })
                })
            }
            else{
                styles= new ol.style.Style({
                    fill:new ol.style.Fill({
                        // color:'#008DC7',
                        color: 'rgba(0,0,0,0)',
                    }),
                    stroke: new ol.style.Stroke({
                        // color:'#008DC7',
                        color: 'rgba(0,0,0,0)',
                        width: 1
                    })
                })
            }
            return [styles];
        },
        visible:true
    });
    mapObj.map.addLayer(vectorXian);
}

//分级颜色渲染
var max,min;
function randerByClass(e) {
    var min_max = max - min;//极差
    var R = 178,//色值差
        G = 98,
        B = 12,
        R_min = 18,
        G_min = 139,
        B_min = 237;
    var RED = (R / min_max * e.num) + R_min,
        GREEN = (G / min_max * e.num) + G_min,
        BLUE = (B / min_max * e.num) + B_min;
    return "rgb(" + RED + ',' + GREEN + ',' + BLUE + ")";
}

//var timeList = [];
//时间轴 - 旧版
function timeAxisFunction(){
    var oTimeAxiosFun = null;
    getTimeAxias();
    var param = {
        data: timeList,
        id: 'cxTime',
        width: '80px',
        index: 22,
        then: function(data) {
            $("#year").html(data.time);
            $("#year1").html(data.time);
            year = data.time;
            getAppleOutputMessage();
        }
    }
    oTimeAxiosFun = new oTimeAxios(param);
}

//请求时间轴数据
// function getTimeAxias(params){
//     params = {
//         unit : untiControl,
//         boundary : boundaryControl
//     }
//     console.info('params'+JSON.stringify(params));
//     var url = context + "/service/SpaceDistribution/getTimeAxaisMessage";
//     $.ajax({
//         type: "post",
//         contentType: "application/json;charset=UTF-8",
//         url: url,
//         async:false,
//         data:JSON.stringify(params),
//         success: function(result) {
//             var minTime = result[0].TIME_ID
//             var myDate = new Date();
//             var maxTime = myDate.getFullYear() + 1;
//             while (minTime <= maxTime){
//                 var timeListItem = {
//                     name:'',
//                     time:minTime++
//                 };
//                 timeList.push(timeListItem);
//             }
//         }
//     })
// }

//中国切换为全球
var nameMap = {
    'Singapore Rep.':'新加坡',
    'Dominican Rep.':'多米尼加',
    'Palestine':'巴勒斯坦',
    'Bahamas':'巴哈马',
    'Timor-Leste':'东帝汶',
    'Afghanistan':'阿富汗',
    'Guinea-Bissau':'几内亚比绍',
    "Côte d'Ivoire":'科特迪瓦',
    'Siachen Glacier':'锡亚琴冰川',
    "Br. Indian Ocean Ter.":'英属印度洋领土',
    'Angola':'安哥拉',
    'Albania':'阿尔巴尼亚',
    'United Arab Emirates':'阿联酋',
    'Argentina':'阿根廷',
    'Armenia':'亚美尼亚',
    'French Southern and Antarctic Lands':'法属南半球和南极领地',
    'Australia':'澳大利亚',
    'Austria':'奥地利',
    'Azerbaijan':'阿塞拜疆',
    'Burundi':'布隆迪',
    'Belgium':'比利时',
    'Benin':'贝宁',
    'Burkina Faso':'布基纳法索',
    'Bangladesh':'孟加拉国',
    'Bulgaria':'保加利亚',
    'The Bahamas':'巴哈马',
    'Bosnia and Herz.':'波斯尼亚和黑塞哥维那',
    'Belarus':'白俄罗斯',
    'Belize':'伯利兹',
    'Bermuda':'百慕大',
    'Bolivia':'玻利维亚',
    'Brazil':'巴西',
    'Brunei':'文莱',
    'Bhutan':'不丹',
    'Botswana':'博茨瓦纳',
    'Central African Rep.':'中非',
    'Canada':'加拿大',
    'Switzerland':'瑞士',
    'Chile':'智利',
    'China':'中国',
    'Ivory Coast':'象牙海岸',
    'Cameroon':'喀麦隆',
    'Dem. Rep. Congo':'刚果民主共和国',
    'Congo':'刚果',
    'Colombia':'哥伦比亚',
    'Costa Rica':'哥斯达黎加',
    'Cuba':'古巴',
    'N. Cyprus':'北塞浦路斯',
    'Cyprus':'塞浦路斯',
    'Czech Rep.':'捷克',
    'Germany':'德国',
    'Djibouti':'吉布提',
    'Denmark':'丹麦',
    'Algeria':'阿尔及利亚',
    'Ecuador':'厄瓜多尔',
    'Egypt':'埃及',
    'Eritrea':'厄立特里亚',
    'Spain':'西班牙',
    'Estonia':'爱沙尼亚',
    'Ethiopia':'埃塞俄比亚',
    'Finland':'芬兰',
    'Fiji':'斐',
    'Falkland Islands':'福克兰群岛',
    'France':'法国',
    'Gabon':'加蓬',
    'United Kingdom':'英国',
    'Georgia':'格鲁吉亚',
    'Ghana':'加纳',
    'Guinea':'几内亚',
    'Gambia':'冈比亚',
    'Guinea Bissau':'几内亚比绍',
    'Eq. Guinea':'赤道几内亚',
    'Greece':'希腊',
    'Greenland':'格陵兰',
    'Guatemala':'危地马拉',
    'French Guiana':'法属圭亚那',
    'Guyana':'圭亚那',
    'Honduras':'洪都拉斯',
    'Croatia':'克罗地亚',
    'Haiti':'海地',
    'Hungary':'匈牙利',
    'Indonesia':'印度尼西亚',
    'India':'印度',
    'Ireland':'爱尔兰',
    'Iran':'伊朗',
    'Iraq':'伊拉克',
    'Iceland':'冰岛',
    'Israel':'以色列',
    'Italy':'意大利',
    'Jamaica':'牙买加',
    'Jordan':'约旦',
    'Japan':'日本',
    'Kazakhstan':'哈萨克斯坦',
    'Kenya':'肯尼亚',
    'Kyrgyzstan':'吉尔吉斯斯坦',
    'Cambodia':'柬埔寨',
    'Korea':'韩国',
    'Kosovo':'科索沃',
    'Kuwait':'科威特',
    'Lao PDR':'老挝',
    'Lebanon':'黎巴嫩',
    'Liberia':'利比里亚',
    'Libya':'利比亚',
    'Sri Lanka':'斯里兰卡',
    'Lesotho':'莱索托',
    'Lithuania':'立陶宛',
    'Luxembourg':'卢森堡',
    'Latvia':'拉脱维亚',
    'Morocco':'摩洛哥',
    'Moldova':'摩尔多瓦',
    'Madagascar':'马达加斯加',
    'Mexico':'墨西哥',
    'Macedonia':'马其顿',
    'Mali':'马里',
    'Myanmar':'缅甸',
    'Montenegro':'黑山',
    'Mongolia':'蒙古',
    'Mozambique':'莫桑比克',
    'Mauritania':'毛里塔尼亚',
    'Malawi':'马拉维',
    'Malaysia':'马来西亚',
    'Namibia':'纳米比亚',
    'New Caledonia':'新喀里多尼亚',
    'Niger':'尼日尔',
    'Nigeria':'尼日利亚',
    'Nicaragua':'尼加拉瓜',
    'Netherlands':'荷兰',
    'Norway':'挪威',
    'Nepal':'尼泊尔',
    'New Zealand':'新西兰',
    'Oman':'阿曼',
    'Pakistan':'巴基斯坦',
    'Panama':'巴拿马',
    'Peru':'秘鲁',
    'Philippines':'菲律宾',
    'Papua New Guinea':'巴布亚新几内亚',
    'Poland':'波兰',
    'Puerto Rico':'波多黎各',
    'Dem. Rep. Korea':'朝鲜',
    'Portugal':'葡萄牙',
    'Paraguay':'巴拉圭',
    'Qatar':'卡塔尔',
    'Romania':'罗马尼亚',
    'Russia':'俄罗斯',
    'Rwanda':'卢旺达',
    'W. Sahara':'西撒哈拉',
    'Saudi Arabia':'沙特阿拉伯',
    'Sudan':'苏丹',
    'S. Sudan':'南苏丹',
    'Senegal':'塞内加尔',
    'Solomon Is.':'所罗门群岛',
    'Sierra Leone':'塞拉利昂',
    'El Salvador':'萨尔瓦多',
    'Somaliland':'索马里兰',
    'Somalia':'索马里',
    'Serbia':'塞尔维亚',
    'Suriname':'苏里南',
    'Slovakia':'斯洛伐克',
    'Slovenia':'斯洛文尼亚',
    'Sweden':'瑞典',
    'Swaziland':'斯威士兰',
    'Syria':'叙利亚',
    'Chad':'乍得',
    'Togo':'多哥',
    'Thailand':'泰国',
    'Tajikistan':'塔吉克斯坦',
    'Turkmenistan':'土库曼斯坦',
    'East Timor':'东帝汶',
    'Trinidad and Tobago':'特里尼达和多巴哥',
    'Tunisia':'突尼斯',
    'Turkey':'土耳其',
    'Tanzania':'坦桑尼亚',
    'Uganda':'乌干达',
    'Ukraine':'乌克兰',
    'Uruguay':'乌拉圭',
    'United States':'美国',
    'Uzbekistan':'乌兹别克斯坦',
    'Venezuela':'委内瑞拉',
    'Vietnam':'越南',
    'Vanuatu':'瓦努阿图',
    'West Bank':'西岸',
    'Yemen':'也门',
    'South Africa':'南非',
    'Zambia':'赞比亚',
    'Zimbabwe':'津巴布韦'
};
var worldChart,worldData=[];
function switchWorld() {
    $('#map').hide();
    $('#map-legend').hide();
    $('#mapWorld').show();
    //upateWorldMap();
}

function upateWorldMap() {
    var unit = untiControl=='121689'?'万亩':'万吨';
    worldChart = echarts.init(document.getElementById('mapWorld'));
    var option = {
        tooltip : {
            // triggerOn: "click",
            formatter : function(e, t, n) {

                //console.log(data);
                if (isNaN(e.value)) {
                    e.value = "--"
                }

                return e.seriesName + "<br />" + e.name + "：" + e.value
                    + unit
            }
        },
        layoutCenter: ['48%', '50%'],//距离左右，上下距离的百分比
        layoutSize:'145%',//map百分比大小
        visualMap : {
            min : 0,
            max : 20000000,
            left : 10,
            bottom : 0,
            showLabel : !0,
            itemWidth : 10,
            itemHeight : 15,
            itemGap : 0,
            top:'50%',
            outOfRange : {
                color : [ "rgba(255,255,255,0)", ]
            },
            textStyle : {
                color : '#fff'
            },
            pieces : [ {
                gt : 0,
                lte : 4,
                label : "0-4",
                color : "#0073B3"
            }, {
                gt : 4,
                lte : 15,
                label : "4-15",
                color : "#FEFF2C"
            }, {
                gt : 15,
                lte : 41,
                label : "15-41",
                color : "#C4E228"
            }, {
                gt : 41,
                lte : 80,
                label : "41-80",
                color : "#CFA40D"
            },  {
                gt : 80,
                lte : 550,
                label : "80-550",
                color : "#F68500"
            } ,  {
                gt : 550,
                lte : 99999999000,
                label : ">550",
                color : "#F14F00"
            } ],
            show : !0
        },
        series: [
            {
                name: '产量',
                type: 'map',
                mapType: 'world',
                roam: true,
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                layoutCenter: ['36%', '50%'], //地图位置
                // layoutSize:'145%',
                nameMap:nameMap,
                data:worldData
            }
        ]
    };
    worldChart.clear();
    worldChart.setOption(option,true);
}

