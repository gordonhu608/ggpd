$(function () {
    InitMap();
})

function InitMap() {
    var target = document.getElementById('map');
    var url = "http://202.127.45.68/iserver/services/map-2020XXGS/rest/maps/2020XXGS";
    map = new ol.Map({
        target: target,
        view: new ol.View({
            center: [120.91 , 37.32],
            zoom: 9,
            projection: 'EPSG:4326',
            multiWorld: true
        }),
    });
    var layer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest({
            url: url
        }),
        projection: 'EPSG:4326',
        opacity: 0.7
    });
    var baseLayer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest({
            //天地图影像地图(含注记)
            url : baseLayerUrl,
        }),
        projection: 'EPSG:4326'
    });

    map.addLayer(baseLayer);
    map.addLayer(layer);
}

