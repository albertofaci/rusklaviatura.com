/*******************************************************************************
**  Rusklaviatura.js
**  				(c) Rusklaviatura.com 
**
**  All rights reserved except extensions insertAtCaret, maphilight, tipTip
********************************************************************************

/** 1 char tansliteration */
t1 = new Array();
t1["'"] = "ь";
t1["#"] = "ъ";
t1["a"] = "а";
t1["b"] = "б";
t1["c"] = "ц";
t1["d"] = "д";
t1["e"] = "е";
t1["f"] = "ф";
t1["g"] = "г";
t1["h"] = "х";
t1["i"] = "и";
t1["j"] = "й";
t1["k"] = "к";
t1["l"] = "л";
t1["m"] = "м";
t1["n"] = "н";
t1["o"] = "о";
t1["p"] = "п";
t1["q"] = "ъ";
t1["r"] = "р";
t1["s"] = "с";
t1["t"] = "т";
t1["u"] = "у";
t1["v"] = "в";
t1["w"] = "в";
t1["x"] = "х";
t1["y"] = "ы";
t1["z"] = "з";
t1["ä"] = "э";
t1["ë"] = "ё";

/** 2 char combos */
t2 = new Array();
t2["цх"] = "ч";
t2["сх"] = "ш";
t2["шх"] = "щ";
t2["зх"] = "ж";
t2["йа"] = "я";
t2["йе"] = "э";
t2["йо"] = "ё";
t2["йу"] = "ю";
t2["ыа"] = "я";
t2["ыо"] = "ё";
t2["ыу"] = "ю";
t2["+у"] = "у";
t2["+о"] = "о";
t2["+е"] = "е";
t2["+а"] = "а";
t2["+а"] = "а";
t2["+с"] = "с";
t2["+х"] = "х";
t2["ъq"] = "Ъ";
t2["ъ#"] = "Ъ";
t2["+ь"] = "ь";
t2["ьь"] = "ъ";

/** 3 char combos */
t3 = new Array();
t3["шцх"] = "щ";

/** inverse transliteration */
t4 = new Array();
t4["а"] = "a";
t4["б"] = "b";
t4["в"] = "v";
t4["г"] = "g";
t4["д"] = "d";
t4["е"] = "e";
t4["ë"] = "yo";
t4["ж"] = "zh";
t4["з"] = "z";
t4["и"] = "i";
t4["й"] = "j";
t4["к"] = "k";
t4["л"] = "l";
t4["м"] = "m";
t4["н"] = "n";
t4["о"] = "o";
t4["п"] = "p";
t4["р"] = "r";
t4["с"] = "s";
t4["т"] = "t";
t4["у"] = "u";
t4["ф"] = "f";
t4["х"] = "x";
t4["ц"] = "c";
t4["ч"] = "ch";
t4["ш"] = "sh";
t4["щ"] = "shh";
t4["ъ"] = "''";
t4["ы"] = "y";
t4["ь"] = "'";
t4["э"] = "ä";
t4["ю"] = "yu";
t4["я"] = "ya";

/** keyboard correspondences (GB) */
t6 = new Array();
t6["a"] = "ф";
t6["b"] = "и";
t6["c"] = "с";
t6["d"] = "в";
t6["e"] = "у";
t6["f"] = "а";
t6["g"] = "п";
t6["h"] = "р";
t6["i"] = "ш";
t6["j"] = "о";
t6["k"] = "л";
t6["l"] = "д";
t6["m"] = "ь";
t6["n"] = "т";
t6["o"] = "щ";
t6["p"] = "з";
t6["q"] = "й";
t6["r"] = "к";
t6["s"] = "ы";
t6["t"] = "е";
t6["u"] = "г";
t6["v"] = "м";
t6["w"] = "ц";
t6["x"] = "ч";
t6["y"] = "н";
t6["z"] = "я";

