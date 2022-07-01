function MenuFooter(data, guides) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","menu_footer");
    _instance.style.position = "absolute";

    function updateLayout() {
        var textOffset = 14;
        _phone.style.display = guides.getGuide("contact") < 180 ? "none" : "inline";
        TweenMax.set(_mail, {
            y: Assets.RESIZE_MANAGER.getScreenHeight() - GuideLines.OFFSET_BOTTOM + textOffset,
            x: guides.getGuide("start")
        });
        TweenMax.set(_phone, {
            y: Assets.RESIZE_MANAGER.getScreenHeight() - GuideLines.OFFSET_BOTTOM + textOffset,
            x: guides.getGuide("contact")
        })
    }

    
    return _instance.init = function() {
        _mail = Text.getNewReg(13);
        _mail.innerHTML = ContentManager.getChildByAttr(data, "name", "copyright").innerHTML;
        _mail.style.whiteSpace = "nowrap";
        
        _phone = Text.getNewReg(13);
        _phone.innerHTML = ContentManager.getChildByAttr(data, "name", "cvr").innerHTML;
        _phone.style.whiteSpace = "nowrap";
        
        _instance.appendChild(_mail);
        _instance.appendChild(_phone);
        
        _phone.style.color = _mail.style.color = UIColors.FONT_MED_ON_WHITE;
        guides.addEventListener(GuideLines.ON_UPDATE, updateLayout);
        updateLayout();
    }, 
    _instance
}