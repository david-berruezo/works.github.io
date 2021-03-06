ColorUtils = {}, ColorUtils.colorLuminance = function(hex, lum) {
    hex = String(hex).replace(/[^0-9a-f]/gi, ""), hex.length < 6 && (hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]), lum = lum || 0;
    var c, i, rgb = "#";
    for (i = 0; 3 > i; i++) c = parseInt(hex.substr(2 * i, 2), 16), c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16), rgb += ("00" + c).substr(c.length);
    return rgb
}, ColorUtils.rgb2hex = function(rgb) {
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2)
    }
    return rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
}, ColorUtils.hex2rgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}, ColorUtils.interpolateColor = function(minColor, maxColor, maxDepth, depth) {
    function d2h(d) {
        return d.toString(16)
    }

    function h2d(h) {
        return parseInt(h, 16)
    }
    if (0 === depth) return minColor;
    if (depth == maxDepth) return maxColor;
    for (var color = "#", i = 1; 6 >= i; i += 2) {
        for (var minVal = new Number(h2d(minColor.substr(i, 2))), maxVal = new Number(h2d(maxColor.substr(i, 2))), nVal = minVal + (maxVal - minVal) * (depth / maxDepth), val = d2h(Math.floor(nVal)); val.length < 2;) val = "0" + val;
        color += val
    }
    return color
}, ColorUtils.getRandomColor = function() {
    for (var hexVals = "0123456789ABCDEF".split(""), color = "#", i = 0; 6 > i; i++) color += hexVals[Math.round(15 * Math.random())];
    return color
}, ColorUtils.interpolateRGB = function(rgb1, rgb2, t) {
    function mix(a, b, t) {
        return a * (1 - t) + b * t
    }
    var interpolated = {};
    return interpolated.r = Math.floor(mix(rgb1.r, rgb2.r, t)), interpolated.g = Math.floor(mix(rgb1.g, rgb2.g, t)), interpolated.b = Math.floor(mix(rgb1.b, rgb2.b, t)), interpolated
};