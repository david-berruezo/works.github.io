function HomeStory(data, storyNumber, bodyTextModel) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","home_story");
    _instance.style.position = "absolute";
    _instance.style.backgroundColor = ColorUtils.WHITE;
    _instance.onStoryClick, Touchable.apply(_instance);
    
    var _widthExpanded, _widthCollapsed, _line, _imageSlider, _body;
    var _bodyTop, _bodyMask, _headline, _tag, _date, _number, _leftButton, _rightButton, _ratio = 1,
        _oldRatio = -1,
        _ratioOffset = 0,
        _isLastStory = !1,
        _reverseStories = [],
        _hasReverseStories = !1,
        _numOfImages = 0,
        _numberColorActive = ColorUtils.hex2rgb(UIColors.FONT_DARK),
        _numberColorDeactive = ColorUtils.hex2rgb(UIColors.LINE_ON_WHITE),
        _mode = TextAreaModel.MODE_LISTEN,
        _overrideRatioToOne = !1,
        _ratioWidthOverflow = 0,
        _buttonContainer = document.createElement("div");
        _buttonContainer.setAttribute("name","button_container");

    function updateCollapseStories() {
        for (var l = _reverseStories.length, preStory = _instance, collapseRatio = 1 - _ratio, partRatio = 1 / l, i = 0; l > i; i++) {
            var ratio = MathUtils.ratioFromRatio(1 - partRatio * (i + 1), 1 - partRatio * i, collapseRatio);
            _reverseStories[i].setRatioNoOffset(ratio, !1), TweenMax.set(_reverseStories[i], {
                x: preStory._gsTransform.x - _reverseStories[i].getWidth()
            }), preStory = _reverseStories[i]
        }
    }

    function onEverywhereClick() {
        null != _instance.onStoryClick && _instance.onStoryClick(storyNumber)
    }

    function updateToRatio(force) {
        if (force || _ratio != _oldRatio) {
            _isLastStory && _overrideRatioToOne && (_ratio = 1);
            var delta = _widthExpanded - _widthCollapsed,
                deltaRatio = delta * _ratio,
                margin = 9,
                doubleMargin = 2 * margin,
                imgYPos = SiteGuides.getCenterOffset() + 125,
                collapsedImgHeight = .51 * (_widthCollapsed - doubleMargin),
                expImgHeight = _height - imgYPos,
                imgHeight = Math.ceil(collapsedImgHeight + (expImgHeight - collapsedImgHeight) * _ratio);
            TweenMax.set(_number, {
                x: deltaRatio + margin,
                y: SiteGuides.OFFSET_TOP - Text.getOffsetY(_number) - 40 * Math.cos(_ratio * Math.PI + .5 * Math.PI),
                width: _widthCollapsed - doubleMargin
            });
            var easeColor = ColorUtils.interpolateRGB(_numberColorDeactive, _numberColorActive, _ratio);
            if (_number.style.color = "rgb(" + easeColor.r + "," + easeColor.g + "," + easeColor.b + ")", TweenMax.set(_headline, {
                    x: deltaRatio + margin,
                    y: SiteGuides.getCenterOffset() - Text.getOffsetY(_headline),
                    width: _widthCollapsed - doubleMargin
                }), _numOfImages > 1) {
                var buttonLeftEase = Back.easeOut.getRatio(MathUtils.ratioFromRatio(.1, .8, _ratio, !0)),
                    buttonRightEase = Back.easeOut.getRatio(MathUtils.ratioFromRatio(.3, 1, _ratio, !0));
                null != _leftButton && null != _rightButton && (TweenMax.set(_leftButton, {
                    y: imgYPos + 40 - 72 * buttonLeftEase,
                    x: margin
                }), TweenMax.set(_rightButton, {
                    y: imgYPos + 40 - 72 * buttonRightEase,
                    x: margin + 32
                }))
            }
            TweenMax.set(_imageSlider, {
                y: imgYPos,
                x: margin
            }), 
            _imageSlider.setSize(_instance.getWidth() - doubleMargin, imgHeight), TweenMax.set(_bodyMask, {
                x: deltaRatio + margin,
                y: 0,
                width: _widthCollapsed - doubleMargin,
                height: 1e3
            });
            var bodyTopXPos = 0,
                bodyTopWidth = _widthCollapsed - doubleMargin - 10,
                bodyTopYOffset = 0;
            BrowserDetect.MOBILE && _widthCollapsed > _height && (bodyTopXPos = Math.floor(.5 * _widthCollapsed), bodyTopWidth -= bodyTopXPos), BrowserDetect.MOBILE && (bodyTopYOffset = -20), TweenMax.set(_bodyTop, {
                x: bodyTopXPos,
                y: 130 - 30 * Math.cos(-1 + 2 * _ratio * Math.PI) + bodyTopYOffset,
                width: bodyTopWidth,
                alpha: -1 + 2 * _ratio
            }), TweenMax.set(_body, {
                x: deltaRatio + margin,
                y: imgYPos + imgHeight + margin,
                width: _widthCollapsed - doubleMargin,
                alpha: 1 - 2 * _ratio
            });
            var bodyHeight = .5 * (_height - imgYPos - collapsedImgHeight - margin);
            100 > bodyHeight && (bodyHeight = 100), _body.setSize(_widthCollapsed - doubleMargin, bodyHeight), TweenMax.set(_tag, {
                x: deltaRatio + margin,
                y: imgYPos - Text.getOffsetY(_tag) - doubleMargin,
                width: _widthCollapsed - doubleMargin
            });
            var dateOffsetY = -40;
            BrowserDetect.MOBILE && (dateOffsetY = -30), TweenMax.set(_date, {
                x: deltaRatio + margin,
                y: SiteGuides.getCenterOffset() - Text.getOffsetY(_date) + dateOffsetY,
                width: _widthCollapsed - doubleMargin
            }), _oldRatio = _ratio
        }
    }

    function addSiteLine() {
        _line = document.createElement("div"); 
        _line.setAttribute("name","line");
        _line.style.position = "absolute";
        _line.style.backgroundColor = UIColors.LINE_ON_WHITE;
        _instance.appendChild(_line);
    }

    function addSlideButtons() {
        1 >= _numOfImages || (_leftButton = new RetinaImage(domain+"/assets/images/logo/arrow_short.png", Assets.RETINA_HANDLE), _rightButton = new RetinaImage(domain+"/assets/images/logo/arrow_short.png", Assets.RETINA_HANDLE), _leftButton.style.cursor = "pointer", _rightButton.style.cursor = "pointer", Touchable.apply(_leftButton), Touchable.apply(_rightButton), _leftButton.onClick(function() {
            _imageSlider.nextImg()
        }), _rightButton.onClick(function() {
            _imageSlider.prevImg()
        }), _leftButton.init(), _rightButton.init(), _leftButton.getContent().style.transform = "rotatey(180deg)", _buttonContainer.appendChild(_leftButton), _buttonContainer.appendChild(_rightButton), _instance.appendChild(_buttonContainer))
    }

    function addImageSlide() {
        for (var slideData = ContentManager.getChildByAttr(data, "name", "images"), slides = ContentManager.getChildrenByAttr(slideData, "name", "image"), urls = [], l = slides.length, i = 0; l > i; i++) urls.push(slides[i].innerHTML);
        _imageSlider = new ImageSlider(urls), _instance.appendChild(_imageSlider), _imageSlider.init()
    }

    function addNumber() {
        _number = Text.getNewMed(95), _number.innerHTML = storyNumber, _number.style.color = UIColors.FONT_MED_ON_WHITE, _instance.appendChild(_number)
    }

    function addDate() {
        var dateData = ContentManager.getChildByAttr(data, "name", "date");
        _date = Text.getNewLight(13), _date.innerHTML = dateData.innerHTML, _date.style.color = UIColors.FONT_DARK, _instance.appendChild(_date)
    }

    function addHeadline() {
        var headlineData = ContentManager.getChildByAttr(data, "name", "headline");
        _headline = Text.getNewReg(23), _headline.innerHTML = headlineData.innerHTML, _headline.style.color = UIColors.FONT_DARK, _instance.appendChild(_headline)
    }

    function addTopBody() {
        var bodyData = ContentManager.getChildByAttr(data, "name", "body"),
            txtBase = Text.getNewReg(13);
        txtBase.lineHeightScale = 14 / 13;
        _bodyTop = new TextArea(bodyData.innerHTML, txtBase);
        _bodyTop.init(bodyTextModel, TextAreaModel.MODE_LISTEN);
        _bodyTop.style.color = UIColors.FONT_MED_ON_WHITE;
        _bodyMask = document.createElement("div");
        _bodyMask.style.position = "absolute";
        _bodyMask.setAttribute("name","top_body");
        _bodyMask.appendChild(_bodyTop);
        _instance.appendChild(_bodyMask)
    }

    function addBody() {
        var bodyData = ContentManager.getChildByAttr(data, "name", "body"),txtBase = Text.getNewReg(13);
        //console.log(bodyData);
        txtBase.lineHeightScale = 14 / 13;
        _body = new TextArea(bodyData.innerHTML, txtBase);
        _body.init(bodyTextModel, _mode);
        _body.style.color = UIColors.FONT_MED_ON_WHITE;
        _instance.appendChild(_body);
        // Check if exist a href link
        /*
        var anchor = bodyData.getElementsByTagName("a");
        if (anchor.length == 1){
            var link = anchor[0].getAttribute("href");
            var prueba_button = new TextButton( Text.getNewLight(50), UIColors.WHITE, link );
            _instance.appendChild(prueba_button);
            prueba_button.addEventListener('touchstart', function() { console.log("el link es: "+link); window.location = link; });
        }
        */
    }

    function addImgTag() {
        var tagData = ContentManager.getChildByAttr(data, "name", "image-tag-name");
        _tag = Text.getNewReg(13), _tag.innerHTML = tagData.innerHTML, _tag.style.color = UIColors.FONT_DARK, _instance.appendChild(_tag)
    }
    
    return _buttonContainer.style.position = "absolute", _instance.setBodyModelController = function() {
        _mode = TextAreaModel.MODE_CONTROL
    }, 
    _instance.init = function() {
        _instance.onClick(onEverywhereClick);
        var slideData = ContentManager.getChildByAttr(data, "name", "images"),
            slides = ContentManager.getChildrenByAttr(slideData, "name", "image");
        _numOfImages = slides.length;
        addSiteLine();
        BrowserDetect.MOBILE || addSlideButtons();
        addImageSlide();
        addHeadline();
        addImgTag();
        addTopBody();
        addBody();
        addDate();
        addNumber()
    }, 
    _instance.setExpandedWidth = function(width) {
        _widthExpanded = width
    }, 
    _instance.setCollapsedWidth = function(width) {
        _widthCollapsed = width
    }, 
    _instance.setHeight = function(height) {
        _height = height, _instance.style.height = _height + "px", TweenMax.set(_line, {
            width: 1,
            x: -1,
            height: _height
        })
    }, 
    _instance.getWidth = function() {
        var delta = _widthExpanded - _widthCollapsed;
        return _widthCollapsed + delta * _ratio
    }, 
    _instance.setRatioOffset = function(offsetStart) {
        _ratioOffset = offsetStart
    }, 
    _instance.setRatioNoOffset = function(ratio, forceUpdate) {
        _ratio = ratio, _isLastStory ? 0 > ratio ? (_ratio += 1, _overrideRatioToOne = !1) : _overrideRatioToOne = !0 : _overrideRatioToOne = !1, 0 >= _ratio ? _ratio = 0 : _ratio >= 1 ? (_ratio = 1, _hasReverseStories && ratio > 0 && updateCollapseStories()) : _hasReverseStories && ratio > 0 && updateCollapseStories(), _instance.style.width = _instance.getWidth() + "px", updateToRatio(forceUpdate)
    }, 
    _instance.setRatio = function(ratio, forceUpdate) {
        _ratioWidthOverflow = ratio - _ratioOffset - 1, .5 > _ratioWidthOverflow && _ratioWidthOverflow > -.5 ? _imageSlider.setActive() : _imageSlider.setInactive(), _instance.setRatioNoOffset(MathUtils.ratioFromRatio(_ratioOffset, _ratioOffset + 1, ratio, !_isLastStory), forceUpdate)
    }, 
    _instance.setLastStory = function() {
        _isLastStory = !0
    }, 
    _instance.reverseStories = function(reverseStories) {
        _reverseStories = reverseStories, _hasReverseStories = _reverseStories.length > 0
    }, 
    _instance
}