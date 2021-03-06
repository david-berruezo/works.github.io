function DragBounds(bounds) {
    
    function getDistToBorder() {
        var dist = {
            x: 0,
            y: 0
        };

        if (_currentState & DragBounds.INSIDE) return dist;
        for (var l = _instance.dragItems.length, boundsMaxX = _instance.bounds.x + _instance.bounds.width, boundsMaxY = _instance.bounds.y + _instance.bounds.height, item = null, extraWidth = 0, extraHeight = 0, i = 0; l > i; i++) {
            item = _instance.dragItems[i];
            var itemX = getItemX(item),
                itemY = getItemY(item),
                itemW = parseInt(item.style.width),
                itemH = parseInt(item.style.height);
            extraWidth = _instance.useItemsSize ? itemW : 0, 
            extraHeight = _instance.useItemsSize ? itemH : 0, 
            _currentState & DragBounds.LEFT && dist.x < _instance.bounds.x - itemX && (dist.x = _instance.bounds.x - itemX), 
            _currentState & DragBounds.RIGHT && dist.x > boundsMaxX - itemX - extraWidth && (dist.x = boundsMaxX - itemX - extraWidth), 
            _currentState & DragBounds.TOP && dist.y < _instance.bounds.y - itemY && (dist.y = _instance.bounds.y - itemY), 
            _currentState & DragBounds.BOT && dist.y > boundsMaxY - itemY - extraHeight && (dist.y = boundsMaxY - itemY - extraHeight)
        }
        return dist
    }

    function findItemXEaseAndState() {
        for (var l = _instance.dragItems.length, item = null, extraWidth = 0, nextX = 0, boundsMaxX = _instance.bounds.x + _instance.bounds.width, foundItem = null, i = 0; l > i; i++) item = _instance.dragItems[i], extraWidth = _instance.useItemsSize ? parseInt(item.style.width) : 0, nextX = getItemX(item) + _instance.dragInfo.dist.x, nextX < _instance.bounds.x ? (-1 == _xBoundsStartEaseRatio && (_xBoundsStartEaseRatio = _instance.easeInfo.easeRatio), foundItem ? getItemX(item) < getItemX(foundItem) && (foundItem = item) : foundItem = item, _currentState |= DragBounds.LEFT, _currentEaseState |= DragBounds.LEFT) : nextX + extraWidth > boundsMaxX && (-1 == _xBoundsStartEaseRatio && (_xBoundsStartEaseRatio = _instance.easeInfo.easeRatio), foundItem ? getItemX(item) > getItemX(foundItem) && (foundItem = item) : foundItem = item, _currentState |= DragBounds.RIGHT, _currentEaseState |= DragBounds.RIGHT);
        return foundItem
    }

    function findItemYEaseAndState() {
        for (var l = _instance.dragItems.length, item = null, extraHeight = 0, nextY = 0, boundsMaxY = _instance.bounds.y + _instance.bounds.height, foundItem = null, i = 0; l > i; i++) item = _instance.dragItems[i], extraHeight = _instance.useItemsSize ? parseInt(item.style.height) : 0, nextY = getItemY(item) + _instance.dragInfo.dist.y, nextY < _instance.bounds.y ? (-1 == _yBoundsStartEaseRatio && (_yBoundsStartEaseRatio = _instance.easeInfo.easeRatio), foundItem ? getItemY(item) < getItemY(foundItem) && (foundItem = item) : foundItem = item, _currentState |= DragBounds.TOP, _currentEaseState |= DragBounds.TOP) : nextY + extraHeight > boundsMaxY && (-1 == _yBoundsStartEaseRatio && (_yBoundsStartEaseRatio = _instance.easeInfo.easeRatio), foundItem ? getItemY(item) > getItemY(foundItem) && (foundItem = item) : foundItem = item, _currentState |= DragBounds.BOT, _currentEaseState |= DragBounds.BOT);
        return foundItem
    }

    function moveEaseX(item) {
        var extraWidth, boundRatio, toBounds, boundsMaxX = _instance.bounds.x + _instance.bounds.width;
        item && (extraWidth = _instance.useItemsSize ? parseInt(item.style.width) : 0), 
        _currentEaseState & DragBounds.LEFT ? (boundRatio = ratioFromRatio(_xBoundsStartEaseRatio, 1, _instance.easeInfo.easeRatio), 
        boundRatio = _instance.easeEase.getRatio(boundRatio),
        toBounds = _instance.bounds.x - getItemX(item),
        _outsideDistToBorder.x > 0 ? (boundRatio = 1 - boundRatio, _instance.dragInfo.dist.x = -_outsideDistToBorder.x, _instance.dragInfo.dist.x = toBounds + _instance.dragInfo.dist.x * boundRatio) : _instance.dragInfo.dist.x = toBounds + _instance.dragInfo.dist.x * _instance.easeDist * Math.sin(boundRatio * Math.PI)) : _currentEaseState & DragBounds.RIGHT && (boundRatio = ratioFromRatio(_xBoundsStartEaseRatio, 1, _instance.easeInfo.easeRatio), boundRatio = _instance.easeEase.getRatio(boundRatio), toBounds = boundsMaxX - getItemX(item) - extraWidth, _outsideDistToBorder.x < 0 ? (boundRatio = 1 - boundRatio, _instance.dragInfo.dist.x = -_outsideDistToBorder.x, _instance.dragInfo.dist.x = toBounds + _instance.dragInfo.dist.x * boundRatio) : _instance.dragInfo.dist.x = toBounds + _instance.dragInfo.dist.x * _instance.easeDist * Math.sin(boundRatio * Math.PI))
    }

    function moveEaseY(item) {
        var extraHeight, boundRatio, toBounds, boundsMaxY = _instance.bounds.y + _instance.bounds.height;
        item && (extraHeight = _instance.useItemsSize ? parseInt(item.style.height) : 0), _currentEaseState & DragBounds.TOP ? (boundRatio = ratioFromRatio(_yBoundsStartEaseRatio, 1, _instance.easeInfo.easeRatio), boundRatio = _instance.easeEase.getRatio(boundRatio), toBounds = _instance.bounds.y - getItemY(item), _outsideDistToBorder.y > 0 ? (boundRatio = 1 - boundRatio, _instance.dragInfo.dist.y = -_outsideDistToBorder.y, _instance.dragInfo.dist.y = toBounds + _instance.dragInfo.dist.y * boundRatio) : _instance.dragInfo.dist.y = toBounds + _instance.dragInfo.dist.y * _instance.easeDist * Math.sin(boundRatio * Math.PI)) : _currentEaseState & DragBounds.BOT && (boundRatio = ratioFromRatio(_yBoundsStartEaseRatio, 1, _instance.easeInfo.easeRatio), boundRatio = _instance.easeEase.getRatio(boundRatio), toBounds = boundsMaxY - getItemY(item) - extraHeight, _outsideDistToBorder.y < 0 ? (boundRatio = 1 - boundRatio, _instance.dragInfo.dist.y = -_outsideDistToBorder.y, _instance.dragInfo.dist.y = toBounds + _instance.dragInfo.dist.y * boundRatio) : _instance.dragInfo.dist.y = toBounds + _instance.dragInfo.dist.y * _instance.easeDist * Math.sin(boundRatio * Math.PI))
    }

    function ratioFromRatio(start, end, ratio) {
        var diff = 1 / (end - start),
            newRatio = diff * ratio;
        return newRatio -= start * diff
    }

    function dispatchChange() {
        var event = "";
        if (!(_lastState & DragBounds.INSIDE) && _currentState & DragBounds.INSIDE ? event = DragBounds.STATE_INSIDE : !(_lastState & DragBounds.LEFT) && _currentState & DragBounds.LEFT ? event = DragBounds.STATE_OUTSIDE_LEFT : !(_lastState & DragBounds.RIGHT) && _currentState & DragBounds.RIGHT ? event = DragBounds.STATE_OUTSIDE_RIGHT : !(_lastState & DragBounds.TOP) && _currentState & DragBounds.TOP ? event = DragBounds.STATE_OUTSIDE_TOP : !(_lastState & DragBounds.BOT) && _currentState & DragBounds.BOT && (event = DragBounds.STATE_OUTSIDE_BOT), _lastState = _currentState, event)
            if (_instance.dispatchOnObjects)
                for (var l = _instance.dragItems.length, i = 0; l > i; i++) _instance.dragItems[i].dispatchEvent(event);
            else _instance.dispatchEvent(event)
    }

    function getItemX(item) {
        return _instance.use3DTransform ? item.aniGetX() : parseFloat(item.style.left)
    }

    function getItemY(item) {
        return _instance.use3DTransform ? item.aniGetY() : parseFloat(item.style.top)
    }

    var _instance = new DraggerEasePlugin,
        _currentState = DragBounds.INSIDE,
        _easeItemX = null,
        _easeItemY = null;
    _instance.boundsEase = 0, _instance.easeDist = 4, _instance.easeEase = Linear.easeNone, _instance.bounds = null, _instance.useItemsSize = !0, _instance.dispacthEvents = !1, _instance.dispatchOnObjects = !1, _instance.init = function(bounds) {
        _instance.bounds = bounds
    };
    var _xBoundsStartEaseRatio = -1,
        _yBoundsStartEaseRatio = -1,
        _currentEaseState = DragBounds.UNKNOWN,
        _outsideDistToBorder = {};
    
    _instance.easeStarted = function() {
        _xBoundsStartEaseRatio = -1, _yBoundsStartEaseRatio = -1, _easeItemX = null, _easeItemY = null, _outsideDistToBorder = getDistToBorder(), _currentEaseState = DragBounds.UNKNOWN
    }, _instance.easeUpdated = function() {
        _currentState = DragBounds.UNKNOWN, _easeItemX || (_easeItemX = findItemXEaseAndState()), _easeItemY || (_easeItemY = findItemYEaseAndState()), _easeItemX && moveEaseX(_easeItemX), _easeItemY && moveEaseY(_easeItemY), _currentState || (_currentState = DragBounds.INSIDE), _instance.dispacthEvents && dispatchChange()
    }, _instance.easeEnded = function() {
        _xBoundsStartEaseRatio = -1, _yBoundsStartEaseRatio = -1, _currentState = DragBounds.INSIDE
    }, _instance.dragStarted = function() {
        _instance.boundsEase && _instance.killTweens()
    }, _instance.dragMove = function() {
        var item, l = _instance.dragItems.length,
            nextX = 0,
            nextY = 0,
            extraWidth = 0,
            extraHeight = 0,
            boundsMaxX = _instance.bounds.x + _instance.bounds.width,
            boundsMaxY = _instance.bounds.y + _instance.bounds.height;
        _currentState = DragBounds.UNKNOWN;
        for (var i = 0; l > i; i++) {
            item = _instance.dragItems[i];
            var itemX = getItemX(item),
                itemY = getItemY(item);
            nextX = itemX + _instance.dragInfo.dist.x, nextY = itemY + _instance.dragInfo.dist.y, extraWidth = _instance.useItemsSize ? parseInt(item.style.width) : 0, extraHeight = _instance.useItemsSize ? parseInt(item.style.height) : 0, nextX < _instance.bounds.x ? (_instance.boundsEase ? _instance.dragInfo.dist.x *= _instance.boundsEase : _instance.dragInfo.dist.x = _instance.bounds.x - itemX, _currentState |= DragBounds.LEFT) : nextX + extraWidth > boundsMaxX && (_instance.boundsEase ? _instance.dragInfo.dist.x *= _instance.boundsEase : _instance.dragInfo.dist.x = boundsMaxX - itemX - extraWidth, _currentState |= DragBounds.RIGHT), nextY < _instance.bounds.y ? (_instance.boundsEase ? _instance.dragInfo.dist.y *= _instance.boundsEase : _instance.dragInfo.dist.y = _instance.bounds.y - itemY, _currentState |= DragBounds.TOP) : nextY + extraHeight > boundsMaxY && (_instance.boundsEase ? _instance.dragInfo.dist.y *= _instance.boundsEase : _instance.dragInfo.dist.y = boundsMaxY - itemY - extraHeight, _currentState |= DragBounds.BOT)
        }
        _currentState || (_currentState = DragBounds.INSIDE), _instance.dispacthEvents && dispatchChange()
    };
    var _lastState = 0;
    return _instance.init(bounds), _instance
}
DragBounds.STATE_INSIDE = "INSIDE", DragBounds.STATE_OUTSIDE_TOP = "OUTSIDE_TOP", DragBounds.STATE_OUTSIDE_BOT = "OUTSIDE_BOT", DragBounds.STATE_OUTSIDE_LEFT = "OUTSIDE_LEFT", DragBounds.STATE_OUTSIDE_RIGHT = "OUTSIDE_RIGHT", DragBounds.UNKNOWN = 0, DragBounds.INSIDE = 1, DragBounds.TOP = 2, DragBounds.BOT = 4, DragBounds.LEFT = 8, DragBounds.RIGHT = 16;