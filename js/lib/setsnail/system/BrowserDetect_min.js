var BrowserDetect = {};
BrowserDetect.init = function() {
    BrowserDetect.MOBILE = BrowserDetect.checkMobile();
    BrowserDetect.TABLET = BrowserDetect.checkTablet();
    BrowserDetect.DESKTOP = !BrowserDetect.MOBILE && !BrowserDetect.TABLET;
    BrowserDetect.BROWSER_NAME = this.searchString(this.dataBrowser) || "An unknown browser";
    BrowserDetect.BROWSER_VERSION = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
    BrowserDetect.OS = this.searchString(this.dataOS) || "an unknown OS", 
    "Firefox" == BrowserDetect.BROWSER_NAME && BrowserDetect.BROWSER_VERSION >= 10 && (BrowserDetect.TRANSLATE3D_SUPPORT = !0);
}, 

BrowserDetect.searchString = function(data) {
    for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string,
            dataProp = data[i].prop;
        if (BrowserDetect.BROWSER_VERSIONSearchString = data[i].versionSearch || data[i].identity, dataString) {
            if (-1 != dataString.indexOf(data[i].subString)) return data[i].identity
        } else if (dataProp) return data[i].identity
    }
}, 

BrowserDetect.searchVersion = function(dataString) {
    var index = dataString.indexOf(BrowserDetect.BROWSER_VERSIONSearchString);
    if (-1 != index) return parseFloat(dataString.substring(index + BrowserDetect.BROWSER_VERSIONSearchString.length + 1))
}, 

BrowserDetect.getOlderSafariVersion = function(version) {
    return 100 > version ? 1 : 125.2 > version ? 1.1 : 312.1 > version ? 1.2 : 412 > version ? 1.3 : 523.1 > version ? 2 : 523.12 >= version ? 3 : void 0
}, 

BrowserDetect.dataBrowser = [{
    string: navigator.userAgent,
    subString: "Chrome",
    identity: "Chrome"
}, {
    string: navigator.userAgent,
    subString: "OmniWeb",
    versionSearch: "OmniWeb/",
    identity: "OmniWeb"
}, {
    string: navigator.vendor,
    subString: "Apple",
    identity: "Safari",
    versionSearch: "Version"
}, {
    prop: window.opera,
    identity: "Opera"
}, {
    string: navigator.vendor,
    subString: "iCab",
    identity: "iCab"
}, {
    string: navigator.vendor,
    subString: "KDE",
    identity: "Konqueror"
}, {
    string: navigator.userAgent,
    subString: "Firefox",
    identity: "Firefox"
}, {
    string: navigator.vendor,
    subString: "Camino",
    identity: "Camino"
}, {
    string: navigator.userAgent,
    subString: "Netscape",
    identity: "Netscape"
}, {
    string: navigator.userAgent,
    subString: "MSIE",
    identity: "Explorer",
    versionSearch: "MSIE"
}, {
    string: navigator.userAgent,
    subString: "Gecko",
    identity: "Mozilla",
    versionSearch: "rv"
}, {
    string: navigator.userAgent,
    subString: "Mozilla",
    identity: "Netscape",
    versionSearch: "Mozilla"
}], BrowserDetect.dataOS = [{
    string: navigator.platform,
    subString: "Win",
    identity: "Windows"
}, {
    string: navigator.platform,
    subString: "Mac",
    identity: "Mac"
}, {
    string: navigator.userAgent,
    subString: "iPhone",
    identity: "iPhone/iPod"
}, {
    string: navigator.userAgent,
    subString: "iPad",
    identity: "iPad"
}, {
    string: navigator.userAgent,
    subString: "Android",
    identity: "Android"
}, {
    string: navigator.userAgent,
    subString: "Windows CE",
    identity: "Windows CE"
}, {
    string: navigator.userAgent,
    subString: "Palm",
    identity: "Palm"
}, {
    string: navigator.userAgent,
    subString: "Blackberry",
    identity: "Blackberry"
}, {
    string: navigator.platform,
    subString: "Linux",
    identity: "Linux"
}], 

BrowserDetect.checkMobile = function() {
    var ismobile = /iphone|ipod|kindle|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
    return ismobile === !0 ? !0 : !1
}, 

BrowserDetect.checkTablet = function() {
    var istablet = /ipad|sch-i800|playbook|xoom|tablet|gt-p1000|gt-p7510|sgh-t849|nexus 7|shw-m180s|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase()),
        istabletpc = /tablet pc/i.test(navigator.userAgent.toLowerCase());
    istablet && (istablet = !istabletpc);
    var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
    if (isAndroid === !0 || istablet === !0) {
        var heightIs = screen.height,
            widthIs = screen.width;
        heightIs > widthIs && (widthIs = screen.height, heightIs = screen.width), heightIs >= 736 && widthIs >= 1024 ? istablet = !0 : (BrowserDetect.MOBILE = !0, istablet = !1)
    }
    return istablet === !0 ? !0 : !1
}, 

BrowserDetect.BROWSER_NAME = null;
BrowserDetect.BROWSER_VERSION = null;
BrowserDetect.OS = null;
BrowserDetect.MOBILE = !1;
BrowserDetect.TABLET = !1;
BrowserDetect.DESKTOP = !0, 

BrowserDetect.isSafari = function() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}, 

BrowserDetect.TRANSLATE3D_SUPPORT = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix;
BrowserDetect.init();