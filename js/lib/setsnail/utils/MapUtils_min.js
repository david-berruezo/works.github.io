MapUtils = {}, MapUtils.fromCoordinatesToPixel = function(lng, lat, mapCenterX, mapCenterY, pixelSize) {
    var pixelToDegressRatioX = pixelSize / 360,
        pixelToDegressRatioY = pixelSize / (2 * Math.PI),
        x = Math.round(mapCenterX + lng * pixelToDegressRatioX),
        f = Math.min(Math.max(Math.sin(lat * (Math.PI / 180)), -.9999), .9999),
        y = Math.round(mapCenterY + .5 * Math.log((1 + f) / (1 - f)) * -pixelToDegressRatioY);
    return {
        x: x,
        y: y
    }
};