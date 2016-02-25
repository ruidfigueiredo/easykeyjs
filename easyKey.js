(function($){
	'use strict';
	$.easykey = $.easykey || {};
	$.easykey.keycodes =  $.easykey.keycodes || {
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
		"close_braket": 221,
		"single_quote": 222
	};


	$.easykey.options = {
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

			if ((hasOption($.easykey.options.withShiftPressed) && !event.shiftKey) || (!hasOption($.easykey.options.withShiftPressed) && event.shiftKey))
				return false;

			if ((hasOption($.easykey.options.withControlPressed) && !event.ctrlKey) || (!hasOption($.easykey.options.withControlPressed) && event.ctrlKey))
				return false;

			if ((hasOption($.easykey.options.withAltPressed) && !event.altKey) || (!hasOption($.easykey.options.withAltPressed) && event.altKey))
				return false;

			return true;
		};

		if (options == void 0)
			options = $.easykey.options.onKeyDown;

		this.each(function(){
			if (hasOption($.easykey.options.onKeyDown)){
				$(this).keydown(function(e){
					if (shouldHandleKey(e, key)){
						return handler.call(this, e);
					}
				});
			}
			if (hasOption($.easykey.options.onKeyUp)){
				$(this).keyup(function(e){
					if (shouldHandleKey(e, key)){
						return handler.call(this, e);
					}
				});
			}
		});
		return this;
	};

	$.fn.onBackspaceKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.backspace, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onTabKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.tab, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onEnterKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.enter, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onShiftKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.shift, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onCtrlKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.ctrl, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onAltKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.alt, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onPauseBreakKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.pause_break, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onCapsLockKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.caps_lock, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onEscapeKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.escape, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onSpaceKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.space, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onPageUpKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.page_up, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onPageDownKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.page_down, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onEndKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.end, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onHomeKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.home, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onLeftArrowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.left_arrow, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onUpArrowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.up_arrow, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onRightArrowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.right_arrow, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onDownArrowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.down_arrow, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onInsertKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.insert, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onDeleteKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.delete, handler, $.easykey.options.onKeyDown || options); };
	$.fn.on0KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["0"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on1KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["1"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on2KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["2"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on3KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["3"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on4KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["4"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on5KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["5"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on6KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["6"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on7KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["7"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on8KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["8"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.on9KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["9"], handler, $.easykey.options.onKeyDown || options); };
	$.fn.onAKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.a, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onBKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.b, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onCKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.c, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onDKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.d, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onEKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.e, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onFKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onGKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.g, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onHKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.h, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onIKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.i, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onJKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.j, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onKKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.k, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onLKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.l, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onMKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.m, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.n, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onOKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.o, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onPKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.p, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onQKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.q, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onRKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.r, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onSKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.s, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onTKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.t, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onUKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.u, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onVKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.v, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onWKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.w, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onXKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.x, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onYKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.y, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onZKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.z, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onLeftWindowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.left_window_key, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onRightWindowKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.right_window_key, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onSelectKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.select_key, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad0KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_0, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad1KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_1, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad2KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_2, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad3KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_3, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad4KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_4, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad5KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_5, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad6KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_6, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad7KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_7, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad8KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_8, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumpad9KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_9, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onMultiplyKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.multiply, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onAddKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.add, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onSubtractKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.subtract, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onDecimalPointKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.decimal_point, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onDivideKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.divide, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF1KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f1, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF2KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f2, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF3KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f3, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF4KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f4, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF5KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f5, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF6KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f6, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF7KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f7, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF8KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f8, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF9KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f9, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF10KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f10, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF11KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f11, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onF12KeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f12, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onNumLockKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.num_lock, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onScrollLockKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.scroll_lock, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onSemiColonKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.semi_colon, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onEqualSignKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.equal_sign, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onCommaKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.comma, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onDashKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.dash, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onPeriodKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.period, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onForwardSlashKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.forward_slash, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onGraveAccentKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.grave_accent, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onOpenBracketKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.open_bracket, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onBackSlashKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.back_slash, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onCloseBraketKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.close_braket, handler, $.easykey.options.onKeyDown || options); };
	$.fn.onSingleQuoteKeyDown = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.single_quote, handler, $.easykey.options.onKeyDown || options); };

	$.fn.onBackspaceKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.backspace, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onTabKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.tab, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onEnterKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.enter, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onShiftKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.shift, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onCtrlKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.ctrl, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onAltKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.alt, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onPauseBreakKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.pause_break, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onCapsLockKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.caps_lock, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onEscapeKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.escape, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onSpaceKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.space, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onPageUpKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.page_up, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onPageDownKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.page_down, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onEndKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.end, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onHomeKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.home, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onLeftArrowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.left_arrow, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onUpArrowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.up_arrow, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onRightArrowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.right_arrow, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onDownArrowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.down_arrow, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onInsertKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.insert, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onDeleteKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.delete, handler, $.easykey.options.onKeyUp || options); };
	$.fn.on0KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["0"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on1KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["1"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on2KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["2"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on3KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["3"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on4KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["4"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on5KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["5"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on6KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["6"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on7KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["7"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on8KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["8"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.on9KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes["9"], handler, $.easykey.options.onKeyUp || options); };
	$.fn.onAKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.a, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onBKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.b, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onCKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.c, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onDKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.d, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onEKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.e, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onFKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onGKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.g, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onHKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.h, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onIKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.i, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onJKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.j, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onKKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.k, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onLKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.l, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onMKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.m, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.n, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onOKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.o, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onPKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.p, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onQKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.q, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onRKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.r, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onSKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.s, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onTKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.t, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onUKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.u, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onVKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.v, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onWKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.w, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onXKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.x, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onYKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.y, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onZKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.z, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onLeftWindowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.left_window_key, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onRightWindowKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.right_window_key, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onSelectKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.select_key, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad0KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_0, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad1KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_1, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad2KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_2, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad3KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_3, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad4KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_4, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad5KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_5, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad6KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_6, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad7KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_7, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad8KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_8, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumpad9KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.numpad_9, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onMultiplyKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.multiply, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onAddKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.add, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onSubtractKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.subtract, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onDecimalPointKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.decimal_point, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onDivideKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.divide, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF1KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f1, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF2KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f2, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF3KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f3, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF4KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f4, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF5KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f5, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF6KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f6, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF7KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f7, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF8KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f8, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF9KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f9, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF10KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f10, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF11KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f11, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onF12KeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.f12, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onNumLockKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.num_lock, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onScrollLockKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.scroll_lock, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onSemiColonKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.semi_colon, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onEqualSignKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.equal_sign, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onCommaKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.comma, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onDashKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.dash, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onPeriodKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.period, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onForwardSlashKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.forward_slash, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onGraveAccentKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.grave_accent, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onOpenBracketKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.open_bracket, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onBackSlashKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.back_slash, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onCloseBraketKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.close_braket, handler, $.easykey.options.onKeyUp || options); };
	$.fn.onSingleQuoteKeyUp = function(handler, options) { return $.fn.onKey.call(this, $.easykey.keycodes.single_quote, handler, $.easykey.options.onKeyUp || options); };
}(jQuery));
