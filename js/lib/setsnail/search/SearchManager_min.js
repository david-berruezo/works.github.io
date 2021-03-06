function SearchManager() {
    
    var _instance = {};
    var _indexing = null;

    function convertNodeToTemplateNode(node) {
        for (var parent = node, currAttr = null; null !== parent;) {
            if ("function" == typeof parent.getAttribute && (currAttr = parent.getAttribute("data-path"))) return parent;
            parent = parent.parentNode
        }
        return node
    }

    function findSearchNodes(target, searchNodeNames) {
        function collectNodes(child) {
            for (var children = child.children, l = children.length, node = null, value = null, i = 0; l > i; i += 1) 
            node = children[i], -1 !== searchNodeNames.indexOf(node.nodeName) && (value = node.innerHTML, hits.push({
                value: value.toLowerCase(),
                node: node,
                l: value.length
            })), collectNodes(node)
        }
        var hits = [];
        collectNodes(target);
        return hits
    }

    
    return _instance.populate = function(target, searchNodes) {
        _indexing = findSearchNodes(target, searchNodes)
    }, 

    _instance.search = function(searchStr) {
        if (null === searchStr || searchStr.length < 2) return [];
        searchStr = searchStr.toLowerCase();
        for (var l = _indexing.length, searchObj = null, value = null, results = [], i = 0; l > i; i += 1)
            if (searchObj = _indexing[i], value = searchObj.value, -1 !== value.indexOf(searchStr)) {
                var data = searchObj;
                if (data.parent || (data.parent = convertNodeToTemplateNode(searchObj.node)), 
                results.push(data), "t" === data.node.getAttribute("data-in-search")) continue;
                for (var l2 = results.length, oldResult = null, hits = [data], j = 0; l2 > j; j += 1) oldResult = results[j], oldResult.parent === data.parent && hits.push(oldResult);
                for (; hits.length > 2;) {
                    var shortest = 999999999999,
                        shortId = -1,
                        currLength = -1;
                    l2 = hits.length;
                    for (var j = 0; l2 > j; j += 1) 
                        oldResult = hits[j], 
                        currLength = oldResult.l, 
                        shortest > currLength && (shortest = currLength, shortId = j); 
                    - 1 !== shortId && (results.splice(results.indexOf(hits[shortId]), 1), hits.splice(shortId, 1))
                }
            } 
            return results
    }, 
    _instance
}