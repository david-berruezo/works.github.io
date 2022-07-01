function TextButton(text, color, path) {
    
    var _instance = Touchable.apply(text);
    var _effect = "", _path = path ? path : "";

    CSS.makeUnselectable(_instance);
    _instance.setAttribute("name","text_button");
    _instance.style.cursor = "pointer";
    _instance.style.color = color ? color : "#fff";
    
    function onBtnClick() {
        if ("" != _path)
            if (-1 != _path.indexOf("http")) window.open(_path);
            else {
                if (!_instance.classList.contains("has-submenu")){
                    var linkpath = domain + "/" + _path;
                    window.location = linkpath;
                }
            }
    }
    
    return _instance.init = function() {
        text.style.top = -Text.getOffsetY(text) + "px";
        _instance.onClick(onBtnClick);
        _instance.addClass("animate");
    }, 
    
    _instance.addClass = function(effect) {
        _effect.length > 0 ? _effect += " " + effect : _effect = effect;
        text.setAttribute("class", _effect);
    }, 
    _instance.setText = function(text) {
        _instance.innerHTML = text
    }, 
    _instance.addAttribute = function(attribute,value){
        _instance.setAttribute(attribute,value)
    },
    _instance.setPath = function(path) {
        _path = path
    }, 
    _instance
}