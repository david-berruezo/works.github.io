function traceObj(obj) {
    for (var name in obj) trace(name + ": " + obj[name])
}

function trace(what, from) {
    
    function getTraceValue(value) {
        var rValue = "";
        try {
            rValue = "function" == typeof value ? value.name.toString() + "();" : value.toString()
        } catch (error) {
            try {
                rValue = value.toString()
            } catch (e) {
                rValue = "null"
            }
        }
        return rValue
    }

    if (TRACE_ACTIVE) {
        var traceStr = getTraceValue(what);
        from && (traceStr = getTraceValue(from) + " => " + traceStr);
        try {
            TRACE_ON_SCREEN ? (Trace._traceField || (Trace._traceField = document.createElement("div"), Trace._traceField.setAttribute("name","trace"),Trace._traceField.style.position = "absolute", Trace._traceField.style.whiteSpace = "noWrap", Trace._traceField.style.color = "#00ff00", Trace._traceField.style.position = "fixed", Trace._traceField.style.padding = "10px", Trace._traceField.style.zIndex = 2e6, Trace._traceField.style.left = "220px", Trace._traceField.style.top = "20px", Trace._traceField.style.fontFamily = "Courier New", Trace._traceField.style.fontSize = "10px", Trace._traceField.style.backgroundColor = "#000000", Trace._traceFieldLines = new Array), Trace._traceFieldLines.push(traceStr), Trace._traceFieldLines.length > Trace._maxTraceLines && Trace._traceFieldLines.shift(), Trace._traceField.innerHTML = Trace._traceFieldLines.join("<br />"), document.body.appendChild(Trace._traceField)) : console.log(traceStr)
        } catch (e) {}
    }
}

Trace = {}, TRACE_ACTIVE = !0, TRACE_ON_SCREEN = !1, Trace._traceField, Trace._traceFieldLines, Trace._maxTraceLines = 25;