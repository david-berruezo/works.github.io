function CaseTextModule(data) {
    
    var _instance = Snail.extend(new Module);
    _instance.setAttribute("name","case_text_module");
    _instance.style.position = "absolute";
    _instance.style.backgroundColor = UIColors.WHITE;
    var _width, _height, _model, _modelMode, _top, _bot, _mid, _textHeightScale, _widthScale = 1,_textAreas = [];

    function updateBot() {
        if (null != _height && void 0 != _height) {
            var margin = 9,
                textWidth = (_width - 2 * margin) * _widthScale;
            null != _bot && (_bot.setSize(textWidth, _height * _textHeightScale), TweenMax.set(_bot, {
                x: margin,
                y: _height - SiteGuides.OFFSET_BOTOM - _bot.getTextInstance().offsetHeight + 2 * Text.getOffsetY(_bot.getTextInstance())
            }))
        }
    }

    function addTop() {
        var topData = ContentManager.getChildByAttr(data, "name", "top");
        null != topData && (_top = new TextArea(topData.innerHTML, Text.getNewReg(13)), _top.setAttribute("name","textarea"),_top.style.color = UIColors.FONT_DARK, _top.init(), _textAreas.push(_top), _instance.appendChild(_top))
    }

    function addMid() {
        var midData = ContentManager.getChildByAttr(data, "name", "mid");
        null != midData && (_mid = new TextArea(midData.innerHTML, Text.getNewReg(13)), _mid.setAttribute("name","textarea_mid") ,_mid.style.color = UIColors.FONT_DARK, _mid.init(), _textAreas.push(_mid), _instance.appendChild(_mid))
    }

    function addBot() {
        var botData = ContentManager.getChildByAttr(data, "name", "bot");
        null != botData && (_bot = new TextArea(botData.innerHTML, Text.getNewReg(13)),_bot.setAttribute("name","textarea_bot"), _bot.style.color = UIColors.FONT_DARK, _bot.init(), _textAreas.push(_bot), _instance.appendChild(_bot))
    }

    function setModel() {
        null == _model && (_model = new TextAreaModel);
        for (var l = _textAreas.length, controlId = getLongestTextId(_textAreas), i = 0; l > i; i++) {
            var mode = TextAreaModel.MODE_LISTEN;
            _modelMode == TextAreaModel.MODE_CONTROL && i == controlId && (mode = TextAreaModel.MODE_CONTROL), _textAreas[i].addModel(_model, mode)
        }
        null != _bot && _model.addEventListener(TextAreaModel.EVENT_UPDATE, updateBot)
    }

    function getLongestTextId(textAreas) {
        for (var highestCount = 0, highsetId = -1, l = textAreas.length, i = 0; l > i; i++) {
            var bodyHtml = textAreas[i].getTextInstance().innerHTML;
            bodyHtml.length > highestCount && (highestCount = bodyHtml.length, highsetId = i)
        }
        return highsetId
    }
    
    return _instance.init = function() {
        var scaleData = data.getAttribute("data-width-scale");
        null != scaleData && (_widthScale = scaleData), addTop(), addMid(), addBot()
    }, 
    _instance.resize_desktop = function(width, height) {
        _width = .2 * width, 200 > _width && (_width = 200), _height = height, TweenMax.set(_instance, {
            width: _width,
            height: _height
        }), _textHeightScale = .3;
        var margin = 9,
            textWidth = (_width - 2 * margin) * _widthScale;
        null != _top && (_top.setSize(textWidth, _height * _textHeightScale), TweenMax.set(_top, {
            x: margin,
            y: SiteGuides.OFFSET_TOP
        })), null != _mid && (_mid.setSize(textWidth, _height * _textHeightScale), TweenMax.set(_mid, {
            x: margin,
            y: SiteGuides.getCenterOffset()
        })), updateBot()
    }, 
    _instance.getWidth = function() {
        return _width
    }, 
    _instance.kill = function() {
        (null != _model || null != _bot) && _model.removeEventListener(TextAreaModel.EVENT_UPDATE, updateBot)
    }, 
    _instance.getNumOfChars = function() {
        for (var l = _textAreas.length, totalLength = 0, i = 0; l > i; i++) totalLength += _textAreas[i].getTextInstance().innerHTML.length;
        return totalLength
    }, 
    _instance.setModel = function(model, mode) {
        _model = model, _modelMode = mode, setModel()
    }, 
    _instance
}