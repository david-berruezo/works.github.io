function MainMenu() {
    
    MainMenu.OPEN = "OPEN";
    MainMenu.CLOSED = "CLOSED";
    MainMenu.BORDER_WIDTH = SiteGuides.MAIN_MENU_WIDTH;
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","main_menu");
    _instance.style.position = "absolute";
    var _border, _content, _contentBusiness, _outClickArea, _state = MainMenu.CLOSED;

    function addOutsideHitArea() {
        _outClickArea = document.createElement("div");
        _outClickArea.style.cursor = "pointer";
        _outClickArea.style.position = "absolute";
        _outClickArea.style.width = "5000px";
        _outClickArea.style.height = "5000px";
        
        TweenMax.set(_outClickArea, {
            alpha: 0
        });

        _outClickArea.style.backgroundColor = "#ff0000";
        Touchable.apply(_outClickArea);
        _outClickArea.setAttribute("name","out_click_area"); 

        _outClickArea.style.display = "none";
        _outClickArea.onClick(function() {
            Assets.MAIN_MENU.collapseMenu()
        });
        Assets.LAYER_MID.appendChild(_outClickArea)
    }

    function addMenuContent() {
        _content = new MenuContent; 
        _content.init();
        _instance.appendChild(_content);
    }

    function addBorder() {
        _border = new MenuBorder(SiteGuides.MAIN_MENU_WIDTH);
        _border.init();
        _border.onLogoClick(onLogoClick);
        _border.onBarClick(onBorderClick);
        _instance.appendChild(_border)
    }

    function onLogoClick() {
        //window.location.hash = "/home/"
        window.location = domain + "/home";
    }

    function onBorderClick() {
        toggleState()
    }


    function toggleState(speed, ease) {
        _state == MainMenu.OPEN ? (_state = MainMenu.CLOSED, _outClickArea.style.display = "none") : _state = MainMenu.OPEN;
        speed = null != speed ? speed : .3;
        ease = null != ease ? ease : Quart.easeOut;
        TweenMax.to(_border, speed, {
            x: -MainMenu.BORDER_WIDTH,
            ease: ease,
            onComplete: onBorderOut
        });
        _state == MainMenu.CLOSED && _content.close(speed, ease);
        
        TweenMax.to(Assets.LAYER_TEMPLATE_OFFSET, speed, {
            x: 0,
            roundProps: ["x"],
            ease: ease
        })
    }

    function onBorderOut() {
        _border.setState(_state);
        TweenMax.to(_border, .3, {
            x: 0,
            ease: Quart.easeOut
        });
        var openSpeed = .6;
        _state == MainMenu.OPEN ? (_content.open(openSpeed), 
        TweenMax.to(Assets.LAYER_TEMPLATE_OFFSET, openSpeed, {
            x: MainMenu.BORDER_WIDTH + _content.getWidth(),
            roundProps: ["x"],
            ease: Expo.easeOut
        }), 
        _outClickArea.style.display = "block") : 
        TweenMax.to(Assets.LAYER_TEMPLATE_OFFSET, .3, {
            x: MainMenu.BORDER_WIDTH,
            roundProps: ["x"],
            ease: Quart.easeOut
        })
    }

    return _instance.init = function() {
        addMenuContent(),
        addBorder(), 
        addOutsideHitArea(), 
        TweenMax.set(Assets.LAYER_TEMPLATE_OFFSET, {
            x: MainMenu.BORDER_WIDTH
        });
        Assets.SCROLL_CONTROLLER.addEventListener(ScrollController.ON_200_PX_SCROLLED, _instance.collapseMenu)
    }, 
    _instance.openWide = function(speed) {
        _content.openWide(speed)
    }, 
    _instance.openMenu = function() {
        _instance.isCollapsed() && toggleState()
    }, 
    _instance.collapseMenu = function(speed, ease) {
        _instance.isCollapsed() || toggleState(speed, ease)
    }, 
    _instance.isCollapsed = function() {
        return _state == MainMenu.CLOSED
    },
    _instance
}