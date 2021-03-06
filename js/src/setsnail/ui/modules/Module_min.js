function Module(guides) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","module");
    _instance.style.position = "absolute";
    _instance.width = 0;
    _instance.height = 0;
    _instance.guides = guides;
    _instance.moduleId = "NOT STE";
    _instance.dispatcher = null;
    _instance.scrollInfo = {
        y: 0,
        index: 0
    };
    var _callbackResize = null,
        _callbackReposition = null,
        _callbackLoaded = null,
        _space = 0;

    return _instance.theme = UIColors.LIGHT, _instance.init = function() {
        _instance.doneLoading()
    },
    _instance.doneLoading = function() {
        null !== _callbackLoaded && _callbackLoaded()
    }, 
    _instance.setSpace = function(space) {
        _space = space
    }, 
    _instance.getSpace = function() {
        return -1 === _space ? Module.getDefaultSpace() : _space
    }, 
    _instance.resize_desktop = function(width, height) {
        _instance.width = width, _instance.height = height
    }, 
    _instance.resize_tablet = function(width, height) {
        _instance.resize_desktop(width, height)
    }, 
    _instance.resize_mobile = function(width, height) {
        _instance.resize_tablet(width, height)
    }, 
    _instance.setCallbackResize = function(callback) {
        _callbackResize = callback
    }, 
    _instance.setCallbackReposition = function(callback) {
        _callbackReposition = callback
    }, 
    _instance.setCallbackLoaded = function(callback) {
        _callbackLoaded = callback
    }, 
    _instance.callbackResize = function() {
        null !== _callbackResize && _callbackResize(_instance)
    }, 
    _instance.visibilityRatio = function() {}, _instance.callbackReposition = function() {
        null !== _callbackReposition && _callbackReposition(_instance)
    }, 
    _instance.scrollToModule = function() {}, _instance.getX = function() {
        return _instance.aniGetX()
    }, 
    _instance.kill = function() {}, _instance.getWidth = function() {
        return _instance.width + _instance.getSpace()
    }, 
    _instance.getHeight = function() {
        return _instance.height + _instance.getSpace()
    }, 
    _instance
}

Module.DEFAULT_SPACING = [80, 80, 40], Module.getDefaultSpace = function() {
    return Module.DEFAULT_SPACING[Assets.RESIZE_MANAGER.getBreakPointIndex()]
};