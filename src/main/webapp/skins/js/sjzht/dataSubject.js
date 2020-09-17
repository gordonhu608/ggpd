var param = {
    gybh:''
};
$(document).ready(function () {
    tabClick('.left_tab > div', '.tab_content > div');

    var div = $('#trade');
    div.click();

    var chartList = [priceSort];
    window.onresize = function () {
        for (var ci = 0; ci < chartList.length; ci++) {
            chartList[ci].resize();
        }
    }

    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.carousel_pagination',
        autoplay: 5000,
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        // autoplayDisableOnInteraction: false
    });

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
    $("#checked-orchard").on('click', function(){
        $(".choose_orchard ul").show();
    });
    // 下拉选择
    $(".choose_category ul").on('click', 'li', function(){
        $("#checked-category").text($(this).text());
        $('.choose_category ul').hide();
    });
    $(".choose_orchard ul").on('click', 'li', function(){
        $("#checked-orchard").text($(this).text());
        $("#wisdomOrchardTitle").text($(this).text());
        $('.choose_orchard ul').hide();
        param.gybh = $(this).data('value');
        var url = context + "/service/wisdomOrchard/getWisdomOrchardDataByGYBH";

        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: url,
            data:JSON.stringify(param),
            async:false,
            success:function (result) {
                $('.monitor_time').text(result.JCSJ);
                $("#monitor_val_wd").text(result.WD);
                $("#monitor_val_sd").text(result.SD);
                $("#monitor_val_gz").text(result.ZFS);
                $("#monitor_val_hs1").text(result.SQ20HSL);
                $("#monitor_val_hs2").text(result.SQ40HSL);
                $("#monitor_val_hs3").text(result.SQ60HSL);
                $("#monitor_val_wd1").text(result.SQ20HSL);
                $("#monitor_val_wd2").text(result.SQ40WD);
                $("#monitor_val_wd3").text(result.SQ60WD);
            console.log(result);
            }
        })

    });
    $(document).mouseup(function(e) {
        let locationUL = $('.choose_category ul');
        if(!locationUL.is(e.target) && locationUL.has(e.target).length === 0) {
            locationUL.hide();
        }
        let orchardUL = $('.choose_orchard ul');
        if(!orchardUL.is(e.target) && orchardUL.has(e.target).length === 0) {
            orchardUL.hide();
        }
    });
});

function tabClick(tab, content) {
    $(tab).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(content).eq($(this).index()).show().siblings().hide();
        //eval($(content).eq($(this).index()).attr('id')).resize();
    });
}