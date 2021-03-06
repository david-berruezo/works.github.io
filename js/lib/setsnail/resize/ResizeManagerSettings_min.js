function ResizeManagerSettings() {
    
    var _instance = {},
        _minWidth = -1,
        _maxWidth = -1,
        _minHeight = -1,
        _maxHeight = -1,
        _roundWidthTo = 1,
        _removeScrollbar = !0,
        _breakPoints = null,
        _idToBreakPoint = {},
        _forceBreakPointId = null;
    return _instance.setBreakPoints = function(data) {
        _breakPoints = data;
        for (var l = _breakPoints.length, breakPoint = null, i = 0; l > i; i += 1) 
        breakPoint = _breakPoints[i], breakPoint.index = l - 1 - i, 
        _idToBreakPoint[breakPoint.id] = breakPoint
    }, 
    _instance.forceBreakPoint = function(id) {
        _forceBreakPointId = id
    }, 
    _instance.getForceBreakPoint = function() {
        return null === _forceBreakPointId ? null : _idToBreakPoint[_forceBreakPointId]
    }, 
    _instance.getBreakPoints = function() {
        return _breakPoints
    }, 
    _instance.setMinWidth = function(width) {
        _minWidth = width
    }, 
    _instance.getMinWidth = function() {
        return _minWidth
    }, 
    _instance.setMaxWidth = function(width) {
        _maxWidth = width
    },
    _instance.getMaxWidth = function() {
        return _maxWidth
    }, 
    _instance.setMinHeight = function(height) {
        _minHeight = height
    }, 
    _instance.getMinHeight = function() {
        return _minHeight
    }, 
    _instance.setMaxHeight = function(height) {
        _maxHeight = height
    }, 
    _instance.getMaxHeight = function() {
        return _maxHeight
    }, 
    _instance.setRoundWidthTo = function(val) {
        _roundWidthTo = val
    }, 
    _instance.getRoundWidthTo = function() {
        return _roundWidthTo
    }, 
    _instance.setRemoveScrollbar = function(val) {
        _removeScrollbar = val
    }, 
    _instance.getRemoveScrollbar = function() {
        return _removeScrollbar
    }, 
    _instance
}