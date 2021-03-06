function Touchable(listenOn, autokill, apply) {
    
    var _instance;
    listenOn ? _instance = apply === !0 ? listenOn : {} : (_instance = document.createElement("div"), 
    _instance.style.position = "absolute");
    var _onNewTouch = null;
    var _touches = [];
    var _numOfTouches = null;
    var _singleTouchInfo = null;
    var _unifiedToucher = null;
    var _listenOn = listenOn ? listenOn : _instance;
    var _autoKill = null !== autokill && void 0 !== autokill ? autokill : !1;
    var _autoKillListener = null;
    _instance.clickOrHold = !1;
    _instance.clickOrUp = !1;
    _instance.clickWithinBounds = !1;
    _instance.preventDefault = !0;
    _instance.stopPropagation = !1;

    _preTouches = null;
    var _listening = !1;

    function handleTouch(event) {
        //console.log("handleTouch: "+handleTouch);
        var e = event.activeEvent.event;
        _instance.preventDefault === !0 && (event.activeEvent.phase === TouchPhase.MOVED && BrowserDetect.TABLET || BrowserDetect.MOBILE ? e.preventDefault() : BrowserDetect.TABLET || BrowserDetect.MOBILE || e.preventDefault());
        _instance.stopPropagation === !0 && e.stopPropagation();
        var touch, touchInfo, touchesTemp = e.touches || e.changedTouches,phase = event.activeEvent.phase;
        _numOfTouches = touchesTemp.length, phase === TouchPhase.ENDED && 0 === touchesTemp.length && (touchesTemp = _preTouches, _numOfTouches = touchesTemp.length);
        for (var i = 0; _numOfTouches > i; i++)
            if (touch = touchesTemp.item(i)) switch (_touches[touch.identifier] || (_touches[touch.identifier] = TouchInfo.getInfo(touch, _instance.clickOrHold, _instance.clickOrUp, _instance.clickWithinBounds, _listenOn), null !== _onNewTouch && _onNewTouch(_touches[touch.identifier])), touchInfo = TouchInfo.getInfo(touch, _instance.clickOrHold, _instance.clickOrUp, _instance.clickWithinBounds, _listenOn), _singleTouchInfo && (_singleTouchInfo.touch = touchInfo.touch), phase) {
                case TouchPhase.BEGAN:
                    touchInfo.handleBegan(), _singleTouchInfo && i === _numOfTouches - 1 && _singleTouchInfo.handleBegan();
                    break;
                case TouchPhase.MOVED:
                    touchInfo.handleMoved(), _singleTouchInfo && i === _numOfTouches - 1 && _singleTouchInfo.handleMoved();
                    break;
                case TouchPhase.ENDED:
                    touchInfo.handleEnded(), _singleTouchInfo && i === _numOfTouches - 1 && 1 == _numOfTouches && _singleTouchInfo.handleEnded(), TouchInfo.pool(_touches[touch.identifier]), delete _touches[touch.identifier], _numOfTouches--
            }
        _preTouches = touchesTemp
    }

    function setupListeners() {
        _listening || (_unifiedToucher = new UnifiedTouch(_listenOn), _unifiedToucher.onDown(handleTouch), _unifiedToucher.onMove(handleTouch), _unifiedToucher.onUp(handleTouch), _listening = !0, _autoKill && _instance.enableAutokill() )
    }
    
    
    _instance.enableAutokill = function() {
        if (null === _autoKillListener) {
            var checkTime = 1e3,
                totalCheckTime = 0,
                hasHadParent = !1;
            _autoKillListener = setInterval(function() {
                if (null === _listenOn) return void _instance.disableAutoKill();
                var node = _listenOn.parentNode;
                if (totalCheckTime += checkTime, (!hasHadParent || totalCheckTime >= 2e4) && (hasHadParent = null !== node), null === node) return void _instance.disableAutoKill();
                var kill = !0;
                do node === document && (kill = !1), node = node.parentNode; while (node);
                hasHadParent && kill && _instance.dispose()
            }, checkTime)
        }
    }, 
    _instance.disableAutoKill = function() {
        clearInterval(_autoKillListener), _autoKillListener = null
    }, 
    _instance.onDown = function(callback, fingerId) {
        //console.log("pinchado");
        setupListeners();
        fingerId = fingerId ? fingerId : -1;
        var touchInfo = _instance.getTouchInfo(fingerId);
        touchInfo && (touchInfo.onDown = callback)
    }, 
    _instance.onUp = function(callback, fingerId) {
        setupListeners();
        fingerId = fingerId ? fingerId : -1;
        var touchInfo = _instance.getTouchInfo(fingerId);
        touchInfo && (touchInfo.onUp = callback)
    }, 
    _instance.onMove = function(callback, fingerId) {
        setupListeners();
        fingerId = fingerId ? fingerId : -1;
        var touchInfo = _instance.getTouchInfo(fingerId);
        touchInfo && (touchInfo.onMove = callback)
    }, 
    _instance.onClick = function(callback, fingerId) {
        //console.log("pinchado");
        setupListeners();
        fingerId = fingerId ? fingerId : -1;
        var touchInfo = _instance.getTouchInfo(fingerId);
        touchInfo && (touchInfo.onClick = callback)
    }, 
    _instance.onHold = function(callback, fingerId) {
        setupListeners();
        fingerId = fingerId ? fingerId : -1;
        var touchInfo = _instance.getTouchInfo(fingerId);
        touchInfo && (touchInfo.onHold = callback)
    }, 
    _instance.onOver = function(callback, fingerId) {
        if (void 0 !== callback && null !== callback) {
            setupListeners();
            fingerId = fingerId ? fingerId : -1;
            var touchInfo = _instance.getTouchInfo(fingerId);
            touchInfo && (touchInfo.onOver = callback)
        }
    }, 
    _instance.onOut = function(callback, fingerId) {
        if (void 0 !== callback && null !== callback) {
            setupListeners();
            fingerId = fingerId ? fingerId : -1;
            var touchInfo = _instance.getTouchInfo(fingerId);
            touchInfo && (touchInfo.onOut = callback)
        }
    }, 
    _instance.onNewTouch = function(callback) {
        void 0 !== callback && null !== callback && (setupListeners(), _onNewTouch = callback)
    }, 
    _instance.getTouchInfo = function(touchId) {
        return touchId = void 0 === touchId ? -1 : touchId, -1 == touchId ? (_singleTouchInfo || (_singleTouchInfo = new TouchInfo, _singleTouchInfo.clickOrHold = _instance.clickOrHold, _singleTouchInfo.clickOrUp = _instance.clickOrUp, _singleTouchInfo.clickWithinBounds = _instance.clickWithinBounds, _singleTouchInfo.listenOn = _listenOn), _singleTouchInfo) : _touches[touchId]
    }, 
    _instance.numOfFingers = function() {
        return _numOfTouches
    }, 
    _instance.getListener = function() {
        return _listenOn
    }; 
    
    return _instance.dispose = function() {
        _instance.disableAutoKill(), _listening || null !== _unifiedToucher && (_unifiedToucher.dispose(), _unifiedToucher = null), _listening = !1
    }, 
    _instance
}


