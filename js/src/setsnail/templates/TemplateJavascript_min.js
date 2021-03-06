function TemplateJavascript(data) {
    
    var _instance = Snail.extend(new PageTemplate(data));
    //_instance.hablar();
    _instance.style.backgroundColor = UIColors.WHITE;
    
    var _storyModule, _basicModule, _returnModule, _psycho, _useCollapse = BrowserDetect.DESKTOP;

    function snapToStory() {
        easeToStory(getCurrentIndex())
    }

    function getCurrentIndex() {
        var scrollX = Assets.SCROLL_CONTROLLER.currentScroll.y,
            storyX = _storyModule.aniGetX(),
            numOfStories = _storyModule.getNumOfStories(),
            ratio = scrollX / storyX / numOfStories,
            partRatio = 1 / numOfStories;
        return Math.round(ratio / partRatio)
    }

    function easeToStory(storyIndex, speed) {
        speed = null != speed ? speed : .4;
        var storyWidth = _storyModule.getExpandedStoryWidth();
        Assets.SCROLL_CONTROLLER.scrollTo(storyWidth * storyIndex, speed, Expo.easeInOut)
    }

    function setupAndAddModules() {
        var frontpageData = ContentManager.getChildByAttr(data.getXML(), "name", "frontpage"),
        storyData = ContentManager.getChildByAttr(data.getXML(), "name", "stories"),
        homeStartOffset = .5;
        BrowserDetect.TABLET ? homeStartOffset = .6 : BrowserDetect.MOBILE && (homeStartOffset = 1);
        // data, onArrowClick, scaleWidth
        _basicModule = new BasicHomeModule(frontpageData, onNextClick, homeStartOffset);
        _storyModule = new HomeStoryModule(storyData, homeStartOffset, _useCollapse);
        _storyModule.onStoryClick = onStoryClick;
        _useCollapse ? (_returnModule = new ReturnModule(.5 * (Assets.RESIZE_MANAGER.getWindowWidth() - SiteGuides.MAIN_MENU_WIDTH) + SiteGuides.MAIN_MENU_WIDTH), _instance.ignoreScrollAfter(.5 * (Assets.RESIZE_MANAGER.getWindowWidth() - SiteGuides.MAIN_MENU_WIDTH) + SiteGuides.MAIN_MENU_WIDTH - 120)) : _returnModule = new ReturnModule, 
        _returnModule.addLine(UIColors.LINE_ON_WHITE), 
        _instance.addModule(_basicModule), 
        _instance.addModule(_storyModule), 
        _instance.addModule(_returnModule)
    }

    function addPsycho() {
        _psycho = new PsychodelicLines;
        _instance.appendChild(_psycho);
        _psycho.init()
    }

    function onOverScrollingTop() {
        if (_offscrollTicks++, !_isPhychoOpen && _offscrollTicks > 30) {
            if (TweenMax.killTweensOf(_offsetEase), TweenMax.to(_offsetEase, .6, {
                    x: Assets.RESIZE_MANAGER.getWindowWidth(),
                    delay: .1,
                    onUpdate: updateOffsetToEase,
                    ease: Expo.easeOut
                }), _isPhychoOpen = !0, _psycho.startRender(), null !== typeof ga) {
                var getLocation = "#/home/psycho";
                ga("send", "pageview", getLocation)
            }
        } else {
            if (_isPhychoOpen) return;
            TweenMax.killTweensOf(_offsetEase), TweenMax.set(_offsetEase, {
                x: _offsetEase.x + 5
            }), updateOffsetToEase(), TweenMax.to(_offsetEase, .6, {
                x: 0,
                delay: .1,
                onUpdate: updateOffsetToEase,
                onComplete: onOffsetEaseComplete,
                ease: Expo.easeOut
            })
        }
    }

    function onScrollMove() {
        _isPhychoOpen && Assets.SCROLL_CONTROLLER.currentScroll.y > 0 && (TweenMax.killTweensOf(_offsetEase), _isPhychoOpen = !1, TweenMax.to(_offsetEase, .8, {
            x: 0,
            delay: .1,
            onUpdate: updateOffsetToEase,
            onComplete: function() {
                _psycho.resetLinePositions()
            },
            ease: Expo.easeOut
        }), _offscrollTicks = 0, _psycho.stopRender())
    }

    function updateOffsetToEase() {
        TweenMax.set(Assets.LAYER_TEMPLATE_PHYCHO_OFFSET, {
            x: _offsetEase.x
        })
    }

    function onOffsetEaseComplete() {
        _offscrollTicks = 0
    }

    function onNextClick() {
        _instance.scrollToNextModule()
    }

    function onStoryClick(storyNumber) {
        easeToStory(storyNumber, 1)
    }

    function saludar(){
        console.log("Hola Template home");
    }
    
    _instance.init = function() {
        _instance.super.init(), 
        setupAndAddModules(), 
        addPsycho(), 
        Assets.SCROLL_CONTROLLER.addEventListener(ScrollController.ON_SCROLL_EASE_STOP, snapToStory), 
        _instance.onResize()
    };
    
    _instance.scrollToNextModule = function() {
        easeToStory(getCurrentIndex() + 1, 1)
    };
    
    _instance.scrollToPrevModule = function() {
        easeToStory(getCurrentIndex() - 1, 1)
    };
    
    _instance.templateIn = function() {
        _instance.init();
        _psycho.style.display = "none";
        setTimeout(function() {
            _psycho.style.display = "inline", 
            Assets.SCROLL_CONTROLLER.addEventListener(ScrollController.ON_OVERSCROLLING_TOP, onOverScrollingTop), 
            Assets.SCROLL_CONTROLLER.addEventListener(ScrollController.ON_SCROLL_MOVE, onScrollMove)
        }, 1e3);
        _instance.super.templateIn()
    };
    
    _instance.templateOut = function() {
        _isPhychoOpen ? (Assets.SCROLL_CONTROLLER.removeEventListener(ScrollController.ON_OVERSCROLLING_TOP, onOverScrollingTop), Assets.SCROLL_CONTROLLER.removeEventListener(ScrollController.ON_SCROLL_MOVE, onScrollMove), TweenMax.killTweensOf(_offsetEase), _isPhychoOpen = !1, TweenMax.to(_offsetEase, .8, {
            x: 0,
            delay: .1,
            onUpdate: updateOffsetToEase,
            onComplete: function() {
                _psycho.style.display = "none", _instance.super.templateOut()
            },
            ease: Expo.easeOut
        })) : (_psycho.style.display = "none", _instance.super.templateOut()), _psycho.kill()
    };
    
    _instance.onResize = function() {
        _instance.super.onResize(), 
        _useCollapse && (_instance.ignoreScrollAfter(.5 * (Assets.RESIZE_MANAGER.getWindowWidth() - SiteGuides.MAIN_MENU_WIDTH) + SiteGuides.MAIN_MENU_WIDTH - 120), 
        _returnModule.setWidth(.5 * _instance.visibleWidth + SiteGuides.MAIN_MENU_WIDTH)), 
        _isPhychoOpen && (_offsetEase.x = Assets.RESIZE_MANAGER.getWindowWidth(), updateOffsetToEase()), 
        _instance.repositionModules(_returnModule), 
        snapToStory();
    };
    
    _instance.kill = function() {
        Assets.SCROLL_CONTROLLER.removeEventListener(ScrollController.ON_OVERSCROLLING_TOP, onOverScrollingTop), 
        Assets.SCROLL_CONTROLLER.removeEventListener(ScrollController.ON_SCROLL_MOVE, onScrollMove), 
        Assets.SCROLL_CONTROLLER.removeEventListener(ScrollController.ON_SCROLL_EASE_STOP, snapToStory), 
        _instance.super.kill()
    };

    var _offscrollTicks = 0,
        _isPhychoOpen = !1,
        _offsetEase = {
            x: 0
        };
        
    return _instance
}