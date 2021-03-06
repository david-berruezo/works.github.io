function CasesInfoBox(data) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","case_info_box");
    _instance.style.position = "absolute";
    _instance.style.backgroundColor = UIColors.WHITE;
    var _mode = CasesInfoBox.MODE_HORRIZONTAL,_cases = [],_width = 0,_height = 0;

    function updateRatio() {
        for (var ratio = Assets.SCROLL_CONTROLLER.getScrollRatio() * (_numOfCases - 1), i = 0; _numOfCases > i; i++) {
            var infoRatio;
            infoRatio = i > ratio ? 0 : ratio > i + 1 ? 1 : ratio - i, _cases[i].setRatio(ratio)
        }
    }

    function addCases() {
        _numOfCases = data.length;
        for (var i = 0; _numOfCases > i; i++) {
            var info = new CaseInfo(data[i][0], i);
            info.init(), _cases.push(info), _instance.appendChild(info)
        }
    }
    
    
    return _instance.init = function() {
        addCases();
        Assets.SCROLL_CONTROLLER.addEventListener(ScrollController.ON_SCROLL_MOVE, updateRatio);
        updateRatio()
    }, 
    _instance.setMode = function(mode) {
        _mode = mode;
        for (var i = 0; _numOfCases > i; i++) _cases[i].setMode(_mode)
    }, 
    _instance.getCurrentModeWidth = function() {
        return 60
    }, 
    _instance.kill = function() {
        Assets.SCROLL_CONTROLLER.removeEventListener(ScrollController.ON_SCROLL_MOVE, updateRatio)
    }, 
    _instance.setSize = function(width, height) {
        _width = width, _height = height;
        for (var i = 0; _numOfCases > i; i++) _cases[i].setSize(_width, _height);
        TweenMax.set(_instance, {
            width: _width,
            height: _height
        })
    }, 
    _instance.getWidth = function() {
        return _width
    }, 
    _instance
}

function CaseInfo(data, index) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","case_info");
    _instance.style.position = "absolute";
    _instance.style.backgroundColor = UIColors.WHITE;
    _instance.y;
    var _headline, _smallContentContainer, _ratio = 0,_mode = CasesInfoBox.MODE_HORRIZONTAL,_width = 0,_height = 0;

    function updateSize() {
        _instance.setSize(_width, _height)
    }

    function addHeadline() {
        var textData = ContentManager.getChildByAttr(data, "name", "headline");
        if (null != textData) {
            _headline = document.createElement("div");
            _headline.setAttribute("name","head_line");
            _headline.style.position = "absolute";
            var text = Text.getNewLight(23);
            text.innerHTML = textData.innerHTML;
            text.style.color = UIColors.DARK;
            text.style.whiteSpace = "nowrap";
            _headline.text = text;
            _headline.appendChild(text);
            _instance.appendChild(_headline);
        }
    }

    function addBottomInfo() {
        _smallContentContainer = new CaseSmallInfo(data);
        _instance.appendChild(_smallContentContainer);
        _smallContentContainer.onAllTextReady(updateSize);
    }

    return _instance.init = function() {
        addHeadline();
        addBottomInfo();
    }, 
    _instance.setMode = function(mode) {
        switch (_mode = mode) {
            case CasesInfoBox.MODE_HORRIZONTAL:
                TweenMax.set(_headline, {
                    rotation: 0
                }), TweenMax.set(_smallContentContainer, {
                    rotation: 0
                });
                break;
            case CasesInfoBox.MODE_VERTICAL:
                TweenMax.set(_headline, {
                    rotation: -90
                }), TweenMax.set(_smallContentContainer, {
                    rotation: -90
                })
        };
        _instance.setSize(_width, _height);

    }, 
    _instance.setSize = function(width, height) {
        if (_width = width, _height = height, TweenMax.set(_instance, {
                width: _width,
                height: _height
            }), null != _headline) switch (_mode) {
            case CasesInfoBox.MODE_HORRIZONTAL:
                var yPos = null == _instance.y ? SiteGuides.getCenterOffset() : _instance.y;
                TweenMax.set(_headline, {
                    rotation: 0,
                    x: 10,
                    y: yPos - Text.getOffsetY(_headline.text)
                }), TweenMax.set(_smallContentContainer, {
                    x: 10,
                    y: _height - SiteGuides.OFFSET_BOTOM - 39
                });
                break;
            case CasesInfoBox.MODE_VERTICAL:
                TweenMax.set(_headline, {
                    rotation: -90,
                    x: 10 - Text.getOffsetY(_headline.text),
                    y: _height - SiteGuides.OFFSET_BOTOM
                }), TweenMax.set(_smallContentContainer, {
                    x: 10,
                    y: SiteGuides.OFFSET_BOTOM + 39 + _smallContentContainer.getWidth() + 10
                })
        }
        _smallContentContainer.style.display = 380 > _height ? "none" : "inline"
    }, 
    _instance.setRatio = function(ratio) {
        _ratio = MathUtils.ratioFromRatio(index - .5, index + .5, ratio);
        var doubleRatio = 2 * _ratio;
        _ratio = doubleRatio;
        var offsetAmount = 10;
        switch (doubleRatio > 1 ? (_ratio = 2 - doubleRatio, offsetAmount = 30) : offsetAmount = -30, _ratio = 1 >= _ratio ? Quad.easeOut.getRatio(_ratio) : Quad.easeIn.getRatio(_ratio - 1), _mode) {
            case CasesInfoBox.MODE_HORRIZONTAL:
                TweenMax.set(_smallContentContainer, {
                    x: 10,
                    y: _height - SiteGuides.OFFSET_BOTOM - 39 - .5 * offsetAmount * (doubleRatio - 1)
                }), TweenMax.set(_headline, {
                    x: 10 + offsetAmount * (doubleRatio - 1)
                });
                break;
            case CasesInfoBox.MODE_VERTICAL:
                TweenMax.set(_headline, {
                    x: 10 - Text.getOffsetY(_headline.text),
                    y: _height - SiteGuides.OFFSET_BOTOM - .5 * offsetAmount * (doubleRatio - 1)
                }), TweenMax.set(_smallContentContainer, {
                    x: 10,
                    y: SiteGuides.OFFSET_BOTOM + 39 + _smallContentContainer.getWidth() + 10 + .5 * offsetAmount * (doubleRatio - 1)
                })
        }
        _instance.style.opacity = _ratio
    }, 
    _instance
}

