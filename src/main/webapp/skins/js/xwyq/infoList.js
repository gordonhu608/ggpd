var wordCloudChart = echarts.init(document.getElementById("wordCloudChart"));
//用来存储数据
var jsonlist = [];
jsonlist.push(
    {
        "name": "苹果",
        "value": 40
    },
    {
        "name": "苹果",
        "value": 16
    },
    {
        "name": "大数据",
        "value": 16
    },
    {
        "name": "新闻",
        "value": 16
    },
    {
        "name": "电商",
        "value": 16
    },
    {
        "name": "产业链",
        "value": 18
    },
    {
        "name": "舆情",
        "value": 18
    },
    {
        "name": "红富士",
        "value": 16
    },
    {
        "name": "苹果",
        "value": 16
    },
    {
        "name": "大数据",
        "value": 16
    },
    {
        "name": "新闻",
        "value": 22
    },
    {
        "name": "电商",
        "value": 16
    },
    {
        "name": "产业链",
        "value": 16
    },
    {
        "name": "舆情",
        "value": 16
    },
    {
        "name": "苹果",
        "value": 16
    },
    {
        "name": "大数据",
        "value": 16
    },
    {
        "name": "新闻",
        "value": 16
    },
    {
        "name": "电商",
        "value": 16
    },
    {
        "name": "产业链",
        "value": 16
    },
    {
        "name": "舆情",
        "value": 18
    },
    {
        "name": "红富士",
        "value": 16
    },
    {
        "name": "红富士",
        "value": 16
    },{
        "name": "苹果",
        "value": 20
    },
    {
        "name": "大数据",
        "value": 20
    },
    {
        "name": "新闻",
        "value": 20
    },
    {
        "name": "电商",
        "value": 20
    },
    {
        "name": "产业链",
        "value": 20
    },
    {
        "name": "舆情",
        "value": 20
    },
    {
        "name": "红富士",
        "value": 20
    },{
        "name": "苹果",
        "value": 16
    },
    {
        "name": "大数据",
        "value": 19
    },
    {
        "name": "新闻",
        "value": 19
    },
    {
        "name": "电商",
        "value": 18
    },
    {
        "name": "产业链",
        "value": 16
    },
    {
        "name": "舆情",
        "value": 18
    },
    {
        "name": "红富士",
        "value": 18
    },{
        "name": "苹果",
        "value": 20
    },
    {
        "name": "大数据",
        "value": 20
    },
    {
        "name": "新闻",
        "value": 20
    },
    {
        "name": "电商",
        "value": 20
    },
    {
        "name": "产业链",
        "value": 20
    },
    {
        "name": "舆情",
        "value": 20
    },
    {
        "name": "红富士",
        "value": 20
    },{
        "name": "苹果",
        "value": 18
    },
    {
        "name": "大数据",
        "value": 20
    },
    {
        "name": "新闻",
        "value": 20
    },
    {
        "name": "电商",
        "value": 20
    },
    {
        "name": "产业链",
        "value": 20
    },
    {
        "name": "舆情",
        "value": 13
    },
    {
        "name": "红富士",
        "value": 13
    },{
        "name": "苹果",
        "value": 12
    },
    {
        "name": "大数据",
        "value": 18
    },
    {
        "name": "新闻",
        "value": 18
    },
    {
        "name": "电商",
        "value": 18
    },
    {
        "name": "产业链",
        "value": 16
    },
    {
        "name": "舆情",
        "value": 16
    },
    {
        "name": "红富士",
        "value": 16
    },{
        "name": "苹果",
        "value": 16
    },
    {
        "name": "大数据",
        "value": 16
    },
    {
        "name": "新闻",
        "value": 16
    },
    {
        "name": "舆情",
        "value": 13
    },
    {
        "name": "红富士",
        "value": 13
    },{
        "name": "苹果",
        "value": 15
    },
    {
        "name": "大数据",
        "value": 14
    },
    {
        "name": "新闻",
        "value": 15
    },
    {
        "name": "电商",
        "value": 14
    },
    {
        "name": "产业链",
        "value": 14
    },
    {
        "name": "舆情",
        "value": 18
    },
    {
        "name": "红富士",
        "value": 16
    },{
        "name": "苹果",
        "value": 15
    },
    {
        "name": "大数据",
        "value": 12
    },
    {
        "name": "新闻",
        "value": 16
    },
    {
        "name": "产业链",
        "value": 14
    },
    {
        "name": "舆情",
        "value": 13
    },
    {
        "name": "红富士",
        "value": 15
    },{
        "name": "苹果",
        "value": 10
    },
    {
        "name": "大数据",
        "value": 12
    },
    {
        "name": "新闻",
        "value": 13
    }
);
// 图像的base64编码
img1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAADdCAYAAAAICrguAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzYwLCAyMDIwLzAyLzEzLTAxOjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA4LTI2VDE0OjM2OjUzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOC0yNlQxNToyMTo0MSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wOC0yNlQxNToyMTo0MSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMmE5MjhlMi0yZGZiLTc3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"
img2 = "data:image/png;base64,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"

