function MenuSelector(data, guides) {
    
    var _instance = document.createElement("div");
    _instance.setAttribute("name","menu_selector");
    _instance.style.position = "absolute";
    var _menuBtns = [];

    function updateLayout() {
        TweenMax.set(_instance, {
            y: SiteGuides.getCenterOffset() - 1,
            x: guides.getGuide("start")
        })
    }

    function onResize() {
        // Para los menus
        var yPos_submenu = 0;
        for (var l = _menuBtns.length, yPos = 0, i = 0; l > i; i++) {
            var btn = _menuBtns[i], fontSize = 50 * SiteGuides.getDesignHeightRatio();
            26 > fontSize && (fontSize = 26);
            btn.style.fontSize = fontSize + "px";
            btn.updateLineHeight();
            if (btn.classList.contains("submenu") && !btn.classList.contains("submenu-abierto")){
                TweenMax.set(btn, {
                    y: yPos_submenu
                });
                yPos_submenu += fontSize;
            }else{
                TweenMax.set(btn, {
                    y: yPos
                });
                yPos += fontSize;
                yPos_submenu = yPos;
            }
        }
    }

    function cambiar_clase(nombre){
        var contenido_submenu = nombre;
        contenido_submenu = contenido_submenu.toLowerCase();    
        var submenus = document.querySelectorAll("div[data-menu='"+contenido_submenu+"']");
        for (var i=0;i<submenus.length;i++){
            $(submenus[i]).toggleClass( "submenu-abierto" )
        }   
        onResize();
    }

    function addMenuPoints() {
        var yPos_submenu = 0;
        var vector_nombres = [];
        for (var l = data.children.length, yPos = 0, i = 0; l > i; i++) {
            var name = ContentManager.getChildByAttr(data.children[i], "name", "menu");
            if (void 0 != name) {
                var btn = new TextButton(Text.getNewLight(50), UIColors.WHITE, data.children[i].getAttribute("data-path"));
                btn.init();
                btn.addClass("animate");
                btn.addClass("thick-line");
                // check has submenus
                if (name.hasAttribute("data-submenu")){
                    vector_nombres.push(name.innerHTML);
                    btn.addClass("has-submenu");
                    btn.addEventListener("click",function() { cambiar_clase(this.innerHTML) } );
                    btn.addEventListener('touchstart', function() { cambiar_clase(this.innerHTML) });
                }
                btn.setText(name.innerHTML);
                if(name.hasAttribute("data-menu")){
                    btn.addClass("submenu");
                    btn.addAttribute("data-menu",name.getAttribute("data-menu"));
                    TweenMax.set(btn, {
                        y: yPos_submenu
                    });
                    yPos_submenu += 50;
                }else{
                    TweenMax.set(btn, {
                        y: yPos
                    });
                    yPos += 50;
                    yPos_submenu = yPos;
                }
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