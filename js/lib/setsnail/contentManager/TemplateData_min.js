function TemplateData() {
    
    var _xml, _level, _passedVariables, _templateName, _templatePath, _templateFullPath, _nextTemplateData, _prevTemplateData, _template, _class = {};
    
    return _class.getXML = function() {
        return _xml
    },
    _class.getLevel = function() {
        return _level
    },
    _class.getChildByAttr = function(attr, value) {
        return ContentManager.getChildByAttr(_xml, attr, value)
    }, 
    _class.getAttribute = function(name) {
        return _xml.getAttribute("data-" + name)
    }, 
    _class.getChildrenByAttr = function(attr, value) {
        return ContentManager.getChildrenByAttr(_xml, attr, value)
    }, 
    _class.getHtmlByAttr = function(attr, value) {
        return _class.getChildByAttr(attr, value) ? _class.getChildByAttr(attr, value).innerHTML : ""
    }, 
    _class.getElementByTagName = function(tagName) {
        return ContentManager.getElementByTagName(_xml, tagName)
    }, 
    _class.getIndex = function() {
        return ContentManager.getChildIndex(_xml)
    }, 
    _class.getPassedVariablesByName = function(name) {
        var rVal = "undefined";
        if (_passedVariables) {
            var value = _passedVariables[name];
            value && (rVal = value)
        }
        return rVal
    }, 
    _class.getNextTemplateData = function() {
        return _nextTemplateData
    }, 
    _class.getPrevTemplateData = function() {
        return _prevTemplateData
    }, 
    _class.getTemplateName = function() {
        return _templateName
    }, 
    _class.getTemplatePath = function() {
        return _templatePath
    }, 
    _class.getTemplateFullPath = function() {
        return _templateFullPath
    }, 
    _class.getTemplate = function() {
        return _template
    }, 
    _class.setXML = function(xml) {
        _xml = xml
    }, 
    _class.setLevel = function(level) {
        _level = level
    }, 
    _class.setTemplate = function(template) {
        _template = template
    }, 
    _class.setPassedVariables = function(passedVariables) {
        _passedVariables = passedVariables
    }, 
    _class.setNextTemplateData = function(nextTemplateData) {
        _nextTemplateData = nextTemplateData
    }, 
    _class.setPrevTemplateData = function(prevTemplateData) {
        _prevTemplateData = prevTemplateData
    }, 
    _class.setTemplateName = function(name) {
        _templateName = name
    }, 
    _class.setTemplatePath = function(path) {
        _templatePath = path
    }, 
    _class.setTemplateFullPath = function(fullPath) {
        _templateFullPath = fullPath
    },
    _class
}