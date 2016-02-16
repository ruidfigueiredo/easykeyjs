(function($){
	$.easyKey = $.easyKey || {};
	$.easyKey.keyCodes =  $.easyKey.keyCodes || { 
		"backspace":8,
		"tab":9,
		"enter":13,
		"shift":16,
		"ctrl":17,
		"alt":18,
		"pause_break":19,
		"caps_lock":20,
		"escape":27,
		"page_up":33,
		"page_down":34,
		"end":35,
		"home":36,
		"left_arrow":37,
		"up_arrow":38,
		"right_arrow":39,
		"down_arrow":40,
		"insert":45,
		"delete":46,
		"0":48,
		"1":49,
		"2":50,
		"3":51,
		"4":52,
		"5":53,
		"6":54,
		"7":55,
		"8":56,
		"9":57,
		"a":65,
		"b":66,
		"c":67,
		"d":68,
		"e":69,
		"f":70,
		"g":71,
		"h":72,
		"i":73,
		"j":74,
		"k":75,
		"l":76,
		"m":77,
		"n":78,
		"o":79,
		"p":80,
		"q":81,
		"r":82,
		"s":83,
		"t":84,
		"u":85,
		"v":86,
		"w":87,
		"x":88,
		"y":89,
		"z":90,
		"left_window_key":91,
		"right_window_key":92,
		"select_key":93,
		"numpad_0":96,
		"numpad_1":97,
		"numpad_2":98,
		"numpad_3":99,
		"numpad_4":100,
		"numpad_5":101,
		"numpad_6":102,
		"numpad_7":103,
		"numpad_8":104,
		"numpad_9":105,
		"multiply":106,
		"add":107,
		"subtract":109,
		"decimal_point":110,
		"divide":111,
		"f1":112,
		"f2":113,
		"f3":114,
		"f4":115,
		"f5":116,
		"f6":117,
		"f7":118,
		"f8":119,
		"f9":120,
		"f10":121,
		"f11":122,
		"f12":123,
		"num_lock":144,
		"scroll_lock":145,
		"semi_colon,":186,
		"equal_sign":187,
		"comma":188,
		"dash":189,
		"period":190,
		"forward_slash":191,
		"grave_accent":192,
		"open_bracket":219,
		"back_slash":220,
		"close_braket":221,
		"single_quote":222 };


	$.easyKey.options = {
		onKeyDown : 1,
		onKeyUp: 2,
		withShiftPressed: 4,
		withControlPressed: 8
	};
	

	$.fn.onkey = function(whichKey, onKey, options){		
		var hasOption = function(option){
			if (option == void 0) throw new Error("No option was specified");
			return (options & option) === option;	
		};

		var shouldHandleKey = function(event, keyCodeToHandle){
			var keyPressedCode = event.which;

			if (keyPressedCode != keyCodeToHandle)
				return false;			

			if (hasOption($.easyKey.options.withShiftPressed) && !event.shiftKey) 
				return false;

			if (hasOption($.easyKey.options.withControlPressed) && !event.ctrlKey)
				return false;

			if (!hasOption($.easyKey.options.withShiftPressed) && event.shiftKey)
				return false;

			if (!hasOption($.easyKey.options.withControlPressed) && event.ctrlKey)
				return false;

			return true;
		};

		if (options == void 0)
			options = $.easyKey.options.onKeyDown;

		this.each(function(){
			if (hasOption($.easyKey.options.onKeyDown)){
				$(this).keydown(function(e){					
					if (shouldHandleKey(e, whichKey)){
						onKey.call(this, e);
					}
				});
			}
			if (hasOption($.easyKey.options.onKeyUp)){
				$(this).keyup(function(e){
					if (shouldHandleKey(e, whichKey)){
						onKey.call(this, e);
					}
				});				
			}
		});
		return this;
	};

	$.fn.onBackspaceKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.backspace, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onTabKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.tab, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onEnterKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.enter, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onShiftKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.shift, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onCtrlKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.ctrl, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onAltKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.alt, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onPauseBreakKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.pause_break, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onCapsLockKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.caps_lock, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onEscapeKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.escape, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onPageUpKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.page_up, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onPageDownKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.page_down, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onEndKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.end, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onHomeKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.home, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onLeftArrowKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.left_arrow, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onUpArrowKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.up_arrow, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onRightArrowKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.right_arrow, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onDownArrowKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.down_arrow, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onInsertKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.insert, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onDeleteKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.delete, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on0KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["0"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on1KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["1"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on2KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["2"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on3KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["3"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on4KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["4"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on5KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["5"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on6KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["6"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on7KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["7"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on8KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["8"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.on9KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["9"], onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onAKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.a, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onBKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.b, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onCKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.c, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onDKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.d, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onEKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.e, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onFKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onGKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.g, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onHKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.h, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onIKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.i, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onJKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.j, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onKKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.k, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onLKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.l, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onMKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.m, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.n, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onOKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.o, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onPKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.p, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onQKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.q, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onRKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.r, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onSKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.s, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onTKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.t, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onUKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.u, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onVKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.v, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onWKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.w, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onXKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.x, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onYKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.y, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onZKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.z, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onLeftWindowKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.left_window_key, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onRightWindowKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.right_window_key, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onSelectKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.select_key, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad0KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_0, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad1KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_1, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad2KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_2, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad3KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_3, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad4KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_4, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad5KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_5, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad6KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_6, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad7KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_7, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad8KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_8, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad9KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_9, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onMultiplyKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.multiply, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onAddKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.add, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onSubtractKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.subtract, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onDecimalPointKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.decimal_point, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onDivideKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.divide, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF1KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f1, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF2KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f2, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF3KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f3, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF4KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f4, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF5KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f5, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF6KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f6, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF7KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f7, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF8KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f8, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF9KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f9, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF10KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f10, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF11KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f11, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onF12KeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f12, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumLockKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.num_lock, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onScrollLockKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.scroll_lock, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onSemiColonKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.semi_colon, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onEqualSignKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.equal_sign, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onCommaKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.comma, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onDashKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.dash, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onPeriodKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.period, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onForwardSlashKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.forward_slash, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onGraveAccentKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.grave_accent, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onOpenBracketKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.open_bracket, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onBackSlashKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.back_slash, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onCloseBraketKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.close_braket, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }
	$.fn.onSingleQuoteKeyDown = function(onKeyDownHanlder, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.single_quote, onKeyDownHanlder, $.easyKey.options.onKeyDown | options); }

	$.fn.onBackspaceKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.backspace, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onTabKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.tab, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEnterKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.enter, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onShiftKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.shift, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCtrlKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.ctrl, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onAltKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.alt, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPauseBreakKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.pause_break, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCapsLockKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.caps_lock, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEscapeKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.escape, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPageUpKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.page_up, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPageDownKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.page_down, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEndKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.end, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onHomeKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.home, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onLeftArrowKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.left_arrow, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onUpArrowKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.up_arrow, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onRightArrowKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.right_arrow, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDownArrowKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.down_arrow, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onInsertKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.insert, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDeleteKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.delete, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on0KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["0"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on1KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["1"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on2KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["2"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on3KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["3"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on4KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["4"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on5KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["5"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on6KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["6"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on7KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["7"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on8KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["8"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on9KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes["9"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onAKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.a, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onBKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.b, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.c, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.d, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.e, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onFKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onGKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.g, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onHKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.h, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onIKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.i, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onJKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.j, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onKKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.k, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onLKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.l, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onMKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.m, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.n, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onOKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.o, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.p, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onQKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.q, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onRKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.r, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.s, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onTKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.t, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onUKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.u, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onVKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.v, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onWKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.w, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onXKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.x, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onYKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.y, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onZKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.z, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onLeftWindowKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.left_window_key, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onRightWindowKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.right_window_key, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSelectKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.select_key, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad0KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_0, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad1KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_1, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad2KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_2, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad3KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_3, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad4KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_4, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad5KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_5, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad6KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_6, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad7KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_7, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad8KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_8, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad9KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.numpad_9, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onMultiplyKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.multiply, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onAddKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.add, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSubtractKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.subtract, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDecimalPointKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.decimal_point, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDivideKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.divide, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF1KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f1, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF2KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f2, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF3KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f3, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF4KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f4, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF5KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f5, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF6KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f6, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF7KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f7, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF8KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f8, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF9KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f9, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF10KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f10, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF11KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f11, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF12KeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.f12, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumLockKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.num_lock, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onScrollLockKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.scroll_lock, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSemiColonKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.semi_colon, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEqualSignKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.equal_sign, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCommaKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.comma, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDashKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.dash, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPeriodKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.period, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onForwardSlashKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.forward_slash, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onGraveAccentKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.grave_accent, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onOpenBracketKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.open_bracket, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onBackSlashKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.back_slash, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCloseBraketKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.close_braket, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSingleQuoteKeyUp = function(onKeyUpHandler, options) { return $.fn.onkey.call(this, $.easyKey.keyCodes.single_quote, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }

}(jQuery));
