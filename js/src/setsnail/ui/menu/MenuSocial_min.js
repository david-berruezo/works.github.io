function MenuSocial(data, guides) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","menu_social");
    _instance.style.position = "absolute";
    var _menuBtns = [];

    function onResize() {
        var fontSize = 50 * SiteGuides.getDesignHeightRatio();
        26 > fontSize && (fontSize = 26);
        var centerOffset = 3 * fontSize + 80 * SiteGuides.getDesignHeightRatio();
        TweenMax.set(_instance, {
            y: SiteGuides.getCenterOffset() + centerOffset,
            x: guides.getGuide("start")
        });
        for (var l = _menuBtns.length, yPos = 0, i = 0; l > i; i++) {
            var btn = _menuBtns[i],
                fontSize = 16 * SiteGuides.getDesignHeightRatio();
            16 > fontSize && (fontSize = 16), btn.style.fontSize = fontSize + "px", btn.updateLineHeight(), TweenMax.set(btn, {
                y: yPos
            }), yPos += fontSize + 2 * SiteGuides.getDesignHeightRatio()
        }
    }

    function addMenuPoints() {
        for (var l = data.children.length, yPos = 0, i = 0; l > i; i++) {
            var btn = new TextButton(Text.getNewLight(16), UIColors.FONT_MED_ON_WHITE);
            btn.setText(data.children[i].innerHTML);
            btn.setPath(data.children[i].getAttribute("data-link"));
            btn.addClass("animate");
            btn.init();
            TweenMax.set(btn, {
                y: yPos
            });
            yPos += 18;
            _instance.appendChild(btn);
            _menuBtns.push(btn)
        }
    }

    return _instance.init = function() {
        addMenuPoints();
        Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE, onResize);
        onResize();
    },

    _instance
}