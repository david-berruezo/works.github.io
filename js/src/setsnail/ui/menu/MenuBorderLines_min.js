function MenuBorderLines(spacing, thickness, height) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","menu_border_lines");
    _instance.style.position = "absolute";

    var _lineOne, _lineTwo, colorOne = UIColors.DARK,colorTwo = UIColors.WHITE, _ratio = 0;

    function updateLayout() {
        
        TweenMax.set(_lineOne, {
            x: .5 * -spacing
        });
        
        TweenMax.set(_lineTwo, {
            x: .5 * spacing
        });

        _lineTwo.style.top = _lineOne.style.top = .5 * -height + "px";
        _lineOne.style.height = _lineTwo.style.height = height + "px";
    }

    function getLine() {
        var line = document.createElement("div");
        line.setAttribute("name","line");
        return line.style.position = "absolute",
        line.style.backgroundColor = colorOne, line.style.width = thickness + "px", _instance.appendChild(line), line
    }

    
    return _instance.init = function() {
        _lineOne = getLine();
        _lineTwo = getLine();
        _instance.appendChild(_lineOne);
        Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE, updateLayout);
        updateLayout();
    }, 
    
    _instance.setRatio = function(ratio) {
        _ratio = ratio; 
        _lineOne.style.backgroundColor = _lineTwo.style.backgroundColor = .5 > _ratio ? colorTwo : colorOne;
    }, 
    _instance
}