t6["["] = "х";
t6["]"] = "ъ";
t6[";"] = "ж";
t6["'"] = "э";
t6[","] = "б";
t6["."] = "ю";
t6["/"] = ".";
t6["`"] = "ё";

t6["{"] = "Х";
t6["}"] = "Ъ";
t6[":"] = "Ж";
t6["@"] = "Э";
t6["<"] = "Б";
t6[">"] = "Ю";
t6["?"] = ".";
t6["¬"] = "Ё";

t6["£"] = "№";
t6["$"] = ";";
t6["^"] = ":";
t6["&"] = "?";

/** keyboard correspondences (German specific) */
t6de = new Array();
t6de["y"] = "я";
t6de["z"] = "н";
t6de["ü"] = "х";
t6de["+"] = "ъ";
t6de["ö"] = "ж";
t6de["ä"] = "э";
t6de["º"] = "ё";

/** keyboard correspondences (Spanish specific) */
t6es = new Array();
t6es["`"] = "х";
t6es["+"] = "ъ";
t6es["ñ"] = "ж";
t6es["´"] = "э";
t6es["º"] = "ё";

/** language-specific keyboard correspondences */
t6langs = new Array();
t6langs["de"] = t6de;
t6langs["es"] = t6es;

/** transliteration table contents*/
t7 = new Array();
t7["rus_a"] 	= new Array ('a', 'A', 'а', 'А');
t7["rus_be"] 	= new Array ('b', 'B', 'б', 'Б');
t7["rus_ve"] 	= new Array ('v|w', 'V|W', 'в', 'В');
t7["rus_ge"] 	= new Array ('g', 'G', 'г', 'Г');
t7["rus_de"] 	= new Array ('d', 'D', 'д', 'Д'); 
t7["rus_ye"] 	= new Array ('e', 'E', 'е', 'Е'); 
t7["rus_yo"] 	= new Array ('jo|yo|ë', 'Jo|Yo|Ë', 'ё', 'Ё');
t7["rus_zhe"] 	= new Array ('zh', 'Zh', 'ж', 'Ж');
t7["rus_ze"] 	= new Array ('z', 'Z', 'з', 'З'); 
t7["rus_i"] 	= new Array ('i', 'I', 'и', 'И'); 
t7["rus_ikratkoe"] = new Array ('j', 'J', 'й', 'Й'); 
t7["rus_ka"] 	= new Array ('k', 'K', 'к', 'К');
t7["rus_el"] 	= new Array ('l', 'L', 'л', 'Л'); 
t7["rus_em"] 	= new Array ('m', 'M', 'м', 'М'); 
t7["rus_en"] 	= new Array ('n', 'N', 'н', 'Н'); 
t7["rus_o"] 	= new Array ('o', 'O', 'о', 'О'); 
t7["rus_pe"] 	= new Array ('p', 'P', 'п', 'П'); 
t7["rus_er"] 	= new Array ('r', 'R', 'р', 'Р'); 
t7["rus_es"] 	= new Array ('s', 'S', 'с', 'C'); 
t7["rus_te"] 	= new Array ('t', 'T', 'т', 'Т'); 
t7["rus_u"] 	= new Array ('u', 'U', 'у', 'У'); 
t7["rus_ef"] 	= new Array ('f', 'F', 'ф', 'Ф'); 
t7["rus_ha"] 	= new Array ('h|x', 'H|X', 'х', 'Х'); 
t7["rus_tse"] 	= new Array ('c', 'C', 'ц', 'Ц');
t7["rus_che"] 	= new Array ('ch', 'Ch', 'ч', 'Ч'); 
t7["rus_sha"] 	= new Array ('sh', 'Sh', 'ш', 'Ш'); 
t7["rus_shcha"] = new Array ('shh|shch', 'Shh|Shch', 'щ', 'Щ');
t7["rus_tznak"] = new Array ("' '|#|q", "' '|#|Q", 'ъ', 'Ъ');
t7["rus_y"] 	= new Array ('y', 'Y', 'ы', 'Ы');
t7["rus_mznak"] = new Array ("'", "'", 'ь', 'Ь');
t7["rus_ae"] 	= new Array ('je|ä', 'Je|Ä', 'э', 'Э');
t7["rus_yu"] 	= new Array ('ju|yu|ü', 'Ju|Yu|Ü', 'ю', 'Ю');
t7["rus_ya"] 	= new Array ('ja|ya', 'Ja|Ya', 'я', 'Я');
t7["rus_io"] 	= new Array ('j+o', 'J+O', 'йо', 'ЙО');

