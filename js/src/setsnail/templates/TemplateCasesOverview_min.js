function TemplateCasesOverview(data) {
    
    var _instance = Snail.extend(new PageTemplate(data));
    _instance.style.backgroundColor = UIColors.WHITE;
    var _cases, _infoBox, _return, _whiteSpace, _numOfCases = 0,_infoOffsetRatio = 0;

    function getActiveStory() {
        var ratio = Assets.SCROLL_CONTROLLER.getScrollRatio(),
            partRatio = 1 / (_numOfCases - 1);
        return Math.round(ratio / partRatio)
    }

    function snapToStory() {
        easeToStory(getActiveStory())
    }

    function easeToStory(storyIndex) {
        var storyWidth = getStoryPos();
        Assets.SCROLL_CONTROLLER.scrollTo(storyWidth * storyIndex, 1, Expo.easeInOut)
    }

    function getStoryPos() {
        return Math.floor(Assets.RESIZE_MANAGER.getWindowWidth() - _infoBox.getWidth() - _return.getWidth())
    }

    function setupAndAddModules() {
        var casesData = ContentManager.getChildrenByAttr(data.getXML(), "template", "case-0"),infoData = [];
        _cases = [], _numOfCases = casesData.length;
        console.log("casesData: "+casesData);
        for (var i = 0; _numOfCases > i; i++) {
            infoData.push(ContentManager.getChildrenByAttr(casesData[i], "name", "info"));
            var project = new OverviewCaseModule(casesData[i], .75, i);
            console.log(casesData[i]);
            project.onModuleClick = onCaseClick, _instance.addModule(project), _cases.push(project)
        }

        _whiteSpace = new WhiteSpaceModule, 
        _return = new ReturnModule, 
        _return.addLine(UIColors.LINE_ON_WHITE), 
        _instance.addModule(_whiteSpace), 
        _instance.addModule(_return), 
        addInfoBox(infoData)
    }

    function addInfoBox(infoData) {
        _infoBox = new CasesInfoBox(infoData), 
        _infoBox.init(), 
        Assets.LAYER_TEMPLATE_OFFSET.appendChild(_infoBox)
    }

    function onCaseClick(caseID) {
        if (getActiveStory() == caseID) {
            console.log("caseId: "+caseID);
            var casePath = _cases[caseID].getData().getAttribute("data-path"), parentPath = data.getXML().getAttribute("data-path");
            //console.log("casePath: "+casePath);
            //console.log("parentPath: "+parentPath);
            //window.location.hash = "/" + parentPath + "/" + casePath + "/"
            window.location = domain + "/" + parentPath + "/" + casePath
        } else easeToStory(caseID)
    }

    return _instance.init = function() {
        _instance.super.init();
        setupAndAddModules();
        Assets.SCROLL_CONTROLLER.addEventListener(ScrollController.ON_SCROLL_EASE_STOP, snapToStory);
        _instance.onResize()
    }, 
    _instance.kill = function() {
        Assets.SCROLL_CONTROLLER.removeEventListener(ScrollController.ON_SCROLL_EASE_STOP, snapToStory);
        _infoBox.kill();
        Assets.LAYER_TEMPLATE_OFFSET.removeChild(_infoBox);
        _instance.super.kill()
    }, 
    _instance.templateIn = function() {
        _instance.super.templateIn(), _instance.init()
    }, 
    _instance.onResize = function() {
        var infoWidth = Math.floor(.15 * Assets.RESIZE_MANAGER.getWindowWidth());
        150 > infoWidth ? (_return.scaleWidth = .5, _return.setArrowVisability("none"), _infoBox.setMode(CasesInfoBox.MODE_VERTICAL), infoWidth = _infoBox.getCurrentModeWidth()) : (_return.scaleWidth = 1, _return.setArrowVisability("inline"), _infoBox.setMode(CasesInfoBox.MODE_HORRIZONTAL)), _infoBox.setSize(infoWidth, Assets.RESIZE_MANAGER.getWindowHeight());
        var infoXPos = getStoryPos();
        TweenMax.set(_infoBox, {
            x: infoXPos + _infoOffsetRatio * infoWidth
        }), 
        _whiteSpace.setWidth(infoWidth), _numOfCases > 0 && _cases[_numOfCases - 1].offsetWidth2(infoWidth + 120 - SiteGuides.MAIN_MENU_WIDTH);
        for (var i = 0; _numOfCases > i; i++) _cases[i].setOffset(-_infoBox.getWidth() - _return.getWidth() + SiteGuides.MAIN_MENU_WIDTH);
        _instance.super.onResize(), snapToStory()
    }, 
    _instance
}