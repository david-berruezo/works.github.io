function TemplatePrincip(data) {
    
    function setupAndAddModules() {
        var frontpageData = ContentManager.getChildByAttr(data.getXML(), "name", "frontpage"),
            sectionsData = ContentManager.getChildByAttr(data.getXML(), "name", "sections"),
            sections = ContentManager.getChildrenByAttr(sectionsData, "name", "section");
        _instance.addModule(new BasicHomeModule(frontpageData, onNextClick));

        for (var longestId = getLongestSectionId(sections), bodyModel = new TextAreaModel, l = sections.length, i = 0; l > i; i++) {
            var mode = i == longestId ? TextAreaModel.MODE_CONTROL : TextAreaModel.MODE_LISTEN;
            _instance.addModule(new PrincipleSectionModule(sections[i], bodyModel, mode))
        }
        var returnModule = new ReturnModule;
        returnModule.addLine(UIColors.LINE_ON_WHITE), _instance.addModule(returnModule)
    }

    function onNextClick() {
        _instance.scrollToNextModule()
    }

    function getLongestSectionId(section) {
        for (var highestCount = 0, highsetId = -1, l = section.length, i = 0; l > i; i++) {
            var bodyHtml = ContentManager.getChildByAttr(section[i], "name", "body").innerHTML;
            bodyHtml.length > highestCount && (highestCount = bodyHtml.length, highsetId = i)
        }
        return highsetId
    }
    var _instance = Snail.extend(new PageTemplate(data));
    _instance.style.backgroundColor = UIColors.DARK;
    return _instance.init = function() {
        _instance.super.init(), setupAndAddModules(), _instance.onResize()
    }, 
    
    _instance.templateIn = function() {
        _instance.init(), _instance.super.templateIn()
    }, 
    
    _instance.onResize = function() {
        _instance.super.onResize()
    }, 
    
    _instance
}