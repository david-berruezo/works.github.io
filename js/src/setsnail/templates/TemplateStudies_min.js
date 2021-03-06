function TemplateStudies(data) {
    
    function setupAndAddModules() {
        var frontpageData = ContentManager.getChildByAttr(data.getXML(), "name", "frontpage"),
            employeeData = ContentManager.getChildByAttr(data.getXML(), "name", "employees"),
            serviceData = ContentManager.getChildByAttr(data.getXML(), "name", "service"),
            processData = ContentManager.getChildByAttr(data.getXML(), "name", "process"),
            profilInfoOne = new ProfileInfoModule(serviceData, null, 2),
            profilInfoTwo = new ProfileInfoModule(processData, null, 3, !0),
            employeeModule = new ProfileEmployeeModuleTwo(employeeData);
        _instance.addModule(new BasicHomeModule(frontpageData, onNextClick)); 
        _instance.addModule(employeeModule); 
        _instance.addModule(profilInfoOne);
        _instance.addModule(profilInfoTwo);
        var returnModule = new ReturnModule;
        returnModule.addLine(UIColors.LINE_ON_WHITE), _instance.addModule(returnModule);
        var model = new TextAreaModel;
        profilInfoOne.setBodyTextModel(model);
        profilInfoTwo.setBodyTextModel(model, TextAreaModel.MODE_LISTEN);
        employeeModule.setTextModel(model)
    }

    function onNextClick() {
        _instance.scrollToNextModule()
    }

    var _instance = Snail.extend(new PageTemplate(data));
    _instance.style.backgroundColor = UIColors.DARK;
    
    return _instance.init = function() {
        _instance.super.init();
        setupAndAddModules();
        _instance.onResize()
    }, 
    
    _instance.templateIn = function() {
        _instance.init();
        _instance.super.templateIn()
    }, 
    
    _instance.onResize = function() {
        _instance.super.onResize()
    }, 
    _instance
}