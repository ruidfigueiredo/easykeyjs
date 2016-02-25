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
		"space": 32,
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
		"close_bracket":221,
		"single_quote":222 };


	$.easyKey.options = {
		onKeyDown : 1,
		onKeyUp: 2,
		withShiftPressed: 4,
		withControlPressed: 8,
		withAltPressed: 16
	};
	

	$.fn.onKey = function(whichKey, onKey, options){		
		var hasOption = function(option){
			if (option == void 0) throw new Error("No option was specified");
			return (options & option) === option;	
		};

		var shouldHandleKey = function(event, keyCodeToHandle){
			var keyPressedCode = event.which;

			if (keyPressedCode != keyCodeToHandle)
				return false;			

			if ((hasOption($.easyKey.options.withShiftPressed) && !event.shiftKey) || (!hasOption($.easyKey.options.withShiftPressed) && event.shiftKey))
				return false;

			if ((hasOption($.easyKey.options.withControlPressed) && !event.ctrlKey) || (!hasOption($.easyKey.options.withControlPressed) && event.ctrlKey))
				return false;

			if ((hasOption($.easyKey.options.withAltPressed) && !event.altKey) || (!hasOption($.easyKey.options.withAltPressed) && event.altKey))
				return false;			

			return true;
		};

		if (options == void 0)
			options = $.easyKey.options.onKeyDown;

		this.each(function(){
			if (hasOption($.easyKey.options.onKeyDown)){
				$(this).keydown(function(e){					
					if (shouldHandleKey(e, whichKey)){
						return onKey.call(this, e);
					}
				});
			}
			if (hasOption($.easyKey.options.onKeyUp)){
				$(this).keyup(function(e){
					if (shouldHandleKey(e, whichKey)){
						return onKey.call(this, e);
					}
				});				
			}
		});
		return this;
	};

	$.fn.onBackspaceKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.backspace, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onTabKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.tab, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onEnterKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.enter, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onShiftKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.shift, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onCtrlKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.ctrl, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onAltKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.alt, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onPauseBreakKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.pause_break, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onCapsLockKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.caps_lock, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onEscapeKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.escape, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onSpaceKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.space, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onPageUpKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.page_up, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onPageDownKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.page_down, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onEndKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.end, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onHomeKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.home, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onLeftArrowKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.left_arrow, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onUpArrowKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.up_arrow, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onRightArrowKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.right_arrow, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onDownArrowKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.down_arrow, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onInsertKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.insert, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onDeleteKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.delete, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on0KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["0"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on1KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["1"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on2KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["2"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on3KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["3"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on4KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["4"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on5KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["5"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on6KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["6"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on7KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["7"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on8KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["8"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.on9KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["9"], onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onAKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.a, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onBKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.b, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onCKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.c, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onDKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.d, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onEKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.e, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onFKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onGKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.g, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onHKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.h, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onIKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.i, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onJKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.j, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onKKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.k, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onLKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.l, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onMKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.m, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.n, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onOKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.o, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onPKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.p, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onQKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.q, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onRKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.r, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onSKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.s, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onTKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.t, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onUKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.u, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onVKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.v, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onWKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.w, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onXKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.x, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onYKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.y, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onZKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.z, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onLeftWindowKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.left_window_key, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onRightWindowKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.right_window_key, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onSelectKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.select_key, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad0KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_0, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad1KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_1, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad2KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_2, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad3KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_3, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad4KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_4, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad5KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_5, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad6KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_6, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad7KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_7, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad8KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_8, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumpad9KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_9, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onMultiplyKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.multiply, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onAddKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.add, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onSubtractKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.subtract, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onDecimalPointKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.decimal_point, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onDivideKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.divide, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF1KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f1, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF2KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f2, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF3KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f3, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF4KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f4, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF5KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f5, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF6KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f6, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF7KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f7, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF8KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f8, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF9KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f9, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF10KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f10, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF11KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f11, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onF12KeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f12, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onNumLockKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.num_lock, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onScrollLockKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.scroll_lock, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onSemiColonKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.semi_colon, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onEqualSignKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.equal_sign, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onCommaKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.comma, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onDashKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.dash, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onPeriodKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.period, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onForwardSlashKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.forward_slash, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onGraveAccentKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.grave_accent, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onOpenBracketKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.open_bracket, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onBackSlashKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.back_slash, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onCloseBracketKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.close_bracket, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }
	$.fn.onSingleQuoteKeyDown = function(onKeyDownHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.single_quote, onKeyDownHandler, $.easyKey.options.onKeyDown | options); }

	$.fn.onBackspaceKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.backspace, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onTabKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.tab, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEnterKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.enter, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onShiftKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.shift, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCtrlKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.ctrl, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onAltKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.alt, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPauseBreakKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.pause_break, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCapsLockKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.caps_lock, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEscapeKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.escape, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSpaceKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.space, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPageUpKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.page_up, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPageDownKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.page_down, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEndKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.end, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onHomeKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.home, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onLeftArrowKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.left_arrow, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onUpArrowKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.up_arrow, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onRightArrowKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.right_arrow, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDownArrowKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.down_arrow, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onInsertKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.insert, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDeleteKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.delete, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on0KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["0"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on1KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["1"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on2KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["2"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on3KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["3"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on4KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["4"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on5KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["5"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on6KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["6"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on7KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["7"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on8KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["8"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.on9KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["9"], onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onAKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.a, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onBKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.b, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.c, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.d, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.e, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onFKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onGKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.g, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onHKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.h, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onIKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.i, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onJKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.j, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onKKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.k, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onLKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.l, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onMKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.m, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.n, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onOKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.o, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.p, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onQKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.q, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onRKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.r, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.s, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onTKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.t, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onUKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.u, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onVKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.v, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onWKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.w, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onXKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.x, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onYKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.y, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onZKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.z, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onLeftWindowKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.left_window_key, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onRightWindowKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.right_window_key, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSelectKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.select_key, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad0KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_0, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad1KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_1, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad2KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_2, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad3KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_3, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad4KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_4, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad5KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_5, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad6KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_6, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad7KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_7, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad8KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_8, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumpad9KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_9, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onMultiplyKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.multiply, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onAddKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.add, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSubtractKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.subtract, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDecimalPointKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.decimal_point, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDivideKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.divide, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF1KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f1, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF2KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f2, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF3KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f3, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF4KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f4, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF5KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f5, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF6KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f6, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF7KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f7, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF8KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f8, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF9KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f9, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF10KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f10, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF11KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f11, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onF12KeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f12, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onNumLockKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.num_lock, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onScrollLockKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.scroll_lock, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSemiColonKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.semi_colon, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onEqualSignKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.equal_sign, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCommaKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.comma, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onDashKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.dash, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onPeriodKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.period, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onForwardSlashKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.forward_slash, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onGraveAccentKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.grave_accent, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onOpenBracketKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.open_bracket, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onBackSlashKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.back_slash, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onCloseBracketKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.close_bracket, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }
	$.fn.onSingleQuoteKeyUp = function(onKeyUpHandler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.single_quote, onKeyUpHandler, $.easyKey.options.onKeyUp | options); }

}(jQuery));
