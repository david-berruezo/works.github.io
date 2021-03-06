function PsychodelicLines() {
    
    var _instance = document.createElement("div");
    _instance.style.position = "absolute";
    _instance.setAttribute("name","psychodelic_lines");
    _instance.style.backgroundColor = UIColors.PRELOADER_COLOR_ONE;
    var _canvas, _ctx, _width = 0,_height = 0,_lines = [],_numOfLines = 0,_isRendering = !1;
    
    function addListeners() {
        Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE, resize);
        _instance.addEventListener("mousemove", onMouseMove);
    }

    function onMouseMove(e) {
        var mouseY = e.y,
            mouseX = e.x,
            deltaX = 0;
        null != _lastMouseX && (deltaX = mouseX - _lastMouseX);
        var ratioY = mouseY / _height,
            index = Math.floor(_numOfLines * ratioY);
        if (0 > deltaX) {
            var vel = .1 * deltaX;
            vel < _lines[index].velocityX && (_lines[index].velocityX = vel)
        } else if (deltaX > 0) {
            var vel = .2 * deltaX;
            vel > _lines[index].velocityX && (_lines[index].velocityX = vel)
        }
        _lastMouseX = mouseX
    }

    function createCanvas() {
        _canvas = document.createElement("canvas");
        _canvas.style.position = "absolute";
        _canvas.setAttribute("name","canvas");
        _ctx = _canvas.getContext("2d")
    }

    function updateLineCount() {
        _numOfLines = Math.ceil(_height / 80);
        var i = _numOfLines;
        for (5 > _numOfLines ? _numOfLines = 5 : _numOfLines > 16 && (_numOfLines = 16); _lines.length > _numOfLines;) _lines.pop();
        for (; _lines.length < _numOfLines;) {
            i++;
            var line = new PhychoLine(_ctx);
            line.x = i % 2 ? 8 : 0, line.setSize(_width, _height / _numOfLines), _lines.push(line)
        }
        _isRendering || render()
    }

    function render() {
        _ctx.clearRect(0, 0, _canvas.width, _canvas.height), _ctx.strokeStyle = "rgb(0, 0, 0)";
        for (var singleHeight = _height / _numOfLines, i = 0; _numOfLines > i; i++) _lines[i].y = singleHeight * i, _lines[i].thickness = 1 + i / _numOfLines * 9, _lines[i].setSize(_width, singleHeight), _lines[i].render();
        _isRendering && requestAnimationFrame(render)
    }

    function resize() {
        _width = Assets.RESIZE_MANAGER.getWindowWidth();
        _height = Assets.RESIZE_MANAGER.getWindowHeight();
        _canvas.width = _width;
        _canvas.height = _height;
        TweenMax.set(_instance, {
            x: -_width
        });
        TweenMax.set(_instance, {
            width: _width,
            height: _height
        });
        
        updateLineCount();
    }
    
    _instance.init = function() {
        createCanvas();
        addListeners();
        resize();
        render()
    };
    
    _instance.startRender = function() {
        _isRendering || (_isRendering = !0, render())
    };
    
    _instance.stopRender = function() {
        _isRendering = !1
    };
    
    _instance.kill = function() {
        _isRendering = !1;
        Assets.RESIZE_MANAGER.removeEventListener(ResizeEvents.RESIZE, resize);
        _instance.removeEventListener("mousemove", onMouseMove);
    };
    
    _instance.resetLinePositions = function() {
        for (var i = 0; _numOfLines > i; i++) _lines[i].x = i % 2 ? 7 : 1, _lines[i].velocityX = 0;
        _isRendering || render()
    };
    
    var _lastMouseX = null;
    
    return _instance
}

function PhychoLine(context) {
    var _instance = {};
    _instance.spacing = 17;
    _instance.thickness = 2;
    _instance.x = 0;
    _instance.y = 0;
    _instance.drag = .98;
    _instance.velocityX = 0;
    var _width = 0, _height = 0;
    return _instance.render = function() {
        var singleWidth = _instance.spacing,
            numOfLines = Math.ceil(_width / singleWidth) + 1;
        for (_instance.x += _instance.velocityX, _instance.velocityX = _instance.velocityX * _instance.drag; _instance.x < 0;) _instance.x += _width;
        for (var xPos = _instance.x, i = 0; numOfLines > i; i++) {
            var loopX = xPos % (singleWidth * numOfLines) - .5 * _instance.thickness;
            context.lineWidth = _instance.thickness;
            context.beginPath();
            context.moveTo(loopX, _instance.y);
            context.lineTo(loopX, _instance.y + _height);
            context.closePath();
            context.stroke(), xPos += singleWidth;
        }
    }, _instance.setSize = function(width, height) {
        _width = width;
        _height = height
    }, 
    _instance
}