function DragInfo(lockX, lockY) {
    var _instance = {};
    return _instance.dist = {
        x: 0,
        y: 0
    }, _instance.lastDist = {
        x: 0,
        y: 0
    }, _instance.lastPos = {
        x: 0,
        y: 0
    }, _instance.newPos = {
        x: 0,
        y: 0
    }, _instance.lockX = !1, _instance.lockY = !1, _instance.init = function(lockX, lockY) {
        _instance.lockX = lockX, _instance.lockY = lockY
    }, _instance.updateLastDist = function() {
        _instance.lastDist.x = _instance.dist.x, _instance.lastDist.y = _instance.dist.y
    }, _instance.init(lockX, lockY), _instance
}