function CaseSmallInfo(data) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","case_small_info");
    _instance.style.position = "absolute";
    var _textArr = [];

    function addBottomInfo() {
        var yPos = 0,
            spacing = 14,
            clientTag = getSmallText("Client:", yPos, 0),
            client = getSmallText(ContentManager.getChildByAttr(data, "name", "client").innerHTML, yPos, 50);
        yPos += spacing;
        var projectTag = getSmallText("Project:", yPos, 0),
            project = getSmallText(ContentManager.getChildByAttr(data, "name", "project").innerHTML, yPos, 50);
        yPos += spacing;
        var yearTag = getSmallText("Year:", yPos, 0),
            year = getSmallText(ContentManager.getChildByAttr(data, "name", "year").innerHTML, yPos, 50);
        _instance.appendChild(clientTag);
        _instance.appendChild(projectTag);
        _instance.appendChild(yearTag);
        _instance.appendChild(client);
        _instance.appendChild(project);
        _instance.appendChild(year)
    }

    function getSmallText(content, yPos, xPos) {
        var text = Text.getNewReg(13);
        return TweenMax.set(text, {
            x: xPos,
            y: yPos - Text.getOffsetY(text)
        }), text.style.color = UIColors.FONT_MED_ON_WHITE, text.style.whiteSpace = "nowrap", text.innerHTML = content, _textArr.push(text), text
    }

    return _instance.onAllTextReady = function(callback) {
        Text.listenForSize(_textArr, callback)
    }, 
    _instance.getWidth = function() {
        for (var l = _textArr.length, maxSize = 0, i = 0; l > i; i++) {
            var w = _textArr[i].offsetWidth;
            w > maxSize && (maxSize = w)
        }
        return maxSize
    }, 
    addBottomInfo(), _instance
}

CasesInfoBox.MODE_HORRIZONTAL = "horrizontal"; 
CasesInfoBox.MODE_VERTICAL = "vertical";