/** contents of maps of helper keyboard  */
t8 = new Array();
t8["kbKey_num_0"]  = ['`','¬','ё','Ё'];
t8["kbKey_num_3"]  = ['3','3','№','№'];

t8["kbKey_top_0"]  = ['q','Q','й','Й'];
t8["kbKey_top_1"]  = ['w','W','ц','Ц'];
t8["kbKey_top_2"]  = ['e','E','у','У'];
t8["kbKey_top_3"]  = ['r','R','к','К'];
t8["kbKey_top_4"]  = ['t','T','е','Е'];
t8["kbKey_top_5"]  = ['y','Y','н','Н'];
t8["kbKey_top_6"]  = ['u','U','г','Г'];
t8["kbKey_top_7"]  = ['I','I','ш','Ш'];
t8["kbKey_top_8"]  = ['o','O','щ','Щ'];
t8["kbKey_top_9"]  = ['p','P','з','З'];
t8["kbKey_top_10"] = ['[','{','х','Х'];
t8["kbKey_top_11"] = [']','}','ъ','Ъ'];

t8["kbKey_mid_1"] = ['a','A','ф','Ф']; 
t8["kbKey_mid_2"] = ['s','S','ы','Ы'];
t8["kbKey_mid_3"] = ['d','D','в','В'];
t8["kbKey_mid_4"] = ['f','F','а','А'];
t8["kbKey_mid_5"] = ['g','G','п','П'];
t8["kbKey_mid_6"] = ['h','H','р','Р'];
t8["kbKey_mid_7"] = ['j','J','о','О'];
t8["kbKey_mid_8"] = ['k','K','л','Л'];
t8["kbKey_mid_9"] = ['l','L','д','Д'];
t8["kbKey_mid_10"] = [';',':','ж','Ж'];
t8["kbKey_mid_11"] = ["'",'@','э','Э'];

t8["kbKey_bot_1"] = ['z','Z','я','Я']; 
t8["kbKey_bot_2"] = ['x','X','ч','Ч']; 
t8["kbKey_bot_3"] = ['c','C','с','С']; 
t8["kbKey_bot_4"] = ['v','V','м','М']; 
t8["kbKey_bot_5"] = ['b','B','и','И']; 
t8["kbKey_bot_6"] = ['n','N','т','Т']; 
t8["kbKey_bot_7"] = ['m','M','ь','Ь']; 
t8["kbKey_bot_8"] = [',','<','б','Б']; 
t8["kbKey_bot_9"] = ['.','>','ю','Ю']; 
t8["kbKey_bot_10"] = ['/','?','.',',']; 

