function RetinaImage(src, retinaHandle, callbackLoad, callbackError) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","retina_image");
    _instance.style.position = "absolute";
    _instance.onPreloaderAnimationDone;
    
    var _image, _src = src,
    _retinaHandle = retinaHandle ? retinaHandle : null,
    _midContainer = document.createElement("div");
    _midContainer.setAttribute("name","mid_container");
    _midContainer.id = "MidContainer";
    
    var _preLoader, _hasOrigSize = !1,
        _width = 0,
        _height = 0,
        _originalWidth = 0,
        _originalHeight = 0,
        _newW = null,
        _newH = null,
        _isLoaded = !1,
        _resizeMode = "",
        _callbackLoad = callbackLoad ? callbackLoad : null,
        _callbackError = callbackError ? callbackError : null,
        _position = "";

    function updateSize() {
        if (_hasOrigSize)
            if ("insideBox" === _resizeMode) {
                var ratio = _originalHeight / _originalWidth,
                    areaRatio = _newH / _newW;
                ratio > areaRatio ? (_width = _newW, _height = Math.ceil(_newW * ratio)) : (ratio = _originalWidth / _originalHeight, _width = Math.ceil(_newH * ratio), 
                _height = _newH)
            } else if ("auto" === _newW) {
            if (null !== _newH) {
                var ratio = _originalWidth / _originalHeight;
                _width = Math.ceil(_newH * ratio), _height = _newH
            }
        } else if ("auto" === _newH) {
            if (null !== _newW) {
                var ratio = _originalHeight / _originalWidth;
                _width = _newW, _height = Math.ceil(_newW * ratio)
            }
        } else null !== _newW && (_width = _newW), null !== _newH && (_height = _newH);
        else null !== _newW && (_width = _newW), null !== _newH && (_height = _newH);
        isNumber(_width) && (0 == _width && (_width = _originalWidth), _isLoaded && (_image.width = _width), _instance.style.width = _width + "px"), 
        isNumber(_height) && (0 == _height && (_height = _originalHeight), _isLoaded && (_image.height = _height), 
        _instance.style.height = _height + "px"), updatePosition(), null != _preLoader && isNumber(_width) && isNumber(_height) && _preLoader.setSize(_width, _height), 
        _midContainer.style.width = _newW + "px", _midContainer.style.height = _newH + "px"
    }

    function isNumber(o) {
        return !isNaN(o - 0) && null !== o && "" !== o && o !== !1
    }

    function updatePosition() {
        if (_isLoaded) {
            var x = 0,
                y = 0;
            if ("center/center" === _position && (x = .5, y = .5), null != _width) {
                var offW = 0;
                null != _newW && (offW = _newW), _image.style.left = Math.floor(offW * x - _width * x) + "px"
            }
            if (null != _height) {
                var offH = 0;
                null != _newH && (offH = _newH), _image.style.top = Math.floor(offH * y - _height * y) + "px"
            }
        }
    }

    function loadResolutionSpecificImage() {
        _image && (_midContainer.removeChild(_image), _instance.removeChild(_midContainer), _image = null);
        var loadPath = _src;
        if (null !== _retinaHandle) {
            var imagePathArr = _src.split("."),
                lastPart = imagePathArr.pop();
            loadPath = imagePathArr.join(".") + _retinaHandle.getAssetScaleStr() + "." + lastPart
        }
        _image = new Image;
        _image.setAttribute("name","image");
        _image.style.visibility = "hidden";
        _image.style.position = "absolute";
        _midContainer.style.position = "absolute";
        _midContainer.appendChild(_image);
        _instance.appendChild(_midContainer);
        null == _preLoader ? _image.addEventListener("load", onImageLoaded) : _midContainer.appendChild(_preLoader);
        _image.addEventListener("error", onImageError), 
        //console.log("loadpath: "+loadPath);
        null != _preLoader ? (_image.onProgress = onProgress, _image.load(loadPath) || _image.addEventListener("load", onImageLoaded)) : _image.src = loadPath
    }

    function onImageError() {
        return doCallback(_callbackError), !0
    }

    function onProgress(progress) {
        _preLoader.setProgress(progress)
    }

    function setOrigSize(width, height) {
        var scalePercent = _retinaHandle ? _retinaHandle.getAssetScalePercent() : 1;
        isNumber(width) && (_originalWidth = width * scalePercent, _image.width = _originalWidth), 
        isNumber(height) && (_originalHeight = height * scalePercent, _image.height = _originalHeight), _hasOrigSize = !0
    }

    function onImageLoaded() {
        _image.removeEventListener("load", onImageLoaded);
        _image.removeEventListener("error", onImageError);
        setOrigSize(_image.width, _image.height), 
        null != _preLoader && (isNumber(_width) && TweenMax.set(_image, {
            x: _width
        }), 
        TweenMax.to(_image, 1, {
            x: 0,
            ease: Expo.easeInOut
        }), 
        TweenMax.to(_preLoader, 1, {
            x: -_width,
            onComplete: function() {
                _midContainer.removeChild(_preLoader), 
                _preLoader = null, 
                null != _instance.onPreloaderAnimationDone && _instance.onPreloaderAnimationDone()
            },
            ease: Expo.easeInOut
        })), _isLoaded = !0, updateSize(), _image.style.visibility = "visible", doCallback(_callbackLoad)
    }

    function doCallback(callback) {
        null !== callback && (callback.length ? callback(_instance) : callback(), callback = null)
    }

    return _instance.init = function() {
        loadResolutionSpecificImage(), 
        null !== _retinaHandle && _retinaHandle.addEventListener(RetinaHandleEvents.CHANGE, loadResolutionSpecificImage)
    }, 
    _instance.kill = function() {
        null !== _retinaHandle && _retinaHandle.removeEventListener(RetinaHandleEvents.CHANGE, loadResolutionSpecificImage)
    }, 
    _instance.getWidth = function() {
        return _width
    }, 
    _instance.getHeight = function() {
        return _height
    }, 
    _instance.setSizeByAttribute = function(dom) {
        var width = parseInt(dom.getAttribute("width")),
            height = parseInt(dom.getAttribute("height"));
        return _instance.getOriginalWidth() <= 0 && _instance.getOriginalHeight() <= 0 && setOrigSize(width, height), isNumber(width) && isNumber(height) ? void _instance.setSize(width, height) : (isNumber(width) && _instance.setWidth(width), void(isNumber(height) && _instance.setHeight(height)))
    }, 
    _instance.hasSize = function() {
        return _instance.getWidth() > 0 && _instance.getHeight() > 0
    }, 
    _instance.setSize = function(width, height) {
        _newW = width, _newH = height, updateSize()
    }, 
    _instance.setWidth = function(val) {
        _newW = val, updateSize()
    }, 
    _instance.setHeight = function(val) {
        _newH = val, updateSize()
    }, 
    _instance.setResizeMode = function(mode) {
        _resizeMode = mode, 
        _midContainer.style.overflow = "insideBox" === _resizeMode ? "hidden" : "visible";
        updateSize();
    }, 
    _instance.getContent = function() {
        return _image
    }, 
    _instance.setPreloader = function(preloader) {
        _preLoader = preloader, null != _image ? (_image.removeEventListener("load", onImageLoaded), 
        _image.onProgress = onProgress, 
        _image.load(_src) ? _preLoader.onEaseComplete = onImageLoaded : _image.addEventListener("load", onImageLoaded)) : _preLoader.onEaseComplete = onImageLoaded;
        _midContainer.appendChild(_preLoader);
    }, 
    _instance.setPosition = function(value) {
        _position = value, updatePosition()
    }, 
    _instance.getOriginalWidth = function() {
        return _isLoaded ? _originalWidth : 0
    }, 
    _instance.getOriginalHeight = function() {
        return _isLoaded ? _originalHeight : 0
    }, 
    _instance.getWidthRatio = function() {
        return _isLoaded ? _instance.getOriginalHeight() / _instance.getOriginalWidth() : 0
    }, 
    _instance.isLoaded = function() {
        return _isLoaded
    }, 
    _instance
}

