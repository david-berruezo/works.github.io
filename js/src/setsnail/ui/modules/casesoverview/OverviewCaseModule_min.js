function OverviewCaseModule(data, prcWidth, index) {
    
    var _instance = Snail.extend(new Module);
    _instance.setAttribute("name","overview_case_module");
    _instance.style.backgroundColor = UIColors.WHITE;
    _instance.style.cursor = "pointer";
    _instance.onModuleClick;
    var _width, _height, _image, _offset = 0,_offsetWidth = 0;

    function onModuleClick() {
        null != _instance.onModuleClick && _instance.onModuleClick(index)
    }

    function addImage() {
        var url = ContentManager.getChildByAttr(data, "name", "overviewimage").innerHTML;
        BrowserDetect.MOBILE && null != ContentManager.getChildByAttr(data, "name", "overviewimagemobile") && (url = ContentManager.getChildByAttr(data, "name", "overviewimagemobile").innerHTML);
        var colorOne = index % 2 == 0 ? UIColors.PRELOADER_COLOR_ONE : UIColors.PRELOADER_COLOR_TWO,
            colorTwo = index % 2 == 0 ? UIColors.PRELOADER_COLOR_TWO : UIColors.PRELOADER_COLOR_ONE;
        _image = new RetinaImage(url, null, updateImgSize);
        _image.setPreloader(new SlidePreloader(colorOne, colorTwo));
        _image.init();
        _image.setResizeMode("insideBox");
        _image.setPosition("center/center");
        _instance.appendChild(_image)
    }

    function updateImgSize() {
        _image.setSize(_instance.getWidth(), _height)
    }
    
    return _instance.init = function() {
        _instance.super.init();
        Touchable.apply(_instance);
        _instance.onClick(onModuleClick);
        addImage()
    }, 
    
    _instance.setOffset = function(offset) {
        _offset = offset
    }, 
    
    _instance.getData = function() {
        return data
    }, 
    
    _instance.offsetWidth2 = function(offsetWidth) {
        _offsetWidth = offsetWidth
    }, 
    
    _instance.resize_desktop = function(width, height) {
        _width = Math.floor(width + _offset);
         0 != _offsetWidth && (_width = width - _offsetWidth);
         _height = height;
         _instance.style.width = _instance.getWidth() + "px";
         _instance.style.height = height + "px";
         _image.setSize(_instance.getWidth(), _height)
    }, 
    
    _instance.getWidth = function() {
        return _width
    }, 
    
    _instance.kill = function() {
        _instance.onClick(null)
    }, 
    _instance
}