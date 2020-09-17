

$(function () {

    InitMap();

    getMapMessage();
})

var map;
var iconLayer;
var featureSelected = new ol.Feature();

//地图初始化
function InitMap() {
    map = new ol.Map({
        target: 'map',
        view: new ol.View({
            center: [104, 35.4],
            zoom: 5,
            projection: 'EPSG:4326',
            multiWorld: true
        }),
    });

    addBaseLayer();
    addProvincLayer();
    addChinaLayer();
    addIconLayer();

    //openlayrs3.x 4.x 6.x
    //popup弹出框,使用overlay实现
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');
    var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度. 单位为毫秒（ms）
        }
    });

    //关闭弹出框
    closer.onclick = function() {
        overlay.setPosition(undefined);
        closer.blur();
        var style = new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 0.3)'
            }),
            stroke: new ol.style.Stroke({
                color: 'blue',
                width: 2
            }),
            image: new ol.style.Icon({
                // anchor: [0.5, 1],
                offset:[0,1],
                //图标缩放比例
                scale:0.8,
                //透明度
                opacity: 1,
                //图标的url
                src: context+"/img/greenEnterprise_normal.png"
            }),
        });
        featureSelected.setStyle(style);
        return false;
    };

    //左键单击弹出popup事件
    map.addEventListener('click', function(evt) {
        var style = new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 0.3)'
            }),
            stroke: new ol.style.Stroke({
                color: 'blue',
                width: 2
            }),
            image: new ol.style.Icon({
                // anchor: [0.5, 1],
                offset:[0,1],
                //图标缩放比例
                scale:0.8,
                //透明度
                opacity: 1,
                //图标的url
                src: context+"/img/greenEnterprise_normal.png"
            }),
        });
        featureSelected.setStyle(style);
        var coordinate = evt.coordinate;
        var feature = map.forEachFeatureAtPixel(map.getPixelFromCoordinate(evt.coordinate), function(feature) {
            return feature
        });
        if(!(feature.getProperties().name == "全国")){
            featureSelected = feature;
            var style = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 0.3)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'blue',
                    width: 2
                }),
                image: new ol.style.Icon({
                    // anchor: [0.5, 1],
                    offset:[0,1],
                    //图标缩放比例
                    scale:0.8,
                    //透明度
                    opacity: 1,
                    //图标的url
                    src: context+"/img/greenEnterprise_emphesis.png"
                }),
            });
            feature.setStyle(style);
            content.innerHTML = "<div class='content'>"+
                '<div><span>名称：</span><span>' + feature.getProperties().name + '</span></div>'+
                // '<div><span>产品：</span><span>' + feature.getProperties().adcode + '</span></div>'+
                '<div><span>核准产量：</span><span>' + feature.getProperties().adcode + '</span></div>'+
                '<div><span>证书颁发日期：</span><span>' + feature.getProperties().bfrq + '</span></div>'+
                '<div><span>证书到期日期：</span><span>' + feature.getProperties().dqrq + '</span></div>'+
                '</div>';
            overlay.setPosition(coordinate);
            map.addOverlay(overlay);
        }
    });

}

function addBaseLayer(){
    var baseLayer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest({
            // url : baseLayerUrl,
            url:baseLayerUrl,
            projection: 'EPSG:4326',
        }),
        zIndex: 1,
    });
    map.addLayer(baseLayer);
}

function addIconLayer(){
    iconLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 0.3)'
            }),
            stroke: new ol.style.Stroke({
                color: 'blue',
                width: 2
            }),
            // image: new ol.style.Circle({
            //     radius: 10,
            //     fill: new ol.style.Fill({
            //         color: '#ffcc33'
            //     })
            // }),
            image: new ol.style.Icon({
                // anchor: [0.5, 1],
                offset:[0,1],
                //图标缩放比例
                scale:0.8,
                //透明度
                opacity: 1,
                //图标的url
                src: context+"/img/greenEnterprise_normal.png",
                // src: context + "/img/greenEnterprise_normal.png"
            }),
            //文本样式
            text: new ol.style.Text({
                //对齐方式
                textAlign: 'center',
                //文本基线
                textBaseline: 'middle',
                //字体样式
                font: 'normal 14px 微软雅黑',
                //文本内容
                text: ''
            })
        }),
        zIndex: 999,
    });
    map.addLayer(iconLayer);
}

function addProvincLayer(){
    var sourceProvinceparam = {
        url : context+"/skins/js/ol/province.geojson",
        format: new ol.format.GeoJSON()
    };
    var sourceProvince = new ol.source.Vector(sourceProvinceparam);
    var vectorProvince = new ol.layer.Vector({
        title: "省界",
        projection: 'EPSG:4326',
        source: sourceProvince,
        zIndex: 2,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color:'rgba(0,0,0,0)'
            }),
            stroke: new ol.style.Stroke({
                color: '#92A57A',
                width: 1
            })
        }),
        visible:true
    });
    map.addLayer(vectorProvince);
}

function addChinaLayer(){
    var sourceChinaparam = {
        url : context+"/skins/js/ol/chinaBoundry.geojson",
        format: new ol.format.GeoJSON()
    };
    var sourceChina = new ol.source.Vector(sourceChinaparam);
    var vectorChina = new ol.layer.Vector({
        title: "国界",
        source: sourceChina,
        projection: 'EPSG:4326',
        zIndex: 3,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color:'rgba(0,0,0,0)'
            }),
            stroke: new ol.style.Stroke({
                color: '#E3B754',
                width: 2
            })
        }),
        visible:true
    });
    map.addLayer(vectorChina);
}
/*显示并编辑区域**********************************************************************************/
var greenEnterprisePoints = [];
function AddPolygon(item) {
    var x = parseFloat(item.WD);
    var y = parseFloat(item.JD);
    var plygon = new ol.geom.Point([y,x]);
    //多边形要素类
    var feature = new ol.Feature({
        geometry: plygon
    });
    feature.setProperties({'name':item.QYMC});
    feature.setProperties({'adcode':item.CP});
    feature.setProperties({'bfrq':item.ZSQFQR});
    feature.setProperties({'dqrq':item.ZSDQRQ});
    greenEnterprisePoints.push(feature);
    iconLayer.getSource().addFeature(feature);
}

function getMapMessage(){
    var url = context + "/service/greenEnterprise/getGreenEnterpriseData";
    var params = {};
    $.ajax({
        type: "post",
        contentType: "application/json;charset=UTF-8",
        url: url,
        data: JSON.stringify(params),
        success: function (result) {
            if (result && result.length > 0) {
                for (var i = 0; i < 145; i++) {
                    AddPolygon(result[i]);
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {}
    });
}

