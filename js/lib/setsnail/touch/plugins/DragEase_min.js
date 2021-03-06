function DragEase() {
    
    function resetLastDist() {
        _lastDist.x = _lastDist.y = 0
    }

    function renderEase() {
        _renderVars.renderEase();
        _instance.easeInfo.easeRatio = _renderVars.easeRatio;
        _instance.easeInfo.linearEaseRatio = _renderVars.ratio;
        var reversedRatio = 1 - _renderVars.easeRatio;
        _instance.dragInfo.dist.x = _instance.easeInfo.easeDistance.x * reversedRatio;
        _instance.dragInfo.dist.y = _instance.easeInfo.easeDistance.y * reversedRatio;
        updateEase()
    }

    function completeEase() {
        for (var l = _easePlugins.length, i = 0; l > i; i++) _easePlugins[i].easeEnded();
        null !== _onEnd && _onEnd()
    }

    function updateEase() {
        for (var l = _easePlugins.length, i = 0; l > i; i++) _easePlugins[i].easeUpdated();
        null !== _onMove && _onMove()
    }
    var _instance = new DraggerEasePlugin;
    _instance.time = 2, _instance.distance = 1, _instance.ease = Expo.easeOut;
    var _lastDistResetter, _easePlugins = [],
        _lastDist = {
            x: 0,
            y: 0
        },
        _renderVars = new RenderVars;
    _instance.priority = 1e4;
    var _onStart = null,
        _onMove = null,
        _onEnd = null;
    return _instance.onEnd = function(callback) {
        _onEnd = callback
    }, 
    _instance.onMove = function(callback) {
        _onMove = callback
    }, 
    _instance.onStart = function(callback) {
        _onStart = callback
    }, 
    _instance.setEasePlugins = function(plugins) {
        _easePlugins = plugins
    }, 
    _instance.easeStarted = function() {
        _renderVars.ease = _instance.ease
    }, 
    _instance.easeUpdated = function() {
        for (var l = _instance.dragItems.length, item = null, i = 0; l > i; i++) item = _instance.dragItems[i], _instance.use3DTransform === !0 ? (item.aniSetY(item.aniGetY() + _instance.dragInfo.dist.y), item.aniSetX(item.aniGetX() + _instance.dragInfo.dist.x), item.aniRender()) : (item.style.left = parseFloat(item.style.left) + _instance.dragInfo.dist.x + "px", item.style.top = parseFloat(item.style.top) + _instance.dragInfo.dist.y + "px")
    }, 
    _instance.easeEnded = function() {
        _instance.easeUpdated()
    }, 
    _instance.dragStarted = function() {
        _instance.stop(), null !== _onStart && _onStart()
    }, 
    _instance.dragMove = function() {
        _lastDist.x = _instance.dragInfo.dist.x, _lastDist.y = _instance.dragInfo.dist.y, clearTimeout(_lastDistResetter), _lastDistResetter = setTimeout(resetLastDist, 100), null !== _onMove && _onMove()
    }, 
    _instance.dragEnded = function() {
        _instance.killTweens(), _instance.easeInfo.easeDistance = {
            x: _lastDist.x,
            y: _lastDist.y
        }, _instance.easeInfo.easeDistance.x *= _instance.distance, _instance.easeInfo.easeDistance.y *= _instance.distance;
        for (var l = _easePlugins.length, i = 0; l > i; i++) _easePlugins[i].easeStarted();
        _renderVars.ratio = 0, TweenMax.to(_renderVars, _instance.time, {
            ratio: 1,
            onUpdate: renderEase,
            onComplete: completeEase,
            ease: Linear.easeNone
        })
    }, 
    _instance.stop = function() {
        TweenMax.killTweensOf(_renderVars);
        completeEase();
    }, 
    _instance
}

function RenderVars() {
    var _instance = {};
    _instance.lastEaseRatio = 0;
    _instance.ease = Linear.easeNone;
    _instance.ratio = 0;
    _instance.easeRatio = 0;
    return _instance.renderEase = function() {
        lastEaseRatio = _instance.easeRatio;
        _instance.easeRatio = _instance.ease.getRatio(_instance.ratio);
    }, 
    _instance
}