var maskResource = new Image()
maskResource.src=img2;
var wordCloudChartOption ={
    //数据可以点击
    tooltip:{

    },
    series:[
        {
            maskImage:maskResource,
            //词的类型
            type: 'wordCloud',
            //设置字符大小范围
            sizeRange:[5,30],
            rotationRange:[-45,90],
            width: '100%',
            height: '100%',
            gridSize: 1,
            textStyle: {
                normal:{
                    //生成随机的字体颜色
                    color:function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',')+')';

                    }
                }

            },
            //不要忘记调用数据
            data:jsonlist

        }
    ]

};
//加载图像，将数据放在图像中
maskResource.onload = function(){
    wordCloudChart.setOption(wordCloudChartOption)
};


var newsList = [
    {
        name: '1镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '2镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '3镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '4镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '5镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '6镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '7镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '8镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '9镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '10镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '11镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '12镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '13镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '14镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '15镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '16镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '17镇原 发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    }
];
var yuqingList = [
    {
        name: '1发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '2发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '3发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '4发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '5发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '6发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '7发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '8发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    },
    {
        name: '9发展苹果产业实现经济生态"双赢"',
        date: '2020-08-21',
        src:''
    }
];
var total = 0;
var pageSize = 10;
$(document).ready(function () {
    findInfoList(0,pageSize,'news');
    // 每页显示条数
    pageInfo(0, pageSize,'news');
    $('.left_content').css('height', Math.max($('.left_content').outerHeight(true), $('.right_content').outerHeight(true)));

    $('.left_tab > div').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        findInfoList(0,pageSize,$(this).data('value'));
        pageInfo(0, pageSize,$(this).data('value'));
    })
});

// 分页信息
function pageInfo(start, pagecount, type) {
    total = type === 'news' ? newsList.length : yuqingList.length;
    var initPagination = function () {
        $("#pages").pagination(total, {
            items_per_page: pagecount,
            prev_text: '《',
            next_text: '》',
            callback: function () {
                var currentpage = $(".pagination span[class='current']").text();
                var start = (parseInt(currentpage) - 1) * pagecount;
                findInfoList(start, pagecount, type);
            }
        });
    }();
}
function findInfoList(start, limit, type) {
    var html = '';
    var dataList = type === 'news' ? newsList.slice(start, start+limit) : yuqingList.slice(start, start+limit);
    $.each(dataList, function (i, item) {
        html += '<li><span></span><a href="'+item.src+'">'+item.name+'</a><span>'+item.date+'</span></li>';
    });
    $('.info_list>ul').html(html);

    $('.left_content').css('height', Math.max($('.left_content').outerHeight(true), $('.right_content').outerHeight(true)));
}