

/* all.min.js - Turtle skin scripts */
var VER = '5.6.6',
	DEBUG = false;
Texts = {
	closeWindow: 'Close window',
	okButton: 'OK',
	warning: 'Warning',
	error: 'Error',
	today: 'today',
	yesterday: 'yesterday',
	daysAgo: '{0} days ago',
	monthsAgo: '{0} months ago',
	yearsAgo: '{0} years ago',
	play: 'Play',
	pause: 'Pause',
	stop: 'Stop',
	mute: 'Mute',
	unmute: 'Unmute',
	fullScreen: 'Full screen',
	restoreScreen: 'Restore screen',
	repeat: 'Repeat',
	repeatOff: 'Repeat off',
	localFlashWarning: 'Local Flash playback is possibly blocked by Flash security rules. Test videos in the uploaded album!',
	unsupportedMediaFormat: '<span>Unsupported media format</span>You might need to either update your browser or the <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a> or use another browser to play this media.',
	addCart: 'Add to Cart',
	buyNow: 'Buy Now',
	viewCart: 'View Cart',
	items: 'items',
	success: 'Success',
	couponCode: 'Coupon code',
	redeem: 'Redeem',
	noSuch: 'No such coupon exists!',
	expired: 'The coupon code <b>{0}</b> has expired!',
	accepted: 'The coupon code is accepted. You will get <b>{0}</b> discount the next time you add this item to the cart.',
	lowerThanCurrent: 'This coupon offers lower discount than the current <b>{0}</b>.',
	higherThanPrice: 'You can use this coupon only for items priced higher than <b>{0}</b>.',
	reclaimed: 'This coupon has already been used!',
	shareOn: 'Share on',
	checkOutThis: 'Check this out',
	localWarning: 'Can't share local albums. Please upload your album first!',
	searchBoxTip: 'Search...',
	searchResultsFor: 'Search results for',
	newImages: 'New images',
	notFound: 'Not found',
	foundNImages: 'Found {0} item(s)',
	close: 'Close',
	newItem: 'NEW',
	help_title: 'Using Gallery Controls',
	help_pressF1: 'Press <b>F1</b> any time to get help!',
	help_topNavigation: 'Top <b>navigation</b> bar with <b>Home</b> button',
	help_upOneLevel: '<b>Up</b> one level',
	help_authorInfo: 'Author or company <b>information</b>',
	help_shareAndLike: '<b>Share</b> and <b>Like</b> buttons for social networking',
	help_searchNew: 'Search <b>new images</b>',
	help_search: '<b>Search</b> button',
	help_downloadZip: '<b>Download</b> album or current folder as ZIP file',
	help_startSlideshow: 'Start <b>slideshow</b> <em>Numpad *</em>',
	help_previousPicture: '<b>Previous</b> picture <em>Left arrow</em><em>Swipe right</em>',
	help_backToIndex: 'Back to <b>thumbnail page</b> / up one level <em>Esc</em>',
	help_toggleFit: 'Toggle <b>fit to screen</b> or <b>1:1</b> size <em>Numpad +</em>',
	help_toggleInfo: 'Show/hide <b>captions</b> and other panels, like Metadata, Map, Shopping, etc. <em>Numpad -</em>',
	help_toggleThumbnails: 'Show/hide <b>thumbnail</b> scroller <em>Numpad -</em>',
	help_toggleAutoPlay: 'Start/stop <b>slideshow</b> <em>Numpad *</em>',
	help_nextPicture: '<b>Next</b> picture <em>Right arrow</em><em>Swipe left</em>',
	help_toggleMeta: 'Toggle <b>photo data</b>',
	help_toggleMap: 'Toggle <b>map</b>',
	help_toggleShop: 'Toggle <b>shopping options</b> panel',
	help_downloadImage: 'Download <b>high resolution</b> file',
	help_shareAndLike: '<b>Share</b> and <b>Like</b> buttons for social networking',
	help_toggleComments: 'Toggle <b>Facebook comments</b>',
	help_toggleFaces: 'Toggle visibility of <b>tagged people</b>',
	startSlideshow: 'Start slideshow',
	atFirstPage: 'At first page',
	atLastPage: 'At last page',
	atLastPageQuestion: 'Where to go next?',
	startOver: 'Start over',
	backToHome: 'Back to home',
	stop: 'Stop',
	upOneLevel: 'Up one level',
	backToIndex: 'Back to index page',
	previousPicture: 'Previous picture',
	nextPicture: 'Next picture',
	previousFolder: 'Previous folder',
	nextFolder: 'Next folder',
	changeSpeed: 'Change speed',
	oneToOneSize: '1:1 size',
	fitToScreen: 'Fit to screen',
	showInfo: 'Show caption / info',
	hideInfo: 'Hide caption / info',
	showThumbs: 'Show thumbnails',
	hideThumbs: 'Hide thumbnails',
	startAutoplay: 'Start autoplay',
	stopAutoplay: 'Stop autoplay',
	clickToOpen: 'Click to open this document with the associated viewer',
	commentsBtn: 'Comments',
	commentsLabel: 'Add a comment, view other's comments',
	metaBtn: 'Photo data',
	metaLabel: 'Display photographic (Exif/Iptc) data',
	mapBtn: 'Map',
	mapLabel: 'Show the photo location on map',
	shopBtn: 'Buy',
	shopLabel: 'Show options to buy this item',
	shareBtn: 'Share',
	shareLabel: 'Share this photo over social sites',
	download: 'Download',
	original: 'Original',
	hiRes: 'Hi res.',
	saveTip: 'Use <b>Right click + Save link as...</b> to download',
	print: 'Print',
	printBtn: 'Print',
	printLabel: 'Print out this photo on your printer',
	fotomotoBtn: 'Buy / Share',
	fotomotoLabel: 'Buy prints or digital files, share, send free eCards',
	mostphotosBtn: 'Purchase',
	mostphotosLabel: 'Download this image from <b>mostphotos.com</b>!',
	people: 'People',
	sendFeedback: 'Send feedback',
	message: 'Message',
	subject: 'Subject',
	comment: 'Comment',
	yourEmail: 'Your email address',
	send: 'Send',
	messageSent: 'Message sent',
	errorSending: 'Error sending email!',
	tooLong: 'Text is too long or too many items!',
	emailMissing: 'Email is misssing or wrong format!',
	noItemsSelected: 'No items selected',
	selectItemsHint: 'Select the desired items first!',
	nonShoppableItems: 'The selected items have no or have proprietary shopping options, or different discount rates.',
	buyNItems: 'Buy {0} items',
	locationWarning: 'Works only when uploaded',
	cookiePolicyText: 'This album uses cookies to remember user preferences. By using it, you agree to our use of cookies.',
	cookiePolicyAgree: 'Got it',
	cookiePolicyLearnMore: 'Learn more'
};
! function (e) {
	"use strict";
	var t = ["DOMMouseScroll", "mousewheel"];
	if (e.event.fixHooks)
		for (var n = t.length; n;) e.event.fixHooks[t[--n]] = e.event.mouseHooks;
	e.event.special.mousewheel = {
		setup: function () {
			if (this.addEventListener)
				for (var e = t.length; e;) this.addEventListener(t[--e], i, !1);
			else this.onmousewheel = i
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var e = t.length; e;) this.removeEventListener(t[--e], i, !1);
			else this.onmousewheel = null
		}
	}, e.fn.extend({
		mousewheel: function (e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel: function (e) {
			return this.unbind("mousewheel", e)
		}
	});
	var i = function (t) {
		var n = t || window.event,
			i = [].slice.call(arguments, 1),
			s = 0,
			l = 0,
			o = 0;
		return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta ? s = n.wheelDelta / 120 : n.detail && (s = -n.detail / 3), o = s, void 0 !== n.axis && n.axis === n.HORIZONTAL_AXIS && (o = 0, l = -1 * s), void 0 !== n.wheelDeltaY && (o = n.wheelDeltaY / 120), void 0 !== n.wheelDeltaX && (l = -1 * n.wheelDeltaX / 120), i.unshift(t, s, l, o), (e.event.dispatch || e.event.handle).apply(this, i)
	}
}(jQuery);
! function (n) {
	! function () {
		function e(e) {
			function t(n) {
				return n === !0 ? function (n) {
					return n
				} : "string" == typeof n && (n = c(n.split(""))) || "function" == typeof n ? function (e) {
					return n(encodeURIComponent(e))
				} : encodeURIComponent
			}

			function c(e) {
				var t = new RegExp(n.map(e, encodeURIComponent).join("|"), "ig");
				return function (n) {
					return n.replace(t, decodeURIComponent)
				}
			}
			e = n.extend({
				unescape: !1
			}, e || {}), o.encoder = t(e.unescape)
		}
		var t = !(navigator.userAgent.indexOf("Firefox") >= 0 && parseInt(navigator.userAgent.match(/Firefox\/(\d*(\.\d*)*)/)[1]) < 41),
			o = {
				put: function (n, e) {
					(e || window).location.hash = this.encoder(n)
				},
				get: function (n) {
					var e = (n || window).location.hash.replace(/^#/, "");
					try {
						return t ? decodeURIComponent(e) : e
					}
					catch (o) {
						return e
					}
				},
				encoder: encodeURIComponent
			},
			c = {};
		c.base = {
			callback: void 0,
			type: void 0,
			check: function () {},
			load: function () {},
			init: function (n, t) {
				e(t), a.callback = n, a._options = t, a._init()
			},
			_init: function () {},
			_options: {}
		}, c.timer = {
			_appState: void 0,
			_init: function () {
				var n = o.get();
				a._appState = n, a.callback(n), setInterval(a.check, 100)
			},
			check: function () {
				var n = o.get();
				n !== a._appState && (a._appState = n, a.callback(n))
			},
			load: function (n) {
				n !== a._appState && (o.put(n), a._appState = n, a.callback(n))
			}
		}, c.hashchangeEvent = {
			_init: function () {
				a.callback(o.get()), n(window).on("hashchange", a.check)
			},
			check: function () {
				a.callback(o.get())
			},
			load: function (n) {
				o.put(n)
			}
		};
		var a = n.extend({}, c.base);
		a.type = "onhashchange" in window ? "hashchangeEvent" : "timer", n.extend(a, c[a.type]), n.history = a
	}()
}(jQuery);
window.console = window.console || function () {
	return {
		log: function () {}
	}
}(), String.wsp = [], String.wsp[9] = !0, String.wsp[10] = !0, String.wsp[11] = !0, String.wsp[12] = !0, String.wsp[13] = !0, String.wsp[32] = !0, String.wsp[133] = !0, String.wsp[160] = !0, String.wsp[5760] = !0, String.wsp[6158] = !0, String.wsp[8192] = !0, String.wsp[8193] = !0, String.wsp[8194] = !0, String.wsp[8195] = !0, String.wsp[8196] = !0, String.wsp[8197] = !0, String.wsp[8198] = !0, String.wsp[8199] = !0, String.wsp[8200] = !0, String.wsp[8201] = !0, String.wsp[8202] = !0, String.wsp[8203] = !0, String.wsp[8232] = !0, String.wsp[8233] = !0, String.wsp[8239] = !0, String.wsp[8287] = !0, String.wsp[12288] = !0, String.prototype.trim = function () {
	var t = this + "",
		n = t.length;
	if (n) {
		var e = String.wsp,
			r = 0;
		for (--n; n >= 0 && e[t.charCodeAt(n)];) --n;
		for (++n; n > r && e[t.charCodeAt(r)];) ++r;
		t = t.substring(r, n)
	}
	return t
}, String.prototype.trunc = function (t) {
	var n = this + "";
	if (n.length <= t) return n.toString();
	var e = n.substring(0, t - 1),
		r = e.lastIndexOf(" ");
	return (r > 6 && e.length - r < 20 ? e.substring(0, r) : e) + "..."
}, String.prototype.startsWith = function (t) {
	return 0 === (this + "").indexOf(t)
}, String.prototype.endsWith = function (t) {
	return (this + "").substring(this.length - t.length) === t
}, String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1)
}, String.prototype.unCamelCase = function () {
	return this.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}, String.prototype.getExt = function () {
	var t = this + "",
		n = t.lastIndexOf(".");
	return 0 >= n || n >= t.length - 1 ? "" : t.substring(n + 1).toLowerCase()
}, String.prototype.hasExt = function (t) {
	var n = this + "",
		e = n.lastIndexOf(".");
	return e >= 0 ? (n = n.substring(e + 1).toLowerCase(), (t + ",").indexOf(n + ",") >= 0) : !1
}, String.prototype.replaceExt = function (t) {
	var n = this + "",
		e = n.lastIndexOf(".");
	return 0 >= e ? n : n.substring(0, e + 1) + t
}, String.prototype.fixExtension = function () {
	return (this + "").replace(/.gif$/gi, ".png").replace(/.tif+$/gi, ".jpg")
}, String.prototype.getDir = function () {
	var t = (this + "").split("#")[0];
	return t.substring(0, t.lastIndexOf("/") + 1)
}, String.prototype.getFile = function () {
	var t = (this + "").split("#")[0];
	return t.substring(t.lastIndexOf("/") + 1)
}, String.prototype.getRelpath = function (t) {
	var n = this + "",
		e = n.lastIndexOf("#");
	for (-1 === e ? e = n.length - 1 : e--; e >= 0 && ("/" !== n[e] || 0 !== t--); e--);
	return n.substring(e + 1)
}, String.prototype.fixUrl = function () {
	for (var t, n, e = this + "";
		(t = e.indexOf("../")) > 0;) {
		if (1 === t || -1 === (n = e.lastIndexOf("/", t - 2))) return e.substring(t + 3);
		if (n < 8) {
			n = t - 1;
		};
		e = e.substring(0, n) + e.substring(t + 2)
	}
	return e
}, String.prototype.fullUrl = function () {
	var t = this + "";
	return t.match(/^(http|ftp|file)/) || (t = window.location.href.getDir() + t), t.fixUrl()
}, String.prototype.cleanupHTML = function () {
	for (var t = [
			[/<br>/gi, "\n"],
			[/\&/gi, "&"],
			[/\</gi, "<"],
			[/\>/gi, ">"],
			[/\&(m|n)dash;/gi, "-"],
			[/\'/gi, "'"],
			[/\"/gi, '"']
		], n = this + "", e = t.length - 1; e >= 0; e--) n = n.replace(t[e][0], t[e][1]);
	return n
}, String.prototype.stripHTML = function (t) {
	var n = this + "";
	return t && (n = n.cleanupHTML()), n.replace(/<\/?[^>]+>/gi, "")
}, String.prototype.stripQuote = function () {
	return (this + "").replace(/\"/gi, """)
}, String.prototype.appendSep = function (t, n) {
	return (this.length ? this + (n || " · ") : "") + t
}, String.prototype.rgb2hex = function () {
	var t = this + "";
	if ("#" === t.charAt(0) || "transparent" === t) return t;
	var n, e = t.match(/\d+/g),
		r = "";
	if (e) {
		for (var i = 0; i < e.length && 3 > i; ++i) n = parseInt(e[i], 10).toString(16), r += (n.length < 2 ? "0" : "") + n;
		return "#" + r
	}
	return "transparent"
}, String.prototype.template = function (t) {
	if ("undefined" == typeof t || !this) return this;
	!isNaN(parseFloat(t)) && isFinite(t) && (t += "");
	var n = this + "";
	if (t.constructor === Array)
		for (var e = 0; e < t.length; ++e) n = n.replace(new RegExp("\\{" + e + "\\}", "gi"), t[e]);
	else n = n.replace(/\{0\}/gi, t);
	return n
}, String.prototype.getSearchTerms = function () {
	var t = this + "";
	if (-1 === t.indexOf('"')) return t.split(" ");
	var n, e = [];
	do {
		if ((n = t.indexOf('"')) > 0 && e.push.apply(e, t.substring(0, n).split(" ")), t = t.substring(n + 1), n = t.indexOf('"'), 0 > n) {
			e.push(t);
			break
		}
		e.push(t.substring(0, n)), t = t.substring(n + 1)
	} while (t.length);
	return e
}, String.prototype.objectify = function () {
	if (!this || !this.length) return this;
	var t = this + "";
	("?" === t.charAt(0) || "#" === t.charAt(0)) && (t = t.substring(1));
	for (var n, e = {}, r = t.split("&"), i = 0, o = r.length; o > i; ++i) n = r[i].split("="), n.length > 1 && (e[n[0]] = decodeURIComponent(n[1]));
	return e
}, String.prototype.testIn = function (t) {
	return "string" != typeof t && (t += ""), new RegExp(this, "i").test(t)
}, String.prototype.testExactMatch = function (t) {
	if (t.constructor !== Array) return this == t + "";
	for (var n = 0, e = t.length; e > n; ++n)
		if (this == t[n]) return !0;
	return !1
}, String.prototype.testMatch = function (t) {
	var n = this.toLowerCase();
	if (t.constructor !== Array) return n == (t + "").toLowerCase();
	for (var e = 0, r = t.length; r > e; ++e)
		if (n == t[e].toLowerCase()) return !0;
	return !1
}, String.prototype.hashCode = function () {
	for (var t = 0, n = 0, e = this.length; e > n; ++n) t = (t << 5) - t + this.charCodeAt(n), t &= t;
	return t
}, Math.minMax = function (t, n, e) {
	return n = isNaN(n) ? parseFloat(n) : n, t > n ? t : n > e ? e : n
};
var isEmpty = function (t) {
		return null == t ? !0 : 0 === Object.getOwnPropertyNames(t).length
	},
	paramize = function (t) {
		if ("number" == typeof t) return "" + t;
		if ("string" == typeof t) return t;
		if ("object" == typeof t) {
			for (var n = "", e = Object.getOwnPropertyNames(t), r = e.length, i = 0; r > i; i++) null !== t[e[i]] && (n += "&" + e[i] + "=" + encodeURIComponent(t[e[i]]));
			if (n.length) return n.substring(1)
		}
		return ""
	},
	allTrue = function (t) {
		if (t && t.constructor === Array) {
			for (var n = 0; n < t.length; ++n)
				if (!t[n]) return !1;
			return !0
		}
		return t === !0
	},
	getCoords = function (t) {
		return t.touches ? 1 == t.touches.length ? {
			x: t.touches[0].clientX,
			y: t.touches[0].clientY
		} : t.changedTouches && 1 == t.changedTouches.length ? {
			x: t.changedTouches[0].clientX,
			y: t.changedTouches[0].clientY
		} : null : {
			x: t.clientX,
			y: t.clientY
		}
	},
	translate = function (t, n) {
		if (t = t.trim(), "undefined" != typeof Texts && Texts.hasOwnProperty(t)) return Texts[t];
		if ("undefined" != typeof n) return DEBUG && console && console.log("Using default translation: " + t + "=" + n), n;
		DEBUG && console && console.log("Missing translation: " + t);
		var e = t.replace(/([A-Z])/g, " $1").toLowerCase();
		return e[0] = e.charAt(0).toUpperCase(), e
	},
	getKeys = function (t, n) {
		var e, r = {},
			i = t.split(","),
			o = i.length;
		for (e = 0; o > e; e++) r[i[e]] = translate(i[e], n[i]);
		return r
	},
	getTranslations = function (t) {
		var n, e = {};
		for (n in t) e[n] = "object" == typeof t[n] ? getTranslations(t[n]) : translate(n, t[n]);
		return e
	},
	readData = function (t, n) {
		var e = {};
		if (t && t.length && n) {
			n = n.split(",");
			for (var r, i = 0; i < n.length; i++) null != (r = t.data(n[i])) && (e[n[i]] = r)
		}
		return e
	},
	getRelativeDate = function (t) {
		if (!t) return translate("today");
		if (1 === t) return translate("yesterday");
		var n, e;
		return t >= 730 ? (n = translate("yearsAgo"), e = Math.round(t / 365)) : t >= 60 ? (n = translate("monthsAgo"), e = Math.round(t / 30.5)) : (n = translate("daysAgo"), e = t), n.replace("{0}", e)
	},
	getTimespan = function (t) {
		if (!t) return translate("today");
		if (1 === t) return translate("yesterday");
		var n, e;
		return t >= 730 ? (n = translate("inThePastNYears"), e = Math.round(t / 365)) : t >= 60 ? (n = translate("inThePastNMonths"), e = Math.round(t / 30.42)) : (n = translate("inThePastNDays"), e = t), n.replace("{0}", e)
	},
	getRelativePath = function (t, n) {
		if (!n.length) return "";
		if (!t.length) return n.endsWith("/") ? n : n + "/";
		if (t === n) return "";
		for (var e = t.split("/"), r = n.split("/"); e.length && r.length && e[0] === r[0];) e.shift(), r.shift();
		return "../../../../../../../../../../../../../../../../../../../../".substring(0, 3 * (e.length - 1)) + (r.length ? r.join("/") + "/" : "")
	},
	extend = function () {
		for (var t = 1; t < arguments.length; t++)
			for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (arguments[0][n] = arguments[t][n]);
		return arguments[0]
	},
	passDefaults = function (t, n, e) {
		if ("undefined" != typeof e && t && n) {
			e = e.split(",");
			for (var r = 0; r < e.length; r++) t.hasOwnProperty(e[r]) && (n[e[r]] = t[e[r]])
		}
	},
	readUserPrefs = function (t, n) {
		if ("undefined" != typeof n && t) {
			n = n.split(",");
			for (var e, r = 0; r < n.length; r++) null !== (e = $.cookie(n[r])) && (t[n[r]] = e)
		}
	},
	addParam = function (t, n, e) {
		if (HISTORY) {
			var r = window.location.hash;
			r && ("#" === r.charAt(0) && (r = r.substring(1)), n = extend(history.state || r.objectify(), n)), r = "#" + paramize(n), r !== window.location.hash && history.pushState(n, "undefined" == typeof e ? "" : e, r.length > 1 ? r : t || "index.html")
		}
	},
	setParam = function (t, n, e) {
		if (HISTORY) {
			var r = "#" + paramize(n);
			r !== window.location.hash && history.pushState(n, "undefined" == typeof e ? "" : e, r.length > 1 ? r : t || "index.html")
		}
	},
	removeParam = function (t, n, e) {
		if (HISTORY) {
			var r, i = window.location.hash;
			i && ("undefined" == typeof n ? (i = "", history.pushState("", "", t || "index.html")) : ("#" === i.charAt(0) && (i = i.substring(1)), r = history.state || i.objectify(), r.hasOwnProperty(n) && (delete r[n], i = "#" + paramize(r)), history.pushState(r, "undefined" == typeof e ? "" : e, i.length > 1 ? i : t || "index.html")))
		}
	},
	removeSearch = function (t) {
		HISTORY && history.replaceState(history.state, "undefined" == typeof t ? "" : t, window.location.href.replace(window.location.search, ""))
	},
	readParam = function () {
		if (HISTORY) {
			if (history.state) return history.state;
			var t = window.location.hash;
			return "#" === t.charAt(0) && (t = t.substring(1)), t.objectify()
		}
		return null
	},
	printImage = function (t, n, e) {
		if (t) {
			var r = window.open("about:blank", "print", "location=no,status=no,titlebar=no");
			r.document.open(), r.document.write('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title>' + (n || "Print") + '</title>\n<script>printOut=function(){window.print();window.close();}</script>\n<style>body{margin:0;padding:0;text-align:center;overflow:hidden;}\nimg{display:block;width:100%;height:auto;vertical-align:top;}</style>\n</head>\n<body onLoad="setTimeout(printOut,100)"><img src="' + t + '">' + (e || "") + "</body>\n</html>"), r.document.close()
		}
	},
	xDecrypt = function (t) {
		var n, e, r, i = [147, 163, 87, 254, 153, 4, 198, 23],
			o = t.length,
			a = 5 * Math.ceil(o / 8),
			s = new Array(a),
			u = "",
			l = 0;
		for (n = 0; a > n; n++) s[n] = 0;
		for (n = 0; o > n; n++)(r = t.charCodeAt(n) - 48) > 9 && (r -= 7), r <<= 11 - l % 8, e = Math.floor(l / 8), a > e && (s[e] |= r >> 8, ++e < a && (s[e] |= 255 & r)), l += 5;
		for (n = 0; a > n; n++) s[n] ^= i[n % 8];
		for (a = s[0] | s[1] << 8, r = 0, n = 4; a > n; n++) u += String.fromCharCode(s[n]), r += s[n];
		return r != (255 & s[2] | s[3] << 8) && (u = ""), u
	},
	scrollbarWidth = function () {
		var t = document.createElement("div");
		t.style.cssText = "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px", document.body.appendChild(t);
		var n = t.offsetWidth - t.clientWidth;
		return document.body.removeChild(t), n
	},
	isTouchEnabled = function () {
		return /Trident/.test(navigator.userAgent) ? "undefined" != typeof navigator.maxTouchPoints && navigator.maxTouchPoints : /Edge/.test(navigator.userAgent) ? 0 == scrollbarWidth() : /(Chrome|CriOS)/.test(navigator.userAgent) ? /Mobile/.test(navigator.userAgent) || "ontouchstart" in window : "ontouchstart" in window
	},
	getTouch = function () {
		return /Trident|Edge/.test(navigator.userAgent) ? window.navigator.pointerEnabled ? {
			START: "pointerdown",
			MOVE: "pointermove",
			END: "pointerup",
			CANCEL: "pointercancel"
		} : {
			START: "MSPointerDown",
			MOVE: "MSPointerMove",
			END: "MSPointerUp",
			CANCEL: "MSPointerCancel"
		} : {
			START: "touchstart",
			MOVE: "touchmove",
			END: "touchend",
			CANCEL: "touchcancel"
		}
	},
	hasLocalStorage = function () {
		try {
			return localStorage.setItem("_t", "undefined"), localStorage.removeItem("_t"), !0
		}
		catch (t) {
			return !1
		}
	},
	hasHistory = function () {
		var t = navigator.userAgent;
		return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? window.history && "pushState" in window.history : !1
	},
	addClass = function (t, n) {
		t.classList ? t.classList.add(n) : t.className += " " + n
	},
	getVendor = function () {
		var t = navigator.userAgent;
		return t.indexOf("Trident") > 0 ? "ms" : t.indexOf("AppleWebKit") > 0 ? "webkit" : t.indexOf("Gecko") > 0 ? "moz" : t.indexOf("Presto") > 0 ? "o" : t.indexOf("Blink") > 0 ? "webkit" : ""
	},
	UNDEF = "undefined",
	NOLINK = "javascript:void(0)",
	LOCAL = 0 === location.protocol.indexOf("file:"),
	LOCALSTORAGE = hasLocalStorage(),
	HISTORY = hasHistory(),
	VEND = getVendor(),
	TOUCH = getTouch(),
	TOUCHENABLED = isTouchEnabled();
addClass(document.getElementsByTagName("html")[0], (TOUCHENABLED ? "" : "no-") + "touch");
var log = function () {},
	DEBUG = "undefined" == typeof DEBUG ? !1 : DEBUG;
! function (t, n) {
	var e, r, i = !1,
		o = 1;
	log = function (n) {
		var a = function (n) {
			if (t.isArray(n)) {
				for (var e = "", r = 0; r < n.length; r++) e += a(n[r]) + ", ";
				return "[ " + e.substring(0, e.length - 2) + " ]"
			}
			if ("object" == typeof n) {
				var e = "";
				for (var r in n) e += r + ": " + a(n[r]) + ",<br>";
				return "{ " + e + " }"
			}
			return isNaN(n) ? n : parseInt(n) === n ? n : n.toFixed(4)
		};
		DEBUG && !i && (e || (e = t('<div id="log" style="position:fixed;left:0;top:0;width:200px;bottom:0;overflow:auto;padding:10px;background-color:rgba(0,0,0,0.5);color:#fff;font-size:0.75em;z-index:999999"></div>').hover(function () {
			i = !0
		}, function () {
			i = !1
		}).appendTo("body")), n === r ? e.children(":first").empty().html(r + " <sup>(" + ++o + ")</sup>") : (t('<div style="height:3em;overflow:auto;">' + a(n) + "</div>").prependTo(e), r = n, o = 1))
	}, t.fn.logEvents = function (n) {
		if (DEBUG) {
			var e = n || "mousedown mouseup mouseover mouseout mousewheel wheel dragstart click blur focus load unload reset submit change abort cut copy paste selection drag drop orientationchange touchstart touchmove touchend touchcancel pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp gesturestart gesturechange gestureend";
			return this.each(function () {
				t(this).on(e, function (t) {
					return "undefined" == typeof t ? log("Undefined event") : t.target ? "log" !== t.target.id && log(t.type + ' <span style="padding:0 4px;font-size:0.75em;background-color:#000;border-radius:4px;"><b>' + (t.target.nodeName ? t.target.nodeName.toLowerCase() : "???") + "</b>" + (t.target.id ? ":" + t.target.id : "") + "</span>" + (t.relatedTarget ? ' <span style="padding:0 4px;font-size:0.6em;background-color:#800;border-radius:4px;"><b>' + t.relatedTarget.nodeName.toLowerCase() + "</b>" + (t.relatedTarget.id ? ":" + t.relatedTarget.id : "") + "</span>" : "")) : log("No event target!"), !0
				})
			})
		}
	}, t.fn.logCss = function (n, e, r) {
		if (DEBUG) {
			r = r || 20, e = e || 2e3;
			var i = new Date;
			return this.each(function () {
				var o = t(this),
					a = function (t) {
						var n = new Date - i;
						log(n + " :: " + t + " = " + o.css(t)), n > e && clearInterval(s)
					},
					s = setInterval(function () {
						if (t.isArray(n))
							for (var e = 0; e < n.length; e++) a(n[e]);
						else a(n)
					}, r)
			})
		}
	}, t.when.all === n && (t.when.all = function (n) {
		var e = new t.Deferred;
		return t.when.apply(t, n).then(function () {
			e.resolve(Array.prototype.slice.call(arguments))
		}, function () {
			e.fail(Array.prototype.slice.call(arguments))
		}), e
	}), t.fn.waitAllImg = function (n, e, r) {
		var i = t(this),
			o = [],
			a = function (n) {
				var e = new t.Deferred,
					r = new Image;
				return r.onload = function () {
					e.resolve(n)
				}, r.onerror = function () {
					e.reject(new Error("Image not found: " + n.src))
				}, r.src = n.src, e
			},
			s = function (n) {
				return n.filter('img[src][src!=""]').each(function () {
					o.push(a(this))
				}), t.when.all(o)
			};
		return s(i).then(function (n) {
			t.isFunction(e) && e.call(n)
		}, function (n) {
			t.isFunction(r) && r.call(n)
		}).then(function () {
			t.isFunction(n) && n.call(i)
		}), this
	}
}(jQuery);
! function (e) {
	"use strict";
	var t = function () {
		try {
			return localStorage.setItem("_t", VER), localStorage.removeItem("_t"), !0
		}
		catch (e) {
			return !1
		}
	}();
	e.cookie = function (r, n, o) {
		var i, a, l = "; ",
			s = function (e) {
				return /^(true|yes)$/.test(e) ? !0 : /^(false|no)$/.test(e) ? !1 : /^([\d.]+)$/.test(e) ? parseFloat(e) : e
			};
		if (arguments.length > 1) return a = new Date, null === n ? t ? localStorage.removeItem(r) : document.cookie = encodeURIComponent(r) + "=; expires=" + a.toGMTString() + "; path=/" : /^(string|number|boolean)$/.test(typeof n) && (a.setTime(a.getTime() + 1e3 * ("number" != typeof o ? 3600 : o)), t ? localStorage.setItem(r, String(n) + l + String(a.getTime())) : document.cookie = encodeURIComponent(r) + "=" + String(n) + "; expires=" + a.toGMTString() + "; path=/"), n;
		if (r)
			if (t) {
				if (i = localStorage.getItem(r)) {
					if (i = i.split(l), !(e.isArray(i) && i.length > 1)) return s(i);
					if (a = new Date, a.getTime() < parseInt(i[1], 10)) return s(i[0]);
					localStorage.removeItem(r)
				}
			}
		else {
			var u;
			i = document.cookie.split(";"), r += "=";
			for (var c = 0; c < i.length; c++) u = i[c].trim(), 0 === u.indexOf(r) && (u = u.substring(r.length), s(u))
		}
		return null
	}
}(jQuery);
! function (t) {
	var a = "moz" === VEND ? "transform" : "-" + VEND + "-transform";
	t.fn.translate = function (r, s, n) {
		return this.each(function () {
			n && t(this).addClass(n).data("tr_cls", n), this.style[a] = "translate(" + (r || 0) + "px," + (s || 0) + "px)", t(this).data({
				tr_x: r,
				tr_y: s
			})
		})
	}, t.fn.translateToPos = function () {
		return this.each(function () {
			var r = t(this),
				s = r.data("tr_x") || 0,
				n = r.data("tr_y") || 0;
			if (s || n) {
				var e = r.position(),
					o = r.data("tr_cls");
				o && r.removeClass(o), this.style[a] = "translate(0,0)", r.removeData("tr_x tr_y").css({
					left: e.left,
					top: e.top
				})
			}
		})
	}
}(jQuery, document);
! function (e) {
	"use strict";
	var n = function () {
			return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
		},
		l = function (e) {
			n() || (e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && document.body.msRequestFullscreen())
		},
		u = function () {
			n() && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen())
		};
	e.fn.fullScreen = function (e) {
		return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled ? "undefined" == typeof e ? n() : void(e ? l(this[0]) : u()) : !1
	}
}(jQuery);
! function (t) {
	"use strict";
	t.event.special.dbltap = {
		setup: function () {
			t(this).on("touchend.dbltap", t.event.special.dbltap.handler)
		},
		teardown: function () {
			t(this).off("touchend.dbltap")
		},
		handler: function (e) {
			var a = [].slice.call(arguments, 1),
				n = t(e.target),
				l = (new Date).getTime(),
				d = l - (n.data("lastTouch") || 0);
			return d > 5 && 300 > d ? (e.preventDefault(), n.data("lastTouch", 0), e = t.event.fix(e || window.event), e.type = "dbltap", a.unshift(e), (t.event.dispatch || t.event.handle).apply(this, a)) : (n.data("lastTouch", l), !0)
		}
	}
}(jQuery);
! function (t) {
	"use strict";
	var o = 0,
		e = 0,
		s = 1,
		a = 1,
		n = 2,
		p = 2,
		i = ["left", "center", "right"],
		r = ["top", "middle", "bottom"],
		l = "align-left align-center align-right valign-top valign-middle valign-bottom";
	t.fn.alignTo = function (f, d) {
		if (d = t.extend({}, t.fn.alignTo.defaults, d), "string" == typeof f && (f = t(f)), f instanceof t && f.length) {
			var g, h, c, u = t(window).width(),
				v = t(window).height(),
				m = function (o) {
					var e = {
						left: 0,
						top: 0
					};
					return o.parents().each(function () {
						return "fixed" === t(this).css("position") ? (e.left = t(window).scrollLeft(), e.top = t(window).scrollTop(), !1) : void 0
					}), e
				},
				w = m(f);
			if ("AREA" === f[0].nodeName && "RECT" === f[0].shape.toUpperCase()) {
				var I = f[0].coords.split(",");
				h = parseInt(I[2], 10) - parseInt(I[0], 10), c = parseInt(I[3], 10) - parseInt(I[1], 10), g = f.parent().offset(), g.left += parseInt(I[0], 10), g.top += parseInt(I[1], 10)
			}
			else g = f.offset(), h = f.outerWidth(), c = f.outerHeight();
			return g.left -= w.left, g.top -= w.top, t(this).each(function () {
				var f = t(this),
					m = d.pos[2],
					I = d.pos[3];
				f.css("maxHeight", "none");
				var x = f.outerWidth(),
					M = f.outerHeight(),
					T = Math.round(g.left + d.pos[2] * h / 2 + (d.pos[2] - 1) * d.gap),
					C = Math.round(g.top + d.pos[3] * c / 2 + (d.pos[3] - 1) * d.gap),
					H = Math.round(T - d.pos[0] * x / 2),
					b = Math.round(C - d.pos[1] * M / 2);
				(0 > b || b + M > v) && (d.pos[2] !== s ? b = 2 * b + M > v ? v - M : 0 : d.pos[3] === e ? v > 2 * g.top + c && (b = g.top + c + d.gap, I = p) : d.pos[3] === p && v < 2 * g.top + c && (b = Math.max(0, g.top - M - d.gap), I = e), 0 > b && (b = 0), b + M > v && f.css({
					overflow: "auto",
					maxHeight: v - b - (parseInt(f.css("paddingTop"), 10) + parseInt(f.css("paddingBottom"), 10))
				})), (0 > H || H + x > u) && (d.pos[3] !== a ? H = 2 * H + x > u ? u - x : 0 : d.pos[2] === o ? u > 2 * g.left + h && (H = g.left + h + d.gap, m = n) : d.pos[2] === n && u < 2 * g.left + h && (H = Math.max(0, g.left - x - d.gap), m = o), 0 > H && (H = 0), H + x > u && f.css({
					overflow: "auto",
					maxWidth: u - H - (parseInt(f.css("paddingLeft"), 10) + parseInt(f.css("paddingRight"), 10))
				})), f.css({
					position: "absolute",
					left: H + w.left,
					top: b + w.top
				}).removeClass(l).addClass("align-" + i[m]).addClass("valign-" + r[I])
			})
		}
	}, t.fn.alignTo.defaults = {
		gap: 0,
		pos: [s, p, s, e]
	}
}(jQuery);
! function (t) {
	"use strict";
	t.fn.hideAllTooltips = function () {
		return this.each(function () {
			t(this).find("[data-tooltip-id]").each(function () {
				var e = t(this).attr("data-tooltip-id");
				e && e.length && t("#" + e).hide()
			})
		})
	}, t.fn.destroyAllTooltips = function () {
		return this.each(function () {
			t(this).find("[data-tooltip-id]").each(function () {
				var e = t(this).attr("data-tooltip-id");
				e && e.length && t("#" + e).remove()
			})
		})
	}, t.fn.addTooltip = function (e, o) {
		typeof e === UNDEF || "string" == typeof e || e.jquery || (o = e, e = null), o = t.extend({}, t.fn.addTooltip.defaults, o);
		var i = function (e, i) {
			var n;
			if (i)
				if ("string" == typeof i) n = t("<div>", {
					html: i
				}).appendTo("body");
				else {
					if (!i.jquery) return null;
					n = t.contains(document.body, i[0]) ? i : i.appendTo("body")
				}
			else {
				if ((i = e.data("tooltip")) ? ("." === i.charAt(0) ? i = e.find(i).eq(0) : "#" === i.charAt(0) && (i = t(i)), i.jquery && i.removeClass("hidden")) : (i = e.attr("title"), e.removeAttr("title")), !i || !i.length) return null;
				n = t("<div>", {
					html: i
				}).appendTo("body")
			}
			return n.is(":empty") ? null : (n.attr("id", e.attr("data-tooltip-id")).addClass(o.className).attr("role", "tooltip").attr("aria-hidden", !0).hide().append(t("<span>", {
				'class': o.nub
			})), n)
		};
		return this.each(function () {
			if (this["data-tooltip-id"]) return !0;
			var n, a, r, u, l, f = t(this),
				s = !1,
				d = !1,
				c = "",
				p = !1,
				T = "_ltt_" + Math.floor(1e4 * Math.random()),
				h = /(Firefox\/\d+)/.test(navigator.userAgent),
				m = function () {
					return !!(n = i(f, e)) && (n.on("mouseover." + T, v).on("mouseout." + T, y), n.find("input, textarea").on("focus." + T, function () {
						d = !0, v()
					}).on("blur." + T, function () {
						d = !1
					}), !0)
				},
				v = function (t) {
					r = clearTimeout(r), s = !0, n.finish().show()
				},
				y = function (t) {
					d || (clearTimeout(r), s = !1, r = setTimeout(g, 100))
				},
				g = function () {
					a = clearTimeout(a), r = clearTimeout(r), s = !1, c = "", n && n.stop(!0, !1).fadeOut(200, function () {
						n.hide()
					})
				},
				b = function () {
					var t = f.offset();
					u || (u = t), t.top === u.top && t.left === u.left && n.fadeIn(300).alignTo(f, {
						gap: 10,
						pos: o.pos
					}), setTimeout(function () {
						c = ""
					}, 1e3)
				},
				A = function (t) {
					r = -1 === c.indexOf(TOUCH.START) ? setTimeout(g, 100) : setTimeout(g, 8e3)
				},
				O = function (t) {
					t.preventDefault(), a = clearTimeout(a), r = clearTimeout(r)
				},
				x = function () {
					return !!n && n.is(":visible") && n.css("opacity") > .99
				},
				C = function (t) {
					var e = t.closest("a");
					return e.length && e.attr("href") && !e.attr("href").startsWith("javascript")
				},
				j = function (e) {
					if (a = clearTimeout(a), -1 !== c.indexOf(TOUCH.START) || h) {
						var i = new Date;
						if (o.touchToggle || i - l > 1e3) return !(!C(t(e.target)) || !x()) || (O(e), p ? g() : b(), !1)
					}
					return p && (r = clearTimeout(r), g()), c = "", s = !1, !0
				},
				U = function (t) {
					var e = new Date;
					if (c ? -1 === c.indexOf(t.type) && (c += "." + t.type) : (c = "." + t.type, p = x(), l = e, u = f.offset()), n) n.stop(!0, !1), r = clearTimeout(r);
					else if (!m()) return q(), !0;
					return clearTimeout(a), t.type !== TOUCH.START && (a = setTimeout(b, o.delay)), !0
				},
				q = function (e) {
					f.off("." + T), a = clearTimeout(a), r = clearTimeout(r), t("#" + f.attr("data-tooltip-id")).remove(), f.attr("data-tooltip-id", null)
				};
			f.attr("data-tooltip-id", T).on("destroyTooltip", q).on("removeTooltip", g).on("focus." + T + " mouseenter." + T + " " + TOUCH.START + "." + T, U).on("blur." + T + " mouseleave." + T, A).on("click." + T, j)
		})
	}, t.fn.addTooltip.defaults = {
		delay: 50,
		className: "tooltip",
		nub: "nub",
		stay: 2e3,
		touchToggle: !1,
		pos: [1, 2, 1, 0]
	}
}(jQuery);
! function (t, e, o) {
	"use strict";
	t.fn.addModal = function (n, a, i) {
		if ("string" == typeof n && (n = t(n)), n instanceof t && n.length) {
			t.isArray(a) || (i = a, a = null), (i = t.extend({}, t.fn.addModal.defaults, i)).savePosition = i.savePosition && "uid" in i;
			var s, d, r, u, l, p, c, h, f, m = t(this),
				v = getTranslations(t.fn.addModal.text),
				g = "_lmo_" + Math.floor(1e4 * Math.random()),
				w = {
					w: "_m_window",
					p: "_m_panel",
					h: "_m_head",
					c: "_m_cont",
					ci: "_m_cont_i",
					x: "close",
					r: "resize"
				},
				y = 0,
				M = function (t) {
					return t.touches && 1 === t.touches.length ? {
						x: Math.round(t.touches[0].clientX),
						y: Math.round(t.touches[0].clientY)
					} : null !== t.clientX ? {
						x: Math.round(t.clientX),
						y: Math.round(t.clientY)
					} : null
				},
				T = function () {
					c = m.width(), h = m.height()
				},
				b = function (t) {
					if ("A" === t.target.nodeName || "mousedown" === t.type && 1 !== t.which || d.is(":hidden")) return !0;
					t.preventDefault();
					var o = d.position().left,
						n = d.position().top,
						a = M(t.originalEvent),
						s = c - d.width() - i.pad,
						l = h - d.height() - i.pad,
						p = r.css("cursor");
					u.trigger("removeTooltip"), r.css({
						cursor: "move"
					});
					var f = function (t) {
							t.preventDefault();
							var e = M(t.originalEvent);
							return d.css({
								left: Math.minMax(i.pad, o + e.x - a.x, s),
								top: Math.minMax(i.pad, n + e.y - a.y, l)
							}), !1
						},
						m = function (t) {
							return t.preventDefault(), "mouseup" === t.type ? e.off("mousemove." + g).off("mouseup." + g) : r.off(TOUCH.MOVE + "." + g).off(TOUCH.END + "." + g), r.css("cursor", p), i.savePosition && O(), !1
						};
					return "mousedown" === t.type ? e.on("mousemove." + g, f).on("mouseup." + g, m) : r.on(TOUCH.MOVE + "." + g, f).on(TOUCH.END + "." + g, m), !1
				},
				x = function (t) {
					return t && t.preventDefault(), u.trigger("removeTooltip"), f = clearTimeout(f), s.animate({
						opacity: 0
					}, i.speed, function () {
						s.remove()
					}), !1
				},
				k = function () {
					var t = d.width(),
						e = d.height();
					y = e - p.height(), t && e && c && h && (t + 2 * i.pad > c && d.css({
						width: t = c - 2 * i.pad
					}), e + 2 * i.pad > h && (d.css({
						height: e = h - 2 * i.pad
					}), p.css({
						height: h - 2 * i.pad - y
					})), d.css({
						left: Math.max(Math.round((c - t) * i.pos[0] / 2), i.pad),
						top: Math.max(Math.round((h - e) * i.pos[1] / 2), i.pad)
					}))
				},
				C = function (t) {
					var e, o = Math.minMax(i.pad, parseInt(t[0], 10), c - i.pad - 60),
						n = Math.minMax(i.pad, parseInt(t[1], 10), h - i.pad - 60),
						a = Math.minMax(120, parseInt(t[2], 10), c - o - i.pad);
					(isNaN(o) || isNaN(n) || isNaN(a)) && k(), y = r.outerHeight() + parseInt(l.css("padding-top"), 10) + parseInt(l.css("padding-bottom"), 10) + parseInt(p.css("padding-top"), 10) + parseInt(p.css("padding-bottom"), 10) + parseInt(l.css("border-top-width"), 10), d.css({
						position: "absolute",
						left: o,
						top: n,
						width: a
					}), d.height() > (e = h - n - i.pad) && (d.css({
						height: e
					}), p.css({
						height: e - y
					}))
				},
				O = function () {
					d.is(":visible") && t.cookie("modalPosition" + i.uid, d.position().left + "," + d.position().top + "," + d.width() + "," + d.height())
				};
			if (i.uid && t("#" + i.uid).parents("." + w.w).remove(), i.defaultButton && (i.defaultButton = translate(i.defaultButton, "OK")), function () {
					s = t("<div>", {
						'class': w.w,
						role: "dialog",
						"data-role": "dialog",
						"aria-hidden": !0,
						"aria-labelledby": w.h
					}).css({
						opacity: 0
					}).appendTo(m), m.css({
						position: "relative"
					}), T(), i.darkenBackground && s.addClass("darken"), d = t("<div>", {
						id: i.uid || g,
						'class': w.p + " " + i.type
					}).css({
						width: i.width
					}).appendTo(s), (r = t("<header>", {
						'class': w.h
					}).appendTo(d)).append(t("<h5>", {
						id: w.h,
						text: i.title || ("error" === i.type || "warning" === i.type ? v[i.type] : "")
					})), "error" !== i.type && "warning" !== i.type || r.append(t("<span>", {
						'class': i.type,
						text: "!"
					})), (u = t("<a>", {
						'class': w.x,
						html: "×"
					}).appendTo(r)).addTooltip(v.closeWindow), u.on("click." + g, x), i.blocking && i.closeOnClickOut && s.one("click." + g, function (e) {
						if (t(e.target).hasClass(w.w)) return x(e)
					}), i.movable && r.on(TOUCH.START + "." + g + " mousedown." + g, b)
				}(), function (e) {
					l = t("<div>", {
						'class': w.c
					}).appendTo(d), p = t("<div>", {
						'class': w.ci
					}).append(e).appendTo(l)
				}(n), function () {
					var o = function (e) {
							h.each(function (o) {
								t(this).toggleClass("active", o === e)
							})
						},
						n = function () {
							e.off("keydown." + g), x()
						},
						r = function (e) {
							if (document.activeElement && "input" === document.activeElement.nodeName || t.isFunction(i.enableKeyboard) && !i.enableKeyboard()) return !0;
							var a = e ? e.keyCode : window.event.keyCode;
							if (27 === a) return n(), !1;
							if (f) {
								var d = f.find("a.active"),
									r = h.index(d);
								switch (a) {
									case 13:
									case 10:
										t.isFunction(d[0].handler) && !1 !== d[0].handler.call(s) && n();
										break;
									case 39:
										o((r + 1) % h.length);
										break;
									case 37:
										o(r ? r - 1 : h.length - 1);
										break;
									default:
										return !0
								}
								return !1
							}
							return !0
						},
						u = function (e) {
							e.preventDefault();
							var o = e.target;
							return t.isFunction(o.handler) && !1 !== o.handler.call(s, d) && n(), !1
						};
					if (a) {
						var l, c, h, f = t("<div>", {
							'class': "buttons"
						}).appendTo(p);
						for (l = 0; l < a.length; l++) l && f.append(" "), c = t("<a>", {
							html: a[l].t
						}).on("click." + g, u).appendTo(f), t.isFunction(a[l].h) && (c[0].handler = a[l].h);
						(h = f.children("a")).last().addClass("active"), (t.isFunction(i.enableKeyboard) || i.enableKeyboard) && e.on("keydown." + g, r)
					}
					else i.defaultButton && (a = [{
						t: i.defaultButton,
						h: x
					}])
				}(), function (e) {
					s.css({
						opacity: 0
					}).show(), setTimeout(function () {
						if (i.savePosition) {
							var e = t.cookie("modalPosition" + i.uid);
							e && (e = e.split(",")) && t.isArray(e) && e.length > 3 ? C(e) : k(), setTimeout(function () {
								O()
							}, i.speed)
						}
						else k();
						i.blocking || s.css({
							width: 0,
							height: 0,
							right: "auto",
							bottom: "auto",
							overflow: "visible"
						}), s.animate({
							opacity: 1
						}, i.speed).attr({
							tabindex: 0,
							"aria-hidden": !1
						}).focus(), i.autoFade && (f = setTimeout(x, i.autoFade)), i.scrollIntoView && setTimeout(function () {
							var t = p.children(":not(.buttons)").find(".active:first");
							t && t.length && p.scrollTop(Math.max(Math.floor(t.position().top) - 50, 0))
						}, 200)
					}, 40)
				}(), o.on("resize." + g, T), s.on("destroy." + g, x), i.resizable) {
				var E = t("<a>", {
						'class': w.r
					}).appendTo(d),
					D = function (t) {
						t.preventDefault();
						var e = [d.position().left, d.position().top, d.width(), d.height()],
							o = [i.pad, i.pad, c - 2 * i.pad, h - 2 * i.pad],
							n = function (t) {
								d.css({
									left: Math.minMax(i.gap, t[0], c - t[2] - i.gap),
									top: Math.minMax(i.gap, t[1], h - t[3] - i.gap),
									width: t[2],
									height: t[3]
								}), p.css({
									height: t[3] - y
								})
							};
						return e[0] === o[0] && e[1] === o[1] && e[2] === o[2] && e[3] === o[3] ? n(d.data("wpos")) : (n(o), d.data("wpos", e)), i.savePosition && O(), !1
					},
					_ = function (t) {
						if ("mousedown" === t.type && 1 !== t.which || d.is(":hidden")) return !0;
						t.preventDefault();
						var o = d.width(),
							n = d.height(),
							a = M(t.originalEvent),
							r = s.width(),
							l = h - i.pad - d.position().top - y,
							r = c - i.pad - d.position().left,
							f = function (t) {
								t.preventDefault();
								var e = M(t.originalEvent),
									i = Math.min(Math.max(n + e.y - a.y - y, 20), l);
								return d.css({
									width: Math.min(Math.max(o + e.x - a.x, 60), r),
									height: i + y
								}), p.css({
									height: i
								}), !1
							},
							m = function (t) {
								return t.preventDefault(), "mouseup" === t.type ? e.off("mousemove." + g).off("mouseup." + g) : E.off(TOUCH.MOVE + "." + g).off(TOUCH.END + "." + g), i.savePosition && O(), !1
							};
						return u.trigger("removeTooltip"), "mousedown" === t.type ? e.on("mousemove." + g, f).on("mouseup." + g, m) : E.on(TOUCH.MOVE + "." + g, f).on(TOUCH.END + "." + g, m), !1
					};
				r.on("dblclick." + g, D), E.on(TOUCH.START + "." + g + " mousedown." + g, _)
			}
			return this
		}
	}, t.fn.addModal.defaults = {
		speed: 300,
		autoFade: 0,
		width: 400,
		resizable: !1,
		movable: !0,
		blocking: !0,
		enableKeyboard: !0,
		closeOnClickOut: !0,
		darkenBackground: !0,
		savePosition: !1,
		scrollIntoView: !1,
		defaultButton: "okButton",
		pad: 6,
		pos: [1, 1],
		type: "normal"
	}, t.fn.addModal.text = {
		closeWindow: "Close window",
		error: "error",
		warning: "warning"
	}
}(jQuery, $(document), $(window));
! function (t) {
	"use strict";
	t.fn.loadImages = function (e) {
		return e = t.extend({}, t.fn.loadImages.defaults, e), this.each(function () {
			var i = t(this),
				o = i.find(e.selector).eq(0) || i.children().eq(0);
			if (o.length && i.is(":visible") && o.is(":visible")) {
				var s = o.find("img." + e.loadClass);
				if (s.length) {
					var a, l, n, d, f, r, h = "absolute" === o.css("position"),
						c = -("left" in e ? e.left : o.position().left - (h ? 0 : i.scrollLeft())) - e.d,
						u = -("top" in e ? e.top : o.position().top - (h ? 0 : i.scrollTop())) - e.d,
						p = o.offset().left,
						g = o.offset().top,
						w = (h ? i.width() : t(window).width()) + 2 * e.d,
						v = (h ? i.height() : t(window).height()) + 2 * e.d,
						m = 0;
					s.each(function () {
						return l = t(this), a = l.parent(), (f = l.data("src")) && (d = a.offset().left - p, n = a.offset().top - g, u + v > n && c + w > d && n + a.outerHeight() > u && d + a.outerWidth() > c && (r = t("<span>", {
							"class": e.wait
						}).appendTo(a), l.hide().on("load", function () {
							t(this).fadeIn().siblings("." + e.wait).remove()
						}).attr({
							src: f
						}).removeClass(e.loadClass), m++), n > u + v || d > c + w) ? !1 : void 0
					})
				}
			}
		})
	}, t.fn.loadImages.defaults = {
		selector: ".load",
		loadClass: "toload",
		wait: "wait",
		d: 80
	}
}(jQuery);
! function (t, e, o, n) {
	"use strict";
	t.fn.addScroll = function (i) {
		return i = t.extend({}, t.fn.addScroll.defaults, i), this.each(function () {
			var a, r, s, l, c, u, d, p, h, f, g, v, m, T, b, y, M = t(this),
				w = "_las_" + Math.floor(1e4 * Math.random()),
				E = M.parent(),
				D = 0,
				O = function (t) {
					return D = t.touches && t.touches.length > 0 ? t.touches[0].clientY : typeof t.clientY !== UNDEF ? t.clientY : D
				},
				C = function () {
					d = M.height(), p = E.height()
				},
				U = function () {
					return M.position().top
				},
				_ = function (t) {
					return Math.round((l.height() - 6) * -(null == t ? U() : t) / d) + 3
				},
				H = function () {
					return Math.max(Math.round((l.height() - 6) * p / d), i.dragMinSize)
				},
				I = function (t) {
					return t.preventDefault(), !1
				},
				A = function (t) {
					"function" == typeof E.loadImages && (typeof t !== UNDEF ? E.loadImages({
						top: t
					}) : E.loadImages())
				},
				N = function (t) {
					return t.preventDefault(), c.css({
						top: Math.minMax(2, Math.round(O(t.originalEvent) - c.data("my")), l.height() - c.height() - 2)
					}), V(), !1
				},
				k = function () {
					e.off("mousemove._h" + w + " mouseup._h" + w), n.off("pointermove._h" + w + " pointerup._h" + w), c.off(TOUCH.MOVE + "._h" + w + " " + TOUCH.END + "._h" + w)
				},
				S = function (t) {
					return t.preventDefault(), k(), !1
				},
				x = function (o) {
					return "mousedown" === o.type && 1 !== o.which ? !0 : (o.preventDefault(), M.hideAllTooltips(), t(this).data("my", Math.round(O(o.originalEvent)) - c.position().top), "mousedown" === o.type ? e.on("mousemove._h" + w, N).on("mouseup._h" + w, S) : "pointerdown" === o.type ? n.on("pointermove._h" + w, N).on("pointerup._h" + w, S) : c.on(TOUCH.MOVE + "._h" + w, N).on(TOUCH.END + "._h" + w, S), !1)
				},
				K = function (t) {
					null == t && (t = U()), r.css({
						opacity: t ? 1 : i.disabledOpacity
					}), s.css({
						opacity: t === p - d ? i.disabledOpacity : 1
					})
				},
				F = function () {
					var t = d,
						e = p;
					C(), E.scrollTop() && (M.css({
						top: -E.scrollTop()
					}), E.scrollTop(0)), (t !== d || e !== p) && (p >= d ? (M.css({
						top: 0
					}).off("selectstart." + w), u.hide()) : (M.position().top < p - d && M.css({
						top: p - d
					}), c.css({
						top: _(),
						height: H()
					}), M.on("selectstart." + w, I), u.show(), K()), A())
				},
				V = function () {
					M.css({
						top: Math.minMax(p - d, -Math.round((c.position().top - 3) * d / (l.height() - 6)), 0)
					}), K(), A()
				},
				z = function (t) {
					clearInterval(h), p >= d || (t = Math.minMax(p - d, Math.round(t), 0), c.stop(!0, !1).animate({
						top: _(t)
					}, i.speed, i.effect), M.stop(!0, !1).animate({
						top: t
					}, i.speed, i.effect, function () {
						K(t)
					}), A(t))
				},
				R = function () {
					b += Math.round(T / 20);
					var t = m + b;
					return t > 0 || y > t ? (clearInterval(h), void A()) : (M.css({
						top: t
					}), c.css({
						top: _(),
						height: H()
					}), T *= .8, void(Math.abs(T) < 10 && (T = 0, clearInterval(h), A())))
				},
				Y = function (t) {
					if (g) {
						var e = O(t.originalEvent) - g;
						e && (M.data("scrolling", !0), M.css({
							top: Math.minMax(y, f + e, 0)
						}), c.css({
							top: _(),
							height: H()
						}))
					}
					else g = O(t.originalEvent);
					return !1
				},
				$ = function () {
					e.off("mousemove." + w + " mouseup." + w), n.off("pointermove." + w + " pointerup." + w), M.off(TOUCH.MOVE + "." + w + " " + TOUCH.END + "." + w)
				},
				j = function (e) {
					M.removeClass("scrolling"), $(), m = U();
					var o = ("mouseup" === e.type ? O(e.originalEvent) : D) - g,
						n = (new Date).getTime() - v;
					if (Math.abs(o) < 5 || 20 > n) {
						M.data("scrolling", !1);
						var i = t(e.target).closest("a");
						return i.length && (i.attr("href") ? i[0].click() : i.trigger("click")), !0
					}
					return e.preventDefault(), T = 1e3 * o / n, h = setInterval(R, 50), setTimeout(function () {
						M.data("scrolling", !1)
					}, 30), A(), !1
				},
				P = function (o) {
					if ("mousedown" === o.type && 1 !== o.which) return !0;
					var a = o.target.nodeName;
					return "INPUT" === a || "TEXTAREA" === a || "BUTTON" === a || "SELECT" === a ? !0 : i.dontDrag && (t(o.target).is(i.dontDrag).length || t(o.target).parents(i.dontDrag).length) ? !0 : M.data("scrolling") ? (j(o), !0) : o.target.scrollHeight - 1 > o.target.clientHeight ? !0 : p >= d || "touchstart" === o.type && (!o.originalEvent.touches || o.originalEvent.touches.length > 1 || M.is(":animated")) ? !0 : ($(), t(o.target).closest("[data-tooltip-id]").trigger("removetooltip"), M.data("scrolling", !0), c.stop(!0, !0), M.stop(!0, !0), clearInterval(h), f = U(), g = O(o.originalEvent), v = (new Date).getTime(), b = 0, y = p - d, M.hideAllTooltips(), M.addClass("scrolling"), "mousedown" === o.type ? e.on("mousemove." + w, Y).on("mouseup." + w, j) : "pointerdown" === o.type ? n.on("pointermove." + w, Y).on("pointerup." + w, j) : M.on(TOUCH.MOVE + "." + w, Y).on(TOUCH.END + "." + w, j), !1)
				},
				W = function () {
					M.css({
						position: "absolute",
						width: E.width - 20
					}), E.css({
						overflow: "hidden"
					}), "absolute" !== E.css("position") && E.css({
						position: "relative"
					}), r = t("<div>", {
						"class": i.upbtn
					}).appendTo(E), s = t("<div>", {
						"class": i.dnbtn
					}).appendTo(E), l = t("<div>", {
						"class": i.scbar
					}).appendTo(E), c = t("<div>").appendTo(l), u = r.add(s).add(l), u.hide(), u.on("selectstart." + w, I), r.on("click." + w, function () {
						return M.hideAllTooltips(), z(U() + p), !1
					}), s.on("click." + w, function () {
						return M.hideAllTooltips(), z(U() - p), !1
					}), l.on("click." + w, function (t) {
						M.hideAllTooltips();
						var e = O(t.originalEvent);
						return e < c.offset().top ? z(U() + p) : e > c.offset().top + c.height() && z(U() - p), !1
					}), c.attr("draggable", "true").on(TOUCH.START + "." + w + " dragstart." + w + " mousedown." + w, x)
				},
				B = function () {
					if (!M.data("scrolling")) {
						var e = t(this).parent() === M ? t(this) : t(this).parent(),
							o = e.position().top,
							n = e.outerHeight(!0),
							i = M.position().top,
							a = E.height();
						if (!(a > M.height())) {
							if (o + n > a - i) i = Math.max(a - n - o, a - M.height());
							else {
								if (!(-i > o)) return;
								i = -o
							}
							z(i)
						}
					}
				},
				L = function (t) {
					return M.data("scrolling") ? (t.preventDefault(), !1) : !0
				};
			W(), M.on("click." + w, "a", L), M.css("touch-action", "none").data("scrolling", !1).attr({
				draggable: !0,
				"data-custom-scroll": !0,
				"data-role": "scroll"
			}).on(TOUCH.START + "." + w + " dragstart." + w + " mousedown." + w, P), o.on("resize." + w, function () {
				clearTimeout(a), a = setTimeout(F, 50)
			}), a = setTimeout(F, 10), M.on("adjust", F), i.refresh && setInterval(function () {
				t("[data-role=gallery]").is(":visible") || F()
			}, i.refresh), i.focusActive && M.find("a").on("setactive", B), i.enableMouseWheel && M.on("mousewheel." + w, function (t, e) {
				return e && (clearTimeout(h), c.stop(!0, !0), M.stop(!0, !0), z(U() + i.wheelIncr * (0 > e ? -1 : 1))), !1
			}), (t.isFunction(i.enableKeyboard) || i.enableKeyboard) && e.on("keydown." + w, function (e) {
				if (document.activeElement && "INPUT" === document.activeElement.nodeName || t.isFunction(i.enableKeyboard) && !i.enableKeyboard()) return !0;
				var o = e ? e.keyCode : window.event.keyCode;
				switch (o) {
					case 33:
						return e.preventDefault(), z(U() + p), !1;
					case 34:
						return e.preventDefault(), z(U() - p), !1
				}
				return !0
			})
		})
	}, t.fn.addScroll.defaults = {
		upbtn: "scrup",
		dnbtn: "scrdn",
		scbar: "scrbar",
		dragMinSize: 10,
		speed: 300,
		effect: "swing",
		disabledOpacity: .3,
		wheelIncr: 50,
		enableKeyboard: !0,
		enableMouseWheel: !0,
		focusActive: !0,
		refresh: 0
	}
}(jQuery, $(document), $(window), $("body"));
! function (t, e) {
	"use strict";
	t.fn.scrollThumbs = function (n) {
		return n = t.extend({}, t.fn.scrollThumbs.defaults, n), this.each(function () {
			var o, i, a, l, s, r, c, f, u, d = t(this),
				h = "_lts_" + Math.floor(1e4 * Math.random()),
				p = d.parent(),
				v = 0,
				m = function (t) {
					return v = t.touches && 1 === t.touches.length ? t.touches[0].clientX : typeof t.clientX !== UNDEF ? t.clientX : v
				},
				g = function (t) {
					return t.preventDefault(), !1
				},
				w = t("<div>", {
					"class": n.scleft
				}).insertAfter(p),
				y = t("<div>", {
					"class": n.scright
				}).insertAfter(p),
				T = function (t) {
					t = null == t ? d.position().left : t, w.css({
						opacity: 0 > t ? 1 : n.disabledOpacity
					}), y.css({
						opacity: p.width() < t + d.width() ? 1 : n.disabledOpacity
					})
				},
				M = function (e) {
					var o = p.width(),
						i = d.width();
					o && i && !(o >= i) && t.isNumeric(e) && (e > 0 ? e = 0 : o - i > e && (e = o - i), T(e), d.stop(!0, !1), clearInterval(f), d.animate({
						left: e
					}, n.speed, n.effect), p.loadImages({
						left: e
					}))
				},
				b = function (t) {
					return t.preventDefault(), E(), M(d.position().left + p.width()), !1
				},
				D = function (t) {
					return t.preventDefault(), E(), M(d.position().left - p.width()), !1
				},
				E = function (t) {
					"number" == typeof u && clearTimeout(u), u = "undefined" != typeof t ? t : setTimeout(function () {
						u = !1
					}, n.seekStay)
				},
				O = function () {
					if (!d.data("scrolling") && !u) {
						var t = d.find(n.active).closest("li");
						if (t.length) {
							var e = t.position().left,
								o = t.outerWidth(!0),
								i = Math.round(o * n.headRoom),
								a = d.position().left,
								l = p.width();
							if (l > d.width()) return;
							if (e > l - o - i - a) a = Math.max(l - o - i - e, l - d.width());
							else {
								if (!(-a + i > e)) return;
								a = -e + i
							}
							M(a)
						}
					}
				},
				I = function (t, e) {
					return t.preventDefault(), e && (d.stop(!0, !1), clearInterval(f), E(), M(d.position().left + p.width() * (0 > e ? -1 : 1))), !1
				},
				k = function () {
					r += Math.round(s / 20);
					var t = l + r;
					return t > 0 || c > t ? void clearInterval(f) : (d.css({
						left: t
					}), s *= .8, void(Math.abs(s) < 10 && (s = 0, clearInterval(f))))
				},
				U = function (t) {
					if (i) {
						var e = m(t.originalEvent) - i;
						e && (d.data("scrolling", !0), d.css({
							left: Math.minMax(c, o + e, 0)
						}))
					}
					else i = m(t.originalEvent);
					return !1
				},
				C = function (n) {
					n.preventDefault(), l = d.position().left;
					var r = m(n.originalEvent) - i,
						c = (new Date).getTime() - a;
					return s = 1e3 * r / c, f = setInterval(k, 50), E(), "mouseup" === n.type ? e.off("mousemove." + h).off("mouseup." + h) : d.off(TOUCH.MOVE + "." + h).off(TOUCH.END + "." + h), Math.abs(r) < 10 ? (d.data("scrolling", !1), t(n.target).off("click." + h), t(n.target).closest("a").trigger("click", n)) : (p.loadImages({
						left: o + 2 * r
					}), setTimeout(function () {
						d.data("scrolling", !1), t(n.target).off("click." + h)
					}, 30)), !1
				},
				H = function (n) {
					return "mousedown" === n.type && 1 !== n.which ? !0 : (n.preventDefault(), "touchstart" === n.type && (!n.originalEvent.touches || n.originalEvent.touches.length > 1 || d.is(":animated")) ? !0 : (d.stop(!0, !1), clearInterval(f), E(!0), o = d.position().left, i = m(n.originalEvent), a = (new Date).getTime(), r = 0, c = p.width() - d.width(), c >= 0 ? !0 : ("mousedown" === n.type ? (e.on("mousemove." + h, U).on("mouseup." + h, C), t(n.target).on("click." + h, g)) : (t(n.target).closest("a").focus(), d.on(TOUCH.MOVE + "." + h, U).on(TOUCH.END + "." + h, C)), !1)))
				};
			n.enableMouseWheel && d.on("mousewheel", I), T(), d.on("setactive", O), w.on("click." + h, b), y.on("click." + h, D), d.on(TOUCH.START + "." + h + " mousedown." + h, H), d.attr({
				"data-role": "scroll",
				"data-custom-scroll": !0
			}).data("scrolling", !1), d.add(w).add(y).on("selectstart." + h, g), p.loadImages()
		})
	}, t.fn.scrollThumbs.defaults = {
		active: ".active",
		scleft: "scleft",
		scright: "scright",
		seekStay: 3e3,
		speed: 1500,
		incr: 100,
		effect: "swing",
		headRoom: .67,
		disabledOpacity: .3,
		enableMouseWheel: !0
	}
}(jQuery, $(document), $(window));
! function (t, e, n) {
	"use strict";
	t.fn.addSwipe = function (o, a, r) {
		r = t.extend({}, t.fn.addSwipe.defaults, r);
		var u = function (t) {
				return t.touches && 1 === t.touches.length ? [Math.round(t.touches[0].clientX), Math.round(t.touches[0].clientY)] : null !== t.clientX ? [Math.round(t.clientX), Math.round(t.clientY)] : null
			},
			i = function (t) {
				return t.touches && 1 === t.touches.length ? Math.round(t.touches[0].clientX) : null !== t.clientX ? Math.round(t.clientX) : null
			};
		return this.each(function () {
			var l, s, d, c, h, f, g, p, m = t(this),
				v = m.parent(),
				w = m.data("lsw_ns") || "lsw_" + Math.floor(1e4 * Math.random()),
				M = 0,
				T = 0,
				y = v.outerWidth(),
				E = v.outerHeight(),
				H = m.outerWidth(),
				C = m.outerHeight(),
				D = function () {
					y = v.outerWidth(), E = v.outerHeight()
				},
				O = function () {
					M = m.data("tr_x") || 0, T = p ? 0 : m.data("tr_y") || 0, f = g = 0
				},
				S = function (n) {
					if (m.data("scrolling") || t(n.target).closest("[data-noswipe]").length) return !0;
					if (n.originalEvent.touches && n.originalEvent.touches.length > 1 || "mousedown" === n.type && 1 !== n.which) return !0;
					"touchstart" !== n.type && n.preventDefault();
					var o = u(n.originalEvent);
					return c = o[0], h = o[1], m.removeClass("smooth"), m.data("scrolling", !1), m.data("taplength", 0), d = (new Date).getTime(), y = y || v.outerWidth(), H = m.outerWidth(), C = m.outerHeight(), p = E >= C, l = H > y ? Math.round((H - y * (1 - r.oversizeTreshold)) / 2) : 0, O(), "touchstart" === n.type ? !0 : ("mousedown" === n.type ? (e.on("mousemove." + w, U), e.add(m).on("mouseup." + w, W)) : "pointerdown" === n.type ? (e.on("pointermove." + w, U), e.add(m).on("pointerup." + w, W)) : "MSPointerDown" === n.type && (e.on("MSPointerMove." + w, U), e.add(m).on("MSPointerUp." + w, W)), !1)
				},
				U = function (t) {
					if (t.originalEvent.touches && t.originalEvent.touches.length > 1) return !0;
					if (t.preventDefault(), p) f = i(t.originalEvent) - c, m.translate(M + f, 0);
					else {
						var e = u(t.originalEvent);
						f = e[0] - c, g = e[1] - h, m.translate(M + f, T + g)
					}
					return m.data("scrolling", f || g), !1
				},
				X = function (t) {
					return "touchcancel" !== t.type && ("dragcancel" === t.type ? (e.off("mousemove." + w), e.add(m).off("mouseup." + w)) : (e.off(TOUCH.MOVE + "." + w), e.add(m).off(TOUCH.END + "." + w))), setTimeout(function () {
						m.data("scrolling", !1)
					}, 20), m.translate(0, 0, "smooth"), !1
				},
				W = function (n) {
					"touchend" !== n.type && ("mouseup" === n.type ? (e.off("mousemove." + w), e.add(m).off("mouseup." + w)) : (e.off(TOUCH.MOVE + "." + w), e.add(m).off(TOUCH.END + "." + w)));
					var u = (new Date).getTime() - d;
					if (Math.abs(f) < r.treshold && (p || Math.abs(g) < r.treshold)) return z(), m.data("scrolling", !1), m.data("taplength", u), (f || g) && m.translate(0, 0), A(), !0;
					n.preventDefault(), m.data("scrolling", !0);
					var i = M + f + 300 * f / u,
						s = p ? 0 : T + g + 300 * g / u;
					return m.translate(i, s, "smooth"), -l > i ? t.isFunction(o) && o.call(t(this)) : i > l && t.isFunction(a) && a.call(t(this)), setTimeout(function () {
						m.data("scrolling", !1)
					}, 100), !1
				},
				_ = function (t) {
					return t.preventDefault(), !1
				},
				b = function () {
					setTimeout(function () {
						m.data("scrolling", !1)
					}, 20), m.removeAttr("draggable"), z()
				},
				z = function () {
					m.off("." + w), e.off("." + w), n.off("." + w)
				},
				A = function () {
					O(), m.on(TOUCH.START + "." + w + " dragstart." + w + " mousedown." + w, S).on(TOUCH.CANCEL + "." + w + " dragcancel." + w, X).on("touchmove." + w + " drag." + w, U).on("touchend." + w + " dragend." + w, W)
				};
			z(), m.data("lsw_ns", w), n.on("resize." + w, function () {
				clearTimeout(s), s = setTimeout(D, 50)
			}), m.attr("draggable", "true").on("unswipe." + w, b).on("selectstart." + w, _), A()
		})
	}, t.fn.addSwipe.defaults = {
		treshold: 20,
		oversizeTreshold: .15,
		margin: 15
	}
}(jQuery, $(document), $(window));
! function (e) {
	"use strict";
	e.fn.addPlayer = function (a) {
		if ("undefined" != typeof e.fn.jPlayer) {
			a = e.extend({}, e.fn.addPlayer.defaults, a);
			var t = getTranslations(e.fn.addPlayer.text),
				i = navigator.userAgent.indexOf("Firefox") >= 0 && navigator.platform.indexOf("Mac") >= 0,
				n = {
					cont: "jp-cont",
					mini: "jp-mini",
					audio: "jp-audio",
					video: "jp-video",
					playerType: "jp-type-single",
					player: "jp-jplayer",
					title: "jp-title",
					progress: "jp-progress",
					controls: "jp-controls-holder",
					startStop: "jp-startstop",
					volume: "jp-volume",
					times: "jp-times",
					toggles: "jp-toggles",
					warning: "jp-warning",
					videoPlay: "jp-video-play",
					play: "jp-play",
					pause: "jp-pause",
					stop: "jp-stop",
					seekBar: "jp-seek-bar",
					playBar: "jp-play-bar",
					mute: "jp-mute",
					unmute: "jp-unmute",
					volumeBar: "jp-volume-bar",
					volumeBarValue: "jp-volume-bar-value",
					volumeMax: "jp-volume-max",
					currentTime: "jp-current-time",
					duration: "jp-duration",
					fullScreen: "jp-full-screen",
					restoreScreen: "jp-restore-screen",
					repeat: "jp-repeat",
					repeatOff: "jp-repeat-off",
					gui: "jp-gui",
					noSolution: "jp-no-solution",
					playing: "playing"
				},
				s = function (e) {
					var a, i = function (e) {
						return '<a class="' + n[e] + '" title="' + t[e] + '">' + t[e] + "</a>"
					};
					return a = '<div class="' + n.progress + '"><div class="' + n.seekBar + '"><div class="' + n.playBar + '"></div></div></div>', a += '<div class="' + n.controls + '">', a += '<div class="' + n.startStop + '">' + i("play") + i("pause") + i("stop") + "</div>", a += '<div class="' + n.volume + '">' + i("mute") + i("unmute") + '<div class="' + n.volumeBar + '"><div class="' + n.volumeBarValue + '"></div></div></div>', a += '<div class="' + n.times + '"><div class="' + n.currentTime + '"></div><div class="' + n.duration + '"></div></div>', a += '<div class="' + n.toggles + '">' + (e ? "" : i("fullScreen") + i("restoreScreen")) + i("repeat") + i("repeatOff") + "</div>", a += "</div>"
				},
				r = function (e) {
					var a = e.css("paddingTop"),
						t = e.css("paddingLeft"),
						i = e.css("paddingRight"),
						s = e.css("paddingBottom");
					e.find("." + n.gui).css({
						bottom: s,
						left: t,
						right: i
					}), e.find("." + n.title).css({
						top: a,
						left: t,
						right: i
					})
				},
				o = function (a, i, o) {
					"absolute" !== a.css("position") && "fixed" !== a.css("position") && a.css({
						position: "relative"
					}), a.css({
						overflow: "hidden"
					});
					var l, d = e('<div class="' + (o ? n.audio : n.video) + '"></div>').appendTo(a);
					return d = e('<div class="' + n.playerType + '"></div>').appendTo(d), l = e('<div class="' + n.player + '"></div>').appendTo(d), d.append('<div class="' + n.videoPlay + '"><a>' + t.play + "</a></div>"), i && d.append('<div class="' + n.title + '" data-noswipe><ul><li>' + i + "</li></ul></div>"), d.append('<div class="' + n.gui + '" data-noswipe>' + s(o) + "</div>"), a.hasClass(n.fullScreen) && d.find("." + n.gui).hide(), a.append('<div class="' + n.noSolution + '">' + t.unsupportedMediaFormat + "</div>"), r(a), l
				},
				l = function () {
					var a;
					return (a = e(this).data("media")) && a.jPlayer("pause"), !1
				},
				d = function () {
					var a;
					return (a = e(this).data("media")) && a.jPlayer("destroy"), e(window).off("keydown", f), !1
				},
				p = function () {
					var a;
					return (a = e(this).data("media")) && a.jPlayer("stop"), !1
				},
				u = function () {
					var a;
					return (a = e(this).data("media")) && a.jPlayer("play"), !1
				},
				c = e(this).eq(0),
				f = function (e) {
					if (document.activeElement && ("INPUT" === document.activeElement.nodeName || "TEXTAREA" === document.activeElement.nodeName)) return !0;
					var a = e ? e.keyCode : window.event.keyCode;
					return 32 === a ? (c.find("." + n.player).jPlayer(c.data(n.playing) ? "pause" : "play"), !1) : !0
				},
				v = function (e) {
					return a.hasOwnProperty("audio") ? a.audio : ".mp3.m4a.f4a.rtmpa".indexOf(e.getExt()) > 0
				},
				y = function (e) {
					var a, t = v(e) ? "a" : "v";
					switch (e.getExt()) {
						case "mp3":
							a = "mp3";
							break;
						case "mp4":
							a = "m4" + t;
							break;
						case "ogg":
							a = "og" + t;
							break;
						case "webm":
							a = "webm" + t;
							break;
						case "flv":
						case "f4a":
						case "f4v":
							a = "fl" + t;
							break;
						case "rtmp":
							a = "rtmp" + t;
							break;
						default:
							a = null
					}
					return a
				};
			return this.each(function () {
				var s, r, c, m, g, h, j, P, w = e(this),
					b = a.folder || "",
					k = e(),
					T = 0,
					S = function () {
						var t, i, n = {},
							s = a.relativeUrl ? "" : location.href.substring(0, location.href.lastIndexOf("/") + 1);
						return e.isArray(g) ? (T >= g.length && (T = 0), t = g[T]) : (t = g, j && (n.poster = (s + b + j).fixUrl())), i = y(t), n[i] = (s + b + t).fixUrl(), n
					},
					x = function () {
						if (e.cookie) {
							var a = w.find("." + n.currentTime).text().split(":");
							a = a.length > 2 ? 60 * (60 * parseInt(a[0], 10) + parseInt(a[1], 10)) + parseInt(a[2], 10) : 60 * parseInt(a[0], 10) + parseInt(a[1], 10), e.cookie("jp_" + w[0].id, (w.data(n.playing) ? "1" : "0") + "::" + a + "::" + P.jPlayer("option", "volume").toString().substring(0, 5) + (T ? "::" + T : ""))
						}
					},
					O = function (a) {
						if (e.cookie) {
							var t = e.cookie("jp_" + a[0].id);
							if (t) return t = t.split("::"), {
								playing: "1" === t[0],
								time: parseInt(t[1] || 0, 10),
								volume: parseFloat(t[2] || .8),
								curr: parseInt(t[3] || 0, 10)
							}
						}
						return null
					};
				if (a.elem) {
					k = e(this).find(a.elem), h = k.attr("title");
					var F = k.find("img:first");
					F.length ? (g = F.data("link"), j = F.data("poster") || F.attr("src"), h || (h = F.attr("alt"))) : (g = k.attr("href"), j = h = "")
				}
				else g = a.src, h = a.title || "", j = a.poster || "", k = e('<a href="' + g + '"' + (h ? ' title="' + h + '"' : "") + ">" + (j ? '<img src="' + j + '">' : "") + "</a>").appendTo(e(this));
				if (g) {
					if (LOCAL) {
						var I = e('<div class="' + n.warning + '">' + t.localFlashWarning + "</a></div>").appendTo(k);
						k.css("position", "relative"), I.hide(), setTimeout(function () {
							I.fadeIn()
						}, 2e3)
					}
					g.indexOf("::") > 0 ? (g = g.split("::"), s = v(g[0]), r = y(g[0])) : (s = v(g), r = y(g)), this.id || (this.id = a.id + e.fn.addPlayer.id++), m = "#" + this.id, e(w).addClass(n.cont), a.mini && e(w).addClass(n.mini), P = o(w, a.showTitle ? h : "", s), c = !s && !i, w.on("setEndedFn", function (t, i) {
						a.ended = i && e.isFunction(i) ? i : null
					}), P.jPlayer({
						cssSelectorAncestor: m,
						backgroundColor: a.backgroundColor,
						supplied: r,
						swfPath: a.resPath + "/" + a.swf,
						solution: a.solution,
						size: {
							width: "100%",
							height: "100%"
						},
						fullWindow: !s && a.fullScreen,
						preload: "auto",
						loop: a.loop,
						volume: a.volume,
						autohide: {
							restored: c,
							full: c
						},
						ready: function () {
							var t = e(this),
								i = a.saveStatus ? O(w) : null;
							w.data("media", t), a.saveStatus && (e(window).on("unload", x), i && (T = i.curr));
							var s = S();
							if (k && k.hide(), t.jPlayer("setMedia", s), w.on({
									play: u,
									pause: l,
									stop: p,
									destroy: d
								}), a.saveStatus && i && i.playing || a.auto) {
								var r = 50,
									o = function () {
										var e = w.find("." + n.videoPlay),
											a = w.find("." + n.gui),
											i = t.find("audio,video")[0];
										!i || i.paused || i.readyState < 2 ? (e.is(":visible") || e.fadeIn(), a.is(":visible") && a.fadeOut(), --r && setTimeout(o, 200)) : e.hide()
									};
								setTimeout(o, 1e3)
							}
							a.saveStatus && i ? (t.jPlayer("volume", i.volume), t.jPlayer(i.playing ? "play" : "pause", i.time)) : a.auto && t.jPlayer("play"), a.lowPriority || e(window).on("keydown", f)
						},
						play: function () {
							e(this).jPlayer("pauseOthers"), a.mini || w.find("." + n.videoPlay).fadeOut(), w.data(n.playing, !0), TOUCHENABLED && setTimeout(function () {
								w.find("." + n.title).fadeOut(1e3)
							}, 600), e.isFunction(a.play) && a.play.call()
						},
						pause: function () {
							a.mini || w.find("." + n.videoPlay).fadeIn(), w.data(n.playing, !1), e.isFunction(a.pause) && a.pause.call()
						},
						stop: function () {
							w.data(n.playing, !1), TOUCHENABLED && w.find("." + n.title).fadeIn(300), e.isFunction(a.stop) && a.stop.call()
						},
						ended: function () {
							e.isArray(g) && (T + 1 < g.length || a.loop) ? (T = (T + 1) % g.length, e(this).jPlayer("setMedia", S()), e(this).jPlayer("play")) : w.data(n.playing, !1), e.isFunction(a.ended) && a.ended.call()
						}
					})
				}
			})
		}
	}, e.fn.addPlayer.id = 0, e.fn.addPlayer.defaults = {
		id: "jp_container_",
		backgroundColor: "#000000",
		resPath: "",
		swf: "Jplayer.swf",
		relativeUrl: !1,
		solution: "html,flash",
		volume: .8,
		auto: !1,
		loop: !1,
		keyboard: !0,
		lowPriority: !1,
		saveStatus: !1,
		mini: !1,
		fullScreen: !1,
		showTitle: !1,
		size: {
			width: "100%",
			height: "100%"
		}
	}, e.fn.addPlayer.text = {
		play: "play",
		pause: "pause",
		stop: "stop",
		mute: "mute",
		unmute: "unmute",
		fullScreen: "full screen",
		restoreScreen: "restore screen",
		repeat: "repeat",
		repeatOff: "repeat off",
		localFlashWarning: "Local Flash playback is possibly blocked by Flash security rules. Test videos in the uploaded album!",
		unsupportedMediaFormat: '<span>Unsupported media format</span>You might need to either update your browser or the <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a> or use another browser to play this media.'
	}
}(jQuery);
! function (e) {
	"use strict";
	e.getLatLng = function (e) {
		return "undefined" == typeof google || null == e ? null : "string" == typeof e ? (e = e.split(","), new google.maps.LatLng(parseFloat(e[0]) || 0, parseFloat(e[e.length - 1]) || 0)) : new google.maps.LatLng(e[0], e[1])
	}, e.fn.addMap = function (o) {
		if ("undefined" == typeof google || !google.maps) return this;
		o = e.extend({}, e.fn.addMap.defaults, o);
		var a = o.resPath + "/marker-curr.png",
			t = o.resPath + "/marker.png",
			n = new google.maps.MarkerImage(a, new google.maps.Size(17, 24), new google.maps.Point(0, 0), new google.maps.Point(8, 24)),
			r = new google.maps.MarkerImage(t, new google.maps.Size(17, 24), new google.maps.Point(0, 0), new google.maps.Point(8, 24)),
			s = new google.maps.MarkerImage(o.resPath + "/marker-shadow.png", new google.maps.Size(24, 24), new google.maps.Point(0, 0), new google.maps.Point(8, 24));
		return this.each(function () {
			var i, g, p, l, m, d, u, c = e(this),
				h = [];
			c.readData(o, "type,zoom,map,label,resPath,markers");
			var f = function () {
				c && c.data("fresh") && (p && c.is(":visible") && !c.parents(":hidden").length && c.width() && c.height() ? (clearTimeout(m), c.width(c.parent().width()), google.maps.event.trigger(p, "resize"), p.setCenter(i), c.data("fresh", !1)) : m = setTimeout(f, 200))
			};
			if (l && l.length && l.remove(), l = e("<div>").css({
					position: "absolute",
					top: "-9000px",
					width: c.width(),
					height: c.height()
				}).appendTo("body"), c.data("fresh", !0).on({
					adjust: f,
					destroy: function () {
						p.getParentNode().removeChild(p), e(window).off("resize", f)
					}
				}), o.markers && o.markers.length && null != o.curr) i = o.markers[o.curr].map;
			else {
				if (!o.map) return;
				i = e.getLatLng(o.map), g = o.label
			}
			null !== (d = e.cookie("mapType")) && (o.type = d), null !== (d = e.cookie("mapZoom")) && (o.zoom = parseInt(d, 10) || o.zoom), setTimeout(function () {
				var m, d = new google.maps.Map(l[0], {
					zoom: o.zoom,
					center: i,
					scrollwheel: !1,
					mapTypeId: o.type.toLowerCase()
				});
				if (google.maps.event.addListener(d, "maptypeid_changed", function () {
						e.cookie("mapType", e.fn.addMap.defaults.type = d.getMapTypeId(), 3600)
					}), google.maps.event.addListener(d, "zoom_changed", function () {
						e.cookie("mapZoom", e.fn.addMap.defaults.zoom = d.getZoom(), 3600)
					}), o.markers && o.markers.length > 1) {
					var f, w, k, y = Math.max(o.curr - o.range, 0),
						z = Math.min(o.curr + o.range, o.markers.length),
						v = function () {
							o.click.call(this)
						};
					for (f = y; z > f; f++) k = o.markers[f], w = {
						position: k.map,
						map: d,
						title: k.label,
						icon: f === o.curr ? n : r,
						shadow: s,
						zIndex: f === o.curr ? 999 : f
					}, m = new google.maps.Marker(w), e.isFunction(o.click) && k.link && (m.link = k.link, google.maps.event.addListener(m, "click", v)), h.push(m)
				}
				else m = new google.maps.Marker(e.extend({
					position: i,
					map: d,
					title: g
				}, a));
				l.css({
					top: 0
				}).appendTo(c), p = d, u = o.curr, c.on("setactive", function (o, n) {
					e.isArray(h) && h.length && (u >= y && (h[u].setIcon(t), h[u].setZIndex(u)), "undefined" != typeof n && n >= y && n < y + h.length ? (h[n - y].setIcon(a), h[n - y].setZIndex(9999), p.setCenter(h[n - y].position), u = n) : u = -1)
				})
			}, 20), e(window).on("resize", function () {
				clearTimeout(m), c.data("fresh", !0), m = setTimeout(f, 100)
			})
		})
	}, e.fn.addMap.defaults = {
		type: "roadmap",
		zoom: 16,
		range: 30,
		resPath: ""
	}
}(jQuery);
! function (e) {
	"use strict";
	e.fn.addShop = function (t, n) {
		if (n = e.extend({}, e.fn.addShop.defaults, n), !t || !t.length || !n.id) return this;
		var o, i, a, r, s, p = "undefined",
			d = e.fn.addShop.id,
			l = e.fn.addShop.text,
			c = n.id.replace("|", "@"),
			u = DEBUG ? e.fn.addShop.st.sandboxurl : e.fn.addShop.st.url,
			h = e.fn.addShop.st.curr_symbol[n.currency] || n.currency,
			m = (e.fn.addShop.st.btn_lng[n.locale], e(this).eq(0)),
			g = t.length,
			f = g > 1 ? e.fn.addShop.st.targetCart : e.fn.addShop.st.target,
			b = function (t, n, o, i, a) {
				if (!t || !n) return {};
				var r = e("<input>", {
					type: i || "text"
				}).appendTo(t);
				return r.prop("name", n), o && r.val("string" == typeof o ? o.stripQuote() : o), a && r.prop(a, !0), r
			},
			y = function (e) {
				if (typeof e === p) return _(g > 1 ? d.discountRateCart : d.discountRate);
				g > 1 ? _(d.discountRateCart, e) : (_(d.discountRate, e), _(d.discountRate + "2", e))
			},
			v = function (e) {
				if (typeof e === p) return _(g > 1 ? d.discountAmountCart : d.discountAmount);
				_(g > 1 ? d.discountAmountCart : d.discountAmount, e)
			},
			w = function (e, t) {
				var n = i.children("[name=" + d.option + "]");
				if (n && n.length) {
					var o = n.val().replace(/(\s\(CC\:.+\))$/, "");
					n.val(o + " (CC:" + e + (typeof t !== p ? "=" + t : "") + ")")
				}
			},
			_ = function (e, t) {
				var n = i.children("[name=" + e + "]");
				if (typeof t === p) return n && n.length ? parseFloat(n.val()) : null;
				null == t ? n.remove() : n && n.length ? n.val(t) : b(i, e, t, "hidden")
			},
			C = function () {
				var e = o.children("select").eq(0);
				return e && e.length ? e.prop("selectedIndex") : 0
			},
			x = function () {
				var t = C(),
					n = o.children(".discount").eq(0),
					i = o.children(".total").eq(0),
					a = o.children("[name=copies]").val() || 1,
					r = s[t].price,
					p = s[t].shipping + (a - 1) * s[t].shipping2,
					d = v(),
					l = y();
				n.length || (n = e("<span>", {
					'class': "discount"
				}).insertAfter(o.children("select"))), d && d > 0 ? (n.show().html("- " + h + " " + d.toFixed(2)), i.html(h + " <b>" + (g * (a * r + p) - d).toFixed(2) + "</b>")) : l && l > 0 ? (n.show().text("-" + l + "%"), i.html(h + " <b>" + (g * (a * r * (100 - l) / 100 + p)).toFixed(2) + "</b>")) : (n.hide(), i.html(h + " <b>" + (g * (a * r + p)).toFixed(2) + "</b>"))
			},
			S = function () {
				var e = C(),
					t = o.children("[name=copies]").val() || 1,
					i = s[e].price,
					a = s[e].shipping,
					r = s[e].shipping2;
				if (n.quantityCap && t > n.quantityCap && o.children("[name=copies]").val(t = n.quantityCap), g > 1)
					for (var p = 1; p <= g; p++) _(d.price + "_" + p, i), _(d.copies + "_" + p, t), _(d.shipping + "_" + p, a || null), _(d.shipping2 + "_" + p, r || null);
				else _(d.price, i), _(d.copies, t), _(d.shipping, a || null), _(d.shipping2, r || null);
				_(d.option, s[e].text), x()
			},
			T = function (t) {
				var i, a, p = new Date,
					d = !0 === t;
				if (n.coupons && (i = o.children("[name=coupon]")) && (a = i.val().trim()).length) {
					var c, u, m, f = xDecrypt(n.coupons).split("::");
					for (c = 0; c < f.length; c++)
						if ((u = f[c].split(/=|\s*<\s*/))[0] === a && u.length > 1) {
							if ((m = parseFloat(u[1])) < .01) continue;
							if (u.length > 2) {
								var b = u[2].split(/-|:|\//);
								if (b.length < 2 && (b[1] = 1), b.length < 3 && (b[2] = 1), new Date(parseInt(b[0]), parseInt(b[1]), parseInt(b[2])) < p) return e("body").addModal(e("<div>", {
									html: l.expired.replace("{0}", a)
								}), {
									type: "error"
								}), !1
							}
							if ("%" === u[1].charAt(u[1].length - 1)) {
								if (m > 99 || m < 1) continue;
								(_ = y()) > m ? d && e("body").addModal(e("<div>", {
									html: l.lowerThanCurrent.replace("{0}", _ + "%")
								}), {
									type: "warning"
								}) : (d && e("body").addModal(e("<div>", {
									html: l.accepted.replace("{0}", m + "%")
								}), {
									title: l.success
								}), y(m), w(a, m + "%"), e.cookie("discountRate", a, 86400))
							}
							else if (e.cookie("discount_" + a)) d && e("body").addModal(e("<div>", {
								html: l.reclaimed
							}), {
								type: "warning"
							}), v(null), r && (y(r), w(a, r + "%"));
							else {
								var _ = y(),
									S = s[C()].price,
									T = v() || (_ > 0 ? g * S * _ / 100 : 0);
								S * g < m ? d && e("body").addModal(e("<div>", {
									html: l.higherThanPrice.replace("{0}", h + " " + m)
								}), {
									type: "warning"
								}) : T > m ? d && e("body").addModal(e("<div>", {
									html: l.lowerThanCurrent.replace("{0}", h + " " + T.toFixed(2))
								}), {
									type: "warning"
								}) : (d ? e("body").addModal(e("<div>", {
									html: l.accepted.replace("{0}", h + " " + m)
								}), {
									title: l.success
								}) : (e.cookie("discount_" + a, m, 86400), r = y(), y(null)), v(m), w(a, n.currency + " " + m))
							}
							return x(), !0
						}
					return e("body").addModal(e("<div>", {
						html: l.noSuch
					}), {
						type: "error"
					}), !1
				}
				return !0
			},
			R = function (t) {
				var o;
				if ("title" === n.itemNameUses) {
					if (((o = t.data("tooltip")) && (o = e(o)).length || (o = t.siblings(".caption")).length || (o = e(".slide .caption")).length) && (o = o.find("h6,strong")).length && (o = o.eq(0).text())) return o.substring(0, 128)
				}
				else if ("comment" === n.itemNameUses && ((o = t.data("tooltip")) && (o = e(o)).length || (o = t.siblings(".caption")).length || (o = e(".slide .caption")).length) && (o = o.find(".comment,small")).length && (o = o.eq(0).text())) return o.substring(0, 128);
				return (t = t.find("img").eq(0)).length && (o = t.data("src") || t.attr("src")), o.length || (o = "untitled"), decodeURIComponent(o.getFile() + " [" + n.path + o.getDir().replace("thumbs/", "") + "]")
			};
		if ((s = function (e) {
				var t, n, o, i, a = e.split("::"),
					r = [];
				for (t = 0; t < a.length; t++)
					if ((n = a[t].split("=")).length > 1) {
						if (i = {}, i.label = n[0], o = n[1].split("+"), null == (i.price = parseFloat(o[0]))) continue;
						o.length > 1 ? i.shipping = parseFloat(o[1]) : i.shipping = 0, o.length > 2 ? i.shipping2 = parseFloat(o[2]) : i.shipping2 = i.shipping, i.text = n[0] + " = " + h + " " + i.price.toFixed(2) + (o.length > 1 ? "+" + i.shipping.toFixed(2) : ""), r.push(i)
					}
				return r
			}(n.options)).length) {
			if (o = e("<form>", {
					name: "shopping",
					method: "post"
				}).appendTo(m), g > 1 && o.append(e("<span>", {
					'class': "count",
					html: "<b>" + g + "</b> ×"
				})), function (t, n) {
					var o, i = e("<select>").appendTo(t);
					for (o = 0; o < n.length; o++) i.append(e("<option>", {
						val: n[o].price,
						html: n[o].text
					}));
					return i
				}(o, s).on("change", S), n.hasOwnProperty("discount") || (n.discount = e.fn.addShop.defaults.discount || 0), "-" === n.discount && (n.discount = 0), 1 !== n.quantityCap && (o.append("×"), b(o, "copies", 1).addClass("copies").on("change", S)), o.append("="), o.append(e("<span>", {
					'class': "total"
				})), n.coupons) {
				o.append(e("<input>", {
					type: "text",
					name: "coupon",
					'class': "coupon",
					placeholder: l.couponCode
				}));
				var U = e("<a>", {
					html: " ",
					'class': "redeem"
				}).on("click", function (e) {
					return e.preventDefault(), T(!0), !1
				});
				U.addTooltip(l.redeem), o.append(U)
			}
			if (i = e("<form>", {
					name: d.form,
					target: f,
					action: u + "cgi-bin/webscr/",
					method: "post"
				}).appendTo(m), _("cmd", "_cart"), _("charset", "utf-8"), _("lc", n.locale), _(d.seller, c), _(d.currency, n.currency), _(d.shopUrl, n.continueUrl || decodeURIComponent(window.location.href)), null != n.handling && e.isNumeric(n.handling) && _(d.handlingCart, n.handling), _(d.option, s[0].label), n.discount && n.discount < 100 && y(n.discount), g > 1 ? (_("upload", 1), _(d.name, g + " " + l.items), t.each(function (t) {
					_(d.name + "_" + (t + 1), R(e(this)))
				})) : (_("add", 1), _(d.name, R(t.eq(0)))), S(), i.append(e("<button>", {
					id: "shopAdd",
					name: "submit",
					'class': "paypalbtn",
					html: g > 1 ? l.buyNow : l.addCart
				})), i.on("submit", function (t) {
					var o = !0,
						i = e(t.target);
					return n.coupons && (o = T()), o ? (i.parents("[data-role=dialog]").trigger("destroy"), n.continueUrl || window.open("", f, "width=1024,height=600,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,directories=no,status=no,copyhistory=no"), !0) : o
				}), n.coupons) {
				var F = e.cookie("discountRate");
				F && (e("input[name=coupon]").val(F), T(!1))
			}
			return 1 === g && (a = e("<form>", {
				'class': "view",
				name: "paypalview",
				target: f,
				action: u + "cgi-bin/webscr/",
				method: "post"
			}).appendTo(m), b(a, "cmd", "_cart", "hidden"), b(a, "lc", n.locale, "hidden"), b(a, d.seller, c, "hidden"), b(a, "display", 1, "hidden"), a.append(e("<button>", {
				id: "shopView",
				'class': "paypalbtn",
				name: "submit",
				html: l.viewCart
			})), n.continueUrl || a.on("submit", function () {
				return window.open("", f, "width=1024,height=600,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,directories=no,status=no,copyhistory=no"), !0
			})), x(), this
		}
	}, e.fn.addShop.defaults = {
		currency: "EUR",
		locale: "US",
		quantityCap: 0,
		shippingFlat: !1,
		itemNameUses: "fileName"
	}, e.fn.addShop.text = getTranslations({
		addCart: "Add to Cart",
		viewCart: "View Cart",
		buyNow: "Buy Now",
		items: "items",
		success: "Success",
		couponCode: "Coupon code",
		redeem: "Redeem",
		noSuch: "No such coupon exists!",
		expired: "The coupon code <b>{0}</b> has expired!",
		accepted: "The coupon code is accepted. You will get <b>{0}</b> discount the next time you add this item to the cart.",
		lowerThanCurrent: "This coupon offers lower discount than the current <b>{0}</b>.",
		higherThanPrice: "You can use this coupon only for items priced higher than <b>{0}</b>.",
		reclaimed: "This coupon has already been used!"
	}), e.fn.addShop.st = {
		target: "ShoppingCart",
		targetCart: "BuyNow",
		url: "https://www.paypal.com/",
		sandboxurl: "https://www.sandbox.paypal.com/",
		btn_lng: {
			DE: "de_DE",
			FR: "fr_FR",
			IT: "it_IT",
			ES: "es_ES",
			PT: "pt_PT",
			DA: "da_DK",
			NL: "nl_NL",
			NO: "no_NO",
			SV: "sv_SE",
			TR: "tr_TR",
			RU: "ru_RU",
			PL: "pl_PL",
			IL: "he_IL",
			TH: "th_TH"
		},
		curr_symbol: {
			USD: "US$",
			EUR: "€",
			GBP: "GB£",
			JPY: "¥",
			HUF: "Ft"
		}
	}, e.fn.addShop.id = {
		form: "paypal",
		seller: "business",
		currency: "currency_code",
		name: "item_name",
		option: "item_number",
		custom: "custom",
		price: "amount",
		priceCart: "amount_1",
		copies: "quantity",
		discountRate: "discount_rate",
		discountRateCart: "discount_rate_cart",
		discountAmount: "discount_amount",
		discountAmountCart: "discount_amount_cart",
		shipping: "shipping",
		shipping2: "shipping2",
		handlingCart: "handling_cart",
		shopUrl: "shopping_url"
	}
}(jQuery);
! function (e) {
	"use strict";
	var t = "",
		a = "",
		i = "";
	e.fn.addSocial = function (o) {
		o = e.extend({}, e.fn.addSocial.defaults, o);
		var n = 0 === location.protocol.indexOf("file:"),
			s = getTranslations(e.fn.addSocial.text),
			l = window.location.href.split("#")[0] + (o.useHash ? "#" + encodeURIComponent(o.hash || "") : ""),
			p = encodeURIComponent(window.location.href.split("#")[0]) + (o.useHash ? "#" + encodeURIComponent(o.hash || "") : ""),
			r = encodeURIComponent(o.title || e("meta[name=title]").attr("content") || e("title").text()),
			d = encodeURIComponent(s.checkOutThis),
			c = o.inline ? 90 : o.width,
			u = o.image ? window.location.href.getDir() + o.image : e("link[rel=image_src]").attr("href");
		return this.each(function () {
			var h = e(this),
				m = e("<div>", {
					'class': o.className
				});
			if (n && !DEBUG) m.html(s.localWarning);
			else {
				if (!n) {
					if (!o.useHash) {
						if (o.facebookLike && m.append('<div class="likebtn"><iframe src="https://www.facebook.com/plugins/like.php?href=' + l + "&layout=button_count&show_faces=false&width=" + c + "&action=like&font=arial&colorscheme=" + o.likeBtnTheme + '&height=22" scrolling="no" frameborder="0" style="border:none;overflow:hidden;width:' + c + 'px;height:22px;" allowTransparency="true"></iframe></div>'), o.twitterTweet && m.append('<div class="likebtn"><iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/tweet_button.html?url=' + l + "&text=" + r + '" style="width:' + c + 'px; height:22px;"></iframe></div>'), o.googlePlus) {
							var b = o.inline ? 90 : 120,
								f = e('<div class="likebtn" style="max-width:' + b + "px;min-width:" + b + 'px;"><div class="g-plusone" data-href="' + l + '"></div></div>').appendTo(m),
								g = 20,
								w = function () {
									"undefined" == typeof gapi ? g-- ? setTimeout(w, 200) : "console" in window && console.log("Google Plus API failed to load!") : setTimeout(function () {
										gapi.plusone.render(f[0], {
											size: "medium",
											annotation: "bubble"
										})
									}, 200)
								};
							w()
						}
						o.pinItBtn && m.append('<div class="likebtn" style="height:22px;"><a data-pin-config="beside" href="//pinterest.com/pin/create/button/?url=' + p + "&media=" + encodeURIComponent(u) + "&description=" + r + '" data-pin-do="buttonPin" ><img src="https://assets.pinterest.com/images/pidgets/pin_it_button.png" /></a></div>')
					}
					o.tumblrBtn && (m.append('<div class="likebtn" id="tumblr"><a href="//www.tumblr.com/share/' + (o.image ? "photo?source=" : "link?url=") + encodeURIComponent(l) + "&name=" + r + '" title="Share on Tumblr" style="display:inline-block;text-indent:-9999px;overflow:hidden;width:' + c + 'px;height:22px;background:url(https://platform.tumblr.com/v1/share_1.png) top left no-repeat transparent;">Tumblr</a></div>'), t = u, a = r, i = l)
				}(o.facebook || o.twitter || o.gplus || o.pinterest || o.digg || o.delicious || o.myspace || o.stumbleupon || o.reddit || o.email) && (o.buttonLabels || m.append("<span>" + s.shareOn + "</span>"), o.facebook && !o.useHash && m.append('<a href="https://www.facebook.com/sharer.php?s=100&p%5Burl%5D=' + p + "&p%5Bimages%5D%5B0%5D=" + u + "&p%5Btitle%5D=" + r + '" class="facebook"' + (o.buttonLabels ? ">Facebook" : ' title="Facebook">') + "</a>"), o.twitter && m.append('<a href="https://twitter.com/home?status=' + d + ": " + p + '" class="twitter"' + (o.buttonLabels ? ">Twitter" : ' title="Twitter">') + "</a>"), o.gplus && !o.useHash && m.append(e("<a>", {
					'class': "gplus",
					href: "https://plus.google.com/share?url=" + p,
					title: "Google+",
					text: o.buttonLabels ? "Google+" : ""
				}).on("click", function () {
					return window.open(this.href, this.title, "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=760,width=980"), !1
				})), o.pinterest && m.append('<a href="https://pinterest.com/pin/create/button/?url=' + p + "&media=" + encodeURIComponent(u) + "&description=" + r + '" class="pinterest"' + (o.buttonLabels ? ">Pinterest" : ' title="Pinterest">') + "</a>"), o.digg && m.append('<a href="https://digg.com/submit?url=' + l + '" class="digg"' + (o.buttonLabels ? ">Digg" : ' title="Digg">') + "</a>"), o.delicious && m.append('<a href="https://delicious.com/save?url=' + l + "&title=" + r + '&v=5" class="delicious"' + (o.buttonLabels ? ">Delicious" : ' title="Delicious"') + "</a>"), o.myspace && m.append('<a href="https://www.myspace.com/index.cfm?fuseaction=postto&t=' + r + "&u=" + l + '&l=3" class="myspace"' + (o.buttonLabels ? ">MySpace" : ' title="MySpace"') + "</a>"), o.stumbleupon && m.append('<a href="https://www.stumbleupon.com/submit?url=' + l + "&title=" + r + '" class="stumbleupon"' + (o.buttonLabels ? ">StumbleUpon" : ' title="StumbleUpon">') + "</a>"), o.reddit && m.append('<a href="https://www.reddit.com/submit?url=' + l + '" class="reddit"' + (o.buttonLabels ? ">Reddit" : ' title="Reddit"') + "</a>"), m.children("a").attr("target", "_blank"), o.email && m.append('<a href="mailto:?subject=' + d + "&body=" + r + "%0D%0A" + l.replace(/%/g, "%25") + '" class="email"' + (o.buttonLabels ? ">Email" : ' title="Email">') + "</a>"), o.buttonLabels || m.children("a").addTooltip())
			}
			h.on("destroy", function () {
				m.remove()
			}), m.not(":empty") && (o.inline ? m.appendTo(h) : h.addTooltip(m, {
				width: o.width,
				touchToggle: !0,
				stay: 5e3,
				pos: o.pos
			}))
		})
	}, e.fn.addSocial.defaults = {
		className: "shares",
		width: 120,
		useHash: !0,
		likeBtnTheme: "light",
		inline: !1,
		buttonLabels: !0,
		pos: [1, 2, 1, 0]
	}, e.fn.addSocial.text = {
		shareOn: "Share on",
		checkOutThis: "Found this page",
		localWarning: "Can't share local albums. Please upload your album first!"
	}
}(jQuery);
var fixFbComments = function (e) {
		var t = window.location.href; - 1 === t.indexOf("?fb_") ? (t = t.split("#")[0], e && "/" === t[t.length - 1] && (t += e)) : t = t.split("?")[0], document.getElementById("fb-comments").setAttribute("data-href", t)
	},
	initMobile = function () {
		if (!(!/Mobile/.test(navigator.userAgent) || screen.width > 980 || screen.height > 980 || window.innerWidth !== document.documentElement.clientWidth && window.innerWidth - 1 !== document.documentElement.clientWidth)) {
			var e = function () {
				return Object.prototype.hasOwnProperty.call(window, "pageYOffset") && window.scrollTo(0, window.pageYOffset + 1), !0
			};
			setTimeout(function () {
				e()
			}, 1e3), $(window).on("orientationchange", e)
		}
	};
! function (e, t, a, n) {
	"use strict";
	e.fn.readData = function (t, a) {
		if (null == t || null == a) return this;
		var n, i, o = (a = a.split(",")).length;
		return this.each(function () {
			for (n = 0; n < o; n++) null != (i = e(this).data(a[n])) && (t[a[n]] = i)
		})
	}, e.fn.showin = function () {
		return this.each(function () {
			e(this).css("display", "inline-block")
		})
	}, e.fn.togglein = function (t) {
		return typeof t === UNDEF ? this.each(function () {
			e(this).css("display", "none" === e(this).css("display") ? "inline-block" : "none")
		}) : (e(this).css("display", t ? "inline-block" : "none"), this)
	}, e.fn.getDim = function () {
		var t = e(this).eq(0),
			a = {
				width: t.width(),
				height: t.height()
			};
		if ((0 === a.width || 0 === a.height) && "none" === t.css("display")) {
			var n = t.css("position"),
				i = t.css("left");
			t.css({
				position: "absolute",
				left: "-10000px",
				display: "block"
			}), a.width = t.width(), a.height = t.height(), t.css({
				display: "none",
				position: n,
				left: i
			})
		}
		return a
	}, typeof Search !== UNDEF && (Search.text = getTranslations({
		searchBoxTip: "Search...",
		searchResultsFor: "Search results for",
		newImages: "New images",
		notFound: "Not found",
		foundNImages: "Found {0} item(s)",
		close: "Close"
	}), Search.start = function (t) {
		if (null != t) {
			var a, i, o, s, l, r, d, c, h, u, p, f, m, g, b, v, w, k, T, y = "string" == typeof t || e.isNumeric(t) ? String(t) : "FORM" === t.nodeName ? e(t).find("input[type=search]").val().trim() : e(t).text().trim(),
				x = 0,
				S = !1;
			if (Search.data && e.isArray(Search.data) && Search.data.length && y && !(y.length < 2)) {
				a = e("<div>", {
					'class': "searchresults"
				});
				var I = function (e) {
					if (e && e.length) {
						var t = e.val().trim();
						t.length >= 2 && Search.start(t)
					}
				};
				y.startsWith("@new") ? (S = !0, s = Search.created || Math.floor((new Date).getTime() / 864e5), o = parseInt(y.split(":")[1], 10) || 30) : (T = new RegExp("(" + y.replace(/\s/g, "|") + ")", "i"), a.append('<form><input type="text" value="' + y + '"><a class="button"> </a></form>'), a.find(".button").on("click", function (t) {
					return I(e(this).siblings("input")), !1
				}), a.find("input").on("keydown", function (t) {
					if (13 === t.which) return t.preventDefault(), I(e(t.currentTarget)), !1
				})), m = Search.rootPath && "." !== Search.rootPath ? Search.rootPath + "/" : "", r = window.location.href.getRelpath(Math.floor(m.length / 3));
				var O = function (t) {
					var a = e(t.target).closest("a");
					return a.length && a.hasClass("active") && window.location.href.endsWith(a.attr("href")) ? (t.cancelBubble = !0, !1) : (Search.makeSlides || (a.addClass("active"), a.siblings(".active").removeClass("active")), e.cookie("lastSearch", y, 8), !0)
				};
				for (d = 0; d < Search.data.length; d++)
					for (f = m, Search.data[d][0].length && (f += (Search.urlEncode ? Search.data[d][0] : encodeURIComponent(Search.data[d][0]).replace(/%2F/g, "/")) + "/"), u = Search.data[d][1].length, c = 0; c < u; c++)
						if (g = Search.data[d][1][c].split(Search.sep), S && g.length > 5 && (l = s - parseInt(g[5], 10)) < o || !S && T.test(Search.data[d][1][c])) {
							switch (b = g[0].split(":"), k = b[0].getExt(), w = b.length > 1 ? b[1] : b[0].substring(b[0].lastIndexOf(".") + 1), v = encodeURIComponent(b[0]), l < 0 && (l = 0), k.toLowerCase()) {
								case Search.ext:
									b = f + Search.folderThumb;
									break;
								case "tif":
								case "bmp":
									Search.makeSlides || (v = v.replaceExt(w));
								case "jpg":
								case "jpeg":
								case "png":
								case "mp4":
									b = f + Search.thumbs + "/" + v.replaceExt(w);
									break;
								case "mp3":
									b = "png" === w ? m + "res/audio.png" : f + Search.thumbs + "/" + v.replaceExt(w);
									break;
								case "gif":
									v = v.replaceExt(w), b = f + Search.thumbs + "/" + v;
									break;
								case "pdf":
								case "zip":
								case "txt":
								case "doc":
								case "xls":
									b = m + "res/" + k + ".png";
									break;
								default:
									b = m + "res/unknown.png"
							}
							for (k === Search.ext ? (v = f + v, b = f + Search.folderThumb) : v = f + (Search.makeSlides ? Search.slides + "/" + v.replaceExt(Search.ext) : Search.indexName + "#" + (Search.urlEncode ? v.replace(/\'/g, "%27").replace(/%/g, "%25").replace(/\(/g, "%2528").replace(/\)/g, "%2529") : v)), p = e("<a>", {
									href: v.fixUrl()
								}).append(e("<aside>").append(e("<img>", {
									src: b
								}))).on("click", O).appendTo(a), v.endsWith(r) && p.addClass("active"), g[1] && p.append(e("<h5>").append(S ? g[1] : g[1].replace(T, "<em>$1</em>"))), g[2] && g[2] !== g[1] && p.append(e("<p>").append(S ? g[2].trunc(192) : g[2].trunc(192).replace(T, "<em>$1</em>"))), h = 3; h < g.length - 1; h++) g[h] && g[h].trim().length && p.append(e("<p>").append(S ? g[h].trunc(192) : g[h].trunc(192).replace(T, "<em>$1</em>")));
							S && p.append(e("<p>").append("<em>" + getRelativeDate(l) + "</em>")), window.location.hash === g[0] && (i = x), x++
						}
				return t.jquery && e(t).parents(".hint:first").fadeOut(100, function () {
					e(this).remove()
				}), x ? (a.children("a:first").before(e("<p>", {
					text: Search.text.foundNImages.template(x)
				})), setTimeout(function () {
					e(".searchresults > a").eq(i || 0).focus()
				}, 250)) : a.append(e("<p>", {
					text: Search.text.notFound
				})), n.addModal(a, {
					uid: "searchres",
					title: y.startsWith("@new") ? Search.text.newImages : Search.text.searchBoxTip,
					darkenBackground: !1,
					movable: !0,
					blocking: !1,
					closeOnClickOut: !1,
					defaultButton: "close",
					resizable: !0,
					width: 240,
					pos: [2, 0],
					scrollIntoView: !0,
					savePosition: !0
				}), !1
			}
		}
	}, Search.rootPath = "", Search.init = function (t) {
		Search.rootPath = t;
		var a = e.cookie("lastSearch");
		a && a.length && "null" !== a && (e.cookie("lastSearch", null), Search.start(a))
	}), e.fn.addRegions = function (t, a, n) {
		if (t && t.length && a) {
			n = e.extend({}, e.fn.addRegions.defaults, n);
			var i = [];
			return function () {
				var e, t, n, o, s, l, r = a.split("::");
				for (e = 0; e < r.length; e++)(t = r[e].split(";")).length > 4 && t[0].length && null !== (n = parseFloat(t[1])) && null !== (o = parseFloat(t[2])) && null !== (s = parseFloat(t[3])) && null !== (l = parseFloat(t[4])) && i.push([t[0], 100 * n + "%", 100 * o + "%", 100 * s + "%", 100 * l + "%"])
			}(), i.length ? this.each(function () {
				for (var a, o, s = e(this), l = parseInt(s.css("padding-top"), 10), r = e("<div>", {
						'class': n.id
					}).hide(), d = e("<div>", {
						'class': n.id + "-cont"
					}).css({
						left: l,
						top: l,
						right: l,
						bottom: l
					}), c = function (e) {
						return e.preventDefault(), Search.start(e.target), !1
					}, h = function (t) {
						d.children("a").eq(e(t.target).index()).addClass(n.active)
					}, u = function (t) {
						d.children("a").eq(e(t.target).index()).removeClass(n.active)
					}, p = 0; p < i.length; p++) a = e("<a>", {
					text: i[p][0]
				}).appendTo(r), o = e("<a>").css({
					left: i[p][1],
					top: i[p][2],
					width: i[p][3],
					height: i[p][4]
				}).append(e("<span>", {
					text: i[p][0]
				})).appendTo(d), a.on({
					mouseover: h,
					mouseout: u
				}), typeof Search !== UNDEF && o.on("click", c);
				s.addTooltip(r, {
					touchToggle: !0,
					stay: 5e3
				}), s.on("destroy", function () {
					r.remove()
				}), s.hasClass(n.active) && d.addClass(n.active), s.on("click", function () {
					e(this).add(d).toggleClass(n.active)
				}), t.append(d)
			}) : this
		}
	}, e.fn.addRegions.defaults = {
		id: "regions",
		active: "active",
		pos: [1, 2, 1, 0]
	}, e.fn.centerThis = function (t) {
		return t = e.extend({}, e.fn.centerThis.defaults, t), this.each(function () {
			var a = e(this),
				i = a.find(t.selector);
			if (i.length) {
				var o, s, l, r, d, c, h, u, p, f, m = t.marginLeft + t.padding,
					g = t.marginRight + t.padding,
					b = t.marginTop + t.padding,
					v = t.marginBottom + t.padding;
				if (h = i.data("ow"), u = i.data("oh"), h && u || (i.data("ow", h = i.width()), i.data("oh", u = i.height())), (p = i.data("bw")) || i.data("bw", p = parseInt(i.css("border-top-width"), 10) || 0), (f = i.data("pw")) || i.data("pw", f = parseInt(i.css("padding-top"), 10) || 0), o = (a.innerWidth() || n.width()) - 2 * (p + f) - m - g, s = (a.innerHeight() || n.height()) - 2 * (p + f) - b - v, t.fit && (h > o || u > s || t.enlarge)) {
					var w = Math.min(o / h, s / u);
					l = Math.round(h * w), r = Math.round(u * w)
				}
				else l = h, r = u;
				if (d = Math.round((o - l) / 2) + m, c = Math.round((s - r) / 2) + b, l !== h && i.translateToPos(), t.animate) {
					if (i.stop(!0, !1), t.preScale && 1 !== t.preScale) {
						var k = l * t.preScale,
							T = r * t.preScale;
						i.css({
							left: Math.round((o - k) / 2) + m,
							top: Math.round((s - T) / 2) + b,
							width: Math.round(k),
							height: Math.round(T)
						})
					}
					else t.init && i.css({
						left: d,
						top: c
					});
					i.animate({
						left: d,
						top: c,
						width: l,
						height: r
					}, {
						duration: t.speed,
						easing: t.effect,
						complete: t.complete
					})
				}
				else i.css({
					left: d,
					top: c,
					width: l,
					height: r
				}), e.isFunction(t.complete) && t.complete.call(this)
			}
		})
	}, e.fn.centerThis.defaults = {
		selector: ".main",
		speed: 500,
		fit: !0,
		enlarge: !0,
		marginTop: 0,
		marginBottom: 0,
		marginLeft: 0,
		marginRight: 0,
		padding: 0,
		init: !1,
		animate: !1,
		effect: "swing",
		complete: null
	}, e.fn.collectMarkers = function (t) {
		t = e.extend({}, e.fn.collectMarkers.defaults, t);
		var a, n, i, o = [];
		return this.each(function (s) {
			(a = e(this).find(t.selector)).length && (n = a.data(t.mapid)) && (n = e.getLatLng(n)) && (i = a.data(t.captionid) || a.attr("alt"), o.push({
				map: n,
				label: s + 1 + (i ? ": " + i.stripHTML() : ""),
				link: t.dynamic ? e(this) : e(this).attr("href")
			}))
		}), o
	}, e.fn.collectMarkers.defaults = {
		selector: "img:first",
		mapid: "map",
		captionid: "caption"
	}, e.fn.markFoldersNew = function (t) {
		t = e.extend({}, e.fn.markFoldersNew.defaults, t);
		var a = getTranslations(e.fn.markFoldersNew.text);
		if (t.days) {
			var n = t.ref || Math.round((new Date).getTime() / 864e5);
			return this.each(function () {
				n - parseInt(e(this).data("modified") || 0, 10) <= t.days && e(this).after('<span class="' + t.cls + '">' + a.newItem + "</span>")
			})
		}
	}, e.fn.markFoldersNew.defaults = {
		days: 7,
		cls: "newlabel"
	}, e.fn.markFoldersNew.text = {
		newItem: "NEW"
	}, e.fn.turtleHelp = function (a) {
		a = e.extend({}, e.fn.turtleHelp.defaults, a);
		var i = getTranslations(e.fn.turtleHelp.text),
			o = e("<div>", {
				'class': "help"
			}),
			s = function (t) {
				if (i.hasOwnProperty(t)) {
					var a, n = 1,
						s = e("<ul>", {
							'class': t
						}).appendTo(o);
					for (a in i[t]) s.append(e("<li><span>" + n++ + "</span>" + i[t][a] + "</li>"))
				}
			},
			l = function () {
				n.addModal(o, {
					uid: "help",
					title: i.help_title,
					width: 720,
					savePosition: !0,
					resizable: !0
				})
			};
		return a.index && s("index"), a.slide && s("slide"), a.pressF1 && o.append(e("<p>", {
			html: i.help_pressF1
		})), a.useF1 && t.on("keydown", function (t) {
			if (document.activeElement && "INPUT" === document.activeElement.nodeName || e.isFunction(a.enableKeyboard) && !a.enableKeyboard() || e("#help").is(":visible")) return !0;
			return 112 !== (t ? t.keyCode : window.event.keyCode) || (t.preventDefault(), l(), !1)
		}), this.each(function () {
			e(this).on("click", function (e) {
				return e.preventDefault(), l(), !1
			})
		})
	}, e.fn.turtleHelp.defaults = {
		useF1: !0,
		index: !0,
		slide: !1
	}, e.fn.turtleHelp.text = {
		help_title: "Using Turtle gallery",
		help_pressF1: "Press <b>F1</b> any time to get help!",
		index: {
			help_topNavigation: "Top <b>navigation</b> bar with <b>Home</b> button",
			help_upOneLevel: "<b>Up</b> one level",
			help_authorInfo: "Author or company <b>information</b>",
			help_shareAndLike: "<b>Share</b> and <b>Like</b> buttons for social networking",
			help_searchNew: "Search <b>new images</b>",
			help_search: "<b>Search</b> button",
			help_downloadZip: "<b>Download</b> album or current folder as ZIP file",
			help_startSlideshow: "Start <b>slideshow</b> <em>Numpad *</em>"
		},
		slide: {
			help_previousPicture: "<b>Previous</b> picture <em>Left arrow</em><em>Swipe right</em>",
			help_backToIndex: "Back to <b>thumbnail page</b> / up one level <em>Esc</em>",
			help_toggleFit: "Toggle <b>fit to screen</b> or <b>1:1</b> size <em>Numpad +</em>",
			help_toggleInfo: "Show/hide <b>captions</b> and other panels, like Metadata, Map, Shopping, etc. <em>Numpad -</em>",
			help_toggleThumbnails: "Show/hide <b>thumbnail</b> scroller <em>Numpad -</em>",
			help_toggleAutoPlay: "Start/stop <b>slideshow</b> <em>Numpad *</em>",
			help_nextPicture: "<b>Next</b> picture <em>Right arrow</em><em>Swipe left</em>",
			help_toggleMeta: "Toggle <b>photo data</b>",
			help_toggleMap: "Toggle <b>map</b>",
			help_toggleShop: "Toggle <b>shopping options</b> panel",
			help_downloadImage: "Download <b>high resolution</b> file",
			help_shareAndLike: "<b>Share</b> and <b>Like</b> buttons for social networking",
			help_toggleComments: "Toggle <b>Facebook comments</b>",
			help_toggleFaces: "Toggle visibility of <b>tagged people</b>"
		}
	}, e.fn.turtle = function (t) {
		t = e.extend({}, e.fn.turtle.defaults, t);
		var i = e.fn.turtle.ids,
			o = getTranslations(e.fn.turtle.text),
			s = function (a, n, i) {
				e.cookie(a, n, i), t[a] = n
			};
		! function (a) {
			for (var n, i = 0; i < a.length; i++) null !== (n = e.cookie(a[i])) && (t[a[i]] = n)
		}(["thumbsOn", "infoOn", "commentsOn", "metaOn", "mapOn", "regionsOn", "shopOn", "shareOn", "printOn", "fitImage", "slideshowDelay", "slideshowOn"]), e.fn.addScroll.defaults.dontDrag = "#" + i.map, e.fn.addMap.defaults.zoom = t.mapZoom, e.fn.addMap.defaults.type = t.mapType, e.fn.addMap.defaults.resPath = t.resPath, e.fn.addShop.defaults.id = t.shopId, e.fn.addShop.defaults.path = (t.albumName ? t.albumName + "/" : "") + t.relPath, e.fn.addShop.defaults.currency = t.shopCurrency || "EUR", e.fn.addShop.defaults.handling = t.shopHandling || null, e.fn.addShop.defaults.locale = t.shopLocale || "US", e.fn.addShop.defaults.quantityCap = t.shopQuantityCap || 0, e.fn.addShop.defaults.discount = t.shopDiscount || 0, e.fn.addShop.defaults.options = t.shopOptions || "", e.fn.addShop.defaults.coupons = t.shopCoupons || "", e.fn.addShop.defaults.itemNameUses = t.shopItemNameUses || "fileName", t.shopContinueUrl && (e.fn.addShop.defaults.continueUrl = t.shopContinueUrl.match(/^https?:/i) ? t.shopContinueUrl : window.location.origin + t.shopContinueUrl), e.fn.addPlayer.defaults.backgroundColor = n.css("background-color").rgb2hex(), t.linkSlides || (e.fn.addPlayer.defaults.fullScreen = t.videoMaximize, e.fn.addPlayer.defaults.auto = t.videoAuto, e.fn.addPlayer.defaults.solution = t.prioritizeFlash ? "flash,html" : "html,flash"), e.fn.centerThis.defaults.fit = t.fitImage, e.fn.centerThis.defaults.animate = t.transitions, e.fn.centerThis.defaults.padding = t.fitPadding, e.fn.centerThis.defaults.enlarge = !t.fitShrinkonly, e.fn.centerThis.defaults.selector = "." + i.main,
			function (t) {
				for (var a in t) t.hasOwnProperty(a) && (e.fn.addSocial.defaults[a] = t[a])
			}(t.shares), t.shareSlides = t.shares && (t.linkSlides && (t.shares.facebookLike || t.shares.facebook || t.shares.gplus) || t.shares.twitter || t.shares.pinterest || t.shares.digg || t.shares.delicious || t.shares.myspace || t.shares.stumbleupon || t.shares.reddit || t.shares.email);
		var l, r, d, c, h, u, p, f, m, g = Math.round((new Date).getTime() / 864e5),
			b = "ms" === VEND && Modernizr && !1 === Modernizr.opacity,
			v = {},
			w = null,
			k = null,
			T = 0,
			y = null,
			x = null,
			S = "index" === n.attr("id"),
			I = "page" === n.attr("id"),
			O = S && !t.linkSlides,
			F = [],
			P = !1,
			M = !1,
			C = null,
			N = null,
			D = a.width(),
			L = a.height(),
			B = -1,
			E = -1,
			z = function (a) {
				if (d && d.is(":visible") || document.activeElement && ("INPUT" === document.activeElement.nodeName || "TEXTAREA" === document.activeElement.nodeName) || e.isFunction(t.enableKeyboard) && !t.enableKeyboard()) return !0;
				switch (a ? a.keyCode : window.event.keyCode) {
					case 13:
					case 10:
						O ? ke() : window.location.href = l.eq(T).attr("href");
						break;
					case 37:
						T = (T || l.length) - 1, W();
						break;
					case 38:
						T && t.cols && (T = Math.max(0, T - t.cols)), W();
						break;
					case 39:
						T = (T + 1) % l.length, W();
						break;
					case 40:
						T < l.length - 1 && t.cols && (T = Math.min(l.length - 1, T + t.cols)), W();
						break;
					case 97:
					case 35:
						T = l.length - 1, W();
						break;
					case 103:
					case 36:
						T = 0, W();
						break;
					case 106:
					case 179:
						O && t.slideshowFullScreen && (M = !1, e("html").fullScreen(!0)), O && ke(), ee();
						break;
					default:
						return !0
				}
				return !1
			},
			A = function (a) {
				if (d.is(":hidden") || document.activeElement && ("INPUT" === document.activeElement.nodeName || "TEXTAREA" === document.activeElement.nodeName) || e.isFunction(t.enableKeyboard) && !t.enableKeyboard()) return !0;
				switch (a ? a.keyCode : window.event.keyCode) {
					case 27:
						U();
						break;
					case 37:
						K();
						break;
					case 38:
						$();
						break;
					case 39:
						q();
						break;
					case 40:
						Y();
						break;
					case 97:
					case 35:
						O ? ke(l.length - 1) : window.location.href = t.firstPage;
						break;
					case 103:
					case 36:
						O ? ke(0) : window.location.href = t.firstPage;
						break;
					case 106:
					case 179:
						y ? te() : (O && t.slideshowFullScreen && (M = !1, e("html").fullScreen(!0)), ee());
						break;
					case 107:
						pe();
						break;
					case 109:
						de();
						break;
					default:
						return !0
				}
				return !1
			},
			H = function () {
				(t.level > 0 ? window : parent).location.href = t.uplink || t.indexPage || "../"
			},
			U = function () {
				if (O || (t.curr && e.cookie("curr:" + t.albumName + "/" + t.relPath, t.curr, t.keepPrefs), window.location.href = t.indexPage), !t.skipIndex || t.level || t.uplink) {
					var a, o = e("[data-role=index]");
					n.hideAllTooltips(), d.is(":visible") ? (te(), O && t.slideshowFullScreen && e("html").fullScreen(!1), t.skipIndex ? H() : (o.length && o.is(":hidden") && (o.children().addBack().css({
						visibility: "visible",
						display: "block"
					}), r.children("." + i.cont).trigger("adjust"), setTimeout(function () {
						r.loadImages()
					}, 100)), t.transitions ? d.fadeOut(t.speed) : d.hide(), w && (a = w.find("." + i.video + ",." + i.audio)).length && a.trigger("pause"), e("#" + i.map + ">." + i.cont).trigger("adjust"), "no" !== t.hash && e.history.load(""))) : o.length && o.is(":hidden") && (o.children().addBack().css({
						visibility: "visible",
						display: "block"
					}), setTimeout(function () {
						r.loadImages()
					}, 100)), o.find("[data-custom-scroll]").data("scrolling", !1)
				}
			},
			R = function () {
				var e = l.eq(T).children("img:first");
				return e.length ? (e.data(i.link) || e.data(i.src)).getFile() : null
			},
			j = function (e) {
				l.children("." + i.checkbox).toggleClass(i.active, e), d && d.find("." + i.checkbox).toggleClass(i.active, e)
			},
			W = function (a) {
				var n = l.eq(T);
				l.filter("." + i.active).removeClass(i.active), n.addClass(i.active), t.skipIndex || typeof a !== UNDEF && !1 !== a || n.trigger("setactive"), m && (m.filter("." + i.active).removeClass(i.active), m.eq(T).addClass(i.active).trigger("setactive")), t.mapOnIndex && e("#" + i.map + " ." + i.cont).trigger("setactive", n.find("img:first").data(i.mapid)), T && e.cookie("curr:" + t.albumName + "/" + t.relPath, T, t.keepPrefs)
			},
			_ = function () {
				e.cookie("curr:" + t.albumName + "/" + t.relPath, null)
			},
			q = function () {
				var a = e("." + i.main),
					n = e("." + i.img);
				if (a.length)
					if (a.position().left + a.outerWidth() <= n.width() - t.fitPadding) X();
					else {
						var o = Math.round(.8 * n.width());
						a.animate({
							left: Math.max(a.position().left - o, n.width() - t.fitPadding - a.outerWidth())
						}, t.scrollDuration)
					}
			},
			K = function () {
				var a = e("." + i.main),
					n = e("." + i.img);
				if (a.length)
					if (a.position().left >= t.fitPadding) V();
					else {
						var o = Math.round(.8 * n.width());
						a.animate({
							left: Math.min(a.position().left + o, t.fitPadding)
						}, t.scrollDuration)
					}
			},
			$ = function () {
				var a = e("." + i.main),
					n = e("." + i.img);
				if (a.length && !(a.position().top > t.fitPadding)) {
					var o = Math.round(.8 * n.width());
					a.animate({
						top: Math.min(a.position().top + o, t.fitPadding)
					}, t.scrollDuration)
				}
			},
			Y = function () {
				var a = e("." + i.main),
					n = e("." + i.img);
				if (a.length && !(a.position().top + a.outerHeight() <= n.height() - t.fitPadding)) {
					var o = Math.round(.8 * n.width());
					a.animate({
						top: Math.max(a.position().top - o, n.height() - t.fitPadding - a.outerHeight())
					}, t.scrollDuration)
				}
			},
			Q = function () {
				w.find("." + i.main).trigger("dragcancel")
			},
			V = function () {
				if (te(), O) T ? ke(T - 1) : "startover" === t.afterLast ? ke(l.length - 1) : "nextfolder" === t.afterLast && t.previousFoldersLast ? window.location.href = t.previousFoldersLast : Q();
				else {
					var a = e("." + i.controls + " ." + i.prev);
					a.length && (a = a.attr("href")) !== NOLINK ? window.location.href = a : Q()
				}
			},
			X = function (a) {
				var r = [];
				if (O) {
					if (T < l.length - 1) return a ? J() : te(), void ke(T + 1);
					if ("startover" === t.afterLast || y && t.slideshowLoop) return a ? J() : te(), void ke(0);
					switch (_(), Q(), t.afterLast) {
						case "onelevelup":
							t.uplink && H();
							break;
						case "backtoindex":
							t.skipIndex || U();
							break;
						case "nextfolder":
							t.nextFoldersFirst ? (null !== y && e.cookie("slideshowDelay", t.slideshowDelay, 8), window.location.href = t.nextFoldersFirst) : te();
							break;
						case "ask":
							te(), l.length > 1 && r.push({
								t: o.startOver,
								h: function () {
									ke(0)
								}
							}), t.uplink && r.push({
								t: t.level > 0 ? o.upOneLevel : t.homepageLinkText || o.backToHome,
								h: function () {
									H()
								}
							}), t.skipIndex || r.push({
								t: o.backToIndex,
								h: function () {
									U()
								}
							}), t.nextFoldersFirst && r.push({
								t: o.nextFolder,
								h: function () {
									window.location.href = t.nextFoldersFirst
								}
							}), n.addModal(e("<p>", {
								text: o.atLastPageQuestion
							}), r, {
								type: "question",
								uid: "dialog",
								title: o.atLastPage,
								width: 500
							})
					}
					Q()
				}
				else {
					var d = e("." + i.controls + " ." + i.next);
					d.length && (d = d.attr("href")) && d.length && d !== NOLINK ? (s("slideshowDelay", t.slideshowDelay), y && s("slideshowOn", a, 8), window.location.href = d) : "ask" === t.afterLast && (te(), Q(), _(), t.firstPage && r.push({
						t: o.startOver,
						h: function () {
							y && s("slideshowOn", null != y, 8), window.location.href = t.firstPage
						}
					}), t.uplink && r.push({
						t: t.level > 0 ? o.upOneLevel : t.homepageLinkText || o.backToHome,
						h: function () {
							H()
						}
					}), t.indexPage && r.push({
						t: o.backToIndex,
						h: function () {
							window.location.href = t.indexPage
						}
					}), t.nextFoldersFirst && r.push({
						t: o.nextFolder,
						h: function () {
							window.location.href = t.nextFoldersFirst
						}
					}), n.addModal(e("<p>", {
						text: o.atLastPageQuestion
					}), r, {
						uid: "dialog",
						type: "question",
						title: o.atLastPage,
						width: 500
					}))
				}
			},
			Z = function () {
				x && (x = clearTimeout(y), y = setTimeout(function () {
					X(!0)
				}, 300))
			},
			G = function () {
				y && (x = y, y = clearTimeout(y))
			},
			J = function () {
				y && (clearTimeout(y), y = setTimeout(function () {
					X(!0)
				}, t.slideshowDelay))
			},
			ee = function () {
				y = clearTimeout(y);
				var a;
				v.play.hide(), v.pause.showin(), e.cookie("slideshowDelay", t.slideshowDelay, 8), (a = w.find("." + i.video + ",." + i.audio)).length && (a.data("playing") || t.videoAuto) ? (x = !0, a.trigger("setEndedFn", Z)) : y = setTimeout(function () {
					X(!0)
				}, t.slideshowDelay), t.bgAudioId && e(t.bgAudioId).trigger("play"), ie()
			},
			te = function () {
				if (x = !1, v.pause.hide(), v.play.showin(), e.cookie("slideshowDelay", null), y) {
					var a;
					y = clearTimeout(y), ie(), O ? t.bgAudioId && e(t.bgAudioId).trigger("pause") : s("slideshowOn", !1), (a = w.find("." + i.video + ",." + i.audio)).length && (a.data("playing") || t.videoAuto) && a.trigger("setEndedFn", null)
				}
			},
			ae = !1,
			ne = function () {
				M || ae || (ae = !0, u.stop(!0, !1).fadeTo(200, .8, function () {
					b && u.css("filter", null)
				}), C = setTimeout(function () {
					ie()
				}, 1500))
			},
			ie = function () {
				M ? C = setTimeout(function () {
					ie()
				}, 750) : (ae = !1, C = clearTimeout(C), u.fadeTo(500, t.controlOutOpacity))
			},
			oe = function () {
				t.infoOn && (v.hideInfo.hide(), v.showInfo.showin(), t.transitions ? p.animate({
					bottom: -p.outerHeight()
				}, 500, function () {
					p.hide()
				}) : p.css({
					bottom: -p.outerHeight()
				}).hide(), w && t.fitFreespace && w.centerThis({
					fit: t.fitImage,
					marginTop: ce(),
					marginBottom: 0
				}), ie(), s("infoOn", !1))
			},
			se = function () {
				if (!t.infoOn) {
					v.showInfo.hide(), v.hideInfo.showin(), p.is(":hidden") && p.show().css({
						bottom: -p.outerHeight()
					});
					var e = function () {
						p.children("." + i.map).trigger("adjust")
					};
					t.transitions ? p.animate({
						bottom: 0
					}, 500, e) : (p.show().css({
						bottom: 0
					}), e()), w && t.fitFreespace && w.centerThis({
						fit: t.fitImage,
						marginTop: ce(),
						marginBottom: p.outerHeight()
					}), ie(), s("infoOn", !0)
				}
			},
			le = function () {
				t.thumbsOn && (v.hideThumbs.hide(), v.showThumbs.showin(), t.transitions ? h.animate({
					top: -f.outerHeight() - 10
				}, 500) : h.css({
					top: -f.outerHeight() - 10
				}), w && t.fitFreespace && w.centerThis({
					fit: t.fitImage,
					marginTop: 0,
					marginBottom: he()
				}), ie(), s("thumbsOn", !1))
			},
			re = function () {
				t.thumbsOn || (v.showThumbs.hide(), v.hideThumbs.showin(), t.transitions ? h.animate({
					top: 0
				}, 500) : h.css({
					top: 0
				}), w && t.fitFreespace && w.centerThis({
					fit: t.fitImage,
					marginTop: f.outerHeight(),
					marginBottom: he()
				}), ie(), s("thumbsOn", !0))
			},
			de = function () {
				var e = t.fitFreespace;
				t.fitFreespace = !1, t.infoOn || t.thumbsOn ? (le(), oe(), w && e && w.centerThis({
					fit: t.fitImage,
					marginTop: 0,
					marginBottom: 0
				})) : (re(), se(), w && e && w.centerThis({
					fit: t.fitImage,
					marginTop: f.outerHeight() || 0,
					marginBottom: p.outerHeight() || 0
				})), t.fitFreespace = e
			},
			ce = function () {
				return t.fitFreespace && h.position().top >= 0 ? f.outerHeight() || 0 : 0
			},
			he = function () {
				return t.fitFreespace && p.is(":visible") ? p.outerHeight() || 0 : 0
			},
			ue = function () {
				w && w.centerThis({
					fit: t.fitImage,
					marginTop: ce(),
					marginBottom: he()
				})
			},
			pe = function () {
				t.fitImage ? fe() : me()
			},
			fe = function () {
				t.hideFitBtn || (v.noresize.hide(), v.resize.showin()), e.fn.centerThis.defaults.enlarge = !t.fitShrinkonly, w.centerThis({
					fit: !1,
					marginTop: ce(),
					marginBottom: he()
				}), ie(), s("fitImage", !1)
			},
			me = function () {
				t.hideFitBtn || (v.resize.hide(), v.noresize.showin()), e.fn.centerThis.defaults.enlarge = !0, w.centerThis({
					fit: !0,
					marginTop: ce(),
					marginBottom: he()
				}), ie(), s("fitImage", !0)
			},
			ge = function (t) {
				return !(!e(this).parents("[data-custom-scroll]").data("scrolling") && O) || (t.preventDefault(), e(this).trigger("removeTooltip"), ke(e(this)), !1)
			},
			be = function (e) {
				e && e.length && (e.stop(), function (e) {
					e.trigger("destroy"), e.find("." + i.video + ",." + i.audio).trigger("destroy"), e.find("." + i.share + "-" + i.icon).trigger("destroy"), e.find("." + i.map).trigger("destroy")
				}(e), e.remove())
			},
			ve = function (a) {
				var n;
				a && a.length && (n = "number" === t.hash ? (parseInt(a, 10) || 1) - 1 : function (e) {
					var t, a, n;
					for (t = 0; t < l.length; t++)
						if (a = l.eq(t).children("img:first"), (n = a.length && (a.data(i.link) || a.data(i.src)).getFile()) && n === e) return t;
					return -1
				}(a)) >= 0 && n < l.length ? (ke(n, !1), t.slideshowAuto = !1) : (U(), "ms" == VEND && setTimeout(function () {
					e("[data-role=index]").show(), e("[data-custom-scroll]").trigger("adjust")
				}, 10))
			},
			we = function (a) {
				if ("number" === t.hash) e.history.load(a + 1);
				else {
					var n = R();
					n && e.history.load(n)
				}
			},
			ke = function (a, s) {
				if (typeof s === UNDEF && (s = !0), "number" != typeof a && (a = a ? function (e) {
						var t;
						return null == e ? t = T : "number" == typeof e ? t = Math.minMax(0, e, l.length) : (t = l.index(e)) < 0 && m && (t = m.index(e)), t
					}(a) : T), d.is(":hidden") && (w && w.data("curr") !== a && be(w), t.transitions ? d.fadeIn(t.speed) : d.show(), n.hideAllTooltips(), f.children(":first").loadImages()), w && w.data("curr") === a) !1 !== s && we(a);
				else {
					var r, h, u, p = (S = l.eq(a)).attr("href"),
						g = S.children("img").eq(0);
					if (g.length) {
						w && (be(k), (k = w).css({
							zIndex: 0
						}), setTimeout(function (e) {
							e.trigger("unswipe")
						}, 50, k.find("." + i.main)), k.unmousewheel()), (r = d.children("." + i.img).not(w)).length && r.stop().remove(), w = e("<div>", {
							id: "img" + a,
							'class': i.img
						}).css({
							zIndex: 1,
							display: "none"
						}).data({
							curr: a
						}).appendTo(d), t.clickBesideForIndex && (!t.skipIndex || t.level || t.uplink) && w.on("click", function (t) {
							if (e(t.target).hasClass("img")) return t.preventDefault(), U(), !1
						}), c.css({
							opacity: 0,
							display: "block"
						}).animate({
							opacity: 1
						}), T = a, W(), O && s && we(T);
						var b = e("<div>", {
							'class': i.main
						});
						if (g.data(i.isother) || !p) {
							h = Math.max(g.data(i.width) || d.width() - 160, 280), u = Math.max(g.data(i.height) || d.height() - 120, 200), b.addClass(i.other);
							var v = g.data(i.content);
							if (v && (v = v.trim()).length) b.css({
								width: h,
								height: u
							}).append(v.match(/^https?:\/\//i) ? e("<iframe>", {
								width: "100%",
								height: "100%",
								src: v,
								frameborder: 0,
								allowfullscreen: "allowfullscreen"
							}) : v);
							else {
								var S = e("<a>", {
									href: g.data(i.link),
									target: "_blank"
								});
								e("<img>", {
									src: g.data(i.src) || g.attr("src")
								}).appendTo(S);
								b.append(S).append(e("<p>", {
									text: o.clickToOpen
								}))
							}
							Ie(b)
						}
						else if (g.data(i.isvideo) || g.data(i.isaudio)) {
							if (h = g.data(i.width) || d.width() - 160, u = g.data(i.height) || d.height() - 120, (x = y) && (y = clearTimeout(y)), g.data(i.isvideo)) {
								var I = d.width() - 40,
									F = d.height() - 40;
								if (h > I || u > F) {
									var P = Math.min(I / h, F / u);
									h = Math.round(h * P), u = Math.round(u * P)
								}
								b.addClass(i.video)
							}
							else h = Math.max(240, g.data(i.width) || 0), u = Math.max(180, g.data(i.height) || 0), b.addClass(i.audio);
							b.css({
								width: h,
								height: u
							}).data({
								ow: h,
								oh: u
							}), setTimeout(function () {
								r = b.addPlayer({
									src: g.data(i.link),
									title: t.showVideoTitle ? g.attr("alt") : "",
									poster: g.data(i.poster),
									play: G,
									ended: Z,
									resPath: t.resPath
								})
							}, t.speed / 3), Ie(b)
						}
						else {
							h = g.data(i.width), u = g.data(i.height);
							var M = e(new Image);
							b.addClass(i.image).append(M).css({
								width: h,
								height: u
							}).data({
								ow: h,
								oh: u
							}), M.attr({
								src: p,
								width: h || "auto",
								height: u || "auto"
							}), M[0].complete ? (g.data("cached", !0), Ie(b)) : M.on("load", function () {
								g.data("cached", !0), Ie(b)
							}).prop({
								src: p
							})
						}(r = S.find(".checkbox")).length && (b.append(r = r.clone()), r.on("click", function (t) {
							t.preventDefault();
							var a = e(this).hasClass(i.active);
							return e(this).toggleClass(i.active, !a), l.filter("." + i.active).find("." + i.checkbox).toggleClass(i.active, !a), !1
						})), Oe(g, a)
					}
				}
			},
			Te = function (e) {
				e && e.length && (e.data(i.kill, !0), setTimeout(function () {
					e && e.removeData(i.kill)
				}, 500))
			},
			ye = function (t) {
				var a = e(t.target);
				return a.is("." + i.main) || (a = a.parents("." + i.main)), !(a.length && !a.data(i.kill)) || (a.data("scrolling") || (Te(a), t.pageX < a.offset().left + a.outerWidth() / 2 ? V() : X()), !1)
			},
			xe = function (t, a) {
				t.preventDefault();
				var n = e(t.target).parents("." + i.img);
				return n.data(i.kill) || (Te(n), a > 0 ? V() : X()), !1
			},
			Se = function (t) {
				var a = t.attr("href"),
					n = t.children("img").eq(0);
				!a || !n || n.data("cached") || n.data(i.isvideo) || n.data(i.isother) || e("<img>").on("load", function () {
					n.data("cached", !0)
				}).attr({
					src: a
				})
			},
			Ie = function (a) {
				if (c && c.length && (t.transitions ? c.stop(!0, !1).animate({
						opacity: 0
					}, {
						duration: 100,
						complete: function () {
							e(this).hide()
						}
					}) : c.hide()), O) t.transitions ? k && k.stop(!0, !1).animate({
					opacity: 0
				}, t.speed / 2, "linear", function () {
					be(k)
				}) : be(k), w.children().not("." + i.bottom).remove(), w.append(a);
				else if (!(a = w.find("." + i.main)).length) return;
				var n = a.hasClass(i.image);
				! function (a) {
					t.rightClickProtect && a.on("contextmenu", function (e) {
						return e.preventDefault(), !1
					}), setTimeout(function () {
						t.enableMouseWheel && w.on("mousewheel", xe), a.addSwipe(X, V), TOUCHENABLED && !y && ne(), a.on(TOUCH.END, function (t) {
							return !!(!t.target || "A" === t.target.nodeName || e(t.target).parents("." + i.bottom).length || ae || a.data("scrolling") || a.data("taplength") >= 600) || (t.preventDefault(), ne(), !1)
						}), (l.length > 1 || !O) && a.hasClass(i.image) && t.clickForNext && a.on("click", ye)
					}, t.speed / 2)
				}(a), setTimeout(function () {
					t.transitions ? w.css({
							opacity: 0,
							display: "block"
						}).animate({
							opacity: 1
						}, {
							duration: t.speed,
							complete: b ? function () {
								w.css({
									filter: ""
								})
							} : null
						}).centerThis({
							init: !0,
							speed: Math.round(.75 * t.speed),
							marginTop: ce(),
							marginBottom: he(),
							preScale: n && t.preScale,
							animate: n && t.preScale && 1 !== t.preScale,
							fit: t.fitImage
						}) : w.show().centerThis({
							init: !0,
							marginTop: ce(),
							marginBottom: he(),
							fit: t.fitImage
						}),
						function (e) {
							var t = w.find("nav a." + i.regions + "-icon").eq(0);
							if (t.length) {
								var a = l.eq(e).find("img:first");
								t.addRegions(w.find("." + i.main).eq(0), a.data(i.regions))
							}
						}(T)
				}, 50), O ? (T < l.length - 1 && Se(l.eq(T + 1)), T > 0 && Se(l.eq(T - 1))) : t.slideshowOn && ee()
			},
			Oe = function (a, r) {
				var d, c, h, u, f, g = Math.round(.8 * w.width()) - 30,
					b = !(a.data(i.isvideo) || a.data(i.isaudio) || a.data(i.isother));
				O ? (p = e("<div>", {
					'class': i.bottom
				}).appendTo(w), d = e("<div>", {
					'class': i.cont
				}).appendTo(p), typeof r !== UNDEF && t.showImageNumbers && d.append('<h4 class="nr"><strong>' + (r + 1) + "</strong> / " + l.length + "</h4>"), (h = a.data(i.caption)) && d.append(h), f = a.data(i.src).replace(t.thumbs + "/", t.slides + "/")) : (d = p.children("." + i.cont), f = a.attr("src")), c = e("<nav>", {
					'class': "buttons"
				}).prependTo(d), d.width() > g && d.width(g);
				var v = function (a) {
						a.preventDefault();
						var n = e(a.target),
							o = n.data("rel"),
							l = d.children("." + o),
							r = l.is(":visible"),
							c = he(),
							h = l.outerHeight(!0);
						if (n.toggleClass(i.active, !r), o === i.map) {
							var u = function () {
								r || l.children("." + i.mapcont).trigger("adjust")
							};
							t.transitions ? l.slideToggle("fast", u) : (l.toggle(), setTimeout(u, 50))
						}
						else t.transitions ? l.slideToggle("fast") : l.toggle();
						return w && t.fitFreespace && w.centerThis({
							fit: t.fitImage,
							marginTop: ce(),
							marginBottom: c + (r ? -h : h)
						}), s(o + "On", !r), !1
					},
					k = function (t, a) {
						var n = e("<div>", {
							'class': i.panel + " " + t
						}).data("rel", t);
						if (a) {
							var o = d.find("." + i.panel).eq(0);
							n = o.length ? n.insertBefore(o) : n.appendTo(d)
						}
						else n = n.appendTo(d);
						return n.append(e("<div>", {
							'class': i.icon
						})), n
					},
					y = function (a) {
						var n = e("<a>", {
							'class': a + "-" + i.icon
						}).data("rel", a).appendTo(c);
						return t.buttonLabels && n.text(o[a + "Btn"] || a), n.addTooltip(o[a + "Label"] || (t.buttonLabels ? "" : o[a + "Btn"] || a)), n.on("click", v), n
					};
				if (t.shareSlides) {
					var x;
					t.shareInline ? (x = k(i.share, !0), y(i.share), x = e("<div>", {
						'class': i.shares
					}).css("min-height", "25px").appendTo(x)) : (x = e("<a>", {
						'class': i.share + "-" + i.icon
					}).appendTo(c), t.buttonLabels && x.text(o.shareBtn)), O ? (u = "number" === t.hash ? T + 1 : R(), setTimeout(function () {
						x.addSocial({
							hash: u,
							inline: t.shareInline,
							buttonLabels: t.shareLabels,
							title: (a.data(i.caption) || "").stripHTML(!0),
							image: f
						})
					}, t.speed / 2)) : x.addSocial({
						useHash: !1,
						inline: t.shareInline,
						buttonLabels: t.shareLabels,
						title: (a.data(i.caption) || "").stripHTML(!0),
						image: f
					})
				}
				var S;
				!O && (S = d.children("." + i.comments)).length && (S.data("rel", i.comments), y(i.comments));
				for (var I, P = [i.meta, i.map, i.shop, i.print], M = 0; M < P.length; M++) I = P[M], null == a.data(I) || I == i.map && !t.mapOnSlide || (k(I), y(I));
				if (b) {
					if (t.printOn) {
						var C = e("<a>", {
							'class': i.print + "-" + i.icon,
							text: t.buttonLabels ? o.printBtn : ""
						});
						C.addTooltip(o.printLabel), setTimeout(function () {
							C.on("click", function (e) {
								printImage(a.data(i.link) || f, a.attr("alt") || "", a.data(i.caption) || "")
							})
						}, t.speed), c.append(C)
					}
					if (t.fotomotoOn) {
						var N = e("<a>", {
							'class': i.fotomoto + "-" + i.icon,
							text: t.buttonLabels ? o.fotomotoBtn : ""
						});
						N.addTooltip(LOCAL ? o.locationWarning : "<h5>Fotomoto</h5>" + o.fotomotoLabel), setTimeout(function () {
							N.on("click", function (e) {
								typeof FOTOMOTO === UNDEF || LOCAL || FOTOMOTO.API.showWindow(10, a.data(i.link) || f)
							})
						}, t.speed), c.append(N)
					}
					if (h = a.data(i.mostphotos)) {
						h.startsWith("http") || (h = "https://www.mostphotos.com/" + h);
						e("<a>", {
							href: h,
							'class': i.mostphotos + "-" + i.icon,
							text: t.buttonLabels ? o.mostphotosBtn : "",
							target: "_blank"
						}).appendTo(c).addTooltip("<h5>" + o.mostphotosBtn + "</h5>" + o.mostphotosLabel)
					}
					if (a.data(i.regions)) {
						var D = e("<a>", {
							'class': i.regions + "-" + i.icon
						});
						t.buttonLabels && D.text(o.people), t[i.regions + "On"] && D.addClass(i.active), D.on("click", function () {
							s(i.regions + "On", !e(this).hasClass(i.active))
						}), c.append(D)
					}
				}
				h = a.data(i.link);
				var L = b && t.hasOwnProperty("extraSizes") && f.hasExt("jpg,png,jpeg");
				if (L || h && (!b && t.downloadNonImages || b && !t.rightClickProtect)) {
					var B = f.getFile(),
						E = e("<div>"),
						z = e("<a>", {
							href: h,
							'class': i.link + "-" + i.icon,
							download: "",
							target: "_blank"
						});
					t.buttonLabels && (t.hasOwnProperty("extraSizes") ? z.text(o.download) : a.data(i.isoriginal) ? z.text(o.original) : z.text(o.hiRes)), E.append(e("<h5>", {
						text: o.download
					}));
					var A = e("<div>", {
						'class': "sizes"
					}).appendTo(E);
					if (L)
						for (var H = t.extraSizes.split(","), M = 0; M < H.length; M++) A.append(e("<a>", {
							href: (O ? "" : "../") + "dl/" + H[M] + "/" + B,
							text: H[M],
							download: ""
						}));
					h && (A.append(e("<a>", {
						href: h,
						text: a.data(i.isoriginal) ? o.original : o.hiRes,
						download: ""
					})), E.append(e("<input>", {
						'class': "fullw",
						type: "text",
						value: h.fullUrl(),
						readonly: ""
					})), "download" in z[0] || E.append(e("<small>", {
						html: o.saveTip
					}))), z.addTooltip(E, {
						touchToggle: !0,
						stay: 5e3
					}), c.append(z)
				}
				if (t.imgHook) {
					var U = e("<a>", {
						'class': i.custom + "-" + i.icon
					});
					t.buttonLabels && t.imgHookBtn && U.text(t.imgHookBtn), U.on("click", function (o) {
						o.preventDefault();
						var s = a.data(i.link) || (O ? a.data(i.src) : a.attr("src")).replace(t.thumbs + "/", "");
						return n.addModal(e(t.imgHook.replace(/\%fileName\%/g, s)), {
							uid: i.custom,
							width: t.imgHookWidth || 600,
							title: t.imgHookBtn,
							defaultButton: "okButton",
							resizable: !0,
							savePosition: !0
						}), !1
					}), c.append(U)
				}
				t.imgHookFn && e.isFunction(t.imgHookFn) && t.imgHookFn.call(a), d.children("." + i.panel).each(function () {
					var n = e(this),
						o = n.data("rel");
					if (o && null !== (h = a.data(o))) {
						if (o === i.map) {
							var s = e("<div>", {
								'class': i.mapcont
							}).appendTo(n);
							if (s.width(d.width() - 30), t.mapAll) {
								s.addMap({
									click: function () {
										O ? ke(this.link) : window.location.href = this.link
									},
									markers: F,
									curr: parseInt(O ? a.data(i.mapid) : m.filter("." + i.active).find("img:first").data(i.mapid), 10)
								})
							}
							else {
								var l = (a.data(i.caption) || "").stripHTML() || a.attr("alt") || T + 1 + "";
								s.addMap({
									map: h,
									label: l
								})
							}
							setTimeout(function () {
								s.trigger("adjust")
							}, t.speed)
						}
						else if (o === i.shop) {
							var r = {};
							"+" !== h && (r.options = h), null !== (h = a.data(i.discount)) && (r.discount = h), n.addShop(a.closest("a"), r)
						}
						else n.append(h);
						t[o + "On"] ? c.children("a." + o + "-icon").addClass(i.active) : n.hide()
					}
				}), c.html().length || c.remove(), t.infoOn || p.hide()
			},
			Fe = function () {
				var a = e("<div>", {
						'class': i.feedback
					}),
					s = e("<form>", {
						id: i.feedback
					}).appendTo(a);
				t.directKey && (s.append('<input type="hidden" name="from" value="' + t.feedbackEmail.replace("|", "@") + '">'), s.append('<input type="hidden" name="to" value="' + xDecrypt(t.directKey) + '">'), s.append(e('<p class="email"><label for="email">' + o.yourEmail + '</label><input id="email" name="email" type="email"></p>'))), s.append(e('<p class="subject"><label for="subject">' + o.subject + '</label><input id="subject" name="subject" value="' + t.albumName + (t.relPath.length ? "/" + t.relPath : "") + '"></p>')), s.append(e('<p class="message"><label for="message">' + o.message + '</label><textarea id="message" name="message"></textarea></p>')), l.filter(function () {
					return e(this).children("." + i.active).length
				}).each(function (t) {
					var a = e(this).find("img").eq(0),
						n = a.data("src"),
						l = (a.data(i.isimage) || a.data(i.isother) ? n : a.data("link") || "").getFile(),
						r = O ? window.location.href.split("#")[0] + "#" + encodeURIComponent(l) : window.location.href.getDir() + e(this).attr("href");
					s.append(e('<div><aside><img src="' + n + '"></aside><div><a class="remove">×</a><label for="img' + t + '">' + l + '</label><input type="hidden" name="file[' + (t + 1) + ']" value="' + r + '"><textarea id="img' + t + '" name="comment[' + (t + 1) + ']" placeholder="' + o.comment + '"></textarea></div></div>'))
				}), s.find("a.remove").on("click", function (t) {
					return t.preventDefault(), e(this).parents("div").eq(1).remove(), !1
				});
				var r = function (a) {
					if (!a || !a.length) return console && console.log("Submitform Error: Missing form"), !1;
					var i, s = !1,
						l = a.find("form").eq(0);
					window.location.href.split("#")[0];
					if (t.directKey) {
						if (!(i = l.find("input#email").val()).length || !i.match(/^\S+@\S+[\.][0-9a-z]+$/)) return n.addModal(e("<div>", {
							html: o.emailMissing
						}), {
							type: "error"
						}), !1;
						if (e.ajax({
								url: "https://jalbum.net/integration/api/sendmail.json",
								dataType: "jsonp",
								data: l.serialize(),
								success: function (t) {
									! function (t) {
										"Ok" === t.Result ? n.addModal(e("<div>", {
											html: o.messageSent
										}), {
											autoFade: 1500
										}) : (s = !0, DEBUG && console && console.log("Error sending mail: Result=" + t.Result + " Cause=" + t.Cause), n.addModal(e("<div>", {
											html: "<h3>" + o.errorSending + '</h3><p class="err">' + t.Result + ", " + t.Cause + "</p>"
										}), {
											type: "error"
										}))
									}(t)
								}
							}), s) return !1
					}
					else if (t.php) e.ajax({
						url: resPath + "feddback.php",
						type: "POST",
						data: {
							message: l.serialize(),
							subject: "Subject of your e-mail"
						},
						success: function (e) {
							alert("You data has been successfully e-mailed"), alert("Your server-side script said: " + e)
						}
					});
					else {
						var r = "mailto:" + encodeURIComponent(t.feedbackEmail.replace("|", "@")) + "?subject=" + encodeURIComponent(l.find("input#subject").val()) + "&body=";
						if ((i = l.find("textarea#message").val()) && (r += encodeURIComponent(i + "\n\n")), l.children("div").each(function (t) {
								r += encodeURIComponent(t + 1 + ". " + e(this).find("input[type=hidden]").val() + "\n"), (i = e(this).find("textarea").val()) && (r += encodeURIComponent(i + "\n")), r += encodeURIComponent("\n")
							}), r.length > 2048) return n.addModal(e("<div>", {
							html: "<p>" + o.tooLong + "</p>"
						}), {
							type: "error"
						}), !1;
						window.location.href = r
					}
					return !0
				};
				return s.on("submit", function () {
					return r(e("#feedback"))
				}), n.addModal(a, [{
					t: o.send,
					h: r
				}], {
					uid: "feedback",
					enableKeyboard: !1,
					title: o.sendFeedback,
					width: 480,
					resizable: !0,
					savePosition: !0
				}), !1
			},
			Pe = function () {
				var t = !1,
					a = l.filter(function () {
						var a, n = e(this);
						return !!n.children("." + i.checkbox).hasClass(i.active) && (n = n.children("img:first"), a = n.data(i.shop), t = !0, !(a && "+" !== a || n.data(i.discount)))
					});
				if (0 !== a.length) {
					var s = e("<div>", {
							'class': i.shopAll
						}),
						r = (window.location.href.getDir(), e("<ul>", {
							'class': i.thumbs
						}).appendTo(s));
					a.each(function () {
						r.append(e("<li>").append(e("<img>", {
							src: e(this).children("img:first").data("src")
						})))
					});
					e("<div>", {
						'class': i.shop
					}).appendTo(s).addShop(a), n.addModal(s, {
						uid: i.shopAll + "w",
						title: o.buyNItems.replace("{0}", a.length),
						width: 640,
						resizable: !0,
						savePosition: !0,
						enableKeyboard: !1,
						blocking: !0,
						defaultButton: "close"
					})
				}
				else n.addModal(e("<h3>" + o.noItemsSelected + "</h3><p>" + (t ? o.nonShoppableItems : o.selectItemsHint) + "</p>"), {
					type: "warning"
				})
			},
			Me = function () {
				var a = 0;
				u.children().each(function () {
					"none" !== e(this).css("display") && (a += e(this).outerWidth())
				}), u.css({
					marginLeft: -Math.floor(a / 2)
				}), u.children("a").not(v.play).addTooltip({
					delay: 500
				});
				var n = e("<div>", {
					'class': "slideshowdelay",
					text: v.play.prop("title")
				});
				e("<form>").appendTo(n).on("submit", function (e) {
					return e.preventDefault(), ee(), !1
				}).append(e("<input>", {
					type: "text",
					value: t.slideshowDelay / 1e3
				}).focus().on("change", function () {
					return s("slideshowDelay", Math.round(parseFloat(1e3 * e(this).val()) || e.fn.turtle.defaults.slideshowDelay)), !0
				})).append(e("<a>", {
					'class': "button",
					text: " "
				}).on("click", Ue)), v.play.prop("title", "").addTooltip(n, {
					stay: 5e3
				}), TOUCHENABLED || (O ? u.hide() : C = setTimeout(function () {
					ie()
				}, 1500)), u.on({
					mouseenter: function () {
						M = !0, e(this).stop(!0, !1).fadeTo(200, 1)
					},
					mouseleave: function () {
						M = !1, e(this).stop(!0, !1).fadeTo(200, .8)
					}
				}), d.on("mousemove", function (e) {
					!P && (B - e.clientY || E - e.clientX) && (E >= 0 && ne(), E = e.clientX, B = e.clientY)
				})
			},
			Ce = function (e) {
				return e.preventDefault(), te(), V(), !1
			},
			Ne = function (e) {
				return e.preventDefault(), te(), U(), !1
			},
			De = function () {
				return t.curr && e.cookie("curr:" + t.albumName + "/" + t.relPath, t.curr, 600), !0
			},
			Le = function (e) {
				return e.preventDefault(), fe(), !1
			},
			Be = function (e) {
				return e.preventDefault(), me(), !1
			},
			Ee = function (e) {
				return e.preventDefault(), oe(), !1
			},
			ze = function (e) {
				return e.preventDefault(), se(), !1
			},
			Ae = function (e) {
				return e.preventDefault(), le(), !1
			},
			He = function (e) {
				return e.preventDefault(), re(), !1
			},
			Ue = function (a) {
				return a.preventDefault(), O && t.slideshowFullScreen && (M = !1, e("html").fullScreen(!0)), ee(), !1
			},
			Re = function (e) {
				return e.preventDefault(), te(), !1
			},
			je = function (e) {
				return e.preventDefault(), J(), X(), !1
			};
		return S ? (setTimeout(function () {
			if (!t.licensee && (typeof _jaShowAds === UNDEF || _jaShowAds) && !LOCAL && !e.cookie("ls")) {
				var a = t.resPath + "/logo.png";
				e(new Image).load(function () {
					var t = e("<div>").css({
						background: "url(" + a + ") 10px top no-repeat",
						textAlign: "left",
						minHeight: "60px",
						paddingLeft: "90px"
					}).html("<h4>Turtle skin <small>" + VER + "</small></h4><p>Unlicensed</p>");
					n.addModal(t, {
						width: 240,
						defaultButton: !1,
						autoFade: 600
					}), e.cookie("ls", !0)
				}).attr("src", a)
			}
		}, 1e3), l = e(this).find("td > a"), function (a) {
			a && a.length && (S && l.length > 1 && t.showStart && function (a) {
				if (a) {
					var n = e("<div>", {
							'class': i.startShow
						}).appendTo(a),
						r = e("<div>", {
							'class': i.startTxt,
							width: "auto",
							text: o.startSlideshow
						}).appendTo("body"),
						d = n.width(),
						c = r.outerWidth();
					n.append(r), d < c && r.on({
						mouseenter: function () {
							n.stop(!0, !1).animate({
								width: c
							}, 500)
						},
						mouseleave: function () {
							n.stop(!0, !1).animate({
								width: d
							}, 500)
						}
					}), n.on({
						click: function (a) {
							if (O) return a.preventDefault(), t.slideshowFullScreen && e("html").fullScreen(!0), T === l.length - 1 ? ke(0) : ke(), l.length && setTimeout(ee, 1e3), !1;
							s("slideshowOn", !0, 8), window.location.href = l.filter("." + i.active).attr("href")
						}
					})
				}
			}(a), t.uplink = a.find("." + i.parent + ">a").attr("href") || "")
		}(e(t.header)), r = e("." + i.items), l.length && function () {
			var a, n, s = function () {
				var a = l.index(e(this));
				a && e.cookie("curr:" + t.albumName + "/" + t.relPath, a, t.keepPrefs)
			};
			l.each(function () {
				a = e(this), (n = a.find("img").eq(0)).length && (t.rightClickProtect && a.on("contextmenu", function (e) {
					return e.preventDefault(), !1
				}), n.attr("src").endsWith("/" + t.loadImg) && n.addClass(i.toload), t.markNewDays && g - parseInt(n.data(i.modified) || 0, 10) <= t.markNewDays && a.append(e("<span>", {
					'class': i.newItem,
					text: o.newItem
				})), a.addTooltip({
					delay: 500
				}), O || l.on("click", s))
			}), setTimeout(function () {
				r.loadImages(), setTimeout(function () {
					r.loadImages()
				}, 1200)
			}, 100), l.children("." + i.checkbox).on({
				click: function (t) {
					t.preventDefault();
					var a = e(this).hasClass(i.active);
					return e(this).toggleClass(i.active, !a), e(this).parent().hasClass(i.active) && d.find("." + i.checkbox).toggleClass(i.active, !a), !1
				},
				dblclick: function (t) {
					return t.preventDefault(), j(!e(this).hasClass(i.active)), !1
				}
			}), e("#" + i.selectAll).on("click", function (e) {
				return e.preventDefault(), j(!0), !1
			}), e("#" + i.selectNone).on("click", function (e) {
				return e.preventDefault(), j(!1), !1
			}), e("#" + i.shopAll).on("click", Pe)
		}(), r.find("." + i.folders).on("click", function () {
			return e.cookie("curr:" + t.albumName + "/" + t.relPath, null), !0
		}), e("#" + i.feedback).on("click", Fe), l.length && ((t.mapOnIndex || t.mapAll && t.mapOnSlide) && (F = l.collectMarkers({
			dynamic: O
		})), t.mapOnIndex && F.length && e("#" + i.map + " ." + i.cont).addMap({
			click: function () {
				O ? ke(this.link) : window.location.href = this.link
			},
			markers: F,
			range: 999,
			curr: 0
		}), null === (T = e.cookie("curr:" + t.albumName + "/" + t.relPath)) || T >= l.length ? (T = 0, W(!0)) : setTimeout(function () {
			W()
		}, 300), (e.isFunction(t.enableKeyboard) || t.enableKeyboard) && a.on("keydown", z)), l.length && O && function () {
			l.on("click", ge), d = e("<div>", {
					'class': i.gallery
				}).attr("data-role", "gallery").appendTo(n), c = e("<div>", {
					'class': i.wait
				}).appendTo(d), h = e("<div>", {
					'class': i.navigation
				}).appendTo(d),
				function () {
					var a, o, s, r, d, c, u, p, g, b, v = 0;
					f = e("<div>", {
						'class': i.scrollbox
					}).appendTo(h), d = e("<div>", {
						'class': "wrap"
					}).appendTo(f), d = e("<ul>", {
						'class': i.cont + " " + i.load
					}).appendTo(d), l.each(function () {
						a = e(this), (r = a.find("img").eq(0)).length && (o = e("<a>", {
							href: NOLINK
						}).appendTo(e("<li>").appendTo(d)), c || (isNaN(c = parseInt(o.css("width"), 10)) && (c = 133), isNaN(u = parseInt(o.css("height"), 10)) && (u = 100)), p = r.attr("width"), g = r.attr("height"), (p > c || g > u) && (p / c > g / u ? (g = Math.round(g * c / p), p = c) : (p = Math.round(p * u / g), g = u)), s = e("<img>", {
							src: r.attr("src"),
							'class': r.attr("class")
						}).data({
							src: r.data("src")
						}).appendTo(o), p && g && s.attr({
							width: p,
							height: g
						}), (b = a.children("." + i.newItem)).length && o.append(b.clone()), o.addTooltip(a.data("hint") || a.siblings("." + i.caption).html(), {
							delay: 500
						}))
					}), (o = d.children("li").first()).length && (isNaN(v = parseInt(o.css("width"), 10)) ? v = 135 : v += (parseInt(o.css("marginLeft"), 10) || 0) + (parseInt(o.css("marginRight"), 10) || 0), d.width(v * d.children().length + 2)), d.scrollThumbs({
						enableMouseWheel: t.enableMouseWheel
					}), (m = f.find("li > a")).on("click", function () {
						return !e(this).parents("[data-custom-scroll]").data("scrolling") && (n.hideAllTooltips(), e(this).hasClass(i.active) || (te(), ke(m.index(e(this)))), W(), !1)
					})
				}(), u = e("<nav>", {
					'class': i.controls + " clearfix"
				}).appendTo(h), v.prev = e("<a>", {
					'class': i.prev,
					title: o.previousPicture
				}).appendTo(u), (!t.skipIndex || t.level || t.uplink) && (v.up = e("<a>", {
					'class': i.up,
					title: t.skipIndex ? o.upOneLevel : o.backToIndex
				}).appendTo(u)), v.noresize = e("<a>", {
					'class': i.noresize,
					title: o.oneToOneSize
				}).appendTo(u), v.resize = e("<a>", {
					'class': i.resize,
					title: o.fitToScreen
				}).appendTo(u), t.hideFitBtn ? v.resize.add(v.noresize).hide() : (v.resize.togglein(!t.fitImage), v.noresize.togglein(t.fitImage)), v.hideThumbs = e("<a>", {
					'class': i.hideThumbs,
					title: o.hideThumbs
				}).appendTo(u), v.showThumbs = e("<a>", {
					'class': i.showThumbs,
					title: o.showThumbs
				}).appendTo(u), v.showThumbs.togglein(!t.thumbsOn), v.hideThumbs.togglein(t.thumbsOn), v.hideInfo = e("<a>", {
					'class': i.hideInfo,
					title: o.hideInfo
				}).appendTo(u), v.showInfo = e("<a>", {
					'class': i.showInfo,
					title: o.showInfo
				}).appendTo(u), v.showInfo.togglein(!t.infoOn), v.hideInfo.togglein(t.infoOn), v.play = e("<a>", {
					'class': i.play,
					title: o.startAutoplay
				}).appendTo(u), v.pause = e("<a>", {
					'class': i.pause,
					title: o.stopAutoplay
				}).appendTo(u), l.length > 1 || "nextfolder" === t.afterLast ? (v.play.togglein(!t.slideshowAuto), v.pause.togglein(t.slideshowAuto)) : v.play.add(v.pause).hide(), v.next = e("<a>", {
					'class': i.next,
					title: o.nextPicture
				}).appendTo(u), v.prev.on("click", Ce), v.up && v.up.on("click", Ne), v.noresize.on("click", Le), v.resize.on("click", Be), v.hideInfo.on("click", Ee), v.showInfo.on("click", ze), v.hideThumbs.on("click", Ae), v.showThumbs.on("click", He), v.play.on("click", Ue), v.pause.on("click", Re), v.next.on("click", je), Me(), t.thumbsOn || h.css("top", -f.outerHeight() - 10), f.on({
					mouseenter: function () {
						ie(), P = !0
					},
					mouseleave: function () {
						P = !1
					}
				}), "page" !== n.attr("id") && t.hash && "no" !== t.hash && e.history.init(ve);
			var s = e.cookie("slideshowDelay");
			t.slideshowAuto || s && e.isNumeric(s) ? (O && t.slideshowFullScreen && e("html").fullScreen(!0), s && e.isNumeric(s) && (t.slideshowDelay = s), ke(T), ee()) : (te(), t.skipIndex && ke(T)), (e.isFunction(t.enableKeyboard) || t.enableKeyboard) && a.on("keydown", A)
		}(), t.showCookiePolicy && setTimeout(function () {
			if (!e.cookie("cookiePolicy")) {
				var a = e("<div>", {
						id: "cookiepolicy"
					}).appendTo("body"),
					n = e("<p>", {
						html: o.cookiePolicyText
					}).appendTo(a);
				t.cookiePolicyUrl && n.append(e("<a>", {
					text: o.cookiePolicyLearnMore,
					href: t.cookiePolicyUrl
				})), n.append(e("<a>", {
					'class': "btn",
					text: o.cookiePolicyAgree
				}).on("click", function () {
					e("#cookiepolicy").fadeOut(500, function () {
						e(this).remove()
					}), e.cookie("cookiePolicy", !0, 36e6)
				})), a.fadeIn(500), setTimeout(function () {
					e("#cookiepolicy").fadeOut(500, function () {
						e(this).remove()
					})
				}, 1e3 * t.cookiePolicyStay)
			}
		}, 2e3)) : (l = e(this), function () {
			d = e("." + i.gallery), h = e("." + i.navigation), u = e("." + i.controls), w = e("." + i.img), p = e("." + i.bottom), l = w.children("." + i.main), T = 0, f = e("." + i.scrollbox), m = f.find("li > a");
			var n = l.find("img:first");
			t.mapAll && (F = m.collectMarkers()),
				function () {
					var a = f.find("." + i.cont),
						n = 0;
					m.addTooltip({
						delay: 500
					}).each(function () {
						n += e(this).outerWidth()
					}), n += 2 * m.length, a.width(n), a.scrollThumbs({
						enableMouseWheel: t.enableMouseWheel
					}), m.on("click", function () {
						return !e(this).parents("[data-custom-scroll]").data("scrolling")
					}), a.trigger("setactive"), t.thumbsOn || h.css("top", -f.outerHeight() - 10)
				}(), v.prev = u.children("." + i.prev), v.up = u.children("." + i.up), v.noresize = u.children("." + i.noresize), v.resize = u.children("." + i.resize), v.hideInfo = u.children("." + i.hideInfo), v.showInfo = u.children("." + i.showInfo), v.hideThumbs = u.children("." + i.hideThumbs), v.showThumbs = u.children("." + i.showThumbs), v.play = u.children("." + i.play), v.pause = u.children("." + i.pause), v.next = u.children("." + i.next), f.find("." + i.cont + " a").length > 1 ? (v.play.togglein(!t.slideshowAuto), v.pause.togglein(t.slideshowAuto)) : v.play.add(v.pause).hide(), t.hideFitBtn && v.resize.add(v.noresize).hide(), v.up && v.up.on("click", De), v.noresize.on("click", Le), v.resize.on("click", Be), v.hideInfo.on("click", Ee), v.showInfo.on("click", ze), v.hideThumbs.on("click", Ae), v.showThumbs.on("click", He), v.play.on("click", Ue), v.pause.on("click", Re), v.next.on("click", je), Me(), t.thumbsOn ? (v.showThumbs.hide(), v.hideThumbs.showin(), h.css({
					top: 0
				}).removeClass("hide")) : (v.hideThumbs.hide(), v.showThumbs.showin(), h.css({
					top: -f.outerHeight() - 10
				}).removeClass("hide")), t.infoOn ? (v.showInfo.hide(), v.hideInfo.showin(), p.show().css({
					bottom: 0
				})) : (v.hideInfo.hide(), v.showInfo.showin(), p.css({
					bottom: -p.outerHeight()
				}).hide()), t.hideFitBtn || (t.fitImage ? (v.resize.hide(), v.noresize.showin()) : (v.noresize.hide(), v.resize.showin())), n.length && (l.hasClass(i.image) && !n[0].complete ? (n.on("load", function () {
					n.data("cached", !0), Ie()
				}).attr({
					src: n.attr("src")
				}), (c = e("<div>", {
					'class': i.wait
				}).appendTo(d)).fadeIn()) : (n.data("cached", !0), Ie()), Oe(n)), (e.isFunction(t.enableKeyboard) || t.enableKeyboard) && a.on("keydown", A), t.clickBesideForIndex && w.on("click", function (t) {
					return !e(t.target).hasClass(i.img) || (U(), !1)
				})
		}()), (l.length && O || !I) && a.on("resize orientationchange", function () {
			clearTimeout(N), N = setTimeout(function () {
				if (!e(".jp-video-full").length) {
					var t = a.width(),
						n = a.height();
					t === D && n === L || (ue(), D = t, L = n)
				}
			}, 100)
		}), this
	}, e.fn.turtle.defaults = {
		header: "#main header",
		slides: "slides",
		thumbs: "thumbs",
		linkSlides: !1,
		loadImg: "blank.png",
		hash: "fileName",
		resPath: "res/",
		relPath: "",
		level: 0,
		skipIndex: !1,
		showStart: !0,
		keepPrefs: 600,
		speed: 600,
		controlbarOpacity: 0,
		controlOutOpacity: 0,
		transitions: !0,
		preScale: .95,
		slideshowDelay: 4e3,
		slideshowLoop: !1,
		slideshowAuto: !1,
		slideshowFullScreen: !1,
		markNewDays: 0,
		afterLast: "ask",
		thumbsOn: !1,
		fitImage: !1,
		fitShrinkonly: !1,
		fitFreespace: !0,
		hideFitBtn: !1,
		fitPadding: 15,
		borderWidth: 10,
		clickForNext: !0,
		clickBesideForIndex: !1,
		rightClickProtect: !1,
		cookiePolicyStay: 8,
		showImageNumbers: !0,
		buttonLabels: !1,
		infoOn: !0,
		metaOn: !1,
		mapOn: !1,
		mapOnIndex: !1,
		mapOnSlide: !1,
		mapType: "roadmap",
		mapZoom: 18,
		mapAll: !1,
		shopOn: !0,
		shopGateway: "paypal",
		shopCurrency: "USD",
		shareOn: !1,
		commentOn: !1,
		printOn: !1,
		regionsOn: !1,
		downloadNonImages: !1,
		enableKeyboard: !0,
		enableMouseWheel: !0,
		videoAuto: !1,
		videoMaximize: !1,
		videoTitleOn: !1,
		prioritizeFlash: !1,
		scrollDuration: 1e3
	}, e.fn.turtle.ids = {
		gallery: "gallery",
		items: "items",
		folders: "folders",
		thumbs: "thumbs",
		navigation: "navigation",
		scrollbox: "scrollbox",
		active: "active",
		parent: "parent",
		bottom: "bottom",
		img: "img",
		main: "main",
		image: "image",
		video: "video",
		audio: "audio",
		other: "other",
		wait: "wait",
		cont: "cont",
		panel: "panel",
		icon: "icon",
		caption: "caption",
		meta: "meta",
		map: "map",
		mapcont: "mapcont",
		mapid: "mapid",
		shop: "shop",
		shopAll: "shopall",
		discount: "discount",
		fotomoto: "fotomoto",
		mostphotos: "mostphotos",
		share: "share",
		shares: "shares",
		print: "print",
		comments: "comments",
		link: "link",
		custom: "custom",
		poster: "poster",
		isoriginal: "isoriginal",
		content: "content",
		width: "width",
		height: "height",
		src: "src",
		ext: "ext",
		thumbExt: "thumbext",
		regions: "regions",
		isimage: "isimage",
		isvideo: "isvideo",
		isaudio: "isaudio",
		isother: "isother",
		modified: "modified",
		startShow: "startshow",
		startBtn: "startbtn",
		startTxt: "starttxt",
		controls: "controls",
		prev: "prev",
		next: "next",
		up: "up",
		noresize: "noresize",
		resize: "resize",
		hideInfo: "hideinfo",
		showInfo: "showinfo",
		hideThumbs: "hidethumbs",
		showThumbs: "showthumbs",
		play: "play",
		pause: "pause",
		newItem: "newlabel",
		kill: "kill",
		load: "load",
		toload: "toload",
		feedback: "feedback",
		checkbox: "checkbox",
		selectAll: "selectall",
		selectNone: "selectnone"
	}, e.fn.turtle.text = {
		startSlideshow: "Start slideshow",
		close: "Close",
		atLastPage: "At last page",
		atLastPageQuestion: "Where to go next?",
		startOver: "Start over",
		backToHome: "Back to home",
		stop: "Stop",
		upOneLevel: "Up one level",
		backToIndex: "Back to index page",
		previousPicture: "Previous picture",
		nextPicture: "Next picture",
		previousFolder: "Previous folder",
		nextFolder: "Next folder",
		changeSpeed: "Change speed",
		oneToOneSize: "1:1 size",
		fitToScreen: "Fit to screen",
		showInfo: "Show caption / info",
		hideInfo: "Hide caption / info",
		showThumbs: "Show thumbnails",
		hideThumbs: "Hide thumbnails",
		startAutoplay: "Start autoplay",
		stopAutoplay: "Stop autoplay",
		newItem: "NEW",
		clickToOpen: "Click to open this document with the associated viewer",
		commentsBtn: "Comments",
		commentsLabel: "Add a comment, view other's comments",
		metaBtn: "Photo data",
		metaLabel: "Display photograpic (Exif/Iptc) data",
		mapBtn: "Map",
		mapLabel: "Show the photo location on map",
		printBtn: "Print",
		printLabel: "Print out this photo on your printer",
		shopBtn: "Buy",
		shopLabel: "Show options to buy this item",
		shareBtn: "Share",
		shareLabel: "Share this photo over social sites",
		download: "Download",
		original: "Original",
		hiRes: "Hi res.",
		saveTip: "Use Right click -> Save link as... to download",
		fotomotoBtn: "Buy / Share",
		fotomotoLabel: "Buy prints or digital files, send free eCard through Fotomoto",
		mostphotosBtn: "Purchase",
		mostphotosLabel: "Download this image from <b>mostphotos.com</b>!",
		people: "People",
		sendFeedback: "Send feedback",
		message: "Message",
		subject: "Subject",
		comment: "Comment",
		yourEmail: "Your email address",
		send: "Send",
		messageSent: "Message sent",
		errorSending: "Error sending email!",
		tooLong: "Text is too long or too many items!",
		emailMissing: "Email is misssing or wrong!",
		noItemsSelected: "No items selected!",
		selectItemsHint: "Select the desired items first!",
		nonShoppableItems: "The selected items have no or have proprietary shopping options, or different discount rates.",
		buyNItems: "Buy {0} items",
		locationWarning: "Works only when uploaded",
		cookiePolicyText: "This album uses cookies to remember user preferences. By using it, you agree to our use of cookies.",
		cookiePolicyAgree: "Got it",
		cookiePolicyLearnMore: "Learn more"
	}
}(jQuery, $(document), $(window), $("body"));


