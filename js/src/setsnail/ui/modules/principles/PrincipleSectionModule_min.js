function PrincipleSectionModule(data, bodyModel, modelMode) {
    
    var _instance = Snail.extend(new Module);
    _instance.setAttribute("name","principle_section_module");
    _instance.style.backgroundColor = UIColors.WHITE;
    
    var _line, _width, _height, _body, _headline, _image;

    function addSiteLine() {
        _line = document.createElement("div");
        _instance.setAttribute("name","site_line");
        _line.style.position = "absolute";
        _line.style.backgroundColor = UIColors.LINE_ON_WHITE;
        _instance.appendChild(_line);
    }

    function addHeadline() {
        var textData = ContentManager.getChildByAttr(data, "name", "headline");
        _headline = new TextArea(textData.innerHTML, Text.getNewLight(28));
        _headline.setAttribute("name","text_area_head_line");
        _headline.style.color = UIColors.FONT_DARK;
        _headline.getTextInstance().style.whiteSpace = "nowrap";
        _headline.init();
        _instance.appendChild(_headline);
    }

    function addBodyText() {
        var textData = ContentManager.getChildByAttr(data, "name", "body");
        _body = new TextArea(textData.innerHTML, Text.getNewLight(28));
        _body.setAttribute("name","text_area_body");
        _body.style.color = UIColors.FONT_DARK;
        _body.init(bodyModel, modelMode);
        _instance.appendChild(_body)
    }

    function addImage() {
        var urlData = ContentManager.getChildByAttr(data, "name", "image");
        if (null != urlData && "" != urlData.innerHTML) {
            switch (urlData.innerHTML) {
                case "round":
                    _image = new CircleInCircle(200);
                    _image.setAttribute("name","circle_in_circle");
                    break;
                case "roundrect":
                    _image = new CircleInRect(200);
                    _image.setAttribute("name","circle_in_rect");
                    break;
                case "rect":
                    _image = new RectInRect(200, 200);
                    _image.setAttribute("name","rect_in_rect");
                    break;
                case "rectbyrect":
                    _image = new RectByRect(200, 200);
                    _image.setAttribute("name","rect_by_rect");
                    break;
                case "triangle":
                    _image = new TriangleInRect(200, 200);
                    _image.setAttribute("name","triangle_in_rect");
                    break;
                case "doubletriangle":
                    _image = new DoubleTriangleInRect(200, 200);
                    _image.setAttribute("name","double_triangle_in_rect");
            }
            null != _image && _instance.appendChild(_image)
        }
    }
    
    return _instance.init = function() {
        _instance.super.init();
        addSiteLine();
        addHeadline();
        addBodyText();
        addImage()
    }, 

    _instance.resize_desktop = function(width, height) {
        _width = Math.floor(.25 * height);
        200 > _width && (_width = 200);
        _height = height;
        _instance.style.width = _instance.getWidth() + "px";
        _instance.style.height = height + "px";
        var margin = 11,
            headOffsetY = SiteGuides.OFFSET_TOP - Text.getOffsetY(_headline.getTextInstance()),
            bodyOffsetY = SiteGuides.getCenterOffset(),
            bodyHeight = _height - bodyOffsetY - Math.floor(.25 * height) - 2 * margin;
        if (_body.setSize(_width - 2 * margin, bodyHeight), 
        TweenMax.set(_headline, {
                x: margin,
                y: headOffsetY
            }), 
            TweenMax.set(_body, {
                x: margin,
                y: bodyOffsetY
            }), 
            TweenMax.set(_line, {
                width: 1,
                height: _height
            }), null != _image) {
            var ratio = Math.floor(.25 * height) / 268,
                imgMargin = Math.floor(6 * margin * ratio),
                imgSize = Math.floor(.25 * height) - imgMargin;
            _image.setSize(imgSize, imgSize), TweenMax.set(_image, {
                y: _height - imgSize - 3 * margin,
                x: .5 * _width - .5 * imgSize
            })
        }
    }, 
    _instance.getWidth = function() {
        return _width
    }, 
    _instance.kill = function() {}, _instance
}