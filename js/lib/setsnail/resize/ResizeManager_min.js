function ResizeManager(settings) {
    
    var _instance = new EventDispatcher,
        _settings = settings,
        _screenWidth = 0,
        _windowWidth = 0,
        _windowHeight = 0,
        _currBreakPoint = null;

    function init() {
        window.addEventListener("resize", onWindowResize);
        window.onorientationchange = onWindowResize;
        onWindowResize();
    }

    // resize all modules
    function onWindowResize() {

        _screenWidth = window.innerWidth;
        _settings.getRemoveScrollbar() && (_screenWidth -= 14);
        _windowWidth = _screenWidth;
        var gridRoundTo = _settings.getRoundWidthTo();
        
        _windowWidth = Math.ceil(_windowWidth / gridRoundTo) * gridRoundTo;
        _windowHeight = window.innerHeight;
        BrowserDetect.DESKTOP && (-1 !== _settings.getMinWidth() && _windowWidth < _settings.getMinWidth() && (_windowWidth = _settings.getMinWidth()),
        -1 !== _settings.getMinHeight() && _windowHeight < _settings.getMinHeight() && (_windowHeight = _settings.getMinHeight()),
        -1 !== _settings.getMaxWidth() && _windowWidth > _settings.getMaxWidth() && (_windowWidth = _settings.getMaxWidth()), 
        -1 !== _settings.getMaxHeight() && _windowHeight > _settings.getMaxHeight() && (_windowHeight = _settings.getMaxHeight()));
        var newBreakPoint = getNewBreakPoint();
        newBreakPoint !== _currBreakPoint && (_currBreakPoint = newBreakPoint, _instance.dispatchEvent(ResizeEvents.BREAKPOINT));
        _instance.dispatchEvent(ResizeEvents.RESIZE);

    }

    function getNewBreakPoint() {
        var forceBreakPoint = _settings.getForceBreakPoint();
        if (null !== forceBreakPoint) return forceBreakPoint;
        var breakPoints = _settings.getBreakPoints();
        if (null === breakPoints) return null;
        for (var l = breakPoints.length, breakPoint = null, i = 0; l > i; i += 1)
            if (breakPoint = breakPoints[i], _windowWidth < breakPoint.width) return breakPoint;
        return null
    }
    
    return init(), 
    _instance.getWindowWidth = function() {
        return _windowWidth
    }, 
    _instance.getWindowHeight = function() {
        return _windowHeight
    }, 
    _instance.getSettings = function() {
        return _settings
    }, 
    _instance.getScreenWidth = function() {
        return _screenWidth
    }, 
    _instance.getScreenHeight = function() {
        return _instance.getWindowHeight()
    }, 
    _instance.getBreakPoint = function() {
        return _currBreakPoint.id
    }, 
    _instance.getBreakPointIndex = function() {
        return _currBreakPoint.index
    }, 
    _instance
}