function UnifiedTouch(target) {
    
    var _instance = {};
    _instance.isTouch = BrowserDetect.TABLET || BrowserDetect.MOBILE, _instance.activeEvent = {};
    var _callbackDown, _callbackUp, _callbackMove;

    function init() {
        _instance.isTouch ? (addEvent("touchstart", target, onTouchStart), addEvent("touchmove", target, onMouseMove), addEvent("touchend", target, onTouchEnd)) : addEvent("mousedown", target, onMouseDown)
    }

    function onTouchStart(e) {
        //console.log("touchstart"+_callbackDown);
        _instance.activeEvent.event = e;
        _instance.activeEvent.phase = TouchPhase.BEGAN;
        callbackEvent(_callbackDown)
    }

    function onTouchEnd(e) {
        //console.log("touchend");
        _instance.activeEvent.event = e;
        _instance.activeEvent.phase = TouchPhase.ENDED;
        callbackEvent(_callbackUp)
    }

    function onTouchMove(e) {
        //console.log("touchmove");
        _instance.activeEvent.event = e;
        _instance.activeEvent.phase = TouchPhase.MOVED;
        callbackEvent(_callbackMove)
    }

    function onMouseDown(e) {
        //console.log("mousedown");
        _instance.activeEvent.phase = TouchPhase.BEGAN;
        _instance.activeEvent.event = e;
        _instance.activeEvent.event.touches = fillDesktopTouch(e);
        callbackEvent(_callbackDown);
        addEvent("mousemove", window, onMouseMove);
        addEvent("mouseup", window, onMouseUp)
    }

    function onMouseUp(e) {
        //console.log("mouseUp");
        _instance.activeEvent.phase = TouchPhase.ENDED;
        _instance.activeEvent.event = e;
        _instance.activeEvent.event.touches = fillDesktopTouch(e);
        callbackEvent(_callbackUp);
        removeEvent("mousemove", window, onMouseMove);
        removeEvent("mouseup", window, onMouseUp)
    }

    function onMouseMove(e) {
        //console.log("mouseMOve");
        _instance.activeEvent.phase = TouchPhase.MOVED;
        _instance.activeEvent.event = e; 
        _instance.activeEvent.event.touches = fillDesktopTouch(e);
        callbackEvent(_callbackMove);
    }

    function fillDesktopTouch(e) {
        return e.identifier = DesktopTouches.identifyInc, DesktopTouches.identifyInc++, new DesktopTouches(e)
    }

    function callbackEvent(func) {
        null !== func && void 0 !== func && func(_instance)
    }

    function addEvent(evnt, elem, func) {
        //console.log("event");
        elem.addEventListener ? elem.addEventListener(evnt, func, !1) : elem.attachEvent && elem.attachEvent("on" + evnt, func)
    }

    function removeEvent(evnt, elem, func) {
        elem.removeEventListener ? elem.removeEventListener(evnt, func, !1) : elem.attachEvent && elem.detachEvent("on" + evnt, func)
    }

    return _instance.onDown = function(callback) {
        //console.log("onDown");
        _callbackDown = callback
    }, 
    _instance.onUp = function(callback) {
        _callbackUp = callback
    }, 
    _instance.onMove = function(callback) {
        _callbackMove = callback
    }, 
    _instance.dispose = function() {
        _instance.isTouch ? (removeEvent("touchstart", target, onTouchStart), removeEvent("touchmove", target, onTouchMove), removeEvent("touchend", target, onTouchEnd)) : (removeEvent("mousedown", target, onMouseDown), removeEvent("mousemove", window, onMouseMove), removeEvent("mouseup", window, onMouseUp))
    }, 
    
    init(), 
    _instance
}

