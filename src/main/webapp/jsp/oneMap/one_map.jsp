<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib uri="/tags/loushang-web" prefix="l"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>数据监测</title>
    <!-- 引入css文件 -->
    <l:link path="css/font-awesome.css,css/oneMap/one_map.css" />
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
    <style>
        .data_in{
            width: 100%;
            height: calc(100% - 0.35rem);
            display: inline-flex;
            margin-top: 0.1rem;
            text-align: center;
        }
        .data_in_left{
            width: 50%;
            height: 100%;
        }
        .data_in_left > div:last-child{
           height: 100%;
        }
        .data_in_right{
            width: 50%;
            height: 100%;
        }
        .data_in_right > div:last-child{
            height: 100%;
        }
    </style>
</head>

<body>
    <div class="crumbs">当前位置: <span class="home">首页</span> > <span>数据监测</span></div>
    <div class="container" id="one-map">
        <div class="left_content">
            <div class="module_line"></div>
            <div class="data_overview">
                <div class="data_title">数据总体情况</div>
                <div class="data_info">
                    <div>
                        <div class="total_data_title">累计数据入库量 (结构化数据)</div>
                        <div class="data_count"><span v-text="data[0].lj"></span>亿条</div>
                        <div class="data_category">
                            <div>
                                <div class="category_count" v-text="data[0].byxz"></div>
                                <div>本月新增</div>
                            </div>
                            <div>
                                <div class="category_count" v-text="data[0].bnxz"></div>
                                <div>本年新增</div>
                            </div>
                        </div>
                    </div>
                    <div class="overview_unstructured">
                        <div class="total_data_title">累计数据总量 (非结构化数据)</div>
                        <div class="data_count"><span v-text="data[0].fjgzl"></span>GB</div>
                        <div class="data_category">
                            <div>
                                <div class="category_count" v-text="data[0].fjgbyxz"></div>
                                <div>本月新增</div>
                            </div>
                            <div>
                                <div class="category_count" v-text="data[0].fjgbnxz"></div>
                                <div>本年新增</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="data_collect">
                <div class="module_top">
                    <div class="module_title">数据日度入库量</div>
                </div>
                <div class="data_in">
                    <div class="data_in_left">
                        <div>结构化数据</div>
                        <div id="collectStructuredChart"></div>
                    </div>
                    <div class="data_in_right">
                        <div>非结构化数据</div>
                        <div id="collectUnstructuredChart"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right_content">
            <div class="first_row">
                <div class="data_resource">
                    <div class="module_top">
                        <div class="module_title">数据来源</div>
                        <div class="chart_tab">
                            <div class="active">结构化数据</div>
                            <div>非结构化数据</div>
                        </div>
                    </div>
                    <div class="tab_content">
                        <div id="resourceStructuredChart"></div>
                        <div id="resourceUnstructuredChart" style="display: none;"></div>
                    </div>
                </div>
                <div class="data_category_rate">
                    <div class="module_top">
                        <div class="module_title">数据分类占比</div>
                        <div class="chart_tab">
                            <div class="active">结构化数据</div>
                            <div>非结构化数据</div>
                        </div>
                    </div>
                    <div class="tab_content">
                        <div id="categoryStructuredChart"></div>
                        <div id="categoryUnstructuredChart" style="display: none;"></div>
                    </div>
                </div>
            </div>
            <div class="second_row">
                <div class="data_handle">
                    <div class="module_top">
                        <div class="module_title">近一周数据处理情况</div>
                        <div class="chart_tab">
                            <div class="active">结构化数据</div>
                            <div>非结构化数据</div>
                        </div>
                    </div>
                    <div class="tab_content">
                        <div id="handleStructuredChart"></div>
                        <div id="handleUnstructuredChart" style="display: none;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- 引入js文件 -->
    <l:script path="jquery.js,echarts-custom.js,vue.js,oneMap/one_map_chart.js,oneMap/one_map.js" />
    <script>
        $("body").on("click", ".home", function(){
            $('.nav-menu-item', window.parent.document).eq(0).addClass('active').siblings('.nav-menu-item').removeClass('active');
            $('#mainFrame', window.parent.document).attr('src', "./jsp/index/index.jsp");
        })
    </script>
</body>

</html>
