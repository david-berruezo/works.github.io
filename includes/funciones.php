<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

header("Expires: Tue, 01 Jan 2000 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$url = url_origin($_SERVER);
//$url = "https://github.com/david-berruezo/works.github.io";
//$url = "http://works.github.io//";
//$url = "http://localhosth/works.github.io/";
$url = "http://works.github.io/";

function url_origin( $s, $use_forwarded_host = false )
{
    $ssl      = ( ! empty( $s['HTTPS'] ) && $s['HTTPS'] == 'on' );
    $sp       = strtolower( $s['SERVER_PROTOCOL'] );
    $protocol = substr( $sp, 0, strpos( $sp, '/' ) ) . ( ( $ssl ) ? 's' : '' );
    $port     = $s['SERVER_PORT'];
    $port     = ( ( ! $ssl && $port=='80' ) || ( $ssl && $port=='443' ) ) ? '' : ':'.$port;
    $host     = ( $use_forwarded_host && isset( $s['HTTP_X_FORWARDED_HOST'] ) ) ? $s['HTTP_X_FORWARDED_HOST'] : ( isset( $s['HTTP_HOST'] ) ? $s['HTTP_HOST'] : null );
    $host     = isset( $host ) ? $host : $s['SERVER_NAME'] . $port;
    return $protocol . '://' . $host;
}

/*
 * @param:full_url( $_SERVER );
 */
function full_url( $s, $use_forwarded_host = false )
{
    return url_origin( $s, $use_forwarded_host ) . $s['REQUEST_URI'];
}

function look_for_something_in_url($param){
    $absolute_url = full_url( $_SERVER );
    $found_it = strpos($absolute_url,$param);
    //echo "posicion: ".$found_it."del parametro: ".$param."<br>";
    $found_it ? $found_it = true : $found_it = false;
    return $found_it;
}


function url_semantica($string,$keyReplace="-",$minuscula=true){
    $string    =  RemoveSign($string);
    //neu muon de co dau
    //$string     =  trim(preg_replace("/[^A-Za-z0-9àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠ$
    $string     =  trim(preg_replace("/[^A-Za-z0-9]/i"," ",$string)); // khong dau
    $string     =  str_replace(" ","-",$string);
    $string    =    str_replace("--","-",$string);
    $string    =    str_replace("--","-",$string);
    $string    =    str_replace("--","-",$string);
    $string    =    str_replace($keyReplace,"-",$string);
    $string    =    ($minuscula) ? strtolower($string) : $string;
    return $string;
}

function RemoveSign($str){
	$coDau = array("à","á","ạ","ả","ã","â","ầ","ấ","ậ","ẩ","ẫ","ă",
            "ằ","ắ","ặ","ẳ","ẵ",
            "è","é","ẹ","ẻ","ẽ","ê","ề" ,"ế","ệ","ể","ễ",
            "ì","í","ị","ỉ","ĩ",
            "ò","ó","ọ","ỏ","õ","ô","ồ","ố","ộ","ổ","ỗ","ơ"
            ,"ờ","ớ","ợ","ở","ỡ",
            "ù","ú","ụ","ủ","ũ","ư","ừ","ứ","ự","ử","ữ",
            "ỳ","ý","ỵ","ỷ","ỹ",
            "đ",
            "À","Á","Ạ","Ả","Ã","Â","Ầ","Ấ","Ậ","Ẩ","Ẫ","Ă"
            ,"Ằ","Ắ","Ặ","Ẳ","Ẵ",
            "È","É","Ẹ","Ẻ","Ẽ","Ê","Ề","Ế","Ệ","Ể","Ễ",
            "Ì","Í","Ị","Ỉ","Ĩ",
            "Ò","Ó","Ọ","Ỏ","Õ","Ô","Ồ","Ố","Ộ","Ổ","Ỗ","Ơ"
            ,"Ờ","Ớ","Ợ","Ở","Ỡ",
            "Ù","Ú","Ụ","Ủ","Ũ","Ư","Ừ","Ứ","Ự","Ử","Ữ",
            "Ỳ","Ý","Ỵ","Ỷ","Ỹ",
            "Đ","ê","ù","à",
            "Ñ","ñ"
        );

	$khongDau = array("a","a","a","a","a","a","a","a","a","a","a"
            ,"a","a","a","a","a","a",
            "e","e","e","e","e","e","e","e","e","e","e",
            "i","i","i","i","i",
            "o","o","o","o","o","o","o","o","o","o","o","o"
            ,"o","o","o","o","o",
            "u","u","u","u","u","u","u","u","u","u","u",
            "y","y","y","y","y",
            "d",
            "A","A","A","A","A","A","A","A","A","A","A","A"
            ,"A","A","A","A","A",
            "E","E","E","E","E","E","E","E","E","E","E",
            "I","I","I","I","I",
            "O","O","O","O","O","O","O","O","O","O","O","O"
            ,"O","O","O","O","O",
            "U","U","U","U","U","U","U","U","U","U","U",
            "Y","Y","Y","Y","Y",
            "D","e","u","a",
            "N","n"
        );

    return str_replace($coDau,$khongDau,$str);

}// end function

function quitarAcentos($text)
{
    $text = htmlentities($text, ENT_QUOTES, 'UTF-8');
    $text = strtolower($text);
    $patron = array (
	// Espacios, puntos y comas por guion
	'/[\., ]+/' => '-',

	// Vocales
	'/&agrave;/' => 'a',
	'/&egrave;/' => 'e',
	'/&igrave;/' => 'i',
	'/&ograve;/' => 'o',
	'/&ugrave;/' => 'u',

	'/&aacute;/' => 'a',
	'/&eacute;/' => 'e',
	'/&iacute;/' => 'i',
	'/&oacute;/' => 'o',
	'/&uacute;/' => 'u',

	'/&acirc;/' => 'a',
	'/&ecirc;/' => 'e',
	'/&icirc;/' => 'i',
	'/&ocirc;/' => 'o',
	'/&ucirc;/' => 'u',

	'/&atilde;/' => 'a',
	'/&etilde;/' => 'e',
	'/&itilde;/' => 'i',
	'/&otilde;/' => 'o',
	'/&utilde;/' => 'u',

	'/&auml;/' => 'a',
	'/&euml;/' => 'e',
	'/&iuml;/' => 'i',
	'/&ouml;/' => 'o',
	'/&uuml;/' => 'u',
	'/&auml;/' => 'a',
	'/&euml;/' => 'e',
	'/&iuml;/' => 'i',
	'/&ouml;/' => 'o',
	'/&uuml;/' => 'u',

	// Otras letras y caracteres especiales
        '/&aring;/' => 'a',
	'/&ntilde;/' => 'n',
 	// Agregar aqui mas caracteres si es necesario
    );

    $text = preg_replace(array_keys($patron),array_values($patron),$text);
    return $text;
}

function limpiar_archivo($name)
{
    if(stristr($name, '.jpg'))
    {
        //quitamos la extension al archivo
        $nombre = str_replace('.jpg', '', $name);
        //limpiamos el nombre
        $nombre = url_semantica($nombre);
        //añadimos la extension al archivo
        $nombre = $nombre.'.jpg';
    }
    elseif(stristr($name, '.jpeg'))
    {
        //quitamos la extension al archivo
        $nombre = str_replace('.jpeg', '', $name);
        //limpiamos el nombre
        $nombre = url_semantica($nombre);
        //añadimos la extension al archivo
        $nombre = $nombre.'.jpeg';
    }
    elseif(stristr($name, '.gif'))
    {
        //quitamos la extension al archivo
        $nombre = str_replace('.gif', '', $name);
        //limpiamos el nombre
        $nombre = url_semantica($nombre);
        //añadimos la extension al archivo
        $nombre = $nombre.'.gif';
    }
    elseif(stristr($name, '.png'))
    {
       //quitamos la extension al archivo
        $nombre = str_replace('.png', '', $name);
        //limpiamos el nombre
        $nombre = url_semantica($nombre);
        //añadimos la extension al archivo
        $nombre = $nombre.'.png';
    }
    elseif(stristr($name, '.pdf'))
    {
       //quitamos la extension al archivo
        $nombre = str_replace('.pdf', '', $name);
        //limpiamos el nombre
        $nombre = url_semantica($nombre);
        //añadimos la extension al archivo
        $nombre = $nombre.'.pdf';
    }

    return $nombre;
}

function indexar_array($array,$index){
    if(!is_array($array)) return array($array->$index => $array);
    $return_array = array();
    foreach($array as $data){
        if(is_object($data))
            $return_array[$data->$index] = $data;
        else
            $return_array[$data[$index]]=$data;
    }
    return $return_array;
}

function p2bd($fecha){
    list($iDia,$iMes,$iAnyo)=explode("/",$fecha);
    return date("Y-m-d",mktime(0,0,0,$iMes,$iDia,$iAnyo));
}

function bd2p($fecha){
    list($iAnyo,$iMes,$iDia)=explode("-",$fecha);
    return date("d/m/Y",mktime(0,0,0,$iMes,$iDia,$iAnyo));
}

function interval($fecha_ini,$fecha_fin){
    $datetime1 = new DateTime($fecha_ini);
    $datetime2 = new DateTime($fecha_fin);
    $interval = $datetime1->diff($datetime2);
    $num_dias = $interval->days;
    return $num_dias;
}

function p_() {

    $args = func_get_args();
	$num_args = func_num_args();
	$label = "";

	$font_size = '14';
	$box_size = '10';
	$has_todo = false;
	$bg_color_div = 'white';
	$show_div = true;

	if($num_args>0){
		$last_arg = func_get_arg($num_args-1);
		echo "<div><pre>";
		echo "<div style='margin: 10px; margin-top: 70px; border:0px; padding: 2px;'>";
		$background_color = 'green';
		if(is_string($last_arg) && ($last_arg!="") && substr($last_arg,0,6)==='__lab:'){
			$label = substr($last_arg, 6, strlen($last_arg));
			unset($args[$num_args-1]);
			$label_error = strtolower($label);
			$background_color = '#FF8000';
			if($label_error == 'error' || $label_error == 'exception'){
				$label = 'Exception';
				$background_color = '#C42732';
			}
			if($label_error == 'dev_info'){
				$label = 'Development info';
				$background_color = '#C42732';
				$font_size = '12';
				$box_size = '5';
			}
			if($label_error == 'todo'){
				$label = '!!!!!!!!!! Todo !!!!!!!!!!';
				$background_color = '#f442b0';
				$bg_color_div = '';
				$font_size = '12';
				$box_size = '5';
				$has_todo = true;
			}
			if($label_error == 'empty'){
				$show_div=false;
			}
		}else{
			$label = "PRINT";
		}

		$file_info_used = print_debug('1', false, true);

		// if(is_string($last_arg) && ($last_arg!="") && substr($last_arg,0,4)==='__^:'){
		// 	$key_begins_with = substr($last_arg, 3, strlen($last_arg));
		// 	unset($args[$num_args-1]);
		// 	$label = "BEGINS WITH";
		// }
		if($show_div){
		echo "<div style='margin:10px; margin-bottom:10px;'>".
		"<span style=\"background-color: $background_color; color: white; font-size: 12px; padding: ".$box_size ."px; border: 2px solid black;\"><b>"
		. $label . "</b></span></div>";
		}

		$count = 1;

		foreach($args as $arg){
			if($show_div){
				echo "<div style='margin: 10px 10px 2px 10px; border:2px solid black; padding: 5px; background-color: $bg_color_div;'>";
			}
			if(count($args)>1){
				echo "<span style='font-size: 12px; font-weight: bold; color: red; padding:2px;'>Variable: ".$count."</span></br>";
			}
			if(is_string($arg)){
				if(is_null($arg) || $arg == 'null'){
					echo "<span style='color:red; font-weight: bold; font-size:".$font_size."px;'>".$arg."</span>";
				}else{
					echo "<span style='color:green; font-weight: bold; font-size: ".$font_size."px;'>".$arg."</span>";
				}
			}else{
				print_r($arg);
			}
			if($show_div){
				echo "</div>";
			}
			// echo "<div style=\"height:10px;\"></div>";
			++$count;
		}
		echo "<div style='font-style:italic; padding-left: 10px; font-size: 10px; text-align:right; margin:0px; padding: 0px;'>$file_info_used</div></div>";
		echo "</pre></div>";
		// echo "<br/>";
	}
	return;
}

function print_debug($step_back=2, $fb=false, $file_info_only=false){

    $debug = debug_backtrace();
    $function = $debug[$step_back]['function'];
    $line = isset($debug[$step_back]['line']) ? $debug[$step_back]['line'] : -1;
    $args = isset($debug[$step_back]['args']) ? $debug[$step_back]['args'] : -1;
    $file = isset($debug[$step_back]['file']) ? $debug[$step_back]['file'] : -1;
    if($file_info_only){
    	return $file.' => LINE:'.$line;
    }

    if($fb==false){
	    d_('called function:'.$function);
	    d_('called line:'.$line);
	    d_('called arguments:'.$args);
	    d_('called file:'.$file);
	}else{
		fb_('called function:'.$function);
		fb_('called line:'.$line);
		fb_('called arguments:'.$args);
		fb_('called file:'.$file);
	}
}


/**
 * SEO
 * metakeywords
 * metadescription
 * title 
 */
// all pages
$metakeywords    = array("david berruezo,davidbeerruezo,david berruezo blog, david berruezo linkedin, david berruezo infojobs, CITM UPC, upc, david berruezo upc, david berruezo CITM,doctor berruezo, dberruezo,david-berruezo,javascript programmer, php programmer, fullstackdeveloper, full stack  developer, interactive programmmer, frontend programmer, backend programmer, creative programmer");
$metadescription = array();
$title           = array();

// index
$metadescription[0] = "Summary David Berruezo projects. Enterprise list, cv,skills and much more.";
$title[0]           = "David Berruezo — Summary projects";
// blogdetail
$metadescription[1] = "Summary David Berruezo articles.";
$title[1]           = "David Berruezo — News";
// codeigniter
$metadescription[2] = "Summary David Berruezo codeigniter php framework projects.";
$title[2]           = "David Berruezo — Codeigniter projects";
// ecommerce
$metadescription[3] = "Summary David Berruezo eCommerce Barcelona 360 projects.";
$title[3]           = "David Berruezo — eCommerce Barcelona 360 projects";
// emexs
$metadescription[4] = "Summary David Berruezo Emexs Agency Hotels projects.";
$title[4]           = "David Berruezo — Emexs Agency Hotels projects";
// home
$metadescription[5] = "Summary David Berruezo projects. Enterprise list, cv,skills and much more.";
$title[5]           = "David Berruezo — Summary projects";
// javascript
$metadescription[6] = "Summary David Berruezo javascript | es6 | es7 | projects.";
$title[6]           = "David Berruezo — javascript projects";
// prestashop
$metadescription[7] = "Summary David Berruezo prestashop store projects.";
$title[7]           = "David Berruezo — prestashop projects";
// prestashop
$metadescription[8] = "David Berruezo several projects of different agencies and enterprise.";
$title[8]           = "David Berruezo — projects";
// projectsecommerce
$metadescription[9] = "Explanation David Berruezo eCommerce Barcelona 360 projects";
$title[9]           = "David Berruezo — eCommerce Barcelona 360 projects";
// projectsemexs
$metadescription[10] = "Explanation David Berruezo Emexs Tourism Agency projects";
$title[10]           = "David Berruezo — Emexs Tourism Agency projects";
// projectsofiprix
$metadescription[11] = "Explanation David Berruezo Ofiprix Enterprise projects";
$title[11]           = "David Berruezo — Ofiprix Enterprise projects";
// studies
$metadescription[12] = "Explanation David Berruezo studies";
$title[12]           = "David Berruezo — Studies";
// wordpress
$metadescription[13] = "Explanation David Berruezo Wordpress projects";
$title[13]           = "David Berruezo — Wordpress";
// zend
$metadescription[14] = "Explanation David Berruezo Zend Framework projects";
$title[14]           = "David Berruezo — Zend Framework";
// ofiprix
$metadescription[15] = "Summary David Berruezo Ofiprix best furniture seller projects.";
$title[15]           = "David Berruezo — Ofiprix best furniture seller projects";
// avantio
$metadescription[16] = "Summary David Berruezo Avantio best furniture seller projects.";
$title[16]           = "David Berruezo — Avantio best tourism projects";
?>
