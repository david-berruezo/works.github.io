ArrayUtils = {}, ArrayUtils.combine = function(array1, array2) {
    var i, l = array2.length;
    for (i = 0; l > i; i += 1) array1.push(array2[i])
}, ArrayUtils.combineViaKey = function(array1, array2, array2Key) {
    var i, l = array2.length;
    for (i = 0; l > i; i += 1) array1.push(array2[i][array2Key])
}, ArrayUtils.callFunctionOnArray = function(items, functionName) {
    var item, i, l = items.length;
    for (i = 0; l > i; i += 1) item = items[i], item[functionName]()
}, ArrayUtils.passItemsInArrayToFunction = function(items, callback, params, startIndex) {
    startIndex || (startIndex = 0);
    var item, i, l = items.length;
    for (params || (params = {
            item: null
        }), i = startIndex; l > i; i += 1) item = items[i], callback.length ? (params.item = item, callback(params)) : callback()
}, ArrayUtils.sortAlphabeticalOnKey = function(array, key) {
    function alphabetical(a, b) {
        var A = a[key].toLowerCase(),
            B = b[key].toLowerCase();
        return B > A ? -1 : A > B ? 1 : 0
    }
    var newArray = array.sort(alphabetical);
    return newArray
}, ArrayUtils.getClone = function(array) {
    var i, l = array.length,
        rArr = [];
    for (i = 0; l > i; i += 1) rArr.push(array[i]);
    return rArr
}, ArrayUtils.removeEmpty = function(array) {
    var i, l = array.length,
        value = null,
        rArr = [];
    for (i = 0; l > i; i += 1) value = array[i], "" !== value && rArr.push(value);
    return rArr
}, ArrayUtils.getUnique = function(arr) {
    for (var a = [], l = arr.length, target = null, i = 0; l > i; i += 1) target = arr[i], -1 === a.indexOf(target) && "" !== target && a.push(target);
    return a
}, ArrayUtils.getUniqueString = function(arr, caseSensitive) {
    null === caseSensitive && (caseSensitive = !0);
    for (var a = [], b = [], l = arr.length, target = null, manipTarget = null, i = 0; l > i; i += 1) target = arr[i], manipTarget = caseSensitive ? target : target.toUpperCase(), manipTarget = manipTarget.replace(/\s+/g, ""), -1 === a.indexOf(manipTarget) && "" !== manipTarget && (a.push(manipTarget), b.push(target));
    return b
}, ArrayUtils.shuffle = function(arr) {
    for (var newArray = [], target = (arr.length, null), pickId = 0; arr.length > 0;) pickId = Math.floor(Math.random() * arr.length), target = arr[pickId], arr.splice(pickId, 1), newArray.push(target);
    return newArray
};