function DesktopTouches(item) {
    var _instance = {};
    _instance.length = 1;
    var _items = [item];
    return _instance.item = function(id) {
        return _items[id]
    }, _instance
}


Touchable.listen = function(listener, params, autokill) {
    autokill = null !== autokill && void 0 !== autokill ? autokill : !0;
    var touchDispatcher = new Touchable(listener, autokill);
    return touchDispatcher.clickOrUp = void 0 !== params.clickOrUp ? params.clickOrUp : !1, touchDispatcher.clickWithinBounds = void 0 !== params.clickWithinBounds ? params.clickWithinBounds : !1, touchDispatcher.clickOrHold = void 0 !== params.useClickHold ? params.useClickHold : !1, touchDispatcher.preventDefault = void 0 !== params.preventDefault ? params.preventDefault : !0, touchDispatcher.onDown(params.onDown), touchDispatcher.onMove(params.onMove), touchDispatcher.onClick(params.onClick), touchDispatcher.onUp(params.onUp), touchDispatcher.onOver(params.onOver), touchDispatcher.onOut(params.onOut), touchDispatcher
}, 

Touchable.apply = function(target, autokill) {
    return new Touchable(target, autokill, !0)
}, 

TouchPhase = {};
TouchPhase.BEGAN = 1;
TouchPhase.MOVED = 2;
TouchPhase.ENDED = 4;
TouchPhase.HOVER = 8;
DesktopTouches.identifyInc = 0;