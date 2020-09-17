//成本收益地区ID参数
var param = {
    areaId: '101'
};
//新闻及舆情分页参数
var newsAndPublicOpinionParams = {
    pageNumber: 1,
    pageSize: 15
};
var tradeText = '出口';
$(function () {

    //初始化全国种植面积及产量
    applePlantAreaAndYield();

    //初始化我国进出口贸易
    chinaImportAndExportTradeFunction();

    //初始化成本收益
    costBenefitFunction(param);

    //初始化新闻信息
    initNewsInfoFunction();

    //初始化舆情信息
    initPopularFeelingsInfoFunction();

    //初始化生产分布
    productionDistributionFunction();

    //初始化按月贸易流向
    monthTradeFlowFunction(tradeText);

    //初始化按年贸易流向
    yearTradeFlowFunction(tradeText);

    //初始化价格分布
    priceDistributionFunction();

    getDataDecodes();
    //新闻舆情页切换
    newsTabClick('.news_tab > .btn_tab', '.new_content > div');
    initIndex();

    /*tabClick('.news_tab > .btn_tab', '.new_content > div');*/

    tabClick('.trend_info .chart_tab li', '.trend_info .chart_content > div');
    tabClick('.news_tab > div', '.new_content > div');
    tabClick('.price_tab > div', '.price_content > div');
    tabClick('.visual_info .chart_tab li', '.visual_info .chart_content > div');
    tabClick('.time_tab > div', '.time_tab_content > div');
    tabClick('.month_trade_flow_info .info_tab > div', '.month_trade_flow_info .info_tab_content > div');
    tabClick('.year_trade_flow_info .info_tab > div', '.year_trade_flow_info .info_tab_content > div');
    productTabClick('.product_tab > div', '.product_tab_content > div');

    var chartList = [plantChart, trendChart, /*dealChart,*/plantingAreaChart,productionRankingChart, incomeChart, bjChart, shhChart, gzhChart, zcqChart, indicesChart, priceDistributionChart, monthTradeFlowChart, monthExportInfoChart, monthImportInfoChart, yearTradeFlowChart, yearExportInfoChart, yearImportInfoChart, chinaProductionDistributionChart, productionDistributionChart, disastersDistributionChart,locationChart,radiusChart];
    window.onresize = function () {
        for (var ci = 0; ci < chartList.length; ci++) {
            chartList[ci].resize();
        }
    };

    $('.month_trade_flow_info .info_tab > div').on('click', function () {
        tradeText = $(this).text();
        monthTradeFlowFunction(tradeText);
    });

    $('.year_trade_flow_info .info_tab > div').on('click', function () {
        tradeText = $(this).text();
        yearTradeFlowFunction(tradeText);
    });

    //贸易流向标题切换
    $('#tradeTimeDate').html('2020年7月');
    $('.time_tab > div').on('click', function () {
        tradeText = $(this).text();
        if(tradeText=='按月'){
            $('#tradeTimeDate').html('2020年7月');
        }else if(tradeText=='按年'){
            $('#tradeTimeDate').html('2020年目前');
        }
    });

    //生产分布标题切换
    $('.product_title').html('2018年全国苹果种植面积监测');
    $('.product_tab > div').on('click', function () {
        tradeText = $(this).text();
        if(tradeText=='面积'){
            $('.product_title').html('2018年全国苹果种植面积监测');
            eval($('#plantingAreaChart')).resize();
        }else if(tradeText=='产量'){
            $('.product_title').html('2018年全国苹果产量监测');
            YieldDistributionFunction();
            eval($('#productionRankingChart')).resize();
        }
    });

    $(".deal_info").popover({
        placement: "left",
        content: "这里是一段描述这里是一段描述这里是一段描述这里是一段描述",
        trigger: "hover"
    });

    // 苹果关键数据走势--成本收益--下拉框改变事件
    $('#incomeSelect').change(function () {
        param.areaId = $(this).val();
        costBenefitFunction(param);
        /*incomeChartOption.series = incomeData[$(this).val()];
        incomeChart.setOption(incomeChartOption);*/
    });

});

function tabClick(tab, content) {
    $(tab).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(content).eq($(this).index()).show().siblings().hide();

        var curChart = $(content).eq($(this).index()).attr('id') || $(content).eq($(this).index()).find('.chart').attr('id');
        eval(curChart).resize();
        if ($(content).eq($(this).index()).find('.chart') && $(content).eq($(this).index()).find('.chart').length > 1) {
            var chart1 = $(content).eq($(this).index()).find('.chart')[1];
            eval($(chart1).attr('id')).resize();
        }
        /*var dataValue = $(this).attr("data-value");
        if(dataValue == 'chinaImportAndExportTrade'){
            chinaImportAndExportTradeFunction();
        }*/
    });
}

