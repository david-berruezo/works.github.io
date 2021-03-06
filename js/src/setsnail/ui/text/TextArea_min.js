function TextArea(text, font) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","text_area");
    _instance.style.position = "absolute";
    _instance.isController = !0;
    
    var _model, _modelMode = TextAreaModel.MODE_CONTROL;

    function updateFontSize() {
        font.style.fontSize = _model.fontSize + "px";
        font.updateLineHeight(), 
        TweenMax.set(font, {
            y: -Text.getOffsetY(font)
        })
    }

    return _instance.addModel = function(model, mode) {
        _model = null != model ? model : new TextAreaModel;
        null != mode && (_modelMode = mode, _modelMode == TextAreaModel.MODE_LISTEN && _model.addEventListener(TextAreaModel.EVENT_UPDATE, updateFontSize))
    },

    _instance.getModel = function() {
        return _model
    },

    _instance.kill = function() {
        null != _model && _model.removeEventListener(TextAreaModel.EVENT_UPDATE, updateFontSize)
    },

    _instance.init = function(model, mode) {
        font.innerHTML = text;
        _instance.appendChild(font);
        _instance.addModel(model, mode)
    },

    _instance.setColor = function(color) {
        font.style.color = color
    },

    _instance.setColumns = function(numOfColumns, gap) {
        font.style.webkitColumnCount = numOfColumns;
        font.style.mozColumnCount = numOfColumns;
        font.style.columnCount = numOfColumns;
        null != gap && (font.style.webkitColumnGap = gap + "px", font.style.mozColumnGap = gap + "px", font.style.columnGap = gap + "px")
    },

    _instance.getTextInstance = function() {
        return font
    }, 

    _instance.setSize = function(width, height) {
        if (_modelMode == TextAreaModel.MODE_LISTEN || null == _model) return void(_instance.style.width = font.style.width = width + "px");
        _model.setSize(width, height);
        _instance.style.width = font.style.width = _model.width + "px";
        
        for (var currentfontSize = parseInt(font.style.fontSize); font.offsetHeight < _model.height;) {
            if (currentfontSize += 1, currentfontSize >= _model.maxFontSize) {
                currentfontSize = _model.maxFontSize;
                font.style.fontSize = currentfontSize + "px";
                font.updateLineHeight();
                break
            }
            if (font.style.fontSize = currentfontSize + "px", font.updateLineHeight(), currentfontSize >= 800) break
        }

        for (; font.offsetHeight > _model.height;) {
            if (currentfontSize -= 1, currentfontSize <= _model.minFontSize) {
                currentfontSize = _model.minFontSize;
                font.style.fontSize = currentfontSize + "px";
                font.updateLineHeight();
                break
            }
            if (font.style.fontSize = currentfontSize + "px", font.updateLineHeight(), 1 >= currentfontSize) break
        }

        _modelMode == TextAreaModel.MODE_CONTROL && null != _model && (_model.fontSize = currentfontSize, _model.callUpdate());
        TweenMax.set(font, {
            y: -Text.getOffsetY(font)
        })
    },
     _instance
}

function TextAreaModel() {
    //console.log("lleg aqui");
    TextAreaModel.EVENT_UPDATE = "UPDATE"; 
    TextAreaModel.MODE_CONTROL = "MODE_CONTROL";
    TextAreaModel.MODE_LISTEN = "MODE_LISTEN";
    var _instance = new EventDispatcher;

    return _instance.minFontSize = 1, 
    _instance.maxFontSize = 999999, _instance.minWidth = 0, _instance.maxWidth = 999999, _instance.minHeight = 0, 
    _instance.maxHeight = 999999, _instance.fontSize = 12, _instance.width = 0, _instance.height = 0,

    _instance.callUpdate = function() {
        _instance.dispatchEvent(TextAreaModel.EVENT_UPDATE);
    },

    _instance.setSize = function(width, height) {
        _instance.width = width > _instance.maxWidth ? _instance.maxWidth : width < _instance.minWidth ? _instance.minWidth : width;
        _instance.height = height > _instance.maxHeight ? _instance.maxHeight : height < _instance.minHeight ? _instance.minHeight : height
    },

    _instance
}