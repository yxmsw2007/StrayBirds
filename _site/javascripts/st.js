/*!
 * jQuery JavaScript Library v1.8.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Aug 30 2012 17:17:22 GMT-0400 (Eastern Daylight Time)
 */
(function (e, t) {
	function n(e) {
		var t = dt[e] = {};
		return Y.each(e.split(tt), function (e, n) {
			t[n] = !0
		}),
		t
	}
	function r(e, n, r) {
		if (r === t && e.nodeType === 1) {
			var i = "data-" + n.replace(mt, "-$1").toLowerCase();
			r = e.getAttribute(i);
			if (typeof r == "string") {
				try {
					r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : vt.test(r) ? Y.parseJSON(r) : r
				} catch (s) {}

				Y.data(e, n, r)
			} else
				r = t
		}
		return r
	}
	function i(e) {
		var t;
		for (t in e) {
			if (t === "data" && Y.isEmptyObject(e[t]))
				continue;
			if (t !== "toJSON")
				return !1
		}
		return !0
	}
	function s() {
		return !1
	}
	function o() {
		return !0
	}
	function u(e) {
		return !e || !e.parentNode || e.parentNode.nodeType === 11
	}
	function a(e, t) {
		do
			e = e[t];
		while (e && e.nodeType !== 1);
		return e
	}
	function f(e, t, n) {
		t = t || 0;
		if (Y.isFunction(t))
			return Y.grep(e, function (e, r) {
				var i = !!t.call(e, r, e);
				return i === n
			});
		if (t.nodeType)
			return Y.grep(e, function (e, r) {
				return e === t === n
			});
		if (typeof t == "string") {
			var r = Y.grep(e, function (e) {
					return e.nodeType === 1
				});
			if (Bt.test(t))
				return Y.filter(t, r, !n);
			t = Y.filter(t, r)
		}
		return Y.grep(e, function (e, r) {
			return Y.inArray(e, t) >= 0 === n
		})
	}
	function l(e) {
		var t = It.split("|"),
		n = e.createDocumentFragment();
		if (n.createElement)
			while (t.length)
				n.createElement(t.pop());
		return n
	}
	function c(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}
	function h(e, t) {
		if (t.nodeType !== 1 || !Y.hasData(e))
			return;
		var n,
		r,
		i,
		s = Y._data(e),
		o = Y._data(t, s),
		u = s.events;
		if (u) {
			delete o.handle,
			o.events = {};
			for (n in u)
				for (r = 0, i = u[n].length; r < i; r++)
					Y.event.add(t, n, u[n][r])
		}
		o.data && (o.data = Y.extend({}, o.data))
	}
	function p(e, t) {
		var n;
		if (t.nodeType !== 1)
			return;
		t.clearAttributes && t.clearAttributes(),
		t.mergeAttributes && t.mergeAttributes(e),
		n = t.nodeName.toLowerCase(),
		n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), Y.support.html5Clone && e.innerHTML && !Y.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Kt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text),
		t.removeAttribute(Y.expando)
	}
	function d(e) {
		return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
	}
	function v(e) {
		Kt.test(e.type) && (e.defaultChecked = e.checked)
	}
	function m(e, t) {
		if (t in e)
			return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
		r = t,
		i = yn.length;
		while (i--) {
			t = yn[i] + n;
			if (t in e)
				return t
		}
		return r
	}
	function g(e, t) {
		return e = t || e,
		Y.css(e, "display") === "none" || !Y.contains(e.ownerDocument, e)
	}
	function y(e, t) {
		var n,
		r,
		i = [],
		s = 0,
		o = e.length;
		for (; s < o; s++) {
			n = e[s];
			if (!n.style)
				continue;
			i[s] = Y._data(n, "olddisplay"),
			t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && g(n) && (i[s] = Y._data(n, "olddisplay", S(n.nodeName)))) : (r = nn(n, "display"), !i[s] && r !== "none" && Y._data(n, "olddisplay", r))
		}
		for (s = 0; s < o; s++) {
			n = e[s];
			if (!n.style)
				continue;
			if (!t || n.style.display === "none" || n.style.display === "")
				n.style.display = t ? i[s] || "" : "none"
		}
		return e
	}
	function b(e, t, n) {
		var r = cn.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function w(e, t, n, r) {
		var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
		s = 0;
		for (; i < 4; i += 2)
			n === "margin" && (s += Y.css(e, n + gn[i], !0)), r ? (n === "content" && (s -= parseFloat(nn(e, "padding" + gn[i])) || 0), n !== "margin" && (s -= parseFloat(nn(e, "border" + gn[i] + "Width")) || 0)) : (s += parseFloat(nn(e, "padding" + gn[i])) || 0, n !== "padding" && (s += parseFloat(nn(e, "border" + gn[i] + "Width")) || 0));
		return s
	}
	function E(e, t, n) {
		var r = t === "width" ? e.offsetWidth : e.offsetHeight,
		i = !0,
		s = Y.support.boxSizing && Y.css(e, "boxSizing") === "border-box";
		if (r <= 0 || r == null) {
			r = nn(e, t);
			if (r < 0 || r == null)
				r = e.style[t];
			if (hn.test(r))
				return r;
			i = s && (Y.support.boxSizingReliable || r === e.style[t]),
			r = parseFloat(r) || 0
		}
		return r + w(e, t, n || (s ? "border" : "content"), i) + "px"
	}
	function S(e) {
		if (dn[e])
			return dn[e];
		var t = Y("<" + e + ">").appendTo(R.body),
		n = t.css("display");
		t.remove();
		if (n === "none" || n === "") {
			rn = R.body.appendChild(rn || Y.extend(R.createElement("iframe"), {
						frameBorder : 0,
						width : 0,
						height : 0
					}));
			if (!sn || !rn.createElement)
				sn = (rn.contentWindow || rn.contentDocument).document, sn.write("<!doctype html><html><body>"), sn.close();
			t = sn.body.appendChild(sn.createElement(e)),
			n = nn(t, "display"),
			R.body.removeChild(rn)
		}
		return dn[e] = n,
		n
	}
	function x(e, t, n, r) {
		var i;
		if (Y.isArray(t))
			Y.each(t, function (t, i) {
				n || En.test(e) ? r(e, i) : x(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
			});
		else if (!n && Y.type(t) === "object")
			for (i in t)
				x(e + "[" + i + "]", t[i], n, r);
		else
			r(e, t)
	}
	function T(e) {
		return function (t, n) {
			typeof t != "string" && (n = t, t = "*");
			var r,
			i,
			s,
			o = t.toLowerCase().split(tt),
			u = 0,
			a = o.length;
			if (Y.isFunction(n))
				for (; u < a; u++)
					r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
		}
	}
	function N(e, n, r, i, s, o) {
		s = s || n.dataTypes[0],
		o = o || {},
		o[s] = !0;
		var u,
		a = e[s],
		f = 0,
		l = a ? a.length : 0,
		c = e === jn;
		for (; f < l && (c || !u); f++)
			u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = N(e, n, r, i, u, o)));
		return (c || !u) && !o["*"] && (u = N(e, n, r, i, "*", o)),
		u
	}
	function C(e, n) {
		var r,
		i,
		s = Y.ajaxSettings.flatOptions || {};
		for (r in n)
			n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
		i && Y.extend(!0, e, i)
	}
	function k(e, n, r) {
		var i,
		s,
		o,
		u,
		a = e.contents,
		f = e.dataTypes,
		l = e.responseFields;
		for (s in l)
			s in r && (n[l[s]] = r[s]);
		while (f[0] === "*")
			f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
		if (i)
			for (s in a)
				if (a[s] && a[s].test(i)) {
					f.unshift(s);
					break
				}
		if (f[0]in r)
			o = f[0];
		else {
			for (s in r) {
				if (!f[0] || e.converters[s + " " + f[0]]) {
					o = s;
					break
				}
				u || (u = s)
			}
			o = o || u
		}
		if (o)
			return o !== f[0] && f.unshift(o), r[o]
	}
	function L(e, t) {
		var n,
		r,
		i,
		s,
		o = e.dataTypes.slice(),
		u = o[0],
		a = {},
		f = 0;
		e.dataFilter && (t = e.dataFilter(t, e.dataType));
		if (o[1])
			for (n in e.converters)
				a[n.toLowerCase()] = e.converters[n];
		for (; i = o[++f]; )
			if (i !== "*") {
				if (u !== "*" && u !== i) {
					n = a[u + " " + i] || a["* " + i];
					if (!n)
						for (r in a) {
							s = r.split(" ");
							if (s[1] === i) {
								n = a[u + " " + s[0]] || a["* " + s[0]];
								if (n) {
									n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
									break
								}
							}
						}
					if (n !== !0)
						if (n && e["throws"])
							t = n(t);
						else
							try {
								t = n(t)
							} catch (l) {
								return {
									state : "parsererror",
									error : n ? l : "No conversion from " + u + " to " + i
								}
							}
				}
				u = i
			}
		return {
			state : "success",
			data : t
		}
	}
	function A() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}

	}
	function O() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}

	}
	function M() {
		return setTimeout(function () {
			Jn = t
		}, 0),
		Jn = Y.now()
	}
	function _(e, t) {
		Y.each(t, function (t, n) {
			var r = (er[t] || []).concat(er["*"]),
			i = 0,
			s = r.length;
			for (; i < s; i++)
				if (r[i].call(e, t, n))
					return
		})
	}
	function D(e, t, n) {
		var r,
		i = 0,
		s = 0,
		o = Zn.length,
		u = Y.Deferred().always(function () {
				delete a.elem
			}),
		a = function () {
			var t = Jn || M(),
			n = Math.max(0, f.startTime + f.duration - t),
			r = 1 - (n / f.duration || 0),
			i = 0,
			s = f.tweens.length;
			for (; i < s; i++)
				f.tweens[i].run(r);
			return u.notifyWith(e, [f, r, n]),
			r < 1 && s ? n : (u.resolveWith(e, [f]), !1)
		},
		f = u.promise({
				elem : e,
				props : Y.extend({}, t),
				opts : Y.extend(!0, {
					specialEasing : {}

				}, n),
				originalProperties : t,
				originalOptions : n,
				startTime : Jn || M(),
				duration : n.duration,
				tweens : [],
				createTween : function (t, n, r) {
					var i = Y.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
					return f.tweens.push(i),
					i
				},
				stop : function (t) {
					var n = 0,
					r = t ? f.tweens.length : 0;
					for (; n < r; n++)
						f.tweens[n].run(1);
					return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
					this
				}
			}),
		l = f.props;
		P(l, f.opts.specialEasing);
		for (; i < o; i++) {
			r = Zn[i].call(f, e, l, f.opts);
			if (r)
				return r
		}
		return _(f, l),
		Y.isFunction(f.opts.start) && f.opts.start.call(e, f),
		Y.fx.timer(Y.extend(a, {
				anim : f,
				queue : f.opts.queue,
				elem : e
			})),
		f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
	}
	function P(e, t) {
		var n,
		r,
		i,
		s,
		o;
		for (n in e) {
			r = Y.camelCase(n),
			i = t[r],
			s = e[n],
			Y.isArray(s) && (i = s[1], s = e[n] = s[0]),
			n !== r && (e[r] = s, delete e[n]),
			o = Y.cssHooks[r];
			if (o && "expand" in o) {
				s = o.expand(s),
				delete e[r];
				for (n in s)
					n in e || (e[n] = s[n], t[n] = i)
			} else
				t[r] = i
		}
	}
	function H(e, t, n) {
		var r,
		i,
		s,
		o,
		u,
		a,
		f,
		l,
		c = this,
		h = e.style,
		p = {},
		d = [],
		v = e.nodeType && g(e);
		n.queue || (f = Y._queueHooks(e, "fx"), f.unqueued == null && (f.unqueued = 0, l = f.empty.fire, f.empty.fire = function () {
				f.unqueued || l()
			}), f.unqueued++, c.always(function () {
				c.always(function () {
					f.unqueued--,
					Y.queue(e, "fx").length || f.empty.fire()
				})
			})),
		e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], Y.css(e, "display") === "inline" && Y.css(e, "float") === "none" && (!Y.support.inlineBlockNeedsLayout || S(e.nodeName) === "inline" ? h.display = "inline-block" : h.zoom = 1)),
		n.overflow && (h.overflow = "hidden", Y.support.shrinkWrapBlocks || c.done(function () {
				h.overflow = n.overflow[0],
				h.overflowX = n.overflow[1],
				h.overflowY = n.overflow[2]
			}));
		for (r in t) {
			s = t[r];
			if (Qn.exec(s)) {
				delete t[r];
				if (s === (v ? "hide" : "show"))
					continue;
				d.push(r)
			}
		}
		o = d.length;
		if (o) {
			u = Y._data(e, "fxshow") || Y._data(e, "fxshow", {}),
			v ? Y(e).show() : c.done(function () {
				Y(e).hide()
			}),
			c.done(function () {
				var t;
				Y.removeData(e, "fxshow", !0);
				for (t in p)
					Y.style(e, t, p[t])
			});
			for (r = 0; r < o; r++)
				i = d[r], a = c.createTween(i, v ? u[i] : 0), p[i] = u[i] || Y.style(e, i), i in u || (u[i] = a.start, v && (a.end = a.start, a.start = i === "width" || i === "height" ? 1 : 0))
		}
	}
	function B(e, t, n, r, i) {
		return new B.prototype.init(e, t, n, r, i)
	}
	function j(e, t) {
		var n,
		r = {
			height : e
		},
		i = 0;
		t = t ? 1 : 0;
		for (; i < 4; i += 2 - t)
			n = gn[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e),
		r
	}
	function F(e) {
		return Y.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
	}
	var I,
	q,
	R = e.document,
	U = e.location,
	z = e.navigator,
	W = e.jQuery,
	X = e.$,
	V = Array.prototype.push,
	$ = Array.prototype.slice,
	J = Array.prototype.indexOf,
	K = Object.prototype.toString,
	Q = Object.prototype.hasOwnProperty,
	G = String.prototype.trim,
	Y = function (e, t) {
		return new Y.fn.init(e, t, I)
	},
	Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
	et = /\S/,
	tt = /\s+/,
	nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
	it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	st = /^[\],:{}\s]*$/,
	ot = /(?:^|:|,)(?:\s*\[)+/g,
	ut = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	at = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
	ft = /^-ms-/,
	lt = /-([\da-z])/gi,
	ct = function (e, t) {
		return (t + "").toUpperCase()
	},
	ht = function () {
		R.addEventListener ? (R.removeEventListener("DOMContentLoaded", ht, !1), Y.ready()) : R.readyState === "complete" && (R.detachEvent("onreadystatechange", ht), Y.ready())
	},
	pt = {};
	Y.fn = Y.prototype = {
		constructor : Y,
		init : function (e, n, r) {
			var i,
			s,
			o,
			u;
			if (!e)
				return this;
			if (e.nodeType)
				return this.context = this[0] = e, this.length = 1, this;
			if (typeof e == "string") {
				e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = rt.exec(e);
				if (i && (i[1] || !n)) {
					if (i[1])
						return n = n instanceof Y ? n[0] : n, u = n && n.nodeType ? n.ownerDocument || n : R, e = Y.parseHTML(i[1], u, !0), it.test(i[1]) && Y.isPlainObject(n) && this.attr.call(e, n, !0), Y.merge(this, e);
					s = R.getElementById(i[2]);
					if (s && s.parentNode) {
						if (s.id !== i[2])
							return r.find(e);
						this.length = 1,
						this[0] = s
					}
					return this.context = R,
					this.selector = e,
					this
				}
				return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
			}
			return Y.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), Y.makeArray(e, this))
		},
		selector : "",
		jquery : "1.8.1",
		length : 0,
		size : function () {
			return this.length
		},
		toArray : function () {
			return $.call(this)
		},
		get : function (e) {
			return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
		},
		pushStack : function (e, t, n) {
			var r = Y.merge(this.constructor(), e);
			return r.prevObject = this,
			r.context = this.context,
			t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"),
			r
		},
		each : function (e, t) {
			return Y.each(this, e, t)
		},
		ready : function (e) {
			return Y.ready.promise().done(e),
			this
		},
		eq : function (e) {
			return e = +e,
			e === -1 ? this.slice(e) : this.slice(e, e + 1)
		},
		first : function () {
			return this.eq(0)
		},
		last : function () {
			return this.eq(-1)
		},
		slice : function () {
			return this.pushStack($.apply(this, arguments), "slice", $.call(arguments).join(","))
		},
		map : function (e) {
			return this.pushStack(Y.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
		},
		end : function () {
			return this.prevObject || this.constructor(null)
		},
		push : V,
		sort : [].sort,
		splice : [].splice
	},
	Y.fn.init.prototype = Y.fn,
	Y.extend = Y.fn.extend = function () {
		var e,
		n,
		r,
		i,
		s,
		o,
		u = arguments[0] || {},
		a = 1,
		f = arguments.length,
		l = !1;
		typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2),
		typeof u != "object" && !Y.isFunction(u) && (u = {}),
		f === a && (u = this, --a);
		for (; a < f; a++)
			if ((e = arguments[a]) != null)
				for (n in e) {
					r = u[n],
					i = e[n];
					if (u === i)
						continue;
					l && i && (Y.isPlainObject(i) || (s = Y.isArray(i))) ? (s ? (s = !1, o = r && Y.isArray(r) ? r : []) : o = r && Y.isPlainObject(r) ? r : {}, u[n] = Y.extend(l, o, i)) : i !== t && (u[n] = i)
				}
		return u
	},
	Y.extend({
		noConflict : function (t) {
			return e.$ === Y && (e.$ = X),
			t && e.jQuery === Y && (e.jQuery = W),
			Y
		},
		isReady : !1,
		readyWait : 1,
		holdReady : function (e) {
			e ? Y.readyWait++ : Y.ready(!0)
		},
		ready : function (e) {
			if (e === !0 ? --Y.readyWait : Y.isReady)
				return;
			if (!R.body)
				return setTimeout(Y.ready, 1);
			Y.isReady = !0;
			if (e !== !0 && --Y.readyWait > 0)
				return;
			q.resolveWith(R, [Y]),
			Y.fn.trigger && Y(R).trigger("ready").off("ready")
		},
		isFunction : function (e) {
			return Y.type(e) === "function"
		},
		isArray : Array.isArray || function (e) {
			return Y.type(e) === "array"
		},
		isWindow : function (e) {
			return e != null && e == e.window
		},
		isNumeric : function (e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type : function (e) {
			return e == null ? String(e) : pt[K.call(e)] || "object"
		},
		isPlainObject : function (e) {
			if (!e || Y.type(e) !== "object" || e.nodeType || Y.isWindow(e))
				return !1;
			try {
				if (e.constructor && !Q.call(e, "constructor") && !Q.call(e.constructor.prototype, "isPrototypeOf"))
					return !1
			} catch (n) {
				return !1
			}
			var r;
			for (r in e);
			return r === t || Q.call(e, r)
		},
		isEmptyObject : function (e) {
			var t;
			for (t in e)
				return !1;
			return !0
		},
		error : function (e) {
			throw new Error(e)
		},
		parseHTML : function (e, t, n) {
			var r;
			return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || R, (r = it.exec(e)) ? [t.createElement(r[1])] : (r = Y.buildFragment([e], t, n ? null : []), Y.merge([], (r.cacheable ? Y.clone(r.fragment) : r.fragment).childNodes)))
		},
		parseJSON : function (t) {
			if (!t || typeof t != "string")
				return null;
			t = Y.trim(t);
			if (e.JSON && e.JSON.parse)
				return e.JSON.parse(t);
			if (st.test(t.replace(ut, "@").replace(at, "]").replace(ot, "")))
				return (new Function("return " + t))();
			Y.error("Invalid JSON: " + t)
		},
		parseXML : function (n) {
			var r,
			i;
			if (!n || typeof n != "string")
				return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (s) {
				r = t
			}
			return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && Y.error("Invalid XML: " + n),
			r
		},
		noop : function () {},
		globalEval : function (t) {
			t && et.test(t) && (e.execScript || function (t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase : function (e) {
			return e.replace(ft, "ms-").replace(lt, ct)
		},
		nodeName : function (e, t) {
			return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
		},
		each : function (e, n, r) {
			var i,
			s = 0,
			o = e.length,
			u = o === t || Y.isFunction(e);
			if (r) {
				if (u) {
					for (i in e)
						if (n.apply(e[i], r) === !1)
							break
				} else
					for (; s < o; )
						if (n.apply(e[s++], r) === !1)
							break
			} else if (u) {
				for (i in e)
					if (n.call(e[i], i, e[i]) === !1)
						break
			} else
				for (; s < o; )
					if (n.call(e[s], s, e[s++]) === !1)
						break;
			return e
		},
		trim : G && !G.call("﻿ ") ? function (e) {
			return e == null ? "" : G.call(e)
		}
		 : function (e) {
			return e == null ? "" : e.toString().replace(nt, "")
		},
		makeArray : function (e, t) {
			var n,
			r = t || [];
			return e != null && (n = Y.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || Y.isWindow(e) ? V.call(r, e) : Y.merge(r, e)),
			r
		},
		inArray : function (e, t, n) {
			var r;
			if (t) {
				if (J)
					return J.call(t, e, n);
				r = t.length,
				n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
				for (; n < r; n++)
					if (n in t && t[n] === e)
						return n
			}
			return -1
		},
		merge : function (e, n) {
			var r = n.length,
			i = e.length,
			s = 0;
			if (typeof r == "number")
				for (; s < r; s++)
					e[i++] = n[s];
			else
				while (n[s] !== t)
					e[i++] = n[s++];
			return e.length = i,
			e
		},
		grep : function (e, t, n) {
			var r,
			i = [],
			s = 0,
			o = e.length;
			n = !!n;
			for (; s < o; s++)
				r = !!t(e[s], s), n !== r && i.push(e[s]);
			return i
		},
		map : function (e, n, r) {
			var i,
			s,
			o = [],
			u = 0,
			a = e.length,
			f = e instanceof Y || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || Y.isArray(e));
			if (f)
				for (; u < a; u++)
					i = n(e[u], u, r), i != null && (o[o.length] = i);
			else
				for (s in e)
					i = n(e[s], s, r), i != null && (o[o.length] = i);
			return o.concat.apply([], o)
		},
		guid : 1,
		proxy : function (e, n) {
			var r,
			i,
			s;
			return typeof n == "string" && (r = e[n], n = e, e = r),
			Y.isFunction(e) ? (i = $.call(arguments, 2), s = function () {
				return e.apply(n, i.concat($.call(arguments)))
			}, s.guid = e.guid = e.guid || s.guid || Y.guid++, s) : t
		},
		access : function (e, n, r, i, s, o, u) {
			var a,
			f = r == null,
			l = 0,
			c = e.length;
			if (r && typeof r == "object") {
				for (l in r)
					Y.access(e, n, l, r[l], 1, o, i);
				s = 1
			} else if (i !== t) {
				a = u === t && Y.isFunction(i),
				f && (a ? (a = n, n = function (e, t, n) {
						return a.call(Y(e), n)
					}) : (n.call(e, i), n = null));
				if (n)
					for (; l < c; l++)
						n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
				s = 1
			}
			return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
		},
		now : function () {
			return (new Date).getTime()
		}
	}),
	Y.ready.promise = function (t) {
		if (!q) {
			q = Y.Deferred();
			if (R.readyState === "complete")
				setTimeout(Y.ready, 1);
			else if (R.addEventListener)
				R.addEventListener("DOMContentLoaded", ht, !1), e.addEventListener("load", Y.ready, !1);
			else {
				R.attachEvent("onreadystatechange", ht),
				e.attachEvent("onload", Y.ready);
				var n = !1;
				try {
					n = e.frameElement == null && R.documentElement
				} catch (r) {}

				n && n.doScroll && function i() {
					if (!Y.isReady) {
						try {
							n.doScroll("left")
						} catch (e) {
							return setTimeout(i, 50)
						}
						Y.ready()
					}
				}
				()
			}
		}
		return q.promise(t)
	},
	Y.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
		pt["[object " + t + "]"] = t.toLowerCase()
	}),
	I = Y(R);
	var dt = {};
	Y.Callbacks = function (e) {
		e = typeof e == "string" ? dt[e] || n(e) : Y.extend({}, e);
		var r,
		i,
		s,
		o,
		u,
		a,
		f = [],
		l = !e.once && [],
		c = function (t) {
			r = e.memory && t,
			i = !0,
			a = o || 0,
			o = 0,
			u = f.length,
			s = !0;
			for (; f && a < u; a++)
				if (f[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					r = !1;
					break
				}
			s = !1,
			f && (l ? l.length && c(l.shift()) : r ? f = [] : h.disable())
		},
		h = {
			add : function () {
				if (f) {
					var t = f.length;
					(function n(t) {
						Y.each(t, function (t, r) {
							var i = Y.type(r);
							i === "function" && (!e.unique || !h.has(r)) ? f.push(r) : r && r.length && i !== "string" && n(r)
						})
					})(arguments),
					s ? u = f.length : r && (o = t, c(r))
				}
				return this
			},
			remove : function () {
				return f && Y.each(arguments, function (e, t) {
					var n;
					while ((n = Y.inArray(t, f, n)) > -1)
						f.splice(n, 1), s && (n <= u && u--, n <= a && a--)
				}),
				this
			},
			has : function (e) {
				return Y.inArray(e, f) > -1
			},
			empty : function () {
				return f = [],
				this
			},
			disable : function () {
				return f = l = r = t,
				this
			},
			disabled : function () {
				return !f
			},
			lock : function () {
				return l = t,
				r || h.disable(),
				this
			},
			locked : function () {
				return !l
			},
			fireWith : function (e, t) {
				return t = t || [],
				t = [e, t.slice ? t.slice() : t],
				f && (!i || l) && (s ? l.push(t) : c(t)),
				this
			},
			fire : function () {
				return h.fireWith(this, arguments),
				this
			},
			fired : function () {
				return !!i
			}
		};
		return h
	},
	Y.extend({
		Deferred : function (e) {
			var t = [["resolve", "done", Y.Callbacks("once memory"), "resolved"], ["reject", "fail", Y.Callbacks("once memory"), "rejected"], ["notify", "progress", Y.Callbacks("memory")]],
			n = "pending",
			r = {
				state : function () {
					return n
				},
				always : function () {
					return i.done(arguments).fail(arguments),
					this
				},
				then : function () {
					var e = arguments;
					return Y.Deferred(function (n) {
						Y.each(t, function (t, r) {
							var s = r[0],
							o = e[t];
							i[r[1]](Y.isFunction(o) ? function () {
								var e = o.apply(this, arguments);
								e && Y.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
							}
								 : n[s])
						}),
						e = null
					}).promise()
				},
				promise : function (e) {
					return typeof e == "object" ? Y.extend(e, r) : r
				}
			},
			i = {};
			return r.pipe = r.then,
			Y.each(t, function (e, s) {
				var o = s[2],
				u = s[3];
				r[s[1]] = o.add,
				u && o.add(function () {
					n = u
				}, t[e^1][2].disable, t[2][2].lock),
				i[s[0]] = o.fire,
				i[s[0] + "With"] = o.fireWith
			}),
			r.promise(i),
			e && e.call(i, i),
			i
		},
		when : function (e) {
			var t = 0,
			n = $.call(arguments),
			r = n.length,
			i = r !== 1 || e && Y.isFunction(e.promise) ? r : 0,
			s = i === 1 ? e : Y.Deferred(),
			o = function (e, t, n) {
				return function (r) {
					t[e] = this,
					n[e] = arguments.length > 1 ? $.call(arguments) : r,
					n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
				}
			},
			u,
			a,
			f;
			if (r > 1) {
				u = new Array(r),
				a = new Array(r),
				f = new Array(r);
				for (; t < r; t++)
					n[t] && Y.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
			}
			return i || s.resolveWith(f, n),
			s.promise()
		}
	}),
	Y.support = function () {
		var t,
		n,
		r,
		i,
		s,
		o,
		u,
		a,
		f,
		l,
		c,
		h = R.createElement("div");
		h.setAttribute("className", "t"),
		h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
		n = h.getElementsByTagName("*"),
		r = h.getElementsByTagName("a")[0],
		r.style.cssText = "top:1px;float:left;opacity:.5";
		if (!n || !n.length || !r)
			return {};
		i = R.createElement("select"),
		s = i.appendChild(R.createElement("option")),
		o = h.getElementsByTagName("input")[0],
		t = {
			leadingWhitespace : h.firstChild.nodeType === 3,
			tbody : !h.getElementsByTagName("tbody").length,
			htmlSerialize : !!h.getElementsByTagName("link").length,
			style : /top/.test(r.getAttribute("style")),
			hrefNormalized : r.getAttribute("href") === "/a",
			opacity : /^0.5/.test(r.style.opacity),
			cssFloat : !!r.style.cssFloat,
			checkOn : o.value === "on",
			optSelected : s.selected,
			getSetAttribute : h.className !== "t",
			enctype : !!R.createElement("form").enctype,
			html5Clone : R.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			boxModel : R.compatMode === "CSS1Compat",
			submitBubbles : !0,
			changeBubbles : !0,
			focusinBubbles : !1,
			deleteExpando : !0,
			noCloneEvent : !0,
			inlineBlockNeedsLayout : !1,
			shrinkWrapBlocks : !1,
			reliableMarginRight : !0,
			boxSizingReliable : !0,
			pixelPosition : !1
		},
		o.checked = !0,
		t.noCloneChecked = o.cloneNode(!0).checked,
		i.disabled = !0,
		t.optDisabled = !s.disabled;
		try {
			delete h.test
		} catch (p) {
			t.deleteExpando = !1
		}
		!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", c = function () {
				t.noCloneEvent = !1
			}), h.cloneNode(!0).fireEvent("onclick"), h.detachEvent("onclick", c)),
		o = R.createElement("input"),
		o.value = "t",
		o.setAttribute("type", "radio"),
		t.radioValue = o.value === "t",
		o.setAttribute("checked", "checked"),
		o.setAttribute("name", "t"),
		h.appendChild(o),
		u = R.createDocumentFragment(),
		u.appendChild(h.lastChild),
		t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
		t.appendChecked = o.checked,
		u.removeChild(o),
		u.appendChild(h);
		if (h.attachEvent)
			for (f in {
				submit : !0,
				change : !0,
				focusin : !0
			})
				a = "on" + f, l = a in h, l || (h.setAttribute(a, "return;"), l = typeof h[a] == "function"), t[f + "Bubbles"] = l;
		return Y(function () {
			var n,
			r,
			i,
			s,
			o = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
			u = R.getElementsByTagName("body")[0];
			if (!u)
				return;
			n = R.createElement("div"),
			n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
			u.insertBefore(n, u.firstChild),
			r = R.createElement("div"),
			n.appendChild(r),
			r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
			i = r.getElementsByTagName("td"),
			i[0].style.cssText = "padding:0;margin:0;border:0;display:none",
			l = i[0].offsetHeight === 0,
			i[0].style.display = "",
			i[1].style.display = "none",
			t.reliableHiddenOffsets = l && i[0].offsetHeight === 0,
			r.innerHTML = "",
			r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
			t.boxSizing = r.offsetWidth === 4,
			t.doesNotIncludeMarginInBodyOffset = u.offsetTop !== 1,
			e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
					width : "4px"
				}).width === "4px", s = R.createElement("div"), s.style.cssText = r.style.cssText = o, s.style.marginRight = s.style.width = "0", r.style.width = "1px", r.appendChild(s), t.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)),
			typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1),
			u.removeChild(n),
			n = r = i = s = null
		}),
		u.removeChild(h),
		n = r = i = s = o = u = h = null,
		t
	}
	();
	var vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	mt = /([A-Z])/g;
	Y.extend({
		cache : {},
		deletedIds : [],
		uuid : 0,
		expando : "jQuery" + (Y.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData : {
			embed : !0,
			object : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet : !0
		},
		hasData : function (e) {
			return e = e.nodeType ? Y.cache[e[Y.expando]] : e[Y.expando],
			!!e && !i(e)
		},
		data : function (e, n, r, i) {
			if (!Y.acceptData(e))
				return;
			var s,
			o,
			u = Y.expando,
			a = typeof n == "string",
			f = e.nodeType,
			l = f ? Y.cache : e,
			c = f ? e[u] : e[u] && u;
			if ((!c || !l[c] || !i && !l[c].data) && a && r === t)
				return;
			c || (f ? e[u] = c = Y.deletedIds.pop() || ++Y.uuid : c = u),
			l[c] || (l[c] = {}, f || (l[c].toJSON = Y.noop));
			if (typeof n == "object" || typeof n == "function")
				i ? l[c] = Y.extend(l[c], n) : l[c].data = Y.extend(l[c].data, n);
			return s = l[c],
			i || (s.data || (s.data = {}), s = s.data),
			r !== t && (s[Y.camelCase(n)] = r),
			a ? (o = s[n], o == null && (o = s[Y.camelCase(n)])) : o = s,
			o
		},
		removeData : function (e, t, n) {
			if (!Y.acceptData(e))
				return;
			var r,
			s,
			o,
			u = e.nodeType,
			a = u ? Y.cache : e,
			f = u ? e[Y.expando] : Y.expando;
			if (!a[f])
				return;
			if (t) {
				r = n ? a[f] : a[f].data;
				if (r) {
					Y.isArray(t) || (t in r ? t = [t] : (t = Y.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
					for (s = 0, o = t.length; s < o; s++)
						delete r[t[s]];
					if (!(n ? i : Y.isEmptyObject)(r))
						return
				}
			}
			if (!n) {
				delete a[f].data;
				if (!i(a[f]))
					return
			}
			u ? Y.cleanData([e], !0) : Y.support.deleteExpando || a != a.window ? delete a[f] : a[f] = null
		},
		_data : function (e, t, n) {
			return Y.data(e, t, n, !0)
		},
		acceptData : function (e) {
			var t = e.nodeName && Y.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}),
	Y.fn.extend({
		data : function (e, n) {
			var i,
			s,
			o,
			u,
			a,
			f = this[0],
			l = 0,
			c = null;
			if (e === t) {
				if (this.length) {
					c = Y.data(f);
					if (f.nodeType === 1 && !Y._data(f, "parsedAttrs")) {
						o = f.attributes;
						for (a = o.length; l < a; l++)
							u = o[l].name, u.indexOf("data-") === 0 && (u = Y.camelCase(u.substring(5)), r(f, u, c[u]));
						Y._data(f, "parsedAttrs", !0)
					}
				}
				return c
			}
			return typeof e == "object" ? this.each(function () {
				Y.data(this, e)
			}) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", s = i[1] + "!", Y.access(this, function (n) {
					if (n === t)
						return c = this.triggerHandler("getData" + s, [i[0]]), c === t && f && (c = Y.data(f, e), c = r(f, e, c)), c === t && i[1] ? this.data(i[0]) : c;
					i[1] = n,
					this.each(function () {
						var t = Y(this);
						t.triggerHandler("setData" + s, i),
						Y.data(this, e, n),
						t.triggerHandler("changeData" + s, i)
					})
				}, null, n, arguments.length > 1, null, !1))
		},
		removeData : function (e) {
			return this.each(function () {
				Y.removeData(this, e)
			})
		}
	}),
	Y.extend({
		queue : function (e, t, n) {
			var r;
			if (e)
				return t = (t || "fx") + "queue", r = Y._data(e, t), n && (!r || Y.isArray(n) ? r = Y._data(e, t, Y.makeArray(n)) : r.push(n)), r || []
		},
		dequeue : function (e, t) {
			t = t || "fx";
			var n = Y.queue(e, t),
			r = n.length,
			i = n.shift(),
			s = Y._queueHooks(e, t),
			o = function () {
				Y.dequeue(e, t)
			};
			i === "inprogress" && (i = n.shift(), r--),
			i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)),
			!r && s && s.empty.fire()
		},
		_queueHooks : function (e, t) {
			var n = t + "queueHooks";
			return Y._data(e, n) || Y._data(e, n, {
				empty : Y.Callbacks("once memory").add(function () {
					Y.removeData(e, t + "queue", !0),
					Y.removeData(e, n, !0)
				})
			})
		}
	}),
	Y.fn.extend({
		queue : function (e, n) {
			var r = 2;
			return typeof e != "string" && (n = e, e = "fx", r--),
			arguments.length < r ? Y.queue(this[0], e) : n === t ? this : this.each(function () {
				var t = Y.queue(this, e, n);
				Y._queueHooks(this, e),
				e === "fx" && t[0] !== "inprogress" && Y.dequeue(this, e)
			})
		},
		dequeue : function (e) {
			return this.each(function () {
				Y.dequeue(this, e)
			})
		},
		delay : function (e, t) {
			return e = Y.fx ? Y.fx.speeds[e] || e : e,
			t = t || "fx",
			this.queue(t, function (t, n) {
				var r = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(r)
				}
			})
		},
		clearQueue : function (e) {
			return this.queue(e || "fx", [])
		},
		promise : function (e, n) {
			var r,
			i = 1,
			s = Y.Deferred(),
			o = this,
			u = this.length,
			a = function () {
				--i || s.resolveWith(o, [o])
			};
			typeof e != "string" && (n = e, e = t),
			e = e || "fx";
			while (u--)
				r = Y._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
			return a(),
			s.promise(n)
		}
	});
	var gt,
	yt,
	bt,
	wt = /[\t\r\n]/g,
	Et = /\r/g,
	St = /^(?:button|input)$/i,
	xt = /^(?:button|input|object|select|textarea)$/i,
	Tt = /^a(?:rea|)$/i,
	Nt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	Ct = Y.support.getSetAttribute;
	Y.fn.extend({
		attr : function (e, t) {
			return Y.access(this, Y.attr, e, t, arguments.length > 1)
		},
		removeAttr : function (e) {
			return this.each(function () {
				Y.removeAttr(this, e)
			})
		},
		prop : function (e, t) {
			return Y.access(this, Y.prop, e, t, arguments.length > 1)
		},
		removeProp : function (e) {
			return e = Y.propFix[e] || e,
			this.each(function () {
				try {
					this[e] = t,
					delete this[e]
				} catch (n) {}

			})
		},
		addClass : function (e) {
			var t,
			n,
			r,
			i,
			s,
			o,
			u;
			if (Y.isFunction(e))
				return this.each(function (t) {
					Y(this).addClass(e.call(this, t, this.className))
				});
			if (e && typeof e == "string") {
				t = e.split(tt);
				for (n = 0, r = this.length; n < r; n++) {
					i = this[n];
					if (i.nodeType === 1)
						if (!i.className && t.length === 1)
							i.className = e;
						else {
							s = " " + i.className + " ";
							for (o = 0, u = t.length; o < u; o++)
								~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
							i.className = Y.trim(s)
						}
				}
			}
			return this
		},
		removeClass : function (e) {
			var n,
			r,
			i,
			s,
			o,
			u,
			a;
			if (Y.isFunction(e))
				return this.each(function (t) {
					Y(this).removeClass(e.call(this, t, this.className))
				});
			if (e && typeof e == "string" || e === t) {
				n = (e || "").split(tt);
				for (u = 0, a = this.length; u < a; u++) {
					i = this[u];
					if (i.nodeType === 1 && i.className) {
						r = (" " + i.className + " ").replace(wt, " ");
						for (s = 0, o = n.length; s < o; s++)
							while (r.indexOf(" " + n[s] + " ") > -1)
								r = r.replace(" " + n[s] + " ", " ");
						i.className = e ? Y.trim(r) : ""
					}
				}
			}
			return this
		},
		toggleClass : function (e, t) {
			var n = typeof e,
			r = typeof t == "boolean";
			return Y.isFunction(e) ? this.each(function (n) {
				Y(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function () {
				if (n === "string") {
					var i,
					s = 0,
					o = Y(this),
					u = t,
					a = e.split(tt);
					while (i = a[s++])
						u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
				} else if (n === "undefined" || n === "boolean")
					this.className && Y._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : Y._data(this, "__className__") || ""
			})
		},
		hasClass : function (e) {
			var t = " " + e + " ",
			n = 0,
			r = this.length;
			for (; n < r; n++)
				if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) > -1)
					return !0;
			return !1
		},
		val : function (e) {
			var n,
			r,
			i,
			s = this[0];
			if (!arguments.length) {
				if (s)
					return n = Y.valHooks[s.type] || Y.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(Et, "") : r == null ? "" : r);
				return
			}
			return i = Y.isFunction(e),
			this.each(function (r) {
				var s,
				o = Y(this);
				if (this.nodeType !== 1)
					return;
				i ? s = e.call(this, r, o.val()) : s = e,
				s == null ? s = "" : typeof s == "number" ? s += "" : Y.isArray(s) && (s = Y.map(s, function (e) {
								return e == null ? "" : e + ""
							})),
				n = Y.valHooks[this.type] || Y.valHooks[this.nodeName.toLowerCase()];
				if (!n || !("set" in n) || n.set(this, s, "value") === t)
					this.value = s
			})
		}
	}),
	Y.extend({
		valHooks : {
			option : {
				get : function (e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select : {
				get : function (e) {
					var t,
					n,
					r,
					i,
					s = e.selectedIndex,
					o = [],
					u = e.options,
					a = e.type === "select-one";
					if (s < 0)
						return null;
					n = a ? s : 0,
					r = a ? s + 1 : u.length;
					for (; n < r; n++) {
						i = u[n];
						if (i.selected && (Y.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !Y.nodeName(i.parentNode, "optgroup"))) {
							t = Y(i).val();
							if (a)
								return t;
							o.push(t)
						}
					}
					return a && !o.length && u.length ? Y(u[s]).val() : o
				},
				set : function (e, t) {
					var n = Y.makeArray(t);
					return Y(e).find("option").each(function () {
						this.selected = Y.inArray(Y(this).val(), n) >= 0
					}),
					n.length || (e.selectedIndex = -1),
					n
				}
			}
		},
		attrFn : {},
		attr : function (e, n, r, i) {
			var s,
			o,
			u,
			a = e.nodeType;
			if (!e || a === 3 || a === 8 || a === 2)
				return;
			if (i && Y.isFunction(Y.fn[n]))
				return Y(e)[n](r);
			if (typeof e.getAttribute == "undefined")
				return Y.prop(e, n, r);
			u = a !== 1 || !Y.isXMLDoc(e),
			u && (n = n.toLowerCase(), o = Y.attrHooks[n] || (Nt.test(n) ? yt : gt));
			if (r !== t) {
				if (r === null) {
					Y.removeAttr(e, n);
					return
				}
				return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r)
			}
			return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
		},
		removeAttr : function (e, t) {
			var n,
			r,
			i,
			s,
			o = 0;
			if (t && e.nodeType === 1) {
				r = t.split(tt);
				for (; o < r.length; o++)
					i = r[o], i && (n = Y.propFix[i] || i, s = Nt.test(i), s || Y.attr(e, i, ""), e.removeAttribute(Ct ? i : n), s && n in e && (e[n] = !1))
			}
		},
		attrHooks : {
			type : {
				set : function (e, t) {
					if (St.test(e.nodeName) && e.parentNode)
						Y.error("type property can't be changed");
					else if (!Y.support.radioValue && t === "radio" && Y.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t),
						n && (e.value = n),
						t
					}
				}
			},
			value : {
				get : function (e, t) {
					return gt && Y.nodeName(e, "button") ? gt.get(e, t) : t in e ? e.value : null
				},
				set : function (e, t, n) {
					if (gt && Y.nodeName(e, "button"))
						return gt.set(e, t, n);
					e.value = t
				}
			}
		},
		propFix : {
			tabindex : "tabIndex",
			readonly : "readOnly",
			"for" : "htmlFor",
			"class" : "className",
			maxlength : "maxLength",
			cellspacing : "cellSpacing",
			cellpadding : "cellPadding",
			rowspan : "rowSpan",
			colspan : "colSpan",
			usemap : "useMap",
			frameborder : "frameBorder",
			contenteditable : "contentEditable"
		},
		prop : function (e, n, r) {
			var i,
			s,
			o,
			u = e.nodeType;
			if (!e || u === 3 || u === 8 || u === 2)
				return;
			return o = u !== 1 || !Y.isXMLDoc(e),
			o && (n = Y.propFix[n] || n, s = Y.propHooks[n]),
			r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
		},
		propHooks : {
			tabIndex : {
				get : function (e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : xt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}),
	yt = {
		get : function (e, n) {
			var r,
			i = Y.prop(e, n);
			return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
		},
		set : function (e, t, n) {
			var r;
			return t === !1 ? Y.removeAttr(e, n) : (r = Y.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())),
			n
		}
	},
	Ct || (bt = {
			name : !0,
			id : !0,
			coords : !0
		}, gt = Y.valHooks.button = {
			get : function (e, n) {
				var r;
				return r = e.getAttributeNode(n),
				r && (bt[n] ? r.value !== "" : r.specified) ? r.value : t
			},
			set : function (e, t, n) {
				var r = e.getAttributeNode(n);
				return r || (r = R.createAttribute(n), e.setAttributeNode(r)),
				r.value = t + ""
			}
		}, Y.each(["width", "height"], function (e, t) {
			Y.attrHooks[t] = Y.extend(Y.attrHooks[t], {
					set : function (e, n) {
						if (n === "")
							return e.setAttribute(t, "auto"), n
					}
				})
		}), Y.attrHooks.contenteditable = {
			get : gt.get,
			set : function (e, t, n) {
				t === "" && (t = "false"),
				gt.set(e, t, n)
			}
		}),
	Y.support.
	hrefNormalized || Y.each(["href", "src", "width", "height"], function (e, n) {
		Y.attrHooks[n] = Y.extend(Y.attrHooks[n], {
				get : function (e) {
					var r = e.getAttribute(n, 2);
					return r === null ? t : r
				}
			})
	}),
	Y.support.style || (Y.attrHooks.style = {
			get : function (e) {
				return e.style.cssText.toLowerCase() || t
			},
			set : function (e, t) {
				return e.style.cssText = "" + t
			}
		}),
	Y.support.optSelected || (Y.propHooks.selected = Y.extend(Y.propHooks.selected, {
				get : function (e) {
					var t = e.parentNode;
					return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
					null
				}
			})),
	Y.support.enctype || (Y.propFix.enctype = "encoding"),
	Y.support.checkOn || Y.each(["radio", "checkbox"], function () {
		Y.valHooks[this] = {
			get : function (e) {
				return e.getAttribute("value") === null ? "on" : e.value
			}
		}
	}),
	Y.each(["radio", "checkbox"], function () {
		Y.valHooks[this] = Y.extend(Y.valHooks[this], {
				set : function (e, t) {
					if (Y.isArray(t))
						return e.checked = Y.inArray(Y(e).val(), t) >= 0
				}
			})
	});
	var kt = /^(?:textarea|input|select)$/i,
	Lt = /^([^\.]*|)(?:\.(.+)|)$/,
	At = /(?:^|\s)hover(\.\S+|)\b/,
	Ot = /^key/,
	Mt = /^(?:mouse|contextmenu)|click/,
	_t = /^(?:focusinfocus|focusoutblur)$/,
	Dt = function (e) {
		return Y.event.special.hover ? e : e.replace(At, "mouseenter$1 mouseleave$1")
	};
	Y.event = {
		add : function (e, n, r, i, s) {
			var o,
			u,
			a,
			f,
			l,
			c,
			h,
			p,
			d,
			v,
			m;
			if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = Y._data(e)))
				return;
			r.handler && (d = r, r = d.handler, s = d.selector),
			r.guid || (r.guid = Y.guid++),
			a = o.events,
			a || (o.events = a = {}),
			u = o.handle,
			u || (o.handle = u = function (e) {
				return typeof Y == "undefined" || !!e && Y.event.triggered === e.type ? t : Y.event.dispatch.apply(u.elem, arguments)
			}, u.elem = e),
			n = Y.trim(Dt(n)).split(" ");
			for (f = 0; f < n.length; f++) {
				l = Lt.exec(n[f]) || [],
				c = l[1],
				h = (l[2] || "").split(".").sort(),
				m = Y.event.special[c] || {},
				c = (s ? m.delegateType : m.bindType) || c,
				m = Y.event.special[c] || {},
				p = Y.extend({
						type : c,
						origType : l[1],
						data : i,
						handler : r,
						guid : r.guid,
						selector : s,
						namespace : h.join(".")
					}, d),
				v = a[c];
				if (!v) {
					v = a[c] = [],
					v.delegateCount = 0;
					if (!m.setup || m.setup.call(e, i, h, u) === !1)
						e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
				}
				m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)),
				s ? v.splice(v.delegateCount++, 0, p) : v.push(p),
				Y.event.global[c] = !0
			}
			e = null
		},
		global : {},
		remove : function (e, t, n, r, i) {
			var s,
			o,
			u,
			a,
			f,
			l,
			c,
			h,
			p,
			d,
			v,
			m = Y.hasData(e) && Y._data(e);
			if (!m || !(h = m.events))
				return;
			t = Y.trim(Dt(t || "")).split(" ");
			for (s = 0; s < t.length; s++) {
				o = Lt.exec(t[s]) || [],
				u = a = o[1],
				f = o[2];
				if (!u) {
					for (u in h)
						Y.event.remove(e, u + t[s], n, r, !0);
					continue
				}
				p = Y.event.special[u] || {},
				u = (r ? p.delegateType : p.bindType) || u,
				d = h[u] || [],
				l = d.length,
				f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
				for (c = 0; c < d.length; c++)
					v = d[c], (i || a === v.origType) && (!n || n.guid === v.guid) && (!f || f.test(v.namespace)) && (!r || r === v.selector || r === "**" && v.selector) && (d.splice(c--, 1), v.selector && d.delegateCount--, p.remove && p.remove.call(e, v));
				d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, m.handle) === !1) && Y.removeEvent(e, u, m.handle), delete h[u])
			}
			Y.isEmptyObject(h) && (delete m.handle, Y.removeData(e, "events", !0))
		},
		customEvent : {
			getData : !0,
			setData : !0,
			changeData : !0
		},
		trigger : function (n, r, i, s) {
			if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
				var o,
				u,
				a,
				f,
				l,
				c,
				h,
				p,
				d,
				v,
				m = n.type || n,
				g = [];
				if (_t.test(m + Y.event.triggered))
					return;
				m.indexOf("!") >= 0 && (m = m.slice(0, -1), u = !0),
				m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort());
				if ((!i || Y.event.customEvent[m]) && !Y.event.global[m])
					return;
				n = typeof n == "object" ? n[Y.expando] ? n : new Y.Event(m, n) : new Y.Event(m),
				n.type = m,
				n.isTrigger = !0,
				n.exclusive = u,
				n.namespace = g.join("."),
				n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
				c = m.indexOf(":") < 0 ? "on" + m : "";
				if (!i) {
					o = Y.cache;
					for (a in o)
						o[a].events && o[a].events[m] && Y.event.trigger(n, r, o[a].handle.elem, !0);
					return
				}
				n.result = t,
				n.target || (n.target = i),
				r = r != null ? Y.makeArray(r) : [],
				r.unshift(n),
				h = Y.event.special[m] || {};
				if (h.trigger && h.trigger.apply(i, r) === !1)
					return;
				d = [[i, h.bindType || m]];
				if (!s && !h.noBubble && !Y.isWindow(i)) {
					v = h.delegateType || m,
					f = _t.test(v + m) ? i : i.parentNode;
					for (l = i; f; f = f.parentNode)
						d.push([f, v]), l = f;
					l === (i.ownerDocument || R) && d.push([l.defaultView || l.parentWindow || e, v])
				}
				for (a = 0; a < d.length && !n.isPropagationStopped(); a++)
					f = d[a][0], n.type = d[a][1], p = (Y._data(f, "events") || {})[n.type] && Y._data(f, "handle"), p && p.apply(f, r), p = c && f[c], p && Y.acceptData(f) && p.apply(f, r) === !1 && n.preventDefault();
				return n.type = m,
				!s && !n.isDefaultPrevented() && (!h._default || h._default.apply(i.ownerDocument, r) === !1) && (m !== "click" || !Y.nodeName(i, "a")) && Y.acceptData(i) && c && i[m] && (m !== "focus" && m !== "blur" || n.target.offsetWidth !== 0) && !Y.isWindow(i) && (l = i[c], l && (i[c] = null), Y.event.triggered = m, i[m](), Y.event.triggered = t, l && (i[c] = l)),
				n.result
			}
			return
		},
		dispatch : function (n) {
			n = Y.event.fix(n || e.event);
			var r,
			i,
			s,
			o,
			u,
			a,
			f,
			l,
			c,
			h,
			p = (Y._data(this, "events") || {})[n.type] || [],
			d = p.delegateCount,
			v = [].slice.call(arguments),
			m = !n.exclusive && !n.namespace,
			g = Y.event.special[n.type] || {},
			y = [];
			v[0] = n,
			n.delegateTarget = this;
			if (g.preDispatch && g.preDispatch.call(this, n) === !1)
				return;
			if (d && (!n.button || n.type !== "click"))
				for (s = n.target; s != this; s = s.parentNode || this)
					if (s.disabled !== !0 || n.type !== "click") {
						u = {},
						f = [];
						for (r = 0; r < d; r++)
							l = p[r], c = l.selector, u[c] === t && (u[c] = Y(c, this).index(s) >= 0), u[c] && f.push(l);
						f.length && y.push({
							elem : s,
							matches : f
						})
					}
			p.length > d && y.push({
				elem : this,
				matches : p.slice(d)
			});
			for (r = 0; r < y.length && !n.isPropagationStopped(); r++) {
				a = y[r],
				n.currentTarget = a.elem;
				for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
					l = a.matches[i];
					if (m || !n.namespace && !l.namespace || n.namespace_re && n.namespace_re.test(l.namespace))
						n.data = l.data, n.handleObj = l, o = ((Y.event.special[l.origType] || {}).handle || l.handler).apply(a.elem, v), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
				}
			}
			return g.postDispatch && g.postDispatch.call(this, n),
			n.result
		},
		props : "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks : {},
		keyHooks : {
			props : "char charCode key keyCode".split(" "),
			filter : function (e, t) {
				return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode),
				e
			}
		},
		mouseHooks : {
			props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter : function (e, n) {
				var r,
				i,
				s,
				o = n.button,
				u = n.fromElement;
				return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || R, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)),
				!e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u),
				!e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0),
				e
			}
		},
		fix : function (e) {
			if (e[Y.expando])
				return e;
			var t,
			n,
			r = e,
			i = Y.event.fixHooks[e.type] || {},
			s = i.props ? this.props.concat(i.props) : this.props;
			e = Y.Event(r);
			for (t = s.length; t; )
				n = s[--t], e[n] = r[n];
			return e.target || (e.target = r.srcElement || R),
			e.target.nodeType === 3 && (e.target = e.target.parentNode),
			e.metaKey = !!e.metaKey,
			i.filter ? i.filter(e, r) : e
		},
		special : {
			load : {
				noBubble : !0
			},
			focus : {
				delegateType : "focusin"
			},
			blur : {
				delegateType : "focusout"
			},
			beforeunload : {
				setup : function (e, t, n) {
					Y.isWindow(this) && (this.onbeforeunload = n)
				},
				teardown : function (e, t) {
					this.onbeforeunload === t && (this.onbeforeunload = null)
				}
			}
		},
		simulate : function (e, t, n, r) {
			var i = Y.extend(new Y.Event, n, {
					type : e,
					isSimulated : !0,
					originalEvent : {}

				});
			r ? Y.event.trigger(i, null, t) : Y.event.dispatch.call(t, i),
			i.isDefaultPrevented() && n.preventDefault()
		}
	},
	Y.event.handle = Y.event.dispatch,
	Y.removeEvent = R.removeEventListener ? function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}
	 : function (e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
	},
	Y.Event = function (e, t) {
		if (!(this instanceof Y.Event))
			return new Y.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? o : s) : this.type = e,
		t && Y.extend(this, t),
		this.timeStamp = e && e.timeStamp || Y.now(),
		this[Y.expando] = !0
	},
	Y.Event.prototype = {
		preventDefault : function () {
			this.isDefaultPrevented = o;
			var e = this.originalEvent;
			if (!e)
				return;
			e.preventDefault ? e.preventDefault() : e.returnValue = !1
		},
		stopPropagation : function () {
			this.isPropagationStopped = o;
			var e = this.originalEvent;
			if (!e)
				return;
			e.stopPropagation && e.stopPropagation(),
			e.cancelBubble = !0
		},
		stopImmediatePropagation : function () {
			this.isImmediatePropagationStopped = o,
			this.stopPropagation()
		},
		isDefaultPrevented : s,
		isPropagationStopped : s,
		isImmediatePropagationStopped : s
	},
	Y.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	}, function (e, t) {
		Y.event.special[e] = {
			delegateType : t,
			bindType : t,
			handle : function (e) {
				var n,
				r = this,
				i = e.relatedTarget,
				s = e.handleObj,
				o = s.selector;
				if (!i || i !== r && !Y.contains(r, i))
					e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
				return n
			}
		}
	}),
	Y.support.submitBubbles || (Y.event.special.submit = {
			setup : function () {
				if (Y.nodeName(this, "form"))
					return !1;
				Y.event.add(this, "click._submit keypress._submit", function (e) {
					var n = e.target,
					r = Y.nodeName(n, "input") || Y.nodeName(n, "button") ? n.form : t;
					r && !Y._data(r, "_submit_attached") && (Y.event.add(r, "submit._submit", function (e) {
							e._submit_bubble = !0
						}), Y._data(r, "_submit_attached", !0))
				})
			},
			postDispatch : function (e) {
				e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && Y.event.simulate("submit", this.parentNode, e, !0))
			},
			teardown : function () {
				if (Y.nodeName(this, "form"))
					return !1;
				Y.event.remove(this, "._submit")
			}
		}),
	Y.support.changeBubbles || (Y.event.special.change = {
			setup : function () {
				if (kt.test(this.nodeName)) {
					if (this.type === "checkbox" || this.type === "radio")
						Y.event.add(this, "propertychange._change", function (e) {
							e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
						}), Y.event.add(this, "click._change", function (e) {
							this._just_changed && !e.isTrigger && (this._just_changed = !1),
							Y.event.simulate("change", this, e, !0)
						});
					return !1
				}
				Y.event.add(this, "beforeactivate._change", function (e) {
					var t = e.target;
					kt.test(t.nodeName) && !Y._data(t, "_change_attached") && (Y.event.add(t, "change._change", function (e) {
							this.parentNode && !e.isSimulated && !e.isTrigger && Y.event.simulate("change", this.parentNode, e, !0)
						}), Y._data(t, "_change_attached", !0))
				})
			},
			handle : function (e) {
				var t = e.target;
				if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
					return e.handleObj.handler.apply(this, arguments)
			},
			teardown : function () {
				return Y.event.remove(this, "._change"),
				!kt.test(this.nodeName)
			}
		}),
	Y.support.focusinBubbles || Y.each({
		focus : "focusin",
		blur : "focusout"
	}, function (e, t) {
		var n = 0,
		r = function (e) {
			Y.event.simulate(t, e.target, Y.event.fix(e), !0)
		};
		Y.event.special[t] = {
			setup : function () {
				n++ === 0 && R.addEventListener(e, r, !0)
			},
			teardown : function () {
				--n === 0 && R.removeEventListener(e, r, !0)
			}
		}
	}),
	Y.fn.extend({
		on : function (e, n, r, i, o) {
			var u,
			a;
			if (typeof e == "object") {
				typeof n != "string" && (r = r || n, n = t);
				for (a in e)
					this.on(a, n, r, e[a], o);
				return this
			}
			r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
			if (i === !1)
				i = s;
			else if (!i)
				return this;
			return o === 1 && (u = i, i = function (e) {
				return Y().off(e),
				u.apply(this, arguments)
			}, i.guid = u.guid || (u.guid = Y.guid++)),
			this.each(function () {
				Y.event.add(this, e, i, r, n)
			})
		},
		one : function (e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off : function (e, n, r) {
			var i,
			o;
			if (e && e.preventDefault && e.handleObj)
				return i = e.handleObj, Y(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if (typeof e == "object") {
				for (o in e)
					this.off(o, n, e[o]);
				return this
			}
			if (n === !1 || typeof n == "function")
				r = n, n = t;
			return r === !1 && (r = s),
			this.each(function () {
				Y.event.remove(this, e, r, n)
			})
		},
		bind : function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind : function (e, t) {
			return this.off(e, null, t)
		},
		live : function (e, t, n) {
			return Y(this.context).on(e, this.selector, t, n),
			this
		},
		die : function (e, t) {
			return Y(this.context).off(e, this.selector || "**", t),
			this
		},
		delegate : function (e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate : function (e, t, n) {
			return arguments.length == 1 ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		trigger : function (e, t) {
			return this.each(function () {
				Y.event.trigger(e, t, this)
			})
		},
		triggerHandler : function (e, t) {
			if (this[0])
				return Y.event.trigger(e, t, this[0], !0)
		},
		toggle : function (e) {
			var t = arguments,
			n = e.guid || Y.guid++,
			r = 0,
			i = function (n) {
				var i = (Y._data(this, "lastToggle" + e.guid) || 0) % r;
				return Y._data(this, "lastToggle" + e.guid, i + 1),
				n.preventDefault(),
				t[i].apply(this, arguments) || !1
			};
			i.guid = n;
			while (r < t.length)
				t[r++].guid = n;
			return this.click(i)
		},
		hover : function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}),
	Y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		Y.fn[t] = function (e, n) {
			return n == null && (n = e, e = null),
			arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		},
		Ot.test(t) && (Y.event.fixHooks[t] = Y.event.keyHooks),
		Mt.test(t) && (Y.event.fixHooks[t] = Y.event.mouseHooks)
	}),
	function (e, t) {
		function n(e, t, n, r) {
			n = n || [],
			t = t || L;
			var i,
			s,
			o,
			u,
			a = t.nodeType;
			if (a !== 1 && a !== 9)
				return [];
			if (!e || typeof e != "string")
				return n;
			o = w(t);
			if (!o && !r)
				if (i = K.exec(e))
					if (u = i[1]) {
						if (a === 9) {
							s = t.getElementById(u);
							if (!s || !s.parentNode)
								return n;
							if (s.id === u)
								return n.push(s), n
						} else if (t.ownerDocument && (s = t.ownerDocument.getElementById(u)) && E(t, s) && s.id === u)
							return n.push(s), n
					} else {
						if (i[2])
							return _.apply(n, M.call(t.getElementsByTagName(e), 0)), n;
						if ((u = i[3]) && at && t.getElementsByClassName)
							return _.apply(n, M.call(t.getElementsByClassName(u), 0)), n
					}
			return d(e, t, n, r, o)
		}
		function r(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return n === "input" && t.type === e
			}
		}
		function i(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return (n === "input" || n === "button") && t.type === e
			}
		}
		function s(e, t, n) {
			if (e === t)
				return n;
			var r = e.nextSibling;
			while (r) {
				if (r === t)
					return -1;
				r = r.nextSibling
			}
			return 1
		}
		function o(e, t, r, i) {
			var s,
			o,
			u,
			a,
			f,
			l,
			c,
			h,
			p,
			d,
			v = !r && t !== L,
			m = (v ? "<s>" : "") + e.replace(X, "$1<s>"),
			g = B[k][m];
			if (g)
				return i ? 0 : M.call(g, 0);
			f = e,
			l = [],
			h = 0,
			p = y.preFilter,
			d = y.filter;
			while (f) {
				if (!s || (o = V.exec(f)))
					o && (f = f.slice(o[0].length), u.selector = c), l.push(u = []), c = "", v && (f = " " + f);
				s = !1;
				if (o = $.exec(f))
					c += o[0], f = f.slice(o[0].length), s = u.push({
							part : o.pop().replace(X, " "),
							string : o[0],
							captures : o
						});
				for (a in d)
					(o = rt[a].exec(f)) && (!p[a] || (o = p[a](o, t, r))) && (c += o[0], f = f.slice(o[0].length), s = u.push({
								part : a,
								string : o.shift(),
								captures : o
							}));
				if (!s)
					break
			}
			return c && (u.selector = c),
			i ? f.length : f ? n.error(e) : M.call(B(m, l), 0)
		}
		function u(e, t, n, r) {
			var i = t.dir,
			s = O++;
			return e || (e = function (e) {
				return e === n
			}),
			t.first ? function (t) {
				while (t = t[i])
					if (t.nodeType === 1)
						return e(t) && t
			}
			 : r ? function (t) {
				while (t = t[i])
					if (t.nodeType === 1 && e(t))
						return t
			}
			 : function (t) {
				var n,
				r = s + "." + v,
				o = r + "." + m;
				while (t = t[i])
					if (t.nodeType === 1) {
						if ((n = t[k]) === o)
							return t.sizset;
						if (typeof n == "string" && n.indexOf(r) === 0) {
							if (t.sizset)
								return t
						} else {
							t[k] = o;
							if (e(t))
								return t.sizset = !0, t;
							t.sizset = !1
						}
					}
			}
		}
		function a(e, t) {
			return e ? function (n) {
				var r = t(n);
				return r && e(r === !0 ? n : r)
			}
			 : t
		}
		function f(e, t, n) {
			var r,
			i,
			s = 0;
			for (; r = e[s]; s++)
				y.relative[r.part] ? i = u(i, y.relative[r.part], t, n) : i = a(i, y.filter[r.part].apply(null, r.captures.concat(t, n)));
			return i
		}
		function l(e) {
			return function (t) {
				var n,
				r = 0;
				for (; n = e[r]; r++)
					if (n(t))
						return !0;
				return !1
			}
		}
		function c(e, t, r, i) {
			var s = 0,
			o = t.length;
			for (; s < o; s++)
				n(e, t[s], r, i)
		}
		function h(e, t, r, i, s, o) {
			var u,
			a = y.setFilters[t.toLowerCase()];
			return a || n.error(t),
			(e || !(u = s)) && c(e || "*", i, u = [], s),
			u.length > 0 ? a(u, r, o) : []
		}
		function p(e, r, i, s) {
			var o,
			u,
			a,
			f,
			l,
			p,
			d,
			v,
			m,
			g,
			y,
			b,
			w,
			E = 0,
			S = e.length,
			x = rt.POS,
			T = new RegExp("^" + x.source + "(?!" + F + ")", "i"),
			N = function () {
				var e = 1,
				n = arguments.length - 2;
				for (; e < n; e++)
					arguments[e] === t && (m[e] = t)
			};
			for (; E < S; E++) {
				o = e[E],
				u = "",
				v = s;
				for (a = 0, f = o.length; a < f; a++) {
					l = o[a],
					p = l.string;
					if (l.part === "PSEUDO") {
						x.exec(""),
						d = 0;
						while (m = x.exec(p)) {
							g = !0,
							y = x.lastIndex = m.index + m[0].length;
							if (y > d) {
								u += p.slice(d, m.index),
								d = y,
								b = [r],
								$.test(u) && (v && (b = v), v = s);
								if (w = Z.test(u))
									u = u.slice(0, -5).replace($, "$&*"), d++;
								m.length > 1 && m[0].replace(T, N),
								v = h(u, m[1], m[2], b, v, w)
							}
							u = ""
						}
					}
					g || (u += p),
					g = !1
				}
				u ? $.test(u) ? c(u, v || [r], i, s) : n(u, r, i, s ? s.concat(v) : v) : _.apply(i, v)
			}
			return S === 1 ? i : n.uniqueSort(i)
		}
		function d(e, t, n, r, i) {
			e = e.replace(X, "$1");
			var s,
			u,
			a,
			f,
			l,
			c,
			h,
			d,
			g,
			b,
			w = o(e, t, i),
			E = t.nodeType;
			if (rt.POS.test(e))
				return p(w, t, n, r);
			if (r)
				s = M.call(r, 0);
			else if (w.length === 1) {
				if ((c = M.call(w[0], 0)).length > 2 && (h = c[0]).part === "ID" && E === 9 && !i && y.relative[c[1].part]) {
					t = y.find.ID(h.captures[0].replace(nt, ""), t, i)[0];
					if (!t)
						return n;
					e = e.slice(c.shift().string.length)
				}
				g = (w = G.exec(c[0].string)) && !w.index && t.parentNode || t,
				d = "";
				for (l = c.length - 1; l >= 0; l--) {
					h = c[l],
					b = h.part,
					d = h.string + d;
					if (y.relative[b])
						break;
					if (y.order.test(b)) {
						s = y.find[b](h.captures[0].replace(nt, ""), g, i);
						if (s == null)
							continue;
						e = e.slice(0, e.length - d.length) + d.replace(rt[b], ""),
						e || _.apply(n, M.call(s, 0));
						break
					}
				}
			}
			if (e) {
				u = S(e, t, i),
				v = u.dirruns++,
				s == null && (s = y.find.TAG("*", G.test(e) && t.parentNode || t));
				for (l = 0; f = s[l]; l++)
					m = u.runs++, u(f) && n.push(f)
			}
			return n
		}
		var v,
		m,
		g,
		y,
		b,
		w,
		E,
		S,
		x,
		T,
		N = !0,
		C = "undefined",
		k = ("sizcache" + Math.random()).replace(".", ""),
		L = e.document,
		A = L.documentElement,
		O = 0,
		M = [].slice,
		_ = [].push,
		D = function (e, t) {
			return e[k] = t || !0,
			e
		},
		P = function () {
			var e = {},
			t = [];
			return D(function (n, r) {
				return t.push(n) > y.cacheLength && delete e[t.shift()],
				e[n] = r
			}, e)
		},
		H = P(),
		B = P(),
		j = P(),
		F = "[\\x20\\t\\r\\n\\f]",
		I = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
		q = I.replace("w", "w#"),
		R = "([*^$|!~]?=)",
		U = "\\[" + F + "*(" + I + ")" + F + "*(?:" + R + F + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + q + ")|)|)" + F + "*\\]",
		z = ":(" + I + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + U + ")|[^:]|\\\\.)*|.*))\\)|)",
		W = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
		X = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
		V = new RegExp("^" + F + "*," + F + "*"),
		$ = new RegExp("^" + F + "*([\\x20\\t\\r\\n\\f>+~])" + F + "*"),
		J = new RegExp(z),
		K = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
		Q = /^:not/,
		G = /[\x20\t\r\n\f]*[+~]/,
		Z = /:not\($/,
		et = /h\d/i,
		tt = /input|select|textarea|button/i,
		nt = /\\(?!\\)/g,
		rt = {
			ID : new RegExp("^#(" + I + ")"),
			CLASS : new RegExp("^\\.(" + I + ")"),
			NAME : new RegExp("^\\[name=['\"]?(" + I + ")['\"]?\\]"),
			TAG : new RegExp("^(" + I.replace("w", "w*") + ")"),
			ATTR : new RegExp("^" + U),
			PSEUDO : new RegExp("^" + z),
			CHILD : new RegExp("^:(only|nth|last|first)-child(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
			POS : new RegExp(W, "ig"),
			needsContext : new RegExp("^" + F + "*[>+~]|" + W, "i")
		},
		it = function (e) {
			var t = L.createElement("div");
			try {
				return e(t)
			} catch (n) {
				return !1
			}
			finally {
				t = null
			}
		},
		st = it(function (e) {
				return e.appendChild(L.createComment("")),
				!e.getElementsByTagName("*").length
			}),
		ot = it(function (e) {
				return e.innerHTML = "<a href='#'></a>",
				e.firstChild && typeof e.firstChild.getAttribute !== C && e.firstChild.getAttribute("href") === "#"
			}),
		ut = it(function (e) {
				e.innerHTML = "<select></select>";
				var t = typeof e.lastChild.getAttribute("multiple");
				return t !== "boolean" && t !== "string"
			}),
		at = it(function (e) {
				return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
				!e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
			}),
		ft = it(function (e) {
				e.id = k + 0,
				e.innerHTML = "<a name='" + k + "'></a><div name='" + k + "'></div>",
				A.insertBefore(e, A.firstChild);
				var t = L.getElementsByName && L.getElementsByName(k).length === 2 + L.getElementsByName(k + 0).length;
				return g = !L.getElementById(k),
				A.removeChild(e),
				t
			});
		try {
			M.call(A.childNodes, 0)[0].nodeType
		} catch (lt) {
			M = function (e) {
				var t,
				n = [];
				for (; t = this[e]; e++)
					n.push(t);
				return n
			}
		}
		n.matches = function (e, t) {
			return n(e, null, null, t)
		},
		n.matchesSelector = function (e, t) {
			return n(t, null, null, [e]).length > 0
		},
		b = n.getText = function (e) {
			var t,
			n = "",
			r = 0,
			i = e.nodeType;
			if (i) {
				if (i === 1 || i === 9 || i === 11) {
					if (typeof e.textContent == "string")
						return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling)
						n += b(e)
				} else if (i === 3 || i === 4)
					return e.nodeValue
			} else
				for (; t = e[r]; r++)
					n += b(t);
			return n
		},
		w = n.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? t.nodeName !== "HTML" : !1
		},
		E = n.contains = A.contains ? function (e, t) {
			var n = e.nodeType === 9 ? e.documentElement : e,
			r = t && t.parentNode;
			return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
		}
		 : A.compareDocumentPosition ? function (e, t) {
			return t && !!(e.compareDocumentPosition(t) & 16)
		}
		 : function (e, t) {
			while (t = t.parentNode)
				if (t === e)
					return !0;
			return !1
		},
		n.attr = function (e, t) {
			var n,
			r = w(e);
			return r || (t = t.toLowerCase()),
			y.attrHandle[t] ? y.attrHandle[t](e) : ut || r ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
		},
		y = n.selectors = {
			cacheLength : 50,
			createPseudo : D,
			match : rt,
			order : new RegExp("ID|TAG" + (ft ? "|NAME" : "") + (at ? "|CLASS" : "")),
			attrHandle : ot ? {}

			 : {
				href : function (e) {
					return e.getAttribute("href", 2)
				},
				type : function (e) {
					return e.getAttribute("type")
				}
			},
			find : {
				ID : g ? function (e, t, n) {
					if (typeof t.getElementById !== C && !n) {
						var r = t.getElementById(e);
						return r && r.parentNode ? [r] : []
					}
				}
				 : function (e, n, r) {
					if (typeof n.getElementById !== C && !r) {
						var i = n.getElementById(e);
						return i ? i.id === e || typeof i.getAttributeNode !== C && i.getAttributeNode("id").value === e ? [i] : t : []
					}
				},
				TAG : st ? function (e, t) {
					if (typeof t.getElementsByTagName !== C)
						return t.getElementsByTagName(e)
				}
				 : function (e, t) {
					var n = t.getElementsByTagName(e);
					if (e === "*") {
						var r,
						i = [],
						s = 0;
						for (; r = n[s]; s++)
							r.nodeType === 1 && i.push(r);
						return i
					}
					return n
				},
				NAME : function (e, t) {
					if (typeof t.getElementsByName !== C)
						return t.getElementsByName(name)
				},
				CLASS : function (e, t, n) {
					if (typeof t.getElementsByClassName !== C && !n)
						return t.getElementsByClassName(e)
				}
			},
			relative : {
				">" : {
					dir : "parentNode",
					first : !0
				},
				" " : {
					dir : "parentNode"
				},
				"+" : {
					dir : "previousSibling",
					first : !0
				},
				"~" : {
					dir : "previousSibling"
				}
			},
			preFilter : {
				ATTR : function (e) {
					return e[1] = e[1].replace(nt, ""),
					e[3] = (e[4] || e[5] || "").replace(nt, ""),
					e[2] === "~=" && (e[3] = " " + e[3] + " "),
					e.slice(0, 4)
				},
				CHILD : function (e) {
					return e[1] = e[1].toLowerCase(),
					e[1] === "nth" ? (e[2] || n.error(e[0]), e[3] =  + (e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] =  + (e[6] + e[7] || e[2] === "odd")) : e[2] && n.error(e[0]),
					e
				},
				PSEUDO : function (e, t, n) {
					var r,
					i;
					if (rt.CHILD.test(e[0]))
						return null;
					if (e[3])
						e[2] = e[3];
					else if (r = e[4])
						J.test(r) && (i = o(r, t, n, !0)) && (i = r.indexOf(")", r.length - i) - r.length) && (r = r.slice(0, i), e[0] = e[0].slice(0, i)), e[2] = r;
					return e.slice(0, 3)
				}
			},
			filter : {
				ID : g ? function (e) {
					return e = e.replace(nt, ""),
					function (t) {
						return t.getAttribute("id") === e
					}
				}
				 : function (e) {
					return e = e.replace(nt, ""),
					function (t) {
						var n = typeof t.getAttributeNode !== C && t.getAttributeNode("id");
						return n && n.value === e
					}
				},
				TAG : function (e) {
					return e === "*" ? function () {
						return !0
					}
					 : (e = e.replace(nt, "").toLowerCase(), function (t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					})
				},
				CLASS : function (e) {
					var t = H[k][e];
					return t || (t = H(e, new RegExp("(^|" + F + ")" + e + "(" + F + "|$)"))),
					function (e) {
						return t.test(e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
					}
				},
				ATTR : function (e, t, r) {
					return t ? function (i) {
						var s = n.attr(i, e),
						o = s + "";
						if (s == null)
							return t === "!=";
						switch (t) {
						case "=":
							return o === r;
						case "!=":
							return o !== r;
						case "^=":
							return r && o.indexOf(r) === 0;
						case "*=":
							return r && o.indexOf(r) > -1;
						case "$=":
							return r && o.substr(o.length - r.length) === r;
						case "~=":
							return (" " + o + " ").indexOf(r) > -1;
						case "|=":
							return o === r || o.substr(0, r.length + 1) === r + "-"
						}
					}
					 : function (t) {
						return n.attr(t, e) != null
					}
				},
				CHILD : function (e, t, n, r) {
					if (e === "nth") {
						var i = O++;
						return function (e) {
							var t,
							s,
							o = 0,
							u = e;
							if (n === 1 && r === 0)
								return !0;
							t = e.parentNode;
							if (t && (t[k] !== i || !e.sizset)) {
								for (u = t.firstChild; u; u = u.nextSibling)
									if (u.nodeType === 1) {
										u.sizset = ++o;
										if (u === e)
											break
									}
								t[k] = i
							}
							return s = e.sizset - r,
							n === 0 ? s === 0 : s % n === 0 && s / n >= 0
						}
					}
					return function (t) {
						var n = t;
						switch (e) {
						case "only":
						case "first":
							while (n = n.previousSibling)
								if (n.nodeType === 1)
									return !1;
							if (e === "first")
								return !0;
							n = t;
						case "last":
							while (n = n.nextSibling)
								if (n.nodeType === 1)
									return !1;
							return !0
						}
					}
				},
				PSEUDO : function (e, t, r, i) {
					var s,
					o = y.pseudos[e] || y.pseudos[e.toLowerCase()];
					return o || n.error("unsupported pseudo: " + e),
					o[k] ? o(t, r, i) : o.length > 1 ? (s = [e, e, "", t], function (e) {
						return o(e, 0, s)
					}) : o
				}
			},
			pseudos : {
				not : D(function (e, t, n) {
					var r = S(e.replace(X, "$1"), t, n);
					return function (e) {
						return !r(e)
					}
				}),
				enabled : function (e) {
					return e.disabled === !1
				},
				disabled : function (e) {
					return e.disabled === !0
				},
				checked : function (e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && !!e.checked || t === "option" && !!e.selected
				},
				selected : function (e) {
					return e.parentNode && e.parentNode.selectedIndex,
					e.selected === !0
				},
				parent : function (e) {
					return !y.pseudos.empty(e)
				},
				empty : function (e) {
					var t;
					e = e.firstChild;
					while (e) {
						if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4)
							return !1;
						e = e.nextSibling
					}
					return !0
				},
				contains : D(function (e) {
					return function (t) {
						return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
					}
				}),
				has : D(function (e) {
					return function (t) {
						return n(e, t).length > 0
					}
				}),
				header : function (e) {
					return et.test(e.nodeName)
				},
				text : function (e) {
					var t,
					n;
					return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
				},
				radio : r("radio"),
				checkbox : r("checkbox"),
				file : r("file"),
				password : r("password"),
				image : r("image"),
				submit : i("submit"),
				reset : i("reset"),
				button : function (e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && e.type === "button" || t === "button"
				},
				input : function (e) {
					return tt.test(e.nodeName)
				},
				focus : function (e) {
					var t = e.ownerDocument;
					return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!e.type || !!e.href)
				},
				active : function (e) {
					return e === e.ownerDocument.activeElement
				}
			},
			setFilters : {
				first : function (e, t, n) {
					return n ? e.slice(1) : [e[0]]
				},
				last : function (e, t, n) {
					var r = e.pop();
					return n ? e : [r]
				},
				even : function (e, t, n) {
					var r = [],
					i = n ? 1 : 0,
					s = e.length;
					for (; i < s; i += 2)
						r.push(e[i]);
					return r
				},
				odd : function (e, t, n) {
					var r = [],
					i = n ? 0 : 1,
					s = e.length;
					for (; i < s; i += 2)
						r.push(e[i]);
					return r
				},
				lt : function (e, t, n) {
					return n ? e.slice(+t) : e.slice(0, +t)
				},
				gt : function (e, t, n) {
					return n ? e.slice(0, +t + 1) : e.slice(+t + 1)
				},
				eq : function (e, t, n) {
					var r = e.splice(+t, 1);
					return n ? e : r
				}
			}
		},
		x = A.compareDocumentPosition ? function (e, t) {
			return e === t ? (T = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
		}
		 : function (e, t) {
			if (e === t)
				return T = !0, 0;
			if (e.sourceIndex && t.sourceIndex)
				return e.sourceIndex - t.sourceIndex;
			var n,
			r,
			i = [],
			o = [],
			u = e.parentNode,
			a = t.parentNode,
			f = u;
			if (u === a)
				return s(e, t);
			if (!u)
				return -1;
			if (!a)
				return 1;
			while (f)
				i.unshift(f), f = f.parentNode;
			f = a;
			while (f)
				o.unshift(f), f = f.parentNode;
			n = i.length,
			r = o.length;
			for (var l = 0; l < n && l < r; l++)
				if (i[l] !== o[l])
					return s(i[l], o[l]);
			return l === n ? s(e, o[l], -1) : s(i[l], t, 1)
		},
		[0, 0].sort(x),
		N = !T,
		n.uniqueSort = function (e) {
			var t,
			n = 1;
			T = N,
			e.sort(x);
			if (T)
				for (; t = e[n]; n++)
					t === e[n - 1] && e.splice(n--, 1);
			return e
		},
		n.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		},
		S = n.compile = function (e, t, n) {
			var r,
			i,
			s,
			u = j[k][e];
			if (u && u.context === t)
				return u;
			r = o(e, t, n);
			for (i = 0, s = r.length; i < s; i++)
				r[i] = f(r[i], t, n);
			return u = j(e, l(r)),
			u.context = t,
			u.runs = u.dirruns = 0,
			u
		},
		L.querySelectorAll && function () {
			var e,
			t = d,
			r = /'|\\/g,
			i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
			s = [],
			u = [":active"],
			a = A.matchesSelector || A.mozMatchesSelector || A.webkitMatchesSelector || A.oMatchesSelector || A.msMatchesSelector;
			it(function (e) {
				e.innerHTML = "<select><option selected=''></option></select>",
				e.querySelectorAll("[selected]").length || s.push("\\[" + F + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
				e.querySelectorAll(":checked").length || s.push(":checked")
			}),
			it(function (e) {
				e.innerHTML = "<p test=''></p>",
				e.querySelectorAll("[test^='']").length && s.push("[*^$]=" + F + "*(?:\"\"|'')"),
				e.innerHTML = "<input type='hidden'/>",
				e.querySelectorAll(":enabled").length || s.push(":enabled", ":disabled")
			}),
			s = s.length && new RegExp(s.join("|")),
			d = function (e, n, i, u, a) {
				if (!u && !a && (!s || !s.test(e)))
					if (n.nodeType === 9)
						try {
							return _.apply(i, M.call(n.querySelectorAll(e), 0)),
							i
						} catch (f) {}

					else if (n.nodeType === 1 && n.nodeName.toLowerCase() !== "object") {
						var l,
						c,
						h,
						p = n.getAttribute("id"),
						d = p || k,
						v = G.test(e) && n.parentNode || n;
						p ? d = d.replace(r, "\\$&") : n.setAttribute("id", d),
						l = o(e, n, a),
						d = "[id='" + d + "']";
						for (c = 0, h = l.length; c < h; c++)
							l[c] = d + l[c].selector;
						try {
							return _.apply(i, M.call(v.querySelectorAll(l.join(",")), 0)),
							i
						} catch (f) {}

						finally {
							p || n.removeAttribute("id")
						}
					}
				return t(e, n, i, u, a)
			},
			a && (it(function (t) {
					e = a.call(t, "div");
					try {
						a.call(t, "[test!='']:sizzle"),
						u.push(rt.PSEUDO.source, rt.POS.source, "!=")
					} catch (n) {}

				}), u = new RegExp(u.join("|")), n.matchesSelector = function (t, r) {
				r = r.replace(i, "='$1']");
				if (!w(t) && !u.test(r) && (!s || !s.test(r)))
					try {
						var o = a.call(t, r);
						if (o || e || t.document && t.document.nodeType !== 11)
							return o
					} catch (f) {}

				return n(r, null, null, [t]).length > 0
			})
		}
		(),
		y.setFilters.nth = y.setFilters.eq,
		y.filters = y.pseudos,
		n.attr = Y.attr,
		Y.find = n,
		Y.expr = n.selectors,
		Y.expr[":"] = Y.expr.pseudos,
		Y.unique = n.uniqueSort,
		Y.text = n.getText,
		Y.isXMLDoc = n.isXML,
		Y.contains = n.contains
	}
	(e);
	var Pt = /Until$/,
	Ht = /^(?:parents|prev(?:Until|All))/,
	Bt = /^.[^:#\[\.,]*$/,
	jt = Y.expr.match.needsContext,
	Ft = {
		children : !0,
		contents : !0,
		next : !0,
		prev : !0
	};
	Y.fn.extend({
		find : function (e) {
			var t,
			n,
			r,
			i,
			s,
			o,
			u = this;
			if (typeof e != "string")
				return Y(e).filter(function () {
					for (t = 0, n = u.length; t < n; t++)
						if (Y.contains(u[t], this))
							return !0
				});
			o = this.pushStack("", "find", e);
			for (t = 0, n = this.length; t < n; t++) {
				r = o.length,
				Y.find(e, this[t], o);
				if (t > 0)
					for (i = r; i < o.length; i++)
						for (s = 0; s < r; s++)
							if (o[s] === o[i]) {
								o.splice(i--, 1);
								break
							}
			}
			return o
		},
		has : function (e) {
			var t,
			n = Y(e, this),
			r = n.length;
			return this.filter(function () {
				for (t = 0; t < r; t++)
					if (Y.contains(this, n[t]))
						return !0
			})
		},
		not : function (e) {
			return this.pushStack(f(this, e, !1), "not", e)
		},
		filter : function (e) {
			return this.pushStack(f(this, e, !0), "filter", e)
		},
		is : function (e) {
			return !!e && (typeof e == "string" ? jt.test(e) ? Y(e, this.context).index(this[0]) >= 0 : Y.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest : function (e, t) {
			var n,
			r = 0,
			i = this.length,
			s = [],
			o = jt.test(e) || typeof e != "string" ? Y(e, t || this.context) : 0;
			for (; r < i; r++) {
				n = this[r];
				while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
					if (o ? o.index(n) > -1 : Y.find.matchesSelector(n, e)) {
						s.push(n);
						break
					}
					n = n.parentNode
				}
			}
			return s = s.length > 1 ? Y.unique(s) : s,
			this.pushStack(s, "closest", e)
		},
		index : function (e) {
			return e ? typeof e == "string" ? Y.inArray(this[0], Y(e)) : Y.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add : function (e, t) {
			var n = typeof e == "string" ? Y(e, t) : Y.makeArray(e && e.nodeType ? [e] : e),
			r = Y.merge(this.get(), n);
			return this.pushStack(u(n[0]) || u(r[0]) ? r : Y.unique(r))
		},
		addBack : function (e) {
			return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
		}
	}),
	Y.fn.andSelf = Y.fn.addBack,
	Y.each({
		parent : function (e) {
			var t = e.parentNode;
			return t && t.nodeType !== 11 ? t : null
		},
		parents : function (e) {
			return Y.dir(e, "parentNode")
		},
		parentsUntil : function (e, t, n) {
			return Y.dir(e, "parentNode", n)
		},
		next : function (e) {
			return a(e, "nextSibling")
		},
		prev : function (e) {
			return a(e, "previousSibling")
		},
		nextAll : function (e) {
			return Y.dir(e, "nextSibling")
		},
		prevAll : function (e) {
			return Y.dir(e, "previousSibling")
		},
		nextUntil : function (e, t, n) {
			return Y.dir(e, "nextSibling", n)
		},
		prevUntil : function (e, t, n) {
			return Y.dir(e, "previousSibling", n)
		},
		siblings : function (e) {
			return Y.sibling((e.parentNode || {}).firstChild, e)
		},
		children : function (e) {
			return Y.sibling(e.firstChild)
		},
		contents : function (e) {
			return Y.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Y.merge([], e.childNodes)
		}
	}, function (e, t) {
		Y.fn[e] = function (n, r) {
			var i = Y.map(this, t, n);
			return Pt.test(e) || (r = n),
			r && typeof r == "string" && (i = Y.filter(r, i)),
			i = this.length > 1 && !Ft[e] ? Y.unique(i) : i,
			this.length > 1 && Ht.test(e) && (i = i.reverse()),
			this.pushStack(i, e, $.call(arguments).join(","))
		}
	}),
	Y.extend({
		filter : function (e, t, n) {
			return n && (e = ":not(" + e + ")"),
			t.length === 1 ? Y.find.matchesSelector(t[0], e) ? [t[0]] : [] : Y.find.matches(e, t)
		},
		dir : function (e, n, r) {
			var i = [],
			s = e[n];
			while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !Y(s).is(r)))
				s.nodeType === 1 && i.push(s), s = s[n];
			return i
		},
		sibling : function (e, t) {
			var n = [];
			for (; e; e = e.nextSibling)
				e.nodeType === 1 && e !== t && n.push(e);
			return n
		}
	});
	var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	qt = / jQuery\d+="(?:null|\d+)"/g,
	Rt = /^\s+/,
	Ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	zt = /<([\w:]+)/,
	Wt = /<tbody/i,
	Xt = /<|&#?\w+;/,
	Vt = /<(?:script|style|link)/i,
	$t = /<(?:script|object|embed|option|style)/i,
	Jt = new RegExp("<(?:" + It + ")[\\s/>]", "i"),
	Kt = /^(?:checkbox|radio)$/,
	Qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
	Gt = /\/(java|ecma)script/i,
	Yt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
	Zt = {
		option : [1, "<select multiple='multiple'>", "</select>"],
		legend : [1, "<fieldset>", "</fieldset>"],
		thead : [1, "<table>", "</table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area : [1, "<map>", "</map>"],
		_default : [0, "", ""]
	},
	en = l(R),
	tn = en.appendChild(R.createElement("div"));
	Zt.optgroup = Zt.option,
	Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead,
	Zt.th = Zt.td,
	Y.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]),
	Y.fn.extend({
		text : function (e) {
			return Y.access(this, function (e) {
				return e === t ? Y.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(e))
			}, null, e, arguments.length)
		},
		wrapAll : function (e) {
			if (Y.isFunction(e))
				return this.each(function (t) {
					Y(this).wrapAll(e.call(this, t))
				});
			if (this[0]) {
				var t = Y(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]),
				t.map(function () {
					var e = this;
					while (e.firstChild && e.firstChild.nodeType === 1)
						e =
							e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner : function (e) {
			return Y.isFunction(e) ? this.each(function (t) {
				Y(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = Y(this),
				n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap : function (e) {
			var t = Y.isFunction(e);
			return this.each(function (n) {
				Y(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap : function () {
			return this.parent().each(function () {
				Y.nodeName(this, "body") || Y(this).replaceWith(this.childNodes)
			}).end()
		},
		append : function () {
			return this.domManip(arguments, !0, function (e) {
				(this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
			})
		},
		prepend : function () {
			return this.domManip(arguments, !0, function (e) {
				(this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
			})
		},
		before : function () {
			if (!u(this[0]))
				return this.domManip(arguments, !1, function (e) {
					this.parentNode.insertBefore(e, this)
				});
			if (arguments.length) {
				var e = Y.clean(arguments);
				return this.pushStack(Y.merge(e, this), "before", this.selector)
			}
		},
		after : function () {
			if (!u(this[0]))
				return this.domManip(arguments, !1, function (e) {
					this.parentNode.insertBefore(e, this.nextSibling)
				});
			if (arguments.length) {
				var e = Y.clean(arguments);
				return this.pushStack(Y.merge(this, e), "after", this.selector)
			}
		},
		remove : function (e, t) {
			var n,
			r = 0;
			for (; (n = this[r]) != null; r++)
				if (!e || Y.filter(e, [n]).length)
					!t && n.nodeType === 1 && (Y.cleanData(n.getElementsByTagName("*")), Y.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
			return this
		},
		empty : function () {
			var e,
			t = 0;
			for (; (e = this[t]) != null; t++) {
				e.nodeType === 1 && Y.cleanData(e.getElementsByTagName("*"));
				while (e.firstChild)
					e.removeChild(e.firstChild)
			}
			return this
		},
		clone : function (e, t) {
			return e = e == null ? !1 : e,
			t = t == null ? e : t,
			this.map(function () {
				return Y.clone(this, e, t)
			})
		},
		html : function (e) {
			return Y.access(this, function (e) {
				var n = this[0] || {},
				r = 0,
				i = this.length;
				if (e === t)
					return n.nodeType === 1 ? n.innerHTML.replace(qt, "") : t;
				if (typeof e == "string" && !Vt.test(e) && (Y.support.htmlSerialize || !Jt.test(e)) && (Y.support.leadingWhitespace || !Rt.test(e)) && !Zt[(zt.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Ut, "<$1></$2>");
					try {
						for (; r < i; r++)
							n = this[r] || {},
						n.nodeType === 1 && (Y.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
						n = 0
					} catch (s) {}

				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith : function (e) {
			return u(this[0]) ? this.length ? this.pushStack(Y(Y.isFunction(e) ? e() : e), "replaceWith", e) : this : Y.isFunction(e) ? this.each(function (t) {
				var n = Y(this),
				r = n.html();
				n.replaceWith(e.call(this, t, r))
			}) : (typeof e != "string" && (e = Y(e).detach()), this.each(function () {
					var t = this.nextSibling,
					n = this.parentNode;
					Y(this).remove(),
					t ? Y(t).before(e) : Y(n).append(e)
				}))
		},
		detach : function (e) {
			return this.remove(e, !0)
		},
		domManip : function (e, n, r) {
			e = [].concat.apply([], e);
			var i,
			s,
			o,
			u,
			a = 0,
			f = e[0],
			l = [],
			h = this.length;
			if (!Y.support.checkClone && h > 1 && typeof f == "string" && Qt.test(f))
				return this.each(function () {
					Y(this).domManip(e, n, r)
				});
			if (Y.isFunction(f))
				return this.each(function (i) {
					var s = Y(this);
					e[0] = f.call(this, i, n ? s.html() : t),
					s.domManip(e, n, r)
				});
			if (this[0]) {
				i = Y.buildFragment(e, this, l),
				o = i.fragment,
				s = o.firstChild,
				o.childNodes.length === 1 && (o = s);
				if (s) {
					n = n && Y.nodeName(s, "tr");
					for (u = i.cacheable || h - 1; a < h; a++)
						r.call(n && Y.nodeName(this[a], "table") ? c(this[a], "tbody") : this[a], a === u ? o : Y.clone(o, !0, !0))
				}
				o = s = null,
				l.length && Y.each(l, function (e, t) {
					t.src ? Y.ajax ? Y.ajax({
						url : t.src,
						type : "GET",
						dataType : "script",
						async : !1,
						global : !1,
						"throws" : !0
					}) : Y.error("no ajax") : Y.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Yt, "")),
					t.parentNode && t.parentNode.removeChild(t)
				})
			}
			return this
		}
	}),
	Y.buildFragment = function (e, n, r) {
		var i,
		s,
		o,
		u = e[0];
		return n = n || R,
		n = !n.nodeType && n[0] || n,
		n = n.ownerDocument || n,
		e.length === 1 && typeof u == "string" && u.length < 512 && n === R && u.charAt(0) === "<" && !$t.test(u) && (Y.support.checkClone || !Qt.test(u)) && (Y.support.html5Clone || !Jt.test(u)) && (s = !0, i = Y.fragments[u], o = i !== t),
		i || (i = n.createDocumentFragment(), Y.clean(e, n, i, r), s && (Y.fragments[u] = o && i)), {
			fragment : i,
			cacheable : s
		}
	},
	Y.fragments = {},
	Y.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function (e, t) {
		Y.fn[e] = function (n) {
			var r,
			i = 0,
			s = [],
			o = Y(n),
			u = o.length,
			a = this.length === 1 && this[0].parentNode;
			if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1)
				return o[t](this[0]), this;
			for (; i < u; i++)
				r = (i > 0 ? this.clone(!0) : this).get(), Y(o[i])[t](r), s = s.concat(r);
			return this.pushStack(s, e, o.selector)
		}
	}),
	Y.extend({
		clone : function (e, t, n) {
			var r,
			i,
			s,
			o;
			Y.support.html5Clone || Y.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(o = tn.firstChild));
			if ((!Y.support.noCloneEvent || !Y.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !Y.isXMLDoc(e)) {
				p(e, o),
				r = d(e),
				i = d(o);
				for (s = 0; r[s]; ++s)
					i[s] && p(r[s], i[s])
			}
			if (t) {
				h(e, o);
				if (n) {
					r = d(e),
					i = d(o);
					for (s = 0; r[s]; ++s)
						h(r[s], i[s])
				}
			}
			return r = i = null,
			o
		},
		clean : function (e, t, n, r) {
			var i,
			s,
			o,
			u,
			a,
			f,
			c,
			h,
			p,
			d,
			m,
			g,
			y = t === R && en,
			b = [];
			if (!t || typeof t.createDocumentFragment == "undefined")
				t = R;
			for (i = 0; (o = e[i]) != null; i++) {
				typeof o == "number" && (o += "");
				if (!o)
					continue;
				if (typeof o == "string")
					if (!Xt.test(o))
						o = t.createTextNode(o);
					else {
						y = y || l(t),
						c = t.createElement("div"),
						y.appendChild(c),
						o = o.replace(Ut, "<$1></$2>"),
						u = (zt.exec(o) || ["", ""])[1].toLowerCase(),
						a = Zt[u] || Zt._default,
						f = a[0],
						c.innerHTML = a[1] + o + a[2];
						while (f--)
							c = c.lastChild;
						if (!Y.support.tbody) {
							h = Wt.test(o),
							p = u === "table" && !h ? c.firstChild && c.firstChild.childNodes : a[1] === "<table>" && !h ? c.childNodes : [];
							for (s = p.length - 1; s >= 0; --s)
								Y.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s])
						}
						!Y.support.leadingWhitespace && Rt.test(o) && c.insertBefore(t.createTextNode(Rt.exec(o)[0]), c.firstChild),
						o = c.childNodes,
						c.parentNode.removeChild(c)
					}
				o.nodeType ? b.push(o) : Y.merge(b, o)
			}
			c && (o = c = y = null);
			if (!Y.support.appendChecked)
				for (i = 0; (o = b[i]) != null; i++)
					Y.nodeName(o, "input") ? v(o) : typeof o.getElementsByTagName != "undefined" && Y.grep(o.getElementsByTagName("input"), v);
			if (n) {
				m = function (e) {
					if (!e.type || Gt.test(e.type))
						return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
				};
				for (i = 0; (o = b[i]) != null; i++)
					if (!Y.nodeName(o, "script") || !m(o))
						n.appendChild(o), typeof o.getElementsByTagName != "undefined" && (g = Y.grep(Y.merge([], o.getElementsByTagName("script")), m), b.splice.apply(b, [i + 1, 0].concat(g)), i += g.length)
			}
			return b
		},
		cleanData : function (e, t) {
			var n,
			r,
			i,
			s,
			o = 0,
			u = Y.expando,
			a = Y.cache,
			f = Y.support.deleteExpando,
			l = Y.event.special;
			for (; (i = e[o]) != null; o++)
				if (t || Y.acceptData(i)) {
					r = i[u],
					n = r && a[r];
					if (n) {
						if (n.events)
							for (s in n.events)
								l[s] ? Y.event.remove(i, s) : Y.removeEvent(i, s, n.handle);
						a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, Y.deletedIds.push(r))
					}
				}
		}
	}),
	function () {
		var e,
		t;
		Y.uaMatch = function (e) {
			e = e.toLowerCase();
			var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
			return {
				browser : t[1] || "",
				version : t[2] || "0"
			}
		},
		e = Y.uaMatch(z.userAgent),
		t = {},
		e.browser && (t[e.browser] = !0, t.version = e.version),
		t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
		Y.browser = t,
		Y.sub = function () {
			function e(t, n) {
				return new e.fn.init(t, n)
			}
			Y.extend(!0, e, this),
			e.superclass = this,
			e.fn = e.prototype = this(),
			e.fn.constructor = e,
			e.sub = this.sub,
			e.fn.init = function (n, r) {
				return r && r instanceof Y && !(r instanceof e) && (r = e(r)),
				Y.fn.init.call(this, n, r, t)
			},
			e.fn.init.prototype = e.fn;
			var t = e(R);
			return e
		}
	}
	();
	var nn,
	rn,
	sn,
	on = /alpha\([^)]*\)/i,
	un = /opacity=([^)]*)/,
	an = /^(top|right|bottom|left)$/,
	fn = /^(none|table(?!-c[ea]).+)/,
	ln = /^margin/,
	cn = new RegExp("^(" + Z + ")(.*)$", "i"),
	hn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
	pn = new RegExp("^([-+])=(" + Z + ")", "i"),
	dn = {},
	vn = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	},
	mn = {
		letterSpacing : 0,
		fontWeight : 400
	},
	gn = ["Top", "Right", "Bottom", "Left"],
	yn = ["Webkit", "O", "Moz", "ms"],
	bn = Y.fn.toggle;
	Y.fn.extend({
		css : function (e, n) {
			return Y.access(this, function (e, n, r) {
				return r !== t ? Y.style(e, n, r) : Y.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show : function () {
			return y(this, !0)
		},
		hide : function () {
			return y(this)
		},
		toggle : function (e, t) {
			var n = typeof e == "boolean";
			return Y.isFunction(e) && Y.isFunction(t) ? bn.apply(this, arguments) : this.each(function () {
				(n ? e : g(this)) ? Y(this).show() : Y(this).hide()
			})
		}
	}),
	Y.extend({
		cssHooks : {
			opacity : {
				get : function (e, t) {
					if (t) {
						var n = nn(e, "opacity");
						return n === "" ? "1" : n
					}
				}
			}
		},
		cssNumber : {
			fillOpacity : !0,
			fontWeight : !0,
			lineHeight : !0,
			opacity : !0,
			orphans : !0,
			widows : !0,
			zIndex : !0,
			zoom : !0
		},
		cssProps : {
			"float" : Y.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style : function (e, n, r, i) {
			if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
				return;
			var s,
			o,
			u,
			a = Y.camelCase(n),
			f = e.style;
			n = Y.cssProps[a] || (Y.cssProps[a] = m(f, a)),
			u = Y.cssHooks[n] || Y.cssHooks[a];
			if (r === t)
				return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
			o = typeof r,
			o === "string" && (s = pn.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(Y.css(e, n)), o = "number");
			if (r == null || o === "number" && isNaN(r))
				return;
			o === "number" && !Y.cssNumber[a] && (r += "px");
			if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t)
				try {
					f[n] = r
				} catch (l) {}

		},
		css : function (e, n, r, i) {
			var s,
			o,
			u,
			a = Y.camelCase(n);
			return n = Y.cssProps[a] || (Y.cssProps[a] = m(e.style, a)),
			u = Y.cssHooks[n] || Y.cssHooks[a],
			u && "get" in u && (s = u.get(e, !0, i)),
			s === t && (s = nn(e, n)),
			s === "normal" && n in mn && (s = mn[n]),
			r || i !== t ? (o = parseFloat(s), r || Y.isNumeric(o) ? o || 0 : s) : s
		},
		swap : function (e, t, n) {
			var r,
			i,
			s = {};
			for (i in t)
				s[i] = e.style[i], e.style[i] = t[i];
			r = n.call(e);
			for (i in t)
				e.style[i] = s[i];
			return r
		}
	}),
	e.getComputedStyle ? nn = function (t, n) {
		var r,
		i,
		s,
		o,
		u = e.getComputedStyle(t, null),
		a = t.style;
		return u && (r = u[n], r === "" && !Y.contains(t.ownerDocument, t) && (r = Y.style(t, n)), hn.test(r) && ln.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)),
		r
	}
	 : R.documentElement.currentStyle && (nn = function (e, t) {
		var n,
		r,
		i = e.currentStyle && e.currentStyle[t],
		s = e.style;
		return i == null && s && s[t] && (i = s[t]),
		hn.test(i) && !an.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)),
		i === "" ? "auto" : i
	}),
	Y.each(["height", "width"], function (e, t) {
		Y.cssHooks[t] = {
			get : function (e, n, r) {
				if (n)
					return e.offsetWidth === 0 && fn.test(nn(e, "display")) ? Y.swap(e, vn, function () {
						return E(e, t, r)
					}) : E(e, t, r)
			},
			set : function (e, n, r) {
				return b(e, n, r ? w(e, t, r, Y.support.boxSizing && Y.css(e, "boxSizing") === "border-box") : 0)
			}
		}
	}),
	Y.support.opacity || (Y.cssHooks.opacity = {
			get : function (e, t) {
				return un.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set : function (e, t) {
				var n = e.style,
				r = e.currentStyle,
				i = Y.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
				s = r && r.filter || n.filter || "";
				n.zoom = 1;
				if (t >= 1 && Y.trim(s.replace(on, "")) === "" && n.removeAttribute) {
					n.removeAttribute("filter");
					if (r && !r.filter)
						return
				}
				n.filter = on.test(s) ? s.replace(on, i) : s + " " + i
			}
		}),
	Y(function () {
		Y.support.reliableMarginRight || (Y.cssHooks.marginRight = {
				get : function (e, t) {
					return Y.swap(e, {
						display : "inline-block"
					}, function () {
						if (t)
							return nn(e, "marginRight")
					})
				}
			}),
		!Y.support.pixelPosition && Y.fn.position && Y.each(["top", "left"], function (e, t) {
			Y.cssHooks[t] = {
				get : function (e, n) {
					if (n) {
						var r = nn(e, t);
						return hn.test(r) ? Y(e).position()[t] + "px" : r
					}
				}
			}
		})
	}),
	Y.expr && Y.expr.filters && (Y.expr.filters.hidden = function (e) {
		return e.offsetWidth === 0 && e.offsetHeight === 0 || !Y.support.reliableHiddenOffsets && (e.style && e.style.display || nn(e, "display")) === "none"
	}, Y.expr.filters.visible = function (e) {
		return !Y.expr.filters.hidden(e)
	}),
	Y.each({
		margin : "",
		padding : "",
		border : "Width"
	}, function (e, t) {
		Y.cssHooks[e + t] = {
			expand : function (n) {
				var r,
				i = typeof n == "string" ? n.split(" ") : [n],
				s = {};
				for (r = 0; r < 4; r++)
					s[e + gn[r] + t] = i[r] || i[r - 2] || i[0];
				return s
			}
		},
		ln.test(e) || (Y.cssHooks[e + t].set = b)
	});
	var wn = /%20/g,
	En = /\[\]$/,
	Sn = /\r?\n/g,
	xn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	Tn = /^(?:select|textarea)/i;
	Y.fn.extend({
		serialize : function () {
			return Y.param(this.serializeArray())
		},
		serializeArray : function () {
			return this.map(function () {
				return this.elements ? Y.makeArray(this.elements) : this
			}).filter(function () {
				return this.name && !this.disabled && (this.checked || Tn.test(this.nodeName) || xn.test(this.type))
			}).map(function (e, t) {
				var n = Y(this).val();
				return n == null ? null : Y.isArray(n) ? Y.map(n, function (e, n) {
					return {
						name : t.name,
						value : e.replace(Sn, "\r\n")
					}
				}) : {
					name : t.name,
					value : n.replace(Sn, "\r\n")
				}
			}).get()
		}
	}),
	Y.param = function (e, n) {
		var r,
		i = [],
		s = function (e, t) {
			t = Y.isFunction(t) ? t() : t == null ? "" : t,
			i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		};
		n === t && (n = Y.ajaxSettings && Y.ajaxSettings.traditional);
		if (Y.isArray(e) || e.jquery && !Y.isPlainObject(e))
			Y.each(e, function () {
				s(this.name, this.value)
			});
		else
			for (r in e)
				x(r, e[r], n, s);
		return i.join("&").replace(wn, "+")
	};
	var Nn,
	Cn,
	kn = /#.*$/,
	Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	An = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	On = /^(?:GET|HEAD)$/,
	Mn = /^\/\//,
	_n = /\?/,
	Dn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	Pn = /([?&])_=[^&]*/,
	Hn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	Bn = Y.fn.load,
	jn = {},
	Fn = {},
	In = ["*/"] + ["*"];
	try {
		Nn = U.href
	} catch (qn) {
		Nn = R.createElement("a"),
		Nn.href = "",
		Nn = Nn.href
	}
	Cn = Hn.exec(Nn.toLowerCase()) || [],
	Y.fn.load = function (e, n, r) {
		if (typeof e != "string" && Bn)
			return Bn.apply(this, arguments);
		if (!this.length)
			return this;
		var i,
		s,
		o,
		u = this,
		a = e.indexOf(" ");
		return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)),
		Y.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"),
		Y.ajax({
			url : e,
			type : s,
			dataType : "html",
			data : n,
			complete : function (e, t) {
				r && u.each(r, o || [e.responseText, t, e])
			}
		}).done(function (e) {
			o = arguments,
			u.html(i ? Y("<div>").append(e.replace(Dn, "")).find(i) : e)
		}),
		this
	},
	Y.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
		Y.fn[t] = function (e) {
			return this.on(t, e)
		}
	}),
	Y.each(["get", "post"], function (e, n) {
		Y[n] = function (e, r, i, s) {
			return Y.isFunction(r) && (s = s || i, i = r, r = t),
			Y.ajax({
				type : n,
				url : e,
				data : r,
				success : i,
				dataType : s
			})
		}
	}),
	Y.extend({
		getScript : function (e, n) {
			return Y.get(e, t, n, "script")
		},
		getJSON : function (e, t, n) {
			return Y.get(e, t, n, "json")
		},
		ajaxSetup : function (e, t) {
			return t ? C(e, Y.ajaxSettings) : (t = e, e = Y.ajaxSettings),
			C(e, t),
			e
		},
		ajaxSettings : {
			url : Nn,
			isLocal : An.test(Cn[1]),
			global : !0,
			type : "GET",
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			processData : !0,
			async : !0,
			accepts : {
				xml : "application/xml, text/xml",
				html : "text/html",
				text : "text/plain",
				json : "application/json, text/javascript",
				"*" : In
			},
			contents : {
				xml : /xml/,
				html : /html/,
				json : /json/
			},
			responseFields : {
				xml : "responseXML",
				text : "responseText"
			},
			converters : {
				"* text" : e.String,
				"text html" : !0,
				"text json" : Y.parseJSON,
				"text xml" : Y.parseXML
			},
			flatOptions : {
				context : !0,
				url : !0
			}
		},
		ajaxPrefilter : T(jn),
		ajaxTransport : T(Fn),
		ajax : function (e, n) {
			function r(e, n, r, o) {
				var f,
				c,
				y,
				b,
				E,
				x = n;
				if (w === 2)
					return;
				w = 2,
				a && clearTimeout(a),
				u = t,
				s = o || "",
				S.readyState = e > 0 ? 4 : 0,
				r && (b = k(h, S, r));
				if (e >= 200 && e < 300 || e === 304)
					h.ifModified && (E = S.getResponseHeader("Last-Modified"), E && (Y.lastModified[i] = E), E = S.getResponseHeader("Etag"), E && (Y.etag[i] = E)), e === 304 ? (x = "notmodified", f = !0) : (f = L(h, b), x = f.state, c = f.data, y = f.error, f = !y);
				else {
					y = x;
					if (!x || e)
						x = "error", e < 0 && (e = 0)
				}
				S.status = e,
				S.statusText = "" + (n || x),
				f ? v.resolveWith(p, [c, x, S]) : v.rejectWith(p, [S, x, y]),
				S.statusCode(g),
				g = t,
				l && d.trigger("ajax" + (f ? "Success" : "Error"), [S, h, f ? c : y]),
				m.fireWith(p, [S, x]),
				l && (d.trigger("ajaxComplete", [S, h]), --Y.active || Y.event.trigger("ajaxStop"))
			}
			typeof e == "object" && (n = e, e = t),
			n = n || {};
			var i,
			s,
			o,
			u,
			a,
			f,
			l,
			c,
			h = Y.ajaxSetup({}, n),
			p = h.context || h,
			d = p !== h && (p.nodeType || p instanceof Y) ? Y(p) : Y.event,
			v = Y.Deferred(),
			m = Y.Callbacks("once memory"),
			g = h.statusCode || {},
			y = {},
			b = {},
			w = 0,
			E = "canceled",
			S = {
				readyState : 0,
				setRequestHeader : function (e, t) {
					if (!w) {
						var n = e.toLowerCase();
						e = b[n] = b[n] || e,
						y[e] = t
					}
					return this
				},
				getAllResponseHeaders : function () {
					return w === 2 ? s : null
				},
				getResponseHeader : function (e) {
					var n;
					if (w === 2) {
						if (!o) {
							o = {};
							while (n = Ln.exec(s))
								o[n[1].toLowerCase()] = n[2]
						}
						n = o[e.toLowerCase()]
					}
					return n === t ? null : n
				},
				overrideMimeType : function (e) {
					return w || (h.mimeType = e),
					this
				},
				abort : function (e) {
					return e = e || E,
					u && u.abort(e),
					r(0, e),
					this
				}
			};
			v.promise(S),
			S.success = S.done,
			S.error = S.fail,
			S.complete = m.add,
			S.statusCode = function (e) {
				if (e) {
					var t;
					if (w < 2)
						for (t in e)
							g[t] = [g[t], e[t]];
					else
						t = e[S.status], S.always(t)
				}
				return this
			},
			h.url = ((e || h.url) + "").replace(kn, "").replace(Mn, Cn[1] + "//"),
			h.dataTypes = Y.trim(h.dataType || "*").toLowerCase().split(tt),
			h.crossDomain == null && (f = Hn.exec(h.url.toLowerCase()), h.crossDomain = !(!f || f[1] == Cn[1] && f[2] == Cn[2] && (f[3] || (f[1] === "http:" ? 80 : 443)) == (Cn[3] || (Cn[1] === "http:" ? 80 : 443)))),
			h.data && h.processData && typeof h.data != "string" && (h.data = Y.param(h.data, h.traditional)),
			N(jn, h, n, S);
			if (w === 2)
				return S;
			l = h.global,
			h.type = h.type.toUpperCase(),
			h.hasContent = !On.test(h.type),
			l && Y.active++ === 0 && Y.event.trigger("ajaxStart");
			if (!h.hasContent) {
				h.data && (h.url += (_n.test(h.url) ? "&" : "?") + h.data, delete h.data),
				i = h.url;
				if (h.cache === !1) {
					var x = Y.now(),
					T = h.url.replace(Pn, "$1_=" + x);
					h.url = T + (T === h.url ? (_n.test(h.url) ? "&" : "?") + "_=" + x : "")
				}
			}
			(h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType),
			h.ifModified && (i = i || h.url, Y.lastModified[i] && S.setRequestHeader("If-Modified-Since", Y.lastModified[i]), Y.etag[i] && S.setRequestHeader("If-None-Match", Y.etag[i])),
			S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", " + In + "; q=0.01" : "") : h.accepts["*"]);
			for (c in h.headers)
				S.setRequestHeader(c, h.headers[c]);
			if (!h.beforeSend || h.beforeSend.call(p, S, h) !== !1 && w !== 2) {
				E = "abort";
				for (c in {
					success : 1,
					error : 1,
					complete : 1
				})
					S[c](h[c]);
				u = N(Fn, h, n, S);
				if (!u)
					r(-1, "No Transport");
				else {
					S.readyState = 1,
					l && d.trigger("ajaxSend", [S, h]),
					h.async && h.timeout > 0 && (a = setTimeout(function () {
								S.abort("timeout")
							}, h.timeout));
					try {
						w = 1,
						u.send(y, r)
					} catch (C) {
						if (!(w < 2))
							throw C;
						r(-1, C)
					}
				}
				return S
			}
			return S.abort()
		},
		active : 0,
		lastModified : {},
		etag : {}

	});
	var Rn = [],
	Un = /\?/,
	zn = /(=)\?(?=&|$)|\?\?/,
	Wn = Y.now();
	Y.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function () {
			var e = Rn.pop() || Y.expando + "_" + Wn++;
			return this[e] = !0,
			e
		}
	}),
	Y.ajaxPrefilter("json jsonp", function (n, r, i) {
		var s,
		o,
		u,
		a = n.data,
		f = n.url,
		l = n.jsonp !== !1,
		c = l && zn.test(f),
		h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && zn.test(a);
		if (n.dataTypes[0] === "jsonp" || c || h)
			return s = n.jsonpCallback = Y.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(zn, "$1" + s) : h ? n.data = a.replace(zn, "$1" + s) : l && (n.url += (Un.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
				return u || Y.error(s + " was not called"),
				u[0]
			},
		n.dataTypes[0] = "json",
		e[s] = function () {
			u = arguments
		},
		i.always(function () {
			e[s] = o,
			n[s] && (n.jsonpCallback = r.jsonpCallback, Rn.push(s)),
			u && Y.isFunction(o) && o(u[0]),
			u = o = t
		}),
		"script"
	}),
	Y.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /javascript|ecmascript/
		},
		converters : {
			"text script" : function (e) {
				return Y.globalEval(e),
				e
			}
		}
	}),
	Y.ajaxPrefilter("script", function (e) {
		e.cache === t && (e.cache = !1),
		e.crossDomain && (e.type = "GET", e.global = !1)
	}),
	Y.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var n,
			r = R.head || R.getElementsByTagName("head")[0] || R.documentElement;
			return {
				send : function (i, s) {
					n = R.createElement("script"),
					n.async = "async",
					e.scriptCharset && (n.charset = e.scriptCharset),
					n.src = e.url,
					n.onload = n.onreadystatechange = function (e, i) {
						if (i || !n.readyState || /loaded|complete/.test(n.readyState))
							n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success")
					},
					r.insertBefore(n, r.firstChild)
				},
				abort : function () {
					n && n.onload(0, 1)
				}
			}
		}
	});
	var Xn,
	Vn = e.ActiveXObject ? function () {
		for (var e in Xn)
			Xn[e](0, 1)
	}
	 : !1,
	$n = 0;
	Y.ajaxSettings.xhr = e.ActiveXObject ? function () {
		return !this.isLocal && A() || O()
	}
	 : A,
	function (e) {
		Y.extend(Y.support, {
			ajax : !!e,
			cors : !!e && "withCredentials" in e
		})
	}
	(Y.ajaxSettings.xhr()),
	Y.support.ajax && Y.ajaxTransport(function (n) {
		if (!n.crossDomain || Y.support.cors) {
			var r;
			return {
				send : function (i, s) {
					var o,
					u,
					a = n.xhr();
					n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
					if (n.xhrFields)
						for (u in n.xhrFields)
							a[u] = n.xhrFields[u];
					n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType),
					!n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (u in i)
							a.setRequestHeader(u, i[u])
					} catch (f) {}

					a.send(n.hasContent && n.data || null),
					r = function (e, i) {
						var u,
						f,
						l,
						c,
						h;
						try {
							if (r && (i || a.readyState === 4)) {
								r = t,
								o && (a.onreadystatechange = Y.noop, Vn && delete Xn[o]);
								if (i)
									a.readyState !== 4 && a.abort();
								else {
									u = a.status,
									l = a.getAllResponseHeaders(),
									c = {},
									h = a.responseXML,
									h && h.documentElement && (c.xml = h);
									try {
										c.text = a.responseText
									} catch (e) {}

									try {
										f = a.statusText
									} catch (p) {
										f = ""
									}
									!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
								}
							}
						} catch (d) {
							i || s(-1, d)
						}
						c && s(u, f, c, l)
					},
					n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++$n, Vn && (Xn || (Xn = {}, Y(e).unload(Vn)), Xn[o] = r), a.onreadystatechange = r) : r()
				},
				abort : function () {
					r && r(0, 1)
				}
			}
		}
	});
	var Jn,
	Kn,
	Qn = /^(?:toggle|show|hide)$/,
	Gn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
	Yn = /queueHooks$/,
	Zn = [H],
	er = {
		"*" : [function (e, t) {
				var n,
				r,
				i,
				s = this.createTween(e, t),
				o = Gn.exec(t),
				u = s.cur(),
				a = +u || 0,
				f = 1;
				if (o) {
					n = +o[2],
					r = o[3] || (Y.cssNumber[e] ? "" : "px");
					if (r !== "px" && a) {
						a = Y.css(s.elem, e, !0) || n || 1;
						do
							i = f = f || ".5", a /= f, Y.style(s.elem, e, a + r), f = s.cur() / u;
						while (f !== 1 && f !== i)
					}
					s.unit = r,
					s.start = a,
					s.end = o[1] ? a + (o[1] + 1) * n : n
				}
				return s
			}
		]
	};
	Y.Animation = Y.extend(D, {
			tweener : function (e, t) {
				Y.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				var n,
				r = 0,
				i = e.length;
				for (; r < i; r++)
					n = e[r], er[n] = er[n] || [], er[n].unshift(t)
			},
			prefilter : function (e, t) {
				t ? Zn.unshift(e) : Zn.push(e)
			}
		}),
	Y.Tween = B,
	B.prototype = {
		constructor : B,
		init : function (e, t, n, r, i, s) {
			this.elem = e,
			this.prop = n,
			this.easing = i || "swing",
			this.options = t,
			this.start = this.now = this.cur(),
			this.end = r,
			this.unit = s || (Y.cssNumber[n] ? "" : "px")
		},
		cur : function () {
			var e = B.propHooks[this.prop];
			return e && e.get ? e.get(this) : B.propHooks._default.get(this)
		},
		run : function (e) {
			var t,
			n = B.propHooks[this.prop];
			return this.options.duration ? this.pos = t = Y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
			this.now = (this.end - this.start) * t + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			n && n.set ? n.set(this) : B.propHooks._default.set(this),
			this
		}
	},
	B.prototype.init.prototype = B.prototype,
	B.propHooks = {
		_default : {
			get : function (e) {
				var t;
				return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = Y.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
			},
			set : function (e) {
				Y.fx.step[e.prop] ? Y.fx.step[e.prop](e) : e.elem.style && (e.elem.style[Y.cssProps[e.prop]] != null || Y.cssHooks[e.prop]) ? Y.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	},
	B.propHooks.scrollTop = B.propHooks.scrollLeft = {
		set : function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	},
	Y.each(["toggle", "show", "hide"], function (e, t) {
		var n = Y.fn[t];
		Y.fn[t] = function (r, i, s) {
			return r == null || typeof r == "boolean" || !e && Y.isFunction(r) && Y.isFunction(i) ? n.apply(this, arguments) : this.animate(j(t, !0), r, i, s)
		}
	}),
	Y.fn.extend({
		fadeTo : function (e, t, n, r) {
			return this.filter(g).css("opacity", 0).show().end().animate({
				opacity : t
			}, e, n, r)
		},
		animate : function (e, t, n, r) {
			var i = Y.isEmptyObject(e),
			s = Y.speed(t, n, r),
			o = function () {
				var t = D(this, Y.extend({}, e), s);
				i && t.stop(!0)
			};
			return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
		},
		stop : function (e, n, r) {
			var i = function (e) {
				var t = e.stop;
				delete e.stop,
				t(r)
			};
			return typeof e != "string" && (r = n, n = e, e = t),
			n && e !== !1 && this.queue(e || "fx", []),
			this.each(function () {
				var t = !0,
				n = e != null && e + "queueHooks",
				s = Y.timers,
				o = Y._data(this);
				if (n)
					o[n] && o[n].stop && i(o[n]);
				else
					for (n in o)
						o[n] && o[n].stop && Yn.test(n) && i(o[n]);
				for (n = s.length; n--; )
					s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
				(t || !r) && Y.dequeue(this, e)
			})
		}
	}),
	Y.each({
		slideDown : j("show"),
		slideUp : j("hide"),
		slideToggle : j("toggle"),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function (e, t) {
		Y.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r)
		}
	}),
	Y.speed = function (e, t, n) {
		var r = e && typeof e == "object" ? Y.extend({}, e) : {
			complete : n || !n && t || Y.isFunction(e) && e,
			duration : e,
			easing : n && t || t && !Y.isFunction(t) && t
		};
		r.duration = Y.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in Y.fx.speeds ? Y.fx.speeds[r.duration] : Y.fx.speeds._default;
		if (r.queue == null || r.queue === !0)
			r.queue = "fx";
		return r.old = r.complete,
		r.complete = function () {
			Y.isFunction(r.old) && r.old.call(this),
			r.queue && Y.dequeue(this, r.queue)
		},
		r
	},
	Y.easing = {
		linear : function (e) {
			return e
		},
		swing : function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	},
	Y.timers = [],
	Y.fx = B.prototype.init,
	Y.fx.tick = function () {
		var e,
		t = Y.timers,
		n = 0;
		for (; n < t.length; n++)
			e = t[n], !e() && t[n] === e && t.splice(n--, 1);
		t.length || Y.fx.stop()
	},
	Y.fx.timer = function (e) {
		e() && Y.timers.push(e) && !Kn && (Kn = setInterval(Y.fx.tick, Y.fx.interval))
	},
	Y.fx.interval = 13,
	Y.fx.stop = function () {
		clearInterval(Kn),
		Kn = null
	},
	Y.fx.speeds = {
		slow : 600,
		fast : 200,
		_default : 400
	},
	Y.fx.step = {},
	Y.expr && Y.expr.filters && (Y.expr.filters.animated = function (e) {
		return Y.grep(Y.timers, function (t) {
			return e === t.elem
		}).length
	});
	var tr = /^(?:body|html)$/i;
	Y.fn.offset = function (e) {
		if (arguments.length)
			return e === t ? this : this.each(function (t) {
				Y.offset.setOffset(this, e, t)
			});
		var n,
		r,
		i,
		s,
		o,
		u,
		a,
		f,
		l,
		c,
		h = this[0],
		p = h && h.ownerDocument;
		if (!p)
			return;
		return (i = p.body) === h ? Y.offset.bodyOffset(h) : (r = p.documentElement, Y.contains(r, h) ? (n = h.getBoundingClientRect(), s = F(p), o = r.clientTop || i.clientTop || 0, u = r.clientLeft || i.clientLeft || 0, a = s.pageYOffset || r.scrollTop, f = s.pageXOffset || r.scrollLeft, l = n.top + a - o, c = n.left + f - u, {
				top : l,
				left : c
			}) : {
			top : 0,
			left : 0
		})
	},
	Y.offset = {
		bodyOffset : function (e) {
			var t = e.offsetTop,
			n = e.offsetLeft;
			return Y.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(Y.css(e, "marginTop")) || 0, n += parseFloat(Y.css(e, "marginLeft")) || 0), {
				top : t,
				left : n
			}
		},
		setOffset : function (e, t, n) {
			var r = Y.css(e, "position");
			r === "static" && (e.style.position = "relative");
			var i = Y(e),
			s = i.offset(),
			o = Y.css(e, "top"),
			u = Y.css(e, "left"),
			a = (r === "absolute" || r === "fixed") && Y.inArray("auto", [o, u]) > -1,
			f = {},
			l = {},
			c,
			h;
			a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0),
			Y.isFunction(t) && (t = t.call(e, n, s)),
			t.top != null && (f.top = t.top - s.top + c),
			t.left != null && (f.left = t.left - s.left + h),
			"using" in t ? t.using.call(e, f) : i.css(f)
		}
	},
	Y.fn.extend({
		position : function () {
			if (!this[0])
				return;
			var e = this[0],
			t = this.offsetParent(),
			n = this.offset(),
			r = tr.test(t[0].nodeName) ? {
				top : 0,
				left : 0
			}
			 : t.offset();
			return n.top -= parseFloat(Y.css(e, "marginTop")) || 0,
			n.left -= parseFloat(Y.css(e, "marginLeft")) || 0,
			r.top += parseFloat(Y.css(t[0], "borderTopWidth")) || 0,
			r.left += parseFloat(Y.css(t[0], "borderLeftWidth")) || 0, {
				top : n.top - r.top,
				left : n.left - r.left
			}
		},
		offsetParent : function () {
			return this.map(function () {
				var e = this.offsetParent || R.body;
				while (e && !tr.test(e.nodeName) && Y.css(e, "position") === "static")
					e = e.offsetParent;
				return e || R.body
			})
		}
	}),
	Y.each({
		scrollLeft : "pageXOffset",
		scrollTop : "pageYOffset"
	}, function (e, n) {
		var r = /Y/.test(n);
		Y.fn[e] = function (i) {
			return Y.access(this, function (e, i, s) {
				var o = F(e);
				if (s === t)
					return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
				o ? o.scrollTo(r ? Y(o).scrollLeft() : s, r ? s : Y(o).scrollTop()) : e[i] = s
			}, e, i, arguments.length, null)
		}
	}),
	Y.each({
		Height : "height",
		Width : "width"
	}, function (e, n) {
		Y.each({
			padding : "inner" + e,
			content : n,
			"" : "outer" + e
		}, function (r, i) {
			Y.fn[i] = function (i, s) {
				var o = arguments.length && (r || typeof i != "boolean"),
				u = r || (i === !0 || s === !0 ? "margin" : "border");
				return Y.access(this, function (n, r, i) {
					var s;
					return Y.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? Y.css(n, r, i, u) : Y.style(n, r, i, u)
				}, n, o ? i : t, o, null)
			}
		})
	}),
	e.jQuery = e.$ = Y,
	typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
		return Y
	})
})(window), window.$stjq = jQuery.noConflict(!0), function (jQuery) {
	typeof JSON != "object" && (JSON = {}),
	function () {
		"use strict";
		function f(e) {
			return e < 10 ? "0" + e : e
		}
		function quote(e) {
			return escapable.lastIndex = 0,
			escapable.test(e) ? '"' + e.replace(escapable, function (e) {
				var t = meta[e];
				return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + e + '"'
		}
		function str(e, t) {
			var n,
			r,
			i,
			s,
			o = gap,
			u,
			a = t[e];
			a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)),
			typeof rep == "function" && (a = rep.call(t, e, a));
			switch (typeof a) {
			case "string":
				return quote(a);
			case "number":
				return isFinite(a) ? String(a) : "null";
			case "boolean":
			case "null":
				return String(a);
			case "object":
				if (!a)
					return "null";
				gap += indent,
				u = [];
				if (Object.prototype.toString.apply(a) === "[object Array]") {
					s = a.length;
					for (n = 0; n < s; n += 1)
						u[n] = str(n, a) || "null";
					return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]",
					gap = o,
					i
				}
				if (rep && typeof rep == "object") {
					s = rep.length;
					for (n = 0; n < s; n += 1)
						typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
				} else
					for (r in a)
						Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
				return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}",
				gap = o,
				i
			}
		}
		typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function () {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
			return this.valueOf()
		});
		var cx,
		escapable,
		gap,
		indent,
		meta,
		rep;
		typeof JSON.stringify != "function" && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
				"\b" : "\\b",
				"	" : "\\t",
				"\n" : "\\n",
				"\f" : "\\f",
				"\r" : "\\r",
				'"' : '\\"',
				"\\" : "\\\\"
			}, JSON.stringify = function (e, t, n) {
			var r;
			gap = "",
			indent = "";
			if (typeof n == "number")
				for (r = 0; r < n; r += 1)
					indent += " ";
			else
				typeof n == "string" && (indent = n);
			rep = t;
			if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number")
				return str("", {
					"" : e
				});
			throw new Error("JSON.stringify")
		}),
		typeof JSON.parse != "function" && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function (text, reviver) {
			function walk(e, t) {
				var n,
				r,
				i = e[t];
				if (i && typeof i == "object")
					for (n in i)
						Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
				return reviver.call(e, t, i)
			}
			var j;
			text = String(text),
			cx.lastIndex = 0,
			cx.test(text) && (text = text.replace(cx, function (e) {
						return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
					}));
			if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
				return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
					"" : j
				}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}
	(),
	function (e) {
		var t = window.Cookies,
		n = window.Cookies = e(window.jQuery);
		n.noConflict = function () {
			return window.Cookies = t,
			n
		}
	}
	(function () {
		function e() {
			var e = 0,
			t = {};
			for (; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n)
					t[r] = n[r]
			}
			return t
		}
		function t(n) {
			function r(t, i, s) {
				function o(e, t, n) {
					t = encodeURIComponent(String(t)),
					t = t.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
					e = encodeURIComponent(String(e)),
					e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
					e = e.replace(/[\(\)]/g, escape);
					var r = [e, "=", t, n.expires && "; expires=" + n.expires.toUTCString(), n.path && "; path=" + n.path, n.domain && "; domain=" + n.domain, n.secure && "; secure"].join("");
					return r
				}
				var u;
				if (arguments.length > 1) {
					s = e({
							path : "/"
						}, r.defaults, s);
					if (typeof s.expires == "number") {
						var a = new Date;
						a.setMilliseconds(a.getMilliseconds() + s.expires * 864e5),
						s.expires = a
					}
					try {
						u = JSON.stringify(i),
						/^[\{\[]/.test(u) && (i = u)
					} catch (f) {}

					var l = o(t, i, s);
					return this.doNotActuallySetCookie ? l : document.cookie = l
				}
				t || (u = {});
				var c = document.cookie ? document.cookie.split("; ") : [],
				h = /(%[0-9A-Z]{2})+/g,
				p = 0;
				for (; p < c.length; p++) {
					var d = c[p].split("="),
					v = d[0].replace(h, decodeURIComponent),
					m = d.slice(1).join("=");
					m.charAt(0) === '"' && (m = m.slice(1, -1)),
					m = n && n(m, v) || m.replace(h, decodeURIComponent);
					if (this.json)
						try {
							m = JSON.parse(m)
						} catch (f) {}

					if (t === v) {
						u = m;
						break
					}
					t || (u[v] = m)
				}
				return u
			}
			return r.get = r.set = r,
			r.getJSON = function () {
				return r.apply({
					json : !0
				}, [].slice.call(arguments))
			},
			r.cookieStringOnly = function () {
				return r.apply({
					doNotActuallySetCookie : !0
				}, [].slice.call(arguments))
			},
			r.defaults = {},
			r.remove = function (t, n) {
				r(t, "", e(n, {
						expires : -1
					}))
			},
			r.withConverter = t,
			r
		}
		return t()
	}),
	function (e, t) {
		"use strict";
		e._InternalSwiftype = e._InternalSwiftype || {},
		e._InternalSwiftype.Cookies = Cookies.noConflict(),
		e._InternalSwiftype.Cookies.json = !0
	}
	(window, jQuery),
	function (e) {
		e.Hashcode = function () {
			var e = function (e) {
				var e = e.toString(),
				t = 0,
				n;
				for (n = 0; n < e.length; n++)
					t = (t << 5) - t + e.charCodeAt(n) & 4294967295;
				return t
			},
			t = function (t) {
				var r = 0;
				for (var i in t)
					t.hasOwnProperty(i) && (r += e(i + n(t[i])));
				return r
			},
			n = function (n) {
				var r = {
					string : e,
					number : e,
					"boolean" : e,
					object : t
				},
				i = typeof n;
				return n != null && r[i] ? r[i](n) + e(i) : 0
			};
			return {
				value : n
			}
		}
		()
	}
	(window),
	function (e) {
		"use strict";
		var t = e._InternalSwiftype = e._InternalSwiftype || {};
		t.ClickRecord = function (e, t, n) {
			this._resultId = e,
			this._count = t,
			this._last = n
		},
		t.ClickRecord.fromObject = function (e) {
			return new t.ClickRecord(e.resultId, e.count, e.last)
		},
		t.ClickRecord.fromResultId = function (e) {
			return new t.ClickRecord(e, 0, (new Date).getTime())
		};
		var n = t.ClickRecord.prototype;
		n.getResultId = function () {
			return this._resultId
		},
		n.getCount = function () {
			return this._count
		},
		n.getLastClicked = function () {
			return this._last
		},
		n.incrementCount = function (e) {
			this._count = this._count + (e || 1)
		},
		n.updateLastClicked = function (e) {
			this._last = e || (new Date).getTime()
		},
		n.hashcode = function () {
			return Hashcode.value(this._resultId)
		},
		n.toObject = function () {
			var e = {
				resultId : this.getResultId(),
				count : this.getCount(),
				last : this.getLastClicked()
			};
			return e
		}
	}
	(window),
	function (e, t) {
		"use strict";
		var n = e._InternalSwiftype = e._InternalSwiftype || {};
		n.QueryRecord = function (e, t, n, r) {
			this._legalQueryKeys = ["q", "sort_field", "sort_direction", "filters"],
			this._query = this._sanitizeQuery(e),
			this._count = t,
			this._last = n,
			this._clickRecords = r
		},
		n.QueryRecord.fromObject = function (e) {
			var r = {};
			return t.each(e.clicks, function (e, t) {
				var i = n.ClickRecord.fromObject(t);
				r[e] = i
			}),
			new n.QueryRecord(e.query, e.count, e.last, r)
		},
		n.QueryRecord.fromQuery = function (e) {
			return new n.QueryRecord(e, 0, (new Date).getTime(), {})
		};
		var r = n.QueryRecord.prototype;
		r.getQuery = function () {
			return this._query
		},
		r.getQueryString = function () {
			return this._query.q
		},
		r.getCount = function () {
			return this._count
		},
		r.lastExecutedAt = function () {
			return this._last
		},
		r.getClickRecords = function () {
			return this._clickRecords
		},
		r.getLastClickRecord = function () {
			var e = null;
			return t.each(this.getClickRecords(), function (t, n) {
				if (!e || n.getLastClicked() > e.getLastClicked())
					e = n
			}),
			e
		},
		r.getClickResultIds = function () {
			var e = t.map(this.getClickRecords(), function (e, t) {
					return e.getResultId()
				});
			return e
		},
		r.registerClickByResultId = function (e) {
			var t = n.ClickRecord.fromResultId(e);
			t = this.getClickRecords()[t.hashcode()] || t,
			t.incrementCount(),
			t.updateLastClicked(),
			this.getClickRecords()[t.hashcode()] = t
		},
		r.updateLastExecuted = function (e) {
			this._last = e || (new Date).getTime()
		},
		r.incrementCount = function (e) {
			this._count = this._count + (e || 1)
		},
		r.hashcode = function () {
			return Hashcode.value(this.getQuery())
		},
		r.toObject = function () {
			var e = {};
			t.each(this.getClickRecords(), function (t, n) {
				e[t] = n.toObject()
			});
			var n = {
				query : this.getQuery(),
				count : this.getCount(),
				last : this.lastExecutedAt(),
				clicks : e
			};
			return n
		},
		r._sanitizeQuery = function (e) {
			var n = {};
			return t.each(this._legalQueryKeys, function (t, r) {
				e[r] && (n[r] = e[r])
			}),
			n
		}
	}
	(window, jQuery),
	function (e, t) {
		"use strict";
		var n = e._InternalSwiftype = e._InternalSwiftype || {};
		n.InstallRecord = function (e, t) {
			this._installKey = e,
			this._queryRecords = t
		},
		n.InstallRecord.fromObject = function (e) {
			var r = {};
			return t.each(e.queries, function (e, t) {
				r[e] = n.QueryRecord.fromObject(t)
			}),
			new n.InstallRecord(e.installKey, r)
		},
		n.InstallRecord.fromInstallKey = function (e) {
			return new n.InstallRecord(e, {})
		};
		var r = n.InstallRecord.prototype;
		r.getInstallKey = function () {
			return this._installKey
		},
		r.registerQuery = function (e) {
			var t = this._getQueryForFullQuery(e);
			t.incrementCount(),
			t.updateLastExecuted()
		},
		r.registerClickForQuery = function (e, t) {
			var n = this._getQueryForFullQuery(e);
			n.registerClickByResultId(t)
		},
		r.getRecentResultIds = function () {
			var e = 10,
			n = [];
			return t.each(this.getQueryRecords(), function (r, i) {
				return t.each(i.getClickResultIds(), function (t, r) {
					return n.push(r),
					n.length < e
				}),
				n.length < e
			}),
			n
		},
		r.getLastQueryExecutionTime = function () {
			var e = this.getLastExecutedQuery();
			return e ? e.lastExecutedAt() : 0
		},
		r.getLastExecutedQuery = function () {
			var e = null;
			return t.each(this.getQueryRecords(), function (t, n) {
				if (e === null || e.lastExecutedAt() < n.lastExecutedAt())
					e = n
			}),
			e
		},
		r.removeOldestQuery = function () {
			var e = this._getOldestQuery();
			return e ? (delete this._queryRecords[e.hashcode()], !0) : !1
		},
		r._getOldestQuery = function () {
			var e = null;
			return t.each(this.getQueryRecords(), function (t, n) {
				if (e === null || e.lastExecutedAt() > n.lastExecutedAt())
					e = n
			}),
			e
		},
		r.getQueryRecords = function () {
			return this._queryRecords
		},
		r.getSortedQueryRecordsByExecutedAt = function () {
			var e = t.map(this._queryRecords, function (e, t) {
					return e
				});
			return e.sort(function (e, t) {
				return e._last - t._last
			})
		},
		r.hashcode = function () {
			return Hashcode.value(this.getInstallKey())
		},
		r.toObject = function () {
			var e = {};
			t.each(this.getQueryRecords(), function (t, n) {
				e[t] = n.toObject()
			});
			var n = {
				installKey : this.getInstallKey(),
				queries : e
			};
			return n
		},
		r._getQueryForFullQuery = function (e) {
			var t = new n.QueryRecord.fromQuery(e);
			return t = this._queryRecords[t.hashcode()] || t,
			this._queryRecords[t.hashcode()] = t,
			t
		}
	}
	(window, jQuery),
	function (e, t) {
		"use strict";
		var n = e._InternalSwiftype = e._InternalSwiftype || {},
		r = e._InternalSwiftype.Cookies;
		n.SearchHistory = function (e) {
			this._cookieName = "st-sh",
			this._expires = 36135,
			this._path = "/",
			this._version = 1,
			this._maximumByteSize = 2048,
			this._installKey = e,
			this._initializeFromCookie(),
			this._migrateCookieVersionIfNeeded()
		},
		n.SearchHistory.forLastActiveInstall = function () {
			return new n.SearchHistory
		},
		n.SearchHistory.forInstallKey = function (e) {
			return new n.SearchHistory(e)
		};
		var i = n.SearchHistory.prototype;
		i._migrateCookieVersionIfNeeded = function () {
			this.getCookieVersion() && this.getVersion() !== this.getCookieVersion() && this._migrateCookieVersion(this.getCookieVersion(), this.getVersion())
		},
		i._initializeFromCookie = function () {
			var e = this;
			this._st_cookies = r.get(this._cookieName) || {},
			this._st_cookies.installRecords = this._st_cookies.installRecords || {},
			this._installRecordObjects = this._st_cookies.installRecords,
			this._installRecords = {},
			t.each(this._installRecordObjects, function (t, r) {
				var i = new n.InstallRecord.fromObject(r);
				e._installRecords[i.hashcode()] = i
			});
			if (this._installKey) {
				var i = new n.InstallRecord.fromInstallKey(this._installKey);
				this._installRecords[i.hashcode()] = this._installRecords[i.hashcode()] || i,
				this._activeInstallRecord = this._installRecords[i.hashcode()]
			} else
				this._activeInstallRecord = this._getLastActiveInstallRecord()
		},
		i.getVersion = function () {
			return this._version
		},
		i.getCookieVersion = function () {
			return this._st_cookies.version
		},
		i.trackQueryForActiveInstall = function (e) {
			this._activeInstallRecord.registerQuery(e),
			this._save()
		},
		i.trackClickForActiveInstall = function (e, t) {
			this._activeInstallRecord.registerClickForQuery(e, t),
			this._save()
		},
		i.getActiveInstallRecord = function () {
			return this._activeInstallRecord
		},
		i._getInstallRecords = function () {
			return this._installRecords
		},
		i._toObject = function () {
			var e = {};
			e.version = this._version;
			var n = {};
			return t.each(this._installRecords, function (e, t) {
				n[e] = t.toObject()
			}),
			e.installRecords = n,
			e
		},
		i._save = function () {
			return this._enforceMaximumCookieSize() ? (r.set(this._cookieName, this._toObject(), this._options()), !0) : !1
		},
		i._enforceMaximumCookieSize = function () {
			var e = !0;
			while (this._currentStringifiedCookieSizeInBytes() > this._maximumByteSize)
				if (!this._removeOldestQuery()) {
					e = !1;
					break
				}
			return e
		},
		i._removeOldestQuery = function () {
			var e = this._getInstallWithOldestLastQueryExecutionTime();
			return e ? e.removeOldestQuery() : !1
		},
		i._currentStringifiedCookieSizeInBytes = function () {
			var e = r.cookieStringOnly(this._cookieName, this._toObject(), this._options());
			return encodeURI(e).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1
		},
		i._migrateCookieVersion = function (e, t) {
			r.remove(this._cookieName, this._options())
		},
		i._options = function () {
			return {
				expires : this._expires,
				path : this._path
			}
		},
		i._getInstallRecordObjects = function () {
			return this._st_cookies.installRecords = this._st_cookies.installRecords || {},
			this._st_cookies.installRecords
		},
		i._getInstallWithOldestLastQueryExecutionTime = function () {
			var e = null;
			return t.each(this._getInstallRecords(), function (t, n) {
				e === null ? e = n : n.getLastQueryExecutionTime() < e.getLastQueryExecutionTime() && (e = n)
			}),
			e
		},
		i._getLastActiveInstallRecord = function () {
			var e = null;
			return t.each(this._getInstallRecords(), function (t, n) {
				e === null ? e = n : n.getLastQueryExecutionTime() > e.getLastQueryExecutionTime() && (e = n)
			}),
			e
		},
		i._resetFromCookie = function () {
			this._initializeFromCookie()
		},
		i._deleteCookieAndReset = function () {
			r.remove(this._cookieName, this._options),
			this._resetFromCookie()
		}
	}
	(window, jQuery),
	function () {
		"use strict";
		function e(e) {
			var t = Array.prototype.slice.call(arguments, 1),
			n,
			r,
			i,
			s;
			for (n = 0, r = t.length; n < r; n += 1) {
				i = t[n];
				if (!i)
					continue;
				for (s in i)
					u.call(i, s) && (e[s] = i[s])
			}
			return e
		}
		function t(e, t, n) {
			this.locales = e,
			this.formats = t,
			this.pluralFn = n
		}
		function n(e) {
			this.id = e
		}
		function r(e, t, n, r) {
			this.id = e,
			this.offset = t,
			this.options = n,
			this.pluralFn = r
		}
		function i(e, t, n, r) {
			this.id = e,
			this.offset = t,
			this.numberFormat = n,
			this.string = r
		}
		function s(e, t) {
			this.id = e,
			this.options = t
		}
		function o(e, t, n) {
			var r = typeof e == "string" ? o.__parse(e) : e;
			if (!r || r.type !== "messageFormatPattern")
				throw new TypeError("A message must be provided as a String or AST.");
			n = this._mergeFormats(o.formats, n),
			l(this, "_locale", {
				value : this._resolveLocale(t)
			});
			var i = o.__localeData__[this._locale].pluralRuleFunction,
			s = this._compilePattern(r, t, n, i),
			u = this;
			this.format = function (e) {
				return u._format(s, e)
			}
		}
		var u = Object.prototype.hasOwnProperty,
		a = function () {
			try {
				return !!Object.defineProperty({}, "a", {})
			} catch (e) {
				return !1
			}
		}
		(),
		f = !a && !Object.prototype.__defineGetter__,
		l = a ? Object.defineProperty : function (e, t, n) {
			if ("get" in n && e.__defineGetter__)
				e.__defineGetter__(t, n.get);
			else if (!u.call(e, t) || "value" in n)
				e[t] = n.value
		},
		c = Object.create || function (e, t) {
			function n() {}

			var r,
			i;
			n.prototype = e,
			r = new n;
			for (i in t)
				u.call(t, i) && l(r, i, t[i]);
			return r
		},
		h = t;
		t.prototype.compile = function (e) {
			return this.pluralStack = [],
			this.currentPlural = null,
			this.pluralNumberFormat = null,
			this.compileMessage(e)
		},
		t.prototype.compileMessage = function (e) {
			if (!e || e.type !== "messageFormatPattern")
				throw new Error('Message AST is not of type: "messageFormatPattern"');
			var t = e.elements,
			n = [],
			r,
			i,
			s;
			for (r = 0, i = t.length; r < i; r += 1) {
				s = t[r];
				switch (s.type) {
				case "messageTextElement":
					n.push(this.compileMessageText(s));
					break;
				case "argumentElement":
					n.push(this.compileArgument(s));
					break;
				default:
					throw new Error("Message element does not have a valid type")
				}
			}
			return n
		},
		t.prototype.compileMessageText = function (e) {
			return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new i(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, "#")
		},
		t.prototype.compileArgument = function (e) {
			var t = e.format;
			if (!t)
				return new n(e.id);
			var i = this.formats,
			o = this.locales,
			u = this.pluralFn,
			a;
			switch (t.type) {
			case "numberFormat":
				return a = i.number[t.style], {
					id : e.id,
					format : (new Intl.NumberFormat(o, a)).format
				};
			case "dateFormat":
				return a = i.date[t.style], {
					id : e.id,
					format : (new Intl.DateTimeFormat(o, a)).format
				};
			case "timeFormat":
				return a = i.time[t.style], {
					id : e.id,
					format : (new Intl.DateTimeFormat(o, a)).format
				};
			case "pluralFormat":
				return a = this.compileOptions(e),
				new r(e.id, t.offset, a, u);
			case "selectFormat":
				return a = this.compileOptions(e),
				new s(e.id, a);
			default:
				throw new Error("Message element does not have a valid format type")
			}
		},
		t.prototype.compileOptions = function (e) {
			var t = e.format,
			n = t.options,
			r = {};
			this.pluralStack.push(this.currentPlural),
			this.currentPlural = t.type === "pluralFormat" ? e : null;
			var i,
			s,
			o;
			for (i = 0, s = n.length; i < s; i += 1)
				o = n[i], r[o.selector] = this.compileMessage(o.value);
			return this.currentPlural = this.pluralStack.pop(),
			r
		},
		n.prototype.format = function (e) {
			return e ? typeof e == "string" ? e : String(e) : ""
		},
		r.prototype.getOption = function (e) {
			var t = this.options,
			n = t["=" + e] || t[this.pluralFn(e - this.offset)];
			return n || t.other
		},
		i.prototype.format = function (e) {
			var t = this.numberFormat.format(e - this.offset);
			return this.string.replace(/(^|[^\\])#/g, "$1" + t).replace(/\\#/g, "#")
		},
		s.prototype.getOption = function (e) {
			var t = this.options;
			return t[e] || t.other
		};
		var p = function () {
			function e(e, t) {
				function n() {
					this.constructor = e
				}
				n.prototype = t.prototype,
				e.prototype = new n
			}
			function t(e, t, n, r, i, s) {
				this.message = e,
				this.expected = t,
				this.found = n,
				this.offset = r,
				this.line = i,
				this.column = s,
				this.name = "SyntaxError"
			}
			function n(e) {
				function n() {
					return e.substring(Xt, Wt)
				}
				function r() {
					return Xt
				}
				function i() {
					return a(Xt).line
				}
				function s() {
					return a(Xt).column
				}
				function o(e) {
					throw l(null, [{
								type : "other",
								description : e
							}
						], Xt)
				}
				function u(e) {
					throw l(e, null, Xt)
				}
				function a(t) {
					function n(t, n, r) {
						var i,
						s;
						for (i = n; i < r; i++)
							s = e.charAt(i), s === "\n" ? (t.seenCR || t.line++, t.column = 1, t.seenCR = !1) : s === "\r" || s === "\u2028" || s === "\u2029" ? (t.line++, t.column = 1, t.seenCR = !0) : (t.column++, t.seenCR = !1)
					}
					return Vt !== t && (Vt > t && (Vt = 0, $t = {
								line : 1,
								column : 1,
								seenCR : !1
							}), n($t, Vt, t), Vt = t),
					$t
				}
				function f(e) {
					if (Wt < Jt)
						return;
					Wt > Jt && (Jt = Wt, Kt = []),
					Kt.push(e)
				}
				function l(n, r, i) {
					function s(e) {
						var t = 1;
						e.sort(function (e, t) {
							return e.description < t.description ? -1 : e.description > t.description ? 1 : 0
						});
						while (t < e.length)
							e[t - 1] === e[t] ? e.splice(t, 1) : t++
					}
					function o(e, t) {
						function n(e) {
							function t(e) {
								return e.charCodeAt(0).toString(16).toUpperCase()
							}
							return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
								return "\\x0" + t(e)
							}).replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
								return "\\x" + t(e)
							}).replace(/[\u0180-\u0FFF]/g, function (e) {
								return "\\u0" + t(e)
							}).replace(/[\u1080-\uFFFF]/g, function (e) {
								return "\\u" + t(e)
							})
						}
						var r = new Array(e.length),
						i,
						s,
						o;
						for (o = 0; o < e.length; o++)
							r[o] = e[o].description;
						return i = e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0],
						s = t ? '"' + n(t) + '"' : "end of input",
						"Expected " + i + " but " + s + " found."
					}
					var u = a(i),
					f = i < e.length ? e.charAt(i) : null;
					return r !== null && s(r),
					new t(n !== null ? n : o(r, f), r, f, i, u.line, u.column)
				}
				function c() {
					var e;
					return e = h(),
					e
				}
				function h() {
					var e,
					t,
					n;
					e = Wt,
					t = [],
					n = p();
					while (n !== D)
						t.push(n), n = p();
					return t !== D && (Xt = e, t = j(t)),
					e = t,
					e
				}
				function p() {
					var e;
					return e = v(),
					e === D && (e = g()),
					e
				}
				function d() {
					var t,
					n,
					r,
					i,
					s,
					o;
					t = Wt,
					n = [],
					r = Wt,
					i = C(),
					i !== D ? (s = M(), s !== D ? (o = C(), o !== D ? (i = [i, s, o], r = i) : (Wt = r, r = F)) : (Wt = r, r = F)) : (Wt = r, r = F);
					if (r !== D)
						while (r !== D)
							n.push(r), r = Wt, i = C(), i !== D ? (s = M(), s !== D ? (o = C(), o !== D ? (i = [i, s, o], r = i) : (Wt = r, r = F)) : (Wt = r, r = F)) : (Wt = r, r = F);
					else
						n = F;
					return n !== D && (Xt = t, n = I(n)),
					t = n,
					t === D && (t = Wt, n = N(), n !== D && (n = e.substring(t, Wt)), t = n),
					t
				}
				function v() {
					var e,
					t;
					return e = Wt,
					t = d(),
					t !== D && (Xt = e, t = q(t)),
					e = t,
					e
				}
				function m() {
					var t,
					n,
					r;
					t = A();
					if (t === D) {
						t = Wt,
						n = [],
						R.test(e.charAt(Wt)) ? (r = e.charAt(Wt), Wt++) : (r = D, Qt === 0 && f(U));
						if (r !== D)
							while (r !== D)
								n.push(r), R.test(e.charAt(Wt)) ? (r = e.charAt(Wt), Wt++) : (r = D, Qt === 0 && f(U));
						else
							n = F;
						n !== D && (n = e.substring(t, Wt)),
						t = n
					}
					return t
				}
				function g() {
					var t,
					n,
					r,
					i,
					s,
					o,
					u,
					a,
					l;
					return t = Wt,
					e.charCodeAt(Wt) === 123 ? (n = z, Wt++) : (n = D, Qt === 0 && f(W)),
					n !== D ? (r = C(), r !== D ? (i = m(), i !== D ? (s = C(), s !== D ? (o = Wt, e.charCodeAt(Wt) === 44 ? (u = V, Wt++) : (u = D, Qt === 0 && f($)), u !== D ? (a = C(), a !== D ? (l = y(), l !== D ? (u = [u, a, l], o = u) : (Wt = o, o = F)) : (Wt = o, o = F)) : (Wt = o, o = F), o === D && (o = X), o !== D ? (u = C(), u !== D ? (e.charCodeAt(Wt) === 125 ? (a = J, Wt++) : (a = D, Qt === 0 && f(K)), a !== D ? (Xt = t, n = Q(i, o), t = n) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F),
					t
				}
				function y() {
					var e;
					return e = b(),
					e === D && (e = w(), e === D && (e = E())),
					e
				}
				function b() {
					var t,
					n,
					r,
					i,
					s,
					o,
					u;
					return t = Wt,
					e.substr(Wt, 6) === G ? (n = G, Wt += 6) : (n = D, Qt === 0 && f(Y)),
					n === D && (e.substr(Wt, 4) === Z ? (n = Z, Wt += 4) : (n = D, Qt === 0 && f(et)), n === D && (e.substr(Wt, 4) === tt ? (n = tt, Wt += 4) : (n = D, Qt === 0 && f(nt)))),
					n !== D ? (r = C(), r !== D ? (i = Wt, e.charCodeAt(Wt) === 44 ? (s = V, Wt++) : (s = D, Qt === 0 && f($)), s !== D ? (o = C(), o !== D ? (u = M(), u !== D ? (s = [s, o, u], i = s) : (Wt = i, i = F)) : (Wt = i, i = F)) : (Wt = i, i = F), i === D && (i = X), i !== D ? (Xt = t, n = rt(n, i), t = n) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F),
					t
				}
				function w() {
					var t,
					n,
					r,
					i,
					s,
					o,
					u,
					a,
					l;
					t = Wt,
					e.substr(Wt, 6) === it ? (n = it, Wt += 6) : (n = D, Qt === 0 && f(st));
					if (n !== D) {
						r = C();
						if (r !== D) {
							e.charCodeAt(Wt) === 44 ? (i = V, Wt++) : (i = D, Qt === 0 && f($));
							if (i !== D) {
								s = C();
								if (s !== D) {
									o = T(),
									o === D && (o = X);
									if (o !== D) {
										u = C();
										if (u !== D) {
											a = [],
											l = x();
											if (l !== D)
												while (l !== D)
													a.push(l), l = x();
											else
												a = F;
											a !== D ? (Xt = t, n = ot(o, a), t = n) : (Wt = t, t = F)
										} else
											Wt = t, t = F
									} else
										Wt = t, t = F
								} else
									Wt = t, t = F
							} else
								Wt = t, t = F
						} else
							Wt = t, t = F
					} else
						Wt = t, t = F;
					return t
				}
				function E() {
					var t,
					n,
					r,
					i,
					s,
					o,
					u;
					t = Wt,
					e.substr(Wt, 6) === ut ? (n = ut, Wt += 6) : (n = D, Qt === 0 && f(at));
					if (n !== D) {
						r = C();
						if (r !== D) {
							e.charCodeAt(Wt) === 44 ? (i = V, Wt++) : (i = D, Qt === 0 && f($));
							if (i !== D) {
								s = C();
								if (s !== D) {
									o = [],
									u = x();
									if (u !== D)
										while (u !== D)
											o.push(u), u = x();
									else
										o = F;
									o !== D ? (Xt = t, n = ft(o), t = n) : (Wt = t, t = F)
								} else
									Wt = t, t = F
							} else
								Wt = t, t = F
						} else
							Wt = t, t = F
					} else
						Wt = t, t = F;
					return t
				}
				function S() {
					var t,
					n,
					r,
					i;
					return t = Wt,
					n = Wt,
					e.charCodeAt(Wt) === 61 ? (r = lt, Wt++) : (r = D, Qt === 0 && f(ct)),
					r !== D ? (i = A(), i !== D ? (r = [r, i], n = r) : (Wt = n, n = F)) : (Wt = n, n = F),
					n !== D && (n = e.substring(t, Wt)),
					t = n,
					t === D && (t = M()),
					t
				}
				function x() {
					var t,
					n,
					r,
					i,
					s,
					o,
					u,
					a,
					l;
					return t = Wt,
					n = C(),
					n !== D ? (r = S(), r !== D ? (i = C(), i !== D ? (e.charCodeAt(Wt) === 123 ? (s = z, Wt++) : (s = D, Qt === 0 && f(W)), s !== D ? (o = C(), o !== D ? (u = h(), u !== D ? (a = C(), a !== D ? (e.charCodeAt(Wt) === 125 ? (l = J, Wt++) : (l = D, Qt === 0 && f(K)), l !== D ? (Xt = t, n = ht(r, u), t = n) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F),
					t
				}
				function T() {
					var t,
					n,
					r,
					i;
					return t = Wt,
					e.substr(Wt, 7) === pt ? (n = pt, Wt += 7) : (n = D, Qt === 0 && f(dt)),
					n !== D ? (r = C(), r !== D ? (i = A(), i !== D ? (Xt = t, n = vt(i), t = n) : (Wt = t, t = F)) : (Wt = t, t = F)) : (Wt = t, t = F),
					t
				}
				function N() {
					var t,
					n;
					Qt++,
					t = [],
					gt.test(e.charAt(Wt)) ? (n = e.charAt(Wt), Wt++) : (n = D, Qt === 0 && f(yt));
					if (n !== D)
						while (n !== D)
							t.push(n), gt.test(e.charAt(Wt)) ? (n = e.charAt(Wt), Wt++) : (n = D, Qt === 0 && f(yt));
					else
						t = F;
					return Qt--,
					t === D && (n = D, Qt === 0 && f(mt)),
					t
				}
				function C() {
					var t,
					n,
					r;
					Qt++,
					t = Wt,
					n = [],
					r = N();
					while (r !== D)
						n.push(r), r = N();
					return n !== D && (n = e.substring(t, Wt)),
					t = n,
					Qt--,
					t === D && (n = D, Qt === 0 && f(bt)),
					t
				}
				function k() {
					var t;
					return wt.test(e.charAt(Wt)) ? (t = e.charAt(Wt), Wt++) : (t = D, Qt === 0 && f(Et)),
					t
				}
				function L() {
					var t;
					return St.test(e.charAt(Wt)) ? (t = e.charAt(Wt), Wt++) : (t = D, Qt === 0 && f(xt)),
					t
				}
				function A() {
					var t,
					n,
					r,
					i,
					s,
					o;
					t = Wt,
					e.charCodeAt(Wt) === 48 ? (n = Tt, Wt++) : (n = D, Qt === 0 && f(Nt));
					if (n === D) {
						n = Wt,
						r = Wt,
						Ct.test(e.charAt(Wt)) ? (i = e.charAt(Wt), Wt++) : (i = D, Qt === 0 && f(kt));
						if (i !== D) {
							s = [],
							o = k();
							while (o !== D)
								s.push(o), o = k();
							s !== D ? (i = [i, s], r = i) : (Wt = r, r = F)
						} else
							Wt = r, r = F;
						r !== D && (r = e.substring(n, Wt)),
						n = r
					}
					return n !== D && (Xt = t, n = Lt(n)),
					t = n,
					t
				}
				function O() {
					var t,
					n,
					r,
					i,
					s,
					o,
					u,
					a;
					return At.test(e.charAt(Wt)) ? (t = e.charAt(Wt), Wt++) : (t = D, Qt === 0 && f(Ot)),
					t === D && (t = Wt, e.substr(Wt, 2) === Mt ? (n = Mt, Wt += 2) : (n = D, Qt === 0 && f(_t)), n !== D && (Xt = t, n = Dt()), t = n, t === D && (t = Wt, e.substr(Wt, 2) === Pt ? (n = Pt, Wt += 2) : (n = D, Qt === 0 && f(Ht)), n !== D && (Xt = t, n = Bt()), t = n, t === D && (t = Wt, e.substr(Wt, 2) === jt ? (n = jt, Wt += 2) : (n = D, Qt === 0 && f(Ft)), n !== D && (Xt = t, n = It()), t = n, t === D && (t = Wt, e.substr(Wt, 2) === qt ? (n = qt, Wt += 2) : (n = D, Qt === 0 && f(Rt)), n !== D ? (r = Wt, i = Wt, s = L(), s !== D ? (o = L(), o !== D ? (u = L(), u !== D ? (a = L(), a !== D ? (s = [s, o, u, a], i = s) : (Wt = i, i = F)) : (Wt = i, i = F)) : (Wt = i, i = F)) : (Wt = i, i = F), i !== D && (i = e.substring(r, Wt)), r = i, r !== D ? (Xt = t, n = Ut(r), t = n) : (Wt = t, t = F)) : (Wt = t, t = F))))),
					t
				}
				function M() {
					var e,
					t,
					n;
					e = Wt,
					t = [],
					n = O();
					if (n !== D)
						while (n !== D)
							t.push(n), n = O();
					else
						t = F;
					return t !== D && (Xt = e, t = zt(t)),
					e = t,
					e
				}
				var _ = arguments.length > 1 ? arguments[1] : {},
				D = {},
				P = {
					start : c
				},
				H = c,
				B = [],
				j = function (e) {
					return {
						type : "messageFormatPattern",
						elements : e
					}
				},
				F = D,
				I = function (e) {
					var t = "",
					n,
					r,
					i,
					s,
					o;
					for (n = 0, i = e.length; n < i; n += 1) {
						s = e[n];
						for (r = 0, o = s.length; r < o; r += 1)
							t += s[r]
					}
					return t
				},
				q = function (e) {
					return {
						type : "messageTextElement",
						value : e
					}
				},
				R = /^[^ \t\n\r,.+={}#]/,
				U = {
					type : "class",
					value : "[^ \\t\\n\\r,.+={}#]",
					description : "[^ \\t\\n\\r,.+={}#]"
				},
				z = "{",
				W = {
					type : "literal",
					value : "{",
					description : '"{"'
				},
				X = null,
				V = ",",
				$ = {
					type : "literal",
					value : ",",
					description : '","'
				},
				J = "}",
				K = {
					type : "literal",
					value : "}",
					description : '"}"'
				},
				Q = function (e, t) {
					return {
						type : "argumentElement",
						id : e,
						format : t && t[2]
					}
				},
				G = "number",
				Y = {
					type : "literal",
					value : "number",
					description : '"number"'
				},
				Z = "date",
				et = {
					type : "literal",
					value : "date",
					description : '"date"'
				},
				tt = "time",
				nt = {
					type : "literal",
					value : "time",
					description : '"time"'
				},
				rt = function (e, t) {
					return {
						type : e + "Format",
						style : t && t[2]
					}
				},
				it = "plural",
				st = {
					type : "literal",
					value : "plural",
					description : '"plural"'
				},
				ot = function (e, t) {
					return {
						type : "pluralFormat",
						offset : e || 0,
						options : t
					}
				},
				ut = "select",
				at = {
					type : "literal",
					value : "select",
					description : '"select"'
				},
				ft = function (e) {
					return {
						type : "selectFormat",
						options : e
					}
				},
				lt = "=",
				ct = {
					type : "literal",
					value : "=",
					description : '"="'
				},
				ht = function (e, t) {
					return {
						type : "optionalFormatPattern",
						selector : e,
						value : t
					}
				},
				pt = "offset:",
				dt = {
					type : "literal",
					value : "offset:",
					description : '"offset:"'
				},
				vt = function (e) {
					return e
				},
				mt = {
					type : "other",
					description : "whitespace"
				},
				gt = /^[ \t\n\r]/,
				yt = {
					type : "class",
					value : "[ \\t\\n\\r]",
					description : "[ \\t\\n\\r]"
				},
				bt = {
					type : "other",
					description : "optionalWhitespace"
				},
				wt = /^[0-9]/,
				Et = {
					type : "class",
					value : "[0-9]",
					description : "[0-9]"
				},
				St = /^[0-9a-f]/i,
				xt = {
					type : "class",
					value : "[0-9a-f]i",
					description : "[0-9a-f]i"
				},
				Tt = "0",
				Nt = {
					type : "literal",
					value : "0",
					description : '"0"'
				},
				Ct = /^[1-9]/,
				kt = {
					type : "class",
					value : "[1-9]",
					description : "[1-9]"
				},
				Lt = function (e) {
					return parseInt(e, 10)
				},
				At = /^[^{}\\\0-\x1F \t\n\r]/,
				Ot = {
					type : "class",
					value : "[^{}\\\\\\0-\\x1F \\t\\n\\r]",
					description : "[^{}\\\\\\0-\\x1F \\t\\n\\r]"
				},
				Mt = "\\#",
				_t = {
					type : "literal",
					value : "\\#",
					description : '"\\\\#"'
				},
				Dt = function () {
					return "\\#"
				},
				Pt = "\\{",
				Ht = {
					type : "literal",
					value : "\\{",
					description : '"\\\\{"'
				},
				Bt = function () {
					return "{"
				},
				jt = "\\}",
				Ft = {
					type : "literal",
					value : "\\}",
					description : '"\\\\}"'
				},
				It = function () {
					return "}"
				},
				qt = "\\u",
				Rt = {
					type : "literal",
					value : "\\u",
					description : '"\\\\u"'
				},
				Ut = function (e) {
					return String.fromCharCode(parseInt(e, 16))
				},
				zt = function (e) {
					return e.join("")
				},
				Wt = 0,
				Xt = 0,
				Vt = 0,
				$t = {
					line : 1,
					column : 1,
					seenCR : !1
				},
				Jt = 0,
				Kt = [],
				Qt = 0,
				Gt;
				if ("startRule" in _) {
					if (!(_.startRule in P))
						throw new Error("Can't start parsing from rule \"" + _.startRule + '".');
					H = P[_.startRule]
				}
				Gt = H();
				if (Gt !== D && Wt === e.length)
					return Gt;
				throw Gt !== D && Wt < e.length && f({
					type : "end",
					description : "end of input"
				}),
				l(null, Kt, Jt)
			}
			return e(t, Error), {
				SyntaxError : t,
				parse : n
			}
		}
		(),
		d = o;
		l(o, "formats", {
			enumerable : !0,
			value : {
				number : {
					currency : {
						style : "currency"
					},
					percent : {
						style : "percent"
					}
				},
				date : {
					"short" : {
						month : "numeric",
						day : "numeric",
						year : "2-digit"
					},
					medium : {
						month : "short",
						day : "numeric",
						year : "numeric"
					},
					"long" : {
						month : "long",
						day : "numeric",
						year : "numeric"
					},
					full : {
						weekday : "long",
						month : "long",
						day : "numeric",
						year : "numeric"
					}
				},
				time : {
					"short" : {
						hour : "numeric",
						minute : "numeric"
					},
					medium : {
						hour : "numeric",
						minute : "numeric",
						second : "numeric"
					},
					"long" : {
						hour : "numeric",
						minute : "numeric",
						second : "numeric",
						timeZoneName : "short"
					},
					full : {
						hour : "numeric",
						minute : "numeric",
						second : "numeric",
						timeZoneName : "short"
					}
				}
			}
		}),
		l(o, "__localeData__", {
			value : c(null)
		}),
		l(o, "__addLocaleData", {
			value : function (e) {
				if (!e || !e.locale)
					throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
				if (!e.pluralRuleFunction)
					throw new Error("Locale data provided to IntlMessageFormat is missing a `pluralRuleFunction` property");
				var t = e.locale.toLowerCase().split("-")[0];
				o.__localeData__[t] = e
			}
		}),
		l(o, "__parse", {
			value : p.parse
		}),
		l(o, "defaultLocale", {
			enumerable : !0,
			writable : !0,
			value : undefined
		}),
		o.prototype.resolvedOptions = function () {
			return {
				locale : this._locale
			}
		},
		o.prototype._compilePattern = function (e, t, n, r) {
			var i = new h(t, n, r);
			return i.compile(e)
		},
		o.prototype._format = function (e, t) {
			var n = "",
			r,
			i,
			s,
			o,
			a;
			for (r = 0, i = e.length; r < i; r += 1) {
				s = e[r];
				if (typeof s == "string") {
					n += s;
					continue
				}
				o = s.id;
				if (!t || !u.call(t, o))
					throw new Error("A value must be provided for: " + o);
				a = t[o],
				s.options ? n += this._format(s.getOption(a), t) : n += s.format(a)
			}
			return n
		},
		o.prototype._mergeFormats = function (t, n) {
			var r = {},
			i,
			s;
			for (i in t) {
				if (!u.call(t, i))
					continue;
				r[i] = s = c(t[i]),
				n && u.call(n, i) && e(s, n[i])
			}
			return r
		},
		o.prototype._resolveLocale = function (e) {
			e || (e = o.defaultLocale),
			typeof e == "string" && (e = [e]);
			var t = o.__localeData__,
			n,
			r,
			i;
			for (n = 0, r = e.length; n < r; n += 1) {
				i = e[n].split("-")[0].toLowerCase();
				if (!/[a-z]{2,3}/.test(i))
					throw new Error("Language tag provided to IntlMessageFormat is not structrually valid: " + i);
				if (u.call(t, i))
					return i
			}
			throw new Error("No locale data has been added to IntlMessageFormat for: " + e.join(", "))
		};
		var v = {
			locale : "en",
			pluralRuleFunction : function (e) {
				var t = Math.floor(Math.abs(e)),
				n = e.toString().replace(/^[^.]*\.?/, "").length;
				return e = Math.floor(e),
				t === 1 && n === 0 ? "one" : "other"
			}
		};
		d.__addLocaleData(v),
		d.defaultLocale = "en";
		var m = d;
		this.IntlMessageFormat = m
	}
	.call(this),
	IntlMessageFormat.__addLocaleData({
		locale : "af",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ak",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === Math.floor(e) && e >= 0 && e <= 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "am",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ar",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 0 ? "zero" : e === 1 ? "one" : e === 2 ? "two" : e % 100 === Math.floor(e % 100) && e % 100 >= 3 && e % 100 <= 10 ? "few" : e % 100 === Math.floor(e % 100) && e % 100 >= 11 && e % 100 <= 99 ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "as",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "asa",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ast",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "az",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "be",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e % 10 === 1 && e % 100 !== 11 ? "one" : e % 10 === Math.floor(e % 10) && e % 10 >= 2 && e % 10 <= 4 && !(e % 100 >= 12 && e % 100 <= 14) ? "few" : e % 10 === 0 || e % 10 === Math.floor(e % 10) && e % 10 >= 5 && e % 10 <= 9 || e % 100 === Math.floor(e % 100) && e % 100 >= 11 && e % 100 <= 14 ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "bem",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "bez",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "bg",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "bm",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "bn",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "bo",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "br",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e % 10 === 1 && e % 100 !== 11 && e % 100 !== 71 && e % 100 !== 91 ? "one" : e % 10 === 2 && e % 100 !== 12 && e % 100 !== 72 && e % 100 !== 92 ? "two" : e % 10 !== Math.floor(e % 10) || !(e % 10 >= 3 && e % 10 <= 4 || e % 10 === 9) || e % 100 >= 10 && e % 100 <= 19 || e % 100 >= 70 && e % 100 <= 79 || e % 100 >= 90 && e % 100 <= 99 ? e !== 0 && e % 1e6 === 0 ? "many" : "other" : "few"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "brx",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "bs",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length,
			r = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
			return e = Math.floor(e),
			n === 0 && t % 10 === 1 && (t % 100 !== 11 || r % 10 === 1 && r % 100 !== 11) ? "one" : n === 0 && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && (!(t % 100 >= 12 && t % 100 <= 14) || r % 10 === Math.floor(r % 10) && r % 10 >= 2 && r % 10 <= 4 && !(r % 100 >= 12 && r % 100 <= 14)) ? "few" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ca",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "cgg",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "chr",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "cs",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : t === Math.floor(t) && t >= 2 && t <= 4 && n === 0 ? "few" : n !== 0 ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "cy",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 0 ? "zero" : e === 1 ? "one" : e === 2 ? "two" : e === 3 ? "few" : e === 6 ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "da",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = parseInt(e.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
			return e = Math.floor(e),
			e === 1 || n !== 0 && (t === 0 || t === 1) ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "de",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "dz",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ee",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "el",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "en",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "eo",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "es",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "et",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "eu",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "fa",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ff",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || t === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "fi",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "fil",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length,
			r = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
			return e = Math.floor(e),
			n === 0 && (t === 1 || t === 2 || t === 3 || n === 0 && (t % 10 !== 4 && t % 10 !== 6 && t % 10 !== 9 || n !== 0 && r % 10 !== 4 && r % 10 !== 6 && r % 10 !== 9)) ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "fo",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "fr",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || t === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "fur",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "fy",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ga",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : e === 2 ? "two" : e === Math.floor(e) && e >= 3 && e <= 6 ? "few" : e === Math.floor(e) && e >= 7 && e <= 10 ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "gd",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 || e === 11 ? "one" : e === 2 || e === 12 ? "two" : e === Math.floor(e) && (e >= 3 && e <= 10 || e >= 13 && e <= 19) ? "few" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "gl",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "gsw",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "gu",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "gv",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			n === 0 && t % 10 === 1 ? "one" : n === 0 && t % 10 === 2 ? "two" : n !== 0 || t % 100 !== 0 && t % 100 !== 20 && t % 100 !== 40 && t % 100 !== 60 && t % 100 !== 80 ? n !== 0 ? "many" : "other" : "few"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ha",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "haw",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "he",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : t === 2 && n === 0 ? "two" : n !== 0 || e >= 0 && e <= 10 || e % 10 !== 0 ? "other" : "many"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "hi",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "hr",
		pluralRuleFunction : function (
			e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length,
			r = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
			return e = Math.floor(e),
			n === 0 && t % 10 === 1 && (t % 100 !== 11 || r % 10 === 1 && r % 100 !== 11) ? "one" : n === 0 && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && (!(t % 100 >= 12 && t % 100 <= 14) || r % 10 === Math.floor(r % 10) && r % 10 >= 2 && r % 10 <= 4 && !(r % 100 >= 12 && r % 100 <= 14)) ? "few" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "hu",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "hy",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || t === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "id",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ig",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ii",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "is",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = parseInt(e.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
			return e = Math.floor(e),
			n !== 0 || t % 10 !== 1 || t % 100 === 11 && n === 0 ? "other" : "one"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "it",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ja",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "jgo",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "jmc",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ka",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "kab",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || t === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "kde",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "kea",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "kk",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "kkj",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "kl",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "km",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "kn",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ko",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ks",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ksb",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ksh",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 0 ? "zero" : e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "kw",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : e === 2 ? "two" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ky",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "lag",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			e === 0 ? "zero" : t !== 0 && t !== 1 || e === 0 ? "other" : "one"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "lg",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "lkt",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ln",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === Math.floor(e) && e >= 0 && e <= 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "lo",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "lt",
		pluralRuleFunction : function (e) {
			var t = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
			return e = Math.floor(e),
			e % 10 !== 1 || e % 100 >= 11 && e % 100 <= 19 ? e % 10 === Math.floor(e % 10) && e % 10 >= 2 && e % 10 <= 9 && !(e % 100 >= 11 && e % 100 <= 19) ? "few" : t !== 0 ? "many" : "other" : "one"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "lv",
		pluralRuleFunction : function (e) {
			var t = e.toString().replace(/^[^.]*\.?/, "").length,
			n = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
			return e = Math.floor(e),
			e % 10 === 0 || e % 100 === Math.floor(e % 100) && e % 100 >= 11 && e % 100 <= 19 || t === 2 && n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ? "zero" : e % 10 === 1 && (e % 100 !== 11 || t === 2 && n % 10 === 1 && (n % 100 !== 11 || t !== 2 && n % 10 === 1)) ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "mas",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "mg",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === Math.floor(e) && e >= 0 && e <= 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "mgo",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "mk",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length,
			r = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
			return e = Math.floor(e),
			n !== 0 || t % 10 !== 1 && r % 10 !== 1 ? "other" : "one"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ml",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "mn",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "mr",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ms",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "mt",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : e === 0 || e % 100 === Math.floor(e % 100) && e % 100 >= 2 && e % 100 <= 10 ? "few" : e % 100 === Math.floor(e % 100) && e % 100 >= 11 && e % 100 <= 19 ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "my",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "naq",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : e === 2 ? "two" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "nb",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "nd",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ne",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "nl",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "nn",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "nnh",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "nr",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "nso",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === Math.floor(e) && e >= 0 && e <= 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "nyn",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "om",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "or",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "os",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "pa",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === Math.floor(e) && e >= 0 && e <= 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "pl",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : n === 0 && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && !(t % 100 >= 12 && t % 100 <= 14) ? "few" : n === 0 && t !== 1 && (t % 10 === Math.floor(t % 10) && t % 10 >= 0 && t % 10 <= 1 || n === 0 && (t % 10 === Math.floor(t % 10) && t % 10 >= 5 && t % 10 <= 9 || n === 0 && t % 100 === Math.floor(t % 100) && t % 100 >= 12 && t % 100 <= 14)) ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ps",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "pt",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length,
			r = parseInt(e.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
			return e = Math.floor(e),
			t === 1 && (n === 0 || t === 0 && r === 1) ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "rm",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ro",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : n !== 0 || e === 0 || e !== 1 && e % 100 === Math.floor(e % 100) && e % 100 >= 1 && e % 100 <= 19 ? "few" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "rof",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ru",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			n === 0 && t % 10 === 1 && t % 100 !== 11 ? "one" : n === 0 && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && !(t % 100 >= 12 && t % 100 <= 14) ? "few" : n === 0 && (t % 10 === 0 || n === 0 && (t % 10 === Math.floor(t % 10) && t % 10 >= 5 && t % 10 <= 9 || n === 0 && t % 100 === Math.floor(t % 100) && t % 100 >= 11 && t % 100 <= 14)) ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "rwk",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sah",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "saq",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "se",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : e === 2 ? "two" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "seh",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ses",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sg",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "shi",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : e === Math.floor(e) && e >= 2 && e <= 10 ? "few" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "si",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
			return e = Math.floor(e),
			e === 0 || e === 1 || t === 0 && n === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sk",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : t === Math.floor(t) && t >= 2 && t <= 4 && n === 0 ? "few" : n !== 0 ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sl",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			n === 0 && t % 100 === 1 ? "one" : n === 0 && t % 100 === 2 ? "two" : n === 0 && (t % 100 === Math.floor(t % 100) && t % 100 >= 3 && t % 100 <= 4 || n !== 0) ? "few" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sn",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "so",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sq",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sr",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length,
			r = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
			return e = Math.floor(e),
			n === 0 && t % 10 === 1 && (t % 100 !== 11 || r % 10 === 1 && r % 100 !== 11) ? "one" : n === 0 && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && (!(t % 100 >= 12 && t % 100 <= 14) || r % 10 === Math.floor(r % 10) && r % 10 >= 2 && r % 10 <= 4 && !(r % 100 >= 12 && r % 100 <= 14)) ? "few" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ss",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ssy",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "st",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sv",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "sw",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ta",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "te",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "teo",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "th",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ti",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === Math.floor(e) && e >= 0 && e <= 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "tig",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "tn",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "to",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "tr",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ts",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "tzm",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === Math.floor(e) && e >= 0 && e <= 1 || e === Math.floor(e) && e >= 11 && e <= 99 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ug",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "uk",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			n === 0 && t % 10 === 1 && t % 100 !== 11 ? "one" : n === 0 && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && !(t % 100 >= 12 && t % 100 <= 14) ? "few" : n === 0 && (t % 10 === 0 || n === 0 && (t % 10 === Math.floor(t % 10) && t % 10 >= 5 && t % 10 <= 9 || n === 0 && t % 100 === Math.floor(t % 100) && t % 100 >= 11 && t % 100 <= 14)) ? "many" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ur",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e)),
			n = e.toString().replace(/^[^.]*\.?/, "").length;
			return e = Math.floor(e),
			t === 1 && n === 0 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "uz",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "ve",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "vi",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "vo",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "vun",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "wae",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "xh",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "xog",
		pluralRuleFunction : function (e) {
			return e = Math.floor(e),
			e === 1 ? "one" : "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "yo",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "zh",
		pluralRuleFunction : function (e) {
			return "other"
		}
	}),
	IntlMessageFormat.__addLocaleData({
		locale : "zu",
		pluralRuleFunction : function (e) {
			var t = Math.floor(Math.abs(e));
			return e = Math.floor(e),
			t === 0 || e === 1 ? "one" : "other"
		}
	}),
	function (e, t, n, r, i) {
		var s = 0,
		o = function () {
			var t = r.userAgent,
			n = /msie\s\d+/i;
			return 0 < t.search(n) && (t = n.exec(t).toString(), t = t.split(" ")[1], 9 > t) ? (e("html").addClass("lt-ie9"), !0) : !1
		}
		();
		Function.prototype.bind || (Function.prototype.bind = function (e) {
			var t = this,
			n = [].slice;
			if ("function" != typeof t)
				throw new TypeError;
			var r = n.call(arguments, 1),
			i = function () {
				if (this instanceof i) {
					var s = function () {};
					s.prototype = t.prototype;
					var s = new s,
					o = t.apply(s, r.concat(n.call(arguments)));
					return Object(o) === o ? o : s
				}
				return t.apply(e, r.concat(n.call(arguments)))
			};
			return i
		}),
		Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
			var n;
			if (null == this)
				throw new TypeError('"this" is null or not defined');
			var r = Object(this),
			i = r.length >>> 0;
			if (0 === i)
				return -1;
			n = +t || 0,
			Infinity === Math.abs(n) && (n = 0);
			if (n >= i)
				return -1;
			for (n = Math.max(0 <= n ? n : i - Math.abs(n), 0); n < i; ) {
				if (n in r && r[n] === e)
					return n;
				n++
			}
			return -1
		});
		var u = function (r, i, s) {
			this.VERSION = "2.0.7",
			this.input = r,
			this.plugin_count = s,
			this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0,
			this.raf_id = null,
			this.is_update = this.is_key = this.force_redraw = this.dragging = !1,
			this.is_start = !0,
			this.is_click = this.is_resize = this.is_active = !1,
			this.$cache = {
				win : e(n),
				body : e(t.body),
				input : e(r),
				cont : null,
				rs : null,
				min : null,
				max : null,
				from : null,
				to : null,
				single : null,
				bar : null,
				line : null,
				s_single : null,
				s_from : null,
				s_to : null,
				shad_single : null,
				shad_from : null,
				shad_to : null,
				grid : null,
				grid_labels : []
			},
			s = this.$cache.input,
			r = {
				type : s.data("type"),
				min : s.data("min"),
				max : s.data("max"),
				from : s.data("from"),
				to : s.data("to"),
				step : s.data("step"),
				min_interval : s.data("minInterval"),
				max_interval : s.data("maxInterval"),
				drag_interval : s.data("dragInterval"),
				values : s.data("values"),
				from_fixed : s.data("fromFixed"),
				from_min : s.data("fromMin"),
				from_max : s.data("fromMax"),
				from_shadow : s.data("fromShadow"),
				to_fixed : s.data("toFixed"),
				to_min : s.data("toMin"),
				to_max : s.data("toMax"),
				to_shadow : s.data("toShadow"),
				prettify_enabled : s.data("prettifyEnabled"),
				prettify_separator : s.data("prettifySeparator"),
				force_edges : s.data("forceEdges"),
				keyboard : s.data("keyboard"),
				keyboard_step : s.data("keyboardStep"),
				grid : s.data("grid"),
				grid_margin : s.data("gridMargin"),
				grid_num : s.data("gridNum"),
				grid_snap : s.data("gridSnap"),
				hide_min_max : s.data("hideMinMax"),
				hide_from_to : s.data("hideFromTo"),
				prefix : s.data("prefix"),
				postfix : s.data("postfix"),
				max_postfix : s.data("maxPostfix"),
				decorate_both : s.data("decorateBoth"),
				values_separator : s.data("valuesSeparator"),
				disable : s.data("disable")
			},
			r.values = r.values && r.values.split(","),
			i = e.extend(r, i);
			if (s = s.prop("value"))
				s = s.split(";"), s[0] && s[0] == +s[0] && (s[0] = +s[0]), s[1] && s[1] == +s[1] && (s[1] = +s[1]), i.values && i.values.length ? (r.from = s[0] && i.values.indexOf(s[0]), r.to = s[1] && i.values.indexOf(s[1])) : (r.from = s[0] && +s[0], r.to = s[1] && +s[1]);
			this.options = e.extend({
					type : "single",
					min : 10,
					max : 100,
					from : null,
					to : null,
					step : 1,
					min_interval : 0,
					max_interval : 0,
					drag_interval : !1,
					values : [],
					p_values : [],
					from_fixed : !1,
					from_min : null,
					from_max : null,
					from_shadow : !1,
					to_fixed : !1,
					to_min : null,
					to_max : null,
					to_shadow : !1,
					prettify_enabled : !0,
					prettify_separator : " ",
					prettify : null,
					force_edges : !1,
					keyboard : !1,
					keyboard_step : 5,
					grid : !1,
					grid_margin : !0,
					grid_num : 4,
					grid_snap : !1,
					hide_min_max : !1,
					hide_from_to : !1,
					prefix : "",
					postfix : "",
					max_postfix : "",
					decorate_both : !0,
					values_separator : " — ",
					disable : !1,
					onStart : null,
					onChange : null,
					onFinish : null,
					onUpdate : null
				}, i),
			this.validate(),
			this.result = {
				input : this.$cache.input,
				slider : null,
				min : this.options.min,
				max : this.options.max,
				from : this.options.from,
				from_percent : 0,
				from_value : null,
				to : this.options.to,
				to_percent : 0,
				to_value : null
			},
			this.coords = {
				x_gap : 0,
				x_pointer : 0,
				w_rs : 0,
				w_rs_old : 0,
				w_handle : 0,
				p_gap : 0,
				p_gap_left : 0,
				p_gap_right : 0,
				p_step : 0,
				p_pointer : 0,
				p_handle : 0,
				p_single : 0,
				p_single_real : 0,
				p_from : 0,
				p_from_real : 0,
				p_to : 0,
				p_to_real : 0,
				p_bar_x : 0,
				p_bar_w : 0,
				grid_gap : 0,
				big_num : 0,
				big : [],
				big_w : [],
				big_p : [],
				big_x : []
			},
			this.labels = {
				w_min : 0,
				w_max : 0,
				w_from : 0,
				w_to : 0,
				w_single : 0,
				p_min : 0,
				p_max : 0,
				p_from : 0,
				p_from_left : 0,
				p_to : 0,
				p_to_left : 0,
				p_single : 0,
				p_single_left : 0
			},
			this.init()
		};
		u.prototype = {
			init : function (e) {
				this.coords.p_step = this.options.step / ((this.options.max - this.options.min) / 100),
				this.target = "base",
				this.toggleInput(),
				this.append(),
				this.setMinMax(),
				e ? (this.force_redraw = !0, this.calc(!0), this.options.onUpdate && "function" == typeof this.options.onUpdate) && this.options.onUpdate(this.result) : (this.force_redraw = !0, this.calc(!0), this.options.onStart && "function" == typeof this.options.onStart) && this.options.onStart(this.result),
				this.updateScene()
			},
			append : function () {
				this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + '"></span>'),
				this.$cache.input.prop("readonly", !0),
				this.$cache.cont = this.$cache.input.prev(),
				this.result.slider = this.$cache.cont,
				this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'),
				this.$cache.rs = this.$cache.cont.find(".irs"),
				this.$cache.min = this.$cache.cont.find(".irs-min"),
				this.$cache.max = this.$cache.cont.find(".irs-max"),
				this.$cache.from = this.$cache.cont.find(".irs-from"),
				this.$cache.to = this.$cache.cont.find(".irs-to"),
				this.$cache.single = this.$cache.cont.find(".irs-single"),
				this.$cache.bar = this.$cache.cont.find(".irs-bar"),
				this.$cache.line = this.$cache.cont.find(".irs-line"),
				this.$cache.grid = this.$cache.cont.find(".irs-grid"),
				"single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
				this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"),
				this.appendGrid(),
				this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.cont.removeClass("irs-disabled"), this.$cache.input[0].disabled = !1, this.bindEvents())
			},
			appendDisableMask : function () {
				this.$cache.cont.append('<span class="irs-disable-mask"></span>'),
				this.$cache.cont.addClass("irs-disabled")
			},
			remove : function () {
				this.$cache.cont.remove(),
				this.$cache.cont = null,
				this.$cache.line.off("keydown.irs_" + this.plugin_count),
				this.$cache.body.off("touchmove.irs_" + this.plugin_count),
				this.$cache.body.off("mousemove.irs_" + this.plugin_count),
				this.$cache.win.off("touchend.irs_" + this.plugin_count),
				this.$cache.win.off("mouseup.irs_" + this.plugin_count),
				o && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
				this.$cache.grid_labels = [],
				this.coords.big = [],
				this.coords.big_w = [],
				this.coords.big_p = [],
				this.coords.big_x = [],
				cancelAnimationFrame(this.raf_id)
			},
			bindEvents : function () {
				this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
				this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
				this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)),
				this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)),
				this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
				this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
				this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
				"single" === this.options.type ? (this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
				this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")),
				o && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)))
			},
			pointerMove : function (e) {
				this.dragging && (this.coords.x_pointer = (e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
			},
			pointerUp : function (t) {
				if (this.current_plugin === this.plugin_count && this.is_active) {
					this.is_active = !1;
					var n = this.options.onFinish && "function" == typeof this.options.onFinish;
					t = e.contains(this.$cache.cont[0], t.target) || this.dragging,
					n && t && this.options.onFinish(this.result),
					this.$cache.cont.find(".state_hover").removeClass("state_hover"),
					this.force_redraw = !0,
					this.dragging = !1,
					o && e("*").prop("unselectable", !1),
					this.updateScene()
				}
			},
			pointerDown : function (t, n) {
				n.preventDefault();
				var r = n.pageX || n.originalEvent.touches && n.originalEvent.touches[0].pageX;
				if (2 !== n.button) {
					this.current_plugin = this.plugin_count,
					this.target = t,
					this.dragging = this.is_active = !0,
					this.coords.x_gap = this.$cache.rs.offset().left,
					this.coords.x_pointer = r - this.coords.x_gap,
					this.calcPointer();
					switch (t) {
					case "single":
						this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single);
						break;
					case "from":
						this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from),
						this.$cache.s_from.addClass("state_hover"),
						this.$cache.s_from.addClass("type_last"),
						this.$cache.s_to.removeClass("type_last");
						break;
					case "to":
						this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to),
						this.$cache.s_to.addClass("state_hover"),
						this.$cache.s_to.addClass("type_last"),
						this.$cache.s_from.removeClass("type_last");
						break;
					case "both":
						this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from),
						this.coords.p_gap_right = this.toFixed(this.coords.p_to - this.coords.p_pointer),
						this.$cache.s_to.removeClass("type_last"),
						this.$cache.s_from.removeClass("type_last")
					}
					o && e("*").prop("unselectable", !0),
					this.$cache.line.trigger("focus"),
					this.updateScene()
				}
			},
			pointerClick : function (e, t) {
				t.preventDefault();
				var n = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
				2 !== t.button && (this.current_plugin = this.plugin_count, this.target = e, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer =  + (n - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
			},
			key : function (e, t) {
				if (!(this.current_plugin !== this.plugin_count || t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)) {
					switch (t.which) {
					case 83:
					case 65:
					case 40:
					case 37:
						t.preventDefault(),
						this.moveByKey(!1);
						break;
					case 87:
					case 68:
					case 38:
					case 39:
						t.preventDefault(),
						this.moveByKey(!0)
					}
					return !0
				}
			},
			moveByKey : function (e) {
				var t = this.coords.p_pointer,
				t = e ? t + this.options.keyboard_step : t - this.options.keyboard_step;
				this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * t),
				this.is_key = !0,
				this.calc()
			},
			setMinMax : function () {
				this.options && (this.options.hide_min_max ? (this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none") : (this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)))
			},
			calc : function (e) {
				if (this.options) {
					this.calc_count++;
					if (10 === this.calc_count || e)
						this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1);
					if (this.coords.w_rs) {
						this.calcPointer(),
						this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100),
						e = 100 - this.coords.p_handle;
						var t = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
						"click" === this.target && (t = this.toFixed(this.coords.p_pointer - this.coords.p_handle / 2), this.target = this.chooseHandle(t)),
						0 > t ? t = 0 : t > e && (t = e);
						switch (this.target) {
						case "base":
							t = (this.options.max - this.options.min) / 100,
							e = (this.result.from - this.options.min) / t,
							t = (this.result.to - this.options.min) / t,
							this.coords.p_single_real = this.toFixed(e),
							this.coords.p_from_real = this.toFixed(e),
							this.coords.p_to_real = this.toFixed(t),
							this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max),
							this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max),
							this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max),
							this.coords.p_single = this.toFixed(e - this.coords.p_handle / 100 * e),
							this.coords.p_from = this.toFixed(e - this.coords.p_handle / 100 * e),
							this.coords.p_to = this.toFixed(t - this.coords.p_handle / 100 * t),
							this.target = null;
							break;
						case "single":
							if (this.options.from_fixed)
								break;
							this.coords.p_single_real = this.calcWithStep(t / e * 100),
							this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max),
							this.coords.p_single = this.toFixed(this.coords.p_single_real / 100 * e);
							break;
						case "from":
							if (this.options.from_fixed)
								break;
							this.coords.p_from_real = this.calcWithStep(t / e * 100),
							this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real),
							this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max),
							this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"),
							this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"),
							this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * e);
							break;
						case "to":
							if (this.options.to_fixed)
								break;
							this.coords.p_to_real = this.calcWithStep(t / e * 100),
							this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real),
							this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max),
							this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"),
							this.coords
							.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"),
							this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * e);
							break;
						case "both":
							if (this.options.from_fixed || this.options.to_fixed)
								break;
							t = this.toFixed(t + .1 * this.coords.p_handle),
							this.coords.p_from_real = this.calcWithStep((t - this.coords.p_gap_left) / e * 100),
							this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max),
							this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"),
							this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * e),
							this.coords.p_to_real = this.calcWithStep((t + this.coords.p_gap_right) / e * 100),
							this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max),
							this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"),
							this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * e)
						}
						"single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single, this.result.from_percent = this.coords.p_single_real, this.result.from = this.calcReal(this.coords.p_single_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to - this.coords.p_from), this.result.from_percent = this.coords.p_from_real, this.result.from = this.calcReal(this.coords.p_from_real), this.result.to_percent = this.coords.p_to_real, this.result.to = this.calcReal(this.coords.p_to_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])),
						this.calcMinMax(),
						this.calcLabels()
					}
				}
			},
			calcPointer : function () {
				this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
			},
			chooseHandle : function (e) {
				return "single" === this.options.type ? "single" : e >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
			},
			calcMinMax : function () {
				this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
			},
			calcLabels : function () {
				this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single + this.coords.p_handle / 2 - this.labels.p_single / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from + this.coords.p_handle / 2 - this.labels.p_from / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to + this.coords.p_handle / 2 - this.labels.p_to / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to) / 2 - this.labels.p_single / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single))
			},
			updateScene : function () {
				this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null),
				clearTimeout(this.update_tm),
				this.update_tm = null,
				this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
			},
			drawHandles : function () {
				this.coords.w_rs = this.$cache.rs.outerWidth(!1);
				if (this.coords.w_rs) {
					this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0);
					if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw)
						this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow();
					if (this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key)) {
						if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {
							this.drawLabels(),
							this.$cache.bar[0].style.left = this.coords.p_bar_x + "%",
							this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";
							if ("single" === this.options.type)
								this.$cache.s_single[0].style.left = this.coords.p_single + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? (this.$cache.input.prop("value", this.result.from_value), this.$cache.input.data("from", this.result.from_value)) : (this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from));
							else {
								this.$cache.s_from[0].style.left = this.coords.p_from + "%",
								this.$cache.s_to[0].style.left = this.coords.p_to + "%";
								if (this.old_from !== this.result.from || this.force_redraw)
									this.$cache.from[0].style.left = this.labels.p_from_left + "%";
								if (this.old_to !== this.result.to || this.force_redraw)
									this.$cache.to[0].style.left = this.labels.p_to_left + "%";
								this.$cache.single[0].style.left = this.labels.p_single_left + "%",
								this.options.values.length ? (this.$cache.input.prop("value", this.result.from_value + ";" + this.result.to_value), this.$cache.input.data("from", this.result.from_value), this.$cache.input.data("to", this.result.to_value)) : (this.$cache.input.prop("value", this.result.from + ";" + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
							}
							this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || this.$cache.input.trigger("change"),
							this.old_from = this.result.from,
							this.old_to = this.result.to,
							this.options.onChange && "function" == typeof this.options.onChange && !this.is_resize && !this.is_update && !this.is_start && this.options.onChange(this.result),
							this.options.onFinish && "function" == typeof this.options.onFinish && (this.is_key || this.is_click) && this.options.onFinish(this.result),
							this.is_resize = this.is_update = !1
						}
						this.force_redraw = this.is_click = this.is_key = this.is_start = !1
					}
				}
			},
			drawLabels : function () {
				if (this.options) {
					var e = this.options.values.length,
					t = this.options.p_values,
					n;
					if (!this.options.hide_from_to)
						if ("single" === this.options.type)
							e = e ? this.decorate(t[this.result.from]) : this.decorate(this._prettify(this.result.from), this.result.from), this.$cache.single.html(e), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
						else {
							e ? (this.options.decorate_both ? (e = this.decorate(t[this.result.from]), e += this.options.values_separator, e += this.decorate(t[this.result.to])) : e = this.decorate(t[this.result.from] + this.options.values_separator + t[this.result.to]), n = this.decorate(t[this.result.from]), t = this.decorate(t[this.result.to])) : (this.options.decorate_both ? (e = this.decorate(this._prettify(this.result.from)), e += this.options.values_separator, e += this.decorate(this._prettify(this.result.to))) : e = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.from), n = this.decorate(this._prettify(this.result.from), this.result.from), t = this.decorate(this._prettify(this.result.to), this.result.to)),
							this.$cache.single.html(e),
							this.$cache.from.html(n),
							this.$cache.to.html(t),
							this.calcLabels(),
							t = Math.min(this.labels.p_single_left, this.labels.p_from_left),
							e = this.labels.p_single_left + this.labels.p_single,
							n = this.labels.p_to_left + this.labels.p_to;
							var r = Math.max(e, n);
							this.labels.p_from_left + this.labels.p_from >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? (this.$cache.from[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden", r = n) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", r = Math.max(e, n))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"),
							this.$cache.min[0].style.visibility = t < this.labels.p_min + 1 ? "hidden" : "visible",
							this.$cache.max[0].style.visibility = r > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
						}
				}
			},
			drawShadow : function () {
				var e = this.options,
				t = this.$cache,
				n = "number" == typeof e.from_min && !isNaN(e.from_min),
				r = "number" == typeof e.from_max && !isNaN(e.from_max),
				i = "number" == typeof e.to_min && !isNaN(e.to_min),
				s = "number" == typeof e.to_max && !isNaN(e.to_max);
				"single" === e.type ? e.from_shadow && (n || r) ? (n = this.calcPercent(e.from_min || e.min), r = this.calcPercent(e.from_max || e.max) - n, n = this.toFixed(n - this.coords.p_handle / 100 * n), r = this.toFixed(r - this.coords.p_handle / 100 * r), n += this.coords.p_handle / 2, t.shad_single[0].style.display = "block", t.shad_single[0].style.left = n + "%", t.shad_single[0].style.width = r + "%") : t.shad_single[0].style.display = "none" : (e.from_shadow && (n || r) ? (n = this.calcPercent(e.from_min || e.min), r = this.calcPercent(e.from_max || e.max) - n, n = this.toFixed(n - this.coords.p_handle / 100 * n), r = this.toFixed(r - this.coords.p_handle / 100 * r), n += this.coords.p_handle / 2, t.shad_from[0].style.display = "block", t.shad_from[0].style.left = n + "%", t.shad_from[0].style.width = r + "%") : t.shad_from[0].style.display = "none", e.to_shadow && (i || s) ? (i = this.calcPercent(e.to_min || e.min), e = this.calcPercent(e.to_max || e.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), e = this.toFixed(e - this.coords.p_handle / 100 * e), i += this.coords.p_handle / 2, t.shad_to[0].style.display = "block", t.shad_to[0].style.left = i + "%", t.shad_to[0].style.width = e + "%") : t.shad_to[0].style.display = "none")
			},
			toggleInput : function () {
				this.$cache.input.toggleClass("irs-hidden-input")
			},
			calcPercent : function (e) {
				return this.toFixed((e - this.options.min) / ((this.options.max - this.options.min) / 100))
			},
			calcReal : function (e) {
				var t = this.options.min,
				n = this.options.max,
				r = 0;
				return 0 > t && (r = Math.abs(t), t += r, n += r),
				e = (n - t) / 100 * e + t,
				(t = this.options.step.toString().split(".")[1]) ? e = +e.toFixed(t.length) : (e /= this.options.step, e *= this.options.step, e = +e.toFixed(0)),
				r && (e -= r),
				e < this.options.min ? e = this.options.min : e > this.options.max && (e = this.options.max),
				t ? +e.toFixed(t.length) : this.toFixed(e)
			},
			calcWithStep : function (e) {
				var t = Math.round(e / this.coords.p_step) * this.coords.p_step;
				return 100 < t && (t = 100),
				100 === e && (t = 100),
				this.toFixed(t)
			},
			checkMinInterval : function (e, t, n) {
				var r = this.options;
				return r.min_interval ? (e = this.calcReal(e), t = this.calcReal(t), "from" === n ? t - e < r.min_interval && (e = t - r.min_interval) : e - t < r.min_interval && (e = t + r.min_interval), this.calcPercent(e)) : e
			},
			checkMaxInterval : function (e, t, n) {
				var r = this.options;
				return r.max_interval ? (e = this.calcReal(e), t = this.calcReal(t), "from" === n ? t - e > r.max_interval && (e = t - r.max_interval) : e - t > r.max_interval && (e = t + r.max_interval), this.calcPercent(e)) : e
			},
			checkDiapason : function (e, t, n) {
				e = this.calcReal(e);
				var r = this.options;
				return t && "number" == typeof t || (t = r.min),
				n && "number" == typeof n || (n = r.max),
				e < t && (e = t),
				e > n && (e = n),
				this.calcPercent(e)
			},
			toFixed : function (e) {
				return e = e.toFixed(5),
				+e
			},
			_prettify : function (e) {
				return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(e) : this.prettify(e) : e
			},
			prettify : function (e) {
				return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
			},
			checkEdges : function (e, t) {
				return this.options.force_edges ? (0 > e ? e = 0 : e > 100 - t && (e = 100 - t), this.toFixed(e)) : this.toFixed(e)
			},
			validate : function () {
				var e = this.options,
				t = this.result,
				n = e.values,
				r = n.length,
				i,
				s;
				"string" == typeof e.min && (e.min = +e.min),
				"string" == typeof e.max && (e.max = +e.max),
				"string" == typeof e.from && (e.from = +e.from),
				"string" == typeof e.to && (e.to = +e.to),
				"string" == typeof e.step && (e.step = +e.step),
				"string" == typeof e.from_min && (e.from_min = +e.from_min),
				"string" == typeof e.from_max && (e.from_max = +e.from_max),
				"string" == typeof e.to_min && (e.to_min = +e.to_min),
				"string" == typeof e.to_max && (e.to_max = +e.to_max),
				"string" == typeof e.keyboard_step && (e.keyboard_step = +e.keyboard_step),
				"string" == typeof e.grid_num && (e.grid_num = +e.grid_num),
				e.max <= e.min && (e.max = e.min ? 2 * e.min : e.min + 1, e.step = 1);
				if (r)
					for (e.p_values = [], e.min = 0, e.max = r - 1, e.step = 1, e.grid_num = e.max, e.grid_snap = !0, s = 0; s < r; s++)
						i = +n[s], isNaN(i) ? i = n[s] : (n[s] = i, i = this._prettify(i)), e.p_values.push(i);
				if ("number" != typeof e.from || isNaN(e.from))
					e.from = e.min;
				if ("number" != typeof e.to || isNaN(e.from))
					e.to = e.max;
				if (e.from < e.min || e.from > e.max)
					e.from = e.min;
				if (e.to > e.max || e.to < e.min)
					e.to = e.max;
				"double" === e.type && e.from > e.to && (e.from = e.to);
				if ("number" != typeof e.step || isNaN(e.step) || !e.step || 0 > e.step)
					e.step = 1;
				if ("number" != typeof e.keyboard_step || isNaN(e.keyboard_step) || !e.keyboard_step || 0 > e.keyboard_step)
					e.keyboard_step = 5;
				e.from_min && e.from < e.from_min && (e.from = e.from_min),
				e.from_max && e.from > e.from_max && (e.from = e.from_max),
				e.to_min && e.to < e.to_min && (e.to = e.to_min),
				e.to_max && e.from > e.to_max && (e.to = e.to_max);
				if (t) {
					t.min !== e.min && (t.min = e.min),
					t.max !== e.max && (t.max = e.max);
					if (t.from < t.min || t.from > t.max)
						t.from = e.from;
					if (t.to < t.min || t.to > t.max)
						t.to = e.to
				}
				if ("number" != typeof e.min_interval || isNaN(e.min_interval) || !e.min_interval || 0 > e.min_interval)
					e.min_interval = 0;
				if ("number" != typeof e.max_interval || isNaN(e.max_interval) || !e.max_interval || 0 > e.max_interval)
					e.max_interval = 0;
				e.min_interval && e.min_interval > e.max - e.min && (e.min_interval = e.max - e.min),
				e.max_interval && e.max_interval > e.max - e.min && (e.max_interval = e.max - e.min)
			},
			decorate : function (e, t) {
				var n = "",
				r = this.options;
				return r.prefix && (n += r.prefix),
				n += e,
				r.max_postfix && (r.values.length && e === r.p_values[r.max] ? (n += r.max_postfix, r.postfix && (n += " ")) : t === r.max && (n += r.max_postfix, r.postfix && (n += " "))),
				r.postfix && (n += r.postfix),
				n
			},
			updateFrom : function () {
				this.result.from = this.options.from,
				this.result.from_percent = this.calcPercent(this.result.from),
				this.options.values && (this.result.from_value = this.options.values[this.result.from])
			},
			updateTo : function () {
				this.result.to = this.options.to,
				this.result.to_percent = this.calcPercent(this.result.to),
				this.options.values && (this.result.to_value = this.options.values[this.result.to])
			},
			updateResult : function () {
				this.result.min = this.options.min,
				this.result.max = this.options.max,
				this.updateFrom(),
				this.updateTo()
			},
			appendGrid : function () {
				if (this.options.grid) {
					var e = this.options,
					t,
					n;
					t = e.max - e.min;
					var r = e.grid_num,
					i = 0,
					s = 0,
					o = 4,
					u,
					a,
					f = 0,
					l = "";
					this.calcGridMargin(),
					e.grid_snap ? (r = t / e.step, i = this.toFixed(e.step / (t / 100))) : i = this.toFixed(100 / r),
					4 < r && (o = 3),
					7 < r && (o = 2),
					14 < r && (o = 1),
					28 < r && (o = 0);
					for (t = 0; t < r + 1; t++) {
						u = o,
						s = this.toFixed(i * t),
						100 < s && (s = 100, u -= 2, 0 > u && (u = 0)),
						this.coords.big[t] = s,
						a = (s - i * (t - 1)) / (u + 1);
						for (n = 1; n <= u && 0 !== s; n++)
							f = this.toFixed(s - a * n), l += '<span class="irs-grid-pol small" style="left: ' + f + '%"></span>';
						l += '<span class="irs-grid-pol" style="left: ' + s + '%"></span>',
						f = this.calcReal(s),
						f = e.values.length ? e.p_values[f] : this._prettify(f),
						l += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + s + '%">' + f + "</span>"
					}
					this.coords.big_num = Math.ceil(r + 1),
					this.$cache.cont.addClass("irs-with-grid"),
					this.$cache.grid.html(l),
					this.cacheGridLabels()
				}
			},
			cacheGridLabels : function () {
				var e,
				t,
				n = this.coords.big_num;
				for (t = 0; t < n; t++)
					e = this.$cache.grid.find(".js-grid-text-" + t), this.$cache.grid_labels.push(e);
				this.calcGridLabels()
			},
			calcGridLabels : function () {
				var e,
				t;
				t = [];
				var n = [],
				r = this.coords.big_num;
				for (e = 0; e < r; e++)
					this.coords.big_w[e] = this.$cache.grid_labels[e].outerWidth(!1), this.coords.big_p[e] = this.toFixed(this.coords.big_w[e] / this.coords.w_rs * 100), this.coords.big_x[e] = this.toFixed(this.coords.big_p[e] / 2), t[e] = this.toFixed(this.coords.big[e] - this.coords.big_x[e]), n[e] = this.toFixed(t[e] + this.coords.big_p[e]);
				this.options.force_edges && (t[0] < -this.coords.grid_gap && (t[0] = -this.coords.grid_gap, n[0] = this.toFixed(t[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), n[r - 1] > 100 + this.coords.grid_gap && (n[r - 1] = 100 + this.coords.grid_gap, t[r - 1] = this.toFixed(n[r - 1] - this.coords.big_p[r - 1]), this.coords.big_x[r - 1] = this.toFixed(this.coords.big_p[r - 1] - this.coords.grid_gap))),
				this.calcGridCollision(2, t, n),
				this.calcGridCollision(4, t, n);
				for (e = 0; e < r; e++)
					t = this.$cache.grid_labels[e][0], t.style.marginLeft = -this.coords.big_x[e] + "%"
			},
			calcGridCollision : function (e, t, n) {
				var r,
				i,
				s,
				o = this.coords.big_num;
				for (r = 0; r < o; r += e) {
					i = r + e / 2;
					if (i >= o)
						break;
					s = this.$cache.grid_labels[i][0],
					s.style.visibility = n[r] <= t[i] ? "visible" : "hidden"
				}
			},
			calcGridMargin : function () {
				this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
			},
			update : function (t) {
				this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.options = e.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
			},
			reset : function () {
				this.input && (this.updateResult(), this.update())
			},
			destroy : function () {
				this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), e.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
			}
		},
		e.fn.ionRangeSlider = function (t) {
			return this.each(function () {
				e.data(this, "ionRangeSlider") || e.data(this, "ionRangeSlider", new u(this, t, s++))
			})
		},
		function () {
			for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !n.requestAnimationFrame; ++r)
				n.requestAnimationFrame = n[t[r] + "RequestAnimationFrame"], n.cancelAnimationFrame = n[t[r] + "CancelAnimationFrame"] || n[t[r] + "CancelRequestAnimationFrame"];
			n.requestAnimationFrame || (n.requestAnimationFrame = function (t, r) {
				var i = (new Date).getTime(),
				s = Math.max(0, 16 - (i - e)),
				o = n.setTimeout(function () {
						t(i + s)
					}, s);
				return e = i + s,
				o
			}),
			n.cancelAnimationFrame || (n.cancelAnimationFrame = function (e) {
				clearTimeout(e)
			})
		}
		()
	}
	(jQuery, document, window, navigator),
	function (e) {
		"use strict";
		function t(e) {
			return e.nodeName === "INPUT" && (e.type === "text" || e.type === "password") || e.nodeName === "TEXTAREA"
		}
		function n(n) {
			if (n.valueExtensions)
				return !0;
			if (!t(n))
				return !1;
			n.valueExtensions = {
				current : null
			};
			if (n.constructor && n.constructor.prototype) {
				var r = Object.getOwnPropertyDescriptor(n.constructor.prototype, "value");
				Object.defineProperty(n, "value", {
					get : function () {
						return r.get.call(this)
					},
					set : function (e) {
						n.valueExtensions.current = e,
						r.set.call(this, e)
					}
				})
			}
			return e(n).on("propertychange", a).on("dragend", function (e) {
				window.setTimeout(function () {
					a(e)
				}, 0)
			}),
			!0
		}
		function r() {
			var t = l;
			l = [];
			var n,
			r,
			i,
			s;
			for (i = 0, s = t.length; i < s; i += 1)
				n = t[i], r = n.value, n.valueExtensions.current !== r && (n.valueExtensions.current = r, e(n).trigger("textchange"))
		}
		function i(t) {
			f = t,
			e(f).on(c, a)
		}
		function s() {
			f && (e(f).off(c, a), f = null)
		}
		var o = document.createElement("input"),
		u = o.oninput !== undefined && (document.documentMode || 100) > 9;
		if (u) {
			e(document).on("input", function (t) {
				e(t.target).trigger("textchange")
			});
			return
		}
		var a = null,
		f = null,
		l = [],
		c = "keyup keydown";
		a = function (e) {
			var t = e.target;
			if (n(t) && t.valueExtensions.current !== t.value) {
				var i,
				s;
				for (i = 0, s = l.length; i < s; i += 1)
					if (l[i] === t)
						break;
				i >= s && (l.push(t), s === 0 && window.setTimeout(r, 0))
			}
		},
		e(document).on("focusin", function (e) {
			s(),
			n(e.target) && i(e.target)
		}).on("focusout", s).on("input", a).on("selectionchange", function (e) {
			if (document.selection) {
				var t = document.selection.createRange();
				if (t) {
					var n = t.parentElement();
					n && (e.target = n, a(e))
				}
			}
		})
	}
	(jQuery),
	function (e) {
		typeof define == "function" && define.amd ? define(["jquery"], e) : typeof exports == "object" ? module.exports = e(require("jquery")) : e(jQuery)
	}
	(function (e) {
		if (e.support.cors || !e.ajaxTransport || !window.XDomainRequest)
			return;
		var t = /^https?:\/\//i,
		n = /^get|post$/i,
		r = new RegExp("^" + location.protocol, "i");
		e.ajaxTransport("* text html xml json", function (i, s, o) {
			if (!i.crossDomain || !i.async || !n.test(i.type) || !t.test(i.url) || !r.test(i.url))
				return;
			var u = null;
			return {
				send : function (t, n) {
					var r = "",
					o = (s.dataType || "").toLowerCase();
					u = new XDomainRequest,
					/^\d+$/.test(s.timeout) && (u.timeout = s.timeout),
					u.ontimeout = function () {
						n(500, "timeout")
					},
					u.onload = function () {
						var t = "Content-Length: " + u.responseText.length + "\r\nContent-Type: " + u.contentType,
						r = {
							code : 200,
							message : "success"
						},
						i = {
							text : u.responseText
						};
						try {
							if (o === "html" || /text\/html/i.test(u.contentType))
								i.html = u.responseText;
							else if (o === "json" || o !== "text" && /\/json/i.test(u.contentType))
								try {
									i.json = e.parseJSON(u.responseText)
								} catch (s) {
									r.code = 500,
									r.message = "parseerror"
								}
							else if (o === "xml" || o !== "text" && /\/xml/i.test(u.contentType)) {
								var f = new ActiveXObject("Microsoft.XMLDOM");
								f.async = !1;
								try {
									f.loadXML(u.responseText)
								} catch (s) {
									f = undefined
								}
								if (!f || !f.documentElement || f.getElementsByTagName("parsererror").length)
									throw r.code = 500, r.message = "parseerror", "Invalid XML: " + u.responseText;
								i.xml = f
							}
						} catch (l) {
							throw l
						}
						finally {
							n(r.code, r.message, i, t)
						}
					},
					u.onprogress = function () {},
					u.onerror = function () {
						n(500, "error", {
							text : u.responseText
						})
					},
					s.data && (r = e.type(s.data) === "string" ? s.data : e.param(s.data)),
					u.open(i.type, i.url),
					u.send(r)
				},
				abort : function () {
					u && u.abort()
				}
			}
		})
	}),
	function (e) {
		Function.prototype.bind || (Function.prototype.bind = function (e) {
			if (typeof this != "function")
				throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			var t = Array.prototype.slice.call(arguments, 1),
			n = this,
			r = function () {},
			i = function () {
				return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
			};
			return r.prototype = this.prototype,
			i.prototype = new r,
			i
		}),
		Date.now = Date.now || function () {
			return  + (new Date)
		}
	}
	(jQuery),
	!function (e) {
		"use strict";
		function t() {}

		function n() {
			try {
				return document.activeElement
			} catch (e) {}

		}
		function r(e, t) {
			for (var n = 0, r = e.length; r > n; n++)
				if (e[n] === t)
					return !0;
			return !1
		}
		function i(e, t, n) {
			return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : void 0
		}
		function s(e, t) {
			var n;
			e.createTextRange ? (n = e.createTextRange(), n.move("character", t), n.select()) : e.selectionStart && (e.focus(), e.setSelectionRange(t, t))
		}
		function o(e, t) {
			try {
				return e.type = t,
				!0
			} catch (n) {
				return !1
			}
		}
		function u(e, t) {
			if (e && e.getAttribute(k))
				t(e);
			else
				for (var n, r = e ? e.getElementsByTagName("input") : I, i = e ? e.getElementsByTagName("textarea") : q, s = r ? r.length : 0, o = i ? i.length : 0, u = s + o, a = 0; u > a; a++)
					n = s > a ? r[a] : i[a - s], t(n)
		}
		function a(e) {
			u(e, l)
		}
		function f(e) {
			u(e, c)
		}
		function l(e, t) {
			var n = !!t && e.value !== t,
			r = e.value === e.getAttribute(k);
			if ((n || r) && "true" === e.getAttribute(L)) {
				e.removeAttribute(L),
				e.value = e.value.replace(e.getAttribute(k), ""),
				e.className = e.className.replace(C, "");
				var i = e.getAttribute(P);
				parseInt(i, 10) >= 0 && (e.setAttribute("maxLength", i), e.removeAttribute(P));
				var s = e.getAttribute(A);
				return s && (e.type = s),
				!0
			}
			return !1
		}
		function c(e) {
			var t = e.getAttribute(k);
			if ("" === e.value && t) {
				e.setAttribute(L, "true"),
				e.value = t,
				e.className += " " + N;
				var n = e.getAttribute(P);
				n || (e.setAttribute(P, e.maxLength), e.removeAttribute("maxLength"));
				var r = e.getAttribute(A);
				return r ? e.type = "text" : "password" === e.type && o(e, "text") && e.setAttribute(A, "password"),
				!0
			}
			return !1
		}
		function h(e) {
			return function () {
				R && e.value === e.getAttribute(k) && "true" === e.getAttribute(L) ? s(e, 0) : l(e)
			}
		}
		function p(e) {
			return function () {
				c(e)
			}
		}
		function d(e) {
			return function () {
				a(e)
			}
		}
		function v(e) {
			return function (t) {
				return E = e.value,
				"true" === e.getAttribute(L) && E === e.getAttribute(k) && r(x, t.keyCode) ? (t.preventDefault && t.preventDefault(), !1) : void 0
			}
		}
		function m(e) {
			return function () {
				l(e, E),
				"" === e.value && (e.blur(), s(e, 0))
			}
		}
		function g(e) {
			return function () {
				e === n() && e.value === e.getAttribute(k) && "true" === e.getAttribute(L) && s(e, 0)
			}
		}
		function y(e) {
			var t = e.form;
			t && "string" == typeof t && (t = document.getElementById(t), t.getAttribute(O) || (i(t, "submit", d(t)), t.setAttribute(O, "true"))),
			i(e, "focus", h(e)),
			i(e, "blur", p(e)),
			R && (i(e, "keydown", v(e)), i(e, "keyup", m(e)), i(e, "click", g(e))),
			e.setAttribute(M, "true"),
			e.setAttribute(k, X),
			(R || e !== n()) && c(e)
		}
		var b = document.createElement("input"),
		w = void 0 !== b.placeholder;
		if (e.Placeholders = {
				nativeSupport : w,
				disable : w ? t : a,
				enable : w ? t : f
			}, !w) {
			var E,
			S = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
			x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
			T = "#ccc",
			N = "placeholdersjs",
			C = new RegExp("(?:^|\\s)" + N + "(?!\\S)"),
			k = "data-placeholder-value",
			L = "data-placeholder-active",
			A = "data-placeholder-type",
			O = "data-placeholder-submit",
			M = "data-placeholder-bound",
			_ = "data-placeholder-focus",
			D = "data-placeholder-live",
			P = "data-placeholder-maxlength",
			H = 100,
			B = document.getElementsByTagName("head")[0],
			j = document.documentElement,
			F = e.Placeholders,
			I = document.getElementsByTagName("input"),
			q = document.getElementsByTagName("textarea"),
			R = "false" === j.getAttribute(_),
			U = "false" !== j.getAttribute(D),
			z = document.createElement("style");
			z.type = "text/css";
			var W = document.createTextNode("." + N + " {color:" + T + ";}");
			z.styleSheet ? z.styleSheet.cssText = W.nodeValue : z.appendChild(W),
			B.insertBefore(z, B.firstChild);
			for (var X, V, $ = 0, J = I.length + q.length; J > $; $++)
				V = $ < I.length ? I[$] : q[$ - I.length], X = V.attributes.placeholder, X && (X = X.nodeValue, X && r(S, V.type) && y(V));
			var K = setInterval(function () {
					for (var e = 0, t = I.length + q.length; t > e; e++)
						V = e < I.length ? I[e] : q[e - I.length], X = V.attributes.placeholder, X ? (X = X.nodeValue, X && r(S, V.type) && (V.getAttribute(M) || y(V), (X !== V.getAttribute(k) || "password" === V.type && !V.getAttribute(A)) && ("password" === V.type && !V.getAttribute(A) && o(V, "text") && V.setAttribute(A, "password"), V.value === V.getAttribute(k) && (V.value = X), V.setAttribute(k, X)))) : V.getAttribute(L) && (l(V), V.removeAttribute(k));
					U || clearInterval(K)
				}, H);
			i(e, "beforeunload", function () {
				F.disable()
			})
		}
	}
	(this);
	var Liquid = {
		author : "Matt McCray <darthapo@gmail.com>",
		version : "1.3.1",
		readTemplateFile : function (e) {
			throw "This liquid context does not allow includes."
		},
		registerFilters : function (e) {
			Liquid.Template.registerFilter(e)
		},
		parse : function (e) {
			return Liquid.Template.parse(e)
		}
	};
	Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
		for (var t = 0; t < this.length; t++)
			if (this[t] == e)
				return t;
		return -1
	}),
	Array.prototype.clear || (Array.prototype.clear = function () {
		this.length = 0
	}),
	Array.prototype.map || (Array.prototype.map = function (e) {
		var t = this.length;
		if (typeof e != "function")
			throw "Array.map requires first argument to be a function";
		var n = new Array(t),
		r = arguments[1];
		for (var i = 0; i < t; i++)
			i in this && (n[i] = e.call(r, this[i], i, this));
		return n
	}),
	Array.prototype.first || (Array.prototype.first = function () {
		return this[0]
	}),
	Array.prototype.last || (Array.prototype.last = function () {
		return this[this.length - 1]
	}),
	Array.prototype.flatten || (Array.prototype.flatten = function () {
		var e = this.length,
		t = [];
		for (var n = 0; n < e; n++)
			this[n]instanceof Array ? t = t.concat(this[n]) : t.push(this[n]);
		return t
	}),
	Array.prototype.each || (Array.prototype.each = function (e) {
		var t = this.length;
		if (typeof e != "function")
			throw "Array.each requires first argument to be a function";
		var n = arguments[1];
		for (var r = 0; r < t; r++)
			r in this && e.call(n, this[r], r, this);
		return null
	}),
	Array.prototype.include || (Array.prototype.include = function (e) {
		var t = this.length;
		return this.indexOf(e) >= 0
	}),
	String.prototype.capitalize || (String.prototype.capitalize = function () {
		return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase()
	}),
	String.prototype.strip || (String.prototype.strip = function () {
		return this.replace(/^\s+/, "").replace(/\s+$/, "")
	}),
	Liquid.extensions = {},
	Liquid.extensions.object = {},
	Liquid.extensions.object.update = function (e) {
		for (var t in e)
			this[t] = e[t];
		return this
	},
	Liquid.extensions.object.hasKey = function (e) {
		return !!this[e]
	},
	Liquid.extensions.object.hasValue = function (e) {
		for (var t in this)
			if (this[t] == e)
				return !0;
		return !1
	},
	function () {
		var e = !1,
		t = /xyz/.test(function () {
				xyz
			}) ? /\b_super\b/ : /.*/;
		this.Class = function () {},
		this.Class.extend = function (n) {
			function r() {
				!e && this.init && this.init.apply(this, arguments)
			}
			var i = this.prototype;
			e = !0;
			var s = new this;
			e = !1;
			for (var o in n)
				s[o] = typeof n[o] == "function" && typeof i[o] == "function" && t.test(n[o]) ? function (e, t) {
					return function () {
						var n = this._super;
						this._super = i[e];
						var r = t.apply(this, arguments);
						return this._super = n,
						r
					}
				}
			(o, n[o]) : n[o];
			return r.prototype = s,
			r.prototype.constructor = r,
			r.extend = arguments.callee,
			r
		}
	}
	.call(Liquid),
	Liquid.Tag = Liquid.Class.extend({
			init : function (e, t, n) {
				this.tagName = e,
				this.markup = t,
				this.nodelist = this.nodelist || [],
				this.parse(n)
			},
			parse : function (e) {},
			render : function (e) {
				return ""
			}
		}),
	Liquid.Block = Liquid.Tag.extend({
			init : function (e, t, n) {
				this.blockName = e,
				this.blockDelimiter = "end" + this.blockName,
				this._super(e, t, n)
			},
			parse : function (e) {
				this.nodelist || (this.nodelist = []),
				this.nodelist.clear();
				var t = e.shift();
				e.push("");
				while (e.length) {
					if (/^\{\%/.test(t)) {
						var n = t.match(/^\{\%\s*(\w+)\s*(.*)?\%\}$/);
						if (!n)
							throw "Tag '" + t + "' was not properly terminated with: %}";
						if (this.blockDelimiter == n[1]) {
							this.endTag();
							return
						}
						n[1]in Liquid.Template.tags ? this.nodelist.push(new Liquid.Template.tags[n[1]](n[1], n[2], e)) : this.unknownTag(n[1], n[2], e)
					} else  / ^ \ {
							 \ {
								/.test(t)?this.nodelist.push(this.createVariable(t)):this.nodelist.push(t);t=e.shift()}this.assertMissingDelimitation()},endTag:function(){},unknownTag:function(e,t,n){switch(e){case"else":throw this.blockName+" tag does not expect else tag";case"end":throw"'end' is not a valid delimiter for "+this.blockName+" tags. use "+this.blockDelimiter;default:throw"Unknown tag: "+e}},createVariable:function(e){var t=e.match(/^ \ {
									 \ {
										(. * ) \
									}
									 \
								}
								$ / );
								if (t)
									return new Liquid.Variable(t[1]);
								throw "Variable '" + e + "' was not properly terminated with: }}"
							},
							render : function (e) {
								return this.renderAll(this.nodelist, e)
							},
							renderAll : function (e, t) {
								return (e || []).map(function (e, n) {
									var r = "";
									try {
										r = e.render ? e.render(t) : e
									} catch (i) {
										r = t.handleError(i)
									}
									return r
								})
							},
							assertMissingDelimitation : function () {
								throw this.blockName + " tag was never closed"
							}
						}),
					Liquid.Document = Liquid.Block.extend({
							init : function (e) {
								this.blockDelimiter = [],
								this.parse(e)
							},
							assertMissingDelimitation : function () {}

						}),
					Liquid.Strainer = Liquid.Class.extend({
							init : function (e) {
								this.context = e
							},
							respondTo : function (e) {
								return e = e.toString(),
								e.match(/^__/) ? !1 : Liquid.Strainer.requiredMethods.include(e) ? !1 : e in this
							}
						}),
					Liquid.Strainer.filters = {},
					Liquid.Strainer.globalFilter = function (e) {
						for (var t in e)
							Liquid.Strainer.filters[t] = e[t]
					},
					Liquid.Strainer.requiredMethods = ["respondTo", "context"],
					Liquid.Strainer.create = function (e) {
						var t = new Liquid.Strainer(e);
						for (var n in Liquid.Strainer.filters)
							t[n] = Liquid.Strainer.filters[n];
						return t
					},
					Liquid.Context = Liquid.Class.extend({
							init : function (e, t, n) {
								this.scopes = [e ? e : {}

								],
								this.registers = t ? t : {},
								this.errors = [],
								this.rethrowErrors = n,
								this.strainer = Liquid.Strainer.create(this)
							},
							get : function (e) {
								return this.resolve(e)
							},
							set : function (e, t) {
								this.scopes[0][e] = t
							},
							hasKey : function (e) {
								return this.resolve(e) ? !0 : !1
							},
							push : function () {
								var e = {};
								return this.scopes.unshift(e),
								e
							},
							merge : function (e) {
								return Liquid.extensions.object.update.call(this.scopes[0], e)
							},
							pop : function () {
								if (this.scopes.length == 1)
									throw "Context stack error";
								return this.scopes.shift()
							},
							stack : function (e, t) {
								var n = null;
								this.push();
								try {
									n = e.apply(t ? t : this.strainer)
								}
								finally {
									this.pop()
								}
								return n
							},
							invoke : function (e, t) {
								if (this.strainer.respondTo(e)) {
									var n = this.strainer[e].apply(this.strainer, t);
									return n
								}
								return t.length == 0 ? null : t[0]
							},
							resolve : function (e) {
								switch (e) {
								case null:
								case "nil":
								case "null":
								case "":
									return null;
								case "true":
									return !0;
								case "false":
									return !1;
								case "blank":
								case "empty":
									return "";
								default:
									if (/^'(.*)'$/.test(e))
										return e.replace(/^'(.*)'$/, "$1");
									if (/^"(.*)"$/.test(e))
										return e.replace(/^"(.*)"$/, "$1");
									if (/^(\d+)$/.test(e))
										return parseInt(e.replace(/^(\d+)$/, "$1"));
									if (/^(\d[\d\.]+)$/.test(e))
										return parseFloat(e.replace(/^(\d[\d\.]+)$/, "$1"));
									if (/^\((\S+)\.\.(\S+)\)$/.test(e)) {
										var t = e.match(/^\((\S+)\.\.(\S+)\)$/),
										n = parseInt(t[1]),
										r = parseInt(t[2]),
										i = [];
										if (isNaN(n) || isNaN(r)) {
											n = t[1].charCodeAt(0),
											r = t[2].charCodeAt(0);
											var s = r - n + 1;
											for (var o = 0; o < s; o++)
												i.push(String.fromCharCode(o + n))
										} else {
											var s = r - n + 1;
											for (var o = 0; o < s; o++)
												i.push(o + n)
										}
										return i
									}
									var u = this.variable(e);
									return u
								}
							},
							findVariable : function (e) {
								for (var t = 0; t < this.scopes.length; t++) {
									var n = this.scopes[t];
									if (n && typeof n[e] != "undefined") {
										var r = n[e];
										return typeof r == "function" && (r = r.apply(this), n[e] = r),
										r && this._isObject(r) && "toLiquid" in r && (r = r.toLiquid()),
										r && this._isObject(r) && "setContext" in r && r.setContext(self),
										r
									}
								}
								return null
							},
							variable : function (e) {
								if (typeof e != "string")
									return null;
								var t = e.match(/\[[^\]]+\]|(?:[\w\-]\??)+/g),
								n = t.shift(),
								r = n.match(/^\[(.*)\]$/);
								r && (n = this.resolve(r[1]));
								var i = this.findVariable(n),
								s = this;
								return i && t.each(function (e) {
									var t = e.match(/^\[(.*)\]$/);
									if (t) {
										var e = s.resolve(t[1]);
										typeof i[e] == "function" &&
										(i[e] = i[e].apply(this)),
										i = i[e],
										s._isObject(i) && "toLiquid" in i && (i = i.toLiquid())
									} else {
										if ((s._isObject(i) || typeof i == "hash") && e in i) {
											var n = i[e];
											typeof n == "function" && (n = i[e] = n.apply(s)),
											s._isObject(n) && "toLiquid" in n ? i = n.toLiquid() : i = n
										} else if (/^\d+$/.test(e)) {
											var r = parseInt(e);
											typeof i[r] == "function" && (i[r] = i[r].apply(s)),
											s._isObject(i) && s._isObject(i[r]) && "toLiquid" in i[r] ? i = i[r].toLiquid() : i = i[r]
										} else {
											if (!i || typeof i[e] != "function" || !["length", "size", "first", "last"].include(e))
												return i = null;
											i = i[e].apply(e),
											"toLiquid" in i && (i = i.toLiquid())
										}
										s._isObject(i) && "setContext" in i && i.setContext(s)
									}
								}),
								i
							},
							addFilters : function (e) {
								e = e.flatten(),
								e.each(function (e) {
									if (!this._isObject(e))
										throw "Expected object but got: " + typeof e;
									this.strainer.addMethods(e)
								})
							},
							handleError : function (e) {
								this.errors.push(e);
								if (this.rethrowErrors)
									throw e;
								return "Liquid error: " + (e.message ? e.message : e.description ? e.description : e)
							},
							_isObject : function (e) {
								return e != null && typeof e == "object"
							}
						}),
					Liquid.Template = Liquid.Class.extend({
							init : function () {
								this.root = null,
								this.registers = {},
								this.assigns = {},
								this.errors = [],
								this.rethrowErrors = !1
							},
							parse : function (e) {
								return this.root = new Liquid.Document(Liquid.Template.tokenize(e)),
								this
							},
							render : function () {
								if (!this.root)
									return "";
								var e = {
									ctx : arguments[0],
									filters : arguments[1],
									registers : arguments[2]
								},
								t = null;
								e.ctx instanceof Liquid.Context ? (t = e.ctx, this.assigns = t.assigns, this.registers = t.registers) : (e.ctx && Liquid.extensions.object.update.call(this.assigns, e.ctx), e.registers && Liquid.extensions.object.update.call(this.registers, e.registers), t = new Liquid.Context(this.assigns, this.registers, this.rethrowErrors)),
								e.filters && t.addFilters(arg.filters);
								try {
									return this.root.render(t).join("")
								}
								finally {
									this.errors = t.errors
								}
							},
							renderWithErrors : function () {
								var e = this.rethrowErrors;
								this.rethrowErrors = !0;
								var t = this.render.apply(this, arguments);
								return this.rethrowErrors = e,
								t
							}
						}),
					Liquid.Template.tags = {},
					Liquid.Template.registerTag = function (e, t) {
						Liquid.Template.tags[e] = t
					},
					Liquid.Template.registerFilter = function (e) {
						Liquid.Strainer.globalFilter(e)
					},
					Liquid.Template.tokenize = function (e) {
						var t = e.split(/(\{\%.*?\%\}|\{\{.*?\}\}?)/);
						return t[0] == "" && t.shift(),
						t
					},
					Liquid.Template.parse = function (e) {
						return (new Liquid.Template).parse(e)
					},
					Liquid.Variable = Liquid.Class.extend({
							init : function (e) {
								this.markup = e,
								this.name = null,
								this.filters = [];
								var t = this,
								n = e.match(/\s*("[^"]+"|'[^']+'|[^\s,|]+)/);
								if (n) {
									this.name = n[1];
									var r = e.match(/\|\s*(.*)/);
									if (r) {
										var i = r[1].split(/\|/);
										i.each(function (e) {
											var n = e.match(/\s*(\w+)/);
											if (n) {
												var r = n[1],
												i = [];
												(e.match(/(?:[:|,]\s*)("[^"]+"|'[^']+'|[^\s,|]+)/g) || []).flatten().each(function (e) {
													var t = e.match(/^[\s|:|,]*(.*?)[\s]*$/);
													t && i.push(t[1])
												}),
												t.filters.push([r, i])
											}
										})
									}
								}
							},
							render : function (e) {
								if (this.name == null)
									return "";
								var t = e.get(this.name);
								return this.filters.each(function (n) {
									var r = n[0],
									i = (n[1] || []).map(function (t) {
										return e.get(t)
									});
									i.unshift(t),
									t = e.invoke(r, i)
								}),
								t
							}
						}),
					Liquid.Condition = Liquid.Class.extend({
							init : function (e, t, n) {
								this.left = e,
								this.operator = t,
								this.right = n,
								this.childRelation = null,
								this.childCondition = null,
								this.attachment = null
							},
							evaluate : function (e) {
								e = e || new Liquid.Context;
								var t = this.interpretCondition(this.left, this.right, this.operator, e);
								switch (this.childRelation) {
								case "or":
									return t || this.childCondition.evaluate(e);
								case "and":
									return t && this.childCondition.evaluate(e);
								default:
									return t
								}
							},
							or : function (e) {
								this.childRelation = "or",
								this.childCondition = e
							},
							and : function (e) {
								this.childRelation = "and",
								this.childCondition = e
							},
							attach : function (e) {
								return this.attachment = e,
								this.attachment
							},
							isElse : !1,
							interpretCondition : function (e, t, n, r) {
								if (!n)
									return r.get(e);
								e = r.get(e),
								t = r.get(t),
								n = Liquid.Condition.operators[n];
								if (!n)
									throw "Unknown operator " + n;
								var i = n(e, t);
								return i
							},
							toString : function () {
								return "<Condition " + this.left + " " + this.operator + " " + this.right + ">"
							}
						}),
					Liquid.Condition.operators = {
						"==" : function (e, t) {
							return e == t
						},
						"=" : function (e, t) {
							return e == t
						},
						"!=" : function (e, t) {
							return e != t
						},
						"<>" : function (e, t) {
							return e != t
						},
						"<" : function (e, t) {
							return e < t
						},
						">" : function (e, t) {
							return e > t
						},
						"<=" : function (e, t) {
							return e <= t
						},
						">=" : function (e, t) {
							return e >= t
						},
						contains : function (e, t) {
							return Object.prototype.toString.call(e) === "[object Array]" ? e.indexOf(t) >= 0 : e.match(t)
						},
						hasKey : function (e, t) {
							return Liquid.extensions.object.hasKey.call(e, t)
						},
						hasValue : function (e, t) {
							return Liquid.extensions.object.hasValue.call(e, t)
						}
					},
					Liquid.ElseCondition = Liquid.Condition.extend({
							isElse : !0,
							evaluate : function (e) {
								return !0
							},
							toString : function () {
								return "<ElseCondition>"
							}
						}),
					Liquid.Drop = Liquid.Class.extend({
							setContext : function (e) {
								this.context = e
							},
							beforeMethod : function (e) {},
							invokeDrop : function (e) {
								var t = this.beforeMethod();
								return !t && e in this && (t = this[e].apply(this)),
								t
							},
							hasKey : function (e) {
								return !0
							}
						});
					var hackObjectEach = function (e) {
						if (typeof e != "function")
							throw "Object.each requires first argument to be a function";
						var t = 0,
						n = arguments[1];
						for (var r in this) {
							var i = this[r],
							s = [r, i];
							s.key = r,
							s.value = i,
							e.call(n, s, t, this),
							t++
						}
						return null
					};
					Liquid.Template.registerTag("assign", Liquid.Tag.extend({
							tagSyntax : /((?:\(?[\w\-\.\[\]]\)?)+)\s*=\s*(.+)/,
							init : function (e, t, n) {
								var r = t.match(this.tagSyntax);
								if (!r)
									throw "Syntax error in 'assign' - Valid syntax: assign [var] = [source]";
								this.to = r[1],
								this.from = r[2],
								this._super(e, t, n)
							},
							render : function (e) {
								var t = new Liquid.Variable(this.from);
								return e.scopes.last()[this.to.toString()] = t.render(e),
								""
							}
						})),
					Liquid.Template.registerTag("cache", Liquid.Block.extend({
							tagSyntax : /(\w+)/,
							init : function (e, t, n) {
								var r = t.match(this.tagSyntax);
								if (!r)
									throw "Syntax error in 'cache' - Valid syntax: cache [var]";
								this.to = r[1],
								this._super(e, t, n)
							},
							render : function (e) {
								var t = this._super(e);
								return e.scopes.last()[this.to] = [t].flatten().join(""),
								""
							}
						})),
					Liquid.Template.registerTag("capture", Liquid.Block.extend({
							tagSyntax : /(\w+)/,
							init : function (e, t, n) {
								var r = t.match(this.tagSyntax);
								if (!r)
									throw "Syntax error in 'capture' - Valid syntax: capture [var]";
								this.to = r[1],
								this._super(e, t, n)
							},
							render : function (e) {
								var t = this._super(e);
								return e.scopes.last()[this.to.toString()] = [t].flatten().join(""),
								""
							}
						})),
					Liquid.Template.registerTag("case", Liquid.Block.extend({
							tagSyntax : /("[^"]+"|'[^']+'|[^\s,|]+)/,
							tagWhenSyntax : /("[^"]+"|'[^']+'|[^\s,|]+)(?:(?:\s+or\s+|\s*\,\s*)("[^"]+"|'[^']+'|[^\s,|]+.*))?/,
							init : function (e, t, n) {
								this.blocks = [],
								this.nodelist = [];
								var r = t.match(this.tagSyntax);
								if (!r)
									throw "Syntax error in 'case' - Valid syntax: case [condition]";
								this.left = r[1],
								this._super(e, t, n)
							},
							unknownTag : function (e, t, n) {
								switch (e) {
								case "when":
									this.recordWhenCondition(t);
									break;
								case "else":
									this.recordElseCondition(t);
									break;
								default:
									this._super(e, t, n)
								}
							},
							render : function (e) {
								var t = this,
								n = [],
								r = !0;
								return e.stack(function () {
									for (var i = 0; i < t.blocks.length; i++) {
										var s = t.blocks[i];
										if (s.isElse)
											return r == 1 && (n = [n, t.renderAll(s.attachment, e)].flatten()), n;
										s.evaluate(e) && (r = !1, n = [n, t.renderAll(s.attachment, e)].flatten())
									}
								}),
								n
							},
							recordWhenCondition : function (e) {
								while (e) {
									var t = e.match(this.tagWhenSyntax);
									if (!t)
										throw "Syntax error in tag 'case' - Valid when condition: {% when [condition] [or condition2...] %} ";
									e = t[2];
									var n = new Liquid.Condition(this.left, "==", t[1]);
									this.blocks.push(n),
									this.nodelist = n.attach([])
								}
							},
							recordElseCondition : function (e) {
								if ((e || "").strip() != "")
									throw "Syntax error in tag 'case' - Valid else condition: {% else %} (no parameters) ";
								var t = new Liquid.ElseCondition;
								this.blocks.push(t),
								this.nodelist = t.attach([])
							}
						})),
					Liquid.Template.registerTag("comment", Liquid.Block.extend({
							render : function (e) {
								return ""
							}
						})),
					Liquid.Template.registerTag("cycle", Liquid.Tag.extend({
							tagSimpleSyntax : /"[^"]+"|'[^']+'|[^\s,|]+/,
							tagNamedSyntax : /("[^"]+"|'[^']+'|[^\s,|]+)\s*\:\s*(.*)/,
							init : function (e, t, n) {
								var r,
								i;
								r = t.match(this.tagNamedSyntax);
								if (r)
									this.variables = this.variablesFromString(r[2]), this.name = r[1];
								else {
									r = t.match(this.tagSimpleSyntax);
									if (!r)
										throw "Syntax error in 'cycle' - Valid syntax: cycle [name :] var [, var2, var3 ...]";
									this.variables = this.variablesFromString(t),
									this.name = "'" + this.variables.toString() + "'"
								}
								this._super(e, t, n)
							},
							render : function (e) {
								var t = this,
								n = e.get(t.name),
								r = "";
								return e.registers.cycle || (e.registers.cycle = {}),
								e.registers.cycle[n] || (e.registers.cycle[n] = 0),
								e.stack(function () {
									var i = e.registers.cycle[n],
									s = e.get(t.variables[i]);
									i += 1,
									i == t.variables.length && (i = 0),
									e.registers.cycle[n] = i,
									r = s
								}),
								r
							},
							variablesFromString : function (e) {
								return e.split(",").map(function (e) {
									var t = e.match(/\s*("[^"]+"|'[^']+'|[^\s,|]+)\s*/);
									return t[1] ? t[1] : null
								})
							}
						})),
					Liquid.Template.registerTag("for", Liquid.Block.extend({
							tagSyntax : /(\w+)\s+in\s+((?:\(?[\w\-\.\[\]]\)?)+)/,
							init : function (e, t, n) {
								var r = t.match(this.tagSyntax);
								if (!r)
									throw "Syntax error in 'for loop' - Valid syntax: for [item] in [collection]";
								this.variableName = r[1],
								this.collectionName = r[2],
								this.name = this.variableName + "-" + this.collectionName,
								this.attributes = {};
								var i = t.replace(this.tagSyntax, ""),
								s = t.match(/(\w*?)\s*\:\s*("[^"]+"|'[^']+'|[^\s,|]+)/g);
								s && s.each(function (e) {
									e = e.split(":"),
									this.attributes[e[0].strip()] = e[1].strip()
								}, this),
								this._super(e, t, n)
							},
							render : function (e) {
								var t = this,
								n = [],
								r = e.get(this.collectionName) || [],
								i = [0, r.length];
								e.registers["for"] || (e.registers["for"] = {});
								if (this.attributes.limit || this.attributes.offset) {
									var s = 0,
									o = 0,
									u = 0,
									a = null;
									this.attributes["offset"] == "continue" ? s = e.registers["for"][this.name] : s = e.get(this.attributes.offset) || 0,
									o = e.get(this.attributes.limit),
									u = o ? s + o + 1 : r.length,
									i = [s, u - 1],
									e.registers["for"][this.name] = u
								}
								return a = r.slice(i[0], i[1]),
								!a || a.length == 0 ? "" : (e.stack(function () {
										var r = a.length;
										a.each(function (i, s) {
											e.set(t.variableName, i),
											e.set("forloop", {
												name : t.name,
												length : r,
												index : s + 1,
												index0 : s,
												rindex : r - s,
												rindex0 : r - s - 1,
												first : s == 0,
												last : s == r - 1
											}),
											n.push((t.renderAll(t.nodelist, e) || []).join(""))
										})
									}), [n].flatten().join(""))
							}
						})),
					Liquid.Template.registerTag("if", Liquid.Block.extend({
							tagSyntax : /("[^"]+"|'[^']+'|[^\s,|]+)\s*([=!<>a-z_]+)?\s*("[^"]+"|'[^']+'|[^\s,|]+)?/,
							init : function (e, t, n) {
								this.nodelist = [],
								this.blocks = [],
								this.pushBlock("if", t),
								this._super(e, t, n)
							},
							unknownTag : function (e, t, n) {
								["elsif", "else"].include(e) ? this.pushBlock(e, t) : this._super(e, t, n)
							},
							render : function (e) {
								var t = this,
								n = "";
								return e.stack(function () {
									for (var r = 0; r < t.blocks.length; r++) {
										var i = t.blocks[r];
										if (i.evaluate(e)) {
											n = t.renderAll(i.attachment, e);
											return
										}
									}
								}),
								[n].flatten().join("")
							},
							pushBlock : function (e, t) {
								var n;
								if (e == "else")
									n = new Liquid.ElseCondition;
								else {
									var r = t.split(/\b(and|or)\b/).reverse(),
									i = r.shift().match(this.tagSyntax);
									if (!i)
										throw "Syntax Error in tag '" + e + "' - Valid syntax: " + e + " [expression]";
									var s = new Liquid.Condition(i[1], i[2], i[3]);
									while (r.length > 0) {
										var o = r.shift(),
										i = r.shift().match(this.tagSyntax);
										if (!i)
											throw "Syntax Error in tag '" + e + "' - Valid syntax: " + e + " [expression]";
										var u = new Liquid.Condition(i[1], i[2], i[3]);
										u[o](s),
										s = u
									}
									n = s
								}
								n.attach([]),
								this.blocks.push(n),
								this.nodelist = n.attachment
							}
						})),
					Liquid.Template.registerTag("ifchanged", Liquid.Block.extend({
							render : function (e) {
								var t = this,
								n = "";
								return e.stack(function () {
									var r = t.renderAll(t.nodelist, e).join("");
									r != e.registers["ifchanged"] && (n = r, e.registers.ifchanged = n)
								}),
								n
							}
						})),
					Liquid.Template.registerTag("include", Liquid.Tag.extend({
							tagSyntax : /((?:"[^"]+"|'[^']+'|[^\s,|]+)+)(\s+(?:with|for)\s+((?:"[^"]+"|'[^']+'|[^\s,|]+)+))?/,
							init : function (e, t, n) {
								var r = (t || "").match(this.tagSyntax);
								if (!r)
									throw "Error in tag 'include' - Valid syntax: include '[template]' (with|for) [object|collection]";
								this.templateName = r[1],
								this.templateNameVar = this.templateName.substring(1, this.templateName.length - 1),
								this.variableName = r[3],
								this.attributes = {};
								var i = t.match(/(\w*?)\s*\:\s*("[^"]+"|'[^']+'|[^\s,|]+)/g);
								i && i.each(function (e) {
									e = e.split(":"),
									this.attributes[e[0].strip()] = e[1].strip()
								}, this),
								this._super(e, t, n)
							},
							render : function (e) {
								var t = this,
								n = Liquid.readTemplateFile(e.get(this.templateName)),
								r = Liquid.parse(n),
								i = e.get(this.variableName || this.templateNameVar),
								s = "";
								return e.stack(function () {
									t.attributes.each = hackObjectEach,
									t.attributes.each(function (t) {
										e.set(t.key, e.get(t.value))
									}),
									i instanceof Array ? s = i.map(function (n) {
											return e.set(t.templateNameVar, n),
											r.render(e)
										}) : (e.set(t.templateNameVar, i), s = r.render(e))
								}),
								s = [s].flatten().join(""),
								s
							}
						})),
					Liquid.Template.registerTag("unless", Liquid.Template.tags["if"].extend({
							render : function (e) {
								var t = this,
								n = "";
								return e.stack(function () {
									var r = t.blocks[0];
									if (!r.evaluate(e)) {
										n = t.renderAll(r.attachment, e);
										return
									}
									for (var i = 1; i < t.blocks.length; i++) {
										var r = t.blocks[i];
										if (r.evaluate(e)) {
											n = t.renderAll(r.attachment, e);
											return
										}
									}
								}),
								[n].flatten().join("")
							}
						})),
					Liquid.Template.registerTag("raw", Liquid.Block.extend({
							parse : function (e) {
								this.nodelist || (this.nodelist = []),
								this.nodelist.clear();
								var t = e.shift();
								e.push("");
								while (e.length) {
									if (/^\{\%/.test(t)) {
										var n = t.match(/^\{\%\s*(\w+)\s*(.*)?\%\}$/);
										if (n && this.blockDelimiter == n[1]) {
											this.endTag();
											return
										}
									}
									this.nodelist.push(t || ""),
									t = e.shift()
								}
								this.assertMissingDelimitation()
							},
							render : function (e) {
								return this.nodelist.join("")
							}
						})),
					Liquid.Template.registerFilter({
						_HTML_ESCAPE_MAP : {
							"&" : "&amp;",
							">" : "&gt;",
							"<" : "&lt;",
							'"' : "&quot;",
							"'" : "&#39;"
						},
						size : function (e) {
							return e.length ? e.length : 0
						},
						downcase : function (e) {
							return e.toString().toLowerCase()
						},
						upcase : function (e) {
							return e.toString().toUpperCase()
						},
						capitalize : function (e) {
							return e.toString().capitalize()
						},
						escape : function (e) {
							var t = this;
							return e.replace(/[&<>"']/g, function (e) {
								return t._HTML_ESCAPE_MAP[e]
							})
						},
						h : function (e) {
							var t = this;
							return e.replace(/[&<>"']/g, function (e) {
								return t._HTML_ESCAPE_MAP[e]
							})
						},
						truncate : function (e, t, n) {
							if (!e || e == "")
								return "";
							t = t || 50,
							n = n || "...";
							var r = e.slice(0, t);
							return e.length > t ? e.slice(0, t) + n : e
						},
						truncatewords : function (e, t, n) {
							if (!e || e == "")
								return "";
							t = parseInt(t || 15),
							n = n || "...";
							var r = e.toString().split(" "),
							i = Math.max(t, 0);
							return r.length > i ? r.slice(0, i).join(" ") + n : e
						},
						truncate_words : function (e, t, n) {
							if (!e || e == "")
								return "";
							t = parseInt(t || 15),
							n = n || "...";
							var r = e.toString().split(" "),
							i = Math.max(t, 0);
							return r.length > i ? r.slice(0, i).join(" ") + n : e
						},
						strip_html : function (e) {
							return e.toString().replace(/<.*?>/g, "")
						},
						strip_newlines : function (e) {
							return e.toString().replace(/\n/g, "")
						},
						join : function (e, t) {
							return t = t || " ",
							e.join(t)
						},
						split : function (e, t) {
							return t = t || " ",
							e.split(t)
						},
						sort : function (e) {
							return e.sort()
						},
						reverse : function (e) {
							return e.reverse()
						},
						replace : function (e, t, n) {
							return n = n || "",
							e.toString().replace(new RegExp(t, "g"), n)
						},
						replace_first : function (e, t, n) {
							return n = n || "",
							e.toString().replace(new RegExp(t, ""), n)
						},
						newline_to_br : function (e) {
							return e.toString().replace(/\n/g, "<br/>\n")
						},
						date : function (e, t) {
							var n;
							return e instanceof Date && (n = e),
							!(n instanceof Date) && e == "now" && (n = new Date),
							!(n instanceof Date) && typeof e == "number" && (n = new Date(e * 1e3)),
							!(n instanceof Date) && typeof e == "string" && (n = new Date(Date.parse(e))),
							n instanceof Date ? n.strftime(t) : e
						},
						first : function (e) {
							return e[0]
						},
						last : function (e) {
							return e = e,
							e[e.length - 1]
						},
						minus : function (e, t) {
							return (Number(e) || 0) - (Number(t) || 0)
						},
						plus : function (e, t) {
							return (Number(e) || 0) + (Number(t) || 0)
						},
						times : function (e, t) {
							return (Number(e) || 0) * (Number(t) || 0)
						},
						divided_by : function (e, t) {
							return (Number(e) || 0) / (Number(t) || 0)
						},
						modulo : function (e, t) {
							return (Number(e) || 0) % (Number(t) || 0)
						},
						map : function (e, t) {
							e = e || [];
							var n = [];
							for (var r = 0; r < e.length; r++)
								n.push(e[r][t]);
							return n
						},
						escape_once : function (e) {
							var t = this;
							return e.replace(/["><']|&(?!([a-zA-Z]+|(#\d+));)/g, function (e) {
								return t._HTML_ESCAPE_MAP[e]
							})
						},
						remove : function (e, t) {
							return e.toString().replace(new RegExp(t, "g"), "")
						},
						remove_first : function (e, t) {
							return e.toString().replace(t, "")
						},
						prepend : function (e, t) {
							return "" + (t || "").toString() + (e || "").toString()
						},
						append : function (e, t) {
							return "" + (e || "").toString() + (t || "").toString()
						}
					}),
					(new Date).strftime || function () {
						Date.ext = {},
						Date.ext.util = {},
						Date.ext.util.xPad = function (e, t, n) {
							typeof n == "undefined" && (n = 10);
							for (; parseInt(e, 10) < n && n > 1; n /= 10)
								e = t.toString() + e;
							return e.toString()
						},
						Date.prototype.locale = "en-GB",
						document.getElementsByTagName("html") && document.getElementsByTagName("html")[0].lang && (Date.prototype.locale = document.getElementsByTagName("html")[0].lang),
						Date.ext.locales = {},
						Date.ext.locales.en = {
							a : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
							A : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
							b : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
							B : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
							c : "%a %d %b %Y %T %Z",
							p : ["AM", "PM"],
							P : ["am", "pm"],
							x : "%d/%m/%y",
							X : "%T"
						},
						typeof JSON != "undefined" ? Date.ext.locales["en-US"] = JSON.parse(JSON.stringify(Date.ext.locales.en)) : Date.ext.locales["en-US"] = Date.ext.locales.en,
						Date.ext.locales["en-US"].c = "%a %d %b %Y %r %Z",
						Date.ext.locales["en-US"].x = "%D",
						Date.ext.locales["en-US"].X = "%r",
						Date.ext.locales["en-GB"] = Date.ext.locales.en,
						Date.ext.locales["en-AU"] = Date.ext.locales["en-GB"],
						Date.ext.formats = {
							a : function (e) {
								return Date.ext.locales[e.locale].a[e.getDay()]
							},
							A : function (e) {
								return Date.ext.locales[e.locale].A[e.getDay()]
							},
							b : function (e) {
								return Date.ext.locales[e.locale].b[e.getMonth()]
							},
							B : function (e) {
								return Date.ext.locales[e.locale].B[e.getMonth()]
							},
							c : "toLocaleString",
							C : function (e) {
								return Date.ext.util.xPad(parseInt(e.getFullYear() / 100, 10), 0)
							},
							d : ["getDate", "0"],
							e : ["getDate", " "],
							g : function (e) {
								return Date.ext.util.xPad(parseInt(Date.ext.util.G(e) / 100, 10), 0)
							},
							G : function (e) {
								var t = e.getFullYear(),
								n = parseInt(Date.ext.formats.V(e), 10),
								r = parseInt(Date.ext.formats.W(e), 10);
								return r > n ? t++ : r === 0 && n >= 52 && t--,
								t
							},
							H : ["getHours", "0"],
							I : function (e) {
								var t = e.getHours() % 12;
								return Date.ext.util.xPad(t === 0 ? 12 : t, 0)
							},
							j : function (e) {
								var t = e - new Date("" + e.getFullYear() + "/1/1 GMT");
								t += e.getTimezoneOffset() * 6e4;
								var n = parseInt(t / 6e4 / 60 / 24, 10) + 1;
								return Date.ext.util.xPad(n, 0, 100)
							},
							m : function (e) {
								return Date.ext.util.xPad(e.getMonth() + 1, 0)
							},
							M : ["getMinutes", "0"],
							p : function (e) {
								return Date.ext.locales[e.locale].p[e.getHours() >= 12 ? 1 : 0]
							},
							P : function (e) {
								return Date.ext.locales[e.locale].P[e.getHours() >= 12 ? 1 : 0]
							},
							S : ["getSeconds", "0"],
							u : function (e) {
								var t = e.getDay();
								return t === 0 ? 7 : t
							},
							U : function (e) {
								var t = parseInt(Date.ext.formats.j(e), 10),
								n = 6 - e.getDay(),
								r = parseInt((t + n) / 7, 10);
								return Date.ext.util.xPad(r, 0)
							},
							V : function (e) {
								var t = parseInt(Date.ext.formats.W(e), 10),
								n = (new Date("" + e.getFullYear() + "/1/1")).getDay(),
								r = t + (n > 4 || n <= 1 ? 0 : 1);
								return r == 53 && (new Date("" + e.getFullYear() + "/12/31")).getDay() < 4 ? r = 1 : r === 0 && (r = Date.ext.formats.V(new Date("" + (e.getFullYear() - 1) + "/12/31"))),
								Date.ext.util.xPad(r, 0)
							},
							w : "getDay",
							W : function (e) {
								var t = parseInt(Date.ext.formats.j(e), 10),
								n = 7 - Date.ext.formats.u(e),
								r = parseInt((t + n) / 7, 10);
								return Date.ext.util.xPad(r, 0, 10)
							},
							y : function (e) {
								return Date.ext.util.xPad(e.getFullYear() % 100, 0)
							},
							Y : "getFullYear",
							z : function (e) {
								var t = e.getTimezoneOffset(),
								n = Date.ext.util.xPad(parseInt(Math.abs(t / 60), 10), 0),
								r = Date.ext.util.xPad(t % 60, 0);
								return (t > 0 ? "-" : "+") + n + r
							},
							Z : function (e) {
								return e.toString().replace(/^.*\(([^)]+)\)$/, "$1")
							},
							"%" : function (e) {
								return "%"
							}
						},
						Date.ext.aggregates = {
							c : "locale",
							D : "%m/%d/%y",
							h : "%b",
							n : "\n",
							r : "%I:%M:%S %p",
							R : "%H:%M",
							t : "	",
							T : "%H:%M:%S",
							x : "locale",
							X : "locale"
						},
						Date.ext.aggregates.z = Date.ext.formats.z(new Date),
						Date.ext.aggregates.Z = Date.ext.formats.Z(new Date),
						Date.ext.unsupported = {},
						Date.prototype.strftime = function (e) {
							this.locale in Date.ext.locales || (this.locale.replace(/-[a-zA-Z]+$/, "")in Date.ext.locales ? this.locale = this.locale.replace(/-[a-zA-Z]+$/, "") : this.locale = "en-GB");
							var t = this;
							while (e.match(/%[cDhnrRtTxXzZ]/))
								e = e.replace(/%([cDhnrRtTxXzZ])/g, function (e, n) {
										var r = Date.ext.aggregates[n];
										return r == "locale" ? Date.ext.locales[t.locale][n] : r
									});
							var n = e.replace(/%([aAbBCdegGHIjmMpPSuUVwWyY%])/g, function (e, n) {
									var r = Date.ext.formats[n];
									return typeof r == "string" ? t[r]() : typeof r == "function" ? r.call(t, t) : typeof r == "object" && typeof r[0] == "string" ? Date.ext.util.xPad(t[r[0]](), r[1]) : n
								});
							return t = null,
							n
						}
					}
					();
					var split;
					split = split || function (e) {
						var t = String.prototype.split,
						n = /()??/.exec("")[1] === e,
						r;
						return r = function (r, i, s) {
							if (Object.prototype.toString.call(i) !== "[object RegExp]")
								return t.call(r, i, s);
							var o = [],
							u = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.extended ? "x" : "") + (i.sticky ? "y" : ""),
							a = 0,
							i = new RegExp(i.source, u + "g"),
							f,
							l,
							c,
							h;
							r += "",
							n || (f = new RegExp("^" + i.source + "$(?!\\s)", u)),
							s = s === e ? -1 >>> 0 : s >>> 0;
							while (l = i.exec(r)) {
								c = l.index + l[0].length;
								if (c > a) {
									o.push(r.slice(a, l.index)),
									!n && l.length > 1 && l[0].replace(f, function () {
										for (var t = 1; t < arguments.length - 2; t++)
											arguments[t] === e && (l[t] = e)
									}),
									l.length > 1 && l.index < r.length && Array.prototype.push.apply(o, l.slice(1)),
									h = l[0].length,
									a = c;
									if (o.length >= s)
										break
								}
								i.lastIndex === l.index && i.lastIndex++
							}
							return a === r.length ? (h || !i.test("")) && o.push("") : o.push(r.slice(a)),
							o.length > s ? o.slice(0, s) : o
						},
						String.prototype.split = function (e, t) {
							return r(this, e, t)
						},
						r
					}
					(),
					typeof exports != "undefined" && (typeof module != "undefined" && module.exports && (exports = module.exports = Liquid), exports.Liquid = Liquid),
					Liquid.registerFilters({
						sectionify : function (e, t, n) {
							function r(e) {
								return e.find("em").first().text().length
							}
							var i = null;
							if (t) {
								var s = jQuery("<div>" + t + "</div>");
								if (!n)
									i = s.text();
								else {
									var o = jQuery("<div>" + n + "</div>");
									r(s) > r(o) && (i = s.text())
								}
							}
							return i && e.indexOf("#") < 0 && (e = e + "#sts=" + i),
							e
						},
						truncateAnyType : function (e, t, n) {
							return e = e || "",
							Liquid.Strainer.filters.truncate(e.toString(), t, n)
						},
						imgix : function (e, t, n) {
							jQuery.isArray(e) && (e = e[0]);
							if (!e)
								return e;
							e = String(e).replace(/&amp;/g, "&"),
							e = encodeURIComponent(e);
							var r = {
								w : t,
								h : n,
								fit : "crop",
								dpr : window.devicePixelRatio
							};
							return "//swiftype2.imgix.net/" + e + "?" + jQuery.param(r)
						},
						dateInLocale : function (e, t) {
							var n = new Date(Date.parse(e)),
							r = new IntlMessageFormat("{date, date, " + t + "}", _st_tmp_global_locale),
							i = {
								date : n
							};
							return r.format(i)
						},
						numberInLocale : function (e) {
							var t = {
								number : e
							},
							n = new IntlMessageFormat("{number, number}", _st_tmp_global_locale);
							return n.format(t)
						},
						currencyInLocale : function (e, t) {
							var n = {
								number : {}

							};
							n.number[t] = {
								style : "currency",
								currency : t
							};
							var r = {
								number : e
							},
							i = new IntlMessageFormat("{number, number, " + t + "}", _st_tmp_global_locale, n);
							return i.format(r)
						}
					}),
					Liquid.Template.registerTag("translate", Liquid.Tag.extend({
							tagSyntax : /(\w+)/,
							init : function (e, t, n) {
								var r = t.match(this.tagSyntax);
								if (!r)
									throw "Syntax error in 'translate' - Valid syntax: translate [message]";
								this.message = r[1],
								this._super(e, t, n)
							},
							_extractNameAndValueFrom : function (e, t) {
								var n;
								try {
									n = t.get(e)
								} catch (r) {
									return null
								}
								if (typeof n != "undefined" && n !== null) {
									var i = e.replace(/[^A-Z0-9_]/gi, "_");
									return [i, n]
								}
								return [e, null]
							},
							_effectiveMessageAndValuesFrom : function (e, t) {
								var n = "",
								r = {},
								i = e,
								s = /^([^{]+){([^},\s]+)/mi;
								for (; ; ) {
									var o = i.match(s);
									if (!o) {
										n += i;
										break
									}
									var u = o[1],
									a = o[2],
									f = i.substring(o[0].length);
									n += u;
									var l = this._extractNameAndValueFrom(a, t);
									l ? (n += "{" + l[0], r[l[0]] = l[1]) : n += "{" + a,
									i = f
								}
								return [n, r]
							},
							_localeStringsToLookFor : function (e) {
								var t = e.split("-"),
								n = [];
								for (var r = t.length; r > 0; --r) {
									var i = t.slice(0, r);
									n.push(i.join("-"))
								}
								return n
							},
							escapeAnyType : function (e) {
								return e
							},
							render : function (e) {
								var t = e.findVariable("i18n"),
								n = t.locale,
								r = t.localizationMessages,
								i = null,
								s = this._localeStringsToLookFor(n);
								for (var o = 0; o < s.length; ++o) {
									var u = r[s[o]];
									if (u) {
										i = u[this.message];
										if (i)
											break
									}
								}
								if (!i)
									return "(No translations for '" + this.message + "' in any of these locales: " + s.join(", ") + ")";
								var a = this._effectiveMessageAndValuesFrom(i, e),
								f = new IntlMessageFormat(a[0], n);
								return f.format(a[1])
							}
						})),
					function (e) {
						"use strict";
						var t = e._InternalSwiftype = e._InternalSwiftype || {};
						t.LRUCache = function (e) {
							this.size = 0,
							this.limit = e,
							this._keymap = {}

						},
						t.LRUCache.prototype.put = function (e, t) {
							var n = {
								key : e,
								value : t
							};
							this._keymap[e] = n,
							this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n,
							this.tail = n;
							if (this.size === this.limit)
								return this.shift();
							this.size++
						},
						t.LRUCache.prototype.shift = function () {
							var e = this.head;
							return e && (this.head.newer ? (this.head = this.head.newer, this.head.older = undefined) : this.head = undefined, e.newer = e.older = undefined, delete this._keymap[e.key]),
							e
						},
						t.LRUCache.prototype.get = function (e, t) {
							var n = this._keymap[e];
							if (n === undefined)
								return;
							return n === this.tail ? n.value : (n.newer && (n === this.head && (this.head = n.newer), n.newer.older = n.older), n.older && (n.older.newer = n.newer), n.newer = undefined, n.older = this.tail, this.tail && (this.tail.newer = n), this.tail = n, t ? n : n.value)
						},
						t.LRUCache.prototype.remove = function (e) {
							var t = this._keymap[e];
							if (!t)
								return;
							return delete this._keymap[t.key],
							t.newer && t.older ? (t.older.newer = t.newer, t.newer.older = t.older) : t.newer ? (t.newer.older = undefined, this.head = t.newer) : t.older ? (t.older.newer = undefined, this.tail = t.older) : this.head = this.tail = undefined,
							this.size--,
							t.value
						},
						t.LRUCache.prototype.clear = function () {
							this.head = this.tail = undefined,
							this.size = 0,
							this._keymap = {}

						},
						typeof Object.keys == "function" ? t.LRUCache.prototype.keys = function () {
							return Object.keys(this._keymap)
						}
						 : t.LRUCache.prototype.keys = function () {
							var e = [];
							for (var t in this._keymap)
								e.push(t);
							return e
						}
					}
					(window),
					function (e, t) {
						function n(e) {
							return typeof e == "string"
						}
						function r(e) {
							var t = l.call(arguments, 1);
							return function () {
								return e.apply(this, t.concat(l.call(arguments)))
							}
						}
						function i(e) {
							return e.replace(/^[^#]*#?(.*)$/, "$1")
						}
						function s(e) {
							return e.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
						}
						function o(r, i, s, o, u) {
							var a,
							l,
							p,
							v,
							m;
							return o !== f ? (p = s.match(r ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/), m = p[3] || "", u === 2 && n(o) ? l = o.replace(r ? A : L, "") : (v = d(p[2]), o = n(o) ? d[r ? x : S](o) : o, l = u === 2 ? o : u === 1 ? e.extend({}, o, v) : e.extend({}, v, o), l = h(l), r && (l = l.replace(O, c))), a = p[1] + (r ? "#" : l || !p[1] ? "?" : "") + l + m) : a = i(s !== f ? s : t[N][C]),
							a
						}
						function u(e, t, r) {
							return t === f || typeof t == "boolean" ? (r = t, t = h[e ? x : S]()) : t = n(t) ? t.replace(e ? A : L, "") : t,
							d(t, r)
						}
						function a(t, r, i, s) {
							return !n(i) && typeof i != "object" && (s = i, i = r, r = f),
							this.each(function () {
								var n = e(this),
								o = r || b()[(this.nodeName || "").toLowerCase()] || "",
								u = o && n.attr(o) || "";
								n.attr(o, h[t](u, i, s))
							})
						}
						var f,
						l = Array.prototype.slice,
						c = decodeURIComponent,
						h = e.param,
						p,
						d,
						v,
						m = e.bbq = e.bbq || {},
						g,
						y,
						b,
						w = e.event.special,
						E = "hashchange",
						S = "querystring",
						x = "fragment",
						T = "elemUrlAttr",
						N = "location",
						C = "href",
						k = "src",
						L = /^.*\?|#.*$/g,
						A = /^.*\#/,
						O,
						M = {};
						h[S] = r(o, 0, s),
						h[x] = p = r(o, 1, i),
						p.noEscape = function (t) {
							t = t || "";
							var n = e.map(t.split(""), encodeURIComponent);
							O = new RegExp(n.join("|"), "g")
						},
						p.noEscape(",/"),
						e.deparam = d = function (t, n) {
							var r = {},
							i = {
								"true" : !0,
								"false" : !1,
								"null" : null
							};
							return e.each(t.replace(/\+/g, " ").split("&"), function (t, s) {
								var o = s.split("="),
								u = c(o[0]),
								a,
								l = r,
								h = 0,
								p = u.split("]["),
								d = p.length - 1;
								/\[/.test(p[0]) && /\]$/.test(p[d]) ? (p[d] = p[d].replace(/\]$/, ""), p = p.shift().split("[").concat(p), d = p.length - 1) : d = 0;
								if (o.length === 2) {
									a = c(o[1]),
									n && (a = a && !isNaN(a) ? +a : a === "undefined" ? f : i[a] !== f ? i[a] : a);
									if (d)
										for (; h <= d; h++)
											u = p[h] === "" ? l.length : p[h], l = l[u] = h < d ? l[u] || (p[h + 1] && isNaN(p[h + 1]) ? {}

													 : []) : a;
									else
										e.isArray(r[u]) ? r[u].push(a) : r[u] !== f ? r[u] = [r[u], a] : r[u] = a
								} else
									u && (r[u] = n ? f : "")
							}),
							r
						},
						d[S] = r(u, 0),
						d[x] = v = r(u, 1),
						e[T] || (e[T] = function (t) {
							return e.extend(M, t)
						})({
							a : C,
							base : C,
							iframe : k,
							img : k,
							input : k,
							form : "action",
							link : C,
							script : k
						}),
						b = e[T],
						e.fn[S] = r(a, S),
						e.fn[x] = r(a, x),
						m.pushState = g = function (e, r) {
							n(e) && /^#/.test(e) && r === f && (r = 2);
							var i = e !== f,
							s = p(t[N][C], i ? e : {}, i ? r : 2);
							t[N][C] = s + (/#/.test(s) ? "" : "#")
						},
						m.getState = y = function (e, t) {
							return e === f || typeof e == "boolean" ? v(e) : v(t)[e]
						},
						m.removeState = function (t) {
							var n = {};
							t !== f && (n = y(), e.each(e.isArray(t) ? t : arguments, function (e, t) {
									delete n[t]
								})),
							g(n, 2)
						},
						w[E] = e.extend(w[E], {
								add : function (t) {
									function n(e) {
										var t = e[x] = p();
										e.getState = function (e, n) {
											return e === f || typeof e == "boolean" ? d(t, e) : d(t, n)[e]
										},
										r.apply(this, arguments)
									}
									var r;
									if (e.isFunction(t))
										return r = t, n;
									r = t.handler,
									t.handler = n
								}
							})
					}
					(jQuery, this),
					function (e, t, n) {
						function r(e) {
							return e = e || t[o][a],
							e.replace(/^[^#]*#?(.*)$/, "$1")
						}
						var i,
						s = e.event.special,
						o = "location",
						u = "hashchange",
						a = "href",
						f = e.browser,
						l = document.documentMode,
						c = f.msie && (l === n || l < 8),
						h = "on" + u in t && !c;
						e[u + "Delay"] = 100,
						s[u] = e.extend(s[u], {
								setup : function () {
									if (h)
										return !1;
									e(i.start)
								},
								teardown : function () {
									if (h)
										return !1;
									e(i.stop)
								}
							}),
						i = function () {
							function n() {
								l = h = function (e) {
									return e
								},
								c && (f = e('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow, h = function () {
									return r(f.document[o][a])
								}, l = function (e, t) {
									if (e !== t) {
										var n = f.document;
										n.open().close(),
										n[o].hash = "#" + e
									}
								}, l(r()))
							}
							var i = {},
							s,
							f,
							l,
							h;
							return i.start = function () {
								if (s)
									return;
								var i = r();
								l || n(),
								function f() {
									var n = r(),
									c = h(i);
									n !== i ? (l(i = n, c), e(t).trigger(u)) : c !== i && (t[o][a] = t[o][a].replace(/#.*/, "") + "#" + c),
									s = setTimeout(f, e[u + "Delay"])
								}
								()
							},
							i.stop = function () {
								f || (s && clearTimeout(s), s = 0)
							},
							i
						}
						()
					}
					(jQuery, this),
					function (e, t) {
						"use strict";
						var n = e._InternalSwiftype = e._InternalSwiftype || {};
						n.Utils = n.Utils || {},
						n.Utils.compareObjects = function (e, t) {
							var r = !1,
							i = !1;
							if (e === null || typeof e == "undefined")
								r = !0;
							if (t === null || typeof t == "undefined")
								i = !0;
							if (r !== i)
								return !1;
							if (r)
								return !0;
							var s = [],
							o = [];
							for (var u in e)
								e.hasOwnProperty(u) && s.push(u);
							for (var a in t)
								t.hasOwnProperty(a) && o.push(a);
							if (s.length !== o.length)
								return !1;
							var f,
							l,
							c;
							for (var h = 0; h < s.length; ++h) {
								f = e[s[h]],
								l = t[s[h]];
								if (typeof f == "object" && typeof l == "object") {
									c = n.Utils.compareObjects(f, l);
									if (!c)
										return !1
								} else if (f !== l)
									return !1
							}
							for (var p = 0; p < o.length; ++p) {
								f = e[o[p]],
								l = t[o[p]];
								if (typeof f == "object" && typeof l == "object") {
									c = n.Utils.compareObjects(f, l);
									if (!c)
										return !1
								} else if (f !== l)
									return !1
							}
							return !0
						},
						typeof Object.create == "undefined" ? n.Utils.createObject = function (e) {
							function t() {}

							return t.prototype = e,
							new t
						}
						 : n.Utils.createObject = Object.create,
						n.Utils.trimString = function (e) {
							return e.replace(/^\s+|\s+$/g, "")
						},
						n.Utils.isBlank = function (e) {
							return e === undefined || e === null || /^\s*$/.test(e)
						},
						n.Utils.escapeHtml = function (e) {
							var t = {
								"&" : "&amp;",
								"<" : "&lt;",
								">" : "&gt;",
								'"' : "&quot;",
								"'" : "&#39;"
							};
							return String(e).replace(/[&<>"']/g, function (e) {
								return t[e]
							})
						},
						n.Utils.truncateString = function (e, t) {
							return typeof e == "string" && e.length > t ? e.slice(0, t - 3) + "..." : e
						},
						n.Utils.safelyDeleteProperty = function (e, t) {
							try {
								delete t[e]
							} catch (n) {
								t[e] = undefined
							}
						},
						n.Utils._compileTemplate = function (e) {
							return Liquid.parse(e)
						},
						n.Utils.getDataOrClassValue = function (e, r, i) {
							e = t(e);
							var s = e.data(r);
							if (!n.Utils.isBlank(s))
								return s;
							var o = (e.attr("class") || "").split(/\s+/);
							return t.each(o, function (e, t) {
								if (t.substring(0, r.length) === r) {
									var s = t.substring(r.length + 1);
									if (!n.Utils.isBlank(s))
										return i && (s = s.replace("_nextlevel_", " "), s = s.replace("_domid_", "#"), s = s.replace(/^domid_/, "#"), s = s.replace("_cssclass_", "."), s = s.replace(/^cssclass_/, ".")), s
								}
							}),
							null
						},
						n.Utils.eventIsMiddleClick = function (e) {
							return (e.type === "click" || e.type === "mousedown") && (e.which === 2 || e.ctrlKey || e.metaKey)
						},
						n.Utils.eventIsLeftClick = function (e) {
							return (e.type === "click" || e.type === "mousedown") && e.which === 1
						},
						n.Utils.bindOnEventsTo = function (e, n, r, i, s) {
							void[r, i, s],
							n = this._adjustEventTypesForIESupport(n);
							var o = t.makeArray(arguments).slice(2);
							t(e).on(n, o[0], o[1], o[2])
						},
						n.Utils.bindOneEventsTo = function (e, n, r, i, s) {
							void[r, i, s],
							n = this._adjustEventTypesForIESupport(n);
							var o = t.makeArray(arguments).slice(2);
							t(e).one(n, o[0], o[1], o[2])
						},
						n.Utils._adjustEventTypesForIESupport = function (e) {
							var n = e.split(" "),
							r = t.map(n, function (e) {
									switch (e) {
									case "input":
										return "textchange";
									default:
										return e
									}
								});
							return r.join(" ")
						},
						n.Utils.getCompiledTemplate = function (r, i, s, o) {
							var u = r[i],
							a = typeof u;
							return a === "string" && (u = function () {
								var r = n.Utils._compileTemplate(u);
								return {
									render : function (n) {
										e._st_tmp_global_locale = s;
										var i = t.extend({}, n),
										u = t.extend({}, n.i18n || {});
										i.i18n = u,
										i.i18n.locale = s,
										i.i18n.localizationMessages = o;
										var a = r.render(i);
										return e._st_tmp_global_locale = undefined,
										a
									}
								}
							}
								(), r[i] = u),
							u
						},
						n.Utils.allCssClassesOn = function (e) {
							e = t(e);
							var n = e.attr("class");
							return n ? n.split(/\s+/) : []
						},
						n.Utils.hasClassMatching = function (e, r) {
							var i = n.Utils.allCssClassesOn(e),
							s = !1;
							return t.each(i, function (e, t) {
								t.match(r) && (s = !0)
							}),
							s
						},
						n.Utils.describeElement = function (e) {
							if (!e)
								return "(null)";
							e = t(e);
							var n = e.prop("tagName"),
							r = e.attr("id");
							if (r)
								return n + "#" + r;
							var i = e.attr("class");
							return i ? n + "." + i : '(anonymous "' + n + '")'
						},
						n.Utils.convertObjectToQueryParams = function (e) {
							return t.param(e)
						},
						n.Utils.convertQueryParamsToObject = function (e) {
							return t.deparam(e)
						},
						n.Utils._addRemoveClass = function (e, n, r, i) {
							e = t(e),
							n || r ? (r && e.hasClass(r) && e.removeClass(r), n && !e.hasClass(n) && e.addClass(n)) : i()
						},
						n.Utils._addRemoveClassWithTimeout = function (e, t, r, i) {
							setTimeout(function () {
								n.Utils._addRemoveClass(e, t, r, i)
							}, 100)
						},
						n.Utils.elementShow = function (e) {
							t.each(t(e), function (e, r) {
								var i = n.Utils.getDataOrClassValue(r, "st-on-show"),
								s = n.Utils.getDataOrClassValue(r, "st-on-hide");
								n.Utils._addRemoveClassWithTimeout(r, i, s, function () {
									t(r).show()
								})
							})
						},
						n.Utils.elementHide = function (e) {
							t.each(t(e), function (e, r) {
								var i = n.Utils.getDataOrClassValue(r, "st-on-show"),
								s = n.Utils.getDataOrClassValue(r, "st-on-hide");
								n.Utils._addRemoveClassWithTimeout(r, s, i, function () {
									t(r).hide()
								})
							})
						},
						n.Utils.removeInlineDisplayStyle = function (e) {
							t(e).attr("style", function (e, t) {
								if (t)
									return t.replace(/display[^;]+;?/g, "")
							})
						},
						n.Utils.isInputLikeElement = function (e) {
							return e = t(e),
							e.is("input") || e.is("textarea")
						},
						n.Utils.isFormElement = function (e) {
							return e = t(e),
							e.is("form")
						},
						n.Utils.ieVersion = function () {
							var e,
							t = 6,
							n = document.createElement("div"),
							r = n.getElementsByTagName("i");
							while (n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", r[0])
								void null;
							return t > 7 ? t : e
						},
						n.Utils.isMobile = function () {
							return /iPhone|iPad|iPod|Android|Windows Phone/.test(navigator.userAgent)
						},
						n.Utils.addParamsToUrl = function (e, n) {
							var r = t.type(n) === "string" ? n : t.param(n);
							return e.indexOf("?") < 0 ? e += "?" + r : e += "&" + r,
							e
						},
						n.Utils.convertToFullPath =
						function (e) {
							switch (e.indexOf("//")) {
							case 0:
								e = window.location.protocol + e;
								break;
							default:
								e.indexOf("http") === -1 && (e[0] === "/" ? e = window.location.protocol + "//" + window.location.host + e : e = window.location.protocol + "//" + window.location.host + "/" + e)
							}
							return e
						},
						n.Utils.getHash = function () {
							return window.location.href.split("#")[1] || ""
						},
						n.Utils.pushToGA = function (e) {
							var t = encodeURIComponent(e);
							typeof window._gaq != "undefined" && window._gaq.push(["_trackPageview", "/search?stq=" + t]),
							typeof window.ga != "undefined" && window.ga("send", "pageview", "/search?stq=" + t)
						},
						n.Utils.stringOperator = function (e, t, n) {
							var r = {
								and : function (e, t) {
									return e && t
								},
								or : function (e, t) {
									return e || t
								}
							};
							return r[e](t, n)
						},
						n.Utils.isEmptyObject = function (e) {
							return t.isEmptyObject(e)
						},
						n.Utils.debounce = function (e, t, n) {
							var r;
							return function () {
								var i = this,
								s = arguments,
								o = function () {
									r = null,
									n || e.apply(i, s)
								},
								u = n && !r;
								clearTimeout(r),
								r = setTimeout(o, t),
								u && e.apply(i, s)
							}
						}
					}
					(window, jQuery),
					function (global, $) {
						"use strict";
						var Swiftype = global._InternalSwiftype = global._InternalSwiftype || {};
						global._InternalSwiftypeError = function (e, t, n) {
							this.level = t,
							this.message = n,
							this.contextObject = e
						};
						var pSwiftypeError = global._InternalSwiftypeError.prototype;
						pSwiftypeError.toString = function () {
							return "" + this.contextObject + ": " + this.level.toUpperCase() + ": " + this.message
						},
						Swiftype.CssBehaviorClasses = {
							adornments : {
								show_only_on_empty_query : "st-query-not-present",
								show_only_on_nonempty_query : "st-query-present"
							}
						};
						var DEBUG = "debug",
						WARN = "warn",
						FATAL = "fatal";
						Swiftype.Install = function (e, t, n) {
							if (typeof e != "string")
								throw "This is not a valid install key: '" + e + "'; it must be a string.";
							e = Swiftype.Utils.trimString(e);
							if (e.length !== 20)
								throw "This is not a valid install key: '" + e + "'; it must be of length 20.";
							this._installKey = e,
							this._userScriptConfiguration = t,
							this._isDefaultInstall = n,
							this._userServerConfiguration = null,
							this._configuration = $.extend({}, this._userScriptConfiguration),
							this._dependentResourceLoadingTimeoutAfter = null,
							this._dependentResourceLoadingTimeoutId = null,
							this._fetchUserServerConfiguration(),
							this._setDebugLevel(),
							this._searchHistory = new Swiftype.SearchHistory.forInstallKey(e)
						};
						var pInstall = Swiftype.Install.prototype;
						pInstall.toString = function () {
							return "[Swiftype.Install '" + this._installKey + "']"
						},
						pInstall.isDefaultInstall = function () {
							return this._isDefaultInstall
						},
						pInstall.cookieSearchQuery = function (e) {
							var t = e.apiAjaxDataParameters();
							this._searchHistory.trackQueryForActiveInstall(t)
						},
						pInstall.cookieSearchResult = function (e) {
							var t = e.getQuery(),
							n = t.apiAjaxDataParameters(),
							r = e._apiResult.id;
							this._searchHistory.trackClickForActiveInstall(n, r)
						},
						pInstall._normalizeInstallKey = function (e) {
							return Swiftype.Utils.trimString(e).replace("-", "_")
						},
						pInstall.matchesKey = function (e) {
							return this._normalizeInstallKey(e) === this._normalizeInstallKey(this._installKey)
						},
						pInstall.getInstallDataAttribute = function () {
							return this._installKey
						},
						pInstall._userServerConfigurationUrl = function () {
							return "//s.swiftypecdn.com/install/v2/config/" + this._installKey + ".json"
						},
						pInstall._fetchUserServerConfiguration = function () {
							var e = this._userServerConfigurationUrl();
							$.ajax({
								type : "GET",
								url : e,
								success : this._userServerConfigurationRetrieved.bind(this),
								error : this._userServerConfigurationRetrievalFailed.bind(this)
							})
						},
						pInstall._userServerConfigurationRetrieved = function (e) {
							this._userServerConfiguration = e,
							this._convertStringHooksToFunctions(),
							this._configuration = $.extend(!0, this._userServerConfiguration, this._userScriptConfiguration),
							this._localizationMessages = this._configuration.install.localization_messages,
							this._locale = this._configuration.install.locale.toLowerCase(),
							this._primaryDocType = this._configuration.install.primary_doc_type,
							this._loadDependentResources()
						},
						pInstall._convertStringHooksToFunctions = function () {
							var functionHooks = {};
							$.each(this._userServerConfiguration.install.hooks, function (hookName, hookFunction) {
								functionHooks[hookName] = eval(hookFunction)
							}),
							this._userServerConfiguration.install.hooks = functionHooks
						},
						pInstall.getLocale = function () {
							return this._locale
						},
						pInstall.getPrimaryDocType = function () {
							return this._primaryDocType
						},
						pInstall.getLocalizationMessages = function () {
							return this._localizationMessages
						},
						pInstall._userServerConfigurationRetrievalFailed = function (e, t, n) {
							this.log(this, FATAL, 'Unable to retrieve configuration for install "' + this._installKey + '" at "' + this._userServerConfigurationUrl() + '"; got: ' + t + " / " + n + ". Swiftype will not work on this page.")
						},
						pInstall._dependentStylesheetResources = function () {
							if (!this._dependentStylesheetResourcesMemoized) {
								var e = this;
								this._dependentStylesheetResourcesMemoized = $.map(this._configuration.install.web.dependent_resources.stylesheets || [], function (t) {
										return new Swiftype.Install.DependentStylesheet(e, t)
									})
							}
							return this._dependentStylesheetResourcesMemoized
						},
						pInstall._dependentJavascriptResourcesList = function () {
							var e = this._configuration.install.web.dependent_resources.javascripts || [];
							return e.concat(this._dependentJavascriptPolyfillList())
						},
						pInstall._dependentJavascriptPolyfillList = function () {
							var e = [];
							return global.Intl || e.push(this._configuration.install.web.dependent_resources.polyfills.intl + this._locale + ".js"),
							e
						},
						pInstall._dependentJavascriptResources = function () {
							if (!this._dependentJavascriptResourcesMemoized) {
								var e = this;
								this._dependentJavascriptResourcesMemoized = $.map(this._dependentJavascriptResourcesList(), function (t) {
										return new Swiftype.Install.DependentJavascript(e, t)
									})
							}
							return this._dependentJavascriptResourcesMemoized
						},
						pInstall._inlineStylesheetResources = function () {
							return new Swiftype.Install.InlineStylesheet(this, this._configuration.install.web.dependent_resources.inline_stylesheet)
						},
						pInstall._ieStylesheetResources = function () {
							var e = this,
							t = Swiftype.Utils.ieVersion(),
							n;
							if (t) {
								var r = (this._webConfig().dependent_resources.browser_stylesheets || {})["ie" + t];
								r && (n = new Swiftype.Install.DependentStylesheet(e, r))
							}
							return n || []
						},
						pInstall._dependentResources = function () {
							return this._dependentResourcesMemoized || (this._dependentResourcesMemoized = this._dependentStylesheetResources().concat(this._dependentJavascriptResources()).concat(this._inlineStylesheetResources()).concat(this._ieStylesheetResources())),
							this._dependentResourcesMemoized
						};
						var DEPENDENT_RESOURCE_LOADING_TIMEOUT_MILLISECONDS = 15e3,
						DEPENDENT_RESOURCE_LOADING_CHECK_INTERVAL_MILLISECONDS = 100;
						pInstall._loadDependentResources = function () {
							$.each(this._dependentResources(), function (e, t) {
								t.load()
							}),
							this._areDependentResourcesLoaded() ? this._allDependentResourcesDidLoad() : (this._dependentResourceLoadingTimeoutAfter = Date.now() + DEPENDENT_RESOURCE_LOADING_TIMEOUT_MILLISECONDS, this._dependentResourceLoadingTimeoutId = global.setInterval(this._checkDependentResourcesLoaded.bind(this), DEPENDENT_RESOURCE_LOADING_CHECK_INTERVAL_MILLISECONDS))
						},
						pInstall._areDependentResourcesLoaded = function () {
							if (!this._areDependentResourcesLoadedMemoized) {
								var e = !0;
								$.each(this._dependentResources(), function (t, n) {
									n.isLoaded() || (e = !1)
								}),
								this._areDependentResourcesLoadedMemoized = e
							}
							return this._areDependentResourcesLoadedMemoized
						},
						pInstall._checkDependentResourcesLoaded = function () {
							var e = this._areDependentResourcesLoaded();
							if (e || Date.now() >= this._dependentResourceLoadingTimeoutAfter)
								global.clearInterval(this._dependentResourceLoadingTimeoutId), this._dependentResourceLoadingTimeoutAfter = null, e ? this._allDependentResourcesDidLoad() : this._allDependentResourcesDidFailToLoad()
						},
						pInstall._queryElementLocator = function () {
							return this._queryElementLocatorMemoized || (this._queryElementLocatorMemoized = new Swiftype.QueryElementLocator(this, document.body)),
							this._queryElementLocatorMemoized
						},
						pInstall._webConfig = function () {
							return this._configuration.install.web
						},
						pInstall._templatesConfig = function () {
							return this._webConfig().templates["default"]
						},
						pInstall._createInjectionPoint = function (e) {
							var t = $("<div></div>");
							t.addClass("st-injected-content-generated"),
							this._queryElementLocator().allocateToInstall(t);
							var n = this._webConfig().ui_bindings.injected_content.attach_points[e];
							this._setLocaleClassToElement(t);
							var r = /^#(\S+)$/,
							i = /^\.(\-?[_A-Za-z]+[_a-zA-Z0-9-]*)$/;
							return $.each(n, function (e, n) {
								var s = r.exec(n);
								if (s)
									return t.attr("id", s[1]), t;
								var o = i.exec(n);
								if (o)
									return t.addClass(o[1]), t
							}),
							t
						},
						pInstall._handleGlobalEvents = function () {
							var e = this;
							$(window).resize(function (t) {
								e._fireListeners("windowResized", t)
							}),
							Swiftype.Utils.bindOnEventsTo(window, "hashchange", function (t) {
								e._fireListeners("anchorHashChanged", t)
							})
						},
						pInstall._setLocaleClassToElement = function (e) {
							var t = this._configuration.install.locale,
							n = this._configuration.install.rtl_locales;
							$.inArray(t, $.parseJSON(n)) >= 0 && e.addClass("swiftype-rtl")
						},
						pInstall._findInjectionPoint = function (e) {
							var t = this._webConfig().ui_bindings.injected_content.attach_points[e],
							n = this,
							r = null;
							return $.each(t, function (e, t) {
								$(t).each(function (e, t) {
									t = $(t);
									if (n._queryElementLocator().belongsToInstall(t))
										return r = t, !0
								})
							}),
							r
						},
						pInstall._findOrCreateInjectionPoint = function (e) {
							var t = this._findInjectionPoint(e);
							return t ? this._queryElementLocator().allocateToInstall(t) : (t = this._createInjectionPoint(e), $(document.body).append(t)),
							t
						},
						pInstall._addInjectedContentIfNeeded = function () {
							var e = this,
							t = this._templatesConfig().injected_content;
							t && !Swiftype.Utils.isEmptyObject(t) && $.each(t, function (n, r) {
								var i = e._findOrCreateInjectionPoint(n);
								if (r) {
									var s = new Swiftype.InjectedContent(i, t, n, e.getLocale(), e.getLocalizationMessages());
									s.attach()
								}
							})
						},
						pInstall._setupConstantCrawl = function () {
							var e = new Swiftype.ConstantCrawl(this._configuration.install.endpoints.constant_crawl);
							e.attach()
						},
						pInstall._setupUi = function () {
							this._addInjectedContentIfNeeded(),
							this._setupConstantCrawl(),
							this._searchContext = new Swiftype.QueryContext(this, "search", this._templatesConfig().search, this._webConfig().ui_bindings.search, this._webConfig().ui.search, this._configuration.install.hooks),
							this._autocompleteContext = new Swiftype.QueryContext(this, "autocomplete", this._templatesConfig().autocomplete, this._webConfig().ui_bindings.autocomplete, this._webConfig().ui.autocomplete, this._configuration.install.hooks),
							this._autocompleteContext.setupUi(),
							this._searchContext.setupUi(),
							this._handleGlobalEvents()
						},
						pInstall.getSearchContext = function () {
							return this._searchContext
						},
						pInstall._fireListeners = function () {
							this._searchContext._fireListeners.apply(this._searchContext, arguments),
							this._autocompleteContext._fireListeners.apply(this._autocompleteContext, arguments)
						},
						pInstall._allDependentResourcesDidLoad = function () {
							var e = this;
							$(function () {
								e._setupUi()
							})
						},
						pInstall._allDependentResourcesDidFailToLoad = function () {
							this._allDependentResourcesDidLoad()
						},
						pInstall._setDebugLevel = function () {
							this._outputDebugMessages = !1;
							var e = new Swiftype.AnchorParams(Swiftype.Utils.getHash());
							e.getValue("sdebug") && (this._outputDebugMessages = !0)
						},
						pInstall.log = function (e, t, n) {
							this._outputDebugMessages && window.console && console.log(new global._InternalSwiftypeError(e, t, n))
						},
						pInstall._wrapApiResults = function (e, t) {
							return new Swiftype.Results(e, t, this.getPrimaryDocType())
						},
						pInstall._wrapSuccessCallback = function (e, t) {
							var n = this;
							return function (r, i, s) {
								t(n._wrapApiResults(e, r), i, s)
							}
						},
						pInstall.performSearch = function (e, t, n) {
							var r = this._configuration.install.endpoints[e.queryType()],
							i = this,
							s = {
								type : "POST",
								url : r,
								data : e.apiAjaxDataParameters(),
								success : i._wrapSuccessCallback(e, t),
								error : n
							};
							this.log(this, DEBUG, "Asking Swiftype to perform the following query: " + JSON.stringify(s)),
							$.ajax(s)
						},
						pInstall.currentQueryDidChange = function (e, t, n) {
							this._searchContext.someQueryChanged(e, t, n),
							this._autocompleteContext.someQueryChanged(e, t, n)
						},
						pInstall._searchResultToTrackingParams = function (e) {
							return {
								id : e.id,
								score : e._score
							}
						},
						pInstall._trackAndSendToSearchResult = function (e, t, n, r) {
							n = Swiftype.Utils.convertToFullPath(n);
							var i = {
								_st_tracking : t.toTrackingParams(),
								_st_url : n
							},
							s = Swiftype.Utils.addParamsToUrl(e, i);
							this._sendToUrl(s, r)
						},
						pInstall._directlySendToSearchResult = function (e, t, n) {
							this._sendToUrl(t, n)
						},
						pInstall._sendToUrl = function (e, t) {
							t ? window.open(e, "_blank") : window.location = e
						},
						pInstall.sendToSearchResult = function (e, t, n) {
							var r = this._webConfig().analytics[e.getQuery().queryType()],
							i = this._configuration.install.endpoints.track_and_redirect_to_result;
							this.cookieSearchResult(e),
							r && i ? this._trackAndSendToSearchResult(i, e, t, n) : this._directlySendToSearchResult(e, t, n)
						},
						pInstall._searchResultsPageUrl = function () {
							return this._webConfig().ui.search_results_page_url
						},
						pInstall.onSearchResultsPage = function () {
							var e = this._searchResultsPageUrl();
							if (!e)
								return !0;
							var t = null;
							return e.indexOf("http://") === 0 || e.indexOf("https://") === 0 || e.indexOf("//") === 0 ? t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search : t = window.location.pathname + window.location.search,
							e === t || e + "/" === t || e === t + "/" ? !0 : !1
						},
						pInstall.sendUserToSearchResultsPageFor = function (e) {
							var t = this._searchResultsPageUrl();
							if (!this._searchResultsPageUrl())
								throw new Error("No Search Results Page URL configured.");
							var n = new Swiftype.AnchorParams(null, e.toAnchorParams());
							window.location = t + "#" + n.toAnchorString()
						},
						Swiftype.Install.InlineStylesheet = function (e, t) {
							this._install = e,
							this._loaded = !1,
							this._inlineCss = t
						};
						var pInlineStylesheet = Swiftype.Install.InlineStylesheet.prototype;
						pInlineStylesheet.toString = function () {
							return "[Swiftype.Install.InlineStylesheet]"
						},
						pInlineStylesheet.load = function () {
							this.isLoaded() || ($("head").append("<style type='text/css'>" + this._inlineCss + "</style>"), this._loaded = !0)
						},
						pInlineStylesheet.isLoaded = function () {
							return this._loaded
						},
						Swiftype.Install.DependentStylesheet = function (e, t) {
							this._install = e,
							this._url = t,
							this._loadRequested = !1,
							this._loaded = !1,
							this._link = null
						};
						var pDependentStylesheet = Swiftype.Install.DependentStylesheet.prototype;
						pDependentStylesheet.toString = function () {
							return "[Swiftype.Install.DependentStylesheet " + this._url + "]"
						},
						pDependentStylesheet._tagAttachPoint = function () {
							return this._tagAttachPointMemoized || (this._tagAttachPointMemoized = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]),
							this._tagAttachPointMemoized
						},
						pDependentStylesheet._inferDetectionRulesFromTag = function () {
							"sheet" in this._link ? (this._sheetPropertyName = "sheet", this._rulesPropertyName = "cssRules") : (this._sheetPropertyName = "styleSheet", this._rulesPropertyName = "rules")
						},
						pDependentStylesheet.load = function () {
							this._loadRequested || (this._link = document.createElement("link"), this._link.rel = "stylesheet", this._link.type = "text/css", this._link.href = this._url, this._tagAttachPoint().appendChild(this._link), this._inferDetectionRulesFromTag(), this._loadRequested = !0)
						},
						pDependentStylesheet.isLoaded = function () {
							if (!this._loaded) {
								if (!this._loadRequested)
									return !1;
								this._link[this._sheetPropertyName] && (this._loaded = !0)
							}
							return this._loaded
						},
						Swiftype.Install.DependentJavascript = function (e, t) {
							this._install = e,
							this._url = t,
							this._loadRequested = !1,
							this._loaded = !1
						};
						var pDependentJavascript = Swiftype.Install.DependentJavascript.prototype;
						pDependentJavascript.toString = function () {
							return "[Swiftype.Install.DependentJavascript " + this._url + "]"
						},
						pDependentJavascript._didLoad = function () {
							this._loaded = !0
						},
						pDependentJavascript.load = function () {
							if (!this._loadRequested) {
								var e = document.createElement("script");
								e.type = "text/javascript",
								e.async = !0,
								e.src = this._url;
								var t = document.getElementsByTagName("script")[0];
								t.parentNode.insertBefore(e, t);
								if (e.addEventListener)
									e.addEventListener("load", this._didLoad.bind(this), !1);
								else {
									var n = this;
									e.attachEvent("onreadystatechange", function () {
										/complete|loaded/.test(e.readyState) && n._didLoad()
									})
								}
							}
						},
						pDependentJavascript.isLoaded = function () {
							return this._loaded
						},
						Swiftype.Result = function (e, t, n) {
							this._resultSet = e,
							this._sequenceInThisPage = t,
							this._apiResult = n
						};
						var pResult = Swiftype.Result.prototype;
						pResult.toString = function () {
							return "[Swiftype.Result: Result " + this._sequenceInThisPage + " in this page for " + this._resultSet + "]"
						},
						pResult.getQuery = function () {
							return this._resultSet.getQuery()
						},
						pResult.getQueryType = function () {
							return this.getQuery().queryType()
						},
						pResult.getResultSetName = function () {
							return this._resultSet.getSetName()
						},
						pResult.getResultSet = function () {
							return this._resultSet
						},
						pResult._escapeHtml = function (e) {
							return typeof e != "string" ? e : Swiftype.Utils.escapeHtml(e)
						},
						pResult._highlightFor = function (e) {
							return this._apiResult.highlight[e]
						},
						pResult._rawFor = function (e) {
							return this._apiResult[e]
						},
						pResult._arrayFor = function (e) {
							var t = this._rawFor(e);
							return $.isArray(t) ? t : [t]
						},
						pResult._scalarFor = function (e) {
							var t = this._rawFor(e);
							return $.isArray(t) ? t[0] : t
						};
						var STANDARD_RESULT_TRUNCATION_LENGTH = 300;
						pResult._truncate = function (e) {
							return Swiftype.Utils.truncateString(e, STANDARD_RESULT_TRUNCATION_LENGTH)
						},
						pResult._templateResult = function (e) {
							return this._highlightFor(e) || this._escapeHtml(this._truncate(this._scalarFor(e)))
						},
						pResult._templateFullResult = function (e) {
							return this._escapeHtml(this._scalarFor(e))
						},
						pResult._templateArrayResult = function (e) {
							var t = this;
							return $.map(this._arrayFor(e), function (e, n) {
								return void n,
								t._escapeHtml(e)
							})
						},
						pResult._templateRawResult = function (e) {
							return this._rawFor(e)
						},
						pResult._syntheticTemplateRenderingContextProperties = function () {
							return {
								__rank : this.getSequenceInThisPage(),
								doc_id : this._apiResult.id
							}
						},
						pResult._mapToTemplateRenderingContext = function (e) {
							var t = this,
							n = $.extend({}, this._syntheticTemplateRenderingContextProperties());
							return $.each(this._apiResult, function (r) {
								n[r] = e.call(t, r)
							}),
							n
						},
						pResult.toTemplateRenderingContext = function () {
							return this._toTemplateRenderingContextMemoized || (this._toTemplateRenderingContextMemoized = {
									result : this._mapToTemplateRenderingContext(this._templateResult),
									full_result : this._mapToTemplateRenderingContext(this._templateFullResult),
									array_result : this._mapToTemplateRenderingContext(this._templateArrayResult),
									raw_result : this._mapToTemplateRenderingContext(this._templateRawResult)
								}),
							this._toTemplateRenderingContextMemoized
						},
						pResult.toTrackingParams = function () {
							return {
								doc_id : this._apiResult.id,
								doc_type : this.getResultSetName(),
								query : this.getQuery().toTrackingParams(),
								query_type : this.getQueryType()
							}
						},
						pResult.getSequenceInThisPage = function () {
							return this._sequenceInThisPage
						},
						pResult.getOverallSequence = function () {
							return this._resultSet.currentPageStart() + this.getSequenceInThisPage()
						},
						pResult.getTemplateRenderingContext = function () {
							return this._getTemplateRenderingContextMemoized || (this._getTemplateRenderingContextMemoized = $.extend({}, this._resultSet.getTemplateRenderingContext(), this.toTemplateRenderingContext())),
							this._getTemplateRenderingContextMemoized
						},
						Swiftype.ResultSet = function (e, t, n, r) {
							this._resultObject = e,
							this._setName = t,
							this._apiMetadata = n,
							this._resultArray = [];
							var i = this;
							$.each(r, function (e, t) {
								var n = new Swiftype.Result(i, e, t);
								i._resultArray.push(n)
							})
						};
						var pResultSet = Swiftype.ResultSet.prototype;
						pResultSet.getSetName = function () {
							return this._setName
						},
						pResultSet.getQuery = function () {
							return this._resultObject.getQuery()
						},
						pResultSet.currentPageNumber = function () {
							return this._apiMetadata.current_page
						},
						pResultSet.facets = function () {
							return this._apiMetadata.facets
						},
						pResultSet.lastPageNumber = function () {
							return this._apiMetadata.num_pages
						},
						pResultSet.totalResultCount = function () {
							return this._apiMetadata.total_result_count
						},
						pResultSet._perPage = function () {
							return this._apiMetadata.per_page
						},
						pResultSet.currentPageStart = function () {
							return (this.currentPageNumber() - 1) * this._perPage() + 1
						},
						pResultSet._currentPageEnd = function () {
							return this.currentPageNumber() === this.lastPageNumber() ? this.totalResultCount() : this.currentPageNumber() * this._perPage()
						},
						pResultSet._numPages = function () {
							return this._apiMetadata.num_pages
						},
						pResultSet.toString = function () {
							return "[Swiftype.ResultSet for '" + this._setName + "' for " + this._resultObject + ": page " + this.currentPageNumber() + " of " + this.lastPageNumber() + ", " + this.totalResultCount() + " total results]"
						},
						pResultSet.toTemplateRenderingContext = function () {
							if (!this._toTemplateRenderingContextMemoized) {
								var e = {
									current_page : this.currentPageNumber(),
									current_page_start : this.currentPageStart(),
									current_page_end : this._currentPageEnd(),
									num_pages : this.lastPageNumber(),
									per_page : this._perPage(),
									total_records_for_this_set : this._apiMetadata.total_result_count,
									records : [],
									spelling_suggestions : [],
									spelling_suggestion : null
								};
								$.each(this._resultArray, function (t, n) {
									e.records.push(n.toTemplateRenderingContext())
								});
								var t = this.getSpellingSuggestions();
								$.each(t, function (t, n) {
									e.spelling_suggestions.push(n.getTemplateRenderingContext())
								}),
								t.length > 0 && (e.spelling_suggestion = t[0].getTemplateRenderingContext()),
								this._toTemplateRenderingContextMemoized = e
							}
							return this._toTemplateRenderingContextMemoized
						},
						pResultSet.getTemplateRenderingContext = function () {
							return this._getTemplateRenderingContextMemoized || (this._getTemplateRenderingContextMemoized = $.extend({}, this._resultObject.getTemplateRenderingContext(), this.toTemplateRenderingContext())),
							this._getTemplateRenderingContextMemoized
						},
						pResultSet.eachResult = function (e) {
							$.each(this._resultArray, e)
						},
						pResultSet.countOfResultsOnThisPage = function () {
							return this._resultArray.length
						},
						pResultSet.getSpellingSuggestions = function () {
							var e = this._apiMetadata.spelling_suggestion,
							t = [];
							return e && t.push(new Swiftype.SpellingSuggestionResult(e.text, e.score)),
							t
						},
						Swiftype.SpellingSuggestionResult = function (e, t) {
							this._text = e,
							this._score = t
						};
						var pSpellingSuggestionResult = Swiftype.SpellingSuggestionResult.prototype;
						pSpellingSuggestionResult.toString = function () {
							return "[Swiftype.SpellingSuggestionResult: '" + this._text + "', score " + this._score + "]"
						},
						pSpellingSuggestionResult.getText = function () {
							return this._text
						},
						pSpellingSuggestionResult.getScore = function () {
							return this._score
						},
						pSpellingSuggestionResult.potentiallyMergeWith = function (e) {
							if (e._text === this._text) {
								var t = this._score;
								return e._score > this._score && (t = e._score),
								new Swiftype.SpellingSuggestionResult(this._text, t)
							}
							return null
						},
						pSpellingSuggestionResult.getTemplateRenderingContext = function () {
							return this._toTemplateRenderingContextMemoized || (this._toTemplateRenderingContextMemoized = {
									text : Swiftype.Utils.escapeHtml(this._text),
									score : this._score
								}),
							this._toTemplateRenderingContextMemoized
						},
						Swiftype.Results = function (e, t, n) {
							this._query = e,
							this._errors = t.errors,
							this._resultSetsByName = {},
							this._primaryDocType = n;
							var r = this;
							$.each(t.info, function (e, n) {
								var i = t.records[e] || [];
								r._resultSetsByName[e] = new Swiftype.ResultSet(r, e, n, i)
							})
						};
						var pResults = Swiftype.Results.prototype;
						pResults.toString = function () {
							return "[Swiftype.Results for " + this._query + "; results: " + this.totalRecordsAcrossAllSets() + "]"
						},
						pResults.getQuery = function () {
							return this._query
						},
						pResults.isEmptyQuery = function () {
							return this.getQuery().isEmptyQuery()
						},
						pResults.toTemplateRenderingContext = function () {
							if (!this._toTemplateRenderingContextMemoized) {
								var e = {
									query : this._query.toTemplateRenderingContext(),
									total_records_across_all_sets : this.totalRecordsAcrossAllSets(),
									total_results : this.totalRecordsAcrossAllSets(),
									errors : this._errors,
									spelling_suggestion : null,
									spelling_suggestions : [],
									sets : {}

								},
								t = this.getAllSpellingSuggestions();
								$.each(t, function (t, n) {
									e.spelling_suggestions.push(n.getTemplateRenderingContext())
								}),
								t.length > 0 && (e.spelling_suggestion = t[0].getTemplateRenderingContext()),
								$.each(this._resultSetsByName, function (t, n) {
									e.sets[t] = n.toTemplateRenderingContext()
								}),
								this._toTemplateRenderingContextMemoized = e
							}
							return this._toTemplateRenderingContextMemoized
						},
						pResults.getTemplateRenderingContext = function () {
							return this._getTemplateRenderingContextMemoized || (this._getTemplateRenderingContextMemoized = this.toTemplateRenderingContext()),
							this._getTemplateRenderingContextMemoized
						},
						pResults._resultSetNames = function () {
							var e = $.map(this._resultSetsByName, function (e, t) {
									return t
								});
							return e.sort(),
							e
						},
						pResults._resultSetCount = function () {
							return this._resultSetNames().length
						},
						pResults._getResultSet = function (e) {
							return this._resultSetsByName[e]
						},
						pResults.firstResultSet = function () {
							return this._getResultSet(this._primaryDocType)
						},
						pResults._eachResultSet = function (e) {
							$.each(this._resultSetsByName, function (t, n) {
								e(n)
							})
						},
						pResults.totalRecordsAcrossAllSets = function () {
							var e = 0;
							return this._eachResultSet(function (t) {
								e += t.totalResultCount()
							}),
							e
						},
						pResults.hasAnyResults = function () {
							return this.totalRecordsAcrossAllSets() > 0
						},
						pResults._uniqifySpellingSuggestions = function (e) {
							var t = [];
							for (var n = 0; n < e.length; ++n) {
								var r = e[n];
								if (r) {
									for (var i = n + 1; i < e.length; ++i) {
										var s = e[i];
										if (s) {
											var o = r.potentiallyMergeWith(s);
											o && (r = o, e[i] = null)
										}
									}
									t.push(r)
								}
							}
							return t
						},
						pResults.getAllSpellingSuggestions = function () {
							var e = [];
							this._eachResultSet(function (t) {
								e = e.concat(t.getSpellingSuggestions())
							});
							var t = this._uniqifySpellingSuggestions(e);
							return t.sort(function (e, t) {
								return t.getScore() - e.getScore()
							}),
							t
						},
						Swiftype.Query = function (e) {
							this._queryType = e,
							this._queryText = null,
							this._pageNumber = null,
							this._sortFieldByDocumentTypeSlug = {},
							this._sortDirectionByDocumentTypeSlug = {},
							this._filterDataByDocumentTypeSlugAndFilterField = {},
							this._facetDataByDocumentTypeSlug = {}

						};
						var pQuery = Swiftype.Query.prototype;
						pQuery.toString = function () {
							var e = "[Swiftype.Query: " + this._queryType + " for '" + this._queryText + "'";
							return this._pageNumber !== null && (e += ", page " + this._pageNumber),
							!Swiftype.Utils.isEmptyObject(this._sortFieldByDocumentTypeSlug) && !Swiftype.Utils.isEmptyObject(this._sortDirectionByDocumentTypeSlug) && (e += ", sortFieldByDocumentTypeSlug " + this._sortFieldByDocumentTypeSlug, e += ", sortDirectionByDocumentTypeSlug " + this._sortDirectionByDocumentTypeSlug),
							Swiftype.Utils.isEmptyObject(this._filterDataByDocumentTypeSlugAndFilterField) || (e += ", filters ", $.each(this._filterDataByDocumentTypeSlugAndFilterField, function (t, n) {
									$.each(n, function (t, n) {
										e += " for field " + t,
										$.each(n, function (t, n) {
											e += " " + t + " " + n
										})
									})
								})),
							e += "]",
							e
						},
						pQuery.setQueryText = function (e) {
							this._queryText = e
						},
						pQuery.getQueryText = function () {
							return this._queryText
						},
						pQuery.mutateFromPageAnchor = function (e) {
							var t = e.getValue("stq"),
							n = e.getValue("stp"),
							r = e.getValue("sort_field"),
							i = e.getValue("sort_direction"),
							s = e.getValue("filters"),
							o = e.getValue("facets"),
							u = this;
							t && (t = decodeURIComponent(t.replace(/\+/g, " ")), u.setQueryText(t)),
							n && n.match(/^[0-9]+$/) && u.setPageNumber(parseInt(n)),
							s && u.setFilterData(s),
							o && u.setFacetData(o),
							r && i && (u.setSortField(r), u.setSortDirection(i))
						},
						pQuery._normalizedQueryText = function () {
							return this._queryText ? Swiftype.Utils.trimString(this._queryText) : this._queryText
						},
						pQuery._toObject = function () {
							var e = $.extend({}, {
									queryType : this._queryType,
									q : this._normalizedQueryText(),
									pageNumber : this._pageNumber,
									sortField : this._sortFieldByDocumentTypeSlug,
									sortDirection : this._sortDirectionByDocumentTypeSlug,
									filters : this._filterDataByDocumentTypeSlugAndFilterField,
									facets : this._facetDataByDocumentTypeSlug
								}),
							t = this;
							return $.each(VALID_OPTIONAL_SETTINGS, function (n, r) {
								e[r] = t[r]
							}),
							e
						},
						pQuery.apiAjaxDataParameters = function () {
							var e = this,
							t = {
								q : this._queryText,
								page : this._pageNumber
							};
							return !Swiftype.Utils.isEmptyObject(this._sortFieldByDocumentTypeSlug) && !Swiftype.Utils.isEmptyObject(this._sortDirectionByDocumentTypeSlug) && (t.sort_field = this._sortFieldByDocumentTypeSlug, t.sort_direction = this._sortDirectionByDocumentTypeSlug),
							Swiftype.Utils.isEmptyObject(this._filterDataByDocumentTypeSlugAndFilterField) || (t.filters = this._filterDataByDocumentTypeSlugAndFilterField),
							Swiftype.Utils.isEmptyObject(this._facetDataByDocumentTypeSlug) || (t.facets = this._facetDataByDocumentTypeSlug),
							$.each(VALID_OPTIONAL_SETTINGS, function (n, r) {
								e[r] && (t[r] = e[r])
							}),
							t
						},
						pQuery.queryType = function () {
							return this._queryType
						},
						pQuery.toCacheKey = function () {
							return JSON.stringify(this._toObject())
						},
						pQuery.isEqualToQuery = function (e) {
							return e ? Swiftype.Utils.compareObjects(this._toObject(), e._toObject()) : !1
						},
						pQuery.isEmptyQuery = function () {
							return this._queryText === null || typeof this._queryText == "undefined"
						},
						pQuery.clone = function () {
							var e = new Swiftype.Query(this._queryType);
							return e.setQueryText(this.getQueryText()),
							e.setPageNumber(this.getPageNumber()),
							e.setSortField(this.getSortFieldByDocumentTypeSlug()),
							e.setSortDirection(this.getSortDirectionByDocumentTypeSlug()),
							e.setFilterData(this.getFilterDataByDocumentTypeSlugAndFilterField()),
							e.setFacetData(this.getFacetDataByDocumentTypeSlug()),
							e.setOptionalSettings(this.getOptionlSettings()),
							e
						},
						pQuery.setPageNumber = function (e) {
							this._pageNumber = e
						},
						pQuery.setSortField = function (e) {
							this._sortFieldByDocumentTypeSlug = e
						},
						pQuery.setSortDirection = function (e) {
							this._sortDirectionByDocumentTypeSlug = e
						},
						pQuery.setFilterData = function (e) {
							this._filterDataByDocumentTypeSlugAndFilterField = e
						},
						pQuery.setFacetData = function (e) {
							this._facetDataByDocumentTypeSlug = e
						},
						pQuery.getPageNumber = function () {
							return this._pageNumber || 1
						},
						pQuery.setSortFieldByDocumentTypeSlug = function (e, t) {
							t !== null ? this._sortFieldByDocumentTypeSlug[e] = t : Swiftype.Utils.safelyDeleteProperty(e, this._sortFieldByDocumentTypeSlug)
						},
						pQuery.setSortDirectionByDocumentTypeSlug = function (e, t) {
							t !== null ? this._sortDirectionByDocumentTypeSlug[e] = t : Swiftype.Utils.safelyDeleteProperty(e, this._sortDirectionByDocumentTypeSlug)
						},
						pQuery.getSortFieldByDocumentTypeSlug = function () {
							return this._sortFieldByDocumentTypeSlug
						},
						pQuery.getSortDirectionByDocumentTypeSlug = function () {
							return this._sortDirectionByDocumentTypeSlug
						};
						var VALID_OPTIONAL_SETTINGS = ["per_page", "test_fields"];
						pQuery.getOptionlSettings = function () {
							var e = {},
							t = this;
							return $.each(VALID_OPTIONAL_SETTINGS, function (n, r) {
								e[r] = t[r]
							}),
							e
						},
						pQuery.setOptionalSettings = function (e) {
							var t = this;
							$.each(e, function (e, n) {
								VALID_OPTIONAL_SETTINGS.indexOf(e) > -1 && (t[e] = n)
							})
						},
						pQuery.setFilterDataByDocumentTypeSlugAndFilterField = function (e, t, n) {
							n !== null && t !== null ? (this._filterDataByDocumentTypeSlugAndFilterField[e] = this._filterDataByDocumentTypeSlugAndFilterField[e] || {}, this._filterDataByDocumentTypeSlugAndFilterField[e][t] = n) : this._filterDataByDocumentTypeSlugAndFilterField[e] && (Swiftype.Utils.safelyDeleteProperty(t, this._filterDataByDocumentTypeSlugAndFilterField[e]), $.isEmptyObject(this._filterDataByDocumentTypeSlugAndFilterField[e]) && Swiftype.Utils.safelyDeleteProperty(e, this._filterDataByDocumentTypeSlugAndFilterField))
						},
						pQuery.setFacetDataByDocumentTypeSlug = function (e, t) {
							if (t !== null) {
								var n = this._facetDataByDocumentTypeSlug[e];
								n && n.indexOf(t) < 0 ? this._facetDataByDocumentTypeSlug[e] = n.concat(t) : this._facetDataByDocumentTypeSlug[e] = [].concat(t)
							} else
								Swiftype.Utils.safelyDeleteProperty(e, this._facetDataByDocumentTypeSlug)
						},
						pQuery.getFilterDataByDocumentTypeSlugAndFilterField = function () {
							return this._filterDataByDocumentTypeSlugAndFilterField
						},
						pQuery.getFacetDataByDocumentTypeSlug = function () {
							return this._facetDataByDocumentTypeSlug
						},
						pQuery.toAnchorParams = function () {
							return {
								stq : this.getQueryText(),
								stp : this.getPageNumber(),
								sort_field : this.getSortFieldByDocumentTypeSlug(),
								sort_direction : this.getSortDirectionByDocumentTypeSlug(),
								filters : this.getFilterDataByDocumentTypeSlugAndFilterField(),
								facets : this.getFacetDataByDocumentTypeSlug()
							}
						},
						pQuery.toTrackingParams = function () {
							return {
								q : this.getQueryText(),
								page : this.getPageNumber(),
								sort_field : this.getSortFieldByDocumentTypeSlug(),
								sort_direction : this.getSortDirectionByDocumentTypeSlug(),
								filters : this.getFilterDataByDocumentTypeSlugAndFilterField(),
								facets : this.getFacetDataByDocumentTypeSlug()
							}
						},
						pQuery.toTemplateRenderingContext = function () {
							var e = {
								type : this._queryType,
								text : Swiftype.Utils.escapeHtml(this.getQueryText())
							};
							return this.getPageNumber() && (e.page = this.getPageNumber()),
							e
						},
						Swiftype.InjectedContent = function (e, t, n, r, i) {
							this._injectionPoint = e,
							this._templates = t,
							this._templateName = n,
							this._locale = r,
							this._localizationMessages = i
						};
						var pInjectedContent = Swiftype.InjectedContent.prototype;
						pInjectedContent.attach = function () {
							var e = Swiftype.Utils.getCompiledTemplate(this._templates, this._templateName, this._locale, this._localizationMessages);
							if (e) {
								var t = {},
								n = e.render(t);
								this._injectionPoint.html(n)
							}
						},
						Swiftype.ConstantCrawl = function (e) {
							this._endpoint = e
						};
						var pConstantCrawl = Swiftype.ConstantCrawl.prototype;
						pConstantCrawl.attach = function () {
							var e = new Image,
							t = {};
							t.url = encodeURIComponent(window.location.href),
							document.referrer !== "" && (t.r = encodeURIComponent(document.referrer)),
							e.src = Swiftype.Utils.addParamsToUrl(this._endpoint, t)
						},
						Swiftype.QueryElementLocator = function (e, t, n, r) {
							this._install = e,
							this._baseScope = $(t),
							this._objectClassNameToCssSelectorArrayHash = n,
							this._classContainingObject = r
						};
						var pQueryElementLocator = Swiftype.QueryElementLocator.prototype;
						pQueryElementLocator.toString = function () {
							return "[Swiftype.QueryElementLocator for " + this._install + ", base scope " + this._baseScope + ", hash " + this._objectClassNameToCssSelectorArrayHash + "]"
						},
						pQueryElementLocator.log = function (e, t, n) {
							this._install.log(e, t, n)
						};
						var INSTALL_KEY_DATA_ATTRIBUTE_NAME = "st-install-key";
						pQueryElementLocator.belongsToInstall = function (e, t) {
							var n = this;
							return $(e).parents().each(function (e, t) {
								var r = Swiftype.Utils.getDataOrClassValue(t, INSTALL_KEY_DATA_ATTRIBUTE_NAME);
								if (r)
									return n._install.matchesKey(r)
							}),
							t ? !1 : this._install.isDefaultInstall()
						},
						pQueryElementLocator.allocateToInstall = function (e) {
							if (!this.belongsToInstall(e, !0)) {
								var t = this._install.getInstallDataAttribute();
								e.attr("data-" + INSTALL_KEY_DATA_ATTRIBUTE_NAME, t),
								e.addClass("st-install-" + t)
							}
						},
						pQueryElementLocator.forEachMatchingElement = function (e) {
							var t = this;
							if (!this._objectClassNameToCssSelectorArrayHash)
								throw "objectClassNameToCssSelectorArrayHash is falsey";
							$.each(this._objectClassNameToCssSelectorArrayHash, function (n, r) {
								var i = t._classContainingObject[n];
								if (!i)
									throw "There is no object class named '" + n + "' in: " + t._classContainingObject;
								$.each(r, function (n, r) {
									var s = t._baseScope.find(r);
									s.each(function (n, r) {
										t.belongsToInstall(r) && e.call(r, i, r, n)
									})
								})
							})
						};
						var SEARCH_CONTEXT_CACHE_SIZE = 100;
						Swiftype.QueryContext = function (e, t, n, r, i, s) {
							this._install = e,
							this._queryType = t,
							this._searchCache = new Swiftype.LRUCache(SEARCH_CONTEXT_CACHE_SIZE),
							this._queryComposer = new Swiftype.QueryComposer(this, r, i.query_composer, s.query_filter),
							this._resultsDisplay = new Swiftype.ResultsDisplay(this, n, r, i.results_display, s.result_clicked_filter),
							this._uiConfiguration = i
						};
						var pQueryContext = Swiftype.QueryContext.prototype;
						pQueryContext.toString = function () {
							return "[Swiftype.QueryContext '" + this._queryType + "' for " + this._install + "]"
						},
						pQueryContext.getInstall = function () {
							return this._install
						},
						pQueryContext.getQueryComposer = function () {
							return this._queryComposer
						};
						var EMPTY_QUERY_RESULTS = {
							errors : {},
							info : {},
							record_count : 0,
							records : {}

						};
						pQueryContext._createResultsForEmptyQuery = function (e) {
							return new Swiftype.Results(e, EMPTY_QUERY_RESULTS, this._install.getPrimaryDocType())
						},
						pQueryContext.setVisibility = function (e, t) {
							var n = t;
							n === "toggle" && (n = !this.getVisibility(e));
							if (n !== !0 && n !== !1)
								throw "Invalid newState for setVisibility: '" + n + "'";
							switch (e) {
							case "queryComposer":
								this._queryComposer.setVisible(n);
								break;
							case "resultsDisplay":
								this._resultsDisplay.setVisible(n);
								break;
							case "all":
								this._queryComposer.setVisible(n),
								this._resultsDisplay.setVisible(n);
								break;
							default:
								throw "Invalid target for visibility: '" + e + "'"
							}
						},
						pQueryContext.getVisibility = function (e) {
							switch (e) {
							case "queryComposer":
								return this._queryComposer.isVisible();
							case "resultsDisplay":
								return this._resultsDisplay.isVisible();
							case "all":
								return this._queryComposer.isVisible() && this._resultsDisplay.isVisible();
							case "any":
								return this._queryComposer.isVisible() || this._resultsDisplay.isVisible();
							default:
								throw "Invalid target for visibility: '" + e + "'"
							}
						},
						pQueryContext.visibilityChanged = function (e, t) {
							this._fireListeners("visibilityChanged", e, t)
						},
						pQueryContext._isSearchContext = function () {
							return this._queryType === "search"
						},
						pQueryContext.pushQueryToGA = function (e) {
							this._isSearchContext() && Swiftype.Utils.pushToGA(e.getQueryText())
						},
						pQueryContext.cookieSearchQuery = function (e) {
							this._isSearchContext() && this.getInstall().cookieSearchQuery(e)
						},
						pQueryContext.setupUi = function () {
							this._isSearchContext() && (this._queryComposer.addAnchorHashInput(), this._resultsDisplay.addAnchorHashOutput()),
							this._queryComposer.modifyDomAsNeeded(),
							this._resultsDisplay.modifyDomAsNeeded(),
							this._queryComposer.attach(),
							this._resultsDisplay.attach(),
							this.setVisibility("queryComposer", this._uiConfiguration.query_composer.initially_visible),
							this.setVisibility("resultsDisplay", this._uiConfiguration.results_display.initially_visible),
							this._queryComposer.uiSetupComplete(),
							this._resultsDisplay.uiSetupComplete()
						},
						pQueryContext.newQuery = function () {
							return new Swiftype.Query(this._queryType)
						},
						pQueryContext._searchResultsCacheHit = function (e) {
							this._searchResultsAvailable(e)
						},
						pQueryContext._searchResultsDidReturn = function (e) {
							this.log(this, DEBUG, "Server responded with results: " + e),
							this._searchCache.put(e.getQuery().toCacheKey(), e),
							this._searchResultsAvailable(e),
							this._queryComposer.propagateQuery()
						},
						pQueryContext._searchResultsDidFail = function (e, t, n) {
							this.log(this, "warn", "Server could not perform query " + e + ": " + n)
						},
						pQueryContext._searchResultsCacheMiss = function (e) {
							this._install.performSearch(e, this._searchResultsDidReturn.bind(this), this._searchResultsDidFail.bind(this))
						},
						pQueryContext._getListeners = function () {
							return [this._queryComposer, this._resultsDisplay]
						},
						pQueryContext._fireListeners = function (e) {
							var t = [];
							t = t.concat(Array.prototype.slice.call(arguments, 1)),
							$.each(this._getListeners(), function (n, r) {
								r[e] && r[e].apply(r, t)
							})
						},
						pQueryContext._searchResultsAvailable = function (e) {
							this._fireListeners("searchResultsAvailable", e)
						},
						pQueryContext.log = function (e, t, n) {
							this._install.log(e, t, n)
						},
						pQueryContext.currentQueryDidChange = function (e, t) {
							this._install.currentQueryDidChange(this, e, t)
						},
						pQueryContext.someQueryChanged = function (e, t, n) {
							this._fireListeners("someQueryChanged", e, t, n)
						},
						pQueryContext._charactersRequiredToQuery = function () {
							return this._uiConfiguration.query_composer.characters_required_to_query || 0
						},
						pQueryContext.canRunQuery = function (e) {
							var t = e.getQueryText();
							return typeof t == "string" && t.length > 0 && t.length < this._charactersRequiredToQuery() ? !1 : !0
						},
						pQueryContext.findQueryElements = function (e) {
							var t = this._queryComposer.findQueryInputs(e),
							n = this._resultsDisplay.findQueryOutputs(e);
							return t.concat(n)
						},
						pQueryContext.getSearchResults = function (e) {
							e.isEmptyQuery() ? this._searchResultsCacheHit(this._createResultsForEmptyQuery(e)) : this._searchResultsCacheMiss(e)
						},
						pQueryContext.sendToSearchResult = function (e, t, n) {
							return this._install.sendToSearchResult(e, t, n)
						},
						pQueryContext.sendUserToSearchResultsPageIfNecessary = function (e) {
							return this._isSearchContext() && !this._install.onSearchResultsPage() ? (this._install.sendUserToSearchResultsPageFor(e), !0) : !1
						},
						Swiftype.QueryComposer = function (e, t, n, r) {
							this._context = e,
							this._uiBindings = t,
							this._uiConfiguration = n,
							this._queryFilterHook = r,
							this._currentQuery = null,
							this._queryInputs = [],
							this._lastActiveQueryInputs = {},
							this._permanentQueryTransforms = []
						};
						var pQueryComposer = Swiftype.QueryComposer.prototype;
						pQueryComposer.toString = function () {
							return "[Swiftype.QueryComposer on " + this._context + "]"
						},
						pQueryComposer.log = function (e, t, n) {
							this._context.log(e, t, n)
						},
						pQueryComposer.setVisible = function (e) {
							e = !!e;
							if (typeof this._visible == "undefined" || e !== this._visible)
								this._visible = e, this._context.visibilityChanged("queryComposer", e)
						},
						pQueryComposer.isVisible = function () {
							return !!this._visible
						},
						pQueryComposer._addQueryInput = function (e) {
							e.validate() ? this._queryInputs.push(e) : e.handleInvalid()
						},
						pQueryComposer._getInstall = function () {
							return this._context.getInstall()
						},
						pQueryComposer._findAndAddQueryInputs = function () {
							var e = new Swiftype.QueryElementLocator(this._getInstall(), document, this._uiBindings.inputs, Swiftype.QueryInputs),
							t = this;
							e.forEachMatchingElement(function (e, n) {
								var r = new e(t, n, t._templates);
								t._addQueryInput(r)
							})
						},
						pQueryComposer.addAnchorHashInput = function () {
							this._uiConfiguration.disable_anchor_hash_params || this._addQueryInput(new Swiftype.QueryInputs.InputAnchorHash(this))
						},
						pQueryComposer.modifyDomAsNeeded = function () {},
						pQueryComposer.attach = function () {
							this._findAndAddQueryInputs(),
							$.each(this._queryInputs, function (e, t) {
								t.attach(),
								t.setLastActive()
							})
						},
						pQueryComposer.findQueryInputs = function (e) {
							var t = [];
							return $.each(this._queryInputs, function (n, r) {
								e(r) && t.push(r)
							}),
							t
						},
						pQueryComposer.addToPermanentQueryTransforms = function (e) {
							this._permanentQueryTransforms.push(e)
						},
						pQueryComposer._normalizeQuery = function (e) {
							this._permanentQueryTransforms.length > 0 && $.each(this._permanentQueryTransforms, function (t, n) {
								n(e)
							});
							if (this._queryFilterHook) {
								var t = e.clone(),
								n = this._queryFilterHook(t);
								n === !1 ? e = null : e = t.clone()
							}
							return e
						},
						pQueryComposer._setAndPropagateQuery = function (e) {
							this._currentQuery = e,
							this.propagateQuery()
						},
						pQueryComposer.propagateQuery = function () {
							var e = this;
							$.each(this._queryInputs, function (t, n) {
								n.propagateQuery(e._currentQuery)
							})
						},
						pQueryComposer._composeSearch = function (e) {
							var t = null;
							return e ? (this._currentQuery ? t = this._currentQuery.clone() : t = this._context.newQuery(), e(t)) : (t = this._context.newQuery(), $.each(this._queryInputs, function (e, n) {
									n.updateQuery(t)
								})),
							this._normalizeQuery(t)
						},
						pQueryComposer.runSearch = function (e) {
							var t = this._composeSearch(e);
							return t === null ? !1 : this._context.canRunQuery(t) ? (this._context.cookieSearchQuery(t), this._context.pushQueryToGA(t), this._context.sendUserToSearchResultsPageIfNecessary(t) ? !1 : (this._setAndPropagateQuery(t), this._context.setVisibility("resultsDisplay", !0), this._context.getSearchResults(this._currentQuery), !0)) : !1
						},
						pQueryComposer.uiSetupComplete = function () {
							$.each(this._queryInputs, function (e, t) {
								t.uiSetupComplete && t.uiSetupComplete()
							})
						},
						pQueryComposer.searchResultsAvailable = function (e) {
							this._currentQuery && this._currentQuery.isEqualToQuery(e.getQuery()) && this._context.currentQueryDidChange(this, e)
						},
						pQueryComposer.setLastActiveQueryInput = function (e, t) {
							this._lastActiveQueryInputs[e] !== t && (this.log(this, DEBUG, "Setting last active input for '" + e + "' to: " + t.toString()), this._lastActiveQueryInputs[e] = t)
						},
						pQueryComposer.isLastActiveQueryInput = function (e, t) {
							return this._lastActiveQueryInputs[e] === t ? !0 : !1
						},
						pQueryComposer.someQueryChanged = function (e, t, n) {
							void[t, n],
							e !== this._context && this._uiConfiguration.hide_on_other_query && this._context.setVisible(!1)
						},
						pQueryComposer.windowResized = function (e) {
							$.each(this._queryInputs, function (t, n) {
								n.windowResized(e)
							})
						},
						pQueryComposer.anchorHashChanged = function (e) {
							var t,
							n;
							if (this._currentQuery) {
								var r = new Swiftype.AnchorParams(Swiftype.Utils.getHash());
								t = this._currentQuery.clone(),
								n = this._context.newQuery(),
								n.mutateFromPageAnchor(r)
							}
							(!this._currentQuery || !t.isEqualToQuery(n)) && $.each(this._queryInputs, function (t, n) {
								n.anchorHashChanged(e)
							})
						},
						Swiftype.QueryInputs = Swiftype.QueryInputs || {},
						Swiftype.QueryInputs.Base = function (e, t) {
							this._queryComposer = e,
							this._element = $(t)
						};
						var pQueryInputBase = Swiftype.QueryInputs.Base.prototype;
						pQueryInputBase.toString = function () {
							return "[" + this._className + " on " + Swiftype.Utils.describeElement(this._element) + " for " + this._queryComposer + "]"
						},
						pQueryInputBase.log = function (e, t, n) {
							this._queryComposer.log(e, t, n)
						},
						pQueryInputBase._describeElement = function (e) {
							return Swiftype.Utils.describeElement(e)
						},
						pQueryInputBase.validate = function () {
							return !0
						},
						pQueryInputBase.getElement = function () {
							return $(this._element)
						},
						pQueryInputBase.isDefaultTargetFor = function (e) {
							return void e,
							!1
						},
						pQueryInputBase.setLastActive = function () {
							this._inputCategory && this._queryComposer.setLastActiveQueryInput(this._inputCategory, this)
						},
						pQueryInputBase._isLastActive = function () {
							return this._queryComposer.isLastActiveQueryInput(this._inputCategory, this)
						},
						pQueryInputBase.attach = function () {},
						pQueryInputBase._updateQuery = function (e) {
							void e
						},
						pQueryInputBase.updateQuery = function (e) {
							this._isLastActive() && this._updateQuery(e)
						},
						pQueryInputBase.propagateQuery = function (e) {
							this._changeToReflectSearch(e)
						},
						pQueryInputBase.windowResized = function (e) {
							void e
						},
						pQueryInputBase.anchorHashChanged = function (e) {
							void e
						},
						pQueryInputBase._changeToReflectSearch = function (e) {
							void e
						},
						pQueryInputBase.handleInvalid = function () {},
						Swiftype.AnchorParams = function (e, t) {
							e = this._universalAnchorString(e),
							this._anchorStringToHash(e),
							t && this._updateAnchorHash(t)
						};
						var pAnchorParams = Swiftype.AnchorParams.prototype;
						pAnchorParams._universalAnchorString = function (e) {
							var t = e;
							return t ? t[0] === "#" && (t = t.substring(1)) : t = "",
							t
						},
						pAnchorParams.toAnchorString = function () {
							return Swiftype.Utils.convertObjectToQueryParams(this._anchorHash)
						},
						pAnchorParams._anchorStringToHash = function (e) {
							this._anchorHash = Swiftype.Utils.convertQueryParamsToObject(e)
						},
						pAnchorParams._updateAnchorHash = function (e) {
							var t = this;
							$.each(e, function (e, n) {
								t._anchorHash[e] = n || ""
							})
						},
						pAnchorParams.getValue = function (e) {
							return this._anchorHash[e]
						},
						pAnchorParams.hasKey = function (e) {
							return this._anchorHash.hasOwnProperty(e)
						},
						Swiftype.QueryInputs.InputAnchorHash = function (e) {
							Swiftype.QueryInputs.Base.call(this, e),
							this._className = "Swiftype.QueryInputs.InputAnchorHash",
							this._inputCategory = "searchText"
						},
						Swiftype.QueryInputs.InputAnchorHash.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype);
						var pInputAnchorHash = Swiftype.QueryInputs.InputAnchorHash.prototype;
						pInputAnchorHash._updateQuery = function (e) {
							var t = new Swiftype.AnchorParams(Swiftype.Utils.getHash());
							e.mutateFromPageAnchor(t)
						},
						pInputAnchorHash.uiSetupComplete = function () {
							var e = new Swiftype.AnchorParams(Swiftype.Utils.getHash());
							e.hasKey("stq") && (this.setLastActive(), this._queryComposer.runSearch())
						},
						pInputAnchorHash.anchorHashChanged = function (e) {
							void e;
							var t = new Swiftype.AnchorParams(Swiftype.Utils.getHash());
							t.hasKey("stq") && (this.setLastActive(), this._queryComposer.runSearch())
						},
						Swiftype.QueryInputs.QueryTextField = function (e, t) {
							Swiftype.QueryInputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryInputs.QueryTextField",
							this._inputCategory = "searchText"
						},
						Swiftype.QueryInputs.QueryTextField.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype);
						var pQueryTextField = Swiftype.QueryInputs.QueryTextField.prototype;
						pQueryTextField.validate = function () {
							return Swiftype.QueryInputs.Base.prototype.validate.call(this) ? Swiftype.Utils.isInputLikeElement(this._element) ? !0 : (this.log(this, WARN, "QueryTextField can only be specified for 'input' or 'textarea' elements. Currently specified on " + this._describeElement(this._element)), !1) : !1
						},
						pQueryTextField.isDefaultTargetFor = function (e) {
							return void e,
							!0
						},
						pQueryTextField._updateQuery = function (e) {
							var t = this._element.val();
							t && e.setQueryText(t)
						},
						pQueryTextField._changeToReflectSearch = function (e) {
							e.isEmptyQuery() ? this._element.val("") : this._element.val() !== e.getQueryText() && this._element.val(e.getQueryText())
						},
						pQueryTextField.attach = function () {
							this._element.attr("autocomplete", "off").attr("autocorrect", "off").attr("autocapitalize", "off")
						},
						Swiftype.QueryInputs.SubmitTextField = function (e, t) {
							Swiftype.QueryInputs.QueryTextField.call(this, e, t),
							this._className = "Swiftype.QueryInputs.SubmitTextField",
							this._inputCategory = "searchText"
						},
						Swiftype.QueryInputs.SubmitTextField.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.QueryTextField.prototype);
						var pSubmitTextField = Swiftype.QueryInputs.SubmitTextField.prototype;
						pSubmitTextField.attach = function () {
							var e = this;
							Swiftype.Utils.bindOnEventsTo(e._element, "input", function () {
								e.setLastActive()
							}),
							Swiftype.Utils.bindOnEventsTo(e._element, "keydown", function (t) {
								t.which === 13 && (e._element.blur(), e.setLastActive(), t.preventDefault(), e._queryComposer.runSearch())
							}),
							Swiftype.Utils.bindOnEventsTo(e._element.parents("form").not('[name="aspnetForm"]'), "submit", function (t) {
								e.setLastActive(),
								t.preventDefault(),
								e._queryComposer.runSearch()
							}),
							Swiftype.QueryInputs.QueryTextField.prototype.attach.call(e)
						},
						Swiftype.QueryInputs.KeypressTextField = function (e, t) {
							Swiftype.QueryInputs.QueryTextField.call(this, e, t),
							this._className = "Swiftype.QueryInputs.KeypressTextField",
							this._inputCategory = "suggestText"
						},
						Swiftype.QueryInputs.KeypressTextField.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.QueryTextField.prototype);
						var pKeypressTextField = Swiftype.QueryInputs.KeypressTextField.prototype;
						pKeypressTextField.attach = function () {
							var e = this;
							Swiftype.Utils.bindOnEventsTo(this._element, "input", function (t) {
								e.setLastActive(),
								t.preventDefault(),
								e._queryComposer.runSearch()
							}),
							Swiftype.QueryInputs.QueryTextField.prototype.attach.call(this)
						},
						Swiftype.QueryInputs.Trigger = function (e, t) {
							Swiftype.QueryInputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryInputs.Trigger",
							this._inputCategory = "trigger"
						},
						Swiftype.QueryInputs.Trigger.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype);
						var pTrigger = Swiftype.QueryInputs.Trigger.prototype;
						pTrigger.attach = function () {
							var e = this;
							Swiftype.Utils.bindOnEventsTo(this._element, "click", function (t) {
								e.setLastActive(),
								t.preventDefault(),
								e._queryComposer.runSearch()
							})
						},
						Swiftype.QueryInputs.PaginationInput = function (e, t) {
							Swiftype.QueryInputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryInputs.PaginationInput",
							this._inputCategory = "pagination"
						},
						Swiftype.QueryInputs.PaginationInput.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype);
						var pPaginationInput = Swiftype.QueryInputs.PaginationInput.prototype;
						pPaginationInput._maybeChangeToPageNumber = function (e, t) {
							typeof e == "string" && e.match(/^\s*\d+\s*$/) && (e = parseInt(e));
							if (typeof e != "number")
								return !1;
							e > 0 && (this.setLastActive(), t.preventDefault(), this._queryComposer.runSearch(function (t) {
									t.setPageNumber(e)
								}))
						},
						pPaginationInput.attach = function () {
							var e = this;
							Swiftype.Utils.bindOnEventsTo(this._element, "click", "[data-st-page]", function (t) {
								e._maybeChangeToPageNumber($(this).data("st-page"), t)
							}),
							Swiftype.Utils.bindOnEventsTo(this._element, "change", function (t) {
								var n = $(this).find(":selected"),
								r = $(n).data("st-page");
								e._maybeChangeToPageNumber(r, t)
							})
						},
						Swiftype.QueryInputs.RefiningInput = function (e, t) {
							Swiftype.QueryInputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryInputs.RefiningInput",
							this._inputCategory = "refining"
						},
						Swiftype.QueryInputs.RefiningInput.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype);
						var pRefiningInput = Swiftype.QueryInputs.RefiningInput.prototype;
						pRefiningInput.attach = function () {
							var e = this;
							this._setClassAttributes(),
							Swiftype.Utils.bindOnEventsTo(this._element, "click", e._dataElementIdentifierSelector, function (t) {
								t.preventDefault(),
								e._currentStateChanged(this)
							}),
							Swiftype.Utils.bindOnEventsTo(this._element, "change", "select", function (t) {
								var n = $(this).find(":selected");
								$(n).hasClass(e._elementIdentifierClass) && (t.preventDefault(), e._currentStateChanged(n))
							})
						},
						pRefiningInput.validate = function () {
							return this._setClassAttributes(),
							this._elementMusthaveDataAttributes(this._element, this._dataDocumentTypePostfix)
						},
						pRefiningInput._elementMusthaveDataAttributes = function (e, t, n) {
							t = [].concat(t);
							var r = this,
							i = !0;
							return $.each(t, function (t, s) {
								var o = r._toDataAttribute(s),
								u = Swiftype.Utils.getDataOrClassValue(e, s),
								a = r._element.find("." + s).length > 0;
								u === undefined && !a ? (r.log(r, WARN, "Element must have data attribute " + o + " or respective class; you may need to add it to: " + r._describeElement(this._element)), i = !1) : Swiftype.Utils.isBlank(u) && !n && !a && (r.log(r, WARN, "Element's data attribute " + o + " should have a valid/none empty value; check " + r._describeElement(this._element)), i = !1)
							}),
							i
						},
						pRefiningInput._describeElement = function (e) {
							Swiftype.Utils.describeElement(e)
						},
						pRefiningInput._toDataAttribute = function (e) {
							return "data-" + e
						},
						pRefiningInput._setClassAttributes = function () {
							this._dataDocumentTypePostfix = "st-document-type",
							this._elementIdentifierClass = "st-" + this._inputCategory + "-element",
							this._dataElementIdentifierSelector = "." + this._elementIdentifierClass,
							this._activeClass = "st-" + this._inputCategory + "-active-item",
							this._activeSelector = "." + this._activeClass,
							this._dataFieldPostfix = "st-document-field",
							this._dataValuesPostfix = "st-" + this._inputCategory + "-values",
							this._dataTypePostfix = "st-" + this._inputCategory + "-type",
							this._dataDirectionPostfix = "st-" + this._inputCategory + "-direction",
							this._dataFromPostfix = "st-" + this._inputCategory + "-from",
							this._dataToPostfix = "st-" + this._inputCategory + "-to",
							this._documentType = this._getDocumentTypeForElement(this._element)
						},
						pRefiningInput._markDomElementAsActive = function (e, t) {
							var n = this._activeClass || "active";
							e = $(e),
							t ? e.addClass(n) : e.removeClass(n)
						},
						pRefiningInput._propActiveElements = function () {
							var e = this._activeClass || "active",
							t = this;
							$.each(this._getAllElements(), function (n, r) {
								r = $(r),
								!r.hasClass(e) && r.attr(":checked") || r.hasClass(e) && !r.attr(":checked") ? t._propElementCheckedWithRetry(r, !0) : t._propElementCheckedWithRetry(r, !1),
								r.hasClass(e) ? r.prop("selected", !0) : r.prop("selected", !1)
							})
						},
						pRefiningInput._propElementCheckedWithRetry = function (e, t) {
							e.prop("checked", t),
							setTimeout(function () {
								e.prop("checked") !== t && e.prop("checked", t)
							}, 300)
						},
						pRefiningInput._getAllElements = function () {
							return $(this._element).find(this._dataElementIdentifierSelector)
						},
						pRefiningInput._getValuesForElement = function (e) {
							return Swiftype.Utils.getDataOrClassValue(e, this._dataValuesPostfix)
						},
						pRefiningInput._getFromForElement = function (e) {
							return Swiftype.Utils.getDataOrClassValue(e, this._dataFromPostfix)
						},
						pRefiningInput._getToForElement = function (e) {
							return Swiftype.Utils.getDataOrClassValue(e, this._dataToPostfix)
						},
						pRefiningInput._getTypeForElement = function (e) {
							return Swiftype.Utils.getDataOrClassValue(e, this._dataTypePostfix)
						},
						pRefiningInput._getDirectionForElement = function (e) {
							return Swiftype.Utils.getDataOrClassValue(e, this._dataDirectionPostfix)
						},
						pRefiningInput._getDocumentFieldForElement = function (e) {
							return Swiftype.Utils.getDataOrClassValue(e, this._dataFieldPostfix)
						},
						pRefiningInput._getDocumentTypeForElement = function (e) {
							return Swiftype.Utils.getDataOrClassValue(e, this._dataDocumentTypePostfix)
						},
						pRefiningInput._changeToReflectSearch = function (e) {
							void e
						},
						Swiftype.QueryInputs.FilterInput = function (e, t) {
							Swiftype.QueryInputs.RefiningInput.call(this, e, t),
							this._className = "Swiftype.QueryInputs.FilterInput",
							this._inputCategory = "filter"
						},
						Swiftype.QueryInputs.FilterInput.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.RefiningInput.prototype);
						var pFilterInput = Swiftype.QueryInputs.FilterInput.prototype;
						pFilterInput._setClassAttributes = function () {
							Swiftype.QueryInputs.RefiningInput.prototype._setClassAttributes.call(this),
							this._documentField = this._getDocumentFieldForElement(this._element)
						},
						pFilterInput.validate = function () {
							var e = this,
							t = Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this);
							return t = t && this._elementMusthaveDataAttributes(this._element, this._dataFieldPostfix),
							$.each(e._getAllElements(), function (n, r) {
								t = t && e._elementMusthaveDataAttributes(r, e._dataValuesPostfix)
							}),
							t
						},
						pFilterInput._currentStateChanged = function (e) {
							var t = this,
							n = t._getFilterType(e),
							r = t._getFilterValues(e);
							t.setLastActive(),
							t._queryComposer.runSearch(function (e) {
								var i = null;
								n && r.length > 0 && (i = {
										type : n,
										values : r
									}, e._pageNumber = 1),
								e.setFilterDataByDocumentTypeSlugAndFilterField(t._documentType, t._documentField, i)
							})
						},
						pFilterInput._getFilterType = function (e) {
							var t = this._getTypeForElement(this._element),
							n = this._getTypeForElement(e);
							if (n || !t)
								t = n;
							return t
						},
						pFilterInput._getFilterValues = function (e) {
							return this._getValuesForElement(e)
						},
						pFilterInput._changeToReflectSearch = function (e) {
							var t = this,
							n = e.getFilterDataByDocumentTypeSlugAndFilterField()[this._documentType],
							r;
							if (n) {
								r = n[this._documentField];
								if (r) {
									var i = r.values;
									i = [].concat(i),
									$.each(t._getAllElements(), function (e, n) {
										var r = t._getValuesForElement(n);
										r = [].concat(r);
										var s = t._getFilterType(n),
										o;
										$.each(r, function (e, t) {
											i.indexOf(t) >= 0 ? o = o === undefined ? !0 : Swiftype.Utils.stringOperator(s, o, !0) : o = o === undefined ? !1 : Swiftype.Utils.stringOperator(s, o, !1)
										}),
										t._markDomElementAsActive(n, o)
									})
								}
							}
							(!n || !r) && $.each(t._getAllElements(), function (e, n) {
								t._markDomElementAsActive(n, !1)
							}),
							this._propActiveElements()
						},
						Swiftype.QueryInputs.FilterInputRelatedGroup = function (e, t) {
							Swiftype.QueryInputs.FilterInput.call(this, e, t),
							this._className = "Swiftype.QueryInputs.FilterInputRelatedGroup",
							this._inputCategory = "filter"
						},
						Swiftype.QueryInputs.FilterInputRelatedGroup.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.FilterInput.prototype);
						var pFilterInputRelatedGroup = Swiftype.QueryInputs.FilterInputRelatedGroup.prototype;
						pFilterInputRelatedGroup.validate = function () {
							var e = Swiftype.QueryInputs.FilterInput.prototype.validate.call(this);
							return e && this._elementMusthaveDataAttributes(this._element, this._dataTypePostfix)
						},
						pFilterInputRelatedGroup._getFilterType = function (e) {
							return void e,
							this._getTypeForElement(this._element)
						},
						pFilterInputRelatedGroup._getFilterValues = function (e) {
							var t = this,
							n = [],
							r = this._getValuesForElement(e);
							$(e).hasClass(this._activeClass) || (n = n.concat(r));
							var i = $(this._element).find(this._dataElementIdentifierSelector + this._activeSelector);
							return $.each(i, function (i, s) {
								void i,
								$(s).is($(e)) || (r = t._getValuesForElement(s), n.indexOf(r) === -1 && (n = n.concat(r)))
							}),
							n
						},
						Swiftype.QueryInputs.FilterInputRange = function (e, t) {
							Swiftype.QueryInputs.FilterInput.call(this, e, t),
							this._className = "Swiftype.QueryInputs.FilterInputRange",
							this._inputCategory = "filter",
							this._sliderBarSelector = ".st-filter-range-slidebar"
						},
						Swiftype.QueryInputs.FilterInputRange.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.FilterInput.prototype);
						var pFilterInputRange = Swiftype.QueryInputs.FilterInputRange.prototype;
						pFilterInputRange.attach = function () {
							var e = this;
							Swiftype.QueryInputs.FilterInput.prototype.attach.call(this),
							Swiftype.Utils.bindOnEventsTo(this._element, "change", this._fromDataClassSelector + "," + this._toDataClassSelector, function (t) {
								t.preventDefault(),
								e._currentStateChanged(this)
							}),
							Swiftype.Utils.bindOnEventsTo(this._element, "change", this._sliderBarSelector, function (t) {
								t.preventDefault(),
								e._fireChangeHiddenFields(e, this)
							})
						},
						pFilterInputRange.validate = function () {
							var e = this,
							t = Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this);
							return t = t && this._elementMusthaveDataAttributes(this._element, this._dataFieldPostfix),
							$.each(e._getAllElements(), function (n, r) {
								t = t && e._elementMusthaveDataAttributes(r, [e._dataFromPostfix, e._dataToPostfix])
							}),
							t
						},
						pFilterInputRange._setClassAttributes = function () {
							Swiftype.QueryInputs.FilterInput.prototype._setClassAttributes.call(this),
							this._fromDataClassSelector = "." + this._dataFromPostfix,
							this._toDataClassSelector = "." + this._dataToPostfix
						},
						pFilterInputRange._currentStateChanged = function (e) {
							var t = this,
							n = "range",
							r = t._getFromData(e),
							i = t._getToData(e);
							t.setLastActive(),
							t._queryComposer.runSearch(function (e) {
								var s = null;
								n && !Swiftype.Utils.isBlank(r) && !Swiftype.Utils.isBlank(i) && (s = {
										type : n,
										from : r,
										to : i
									}, e._pageNumber = 1),
								e.setFilterDataByDocumentTypeSlugAndFilterField(t._documentType, t._documentField, s)
							})
						},
						pFilterInputRange._getFromData = function (e) {
							var t = this._getFromForElement(e);
							return Swiftype.Utils.isBlank(t) ? this._element.find(this._fromDataClassSelector).first().val() : t
						},
						pFilterInputRange._getToData = function (e) {
							var t = this._getToForElement(e);
							return Swiftype.Utils.isBlank(t) ? this._element.find(this._toDataClassSelector).first().val() : t
						},
						pFilterInputRange._fireChangeHiddenFields = Swiftype.Utils.debounce(function (e, t) {
								var n = $(t).data("ionRangeSlider");
								n && (e._element.find(e._fromDataClassSelector).val(n.old_from), e._element.find(e._toDataClassSelector).val(n.old_to).change())
							}, 500),
						pFilterInputRange._changeToReflectSearch = function (e) {
							var t = this,
							n = e.getFilterDataByDocumentTypeSlugAndFilterField()[this._documentType],
							r;
							if (n) {
								r = n[this._documentField];
								if (r) {
									var i = r.from,
									s = r.to;
									this._element.find(this._fromDataClassSelector).val(i),
									this._element.find(this._toDataClassSelector).val(s);
									var o = this._element.find(this._sliderBarSelector);
									o.attr("data-from", i),
									o.attr("data-to", s),
									$.each(t._getAllElements(), function (e, n) {
										var r = t._getFromForElement(n),
										o = t._getToForElement(n);
										r === i && o === s ? t._markDomElementAsActive(n, !0) : t._markDomElementAsActive(n, !0)
									})
								}
							}
							(!n || !r) && $.each(t._getAllElements(), function (e, n) {
								t._markDomElementAsActive(n, !1)
							}),
							this._propActiveElements(),
							this._element.find(this._sliderBarSelector).ionRangeSlider()
						},
						Swiftype.QueryInputs.FilterInputReset = function (e, t) {
							Swiftype.QueryInputs.FilterInput.call(this, e, t),
							this._className = "Swiftype.QueryInputs.FilterInputReset",
							this._inputCategory = "filter"
						},
						Swiftype.QueryInputs.FilterInputReset.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.FilterInput.prototype);
						var pFilterInputReset = Swiftype.QueryInputs.FilterInputReset.prototype;
						pFilterInputReset.validate = function () {
							var e = Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this);
							return e = e && this._elementMusthaveDataAttributes(this._element, this._dataFieldPostfix),
							e
						},
						pFilterInputReset._getFilterType = function (e) {
							return void e,
							null
						},
						pFilterInputReset._getFilterValues = function (e) {
							return void e,
							null
						},
						Swiftype.QueryInputs.SortInput = function (e, t) {
							Swiftype.QueryInputs.RefiningInput.call(this, e, t),
							this._className = "Swiftype.QueryInputs.SortInput",
							this._inputCategory = "sort"
						},
						Swiftype.QueryInputs.SortInput.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.RefiningInput.prototype);
						var pSortInput = Swiftype.QueryInputs.SortInput.prototype;
						pSortInput.validate = function () {
							var e = this,
							t = Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this);
							return $.each(e._getAllElements(), function (n, r) {
								t = t && e._elementMusthaveDataAttributes(r, [e._dataFieldPostfix, e._dataDirectionPostfix], !0)
							}),
							t
						},
						pSortInput._currentStateChanged = function (e) {
							var t = this,
							n = this._getSortDirection(e),
							r = this._getSortField(e);
							t.setLastActive(),
							t._queryComposer.runSearch(function (e) {
								e._pageNumber = 1,
								e.setSortFieldByDocumentTypeSlug(t._documentType, r),
								e.setSortDirectionByDocumentTypeSlug(t._documentType, n)
							})
						},
						pSortInput._getSortDirection = function (e) {
							return this._getDirectionForElement(e)
						},
						pSortInput._getSortField = function (e) {
							return this._getDocumentFieldForElement(e)
						},
						pSortInput._changeToReflectSearch = function (e) {
							var t = this,
							n = e.getSortFieldByDocumentTypeSlug()[this._documentType],
							r = e.getSortDirectionByDocumentTypeSlug()[this._documentType];
							!n || !r ? $.each(t._getAllElements(), function (e, n) {
								t._markDomElementAsActive(n, !1)
							}) : $.each(t._getAllElements(), function (e, i) {
								var s = t._getSortField(i),
								o = t._getSortDirection(i);
								n === s && r === o ? t._markDomElementAsActive(i, !0) : t._markDomElementAsActive(i, !1)
							}),
							this._propActiveElements()
						},
						Swiftype.QueryInputs.SortInputReset = function (e, t) {
							Swiftype.QueryInputs.SortInput.call(this, e, t),
							this._className = "Swiftype.QueryInputs.SortInputReset"
						},
						Swiftype.QueryInputs.SortInputReset.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.SortInput.prototype);
						var pSortInputReset = Swiftype.QueryInputs.SortInputReset.prototype;
						pSortInputReset.validate = function () {
							return Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this)
						},
						pSortInputReset._getSortDirection = function (e) {
							return void e,
							null
						},
						pSortInputReset._getSortField = function (e) {
							return void e,
							null
						},
						Swiftype.QueryInputs.FacetInput = function (e, t) {
							Swiftype.QueryInputs.RefiningInput.call(this, e, t),
							this._className = "Swiftype.QueryInputs.FacetInput",
							this._inputCategory = "facet"
						},
						Swiftype.QueryInputs.FacetInput.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.RefiningInput.prototype);
						var pFacetInput = Swiftype.QueryInputs.FacetInput.prototype;
						pFacetInput.attach = function () {
							this._setClassAttributes(),
							this._queryComposer.addToPermanentQueryTransforms(this._queryTransformFunction(this._element))
						},
						pFacetInput.validate = function () {
							var e = Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this);
							return e = e && this._elementMusthaveDataAttributes(this._element, this._dataFieldPostfix),
							e
						},
						pFacetInput._queryTransformFunction = function (e) {
							var t = this,
							n = this._getDocumentFieldForElement(e);
							return function (e) {
								e.setFacetDataByDocumentTypeSlug(t._documentType, n)
							}
						},
						Swiftype.QueryInputs.SpellingSuggestion = function (e, t) {
							Swiftype.QueryInputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryInputs.SpellingSuggestion",
							this._inputCategory = "suggestion"
						},
						Swiftype.QueryInputs.SpellingSuggestion.prototype = Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype);
						var pSpellingSuggestion = Swiftype.QueryInputs.SpellingSuggestion.prototype;
						pSpellingSuggestion.attach = function () {
							var e = this;
							Swiftype.Utils.bindOnEventsTo(this._element, "click", "[data-st-search-suggestion]", function (t) {
								var n = $(this).data("st-search-suggestion");
								n && (e.setLastActive(), t.preventDefault(), e._queryComposer.runSearch(function (e) {
										e.setQueryText(n)
									}))
							})
						},
						Swiftype.ResultsDisplay = function (e, t, n, r, i) {
							this._context = e,
							this._templates = t,
							this._uiBindings = n,
							this._uiConfiguration = r,
							this._resultClickedFilterHook = i,
							this._queryOutputs = []
						};
						var pResultsDisplay = Swiftype.ResultsDisplay.prototype;
						pResultsDisplay.toString = function () {
							return "[Swiftype.ResultsDisplay for " + this._context + "]"
						},
						pResultsDisplay.log = function (e, t, n) {
							this._context.log(e, t, n)
						},
						pResultsDisplay._addQueryOutput = function (e) {
							e.validate() ? this._queryOutputs.push(e) : e.handleInvalid()
						},
						pResultsDisplay.setVisible = function (e) {
							e = !!e;
							if (typeof this._visible == "undefined" || e !== this._visible)
								this._visible = e, this._context.visibilityChanged("resultsDisplay", this._visible)
						},
						pResultsDisplay.isVisible = function () {
							return !!this._visible
						},
						pResultsDisplay._getInstall = function () {
							return this._context.getInstall()
						},
						pResultsDisplay.setVisibility = function () {
							this._context.setVisibility.apply(this._context, arguments)
						},
						pResultsDisplay.getVisibility = function () {
							return this._context.getVisibility.apply(this._context, arguments)
						},
						pResultsDisplay.visibilityChanged = function () {
							var e = ["visibilityChanged"];
							for (var t = 0; t < arguments.length; ++t)
								e.push(arguments[t]);
							this._onAllQueryOutputs.apply(this, e)
						},
						pResultsDisplay._queryElementLocator = function () {
							return this._queryElementLocatorMemoized || (this._queryElementLocatorMemoized = new Swiftype.QueryElementLocator(this._getInstall(), document.body, this._uiBindings.outputs, Swiftype.QueryOutputs)),
							this._queryElementLocatorMemoized
						},
						pResultsDisplay._findAndAddQueryOutputs = function () {
							var e = this;
							this._queryElementLocator().forEachMatchingElement(function (t, n) {
								var r = new t(e, n, e._templates, e._getInstall());
								e._addQueryOutput(r)
							})
						},
						pResultsDisplay.addAnchorHashOutput = function () {
							this._uiConfiguration.disable_anchor_hash_params || this._addQueryOutput(new Swiftype.QueryOutputs.OutputAnchorHash(this))
						},
						pResultsDisplay.modifyDomAsNeeded = function () {},
						pResultsDisplay._onAllQueryOutputs = function (e) {
							var t = [];
							t = t.concat(Array.prototype.slice.call(arguments, 1)),
							$.each(this._queryOutputs, function (n, r) {
								var i = r[e];
								i && i.apply(r, t)
							})
						},
						pResultsDisplay.attach = function () {
							this._findAndAddQueryOutputs(),
							this
							._onAllQueryOutputs("attach")
						},
						pResultsDisplay.uiSetupComplete = function () {
							$.each(this._queryOutputs, function (e, t) {
								t.uiSetupComplete && t.uiSetupComplete()
							})
						},
						pResultsDisplay.someQueryChanged = function (e, t, n) {
							!this.isOurContext(e) && this._uiConfiguration.hide_on_other_query && this.setVisible(!1),
							$.each(this._queryOutputs, function (t, r) {
								r.someQueryChanged(e, n)
							})
						},
						pResultsDisplay.findQueryElements = function (e) {
							return this._context.findQueryElements(e)
						},
						pResultsDisplay.findQueryOutputs = function (e) {
							var t = [];
							return $.each(this._queryOutputs, function (n, r) {
								var i = e(r);
								i && t.push(r)
							}),
							t
						},
						pResultsDisplay.isOurContext = function (e) {
							return e === this._context
						},
						pResultsDisplay.getLocalizationMessages = function () {
							return this._getInstall().getLocalizationMessages()
						},
						pResultsDisplay.getLocale = function () {
							return this._getInstall().getLocale()
						},
						pResultsDisplay.sendToSearchResult = function (e, t, n) {
							return this._resultClickedFilterHook && this._resultClickedFilterHook(e),
							this._context.sendToSearchResult(e, t, n)
						},
						pResultsDisplay.getUiConfiguration = function () {
							return this._uiConfiguration
						},
						pResultsDisplay.windowResized = function (e) {
							$.each(this._queryOutputs, function (t, n) {
								n.windowResized(e)
							})
						},
						pResultsDisplay.anchorHashChanged = function (e) {
							$.each(this._queryOutputs, function (t, n) {
								n.anchorHashChanged(e)
							})
						},
						Swiftype.QueryOutputs = Swiftype.QueryOutputs || {},
						Swiftype.QueryOutputs.Base = function (e, t) {
							this._resultsDisplay = e,
							this._element = $(t),
							this._context = this._resultsDisplay._context
						};
						var pQueryOutputBase = Swiftype.QueryOutputs.Base.prototype;
						pQueryOutputBase.toString = function () {
							return "[" + this._className + " on " + Swiftype.Utils.describeElement(this._element) + ", resultsDisplay " + this._resultsDisplay + "]"
						},
						pQueryOutputBase.log = function (e, t, n) {
							this._resultsDisplay.log(e, t, n)
						},
						pQueryOutputBase.validate = function () {
							return !0
						},
						pQueryOutputBase._describeElement = function (e) {
							return Swiftype.Utils.describeElement(e)
						},
						pQueryOutputBase.setVisibility = function () {
							this._resultsDisplay.setVisibility.apply(this._resultsDisplay, arguments)
						},
						pQueryOutputBase.getVisibility = function () {
							return this._resultsDisplay.getVisibility.apply(this._resultsDisplay, arguments)
						},
						pQueryOutputBase._hideShowQueryElements = function (e, t) {
							this._element.hasClass(t) && Swiftype.Utils.elementHide(this._element),
							this._element.hasClass(e) && Swiftype.Utils.elementShow(this._element),
							Swiftype.Utils.elementHide(this._element.find("." + t)),
							Swiftype.Utils.elementShow(this._element.find("." + e))
						},
						pQueryOutputBase._showEmptyQueryElements = function () {
							this._hideShowQueryElements(Swiftype.CssBehaviorClasses.adornments.show_only_on_empty_query, Swiftype.CssBehaviorClasses.adornments.show_only_on_nonempty_query)
						},
						pQueryOutputBase._showNonemptyQueryElements = function () {
							this._hideShowQueryElements(Swiftype.CssBehaviorClasses.adornments.show_only_on_nonempty_query, Swiftype.CssBehaviorClasses.adornments.show_only_on_empty_query)
						},
						pQueryOutputBase._showCorrectQueryElements = function (e) {
							e.isEmptyQuery() ? this._showEmptyQueryElements() : this._showNonemptyQueryElements()
						},
						pQueryOutputBase._isOurContext = function (e) {
							return this._resultsDisplay.isOurContext(e)
						},
						pQueryOutputBase.someQueryChanged = function (e, t) {
							this._isOurContext(e) && this._currentSearchChanged(t)
						},
						pQueryOutputBase._currentSearchChanged = function (e) {
							this._showCorrectQueryElements(e)
						},
						pQueryOutputBase._attach = function () {},
						pQueryOutputBase.getElement = function () {
							return $(this._element)
						},
						pQueryOutputBase.attach = function () {
							this._attached || (this._attach(), this._attached = !0)
						},
						pQueryOutputBase.isDefaultTargetFor = function (e) {
							return void e,
							!1
						},
						pQueryOutputBase._sendToSearchResult = function (e, t, n) {
							return this._resultsDisplay.sendToSearchResult(e, t, n)
						},
						pQueryOutputBase._elementsWithDataAttributeNamed = function (e, t) {
							var n = "." + t;
							return $.map($(e), function (e) {
								return $(e).parents(n).andSelf().filter(n)
							})
						},
						pQueryOutputBase._sendToSearchResultViaElements = function (e, t, n) {
							e = this._elementsWithDataAttributeNamed(e, SWIFTYPE_RESULT_DATA_NAME)[0];
							var r = e.data(SWIFTYPE_RESULT_DATA_NAME),
							i;
							return n ? i = n : i = e.data(SWIFTYPE_SEARCH_RESULT_TARGET_URL_DATA_NAME),
							i ? (this._sendToSearchResult(r, i, t), !0) : !1
						},
						pQueryOutputBase.getLocale = function () {
							return this._resultsDisplay.getLocale()
						},
						pQueryOutputBase.getLocalizationMessages = function () {
							return this._resultsDisplay.getLocalizationMessages()
						},
						pQueryOutputBase.getResultsDisplay = function () {
							return this._resultsDisplay
						},
						pQueryOutputBase.windowResized = function (e) {
							void e
						},
						pQueryOutputBase.anchorHashChanged = function (e) {
							void e
						},
						pQueryOutputBase.handleInvalid = function () {},
						Swiftype.QueryOutputs.TemplatedQueryOutput = function (e, t, n) {
							Swiftype.QueryOutputs.Base.call(this, e, t),
							this._templates = n
						},
						Swiftype.QueryOutputs.TemplatedQueryOutput.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype);
						var pTemplatedQueryOutput = Swiftype.QueryOutputs.TemplatedQueryOutput.prototype;
						pTemplatedQueryOutput._getTemplateRenderingContext = function (e) {
							return e.getTemplateRenderingContext()
						},
						pTemplatedQueryOutput._getCompiledTemplate = function (e, t) {
							return Swiftype.Utils.getCompiledTemplate(e, t, this.getLocale(), this.getLocalizationMessages())
						},
						pTemplatedQueryOutput._createSingleToplevelElement = function () {
							var e = this._singleTopLevelElementName();
							return $("<" + e + "></" + e + ">")
						},
						pTemplatedQueryOutput._singleTopLevelElementName = function () {
							return "div"
						},
						pTemplatedQueryOutput._createToplevelStructure = function () {
							var e = this._element.contents(),
							t = !1;
							e.each(function (e, n) {
								n.nodeType !== 1 && (t = !0)
							});
							if (t) {
								var n = $(this._createSingleToplevelElement());
								n.addClass(Swiftype.CssBehaviorClasses.adornments.show_only_on_empty_query),
								n.html(this._element.html()),
								this._element.html(n[0].outerHTML)
							} else
								e.addClass(Swiftype.CssBehaviorClasses.adornments.show_only_on_empty_query)
						},
						pTemplatedQueryOutput._createOutputElement = function () {
							var e = this._outputElementName();
							return $("<" + e + "></" + e + ">")
						},
						pTemplatedQueryOutput._outputElementName = function () {
							return "div"
						},
						pTemplatedQueryOutput._outputElementShownOnlyWithNonemptyQueries = function () {
							return !0
						},
						pTemplatedQueryOutput._getOutputElement = function () {
							return this._outputElement || (this._outputElement = $(this._createOutputElement()), this._outputElementShownOnlyWithNonemptyQueries() && this._outputElement.addClass(Swiftype.CssBehaviorClasses.adornments.show_only_on_nonempty_query), this._outputElement.appendTo(this._element)),
							this._outputElement
						},
						pTemplatedQueryOutput._bindAsNeeded = function () {},
						pTemplatedQueryOutput._attach = function () {
							this._createToplevelStructure(),
							this._bindAsNeeded(),
							this._showEmptyQueryElements()
						},
						Swiftype.QueryOutputs.ChromeControl = function (e, t) {
							Swiftype.QueryOutputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.ChromeControl"
						},
						Swiftype.QueryOutputs.ChromeControl.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype);
						var pChromeControl = Swiftype.QueryOutputs.ChromeControl.prototype;
						pChromeControl._getSetVisibilityArguments = function () {
							var e = "toggle",
							t = "all";
							return Swiftype.Utils.hasClassMatching(this._element, /\-show\-/) ? e = !0 : Swiftype.Utils.hasClassMatching(this._element, /\-toggle\-/) ? e = "toggle" : Swiftype.Utils.hasClassMatching(this._element, /\-hide\-/) && (e = !1),
							Swiftype.Utils.hasClassMatching(this._element, /\-inputs$/) ? t = "queryComposer" : Swiftype.Utils.hasClassMatching(this._element, /\-outputs$/) && (t = "resultsDisplay"),
							[t, e]
						},
						pChromeControl._attach = function () {
							var e = this;
							Swiftype.Utils.bindOnEventsTo(this._element, "click", function (t) {
								e._applyVisibilityChanges(),
								t.preventDefault()
							})
						},
						pChromeControl._applyVisibilityChanges = function () {
							var e = this._getSetVisibilityArguments();
							this.setVisibility.apply(this, e)
						},
						Swiftype.QueryOutputs.OutputAnchorHash = function (e, t) {
							Swiftype.QueryOutputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.OutputAnchorHash",
							this._initial = !1
						},
						Swiftype.QueryOutputs.OutputAnchorHash.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype);
						var pOutputAnchorHash = Swiftype.QueryOutputs.OutputAnchorHash.prototype;
						pOutputAnchorHash._attach = function () {
							this._initial = !0
						},
						pOutputAnchorHash.visibilityChanged = function (e, t) {
							e === "resultsDisplay" && (!t && !this._initial && (window.location.hash = ""), this._initial = !1)
						},
						pOutputAnchorHash._currentSearchChanged = function (e) {
							var t = new Swiftype.AnchorParams(Swiftype.Utils.getHash(), e.getQuery().toAnchorParams());
							window.location.hash = t.toAnchorString()
						},
						pOutputAnchorHash.anchorHashChanged = function () {
							var e = new Swiftype.AnchorParams(Swiftype.Utils.getHash());
							e.hasKey("stq") || this.setVisibility("resultsDisplay", !1)
						},
						Swiftype.QueryOutputs.ChromeEscape = function (e, t) {
							Swiftype.QueryOutputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.ChromeEscape"
						},
						Swiftype.QueryOutputs.ChromeEscape.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype);
						var pChromeEscape = Swiftype.QueryOutputs.ChromeEscape.prototype;
						pChromeEscape._attach = function () {
							var e = this;
							Swiftype.Utils.bindOnEventsTo("body", "keydown", function (t) {
								t.which === 27 && e.setVisibility("resultsDisplay", !1)
							})
						},
						pChromeEscape.validate = function () {
							return Swiftype.QueryOutputs.Base.prototype.validate.call(this) ? $("body").length === 0 ? (this.log(this, WARN, "'Esc' event requires 'body' element to be present and it cannot be found."), !1) : !0 : !1
						},
						Swiftype.QueryOutputs.MobileMetaTag = function (e, t) {
							Swiftype.QueryOutputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.MobileMetaTag"
						},
						Swiftype.QueryOutputs.MobileMetaTag.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype);
						var pMobileMetaTag = Swiftype.QueryOutputs.MobileMetaTag.prototype;
						pMobileMetaTag._getExistingViewport = function () {
							return this._existingViewportRead || (this._existingViewport = $("head meta[name=viewport]").first(), this._existingViewport.length > 0 && (this._viewport = this._existingViewport, this._existingViewportContent = this._existingViewport.attr("content")), this._existingViewportRead = !0),
							this._existingViewport
						},
						pMobileMetaTag._hasExistingViewport = function () {
							return this._getExistingViewport().length > 0
						},
						pMobileMetaTag._setViewportContentTo = function (e) {
							this._hasExistingViewport() ? this._getExistingViewport().attr("content", e) : typeof e == "undefined" || e === null ? this._viewport && (this._viewport.remove(), this._viewport = null) : (this._viewport || ($("head").prepend('<meta name="viewport" content="' + e + '" />'), this._viewport = $("head meta[name=viewport]")), this._viewport.attr("content", e))
						},
						pMobileMetaTag.visibilityChanged = function (e, t) {
							void[e, t];
							var n = this.getVisibility("resultsDisplay");
							n ? this._setViewportContentTo("width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no") : this._hasExistingViewport() ? this._setViewportContentTo(this._existingViewportContent) : this._setViewportContentTo("width=device-width, initial-scale=1.0, maximum-scale=1.0")
						},
						Swiftype.QueryOutputs.ChromeElement = function (e, t) {
							Swiftype.QueryOutputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.ChromeElement"
						},
						Swiftype.QueryOutputs.ChromeElement.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype);
						var pChromeElement = Swiftype.QueryOutputs.ChromeElement.prototype;
						pChromeElement._showOrHide = function (e) {
							var t = $(this._element);
							e ? Swiftype.Utils.elementShow(t) : Swiftype.Utils.elementHide(t)
						},
						pChromeElement.visibilityChanged = function (e, t) {
							void[e, t],
							Swiftype.Utils.hasClassMatching(this._element, /\-input$/i) ? this._showOrHide(this.getVisibility("queryComposer")) : Swiftype.Utils.hasClassMatching(this._element, /\-output$/i) ? this._showOrHide(this.getVisibility("resultsDisplay")) : this._showOrHide(this.getVisibility("any"))
						},
						Swiftype.QueryOutputs.ChromeOverlayElement = function (e, t) {
							Swiftype.QueryOutputs.ChromeElement.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.ChromeOverlayElement"
						},
						Swiftype.QueryOutputs.ChromeOverlayElement.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.ChromeElement.prototype);
						var pChromeOverlayElement = Swiftype.QueryOutputs.ChromeOverlayElement.prototype;
						pChromeOverlayElement._showOrHide = function (e) {
							$("body").toggleClass("st-ui-overlay-active", e),
							window.scrollTo(0, 0),
							Swiftype.QueryOutputs.ChromeElement.prototype._showOrHide.call(this, e)
						},
						Swiftype.QueryOutputs.ResultList = function (e, t, n) {
							Swiftype.QueryOutputs.TemplatedQueryOutput.call(this, e, t, n),
							this._className = "Swiftype.QueryOutputs.ResultList"
						},
						Swiftype.QueryOutputs.ResultList.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.TemplatedQueryOutput.prototype);
						var pResultList = Swiftype.QueryOutputs.ResultList.prototype,
						SWIFTYPE_RESULT_DATA_NAME = "__swiftype_result",
						SWIFTYPE_SEARCH_RESULT_TARGET_URL_DATA_NAME = "st-url";
						pResultList._bindAsNeeded = function () {
							var e = this,
							t = this._getOutputElement();
							Swiftype.Utils.bindOnEventsTo(t, "mousedown", "[data-" + SWIFTYPE_SEARCH_RESULT_TARGET_URL_DATA_NAME + "]", function (t) {
								Swiftype.Utils.eventIsLeftClick(t) && e._sendToSearchResultViaElements(this, Swiftype.Utils.eventIsMiddleClick(t))
							}),
							Swiftype.Utils.bindOnEventsTo(t, "mousedown", "a", function (t) {
								Swiftype.Utils.eventIsLeftClick(t) && (e._sendToSearchResultViaElements(this, Swiftype.Utils.eventIsMiddleClick(t), $(this).attr("href")), t.preventDefault())
							})
						},
						pResultList._addDataToResult = function (e, t) {
							e.addClass(SWIFTYPE_RESULT_DATA_NAME),
							e.data(SWIFTYPE_RESULT_DATA_NAME, t)
						},
						pResultList._getTemplateRenderingContext = function (e) {
							return e.getTemplateRenderingContext()
						},
						pResultList._renderResults = function (e) {
							var t = this,
							n = e.firstResultSet();
							if (!n) {
								t.log(t, WARN, "Server returned no result sets at all; skipping result rendering entirely: " + e);
								return
							}
							var r = this._getCompiledTemplate(t._templates.result_item, n.getSetName());
							r ? (n.eachResult(function (e, n) {
									var i = t._getTemplateRenderingContext(n),
									s = r.render(i),
									o = $(s);
									t._addDataToResult(o, n),
									$(t._getOutputElement()).append(o)
								}), $(t._element).scrollTop(0)) : t.log(t, WARN, "Skipping rendering of " + n.countOfResultsOnThisPage() + " records for result set '" + n.getSetName() + "', because we have no template for that kind of set.")
						},
						pResultList._currentSearchChanged = function (e) {
							this._getOutputElement().html(""),
							e.isEmptyQuery() || this._renderResults(e),
							Swiftype.QueryOutputs.TemplatedQueryOutput.prototype._currentSearchChanged.call(this, e)
						},
						Swiftype.QueryOutputs.SetFocusOnInput = function (e, t) {
							Swiftype.QueryOutputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.SetFocusOnInput"
						},
						Swiftype.QueryOutputs.SetFocusOnInput.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype);
						var pSetFocusOnInput = Swiftype.QueryOutputs.SetFocusOnInput.prototype;
						pSetFocusOnInput._currentSearchChanged = function (e) {
							Swiftype.Utils.isMobile() || $(this._element).focus(),
							Swiftype.QueryOutputs.Base.prototype._currentSearchChanged.call(this, e)
						},
						pSetFocusOnInput._setFocusToElementWithTimeout = function () {
							var e = this;
							Swiftype.Utils.isMobile() || setTimeout(function () {
								$(e._element).focus()
							}, 100)
						},
						pSetFocusOnInput.visibilityChanged = function () {
							this._setFocusToElementWithTimeout()
						},
						Swiftype.QueryOutputs.TargetedQueryOutput = function (e, t) {
							Swiftype.QueryOutputs.Base.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.TargetedQueryOutput",
							this._targetElements = undefined
						},
						Swiftype.QueryOutputs.TargetedQueryOutput.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype);
						var pTargetedQueryOutput = Swiftype.QueryOutputs.TargetedQueryOutput.prototype;
						pTargetedQueryOutput._defaultTargets = function () {
							var e = this,
							t = this._resultsDisplay.findQueryElements(function (t) {
									return t.isDefaultTargetFor(e)
								});
							return $.map(t, function (e) {
								return e.getElement()[0]
							})
						},
						pTargetedQueryOutput._attach = function () {
							this._setTargetElements(),
							this._targetElements && this._attachToTarget()
						},
						pTargetedQueryOutput._setTargetElements = function () {
							var e = null,
							t = this._getTargetSelector();
							t ? e = $(this._getTargetSelector()) : e = $(this._defaultTargets()),
							e && e.length > 0 && (this._targetElements = e)
						},
						pTargetedQueryOutput._getTargetSelector = function () {
							return Swiftype.Utils.getDataOrClassValue(this._element, "st-target-element", !0)
						},
						pTargetedQueryOutput._getTargetElements = function () {
							return this._targetElements || this._setTargetElements(),
							this._targetElements
						},
						pTargetedQueryOutput._attachToTarget = function () {},
						pTargetedQueryOutput.handleInvalid = function () {
							$(this._element).remove(),
							this.log(this, WARN, "Target not found for " + this._getTargetSelector() + ". Removing element from DOM: " + this._describeElement(this._element))
						},
						pTargetedQueryOutput.validate = function () {
							return Swiftype.QueryOutputs.Base.prototype.validate.call(this) ? this._getTargetElements() ? !0 : (this.log(this, WARN, "This element requires a target, but none is specified; you may need to specify 'data-st-target-element' on " + this._describeElement(this._element)), !1) : !1
						},
						Swiftype.QueryOutputs.AdjoinedElement = function (e, t) {
							Swiftype.QueryOutputs.TargetedQueryOutput.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.AdjoinedElement",
							this._lastActiveTarget = null
						},
						Swiftype.QueryOutputs.AdjoinedElement.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.TargetedQueryOutput.prototype);
						var pAdjoinedElement = Swiftype.QueryOutputs.AdjoinedElement.prototype;
						pAdjoinedElement._attachToTarget = function () {
							var e = this;
							$.each(this._targetElements, function (t, n) {
								Swiftype.Utils.bindOnEventsTo(n, "input click focus", e._moveRestyleElement.bind(e, this))
							})
						},
						pAdjoinedElement._moveRestyleElement = function (e) {
							this._lastActiveTarget = e;
							var t = this._element[0],
							n = e.getBoundingClientRect(),
							r = $(e).offset();
							t.style.position = "absolute",
							t.style.top = $(e).outerHeight() + r.top + 1 + "px",
							t.style.left = r.left + "px",
							n.width && (t.style.width = parseInt(n.width) - 2 + "px"),
							t.style.zIndex = 99999
						},
						pAdjoinedElement._moveRestyleLastActiveTarget = function () {
							this._lastActiveTarget && this._moveRestyleElement(this._lastActiveTarget)
						},
						pAdjoinedElement.validate = function () {
							return Swiftype.QueryOutputs.TargetedQueryOutput.prototype.validate.call(this) ? Swiftype.Utils.isInputLikeElement(this._targetElements) ? !0 : (this.log(this, WARN, "Adjoined element can only be attached to 'input' or 'textarea' element. Currently specified on " + this._describeElement(this._targetElements)), !1) : !1
						},
						pAdjoinedElement.windowResized = function () {
							this._moveRestyleLastActiveTarget()
						},
						Swiftype.QueryOutputs.FieldDependentVisibility = function (e, t) {
							Swiftype.QueryOutputs.TargetedQueryOutput.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.FieldDependentVisibility"
						},
						Swiftype.QueryOutputs.FieldDependentVisibility.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.TargetedQueryOutput.prototype);
						var pFieldDependentVisibility = Swiftype.QueryOutputs.FieldDependentVisibility.prototype;
						pFieldDependentVisibility._attachToTarget = function () {
							this._setShowHideEvents()
						},
						pFieldDependentVisibility._shouldBeShown = function (e) {
							if (e.is(":hidden"))
								return !1;
							if (this._escapedByUser)
								return !1;
							var t = !1;
							return $.each(this._targetElements, function (e, n) {
								$(n).is(":focus") && (t = !0)
							}),
							t
						},
						pFieldDependentVisibility._showOrHideAppropriately = function (e) {
							var t = this._shouldBeShown(e);
							t ? Swiftype.Utils.elementShow(this._element) : Swiftype.Utils.elementHide(this._element)
						},
						pFieldDependentVisibility._setShowHideEvents = function () {
							var e = this;
							$.each(this._getTargetElements(), function (t, n) {
								Swiftype.Utils.bindOnEventsTo(n, "focus click input blur keydown", function (t) {
									t.which === 27 ? e._escapedByUser = !0 : e._escapedByUser = !1,
									e._showOrHideAppropriately($(n))
								})
							})
						},
						pFieldDependentVisibility.validate = function () {
							if (!Swiftype.QueryOutputs.TargetedQueryOutput.prototype.validate.call(this))
								return !1;
							var e = $(this._getTargetElements());
							return Swiftype.Utils.isInputLikeElement(e) ? !0 : !1
						},
						pFieldDependentVisibility.someQueryChanged = function (e, t) {
							this._currentSearchChanged(t)
						},
						pFieldDependentVisibility._currentSearchChanged = function (e) {
							Swiftype.QueryOutputs.TargetedQueryOutput.prototype._currentSearchChanged.call(this, e);
							var t = this;
							$.each(this._getTargetElements(), function (e, n) {
								$(n).is(":hidden") || t._showOrHideAppropriately($(n))
							})
						},
						Swiftype.QueryOutputs.FieldAndQueryDependentVisibility = function (e, t) {
							Swiftype.QueryOutputs.FieldDependentVisibility.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.FieldAndQueryDependentVisibility"
						},
						Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.FieldDependentVisibility.prototype);
						var pFieldAndQueryDependentVisibility = Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype;
						pFieldAndQueryDependentVisibility._shouldBeShown = function (e) {
							return this._hasQuery ? Swiftype.QueryOutputs.FieldDependentVisibility.prototype._shouldBeShown.call(this, e) : !1
						},
						pFieldAndQueryDependentVisibility._currentSearchChanged = function (e) {
							this._hasQuery = !e.isEmptyQuery(),
							Swiftype.QueryOutputs.FieldDependentVisibility.prototype._currentSearchChanged.call(this, e)
						},
						Swiftype.QueryOutputs.FieldAndResultsDependentVisibility = function (e, t) {
							Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.FieldAndResultsDependentVisibility"
						},
						Swiftype.QueryOutputs.FieldAndResultsDependentVisibility.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype);
						var pFieldAndResultsDependentVisibility = Swiftype.QueryOutputs.FieldAndResultsDependentVisibility.prototype;
						pFieldAndResultsDependentVisibility._shouldBeShown = function (e) {
							return this._lastQueryWasFromOurContext ? this._hasResults ? Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype._shouldBeShown.call(this, e) : !1 : !1
						},
						pFieldAndResultsDependentVisibility._currentSearchChanged = function (e) {
							this._hasResults = e.hasAnyResults(),
							Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype._currentSearchChanged.call(this, e)
						},
						pFieldAndResultsDependentVisibility.someQueryChanged = function (e, t, n) {
							this._lastQueryWasFromOurContext = this._isOurContext(e),
							Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype.someQueryChanged.call(this, e, t, n)
						},
						Swiftype.QueryOutputs.KeyboardNavigableList = function (e, t) {
							Swiftype.QueryOutputs.TargetedQueryOutput.call(this, e, t),
							this._className = "Swiftype.QueryOutputs.KeyboardNavigableList",
							this._activeResultIndex = null,
							this._maximumResultIndex = 0
						},
						Swiftype.QueryOutputs.KeyboardNavigableList.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.TargetedQueryOutput.prototype);
						var pKeyboardNavigableList = Swiftype.QueryOutputs.KeyboardNavigableList.prototype;
						pKeyboardNavigableList._attachToTarget = function () {
							this._setKeyStrokeEvents()
						},
						pKeyboardNavigableList._allToplevelDomElementsThatAreSearchResults = function () {
							var e = function (e, t) {
								t = $(t);
								var n = t.data(SWIFTYPE_RESULT_DATA_NAME),
								r = typeof n;
								return r === "undefined" ? !1 : !0
							};
							return $(this._element).find("*").filter(e)
						};
						var DEFAULT_KEYBOARD_NAVIGABLE_LIST_ACTIVE_QUERY_CLASS = "st-keyboard-active-item";
						pKeyboardNavigableList._activeQueryClass = function () {
							if (!this._activeQueryClassMemoized) {
								var e = Swiftype.Utils.getDataOrClassValue(this._element, "st-active-query-class");
								e = e || DEFAULT_KEYBOARD_NAVIGABLE_LIST_ACTIVE_QUERY_CLASS,
								this._activeQueryClassMemoized = e
							}
							return this._activeQueryClassMemoized
						},
						pKeyboardNavigableList._allToplevelDomElementsForResultIndex = function (e) {
							var t = function (t, n) {
								n = $(n);
								var r = n.data(SWIFTYPE_RESULT_DATA_NAME);
								return r && r.getSequenceInThisPage() === e ? !0 : !1
							};
							return $(this._allToplevelDomElementsThatAreSearchResults()).filter(t)
						},
						pKeyboardNavigableList._getActiveResultIndex = function () {
							return this._activeResultIndex
						},
						pKeyboardNavigableList._resultSet = function () {
							var e = this._allToplevelDomElementsThatAreSearchResults(),
							t = e[0];
							if (t) {
								var n = $(t).data(SWIFTYPE_RESULT_DATA_NAME);
								return n.getResultSet()
							}
							return null
						},
						pKeyboardNavigableList._currentSearchChanged = function (e) {
							this._setActiveResultIndex(null);
							var t = this._resultSet();
							t && t.countOfResultsOnThisPage() ? this._maximumResultIndex = t.countOfResultsOnThisPage() - 1 : this._maximumResultIndex = null,
							Swiftype.QueryOutputs.TargetedQueryOutput.prototype._currentSearchChanged.call(this, e)
						},
						pKeyboardNavigableList._setActiveResultIndex = function (e) {
							this._allToplevelDomElementsThatAreSearchResults().removeClass(this._activeQueryClass());
							if (typeof e == "number")
								if (e < 0 || typeof this._maximumResultIndex != "undefined" && e > this._maximumResultIndex)
									this._activeResultIndex = null;
								else {
									this._activeResultIndex = e;
									var t = this._allToplevelDomElementsForResultIndex(e);
									t.addClass(this._activeQueryClass())
								}
							else
								this._activeResultIndex = null
						},
						pKeyboardNavigableList._nextResult = function () {
							var e = this._getActiveResultIndex();
							typeof e == "number" ? this._setActiveResultIndex(e + 1) : this._setActiveResultIndex(0)
						},
						pKeyboardNavigableList._previousResult = function () {
							var e = this._getActiveResultIndex();
							typeof e == "number" ? this._setActiveResultIndex(e - 1) : this._setActiveResultIndex(this._maximumResultIndex)
						},
						pKeyboardNavigableList._goToResult = function () {
							var e = this._getActiveResultIndex();
							if (typeof e == "number") {
								var t = this._allToplevelDomElementsForResultIndex(e);
								if (t.length > 0)
									return this._sendToSearchResultViaElements(t), !0
							}
							return !1
						},
						pKeyboardNavigableList._hasActiveResult = function () {
							return typeof this._getActiveResultIndex() == "number"
						},
						pKeyboardNavigableList._setKeyStrokeEvents = function () {
							var e = this,
							t = this._getTargetElements();
							$(t).keydown(function (t) {
								switch (t.which) {
								case 13:
									e._element.is(":visible") && e._goToResult() && (t.preventDefault(), t.stopImmediatePropagation());
									break;
								case 38:
									t.preventDefault(),
									e._previousResult();
									break;
								case 40:
									t.preventDefault(),
									e._nextResult();
									break;
								case 27:
									e._hasActiveResult() && (e._setActiveResultIndex(null), t.preventDefault())
								}
							})
						},
						Swiftype.QueryOutputs.SimpleTemplateOutput = function (e, t, n, r) {
							Swiftype.QueryOutputs.TemplatedQueryOutput.call(this, e, t, n),
							this._className = "Swiftype.QueryOutputs.SimpleTemplateOutput",
							this._templateName = r
						},
						Swiftype.QueryOutputs.SimpleTemplateOutput.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.TemplatedQueryOutput.prototype);
						var pSimpleTemplateOutput = Swiftype.QueryOutputs.SimpleTemplateOutput.prototype;
						pSimpleTemplateOutput._getTemplate = function () {
							return this._getCompiledTemplate(this._templates, this._templateName)
						},
						pSimpleTemplateOutput._currentSearchChanged = function (e) {
							if (e.isEmptyQuery())
								this._getOutputElement().html("");
							else {
								var t = this._getTemplate();
								if (t) {
									var n = t.render(this._getTemplateRenderingContext(e));
									this._getOutputElement().html(n)
								}
							}
						};
						var QUERY_OUTPUT_CLASS_TO_TEMPLATE_NAME = {
							ResultSummary : "result_summary",
							ResultPagination : "result_pagination",
							SpellingSuggestion : "spelling_suggestion",
							SortOutput : "sort_dropdown",
							FacetOutput : "filter_checkbox"
						};
						$.each(QUERY_OUTPUT_CLASS_TO_TEMPLATE_NAME, function (e, t) {
							Swiftype.QueryOutputs[e] = function (n, r, i) {
								Swiftype.QueryOutputs.SimpleTemplateOutput.call(this, n, r, i),
								this._className = "Swiftype.QueryOutputs." + e,
								this._templateName = t
							},
							Swiftype.QueryOutputs[e].prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.SimpleTemplateOutput.prototype)
						}),
						$.each(["ResultSummary", "SpellingSuggestion"], function (e, t) {
							var n = Swiftype.QueryOutputs[t].prototype;
							n._getTemplateRenderingContext = function (e) {
								return e.firstResultSet().getTemplateRenderingContext()
							}
						});
						var pResultPagination = Swiftype.QueryOutputs.ResultPagination.prototype;
						pResultPagination._currentSearchChanged = function (e) {
							Swiftype.QueryOutputs.SimpleTemplateOutput.prototype._currentSearchChanged.call(this, e);
							if (e.firstResultSet()) {
								var t = $(this._element).find("option[data-st-page=" + e.firstResultSet().currentPageNumber() + "]");
								t.attr("selected", "selected")
							}
						},
						pResultPagination.getPaginationConfig = function () {
							return this.getResultsDisplay().getUiConfiguration().result_pagination
						},
						pResultPagination._paginationPageNumbers = function (e) {
							var t = [],
							n = e.currentPageNumber(),
							r = e.lastPageNumber(),
							i = parseInt(this.getPaginationConfig().max_numbers_to_show);
							if (i > 0) {
								var s = 1;
								r > i && (s = Math.min(n - parseInt(i / 2), r - i) + 1, s = Math.max(s, 1));
								for (var o = s; o <= Math.min(s + i - 1, r); ++o)
									t.push(o)
							}
							return t
						},
						pResultPagination._getTemplateRenderingContext = function (e) {
							var t = e.firstResultSet().getTemplateRenderingContext(),
							n = this._paginationPageNumbers(e.firstResultSet());
							return $.extend(t, {
								page_numbers : n
							})
						};
						var pSortOutput = Swiftype.QueryOutputs.SortOutput.prototype;
						pSortOutput.attach = function () {
							this._documentType = Swiftype.Utils.getDataOrClassValue(this._element, "st-document-type"),
							this._sortConfig = this.getResultsDisplay().getUiConfiguration().sort[this._documentType],
							this._templateName = this._sortConfig.template_name,
							Swiftype.QueryOutputs.SimpleTemplateOutput.prototype.attach.call(this)
						},
						pSortOutput._getTemplateRenderingContext = function (e) {
							var t = e.firstResultSet().getTemplateRenderingContext();
							return $.extend(t, {
								sort_values : this._sortConfig.values
							})
						};
						var pFacetOutput = Swiftype.QueryOutputs.FacetOutput.prototype;
						pFacetOutput.attach = function () {
							this._documentType = Swiftype.Utils.getDataOrClassValue(this._element, "st-document-type"),
							this._documentField = Swiftype.Utils.getDataOrClassValue(this._element, "st-document-field"),
							this._facetConfig = this.getResultsDisplay().getUiConfiguration().facets[this._documentType][this._documentField],
							this._templateName = this._facetConfig.template_name,
							this._gotInitialResults = !1,
							this._initialMinValue = undefined,
							this._initialMaxValue = undefined,
							this._previousQueryText = undefined,
							Swiftype.QueryOutputs.SimpleTemplateOutput.prototype.attach.call(this)
						},
						pFacetOutput._facetData = function (e) {
							var t = e.facets(),
							n = t[this._documentField] || {},
							r = $.map(n, function (e, t) {
									return [[t, e]]
								});
							if (!this._gotInitialResults) {
								this._gotInitialResults = !0,
								this._previousQueryText = e.getQuery()._queryText;
								var i = $.map(Object.keys(n), function (e) {
										var t = Number(e);
										return isFinite(t) ? t : 0
									});
								this._initialMinValue = Math.floor(Math.min.apply(null, i)),
								this._initialMaxValue = Math.ceil(Math.max.apply(null, i))
							}
							var s = {
								facets : r,
								label : this._facetConfig.label,
								hide_count : this._facetConfig.hide_count
							};
							return isFinite(this._initialMinValue) && isFinite(this._initialMaxValue) && (s.min_value = this._initialMinValue, s.max_value = this._initialMaxValue, s.show = !0),
							s
						},
						pFacetOutput._getTemplateRenderingContext = function (e) {
							var t = e.firstResultSet().getTemplateRenderingContext(),
							n = this._facetData(e.firstResultSet());
							return $.extend(t, {
								facet_data : n
							})
						},
						pFacetOutput.someQueryChanged = function (e, t) {
							Swiftype.QueryOutputs.SimpleTemplateOutput.prototype.someQueryChanged.call(this, e, t),
							t.getQuery()._queryText !== this._previousQueryText && (this._gotInitialResults = !1)
						};
						var DEFAULT_ON_PAGE_SEARCH_CONTAINER_CLASS = ".__st-search-container";
						Swiftype.QueryOutputs.OnPageSearchResults = function (e, t, n, r) {
							Swiftype.QueryOutputs.TemplatedQueryOutput.call(this, e, t, n),
							this._install = r,
							this._className = "Swiftype.QueryOutputs.OnPageSearchResults",
							this._templateName = "on_page_search_results"
						},
						Swiftype.QueryOutputs.OnPageSearchResults.prototype = Swiftype.Utils.createObject(Swiftype.QueryOutputs.TemplatedQueryOutput.prototype);
						var pOnPageSearchResults = Swiftype.QueryOutputs.OnPageSearchResults.prototype;
						pOnPageSearchResults._onPageSearchContainer = function () {
							var e = "data-" + INSTALL_KEY_DATA_ATTRIBUTE_NAME,
							t = '"' + this._install.getInstallDataAttribute() + '"';
							return $(DEFAULT_ON_PAGE_SEARCH_CONTAINER_CLASS + "[" + e + "=" + t + "]")
						},
						pOnPageSearchResults._currentSearchChanged = function (e) {
							var t = this._onPageSearchContainer().children().detach();
							t.length !== 0 && (this._getOutputElement().html(t), this._getOutputElement().addClass("st-install-" + this._install.getInstallDataAttribute())),
							Swiftype.QueryOutputs.TemplatedQueryOutput.prototype._currentSearchChanged.call(this, e)
						},
						Swiftype.SectionScroller = function () {};
						var pSectionScroller = Swiftype.SectionScroller.prototype;
						pSectionScroller.scroll = function () {
							var e = new Swiftype.AnchorParams(Swiftype.Utils.getHash()),
							t = e.getValue("sts");
							if (!t)
								return;
							t = this._normalizeText(t);
							var n = this;
							$("h1, h2, h3, h4, h5, h6").each(function () {
								var e = $(this);
								if (n._normalizeText(e.text()).indexOf(t) >= 0)
									return this.scrollIntoView(!0), !1
							})
						},
						pSectionScroller._normalizeText = function (e) {
							var t = e.replace(/\s+/g, "");
							return t = t.toLowerCase(),
							t
						},
						Swiftype = Swiftype || {},
						Swiftype.WidgetManager = function () {
							this._widgetsByInstallKey = {},
							this._installsByInstallKey = {},
							this._defaultInstall = null
						};
						var pWidgetManager = Swiftype.WidgetManager.prototype;
						pWidgetManager.install = function (e, t, n) {
							n = n || {};
							var r;
							this._installsByInstallKey[e] || (this._defaultInstall ? r = new Swiftype.Install(e, n, !1) : (r = new Swiftype.Install(e, n, !0), this._defaultInstall = r), this._installsByInstallKey[e] = r)
						},
						pWidgetManager.search = function (e, t) {
							var n = this._installsByInstallKey[e];
							if (!n)
								throw "Install with key '" + e + "' not found!";
							n.getSearchContext().getQueryComposer().runSearch(t)
						},
						$(function () {
							var e = new Swiftype.SectionScroller;
							e.scroll()
						})
					}
					(window, jQuery),
					function (e, t) {
						"use strict";
						var n = new e._InternalSwiftype.WidgetManager;
						if (e.SwiftypeObject) {
							var r = e[e.SwiftypeObject];
							e[e.SwiftypeObject] = n;
							for (var i = 0; i < r.q.length; i++) {
								var s = Array.prototype.slice.call(r.q[i]),
								o = s.shift();
								n[o].apply(n, s)
							}
						} else
							e.SwiftypeObject = "_st", e._st = n
					}
					(window, jQuery)
				}
				($stjq);
