StringUtils = {};

StringUtils.toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}, 

StringUtils.limitToNumberOfChars = function(str, limit, end) {
    var l = str.length;
    if (limit > l) return str;
    for (var letters = 0, i = 0; l > i; i++) {
        if ("<" == str.charAt(i))
            for (;
                ">" !== str.charAt(i);)
                if (i++, i >= l) return str;
        if (letters++, letters >= limit) return str.substring(0, i) + end
    }
    return str
}, 

StringUtils.stripToNumbers = function(value) {
    return value.replace(/[^0-9.]/g, "")
}, 

StringUtils.firstToUpperCase = function(str) {
    return str = str.toLowerCase(), str.charAt(0).toUpperCase() + str.slice(1)
}, 

StringUtils.replaceAll = function(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace)
}, 

StringUtils.searchRight = function(str, index, limit, end) {
    for (var l = str.length, rStr = "", currChar = null, tagOpen = !1, charNumber = 0, i = index; l > i && (currChar = str.charAt(i), "<" === currChar && (tagOpen = !0), tagOpen === !0 && ">" === currChar && (tagOpen = !1), rStr += currChar, !(charNumber > limit && tagOpen === !1)); i += 1) charNumber += 1;
    return charNumber > limit && (rStr += end), rStr
}, 

StringUtils.searchLeft = function(str, index, limit, end) {
    for (var rStr = "", currChar = null, tagOpen = !1, charNumber = 0, i = index; i > -1 && (currChar = str.charAt(i), ">" === currChar && (tagOpen = !0), tagOpen === !0 && "<" === currChar && (tagOpen = !1), rStr = currChar + rStr, !(charNumber > limit && tagOpen === !1)); i -= 1) charNumber += 1;
    return charNumber > limit && (rStr = end + rStr), rStr
}, 

StringUtils.linkify = function(text) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return text.replace(urlRegex, function(url, b, c) {
        var arr = url.split("<br>");
        url = arr[0], arr[0] = "";
        var url2 = "www." == c ? "http://" + url : url,
            finalLink = decodeURIComponent(url2.replace(/\+/g, " "));
        return finalLink = StringUtils.replaceAll(finalLink, "???", ""), '<a href="' + finalLink + '" target="_blank">' + url + "</a>" + arr.join("<br>")
    })
}, 

StringUtils.removeTag = function(str, tag) {
    var a, parent, div = document.createElement("div");
    div.setAttribute("name","string");
    for (div.innerHTML = str, a = div.getElementsByTagName(tag); a[0];) {
        for (parent = a[0].parentNode; a[0].firstChild;) parent.insertBefore(a[0].firstChild, a[0]);
        parent.removeChild(a[0])
    }
    return div.innerHTML
}, 

StringUtils.removeTags = function(str) {
    return str.replace(/(<([^>]+)>)/gi, "")
};