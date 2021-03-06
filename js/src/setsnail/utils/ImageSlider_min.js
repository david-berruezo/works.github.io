function ImageSlider(urls) {
    
    var _instance = document.createElement("div");
    _instance.style.position = "absolute";
    var _mask = document.createElement("div");
    _mask.setAttribute("name","image_slider");
    _mask.style.position = "absolute", _mask.style.overflow = "hidden";
    var _imageContainer = document.createElement("div");
    _imageContainer.style.position = "absolute", _mask.appendChild(_imageContainer), _instance.appendChild(_mask);
    var _spacing = 0,
        _width = 0,
        _height = 0,
        _images = [],
        _currImgId = 0,
        _totalWidth = 0,
        _isActive = !1,
        _currIndex = 0;

    function muteCurrent() {
        void 0 != _images[_currIndex].mute && _images[_currIndex].mute()
    }

    function updateMute() {
        void 0 != _images[_currIndex].mute && (_isActive ? _images[_currIndex].unmute() : _images[_currIndex].mute())
    }

    function tweenToImgId() {
        _currIndex = Math.abs(_currImgId % _images.length), updateMute(), TweenMax.to(_imageContainer, 1, {
            x: (_width + _spacing) * _currImgId,
            onUpdate: updateImgPos,
            ease: Expo.easeOut
        })
    }

    function resizeContent() {
        TweenMax.set(_mask, {
            width: _width,
            height: _height
        });
        
        for (var l = _images.length, xPos = 0, i = 0; l > i; i++) {
            var img = _images[i];
            img.setSize(_width, _height), TweenMax.set(img, {
                x: xPos
            }), xPos += _width + _spacing
        }
        _totalWidth = xPos, TweenMax.killTweensOf(_imageContainer), TweenMax.set(_imageContainer, {
            x: (_width + _spacing) * _currImgId
        });
        
        updateImgPos();
    }

    function updateImgPos() {
        for (var l = _images.length, containerX = _imageContainer._gsTransform.x, i = 0; l > i; i++) {
            for (var img = _images[i], imgX = img._gsTransform.x; - containerX - _width - _spacing > imgX;) imgX += _totalWidth;
            for (; imgX > -containerX + _width + _spacing;) imgX -= _totalWidth;
            TweenMax.set(img, {
                x: imgX
            })
        }
    }

    function setupImages() {
        for (var l = urls.length, xPos = 0, i = 0; l > i; i++) {
            var img, type = urls[i].split(".").pop();
            "mp4" == type ? (console.log("S??LKDFJLKSDJFLKSJDFLKDJS"), img = new VideoPlayer(urls[i]), img.init("AUTOPLAY"), img.setScaleMode("OUTSIDE"), img.enableLoop(), img.mute(), img.play()) : (img = new RetinaImage(urls[i]), img.init(), img.setPreloader(new SlidePreloader("#f4f4f4", "#e9e9e9")), img.setResizeMode("insideBox"), img.setPosition("center/center")), img.setSize(_width, _height), TweenMax.set(img, {
                x: xPos
            }), _images.push(img), _imageContainer.appendChild(img), xPos += _width + _spacing
        }
        _totalWidth = xPos
    }
    
    return _instance.init = function() {
        TweenMax.set(_mask, {
            width: _width,
            height: _height
        }), 
        setupImages();
    }, 
    _instance.setSize = function(width, height) {
        _width = width, _height = height, resizeContent()
    }, _instance.nextImg = function() {
        muteCurrent(), _currImgId++, tweenToImgId()
    }, _instance.prevImg = function() {
        muteCurrent(), _currImgId--, tweenToImgId()
    }, _instance.setActive = function() {
        _isActive = !0, updateMute()
    }, _instance.setInactive = function() {
        _isActive = !1, updateMute()
    }, 
    _instance
}