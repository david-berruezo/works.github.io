function RenderEngine(fps) {
    function renderLoop() {
        for (var l = _listeners.length, i = 0; l > i; i++) _listeners[i]()
    }
    var FPS = fps ? fps : 1e3 / 60,
        _instance = {},
        _listeners = [],
        _renderId = -1;
    return _instance.startRender = function() {
        _instance.isRunning() || (_renderId = window.setInterval(function() {
            window.requestAnimationFrame(renderLoop)
        }, FPS))
    }, _instance.stopRender = function() {
        -1 != _renderId && (window.clearTimeout(_renderId), _renderId = -1)
    }, _instance.isRunning = function() {
        return -1 != _renderId
    }, _instance.addListener = function(callback) {
        _listeners.push(callback)
    }, _instance.removeListener = function(callback) {
        var index = _listeners.indexOf(callback); - 1 != index && _listeners.splice(index, 1)
    }, _instance
}! function() {
    for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"], window.cancelRequestAnimationFrame = window[vendors[x] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(callback) {
        var currTime = (new Date).getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = window.setTimeout(function() {
                callback(currTime + timeToCall)
            }, timeToCall);
        return lastTime = currTime + timeToCall, id
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(id) {
        clearTimeout(id)
    })
}();