Debug = {};

Debug.isLocalhost = function() {
    var href = window.location.href;
    return -1 !== href.indexOf("localhost") || -1 !== href.indexOf("172") || -1 !== href.indexOf("192") || -1 !== href.indexOf("10") ? !0 : !1
};