function WhiteSpaceModule(width, color) {
    var _instance = Snail.extend(new Module),
        _color = null != color ? color : UIColors.WHITE;
    _instance.style.backgroundColor = _color;
    var _width = null != width ? width : 200;
    
    return _instance.getWidth = function() {
        return _width
    }, 
    _instance.resize_desktop = function(width, height) {
        _height = height, TweenMax.set(_instance, {
            width: _instance.getWidth(),
            height: _height
        })
    }, 
    _instance.setWidth = function(width) {
        _width = width
    }, 
    _instance
}