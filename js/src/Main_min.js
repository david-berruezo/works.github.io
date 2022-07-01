function Main() {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","main");
    _instance.style.position = "fixed";
    _instance.style.backgroundColor = UIColors.FONT_DARK;
    window.innerWidth, window.innerHeight;

    function setupStandards() {
        Assets.setupLayers();
        AnimationUtils.apply(Assets.LAYER_TEMPLATE);
        setupResizeManager();
        
        Assets.SCROLL_CONTROLLER = new ScrollController;
        Assets.SCROLL_CONTROLLER.init(document);
        Assets.RETINA_HANDLE = new RetinaHandle;
        
        setupContentManager();
        addMainMenu();
        ContentManager.init(Assets.CONTENT_PAGES, "home");
    }

    function setupResizeManager() {
        var settings = new ResizeManagerSettings;
        settings.setRoundWidthTo(1);
        settings.setRemoveScrollbar(BrowserDetect.TABLET !== !0 && BrowserDetect.MOBILE !== !0 ? !0 : !1);
        settings.setBreakPoints([{
            width: 500,
            id: "mobile"
        }, {
            width: 1024,
            id: "tablet"
        }, {
            width: 999999,
            id: "desktop"
        }]);
        BrowserDetect.TABLET === !0 && settings.forceBreakPoint("tablet");
        BrowserDetect.MOBILE === !0 && settings.forceBreakPoint("mobile");
        Assets.RESIZE_MANAGER = new ResizeManager(settings)
    }

    function setupContentManager() {
        Assets.CONTENT = document.getElementById("content");
        Assets.CONTENT_PAGES = ContentManager.getChildByAttr(Assets.CONTENT, "name", "pages");
        Assets.CONTENT_GENERAL = ContentManager.getChildByAttr(Assets.CONTENT, "name", "general-data");
        Assets.CONTENT.parentNode.removeChild(Assets.CONTENT);
        
        ContentManager.AUTOMATICALLY_TRACK_GOOGLE_ANALYTICS = !Debug.isLocalhost();
        
        // registramos el nombre del template con la class
        // home
        ContentManager.addTemplate("home", TemplateHome);
        ContentManager.addTemplate("ecommerce", TemplateEcommerce);
        ContentManager.addTemplate("emexs", TemplateEmexs);
        ContentManager.addTemplate("ofiprix", TemplateOfiprix);
        ContentManager.addTemplate("avantio", TemplateAvantio);
        // software
        ContentManager.addTemplate("codeigniter", TemplateCodeigniter);
        ContentManager.addTemplate("php", TemplatePhp);
        ContentManager.addTemplate("zend", TemplateZend);
        ContentManager.addTemplate("wordpress", TemplateWordpress);
        ContentManager.addTemplate("prestashop", TemplatePrestashop);
        ContentManager.addTemplate("javascript", TemplateJavascript);
        // projects
        ContentManager.addTemplate("projects-0", TemplateCasesOverview);
        ContentManager.addTemplate("projectsemexs", TemplateCasesOverviewEmexs);
        ContentManager.addTemplate("projectsecommerce", TemplateCasesOverviewEcommerce);
        ContentManager.addTemplate("projectsofiprix", TemplateCasesOverviewOfiprix);
        ContentManager.addTemplate("projectsavantio", TemplateCasesOverviewAvantio);
        ContentManager.addTemplate("case-0", TemplateCase)
        // blog
        ContentManager.addTemplate("principles", TemplatePrincip);
        ContentManager.addTemplate("principlesdetail", TemplatePrincipDetail);
        // resume
        ContentManager.addTemplate("profile", TemplateProfil);
        ContentManager.addTemplate("studies", TemplateStudies);
        
    }

    function addMainMenu() {
        Assets.MAIN_MENU = new MainMenu;
        Assets.LAYER_TOP.appendChild(Assets.MAIN_MENU);
        Assets.MAIN_MENU.init();
    }
    
    
    return _instance.init = function() {
        setupStandards();
    },_instance
}