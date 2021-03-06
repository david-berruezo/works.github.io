function VideoPlayer(src, coverImage) {
    
    var _instance = document.createElement("div");
    _instance.style.position = "absolute";
    _instance.style.overflow = "hidden";
    _instance.setAttribute("name","video_player");

    var _video, _coverImage, _playIcon, _mode, _maskContainer, _width = 0,
        _height = 0,
        _metaWidth = 0,
        _metaHeight = 0,
        _isPlaying = !1,
        _isVideoReady = !1,
        _isCoverLoaded = !1,
        _isCovering = !0,
        _scaleMode = "DEFAULT",
        _isMuted = !1;

    function updateToScaleMode() {
        if (0 != _metaWidth && 0 != _metaHeight && ("INSIDE" == _scaleMode || "OUTSIDE" == _scaleMode)) {
            var mask = getMask();
            TweenMax.set(mask, {
                width: _width,
                height: _height
            });
            var scale, scaleX = _width / _metaWidth,
                scaleY = _height / _metaHeight;
            scale = "OUTSIDE" == _scaleMode ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);
            var offsetX = .5 * (_width - Math.ceil(_metaWidth * scale)),
                offsetY = .5 * (_height - _metaHeight * scale);
            TweenMax.set(_video, {
                x: offsetX,
                y: offsetY,
                width: _metaWidth * scale,
                height: _metaHeight * scale
            })
        }
    }

    function onMetaLoaded() {
        _metaWidth = this.videoWidth;
        _metaHeight = this.videoHeight;
        updateToScaleMode();
    }

    function getMask() {
        return null != _maskContainer ? _maskContainer : (_maskContainer = document.createElement("div"),
        _maskContainer.setAttribute("name","mask_container"),
        _maskContainer.style.position = "absolute",
        _maskContainer.style.overflow = "hidden", 
        _maskContainer.appendChild(_video), 
        _instance.appendChild(_maskContainer), 
        _instance.appendChild(_playIcon), _maskContainer);
    }

    function updateToMode() {
        null != _mode && (_instance.isReadyToPlay() ? "MANUEL" != _mode ? (_isPlaying && _video.play(), hideCover()) : (showPlayButton(), Touchable.listen(_instance, {
            onClick: onVideoClick
        }), _instance.style.cursor = "pointer") : _isCovering = !0)
    }

    function showPlayButton() {
        _playIcon.style.display = "inline"; 
        TweenMax.to(_playIcon, .6, {
            x: SiteGuides.OFFSET_TOP,
            y: SiteGuides.OFFSET_TOP,
            ease: Expo.easeOut
        })
    }

    function hidePlayButton() {
        TweenMax.to(_playIcon, .6, {
            x: SiteGuides.OFFSET_TOP,
            y: -100,
            onComplete: function() {
                _playIcon.style.display = "none"
            },
            ease: Expo.easeOut
        })
    }

    function onVideoClick() {
        _isPlaying ? (_instance.pause(), showPlayButton()) : (_isCovering && hideCover(), hidePlayButton(), _instance.play())
    }

    function hideCover() {
        null != _coverImage && (TweenMax.to(_coverImage, .6, {
            alpha: 0,
            onComplete: function() {
                hidePlayButton()
            }
        }), _isCovering = !1)
    }

    function addCoverImage() {
        _coverImage = new RetinaImage(coverImage);
        _coverImage.onPreloaderAnimationDone = onCoverLoaded;
        _coverImage.setPreloader(new SlidePreloader);
        _coverImage.init();
        _instance.appendChild(_coverImage);
    }

    function onCoverLoaded() {
        _isCoverLoaded = !0, updateToMode()
    }

    function onVideoReady() {
        _video.removeEventListener("loadeddata", onVideoReady, !1);
        _isVideoReady = !0;
        updateToMode();
        _video.style.display = "inline";
    }

    
    return _instance.init = function(mode) {
        _video = document.createElement("video");
        _video.setAttribute("name","video");
        _video.style.position = "absolute";
        "MANUEL" != mode && (BrowserDetect.isSafari() || BrowserDetect.MOBILE) && (console.log("SAFARI ON MOBILE"),_video.setAttribute("muted", ""),
        _video.setAttribute("autoplay", ""),
        _video.setAttribute("playsinline", ""));
        var vidSource = document.createElement("source");
        vidSource.setAttribute("src", src);
        vidSource.setAttribute("type", "video/mp4");
        _video.addEventListener("loadeddata", onVideoReady, !1);
        _video.addEventListener("loadedmetadata", onMetaLoaded, !1);
        _video.style.display = "none";
        _video.appendChild(vidSource);
        _instance.appendChild(_video);
        _video.style.zIndex = -1;
        null != coverImage ? addCoverImage() : (_coverImage = new SlidePreloader, _instance.appendChild(_coverImage), _coverImage.onEaseComplete = onCoverLoaded, setTimeout(function() {
            _coverImage.setProgress(100)
        }, 10)), _playIcon = new RetinaImage("assets/images/logo/play_icon.png", Assets.RETINA_HANDLE), _playIcon.init(), _playIcon.style.display = "none", TweenMax.set(_playIcon, {
            x: SiteGuides.OFFSET_TOP,
            y: -100
        }), _instance.appendChild(_playIcon), _instance.setMode(mode)
    },
    _instance.setMode = function(mode) {
        _mode = mode, updateToMode()
    }, 
    _instance.setScaleMode = function(mode) {
        _scaleMode = mode, updateToScaleMode()
    }, 
    _instance.enableClickToPauseAndPlay = function() {
        Touchable.listen(_instance, {
            onClick: _instance.toggle
        })
    }, 
    _instance.toggle = function() {
        _isPlaying ? _instance.pause() : _instance.play()
    }, 
    _instance.isReadyToPlay = function() {
        return _isVideoReady && _isCoverLoaded
    }, 
    _instance.mute = function() {
        _isMuted || null != _mode && "MANUEL" != _mode && BrowserDetect.isSafari() || BrowserDetect.MOBILE || (TweenMax.to(_video, .3, {
            volume: 0
        }), _isMuted = !0)
    }, 
    _instance.unmute = function() {
        _isMuted && (null != _mode && "MANUEL" != _mode && BrowserDetect.isSafari() || BrowserDetect.MOBILE || (TweenMax.to(_video, .3, {
            volume: 1
        }), _isMuted = !1))
    }, 
    _instance.play = function() {
        _instance.isReadyToPlay() ? (_isPlaying = !0, _video.play()) : _isPlaying = !0
    }, 
    _instance.pause = function() {
        _isPlaying = !1, _video.pause()
    }, 
    _instance.setSize = function(width, height) {
        _width = Math.ceil(width), _height = height, null != _coverImage && _coverImage.setSize(_width + 1, _height), TweenMax.set(_instance, {
            width: width,
            height: height
        }), TweenMax.set(_video, {
            width: width,
            height: height
        }), updateToScaleMode()
    }, 
    _instance.enableLoop = function() {
        _video.setAttribute("loop", "")
    }, 
    _instance.disableLoop = function() {
        _video.removeAttribute("loop")
    }, 
    _instance
}