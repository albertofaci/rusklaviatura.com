$(document).ready(function() {
	var translit_help_message = "Type the equivalent Latin letter(s) for each Russian sound. Use the panel on the right for help."+
								"\nПечатайте на русском языке латинскими буквами с помощью панели справа.";
	setUpCharacterCount($("#char_count"), $("#textito"));
	setUpBlurMessage($("#textito"),translit_help_message);
	setUpToolbarIcons($('.toolbarIcon'));
	setUpSelectAllButton($("#select_all"),$("#textito"));
	setUpTipTip($(".tiptipable"),$(".tiptipableSlow"));
});

	 
$(document).ready(function() {
	$("#textito").keypress(function(event) {
		anyadir(event);
	});
});

		 
/** Toggle input language */			 
$(document).ready(function() {
	$("#input_lang").click(function() {
		toggleLang(2,$('#textito'));
	});
});

/** Toggle caps */
$(document).ready(function() {
	$(".shiftKey").click(function() {
		toggleCaps();
	});
});

/** Transform abc<->rus */
$(document).ready(function() {
	$("#abc_to_rus").click(function() {
		transformar_seleccion_abc_to_rus();
	});
	$("#rus_to_abc").click(function() {
		transformar_seleccion_rus_to_abc();
	});
});

/** clickable letters */
$(document).ready(function() {
	$('.rus').click(function() {
		addcharFromLetter("textito", $(this).html());
	});
	$('.kbKey').click(function() {
		addcharFromImg("textito", $(this));
	});
	$('.map_kb').maphilight({fillOpacity: 0.1, strokeColor: "#666"});
});
		 
/** help keyboard toggle */		 
$(document).ready(function() {
	$("#container_teclado").hide();
	$("#keyboard").click(function(event) {
		$("#container_teclado").slideToggle(600, function() {
			if ($("#container_teclado").is(':visible')) {
				$("#keyboard").attr("src","images/keyboard_selected.png" );
			} else {
				$("#keyboard").attr("src","images/keyboard.png");
			}
		});
		$("#textito").focus();
	});
});

/** Search from textarea */
$(document).ready(function() {
	$('.doSearch').click(function() {
		var key = $('select#searchDestination').val();
		var term = $("#textito").val();	
		doSearchByKey(key, term);
	});
});
