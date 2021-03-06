Array.prototype.sortOn = function() {
    var dup = this.slice();
    if (!arguments.length) return dup.sort();
    var args = Array.prototype.slice.call(arguments);
    return dup.sort(function(a, b) {
        for (var props = args.slice(), prop = props.shift(); a[prop] == b[prop] && props.length;) 
        prop = props.shift();
        return a[prop] == b[prop] ? 0 : a[prop] > b[prop] ? 1 : -1
    })
};