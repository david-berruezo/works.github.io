function DragGroup(items, plugins, groupId) {
    
    function setupPlugins() {
        for (var plugin, easePlugin, l = _allPlugins.length, easeInfo = new EaseInfo, i = 0; l > i; i++) plugin = _allPlugins[i], plugin.setDragInfo(_dragInfo), plugin.addDragItems(_items), plugin.onForcedUpdateDist(_instance.updateDist), plugin.onForcedUpdatePlugins(_instance.dragMove), plugin.onForcedUpdateMove(_instance.moveItems), plugin.onForceEnded(_instance.dragEnded), void 0 !== plugin.setEasePlugins && (easePlugin = plugin), void 0 !== plugin.setEaseInfo && (plugin.setEaseInfo(easeInfo), _easePlugins.push(plugin));
        easePlugin && (_easePlugins.sort(DraggerPlugin.pluginSortRules), easePlugin.setEasePlugins(_easePlugins)), _allPlugins.sort(DraggerPlugin.pluginSortRules)
    }

    function dragMove() {
        for (var l = _allPlugins.length, i = 0; l > i; i++) _allPlugins[i].isEnabled() && _allPlugins[i].dragMove()
    }

    function moveItems() {
        for (var item, l = _items.length, i = 0; l > i; i++) item = _items[i], _use3DTransform ? (item.aniSetX(item.aniGetX() + _dragInfo.dist.x), item.aniSetY(item.aniGetY() + _dragInfo.dist.y), item.aniRender()) : (item.style.left = parseInt(item.style.left) + _dragInfo.dist.x + "px", item.style.top = parseInt(item.style.top) + _dragInfo.dist.y + "px")
    }
    var _items, _allPlugins, _groupId, _instance = {},
        _easePlugins = [],
        _dragInfo = new DragInfo,
        _use3DTransform = !1;
    return _instance.init = function(items, plugins, groupId) {
        _items = items, _allPlugins = plugins ? plugins : [], _groupId = groupId, setupPlugins()
    }, _instance.enable3DTransform = function() {
        for (var item, l = _items.length, i = 0; l > i; i++) item = _items[i], void 0 === item.aniRender && AnimationUtils.apply(item);
        l = _allPlugins.length;
        for (var j = 0; l > j; j++) _allPlugins[j].use3DTransform = !0;
        _use3DTransform = !0
    }, _instance.add = function(item) {
        for (var l = _allPlugins.length, i = 0; l > i; i++) _allPlugins[i].addDragItem(item);
        _items.push(item)
    }, _instance.remove = function(item) {
        for (var l = _allPlugins.length, i = 0; l > i; i++) _allPlugins[i].removeDragItem(item);
        var index = _items.indexOf(item); - 1 != index && _items.splice(index, 1)
    }, _instance.getGroupId = function() {
        return _groupId
    }, _instance.getAllItems = function() {
        return _items
    }, _instance.updateDist = function(xDist, yDist) {
        _dragInfo.dist.x = xDist, _dragInfo.dist.y = yDist, dragMove(), moveItems()
    }, _instance.dragStarted = function() {
        for (var l = _allPlugins.length, i = 0; l > i; i++) _allPlugins[i].isEnabled() && _allPlugins[i].dragStarted()
    }, _instance.dragEnded = function() {
        for (var l = _allPlugins.length, i = 0; l > i; i++) _allPlugins[i].isEnabled() && _allPlugins[i].dragEnded()
    }, _instance.init(items, plugins, groupId), _instance
}