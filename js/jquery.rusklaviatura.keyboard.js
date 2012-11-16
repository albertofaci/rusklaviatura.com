
$(document).ready(function() {
	var keyboard_help_message = "Type as if you were using a standard Russian keyboard. Choose your original keyboard layout from the list."+
								"\nПечатайте как на стандартой русской клавиатуре. Выберите оригинальную раскладку Вашей клавиатуры из списка.";
	setUpCharacterCount($("#char_count"), $("#textito_kb"));
	setUpBlurMessage($("#textito_kb"),keyboard_help_message);	
	setUpToolbarIcons($('.toolbarIcon'));
	setUpSelectAllButton($("#select_all"),$("#textito_kb"));
	setUpTipTip($(".tiptipable"),$(".tiptipableSlow"));
});

$(document).ready(function() {
	$('#entry_kb').val("gb").attr('selected',true);
	setCurrentKeyboardLang("gb");
	updateCurrentKeyboardLayout();
	$('#entry_kb').change(function() {
		 $("#entry_kb option:selected").each(function () {
			setCurrentKeyboardLang( $(this).val() );
			updateCurrentKeyboardLayout();
		});
	});
});

$(document).ready(function() {
	$("#textito_kb").keypress(function(event) {
		anyadir_kb(event);
	});
});
		 
/** toggle input keyboard */			 
$(document).ready(function() {
	$("#input_lang").click(function() {
		toggleLang(2,$('#textito_kb'));
		updateCurrentKeyboardLayout();
	});
	$(".langKey_abc").click(function() {
		toggleLang(0,$('#textito_kb'));
		updateCurrentKeyboardLayout();
	});
	$(".langKey_rus").click(function() {
		toggleLang(1,$('#textito_kb'));
		updateCurrentKeyboardLayout();
	});
	
});
		
/** clickable letters */
$(document).ready(function() {
	$('.kbKey').click(function() {
		if(cirilico) {
			addcharFromImg("textito_kb", $(this));
		}
	});
	$('.map_kb_kb').maphilight({fillOpacity: 0.1, strokeColor: "#666"});
});

/** Search from textarea */
$(document).ready(function() {
	$('.doSearch').click(function() {
		var key = $('select#searchDestination').val();
		var term = $("#textito_kb").val();	
		doSearchByKey(key, term);
	});
});
