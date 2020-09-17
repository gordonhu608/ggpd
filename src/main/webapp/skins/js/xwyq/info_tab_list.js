var total = 0;
var total2 = 0;
var pageNumber = '1';
var pageSize = '15';
//var infoType = 'xinwen';
var resourceName = '';
$(document).ready(function () {

    if (infoType=='xinwen'){
        $('#xinwen').addClass('active').siblings().removeClass('active');
        $('.tab_content > div').eq($('#xinwen').index()).show().siblings().hide();
    }else if (infoType=='yuqing'){
        $('#yuqing').addClass('active').siblings().removeClass('active');
        $('.tab_content > div').eq($('#yuqing').index()).show().siblings().hide();
    }

    initNewsInfoFunction(pageNumber,pageSize);
    initPopularFeelingsInfoFunction(pageNumber,pageSize);
    // 每页显示条数
    pageInfo();

    tabClick('.btn_group > .btn_tab', '.tab_content > div');

    $('#query').on('click',function () {
        resourceName = $('#resourceName').val();
        queryFunction(pageNumber,pageSize,resourceName);
        pageInfo();
    });
});

// 分页信息
function pageInfo() {
    var pagecount = pageSize;
    var initPagination = function () {
        $(".pagination").pagination(total, {
            items_per_page: pagecount,
            prev_text: '《',
            next_text: '》',
            callback: function () {
                pageNumber = $(".pagination span[class='current']").text();
                //findInfoList(start,limit);
                if (resourceName!=''){
                    queryFunction(pageNumber,pageSize,resourceName)
                }else {
                    initNewsInfoFunction(pageNumber,pageSize);
                }
            }
        });
    }();
    var initPagination2 = function () {
        $(".pagination2").pagination(total2, {
            items_per_page: pagecount,
            prev_text: '《',
            next_text: '》',
            callback: function () {
                pageNumber = $(".pagination2 span[class='current']").text();
                if (resourceName!=''){
                    queryFunction(pageNumber,pageSize,resourceName)
                }else {
                    initPopularFeelingsInfoFunction(pageNumber,pageSize);
                }
                //findInfoList(start,limit);
            }
        });
    }();
}


function tabClick(tab, content) {
    $(tab).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(content).eq($(this).index()).show().siblings().hide();
        infoType = $(this).attr("data-value");
        window.parent.SetCwinHeight();
    });
}

function queryFunction(pageNumber,pageSize,resourceName){
    var params = {
        'pageNum':pageNumber,
        'pageSize':pageSize,
        'keyword':resourceName
    };
    if (infoType=='xinwen'){
        var xinWenUrl = context + "/service/xinwen/search";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: xinWenUrl,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                var list = result.documents;
                total = result.totalCount;
                var html = '';
                for(var i=0;i<list.length;i++){
                    var value = list[i];
                    var reg = new RegExp(resourceName);
                    html += "<li>"
                        + "<span></span>"
                        + "<span class='result_title'><a href=\"javascript:newsInfoDetails(\'"+ value.ID +"\')\">"+value.BT.replace(reg, "<span style='color: red'>"+resourceName+"</span>")+"</a></span>"
                        + "<p class='result_info'>"+value.NR+"</p>"
                        + "<div class='pull-right result_time'>"+/*"2020-07-22"*/value.FBSJ.substring(0,10)+"</div>"
                        + "</li>";
                }
                $('#newsInfoList > ul').html(html);
            }
        });
    }else if(infoType=='yuqing'){
        var url = context + "/service/yuqing/search";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: url,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                var list = result.documents;
                total2 = result.totalCount;
                var html = '';
                for(var i=0;i<list.length;i++){
                    var value = list[i];
                    var reg = new RegExp(resourceName);
                    html += "<li>"
                        + "<span></span>"
                        + "<span class='result_title'><a href=\"javascript:popularFeelingsInfoDetails(\'"+ value.ID +"\')\">"+value.BTM.replace(reg, "<span style='color: red'>"+resourceName+"</span>")+"</a></span>"
                        + "<p class='result_info'>"+value.HXNR+"</p>"
                        + "<div class='pull-right result_time'>"+/*"2020-07-22"*/value.FBSJ.substring(0,10)+"</div>"
                        + "</li>";
                }
                $('#popularFeelingsInfoList > ul').html(html);
            }
        });
    }
};

/*function queryXinWenFunction(pageNumber,pageSize,resourceName){
    var params = {
        'pageNum':pageNumber,
        'pageSize':pageSize,
        'keyword':resourceName
    };
    if (infoType=='xinwen'){

    }else if(infoType=='yuqing'){
        var url = context + "/service/新闻/search";
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: url,
            async:false,
            data:JSON.stringify(params),
            success: function(result) {
                var list = result.documents;
                total2 = result.totalCount;
                var html = '';
                for(var i=0;i<list.length;i++){
                    var value = list[i];
                    var reg = new RegExp(resourceName);
                    html += "<li>"
                        + "<span></span>"
                        + "<span class='result_title'><a href=\"javascript:popularFeelingsInfoDetails(\'"+ value.ID +"\')\">"+value.BT.replace(reg, "<span style='color: red'>"+resourceName+"</span>")+"</a></span>"
                        + "<p class='result_info'>"+value.NR+"</p>"
                        + "<div class='pull-right result_time'>"+/!*"2020-07-22"*!/value.CJSJ.substring(0,10)+"</div>"
                        + "</li>";
                }
                $('#newsInfoList > ul').html(html);
            }
        });
    }
};*/

function initNewsInfoFunction(pageNumber,pageSize) {
    var params = {
        'pageNumber':pageNumber,
        'pageSize':pageSize
    };
    var url = context + "/service/newsPopularFeelings/getNewsInfo";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        async:false,
        data:JSON.stringify(params),
        success: function(result) {
            var list = result.list;
            total = result.total;
            var html = '';
            for(var i=0;i<list.length;i++){
                var value = list[i];
                html += "<li>"
                    + "<span></span>"
                    + "<span><a href=\"javascript:newsInfoDetails(\'"+ value.id +"\')\">"+value.bt+"</a></span>"
                    + "<span class='pull-right'>" + value.fbsj.substring(0,value.fbsj.indexOf(' ')) + "</span>"
                    + "</li>";
            }
            $('#newsInfoList > ul').html(html);
        }
    });
}

function initPopularFeelingsInfoFunction(pageNumber,pageSize) {
    var params = {
        'pageNumber':pageNumber,
        'pageSize':pageSize
    };
    var url = context + "/service/newsPopularFeelings/getPopularFeelingsInfo";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        async:false,
        data:JSON.stringify(params),
        success: function(result) {
            var list = result.list;
            total2 = result.total;
            var html = '';
            for(var i=0;i<list.length;i++){
                var value = list[i];
                html += "<li>"
                    + "<span></span>"
                    + "<span><a href=\"javascript:popularFeelingsInfoDetails(\'"+ value.id +"\')\">"+value.btm+"</a></span>"
                    + "<span class='pull-right'>"+value.fbsj.substring(0,value.fbsj.indexOf(' '))+"</span>"
                    + "</li>";
            }
            //$('#popularFeelingsInfoList > ul').remove();
            $('#popularFeelingsInfoList > ul').html(html);
        }
    });
}

function newsInfoDetails(data) {
    var type = 1;
    var url = context +"/jsp/xwyq/info_detail.jsp?id="+data + "&type=" + type;
    window.location.href = url;
}

function popularFeelingsInfoDetails(data) {
    var type = 2;
    var url = context +"/jsp/xwyq/info_detail.jsp?id="+data + "&type=" + type;
    window.location.href = url;
}