/**
 * Created by xiechl on 2020/9/8.
 */
var miniSymbolSize = 3;
var priceFieldName = "zjj";
// 初始化地图
function initMap() {
    var target = document.getElementById('map');
    var map = new ol.Map({
        target: target,
        view: new ol.View({
            center: [115,34],
            zoom: 5,
            projection: 'EPSG:4326',
            multiWorld: true
        })
    });
    var baseLayer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest({
            url: baseLayerUrl,
            wrapX: true
        }),
        projection: 'EPSG:4326'
    });
    map.addLayer(baseLayer);
    var overLay = initOverlay();
    map.addOverlay(overLay);
    overLay.setPosition(undefined);
    return map;
}

// 初始化气泡
function initOverlay() {
    var container = document.getElementById('popup')
    var closer = document.getElementById('popup-closer')
    var overlay = new ol.Overlay({
        id: 'overlayInfo',
        element: container,
        offset: [0, 0],
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    });
    closer.onclick = function () {
        overlay.setPosition(undefined);
        closer.blur();
        return false
    };
    return overlay;
}

// 价格数据地图
function priceDataMap(map) {
    var overLay = map.getOverlayById("overlayInfo");

    var fill = new ol.style.Fill({
        color: '#f5ff19'
    });
    var stroke = new ol.style.Stroke({
        color: '#f5ff19',
        width: 0
    });
    var style = new ol.style.Style({
        image: new ol.style.Circle({
            fill: fill,
            stroke: stroke,
            radius: miniSymbolSize
        }),
        fill: fill,
        stroke: stroke
    });
    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: dataUrl,
            format: new ol.format.GeoJSON()
        }),
        style: function (feature) {
            var price = feature.get(priceFieldName);
            if(price>miniSymbolSize)
                style.getImage().setRadius(price);
            else
                style.getImage().setRadius(miniSymbolSize);
            return style;
        }
    });
    map.addLayer(vectorLayer);

    var hFill = new ol.style.Fill({
        color: '#ff0500'
    });
    var hStroke = new ol.style.Stroke({
        color: '#ff0500',
        width: 0
    });
    var highlightStyle = new ol.style.Style({
        image: new ol.style.Circle({
            fill: hFill,
            stroke: hStroke,
            radius: miniSymbolSize
        }),
        fill: fill,
        stroke: stroke
    });

    var featureOverlay = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: function (feature) {
            var price = feature.get(priceFieldName);
            if(price>miniSymbolSize)
                highlightStyle.getImage().setRadius(price);
            else
                highlightStyle.getImage().setRadius(miniSymbolSize);
            return highlightStyle;
        }
    });
    map.addLayer(featureOverlay);

    var highLightFeature;
    map.on('pointermove', function (evt) {
        if (evt.dragging) {
            return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
            return feature;
        },{hitTolerance:2});

        if (feature !== highLightFeature) {
            if (highLightFeature) {
                featureOverlay.getSource().removeFeature(highLightFeature);
                overLay.setPosition(undefined)
            }
            if (feature) {
                featureOverlay.getSource().addFeature(feature);

                var content = document.getElementById('popup-content');
                var props = feature.getProperties();
                content.innerHTML = '<div class="redFont">' + props['zjj'] + '元/斤</div>' + // 中间价
                '<div>' + props['pfscjc'] + '</div>'; // 批发市场简称

                var geom = feature.getGeometry().getCoordinates();
                overLay.setPosition(geom);
            }
            highLightFeature = feature;
        }
    });

    map.on('click', function (evt) {
        // displayFeatureInfo(evt.pixel);


    });

    // var extent = vectorLayer.getSource().getExtent();
    // map.getView().fit(extent, {duration: 400, padding: [30, 30, 30, 30]})
}

// 智慧果园地图
function wisdomOrchardMap(map) {
    var overLay = map.getOverlayById("overlayInfo");
    var fill = new ol.style.Fill({
        color: '#f5ff19'
    });
    var stroke = new ol.style.Stroke({
        color: '#f5ff19',
        width: 0
    });
    var style = new ol.style.Style({
        image: new ol.style.Icon({
            src: '../../skins/skin/img/sjzht/apple.png'
        }),
        fill: fill,
        stroke: stroke
    });
    var vectorSrc = new ol.source.Vector({
        url: dataUrl2,
        format: new ol.format.GeoJSON()
    });
    vectorSrc.on('addfeature', function (evt) {
        var props = evt.feature.getProperties();
        changePageVal(props);
    });
    var vectorLayer = new ol.layer.Vector({
        source: vectorSrc,
        style: function (feature) {
            return style;
        }
    });
    map.addLayer(vectorLayer);

    var highlightStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: '../../skins/skin/img/sjzht/appleSel.png'
        }),
        fill: fill,
        stroke: stroke
    });

    var featureOverlay = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: function (feature) {
            return highlightStyle;
        }
    });
    map.addLayer(featureOverlay);

    var highLightFeature;
    map.on('pointermove', function (evt) {
        if (evt.dragging) {
            return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
            return feature;
        },{hitTolerance:2});

        if (feature !== highLightFeature) {
            if (highLightFeature) {
                featureOverlay.getSource().removeFeature(highLightFeature);
                overLay.setPosition(undefined)
            }
            if (feature) {
                featureOverlay.getSource().addFeature(feature);

                var content = document.getElementById('popup-content');
                var props = feature.getProperties();
                // content.innerHTML = '<div class="redFont">' + props['zjj'] + '元/斤</div>' + // 中间价
                //     '<div>' + props['pfscjc'] + '</div>'; // 批发市场简称
                //
                // var geom = feature.getGeometry().getCoordinates();
                // overLay.setPosition(geom);

                changePageVal(props);
            }
            highLightFeature = feature;
        }
    });

    map.on('click', function (evt) {
        // displayFeatureInfo(evt.pixel);
    });

    var extent = vectorLayer.getSource().getExtent();
    map.getView().fit(extent, {duration: 400, padding: [30, 30, 30, 30]});
}

function changePageVal(props) {
    var titleDiv = parent.document.getElementById('wisdomOrchardTitle');
    titleDiv.innerText = props.gymc;

    var titleDiv2 = parent.document.getElementById('checked-orchard');
    titleDiv2.innerText = props.gymc;

    var monitorTimes = parent.document.getElementsByClassName('monitor_time');
    for(var i = 0;i<monitorTimes.length;i++){
        var m = monitorTimes[i];
        m.innerText = props.jcsj
    }
    var div = parent.document.getElementById('monitor_val_wd');
    div.innerText = props.wd;
    div = parent.document.getElementById('monitor_val_sd');
    div.innerText = props.sd;
    div = parent.document.getElementById('monitor_val_gz');
    div.innerText = props.zfs;
    div = parent.document.getElementById('monitor_val_wd1')
    div.innerText = props.sq20wd;
    div = parent.document.getElementById('monitor_val_wd2')
    div.innerText = props.sq40wd;
    div = parent.document.getElementById('monitor_val_wd3')
    div.innerText = props.sq60wd;
    div = parent.document.getElementById('monitor_val_hs1')
    div.innerText = props.sq20hsl;
    div = parent.document.getElementById('monitor_val_hs2')
    div.innerText = props.sq40hsl;
    div = parent.document.getElementById('monitor_val_hs3')
    div.innerText = props.sq60hsl;
}

window.onload = function () {
    var map = initMap();
    if(mapType === "1"){
        priceDataMap(map);
    } else if(mapType === "2"){
        wisdomOrchardMap(map);
    }
};