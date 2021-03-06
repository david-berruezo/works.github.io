function DraggerEasePlugin() {
    var _instance = new DraggerPlugin,
        _easeEnabled = !0;
    return _instance.EaseInfo = null, _instance.setEaseInfo = function(info) {
        _instance.easeInfo = info
    }, _instance.disableEase = function() {
        _easeEnabled = !1
    }, _instance.enableEase = function() {
        _easeEnabled = !0
    }, _instance.easeStarted = function() {}, _instance.easeEnded = function() {}, _instance.easeUpdated = function() {}, _instance.isEaseEnabled = function() {
        return _easeEnabled
    }, _instance
}