/** Patterns for search engines */
TERM_PLACEHOLDER = "$$term$$";
searchPattern = new Array();
searchPattern["multitranEN"] = "http://www.multitran.ru/c/m.exe?CL=1&s="+TERM_PLACEHOLDER+"&l1=1";
searchPattern["multitranDE"] = "http://www.multitran.ru/c/m.exe?CL=1&s="+TERM_PLACEHOLDER+"&l1=3";
searchPattern["multitranFR"] = "http://www.multitran.ru/c/m.exe?CL=1&s="+TERM_PLACEHOLDER+"&l1=4";
searchPattern["multitranES"] = "http://www.multitran.ru/c/m.exe?CL=1&s="+TERM_PLACEHOLDER+"&l1=5";
searchPattern["googleRU"] = "http://www.google.ru/search?q="+TERM_PLACEHOLDER;
searchPattern["googleMaps"] = "http://maps.google.ru/maps?f=q&source=s_q&hl=ru&geocode=&q="+TERM_PLACEHOLDER;
searchPattern["wikipediaRU"] = "http://ru.wikipedia.org/wiki/"+TERM_PLACEHOLDER;
searchPattern["yandex"] = "http://yandex.ru/yandsearch?text="+TERM_PLACEHOLDER;
searchPattern["rambler"] = "http://nova.rambler.ru/search?&query="+TERM_PLACEHOLDER;
searchPattern["yahoo"] = "http://ru.search.yahoo.com/search?p="+TERM_PLACEHOLDER;
searchPattern["amazon"] = "http://www.amazon.com/s/ref=nb_sb_noss?field-keywords="+TERM_PLACEHOLDER;
searchPattern["ozon"] = "http://www.ozon.ru/?context=search&text="+TERM_PLACEHOLDER;

/** toggle keyboard layouts by country */
kb_layouts = new Array();
kb_layouts["gb"] = ['images/keyboards/kb_gb_rus.png','images/keyboards/kb_gb_abc.png'];
kb_layouts["us"] = ['images/keyboards/kb_us_rus.png','images/keyboards/kb_us_abc.png'];
kb_layouts["de"] = ['images/keyboards/kb_de_rus.png','images/keyboards/kb_de_abc.png'];
kb_layouts["fr"] = ['images/keyboards/kb_fr_rus.png','images/keyboards/kb_fr_abc.png'];
kb_layouts["es"] = ['images/keyboards/kb_es_rus.png','images/keyboards/kb_es_abc.png'];
kb_layouts["pl"] = ['images/keyboards/kb_pl_rus.png','images/keyboards/kb_pl_abc.png'];

/** Global varialbes (... I know...) */
var fuenteheight = 9;
var fuentewidth = 7;
var cirilico = true; 
var caseLowerKeyboard = true;
var currentKeyboardLang = "";
var scrollPos = 0;

function setCurrentKeyboardLang(lang) {
	currentKeyboardLang = lang;
}

function updateCurrentKeyboardLayout() {
	$("#kb_layout").attr("src", kb_layouts[currentKeyboardLang][cirilico?0:1]);
	/** for maphilight*/
	$('div.map_kb_kb').css('background', 'url('+kb_layouts[currentKeyboardLang][cirilico?0:1]+')');
}

function isUpperCase(letra) { 
	if( letra == "+" )	return "?";
	else if( (letra == letra.toLowerCase()) || (letra == "#") || (letra == "'")) return "n";
	else if(letra == letra.toUpperCase()) return "y";
	else return "?";
}

function saveScrollPos(area) {
	scrollPos = area.attr("scrollTop");
}		

function restoreScrollPos(area) {
	area.attr("scrollTop", scrollPos);
} 

var ESC_CODE = 27;

function isCtrlAltCmdPressed(e) { 
    var ctrl = null;
    if (window.event) ctrl = (window.event.ctrlKey || window.event.altKey);
    else if (e) ctrl=(e.metaKey || e.ctrlKey);
    else if (e) ctrl=(Event.META_MASK || Event.CTRL_MASK || Event.ALT_MASK);
	return ctrl;
  } 

function isPrintableCharacter(code) {
	return code >= 33;
}

