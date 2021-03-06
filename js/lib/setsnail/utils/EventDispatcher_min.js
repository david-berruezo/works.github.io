function EventDispatcher() {
    
    var _cleanupTimeout, _stack = [],
        _instance = this,
        _cleanUp = !1;

    function doCleanUp() {
        if (_cleanUp === !0) {
            var i, data, l = _stack.length,
                newStack = [];
            for (i = 0; l > i; i += 1) data = _stack[i], data.kill === !1 && newStack.push(data);
            _cleanUp = !1, _stack = newStack
        }
    };
    
    _instance.addEventListener = function(name, callback) {
        _stack.push({
            name: name,
            callback: callback,
            kill: !1
        });
        /*
        console.log("-------- listener -------");
        console.log("name: "+name);
        console.log("callback: "+callback);
        console.log("-------- listener -------");
        */
    }, 
    
    _instance.removeEventListener = function(name, callback) {
        var i, data, l = _stack.length;
        for (i = 0; l > i; i += 1) data = _stack[i], data.name === name && data.callback === callback && (data.kill = !0, _cleanUp = !0)
    }, 
    
    _instance.dispatchEvent = function(name, params) {
        clearTimeout(_cleanupTimeout);
        _cleanupTimeout = setTimeout(doCleanUp, 1e3);
        var i, data, l = _stack.length;
        for (i = 0; l > i; i += 1)
            if (data = _stack[i], data.name === name) {
                if (data.kill === !0) continue;
                data.callback(params)
            }
        /*
        console.log("-------- listener resize -------");
        console.log("name: "+name);
        console.log("params: "+params);
        console.log("-------- listener resize -------");    
        */
    }
}