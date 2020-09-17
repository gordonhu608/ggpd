$(document).ready(function () {
    tabClick('.data_collect .chart_tab > div', '.data_collect .tab_content > div');
    tabClick('.data_resource .chart_tab > div', '.data_resource .tab_content > div');
    tabClick('.data_category_rate .chart_tab > div', '.data_category_rate .tab_content > div');
    tabClick('.data_handle .chart_tab > div', '.data_handle .tab_content > div');

    var chartList = [collectStructuredChart, collectUnstructuredChart, resourceStructuredChart, resourceUnstructuredChart, categoryStructuredChart, categoryUnstructuredChart, handleStructuredChart, handleUnstructuredChart];
    window.onresize = function () {
        for (var ci = 0; ci < chartList.length; ci++) {
            chartList[ci].resize();
        }
    }

});

function tabClick(tab, content) {
    $(tab).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(content).eq($(this).index()).show().siblings().hide();
        eval($(content).eq($(this).index()).attr('id')).resize();
    });
}