function MenuSelectorBusiness(data, guides) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","menu_selector_business");
    _instance.style.position = "absolute";
    var _menuBtns = [];

    function updateLayout() {
        TweenMax.set(_instance, {
            y: SiteGuides.getCenterOffset() - 1,
            x: guides.getGuide("start") - 500
        })
    }

    function onResize() {
        for (var l = _menuBtns.length, yPos = 0, i = 0; l > i; i++) {
            var btn = _menuBtns[i],
                fontSize = 50 * SiteGuides.getDesignHeightRatio();
            26 > fontSize && (fontSize = 26), btn.style.fontSize = fontSize + "px", btn.updateLineHeight(), TweenMax.set(btn, {
                y: yPos
            }), yPos += fontSize
        }
    }

    function addMenuPoints() {
        for (var l = data.children.length, yPos = 0, i = 0; l > i; i++) {
            var name = ContentManager.getChildByAttr(data.children[i], "name", "menu_business");
            if (void 0 != name) {
                var btn = new TextButton(Text.getNewLight(50), UIColors.WHITE, data.children[i].getAttribute("data-path"));
                btn.init();
                btn.addClass("animate");
                btn.addClass("thick-line");
                btn.setText(name.innerHTML), TweenMax.set(btn, {
                    y: yPos
                });
                yPos += 50;
                _instance.appendChild(btn);
                _menuBtns.push(btn)
            }
        }
    }

    return _instance.init = function() {
        addMenuPoints(); 
        guides.addEventListener(GuideLines.ON_UPDATE, updateLayout);
        updateLayout();
        Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE, onResize);
        onResize();
    }, 
    _instance
}