function anyadir_kb(evnt) {
	var codigo = void 0;	
	codigo = evnt.which;
	if( ""+evnt.keyCode == ESC_CODE) {
		toggleLang(2,$('#textito_kb'));	
	}		
	else if( !cirilico ) {
		return false;
	}
	else if (isPrintableCharacter(codigo) && !isCtrlAltCmdPressed(evnt)) 
	{
    	var letra = String.fromCharCode(codigo);
		evnt.preventDefault(); // <- aqui esá el error, explorer no entiende esto
		saveScrollPos($("#textito_kb"));

		var anterior = getTextBeforeSelection($('#textito_kb'));
		var posterior = getTextAfterSelection($('#textito_kb'));
		
    	//if(codigo < 300){
    		var nueva_letra = translateCharKeyboard(letra);	
    	//}
    	var nuevo_anterior = anterior+nueva_letra;
		
		if(testIsFF($("#textito_kb"))) {
			$("#textito_kb").val(nuevo_anterior+posterior); 
		}
		else {
			with(document.selection.createRange()) {
				select();
				text = nuevo_anterior;
				collapse();
			}	
		}		
		
		setSelectionRange($("#textito_kb"),nuevo_anterior.length,nuevo_anterior.length);
		restoreScrollPos($("#textito_kb"));
		$("#textito_kb").focus();  		
	}
	return false;
}	
		 
function anyadir(evnt) {		
	var codigo = void 0;	
	codigo = evnt.which;
	if( ""+evnt.keyCode == ESC_CODE){
		//ESC: toggle lang
		toggleLang(2, $('#textito'));		
	}
	else if( !cirilico ) { //do nothing if latin
		return false;
	}
	else if (isPrintableCharacter(codigo) && !isCtrlAltCmdPressed(evnt)) 
	{
    	var letra = String.fromCharCode(codigo);

		evnt.preventDefault(); // <- aqui está el error, explorer no entiende esto
		saveScrollPos($("#textito"));

		var anterior = getTextBeforeSelection($('#textito'));
		var posterior = getTextAfterSelection($('#textito'));

    	if(codigo < 300){
    		var nueva_letra = translateCharTranslit(letra);    			
    		var nuevo_anterior = adaptar(anterior, nueva_letra, letra);    		
    	}
    	else {
			var nuevo_anterior = anterior+letra;
		}
    	
		if(testIsFF($("#textito"))) {
			$("#textito").val(nuevo_anterior+posterior); 
		}
		else {
			with(document.selection.createRange()) {
				select();
				text = nuevo_anterior;
				collapse();
			}	
		}		
		setSelectionRange($("#textito"),nuevo_anterior.length,nuevo_anterior.length);
		restoreScrollPos($("#textito"));
		$("#textito").focus();	
	}
	return false;
}

function setSelectionRange(jqueryElement, ini_pos, end_pos) {
	if(testIsFF(jqueryElement)) {
		jqueryElement[0].setSelectionRange(ini_pos,end_pos);
	}
	else {
		var sel = document.getSelection();
		var range = document.createRange();
		range.setStart( ini_pos, end_pos );
	}
}

function testIsFF(jqueryElement) {
	return jqueryElement.attr('selectionStart') || jqueryElement.attr('selectionStart') == '0';
}

function getTextBeforeSelection(jqueryElement) {
	if(testIsFF(jqueryElement)) {
		return jqueryElement.val().substring(0,jqueryElement.attr('selectionStart')); 	
	}
	else {
		with(document.selection.createRange()) {
			text = '';
			collapse();
		}	
		selection = document.selection.createRange();
		selection.select();
		selection.text = '%';
		selection.moveStart("word",-2);
		anterior = selection.text.substring(0,selection.text.length-1);
		selection.text = '';
		selection.collapse();
		return anterior;
	}	
}

function getTextAfterSelection(jqueryElement) {
	if(testIsFF(jqueryElement)) {
		//firefox & chrome
		return jqueryElement.val().substring(jqueryElement.attr('selectionEnd')); 	
	}
	else {
		//ie, do nothing
		return ""
	}	
}

function getTextSelection(jqueryElement) {
	return jqueryElement.val().substring(jqueryElement.attr('selectionStart'),jqueryElement.attr('selectionEnd')); 	
}


function translateCharTranslit(letra) {
 		var upcase = isUpperCase(letra);
 		letra = letra.toLowerCase();
		var old_letra = letra;
		if( t1[letra] ) letra = t1[letra];
			else letra = old_letra;
		if(upcase == "y") letra = letra.toUpperCase();
		return letra;
}

