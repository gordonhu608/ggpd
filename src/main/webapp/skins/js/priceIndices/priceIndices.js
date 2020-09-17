$(document).ready(function () {
    //tab点击
    tabClick('.avg_price_tab > div', avgPriceChart);
    tabClick('.product_indices_tab > div', productIndicesChart);
    tabClick('.apple_indices_tab > div', appleIndicesChart);

    //chart resize
    var chartList = [avgPriceChart, importExportChart, productIndicesChart, appleIndicesChart];
    window.onresize = function () {
        for (var ci = 0; ci < chartList.length; ci++) {
            chartList[ci].resize();
        }
    };

    //select选择事件-示例
    $('#appleCategory').on('change', function () {
        var opt = $(this).val();
        console.log(opt);
        // 更新importExportChart图表
        getImportAndExportMessage();
    });

    $('#productWay').on('change', function () {
        var opt = $(this).val();
        console.log(opt);
        // 更新importExportChart图表
        getImportAndExportMessage();
    });

    currentTwoHundredIndexByDay();
    currentYunChengIndexByDay();
    getAvgPrice('.avg_price_tab > div','旬');
    getImportAndExportMessage();
    getProductIndices('.product_indices_tab > div','日');
    getYunChengIndex('.apple_indices_tab > div','日');

});

function tabClick(tab, chart) {
    $(tab).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        //国内苹果平均价格
        if(tab === '.avg_price_tab > div'){
            getAvgPrice(tab, $(this).text());
        }
        //农产品200指数
        if(tab === '.product_indices_tab > div'){
            getProductIndices(tab, $(this).text());
        }
        //运城指数
        if(tab === '.apple_indices_tab > div'){
            getYunChengIndex(tab, $(this).text());
        }
        chart.resize();
    });
}

var twoHundredControl = '日';
var yunChengControl = '日';
function route(tab, buttonText) {
    var url;
    //国内苹果平均价格
    if(tab === '.avg_price_tab > div'){
        if(buttonText === '月'){
            url = context + "/service/priceIndices/getAvgByMonth";
        }else if(buttonText === '年'){
            url = context + "/service/priceIndices/getAvgByYear";
        }else{
            url = context + "/service/priceIndices/getAvgByTenDay";
        }
    }
    //农产品200指数
    if(tab === '.product_indices_tab > div'){
        twoHundredControl = buttonText;
        if (buttonText === '月同比') {
            url = context + "/service/priceIndices/twoHundredIndexByMonth";
        } else if(buttonText === '周同比') {
            url = context + "/service/priceIndices/twoHundredIndexByWeek";
        } else if(buttonText === '月环比') {
            url = context + "/service/priceIndices/twoHundredIndexByMonth";
        } else if(buttonText === '周环比') {
            url = context + "/service/priceIndices/twoHundredIndexByWeek";
        } else {
            url = context + "/service/priceIndices/twoHundredIndexByDay";
        }
    }
    //运城指数
    if(tab === '.apple_indices_tab > div'){
        yunChengControl = buttonText;
        if (buttonText === '月同比') {
            url = context + "/service/priceIndices/yunChengIndexByMonth";
        } else if(buttonText === '周同比') {
            url = context + "/service/priceIndices/yunChengIndexByWeek";
        } else if(buttonText === '月环比') {
            url = context + "/service/priceIndices/yunChengIndexByMonth";
        } else if(buttonText === '周环比') {
            url = context + "/service/priceIndices/yunChengIndexByWeek";
        } else{
            url = context + "/service/priceIndices/yunChengIndexByDay";
        }
    }
    return url;
}


// 查询最新两百指数信息
function currentTwoHundredIndexByDay() {
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: context + "/service/priceIndices/currentTwoHundredIndexByDay",
        data:JSON.stringify({}),
        success: function(result) {
            $('#time-200').text('（'+result[0].SJ.substring(0,10)+'）');
            for(var i = 0;i < result.length;i++){
                var item = result[i];
                if(item.ZSMC === '富士苹果'){
                    valuation(item,'#FSPGZSZ','#FSPGZL','#FSPGZJF');
                }
                if(item.ZSMC === '水果'){
                    valuation(item,'#SGZSZ','#SGZL','#SGZJF');
                }
                if(item.ZSMC === '农产品200指数'){
                    valuation(item,'#ZZSZ','#ZZL','#ZZJF');
                }
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {}
    })
}
function valuation(item, span1, span2, span3) {
    var color = "#07a168";
    var sz = item.ZSZ;
    var zl = item.ZL;
    var zjf = item.ZJF;
    $(span1).text(sz);
    if(zl === 0){
        color = "#325b7c";
        zl = '--';
    }else if(zl > 0){
        color = "#ff0000";
        zl = '+'+zl;
    }
    $(span2).text(zl);
    if(zjf === 0){
        zjf = '持平';
    }else if((zjf+'').substring(0,1) === '-'){
        zjf = '↓'+(zjf+'').substring(1) + "%";
    }else{
        zjf = '↑'+zjf + "%";
    }
    $(span3).text(zjf);
    $(span2).css("color", color);
    $(span3).css("color", color);
}

// 查询最新运城指数信息
function currentYunChengIndexByDay() {
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: context + "/service/priceIndices/currentYunChengIndexByDay",
        data:JSON.stringify({}),
        success: function(result) {
            $('#time-yc').text('（'+result[0].SJ.substring(0,10)+'）');
            for(var i = 0;i < result.length;i++){
                var item = result[i];
                // 纸袋75指数
                if(item.ZSLX === 'AGRI0020'){
                    valuation(item, '#zd75zsz', '#zd75zl', '#zd75zjf');
                }
                // 纸袋80及85指数
                if(item.ZSLX === 'AGRI0021'){
                    valuation(item, '#zd8085zsz', '#zd8085zl', '#zd8085zjf')
                }
                // 膜袋80及85指数
                if(item.ZSLX === 'AGRI0019'){
                    valuation(item, '#md8085zsz', '#md8085zl', '#md8085zjf')
                }
                // 纸加膜80及85指数
                if(item.ZSLX === 'AGRI0018'){
                    valuation(item, '#zmd8085zsz', '#zmd8085zl', '#zmd8085zjf')
                }

            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {}
    })
}
