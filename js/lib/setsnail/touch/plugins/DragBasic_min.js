function DragBasic(dragAmount, lockX, lockY) {
    var _instance = new DraggerPlugin;
    _instance.dragAmount = 1;
    _instance.lockX = !1;
    _instance.lockY = !1; 
    return _instance.init = function(dragAmount, lockX, lockY) {
        _instance.dragAmount = dragAmount ? dragAmount : 1, 
        _instance.lockX = lockX, 
        _instance.lockY = lockY, 
        _instance.priority = -100
    }, 
    _instance.dragMove = function() {
        _instance.dragInfo.dist.x = _instance.lockX ? 0 : _instance.dragInfo.dist.x * _instance.dragAmount, 
        _instance.dragInfo.dist.y = _instance.lockY ? 0 : _instance.dragInfo.dist.y * _instance.dragAmount
    }, 
    _instance.init(dragAmount, lockX, lockY), _instance
}