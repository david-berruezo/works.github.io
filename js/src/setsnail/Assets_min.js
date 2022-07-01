Assets = {}; 
Assets.BODY = null;
Assets.CONTENT_LAYER = document.createElement("div");
Assets.CONTENT_LAYER.setAttribute("name","content_layer");
Assets.SCROLL_LAYER = document.createElement("div");
Assets.SCROLL_LAYER.setAttribute("name","scroll_layer");
Assets.LAYER_BOT = document.createElement("div");
Assets.LAYER_BOT.setAttribute("name","layer_bot");
Assets.LAYER_MID = document.createElement("div");
Assets.LAYER_MID.setAttribute("name","layer_mid");
Assets.LAYER_TOP = document.createElement("div");
Assets.LAYER_TOP.setAttribute("name","layer_top");
Assets.LAYER_TEMPLATE = document.createElement("div");
Assets.LAYER_TEMPLATE.setAttribute("name","layer_template");
Assets.LAYER_TEMPLATE_OFFSET = document.createElement("div");
Assets.LAYER_TEMPLATE_OFFSET.setAttribute("name","layer_template_offset");
Assets.LAYER_TEMPLATE_PHYCHO_OFFSET = document.createElement("div");
Assets.LAYER_TEMPLATE_PHYCHO_OFFSET.setAttribute("name","layer_template_phycho_offset");
Assets.SCROLL_CONTROLLER = null, Assets.RESIZE_MANAGER = null;
Assets.RETINA_HANDLE = null;
Assets.MAIN_MENU = null;
Assets.CONTENT = null;
Assets.CONTENT_PAGES = null;
Assets.CONTENT_GENERAL = null;
Assets.CONTENT_MENU = null;
Assets.UPLOAD_FOLDER = "uploads/";
Assets.setupLayers = function() {
    Assets.BODY = document.body;
    Assets.BODY.style.backgroundColor = UIColors.WHITE;
    Assets.CONTENT_LAYER.style.position = "fixed";
    Assets.CONTENT_LAYER.id = "CONTENT_LAYER";
    Assets.LAYER_TEMPLATE.style.position = "absolute";
    Assets.LAYER_TEMPLATE.id = "LAYER_TEMPLATE";
    Assets.LAYER_TEMPLATE_OFFSET.style.position = "absolute";
    Assets.LAYER_TEMPLATE_OFFSET.appendChild(Assets.LAYER_TEMPLATE_PHYCHO_OFFSET);
    Assets.LAYER_TEMPLATE_PHYCHO_OFFSET.style.position = "absolute";
    Assets.LAYER_TEMPLATE_PHYCHO_OFFSET.appendChild(Assets.LAYER_TEMPLATE);
    Assets.LAYER_BOT.appendChild(Assets.LAYER_TEMPLATE_OFFSET);
    Assets.LAYER_MID.id = "LAYER_MID";
    Assets.LAYER_BOT.id = "LAYER_BOT";
    Assets.LAYER_TOP.id = "LAYER_TOP";
    Assets.CONTENT_LAYER.appendChild(Assets.LAYER_BOT);
    Assets.CONTENT_LAYER.appendChild(Assets.LAYER_MID);
    Assets.CONTENT_LAYER.appendChild(Assets.LAYER_TOP);
    Assets.BODY.appendChild(Assets.CONTENT_LAYER);
    Assets.BODY.appendChild(Assets.SCROLL_LAYER)
};
 
SiteGuides = {};
SiteGuides.BASE_DESIGN_WIDTH = 1455;
SiteGuides.BASE_DESIGN_HEIGHT = 900;
SiteGuides.OFFSET_TOP = 19;
SiteGuides.OFFSET_BOTOM = 15;
SiteGuides.OFFSET_CENTER = 387;
SiteGuides.MAIN_MENU_WIDTH = 42;

SiteGuides.getCenterOffset = function() {
    return SiteGuides.OFFSET_CENTER * Assets.RESIZE_MANAGER.getWindowHeight() / SiteGuides.BASE_DESIGN_HEIGHT;
}, 

SiteGuides.getDesignWidthRatio = function() {
    return Assets.RESIZE_MANAGER.getWindowWidth() / SiteGuides.BASE_DESIGN_WIDTH;
}, 

SiteGuides.getDesignHeightRatio = function() {
    return Assets.RESIZE_MANAGER.getWindowHeight() / SiteGuides.BASE_DESIGN_HEIGHT;
}, 

SiteGuides.drawDebugLines = function() {
    
    var centerGuide = getGuide();
    var bottomGuide = getGuide();
    
    window.addEventListener("resize", resizeGuide);
    resizeGuide();

    function getGuide() {
        
        function resizeGuide() {
            guide.style.width = window.innerWidth + "px";
            guide.style.height = "1px"
        }
        
        var guide = document.createElement("div");
        guide.style.position = "fixed";
        window.addEventListener("resize", resizeGuide);
        guide.style.backgroundColor = "#6be9eb";
        resizeGuide();
        Assets.CONTENT_LAYER.appendChild(guide); 
        return guide;
    }

    function resizeGuide() {
        TweenMax.set(centerGuide, {
            y: SiteGuides.getCenterOffset()
        }), TweenMax.set(bottomGuide, {
            y: window.innerHeight - SiteGuides.OFFSET_BOTOM
        })
    }
    
    TweenMax.set(getGuide(), {
        y: SiteGuides.OFFSET_TOP
    });
};