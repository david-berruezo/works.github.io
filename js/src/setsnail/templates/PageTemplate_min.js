function PageTemplate() {
    
    var _instance = document.createElement("div");
    var _scrollController = null;
    var _modules = [];
    var _modulesLayer = null;
    var _modulesLoaded = 0;
    var _timeoutAllModulesLoaded = null;
    
    _instance.style.position = "absolute";
    _instance.setAttribute("name","page_template");
    _instance.pageHeight = 0;
    _instance.visibleWidth = 0;
    _instance.visibleHeight = 0;
    
    var _afterIgnore;
    
    function onKeyPress(e) {
        if (!_scrollController.isScrolling()) {
            var key = e.keyCode;
            37 == key ? _instance.scrollToPrevModule() : 39 == key && _instance.scrollToNextModule()
        }
    }

    function onModuleLoaded() {
        clearTimeout(_timeoutAllModulesLoaded);
         _modulesLoaded += 1;
         _timeoutAllModulesLoaded = setTimeout(checkForAllModulesLoaded, 400)
    }

    function checkForAllModulesLoaded() {
        _modulesLoaded === _modules.length && onAllModulesLoaded()
    }

    function onAllModulesLoaded() {
        ContentManager.nextTemplate()
    }

    function callResizeOnModule(module, width, height) {
        module["resize_" + Assets.RESIZE_MANAGER.getBreakPoint()](width, height)
    }

    function killModules() {
        for (var l = _modules.length, i = 0; l > i; i += 1) _modules[i].kill()
    }

    function setModuleVisibilty() {
        for (var l = _modules.length, module = null, ratio = 0, i = 0; l > i; i += 1){
            module = _modules[i];
            ratio = 1 / module.getWidth() * (_scrollController.currentScroll.y - module.aniGetX() + _instance.visibleWidth);
            module.visibilityRatio(ratio);
        } 
    }

    function onPageScroll() {
        _instance.pageScrollRatio(_scrollController.getScrollRatio());
    }

    _instance.hablar = function(){
        console.log("Hola page template");
    }
   
    _instance.init = function(layer) {
        _modulesLayer = document.createElement("div");
        _modulesLayer.style.position = "absolute";
        _modulesLayer.setAttribute("name","modules_layer");
        _instance.appendChild(_modulesLayer);
        var targetLayer = layer ? layer : Assets.LAYER_TEMPLATE;
        targetLayer.appendChild(_instance);
        _scrollController = Assets.SCROLL_CONTROLLER;
        Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE, _instance.onResize);
        _instance.setPageHeight(_instance.pageHeight);
        document.onkeydown = onKeyPress;
        _scrollController.addEventListener(ScrollController.ON_SCROLL_MOVE, onPageScroll)
    };
    
    _instance.addModule = function(module, insertAfterThisModule) {
        if ("function" != typeof module.resize_desktop && console.error("module must have resize(width, height) function"), "function" != typeof module.getHeight && console.error("module must have getHeight() function"), "function" != typeof module.kill && console.error("module must have kill() function"), _modulesLayer.appendChild(module), module.setCallbackLoaded(onModuleLoaded), module.setCallbackResize(_instance.resizeModules), module.setCallbackReposition(_instance.repositionModules), module.init(), AnimationUtils.apply(module), insertAfterThisModule) {
            var index = _modules.indexOf(insertAfterThisModule) + 1;
            _modules.splice(index, 0, module);
            _instance.resizeModules()
        } else _modules.push(module);
        return module
    }; 
    
    _instance.removeModule = function(module, kill) {
        var index = _modules.indexOf(module);
        return kill !== !1 && (module.parentNode.removeChild(module), module.kill()), _modules.splice(index, 1), index
    };
    
    _instance.templateIn = function() {
        null != _scrollController && _scrollController.scrollTo(0, 0), Assets.MAIN_MENU.isCollapsed() ? TweenMax.to(Assets.LAYER_BOT, 1, {
            x: 0,
            onComplete: function() {
                ContentManager.nextTemplate()
            },
            ease: Expo.easeInOut
        }) : (Assets.MAIN_MENU.collapseMenu(1, Expo.easeInOut), setTimeout(function() {
            ContentManager.nextTemplate()
        }, 1e3))
    };
    
    _instance.templateOut = function() {
        Assets.MAIN_MENU.isCollapsed() ? (_scrollController.scrollTo(0, .6, Expo.easeInOut), TweenMax.to(Assets.LAYER_BOT, .6, {
            x: _instance.visibleWidth,
            onComplete: function() {
                _instance.kill(), ContentManager.nextTemplate()
            },
            ease: Expo.easeInOut
        })) : (Assets.MAIN_MENU.openWide(.6), setTimeout(function() {
            _scrollController.scrollTo(0, 0), _instance.kill(), ContentManager.nextTemplate()
        }, 600))
    };
    
    _instance.onResize = function() {
        _instance.visibleWidth  = Assets.RESIZE_MANAGER.getWindowWidth() - MainMenu.BORDER_WIDTH; 
        _instance.visibleHeight = Assets.RESIZE_MANAGER.getWindowHeight(); 
        _instance.style.width   = _instance.visibleWidth + "px";
        _instance.style.height  = _instance.visibleHeight + "px";
        _instance.resizeModules();
    };
    
    _instance.resizeModules = function(target) {
        var l = _modules.length,module = null;

        if (0 !== l) {
            var xPos = 0;
            if (target) {
                var index = _modules.indexOf(target); 
                //console.log("index:"+index);
                - 1 !== index && (module = _modules[index], callResizeOnModule(module, _instance.visibleWidth, _instance.visibleHeight), _instance.repositionModules(module))
            } else {
                for (var i = 0; l > i; i += 1){
                    module = _modules[i]; 
                    callResizeOnModule(module, _instance.visibleWidth, _instance.visibleHeight);
                    module.aniSetX(xPos);
                    module.aniRender();
                    xPos += module.getWidth();
                }
                _instance.pageHeight = xPos;
                _instance.setPageHeight(_instance.pageHeight);
            }
            onPageScroll();
        }
    };
    
    _instance.repositionModules = function(target) {
        var l = _modules.length,
            module = null;
        if (0 !== l) {
            var xPos = Assets.MAIN_MENU.menuOffsetH,
                index = target ? _modules.indexOf(target) : 0; - 1 === index && (index = 0), target && 0 !== index && (module = _modules[index - 1], xPos = parseInt(module.aniGetX(), 10) + module.getWidth());
            for (var i = index; l > i; i += 1) module = _modules[i], module.aniSetX(xPos), module.aniRender(), xPos += module.getWidth();
            l > 1 && module && xPos < _instance.visibleHeight ? (xPos = _instance.visibleWidth - module.getWidth(), module.aniSetX(xPos), module.aniRender(), _instance.visibleWidth = xPos) : xPos < _instance.visibleHeight && (xPos = _instance.visibleWidth), _instance.pageHeight = xPos, _instance.setPageHeight(_instance.pageHeight), setModuleVisibilty()
        }
    };
    
    _instance.setPageHeight = function(value) {
        _scrollController.setPageHeight(value)
    };
    
    _instance.kill = function() {
        Assets.RESIZE_MANAGER.removeEventListener(ResizeEvents.RESIZE, _instance.onResize);
        _scrollController.removeEventListener(ScrollController.ON_SCROLL_MOVE, onPageScroll);
        killModules();
        _instance.parentNode.removeChild(_instance)
    };
    
    _instance.pageScrollRatio = function(ratio) {
        var totalHeight = _scrollController.getPageHeight(),offset = 0;
        var height = totalHeight - _scrollController.getScrollRatio() * totalHeight;

        if (null != _afterIgnore && _afterIgnore > height) {
            var ratio = (_afterIgnore - height) / _afterIgnore;
            offset = _afterIgnore * Power1.easeIn.getRatio(ratio)
        }
        
        TweenMax.set(Assets.LAYER_TEMPLATE, {
            x: -Assets.SCROLL_CONTROLLER.currentScroll.y + offset
        });
        
        setModuleVisibilty();
    };
    
    _instance.getCurrentScrolledIndex = function() {
        for (var l = _modules.length, i = 0; l > i; i += 1) {
            var offset = _scrollController.currentScroll.y - _modules[i].aniGetX();
            if (-1 > offset) return i - 1
        }
        return 0
    };
    
    _instance.scrollToNextModule = function() {
        var index = _instance.getCurrentScrolledIndex() + 1;
        index >= _modules.length && (index = _modules.length - 1);
        _scrollController.scrollTo(_modules[index].aniGetX(), 1, Expo.easeInOut)
    };
    
    _instance.scrollToPrevModule = function() {
        var index = _instance.getCurrentScrolledIndex() - 1;
        0 > index && (index = 0), _scrollController.scrollTo(_modules[index].aniGetX(), 1, Expo.easeInOut)
    };

    
    return _instance.ignoreScrollAfter = function(height) {
        _afterIgnore = height
    },
    _instance
}