// domain name
var domain  	    = location.protocol+'//'+document.domain;
var domain_cookie   = document.domain;
var protocol        = window.location.protocol;
var host            = window.location.host;
var pathname        = window.location.pathname;
var location_search = window.location.search;

// local
//domain = "http://works.github.io/";
//domain = "http://davidberruezo.net";
//domain = "http://localhosth/works.github.io";
domain = "http://works.github.io";
//domain = "https://www.davidberruezo.com";

// get parametters by GET
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


/*
 * Function to set and get cookies (FUNCTIONS:)
 * setCookie, getCookie, checkCookie, pre_set_cookie, $(".btn-borde-rojo").submit
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    //return "";
    return null;
}

function checkCookie() {
    var variable = getCookie("ofiprix");
    if (variable != "") {
        // ya tiene cookies
    } else {
        // jQuery('.modal-cookies').modal('show');
        $('.modal-cookies').modal('show');
    }
}


// Write cookie
function write_cookie(){
    document.cookie = "new_cookie=value_cookie;domain=."+document.domain+";path=/";
}

// read cookie
function read_cookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}


/*
 * Function to validate email
 * boton_newsletter
 * formulario-newsletter
 */

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate(email) {
    if (validateEmail(email)) {
        // Enviamos formulario
    } else {
        // no es válido, por favor vuelve a escribirlo");
    }
    return false;
};