function translateCharKeyboard(letra) {
 		var upcase = isUpperCase(letra);
		if( t6WithLang(letra) ) {
				return t6WithLang(letra);
		}
		var lowletra = letra.toLowerCase();
		if( t6WithLang(lowletra) ) letra = t6WithLang(lowletra);
		if(upcase == "y") letra = letra.toUpperCase();
		return letra;
}

function t6WithLang(letra) {
	if( t6langs[currentKeyboardLang] && t6langs[currentKeyboardLang][letra] ) {
		return t6langs[currentKeyboardLang][letra] ;
	}
	else {
		return t6[letra];
	}
}

function translateCharInverse(letra) {
 		var upcase = isUpperCase(letra);
 		letra = letra.toLowerCase();
		var old_letra = letra;
		if( t4[letra] ) letra = t4[letra];
			else letra = old_letra;
		if(upcase == "y") letra = letra.toUpperCase();
		return letra;
}

function adaptar(anterior, nletra, letra) {
	len = anterior.length;
	if(len < 1) return anterior+nletra;
	var pletra = anterior.charAt(len-2); /*penultima*/
	var uletra = anterior.charAt(len-1); /*ultima*/
	var uupcase = isUpperCase(uletra);	
	var nupcase = isUpperCase(nletra);
	var par = uletra.toLowerCase()+nletra.toLowerCase();
	var trio = pletra.toLowerCase()+par;

	if( ((nletra == "ъ") || (nletra =="ь")) && (uupcase == "y") )
			nletra = nletra.toUpperCase();		
	if( ((uletra == "Ъ") || (uletra == "Ь" )) && (nupcase == "n"))
			anterior = anterior.substring(0,len-1)+uletra.toLowerCase();
	
	if( t3[trio] )
	{
		if(uupcase == "y")  return anterior.substring(0,len-2)+ t3[trio].toUpperCase();
		if(uupcase == "n")  return anterior.substring(0,len-2)+ t3[trio];
		else  
		{
				if(nupcase == "y")
					 return anterior.substring(0,len-2)+ t3[trio].toUpperCase();
				else return anterior.substring(0,len-2)+ t3[trio];
		}		
	}
	else if( t2[par] && (letra.toLowerCase() != "x") )
	{
		if(uupcase == "y")  return anterior.substring(0,len-1)+ t2[par].toUpperCase();
		if(uupcase == "n")  return anterior.substring(0,len-1)+ t2[par];
		else  
		{
				if(nupcase == "y")
					 return anterior.substring(0,len-1)+ t2[par].toUpperCase();
				else return anterior.substring(0,len-1)+ t2[par];
		}		
	}
	else return anterior+nletra;
}


function transformar_seleccion_abc_to_rus() {
	transformar_seleccion(true);
}

function transformar_seleccion_rus_to_abc() {
	transformar_seleccion(false);
}

function transformar_seleccion(abc_to_rus) {
	saveScrollPos($("#textito"));
	var pos_start_selection = $("#textito").attr("selectionStart");
	var pos_end_selection = $("#textito").attr("selectionEnd");
	var size = $("#textito").val().length;
	var replace = "";
	var original = $("#textito").val().substring(pos_start_selection, pos_end_selection);
	for(i=0;i<=pos_end_selection-pos_start_selection;i++) {
		letra = original.charAt(i);
		if(abc_to_rus) {
			var nueva_letra = translateCharTranslit(letra);    			
			replace = adaptar(replace, nueva_letra, letra); 
		} 
		else { //rus_to_abc
			var nueva_letra = translateCharInverse(letra);
			replace += nueva_letra;
		}
		
	}
	$("#textito").val($("#textito").val().substring(0,pos_start_selection)
						+ replace +
						$("#textito").val().substring(pos_end_selection+1,size));
	$("#textito").focus();	
	restoreScrollPos($("#textito"));	
}



