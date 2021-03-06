function ProfileEmployeeModuleTwo(data) {
    
    var _instance = Snail.extend(new Module);
    _instance.style.backgroundColor = UIColors.WHITE;
    var _slideNumber, _width, _height, _image, _line, START_OFFSET_X = 22,
        SPACING = 60,
        _employees = [],
        _lastRequest = !1;

    function addSiteLine() {
        _line = document.createElement("div");
        _line.setAttribute("name","profile_employee_module_two");
        _line.style.position = "absolute";
        _line.style.backgroundColor = UIColors.LINE_ON_WHITE;
        _instance.appendChild(_line);
    }

    function getTextWidth() {
        for (var l = _employees.length, totalWidth = START_OFFSET_X, i = 0; l > i; i++) totalWidth += _employees[i].getTextWidth() + getSpacing();
        return totalWidth + getSpacing()
    }

    function resizeEmployees() {
        for (var l = _employees.length, offsetX = START_OFFSET_X, i = 0; l > i; i++) {
            var employee = _employees[i];
            employee.setSize(0, _height), TweenMax.set(employee, {
                x: offsetX,
                y: SiteGuides.getCenterOffset() - 4
            }), offsetX += employee.getTextWidth() + getSpacing()
        }
        _image.setSize("auto", _height), TweenMax.set(_image, {
            y: 0,
            x: offsetX + getSpacing()
        })
    }

    function getSpacing() {
        return SPACING * SiteGuides.getDesignHeightRatio()
    }

    function addEmployees() {
        for (var dataArr = ContentManager.getChildrenByAttr(data, "name", "employee"), l = dataArr.length, i = 0; l > i; i++) {
            var employee = new EmployeeInfoText(ContentManager.getChildByAttr(dataArr[i], "name", "info"));
            _instance.appendChild(employee);
            employee.init();
            _employees.push(employee);
        }
    }

    function addImg() {
        var dataImg = ContentManager.getChildByAttr(data, "name", "image");
        _image = new RetinaImage(dataImg.innerHTML, null, updateImageSize), _image.init(), _instance.appendChild(_image)
    }

    function updateImageSize() {
        _image.setSize("auto", _height);
        var xOffset = getTextWidth();
        TweenMax.set(_image, {
            y: 0,
            x: xOffset
        }), _instance.callbackResize()
    }

    function addSlideNumber() {
        _slideNumber = Text.getNewMed(90), _slideNumber.innerHTML = "1", _slideNumber.style.color = UIColors.DARK, _instance.appendChild(_slideNumber)
    }

    
    return _instance.init = function() {
        _instance.super.init(), _instance.moduleId = "EMPLOYEE", addSiteLine(), addEmployees(), addImg(), addSlideNumber()
    }, 
    
    _instance.setTextModel = function(model) {
        for (var l = _employees.length, i = 0; l > i; i++) _employees[i].setTextModel(model)
    }, 
    
    _instance.resize_desktop = function(width, height) {
        _width = width, _height = height, TweenMax.set(_line, {
            width: 1,
            height: _height,
            x: 1
        }), resizeEmployees(), _instance.style.width = _instance.getWidth() + "px", _instance.style.height = height + "px", TweenMax.set(_slideNumber, {
            x: START_OFFSET_X,
            y: _height - _slideNumber.offsetHeight - SiteGuides.OFFSET_BOTOM + 12
        }), _lastRequest ? _lastRequest = !1 : (requestAnimationFrame(_instance.callbackResize), _lastRequest = !0)
    }, 
    _instance.getWidth = function() {
        return getTextWidth() + _image.getWidth()
    }, 
    _instance.kill = function() {}, _instance
}