function productTabClick(tab, content) {
    $(tab).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(content).eq($(this).index()).show().siblings().hide();

        var curChart = $(content).eq($(this).index()).attr('id') || $(content).eq($(this).index()).find('.product_chart').attr('id');
        eval(curChart).resize();
        if ($(content).eq($(this).index()).find('.product_chart') && $(content).eq($(this).index()).find('.product_chart').length > 1) {
            var chart1 = $(content).eq($(this).index()).find('.product_chart')[1];
            eval($(chart1).attr('id')).resize();
        }
    });
}

function newsTabClick(tab, content) {
    $(tab).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(content).eq($(this).index()).show().siblings().hide();
    });
}

function initNewsInfoFunction() {
    var url = context + "/service/newsPopularFeelings/getNewsInfo";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        async: false,
        data: JSON.stringify(newsAndPublicOpinionParams),
        success: function (result) {
            var list = result.list;
            var html = '';
            for (var i = 0; i < 8; i++) {
                var value = list[i];
                html += "<li>"
                    + "<span>" + /*(Number(i)+Number(1)) + */"</span>"
                    + "<span><a href=\"javascript:newsInfoDetails(\'"+ ((!value.id || value.id == undefined || value.id == null) ? '' : value.id) +"\')\">"+((!value.bt || value.bt == undefined || value.bt == null) ? '' : value.bt)+"</a></span>"
                    + "<span>" + ((!value.fbsj || value.fbsj == undefined || value.fbsj == null) ? '' : value.fbsj.substring(5,10)) + "</span>"
                    + "</li>";
            }
            $('.news_info > ul').html(html);
        }
    });
}

function initPopularFeelingsInfoFunction() {
    var url = context + "/service/newsPopularFeelings/getPopularFeelingsInfo";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        async: false,
        data: JSON.stringify(newsAndPublicOpinionParams),
        success: function (result) {
            var list = result.list;
            var html = '';
            for (var i = 0; i < 8; i++) {
                var value = list[i];
                html += "<li>"
                    + "<span>" + /*(Number(i) + Number(1)) + */"</span>"
                    + "<span><a href=\"javascript:popularFeelingsInfoDetails(\'" + value.id + "\')\">" + value.btm + "</a></span>"
                    + "<span class='pull-right'>" + value.fbsj.substring(value.fbsj.indexOf('-')+1,value.fbsj.indexOf(' ')) + "</span>"
                    + "</li>";
            }
            $('.public_opinion > ul').html(html);
        }
    });
}

function newsInfoDetails(data) {
    var type = 1;
    var url = context + "/jsp/xwyq/info_detail.jsp?id=" + data + "&type=" + type;
    window.location.href = url;
}

function popularFeelingsInfoDetails(data) {
    var type = 2;
    var url = context + "/jsp/xwyq/info_detail.jsp?id=" + data + "&type=" + type;
    window.location.href = url;
}

function initIndex() {
    $.get(context + "/service/homePage/queryCurrentIndex", function (res) {
        res.forEach(function (item) {
            if (item.ZSMC === '富士苹果') {
                valuation(item, '#FSPGZSZ', '#FSPGZL', '#FSPGZJF');
            }
            if (item.ZSMC === '水果') {
                valuation(item, '#SGZSZ', '#SGZL', '#SGZJF');
            }
            if (item.ZSMC === '农产品200指数') {
                valuation(item, '#ZZSZ', '#ZZL', '#ZZJF');
            }
        });
    })
}

function valuation(item, span1, span2, span3) {
    var color = "#07a168";
    var sz = item.ZSZ;
    var zl = item.ZL;
    var zjf = item.ZJF;
    $(span1).text(sz);
    if (zl === 0) {
        color = "#325b7c";
        zl = '--';
    } else if (zl > 0) {
        color = "#ff0000";
        zl = '+' + zl;
    }
    $(span2).text(zl);
    if (zjf === 0) {
        zjf = '持平';
    } else if ((zjf + '').substring(0, 1) === '-') {
        zjf = '↓' + (zjf + '').substring(1) + "%";
    } else {
        zjf = '↑' + zjf + "%";
    }
    $(span3).text(zjf);
    $(span2).css("color", color);
    $(span3).css("color", color);
}
function getDataDecodes() {
    $.ajax({
        contentType: "application/json;charset=UTF-8",
        url: context + "/service/sjjd/getDataDecodeData",
        type: "POST",
        data: JSON.stringify({limit: 10, start: 0}),
        success: function (data) {
            console.log(data);
            var jdData=data.data;
            var html='';
            for(var i=0;i<jdData.length;i++){
                //
                //
                html+= "<li id=jd_"+jdData[i].id+"><span></span> <span style='cursor: pointer'><a href=\"javascript:dataDecodesDetails(\'" + jdData[i].id + "\',\'" + jdData[i].sjlx + "\')\">" + jdData[i].bt + "</a></span> <span>"+jdData[i].rq+"</span> </li>";
            }
            $("#jd").html(html);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }
    });
}

function dataDecodesDetails(data,type) {
    var url = context + "/jsp/sjjd/" + type + ".jsp?id=" + data;
    window.location.href = url;
}

//电商消费偏好：两个圆环图的js
