function TouchInfo() {
    
    function killClick() {
        _clickable = !1
    }

    function checkIfHold() {
        _holding && callback(_instance.onHold)
    }

    function callback(func) {
        null !== func && void 0 !== func && func(_instance)
    }

    function touches(touch, target) {
        var deltaX = touch.clientX - parseInt(target.style.left),
            deltaY = touch.clientY - parseInt(target.style.top);
        return deltaX > 0 && deltaX < parseInt(target.style.width) && deltaY > 0 && deltaY < parseInt(target.style.height) ? !0 : !1
    }
    var _holdTimeout, _clickHoldTimeout, _instance = {},
        HOLD_TIME = 250,
        MAX_CLICK_DRAG_DIST = 14,
        MAX_CLICK_HOLD_TIME = 300,
        _holding = !1,
        _clickable = !1,
        _isOver = !1,
        _currentMoveDist = 0,
        _preClientX = 0,
        _preClientY = 0;
    return _instance.onDown = null, _instance.onMove = null, _instance.onUp = null, _instance.onClick = null, _instance.onOver = null, _instance.onOut = null, _instance.onHold = null, _instance.touch = null, _instance.clickOrHold = !1, _instance.clickOrUp = !1, _instance.clickWithinBounds = !0, _instance.listenOn = null, _instance.removeAllCallbacks = function() {
        _instance.onDown = _instance.onMove = _instance.onUp = _instance.onClick = _instance.onOver = _instance.onOut = _instance.onHold = null
    }, 
    _instance.handleBegan = function() {
        _holding = !0, _clickable = !0, _preClientX = _instance.touch.clientX, _preClientY = _instance.touch.clientY, _holdTimeout && clearTimeout(_holdTimeout), _clickHoldTimeout && clearTimeout(_clickHoldTimeout), _holdTimeout = setTimeout(checkIfHold, HOLD_TIME), _instance.clickOrHold && (_clickHoldTimeout = setTimeout(killClick, MAX_CLICK_HOLD_TIME)), callback(_instance.onDown)
    }, 
    _instance.handleMoved = function() {
        _holding = !1, _currentMoveDist += Math.abs(_preClientX - _instance.touch.clientX + _preClientY - _instance.touch.clientY), _preClientX = _instance.touch.clientX, _preClientY = _instance.touch.clientY, callback(_instance.onMove), (null !== _instance.onOver || null !== _instance.onOut) && (_isOver ? touches(_instance.touch, _instance.touch.target) || (_isOver = !1, callback(_instance.onOut)) : touches(_instance.touch, _instance.touch.target) && (_isOver = !0, callback(_instance.onOver)))
    }, 
    _instance.handleEnded = function() {
        var clickDispatched = !1;
        _instance.clickOrUp ? _clickable && MAX_CLICK_DRAG_DIST > _currentMoveDist ? (clickDispatched = !0, callback(_instance.onClick)) : callback(_instance.onUp) : (callback(_instance.onUp), _clickable && MAX_CLICK_DRAG_DIST > _currentMoveDist && (clickDispatched = !0, callback(_instance.onClick))), _instance.clickWithinBounds && !clickDispatched && touches(_instance.touch, _instance.touch.target) && callback(_instance.onClick), _isOver = !1, _currentMoveDist = 0, _holding = !1
    }, _instance
}

TouchInfo._objectPool = [], TouchInfo.getInfo = function(touch, clickOrHold, clickOrUp, clickWithinBounds, listenOn) {
    var info = 0 !== TouchInfo._objectPool.length ? TouchInfo._objectPool.pop() : new TouchInfo;
    return info.touch = touch, info.clickOrHold = clickOrHold, info.clickOrUp = clickOrUp, info.clickWithinBounds = clickWithinBounds, info.listenOn = listenOn, info
}, 
TouchInfo.pool = function(touchInfo) {
    touchInfo.removeAllCallbacks(), touchInfo.touch = null, touchInfo.listenOn = null, TouchInfo._objectPool.push(touchInfo)
}, 
TouchInfo.touches = function(touch, item) {
    var hitPt = item.globalToLocal(new Point(touch.globalX, touch.globalY)),
        hitObj = item.hitTest(hitPt, !0);
    return hitObj ? !0 : !1
};