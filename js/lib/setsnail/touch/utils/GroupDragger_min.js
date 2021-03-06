function GroupDragger(items, plugins, groupId) {
    var _instance = new EventDispatcher,
        _itemGroups = [];
    return _instance.init = function(items, plugins, groupId) {
        plugins = plugins ? plugins : [], _instance.addGroup(items, plugins, groupId)
    }, _instance.addGroup = function(items, plugins, groupId) {
        _itemGroups.push(new DragGroup(items, plugins, groupId))
    }, _instance.addItemGroup = function(item, plugins, groupId) {
        _instance.addGroup([item], plugins, groupId)
    }, _instance.addToGroup = function(item, groupId) {
        for (var l = _itemGroups.length, i = 0; l > i; i++)
            if (groupId == _itemGroups[i].getGroupId()) {
                _itemGroups[i].add(item);
                break
            } _instance.dispatchEvent(GroupDragger.NUM_OF_ITEMS_CHANGEST)
    }, _instance.removeItem = function(item) {
        for (var l = _itemGroups.length, i = 0; l > i; i++) _itemGroups[i].remove(item);
        _instance.dispatchEvent(GroupDragger.NUM_OF_ITEMS_CHANGEST)
    }, _instance.removeFromGroup = function(item, groupId) {
        for (var l = _itemGroups.length, i = 0; l > i; i++)
            if (groupId == _itemGroups[i].getGroupId()) {
                _itemGroups[i].remove(item);
                break
            } _instance.dispatchEvent(GroupDragger.NUM_OF_ITEMS_CHANGEST)
    }, _instance.getAllItems = function() {
        for (var allItems = [], numOfGroups = _itemGroups.length, i = 0; numOfGroups > i; i++)
            for (var groupItems = _itemGroups[i].getAllItems(), numOfChildren = groupItems.length, j = 0; numOfChildren > j; j++) allItems.push(groupItems[j]);
        return allItems
    }, _instance.enable3DTransform = function() {
        for (var l = _itemGroups.length, i = 0; l > i; i++) _itemGroups[i].enable3DTransform()
    }, _instance.dragStartet = function() {
        for (var l = _itemGroups.length, i = 0; l > i; i++) _itemGroups[i].dragStarted()
    }, _instance.updateDist = function(xDist, yDist) {
        for (var l = _itemGroups.length, i = 0; l > i; i++) _itemGroups[i].updateDist(xDist, yDist)
    }, _instance.dragEnded = function() {
        for (var l = _itemGroups.length, i = 0; l > i; i++) _itemGroups[i].dragEnded();
        _instance.dispatchEvent(GroupDragger.DRAG_ENDED)
    }, _instance.getAllGroups = function() {
        return _itemGroups
    }, _instance.init(items, plugins, groupId), _instance
}
GroupDragger.NUM_OF_ITEMS_CHANGEST = "NUM_OF_ITEMS_CHANGEST", GroupDragger.DRAG_ENDED = "DRAG_ENDED";