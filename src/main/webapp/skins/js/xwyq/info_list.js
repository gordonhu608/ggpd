var params = {
    pageNumber:1,
    pageSize:15
};
$(document).ready(function () {

    initNewsInfoFunction();

    initPopularFeelingsInfoFunction();
});
function initNewsInfoFunction() {
    var url = context + "/service/newsPopularFeelings/getNewsInfo";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        async:false,
        data:JSON.stringify(params),
        success: function(result) {
            var list = result.list;
            var html = '';
            for(var i=0;i<list.length;i++){
                var value = list[i];
                html += "<li>"
                    + "<span></span>"
                    + "<span><a href=\"javascript:newsInfoDetails(\'"+ value.id +"\')\">"+value.bt+"</a></span>"
                    + "<span class='pull-right'>" + value.fbsj.substring(0, value.fbsj.indexOf(' ')) + "</span>"
                    + "</li>";
            }
            $('.news > ul').html(html);
        }
    });
}

function initPopularFeelingsInfoFunction() {
    var url = context + "/service/newsPopularFeelings/getPopularFeelingsInfo";
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        async:false,
        data:JSON.stringify(params),
        success: function(result) {
            var list = result.list;
            var html = '';
            for(var i=0;i<list.length;i++){
                var value = list[i];
                html += "<li>"
                    + "<span></span>"
                    + "<span><a href=\"javascript:popularFeelingsInfoDetails(\'"+ value.id +"\')\">"+value.btm+"</a></span>"
                    + "<span class='pull-right'>"+value.fbsj.substring(0,value.fbsj.indexOf(' '))+"</span>"
                    + "</li>";
            }
            $('.public_opinion > ul').html(html);
        }
    });
}

function newsInfoList() {
    var type = 'xinwen';
    var url = context +"/jsp/xwyq/info_tab_list.jsp?infoType="+type;
    window.location.href = url;
}

function popularFeelingsInfoList() {
    var type = 'yuqing';
    var url = context +"/jsp/xwyq/info_tab_list.jsp?infoType="+type;
    window.location.href = url;
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