function CaseOverviewModule() {
    
    var _instance = Snail.extend(new Module);
    _instance.style.backgroundColor = UIColors.WHITE;
    var _line, _width = 0, _numOfCases = 2, _casesData = [], _cases = [];

    function addLine() {
        _line = document.createElement("div");
        _line.setAttribute("name","line");
        _line.style.position = "absolute";
        _line.style.backgroundColor = UIColors.LINE_ON_WHITE;
        _instance.appendChild(_line);
    }

    function addCases() {
        var l = _casesData.length;
        _numOfCases > l && (_numOfCases = l), _cases = [];
        for (var cloneCases = _casesData, i = 0; _numOfCases > i; i++) {
            var index = Math.floor(Math.random * cloneCases.length);
            //var index = i; 
            var project = new CaseOverviewCase(cloneCases.splice(index, 1)[0]);
            _instance.appendChild(project);
            project.init();
            _cases.push(project);
        }
    }
    
    
    return _instance.init = function() {
        for (var projects = ContentManager.getChildByAttr(Assets.CONTENT_PAGES, "path", "projects"), l = projects.children.length, i = 0; l > i; i++)
            if (null != projects.children[i].getAttribute("data-path")) {
                var casePath = "#/projects/" + projects.children[i].getAttribute("data-path") + "/";
                //var casePath = "/projects/" + projects.children[i].getAttribute("data-path") + "/";                
                casePath !== window.location.hash && _casesData.push(projects.children[i])
             } console.log(_casesData),addCases() , addLine();
    }, 
    
    _instance.resize_desktop = function(width, height) {
        _width = Math.floor(.7 * height), TweenMax.set(_instance, {
            width: _width,
            height: height
        });
        for (var l = _cases.length, caseHeight = height / l, i = 0; l > i; i++) _cases[i].setSize(_width, caseHeight), TweenMax.set(_cases[i], {
            y: Math.floor(caseHeight * i)
        });
        TweenMax.set(_line, {
            width: 1,
            height: height,
            x: 0
        })
    }, 
    _instance.getWidth = function() {
        return _width
    }, 
    _instance.kill = function() {
        for (var l = _cases.length, i = 0; l > i; i++) _cases[i].kill()
    }, 
    _instance
}

// Otro objeto
function CaseOverviewCase(data) {
    var _instance = document.createElement("div");
    _instance.setAttribute("name","case_overview_case");
    _instance.style.position = "absolute";
    _instance.style.cursor = "pointer";
    _instance.style.overflow = "hidden";
    _instance.setAttribute("name","case_overview_case");
    Touchable.apply(_instance);
    var _image, _caseInfo, _imgData = ContentManager.getChildByAttr(data, "name", "overviewimage"),
        _infoData = ContentManager.getChildByAttr(data, "name", "info"),
        _width = 0,
        _height = 0,
        _infoWidth = 0;
    //console.log("image: "+data.innerHTML);

    function onMouseOut() {
        TweenMax.to(_caseInfo, .5, {
            x: _width,
            ease: Expo.easeOut
        }), TweenMax.to(_image, .5, {
            x: 0,
            ease: Expo.easeOut
        })
    }

    function onMouseOver() {
        TweenMax.to(_caseInfo, .5, {
            x: _width - _infoWidth,
            ease: Expo.easeOut
        }), TweenMax.to(_image, .5, {
            x: -_infoWidth,
            ease: Expo.easeOut
        })
    }

    function onProjectClick() {
        alert("apretamos el boton");
        var linkpath = "/projects/" + data.getAttribute("data-path");
        window.location = domain+"/"+linkpath;
        //window.location.hash == "#" + linkpath && Assets.MAIN_MENU.collapseMenu(), window.location.hash = linkpath
    }

    function addImage() {
        _image = new RetinaImage(_imgData.innerHTML, null, onImgLoaded);
        _image.setAttribute("name","retina_image");
        _image.setPreloader(new SlidePreloader);
        _image.init();
        _image.setResizeMode("insideBox");
        _image.setPosition("center/center");
        _instance.appendChild(_image)
    }

    function onImgLoaded() {
        _instance.setSize(_width, _height);
    }

    function addInfo() {
        _caseInfo = new CaseInfo(_infoData, 0);
        _caseInfo.setAttribute("name","case_info");
        _caseInfo.init();
        _caseInfo.y = SiteGuides.OFFSET_TOP;
        _instance.appendChild(_caseInfo);
    }
    
    return _instance.init = function() {
        addImage();
        addInfo();
        _instance.onClick(onProjectClick);
        _instance.addEventListener("mouseover", onMouseOver);
        _instance.addEventListener("mouseout", onMouseOut)
    },
     
    _instance.kill = function() {
        _instance.removeEventListener("mouseover", onMouseOver)
    }, 

    _instance.setSize = function(width, height) {
        _width = width;
        _height = height;
        TweenMax.set(_instance, {
            width: _width,
            height: _height
        });
        _infoWidth = .4 * _width;
        _caseInfo.setMode(220 > _infoWidth ? "vertical" : "horrizontal");
        _image.setSize(width, height);
        _caseInfo.setSize(_infoWidth, height);
        TweenMax.set(_caseInfo, {
            x: _width
        })
    }, 
    _instance
}