function SlidePreloader(bgColor, slideColor) {
    
    var _instance = new ImagePreloader;
    _background = document.createElement("div");
    _background.setAttribute("name","slide_preloader");
    _background.style.position = "absolute";
    _background.style.backgroundColor = null != bgColor ? bgColor : UIColors.PRELOADER_COLOR_ONE;
    var _slider = document.createElement("div");
    _slider.style.position = "absolute";
    _slider.style.backgroundColor = null != slideColor ? slideColor : UIColors.PRELOADER_COLOR_TWO;
    _instance.appendChild(_background);
    _instance.appendChild(_slider);
    var _width, _height, _ratio = 0;

    function easeComplete() {
        _ratio >= .99 && (_background.style.display = "none", null != _instance.onEaseComplete && _instance.onEaseComplete())
    }
    
    _instance.onEaseComplete, _instance.setSize = function(width, height) {
        _width = Math.ceil(width);
        _height = Math.ceil(height);
        _background.style.width = _instance.style.width = _width + "px";
        _background.style.height = _instance.style.height = _height + "px";
        _ratio >= .99 ? _slider.style.height = _height + "px" : (TweenMax.set(_slider, {
            width: _width * _ratio
        }), _slider.style.height = _height + "px")
    };

    var __progress = 0;
    return _instance.setProgress = function(progress) {
        __progress != progress && (__progress = progress, _ratio = __progress / 100, _ratio >= .99 && (_ratio = 1), 
        TweenMax.to(_slider, .75 + .5 * Math.random(), {
            width: _width * _ratio,
            onComplete: easeComplete
        }), _slider.style.height = _height + "px")
    },
    _instance
}

function ImagePreloader() {
    var _instance = document.createElement("div");
    _instance.style.position = "absolute";
    _instance.setSize = function() {};
    _instance.setProgress = function() {}; 
    return _instance
}


Image.prototype.load = function(url, callback) {
    var thisImg = this;
    if (!window.XMLHttpRequest) return thisImg.src = url, !1;
    var xmlHTTP = new XMLHttpRequest;
    thisImg.completedPercentage = 0;
	xmlHTTP.open("GET", url, !0);
    xmlHTTP.responseType = "arraybuffer"; 
    return xmlHTTP.onload = function() {
        var h = xmlHTTP.getAllResponseHeaders(),
            m = h.match(/^Content-Type\:\s*(.*?)$/im),
            mimeType = m[1] || "image/png",
            blob = new Blob([this.response], {
                type: mimeType
            });
        thisImg.src = window.URL.createObjectURL(blob), callback && callback(this)
    }, xmlHTTP.onprogress = function(e) {
        e.lengthComputable && (thisImg.completedPercentage = parseInt(e.loaded / e.total * 100));
        null != thisImg.onProgress && thisImg.onProgress(thisImg.completedPercentage);
    }, xmlHTTP.onloadstart = function() {
        thisImg.completedPercentage = 0;
    }, xmlHTTP.onloadend = function() {
        thisImg.completedPercentage = 100;
    }, xmlHTTP.send(), !0
};
