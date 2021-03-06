MathUtils = {}, MathUtils.getDistancePoints = function(point1, point2) {
    var xs = 0,
        ys = 0;
    return xs = point2.x - point1.x, xs *= xs, ys = point2.y - point1.y, ys *= ys, Math.sqrt(xs + ys)
}, MathUtils.getPointBetween = function(valueA, valueB, ratio) {
    return {
        x: valueA.x + ratio * (valueB.x - valueA.x),
        y: valueA.y + ratio * (valueB.y - valueA.y)
    }
}, MathUtils.ratioFromRatio = function(start, end, ratio, ignoreOverflow) {
    var diff = 1 / (end - start),
        newRatio = diff * ratio;
    return newRatio -= start * diff, ignoreOverflow && (newRatio > 1 ? newRatio = 1 : 0 > newRatio && (newRatio = 0)), newRatio
};