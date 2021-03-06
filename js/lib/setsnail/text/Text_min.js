Text = {};

Text.FontFamilyMedium  = "FoundersGroteskMedium";
Text.FontFamilyRegular = "FoundersGroteskRegular";
Text.FontFamilyLight   = "FoundersGroteskLight";

Text.listenForSize = function(arr, callback, runNum) {
    if (runNum || (runNum = 0), runNum >= 20) return void trace("WARNING - Text.listenForSize() :: never found offsetSize for text");
    for (var l = arr.length, i = 0; l > i; i++) {
        var item = arr[i];
        if (0 === item.offsetWidth || 0 === item.offsetHeight) return void setTimeout(Text.listenForSize, 10, arr, callback, runNum++)
    }
    callback(arr)
}, 

Text.getNewMed = function(fontSize) {
    var div = document.createElement("div");
    div.setAttribute("name","get_new_med");
    div.style.position = "absolute";
    div.style.fontFamily = Text.FontFamilyMedium;
    div.lineHeightOffset = 0;
    div.lineHeightScale = 1;
    return div.updateLineHeight = function() {
        Text.baseLineheightOnFontSizeLight(div)
    }, 
    fontSize && (div.style.fontSize = fontSize + "px", div.updateLineHeight()),
    CSS.antialiasText(div), div
}, 

Text.getNewReg = function(fontSize) {
    var div = document.createElement("div");
    div.setAttribute("name","get_new_reg");
    div.style.position = "absolute";
    div.style.fontFamily = Text.FontFamilyRegular;
    div.lineHeightOffset = 0;
    div.lineHeightScale = 1;
    return  div.updateLineHeight = function() {
        Text.baseLineheightOnFontSizeLight(div)
    }, fontSize && (div.style.fontSize = fontSize + "px", div.updateLineHeight()), 
    CSS.antialiasText(div), div
}, 

Text.getNewLight = function(fontSize) {
    var div = document.createElement("div");
    div.setAttribute("name","get_new_light");
    div.style.position = "absolute";
    div.style.fontFamily = Text.FontFamilyLight;
    div.lineHeightOffset = 0;
    div.lineHeightScale = 1;
    return  div.updateLineHeight = function() {
        Text.baseLineheightOnFontSizeLight(div)
    }, fontSize && (div.style.fontSize = fontSize + "px", 
    div.updateLineHeight()), CSS.antialiasText(div), div
}, 

Text.getOffsetY = function(text) {
    return .23 * parseFloat(text.style.fontSize) - 1
}, 

Text.getFontSizeBasedOnWidth = function(width, min) {
    var newSize = Math.floor(.11 * width),
        minSize = 20;
    return newSize = minSize > newSize ? min ? min : minSize : newSize
}, 

Text.baseLineheightOnFontSizeLight = function(div) {
    var offset = 0;
    div.lineHeightOffset && (offset = div.lineHeightOffset);
    var lineScale = 1;
    div.lineHeightScale && (lineScale = div.lineHeightScale);
    //div.style.lineHeight = offset + Math.round(parseInt(div.style.fontSize) * lineScale) + "px";
};
