var curFontSize = '2';
var param = '';
$(document).ready(function () {

    initNewsAndPopularFeelingsInfoDetail(param);

    $('.font_config > span').on('click', function () {
        $(this).addClass('active').siblings('span').removeClass('active');
        fontZoom($(this).data('size'));
        window.parent.SetCwinHeight();
    });

});

function fontZoom(size) {
    var fontScale = 1200 / document.documentElement.clientWidth;
    var remSize = 0.14;
    $('.article_content *').each(function (i, item) {
        var updateFontSize = parseFloat($(this).css('fontSize')) * fontScale;
        updateFontSize += size - curFontSize;
        remSize = updateFontSize > 0 ? (updateFontSize / 100).toFixed(2) : updateFontSize;
        $(this).css('fontSize', remSize + 'rem');
    });
    $('.article_content').css('fontSize', remSize + 'rem');
    $('.font_config').css('fontSize', remSize + 'rem');
    curFontSize = size;
}

function initNewsAndPopularFeelingsInfoDetail(param) {

    var params = '';
    if (param!=''){
        params = {
            'id':param
        };
    }else {
        params = {
            'id':id
        };
    }
    if(type == 1){
        var url = context + "/service/newsPopularFeelings/getNewsInfoDetail";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: url,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                $('.info_title').html(result.bt);
                $('#fbsj').html('发布时间：' + result.fbsj.substring(0,result.fbsj.indexOf(' ')));
                $('#ly').html('来源：' + result.ly);
                $('.article_content').html(result.nr.replace(/\\/g,""));
            }
        });
        var stripUrl = context + "/service/newsPopularFeelings/getStripNewsInfoId";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: stripUrl,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                var html = '';
                if(result!=""){
                    html = "上一条：<a href=\"javascript:initNewsAndPopularFeelingsInfoDetail(\'"+ result.id +"\')\">"+ result.bt +"</a>";
                }/*else {
                    html = ""
                }*/
                $('#strip1').html(html);
            }
        });
        var nextStripUrl = context + "/service/newsPopularFeelings/getNextStripNewsInfoId";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: nextStripUrl,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                var html = '';
                if (result!=''){
                    html = "下一条：<a href=\"javascript:initNewsAndPopularFeelingsInfoDetail(\'"+ result.id +"\')\">"+ result.bt +"</a>";
                }
                $('#strip2').html(html);
            }
        });
    }else if(type == 2){
        var url = context + "/service/newsPopularFeelings/getPopularFeelingsInfoDetail";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: url,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                $('.info_title').html(result.btm);
                $('#fbsj').html('发布时间：' + result.fbsj.substring(0,result.fbsj.indexOf(' ')));
                $('#ly').html('来源：' + result.ly);
                $('.article_content').html(result.hxnr);
            }
        });
        var stripUrl = context + "/service/newsPopularFeelings/getStripPopularFeelingsInfoId";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: stripUrl,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                var html = '';
                if(result!=""){
                    html = "上一条：<a href=\"javascript:initNewsAndPopularFeelingsInfoDetail(\'"+ result.id +"\')\">"+ result.btm +"</a>";
                }
                $('#strip1').html(html);
            }
        });
        var nextStripUrl = context + "/service/newsPopularFeelings/getNextStripPopularFeelingsInfoId";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: nextStripUrl,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                var html = '';
                if (result!=''){
                    html = "下一条：<a href=\"javascript:initNewsAndPopularFeelingsInfoDetail(\'"+ result.id +"\')\">"+ result.btm +"</a>";
                }
                $('#strip2').html(html);
            }
        });
    }
    window.parent.SetCwinHeight();
}