function LineMaskShape() {
    var _instance = {};
    return _instance.x = 0, _instance.y = 0, _instance.lineScale = 1, _instance.getLineAt = function() {
        console.logError("THIS FUNCTION IS MENT TO BE ABSTRACT")
    }, _instance.getWidth = function() {
        console.logError("THIS FUNCTION IS MENT TO BE ABSTRACT")
    }, _instance.getHeight = function() {
        console.logError("THIS FUNCTION IS MENT TO BE ABSTRACT")
    }, _instance.getScaledPosition = function() {
        return {
            x: _instance.x * _instance.lineScale,
            y: _instance.y * _instance.lineScale
        }
    }, _instance
}

function LineCircle() {
    var _instance = new LineMaskShape;
    return _instance.radius = 50, _instance.getLineAt = function(yPos) {
        yPos += LineMaskShape.OFFSET_Y;
        var radius = _instance.radius * _instance.lineScale,
            x = _instance.x * _instance.lineScale,
            y = _instance.y * _instance.lineScale;
        if (2 * -radius + y > yPos) return null;
        if (yPos > 2 * radius + y) return null;
        var hypotenuseL = radius * radius,
            yNormal = yPos - radius - y,
            sidedL = yNormal * yNormal,
            xLength = Math.sqrt(hypotenuseL - sidedL),
            xPos = radius - xLength + x;
        return {
            x: xPos,
            y: yPos,
            length: 2 * xLength
        }
    }, _instance.getScaledPosition = function() {
        return {
            x: (_instance.radius + _instance.x) * _instance.lineScale,
            y: (_instance.radius + _instance.y) * _instance.lineScale
        }
    }, _instance.getWidth = function() {
        return 2 * _instance.radius
    }, _instance.getHeight = function() {
        return 2 * _instance.radius
    }, _instance
}

function LineRect(width, height) {
    var _instance = new LineMaskShape;
    return _instance.width = width, _instance.height = height, _instance.getLineAt = function(yPos) {
        yPos += LineMaskShape.OFFSET_Y;
        var x = _instance.x * _instance.lineScale,
            y = _instance.y * _instance.lineScale,
            width = _instance.width * _instance.lineScale,
            height = _instance.height * _instance.lineScale;
        return y > yPos ? null : yPos > height + y ? null : {
            x: x,
            y: yPos,
            length: width
        }
    }, _instance.getWidth = function() {
        return _instance.width
    }, _instance.getHeight = function() {
        return _instance.height
    }, _instance
}

function LineTriangleRight(width, height) {
    var _instance = new LineMaskShape;
    return _instance.width = width, _instance.height = height, _instance.getLineAt = function(yPos) {
        yPos += LineMaskShape.OFFSET_Y;
        var x = _instance.x * _instance.lineScale,
            y = _instance.y * _instance.lineScale,
            width = _instance.width * _instance.lineScale,
            height = _instance.height * _instance.lineScale;
        if (y > yPos) return null;
        if (yPos > height + y) return null;
        var ratio = yPos / height * 2,
            xLength = width * ratio;
        return xLength > width && (xLength = width - xLength % width), {
            x: x,
            y: yPos,
            length: xLength
        }
    }, _instance.getWidth = function() {
        return _instance.width
    }, _instance.getHeight = function() {
        return _instance.height
    }, _instance
}

function LineTriangle(width, height) {
    var _instance = new LineMaskShape;
    return _instance.width = width, _instance.height = height, _instance.getLineAt = function(yPos) {
        yPos += LineMaskShape.OFFSET_Y;
        var y = (_instance.x * _instance.lineScale, _instance.y * _instance.lineScale),
            width = _instance.width * _instance.lineScale,
            height = _instance.height * _instance.lineScale;
        if (y > yPos) return null;
        if (yPos > height + y) return null;
        var ratio = yPos / height,
            xLength = width * ratio;
        return {
            x: .5 * (width - xLength),
            y: yPos,
            length: xLength
        }
    }, _instance.getWidth = function() {
        return _instance.width
    }, _instance.getHeight = function() {
        return _instance.height
    }, _instance
}
LineMaskShape.OFFSET_Y = 0;