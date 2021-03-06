function CaseImageModule(data) {
    
    var _image, _width, _height, _instance = Snail.extend(new Module);

    function addImage() {
        var imgurl = data.innerHTML;
        if (BrowserDetect.MOBILE) {
            var mobileurl = data.getAttribute("use-on-mobile");
            null != mobileurl && (imgurl = mobileurl)
        }
        _image = new RetinaImage(imgurl, null, onImgLoaded);
        _image.setAttribute("name","retina_image");
        _image.init();
        _image.setSizeByAttribute(data);
        _image.hasSize() && _image.setPreloader(new SlidePreloader);
        _image.setResizeMode("insideBox");
        _instance.appendChild(_image)
    }

    function onImgLoaded() {
        resizeImage();
        _instance.callbackReposition();
    }

    function resizeImage() {
        _image.setSize("auto", _height);
        _width = _image.getWidth()
    }
    
    return _instance.init = function() {
        addImage()
    }, 
    _instance.resize_desktop = function(width, height) {
        _width = width, _height = height, _image.hasSize() && resizeImage()
    }, 
    _instance.getWidth = function() {
        return _width
    }, 
    _instance
}