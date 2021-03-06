function RetinaHandle() {
    
    var _refreshTimeout, _instance = new EventDispatcher,
        _isFirstRun = !0,
        _pixelRatio = 1,
        _assetsScale = 1,
        _assetsScaleStr = "@x1",
        _assetsScalePct = 1,
        _supportedScales = [1, 2];
    init();


    function init() {
        calculate();
    }

    function calculate() {
        clearTimeout(_refreshTimeout), 
        _pixelRatio = window.devicePixelRatio;
        _pixelRatio || (_pixelRatio = 1);
        var currScale, scaleDist, i = 0,
            l = _supportedScales.length,
            minScaleDist = 1e4,
            targetScale = 1;
        for (i = 0; l > i; i += 1) currScale = _supportedScales[i], 
        scaleDist = Math.abs(currScale - _pixelRatio), 
        minScaleDist > scaleDist && (minScaleDist = scaleDist, targetScale = currScale);
        _assetsScale = targetScale, _assetsScalePct = 1 / _assetsScale;
        var oldAssetsScaleStr = _assetsScaleStr;
        _assetsScaleStr = "@x" + _assetsScale;
        _assetsScaleStr != oldAssetsScaleStr ? (traceValues(), _instance.dispatchEvent(RetinaHandleEvents.CHANGE)) : _isFirstRun && (_isFirstRun = !1, traceValues());
        _refreshTimeout = setTimeout(calculate, 2e3);
    }

    function traceValues() {}
    
    return  _instance.setSupportedScales = function(array) {
        _supportedScales = array;
    }, 
    _instance.getAssetScaleStr = function() {
        return _assetsScaleStr
    }, 
    _instance.getAssetScalePercent = function() {
        return _assetsScalePct
    }, 
    _instance
}