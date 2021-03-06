function MenuLogo() {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","menu_logo");
    _instance.style.position = "absolute";
    _instance.onLoadingDone = null;
    
    var _logoIn = new RetinaImage(domain+"/assets/images/logo/davidberruezo.png", Assets.RETINA_HANDLE, onLogoLoaded);
    var _logoOut = new RetinaImage(domain+"/assets/images/logo/davidberruezo_white.png", Assets.RETINA_HANDLE, onLogoLoaded);
    var _ratio = 0;

    function onLogoLoaded() {
        updateVisiblility()
    }

    function updateVisiblility() {
        _ratio > .5 ? (_logoIn.style.display = "inline", _logoOut.style.display = "none") : (_logoIn.style.display = "none", _logoOut.style.display = "inline")
    }
   
    return _instance.init = function() {
        _logoIn.init();
        _logoOut.init();
        _logoIn.setPosition("center/center");
        _logoOut.setPosition("center/center");
        _instance.appendChild(_logoIn);
        _instance.appendChild(_logoOut);
        updateVisiblility();
    }, 
    
    _instance.setRatio = function(ratio) {
        _ratio = ratio, updateVisiblility()
    }, 
    _instance
}