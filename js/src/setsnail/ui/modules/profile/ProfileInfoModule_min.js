function ProfileInfoModule(data, infoShow, slideNumber, addLine) {
    
    void 0 === addLine && (addLine = !1);
    var _instance = Snail.extend(new Module);
    _instance.style.backgroundColor = UIColors.WHITE;

    var _slideNumber, _line, START_OFFSET_X = 0,
    _circleContainer = document.createElement("div");
    _circleContainer.style.position = "absolute";
    _circleContainer.setAttribute("name","profile_info_module_circle");
    _instance.appendChild(_circleContainer);
    
    var _groupedCircle, _body, _width, _height, _circleText = [], _circleType = "";

    function addCircles() {
        var circleData = ContentManager.getChildByAttr(data, "name", "circles");
        if (null != circleData) {
            var numOfCirles = circleData.children.length;
            switch (_circleType = circleData.getAttribute("data-type")) {
                case "round":
                    _groupedCircle = new CirclesInACircle(200, 300, numOfCirles - 1);
                    break;
                case "straight":
                    _groupedCircle = new CirclesOnALine(200, 300, numOfCirles)
            }
            BrowserDetect.DESKTOP && _groupedCircle.addMouseEffect();
            _instance.appendChild(_groupedCircle);
            for (var i = 0; numOfCirles > i; i++) {
                var text = Text.getNewLight(18);
                text.style.color = UIColors.FONT_DARK;
                text.style.textAlign = "center";
                text.innerHTML = circleData.children[i].innerHTML;
                _instance.appendChild(text);
                _circleText.push(text)
            }
        }
    }

    function updateCircleTextPositions() {
        for (var l = _circleText.length, currGroupIndex = 0, currShapeIndex = 0, scale = _width / SiteGuides.BASE_DESIGN_WIDTH, i = 0; l > i; i++) {
            var group = _groupedCircle.getGroupAt(currGroupIndex);
            group.numOfShapes() <= currShapeIndex && (currGroupIndex++, currShapeIndex = 0, group = _groupedCircle.getGroupAt(currGroupIndex));
            var fontSize = 23 * scale;
            12 > fontSize && (fontSize = 12), _circleText[i].style.fontSize = fontSize + "px", _circleText[i].updateLineHeight(), TweenMax.set(_circleText[i], {
                x: group.getShapeAt(currShapeIndex).getScaledPosition().x + _groupedCircle._gsTransform.x + _groupedCircle.getCanvasOffset().x - .5 * _circleText[i].offsetWidth + 5 * SiteGuides.getDesignHeightRatio(),
                y: group.getShapeAt(currShapeIndex).getScaledPosition().y + _groupedCircle._gsTransform.y + _groupedCircle.getCanvasOffset().y - .5 * parseInt(_circleText[i].style.fontSize)
            }), currShapeIndex++
        }
    }

    function addSiteLine() {
        _line = document.createElement("div");
        _line.setAttribute("name","profile_info_module_add_site_line");
        _line.style.position = "absolute";
        _line.style.backgroundColor = UIColors.LINE_ON_WHITE;
        _instance.appendChild(_line)
    }

    function addSlideNumber() {
        _slideNumber = Text.getNewMed(90);
        _slideNumber.innerHTML = slideNumber;
        _slideNumber.style.color = UIColors.FONT_DARK;
        _instance.appendChild(_slideNumber)
    }

    function addBodyText() {
        var bodyData = ContentManager.getChildByAttr(data, "name", "body");
        var headlineData = ContentManager.getChildByAttr(data, "name", "headline");
        var text = headlineData.innerHTML + "<br>" + bodyData.innerHTML;
        //_body = new TextArea(text, Text.getNewLight(15));
        _body = new TextArea(text, Text.getNewLight(28)), 
        _body.setAttribute("name","textarea_profile");
        _body.style.color = UIColors.FONT_DARK;
        _body.init();
        _instance.appendChild(_body)
    }
    
    return _instance.init = function() {
        _instance.super.init();
        _instance.moduleId = "INFO" + slideNumber;
        addLine && addSiteLine();
        addSlideNumber();
        addCircles();
        addBodyText()
    }, 
    
    _instance.setBodyTextModel = function(model, mode) {
        null == mode && (mode = TextAreaModel.MODE_CONTROL);
        _body.addModel(model, mode)
    }, 
    
    _instance.resize_desktop = function(width, height) {
        _width = Math.floor(1.3 * height);
        _height = height;
        _body.setSize(_width / 3, _height / 4);
        var headOffsetY = SiteGuides.OFFSET_TOP - Text.getOffsetY(_body.getTextInstance());
        if (TweenMax.set(_body, {
                x: 11,
                y: headOffsetY
            }), 
            _instance.style.width = _instance.getWidth() + "px", _instance.style.height = height + "px", _line && TweenMax.set(_line, {
                width: 1,
                height: _height,
                x: 1
            }), null != _groupedCircle) {
            switch (_circleType) {
                case "round":
                    var width = .8 * _width,
                        height = .8 * _height;
                    _groupedCircle.setSize(width, height), TweenMax.set(_groupedCircle, {
                        x: .5 * _width - .4 * width,
                        y: .15 * _height
                    });
                    break;
                case "straight":
                    var width = .8 * _width,
                        height = .5 * _height;
                    _groupedCircle.setSize(width, height), TweenMax.set(_groupedCircle, {
                        x: .5 * _width - .5 * width,
                        y: .3 * _height
                    })
            }
            updateCircleTextPositions()
        }
        TweenMax.set(_slideNumber, {
            x: START_OFFSET_X + 11,
            y: _height - _slideNumber.offsetHeight - SiteGuides.OFFSET_BOTOM + 12
        });
        
    }, 
    
    _instance.getWidth = function() {
        return _width
    }, 
    
    _instance.kill = function() {
        _groupedCircle.kill()
    }, 
    
    _instance.getBodyCharCount = function() {
        return ContentManager.getChildByAttr(data, "name", "body").innerHTML.length
    }, 
    _instance
}