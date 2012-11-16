var area_empty = true;

function setUpBlurMessage(element, message) {
	element.css("color", "#aaa");
	element.css("font-size", "90%");
	element.val(message);	
	
	element.focus(function() {
		if(area_empty) {
			element.val("");
		}
		element.css("color", "#000");
		element.css("font-size", "100%");
		area_empty = false;
	});
	
	element.blur(function() {
		area_empty = element.val().length == 0;
		if(area_empty) {
			element.css("font-size", "90%");
			element.css("color", "#aaa");
			element.val(message);
		}
	});

}	

function setUpSelectAllButton(button, target) {
	button.click(function() {
		if(!target.attr('focus')){
			target.blur();
		}
		else {
			target.focus();
			target.select();
		}
   });
}

function setUpCharacterCount(element, observed) {
	element.html(area_empty?"0":observed.val().replace(/\r/g,'').length);
	observed.keyup(function(event) {
		element.html(area_empty?"0":observed.val().replace(/\r/g,'').length);
	});
}

function setUpToolbarIcons(toolbarIcons) {
	toolbarIcons.mousedown(function() {
		$(this).addClass("mousedown");
	});
	toolbarIcons.mouseup(function() {
		$(this).removeClass("mousedown");
	});
}

function setUpTipTip(tiptipables, tiptipablesSlow) {
	tiptipables.tipTip();
	tiptipablesSlow.tipTip({delay: 600});
}