jQuery.fn.extend({
	insertAtCaret: function(myValue){
		//alert(myValue);
		return this.each(function(i) {
			if (document.selection) {
				//alert(myValue);
				this.focus();
				sel = document.selection.createRange();
				sel.text = myValue;
				this.focus();
			}
			else if (this.selectionStart || this.selectionStart == '0') {
				//alert(myValue);
				var startPos = this.selectionStart;
				var endPos = this.selectionEnd;
				var scrollTop = this.scrollTop;
				this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
				this.focus();
				this.selectionStart = startPos + myValue.length;
				this.selectionEnd = startPos + myValue.length;
				this.scrollTop = scrollTop;
			} else {
				this.value += myValue;
				this.focus();
			}
		})
	}
});

function addcharFromImg(destinoId, imgArea) {
	var id = imgArea.attr('id');
	if(t8[id]){
		addchar(destinoId, t8[id][caseLowerKeyboard?2:3]);	
	}
}

function addcharFromLetter(destinoId,letra) {
    if(caseLowerKeyboard) {        
        addchar(destinoId, letra);
    }
    else {
        addchar(destinoId, letra.toUpperCase());
    }
}

function addchar(destinoId, letra,evnt) {
   $('#'+destinoId).insertAtCaret(letra);
}

function toggleCaps() {

	if(caseLowerKeyboard) {
		$('#glossa_shift').attr('src', 'images/shift_up.png');
		$('#kb_layout_index').attr('src', 'images/keyboards/kb_rus_shift.png');
		//for maphilight
		$('div.map_kb').css('background', 'url("images/keyboards/kb_rus_shift.png")');
				
		$('td.char').each(function() {
			$(this).html($(this).html().toUpperCase());
		});
		$('.rus').each(function() {
			var id = $(this).attr('id');
			$(this).html(t7[id][3]);  
			$("#abc_"+id).html(t7[id][1]);  
		});	

	}
	else {
		$('#glossa_shift').attr('src', 'images/shift.png');
		$('#kb_layout_index').attr('src', 'images/keyboards/kb_rus.png');
		//for maphilight
		$('div.map_kb').css('background', 'url("images/keyboards/kb_rus.png")');
		
		$('td.char').each(function() {
			$(this).html($(this).html().toLowerCase());
		});
		$('.rus').each(function() {
			var id = $(this).attr('id');
			$(this).html(t7[id][2]);  
			$("#abc_"+id).html(t7[id][0]);  
		});	
		
	}
   caseLowerKeyboard = !caseLowerKeyboard;
}

function initTransliterationTable() {
		$('.rus').each(function() {
			var id = $(this).attr('id');
			$(this).html(t7[id][2]);  
			$("#abc_"+id).html(t7[id][0]);  
		});	
}


function cuentalineas(anterior) {
	var enters = 0;
	var cuenta = 0;
	var i = 0;
	while (i < anterior.length) {
		if( anterior[i] == "\n" ) enters++;
		cuenta++;
		if( cuenta*fuentewidth >= $('#textito').attr('clientHeight')){
			cuenta = 0;
			enters++;	
		}
		i++;			
	}
	return enters;
}

var CHANGE_CYRILLIC = 1;
var CHANGE_LATIN = 0;

function toggleLang(arg, area){
	if( arg == 0 ){  //force lat
		cirilico = false;
		$("#input_lang").attr('src',"images/switch_abc.png");
	}
	else if( arg == 1){  //force cyr
		cirilico = true;
		$("#input_lang").attr('src',"images/switch_rus.png");
	}
	else { //toggle
		cirilico = !cirilico;
		toggleLang(cirilico, area);		
	}
	area.focus();
	return true;
}
 
 function doSearchByKey(key, term) {
	var pattern = searchPattern[key];
	if(pattern) {
		window.open(pattern.replace(TERM_PLACEHOLDER, encodeURIComponent(term)), '_newtab');
	}
	
 }


