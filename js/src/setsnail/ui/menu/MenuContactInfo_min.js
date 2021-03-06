function MenuContactInfo(data, guides) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","menu_contact_info");
    _instance.style.position = "absolute";
    var _headline, OFFSET_TOP = 19,COLUMN_SPACING = 20, _isMobileMode = !1,_columns = [];
    var _columnWidth = 0;

    function startLayoutListen() {
        getColumnsTextWidth();
        guides.addEventListener(GuideLines.ON_UPDATE, updateLayout);
        updateLayout();
    }

    function addHeadline() {
        _headline = Text.getNewReg(13);
        _headline.style.color = UIColors.WHITE;
        _headline.innerHTML = ContentManager.getChildByAttr(data, "name", "headline").innerHTML;
        _headline.style.whiteSpace = "nowrap";
        _instance.appendChild(_headline);

        var headlineOffset = -40;
        Text.listenForSize([_headline], function() {
            TweenMax.set(_headline, {
                x: headlineOffset - _headline.offsetWidth,
                y: -Text.getOffsetY(_headline)
            })
        })
    }

    function addColumns() {
        for (var columns = ContentManager.getChildByAttr(data, "name", "columns"), l = columns.children.length, i = 0; l > i; i++) {
            var column = Text.getNewReg(13);
            column.lineHeightOffset = 1;
            column.style.color = UIColors.FONT_MED_ON_WHITE;
            column.style.whiteSpace = "nowrap";
            column.innerHTML = columns.children[i].innerHTML;
            column.updateLineHeight(), TweenMax.set(column, {
                y: -Text.getOffsetY(column)
            }), _instance.appendChild(column), _columns.push(column)
        }
    }

    function updateLayout() {
        var width = guides.getGuide("end") - guides.getGuide("contact");
        xPos = guides.getGuide("contact");
        getColumnsTextWidth() > width && (xPos = guides.getGuide("end") - getColumnsTextWidth()), (BrowserDetect.MOBILE || _isMobileMode) && (xPos = guides.getGuide("start")), TweenMax.set(_instance, {
            x: xPos,
            y: OFFSET_TOP
        }), Text.listenForSize(_columns, layoutColumns), _isMobileMode && _columns.length > 2 ? _columns.length > 2 && (_columns[2].style.display = "none") : _columns.length > 2 && (_columns[2].style.display = "inline")
    }

    function layoutColumns() {
        var l = _columns.length;
        (BrowserDetect.MOBILE || _isMobileMode && l > 2) && (l = 2);
        for (var xPos = 0, i = 0; l > i; i++) TweenMax.set(_columns[i], {
            x: xPos
        }), xPos += _columns[i].offsetWidth + COLUMN_SPACING
    }

    function getColumnsTextWidth() {
        var l = _columns.length;
        _columnWidth = 0;
        for (var i = 0; l > i; i++) _columnWidth += _columns[i].offsetWidth, _columnWidth += COLUMN_SPACING;
        return _columnWidth
    }

    _instance.init = function() {
        addHeadline();
        addColumns();
        Text.listenForSize(_columns, startLayoutListen)
    }, 
    _instance.setMobileMode = function() {
        _isMobileMode = !0, Text.listenForSize(_columns, updateLayout)
    }, 
    _instance.setDesktopMode = function() {
        _isMobileMode = !1, Text.listenForSize(_columns, updateLayout)
    };
    
    
    return _instance
}