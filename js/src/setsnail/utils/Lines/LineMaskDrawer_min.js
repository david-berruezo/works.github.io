function LineMaskDrawer() {
    
    var _instance = document.createElement("div");
    _instance.style.position = "absolute", CSS.makeUnselectable(_instance);
    _instance.setAttribute("name","line_mask_drawer");
    var _canvas = document.createElement("canvas");
    _canvas.style.position = "absolute", _canvas.width = 400, _canvas.height = 400, _instance.appendChild(_canvas);
    var _groups = [],_context = _canvas.getContext("2d"),_width = 200,_height = 200;

    function onMouseMove() {
        LineMaskShape.OFFSET_Y = window.event.clientY / 30 % defaultOffset - .5 * defaultOffset, _context.clearRect(0, 0, _canvas.width, _canvas.height);
        for (var l = _groups.length, i = 0; l > i; i++) _groups[i].render(_context)
    }

    function render() {
        for (var l = _groups.length, minScale = 9999, i = 0; l > i; i++) _groups[i].setSize(_canvas.width, _canvas.height), _groups[i].getScale() < minScale && (minScale = _groups[i].getScale());
        for (var shapesWidth = 0, shapesHeight = 0, i = 0; l > i; i++) {
            _groups[i].scale = minScale;
            var width = _groups[i].getScaledWidth(),
                height = _groups[i].getScaledHeight();
            width > shapesWidth && (shapesWidth = width), height > shapesHeight && (shapesHeight = height)
        }
        _canvas.width = shapesWidth, _canvas.height = shapesHeight, TweenMax.set(_canvas, {
            x: .5 * _width - .5 * shapesWidth,
            y: .5 * _height - .5 * shapesHeight
        }), _context.clearRect(0, 0, shapesWidth, shapesHeight);
        for (var i = 0; l > i; i++) _groups[i].render(_context)
    }

    return _instance.addGroup = function(group) {
        _groups.push(group), render()
    }, 
    _instance.setSize = function(width, height) {
        _width = width, _height = height, _canvas.width = _width, _canvas.height = _height + 30;
        TweenMax.set(_instance, {
            width: _width,
            height: _height
        });
        render();
    },
     _instance.getWidth = function() {
        return _width
    }, 
    _instance.getHeight = function() {
        return _height
    }, 
    _instance.getGroupAt = function(index) {
        return _groups[index]
    }, 
    _instance.numOfGroups = function() {
        return _groups.length
    }, 
    _instance.getCanvasOffset = function() {
        return {
            x: _canvas._gsTransform.x,
            y: _canvas._gsTransform.y
        }
    }, 
    _instance.addMouseEffect = function() {
        document.addEventListener("mousemove", onMouseMove)
    }, 
    _instance.kill = function() {
        document.removeEventListener("mousemove", onMouseMove)
    }, 
    _instance
}

function LineMaskGroup(lineSpacing, lineThickness, lineOffset, color, shapes) {
    
    var _instance = {};
    _instance.spacing = lineSpacing, _instance.thickness = lineThickness, _instance.offset = lineOffset, _instance.deltaX = 0, _instance.deltaY = 0, _instance.color = null != color ? color : "#f00", _instance.scale = 1;
    var _width, _height, _context, _line, _origWidth = 10,
        _origHeight = 10,
        _shapes = null != shapes ? shapes : [];

    function calcOrigSize() {
        _origHeight = _origWidth = 0;
        for (var numOfShapes = _shapes.length, i = 0; numOfShapes > i; i++) {
            var shape = _shapes[i],
                borderX = shape.x + shape.getWidth();
            borderX > _origWidth && (_origWidth = borderX);
            var borderY = shape.y + shape.getHeight();
            borderY > _origHeight && (_origHeight = borderY)
        }
    }

    function drawLine(x, y, length, context) {
        x = Math.floor(x), y = Math.floor(y), context.beginPath(), context.moveTo(x, y - .5 * _instance.thickness), context.lineTo(x + length, y - .5 * _instance.thickness), context.lineWidth = _instance.thickness, context.strokeStyle = _instance.color, context.stroke()
    }
    
    return _instance.addShape = function(shape) {
        _shapes.push(shape), calcOrigSize()
    }, _instance.numOfShapes = function() {
        return _shapes.length
    }, _instance.getShapeAt = function(index) {
        return _shapes[index]
    }, _instance.setSize = function(width, height) {
        _width = width, _height = height
    }, _instance.getScale = function() {
        var xRatio = _width / _origWidth,
            yRatio = _height / _origHeight;
        return yRatio > xRatio ? xRatio : yRatio
    }, _instance.getScaledWidth = function() {
        return _origWidth * _instance.scale
    }, _instance.getScaledHeight = function() {
        return _origHeight * _instance.scale
    }, _instance.render = function(context) {
        _context = context;
        for (var linePartOffset = _instance.spacing + _instance.thickness, numOfShapes = _shapes.length, numOfLines = Math.floor(_height / linePartOffset), yPos = lineOffset, i = 0; numOfLines > i; i++) {
            for (var j = 0; numOfShapes > j; j++) {
                var shape = _shapes[j];
                shape.lineScale = _instance.scale, _line = shape.getLineAt(yPos), null != _line && drawLine(_line.x, _line.y, _line.length, context)
            }
            yPos += linePartOffset
        }
    }, 
    _instance.offsetEffect = function() {}, 
    _instance
}