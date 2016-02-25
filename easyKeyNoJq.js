var easyKey = easyKey || {};
easyKey.keyCodes = easyKey.keyCodes || { 
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


easyKey.options = {
	onKeyDown : 1,
	onKeyUp: 2,
	withShiftPressed: 4,
	withControlPressed: 8,
	withAltPressed: 16
};


easyKey.onKey = function(whichKey, collection, onKey, options){
	
	var hasOption = function(option){
		if (option == void 0) throw new Error("No option was specified");
		return (options & option) === option;	
	};

	var shouldHandleKey = function(event, keyCodeToHandle){
		var keyPressedCode = event.which;

		if (keyPressedCode != keyCodeToHandle)
			return false;			

		if ((hasOption(easyKey.options.withShiftPressed) && !event.shiftKey) || (!hasOption(easyKey.options.withShiftPressed) && event.shiftKey))
			return false;

		if ((hasOption(easyKey.options.withControlPressed) && !event.ctrlKey) || (!hasOption(easyKey.options.withControlPressed) && event.ctrlKey))
			return false;

		if ((hasOption(easyKey.options.withAltPressed) && !event.altKey) || (!hasOption(easyKey.options.withAltPressed) && event.altKey))
			return false;			

		return true;
	};

	if (options == void 0)
		options = easyKey.options.onKeyDown;
	
	//check for singleton nodes or elements, and wrap them in an array if necessary
	var nodeCollection = collection.length !== undefined ? collection : [collection];
	for( var i=0; i<nodeCollection.length; i++ ){
		if (hasOption(easyKey.options.onKeyDown)){
			nodeCollection[i].addEventListener('keydown', function(e){					
				if (shouldHandleKey(e, whichKey)){
					return onKey.call(this, e);
				}
			});
		}
		if (hasOption(easyKey.options.onKeyUp)){
			nodeCollection[i].addEventListener('keyup', function(e){
				if (shouldHandleKey(e, whichKey)){
					return onKey.call(this, e);
				}
			});				
		}
	};
};

easyKey.onBackspaceKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.backspace, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onTabKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.tab, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onEnterKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.enter, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onShiftKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.shift, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onCtrlKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.ctrl, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onAltKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.alt, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onPauseBreakKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.pause_break, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onCapsLockKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.caps_lock, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onEscapeKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.escape, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onSpaceKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.space, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onPageUpKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.page_up, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onPageDownKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.page_down, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onEndKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.end, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onHomeKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.home, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onLeftArrowKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.left_arrow, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onUpArrowKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.up_arrow, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onRightArrowKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.right_arrow, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onDownArrowKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.down_arrow, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onInsertKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.insert, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onDeleteKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.delete, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on0KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["0"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on1KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["1"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on2KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["2"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on3KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["3"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on4KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["4"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on5KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["5"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on6KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["6"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on7KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["7"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on8KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["8"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.on9KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["9"], collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onAKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.a, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onBKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.b, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onCKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.c, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onDKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.d, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onEKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.e, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onFKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onGKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.g, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onHKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.h, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onIKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.i, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onJKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.j, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onKKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.k, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onLKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.l, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onMKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.m, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.n, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onOKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.o, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onPKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.p, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onQKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.q, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onRKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.r, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onSKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.s, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onTKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.t, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onUKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.u, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onVKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.v, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onWKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.w, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onXKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.x, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onYKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.y, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onZKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.z, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onLeftWindowKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.left_window_key, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onRightWindowKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.right_window_key, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onSelectKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.select_key, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad0KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_0, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad1KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_1, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad2KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_2, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad3KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_3, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad4KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_4, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad5KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_5, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad6KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_6, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad7KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_7, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad8KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_8, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumpad9KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_9, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onMultiplyKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.multiply, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onAddKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.add, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onSubtractKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.subtract, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onDecimalPointKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.decimal_point, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onDivideKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.divide, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF1KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f1, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF2KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f2, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF3KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f3, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF4KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f4, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF5KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f5, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF6KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f6, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF7KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f7, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF8KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f8, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF9KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f9, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF10KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f10, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF11KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f11, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onF12KeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f12, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onNumLockKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.num_lock, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onScrollLockKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.scroll_lock, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onSemiColonKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.semi_colon, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onEqualSignKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.equal_sign, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onCommaKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.comma, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onDashKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.dash, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onPeriodKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.period, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onForwardSlashKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.forward_slash, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onGraveAccentKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.grave_accent, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onOpenBracketKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.open_bracket, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onBackSlashKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.back_slash, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onCloseBracketKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.close_bracket, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }
easyKey.onSingleQuoteKeyDown = function(collection, onKeyDownHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.single_quote, collection, onKeyDownHandler, easyKey.options.onKeyDown | options); }

easyKey.onBackspaceKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.backspace, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onTabKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.tab, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onEnterKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.enter, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onShiftKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.shift, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onCtrlKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.ctrl, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onAltKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.alt, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onPauseBreakKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.pause_break, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onCapsLockKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.caps_lock, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onEscapeKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.escape, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onSpaceKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.space, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onPageUpKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.page_up, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onPageDownKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.page_down, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onEndKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.end, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onHomeKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.home, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onLeftArrowKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.left_arrow, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onUpArrowKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.up_arrow, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onRightArrowKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.right_arrow, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onDownArrowKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.down_arrow, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onInsertKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.insert, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onDeleteKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.delete, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on0KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["0"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on1KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["1"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on2KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["2"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on3KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["3"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on4KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["4"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on5KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["5"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on6KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["6"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on7KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["7"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on8KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["8"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.on9KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes["9"], collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onAKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.a, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onBKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.b, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onCKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.c, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onDKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.d, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onEKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.e, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onFKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onGKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.g, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onHKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.h, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onIKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.i, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onJKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.j, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onKKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.k, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onLKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.l, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onMKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.m, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.n, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onOKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.o, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onPKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.p, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onQKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.q, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onRKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.r, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onSKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.s, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onTKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.t, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onUKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.u, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onVKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.v, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onWKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.w, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onXKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.x, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onYKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.y, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onZKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.z, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onLeftWindowKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.left_window_key, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onRightWindowKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.right_window_key, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onSelectKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.select_key, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad0KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_0, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad1KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_1, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad2KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_2, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad3KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_3, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad4KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_4, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad5KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_5, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad6KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_6, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad7KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_7, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad8KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_8, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumpad9KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.numpad_9, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onMultiplyKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.multiply, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onAddKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.add, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onSubtractKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.subtract, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onDecimalPointKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.decimal_point, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onDivideKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.divide, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF1KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f1, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF2KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f2, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF3KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f3, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF4KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f4, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF5KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f5, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF6KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f6, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF7KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f7, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF8KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f8, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF9KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f9, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF10KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f10, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF11KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f11, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onF12KeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.f12, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onNumLockKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.num_lock, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onScrollLockKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.scroll_lock, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onSemiColonKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.semi_colon, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onEqualSignKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.equal_sign, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onCommaKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.comma, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onDashKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.dash, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onPeriodKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.period, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onForwardSlashKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.forward_slash, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onGraveAccentKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.grave_accent, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onOpenBracketKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.open_bracket, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onBackSlashKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.back_slash, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onCloseBracketKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.close_bracket, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }
easyKey.onSingleQuoteKeyUp = function(collection, onKeyUpHandler, options) { return easyKey.onKey.call(this, easyKey.keyCodes.single_quote, collection, onKeyUpHandler, easyKey.options.onKeyUp | options); }