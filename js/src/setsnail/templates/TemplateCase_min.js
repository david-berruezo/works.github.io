function TemplateCase(data) {
    
    function setupAndAddModules() {
        
        var homeData = ContentManager.getChildByAttr(data.getXML(), "name", "home"),
            infoData = ContentManager.getChildByAttr(data.getXML(), "name", "info");
        _instance.addModule(new CaseHomeModule(homeData, infoData, onArrowClick));
        
        for (var modules = ContentManager.getChildByAttr(data.getXML(), "name", "modules").children, l = modules.length, moduleTextArr = [], i = 0; l > i; i++) {
            var id = modules[i].getAttribute("data-name"),
                modul = getModule(modules[i]);
            _instance.addModule(modul), "moduleText" == id && moduleTextArr.push(modul)
        }

        for (var maxLength = 0, maxId = 0, l = moduleTextArr.length, i = 0; l > i; i++) {
            var numOfChars = moduleTextArr[i].getNumOfChars();
            numOfChars > maxLength && (maxId = i, maxLength = numOfChars)
        }

        var model = new TextAreaModel;
        model.maxFontSize = 23;
        for (var i = 0; l > i; i++) {
            var mode = TextAreaModel.MODE_LISTEN;
            i == maxId && (mode = TextAreaModel.MODE_CONTROL), moduleTextArr[i].setModel(model, mode)
        }
        _instance.addModule(new ReturnModule(90));
        BrowserDetect.DESKTOP && _instance.addModule(new CaseOverviewModule);
    }

    function getModule(moduleData) {
        var id = moduleData.getAttribute("data-name");
        switch (id) {
            case "moduleImage":
                return _imgId++, new CaseImageModule(moduleData, _imgId);
            case "moduleText":
                return new CaseTextModule(moduleData);
            case "moduleVideo":
                return new CaseVideoModule(moduleData)
        }
        return console.error("The module id:" + id + " does not excist; Check your spelling."), null
    }

    function onArrowClick() {
        _instance.scrollToNextModule()
    }

    var _instance = Snail.extend(new PageTemplate(data));
    _instance.style.backgroundColor = UIColors.DRAK_GRAY;
    _instance.init = function() {
        _instance.super.init();
        setupAndAddModules();
        _instance.onResize()
    }, 
    _instance.templateIn = function() {
        _instance.init();
        _instance.super.templateIn()
    };
    var _imgId = 0;
    return _instance
}