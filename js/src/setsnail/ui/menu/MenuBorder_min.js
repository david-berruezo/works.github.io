function MenuBorder(thickness) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","menu_border");
    _instance.style.position = "absolute";
    
    var _logo, _line, _picker, _state, PICKER_HEIGHT = 30;
    var _clickAreaLogo = new Touchable;
    var _clickAreaBar  = new Touchable;

    function addLogo() {
        var imgOffset = 31;
        _logo = new MenuLogo;
        _logo.init();
        TweenMax.set(_logo, {
            x: .5 * thickness,
            y: SiteGuides.OFFSET_TOP + imgOffset + 20
        });
        _instance.appendChild(_logo)
    }

    function addLine() {
        _line = document.createElement("div"); 
        _line.setAttribute("name","line");
        _line.style.position = "absolute";
        _instance.appendChild(_line);
    }

    function updateLayout() {
        var logoOffset = 100,
        height = Assets.RESIZE_MANAGER.getWindowHeight();
        _instance.style.width = thickness + "px";
        _instance.style.height = height + "px";
        
        TweenMax.set(_clickAreaLogo, {
            height: logoOffset,
            width: thickness
        });

        TweenMax.set(_clickAreaBar, {
            y: logoOffset,
            height: height - logoOffset,
            width: thickness
        });

        var lineThickness = 1;
        _line.style.width = lineThickness + "px";
        _line.style.height = Assets.RESIZE_MANAGER.getWindowHeight() + "px";
        _line.style.left = thickness - lineThickness + "px"; 
        
        TweenMax.set(_picker, {
            y: SiteGuides.getCenterOffset() + .5 * PICKER_HEIGHT,
            x: .5 * thickness - 2.5 + 2
        })
    }

    function addPicker() {
        _picker = new MenuBorderLines(6, 1, PICKER_HEIGHT);
        _picker.init();
        _instance.appendChild(_picker)
    }
    
    return _clickAreaLogo.style.position = "absolute",_clickAreaBar.style.position = "absolute", 
    _clickAreaBar.style.cursor = "pointer", _clickAreaLogo.style.cursor = "pointer", 
    _instance.init = function() {
        addLogo();
        addLine();
        addPicker();
        _clickAreaLogo.setAttribute("name","click_area_logo");
        _clickAreaBar.setAttribute("name","click_area_bar");
        _instance.appendChild(_clickAreaBar);
        _instance.appendChild(_clickAreaLogo);
        Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE, updateLayout);
        _instance.setState(MainMenu.CLOSED);
        updateLayout();
    },

    _instance.onLogoClick = function(callback) {
        //alert(callback);
        _clickAreaLogo.onClick(callback)
    },

    _instance.onBarClick = function(callback) {
        _clickAreaBar.onClick(callback)
    },

    _instance.toggleState = function() {
        _instance.setState(_state == MainMenu.OPEN ? MainMenu.CLOSED : MainMenu.OPEN)
    },

    _instance.setState = function(state) {
        switch (_state = state) {
            case MainMenu.OPEN:
                _instance.style.backgroundColor = UIColors.DARK;
                _logo.setRatio(0);
                _picker.setRatio(0);
                _line.style.backgroundColor = UIColors.LINE_ON_DARK;
                break;
            case MainMenu.CLOSED:
                _instance.style.backgroundColor = UIColors.WHITE;
                _logo.setRatio(1);
                _picker.setRatio(1);
                _line.style.backgroundColor = UIColors.LINE_ON_WHITE
        }
    }, 
    _instance
}