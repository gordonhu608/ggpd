; (function (win) {
    var tid;

    function refreshRem() {
        var designSize = 1506; // 设计图尺寸
        var html = document.documentElement;
        var wW = html.clientWidth;
        var rem = wW * 100 / designSize;
        document.documentElement.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();

})(window);