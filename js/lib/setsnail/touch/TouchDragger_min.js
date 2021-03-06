function TouchDragger(group, listeners) {
    function setActionsToThis() {
        _start = _instance.start, _move = _instance.move, _end = _instance.end, _stopTakeOverOnUp = !1
    }

    function onItemsUpdated() {
        dispose(), listen()
    }

    function listen() {
        addListenerTo(_listeners ? _listeners : _dragger.getAllItems())
    }

    function newTouch(touchInfo) {
        void 0 !== _onNewTouch && _onNewTouch(touchInfo)
    }

    function userDown(e) {
        if (_isActive) {
            var touch = _touchInfo ? _touchInfo.touch : e.touch;
            _preClientX = touch.clientX, _preClientY = touch.clientY, _isDragging = !0, _start(), _instance.dispatchEvents && _instance.dispatchEvent(TouchDragger.ON_START, {
                touchInfo: e
            })
        }
    }

    function userMove(e) {
        if (_isActive) {
            var touch = _touchInfo ? _touchInfo.touch : e.touch;
            _move(touch.clientX - _preClientX, touch.clientY - _preClientY), _preClientX = touch.clientX, _preClientY = touch.clientY, _instance.dispatchEvents && _instance.dispatchEvent(TouchDragger.ON_MOVE, {
                touchInfo: e
            })
        }
    }

    function userUp(e) {
        _isActive && (_isDragging = !1, _end(), _stopTakeOverOnUp && setActionsToThis(), _basedOnTouchinfo && (listen(), _touchInfo = null, _basedOnTouchinfo = !1), _instance.dispatchEvents && _instance.dispatchEvent(TouchDragger.ON_END, {
            touchInfo: e
        }))
    }
    var _instance = new EventDispatcher;
    _instance.dispatchEvents = !0;
    var _takeOver, _start, _move, _end, _onNewTouch, _touchInfo, _dragger = null,
        _listeners = null,
        _isActive = !1,
        _touchables = [],
        _autoKill = !0,
        _stopTakeOverOnUp = !1,
        _basedOnTouchinfo = !1,
        _isDragging = !1;
    _instance.init = function(group, listeners) {
        _dragger = group, _listeners = listeners, _dragger.addEventListener(GroupDragger.NUM_OF_ITEMS_CHANGEST, onItemsUpdated), setActionsToThis(), _instance.addListenerTo(null !== _listeners && void 0 !== _listeners ? _listeners : _dragger.getAllItems()), _instance.activate()
    }, _instance.enable3DTransform = function() {
        _dragger.enable3DTransform()
    }, _instance.add = function(items, plugins) {
        _dragger.addGroup(items, plugins), null !== _listeners && void 0 !== _listeners && _instance.addListenerTo(items)
    }, _instance.enableAutokill = function() {
        _autoKill = !0, _touchables.forEach(function(touch) {
            touch.enableAutokill()
        })
    }, _instance.disableAutokill = function() {
        _autoKill = !1, _touchables.forEach(function(touch) {
            touch.disableAutoKill()
        })
    }, _instance.dispose = function() {
        for (; 0 !== _touchables.length;) _touchables.pop().dispose()
    }, _instance.onNewTouch = function(callback) {
        _onNewTouch = callback
    }, _instance.deactivate = function() {
        _isActive = !1, _isDragging = !1
    }, _instance.activate = function() {
        _isActive = !0
    }, _instance.isDragging = function() {
        return _isDragging
    }, _instance.takeover = function(dragger, stopOnUp) {
        _stopTakeOverOnUp = stopOnUp, _takeOver = dragger, _start = _takeOver.start, _move = _takeOver.move, _end = _takeOver.end
    }, _instance.baseOn = function(touchInfo) {
        _basedOnTouchinfo || (dispose(), touchInfo.onDown = userDown, touchInfo.onMove = userMove, touchInfo.onUp = userUp, _touchInfo = touchInfo, _basedOnTouchinfo = !0)
    }, _instance.addListenerTo = function(items) {
        for (var listener, l = items.length, i = 0; l > i; i++) listener = Touchable.listen(items[i], {
            onDown: userDown,
            onMove: userMove,
            onUp: userUp
        }, _autoKill), listener.onNewTouch(newTouch), _touchables.push(listener)
    };
    var _preClientX = 0,
        _preClientY = 0;
    return _instance.start = function() {
        _isActive && _dragger.dragStartet()
    }, _instance.move = function(distX, distY) {
        _isActive && _dragger.updateDist(distX, distY)
    }, _instance.end = function() {
        _isActive && _dragger.dragEnded()
    }, _instance.init(group, listeners), _instance
}
TouchDragger.add = function(item, plugins, listeners) {
    return new TouchDragger(new GroupDragger([item], plugins), listeners)
}, TouchDragger.addGroup = function(group, listeners) {
    return new TouchDragger(group, listeners)
}, TouchDragger.ON_START = "ON_START", TouchDragger.ON_MOVE = "ON_MOVE", TouchDragger.ON_END = "ON_END";