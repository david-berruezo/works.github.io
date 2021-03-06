function DraggerPlugin() {
    var _forceUpdateDist, _forceUpdatePlugins, _forceUpdateMove, _forceUpdateEnded, _instance = new EventDispatcher,
        _isEnabled = !0;
    return _instance.dragItems = [], _instance.dragInfo = null, _instance.priority = 0, _instance.use3DTransform = !1, _instance.addDragItems = function(dragItems) {
        for (var l = dragItems.length, i = 0; l > i; i++) this.dragItems.push(dragItems[i])
    }, _instance.addDragItem = function(dragItem) {
        dragItems.push(dragItem)
    }, _instance.removeDragItem = function(dragItem) {
        var index = dragItems.indexOf(dragItem); - 1 != index && dragItems.splice(index, 1)
    }, _instance.setDragInfo = function(dragInfo) {
        _instance.dragInfo = dragInfo
    }, _instance.onForcedUpdateDist = function(callback) {
        _forceUpdateDist = callback
    }, _instance.onForcedUpdatePlugins = function(callback) {
        _forceUpdatePlugins = callback
    }, _instance.onForcedUpdateMove = function(callback) {
        _forceUpdateMove = callback
    }, _instance.onForceEnded = function(callback) {
        _forceUpdateEnded = callback
    }, _instance.forceDragEnded = function() {
        null !== _forceUpdateEnded && _forceUpdateEnded()
    }, _instance.forceUpdatePlugins = function() {
        null !== _forceUpdatePlugins && _forceUpdatePlugins()
    }, _instance.forceUpdateMove = function() {
        null !== _forceUpdateMove && _forceUpdateMove()
    }, _instance.forceUpdateDist = function(xDist, yDist) {
        null !== _forceUpdateDist && _forceUpdateDist(xDist, yDist)
    }, _instance.disable = function() {
        _isEnabled = !1
    }, _instance.enable = function() {
        _isEnabled = !0
    }, _instance.isEnabled = function() {
        return _isEnabled
    }, _instance.dragStarted = function() {}, _instance.dragMove = function() {}, _instance.dragEnded = function() {}, _instance.killTweens = function() {
        for (var l = _instance.dragItems.length, i = 0; l > i; i++) TweenMax.killTweensOf(_instance.dragItems[i])
    }, _instance
}

DraggerPlugin.pluginSortRules = function(a, b) {
    var aPrio = a.priority,
        bPrio = b.priority;
    return bPrio > aPrio ? -1 : aPrio > bPrio ? 1 : 0
};