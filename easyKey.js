(function($){
	'use strict';
	$.easyKey = $.easyKey || {};
	$.easyKey.keyCodes =  $.easyKey.keyCodes || {
		"backspace": 8,
		"tab": 9,
		"enter": 13,
		"shift": 16,
		"ctrl": 17,
		"alt": 18,
		"pause_break": 19,
		"caps_lock": 20,
		"escape": 27,
		"space": 32,
		"page_up": 33,
		"page_down": 34,
		"end": 35,
		"home": 36,
		"left_arrow": 37,
		"up_arrow": 38,
		"right_arrow": 39,
		"down_arrow": 40,
		"insert": 45,
		"delete": 46,
		"0": 48,
		"1": 49,
		"2": 50,
		"3": 51,
		"4": 52,
		"5": 53,
		"6": 54,
		"7": 55,
		"8": 56,
		"9": 57,
		"a": 65,
		"b": 66,
		"c": 67,
		"d": 68,
		"e": 69,
		"f": 70,
		"g": 71,
		"h": 72,
		"i": 73,
		"j": 74,
		"k": 75,
		"l": 76,
		"m": 77,
		"n": 78,
		"o": 79,
		"p": 80,
		"q": 81,
		"r": 82,
		"s": 83,
		"t": 84,
		"u": 85,
		"v": 86,
		"w": 87,
		"x": 88,
		"y": 89,
		"z": 90,
		"left_window_key": 91,
		"right_window_key": 92,
		"select_key": 93,
		"numpad_0": 96,
		"numpad_1": 97,
		"numpad_2": 98,
		"numpad_3": 99,
		"numpad_4": 100,
		"numpad_5": 101,
		"numpad_6": 102,
		"numpad_7": 103,
		"numpad_8": 104,
		"numpad_9": 105,
		"multiply": 106,
		"add": 107,
		"subtract": 109,
		"decimal_point": 110,
		"divide": 111,
		"f1": 112,
		"f2": 113,
		"f3": 114,
		"f4": 115,
		"f5": 116,
		"f6": 117,
		"f7": 118,
		"f8": 119,
		"f9": 120,
		"f10": 121,
		"f11": 122,
		"f12": 123,
		"num_lock": 144,
		"scroll_lock": 145,
		"semi_colon,": 186,
		"equal_sign": 187,
		"comma": 188,
		"dash": 189,
		"period": 190,
		"forward_slash": 191,
		"grave_accent": 192,
		"open_bracket": 219,
		"back_slash": 220,
		"close_bracket": 221,
		"single_quote": 222
	};

	$.easyKey.options = {
		onKeyDown : 1,
		onKeyUp: 2,
		withShiftPressed: 4,
		withControlPressed: 8,
		withAltPressed: 16
	};


	$.fn.onKey = function(key, handler, options){
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
					if (shouldHandleKey(e, key)){
						return handler.call(this, e);
					}
				});
			}
			if (hasOption($.easyKey.options.onKeyUp)){
				$(this).keyup(function(e){
					if (shouldHandleKey(e, key)){
						return handler.call(this, e);
					}
				});
			}
		});
		return this;
	};

	$.fn.onBackspaceKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.backspace, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onTabKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.tab, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onEnterKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.enter, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onShiftKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.shift, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onCtrlKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.ctrl, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onAltKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.alt, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onPauseBreakKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.pause_break, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onCapsLockKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.caps_lock, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onEscapeKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.escape, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onSpaceKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.space, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onPageUpKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.page_up, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onPageDownKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.page_down, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onEndKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.end, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onHomeKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.home, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onLeftArrowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.left_arrow, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onUpArrowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.up_arrow, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onRightArrowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.right_arrow, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onDownArrowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.down_arrow, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onInsertKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.insert, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onDeleteKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.delete, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on0KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["0"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on1KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["1"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on2KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["2"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on3KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["3"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on4KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["4"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on5KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["5"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on6KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["6"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on7KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["7"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on8KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["8"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.on9KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["9"], handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onAKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.a, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onBKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.b, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onCKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.c, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onDKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.d, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onEKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.e, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onFKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onGKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.g, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onHKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.h, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onIKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.i, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onJKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.j, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onKKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.k, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onLKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.l, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onMKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.m, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.n, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onOKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.o, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onPKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.p, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onQKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.q, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onRKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.r, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onSKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.s, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onTKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.t, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onUKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.u, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onVKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.v, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onWKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.w, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onXKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.x, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onYKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.y, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onZKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.z, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onLeftWindowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.left_window_key, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onRightWindowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.right_window_key, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onSelectKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.select_key, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad0KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_0, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad1KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_1, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad2KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_2, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad3KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_3, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad4KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_4, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad5KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_5, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad6KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_6, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad7KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_7, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad8KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_8, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumpad9KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_9, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onMultiplyKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.multiply, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onAddKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.add, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onSubtractKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.subtract, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onDecimalPointKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.decimal_point, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onDivideKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.divide, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF1KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f1, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF2KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f2, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF3KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f3, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF4KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f4, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF5KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f5, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF6KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f6, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF7KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f7, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF8KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f8, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF9KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f9, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF10KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f10, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF11KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f11, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onF12KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f12, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onNumLockKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.num_lock, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onScrollLockKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.scroll_lock, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onSemiColonKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.semi_colon, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onEqualSignKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.equal_sign, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onCommaKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.comma, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onDashKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.dash, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onPeriodKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.period, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onForwardSlashKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.forward_slash, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onGraveAccentKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.grave_accent, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onOpenBracketKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.open_bracket, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onBackSlashKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.back_slash, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onCloseBracketKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.close_bracket, handler, $.easyKey.options.onKeyDown || options); };
	$.fn.onSingleQuoteKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.single_quote, handler, $.easyKey.options.onKeyDown || options); };

	$.fn.onBackspaceKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.backspace, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onTabKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.tab, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onEnterKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.enter, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onShiftKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.shift, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onCtrlKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.ctrl, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onAltKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.alt, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onPauseBreakKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.pause_break, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onCapsLockKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.caps_lock, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onEscapeKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.escape, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onSpaceKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.space, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onPageUpKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.page_up, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onPageDownKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.page_down, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onEndKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.end, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onHomeKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.home, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onLeftArrowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.left_arrow, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onUpArrowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.up_arrow, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onRightArrowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.right_arrow, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onDownArrowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.down_arrow, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onInsertKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.insert, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onDeleteKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.delete, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on0KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["0"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on1KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["1"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on2KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["2"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on3KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["3"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on4KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["4"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on5KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["5"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on6KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["6"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on7KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["7"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on8KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["8"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.on9KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes["9"], handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onAKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.a, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onBKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.b, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onCKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.c, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onDKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.d, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onEKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.e, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onFKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onGKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.g, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onHKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.h, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onIKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.i, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onJKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.j, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onKKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.k, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onLKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.l, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onMKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.m, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.n, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onOKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.o, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onPKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.p, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onQKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.q, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onRKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.r, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onSKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.s, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onTKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.t, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onUKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.u, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onVKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.v, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onWKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.w, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onXKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.x, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onYKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.y, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onZKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.z, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onLeftWindowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.left_window_key, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onRightWindowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.right_window_key, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onSelectKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.select_key, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad0KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_0, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad1KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_1, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad2KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_2, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad3KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_3, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad4KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_4, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad5KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_5, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad6KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_6, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad7KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_7, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad8KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_8, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumpad9KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.numpad_9, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onMultiplyKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.multiply, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onAddKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.add, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onSubtractKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.subtract, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onDecimalPointKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.decimal_point, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onDivideKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.divide, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF1KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f1, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF2KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f2, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF3KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f3, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF4KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f4, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF5KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f5, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF6KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f6, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF7KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f7, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF8KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f8, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF9KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f9, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF10KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f10, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF11KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f11, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onF12KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.f12, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onNumLockKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.num_lock, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onScrollLockKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.scroll_lock, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onSemiColonKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.semi_colon, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onEqualSignKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.equal_sign, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onCommaKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.comma, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onDashKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.dash, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onPeriodKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.period, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onForwardSlashKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.forward_slash, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onGraveAccentKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.grave_accent, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onOpenBracketKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.open_bracket, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onBackSlashKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.back_slash, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onCloseBracketKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.close_bracket, handler, $.easyKey.options.onKeyUp || options); };
	$.fn.onSingleQuoteKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easyKey.keyCodes.single_quote, handler, $.easyKey.options.onKeyUp || options); };
}(jQuery));
