function CaseVideoModule(data) {
    
    var _instance = Snail.extend(new Module);
    _instance.style.backgroundColor = "#fff";
    var _video, _width, _height, _origW, _origH, _mode, _isPlaying = !1;

    function addVideo() {
        var vidUrl = ContentManager.getChildByAttr(data, "name", "source").innerHTML,
            coverImg = ContentManager.getChildByAttr(data, "name", "coverImage").innerHTML;
        _mode = ContentManager.getChildByAttr(data, "name", "mode").innerHTML;
        null == _mode && (_mode = "MANUEL");
        _video = new VideoPlayer(vidUrl, coverImg);
        _video.setAttribute("name","video");
        _video.init(_mode);
        _video.setScaleMode("INSIDE");
        _video.enableLoop();
        "MANUEL" != _mode && _video.enableClickToPauseAndPlay();
        "AUTOPLAY" == _mode && _video.play();
        _instance.appendChild(_video)
    }

    function resizeVideo() {
        var scale = _height / _origH;
        _video.setSize(_origW * scale, _height)
    }
    
    return _instance.init = function() {
        _origW = data.getAttribute("width"), _origH = data.getAttribute("height"), addVideo()
    }, 
    
    _instance.resize_desktop = function(width, height) {
        _width = width, _height = height, resizeVideo()
    }, 
    
    _instance.getWidth = function() {
        var scale = _height / _origH;
        return Math.floor(_origW * scale)
    }, 
    
    _instance.visibilityRatio = function(ratio) {
        "AUTOPLAY_ON_SCREEN" == _mode && (_isPlaying ? (.5 > ratio || ratio > 1.5) && (_video.pause(), _isPlaying = !1) : ratio > .5 && 1.5 > ratio && (_video.play(), _isPlaying = !0))
    }, 
    _instance
}