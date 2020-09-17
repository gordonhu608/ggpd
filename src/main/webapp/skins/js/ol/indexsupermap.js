function initMap() {
    var target = document.getElementById('weatherWarningChart');
    //天地图影像地图(含注记)
    var url = baseLayerUrl,
        map = new ol.Map({
            target: target,
            view: new ol.View({
                center: [105.3, 39.9],
                zoom: 3,
                maxzoom: 15,
                minzoom: 2,
                projection: 'EPSG:4326',
                multiWorld: true
            }),
        });
    var layer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest({
            url: url
        }),
        projection: 'EPSG:4326'
    });
    map.addLayer(layer);
}

window.onload = function () {
    initMap();
}




