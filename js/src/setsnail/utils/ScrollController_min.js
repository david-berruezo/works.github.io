function ScrollController() {
    
    ScrollController.ON_SCROLL_START = "ON_SCROLL_START";
    ScrollController.ON_SCROLL_MOVE = "ON_SCROLL_MOVE";
    ScrollController.ON_SCROLL_STOP = "ON_SCROLL_STOP";
    ScrollController.ON_SCROLL_EASE_STOP = "ON_SCROLL_EASE_STOP";
    ScrollController.ON_200_PX_SCROLLED = "ON_200_PX_SCROLLED";
    ScrollController.ON_OVERSCROLLING_TOP = "ON_OVERSCROLLING_TOP";
    ScrollController.ON_OVERSCROLLING_BOT = "ON_OVERSCROLLING_BOT";
    
    var _instance = new EventDispatcher, _target = null, _pageHeight = 0;
    
    _instance.currentScroll = {
        x: 0,
        y: 0
    };
    
    var _fakeDragItem = null,
        _dragBounds = null,
        _touchDragger = null,
        _isScrolling = !1,
        _startScroll = {
            x: 0,
            y: 0
        },
        _200PxScrolled = !1;

    ScrollController.DEBUG_TOUCH_ON_DESKTOP = !1;
    ScrollController.DEFAULT_SCROLL_SPEED = .5;
    
    _instance.scrollSpeed = ScrollController.DEFAULT_SCROLL_SPEED;

    var _scrollToSpeed = -1,_scrollToEase = null;    

    function overscrollingTop() {
        _instance.dispatchEvent(ScrollController.ON_OVERSCROLLING_TOP)
    }

    function overscrollingBot() {
        _instance.dispatchEvent(ScrollController.ON_OVERSCROLLING_BOT)
    }

    function updateBounds() {
        return null === _touchDragger ? void(Assets.SCROLL_LAYER.style.height = _pageHeight + "px") : _pageHeight < Assets.RESIZE_MANAGER.getWindowWidth() ? (_touchDragger.deactivate(), void _touchDragger.end()) : (_touchDragger.activate(), _dragBounds && (_dragBounds.bounds.x = -_pageHeight + Assets.RESIZE_MANAGER.getWindowHeight(), _dragBounds.bounds.width = _pageHeight - Assets.RESIZE_MANAGER.getWindowHeight()), void _touchDragger.end())
    }

    function touchStart() {
        _200PxScrolled = !1, 
        _startScroll.x = _instance.currentScroll.x;
        _startScroll.y = _instance.currentScroll.y;
        _instance.dispatchEvent(ScrollController.ON_SCROLL_START);
    }

    function touchMove() {
        _instance.currentScroll.y = -_fakeDragItem.aniGetX();
        _200PxScrolled === !1 && Math.abs(_instance.currentScroll.y - _startScroll.y) > 200 && (_200PxScrolled = !0, _instance.dispatchEvent(ScrollController.ON_200_PX_SCROLLED)), _instance.dispatchEvent(ScrollController.ON_SCROLL_MOVE)
    }

    function touchEnd() {
        _instance.dispatchEvent(ScrollController.ON_SCROLL_STOP)
    }

    function desktopHandle() {
        var speed = -1 != _scrollToSpeed ? _scrollToSpeed : _instance.scrollSpeed,
            ease = null != _scrollToEase ? _scrollToEase : Expo.easeOut;
        _isScrolling = !0;
        var delta = window.pageYOffset - _instance.currentScroll.y;
        Math.abs(delta) > 1e3 && _instance.dispatchEvent(ScrollController.ON_200_PX_SCROLLED);
        TweenMax.killTweensOf(_instance.currentScroll);
        TweenMax.to(_instance.currentScroll, speed, {
            y: window.pageYOffset,
            onUpdate: function() {
                _instance.dispatchEvent(ScrollController.ON_SCROLL_MOVE)
            },
            onComplete: function() {
                _isScrolling = !1, _instance.dispatchEvent(ScrollController.ON_SCROLL_EASE_STOP)
            },
            roundProps: ["y"],
            ease: ease
        });
        _scrollToSpeed = -1;
        _scrollToEase = null
    }

    _instance.init = function(target) {
        if (_target = target, BrowserDetect.TABLET === !0 || BrowserDetect.MOBILE === !0 || ScrollController.DEBUG_TOUCH_ON_DESKTOP === !0) {
            _fakeDragItem = document.createElement("div");
            _fakeDragItem.setAttribute("name","scoll_controller");
            _fakeDragItem.style.width = "0px";
            _fakeDragItem.style.height = "0px";
            AnimationUtils.apply(_fakeDragItem);
            _fakeDragItem.aniDisableRender();
            _basic = new DragBasic;
            _basic.lockY = !0;
            var easePlugin = new DragEase;
            easePlugin.time = 2;
            easePlugin.distance = 1.5;
            easePlugin.ease = Expo.easeOut;
            easePlugin.onStart(touchStart);
            easePlugin.onMove(touchMove);
            easePlugin.onEnd(touchEnd);
            var bounds = new Rectangle(0, -_pageHeight + Assets.RESIZE_MANAGER.getWindowHeight(), window.innerWidth, _pageHeight);
            _dragBounds = new DragBounds(bounds);
            _dragBounds.easeDist = 4;
            _dragBounds.boundsEase = .4;
            _dragBounds.useItemsSize = !1;
            _touchDragger = TouchDragger.add(_fakeDragItem, [_basic, easePlugin, _dragBounds], [_target], !1);
            _touchDragger.enable3DTransform()
        } else window.addEventListener("scroll", desktopHandle), window.addEventListener("mousewheel", function(e) {
            e.wheelDelta > 0 && window.pageYOffset <= 0 ? (overscrollingTop(e.wheelDelta), e.preventDefault()) : e.wheelDelta < 0 && window.pageYOffset >= Math.floor(_pageHeight - Assets.RESIZE_MANAGER.getWindowHeight()) && (overscrollingBot(e.wheelDelta), e.preventDefault())
        }, !1);
        Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE, updateBounds)
    }, 
    
    _instance.disableScroll = function() {
        BrowserDetect.TABLET || ScrollController.DEBUG_TOUCH_ON_DESKTOP ? _basic.lockY = !0 : window.removeEventListener("scroll", desktopHandle)
    },
    
    _instance.enableScroll = function() {
        BrowserDetect.TABLET || ScrollController.DEBUG_TOUCH_ON_DESKTOP ? _basic.lockY = !1 : (window.addEventListener("scroll", desktopHandle), desktopHandle())
    }, 
    
    _instance.setPageHeight = function(value) {
        var xOffset = Assets.RESIZE_MANAGER.getWindowHeight() - Assets.RESIZE_MANAGER.getWindowWidth();
        _pageHeight = value + xOffset, updateBounds()
    }, 
    
    _instance.scrollToTop = function(speed, ease) {
        _touchDragger ? (_fakeDragItem.aniSetY(0), touchMove()) : (_scrollToSpeed = null != speed ? speed : -1, _scrollToEase = ease, window.scrollTo(0, 0))
    };
    
    return _instance.scrollTo = function(pos, speed, ease) {
        _touchDragger ? (_fakeDragItem.aniSetX(pos), touchMove()) : (_scrollToSpeed = null != speed ? speed : -1, _scrollToEase = ease, null == ease && (_instance.currentScroll.y = pos), window.scrollTo(0, pos))
    }, 
    
    _instance.getScrollRatio = function() {
        return _instance.currentScroll.y / (_pageHeight - Assets.RESIZE_MANAGER.getWindowHeight())
    }, 
    
    _instance.getPageHeight = function() {
        return _pageHeight
    }, 
    
    _instance.scrollToBottom = function(onComplete) {
        TweenMax.to(_instance.currentScroll, .6, {
            y: _pageHeight - Assets.RESIZE_MANAGER.getWindowHeight(),
            onUpdate: function() {
                _instance.dispatchEvent(ScrollController.ON_SCROLL_MOVE)
            },
            onComplete: onComplete,
            ease: Expo.easeIn
        })
    }, 
    
    _instance.isDragging = function() {
        return _touchDragger ? _touchDragger.isDragging() : !1
    }, 
    
    _instance.isScrolling = function() {
        return _isScrolling
    }, 
    _instance
}