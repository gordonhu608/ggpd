<%@ page contentType="text/html; charset=UTF-8" isELIgnored="false" pageEncoding="UTF-8"%>
<%@ taglib prefix="l" uri="/tags/loushang-web"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>数据一张图</title>
    <!-- 引入css文件 -->
    <l:link path="css/font-awesome.css,css/priceIndices/priceIndices.css" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="<l:asset path='html5shiv.js'/>"></script>
    <script src="<l:asset path='respond.js'/>"></script>
    <![endif]-->
    <script type="text/javascript">
        // 项目上下文
        var context = "<%=request.getContextPath()%>";
    </script>
</head>

<body>
<div class="crumbs">当前位置: <span class="home">首页</span> > <span>价格指数</span></div>
<div class="container">
    <div class="section section1">
        <div class="avg_price">
            <div class="module_line"></div>
            <div class="module_title">全国富士苹果平均价格走势</div>
            <div class="avg_price_info">
                <div class="avg_price_tab">
                    <div class="active">旬</div>
                    <div>月</div>
                    <div>年</div>
                </div>
                <div class="avr_price_chart" id="avgPriceChart"></div>
            </div>
        </div>
        <div class="import_export">
            <div class="module_line"></div>
            <div class="module_title">苹果进出口情况</div>
            <div class="import_export_info">
                <div class="select_content">
                    <select id="appleCategory" title>
                        <option value="08081000">鲜苹果</option>
                        <option value="20097900">苹果汁</option>
                        <option value="08133000">苹果干</option>
                    </select>
                    <select id="productWay" title>
                        <option value="">进出口额</option>
                        <option value="">进出口量</option>
                    </select>
                </div>
                <div class="import_export_chart" id="importExportChart"></div>
            </div>
        </div>
    </div>
    <div class="section section2">
        <div>
            <div class="module_line"></div>
            <div class="module_title">农产品200指数 <span class="module_title_time" id="time-200">(2020-06-22)</span></div>
            <div class="indices_content product_indices_content">
                <div>
                    <div class="indices_name">富士苹果价格指数</div>
                    <div class="indices_num"><span id="FSPGZSZ">90.89</span> <span id="FSPGZL">+10</span> <span id="FSPGZJF">↑0.12</span></div>
                </div>
                <div>
                    <div class="indices_name">水果价格指数</div>
                    <div class="indices_num"><span id="SGZSZ">107.23</span> <span id="SGZL">+10</span> <span id="SGZJF">↓0.12</span></div>
                </div>
                <div>
                    <div class="indices_name">200总指数</div>
                    <div class="indices_num"><span id="ZZSZ">118.89</span> <span id="ZZL">--</span> <span id="ZZJF">持平</span></div>
                </div>
            </div>
            <div class="indices_tab product_indices_tab">
                <div class="active">日</div>
                <div>周环比</div>
                <div>月环比</div>
                <div>周同比</div>
                <div>月同比</div>
            </div>
            <div class="indices_chart" id="productIndicesChart"></div>
        </div>
    </div>
    <div class="section section3">
        <div>
            <div class="module_line"></div>
            <div class="module_title">运城苹果价格指数 <span class="module_title_time" id="time-yc">(2020-04-17)</span></div>
            <div class="indices_content apple_indices_content">
                <div>
                    <div class="indices_name" onclick="switchYCTab('AGRI0020')">纸袋75指数</div>
                    <div class="indices_num"><span id="zd75zsz">90.89</span> <span id="zd75zl">--</span> <span id="zd75zjf">持平</span></div>
                </div>
                <div>
                    <div class="indices_name" onclick="switchYCTab('AGRI0021')">纸袋80及85指数</div>
                    <div class="indices_num"><span id="zd8085zsz">107.23</span> <span id="zd8085zl">--</span> <span id="zd8085zjf">持平</span></div>
                </div>
                <div>
                    <div class="indices_name" onclick="switchYCTab('AGRI0019')">膜袋80及85指数</div>
                    <div class="indices_num"><span id="md8085zsz">118.89</span> <span id="md8085zl">-10</span> <span id="md8085zjf">↓0.12</span></div>
                </div>
                <div>
                    <div class="indices_name" onclick="switchYCTab('AGRI0018')">纸加膜80及85指数</div>
                    <div class="indices_num"><span id="zmd8085zsz">993.89</span> <span id="zmd8085zl">+10.19</span> <span id="zmd8085zjf">↑0.12</span></div>
                </div>
            </div>
            <div class="indices_tab apple_indices_tab">
                <div class="active">日</div>
                <div>周环比</div>
                <div>月环比</div>
                <div>周同比</div>
                <div>月同比</div>
            </div>
            <div class="indices_chart" id="appleIndicesChart"></div>
        </div>
    </div>
</div>

<!-- 引入js文件 -->
<l:script path="jquery.js,echarts-custom.js,priceIndices/priceIndicesChart.js,priceIndices/priceIndices.js" />
<script>
    $("body").on("click", ".home", function(){
        $('.nav-menu-item', window.parent.document).eq(0).addClass('active').siblings('.nav-menu-item').removeClass('active');
       $('#mainFrame', window.parent.document).attr('src', "./jsp/index/index.jsp");
    })
</script>
</body>
</html>
