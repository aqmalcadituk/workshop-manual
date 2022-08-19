/*! Cortona3D Solo 1.6.6, Copyright (c) 2015-2020 Paragraphics, Ltd. | 5612802b7d76e898326e2f25993f5ba8 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Cortona3DSolo = t() : e.Cortona3DSolo = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {i: i, l: !1, exports: {}};
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: i})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 71)
    }([function (e, t) {
        function n(e) {
            function t() {
            }

            return t.prototype = e.prototype || e, new t
        }

        function i(e, t, n) {
            function i() {
            }

            if (e && (i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t, t.superClass = e), n) for (var r in n) n.hasOwnProperty(r) && (t.prototype[r] = n[r]);
            return t
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (f(n)) for (var i in n) n.hasOwnProperty(i) && (i in e ? l(e[i]) && l(n[i]) ? e[i] = n[i] : e[i] instanceof Array && n[i] instanceof Array ? e[i] = n[i] : e[i] instanceof Object && n[i] instanceof Object && n[i] !== {} ? r(e[i], n[i]) : e[i] = n[i] : e[i] = n[i])
            }
            return e
        }

        function o(e, t, n) {
            return e + 256 * t + 65536 * n
        }

        function a(e) {
            return c(e) ? e : d(e) && e.match(/^#?([0-9A-F]{6})$/i) ? parseInt(RegExp.$1.substr(4, 2) + RegExp.$1.substr(2, 2) + RegExp.$1.substr(0, 2), 16) : 0
        }

        function s(e, t, n, i) {
            var r = document.createElement("script");
            return r.type = "text/javascript", r.src = e, h(t) || (r.async = !!t), r.onload = n, r.onerror = i, document.getElementsByTagName("head")[0].appendChild(r), r
        }

        function u(e, t, n) {
            var i = document.createElement("link");
            return i.href = e, i.rel = "stylesheet", i.type = "text/css", i.onload = t, i.onerror = n, document.getElementsByTagName("head")[0].appendChild(i), i
        }

        function l(e) {
            return "function" == typeof e
        }

        function c(e) {
            return "number" == typeof e
        }

        function d(e) {
            return "string" == typeof e
        }

        function f(e) {
            return "object" == typeof e && null !== e
        }

        function h(e) {
            return void 0 === e
        }

        function p() {
            return l(window.requirejs) && l(window.define) && window.define.amd
        }

        function m(e) {
            if ("string" != typeof e && (e = "#"), !/^[a-z]+\:\/\//i.test(e) && !/^\/\//.test(e) && /^[a-z]+\:/i.test(e)) return "";
            var t = document.createElement("a");
            return t.href = e, t = t.cloneNode(!1), e = t.protocol + "//" + t.host + ("/" === t.pathname[0] ? "" : "/") + t.pathname, e.substring(0, e.lastIndexOf("/") + 1)
        }

        function v(e, t, n) {
            return new Promise(function (i, r) {
                function o(e) {
                    window.Cortona3DSolo && window.Cortona3DSolo.dispatch("app.onProgress", 0, -1, e.type)
                }

                var a = window.URL || window.webkitURL || window, s = new XMLHttpRequest;
                t && s.overrideMimeType && s.overrideMimeType(t), s.open("GET", e, !0), n && (s.responseType = n), s.onprogress = function (e) {
                    var t = e.loaded, n = e.lengthComputable || void 0 === e.lengthComputable ? e.total : 0;
                    window.Cortona3DSolo && window.Cortona3DSolo.dispatch("app.onProgress", t, n, e.type)
                }, s.onabort = o, s.onerror = o, s.onload = o, s.onreadystatechange = function (t) {
                    if (s.readyState === XMLHttpRequest.DONE) {
                        /^blob:/i.test(e) && a.revokeObjectURL(e);
                        200 === s.status || 0 === s.status ? i(s) : r(new Error(e + " " + s.status + " " + s.statusText))
                    }
                };
                try {
                    s.send(null)
                } catch (e) {
                    r(e)
                }
            })
        }

        function g(e, t, n) {
            e && (n = h(n) ? !e.classList.contains(t) : n, n ? e.classList.add(t) : e.classList.remove(t))
        }

        e.exports = {
            extend: n,
            defineClass: i,
            expand: r,
            RGB: o,
            fromHTMLColor: a,
            loadScript: s,
            loadStyleSheet: u,
            isFunction: l,
            isNumber: c,
            isString: d,
            isObject: f,
            isUndefined: h,
            detectAMDLoader: p,
            getBaseURL: m,
            loadResource: v,
            toggleClass: g
        }
    }, function (e, t, n) {
        var i = n(0), r = i.expand, o = n(15), a = 0, s = {addons: {}}, u = !1, l = {
            configureInstance: function (e, t) {
                if ("number" == typeof e && (a |= e), "number" == typeof t && (a &= ~t), s.core && Module.ccall && Module.ccall("tiramisu_configure", "number", ["number", "number"], [32767 & e, 32767 & t]), s.drawing) {
                    var i = s.drawing.config.features || 0;
                    "number" == typeof e && (i |= e), "number" == typeof t && (i &= ~t), s.drawing.config.features = i, n(7).configure(s.drawing.config)
                }
                return a
            }, initialize: function (e, t) {
                function i() {
                    u = !0
                }

                var r = t, o = n(2);
                if ("string" == typeof e ? (r = e, s.drawing || s.core || o.use("core", {
                    src: r,
                    features: a
                })) : e && t && (s.core && e && (o.core.canvas = e), o.use("core", {
                    canvas: e,
                    src: t,
                    features: a
                })), o.once("app.didFinishLoadDocument", i), o.once("app.didFailLoadDocument", i), s.drawing && (n(7).attach(o.core && o.core.canvas), !s.core)) return r = r || s.drawing.config.src, r ? (o.app.drawing.show(!0), new Promise(function (e, t) {
                    o.once("app.didFinishLoadDocument", e), o.app.drawing.load(r).catch(t)
                })) : Promise.resolve({});
                if (s.core) {
                    o.core.canvas && (o.core.canvas.setAttribute("touch-action", "none"), o.core.canvas.style.touchAction = "none");
                    var l = n(25).Arguments;
                    return r = r || l.document, l.document = r ? o.app.util.toUrl(r) : URL.createObjectURL(new Blob(["#VRML V2.0 utf8"], {type: "model/vrml"})), l.features = 32767 & a, l.contentScaleFactor = window.devicePixelRatio || 1, l.toModule(), new Promise(function (e, t) {
                        o.once("core.onError", t), o.once("app.didFinishLoadDocument", e), o.once("app.didFailLoadDocument", t)
                    })
                }
                return Promise.reject(new Error("Solo initialize: nothing to do"))
            }, version: function () {
                return "1.6.6"
            }, isDocumentLoaded: function () {
                return u
            }, loadCompanionFile: function (e) {
                return i.loadResource(e, "text/xml").then(function (t) {
                    var a, s;
                    return t.responseXML ? (s = o(t.responseXML), a = {
                        baseURL: i.getBaseURL(e),
                        options: n(12)(s),
                        interactivity: {json: s}
                    }, a.specificationName = a.options.SpecID, s.ipc ? r(a, {
                        type: "ipc",
                        metadata: n(8)(s.$("ipc/figure/metadata/value"))
                    }, n(68)(a.interactivity, a.baseURL)) : s.SimulationInteractivity && r(a, {
                        type: "procedure",
                        metadata: n(8)(s.$("SimulationInteractivity/SimulationInformation/metadata/value"))
                    }, n(69)(a.interactivity, a.baseURL)), Promise.resolve(a)) : Promise.reject(new Error(e + " empty content"))
                })
            }
        };
        Object.defineProperty(l, "DISABLE_DOCUMENT_INTERACTIVITY", {
            value: 1,
            writable: !1
        }), Object.defineProperty(l, "DISABLE_PROCEDURE_TEXT_EMISSION", {
            value: 2,
            writable: !1
        }), Object.defineProperty(l, "DISABLE_AUDIO", {
            value: 4,
            writable: !1
        }), Object.defineProperty(l, "DISABLE_VERTEX_ARRAY_OBJECT_OES", {
            value: 8,
            writable: !1
        }), Object.defineProperty(l, "DISABLE_DISCARDABLE_GEOMETRY_DATA", {
            value: 16,
            writable: !1
        }), Object.defineProperty(l, "DISABLE_PROPERTY_VALUE_ANIMATIONS", {
            value: 32,
            writable: !1
        }), Object.defineProperty(l, "ENABLE_GLES3", {
            value: 64,
            writable: !1
        }), Object.defineProperty(l, "DISABLE_ANTIALIASING_GLES3", {
            value: 128,
            writable: !1
        }), Object.defineProperty(l, "TRANSPARENT_BACKGROUND", {
            value: 256,
            writable: !1
        }), Object.defineProperty(l, "ENABLE_NAVIGATION_FIT_TO_OBJECT", {
            value: 32768,
            writable: !1
        }), Object.defineProperty(l, "DISABLE_INTERACTIVITY_XML_EMISSION", {
            value: 65536,
            writable: !1
        }), Object.defineProperty(l, "DRAWING_HOTSPOT_HIGHLIGHT_SOLID", {
            value: 131072,
            writable: !1
        }), Object.defineProperty(l, "ENABLE_AUTO_SWITCHING_DISPLAY_MODE", {
            value: 262144,
            writable: !1
        }), Object.defineProperty(l, "ENABLE_VRML_TEXT_NODE", {
            value: 524288,
            writable: !1
        }), Object.defineProperty(l, "DISABLE_DRAWING_INTERACTIVITY_OPTIMIZATION", {
            value: 1048576,
            writable: !1
        }), e.exports = {
            app: l, checkConfigureOptions: function (e) {
                return !!(a & e)
            }, getInstanceConfigurationFlags: function () {
                return a
            }, getDocumentURL: function () {
                var e = "";
                if (s.core) {
                    var t = Module.arguments;
                    if (t) {
                        var n = t.indexOf("document");
                        n >= 0 && (e = t[n + 1])
                    }
                }
                return e
            }, usedModules: s
        }
    }, function (e, t, n) {
        var i = n(0).expand, r = n(10).EventEmitter;
        e.exports = i(new r, window.Cortona3DSolo || {})
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        t.assign = function (e) {
            for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                var n = t.shift();
                if (n) {
                    if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                    for (var r in n) i(n, r) && (e[r] = n[r])
                }
            }
            return e
        }, t.shrinkBuf = function (e, t) {
            return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
        };
        var o = {
            arraySet: function (e, t, n, i, r) {
                if (t.subarray && e.subarray) return void e.set(t.subarray(n, n + i), r);
                for (var o = 0; o < i; o++) e[r + o] = t[n + o]
            }, flattenChunks: function (e) {
                var t, n, i, r, o, a;
                for (i = 0, t = 0, n = e.length; t < n; t++) i += e[t].length;
                for (a = new Uint8Array(i), r = 0, t = 0, n = e.length; t < n; t++) o = e[t], a.set(o, r), r += o.length;
                return a
            }
        }, a = {
            arraySet: function (e, t, n, i, r) {
                for (var o = 0; o < i; o++) e[r + o] = t[n + o]
            }, flattenChunks: function (e) {
                return [].concat.apply([], e)
            }
        };
        t.setTyped = function (e) {
            e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, o)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, a))
        }, t.setTyped(r)
    }, function (e, t, n) {
        function i(e) {
            for (var t, n, i, r = [], o = /(^[^.#]+|\.[^.#]+|#[^.#]+)/g; o.exec(e);) switch (t = RegExp.$1, t.substring(0, 1)) {
                case".":
                    r.push(t.substr(1));
                    break;
                case"#":
                    n = t.substr(1);
                    break;
                default:
                    i = t
            }
            return {id: n, classList: r, tag: i || "div"}
        }

        function r(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, Array.prototype.slice.call(t.childNodes)
        }

        function o(e, t, n) {
            function o(e) {
                a.isString(e) ? s.append.apply(s, r(e)) : l(e) ? e.forEach(o) : s.append(e || "")
            }

            var s, u = {}, l = function (e) {
                return a.isObject(e) && a.isFunction(e.forEach)
            }, c = a.isObject(t) && !l(t) && !(t instanceof Node);
            if (u = i(e), s = document.createElement(u.tag), Array.prototype.slice.call(arguments, c ? 2 : 1).forEach(o), c) for (var d in t) if (!a.isUndefined(t[d])) if (t.hasOwnProperty(d)) {
                if ("dataset" === d && a.isObject(t[d])) for (var f in t.dataset) a.isUndefined(t.dataset[f]) || t.dataset.hasOwnProperty(f) && (s.dataset[f] = t.dataset[f]);
                s[d] = t[d]
            } else s.setAttribute(d, t[d]);
            return u.id && (s.id = u.id), u.classList.forEach(function (e) {
                s.classList.add(e)
            }), s
        }

        var a = n(0);
        e.exports = {parseSelector: i, createElement: o, createElementsFromHTML: r}
    }, function (e, t) {
        function n(e, t) {
            var n = e[1] || "", r = e[3];
            if (!r) return n;
            if (t && "function" == typeof btoa) {
                var o = i(r);
                return [n].concat(r.sources.map(function (e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                })).concat([o]).join("\n")
            }
            return [n].join("\n")
        }

        function i(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }

        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var i = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + i + "}" : i
                }).join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var a = e[r];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, function (e, t) {
        function n(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n], r = f[i.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
                    for (; o < i.parts.length; o++) r.parts.push(u(i.parts[o], t))
                } else {
                    for (var a = [], o = 0; o < i.parts.length; o++) a.push(u(i.parts[o], t));
                    f[i.id] = {id: i.id, refs: 1, parts: a}
                }
            }
        }

        function i(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var r = e[i], o = r[0], a = r[1], s = r[2], u = r[3], l = {css: a, media: s, sourceMap: u};
                n[o] ? n[o].parts.push(l) : t.push(n[o] = {id: o, parts: [l]})
            }
            return t
        }

        function r(e, t) {
            var n = m(), i = b[b.length - 1];
            if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t); else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }

        function o(e) {
            e.parentNode.removeChild(e);
            var t = b.indexOf(e);
            t >= 0 && b.splice(t, 1)
        }

        function a(e) {
            var t = document.createElement("style");
            return t.type = "text/css", r(e, t), t
        }

        function s(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", r(e, t), t
        }

        function u(e, t) {
            var n, i, r;
            if (t.singleton) {
                var u = g++;
                n = v || (v = a(t)), i = l.bind(null, n, u, !1), r = l.bind(null, n, u, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(t), i = d.bind(null, n), r = function () {
                o(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = a(t), i = c.bind(null, n), r = function () {
                o(n)
            });
            return i(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t)
                } else r()
            }
        }

        function l(e, t, n, i) {
            var r = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, r); else {
                var o = document.createTextNode(r), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }

        function c(e, t) {
            var n = t.css, i = t.media;
            if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        function d(e, t) {
            var n = t.css, i = t.sourceMap;
            i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var r = new Blob([n], {type: "text/css"}), o = e.href;
            e.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
        }

        var f = {}, h = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = e.apply(this, arguments)), t
            }
        }, p = h(function () {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
        }), m = h(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), v = null, g = 0, b = [];
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {}, void 0 === t.singleton && (t.singleton = p()), void 0 === t.insertAt && (t.insertAt = "bottom");
            var r = i(e);
            return n(r, t), function (e) {
                for (var o = [], a = 0; a < r.length; a++) {
                    var s = r[a], u = f[s.id];
                    u.refs--, o.push(u)
                }
                if (e) {
                    n(i(e), t)
                }
                for (var a = 0; a < o.length; a++) {
                    var u = o[a];
                    if (0 === u.refs) {
                        for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                        delete f[u.id]
                    }
                }
            }
        };
        var y = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function (e, t, n) {
        function i(e) {
            if (!l.svg) {
                var t = c.drawing.config.element || c.drawing.config.svg || function () {
                    var t, i = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r = e;
                    return e ? t = e.parentNode : (n(22), r = document.body.firstChild, t = document.body), t.insertBefore(i, r), i
                }();
                t.parentNode.style.overflow = "hidden", l.initialize(t)
            }
        }

        function r() {
            m.render({
                ".cortona3dsolo-svg svg a[name]": {
                    "& .hover": {stroke: h, strokeOpacity: 1},
                    "& path.hover": {strokeWidth: "2px"},
                    "& text.hover": {strokeWidth: ".1em"},
                    "& path.selected": {fill: p, fillOpacity: .8}
                }
            })
        }

        var o = n(2), a = n(1).app, s = n(0).expand;
        n(60);
        var u, l = n(70), c = n(1).usedModules, d = !1, f = "", h = "#FF0000", p = "#FF0000", m = o.app.ui.css();
        s(l, {
            delegate: {
                onProgress: function (e, t) {
                    o.dispatch("app.onProgress", e, t)
                }, didClickHotspot: function (e, t) {
                    o.dispatch("app.drawing.didSelectHotspot", e, t)
                }, didEnterHotspot: function (e) {
                    l.toggleHotspotClass(e, "hover", !0), o.dispatch("app.drawing.didEnterHotspot", e), o.dispatch("app.drawing.didHoverHotspot", e, !0)
                }, didLeaveHotspot: function (e) {
                    l.toggleHotspotClass(e, "hover", !1), o.dispatch("app.drawing.didLeaveHotspot", e), o.dispatch("app.drawing.didHoverHotspot", e, !1)
                }, didCallContextMenu: function (e, t, n, i) {
                    o.dispatch("app.drawing.didCallContextMenu", e, t, n, i)
                }, onZoomChange: function (e) {
                    o.dispatch("app.drawing.didChangeScale", e)
                }
            }
        });
        var v = n(9).getDocumentBaseURL, g = {
            drawing: {
                load: function (e) {
                    if (o.dispatch("app.drawing.didStartLoadDrawing", e), "function" == typeof a.drawing.willStartLoadDrawing) {
                        var t = a.drawing.willStartLoadDrawing.call(a, e);
                        "string" == typeof t && (e = t)
                    }
                    if ((e = e.replace(/\.(cgm|tiff?)$/i, ".svg")) == f) return o.dispatch("app.drawing.didFinishLoadDrawing", e), Promise.resolve();
                    var i;
                    return a.util && a.util.createResourceURL && (i = a.util.createResourceURL(e)), i || (i = e, /^[^\/]+:/.test(i) || (i = v() + i)), new Promise(function (t, r) {
                        l.delegate.didCompleteLoad = function (i) {
                            if (a.util && a.util.revokeResourceURL && a.util.revokeResourceURL(i), f = e, u = null, o.dispatch("app.drawing.didFinishLoadDrawing", e), !c.core) {
                                var r = {type: "drawing", baseURL: n(9).getBaseURL(e)};
                                o.dispatch("app.didFinishLoadDocument", r)
                            }
                            t()
                        }, l.delegate.failedLoadingDocument = function (t, n) {
                            a.util && a.util.revokeResourceURL && a.util.revokeResourceURL(t), f = e, u = null, l.unload(), o.dispatch("app.drawing.didFailLoadDrawing", e, n), c.core || o.dispatch("app.didFailLoadDocument", n), r(new Error("Image loading failed: status " + n))
                        }, l.load(i, /\.(png|jpe?g|jpe|gif)$/i.test(e))
                    })
                }, show: function (e) {
                    e = void 0 === e || !!e, l[e ? "show" : "hide"](), d = !!e
                }, isVisible: function () {
                    return d
                }, selectHotspot: function (e, t) {
                    t = void 0 === t ? p : t, "" === t ? l.unselect(e) : l.select(e, t)
                }, highlightHotspot: function (e, t) {
                    t = void 0 === t ? h : t, "" === t ? l.unhighlight(e) : l.highlight(e, t)
                }, hoverHotspot: function (e) {
                    u && l.toggleHotspotClass(u, "hover", !1), e && l.toggleHotspotClass(e, "hover", !0), u = e
                }, toggleHotspotClass: function (e, t, n) {
                    return l.toggleHotspotClass(e, t, n)
                }, reset: function () {
                    l.reset()
                }, scaleBy: function (e) {
                    l.scaleBy(e)
                }, hotspotExists: function (e) {
                    return Array.prototype.slice.call(l.svg.getElementsByTagName("a")).some(function (t) {
                        return t.getAttribute("name") === e
                    })
                }
            }
        };
        Object.defineProperties(g.drawing, {
            svg: {
                get: function () {
                    return l.svg
                }, enumerable: !0
            }, hoverColor: {
                get: function () {
                    return h
                }, set: function (e) {
                    h = e, r()
                }, enumerable: !0
            }, selectionColor: {
                get: function () {
                    return p
                }, set: function (e) {
                    p = e, r()
                }, enumerable: !0
            }, maxScale: {
                get: function () {
                    return l.maxScale
                }, set: function (e) {
                    l.maxScale = e
                }, enumerable: !0
            }, minScale: {
                get: function () {
                    return l.minScale
                }, set: function (e) {
                    l.minScale = e
                }, enumerable: !0
            }
        }), e.exports = {
            configure: function (e) {
                return e = e || {}, h = e.hotspotHoverColor || e.hotspotHighlightColor || "#FF0000", p = e.hotspotSelectionColor || "#FF0000", l.enableHoverFilling = (e.features || 0) & a.DRAWING_HOTSPOT_HIGHLIGHT_SOLID, l.enableDrawingOptimization = !((e.features || 0) & a.DISABLE_DRAWING_INTERACTIVITY_OPTIMIZATION), e.maxScale && (l.maxScale = +e.maxScale), e.minScale && (l.minScale = +e.minScale), r(), g
            }, attach: i, getSVGViewer: function () {
                return l
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = {};
            return e.forEach(function (e) {
                var n = e.$text();
                /^(Yes|No)$/.test(n) && (n = "Yes" == n), t[e.$attr("decl-id")] = n
            }), t
        }
    }, function (e, t, n) {
        var i = n(0).getBaseURL;
        e.exports = {
            getBaseURL: i, getDocumentBaseURL: function () {
                return i(n(1).getDocumentURL())
            }
        }
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            console && console.warn && console.warn(e)
        }

        function r() {
            r.init.call(this)
        }

        function o(e) {
            if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function a(e) {
            return void 0 === e._maxListeners ? r.defaultMaxListeners : e._maxListeners
        }

        function s(e, t, n, r) {
            var s, u, l;
            if (o(n), u = e._events, void 0 === u ? (u = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== u.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), u = e._events), l = u[t]), void 0 === l) l = u[t] = n, ++e._eventsCount; else if ("function" == typeof l ? l = u[t] = r ? [n, l] : [l, n] : r ? l.unshift(n) : l.push(n), (s = a(e)) > 0 && l.length > s && !l.warned) {
                l.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = l.length, i(c)
            }
            return e
        }

        function u() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function l(e, t, n) {
            var i = {fired: !1, wrapFn: void 0, target: e, type: t, listener: n}, r = u.bind(i);
            return r.listener = n, i.wrapFn = r, r
        }

        function c(e, t, n) {
            var i = e._events;
            if (void 0 === i) return [];
            var r = i[t];
            return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? p(r) : f(r, r.length)
        }

        function d(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" == typeof n) return 1;
                if (void 0 !== n) return n.length
            }
            return 0
        }

        function f(e, t) {
            for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
            return n
        }

        function h(e, t) {
            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
            e.pop()
        }

        function p(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
        }

        var m, v = "object" == typeof Reflect ? Reflect : null,
            g = v && "function" == typeof v.apply ? v.apply : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n)
            };
        m = v && "function" == typeof v.ownKeys ? v.ownKeys : Object.getOwnPropertySymbols ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function (e) {
            return Object.getOwnPropertyNames(e)
        };
        var b = Number.isNaN || function (e) {
            return e !== e
        };
        e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
        var y = 10;
        Object.defineProperty(r, "defaultMaxListeners", {
            enumerable: !0, get: function () {
                return y
            }, set: function (e) {
                if ("number" != typeof e || e < 0 || b(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                y = e
            }
        }), r.init = function () {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, r.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || b(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, r.prototype.getMaxListeners = function () {
            return a(this)
        }, r.prototype.emit = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var i = "error" === e, r = this._events;
            if (void 0 !== r) i = i && void 0 === r.error; else if (!i) return !1;
            if (i) {
                var o;
                if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw a.context = o, a
            }
            var s = r[e];
            if (void 0 === s) return !1;
            if ("function" == typeof s) g(s, this, t); else for (var u = s.length, l = f(s, u), n = 0; n < u; ++n) g(l[n], this, t);
            return !0
        }, r.prototype.addListener = function (e, t) {
            return s(this, e, t, !1)
        }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function (e, t) {
            return s(this, e, t, !0)
        }, r.prototype.once = function (e, t) {
            return o(t), this.on(e, l(this, e, t)), this
        }, r.prototype.prependOnceListener = function (e, t) {
            return o(t), this.prependListener(e, l(this, e, t)), this
        }, r.prototype.removeListener = function (e, t) {
            var n, i, r, a, s;
            if (o(t), void 0 === (i = this._events)) return this;
            if (void 0 === (n = i[e])) return this;
            if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t)); else if ("function" != typeof n) {
                for (r = -1, a = n.length - 1; a >= 0; a--) if (n[a] === t || n[a].listener === t) {
                    s = n[a].listener, r = a;
                    break
                }
                if (r < 0) return this;
                0 === r ? n.shift() : h(n, r), 1 === n.length && (i[e] = n[0]), void 0 !== i.removeListener && this.emit("removeListener", e, s || t)
            }
            return this
        }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function (e) {
            var t, n, i;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
            if (0 === arguments.length) {
                var r, o = Object.keys(n);
                for (i = 0; i < o.length; ++i) "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof (t = n[e])) this.removeListener(e, t); else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
            return this
        }, r.prototype.listeners = function (e) {
            return c(this, e, !0)
        }, r.prototype.rawListeners = function (e) {
            return c(this, e, !1)
        }, r.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t)
        }, r.prototype.listenerCount = d, r.prototype.eventNames = function () {
            return this._eventsCount > 0 ? m(this._events) : []
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        }
    }, function (e, t) {
        e.exports = function (e) {
            function t(e) {
                var t = e.$text();
                /^(Yes|No)$/.test(t) && (t = "Yes" == t), n[e.$attr("name")] = t
            }

            var n = {};
            if (e.ipc) e.$("ipc/figure/media").filter(function (e) {
                return 1 == e.$attr("id")
            })[0].$("value").forEach(t); else if (e.SimulationInteractivity) {
                e.$("SimulationInteractivity/SimulationInformation/Options/Value").forEach(t);
                var i = e.SimulationInteractivity.SimulationInformation;
                n.PublisherVersion = i.$text("ExporterVersionNumber"), n.SpecID = i.$text("SpecID"), n.SpecVersion = i.$text("SpecVersion"), n.SpecLang = i.$text("SpecLang"), n.ModificationDate = i.$text("ModificationDate"), n.DocumentFile = i.$text("DocumentFile")
            }
            return n
        }
    }, function (e, t) {
        function n(e, t, n) {
            this.r = r(Math.round(e || 0)), this.b = r(Math.round(n || 0)), this.g = r(Math.round(t || 0))
        }

        function i(e) {
            return Math.max(0, Math.min(1, e))
        }

        function r(e) {
            return Math.max(0, Math.min(255, e))
        }

        function o(e, t) {
            return Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
        }

        function a(e, t, n) {
            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }

        function s(e) {
            var t, i, r, s, u;
            if ("string" == typeof e) {
                if (u = e.match(/^#?([0-9A-F]{6})$/i)) return t = u[1], i = parseInt(t.substr(0, 2), 16), r = parseInt(t.substr(2, 2), 16), s = parseInt(t.substr(4, 2), 16), new n(i, r, s);
                if (u = e.match(/^#?([0-9A-F]{3})$/i)) return t = u[1], i = parseInt(t.substr(0, 1) + t.substr(0, 1), 16), r = parseInt(t.substr(1, 1) + t.substr(1, 1), 16), s = parseInt(t.substr(2, 1) + t.substr(2, 1), 16), new n(i, r, s);
                throw new Error("Not a hex color: " + e)
            }
            if ("object" == typeof e) {
                if (void 0 !== e.r && void 0 !== e.g && void 0 !== e.b) return new n(e.r, e.g, e.b);
                if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l) {
                    var l = o(e.h, 360), c = o(e.s, 100), d = o(e.l, 100);
                    if (0 === c) i = r = s = d; else {
                        var f = d < .5 ? d * (1 + c) : d + c - d * c, h = 2 * d - f;
                        i = a(h, f, l + 1 / 3), r = a(h, f, l), s = a(h, f, l - 1 / 3)
                    }
                    return new n(255 * i, 255 * r, 255 * s)
                }
                throw new Error("Can not recognize color object")
            }
            return "number" == typeof e ? (i = 255 & e, r = e >> 8 & 255, s = e >> 16 & 255, new n(i, r, s)) : new n
        }

        n.prototype.toRgb = function () {
            return {r: this.r, g: this.g, b: this.b}
        }, n.prototype.toHsl = function () {
            var e = o(this.r, 255), t = o(this.g, 255), n = o(this.b, 255), i = Math.max(e, t, n),
                r = Math.min(e, t, n), a = 0, s = 0, u = (i + r) / 2;
            if (i !== r) {
                var l = i - r;
                switch (s = u > .5 ? l / (2 - i - r) : l / (i + r), i) {
                    case e:
                        a = (t - n) / l + (t < n ? 6 : 0);
                        break;
                    case t:
                        a = (n - e) / l + 2;
                        break;
                    case n:
                        a = (e - t) / l + 4
                }
                a /= 6
            }
            return {h: 360 * a, s: 100 * s, l: 100 * u}
        }, n.prototype.toString = function () {
            var e = "000000" + ((this.r << 16) + (this.g << 8) + this.b).toString(16);
            return "#" + e.substring(e.length - 6)
        }, n.prototype.toHslString = function () {
            var e = this.toHsl();
            return "hsl(" + Math.round(e.h) + "," + Math.round(e.s) + "," + Math.round(e.l) + ")"
        }, n.prototype.toRgbString = function () {
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
        }, n.prototype.inverse = function () {
            var e = this.toRgb();
            return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, s(e)
        }, n.prototype.getBrightness = function () {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
        }, n.prototype.getLuminance = function () {
            var e, t, n, i = this.toRgb(), r = i.r / 255, o = i.g / 255, a = i.b / 255;
            return e = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4), t = o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4), n = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4), .2126 * e + .7152 * t + .0722 * n
        }, n.prototype.desaturate = function (e) {
            e = 0 === e ? 0 : e || 10;
            var t = this.toHsl();
            return t.s -= e, t.s = 100 * i(t.s / 100), s(t)
        }, n.prototype.saturate = function (e) {
            e = 0 === e ? 0 : e || 10;
            var t = this.toHsl();
            return t.s += e, t.s = 100 * i(t.s / 100), s(t)
        }, n.prototype.grayscale = function () {
            return this.desaturate(100)
        }, n.prototype.lighten = function (e) {
            e = 0 === e ? 0 : e || 10;
            var t = this.toHsl();
            return t.l += e, t.l = 100 * i(t.l / 100), s(t)
        }, n.prototype.darken = function (e) {
            e = 0 === e ? 0 : e || 10;
            var t = this.toHsl();
            return t.l -= e, t.l = 100 * i(t.l / 100), s(t)
        }, n.prototype.spin = function (e) {
            var t = this.toHsl(), n = (t.h + e) % 360;
            return t.h = n < 0 ? 360 + n : n, s(t)
        }, n.prototype.brighten = function (e) {
            e = 0 === e ? 0 : e || 10;
            var t = this.toRgb();
            return t.r = r(t.r - Math.round(e / 100 * -255)), t.g = r(t.g - Math.round(e / 100 * -255)), t.b = r(t.b - Math.round(e / 100 * -255)), s(t)
        }, n.prototype.complement = function () {
            var e = this.toHsl();
            return e.h = (e.h + 180) % 360, s(e)
        }, e.exports = s
    }, function (e, t, n) {
        function i(e) {
            return e.replace(/(\S)([A-Z])/g, function (e, t, n) {
                return t + "-" + n.toLowerCase()
            })
        }

        function r(e, t) {
            t && (this.parent = t), this.rules = e || {}, this.style = null
        }

        function o(e) {
            return new r(e)
        }

        var a = n(0);
        r.prototype.toString = function () {
            var e, t, n, o, s, u = "", l = this.parent, c = /(^\s+|\s+$)/;
            for (t in this.rules) {
                var d = 0 === t.indexOf("@media") && !l;
                if (this.rules.hasOwnProperty(t)) {
                    if (u && (u += "\n"), o = l ? t.split(/\s*,\s*/).map(function (e) {
                        return e = e.replace(c, ""), e.indexOf("&") < 0 ? l + " " + e : e.replace(/&/, l)
                    }).join(",") : t.replace(c, ""), u += o + " {", d) u += "\n" + new r(this.rules[t]); else if (s = [], e = this.rules[t], a.isObject(e)) for (n in e) e.hasOwnProperty(n) && (n.indexOf("&") < 0 ? u += "\n" + i(n) + ": " + e[n] + ";" : "&" !== n && s.push(n));
                    u += "\n}", d || (s.forEach(function (t) {
                        var n = {};
                        n[t] = e[t], u += "\n" + new r(n, o)
                    }), a.isObject(e["&"]) && (u += "\n" + new r(e["&"], o)))
                }
            }
            return u
        }, r.prototype.render = function (e) {
            return this.style || (this.style = document.head.appendChild(document.createElement("style")), this.style.type = "text/css"), e && a.expand(this.rules, e), this.style.innerHTML = this.toString(), this
        }, r.prototype.clear = function () {
            return this.rules = {}, this
        }, e.exports = o
    }, function (e, t, n) {
        function i(e) {
            var t = new r;
            if (1 == e.nodeType && (t["@name"] = e.nodeName, e.attributes.length > 0)) {
                t["@attributes"] = {};
                for (var n = 0; n < e.attributes.length; n++) {
                    var o = e.attributes.item(n);
                    t["@attributes"][o.nodeName] = o.nodeValue
                }
            }
            var a = !1, s = !1, u = !1, l = !1;
            if (e.hasChildNodes()) {
                t["@children"] = [];
                for (var c = 0; c < e.childNodes.length; c++) {
                    var d = e.childNodes.item(c), f = d.nodeName, h = 1 === d.nodeType, p = 3 === d.nodeType, m = i(d);
                    if (a = a || p, u = u || !p, l = l || 4 === d.nodeType, void 0 === t[f]) t[f] = m; else {
                        if (void 0 === t[f].push) {
                            s = s || p;
                            var v = t[f];
                            t[f] = [], t[f].push(v)
                        }
                        t[f].push(m)
                    }
                    (h || p && m) && t["@children"].push(m)
                }
                s && (t["#text"] = t["#text"].join("").replace(/^[\s\r\n]*$/, "")), a && u && delete t["#text"], l && (t["#text"] = t["#cdata-section"], delete t["#cdata-section"])
            } else "string" == typeof e.nodeValue && (t = e.nodeValue.replace(/^[\s\r\n]*$/, ""));
            return t
        }

        var r = n(66);
        e.exports = i
    }, function (e, t, n) {
        var i;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
        !function (r, o, a, s) {
            "use strict";

            function u(e, t, n) {
                return setTimeout(h(e, n), t)
            }

            function l(e, t, n) {
                return !!Array.isArray(e) && (c(e, n[t], n), !0)
            }

            function c(e, t, n) {
                var i;
                if (e) if (e.forEach) e.forEach(t, n); else if (e.length !== s) for (i = 0; i < e.length;) t.call(n, e[i], i, e), i++; else for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e)
            }

            function d(e, t, n) {
                var i = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
                return function () {
                    var t = new Error("get-stack-trace"),
                        n = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                        o = r.console && (r.console.warn || r.console.log);
                    return o && o.call(r.console, i, n), e.apply(this, arguments)
                }
            }

            function f(e, t, n) {
                var i, r = t.prototype;
                i = e.prototype = Object.create(r), i.constructor = e, i._super = r, n && pe(i, n)
            }

            function h(e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            }

            function p(e, t) {
                return typeof e == ge ? e.apply(t ? t[0] || s : s, t) : e
            }

            function m(e, t) {
                return e === s ? t : e
            }

            function v(e, t, n) {
                c(_(t), function (t) {
                    e.addEventListener(t, n, !1)
                })
            }

            function g(e, t, n) {
                c(_(t), function (t) {
                    e.removeEventListener(t, n, !1)
                })
            }

            function b(e, t) {
                for (; e;) {
                    if (e == t) return !0;
                    e = e.parentNode
                }
                return !1
            }

            function y(e, t) {
                return e.indexOf(t) > -1
            }

            function _(e) {
                return e.trim().split(/\s+/g)
            }

            function w(e, t, n) {
                if (e.indexOf && !n) return e.indexOf(t);
                for (var i = 0; i < e.length;) {
                    if (n && e[i][n] == t || !n && e[i] === t) return i;
                    i++
                }
                return -1
            }

            function E(e) {
                return Array.prototype.slice.call(e, 0)
            }

            function x(e, t, n) {
                for (var i = [], r = [], o = 0; o < e.length;) {
                    var a = t ? e[o][t] : e[o];
                    w(r, a) < 0 && i.push(e[o]), r[o] = a, o++
                }
                return n && (i = t ? i.sort(function (e, n) {
                    return e[t] > n[t]
                }) : i.sort()), i
            }

            function T(e, t) {
                for (var n, i, r = t[0].toUpperCase() + t.slice(1), o = 0; o < me.length;) {
                    if (n = me[o], (i = n ? n + r : t) in e) return i;
                    o++
                }
                return s
            }

            function S() {
                return xe++
            }

            function O(e) {
                var t = e.ownerDocument || e;
                return t.defaultView || t.parentWindow || r
            }

            function M(e, t) {
                var n = this;
                this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
                    p(e.options.enable, [e]) && n.handler(t)
                }, this.init()
            }

            function k(e) {
                var t = e.options.inputClass;
                return new (t || (Oe ? F : Me ? H : Se ? G : V))(e, C)
            }

            function C(e, t, n) {
                var i = n.pointers.length, r = n.changedPointers.length, o = t & Ce && i - r == 0,
                    a = t & (Ae | Re) && i - r == 0;
                n.isFirst = !!o, n.isFinal = !!a, o && (e.session = {}), n.eventType = t, I(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
            }

            function I(e, t) {
                var n = e.session, i = t.pointers, r = i.length;
                n.firstInput || (n.firstInput = P(t)), r > 1 && !n.firstMultiple ? n.firstMultiple = P(t) : 1 === r && (n.firstMultiple = !1);
                var o = n.firstInput, a = n.firstMultiple, s = a ? a.center : o.center, u = t.center = L(i);
                t.timeStamp = _e(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = B(s, u), t.distance = D(s, u), A(n, t), t.offsetDirection = N(t.deltaX, t.deltaY);
                var l = j(t.deltaTime, t.deltaX, t.deltaY);
                t.overallVelocityX = l.x, t.overallVelocityY = l.y, t.overallVelocity = ye(l.x) > ye(l.y) ? l.x : l.y, t.scale = a ? U(a.pointers, i) : 1, t.rotation = a ? z(a.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, R(n, t);
                var c = e.element;
                b(t.srcEvent.target, c) && (c = t.srcEvent.target), t.target = c
            }

            function A(e, t) {
                var n = t.center, i = e.offsetDelta || {}, r = e.prevDelta || {}, o = e.prevInput || {};
                t.eventType !== Ce && o.eventType !== Ae || (r = e.prevDelta = {
                    x: o.deltaX || 0,
                    y: o.deltaY || 0
                }, i = e.offsetDelta = {x: n.x, y: n.y}), t.deltaX = r.x + (n.x - i.x), t.deltaY = r.y + (n.y - i.y)
            }

            function R(e, t) {
                var n, i, r, o, a = e.lastInterval || t, u = t.timeStamp - a.timeStamp;
                if (t.eventType != Re && (u > ke || a.velocity === s)) {
                    var l = t.deltaX - a.deltaX, c = t.deltaY - a.deltaY, d = j(u, l, c);
                    i = d.x, r = d.y, n = ye(d.x) > ye(d.y) ? d.x : d.y, o = N(l, c), e.lastInterval = t
                } else n = a.velocity, i = a.velocityX, r = a.velocityY, o = a.direction;
                t.velocity = n, t.velocityX = i, t.velocityY = r, t.direction = o
            }

            function P(e) {
                for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                    clientX: be(e.pointers[n].clientX),
                    clientY: be(e.pointers[n].clientY)
                }, n++;
                return {timeStamp: _e(), pointers: t, center: L(t), deltaX: e.deltaX, deltaY: e.deltaY}
            }

            function L(e) {
                var t = e.length;
                if (1 === t) return {x: be(e[0].clientX), y: be(e[0].clientY)};
                for (var n = 0, i = 0, r = 0; r < t;) n += e[r].clientX, i += e[r].clientY, r++;
                return {x: be(n / t), y: be(i / t)}
            }

            function j(e, t, n) {
                return {x: t / e || 0, y: n / e || 0}
            }

            function N(e, t) {
                return e === t ? Pe : ye(e) >= ye(t) ? e < 0 ? Le : je : t < 0 ? Ne : De
            }

            function D(e, t, n) {
                n || (n = Ve);
                var i = t[n[0]] - e[n[0]], r = t[n[1]] - e[n[1]];
                return Math.sqrt(i * i + r * r)
            }

            function B(e, t, n) {
                n || (n = Ve);
                var i = t[n[0]] - e[n[0]], r = t[n[1]] - e[n[1]];
                return 180 * Math.atan2(r, i) / Math.PI
            }

            function z(e, t) {
                return B(t[1], t[0], Fe) + B(e[1], e[0], Fe)
            }

            function U(e, t) {
                return D(t[0], t[1], Fe) / D(e[0], e[1], Fe)
            }

            function V() {
                this.evEl = Ye, this.evWin = He, this.pressed = !1, M.apply(this, arguments)
            }

            function F() {
                this.evEl = qe, this.evWin = Ke, M.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            function $() {
                this.evTarget = Ze, this.evWin = Je, this.started = !1, M.apply(this, arguments)
            }

            function Y(e, t) {
                var n = E(e.touches), i = E(e.changedTouches);
                return t & (Ae | Re) && (n = x(n.concat(i), "identifier", !0)), [n, i]
            }

            function H() {
                this.evTarget = et, this.targetIds = {}, M.apply(this, arguments)
            }

            function X(e, t) {
                var n = E(e.touches), i = this.targetIds;
                if (t & (Ce | Ie) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
                var r, o, a = E(e.changedTouches), s = [], u = this.target;
                if (o = n.filter(function (e) {
                    return b(e.target, u)
                }), t === Ce) for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
                for (r = 0; r < a.length;) i[a[r].identifier] && s.push(a[r]), t & (Ae | Re) && delete i[a[r].identifier], r++;
                return s.length ? [x(o.concat(s), "identifier", !0), s] : void 0
            }

            function G() {
                M.apply(this, arguments);
                var e = h(this.handler, this);
                this.touch = new H(this.manager, e), this.mouse = new V(this.manager, e), this.primaryTouch = null, this.lastTouches = []
            }

            function q(e, t) {
                e & Ce ? (this.primaryTouch = t.changedPointers[0].identifier, K.call(this, t)) : e & (Ae | Re) && K.call(this, t)
            }

            function K(e) {
                var t = e.changedPointers[0];
                if (t.identifier === this.primaryTouch) {
                    var n = {x: t.clientX, y: t.clientY};
                    this.lastTouches.push(n);
                    var i = this.lastTouches, r = function () {
                        var e = i.indexOf(n);
                        e > -1 && i.splice(e, 1)
                    };
                    setTimeout(r, tt)
                }
            }

            function W(e) {
                for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                    var r = this.lastTouches[i], o = Math.abs(t - r.x), a = Math.abs(n - r.y);
                    if (o <= nt && a <= nt) return !0
                }
                return !1
            }

            function Z(e, t) {
                this.manager = e, this.set(t)
            }

            function J(e) {
                if (y(e, st)) return st;
                var t = y(e, ut), n = y(e, lt);
                return t && n ? st : t || n ? t ? ut : lt : y(e, at) ? at : ot
            }

            function Q(e) {
                this.options = pe({}, this.defaults, e || {}), this.id = S(), this.manager = null, this.options.enable = m(this.options.enable, !0), this.state = dt, this.simultaneous = {}, this.requireFail = []
            }

            function ee(e) {
                return e & vt ? "cancel" : e & pt ? "end" : e & ht ? "move" : e & ft ? "start" : ""
            }

            function te(e) {
                return e == De ? "down" : e == Ne ? "up" : e == Le ? "left" : e == je ? "right" : ""
            }

            function ne(e, t) {
                var n = t.manager;
                return n ? n.get(e) : e
            }

            function ie() {
                Q.apply(this, arguments)
            }

            function re() {
                ie.apply(this, arguments), this.pX = null, this.pY = null
            }

            function oe() {
                ie.apply(this, arguments)
            }

            function ae() {
                Q.apply(this, arguments), this._timer = null, this._input = null
            }

            function se() {
                ie.apply(this, arguments)
            }

            function ue() {
                ie.apply(this, arguments)
            }

            function le() {
                Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function ce(e, t) {
                return t = t || {}, t.recognizers = m(t.recognizers, ce.defaults.preset), new de(e, t)
            }

            function de(e, t) {
                this.options = pe({}, ce.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = k(this), this.touchAction = new Z(this, this.options.touchAction), fe(this, !0), c(this.options.recognizers, function (e) {
                    var t = this.add(new e[0](e[1]));
                    e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
                }, this)
            }

            function fe(e, t) {
                var n = e.element;
                if (n.style) {
                    var i;
                    c(e.options.cssProps, function (r, o) {
                        i = T(n.style, o), t ? (e.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = e.oldCssProps[i] || ""
                    }), t || (e.oldCssProps = {})
                }
            }

            function he(e, t) {
                var n = o.createEvent("Event");
                n.initEvent(e, !0, !0), n.gesture = t, t.target.dispatchEvent(n)
            }

            var pe, me = ["", "webkit", "Moz", "MS", "ms", "o"], ve = o.createElement("div"), ge = "function",
                be = Math.round, ye = Math.abs, _e = Date.now;
            pe = "function" != typeof Object.assign ? function (e) {
                if (e === s || null === e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (i !== s && null !== i) for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r])
                }
                return t
            } : Object.assign;
            var we = d(function (e, t, n) {
                    for (var i = Object.keys(t), r = 0; r < i.length;) (!n || n && e[i[r]] === s) && (e[i[r]] = t[i[r]]), r++;
                    return e
                }, "extend", "Use `assign`."), Ee = d(function (e, t) {
                    return we(e, t, !0)
                }, "merge", "Use `assign`."), xe = 1, Te = /mobile|tablet|ip(ad|hone|od)|android/i,
                Se = "ontouchstart" in r, Oe = T(r, "PointerEvent") !== s, Me = Se && Te.test(navigator.userAgent),
                ke = 25, Ce = 1, Ie = 2, Ae = 4, Re = 8, Pe = 1, Le = 2, je = 4, Ne = 8, De = 16, Be = Le | je,
                ze = Ne | De, Ue = Be | ze, Ve = ["x", "y"], Fe = ["clientX", "clientY"];
            M.prototype = {
                handler: function () {
                }, init: function () {
                    this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(O(this.element), this.evWin, this.domHandler)
                }, destroy: function () {
                    this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(O(this.element), this.evWin, this.domHandler)
                }
            };
            var $e = {mousedown: Ce, mousemove: Ie, mouseup: Ae}, Ye = "mousedown", He = "mousemove mouseup";
            f(V, M, {
                handler: function (e) {
                    var t = $e[e.type];
                    t & Ce && 0 === e.button && (this.pressed = !0), t & Ie && 1 !== e.which && (t = Ae), this.pressed && (t & Ae && (this.pressed = !1), this.callback(this.manager, t, {
                        pointers: [e],
                        changedPointers: [e],
                        pointerType: "mouse",
                        srcEvent: e
                    }))
                }
            });
            var Xe = {pointerdown: Ce, pointermove: Ie, pointerup: Ae, pointercancel: Re, pointerout: Re},
                Ge = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"}, qe = "pointerdown",
                Ke = "pointermove pointerup pointercancel";
            r.MSPointerEvent && !r.PointerEvent && (qe = "MSPointerDown", Ke = "MSPointerMove MSPointerUp MSPointerCancel"), f(F, M, {
                handler: function (e) {
                    var t = this.store, n = !1, i = e.type.toLowerCase().replace("ms", ""), r = Xe[i],
                        o = Ge[e.pointerType] || e.pointerType, a = "touch" == o, s = w(t, e.pointerId, "pointerId");
                    r & Ce && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : r & (Ae | Re) && (n = !0), s < 0 || (t[s] = e, this.callback(this.manager, r, {
                        pointers: t,
                        changedPointers: [e],
                        pointerType: o,
                        srcEvent: e
                    }), n && t.splice(s, 1))
                }
            });
            var We = {touchstart: Ce, touchmove: Ie, touchend: Ae, touchcancel: Re}, Ze = "touchstart",
                Je = "touchstart touchmove touchend touchcancel";
            f($, M, {
                handler: function (e) {
                    var t = We[e.type];
                    if (t === Ce && (this.started = !0), this.started) {
                        var n = Y.call(this, e, t);
                        t & (Ae | Re) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: "touch",
                            srcEvent: e
                        })
                    }
                }
            });
            var Qe = {touchstart: Ce, touchmove: Ie, touchend: Ae, touchcancel: Re},
                et = "touchstart touchmove touchend touchcancel";
            f(H, M, {
                handler: function (e) {
                    var t = Qe[e.type], n = X.call(this, e, t);
                    n && this.callback(this.manager, t, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: "touch",
                        srcEvent: e
                    })
                }
            });
            var tt = 2500, nt = 25;
            f(G, M, {
                handler: function (e, t, n) {
                    var i = "touch" == n.pointerType, r = "mouse" == n.pointerType;
                    if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                        if (i) q.call(this, t, n); else if (r && W.call(this, n)) return;
                        this.callback(e, t, n)
                    }
                }, destroy: function () {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var it = T(ve.style, "touchAction"), rt = it !== s, ot = "auto", at = "manipulation", st = "none",
                ut = "pan-x", lt = "pan-y", ct = function () {
                    if (!rt) return !1;
                    var e = {}, t = r.CSS && r.CSS.supports;
                    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
                        e[n] = !t || r.CSS.supports("touch-action", n)
                    }), e
                }();
            Z.prototype = {
                set: function (e) {
                    "compute" == e && (e = this.compute()), rt && this.manager.element.style && ct[e] && (this.manager.element.style[it] = e), this.actions = e.toLowerCase().trim()
                }, update: function () {
                    this.set(this.manager.options.touchAction)
                }, compute: function () {
                    var e = [];
                    return c(this.manager.recognizers, function (t) {
                        p(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                    }), J(e.join(" "))
                }, preventDefaults: function (e) {
                    var t = e.srcEvent, n = e.offsetDirection;
                    if (this.manager.session.prevented) return void t.preventDefault();
                    var i = this.actions, r = y(i, st) && !ct[st], o = y(i, lt) && !ct[lt], a = y(i, ut) && !ct[ut];
                    if (r) {
                        var s = 1 === e.pointers.length, u = e.distance < 2, l = e.deltaTime < 250;
                        if (s && u && l) return
                    }
                    return a && o ? void 0 : r || o && n & Be || a && n & ze ? this.preventSrc(t) : void 0
                }, preventSrc: function (e) {
                    this.manager.session.prevented = !0, e.preventDefault()
                }
            };
            var dt = 1, ft = 2, ht = 4, pt = 8, mt = pt, vt = 16;
            Q.prototype = {
                defaults: {}, set: function (e) {
                    return pe(this.options, e), this.manager && this.manager.touchAction.update(), this
                }, recognizeWith: function (e) {
                    if (l(e, "recognizeWith", this)) return this;
                    var t = this.simultaneous;
                    return e = ne(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
                }, dropRecognizeWith: function (e) {
                    return l(e, "dropRecognizeWith", this) ? this : (e = ne(e, this), delete this.simultaneous[e.id], this)
                }, requireFailure: function (e) {
                    if (l(e, "requireFailure", this)) return this;
                    var t = this.requireFail;
                    return e = ne(e, this), -1 === w(t, e) && (t.push(e), e.requireFailure(this)), this
                }, dropRequireFailure: function (e) {
                    if (l(e, "dropRequireFailure", this)) return this;
                    e = ne(e, this);
                    var t = w(this.requireFail, e);
                    return t > -1 && this.requireFail.splice(t, 1), this
                }, hasRequireFailures: function () {
                    return this.requireFail.length > 0
                }, canRecognizeWith: function (e) {
                    return !!this.simultaneous[e.id]
                }, emit: function (e) {
                    function t(t) {
                        n.manager.emit(t, e)
                    }

                    var n = this, i = this.state;
                    i < pt && t(n.options.event + ee(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= pt && t(n.options.event + ee(i))
                }, tryEmit: function (e) {
                    if (this.canEmit()) return this.emit(e);
                    this.state = 32
                }, canEmit: function () {
                    for (var e = 0; e < this.requireFail.length;) {
                        if (!(this.requireFail[e].state & (32 | dt))) return !1;
                        e++
                    }
                    return !0
                }, recognize: function (e) {
                    var t = pe({}, e);
                    if (!p(this.options.enable, [this, t])) return this.reset(), void (this.state = 32);
                    this.state & (mt | vt | 32) && (this.state = dt), this.state = this.process(t), this.state & (ft | ht | pt | vt) && this.tryEmit(t)
                }, process: function (e) {
                }, getTouchAction: function () {
                }, reset: function () {
                }
            }, f(ie, Q, {
                defaults: {pointers: 1}, attrTest: function (e) {
                    var t = this.options.pointers;
                    return 0 === t || e.pointers.length === t
                }, process: function (e) {
                    var t = this.state, n = e.eventType, i = t & (ft | ht), r = this.attrTest(e);
                    return i && (n & Re || !r) ? t | vt : i || r ? n & Ae ? t | pt : t & ft ? t | ht : ft : 32
                }
            }), f(re, ie, {
                defaults: {event: "pan", threshold: 10, pointers: 1, direction: Ue},
                getTouchAction: function () {
                    var e = this.options.direction, t = [];
                    return e & Be && t.push(lt), e & ze && t.push(ut), t
                },
                directionTest: function (e) {
                    var t = this.options, n = !0, i = e.distance, r = e.direction, o = e.deltaX, a = e.deltaY;
                    return r & t.direction || (t.direction & Be ? (r = 0 === o ? Pe : o < 0 ? Le : je, n = o != this.pX, i = Math.abs(e.deltaX)) : (r = 0 === a ? Pe : a < 0 ? Ne : De, n = a != this.pY, i = Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction
                },
                attrTest: function (e) {
                    return ie.prototype.attrTest.call(this, e) && (this.state & ft || !(this.state & ft) && this.directionTest(e))
                },
                emit: function (e) {
                    this.pX = e.deltaX, this.pY = e.deltaY;
                    var t = te(e.direction);
                    t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
                }
            }), f(oe, ie, {
                defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
                    return [st]
                }, attrTest: function (e) {
                    return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & ft)
                }, emit: function (e) {
                    if (1 !== e.scale) {
                        var t = e.scale < 1 ? "in" : "out";
                        e.additionalEvent = this.options.event + t
                    }
                    this._super.emit.call(this, e)
                }
            }), f(ae, Q, {
                defaults: {event: "press", pointers: 1, time: 251, threshold: 9},
                getTouchAction: function () {
                    return [ot]
                },
                process: function (e) {
                    var t = this.options, n = e.pointers.length === t.pointers, i = e.distance < t.threshold,
                        r = e.deltaTime > t.time;
                    if (this._input = e, !i || !n || e.eventType & (Ae | Re) && !r) this.reset(); else if (e.eventType & Ce) this.reset(), this._timer = u(function () {
                        this.state = mt, this.tryEmit()
                    }, t.time, this); else if (e.eventType & Ae) return mt;
                    return 32
                },
                reset: function () {
                    clearTimeout(this._timer)
                },
                emit: function (e) {
                    this.state === mt && (e && e.eventType & Ae ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = _e(), this.manager.emit(this.options.event, this._input)))
                }
            }), f(se, ie, {
                defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
                    return [st]
                }, attrTest: function (e) {
                    return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & ft)
                }
            }), f(ue, ie, {
                defaults: {event: "swipe", threshold: 10, velocity: .3, direction: Be | ze, pointers: 1},
                getTouchAction: function () {
                    return re.prototype.getTouchAction.call(this)
                },
                attrTest: function (e) {
                    var t, n = this.options.direction;
                    return n & (Be | ze) ? t = e.overallVelocity : n & Be ? t = e.overallVelocityX : n & ze && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && ye(t) > this.options.velocity && e.eventType & Ae
                },
                emit: function (e) {
                    var t = te(e.offsetDirection);
                    t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
                }
            }), f(le, Q, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 9,
                    posThreshold: 10
                }, getTouchAction: function () {
                    return [at]
                }, process: function (e) {
                    var t = this.options, n = e.pointers.length === t.pointers, i = e.distance < t.threshold,
                        r = e.deltaTime < t.time;
                    if (this.reset(), e.eventType & Ce && 0 === this.count) return this.failTimeout();
                    if (i && r && n) {
                        if (e.eventType != Ae) return this.failTimeout();
                        var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
                            a = !this.pCenter || D(this.pCenter, e.center) < t.posThreshold;
                        this.pTime = e.timeStamp, this.pCenter = e.center, a && o ? this.count += 1 : this.count = 1, this._input = e;
                        if (0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = u(function () {
                            this.state = mt, this.tryEmit()
                        }, t.interval, this), ft) : mt
                    }
                    return 32
                }, failTimeout: function () {
                    return this._timer = u(function () {
                        this.state = 32
                    }, this.options.interval, this), 32
                }, reset: function () {
                    clearTimeout(this._timer)
                }, emit: function () {
                    this.state == mt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }
            }), ce.VERSION = "2.0.7", ce.defaults = {
                domEvents: !1,
                touchAction: "compute",
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [[se, {enable: !1}], [oe, {enable: !1}, ["rotate"]], [ue, {direction: Be}], [re, {direction: Be}, ["swipe"]], [le], [le, {
                    event: "doubletap",
                    taps: 2
                }, ["tap"]], [ae]],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            de.prototype = {
                set: function (e) {
                    return pe(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
                }, stop: function (e) {
                    this.session.stopped = e ? 2 : 1
                }, recognize: function (e) {
                    var t = this.session;
                    if (!t.stopped) {
                        this.touchAction.preventDefaults(e);
                        var n, i = this.recognizers, r = t.curRecognizer;
                        (!r || r && r.state & mt) && (r = t.curRecognizer = null);
                        for (var o = 0; o < i.length;) n = i[o], 2 === t.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e), !r && n.state & (ft | ht | pt) && (r = t.curRecognizer = n), o++
                    }
                }, get: function (e) {
                    if (e instanceof Q) return e;
                    for (var t = this.recognizers, n = 0; n < t.length; n++) if (t[n].options.event == e) return t[n];
                    return null
                }, add: function (e) {
                    if (l(e, "add", this)) return this;
                    var t = this.get(e.options.event);
                    return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
                }, remove: function (e) {
                    if (l(e, "remove", this)) return this;
                    if (e = this.get(e)) {
                        var t = this.recognizers, n = w(t, e);
                        -1 !== n && (t.splice(n, 1), this.touchAction.update())
                    }
                    return this
                }, on: function (e, t) {
                    if (e !== s && t !== s) {
                        var n = this.handlers;
                        return c(_(e), function (e) {
                            n[e] = n[e] || [], n[e].push(t)
                        }), this
                    }
                }, off: function (e, t) {
                    if (e !== s) {
                        var n = this.handlers;
                        return c(_(e), function (e) {
                            t ? n[e] && n[e].splice(w(n[e], t), 1) : delete n[e]
                        }), this
                    }
                }, emit: function (e, t) {
                    this.options.domEvents && he(e, t);
                    var n = this.handlers[e] && this.handlers[e].slice();
                    if (n && n.length) {
                        t.type = e, t.preventDefault = function () {
                            t.srcEvent.preventDefault()
                        };
                        for (var i = 0; i < n.length;) n[i](t), i++
                    }
                }, destroy: function () {
                    this.element && fe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, pe(ce, {
                INPUT_START: Ce,
                INPUT_MOVE: Ie,
                INPUT_END: Ae,
                INPUT_CANCEL: Re,
                STATE_POSSIBLE: dt,
                STATE_BEGAN: ft,
                STATE_CHANGED: ht,
                STATE_ENDED: pt,
                STATE_RECOGNIZED: mt,
                STATE_CANCELLED: vt,
                STATE_FAILED: 32,
                DIRECTION_NONE: Pe,
                DIRECTION_LEFT: Le,
                DIRECTION_RIGHT: je,
                DIRECTION_UP: Ne,
                DIRECTION_DOWN: De,
                DIRECTION_HORIZONTAL: Be,
                DIRECTION_VERTICAL: ze,
                DIRECTION_ALL: Ue,
                Manager: de,
                Input: M,
                TouchAction: Z,
                TouchInput: H,
                MouseInput: V,
                PointerEventInput: F,
                TouchMouseInput: G,
                SingleTouchInput: $,
                Recognizer: Q,
                AttrRecognizer: ie,
                Tap: le,
                Pan: re,
                Swipe: ue,
                Pinch: oe,
                Rotate: se,
                Press: ae,
                on: v,
                off: g,
                each: c,
                merge: Ee,
                extend: we,
                assign: pe,
                inherit: f,
                bindFn: h,
                prefixed: T
            }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = ce, (i = function () {
                return ce
            }.call(t, n, t, e)) !== s && (e.exports = i)
        }(window, document)
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (t < 65534 && (e.subarray && a || !e.subarray && o)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
            for (var n = "", i = 0; i < t; i++) n += String.fromCharCode(e[i]);
            return n
        }

        var r = n(3), o = !0, a = !0;
        try {
            String.fromCharCode.apply(null, [0])
        } catch (e) {
            o = !1
        }
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (e) {
            a = !1
        }
        for (var s = new r.Buf8(256), u = 0; u < 256; u++) s[u] = u >= 252 ? 6 : u >= 248 ? 5 : u >= 240 ? 4 : u >= 224 ? 3 : u >= 192 ? 2 : 1;
        s[254] = s[254] = 1, t.string2buf = function (e) {
            var t, n, i, o, a, s = e.length, u = 0;
            for (o = 0; o < s; o++) n = e.charCodeAt(o), 55296 == (64512 & n) && o + 1 < s && 56320 == (64512 & (i = e.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++), u += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
            for (t = new r.Buf8(u), a = 0, o = 0; a < u; o++) n = e.charCodeAt(o), 55296 == (64512 & n) && o + 1 < s && 56320 == (64512 & (i = e.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++), n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6, t[a++] = 128 | 63 & n) : n < 65536 ? (t[a++] = 224 | n >>> 12, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | 63 & n) : (t[a++] = 240 | n >>> 18, t[a++] = 128 | n >>> 12 & 63, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | 63 & n);
            return t
        }, t.buf2binstring = function (e) {
            return i(e, e.length)
        }, t.binstring2buf = function (e) {
            for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
            return t
        }, t.buf2string = function (e, t) {
            var n, r, o, a, u = t || e.length, l = new Array(2 * u);
            for (r = 0, n = 0; n < u;) if ((o = e[n++]) < 128) l[r++] = o; else if ((a = s[o]) > 4) l[r++] = 65533, n += a - 1; else {
                for (o &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < u;) o = o << 6 | 63 & e[n++], a--;
                a > 1 ? l[r++] = 65533 : o < 65536 ? l[r++] = o : (o -= 65536, l[r++] = 55296 | o >> 10 & 1023, l[r++] = 56320 | 1023 & o)
            }
            return i(l, r)
        }, t.utf8border = function (e, t) {
            var n;
            for (t = t || e.length, t > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]);) n--;
            return n < 0 ? t : 0 === n ? t : n + s[e[n]] > t ? n : t
        }
    }, function (e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            for (var r = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
                a = n > 2e3 ? 2e3 : n, n -= a;
                do {
                    r = r + t[i++] | 0, o = o + r | 0
                } while (--a);
                r %= 65521, o %= 65521
            }
            return r | o << 16 | 0
        }

        e.exports = i
    }, function (e, t, n) {
        "use strict";
        e.exports = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        }
    }, function (e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            var o = r, a = i + n;
            e ^= -1;
            for (var s = i; s < a; s++) e = e >>> 8 ^ o[255 & (e ^ t[s])];
            return -1 ^ e
        }

        var r = function () {
            for (var e, t = [], n = 0; n < 256; n++) {
                e = n;
                for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[n] = e
            }
            return t
        }();
        e.exports = i
    }, function (e, t, n) {
        "use strict";

        function i() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        }

        e.exports = i
    }, function (e, t, n) {
        var i = n(43);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        n(6)(i, {});
        i.locals && (e.exports = i.locals)
    }, function (e, t) {
        function n(e) {
            return e.replace(/Tiramisù(\s+Emstrangen)?/g, "Cortona3D Solo core")
        }

        e.exports = n
    }, function (e, t) {
        function n() {
            3 == arguments.length && "number" == typeof arguments[0] ? (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]) : 1 == arguments.length && "object" == typeof arguments[0] && null !== arguments[0] && 3 == arguments[0].length ? (this.x = arguments[0][0], this.y = arguments[0][1], this.z = arguments[0][2]) : (this.x = 0, this.y = 0, this.z = 0)
        }

        n.prototype.toArray = function () {
            return [this.x, this.y, this.z]
        }, n.prototype.toString = function () {
            return this.toArray().join(" ")
        }, n.prototype.add = function (e) {
            return new n(e.x + this.x, e.y + this.y, e.z + this.z)
        }, n.prototype.subtract = function (e) {
            return new n(this.x - e.x, this.y - e.y, this.z - e.z)
        }, n.prototype.dot = function (e) {
            return e.x * this.x + e.y * this.y + e.z * this.z
        }, n.prototype.cross = function (e) {
            return new n(this.y * e.z - e.y * this.z, this.z * e.x - e.z * this.x, this.x * e.y - e.x * this.y)
        }, n.prototype.divide = function (e) {
            return new n(this.x / e, this.y / e, this.z / e)
        }, n.prototype.multiply = function (e) {
            return new n(this.x * e, this.y * e, this.z * e)
        }, n.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }, n.prototype.normalize = function () {
            var e = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            return 0 === e ? this : this.divide(e)
        }, n.prototype.negate = function () {
            return new n(-this.x, -this.y, -this.z)
        }, e.exports = n
    }, function (e, t, n) {
        function i(e) {
            this.name = "TiramisuLoadingError", this.message = e || ""
        }

        function r() {
            try {
                var e = new window.XMLHttpRequest;
                e.overrideMimeType && e.overrideMimeType("text/javascript");
                var t = a(o.app.ENABLE_VRML_TEXT_NODE) ? "Cortona3DSoloCoreText.js" : "Cortona3DSoloCore.js";
                "function" == typeof Module.locateFile ? t = Module.locateFile(t) : Module.memoryInitializerPrefixURL ? t = Module.memoryInitializerPrefixURL + t : console.log("No memory initializer prefix URL!"), e.open("GET", t, !0), e.onerror = function (n) {
                    Module.onprogress && Module.onprogress({
                        loaded: 0,
                        total: -1,
                        type: n.type
                    }), o.emit("core.onError", new Error(t + " " + e.statusText))
                }, e.onprogress = function (e) {
                    Module.onprogress && Module.onprogress(e)
                }, e.onload = function (n) {
                    if (Module.onprogress && Module.onprogress({
                        loaded: 0,
                        total: -1,
                        type: n.type
                    }), 200 === e.status || 0 === e.status) {
                        var i = document.createElement("script"), r = window.URL || window.webkitURL || window,
                            a = r.createObjectURL(new Blob([e.response]));
                        i.onload = function () {
                            r.revokeObjectURL(a), o.emit("core.onLoad"), window.addEventListener("error", function (e, t, n, i, r) {
                                t != a && e.filename != a || o.emit("core.onError", r || e)
                            })
                        }, i.onerror = function (e) {
                            r.revokeObjectURL(a), o.emit("core.onError", new Error(t + " " + e))
                        }, i.src = a, document.body.appendChild(i)
                    } else o.emit("core.onError", new Error(t + " " + e.statusText))
                }, e.send(null)
            } catch (e) {
                throw new i(e.message || e)
            }
        }

        var o = n(2), a = n(1).checkConfigureOptions, s = n(0).expand;
        window.Module = s(window.Module || {}, o.core || {}), "object" != typeof Module.Tiramisu && (Module.Tiramisu = {});
        var u = {
            toModule: function () {
                Module.arguments = [];
                for (var e in this) this.hasOwnProperty(e) && "function" != typeof this[e] && (Module.arguments.push(e), Module.arguments.push(String(this[e])))
            }, features: 0
        };
        i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, e.exports = {Arguments: u, load: r}
    }, function (e, t, n) {
        "use strict";
        e.exports = n(47).polyfill()
    }, function (e, t) {
        function n(e, t, n) {
            var o = e, a = "", s = 0;
            if ("data:" === e.substr(0, 5)) {
                for (s = 5; "," !== e.charAt(s++);) ";" !== e.charAt(s) && (a || (a = e.substring(5, s)));
                if (o = e.substring(s), -1 === e.substring(5, s).indexOf(";base64")) return Promise.resolve(new Blob([o], {type: t || a}))
            }
            return new Promise(function (e, s) {
                function u(n) {
                    e(new Blob(n, {type: t || a}))
                }

                function l() {
                    var e = this;
                    e.onmessage = function (t) {
                        for (var n = t.data[0], i = t.data[1], r = [], o = 0; o < n.length; o += i) {
                            for (var a = n.slice(o, o + i), s = new Array(a.length), u = 0; u < a.length; u++) s[u] = a.charCodeAt(u);
                            r.push(new Uint8Array(s))
                        }
                        e.postMessage(r)
                    }
                }

                var c;
                try {
                    c = [atob(r ? o.replace(/\s/g, "") : o), n || i]
                } catch (e) {
                    return void s(e)
                }
                try {
                    var d = ("(" + l + ")();").replace('"use strict";', ""),
                        f = URL.createObjectURL(new Blob([d], {type: "application/javascript"})), h = new Worker(f);
                    h.onmessage = function (e) {
                        URL.revokeObjectURL(f), u(e.data)
                    }, h.postMessage(c)
                } catch (e) {
                    try {
                        var p = {postMessage: u};
                        l.call(p), p.onmessage({data: c})
                    } catch (e) {
                        s(e)
                    }
                }
            })
        }

        var i = 1048576, r = !1;
        try {
            atob(" ")
        } catch (e) {
            r = !0
        }
        e.exports = n
    }, function (e, t, n) {
        function i() {
            var e = Module.PanelService.didDrawScene;
            Module.PanelService.didDrawScene = function () {
                f.dispatch("core.didDrawAnimationFrame"), e()
            }, p.ui.showCanvas(!0), f.dispatch("core.didChangeLayout"), p.ui.setBannerImage(p.util.fetchBannerImage())
        }

        function r(e) {
            var t = e.companionFile, n = !m(p.DISABLE_INTERACTIVITY_XML_EMISSION);
            if (n = n && !!t, n = n && ("ipc" == e.type || "procedure" == e.type)) {
                var i = p.util.createResourceURL(t) || t;
                if (i) return p.loadCompanionFile(i).then(function (e) {
                    if (e && e.type) {
                        var t = {};
                        t[e.type] = {interactivity: e.interactivity}, g(p, t)
                    }
                })
            }
            return Promise.resolve()
        }

        function o(e) {
            var t = e.match(/^#([0-9a-f]{6})$/i);
            return t ? (t = t[1], parseInt(t.substr(0, 2), 16) << 16 | parseInt(t.substr(2, 2), 16) << 8 | parseInt(t.substr(4, 2), 16)) : (t = e.match(/^#([0-9a-f]{3})$/i), t ? (t = t[1], 17 * parseInt(t.charAt(0), 16) << 16 | 17 * parseInt(t.charAt(1), 16) << 8 | 17 * parseInt(t.charAt(2), 16)) : -1)
        }

        function a(e) {
            return "#" + (16777215 & e).toString(16).toUpperCase()
        }

        function s(e) {
            return [Module.getValue(e, "float"), Module.getValue(e + 4, "float"), Module.getValue(e + 8, "float")]
        }

        function u(e, t, n) {
            var i = 0, r = 0;
            if (t) {
                "number" == typeof t && (t = [t]), r = Module.allocate(4 * t.length, "i32", Module.ALLOC_STACK), i = t.length;
                for (var o = 0; o < i; ++o) Module.setValue(r + 4 * o, t[o], "i32")
            }
            var a = [r, i].concat(Array.prototype.slice.call(arguments, 2).filter(function (e) {
                return void 0 !== e
            })), s = new Array(a.length).map(function () {
                return "number"
            });
            Module.ccall(e, "null", s, a)
        }

        function l() {
            function e(e) {
                e.stopPropagation()
            }

            function t(e) {
                if (!S) {
                    var t = e.target, n = t.getBoundingClientRect(), i = e.clientX - n.left, r = e.clientY - n.top;
                    f.dispatch("app.didCallContextMenu", i, r, t), e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation()
                }
            }

            function n(e) {
                "mouse" !== e.pointerType && t(e)
            }

            function i(e) {
                var t = e.target, n = t.getBoundingClientRect(), i = e.clientX - n.left, r = e.clientY - n.top;
                obj = p.pickObject(i, r), clearTimeout(C), obj ? p.fitObjectsInView([obj.handle], !0) : p.fitSceneInView(!0), e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation()
            }

            Array.prototype.slice.call(document.getElementsByClassName("cortona3dsolo-popover")).forEach(function (t) {
                t.addEventListener("contextmenu", function (e) {
                    e.preventDefault()
                }, !1), t.addEventListener("pointerdown", e, !1), t.addEventListener("pointerup", e, !1)
            });
            var r = c();
            if (Module.canvas.addEventListener("contextmenu", t), m(p.ENABLE_NAVIGATION_FIT_TO_OBJECT)) {
                Module.canvas.addEventListener("click", function (e) {
                    if (4 == (+(e.shiftKey && 1) | +(e.ctrlKey && 2) | +(e.altKey && 4))) {
                        var t = e.target || e.srcElement, n = t.getBoundingClientRect(), i = e.clientX - n.left,
                            r = e.clientY - n.top, o = p.pickObject(i, r);
                        o && (clearTimeout(C), C = setTimeout(function () {
                            p.setRotationCenterToObjects([o.handle], !0)
                        }, 100))
                    }
                }, !1);
                var o = 0, a = {}, s = function (e, t) {
                    return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y))
                };
                if (r) Module.canvas.addEventListener("dblclick", i), Module.canvas.addEventListener("MSGestureTap", function (e) {
                    e.detail === e.MSGESTURE_FLAG_BEGIN + e.MSGESTURE_FLAG_END && (o ? (new Date).valueOf() - o <= T ? (o = 0, s(a, {
                        x: e.screenX,
                        y: e.screenY
                    }) < 100 && i(e)) : o = 0 : (o = (new Date).valueOf(), a.x = e.screenX, a.y = e.screenY))
                }), Module.canvas.addEventListener("MSGestureHold", function (e) {
                    e.detail & e.MSGESTURE_FLAG_BEGIN ? (n(e), S = !0) : e.detail & e.MSGESTURE_FLAG_END && setTimeout(function () {
                        S = !1
                    }, 250)
                }); else {
                    var u = {};
                    !1 === navigator.pointerEnabled && (u.inputClass = w ? E.TouchInput : _ ? E.TouchMouseInput : E.MouseInput);
                    var l = new E.Manager(Module.canvas, u), d = new E.Press({time: x}),
                        h = new E.Tap({event: "doubletap", taps: 2, threshold: 5, posThreshold: 100, interval: T});
                    h.recognizeWith(d), d.requireFailure(h), l.add(d), l.add(h), l.set({touchAction: "none"}), l.on("press", function (e) {
                        n({target: e.target, clientX: e.center.x, clientY: e.center.y}), S = !0
                    }), l.on("pressup", function () {
                        setTimeout(function () {
                            S = !1
                        }, 250)
                    }), l.on("doubletap", function (e) {
                        i({target: e.target, clientX: e.center.x, clientY: e.center.y})
                    })
                }
            }
        }

        function c() {
            function e(e) {
                t(e.translationX, e.translationY, e.scale, e.rotation, e.detail)
            }

            function t(e, t, n, i, r) {
                Module.ccall("tiramisu_microsoftGesture", "null", ["number", "number", "number", "number", "number"], arguments)
            }

            function n(e, t, n) {
                return Module.ccall("tiramisu_microsoftPointerUp", "number", ["number"], arguments)
            }

            function i(e, t, n) {
                return Module.ccall("tiramisu_microsoftPointerDown", "number", ["number", "number", "number"], arguments)
            }

            if ("function" != typeof window.MSGesture) return !1;
            console.log("Adapting to survive in Microsoft's neighbourhood.");
            var r = Module.canvas, o = new MSGesture;
            return o.target = r, r.addEventListener("MSHoldVisual", function (e) {
                e.preventDefault()
            }, !1), r.addEventListener("MSGestureStart", e, !1), r.addEventListener("MSGestureEnd", e, !1), r.addEventListener("MSGestureChange", e, !1), r.addEventListener("MSInertiaStart", e, !1), r.addEventListener("MSGestureTap", e, !1), r.addEventListener("MSGestureHold", e, !1), r.addEventListener("pointerdown", function (e) {
                if ("mouse" == e.pointerType) return void r.setPointerCapture(e.pointerId);
                i(e.pointerId, e.offsetX, e.offsetY) && (r.setPointerCapture(e.pointerId), o.target || (o.target = r), o.addPointer(e.pointerId))
            }, !1), r.addEventListener("pointerup", function (e) {
                "mouse" != e.pointerType && (e.stopPropagation(), n(e.pointerId, e.offsetX, e.offsetY))
            }, !1), window.addEventListener("pointerup", function (e) {
                if ("mouse" != e.pointerType) {
                    var t = r.getBoundingClientRect(), i = t.left + window.pageXOffset - document.body.clientLeft,
                        o = t.top + window.pageYOffset - document.body.clientTop;
                    n(e.pointerId, e.pageX - i, e.pageY - o)
                }
            }, !1), !0
        }

        var d, f = n(2), h = Module.Tiramisu, p = n(1).app, m = n(1).checkConfigureOptions, v = n(0), g = v.expand,
            b = n(9).getBaseURL, y = n(23), _ = "ontouchstart" in window,
            w = _ && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), E = n(16), x = 750, T = 250,
            S = !1, O = !1, M = !1, k = {};
        g(h, {
            didFinishLoadDocument: function (e) {
                d = e, l(), e.baseURL = "", e.bundleURL || (e.baseURL = b(e.companionFile || n(1).getDocumentURL())), r(e).then(function () {
                    e.type;
                    O = !0, f.dispatch("app.didFinishLoadDocument", e), f.dispatch("app.didAttachDocument", e), M && (i(), setTimeout(function () {
                        f.dispatch("app.firstFrameDidArrive")
                    }, 0))
                }).catch(function (e) {
                    f.dispatch("app.didFailLoadDocument", e), console.error(e)
                })
            }, firstFrameDidArrive: function (e) {
                M = !0, O && (i(), f.dispatch("app.firstFrameDidArrive", e))
            }, didFailLoadDocument: function (e) {
                f.dispatch("app.didFailLoadDocument", y(e))
            }, didClickHyperlink: function (e) {
                f.dispatch("app.didClickHyperlink", e)
            }, willStartNavigateInScene: function () {
                f.dispatch("app.willStartNavigateInScene")
            }
        }), g(h, {
            util: {
                wrapStringArray: function (e, t) {
                    for (var n = new Array(t), i = 0; i < t; ++i) n[i] = Module.Pointer_stringify(Module.getValue(e + 4 * i, "i32"));
                    return n
                }, wrapSheetArray: function (e, t) {
                    if (!t) return [];
                    for (var n = new Array(t), i = 0; i < t; ++i, e += 12) n[i] = {
                        id: Module.Pointer_stringify(Module.getValue(e, "i32")),
                        description: Module.Pointer_stringify(Module.getValue(e + 4, "i32")),
                        indentationLevel: Module.getValue(e + 8, "i32")
                    };
                    return n
                }, unmarshalObjectArray: function (e) {
                    if (!e) return [];
                    var t, n, i = [];
                    for (t = 0; n = Module.getValue(e + 4 * t, "i32"); ++t) i[t] = n;
                    return i
                }, unmarshalFloatArray: function (e, t) {
                    switch (t) {
                        case 1:
                            return getValue(e, "float");
                        case 2:
                            return [getValue(e, "float"), getValue(e + 4, "float")];
                        case 3:
                            return [getValue(e, "float"), getValue(e + 4, "float"), getValue(e + 8, "float")];
                        case 4:
                            return [getValue(e, "float"), getValue(e + 4, "float"), getValue(e + 8, "float"), getValue(e + 12, "float")];
                        default:
                            return console.error(t), null
                    }
                }
            }
        });
        var C, I = {
            version: function () {
                var e = h.VERSION >> 24, t = h.VERSION >> 16 & 255, n = 65535 & h.VERSION;
                new Date(1e3 * h.BUILD_TIME);
                return "1.6.6 (core: " + [e, t, n].join(".") + ")"
            }, resize: function (e, t) {
                Module.ccall("tiramisu_resize", "null", ["number", "number"], arguments)
            }, getObjectName: function (e) {
                return Module.ccall("tiramisu_getObjectName", "string", ["number"], arguments)
            }, getObjectTypeName: function (e) {
                return Module.ccall("tiramisu_getObjectTypeName", "string", ["number"], arguments)
            }, getObjectWithName: function (e) {
                return Module.ccall("tiramisu_getObjectWithName", "number", ["string"], arguments)
            }, isObjectIgnorableByPicker: function (e) {
                return 0 !== Module.ccall("tiramisu_isObjectIgnorableByPicker", "number", ["number"], arguments)
            }, setObjectIgnorableByPicker: function (e, t) {
                Module.ccall("tiramisu_setObjectIgnorableByPicker", "null", ["number", "number"], arguments)
            }, pickObject: function (e, t, n) {
                var i = void 0 === n ? 0 : n ? 2 : 1;
                return node = Module.ccall("tiramisu_pickObject", "number", ["number", "number", "number"], [e, t, i]), node ? {
                    handle: node,
                    name: Module.ccall("tiramisu_getObjectName", "string", ["number"], [node])
                } : null
            }, pickObjectChain: function (e, t) {
                var n = Module._tiramisu_pickObjectChain(e, t), i = null;
                return n && (i = {
                    coord: s(n),
                    normal: s(n + 12),
                    sceneCoord: s(n + 24),
                    sceneNormal: s(n + 36),
                    chain: h.util.unmarshalObjectArray(n + 48)
                }, Module._free(n)), i
            }, getPickerTransparencyThreshold: function () {
                return Module.ccall("tiramisu_getPickerTransparencyThreshold", "number")
            }, setPickerTransparencyThreshold: function (e) {
                return Module.ccall("tiramisu_setPickerTransparencyThreshold", "null", ["number"], arguments)
            }, addSelectedObjects: function (e, t) {
                u("tiramisu_addSelectedObjects", e, t), f.dispatch("app.didChangeSelection")
            }, setSelectedObjects: function (e, t) {
                u("tiramisu_setSelectedObjects", e, t), f.dispatch("app.didChangeSelection")
            }, getSelectedObjects: function () {
                var e = Module.ccall("tiramisu_getSelectedObjects", "number"), t = h.util.unmarshalObjectArray(e);
                return Module._free(e), t
            }, setDefaultBackgroundColors: function (e) {
                var t, n = 0, i = 0, r = Module.Runtime.stackSave();
                if (e) for ("string" == typeof e && (e = [e]), n = e.length, i = Module.allocate(4 * n, "i32", Module.ALLOC_STACK), t = 0; t < n; ++t) Module.setValue(i + 4 * t, o(e[t]), "i32");
                Module.ccall("tiramisu_setDefaultBackgroundColors", "null", ["number", "number"], [i, n]), Module.Runtime.stackRestore(r)
            }, setMouseDragMode: function (e) {
                Module.ccall("tiramisu_setMouseDragMode", "null", ["number"], arguments)
            }, setObjectPropertyf: function (e, t, n, i, r, o, a) {
                if (t === p.PROPERTY_VISIBILITY && "generic" === d.type) {
                    var s = 0 !== Module._tiramisu_isObjectVisibile(e), u = !!i;
                    return e in k || (k[e] = s), s !== u && (Module._tiramisu_setObjectVisibility(e, u), !0)
                }
                return 0 !== Module.ccall("tiramisu_setObjectPropertyf", "number", ["number", "number", "number", "number", "number", "number", "number"], arguments)
            }, getObjectPropertyf: function (e, t) {
                var n = Runtime.stackSave(), i = Module.allocate(16, "float", Module.ALLOC_STACK),
                    r = Module._tiramisu_getObjectPropertyf(e, t, i), o = h.util.unmarshalFloatArray(i, r);
                return Runtime.stackRestore(n), o
            }, restoreObjectProperty: function (e, t, n) {
                if (t === p.PROPERTY_VISIBILITY && "generic" === d.type) {
                    if (e) {
                        if (e in k) {
                            var i = 0 !== Module._tiramisu_isObjectVisibile(e), r = k[e];
                            if (delete k[e], i !== r) return Module._tiramisu_setObjectVisibility(e, r), !0
                        }
                        return !1
                    }
                    for (var o in k) Module._tiramisu_setObjectVisibility(o, k[o]);
                    k = {}
                }
                return 0 !== Module.ccall("tiramisu_restoreObjectProperty", "number", ["number", "number", "number"], [e || 0, t, n])
            }, getObjectsWithDirtyProperty: function (e) {
                if (e === p.PROPERTY_VISIBILITY && "generic" === d.type) {
                    var t = [];
                    for (var n in k) t.push(n);
                    return t
                }
                var i = Module.ccall("tiramisu_getObjectsWithDirtyProperty", "number", ["number"], arguments),
                    r = h.util.unmarshalObjectArray(i);
                return Module._free(i), r
            }, isRotationCenterVisible: function () {
                return 0 !== Module.ccall("tiramisu_isRotationCenterVisible", "number")
            }, setRotationCenterVisibility: function (e) {
                Module.ccall("tiramisu_setRotationCenterVisibility", "null", ["number"], arguments)
            }, setDefaultView: function (e) {
                Module.ccall("tiramisu_setDefaultView", "null", ["number"], arguments)
            }, alignHorizon: function (e) {
                Module.ccall("tiramisu_alignHorizon", "null", ["number"], arguments)
            }, jumpToStandardView: function (e, t, n) {
                Module.ccall("tiramisu_jumpToStandardView", "null", ["string", "number", "number"], [e, t, n || 0])
            }, fitSceneInView: function (e, t) {
                Module.ccall("tiramisu_fitObjectsInView", "null", ["number", "number", "number", "number"], [0, -1, e, t || 0])
            }, fitSelectedObjectsInView: function (e, t) {
                Module.ccall("tiramisu_fitObjectsInView", "null", ["number", "number", "number", "number"], [0, -2, e, t || 0])
            }, fitObjectsInView: function (e, t, n) {
                u("tiramisu_fitObjectsInView", e, t, n)
            }, setRotationCenterToScene: function () {
                Module.ccall("tiramisu_setRotationCenterToObjects", "null", ["number", "number", "number"], [0, -1, 0])
            }, setRotationCenterToSelectedObjects: function () {
                Module.ccall("tiramisu_setRotationCenterToObjects", "null", ["number", "number", "number"], [0, -2, 0])
            }, setRotationCenterToObjects: function (e, t) {
                u("tiramisu_setRotationCenterToObjects", e, t), t && Module.ccall("tiramisu_centerRotationCenterInView", "null", ["number"], [t])
            }, centerRotationCenterInView: function (e) {
                Module.ccall("tiramisu_centerRotationCenterInView", "null", ["number"], arguments)
            }, resetRotationCenter: function () {
                Module.ccall("tiramisu_resetRotationCenter", "null")
            }, getDocumentInfo: function () {
                return d && g({}, d)
            }, getOptions: function () {
                var e, t, n = Module.ccall("tiramisu_getOptions", "number"), i = 0;
                if (n) {
                    for (e = {}, i = 0; t = Module.getValue(n + i, "i32"); i += 8) e[Module.Pointer_stringify(t)] = Module.Pointer_stringify(Module.getValue(n + i + 4, "i32"));
                    return Module._free(n), e
                }
            }, getOption: function (e) {
                var t = Module.ccall("tiramisu_getOption", "number", ["string"], [e]);
                if (t) return Module.Pointer_stringify(t)
            }, setObjectName: function (e, t) {
                Module.ccall("tiramisu_setObjectName", "null", ["number", "string"], arguments)
            }, getHoverColor: function () {
                return a(Module._tiramisu_getHoverColor())
            }, setHoverColor: function (e) {
                return Module._tiramisu_setHoverColor(o(e))
            }, getSelectionColor: function () {
                return a(Module._tiramisu_getSelectionColor())
            }, setSelectionColor: function (e) {
                return Module._tiramisu_setSelectionColor(o(e))
            }, getViewpoints: function () {
                var e, t, n = Module._tiramisu_getViewpoints(), i = [];
                if (n) {
                    for (t = 0; e = Module.getValue(n + t, "i32"); t += 12) i.push({
                        handle: e,
                        name: Module.Pointer_stringify(Module.getValue(n + t + 4, "i32")),
                        description: Module.Pointer_stringify(Module.getValue(n + t + 8, "i32"))
                    });
                    Module._free(n)
                }
                return i
            }, getActiveViewpoint: function () {
                return Module._tiramisu_getActiveViewpoint()
            }, setActiveViewpoint: function (e) {
                Module._tiramisu_setActiveViewpoint(e)
            }, addObjects: function (e, t) {
                v.isObject(e) && e.forEach || (e = [e]), e.forEach(function (e) {
                    Module.ccall("tiramisu_addObject", "null", ["number", "number"], [e, t])
                })
            }, removeObjects: function (e, t) {
                v.isObject(e) && e.forEach || (e = [e]), e.forEach(function (e) {
                    Module.ccall("tiramisu_removeObject", "null", ["number", "number"], [e, t])
                })
            }, removeAllObjects: function (e) {
                Module.ccall("tiramisu_removeAllObjects", "null", ["number"], arguments)
            }, getChildObjects: function (e) {
                var t = Module._tiramisu_getChildObjects(e), n = h.util.unmarshalObjectArray(t);
                return Module._free(t), n
            }, setChildObjects: function (e, t) {
                var n = 0;
                if (e) {
                    "number" == typeof e && (e = [e]), objectArray = Module.allocate(4 * e.length, "i32", Module.ALLOC_STACK), n = e.length;
                    for (var i = 0; i < n; ++i) Module.setValue(objectArray + 4 * i, e[i], "i32")
                }
                return 0 !== Module._tiramisu_setChildObjects(t, objectArray, n)
            }, getParentObject: function (e) {
                return Module._tiramisu_getParentObject(e)
            }, getObjectVisibility: function (e, t) {
                return Module._tiramisu_getObjectVisibility(e, t)
            }, getObjectFlags: function (e) {
                return Module._tiramisu_getObjectFlags(e)
            }, createObjectsFromString: function (e, t) {
                var n = Module.ccall("tiramisu_createObjects", "number", ["string", "number", "string"], [e, 0, t || null]),
                    i = h.util.unmarshalObjectArray(n);
                return n ? Module._free(n) : Module.printErr('createObjectsFromString() failed: "' + e + '"'), i
            }, createObjectsFromURL: function (e) {
                return v.loadResource(e, "", "arraybuffer").then(function (t) {
                    var n, i, r, o = t.response;
                    return o && (n = new Uint8Array(o), i = Module._malloc(n.byteLength), Module.writeArrayToMemory(n, i), r = Module.ccall("tiramisu_createObjects", "number", ["number", "number", "string"], [i, n.byteLength, e]), handles = h.util.unmarshalObjectArray(r), Module._free(i), r) ? (Module._free(r), Promise.resolve(handles)) : Promise.reject(new Error('createObjectsFromURL() failed: "' + e + '"'))
                })
            }, createObjectsFromDocumentBundle: function (e) {
                var t = Module.ccall("tiramisu_createObjectsFromBundleItem", "number", ["string"], [e]),
                    n = h.util.unmarshalObjectArray(t);
                return t ? Module._free(t) : Module.printErr('createObjectsFromDocumentBundle() failed: "' + e + '"'), n
            }, setCameraPosition: function (e, t, n, i, r) {
                var o = Module.Runtime.stackSave(), a = Module.allocate(3, "float", Module.ALLOC_STACK),
                    s = Module.allocate(4, "float", Module.ALLOC_STACK),
                    u = i ? Module.allocate(3, "float", Module.ALLOC_STACK) : 0;
                Module.setValue(a, e[0], "float"), Module.setValue(a + 4, e[1], "float"), Module.setValue(a + 8, e[2], "float"), Module.setValue(s, t[0], "float"), Module.setValue(s + 4, t[1], "float"), Module.setValue(s + 8, t[2], "float"), Module.setValue(s + 12, t[3], "float"), i && (Module.setValue(u, i[0], "float"), Module.setValue(u + 4, i[1], "float"), Module.setValue(u + 8, i[2], "float")), Module._tiramisu_setCameraPosition(a, s, n, u, r), Module.Runtime.stackRestore(o)
            }, setObjectsTransparency: function (e, t, n) {
                var i = e || [];
                "number" == typeof i && (i = [i]), i.forEach(function (e) {
                    p.setObjectPropertyf(e, p.PROPERTY_TRANSPARENCY, n, t)
                })
            }, getObjectsTransparency: function (e) {
                var t = e || [];
                return "number" == typeof t && (t = [t]), t.reduce(function (e, t) {
                    return Math.max(p.getObjectPropertyf(t, p.PROPERTY_TRANSPARENCY), e)
                }, 0)
            }, toggleObjectsVisibility: function (e, t) {
                var n = e || [], i = !t;
                return "number" == typeof n && (n = [n]), void 0 === t && (i = !e.some(function (e) {
                    return !!p.getObjectVisibility(e)
                })), e.forEach(function (e) {
                    i ? p.setObjectPropertyf(e, p.PROPERTY_VISIBILITY, !1, -1) : p.restoreObjectProperty(e, p.PROPERTY_VISIBILITY, !1)
                }), !i
            }
        };
        Object.defineProperties(p, {
            globalEdgeColor: {
                get: function () {
                    return a(Module._tiramisu_getGlobalEdgeColor())
                }, set: function (e) {
                    Module._tiramisu_setGlobalEdgeColor(o(e))
                }, enumerable: !0
            }, edgeColorWeights: {
                get: function () {
                    return s(Module._tiramisu_getEdgeColorWeights())
                }, set: function (e) {
                    var t, n = Module.Runtime.stackSave(), i = Module.allocate(12, "float", Module.ALLOC_STACK);
                    for (t = 0; t < 3; ++t) Module.setValue(i + 4 * t, e[t], "float");
                    Module._tiramisu_setEdgeColorWeights(i), Module.Runtime.stackRestore(n)
                }, enumerable: !0
            }, ambientOcclusionEnabled: {
                get: function () {
                    return !!Module._tiramisu_isAmbientOcclusionEnabled()
                }, set: function (e) {
                    Module._tiramisu_enableAmbientOcclusion(e)
                }, enumerable: !0
            }, ambientOcclusionSupported: {
                get: function () {
                    return !!Module._tiramisu_isAmbientOcclusionSupported()
                }, enumerable: !0
            }, hoverColor: {
                get: function () {
                    return a(Module._tiramisu_getHoverColor())
                }, set: function (e) {
                    Module._tiramisu_setHoverColor(o(e))
                }, enumerable: !0
            }, selectionColor: {
                get: function () {
                    return a(Module._tiramisu_getSelectionColor())
                }, set: function (e) {
                    Module._tiramisu_setSelectionColor(o(e))
                }, enumerable: !0
            }, pickerTransparencyThreshold: {
                get: function () {
                    return Module.ccall("tiramisu_getPickerTransparencyThreshold", "number")
                }, set: function (e) {
                    Module.ccall("tiramisu_setPickerTransparencyThreshold", "null", ["number"], arguments)
                }, enumerable: !0
            }, modelInfo: {
                get: function () {
                    return d && g({}, d)
                }, enumerable: !0
            }, activeViewpoint: {
                get: function () {
                    return Module._tiramisu_getActiveViewpoint()
                }, set: function (e) {
                    Module._tiramisu_setActiveViewpoint(e)
                }, enumerable: !0
            }, recursiveObjectLookup: {
                get: function () {
                    return !!Module._tiramisu_isRecursiveObjectLookupEnabled()
                }, set: function (e) {
                    Module._tiramisu_enableRecursiveObjectLookup(e)
                }, enumerable: !0
            }
        }), Object.defineProperty(p, "MOUSE_DRAG_MODE_SPIN", {
            value: 0,
            writable: !1
        }), Object.defineProperty(p, "MOUSE_DRAG_MODE_PAN", {
            value: 1,
            writable: !1
        }), Object.defineProperty(p, "MOUSE_DRAG_MODE_ZOOM", {
            value: 2,
            writable: !1
        }), Object.defineProperty(p, "MOUSE_DRAG_MODE_DEFAULT", {
            value: 0,
            writable: !1
        }), Object.defineProperty(p, "PROPERTY_DIFFUSE_COLOR", {
            value: 0,
            writable: !1
        }), Object.defineProperty(p, "PROPERTY_EMISSIVE_COLOR", {
            value: 1,
            writable: !1
        }), Object.defineProperty(p, "PROPERTY_TRANSPARENCY", {
            value: 2,
            writable: !1
        }), Object.defineProperty(p, "PROPERTY_VISIBILITY", {
            value: 3,
            writable: !1
        }), Object.defineProperty(p, "PROPERTY_TRANSLATION", {
            value: 4,
            writable: !1
        }), Object.defineProperty(p, "PROPERTY_ROTATION", {
            value: 5,
            writable: !1
        }), Object.defineProperty(p, "PROPERTY_SCALE", {
            value: 6,
            writable: !1
        }), Object.defineProperty(p, "MR_PARTNUMBER", {
            value: 1,
            writable: !1
        }), Object.defineProperty(p, "MR_PARTDESC", {
            value: 2,
            writable: !1
        }), Object.defineProperty(p, "MR_ITEM", {
            value: 3,
            writable: !1
        }), Object.defineProperty(p, "MR_ITEMVAR", {
            value: 4,
            writable: !1
        }), Object.defineProperty(p, "MR_INDENT", {
            value: 5,
            writable: !1
        }), Object.defineProperty(p, "MR_UPA", {
            value: 6,
            writable: !1
        }), Object.defineProperty(p, "MR_TOTALQTY", {
            value: 7,
            writable: !1
        }), Object.defineProperty(p, "OBJECT_VISIBILITY_VISIBLE", {
            value: 0,
            writable: !1
        }), Object.defineProperty(p, "OBJECT_VISIBILITY_HIDDEN", {
            value: 1,
            writable: !1
        }), Object.defineProperty(p, "OBJECT_VISIBILITY_TRANSPARENT", {
            value: 2,
            writable: !1
        }), Object.defineProperty(p, "OBJECT_VISIBILITY_IMPLICITLY_HIDDEN", {
            value: 3,
            writable: !1
        }), e.exports = {app: I}
    }, function (e, t, n) {
        function i(e) {
            var t, n = Module.getValue(e, "i32"), i = new Array(n);
            for (t = 1; t <= n; ++t) i[t - 1] = Module.getValue(e + 4 * t, "i32");
            return i
        }

        var r = n(2), o = Module.Tiramisu, a = n(1).app, s = n(0).expand, u = n(1).checkConfigureOptions,
            l = n(1).usedModules, c = {}, d = [];
        r.once("app.didAttachDocument", function (e) {
            "ipc" == e.type && (d = e.sheets, c = s({}, e.sheet), delete c.drawing, r.once("app.firstFrameDidArrive", function () {
                o.ipc.didSelectSheet(c)
            }), l.core.config.ipcHoverColor && a.setHoverColor(l.core.config.ipcHoverColor), l.core.config.ipcSelectionColor && a.setSelectionColor(l.core.config.ipcSelectionColor))
        }), s(o, {
            ipc: {
                didSelectSheet: function (e) {
                    a.ipc.interactivity && (e.drawing = a.ipc.interactivity.getDrawingForIPCView(e.id)), a.drawing && a.drawing.load(e.drawing).catch(function () {
                        u(a.ENABLE_AUTO_SWITCHING_DISPLAY_MODE) && a.ui.isDrawingDisplayMode() && a.ipc.toggleDrawingDisplayMode()
                    }), c = e, r.dispatch("app.ipc.didSelectSheet", e)
                }, didHoverItem: function (e, t) {
                    r.dispatch("app.ipc.didHoverItem", e, i(t))
                }, didSelectItem: function (e, t) {
                    r.dispatch("app.ipc.didSelectItem", e, i(t))
                }, didChangeItemVisibility: function (e, t, n) {
                    var i, o = new Array(n);
                    for (i = 0; i < n; ++i) o[i] = Module.getValue(t + 4 * i, "i32");
                    r.dispatch("app.ipc.didChangeItemVisibility", e, o)
                }, willStartSheetTransitionAnimation: function (e) {
                    r.dispatch("app.ipc.willStartSheetTransitionAnimation", e.id)
                }, didStopSheetTransitionAnimation: function (e) {
                    r.dispatch("app.ipc.didStopSheetTransitionAnimation", e.id)
                }
            }
        });
        var f = {
            ipc: {
                setCurrentSheet: function (e, t) {
                    Module.ccall("ipc_setCurrentSheet", "null", ["string", "number"], [e, !a.ui.isDrawingDisplayMode() && t])
                }, toggleItemVisibility: function (e) {
                    Module.ccall("ipc_toggleItemVisibility", "null", ["number"], arguments)
                }, selectItem: function (e, t) {
                    return i(Module.ccall("ipc_selectItem", "number", ["number"], [e, void 0 === t || t]))
                }, hoverItem: function (e, t) {
                    return i(Module.ccall("ipc_hoverItem", "null", ["number"], [e, void 0 === t || t]))
                }, resetCurrentSheet: function (e) {
                    a.drawing && n(7).getSVGViewer().reset(e), Module.ccall("ipc_resetCurrentSheet", "null", ["number"], arguments)
                }, getItemWithHotspot: function (e) {
                    return Module.ccall("ipc_getItemWithHotspot", "number", ["string"], arguments)
                }, getCurrentSheet: function () {
                    return c
                }, toggleDrawingDisplayMode: function (e) {
                    return !!a.drawing && (e = void 0 === e ? !a.drawing.isVisible() : e, a.drawing.show(e), a.ui.showCanvas(!e), r.dispatch("app.ipc.didDrawingDisplayMode", e), e)
                }
            }
        };
        Object.defineProperty(f.ipc, "currentSheetInfo", {
            get: function () {
                return c
            }, enumerable: !0
        }), Object.defineProperties(f.ipc, {
            sheetTransitionRate: {
                get: function () {
                    return 1 / Module.getValue(Module._ipc_getSheetTransitionAnimationDurations() + 4, "float")
                }, set: function (e) {
                    e > 0 && Module._ipc_setSheetTransitionAnimationDurations(1 / e, 1 / e)
                }, enumerable: !0
            }, DEFAULT_TRANSITION_STEP_DURATION: {value: 1, enumerable: !0}
        }), f.ipc.dpl = n(67), e.exports = {app: f}
    }, function (e, t, n) {
        var i = n(2), r = Module.Tiramisu, o = n(1).app;
        (0, n(0).expand)(r, {
            procedure: {
                didFireEvent: function (e, t, n, r) {
                    i.dispatch("app.procedure.didFireEvent", e, t, n, r)
                }, didChangePlayerState: function (e, t) {
                    i.dispatch("app.procedure.didChangePlayerState", e, t)
                }, didEnterSubstep: function (e) {
                    i.dispatch("app.procedure.didEnterSubstep", e)
                }, didEnterSubstepWithName: function (e) {
                    i.dispatch("app.procedure.didEnterSubstepWithName", e)
                }
            }
        });
        var a = {
            procedure: {
                seekToSubstep: function (e, t) {
                    Module.ccall("procedure_seekToSubstep", "null", ["string", "number"], [e, "number" == typeof t ? t : -1])
                }, setPlaybackSpeed: function (e) {
                    Module.ccall("procedure_setPlaybackSpeed", "null", ["number"], arguments)
                }, freezeCamera: function (e) {
                    Module.ccall("procedure_freezeCamera", "null", ["number"], arguments)
                }, setPlayPosition: function (e, t) {
                    Module.ccall("procedure_setPlayPosition", "null", ["number", "number"], arguments)
                }, backward: function (e) {
                    Module.ccall("procedure_backward", "null", ["number"], ["number" == typeof e ? e : -1])
                }, forward: function (e) {
                    Module.ccall("procedure_forward", "null", ["number"], ["number" == typeof e ? e : -1])
                }, stop: function () {
                    Module.ccall("procedure_stop", "null")
                }, play: function (e) {
                    Module.ccall("procedure_play", "null", ["number"], arguments)
                }, pause: function () {
                    Module.ccall("procedure_pause", "null")
                }, setPlayRange: function (e, t, n) {
                    Module.ccall("procedure_setPlayRange", "null", ["string", "string", "number"], [e, t || e, n || 0])
                }, getPlayableRangeStartTime: function () {
                    return Module.ccall("procedure_getPlayableRangeStartTime", "number")
                }, getPlayableRangeStopTime: function () {
                    return Module.ccall("procedure_getPlayableRangeStopTime", "number")
                }, requestPlayerState: function () {
                    Module.ccall("procedure_requestPlayerState", "null")
                }, getOptions: function () {
                    return o.getOptions()
                }, getOption: function (e) {
                    return o.getOption(e)
                }, setPlayableItemList: function (e) {
                    var t, n, i = e ? e.length : 0, r = 0, o = Module.Runtime.stackSave();
                    if (i) for (r = Module.allocate(4 * i, "*", Module.ALLOC_STACK), t = 0; t < i; ++t) Module.setValue(r + 4 * t, Module.allocate(Module.intArrayFromString(e[t]), "i8", Module.ALLOC_STACK), "*");
                    return n = Module._procedure_setPlayableItemList(r, i), Module.Runtime.stackRestore(o), 0 !== n
                }
            }
        };
        Object.defineProperty(a.procedure, "defaultSeekMode", {
            get: function () {
                return Module._procedure_getDefaultSeekMode()
            }, set: function (e) {
                Module._procedure_setDefaultSeekMode(e)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(a.procedure, "duration", {
            get: function () {
                return Module._procedure_getDuration()
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(a.procedure, "RANGE_FLAGS_SEEK_TO_START", {
            value: 1,
            writable: !1
        }), Object.defineProperty(a.procedure, "RANGE_FLAGS_SEEK_TO_END", {
            value: 2,
            writable: !1
        }), Object.defineProperty(a.procedure, "RANGE_FLAGS_REQUEST_NOTIFICATION", {
            value: 4,
            writable: !1
        }), Object.defineProperty(a.procedure, "RANGE_FLAGS_DO_NOT_RECALCULATE_POSITION", {
            value: 8,
            writable: !1
        }), Object.defineProperty(a.procedure, "SEEK_DEFAULT", {
            value: -1,
            writable: !1
        }), Object.defineProperty(a.procedure, "SEEK_TO_BEGIN", {
            value: 0,
            writable: !1
        }), Object.defineProperty(a.procedure, "SEEK_TO_CUE_POINT", {
            value: 1,
            writable: !1
        }), Object.defineProperty(a.procedure, "SEEK_TO_END", {
            value: 2,
            writable: !1
        }), Object.defineProperty(a.procedure, "RANGE_VALUE_CURRENT_STEP", {
            value: "%%CURRENT_STEP%%",
            writable: !1
        }), Object.defineProperty(a.procedure, "RANGE_VALUE_CURRENT_SUBSTEP", {
            value: "%%CURRENT_SUBSTEP%%",
            writable: !1
        }), e.exports = {app: a}
    }, function (e, t, n) {
        var i = null, r = n(1).app, o = !1, a = {
            ui: {
                setBannerImage: function (e) {
                    Module.PanelService && e && Module.PanelService.setBannerImage(e)
                }, showCanvas: function (e) {
                    if (Module.canvas) {
                        e = void 0 === e || !!e, Module.canvas.style.display = e ? "block" : "none";
                        var t = Module.canvas.parentNode.querySelector("#tiramisu-panel-group");
                        t && (t.style.display = e ? "" : "none"), r.ui.showPanels(e), o = e, e && Cortona3DSolo.dispatch("core.didChangeLayout")
                    }
                }, showPanels: function (e) {
                    Module.PanelService && (e = void 0 === e || !!e, Module.PanelService.showPanels(e))
                }, isDrawingDisplayMode: function () {
                    var e = !1;
                    return r.drawing && (e = r.drawing.isVisible() && !o), e
                }, isCanvasVisible: function () {
                    return o
                }, toggleSpeakerIcon: function (e) {
                    if (Module.PanelService) {
                        var t;
                        if (e = void 0 === e ? !i : e) {
                            if (i) return;
                            t = document.createElement("div"), t.className = "tiramisu-speaker", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("span")), t.appendChild(document.createElement("span")), t.appendChild(document.createElement("span")), Module.PanelService.appendChild(t), i = t, window.setTimeout(function () {
                                t.style.opacity = 1
                            }, 300)
                        } else t = i, t && (t.style.opacity = 0, window.setTimeout(function () {
                            t.parentNode.removeChild(t)
                        }, 300)), i = null;
                        return e
                    }
                }
            }
        };
        e.exports = {app: a}
    }, function (e, t, n) {
        function i(e, t, n, i) {
            function r() {
                i ? setTimeout(function () {
                    try {
                        s.revokeObjectURL(u)
                    } catch (e) {
                    }
                }, i) : s.revokeObjectURL(u), t.removeEventListener("load", r, !1), t.removeEventListener("error", r, !1)
            }

            if (0 !== e) {
                void 0 === i && (i = t ? 0 : -1);
                var o = Module.getValue(e, "i32"), a = Module.HEAPU8.subarray(e + 4, e + o + 4),
                    s = window.URL || window.webkitURL || window, n = n || {}, u = s.createObjectURL(new Blob([a], n));
                return Module._free(e), t || (t = new Image), i >= 0 && (t.addEventListener("load", r, !1), t.addEventListener("error", r, !1)), t.src = u, t
            }
        }

        function r(e) {
            var t = e.BYTES_PER_ELEMENT * e.length, n = Module._malloc(t),
                i = new Uint8Array(Module.HEAPU8.buffer, n, t);
            return i.set(new Uint8Array(e.buffer)), i
        }

        var o = n(9).getBaseURL(), a = {
            util: {
                createResourceURL: function (e) {
                    if (Module.ccall) {
                        var t = Module.ccall("tiramisu_copyResourceFromBundle", "number", ["string"], arguments);
                        if (0 !== t) {
                            var n = Module.getValue(t, "i32"), i = Module.HEAPU8.subarray(t + 4, t + n + 4),
                                r = window.URL || window.webkitURL || window,
                                o = /\.svg$/i.test(e) ? {type: "image/svg+xml"} : {},
                                a = r.createObjectURL(new Blob([i], o));
                            return Module._free(t), a
                        }
                    }
                }, revokeResourceURL: function (e) {
                    if (e && /^blob:/i.test(e)) {
                        (window.URL || window.webkitURL || window).revokeObjectURL(e)
                    }
                }, fetchImageFromDocumentBundle: function (e, t) {
                    var n, r, a;
                    return "string" == typeof e ? (n = new Image, r = e) : (n = e, r = n.getAttribute("src"), 0 === r.lastIndexOf(o, 0) && (r = r.slice(o.length))), r = decodeURI(r).replace(/\.cgm$/i, ".svg"), a = /\.svg$/i.test(r) ? {type: "image/svg+xml"} : {}, i(Module.ccall("tiramisu_copyResourceFromBundle", "number", ["string"], [r]), n, a, t)
                }, fetchBannerImage: function () {
                    var e, t = Module.Runtime.stackSave(), n = Module.allocate(8, "i32", Module.ALLOC_STACK),
                        r = i(Module.ccall("tiramisu_copyBannerImage", "number", ["number"], [n]));
                    return r && (e = {
                        image: r,
                        frameCount: Module.getValue(n, "i32"),
                        frameDuration: Module.getValue(n + 4, "i32") / 1e3
                    }), Module.Runtime.stackRestore(t), e
                }, Vec3f: n(24), Rotation: n(65), inflate: function (e) {
                    var t = r(e), n = Module._tiramisu_utility_inflate(t.byteOffset, t.length);
                    return Module._free(t.byteOffset), n ? HEAPU8.subarray(n + 4, n + 4 + getValue(n, "i32")) : null
                }, freeTypedArray: function (e) {
                    e && Module._free(e.byteOffset - 4)
                }
            }
        };
        e.exports = {app: a}
    }, function (e, t, n) {
        function i(e) {
            e = e || {}, e.features = e.features || 0;
            var t, n, i = window.URL || window.webkitURL || window, o = e.src;
            if (!o) if (n = document.querySelector("script[type^='application/solo']")) {
                if (e.totalMemory = e.totalMemory || +n.getAttribute("data-total-memory") || d, e.features = e.features | +n.getAttribute("data-features"), !(o = n.getAttribute("src"))) return s(n.textContent, "application/zip").then(function (t) {
                    return e.src = i.createObjectURL(t), n.parentNode.removeChild(n), e
                });
                e.src = o, n.parentNode.removeChild(n)
            } else (n = document.querySelector("script[type='model/vrml']")) && (o = n.getAttribute("src"), o ? e.src = o : (t = n.textContent.replace(/^\s+/, ""), 0 !== t.indexOf("#VRML V2.0 utf8") && (t = "#VRML V2.0 utf8\n" + t), e.isRAContent = /PROTO\s+ObjectVM/.test(t), e.isViewpointInScene = /Viewpoint\s*{/.test(t), e.isTextInScene = /Text\s*{/.test(t), e.src = i.createObjectURL(new Blob([t], {type: "model/vrml"}))), e.totalMemory = e.totalMemory || +n.getAttribute("data-total-memory") || d, e.features = e.features | +n.getAttribute("data-features"), e.isRAContent || (e.features |= +r.app.DISABLE_DISCARDABLE_GEOMETRY_DATA), e.isTextInScene && (e.features |= +r.app.ENABLE_VRML_TEXT_NODE), n.parentNode.removeChild(n));
            return Promise.resolve(e)
        }

        var r = n(2), o = n(1).app, a = n(0).expand, s = r.app.util.b64toBlob, u = n(23);
        n(62), n(61);
        var l = !1;
        r.core = a(r.core || {}, r.config || {});
        var c = r.core = a({
            printErr: function (e) {
                e = u(Array.prototype.slice.call(arguments).join(" ")), console.error(e), r.core.lastErrorText = e
            }, print: function () {
                text = u(Array.prototype.slice.call(arguments).join(" ")), console.log(text)
            }, setStatus: function (e) {
            }, didChangeLayout: function () {
                if (l) {
                    var e = r.core.canvas, t = e.clientWidth, n = e.clientHeight;
                    r.app.resize(t, n)
                }
            }
        }, r.core);
        a(r.core, {
            onprogress: function (e) {
                var t = e.lengthComputable || void 0 === e.lengthComputable ? e.total : 0, n = e.loaded;
                r.dispatch("app.onProgress", n, t, e.type)
            }, isRuntimeReady: function () {
                return l
            }, onRuntimeInitialized: function () {
                setTimeout(function () {
                    var e = Module.Tiramisu;
                    e.VERSION, e.VERSION, e.VERSION, new Date(1e3 * e.BUILD_TIME)
                }, 10), l = !0, "function" == typeof c.didChangeLayout && (window.addEventListener("resize", function () {
                    r.dispatch("core.didChangeLayout")
                }, !1), c.didChangeLayout(), r.dispatch("core.didChangeLayout")), o.ui && o.ui.showCanvas(!1), r.emit("core.onRuntimeInitialized"), r.dispatch("app.onReady")
            }
        });
        var d = 64;
        e.exports = {
            configure: function (e) {
                e = e || {};
                var t, s = {};
                r.baseURL && (s.memoryInitializerPrefixURL = r.baseURL, s.filePackagePrefixURL = r.baseURL), t = e.element || e.canvas || function () {
                    var e = document.createElement("canvas");
                    return n(22), document.body.insertBefore(e, document.body.firstChild), e
                }(), t.classList.add("cortona3dsolo-canvas");
                var u = n(25), c = u.Arguments;
                return Object.defineProperty(Module, "canvas", {
                    value: t,
                    enumerable: !0
                }), Object.defineProperty(Module, "runtimeReady", {
                    get: function () {
                        return l
                    }, enumerable: !0
                }), i(e).then(function (e) {
                    e.prefixURL && (s.memoryInitializerPrefixURL = e.prefixURL, s.filePackagePrefixURL = e.prefixURL), "number" == typeof e.totalMemory && (s.TOTAL_MEMORY = 1024 * e.totalMemory * 1024), e.features && o.configureInstance(e.features), a(r.core, s), e.src && (c.document = r.app.util.toUrl(e.src)), e.features && (c.features = 32767 & e.features), c.toModule(), u.load()
                }).catch(function (e) {
                    r.emit("core.onError", e)
                }), Module
            }
        }
    }, function (e, t, n) {
        function i(e, t) {
            return t.split(".").reduce(function (e, t) {
                return e && e[t]
            }, e)
        }

        function r() {
            var e = {};
            return e.promise = new Promise(function (t, n) {
                e.resolve = t, e.reject = n
            }), e
        }

        function o(e, t) {
            function n() {
                p = null
            }

            h = h.then(function () {
                return p = e, t()
            }).then(n, n)
        }

        function a(e) {
            return /^\/|:|\?|\.js$/.test(e) ? e : e + ".js"
        }

        function s(e, t) {
            for (var n, i = e, r = /^\.+\//, o = t.slice(0, t.length - 1); o.length && r.test(i);) n = o.pop(), n = n.substr(n.indexOf("!") + 1), i = n.substr(0, n.lastIndexOf("/") + 1) + i;
            return i
        }

        function u(e, t) {
            function n(t, n) {
                if (E.shim[t]) return l(t, n);
                var i = r();
                return i.name = t, i.path = n, i.context = e, o(i, function () {
                    return h(t, n).catch(function () {
                        i.reject(new Error('Error while loading module "' + t + '"'))
                    })
                }), i.promise
            }

            function l(e, t) {
                var n = E.shim[e];
                return g(n.deps || [], function () {
                    return h(e, t).then(n.exportsFn || function () {
                        return n.init && n.init() || i(window, n.exports)
                    })
                }, null, t)
            }

            function h(e, t) {
                return new Promise(function (n, i) {
                    var r = b.load(null, e, y(e, t, !0));
                    r.onerror = i, r.onload = n
                })
            }

            function m(e, t) {
                var n = e.indexOf("!"), i = e.substr(0, n), r = u(null).getContext();
                return e = e.substr(n + 1), r._require([i], function (n) {
                    return new Promise(function (i, r) {
                        function o() {
                            if (!a) return b.apply(null, arguments)
                        }

                        Object.keys(b).forEach(function (e) {
                            o[e] = b[e]
                        });
                        var a = !1;
                        i.error = r, i.fromText = function (e, n) {
                            n || (n = e);
                            var o = p;
                            p = {name: e, resolve: i, reject: r, path: t}, new Function(n)(), p = o, a = !0
                        }, n.load(s(e, t), o, i, E)
                    })
                }, null, t)
            }

            function v(e, t, n) {
                var i = [];
                return t.toString().replace(x, "").replace(T, function (e, t) {
                    i.push(t)
                }), {
                    deps: i, factory: function () {
                        function r(e) {
                            if (!a[e]) throw new Error('Module "' + i + '" has not been loaded yet');
                            return a[e]
                        }

                        var o = arguments, a = i.reduce(function (e, t, n) {
                            return e[t] = o[n], e
                        }, {});
                        return r.toUrl = function (e) {
                            return y(e, n)
                        }, t(r, S.exports(e), S.module(e))
                    }
                }
            }

            function g(e, t, r, o) {
                var a = o.slice(-1)[0];
                return new Promise(function (t, i) {
                    Promise.all(e.map(function (e) {
                        if (o.indexOf(e) > -1) return Promise.reject(new Error("Circular dependency: " + o.concat(e).join(" -> ")));
                        var t = o.concat(e);
                        return S[e] ? S[e](a) : (e.indexOf("!") > -1 && (_[e] = m(e, t)), w[e] ? _[e] = Promise.resolve().then(function () {
                            return g.apply(null, w[e].concat([t]))
                        }) : _[e] || (_[e] = n(e, t)), _[e])
                    })).then(t, i)
                }).then(function (e) {
                    if (d(t)) {
                        var n = t.apply(null, e);
                        return a && i(_[a], "module.exports") || n
                    }
                    return t
                }, function (e) {
                    return d(r) && r(e), b.onError(e), Promise.reject(e)
                })
            }

            function b(e, t, n) {
                return g(e, t, n, [])
            }

            function y(e, t, n) {
                var i = Object.keys(E.bundles).filter(function (t) {
                    return E.bundles[t].indexOf(e) > -1
                })[0];
                return i ? b.toUrl(i) : (E.paths[e] ? (e = E.paths[e], n && (e += ".js")) : (n && (e = a(e)), t && (e = s(e, t))), /^([\w\+\.\-]+:)?\//.test(e) || (e = E.baseUrl + e), E.urlArgs && (e += "?" + E.urlArgs), e)
            }

            if (t = t || {}, !f[e]) {
                var _, w, E, x = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
                    T = /[^.]\s*require\s*\(\s*["']([^!'"\s][^'"\s]*)["']\s*\)/g, S = {
                        require: function (e) {
                            return b
                        }, module: function (e) {
                            var t = _[e];
                            if (!t) throw new Error('Module "module" should be required only by modules');
                            return t.module = t.module || {
                                id: e, config: function () {
                                    return E.config[e] || {}
                                }
                            }
                        }, exports: function (e) {
                            return S.module(e).exports = {}
                        }
                    };
                b.resetContext = function () {
                    E = {urlArgs: "", baseUrl: "./", paths: {}, shim: {}, bundles: {}, config: {}}, _ = {}, w = {}
                }, b.config = function (e) {
                    if (e.context) return u(e.context, e);
                    E = c(E, e)
                }, b.load = function (e, t, n) {
                    var i = document.createElement("script");
                    return i.src = n, i.async = !0, document.getElementsByTagName("body")[0].appendChild(i), i
                }, b.toUrl = function (e) {
                    return y(e)
                }, b.specified = function (e) {
                    return _.hasOwnProperty(e)
                }, b.onError = function (e) {
                    console.error(e)
                }, b.resetContext(), b.getContext = function () {
                    return {config: E, modules: _, predefines: w, wrapCommonJS: v, _require: g}
                }, f[e] = b
            }
            var O = c({}, t);
            return delete O.context, f[e].config(O), f[e]
        }

        function l(e, t, n) {
            "string" != typeof e && (n = t, t = e, e = null), Array.isArray(t) || (n = t, t = []);
            var i = p, r = u(e ? null : i && i.context).getContext();
            if (null === e && !i) throw new Error("Unexpected define!");
            if (0 === t.length && n.length > 0) {
                var o = r.wrapCommonJS(e || i.name, n, [].concat(i.path, ""));
                t = o.deps, n = o.factory
            }
            if (null === e || i && i.name === e) {
                var a = r._require(t, n, i.reject, i.path);
                i.resolve(a)
            } else r.predefines[e] = [t, n, null]
        }

        var c = n(64), d = n(0).isFunction, f = {}, h = Promise.resolve(), p = null;
        l.amd = {};
        var m = u(null);
        e.exports = {define: l, require: m, requirejs: m}
    }, function (e, t) {
        define("css", function () {
            return {
                load: function (e, t, n, i) {
                    var r = document.createElement("link");
                    r.href = t.toUrl(e), Array.prototype.slice.call(document.getElementsByTagName("head")[0].querySelectorAll("link[rel=stylesheet]")).some(function (e) {
                        return e.href === r.href
                    }) ? n({}) : (r.rel = "stylesheet", r.type = "text/css", r.onload = n, r.onerror = n.error, document.getElementsByTagName("head")[0].appendChild(r))
                }
            }
        })
    }, function (e, t) {
        define("file", function () {
            return {
                load: function (e, t, n, i) {
                    n(t.toUrl(e))
                }
            }
        })
    }, function (e, t) {
        define("json", function () {
            return {
                load: function (e, t, n, i) {
                    Cortona3DSolo.app.util.loadResource(t.toUrl(e), "application/json", "json").then(function (t) {
                        if (null === t.response) throw new Error('Failed parsing JSON file "' + e + '"');
                        if ("string" == typeof t.response) {
                            var i = JSON.parse(t.response);
                            if (!i) throw new Error('Failed parsing JSON file "' + e + '"');
                            n(i)
                        } else n(t.response)
                    }).catch(n.error)
                }
            }
        })
    }, function (e, t) {
        define("res", function () {
            return {
                load: function (e, t, n, i) {
                    n(t.toUrl(e))
                }
            }
        })
    }, function (e, t) {
        define("xml", function () {
            return {
                load: function (e, t, n, i) {
                    Cortona3DSolo.app.util.loadResource(t.toUrl(e), "text/xml").then(function (e) {
                        if (!e.responseXML) throw new Error(url + " empty content");
                        n(Cortona3DSolo.app.util.xmlToJSON(e.responseXML))
                    }).catch(n.error)
                }
            }
        })
    }, function (e, t, n) {
        n(59);
        var i = n(2), r = {}, o = n(72), a = n(0), s = {}, u = {
            UISkinController: o, create: function (e, t) {
                return r[e] || (r[e] = new u.UISkinController(e, "string" == typeof t ? document.querySelector(t) : t)), r[e]
            }, remove: function (e) {
                r[e] && delete r[e]
            }, get: function (e) {
                return r[e]
            }, require: function (e) {
                return i.app.util.requirePromise(e, window.requirejs.config(s))
            }
        };
        e.exports = {
            configure: function (e) {
                return s = a.expand({}, e || {}), {skin: u}
            }
        }
    }, function (e, t, n) {
        function i() {
            if (u.core && u.core.runtimeReady && u.core.canvas) {
                var e = u.core.canvas;
                for (T in x) e.addEventListener(T, x[T], !1)
            } else u.on("app.firstFrameDidArrive", i)
        }

        function r(e, t) {
            var n, i = [];
            for (n = u.app.pickObject(e, t, !1); n;) i.push(n.handle), u.app.setObjectIgnorableByPicker(n.handle, !0), n = u.app.pickObject(e, t, !1);
            return i.forEach(function (e) {
                u.app.setObjectIgnorableByPicker(e, !1)
            }), i
        }

        function o(e, t, n) {
            var i, r = [], o = u.app.pickObject(e, t, !!n);
            if (o) for (i = o.handle; i; i = u.app.getParentObject(i)) r.push(i);
            return {x: e, y: t, picked: o, chain: r}
        }

        n(57);
        var a, s, u = n(2), l = n(0), c = {MOUSE_CLICK_THRESHOLD: 3, FEATURE_PICK_TOPMOST: !0}, d = {},
            f = [0, 1, 4, 2], h = [1, 4, 2, 8, 16], p = function (e, t) {
                var n, i = +(e.shiftKey && 1) | +(e.ctrlKey && 2) | +(e.altKey && 4);
                n = t && void 0 !== e.buttons ? e.buttons : void 0 !== e.which ? f[e.which] : h[e.button];
                var r = e.target || e.srcElement, o = r.getBoundingClientRect();
                return [e.clientX - o.left, e.clientY - o.top, n, i, e]
            }, m = function (e, t) {
                var n = e[0] - t[0], i = e[1] - t[1];
                return Math.sqrt(n * n + i * i)
            }, v = function (e, t) {
                return !(!e || !t) && m(e, t) > c.MOUSE_CLICK_THRESHOLD
            }, g = null, b = null, y = null, _ = null, w = navigator.userAgent.lastIndexOf("Firefox") > 0, E = function () {
                w && (_ = document.createElement("div"), _.style.position = "absolute", _.style.top = "0", _.style.bottom = "0", _.style.left = "0", _.style.right = "0", _.style.zIndex = 1e4, _.onmousemove = function (e) {
                    return e = e || window.event, document.body.removeChild(e.target), _ = null, e.preventDefault(), e.stopPropagation(), !1
                }, setTimeout(function () {
                    _ && (document.body.removeChild(_), _ = null)
                }, 100), document.body.appendChild(_))
            }, x = {
                pointermove: function (e) {
                    var t = e.target || e.srcElement, n = t.getBoundingClientRect(), i = e.clientX - n.left,
                        r = e.clientY - n.top, l = p(e, !0), d = g ? g.handle : null;
                    if (!y || v(y, l)) {
                        if (y = l, l[2]) g && (E(), u.dispatch("touch.didObjectOut", d, g.name), g = null); else {
                            s = o(i, r, c.FEATURE_PICK_TOPMOST);
                            var f = s.picked;
                            f && u.dispatch("touch.didObjectMove", f.handle, f.name);
                            var h = f ? f.handle : null;
                            d !== h && (g && (E(), u.dispatch("touch.didObjectOut", d, g.name)), f && u.dispatch("touch.didObjectEnter", h, f.name)), g = f
                        }
                        a = ["touch.didPointerMove"].concat(l), u.dispatch.apply(u, a)
                    }
                }, pointerenter: function (e) {
                    _ || (u.dispatch("touch.didPointerEnter"), y = null)
                }, pointerout: function (e) {
                    _ || (g && (u.dispatch("touch.didObjectOut", g.handle, g.name), g = null, E()), u.dispatch("touch.didPointerOut"), y = null)
                }, pointerdown: function (e) {
                    b = p(e), a = ["touch.didPointerDown"].concat(b), u.dispatch.apply(u, a)
                }, pointerup: function (e) {
                    var t = e.target || e.srcElement, n = t.getBoundingClientRect(), i = e.clientX - n.left,
                        r = e.clientY - n.top, l = p(e);
                    s = o(i, r, c.FEATURE_PICK_TOPMOST);
                    var f = s.picked;
                    v(b, l) || (f || (f = {
                        handle: 0,
                        name: ""
                    }), d[f.name] ? (clearTimeout(d[f.name].t), delete d[f.name]) : d[f.name] = {
                        lpi: s,
                        t: setTimeout(function () {
                            var e = s;
                            s = d[f.name].lpi, delete d[f.name], a = ["touch.didObjectClick", f.handle, f.name].concat(l), u.dispatch.apply(u, a), s = e
                        }, 250)
                    });
                    var h = g ? g.handle : null, m = f ? f.handle : null;
                    h !== m && (g && (E(), u.dispatch("touch.didObjectOut", h, g.name)), f && u.dispatch("touch.didObjectEnter", m, f.name)), g = f, a = ["touch.didPointerUp"].concat(l), u.dispatch.apply(u, a), b = null
                }
            };
        if (!1 === navigator.pointerEnabled) for (var T in x) 0 === T.indexOf("pointer") && (x[T.replace(/^pointer/, "mouse")] = x[T], delete x[T]);
        i();
        var S = {touch: {options: c, pickObjectsRightThrough: r, pickObjectChain: o}};
        Object.defineProperty(S.touch, "lastPickInfo", {
            get: function () {
                return s
            }, enumerable: !0
        }), e.exports = {
            configure: function (e) {
                return l.expand(S.touch.options, e), S
            }
        }
    }, function (e, t, n) {
        t = e.exports = n(5)(!1), t.push([e.i, ".skin-holder{position:absolute;height:100%;width:100%;overflow:hidden;pointer-events:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.skin-holder>*{pointer-events:auto}.skin-holder button,.skin-holder input[type=button],.skin-holder input[type=checkbox],.skin-holder select{display:inline-block;border:none;padding:.4em;cursor:pointer;font-family:inherit;font-size:inherit;color:inherit}.skin-holder button,.skin-holder input[type=button]{min-width:4em}.skin-holder input[type=range]{width:100%;margin:0;padding:0}.skin-holder label{font-weight:700;margin-right:.5em}.skin-holder label>*{margin-left:.5em}.skin-holder .skin-container{display:-ms-flexbox;display:flex}.skin-holder .skin-container.row{-ms-flex-direction:row;flex-direction:row}.skin-holder .skin-container.col{-ms-flex-direction:column;flex-direction:column}.skin-holder .skin-toolbar{z-index:100;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;white-space:nowrap;padding:0 .5em;height:3em;min-height:3em;-ms-flex:0 0 auto;flex:0 0 auto}.skin-holder .skin-toolbar .skin-container{-ms-flex-align:center;align-items:center;-ms-flex-positive:1;flex-grow:1;margin:0 .5em}.skin-holder .skin-toolbar .skin-container.left{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-order:-1;order:-1;-ms-flex-positive:0;flex-grow:0;margin-left:0}.skin-holder .skin-toolbar .skin-container.right{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-order:1;order:1;-ms-flex-positive:0;flex-grow:0;margin-right:0}.skin-holder .skin-toolbar .skin-control{margin-right:.5em}.skin-holder .skin-panel{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 1em}.skin-holder .skin-img-button{background-repeat:no-repeat;margin:0;display:inline-block;vertical-align:top}", ""])
    }, function (e, t, n) {
        t = e.exports = n(5)(!1), t.push([e.i, "body,html{margin:0;height:100%}", ""])
    }, function (e, t, n) {
        t = e.exports = n(5)(!1), t.push([e.i, ".cortona3dsolo-svg{width:100%;height:100%;display:block;position:absolute}.cortona3dsolo-svg a:hover{cursor:pointer;text-decoration:none}", ""])
    }, function (e, t, n) {
        t = e.exports = n(5)(!1), t.push([e.i, ".cortona3dsolo-canvas{position:absolute;width:100%;height:100%;display:block}.cortona3dsolo-popover{-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tiramisu-speaker{display:inline-block;box-sizing:content-box}.tiramisu-panel{white-space:normal;word-wrap:break-word}.dpl-table{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;padding:0;border-spacing:0;border-collapse:collapse;cursor:default;border:1px solid grey}.dpl-table td{padding:4px;vertical-align:top;border-right:1px solid grey}.dpl-table thead{font-size:10pt}.dpl-table tbody{margin:0;padding:0;font-size:10pt}.dpl-table thead td{border-bottom:1px solid grey;background:linear-gradient(180deg,#fff 0,#f8f8f8)}.dpl-table tbody tr.selected{background:linear-gradient(180deg,#abd3ee 0,#89c3eb)}.dpl-table tbody td.hover{background-color:#c8e8ff}.dpl-table tbody tr.hidden{display:none}.dpl-table thead pre{font-family:sans;padding:0;margin:0}.dpl-table td.strut{padding:0 4px}.dpl-table td.strut div{height:1px;overflow:hidden;white-space:nowrap}.dpl-table tr{transition:all .3s}.dpl-table tr.hover,.dpl-table tr:hover{background-color:#c8e8ff}.dpl-table td:last-of-type{border-right:0}.dpl-table tr:last-child td{border-bottom:1px solid grey}.dpl-table pre,pre.dpl-table-measure{margin-top:0;margin-bottom:0}.dpl-checkbox{padding:0;margin:0 .4em 0 0;display:inline}.dpl-checkbox:hover{color:#367ebd}.tiramisu-proc-title{font-weight:700}.tiramisu-proc-item,.tiramisu-proc-title{display:block;padding:4px;margin-bottom:2px;cursor:default}.tiramisu-proc-item{border-radius:10px;border:1px solid transparent;transition:background-color .3s ease-out,border-color .3s ease-out}.tiramisu-proc-item.highlighted{background-color:#e5f4ff;border:1px solid #c8e8ff}.tiramisu-proc-item.selected{background-color:#c8e8ff;border:1px solid #80a2bc}.tiramisu-proc-item:hover{background-color:#e5f4ff;border:1px solid #c8e8ff}.tiramisu-proc-item.selected:hover{background-color:#a3daff;border:1px solid #80a2bc}.tiramisu-proc-item-number{display:table-cell;width:24px;padding-right:6pt;cursor:default}.tiramisu-proc-item-content{display:table-cell;width:100%;cursor:default}.thumbnail{max-width:100%;max-height:100%;margin-top:3pt}", ""])
    }, function (e, t, n) {
        t = e.exports = n(5)(!1), t.push([e.i, ".tiramisu-panel-group{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;visibility:hidden}.tiramisu-panel{position:absolute;box-sizing:border-box;overflow:hidden;pointer-events:none;font-family:serif;font-size:10pt;padding:0;margin:0;border-style:solid;transform-style:preserve-3d}.tiramisu-panel>div{position:relative;top:50%;transform:translateY(-50%)}.tiramisu-panel>div>img{height:auto;transform:translateY(-50%)}.tiramisu-panel>div>canvas,.tiramisu-panel>div>img{display:block;max-height:100%;max-width:100%;margin:auto;position:relative;top:50%}.tiramisu-panel>div>canvas{transform:translateY(-50%) scaleY(-1)}.tiramisu-panel p{margin:0;padding:0}.tiramisu-panel-measure{position:absolute;font-family:serif;font-size:10pt;visibility:hidden;padding:0;margin:0;left:0;top:0}.tiramisu-banner{right:8px;overflow:hidden;padding:0;margin:0;z-index:10}.tiramisu-banner,.tiramisu-speaker{position:absolute;bottom:8px;visibility:visible;pointer-events:none}.tiramisu-speaker{display:block-inline;z-index:100;background-color:hsla(0,0%,94%,.5);border-radius:50%;padding:6px;left:8px;width:26px;height:26px;opacity:0;transition:opacity .3s ease-in-out}.tiramisu-speaker div{width:0;height:0;border:6px solid transparent;border-right-color:inherit;border-left:none;box-shadow:inset 10px 0;display:inline-block;padding:5px 3px;margin:2px}.tiramisu-speaker span{position:absolute;display:inline-block;border:1px solid transparent;border-right:1px solid #444;border-radius:50%;margin:auto;top:0;bottom:0;right:0;animation:tiramisu-wave-animation 1s linear 0s infinite alternate}.tiramisu-speaker span:nth-child(2){width:13px;height:13px;left:1px}.tiramisu-speaker span:nth-child(3){width:19px;height:19px;left:1px;animation-delay:.3s}.tiramisu-speaker span:last-child{width:25px;height:25px;left:0;animation-delay:.6s}@keyframes tiramisu-wave-animation{0%{opacity:1}to{opacity:.1}}", ""])
    }, function (e, t, n) {
        (function (t, n) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */
            !function (t, n) {
                e.exports = n()
            }(0, function () {
                "use strict";

                function e(e) {
                    var t = typeof e;
                    return null !== e && ("object" === t || "function" === t)
                }

                function i(e) {
                    return "function" == typeof e
                }

                function r(e) {
                    z = e
                }

                function o(e) {
                    U = e
                }

                function a() {
                    return void 0 !== B ? function () {
                        B(u)
                    } : s()
                }

                function s() {
                    var e = setTimeout;
                    return function () {
                        return e(u, 1)
                    }
                }

                function u() {
                    for (var e = 0; e < D; e += 2) {
                        (0, X[e])(X[e + 1]), X[e] = void 0, X[e + 1] = void 0
                    }
                    D = 0
                }

                function l(e, t) {
                    var n = this, i = new this.constructor(d);
                    void 0 === i[q] && M(i);
                    var r = n._state;
                    if (r) {
                        var o = arguments[r - 1];
                        U(function () {
                            return T(r, i, o, n._result)
                        })
                    } else E(n, i, e, t);
                    return i
                }

                function c(e) {
                    var t = this;
                    if (e && "object" == typeof e && e.constructor === t) return e;
                    var n = new t(d);
                    return b(n, e), n
                }

                function d() {
                }

                function f() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function h() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function p(e, t, n, i) {
                    try {
                        e.call(t, n, i)
                    } catch (e) {
                        return e
                    }
                }

                function m(e, t, n) {
                    U(function (e) {
                        var i = !1, r = p(n, t, function (n) {
                            i || (i = !0, t !== n ? b(e, n) : _(e, n))
                        }, function (t) {
                            i || (i = !0, w(e, t))
                        }, "Settle: " + (e._label || " unknown promise"));
                        !i && r && (i = !0, w(e, r))
                    }, e)
                }

                function v(e, t) {
                    t._state === W ? _(e, t._result) : t._state === Z ? w(e, t._result) : E(t, void 0, function (t) {
                        return b(e, t)
                    }, function (t) {
                        return w(e, t)
                    })
                }

                function g(e, t, n) {
                    t.constructor === e.constructor && n === l && t.constructor.resolve === c ? v(e, t) : void 0 === n ? _(e, t) : i(n) ? m(e, t, n) : _(e, t)
                }

                function b(t, n) {
                    if (t === n) w(t, f()); else if (e(n)) {
                        var i = void 0;
                        try {
                            i = n.then
                        } catch (e) {
                            return void w(t, e)
                        }
                        g(t, n, i)
                    } else _(t, n)
                }

                function y(e) {
                    e._onerror && e._onerror(e._result), x(e)
                }

                function _(e, t) {
                    e._state === K && (e._result = t, e._state = W, 0 !== e._subscribers.length && U(x, e))
                }

                function w(e, t) {
                    e._state === K && (e._state = Z, e._result = t, U(y, e))
                }

                function E(e, t, n, i) {
                    var r = e._subscribers, o = r.length;
                    e._onerror = null, r[o] = t, r[o + W] = n, r[o + Z] = i, 0 === o && e._state && U(x, e)
                }

                function x(e) {
                    var t = e._subscribers, n = e._state;
                    if (0 !== t.length) {
                        for (var i = void 0, r = void 0, o = e._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + n], i ? T(n, i, r, o) : r(o);
                        e._subscribers.length = 0
                    }
                }

                function T(e, t, n, r) {
                    var o = i(n), a = void 0, s = void 0, u = !0;
                    if (o) {
                        try {
                            a = n(r)
                        } catch (e) {
                            u = !1, s = e
                        }
                        if (t === a) return void w(t, h())
                    } else a = r;
                    t._state !== K || (o && u ? b(t, a) : !1 === u ? w(t, s) : e === W ? _(t, a) : e === Z && w(t, a))
                }

                function S(e, t) {
                    try {
                        t(function (t) {
                            b(e, t)
                        }, function (t) {
                            w(e, t)
                        })
                    } catch (t) {
                        w(e, t)
                    }
                }

                function O() {
                    return J++
                }

                function M(e) {
                    e[q] = J++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function k() {
                    return new Error("Array Methods must be provided an Array")
                }

                function C(e) {
                    return new Q(this, e).promise
                }

                function I(e) {
                    var t = this;
                    return new t(N(e) ? function (n, i) {
                        for (var r = e.length, o = 0; o < r; o++) t.resolve(e[o]).then(n, i)
                    } : function (e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }

                function A(e) {
                    var t = this, n = new t(d);
                    return w(n, e), n
                }

                function R() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function P() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function L() {
                    var e = void 0;
                    if (void 0 !== n) e = n; else if ("undefined" != typeof self) e = self; else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var i = null;
                        try {
                            i = Object.prototype.toString.call(t.resolve())
                        } catch (e) {
                        }
                        if ("[object Promise]" === i && !t.cast) return
                    }
                    e.Promise = ee
                }

                var j = void 0;
                j = Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
                var N = j, D = 0, B = void 0, z = void 0, U = function (e, t) {
                        X[D] = e, X[D + 1] = t, 2 === (D += 2) && (z ? z(u) : G())
                    }, V = "undefined" != typeof window ? window : void 0, F = V || {},
                    $ = F.MutationObserver || F.WebKitMutationObserver,
                    Y = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                    H = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    X = new Array(1e3), G = void 0;
                G = Y ? function () {
                    return function () {
                        return t.nextTick(u)
                    }
                }() : $ ? function () {
                    var e = 0, t = new $(u), n = document.createTextNode("");
                    return t.observe(n, {characterData: !0}), function () {
                        n.data = e = ++e % 2
                    }
                }() : H ? function () {
                    var e = new MessageChannel;
                    return e.port1.onmessage = u, function () {
                        return e.port2.postMessage(0)
                    }
                }() : void 0 === V ? function () {
                    try {
                        var e = Function("return this")().require("vertx");
                        return B = e.runOnLoop || e.runOnContext, a()
                    } catch (e) {
                        return s()
                    }
                }() : s();
                var q = Math.random().toString(36).substring(2), K = void 0, W = 1, Z = 2, J = 0, Q = function () {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(d), this.promise[q] || M(this.promise), N(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? _(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && _(this.promise, this._result))) : w(this.promise, k())
                    }

                    return e.prototype._enumerate = function (e) {
                        for (var t = 0; this._state === K && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function (e, t) {
                        var n = this._instanceConstructor, i = n.resolve;
                        if (i === c) {
                            var r = void 0, o = void 0, a = !1;
                            try {
                                r = e.then
                            } catch (e) {
                                a = !0, o = e
                            }
                            if (r === l && e._state !== K) this._settledAt(e._state, t, e._result); else if ("function" != typeof r) this._remaining--, this._result[t] = e; else if (n === ee) {
                                var s = new n(d);
                                a ? w(s, o) : g(s, e, r), this._willSettleAt(s, t)
                            } else this._willSettleAt(new n(function (t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(i(e), t)
                    }, e.prototype._settledAt = function (e, t, n) {
                        var i = this.promise;
                        i._state === K && (this._remaining--, e === Z ? w(i, n) : this._result[t] = n), 0 === this._remaining && _(i, this._result)
                    }, e.prototype._willSettleAt = function (e, t) {
                        var n = this;
                        E(e, void 0, function (e) {
                            return n._settledAt(W, t, e)
                        }, function (e) {
                            return n._settledAt(Z, t, e)
                        })
                    }, e
                }(), ee = function () {
                    function e(t) {
                        this[q] = O(), this._result = this._state = void 0, this._subscribers = [], d !== t && ("function" != typeof t && R(), this instanceof e ? S(this, t) : P())
                    }

                    return e.prototype.catch = function (e) {
                        return this.then(null, e)
                    }, e.prototype.finally = function (e) {
                        var t = this, n = t.constructor;
                        return i(e) ? t.then(function (t) {
                            return n.resolve(e()).then(function () {
                                return t
                            })
                        }, function (t) {
                            return n.resolve(e()).then(function () {
                                throw t
                            })
                        }) : t.then(e, e)
                    }, e
                }();
                return ee.prototype.then = l, ee.all = C, ee.race = I, ee.resolve = c, ee.reject = A, ee._setScheduler = r, ee._setAsap = o, ee._asap = U, ee.polyfill = L, ee.Promise = ee, ee
            })
        }).call(t, n(58), n(63))
    }, function (e, t, n) {
        "use strict";
        var i = n(3).assign, r = n(49), o = n(50), a = n(19), s = {};
        i(s, r, o, a), e.exports = s
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            if (!(this instanceof i)) return new i(e);
            this.options = u.assign({
                level: p,
                method: v,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: m,
                to: ""
            }, e || {});
            var t = this.options;
            t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new d, this.strm.avail_out = 0;
            var n = s.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
            if (n !== h) throw new Error(c[n]);
            if (t.header && s.deflateSetHeader(this.strm, t.header), t.dictionary) {
                var r;
                if (r = "string" == typeof t.dictionary ? l.string2buf(t.dictionary) : "[object ArrayBuffer]" === f.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (n = s.deflateSetDictionary(this.strm, r)) !== h) throw new Error(c[n]);
                this._dict_set = !0
            }
        }

        function r(e, t) {
            var n = new i(t);
            if (n.push(e, !0), n.err) throw n.msg || c[n.err];
            return n.result
        }

        function o(e, t) {
            return t = t || {}, t.raw = !0, r(e, t)
        }

        function a(e, t) {
            return t = t || {}, t.gzip = !0, r(e, t)
        }

        var s = n(51), u = n(3), l = n(17), c = n(11), d = n(21), f = Object.prototype.toString, h = 0, p = -1, m = 0,
            v = 8;
        i.prototype.push = function (e, t) {
            var n, i, r = this.strm, o = this.options.chunkSize;
            if (this.ended) return !1;
            i = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? r.input = l.string2buf(e) : "[object ArrayBuffer]" === f.call(e) ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length;
            do {
                if (0 === r.avail_out && (r.output = new u.Buf8(o), r.next_out = 0, r.avail_out = o), 1 !== (n = s.deflate(r, i)) && n !== h) return this.onEnd(n), this.ended = !0, !1;
                0 !== r.avail_out && (0 !== r.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(l.buf2binstring(u.shrinkBuf(r.output, r.next_out))) : this.onData(u.shrinkBuf(r.output, r.next_out)))
            } while ((r.avail_in > 0 || 0 === r.avail_out) && 1 !== n);
            return 4 === i ? (n = s.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === h) : 2 !== i || (this.onEnd(h), r.avail_out = 0, !0)
        }, i.prototype.onData = function (e) {
            this.chunks.push(e)
        }, i.prototype.onEnd = function (e) {
            e === h && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = u.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
        }, t.Deflate = i, t.deflate = r, t.deflateRaw = o, t.gzip = a
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            if (!(this instanceof i)) return new i(e);
            this.options = s.assign({chunkSize: 16384, windowBits: 0, to: ""}, e || {});
            var t = this.options;
            t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new d, this.strm.avail_out = 0;
            var n = a.inflateInit2(this.strm, t.windowBits);
            if (n !== l.Z_OK) throw new Error(c[n]);
            if (this.header = new f, a.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = u.string2buf(t.dictionary) : "[object ArrayBuffer]" === h.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = a.inflateSetDictionary(this.strm, t.dictionary)) !== l.Z_OK)) throw new Error(c[n])
        }

        function r(e, t) {
            var n = new i(t);
            if (n.push(e, !0), n.err) throw n.msg || c[n.err];
            return n.result
        }

        function o(e, t) {
            return t = t || {}, t.raw = !0, r(e, t)
        }

        var a = n(54), s = n(3), u = n(17), l = n(19), c = n(11), d = n(21), f = n(52), h = Object.prototype.toString;
        i.prototype.push = function (e, t) {
            var n, i, r, o, c, d = this.strm, f = this.options.chunkSize, p = this.options.dictionary, m = !1;
            if (this.ended) return !1;
            i = t === ~~t ? t : !0 === t ? l.Z_FINISH : l.Z_NO_FLUSH, "string" == typeof e ? d.input = u.binstring2buf(e) : "[object ArrayBuffer]" === h.call(e) ? d.input = new Uint8Array(e) : d.input = e, d.next_in = 0, d.avail_in = d.input.length;
            do {
                if (0 === d.avail_out && (d.output = new s.Buf8(f), d.next_out = 0, d.avail_out = f), n = a.inflate(d, l.Z_NO_FLUSH), n === l.Z_NEED_DICT && p && (n = a.inflateSetDictionary(this.strm, p)), n === l.Z_BUF_ERROR && !0 === m && (n = l.Z_OK, m = !1), n !== l.Z_STREAM_END && n !== l.Z_OK) return this.onEnd(n), this.ended = !0, !1;
                d.next_out && (0 !== d.avail_out && n !== l.Z_STREAM_END && (0 !== d.avail_in || i !== l.Z_FINISH && i !== l.Z_SYNC_FLUSH) || ("string" === this.options.to ? (r = u.utf8border(d.output, d.next_out), o = d.next_out - r, c = u.buf2string(d.output, r), d.next_out = o, d.avail_out = f - o, o && s.arraySet(d.output, d.output, r, o, 0), this.onData(c)) : this.onData(s.shrinkBuf(d.output, d.next_out)))), 0 === d.avail_in && 0 === d.avail_out && (m = !0)
            } while ((d.avail_in > 0 || 0 === d.avail_out) && n !== l.Z_STREAM_END);
            return n === l.Z_STREAM_END && (i = l.Z_FINISH), i === l.Z_FINISH ? (n = a.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === l.Z_OK) : i !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), d.avail_out = 0, !0)
        }, i.prototype.onData = function (e) {
            this.chunks.push(e)
        }, i.prototype.onEnd = function (e) {
            e === l.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
        }, t.Inflate = i, t.inflate = r, t.inflateRaw = o, t.ungzip = r
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            return e.msg = L[t], t
        }

        function r(e) {
            return (e << 1) - (e > 4 ? 9 : 0)
        }

        function o(e) {
            for (var t = e.length; --t >= 0;) e[t] = 0
        }

        function a(e) {
            var t = e.state, n = t.pending;
            n > e.avail_out && (n = e.avail_out), 0 !== n && (I.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0))
        }

        function s(e, t) {
            A._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, a(e.strm)
        }

        function u(e, t) {
            e.pending_buf[e.pending++] = t
        }

        function l(e, t) {
            e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
        }

        function c(e, t, n, i) {
            var r = e.avail_in;
            return r > i && (r = i), 0 === r ? 0 : (e.avail_in -= r, I.arraySet(t, e.input, e.next_in, r, n), 1 === e.state.wrap ? e.adler = R(e.adler, t, r, n) : 2 === e.state.wrap && (e.adler = P(e.adler, t, r, n)), e.next_in += r, e.total_in += r, r)
        }

        function d(e, t) {
            var n, i, r = e.max_chain_length, o = e.strstart, a = e.prev_length, s = e.nice_match,
                u = e.strstart > e.w_size - le ? e.strstart - (e.w_size - le) : 0, l = e.window, c = e.w_mask,
                d = e.prev, f = e.strstart + ue, h = l[o + a - 1], p = l[o + a];
            e.prev_length >= e.good_match && (r >>= 2), s > e.lookahead && (s = e.lookahead);
            do {
                if (n = t, l[n + a] === p && l[n + a - 1] === h && l[n] === l[o] && l[++n] === l[o + 1]) {
                    o += 2, n++;
                    do {
                    } while (l[++o] === l[++n] && l[++o] === l[++n] && l[++o] === l[++n] && l[++o] === l[++n] && l[++o] === l[++n] && l[++o] === l[++n] && l[++o] === l[++n] && l[++o] === l[++n] && o < f);
                    if (i = ue - (f - o), o = f - ue, i > a) {
                        if (e.match_start = t, a = i, i >= s) break;
                        h = l[o + a - 1], p = l[o + a]
                    }
                }
            } while ((t = d[t & c]) > u && 0 != --r);
            return a <= e.lookahead ? a : e.lookahead
        }

        function f(e) {
            var t, n, i, r, o, a = e.w_size;
            do {
                if (r = e.window_size - e.lookahead - e.strstart, e.strstart >= a + (a - le)) {
                    I.arraySet(e.window, e.window, a, a, 0), e.match_start -= a, e.strstart -= a, e.block_start -= a, n = e.hash_size, t = n;
                    do {
                        i = e.head[--t], e.head[t] = i >= a ? i - a : 0
                    } while (--n);
                    n = a, t = n;
                    do {
                        i = e.prev[--t], e.prev[t] = i >= a ? i - a : 0
                    } while (--n);
                    r += a
                }
                if (0 === e.strm.avail_in) break;
                if (n = c(e.strm, e.window, e.strstart + e.lookahead, r), e.lookahead += n, e.lookahead + e.insert >= se) for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + se - 1]) & e.hash_mask, e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < se));) ;
            } while (e.lookahead < le && 0 !== e.strm.avail_in)
        }

        function h(e, t) {
            var n = 65535;
            for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ;) {
                if (e.lookahead <= 1) {
                    if (f(e), 0 === e.lookahead && t === j) return be;
                    if (0 === e.lookahead) break
                }
                e.strstart += e.lookahead, e.lookahead = 0;
                var i = e.block_start + n;
                if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, s(e, !1), 0 === e.strm.avail_out)) return be;
                if (e.strstart - e.block_start >= e.w_size - le && (s(e, !1), 0 === e.strm.avail_out)) return be
            }
            return e.insert = 0, t === B ? (s(e, !0), 0 === e.strm.avail_out ? _e : we) : (e.strstart > e.block_start && (s(e, !1), e.strm.avail_out), be)
        }

        function p(e, t) {
            for (var n, i; ;) {
                if (e.lookahead < le) {
                    if (f(e), e.lookahead < le && t === j) return be;
                    if (0 === e.lookahead) break
                }
                if (n = 0, e.lookahead >= se && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + se - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - le && (e.match_length = d(e, n)), e.match_length >= se) if (i = A._tr_tally(e, e.strstart - e.match_start, e.match_length - se), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= se) {
                    e.match_length--;
                    do {
                        e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + se - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart
                    } while (0 != --e.match_length);
                    e.strstart++
                } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask; else i = A._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                if (i && (s(e, !1), 0 === e.strm.avail_out)) return be
            }
            return e.insert = e.strstart < se - 1 ? e.strstart : se - 1, t === B ? (s(e, !0), 0 === e.strm.avail_out ? _e : we) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? be : ye
        }

        function m(e, t) {
            for (var n, i, r; ;) {
                if (e.lookahead < le) {
                    if (f(e), e.lookahead < le && t === j) return be;
                    if (0 === e.lookahead) break
                }
                if (n = 0, e.lookahead >= se && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + se - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = se - 1, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - le && (e.match_length = d(e, n), e.match_length <= 5 && (e.strategy === X || e.match_length === se && e.strstart - e.match_start > 4096) && (e.match_length = se - 1)), e.prev_length >= se && e.match_length <= e.prev_length) {
                    r = e.strstart + e.lookahead - se, i = A._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - se), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                    do {
                        ++e.strstart <= r && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + se - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
                    } while (0 != --e.prev_length);
                    if (e.match_available = 0, e.match_length = se - 1, e.strstart++, i && (s(e, !1), 0 === e.strm.avail_out)) return be
                } else if (e.match_available) {
                    if (i = A._tr_tally(e, 0, e.window[e.strstart - 1]), i && s(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return be
                } else e.match_available = 1, e.strstart++, e.lookahead--
            }
            return e.match_available && (i = A._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < se - 1 ? e.strstart : se - 1, t === B ? (s(e, !0), 0 === e.strm.avail_out ? _e : we) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? be : ye
        }

        function v(e, t) {
            for (var n, i, r, o, a = e.window; ;) {
                if (e.lookahead <= ue) {
                    if (f(e), e.lookahead <= ue && t === j) return be;
                    if (0 === e.lookahead) break
                }
                if (e.match_length = 0, e.lookahead >= se && e.strstart > 0 && (r = e.strstart - 1, (i = a[r]) === a[++r] && i === a[++r] && i === a[++r])) {
                    o = e.strstart + ue;
                    do {
                    } while (i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && r < o);
                    e.match_length = ue - (o - r), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                }
                if (e.match_length >= se ? (n = A._tr_tally(e, 1, e.match_length - se), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = A._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (s(e, !1), 0 === e.strm.avail_out)) return be
            }
            return e.insert = 0, t === B ? (s(e, !0), 0 === e.strm.avail_out ? _e : we) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? be : ye
        }

        function g(e, t) {
            for (var n; ;) {
                if (0 === e.lookahead && (f(e), 0 === e.lookahead)) {
                    if (t === j) return be;
                    break
                }
                if (e.match_length = 0, n = A._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (s(e, !1), 0 === e.strm.avail_out)) return be
            }
            return e.insert = 0, t === B ? (s(e, !0), 0 === e.strm.avail_out ? _e : we) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? be : ye
        }

        function b(e, t, n, i, r) {
            this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = i, this.func = r
        }

        function y(e) {
            e.window_size = 2 * e.w_size, o(e.head), e.max_lazy_match = C[e.level].max_lazy, e.good_match = C[e.level].good_length, e.nice_match = C[e.level].nice_length, e.max_chain_length = C[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = se - 1, e.match_available = 0, e.ins_h = 0
        }

        function _() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = J, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new I.Buf16(2 * oe), this.dyn_dtree = new I.Buf16(2 * (2 * ie + 1)), this.bl_tree = new I.Buf16(2 * (2 * re + 1)), o(this.dyn_ltree), o(this.dyn_dtree), o(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new I.Buf16(ae + 1), this.heap = new I.Buf16(2 * ne + 1), o(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new I.Buf16(2 * ne + 1), o(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
        }

        function w(e) {
            var t;
            return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = Z, t = e.state, t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? de : ve, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = j, A._tr_init(t), U) : i(e, F)
        }

        function E(e) {
            var t = w(e);
            return t === U && y(e.state), t
        }

        function x(e, t) {
            return e && e.state ? 2 !== e.state.wrap ? F : (e.state.gzhead = t, U) : F
        }

        function T(e, t, n, r, o, a) {
            if (!e) return F;
            var s = 1;
            if (t === H && (t = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), o < 1 || o > Q || n !== J || r < 8 || r > 15 || t < 0 || t > 9 || a < 0 || a > K) return i(e, F);
            8 === r && (r = 9);
            var u = new _;
            return e.state = u, u.strm = e, u.wrap = s, u.gzhead = null, u.w_bits = r, u.w_size = 1 << u.w_bits, u.w_mask = u.w_size - 1, u.hash_bits = o + 7, u.hash_size = 1 << u.hash_bits, u.hash_mask = u.hash_size - 1, u.hash_shift = ~~((u.hash_bits + se - 1) / se), u.window = new I.Buf8(2 * u.w_size), u.head = new I.Buf16(u.hash_size), u.prev = new I.Buf16(u.w_size), u.lit_bufsize = 1 << o + 6, u.pending_buf_size = 4 * u.lit_bufsize, u.pending_buf = new I.Buf8(u.pending_buf_size), u.d_buf = 1 * u.lit_bufsize, u.l_buf = 3 * u.lit_bufsize, u.level = t, u.strategy = a, u.method = n, E(e)
        }

        function S(e, t) {
            return T(e, t, J, ee, te, W)
        }

        function O(e, t) {
            var n, s, c, d;
            if (!e || !e.state || t > z || t < 0) return e ? i(e, F) : F;
            if (s = e.state, !e.output || !e.input && 0 !== e.avail_in || s.status === ge && t !== B) return i(e, 0 === e.avail_out ? Y : F);
            if (s.strm = e, n = s.last_flush, s.last_flush = t, s.status === de) if (2 === s.wrap) e.adler = 0, u(s, 31), u(s, 139), u(s, 8), s.gzhead ? (u(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), u(s, 255 & s.gzhead.time), u(s, s.gzhead.time >> 8 & 255), u(s, s.gzhead.time >> 16 & 255), u(s, s.gzhead.time >> 24 & 255), u(s, 9 === s.level ? 2 : s.strategy >= G || s.level < 2 ? 4 : 0), u(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (u(s, 255 & s.gzhead.extra.length), u(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (e.adler = P(e.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = fe) : (u(s, 0), u(s, 0), u(s, 0), u(s, 0), u(s, 0), u(s, 9 === s.level ? 2 : s.strategy >= G || s.level < 2 ? 4 : 0), u(s, Ee), s.status = ve); else {
                var f = J + (s.w_bits - 8 << 4) << 8, h = -1;
                h = s.strategy >= G || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3, f |= h << 6, 0 !== s.strstart && (f |= ce), f += 31 - f % 31, s.status = ve, l(s, f), 0 !== s.strstart && (l(s, e.adler >>> 16), l(s, 65535 & e.adler)), e.adler = 1
            }
            if (s.status === fe) if (s.gzhead.extra) {
                for (c = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > c && (e.adler = P(e.adler, s.pending_buf, s.pending - c, c)), a(e), c = s.pending, s.pending !== s.pending_buf_size));) u(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
                s.gzhead.hcrc && s.pending > c && (e.adler = P(e.adler, s.pending_buf, s.pending - c, c)), s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = he)
            } else s.status = he;
            if (s.status === he) if (s.gzhead.name) {
                c = s.pending;
                do {
                    if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > c && (e.adler = P(e.adler, s.pending_buf, s.pending - c, c)), a(e), c = s.pending, s.pending === s.pending_buf_size)) {
                        d = 1;
                        break
                    }
                    d = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, u(s, d)
                } while (0 !== d);
                s.gzhead.hcrc && s.pending > c && (e.adler = P(e.adler, s.pending_buf, s.pending - c, c)), 0 === d && (s.gzindex = 0, s.status = pe)
            } else s.status = pe;
            if (s.status === pe) if (s.gzhead.comment) {
                c = s.pending;
                do {
                    if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > c && (e.adler = P(e.adler, s.pending_buf, s.pending - c, c)), a(e), c = s.pending, s.pending === s.pending_buf_size)) {
                        d = 1;
                        break
                    }
                    d = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, u(s, d)
                } while (0 !== d);
                s.gzhead.hcrc && s.pending > c && (e.adler = P(e.adler, s.pending_buf, s.pending - c, c)), 0 === d && (s.status = me)
            } else s.status = me;
            if (s.status === me && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && a(e), s.pending + 2 <= s.pending_buf_size && (u(s, 255 & e.adler), u(s, e.adler >> 8 & 255), e.adler = 0, s.status = ve)) : s.status = ve), 0 !== s.pending) {
                if (a(e), 0 === e.avail_out) return s.last_flush = -1, U
            } else if (0 === e.avail_in && r(t) <= r(n) && t !== B) return i(e, Y);
            if (s.status === ge && 0 !== e.avail_in) return i(e, Y);
            if (0 !== e.avail_in || 0 !== s.lookahead || t !== j && s.status !== ge) {
                var p = s.strategy === G ? g(s, t) : s.strategy === q ? v(s, t) : C[s.level].func(s, t);
                if (p !== _e && p !== we || (s.status = ge), p === be || p === _e) return 0 === e.avail_out && (s.last_flush = -1), U;
                if (p === ye && (t === N ? A._tr_align(s) : t !== z && (A._tr_stored_block(s, 0, 0, !1), t === D && (o(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), a(e), 0 === e.avail_out)) return s.last_flush = -1, U
            }
            return t !== B ? U : s.wrap <= 0 ? V : (2 === s.wrap ? (u(s, 255 & e.adler), u(s, e.adler >> 8 & 255), u(s, e.adler >> 16 & 255), u(s, e.adler >> 24 & 255), u(s, 255 & e.total_in), u(s, e.total_in >> 8 & 255), u(s, e.total_in >> 16 & 255), u(s, e.total_in >> 24 & 255)) : (l(s, e.adler >>> 16), l(s, 65535 & e.adler)), a(e), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? U : V)
        }

        function M(e) {
            var t;
            return e && e.state ? (t = e.state.status) !== de && t !== fe && t !== he && t !== pe && t !== me && t !== ve && t !== ge ? i(e, F) : (e.state = null, t === ve ? i(e, $) : U) : F
        }

        function k(e, t) {
            var n, i, r, a, s, u, l, c, d = t.length;
            if (!e || !e.state) return F;
            if (n = e.state, 2 === (a = n.wrap) || 1 === a && n.status !== de || n.lookahead) return F;
            for (1 === a && (e.adler = R(e.adler, t, d, 0)), n.wrap = 0, d >= n.w_size && (0 === a && (o(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), c = new I.Buf8(n.w_size), I.arraySet(c, t, d - n.w_size, n.w_size, 0), t = c, d = n.w_size), s = e.avail_in, u = e.next_in, l = e.input, e.avail_in = d, e.next_in = 0, e.input = t, f(n); n.lookahead >= se;) {
                i = n.strstart, r = n.lookahead - (se - 1);
                do {
                    n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + se - 1]) & n.hash_mask, n.prev[i & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = i, i++
                } while (--r);
                n.strstart = i, n.lookahead = se - 1, f(n)
            }
            return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = se - 1, n.match_available = 0, e.next_in = u, e.input = l, e.avail_in = s, n.wrap = a, U
        }

        var C, I = n(3), A = n(56), R = n(18), P = n(20), L = n(11), j = 0, N = 1, D = 3, B = 4, z = 5, U = 0, V = 1,
            F = -2, $ = -3, Y = -5, H = -1, X = 1, G = 2, q = 3, K = 4, W = 0, Z = 2, J = 8, Q = 9, ee = 15, te = 8,
            ne = 286, ie = 30, re = 19, oe = 2 * ne + 1, ae = 15, se = 3, ue = 258, le = ue + se + 1, ce = 32, de = 42,
            fe = 69, he = 73, pe = 91, me = 103, ve = 113, ge = 666, be = 1, ye = 2, _e = 3, we = 4, Ee = 3;
        C = [new b(0, 0, 0, 0, h), new b(4, 4, 8, 4, p), new b(4, 5, 16, 8, p), new b(4, 6, 32, 32, p), new b(4, 4, 16, 16, m), new b(8, 16, 32, 32, m), new b(8, 16, 128, 128, m), new b(8, 32, 128, 256, m), new b(32, 128, 258, 1024, m), new b(32, 258, 258, 4096, m)], t.deflateInit = S, t.deflateInit2 = T, t.deflateReset = E, t.deflateResetKeep = w, t.deflateSetHeader = x, t.deflate = O, t.deflateEnd = M, t.deflateSetDictionary = k, t.deflateInfo = "pako deflate (from Nodeca project)"
    }, function (e, t, n) {
        "use strict";

        function i() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
        }

        e.exports = i
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            var n, i, r, o, a, s, u, l, c, d, f, h, p, m, v, g, b, y, _, w, E, x, T, S, O;
            n = e.state, i = e.next_in, S = e.input, r = i + (e.avail_in - 5), o = e.next_out, O = e.output, a = o - (t - e.avail_out), s = o + (e.avail_out - 257), u = n.dmax, l = n.wsize, c = n.whave, d = n.wnext, f = n.window, h = n.hold, p = n.bits, m = n.lencode, v = n.distcode, g = (1 << n.lenbits) - 1, b = (1 << n.distbits) - 1;
            e:do {
                p < 15 && (h += S[i++] << p, p += 8, h += S[i++] << p, p += 8), y = m[h & g];
                t:for (; ;) {
                    if (_ = y >>> 24, h >>>= _, p -= _, 0 === (_ = y >>> 16 & 255)) O[o++] = 65535 & y; else {
                        if (!(16 & _)) {
                            if (0 == (64 & _)) {
                                y = m[(65535 & y) + (h & (1 << _) - 1)];
                                continue t
                            }
                            if (32 & _) {
                                n.mode = 12;
                                break e
                            }
                            e.msg = "invalid literal/length code", n.mode = 30;
                            break e
                        }
                        w = 65535 & y, _ &= 15, _ && (p < _ && (h += S[i++] << p, p += 8), w += h & (1 << _) - 1, h >>>= _, p -= _), p < 15 && (h += S[i++] << p, p += 8, h += S[i++] << p, p += 8), y = v[h & b];
                        n:for (; ;) {
                            if (_ = y >>> 24, h >>>= _, p -= _, !(16 & (_ = y >>> 16 & 255))) {
                                if (0 == (64 & _)) {
                                    y = v[(65535 & y) + (h & (1 << _) - 1)];
                                    continue n
                                }
                                e.msg = "invalid distance code", n.mode = 30;
                                break e
                            }
                            if (E = 65535 & y, _ &= 15, p < _ && (h += S[i++] << p, (p += 8) < _ && (h += S[i++] << p, p += 8)), (E += h & (1 << _) - 1) > u) {
                                e.msg = "invalid distance too far back", n.mode = 30;
                                break e
                            }
                            if (h >>>= _, p -= _, _ = o - a, E > _) {
                                if ((_ = E - _) > c && n.sane) {
                                    e.msg = "invalid distance too far back", n.mode = 30;
                                    break e
                                }
                                if (x = 0, T = f, 0 === d) {
                                    if (x += l - _, _ < w) {
                                        w -= _;
                                        do {
                                            O[o++] = f[x++]
                                        } while (--_);
                                        x = o - E, T = O
                                    }
                                } else if (d < _) {
                                    if (x += l + d - _, (_ -= d) < w) {
                                        w -= _;
                                        do {
                                            O[o++] = f[x++]
                                        } while (--_);
                                        if (x = 0, d < w) {
                                            _ = d, w -= _;
                                            do {
                                                O[o++] = f[x++]
                                            } while (--_);
                                            x = o - E, T = O
                                        }
                                    }
                                } else if (x += d - _, _ < w) {
                                    w -= _;
                                    do {
                                        O[o++] = f[x++]
                                    } while (--_);
                                    x = o - E, T = O
                                }
                                for (; w > 2;) O[o++] = T[x++], O[o++] = T[x++], O[o++] = T[x++], w -= 3;
                                w && (O[o++] = T[x++], w > 1 && (O[o++] = T[x++]))
                            } else {
                                x = o - E;
                                do {
                                    O[o++] = O[x++], O[o++] = O[x++], O[o++] = O[x++], w -= 3
                                } while (w > 2);
                                w && (O[o++] = O[x++], w > 1 && (O[o++] = O[x++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (i < r && o < s);
            w = p >> 3, i -= w, p -= w << 3, h &= (1 << p) - 1, e.next_in = i, e.next_out = o, e.avail_in = i < r ? r - i + 5 : 5 - (i - r), e.avail_out = o < s ? s - o + 257 : 257 - (o - s), n.hold = h, n.bits = p
        }
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
        }

        function r() {
            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new b.Buf16(320), this.work = new b.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
        }

        function o(e) {
            var t;
            return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = D, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new b.Buf32(me), t.distcode = t.distdyn = new b.Buf32(ve), t.sane = 1, t.back = -1, C) : R
        }

        function a(e) {
            var t;
            return e && e.state ? (t = e.state, t.wsize = 0, t.whave = 0, t.wnext = 0, o(e)) : R
        }

        function s(e, t) {
            var n, i;
            return e && e.state ? (i = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? R : (null !== i.window && i.wbits !== t && (i.window = null), i.wrap = n, i.wbits = t, a(e))) : R
        }

        function u(e, t) {
            var n, i;
            return e ? (i = new r, e.state = i, i.window = null, n = s(e, t), n !== C && (e.state = null), n) : R
        }

        function l(e) {
            return u(e, ge)
        }

        function c(e) {
            if (be) {
                var t;
                for (v = new b.Buf32(512), g = new b.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
                for (; t < 256;) e.lens[t++] = 9;
                for (; t < 280;) e.lens[t++] = 7;
                for (; t < 288;) e.lens[t++] = 8;
                for (E(T, e.lens, 0, 288, v, 0, e.work, {bits: 9}), t = 0; t < 32;) e.lens[t++] = 5;
                E(S, e.lens, 0, 32, g, 0, e.work, {bits: 5}), be = !1
            }
            e.lencode = v, e.lenbits = 9, e.distcode = g, e.distbits = 5
        }

        function d(e, t, n, i) {
            var r, o = e.state;
            return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new b.Buf8(o.wsize)), i >= o.wsize ? (b.arraySet(o.window, t, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : (r = o.wsize - o.wnext, r > i && (r = i), b.arraySet(o.window, t, n - i, r, o.wnext), i -= r, i ? (b.arraySet(o.window, t, n - i, i, 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += r, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += r))), 0
        }

        function f(e, t) {
            var n, r, o, a, s, u, l, f, h, p, m, v, g, me, ve, ge, be, ye, _e, we, Ee, xe, Te, Se, Oe = 0,
                Me = new b.Buf8(4), ke = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return R;
            n = e.state, n.mode === q && (n.mode = K), s = e.next_out, o = e.output, l = e.avail_out, a = e.next_in, r = e.input, u = e.avail_in, f = n.hold, h = n.bits, p = u, m = l, xe = C;
            e:for (; ;) switch (n.mode) {
                case D:
                    if (0 === n.wrap) {
                        n.mode = K;
                        break
                    }
                    for (; h < 16;) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    if (2 & n.wrap && 35615 === f) {
                        n.check = 0, Me[0] = 255 & f, Me[1] = f >>> 8 & 255, n.check = _(n.check, Me, 2, 0), f = 0, h = 0, n.mode = B;
                        break
                    }
                    if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & f) << 8) + (f >> 8)) % 31) {
                        e.msg = "incorrect header check", n.mode = fe;
                        break
                    }
                    if ((15 & f) !== N) {
                        e.msg = "unknown compression method", n.mode = fe;
                        break
                    }
                    if (f >>>= 4, h -= 4, Ee = 8 + (15 & f), 0 === n.wbits) n.wbits = Ee; else if (Ee > n.wbits) {
                        e.msg = "invalid window size", n.mode = fe;
                        break
                    }
                    n.dmax = 1 << Ee, e.adler = n.check = 1, n.mode = 512 & f ? X : q, f = 0, h = 0;
                    break;
                case B:
                    for (; h < 16;) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    if (n.flags = f, (255 & n.flags) !== N) {
                        e.msg = "unknown compression method", n.mode = fe;
                        break
                    }
                    if (57344 & n.flags) {
                        e.msg = "unknown header flags set", n.mode = fe;
                        break
                    }
                    n.head && (n.head.text = f >> 8 & 1), 512 & n.flags && (Me[0] = 255 & f, Me[1] = f >>> 8 & 255, n.check = _(n.check, Me, 2, 0)), f = 0, h = 0, n.mode = z;
                case z:
                    for (; h < 32;) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    n.head && (n.head.time = f), 512 & n.flags && (Me[0] = 255 & f, Me[1] = f >>> 8 & 255, Me[2] = f >>> 16 & 255, Me[3] = f >>> 24 & 255, n.check = _(n.check, Me, 4, 0)), f = 0, h = 0, n.mode = U;
                case U:
                    for (; h < 16;) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    n.head && (n.head.xflags = 255 & f, n.head.os = f >> 8), 512 & n.flags && (Me[0] = 255 & f, Me[1] = f >>> 8 & 255, n.check = _(n.check, Me, 2, 0)), f = 0, h = 0, n.mode = V;
                case V:
                    if (1024 & n.flags) {
                        for (; h < 16;) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        n.length = f, n.head && (n.head.extra_len = f), 512 & n.flags && (Me[0] = 255 & f, Me[1] = f >>> 8 & 255, n.check = _(n.check, Me, 2, 0)), f = 0, h = 0
                    } else n.head && (n.head.extra = null);
                    n.mode = F;
                case F:
                    if (1024 & n.flags && (v = n.length, v > u && (v = u), v && (n.head && (Ee = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), b.arraySet(n.head.extra, r, a, v, Ee)), 512 & n.flags && (n.check = _(n.check, r, v, a)), u -= v, a += v, n.length -= v), n.length)) break e;
                    n.length = 0, n.mode = $;
                case $:
                    if (2048 & n.flags) {
                        if (0 === u) break e;
                        v = 0;
                        do {
                            Ee = r[a + v++], n.head && Ee && n.length < 65536 && (n.head.name += String.fromCharCode(Ee))
                        } while (Ee && v < u);
                        if (512 & n.flags && (n.check = _(n.check, r, v, a)), u -= v, a += v, Ee) break e
                    } else n.head && (n.head.name = null);
                    n.length = 0, n.mode = Y;
                case Y:
                    if (4096 & n.flags) {
                        if (0 === u) break e;
                        v = 0;
                        do {
                            Ee = r[a + v++], n.head && Ee && n.length < 65536 && (n.head.comment += String.fromCharCode(Ee))
                        } while (Ee && v < u);
                        if (512 & n.flags && (n.check = _(n.check, r, v, a)), u -= v, a += v, Ee) break e
                    } else n.head && (n.head.comment = null);
                    n.mode = H;
                case H:
                    if (512 & n.flags) {
                        for (; h < 16;) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        if (f !== (65535 & n.check)) {
                            e.msg = "header crc mismatch", n.mode = fe;
                            break
                        }
                        f = 0, h = 0
                    }
                    n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = q;
                    break;
                case X:
                    for (; h < 32;) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    e.adler = n.check = i(f), f = 0, h = 0, n.mode = G;
                case G:
                    if (0 === n.havedict) return e.next_out = s, e.avail_out = l, e.next_in = a, e.avail_in = u, n.hold = f, n.bits = h, A;
                    e.adler = n.check = 1, n.mode = q;
                case q:
                    if (t === M || t === k) break e;
                case K:
                    if (n.last) {
                        f >>>= 7 & h, h -= 7 & h, n.mode = le;
                        break
                    }
                    for (; h < 3;) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    switch (n.last = 1 & f, f >>>= 1, h -= 1, 3 & f) {
                        case 0:
                            n.mode = W;
                            break;
                        case 1:
                            if (c(n), n.mode = ne, t === k) {
                                f >>>= 2, h -= 2;
                                break e
                            }
                            break;
                        case 2:
                            n.mode = Q;
                            break;
                        case 3:
                            e.msg = "invalid block type", n.mode = fe
                    }
                    f >>>= 2, h -= 2;
                    break;
                case W:
                    for (f >>>= 7 & h, h -= 7 & h; h < 32;) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    if ((65535 & f) != (f >>> 16 ^ 65535)) {
                        e.msg = "invalid stored block lengths", n.mode = fe;
                        break
                    }
                    if (n.length = 65535 & f, f = 0, h = 0, n.mode = Z, t === k) break e;
                case Z:
                    n.mode = J;
                case J:
                    if (v = n.length) {
                        if (v > u && (v = u), v > l && (v = l), 0 === v) break e;
                        b.arraySet(o, r, a, v, s), u -= v, a += v, l -= v, s += v, n.length -= v;
                        break
                    }
                    n.mode = q;
                    break;
                case Q:
                    for (; h < 14;) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    if (n.nlen = 257 + (31 & f), f >>>= 5, h -= 5, n.ndist = 1 + (31 & f), f >>>= 5, h -= 5, n.ncode = 4 + (15 & f), f >>>= 4, h -= 4, n.nlen > 286 || n.ndist > 30) {
                        e.msg = "too many length or distance symbols", n.mode = fe;
                        break
                    }
                    n.have = 0, n.mode = ee;
                case ee:
                    for (; n.have < n.ncode;) {
                        for (; h < 3;) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        n.lens[ke[n.have++]] = 7 & f, f >>>= 3, h -= 3
                    }
                    for (; n.have < 19;) n.lens[ke[n.have++]] = 0;
                    if (n.lencode = n.lendyn, n.lenbits = 7, Te = {bits: n.lenbits}, xe = E(x, n.lens, 0, 19, n.lencode, 0, n.work, Te), n.lenbits = Te.bits, xe) {
                        e.msg = "invalid code lengths set", n.mode = fe;
                        break
                    }
                    n.have = 0, n.mode = te;
                case te:
                    for (; n.have < n.nlen + n.ndist;) {
                        for (; Oe = n.lencode[f & (1 << n.lenbits) - 1], ve = Oe >>> 24, ge = Oe >>> 16 & 255, be = 65535 & Oe, !(ve <= h);) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        if (be < 16) f >>>= ve, h -= ve, n.lens[n.have++] = be; else {
                            if (16 === be) {
                                for (Se = ve + 2; h < Se;) {
                                    if (0 === u) break e;
                                    u--, f += r[a++] << h, h += 8
                                }
                                if (f >>>= ve, h -= ve, 0 === n.have) {
                                    e.msg = "invalid bit length repeat", n.mode = fe;
                                    break
                                }
                                Ee = n.lens[n.have - 1], v = 3 + (3 & f), f >>>= 2, h -= 2
                            } else if (17 === be) {
                                for (Se = ve + 3; h < Se;) {
                                    if (0 === u) break e;
                                    u--, f += r[a++] << h, h += 8
                                }
                                f >>>= ve, h -= ve, Ee = 0, v = 3 + (7 & f), f >>>= 3, h -= 3
                            } else {
                                for (Se = ve + 7; h < Se;) {
                                    if (0 === u) break e;
                                    u--, f += r[a++] << h, h += 8
                                }
                                f >>>= ve, h -= ve, Ee = 0, v = 11 + (127 & f), f >>>= 7, h -= 7
                            }
                            if (n.have + v > n.nlen + n.ndist) {
                                e.msg = "invalid bit length repeat", n.mode = fe;
                                break
                            }
                            for (; v--;) n.lens[n.have++] = Ee
                        }
                    }
                    if (n.mode === fe) break;
                    if (0 === n.lens[256]) {
                        e.msg = "invalid code -- missing end-of-block", n.mode = fe;
                        break
                    }
                    if (n.lenbits = 9, Te = {bits: n.lenbits}, xe = E(T, n.lens, 0, n.nlen, n.lencode, 0, n.work, Te), n.lenbits = Te.bits, xe) {
                        e.msg = "invalid literal/lengths set", n.mode = fe;
                        break
                    }
                    if (n.distbits = 6, n.distcode = n.distdyn, Te = {bits: n.distbits}, xe = E(S, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, Te), n.distbits = Te.bits, xe) {
                        e.msg = "invalid distances set", n.mode = fe;
                        break
                    }
                    if (n.mode = ne, t === k) break e;
                case ne:
                    n.mode = ie;
                case ie:
                    if (u >= 6 && l >= 258) {
                        e.next_out = s, e.avail_out = l, e.next_in = a, e.avail_in = u, n.hold = f, n.bits = h, w(e, m), s = e.next_out, o = e.output, l = e.avail_out, a = e.next_in, r = e.input, u = e.avail_in, f = n.hold, h = n.bits, n.mode === q && (n.back = -1);
                        break
                    }
                    for (n.back = 0; Oe = n.lencode[f & (1 << n.lenbits) - 1], ve = Oe >>> 24, ge = Oe >>> 16 & 255, be = 65535 & Oe, !(ve <= h);) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    if (ge && 0 == (240 & ge)) {
                        for (ye = ve, _e = ge, we = be; Oe = n.lencode[we + ((f & (1 << ye + _e) - 1) >> ye)], ve = Oe >>> 24, ge = Oe >>> 16 & 255, be = 65535 & Oe, !(ye + ve <= h);) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        f >>>= ye, h -= ye, n.back += ye
                    }
                    if (f >>>= ve, h -= ve, n.back += ve, n.length = be, 0 === ge) {
                        n.mode = ue;
                        break
                    }
                    if (32 & ge) {
                        n.back = -1, n.mode = q;
                        break
                    }
                    if (64 & ge) {
                        e.msg = "invalid literal/length code", n.mode = fe;
                        break
                    }
                    n.extra = 15 & ge, n.mode = re;
                case re:
                    if (n.extra) {
                        for (Se = n.extra; h < Se;) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        n.length += f & (1 << n.extra) - 1, f >>>= n.extra, h -= n.extra, n.back += n.extra
                    }
                    n.was = n.length, n.mode = oe;
                case oe:
                    for (; Oe = n.distcode[f & (1 << n.distbits) - 1], ve = Oe >>> 24, ge = Oe >>> 16 & 255, be = 65535 & Oe, !(ve <= h);) {
                        if (0 === u) break e;
                        u--, f += r[a++] << h, h += 8
                    }
                    if (0 == (240 & ge)) {
                        for (ye = ve, _e = ge, we = be; Oe = n.distcode[we + ((f & (1 << ye + _e) - 1) >> ye)], ve = Oe >>> 24, ge = Oe >>> 16 & 255, be = 65535 & Oe, !(ye + ve <= h);) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        f >>>= ye, h -= ye, n.back += ye
                    }
                    if (f >>>= ve, h -= ve, n.back += ve, 64 & ge) {
                        e.msg = "invalid distance code", n.mode = fe;
                        break
                    }
                    n.offset = be, n.extra = 15 & ge, n.mode = ae;
                case ae:
                    if (n.extra) {
                        for (Se = n.extra; h < Se;) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        n.offset += f & (1 << n.extra) - 1, f >>>= n.extra, h -= n.extra, n.back += n.extra
                    }
                    if (n.offset > n.dmax) {
                        e.msg = "invalid distance too far back", n.mode = fe;
                        break
                    }
                    n.mode = se;
                case se:
                    if (0 === l) break e;
                    if (v = m - l, n.offset > v) {
                        if ((v = n.offset - v) > n.whave && n.sane) {
                            e.msg = "invalid distance too far back", n.mode = fe;
                            break
                        }
                        v > n.wnext ? (v -= n.wnext, g = n.wsize - v) : g = n.wnext - v, v > n.length && (v = n.length), me = n.window
                    } else me = o, g = s - n.offset, v = n.length;
                    v > l && (v = l), l -= v, n.length -= v;
                    do {
                        o[s++] = me[g++]
                    } while (--v);
                    0 === n.length && (n.mode = ie);
                    break;
                case ue:
                    if (0 === l) break e;
                    o[s++] = n.length, l--, n.mode = ie;
                    break;
                case le:
                    if (n.wrap) {
                        for (; h < 32;) {
                            if (0 === u) break e;
                            u--, f |= r[a++] << h, h += 8
                        }
                        if (m -= l, e.total_out += m, n.total += m, m && (e.adler = n.check = n.flags ? _(n.check, o, m, s - m) : y(n.check, o, m, s - m)), m = l, (n.flags ? f : i(f)) !== n.check) {
                            e.msg = "incorrect data check", n.mode = fe;
                            break
                        }
                        f = 0, h = 0
                    }
                    n.mode = ce;
                case ce:
                    if (n.wrap && n.flags) {
                        for (; h < 32;) {
                            if (0 === u) break e;
                            u--, f += r[a++] << h, h += 8
                        }
                        if (f !== (4294967295 & n.total)) {
                            e.msg = "incorrect length check", n.mode = fe;
                            break
                        }
                        f = 0, h = 0
                    }
                    n.mode = de;
                case de:
                    xe = I;
                    break e;
                case fe:
                    xe = P;
                    break e;
                case he:
                    return L;
                case pe:
                default:
                    return R
            }
            return e.next_out = s, e.avail_out = l, e.next_in = a, e.avail_in = u, n.hold = f, n.bits = h, (n.wsize || m !== e.avail_out && n.mode < fe && (n.mode < le || t !== O)) && d(e, e.output, e.next_out, m - e.avail_out) ? (n.mode = he, L) : (p -= e.avail_in, m -= e.avail_out, e.total_in += p, e.total_out += m, n.total += m, n.wrap && m && (e.adler = n.check = n.flags ? _(n.check, o, m, e.next_out - m) : y(n.check, o, m, e.next_out - m)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === q ? 128 : 0) + (n.mode === ne || n.mode === Z ? 256 : 0), (0 === p && 0 === m || t === O) && xe === C && (xe = j), xe)
        }

        function h(e) {
            if (!e || !e.state) return R;
            var t = e.state;
            return t.window && (t.window = null), e.state = null, C
        }

        function p(e, t) {
            var n;
            return e && e.state ? (n = e.state, 0 == (2 & n.wrap) ? R : (n.head = t, t.done = !1, C)) : R
        }

        function m(e, t) {
            var n, i, r = t.length;
            return e && e.state ? (n = e.state, 0 !== n.wrap && n.mode !== G ? R : n.mode === G && (i = 1, (i = y(i, t, r, 0)) !== n.check) ? P : d(e, t, r, r) ? (n.mode = he, L) : (n.havedict = 1, C)) : R
        }

        var v, g, b = n(3), y = n(18), _ = n(20), w = n(53), E = n(55), x = 0, T = 1, S = 2, O = 4, M = 5, k = 6, C = 0,
            I = 1, A = 2, R = -2, P = -3, L = -4, j = -5, N = 8, D = 1, B = 2, z = 3, U = 4, V = 5, F = 6, $ = 7, Y = 8,
            H = 9, X = 10, G = 11, q = 12, K = 13, W = 14, Z = 15, J = 16, Q = 17, ee = 18, te = 19, ne = 20, ie = 21,
            re = 22, oe = 23, ae = 24, se = 25, ue = 26, le = 27, ce = 28, de = 29, fe = 30, he = 31, pe = 32, me = 852,
            ve = 592, ge = 15, be = !0;
        t.inflateReset = a, t.inflateReset2 = s, t.inflateResetKeep = o, t.inflateInit = l, t.inflateInit2 = u, t.inflate = f, t.inflateEnd = h, t.inflateGetHeader = p, t.inflateSetDictionary = m, t.inflateInfo = "pako inflate (from Nodeca project)"
    }, function (e, t, n) {
        "use strict";
        var i = n(3),
            r = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
            o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
            a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
            s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        e.exports = function (e, t, n, u, l, c, d, f) {
            var h, p, m, v, g, b, y, _, w, E = f.bits, x = 0, T = 0, S = 0, O = 0, M = 0, k = 0, C = 0, I = 0, A = 0,
                R = 0, P = null, L = 0, j = new i.Buf16(16), N = new i.Buf16(16), D = null, B = 0;
            for (x = 0; x <= 15; x++) j[x] = 0;
            for (T = 0; T < u; T++) j[t[n + T]]++;
            for (M = E, O = 15; O >= 1 && 0 === j[O]; O--) ;
            if (M > O && (M = O), 0 === O) return l[c++] = 20971520, l[c++] = 20971520, f.bits = 1, 0;
            for (S = 1; S < O && 0 === j[S]; S++) ;
            for (M < S && (M = S), I = 1, x = 1; x <= 15; x++) if (I <<= 1, (I -= j[x]) < 0) return -1;
            if (I > 0 && (0 === e || 1 !== O)) return -1;
            for (N[1] = 0, x = 1; x < 15; x++) N[x + 1] = N[x] + j[x];
            for (T = 0; T < u; T++) 0 !== t[n + T] && (d[N[t[n + T]]++] = T);
            if (0 === e ? (P = D = d, b = 19) : 1 === e ? (P = r, L -= 257, D = o, B -= 257, b = 256) : (P = a, D = s, b = -1), R = 0, T = 0, x = S, g = c, k = M, C = 0, m = -1, A = 1 << M, v = A - 1, 1 === e && A > 852 || 2 === e && A > 592) return 1;
            for (; ;) {
                y = x - C, d[T] < b ? (_ = 0, w = d[T]) : d[T] > b ? (_ = D[B + d[T]], w = P[L + d[T]]) : (_ = 96, w = 0), h = 1 << x - C, p = 1 << k, S = p;
                do {
                    p -= h, l[g + (R >> C) + p] = y << 24 | _ << 16 | w | 0
                } while (0 !== p);
                for (h = 1 << x - 1; R & h;) h >>= 1;
                if (0 !== h ? (R &= h - 1, R += h) : R = 0, T++, 0 == --j[x]) {
                    if (x === O) break;
                    x = t[n + d[T]]
                }
                if (x > M && (R & v) !== m) {
                    for (0 === C && (C = M), g += S, k = x - C, I = 1 << k; k + C < O && !((I -= j[k + C]) <= 0);) k++, I <<= 1;
                    if (A += 1 << k, 1 === e && A > 852 || 2 === e && A > 592) return 1;
                    m = R & v, l[m] = M << 24 | k << 16 | g - c | 0
                }
            }
            return 0 !== R && (l[g + R] = x - C << 24 | 64 << 16 | 0), f.bits = M, 0
        }
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            for (var t = e.length; --t >= 0;) e[t] = 0
        }

        function r(e, t, n, i, r) {
            this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = i, this.max_length = r, this.has_stree = e && e.length
        }

        function o(e, t) {
            this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
        }

        function a(e) {
            return e < 256 ? oe[e] : oe[256 + (e >>> 7)]
        }

        function s(e, t) {
            e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
        }

        function u(e, t, n) {
            e.bi_valid > G - n ? (e.bi_buf |= t << e.bi_valid & 65535, s(e, e.bi_buf), e.bi_buf = t >> G - e.bi_valid, e.bi_valid += n - G) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
        }

        function l(e, t, n) {
            u(e, n[2 * t], n[2 * t + 1])
        }

        function c(e, t) {
            var n = 0;
            do {
                n |= 1 & e, e >>>= 1, n <<= 1
            } while (--t > 0);
            return n >>> 1
        }

        function d(e) {
            16 === e.bi_valid ? (s(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
        }

        function f(e, t) {
            var n, i, r, o, a, s, u = t.dyn_tree, l = t.max_code, c = t.stat_desc.static_tree,
                d = t.stat_desc.has_stree, f = t.stat_desc.extra_bits, h = t.stat_desc.extra_base,
                p = t.stat_desc.max_length, m = 0;
            for (o = 0; o <= X; o++) e.bl_count[o] = 0;
            for (u[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < H; n++) i = e.heap[n], o = u[2 * u[2 * i + 1] + 1] + 1, o > p && (o = p, m++), u[2 * i + 1] = o, i > l || (e.bl_count[o]++, a = 0, i >= h && (a = f[i - h]), s = u[2 * i], e.opt_len += s * (o + a), d && (e.static_len += s * (c[2 * i + 1] + a)));
            if (0 !== m) {
                do {
                    for (o = p - 1; 0 === e.bl_count[o];) o--;
                    e.bl_count[o]--, e.bl_count[o + 1] += 2, e.bl_count[p]--, m -= 2
                } while (m > 0);
                for (o = p; 0 !== o; o--) for (i = e.bl_count[o]; 0 !== i;) (r = e.heap[--n]) > l || (u[2 * r + 1] !== o && (e.opt_len += (o - u[2 * r + 1]) * u[2 * r], u[2 * r + 1] = o), i--)
            }
        }

        function h(e, t, n) {
            var i, r, o = new Array(X + 1), a = 0;
            for (i = 1; i <= X; i++) o[i] = a = a + n[i - 1] << 1;
            for (r = 0; r <= t; r++) {
                var s = e[2 * r + 1];
                0 !== s && (e[2 * r] = c(o[s]++, s))
            }
        }

        function p() {
            var e, t, n, i, o, a = new Array(X + 1);
            for (n = 0, i = 0; i < U - 1; i++) for (se[i] = n, e = 0; e < 1 << Q[i]; e++) ae[n++] = i;
            for (ae[n - 1] = i, o = 0, i = 0; i < 16; i++) for (ue[i] = o, e = 0; e < 1 << ee[i]; e++) oe[o++] = i;
            for (o >>= 7; i < $; i++) for (ue[i] = o << 7, e = 0; e < 1 << ee[i] - 7; e++) oe[256 + o++] = i;
            for (t = 0; t <= X; t++) a[t] = 0;
            for (e = 0; e <= 143;) ie[2 * e + 1] = 8, e++, a[8]++;
            for (; e <= 255;) ie[2 * e + 1] = 9, e++, a[9]++;
            for (; e <= 279;) ie[2 * e + 1] = 7, e++, a[7]++;
            for (; e <= 287;) ie[2 * e + 1] = 8, e++, a[8]++;
            for (h(ie, F + 1, a), e = 0; e < $; e++) re[2 * e + 1] = 5, re[2 * e] = c(e, 5);
            le = new r(ie, Q, V + 1, F, X), ce = new r(re, ee, 0, $, X), de = new r(new Array(0), te, 0, Y, q)
        }

        function m(e) {
            var t;
            for (t = 0; t < F; t++) e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < $; t++) e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < Y; t++) e.bl_tree[2 * t] = 0;
            e.dyn_ltree[2 * K] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
        }

        function v(e) {
            e.bi_valid > 8 ? s(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
        }

        function g(e, t, n, i) {
            v(e), i && (s(e, n), s(e, ~n)), R.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n
        }

        function b(e, t, n, i) {
            var r = 2 * t, o = 2 * n;
            return e[r] < e[o] || e[r] === e[o] && i[t] <= i[n]
        }

        function y(e, t, n) {
            for (var i = e.heap[n], r = n << 1; r <= e.heap_len && (r < e.heap_len && b(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !b(t, i, e.heap[r], e.depth));) e.heap[n] = e.heap[r], n = r, r <<= 1;
            e.heap[n] = i
        }

        function _(e, t, n) {
            var i, r, o, s, c = 0;
            if (0 !== e.last_lit) do {
                i = e.pending_buf[e.d_buf + 2 * c] << 8 | e.pending_buf[e.d_buf + 2 * c + 1], r = e.pending_buf[e.l_buf + c], c++, 0 === i ? l(e, r, t) : (o = ae[r], l(e, o + V + 1, t), s = Q[o], 0 !== s && (r -= se[o], u(e, r, s)), i--, o = a(i), l(e, o, n), 0 !== (s = ee[o]) && (i -= ue[o], u(e, i, s)))
            } while (c < e.last_lit);
            l(e, K, t)
        }

        function w(e, t) {
            var n, i, r, o = t.dyn_tree, a = t.stat_desc.static_tree, s = t.stat_desc.has_stree, u = t.stat_desc.elems,
                l = -1;
            for (e.heap_len = 0, e.heap_max = H, n = 0; n < u; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = l = n, e.depth[n] = 0) : o[2 * n + 1] = 0;
            for (; e.heap_len < 2;) r = e.heap[++e.heap_len] = l < 2 ? ++l : 0, o[2 * r] = 1, e.depth[r] = 0, e.opt_len--, s && (e.static_len -= a[2 * r + 1]);
            for (t.max_code = l, n = e.heap_len >> 1; n >= 1; n--) y(e, o, n);
            r = u;
            do {
                n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], y(e, o, 1), i = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = i, o[2 * r] = o[2 * n] + o[2 * i], e.depth[r] = (e.depth[n] >= e.depth[i] ? e.depth[n] : e.depth[i]) + 1, o[2 * n + 1] = o[2 * i + 1] = r, e.heap[1] = r++, y(e, o, 1)
            } while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1], f(e, t), h(o, l, e.bl_count)
        }

        function E(e, t, n) {
            var i, r, o = -1, a = t[1], s = 0, u = 7, l = 4;
            for (0 === a && (u = 138, l = 3), t[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) r = a, a = t[2 * (i + 1) + 1], ++s < u && r === a || (s < l ? e.bl_tree[2 * r] += s : 0 !== r ? (r !== o && e.bl_tree[2 * r]++, e.bl_tree[2 * W]++) : s <= 10 ? e.bl_tree[2 * Z]++ : e.bl_tree[2 * J]++, s = 0, o = r, 0 === a ? (u = 138, l = 3) : r === a ? (u = 6, l = 3) : (u = 7, l = 4))
        }

        function x(e, t, n) {
            var i, r, o = -1, a = t[1], s = 0, c = 7, d = 4;
            for (0 === a && (c = 138, d = 3), i = 0; i <= n; i++) if (r = a, a = t[2 * (i + 1) + 1], !(++s < c && r === a)) {
                if (s < d) do {
                    l(e, r, e.bl_tree)
                } while (0 != --s); else 0 !== r ? (r !== o && (l(e, r, e.bl_tree), s--), l(e, W, e.bl_tree), u(e, s - 3, 2)) : s <= 10 ? (l(e, Z, e.bl_tree), u(e, s - 3, 3)) : (l(e, J, e.bl_tree), u(e, s - 11, 7));
                s = 0, o = r, 0 === a ? (c = 138, d = 3) : r === a ? (c = 6, d = 3) : (c = 7, d = 4)
            }
        }

        function T(e) {
            var t;
            for (E(e, e.dyn_ltree, e.l_desc.max_code), E(e, e.dyn_dtree, e.d_desc.max_code), w(e, e.bl_desc), t = Y - 1; t >= 3 && 0 === e.bl_tree[2 * ne[t] + 1]; t--) ;
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
        }

        function S(e, t, n, i) {
            var r;
            for (u(e, t - 257, 5), u(e, n - 1, 5), u(e, i - 4, 4), r = 0; r < i; r++) u(e, e.bl_tree[2 * ne[r] + 1], 3);
            x(e, e.dyn_ltree, t - 1), x(e, e.dyn_dtree, n - 1)
        }

        function O(e) {
            var t, n = 4093624447;
            for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return L;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return j;
            for (t = 32; t < V; t++) if (0 !== e.dyn_ltree[2 * t]) return j;
            return L
        }

        function M(e) {
            fe || (p(), fe = !0), e.l_desc = new o(e.dyn_ltree, le), e.d_desc = new o(e.dyn_dtree, ce), e.bl_desc = new o(e.bl_tree, de), e.bi_buf = 0, e.bi_valid = 0, m(e)
        }

        function k(e, t, n, i) {
            u(e, (D << 1) + (i ? 1 : 0), 3), g(e, t, n, !0)
        }

        function C(e) {
            u(e, B << 1, 3), l(e, K, ie), d(e)
        }

        function I(e, t, n, i) {
            var r, o, a = 0;
            e.level > 0 ? (e.strm.data_type === N && (e.strm.data_type = O(e)), w(e, e.l_desc), w(e, e.d_desc), a = T(e), r = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= r && (r = o)) : r = o = n + 5, n + 4 <= r && -1 !== t ? k(e, t, n, i) : e.strategy === P || o === r ? (u(e, (B << 1) + (i ? 1 : 0), 3), _(e, ie, re)) : (u(e, (z << 1) + (i ? 1 : 0), 3), S(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), _(e, e.dyn_ltree, e.dyn_dtree)), m(e), i && v(e)
        }

        function A(e, t, n) {
            return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (ae[n] + V + 1)]++, e.dyn_dtree[2 * a(t)]++), e.last_lit === e.lit_bufsize - 1
        }

        var R = n(3), P = 4, L = 0, j = 1, N = 2, D = 0, B = 1, z = 2, U = 29, V = 256, F = V + 1 + U, $ = 30, Y = 19,
            H = 2 * F + 1, X = 15, G = 16, q = 7, K = 256, W = 16, Z = 17, J = 18,
            Q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            ee = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            te = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            ne = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ie = new Array(2 * (F + 2));
        i(ie);
        var re = new Array(2 * $);
        i(re);
        var oe = new Array(512);
        i(oe);
        var ae = new Array(256);
        i(ae);
        var se = new Array(U);
        i(se);
        var ue = new Array($);
        i(ue);
        var le, ce, de, fe = !1;
        t._tr_init = M, t._tr_stored_block = k, t._tr_flush_block = I, t._tr_tally = A, t._tr_align = C
    }, function (e, t, n) {/*!
 * PEP v0.4.3 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */
        !function (t, n) {
            e.exports = n()
        }(0, function () {
            "use strict";

            function e(e, t) {
                t = t || Object.create(null);
                var n = document.createEvent("Event");
                n.initEvent(e, t.bubbles || !1, t.cancelable || !1);
                for (var i, r = 2; r < l.length; r++) i = l[r], n[i] = t[i] || c[r];
                n.buttons = t.buttons || 0;
                var o = 0;
                return o = t.pressure && n.buttons ? t.pressure : n.buttons ? .5 : 0, n.x = n.clientX, n.y = n.clientY, n.pointerId = t.pointerId || 0, n.width = t.width || 0, n.height = t.height || 0, n.pressure = o, n.tiltX = t.tiltX || 0, n.tiltY = t.tiltY || 0, n.twist = t.twist || 0, n.tangentialPressure = t.tangentialPressure || 0, n.pointerType = t.pointerType || "", n.hwTimestamp = t.hwTimestamp || 0, n.isPrimary = t.isPrimary || !1, n
            }

            function t() {
                this.array = [], this.size = 0
            }

            function n(e, t, n, i) {
                this.addCallback = e.bind(i), this.removeCallback = t.bind(i), this.changedCallback = n.bind(i), x && (this.observer = new x(this.mutationWatcher.bind(this)))
            }

            function i(e) {
                return "body /shadow-deep/ " + r(e)
            }

            function r(e) {
                return '[touch-action="' + e + '"]'
            }

            function o(e) {
                return "{ -ms-touch-action: " + e + "; touch-action: " + e + "; }"
            }

            function a(e) {
                if (!g.pointermap.has(e)) {
                    var t = new Error("InvalidPointerId");
                    throw t.name = "InvalidPointerId", t
                }
            }

            function s(e) {
                for (var t = e.parentNode; t && t !== e.ownerDocument;) t = t.parentNode;
                if (!t) {
                    var n = new Error("InvalidStateError");
                    throw n.name = "InvalidStateError", n
                }
            }

            function u(e) {
                return 0 !== g.pointermap.get(e).buttons
            }

            var l = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "pageX", "pageY"],
                c = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0],
                d = window.Map && window.Map.prototype.forEach, f = d ? Map : t;
            t.prototype = {
                set: function (e, t) {
                    if (void 0 === t) return this.delete(e);
                    this.has(e) || this.size++, this.array[e] = t
                }, has: function (e) {
                    return void 0 !== this.array[e]
                }, delete: function (e) {
                    this.has(e) && (delete this.array[e], this.size--)
                }, get: function (e) {
                    return this.array[e]
                }, clear: function () {
                    this.array.length = 0, this.size = 0
                }, forEach: function (e, t) {
                    return this.array.forEach(function (n, i) {
                        e.call(t, n, i, this)
                    }, this)
                }
            };
            var h = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "buttons", "pointerId", "width", "height", "pressure", "tiltX", "tiltY", "pointerType", "hwTimestamp", "isPrimary", "type", "target", "currentTarget", "which", "pageX", "pageY", "timeStamp"],
                p = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0, 0, 0, 0, 0, 0, "", 0, !1, "", null, null, 0, 0, 0, 0],
                m = {pointerover: 1, pointerout: 1, pointerenter: 1, pointerleave: 1},
                v = "undefined" != typeof SVGElementInstance, g = {
                    pointermap: new f,
                    eventMap: Object.create(null),
                    captureInfo: Object.create(null),
                    eventSources: Object.create(null),
                    eventSourceList: [],
                    registerSource: function (e, t) {
                        var n = t, i = n.events;
                        i && (i.forEach(function (e) {
                            n[e] && (this.eventMap[e] = n[e].bind(n))
                        }, this), this.eventSources[e] = n, this.eventSourceList.push(n))
                    },
                    register: function (e) {
                        for (var t, n = this.eventSourceList.length, i = 0; i < n && (t = this.eventSourceList[i]); i++) t.register.call(t, e)
                    },
                    unregister: function (e) {
                        for (var t, n = this.eventSourceList.length, i = 0; i < n && (t = this.eventSourceList[i]); i++) t.unregister.call(t, e)
                    },
                    contains: function (e, t) {
                        try {
                            return e.contains(t)
                        } catch (e) {
                            return !1
                        }
                    },
                    down: function (e) {
                        e.bubbles = !0, this.fireEvent("pointerdown", e)
                    },
                    move: function (e) {
                        e.bubbles = !0, this.fireEvent("pointermove", e)
                    },
                    up: function (e) {
                        e.bubbles = !0, this.fireEvent("pointerup", e)
                    },
                    enter: function (e) {
                        e.bubbles = !1, this.fireEvent("pointerenter", e)
                    },
                    leave: function (e) {
                        e.bubbles = !1, this.fireEvent("pointerleave", e)
                    },
                    over: function (e) {
                        e.bubbles = !0, this.fireEvent("pointerover", e)
                    },
                    out: function (e) {
                        e.bubbles = !0, this.fireEvent("pointerout", e)
                    },
                    cancel: function (e) {
                        e.bubbles = !0, this.fireEvent("pointercancel", e)
                    },
                    leaveOut: function (e) {
                        this.out(e), this.propagate(e, this.leave, !1)
                    },
                    enterOver: function (e) {
                        this.over(e), this.propagate(e, this.enter, !0)
                    },
                    eventHandler: function (e) {
                        if (!e._handledByPE) {
                            var t = e.type, n = this.eventMap && this.eventMap[t];
                            n && n(e), e._handledByPE = !0
                        }
                    },
                    listen: function (e, t) {
                        t.forEach(function (t) {
                            this.addEvent(e, t)
                        }, this)
                    },
                    unlisten: function (e, t) {
                        t.forEach(function (t) {
                            this.removeEvent(e, t)
                        }, this)
                    },
                    addEvent: function (e, t) {
                        e.addEventListener(t, this.boundHandler)
                    },
                    removeEvent: function (e, t) {
                        e.removeEventListener(t, this.boundHandler)
                    },
                    makeEvent: function (t, n) {
                        this.captureInfo[n.pointerId] && (n.relatedTarget = null);
                        var i = new e(t, n);
                        return n.preventDefault && (i.preventDefault = n.preventDefault), i._target = i._target || n.target, i
                    },
                    fireEvent: function (e, t) {
                        var n = this.makeEvent(e, t);
                        return this.dispatchEvent(n)
                    },
                    cloneEvent: function (e) {
                        for (var t, n = Object.create(null), i = 0; i < h.length; i++) t = h[i], n[t] = e[t] || p[i], !v || "target" !== t && "relatedTarget" !== t || n[t] instanceof SVGElementInstance && (n[t] = n[t].correspondingUseElement);
                        return e.preventDefault && (n.preventDefault = function () {
                            e.preventDefault()
                        }), n
                    },
                    getTarget: function (e) {
                        var t = this.captureInfo[e.pointerId];
                        return t ? e._target !== t && e.type in m ? void 0 : t : e._target
                    },
                    propagate: function (e, t, n) {
                        for (var i = e.target, r = []; i !== document && !i.contains(e.relatedTarget);) if (r.push(i), !(i = i.parentNode)) return;
                        n && r.reverse(), r.forEach(function (n) {
                            e.target = n, t.call(this, e)
                        }, this)
                    },
                    setCapture: function (t, n, i) {
                        this.captureInfo[t] && this.releaseCapture(t, i), this.captureInfo[t] = n, this.implicitRelease = this.releaseCapture.bind(this, t, i), document.addEventListener("pointerup", this.implicitRelease), document.addEventListener("pointercancel", this.implicitRelease);
                        var r = new e("gotpointercapture");
                        r.pointerId = t, r._target = n, i || this.asyncDispatchEvent(r)
                    },
                    releaseCapture: function (t, n) {
                        var i = this.captureInfo[t];
                        if (i) {
                            this.captureInfo[t] = void 0, document.removeEventListener("pointerup", this.implicitRelease), document.removeEventListener("pointercancel", this.implicitRelease);
                            var r = new e("lostpointercapture");
                            r.pointerId = t, r._target = i, n || this.asyncDispatchEvent(r)
                        }
                    },
                    dispatchEvent: function (e) {
                        var t = this.getTarget(e);
                        if (t) return t.dispatchEvent(e)
                    },
                    asyncDispatchEvent: function (e) {
                        requestAnimationFrame(this.dispatchEvent.bind(this, e))
                    }
                };
            g.boundHandler = g.eventHandler.bind(g);
            var b = {
                    shadow: function (e) {
                        if (e) return e.shadowRoot || e.webkitShadowRoot
                    }, canTarget: function (e) {
                        return e && Boolean(e.elementFromPoint)
                    }, targetingShadow: function (e) {
                        var t = this.shadow(e);
                        if (this.canTarget(t)) return t
                    }, olderShadow: function (e) {
                        var t = e.olderShadowRoot;
                        if (!t) {
                            var n = e.querySelector("shadow");
                            n && (t = n.olderShadowRoot)
                        }
                        return t
                    }, allShadows: function (e) {
                        for (var t = [], n = this.shadow(e); n;) t.push(n), n = this.olderShadow(n);
                        return t
                    }, searchRoot: function (e, t, n) {
                        if (e) {
                            var i, r, o = e.elementFromPoint(t, n);
                            for (r = this.targetingShadow(o); r;) {
                                if (i = r.elementFromPoint(t, n)) {
                                    var a = this.targetingShadow(i);
                                    return this.searchRoot(a, t, n) || i
                                }
                                r = this.olderShadow(r)
                            }
                            return o
                        }
                    }, owner: function (e) {
                        for (var t = e; t.parentNode;) t = t.parentNode;
                        return t.nodeType !== Node.DOCUMENT_NODE && t.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && (t = document), t
                    }, findTarget: function (e) {
                        var t = e.clientX, n = e.clientY, i = this.owner(e.target);
                        return i.elementFromPoint(t, n) || (i = document), this.searchRoot(i, t, n)
                    }
                }, y = Array.prototype.forEach.call.bind(Array.prototype.forEach),
                _ = Array.prototype.map.call.bind(Array.prototype.map),
                w = Array.prototype.slice.call.bind(Array.prototype.slice),
                E = Array.prototype.filter.call.bind(Array.prototype.filter),
                x = window.MutationObserver || window.WebKitMutationObserver, T = {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    attributeFilter: ["touch-action"]
                };
            n.prototype = {
                watchSubtree: function (e) {
                    this.observer && b.canTarget(e) && this.observer.observe(e, T)
                }, enableOnSubtree: function (e) {
                    this.watchSubtree(e), e === document && "complete" !== document.readyState ? this.installOnLoad() : this.installNewSubtree(e)
                }, installNewSubtree: function (e) {
                    y(this.findElements(e), this.addElement, this)
                }, findElements: function (e) {
                    return e.querySelectorAll ? e.querySelectorAll("[touch-action]") : []
                }, removeElement: function (e) {
                    this.removeCallback(e)
                }, addElement: function (e) {
                    this.addCallback(e)
                }, elementChanged: function (e, t) {
                    this.changedCallback(e, t)
                }, concatLists: function (e, t) {
                    return e.concat(w(t))
                }, installOnLoad: function () {
                    document.addEventListener("readystatechange", function () {
                        "complete" === document.readyState && this.installNewSubtree(document)
                    }.bind(this))
                }, isElement: function (e) {
                    return e.nodeType === Node.ELEMENT_NODE
                }, flattenMutationTree: function (e) {
                    var t = _(e, this.findElements, this);
                    return t.push(E(e, this.isElement)), t.reduce(this.concatLists, [])
                }, mutationWatcher: function (e) {
                    e.forEach(this.mutationHandler, this)
                }, mutationHandler: function (e) {
                    if ("childList" === e.type) {
                        this.flattenMutationTree(e.addedNodes).forEach(this.addElement, this);
                        this.flattenMutationTree(e.removedNodes).forEach(this.removeElement, this)
                    } else "attributes" === e.type && this.elementChanged(e.target, e.oldValue)
                }
            };
            var S = ["none", "auto", "pan-x", "pan-y", {
                    rule: "pan-x pan-y",
                    selectors: ["pan-x pan-y", "pan-y pan-x"]
                }], O = "", M = window.PointerEvent || window.MSPointerEvent,
                k = !window.ShadowDOMPolyfill && document.head.createShadowRoot, C = g.pointermap, I = [1, 4, 2, 8, 16],
                A = !1;
            try {
                A = 1 === new MouseEvent("test", {buttons: 1}).buttons
            } catch (e) {
            }
            var R, P = {
                POINTER_ID: 1,
                POINTER_TYPE: "mouse",
                events: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout"],
                register: function (e) {
                    g.listen(e, this.events)
                },
                unregister: function (e) {
                    g.unlisten(e, this.events)
                },
                lastTouches: [],
                isEventSimulatedFromTouch: function (e) {
                    for (var t, n = this.lastTouches, i = e.clientX, r = e.clientY, o = 0, a = n.length; o < a && (t = n[o]); o++) {
                        var s = Math.abs(i - t.x), u = Math.abs(r - t.y);
                        if (s <= 25 && u <= 25) return !0
                    }
                },
                prepareEvent: function (e) {
                    var t = g.cloneEvent(e), n = t.preventDefault;
                    return t.preventDefault = function () {
                        e.preventDefault(), n()
                    }, t.pointerId = this.POINTER_ID, t.isPrimary = !0, t.pointerType = this.POINTER_TYPE, t
                },
                prepareButtonsForMove: function (e, t) {
                    var n = C.get(this.POINTER_ID);
                    0 !== t.which && n ? e.buttons = n.buttons : e.buttons = 0, t.buttons = e.buttons
                },
                mousedown: function (e) {
                    if (!this.isEventSimulatedFromTouch(e)) {
                        var t = C.get(this.POINTER_ID), n = this.prepareEvent(e);
                        A || (n.buttons = I[n.button], t && (n.buttons |= t.buttons), e.buttons = n.buttons), C.set(this.POINTER_ID, e), t && 0 !== t.buttons ? g.move(n) : g.down(n)
                    }
                },
                mousemove: function (e) {
                    if (!this.isEventSimulatedFromTouch(e)) {
                        var t = this.prepareEvent(e);
                        A || this.prepareButtonsForMove(t, e), t.button = -1, C.set(this.POINTER_ID, e), g.move(t)
                    }
                },
                mouseup: function (e) {
                    if (!this.isEventSimulatedFromTouch(e)) {
                        var t = C.get(this.POINTER_ID), n = this.prepareEvent(e);
                        if (!A) {
                            var i = I[n.button];
                            n.buttons = t ? t.buttons & ~i : 0, e.buttons = n.buttons
                        }
                        C.set(this.POINTER_ID, e), n.buttons &= ~I[n.button], 0 === n.buttons ? g.up(n) : g.move(n)
                    }
                },
                mouseover: function (e) {
                    if (!this.isEventSimulatedFromTouch(e)) {
                        var t = this.prepareEvent(e);
                        A || this.prepareButtonsForMove(t, e), t.button = -1, C.set(this.POINTER_ID, e), g.enterOver(t)
                    }
                },
                mouseout: function (e) {
                    if (!this.isEventSimulatedFromTouch(e)) {
                        var t = this.prepareEvent(e);
                        A || this.prepareButtonsForMove(t, e), t.button = -1, g.leaveOut(t)
                    }
                },
                cancel: function (e) {
                    var t = this.prepareEvent(e);
                    g.cancel(t), this.deactivateMouse()
                },
                deactivateMouse: function () {
                    C.delete(this.POINTER_ID)
                }
            }, L = g.captureInfo, j = b.findTarget.bind(b), N = b.allShadows.bind(b), D = g.pointermap, B = {
                events: ["touchstart", "touchmove", "touchend", "touchcancel"],
                register: function (e) {
                    R.enableOnSubtree(e)
                },
                unregister: function () {
                },
                elementAdded: function (e) {
                    var t = e.getAttribute("touch-action"), n = this.touchActionToScrollType(t);
                    n && (e._scrollType = n, g.listen(e, this.events), N(e).forEach(function (e) {
                        e._scrollType = n, g.listen(e, this.events)
                    }, this))
                },
                elementRemoved: function (e) {
                    e._scrollType = void 0, g.unlisten(e, this.events), N(e).forEach(function (e) {
                        e._scrollType = void 0, g.unlisten(e, this.events)
                    }, this)
                },
                elementChanged: function (e, t) {
                    var n = e.getAttribute("touch-action"), i = this.touchActionToScrollType(n),
                        r = this.touchActionToScrollType(t);
                    i && r ? (e._scrollType = i, N(e).forEach(function (e) {
                        e._scrollType = i
                    }, this)) : r ? this.elementRemoved(e) : i && this.elementAdded(e)
                },
                scrollTypes: {
                    EMITTER: "none",
                    XSCROLLER: "pan-x",
                    YSCROLLER: "pan-y",
                    SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
                },
                touchActionToScrollType: function (e) {
                    var t = e, n = this.scrollTypes;
                    return "none" === t ? "none" : t === n.XSCROLLER ? "X" : t === n.YSCROLLER ? "Y" : n.SCROLLER.exec(t) ? "XY" : void 0
                },
                POINTER_TYPE: "touch",
                firstTouch: null,
                isPrimaryTouch: function (e) {
                    return this.firstTouch === e.identifier
                },
                setPrimaryTouch: function (e) {
                    (0 === D.size || 1 === D.size && D.has(1)) && (this.firstTouch = e.identifier, this.firstXY = {
                        X: e.clientX,
                        Y: e.clientY
                    }, this.scrolling = !1, this.cancelResetClickCount())
                },
                removePrimaryPointer: function (e) {
                    e.isPrimary && (this.firstTouch = null, this.firstXY = null, this.resetClickCount())
                },
                clickCount: 0,
                resetId: null,
                resetClickCount: function () {
                    var e = function () {
                        this.clickCount = 0, this.resetId = null
                    }.bind(this);
                    this.resetId = setTimeout(e, 200)
                },
                cancelResetClickCount: function () {
                    this.resetId && clearTimeout(this.resetId)
                },
                typeToButtons: function (e) {
                    var t = 0;
                    return "touchstart" !== e && "touchmove" !== e || (t = 1), t
                },
                touchToPointer: function (e) {
                    var t = this.currentTouchEvent, n = g.cloneEvent(e), i = n.pointerId = e.identifier + 2;
                    n.target = L[i] || j(n), n.bubbles = !0, n.cancelable = !0, n.detail = this.clickCount, n.button = 0, n.buttons = this.typeToButtons(t.type), n.width = 2 * (e.radiusX || e.webkitRadiusX || 0), n.height = 2 * (e.radiusY || e.webkitRadiusY || 0), n.pressure = e.force || e.webkitForce || .5, n.isPrimary = this.isPrimaryTouch(e), n.pointerType = this.POINTER_TYPE, n.altKey = t.altKey, n.ctrlKey = t.ctrlKey, n.metaKey = t.metaKey, n.shiftKey = t.shiftKey;
                    var r = this;
                    return n.preventDefault = function () {
                        r.scrolling = !1, r.firstXY = null, t.preventDefault()
                    }, n
                },
                processTouches: function (e, t) {
                    var n = e.changedTouches;
                    this.currentTouchEvent = e;
                    for (var i, r = 0; r < n.length; r++) i = n[r], t.call(this, this.touchToPointer(i))
                },
                shouldScroll: function (e) {
                    if (this.firstXY) {
                        var t, n = e.currentTarget._scrollType;
                        if ("none" === n) t = !1; else if ("XY" === n) t = !0; else {
                            var i = e.changedTouches[0], r = n, o = "Y" === n ? "X" : "Y",
                                a = Math.abs(i["client" + r] - this.firstXY[r]),
                                s = Math.abs(i["client" + o] - this.firstXY[o]);
                            t = a >= s
                        }
                        return this.firstXY = null, t
                    }
                },
                findTouch: function (e, t) {
                    for (var n, i = 0, r = e.length; i < r && (n = e[i]); i++) if (n.identifier === t) return !0
                },
                vacuumTouches: function (e) {
                    var t = e.touches;
                    if (D.size >= t.length) {
                        var n = [];
                        D.forEach(function (e, i) {
                            if (1 !== i && !this.findTouch(t, i - 2)) {
                                var r = e.out;
                                n.push(r)
                            }
                        }, this), n.forEach(this.cancelOut, this)
                    }
                },
                touchstart: function (e) {
                    this.vacuumTouches(e), this.setPrimaryTouch(e.changedTouches[0]), this.dedupSynthMouse(e), this.scrolling || (this.clickCount++, this.processTouches(e, this.overDown))
                },
                overDown: function (e) {
                    D.set(e.pointerId, {target: e.target, out: e, outTarget: e.target}), g.enterOver(e), g.down(e)
                },
                touchmove: function (e) {
                    this.scrolling || (this.shouldScroll(e) ? (this.scrolling = !0, this.touchcancel(e)) : (e.preventDefault(), this.processTouches(e, this.moveOverOut)))
                },
                moveOverOut: function (e) {
                    var t = e, n = D.get(t.pointerId);
                    if (n) {
                        var i = n.out, r = n.outTarget;
                        g.move(t), i && r !== t.target && (i.relatedTarget = t.target, t.relatedTarget = r, i.target = r, t.target ? (g.leaveOut(i), g.enterOver(t)) : (t.target = r, t.relatedTarget = null, this.cancelOut(t))), n.out = t, n.outTarget = t.target
                    }
                },
                touchend: function (e) {
                    this.dedupSynthMouse(e), this.processTouches(e, this.upOut)
                },
                upOut: function (e) {
                    this.scrolling || (g.up(e), g.leaveOut(e)), this.cleanUpPointer(e)
                },
                touchcancel: function (e) {
                    this.processTouches(e, this.cancelOut)
                },
                cancelOut: function (e) {
                    g.cancel(e), g.leaveOut(e), this.cleanUpPointer(e)
                },
                cleanUpPointer: function (e) {
                    D.delete(e.pointerId), this.removePrimaryPointer(e)
                },
                dedupSynthMouse: function (e) {
                    var t = P.lastTouches, n = e.changedTouches[0];
                    if (this.isPrimaryTouch(n)) {
                        var i = {x: n.clientX, y: n.clientY};
                        t.push(i);
                        var r = function (e, t) {
                            var n = e.indexOf(t);
                            n > -1 && e.splice(n, 1)
                        }.bind(null, t, i);
                        setTimeout(r, 2500)
                    }
                }
            };
            R = new n(B.elementAdded, B.elementRemoved, B.elementChanged, B);
            var z, U, V, F = g.pointermap,
                $ = window.MSPointerEvent && "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE, Y = {
                    events: ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerOut", "MSPointerOver", "MSPointerCancel", "MSGotPointerCapture", "MSLostPointerCapture"],
                    register: function (e) {
                        g.listen(e, this.events)
                    },
                    unregister: function (e) {
                        g.unlisten(e, this.events)
                    },
                    POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"],
                    prepareEvent: function (e) {
                        var t = e;
                        return $ && (t = g.cloneEvent(e), t.pointerType = this.POINTER_TYPES[e.pointerType]), t
                    },
                    cleanup: function (e) {
                        F.delete(e)
                    },
                    MSPointerDown: function (e) {
                        F.set(e.pointerId, e);
                        var t = this.prepareEvent(e);
                        g.down(t)
                    },
                    MSPointerMove: function (e) {
                        var t = this.prepareEvent(e);
                        g.move(t)
                    },
                    MSPointerUp: function (e) {
                        var t = this.prepareEvent(e);
                        g.up(t), this.cleanup(e.pointerId)
                    },
                    MSPointerOut: function (e) {
                        var t = this.prepareEvent(e);
                        g.leaveOut(t)
                    },
                    MSPointerOver: function (e) {
                        var t = this.prepareEvent(e);
                        g.enterOver(t)
                    },
                    MSPointerCancel: function (e) {
                        var t = this.prepareEvent(e);
                        g.cancel(t), this.cleanup(e.pointerId)
                    },
                    MSLostPointerCapture: function (e) {
                        var t = g.makeEvent("lostpointercapture", e);
                        g.dispatchEvent(t)
                    },
                    MSGotPointerCapture: function (e) {
                        var t = g.makeEvent("gotpointercapture", e);
                        g.dispatchEvent(t)
                    }
                }, H = window.navigator;
            return H.msPointerEnabled ? (z = function (e) {
                a(e), s(this), u(e) && (g.setCapture(e, this, !0), this.msSetPointerCapture(e))
            }, U = function (e) {
                a(e), g.releaseCapture(e, !0), this.msReleasePointerCapture(e)
            }) : (z = function (e) {
                a(e), s(this), u(e) && g.setCapture(e, this)
            }, U = function (e) {
                a(e), g.releaseCapture(e)
            }), V = function (e) {
                return !!g.captureInfo[e]
            }, function () {
                if (M) {
                    S.forEach(function (e) {
                        String(e) === e ? (O += r(e) + o(e) + "\n", k && (O += i(e) + o(e) + "\n")) : (O += e.selectors.map(r) + o(e.rule) + "\n", k && (O += e.selectors.map(i) + o(e.rule) + "\n"))
                    });
                    var e = document.createElement("style");
                    e.textContent = O, document.head.appendChild(e)
                }
            }(), function () {
                if (!window.PointerEvent) {
                    if (window.PointerEvent = e, window.navigator.msPointerEnabled) {
                        var t = window.navigator.msMaxTouchPoints;
                        Object.defineProperty(window.navigator, "maxTouchPoints", {
                            value: t,
                            enumerable: !0
                        }), g.registerSource("ms", Y)
                    } else Object.defineProperty(window.navigator, "maxTouchPoints", {
                        value: 0,
                        enumerable: !0
                    }), g.registerSource("mouse", P), void 0 !== window.ontouchstart && g.registerSource("touch", B);
                    g.register(document)
                }
            }(), function () {
                window.Element && !Element.prototype.setPointerCapture && Object.defineProperties(Element.prototype, {
                    setPointerCapture: {value: z},
                    releasePointerCapture: {value: U},
                    hasPointerCapture: {value: V}
                })
            }(), {dispatcher: g, Installer: n, PointerEvent: e, PointerMap: f, targetFinding: b}
        })
    }, function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(e) {
            if (c === setTimeout) return setTimeout(e, 0);
            if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
            try {
                return c(e, 0)
            } catch (t) {
                try {
                    return c.call(null, e, 0)
                } catch (t) {
                    return c.call(this, e, 0)
                }
            }
        }

        function o(e) {
            if (d === clearTimeout) return clearTimeout(e);
            if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
            try {
                return d(e)
            } catch (t) {
                try {
                    return d.call(null, e)
                } catch (t) {
                    return d.call(this, e)
                }
            }
        }

        function a() {
            m && h && (m = !1, h.length ? p = h.concat(p) : v = -1, p.length && s())
        }

        function s() {
            if (!m) {
                var e = r(a);
                m = !0;
                for (var t = p.length; t;) {
                    for (h = p, p = []; ++v < t;) h && h[v].run();
                    v = -1, t = p.length
                }
                h = null, m = !1, o(e)
            }
        }

        function u(e, t) {
            this.fun = e, this.array = t
        }

        function l() {
        }

        var c, d, f = e.exports = {};
        !function () {
            try {
                c = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                c = n
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                d = i
            }
        }();
        var h, p = [], m = !1, v = -1;
        f.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            p.push(new u(e, t)), 1 !== p.length || m || r(s)
        }, u.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, f.listeners = function (e) {
            return []
        }, f.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, f.cwd = function () {
            return "/"
        }, f.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, f.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        var i = n(42);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        n(6)(i, {});
        i.locals && (e.exports = i.locals)
    }, function (e, t, n) {
        var i = n(44);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        n(6)(i, {});
        i.locals && (e.exports = i.locals)
    }, function (e, t, n) {
        var i = n(45);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        n(6)(i, {});
        i.locals && (e.exports = i.locals)
    }, function (e, t, n) {
        var i = n(46);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        n(6)(i, {});
        i.locals && (e.exports = i.locals)
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t) {
        function n(e, t) {
            var i = Array.isArray(t), r = i && [] || {};
            return i ? (e = e || [], r = r.concat(e), t.forEach(function (t, i) {
                void 0 === r[i] ? r[i] = t : "object" == typeof t ? r[i] = n(e[i], t) : -1 === e.indexOf(t) && r.push(t)
            })) : (e && "object" == typeof e && Object.keys(e).forEach(function (t) {
                r[t] = e[t]
            }), Object.keys(t).forEach(function (i) {
                "object" == typeof t[i] && t[i] && e[i] ? r[i] = n(e[i], t[i]) : r[i] = t[i]
            })), r
        }

        e.exports = n
    }, function (e, t, n) {
        function i() {
            if (4 == arguments.length) this.x = arguments[0], this.y = arguments[1], this.z = arguments[2], this.angle = arguments[3]; else if (2 == arguments.length) if ("number" == typeof arguments[1]) this.setAxis(arguments[0]), this.angle = arguments[1]; else {
                var e = arguments[0].normalize(), t = arguments[1].normalize(), n = e.cross(t), i = n.length();
                i <= 1.192092896e-7 ? e.dot(t) < 0 ? (n = e.cross(new r(1, 0, 0)), this.angle = Math.PI, i = n.length(), i <= 1.192092896e-7 && (n = e.cross(new r(0, 1, 0))), n = n.normalize()) : (n = new r(0, 1, 0), this.angle = 0) : (this.angle = Math.atan2(i, e.dot(t)), n = n.normalize()), this.setAxis(n)
            } else 1 == arguments.length && "object" == typeof arguments[0] && null !== arguments[0] && 4 === arguments[0].length ? (this.x = arguments[0][0], this.y = arguments[0][1], this.z = arguments[0][2], this.angle = arguments[0][3]) : (this.x = 0, this.y = 1, this.z = 0, this.angle = 0)
        }

        var r = n(24);
        i.prototype.toArray = function () {
            return [this.x, this.y, this.z, this.angle]
        }, i.prototype.multVec = function (e) {
            var t = -this.angle, n = Math.sin(t), i = Math.cos(t), o = this.x, a = this.y, s = this.z, u = e.x, l = e.y,
                c = e.z, d = (o * u + a * l + s * c) * (1 - i);
            return new r(o * d + i * u + n * (s * l - a * c), a * d + i * l + n * (o * c - s * u), s * d + i * c + n * (a * u - o * l))
        }, i.prototype.inverse = function () {
            return new i(this.x, this.y, this.z, -this.angle)
        }, i.prototype.multiply = function (e) {
            var t = e.angle, n = Math.sin(t / 2), r = Math.cos(t / 2), o = e.getAxis().multiply(n),
                a = Math.sin(this.angle / 2), s = Math.cos(this.angle / 2), u = this.getAxis().multiply(a),
                l = r * s - o.dot(u), c = o.multiply(s).add(u.multiply(r)).add(u.cross(o)),
                d = c.x * c.x + c.y * c.y + c.z * c.z, f = new i(0, 0, 1, 0);
            if (0 !== d) {
                var h = Math.sqrt(d);
                f.setAxis(c.divide(h)), f.angle = 2 * Math.atan2(h, l)
            }
            return f
        }, i.prototype.setAxis = function (e) {
            this.x = e.x, this.y = e.y, this.z = e.z
        }, i.prototype.getAxis = function () {
            return new r(this.x, this.y, this.z)
        }, i.prototype.toString = function () {
            return this.toArray().join(" ")
        }, e.exports = i
    }, function (e, t) {
        function n() {
        }

        n.prototype.$ = function (e, t) {
            var n = e || this;
            if ("string" == typeof e && e) if ("*" === e) n = (this["@children"] || []).filter(function (e) {
                return "string" != typeof e
            }), t && (n = n.reduce(function (n, i) {
                return n.concat(i, i.$(e, t))
            }, [])); else {
                var i = e.indexOf("/"), r = e.substring(0, i), o = e.substring(i + 1), a = o.indexOf("/");
                i >= 0 && 0 === a ? (o = o.substring(1), n = this.$(r, t).reduce(function (e, t) {
                    return e.concat(t.$(o, !0))
                }, [])) : n = t ? this.$("*").reduce(function (t, n) {
                    return t.concat(n.$(e, !0))
                }, this.$(e)) : i < 0 ? this[e] : this.$(r).reduce(function (e, t) {
                    return e.concat(t.$(o))
                }, [])
            }
            return n ? n.map ? n : [n] : []
        }, n.prototype.$text = function (e) {
            return e ? this.$(e).reduce(function (e, t) {
                return e + t.$text()
            }, "") : this["#text"] || (this["@children"] || []).reduce(function (e, t) {
                return "string" == typeof t ? e + t : e + t.$text()
            }, "")
        }, n.prototype.$attr = function (e) {
            return this["@attributes"] ? this["@attributes"][e] : null
        }, e.exports = n
    }, function (e, t, n) {
        var i = n(2), r = (n(1).app, n(0)), o = -1, a = {
            dpl: {
                setupTable: function (e) {
                    if (i.dispatch("app.ipc.dpl.willSetupTable", e), e) {
                        o = -1;
                        var t, n;
                        Array.prototype.slice.call(e.rows).forEach(function (r) {
                            if (r.id) {
                                var o = +r.id.substring(3);
                                r.setAttribute("data-index", o), r.onmouseover = function (e) {
                                    clearTimeout(t);
                                    var r = +this.getAttribute("data-index");
                                    n !== r && (n = null, i.dispatch("app.ipc.dpl.didHoverRow", r))
                                }, r.onmouseout = function (e) {
                                    n = +this.getAttribute("data-index"), clearTimeout(t), t = setTimeout(function () {
                                        i.dispatch("app.ipc.dpl.didHoverRow", -1), n = null
                                    }, 10)
                                }, r.onclick = function (e) {
                                    var t = +this.getAttribute("data-index"),
                                        n = +(e.shiftKey && 1) | +(e.ctrlKey && 2) | +(e.altKey && 4), r = this;
                                    this.__debounceTimeout ? (clearTimeout(this.__debounceTimeout), delete this.__debounceTimeout) : this.__debounceTimeout = setTimeout(function () {
                                        delete r.__debounceTimeout, i.dispatch("app.ipc.dpl.didSelectRow", t, n)
                                    }, 250)
                                }, r.oncontextmenu = function (t) {
                                    var n = +this.getAttribute("data-index"), r = e, o = r.getBoundingClientRect(),
                                        a = t.clientX - o.left, s = t.clientY - o.top;
                                    i.dispatch("app.ipc.dpl.didCallContextMenu", n, a, s, r), t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation()
                                }, i.dispatch("app.ipc.dpl.didSetupRow", r, o)
                            }
                        })
                    }
                    i.dispatch("app.ipc.dpl.didSetupTable", e)
                }, hoverRow: function (e) {
                    var t;
                    o >= 0 && (t = document.getElementById("row" + o)) && t.classList.remove("hover"), e >= 0 && (t = document.getElementById("row" + e)) && t.classList.add("hover"), o = e
                }, highlightRow: function (e, t) {
                    t = void 0 === t || t, r.toggleClass(document.getElementById("row" + e), "hover", t)
                }, selectRow: function (e, t) {
                    t = void 0 === t || t, r.toggleClass(document.getElementById("row" + e), "selected", t)
                }, toggleRow: function (e, t) {
                    var n = document.getElementById("row" + e);
                    n && (t = void 0 === t ? n.classList.contains("hidden") : t, r.toggleClass(n, "hidden", !t))
                }
            }
        };
        e.exports = a.dpl
    }, function (e, t, n) {
        var i = n(1).app, r = n(0).expand;
        e.exports = function (e, t) {
            function o(e) {
                return String(e).replace(/(^\s+|\s+$)/g, "").replace(/^0+(\d)/, "$1")
            }

            function a(e) {
                d.dpl || (d.dpl = l.$("ipc/figure/dplist/item").map(function (t, n) {
                    var i;
                    return "function" == typeof e.willGetCSNString ? i = e.willGetCSNString(g[n], n) : g[n].callout ? i = g[n].callout : (i = g[n].roles[3] || "", i += g[n].roles[4] || ""), i
                }))
            }

            function s(e, t) {
                return e.$("metadata/value").filter(function (e) {
                    return e.$attr("decl-id") == t
                }).reduce(function (e, t) {
                    return e + t.$text()
                }, "")
            }

            function u(e) {
                var t = e.$("metadata/value").filter(function (e) {
                    return 5 == e.$attr("role")
                });
                return t.length > 0 && (t = +t[0].$text() || 0), t
            }

            var l = e.json, c = n(8),
                d = {dpl: [], def: [], prefferedViews: [], sheets: {}, options: {}, metadata: {}, info: []},
                f = l.$("ipc/figure/dplist/item").map(function (e) {
                    return e.$attr("id")
                }), h = {};
            (i.modelInfo || {
                sheets: l.$("ipc/figure/views/view").filter(function (e) {
                    return 0 == +e.$attr("hidden")
                }).map(function (e) {
                    return {id: e.$attr("id")}
                })
            }).sheets.forEach(function (e) {
                var n = l.$("ipc/figure/views/view").filter(function (t) {
                    return t.$attr("id") === e.id
                })[0], i = r(e, {
                    changed: !!+n.$attr("changed"), items: n.$("refItem").map(function (e) {
                        return f.indexOf(e.$attr("ref"))
                    }).sort(function (e, t) {
                        return e - t
                    })
                }), o = n.$("refmedia").filter(function (e) {
                    return 1 != e.$attr("ref")
                });
                if (o.length > 0) {
                    var a = o[0].$attr("ref"), s = l.$("ipc/figure/media").filter(function (e) {
                        return e.$attr("id") == a
                    })[0].$attr("src");
                    i.drawing = t + s
                }
                h[e.id] = i
            });
            var p = n(12)(l), m = c(l.$("ipc/figure/metadata/value")),
                v = l.$("ipc/figure/dplist/item").map(function (e, t, n) {
                    for (var i = u(e) - 1, r = -1, o = t - 1; o >= 0; o--) {
                        var a = +s(n[o], "ASP") || 0, l = +s(n[o], "_301F121F8EF84EC0B9979C8D10D19A79") || 0;
                        if (1 !== a && 0 === l && u(n[o]) === i) break
                    }
                    for (; o >= 0; o--) if (u(n[o]) === i && !+s(n[o], "NIL")) {
                        r = o;
                        break
                    }
                    return r
                }), g = l.$("ipc/figure/dplist/item").map(function (e, t) {
                    var n = {row: t}, i = e.$("metadata/value");
                    n.id = e.$attr("id"), n.metadata = c(i), n.part = {}, n.part.id = e.$attr("refPart");
                    var r = l.$("ipc/parts/part").reduce(function (e, t) {
                        return t.$attr("id") == n.part.id ? t : e
                    }), o = r.$("metadata/value");
                    return n.part.metadata = c(o), n.roles = new Array(8), i.concat(o).forEach(function (e) {
                        var t = +e.$attr("role");
                        t && (n.roles[t] = e.$text())
                    }), n.sheetId = e.refview ? e.refview.$attr("ref") : "", n.screentip = e.tooltip ? e.$text("tooltip") : "", n.callout = e.callout ? e.$text("callout") : "", n.objectNames = e.$("refmedia").filter(function (e) {
                        return 1 == e.$attr("ref")
                    }).map(function (e) {
                        return e.$text()
                    }), n.commands = e.$("commands/command").map(function (e) {
                        var t = {};
                        return e.$("value").forEach(function (e) {
                            t[e.$attr("name")] = e.$text()
                        }), {
                            id: e.$attr("id"), type: e.$attr("type"), args: e.$("value").map(function (e) {
                                return e.$text()
                            }), values: t
                        }
                    }), n
                });
            return d = {
                info: g, def: l.$("ipc/figure/dplist/item").map(function (e, t) {
                    return g[t].objectNames
                }), prefferedViews: l.$("ipc/figure/dplist/item").map(function (e, t) {
                    return g[t].sheetId
                }), sheets: h, options: p, metadata: m, parent: v, children: v.map(function (e, t, n) {
                    return n.reduce(function (e, n, i, r) {
                        return n === t ? e.concat(i) : e
                    }, [])
                })
            }, {
                ipc: {
                    interactivity: {
                        getRowByIndex: function (e) {
                            var t = i.ipc.getCurrentSheet().id;
                            return d.sheets[t].items[e]
                        }, getIndexByRow: function (e) {
                            var t = i.ipc.getCurrentSheet().id;
                            return d.sheets[t].items.indexOf(e)
                        }, getRowByItem: function (e) {
                            a(this);
                            var t, n = o(e);
                            for (t = d.dpl.length - 1; t >= 0 && o(d.dpl[t]) !== n; t--) ;
                            return t
                        }, getItemByRow: function (e) {
                            return a(this), d.dpl[e]
                        }, getIndexByItem: function (e) {
                            return this.getIndexByRow(this.getRowByItem(e))
                        }, getItemByIndex: function (e) {
                            return this.getItemByRow(this.getRowByIndex(e))
                        }, getRowByObjectName: function (e) {
                            var t, n = d.def;
                            for (t = n.length - 1; t >= 0 && !(n[t].indexOf(e) >= 0); t--) ;
                            return t
                        }, getObjectsNamesByRow: function (e) {
                            return d.def[e]
                        }, getDrawingForIPCView: function (e) {
                            e = e || i.ipc.currentSheetInfo.id;
                            var t = d.sheets[e];
                            return t && t.drawing || ""
                        }, getSheetInfo: function (e) {
                            return e = e || i.ipc.currentSheetInfo.id, d.sheets[e]
                        }, getOptions: function () {
                            return d.options
                        }, getProjectMetadata: function () {
                            return d.metadata
                        }, getScreenTip: function (e) {
                            var t = this.getRowByIndex(e);
                            return this.getItemInfo(t).screentip
                        }, getPrefferedSheetId: function (e) {
                            var t = this.getRowByIndex(e);
                            return this.getItemInfo(t).sheetId
                        }, getItemInfo: function (e) {
                            return d.info[e]
                        }, getParent: function (e) {
                            return d.parent[e]
                        }, getChildren: function (e, t) {
                            var n = [], i = d.children[e], r = this;
                            return t ? i.forEach(function (e) {
                                n.push(e), n = n.concat(r.getChildren(e, t))
                            }) : n = i, n
                        }
                    }
                }
            }.ipc
        }
    }, function (e, t, n) {
        n(1).app;
        e.exports = function (e, t) {
            function i(e, t) {
                t = t || a.SimulationInteractivity.Simulation;
                var n, r = "";
                if (t.$attr("id") != e) {
                    if (t.Step) for (n = 0; n < t.Step.length && !r; n++) r = i(e, t.Step[n]); else if (t.Substep) for (n = 0; n < t.Substep.length && !r; n++) r = i(e, t.Substep[n])
                } else r = t.$text("Description");
                return r
            }

            function r(e, t) {
                var n = e.$attr("id");
                u.procedureItems[n] = {
                    id: n,
                    type: "event",
                    description: e.$text("Description"),
                    eventType: e.$text("Type").toUpperCase(),
                    parent: t
                }
            }

            function o(e, t) {
                var n, s = e.$attr("id"), l = {
                    id: s, comment: e.$text("Comment"), description: i(s), children: e.$("Item").map(function (e) {
                        return e.$attr("id")
                    }), actions: e.$("Action").map(function (e) {
                        return e.$attr("id")
                    }), metadata: e.$("metadata/value").reduce(function (e, t) {
                        return e[t.$attr("decl-id")] = t.$text(), e
                    }, {}), raw: e
                };
                if (l.type = l.children.length + l.actions.length > 0 || "Action" !== e["@name"] ? "step" : "action", t && (l.parent = t), "action" == l.type) {
                    delete l.children, delete l.actions;
                    var c = a.$("SimulationInteractivity/Simulation/Step");
                    for (n = 0; n < c.length; n++) {
                        var d = c[n], f = d.$("Substep").filter(function (e) {
                            return e.$attr("id") == s
                        });
                        if (f.length > 0) {
                            l.parentStep = d.$attr("id"), l.events = f[0].$("Event").map(function (e) {
                                return r(e, s), e.$attr("id")
                            });
                            break
                        }
                    }
                }
                u.procedureItems[s] = l, e.$("Action").forEach(function (e) {
                    o(e, s)
                }), e.$("Item").forEach(function (e) {
                    o(e, s)
                })
            }

            var a = e.json, s = n(8), u = {defs: {}, docitems: {}, procedureItems: {}, options: {}, metadata: {}};
            return a.$("SimulationInteractivity/DocItems/DocItem").forEach(function (e) {
                var t = e.$attr("id"), n = {}, i = {};
                e.$("metadata/value").forEach(function (e) {
                    var t = e.$text();
                    n[e.$attr("name")] = t, n["{" + e.$attr("decl-id") + "}"] = t, i[e.$attr("decl-id")] = t
                }), u.defs[t] = n;
                var r = n["{DocID}"];
                u.docitems[r] || (u.docitems[r] = {
                    id: r,
                    objectNames: [],
                    metadata: i,
                    screentip: e.$text("tooltip")
                }), u.docitems[r].objectNames.push(t)
            }), u.pictures = a.$("SimulationInteractivity/Resources/Picture").map(function (e) {
                return {description: e.$attr("descr"), drawing: t + e.$text(), flags: e.$attr("flags") || 0}
            }), u.options = n(12)(a), u.metadata = s(a.$("SimulationInteractivity/SimulationInformation/metadata/value")), u.procedureId = a.SimulationInteractivity.Simulation && a.SimulationInteractivity.Simulation.$attr("id"), a.SimulationInteractivity.Procedure && (o(a.SimulationInteractivity.Procedure), u.procedureItems[u.procedureId].type = "procedure", u.procedureItems[u.procedureId].comment = a.$text("SimulationInteractivity/Simulation/Comment")), {
                procedure: {
                    interactivity: {
                        getProcedureId: function () {
                            return u.procedureId
                        }, getDrawings: function () {
                            return u.pictures
                        }, getDocIdByObjectName: function (e) {
                            var t = u.defs[e];
                            return t ? t["{DocID}"] : null
                        }, getObjectNamesByDocId: function (e) {
                            var t = u.docitems[e];
                            return t ? t.objectNames : []
                        }, getDocItemInfo: function (e) {
                            return u.docitems[e]
                        }, getDocItemMetadata: function (e) {
                            return u.defs[e]
                        }, getDocItems: function () {
                            var e = [];
                            for (var t in u.docitems) e.push(t);
                            return e
                        }, getProcedureItemInfo: function (e) {
                            return u.procedureItems[e]
                        }, getOptions: function () {
                            return u.options
                        }, getProjectMetadata: function () {
                            return u.metadata
                        }
                    }
                }
            }.procedure
        }
    }, function (e, t, n) {
        function i(e, t) {
            return new Promise(function (n, i) {
                var r = new Blob([e], {type: "text/plain"}), o = new FileReader;
                o.onload = function (e) {
                    n(e.target.result)
                }, o.readAsText(r, t)
            })
        }

        function r(e) {
            for (var t = e.firstChild; t && !t.tagName;) t = t.nextSibling;
            return t
        }

        function o(e) {
            var t, n = Array.prototype.slice.call(e.getElementsByTagName("path")).filter(function (e) {
                return e.classList.contains("hotspot-region")
            })[0];
            return n || (t = r(e)) && "path" === t.tagName && (n = t, t.classList.add("hotspot-region"), e.appendChild(t), Array.prototype.slice.call(e.getElementsByTagName("text")).forEach(function (t) {
                var n = t.parentNode;
                n !== e ? n.parentNode === e && (e.appendChild(n.cloneNode()).appendChild(t), n.childElementCount || n.parentNode.removeChild(n)) : e.appendChild(t)
            })), n
        }

        function a(e) {
            var t = [], n = o(e);
            return n ? t.push(n) : t = t.concat(Array.prototype.slice.call(e.getElementsByTagName("path")), Array.prototype.slice.call(e.getElementsByTagName("text"))), t
        }

        function s(e) {
            for (var t = e; t && "a" != t.nodeName.toLowerCase();) t = t.parentNode;
            return t
        }

        function u() {
            1 === W && (D = te && L ? P.getBBox() : R.getBBox());
            var e = D, t = j.clientWidth, n = j.clientHeight, i = e.width, r = e.height, o = t / n, a = i / r;
            return o > a ? (r = n, i = r * a) : o < a ? (i = t, r = i / a) : (r = n, i = t), {
                h: r,
                w: i,
                scale: e.width / i
            }
        }

        function l(e, t) {
            var n = u();
            c(Z + e * n.scale, J + t * n.scale)
        }

        function c(e, t) {
            var n = j.clientWidth, i = j.clientHeight, r = u(), o = r.w, a = r.h, s = r.scale, l = o * W, c = a * W,
                d = -Math.abs(n - o) / 2, f = -Math.abs(i - a) / 2;
            Z = l <= n ? Math.max(Math.min(e, (d + n - l) * s), d * s) : Math.max(Math.min(e, d * s), (d + n - l) * s), J = c <= i ? Math.max(Math.min(t, (f + i - c) * s), f * s) : Math.max(Math.min(t, f * s), (f + i - c) * s)
        }

        function d(e, t, n) {
            Z = e, J = t, W = n, ye.dispatch("onZoomChange", W), h()
        }

        function f(e) {
            if (e) {
                var t = e.transform.baseVal;
                (isNaN(Z) || isNaN(J) || isNaN(W)) && (Z = 0, J = 0, W = 1), t.getItem(0).setTranslate(Z, J), t.getItem(1).setScale(W, W)
            }
        }

        function h() {
            N && (clearTimeout(me), me = setTimeout(function () {
                function e() {
                    ve = null, R.style.display = "block", P.style.visibility = "hidden", f(N)
                }

                clearTimeout(ve), te && L ? (ve || (P.style.visibility = "visible", R.style.display = "none"), ve = setTimeout(e, 1e3), f(L)) : e()
            }, 0))
        }

        function p() {
            var e = document.createElement("div");
            return e.appendChild(R.cloneNode(!0)), e.firstChild.removeAttribute("id"), e.firstChild.removeAttribute("style"), e.innerHTML
        }

        function m() {
            var e, t, n, i = {}, r = R.getElementsByTagName("a");
            if (ue && !q.length) {
                for (!1 === navigator.pointerEnabled && (i.inputClass = $ ? Y.TouchInput : F ? Y.TouchMouseInput : Y.MouseInput), n = 0; n < r.length; n++) !function (n) {
                    var r = n.getAttribute("vm2d:name");
                    if (r && n.setAttribute("name", r), r = n.getAttribute("name"), r || (r = n.textContent.replace(/[\r\n\s]+/g, " ").trim(), r && n.setAttribute("name", r), console.log('WARNING: Element "' + n.tagName + '" has no "name" attribute. Uses text content instead: "' + r + '"')), r) {
                        t = new Y.Manager(n, B({recognizers: [[Y.Tap]]}, i)), t.on("tap", function (e) {
                            var t = e.srcEvent || e, n = +(t.shiftKey && 1) | +(t.ctrlKey && 2) | +(t.altKey && 4);
                            K[r] ? (clearTimeout(K[r]), delete K[r]) : K[r] = setTimeout(function () {
                                delete K[r], ye.dispatch("didClickHotspot", r, n)
                            }, G)
                        }), q.push(t);
                        for (e in ge) n.addEventListener(e, ge[e], !1)
                    }
                }(r[n]);
                t = new Y.Manager(j, i);
                var o = new Y.Press({time: X}),
                    a = new Y.Tap({event: "doubletap", taps: 2, threshold: 5, posThreshold: 100, interval: G}),
                    s = new Y.Pinch({enable: !0}), c = new Y.Pan({pointers: 0, threshold: 1});
                s.recognizeWith(c), t.add(o), t.add(a), t.add(s), t.add(c), t.set({touchAction: "none"}), t.on("press", function (e) {
                    "mouse" !== e.pointerType && (be.contextmenu(e.srcEvent), oe = !0)
                }), t.on("pressup", function (e) {
                    "mouse" !== e.pointerType && setTimeout(function () {
                        oe = !1
                    }, 250)
                }), t.on("doubletap", function (e) {
                    be.dblclick(e.srcEvent), ae = !0, setTimeout(function () {
                        ae = !1
                    }, 250)
                }), t.on("pinchstart", function (e) {
                    pe = 1
                }), t.on("pinch", function (e) {
                    var t = j.clientWidth, n = j.clientHeight, i = u(), r = i.w, o = i.h,
                        a = Math.max(ee, Math.min(Q, (1 - (pe - e.scale)) * W)) / W, s = j.getBoundingClientRect(),
                        l = e.center.x, c = e.center.y, f = l - s.left, h = c - s.top,
                        p = (f - (t - r) / 2 - Z / i.scale) / W * i.scale,
                        m = (h - (n - o) / 2 - J / i.scale) / W * i.scale;
                    d(Z + p * (1 - a) * W, J + m * (1 - a) * W, W * a), pe = e.scale
                }), t.on("panstart", function (e) {
                    j.style.cursor = "move", fe = e.deltaX, he = e.deltaY
                }), t.on("pan", function (e) {
                    l(e.deltaX - fe, e.deltaY - he), fe = e.deltaX, he = e.deltaY, h()
                }), t.on("panend", function (e) {
                    j.style.cursor = "default"
                }), q.push(t);
                for (e in be) j.addEventListener(e, be[e], !1)
            }
        }

        function v() {
            var e, t, n, i, r = R.getElementsByTagName("a");
            for (i = 0; i < r.length; i++) {
                n = r[i], n.__mc && n.__mc.destroy(), delete n.__mc;
                for (e in ge) n.removeEventListener(e, ge[e], !1)
            }
            for (e in be) j.removeEventListener(e, be[e], !1);
            q.forEach(function (e) {
                e.destroy()
            }), q.length = 0;
            for (t in K) clearTimeout(K[t]);
            K = {}, W = 1, Z = 0, J = 0
        }

        function g(e, t) {
            function n(t) {
                var n, i = document.createElement("div");
                if (i.innerHTML = t, !(n = i.querySelector("svg"))) throw new Error("No SVG data.");
                if (n) {
                    v();
                    var r = R.style.cssText, o = R.getAttribute("class") || "";
                    R.parentNode.replaceChild(n, R), R = n, R.setAttribute("touch-action", "none"), R.style.touchAction = "none";
                    var a = n.getElementsByTagName("title")[0];
                    a && n.removeChild(a);
                    var s = Array.prototype.slice.call(n.childNodes || n.children).filter(function (e) {
                        var t = e.nodeName;
                        return "#text" !== t && "title" !== t && "defs" !== t && "desc" != t
                    });
                    N = document.createElementNS(U, "g");
                    var u = N.transform.baseVal;
                    u.initialize(n.createSVGTransform()), u.appendItem(n.createSVGTransform()), s.forEach(function (e) {
                        N.appendChild(e)
                    }), n.appendChild(N), n.getAttribute("viewBox") || n.setAttribute("viewBox", "0 0 " + n.getAttribute("width") + " " + n.getAttribute("height"));
                    var l = (n.getAttribute("viewBox") || "0 0 0 0").split(" ");
                    n.getAttribute("width") || n.setAttribute("width", l[2]), n.getAttribute("height") || n.setAttribute("height", l[3]), n.style.cssText = r, n.setAttribute("class", o), ue = !0, ye.dispatch("didCompleteLoad", e), se || m(), le = e, ne = n.getElementsByTagName("text").length, _(), w()
                }
            }

            if (e != le) if (de && (de.abort(), de = null), ce && (ce.onload = null, ce = null), t || /\.(png|jpe?g|jpe|gif)$/i.test(e)) {
                var r = new Image;
                r.onload = function () {
                    b();
                    var t = document.createElementNS(U, "image");
                    t.setAttribute("image-rendering", "optimizeQuality"), t.setAttribute("width", r.width), t.setAttribute("height", r.height), R.setAttribute("viewBox", "0 0 " + r.width + " " + r.height), t.setAttributeNS(V, "href", r.src), N = document.createElementNS(U, "g");
                    var n = N.transform.baseVal;
                    n.initialize(R.createSVGTransform()), n.appendItem(R.createSVGTransform()), N.appendChild(t), R.appendChild(N), w(), ue = !0, ye.dispatch("didCompleteLoad", r.src), se || m(), le = e
                }, r.src = e, ce = r
            } else {
                var o = new window.XMLHttpRequest;
                o.overrideMimeType && o.overrideMimeType("application/octet-stream");
                try {
                    o.open("GET", e, !0), o.responseType = "arraybuffer", o.onerror = function () {
                        ye.dispatch("onProgress", 0, -1), ye.dispatch("failedLoadingDocument", e, o.status)
                    }, o.onprogress = function (e) {
                        var t = e.loaded, n = e.lengthComputable || void 0 === e.lengthComputable ? e.total : 0;
                        ye.dispatch("onProgress", t, n)
                    }, o.onload = function () {
                        ye.dispatch("onProgress", 0, -1);
                        var t = new Uint8Array(o.response);
                        Promise.resolve().then(function () {
                            return i(new Uint8Array(H.inflate(t)))
                        }).catch(function () {
                            return i(t)
                        }).then(n).catch(function () {
                            ye.dispatch("failedLoadingDocument", e, o.status), le = ""
                        })
                    }, o.send(null), de = o
                } catch (t) {
                    ye.dispatch("failedLoadingDocument", e, t.message), le = ""
                }
            }
        }

        function b() {
            for (v(); R.firstChild;) R.removeChild(R.firstChild);
            y(), ue = !1
        }

        function y() {
            for (; P.firstChild;) P.removeChild(P.firstChild);
            L = null
        }

        function _() {
            if (y(), !(ne < 5e3) && te) {
                var e = (new XMLSerializer).serializeToString(R), t = self.URL || self.webkitURL || self, n = new Image,
                    i = new Blob([e], {type: "image/svg+xml;charset=utf-8"}), r = t.createObjectURL(i);
                n.onload = function () {
                    if (t.revokeObjectURL(r), !n.width && !n.height) return void (te = !1);
                    var e = j.appendChild(document.createElement("canvas"));
                    e.style.display = "none", e.width = n.width, e.height = n.height, e.getContext("2d").drawImage(n, 0, 0, n.width, n.height);
                    var i = e.toDataURL("image/png"), o = document.createElementNS(U, "image");
                    o.setAttribute("image-rendering", "optimizeQuality"), o.setAttribute("width", n.width), o.setAttribute("height", n.height), P.setAttribute("viewBox", "0 0 " + n.width + " " + n.height), o.setAttributeNS(V, "href", i), L = document.createElementNS(U, "g");
                    var a = L.transform.baseVal;
                    a.initialize(P.createSVGTransform()), a.appendItem(P.createSVGTransform()), L.appendChild(o), P.appendChild(L), f(L), j.removeChild(e)
                }, n.src = r
            }
        }

        function w() {
            if (!ie) try {
                var e = R.getBBox();
                Q = Math.sqrt(e.width * e.width + e.height * e.height) / 50 || 50
            } catch (e) {
            }
        }

        function E(e, t, n) {
            var i = n;
            return R.querySelectorAll('a[name="' + e + '"]').forEach(function (e) {
                a(e).forEach(function (e) {
                    e.classList && (i = e.classList.toggle(t, n))
                })
            }), i
        }

        function x(e, t) {
            Array.prototype.slice.call(R.getElementsByTagName("a")).forEach(function (n) {
                n.getAttribute("name") === e && a(n).forEach(function (e) {
                    re ? "text" !== e.tagName && (e.style.fill = t, e.style.fillOpacity = .5) : (e.style.stroke = t, e.style.strokeWidth = "text" === e.tagName ? ".1em" : ".5px", e.style.strokeOpacity = 1)
                })
            })
        }

        function T(e) {
            Array.prototype.slice.call(R.getElementsByTagName("a")).forEach(function (t) {
                t.getAttribute("name") === e && a(t).forEach(function (e) {
                    re ? "text" !== e.tagName && (e.style.fill = e.style.stroke, e.style.fillOpacity = e.style.strokeOpacity) : (e.style.stroke = "", e.style.strokeWidth = "", e.style.strokeOpacity = "")
                })
            })
        }

        function S(e, t) {
            Array.prototype.slice.call(R.getElementsByTagName("a")).forEach(function (n) {
                n.getAttribute("name") === e && a(n).forEach(function (e) {
                    re && (e.style.stroke = t, e.style.strokeWidth = "text" === e.tagName ? ".1em" : ".5px", e.style.strokeOpacity = 1), "text" !== e.tagName && (e.style.fill = t, e.style.fillOpacity = .8)
                })
            })
        }

        function O(e) {
            Array.prototype.slice.call(R.getElementsByTagName("a")).forEach(function (t) {
                t.getAttribute("name") === e && a(t).forEach(function (e) {
                    re && (e.style.stroke = "", e.style.strokeWidth = "", e.style.strokeOpacity = ""), "text" !== e.tagName && (e.style.fill = "", e.style.fillOpacity = "")
                })
            })
        }

        function M() {
            d(0, 0, 1)
        }

        function k(e) {
            1 === W && (D = R.getBBox());
            var t = D, n = j.clientWidth, i = j.clientHeight, r = t.width, o = t.height, a = n / i, s = r / o;
            a > s ? (o = i * W, r = o * s) : a < s ? (r = n * W, o = r / s) : (o = i * W, r = n * W);
            var u = Math.max(ee, Math.min(Q, W + e)), c = (W - u) / 2;
            W = u, l(r * c, o * c), h()
        }

        function C() {
            v(), j.style.visibility = "hidden", se = !0
        }

        function I() {
            m(), j.style.visibility = "visible", se = !1, w()
        }

        function A(e, t) {
            e.setAttribute("touch-action", "none"), e.style.touchAction = "none", e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.display = "block", e.style.overflow = "hidden", R = e, j = document.createElement("div"), j.classList.add("cortona3dsolo-svg"), e.parentNode.replaceChild(j, e), j.appendChild(e), P = j.appendChild(document.createElementNS(U, "svg")), P.setAttribute("touch-action", "none"), P.style.touchAction = "none", P.style.pointerEvents = "none", P.style.width = "100%", P.style.height = "100%", P.style.position = "absolute", e.style.display = "block", P.style.overflow = "hidden", P.style.visibility = "hidden", C()
        }

        var R, P, L, j, N, D, B = n(0).expand, z = n(10).EventEmitter, U = "http://www.w3.org/2000/svg",
            V = "http://www.w3.org/1999/xlink", F = "ontouchstart" in window,
            $ = F && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), Y = n(16), H = n(48), X = 750,
            G = 250, q = [], K = {}, W = 1, Z = 0, J = 0, Q = 50, ee = 1, te = !1, ne = 0, ie = !1, re = !1, oe = !1,
            ae = !1, se = !0, ue = !1, le = "", ce = null, de = null;
        !function () {
            function e(e) {
                this.element = e
            }

            var t = function (e) {
                return new RegExp("(^| )" + e + "( |$)")
            }, n = function (e, t, n) {
                for (var i = 0; i < e.length; i++) t.call(n, e[i])
            };
            e.prototype = {
                add: function () {
                    n(arguments, function (e) {
                        this.contains(e) || (this.element.className.baseVal += " " + e)
                    }, this)
                }, remove: function () {
                    n(arguments, function (e) {
                        this.element.className.baseVal = this.element.className.baseVal.replace(t(e), "")
                    }, this)
                }, toggle: function (e, t) {
                    return t = void 0 === t ? !this.contains(e) : t, t ? this.add(e) : this.remove(e), t
                }, contains: function (e) {
                    return t(e).test(this.element.className.baseVal)
                }
            }, "classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
                get: function () {
                    return new e(this)
                }
            })
        }();
        var fe, he, pe, me, ve, ge = {
            mouseover: function (e) {
                e = e || window.event;
                var t = s(e.target || e.srcElement), n = t ? t.getAttribute("name") : "";
                ye.dispatch("didEnterHotspot", n), e.preventDefault()
            }, mouseout: function (e) {
                e = e || window.event;
                var t = s(e.target || e.srcElement), n = t ? t.getAttribute("name") : "";
                ye.dispatch("didLeaveHotspot", n), e.preventDefault()
            }
        }, be = {
            contextmenu: function (e) {
                if (e.preventDefault(), e.stopPropagation(), !oe) {
                    e = e || window.event;
                    var t = e.target || e.srcElement, n = s(t), i = n ? n.getAttribute("name") : "",
                        r = j.getBoundingClientRect(), o = e.clientX - r.left, a = e.clientY - r.top;
                    ye.dispatch("didCallContextMenu", i, o, a, j)
                }
            }, wheel: function (e) {
                e = e || window.event;
                var t = e.deltaY < 0 ? -.1 : .1, n = j.clientWidth, i = j.clientHeight, r = u(), o = r.w, a = r.h,
                    s = Math.max(ee, Math.min(Q, (1 - t) * W)) / W, l = j.getBoundingClientRect(),
                    c = e.clientX - l.left, f = e.clientY - l.top, h = (c - (n - o) / 2 - Z / r.scale) / W * r.scale,
                    p = (f - (i - a) / 2 - J / r.scale) / W * r.scale;
                return d(Z + h * (1 - s) * W, J + p * (1 - s) * W, W * s), e.preventDefault(), !1
            }, dblclick: function (e) {
                if (e.preventDefault(), e.stopPropagation(), !ae) {
                    var t = .4 * (Q - ee) + ee;
                    if (Math.abs(W - t) < .001) M(); else {
                        t /= W;
                        var n = j.clientWidth, i = j.clientHeight, r = u(), o = r.w, a = r.h,
                            s = j.getBoundingClientRect(), l = e.clientX - s.left, c = e.clientY - s.top,
                            f = (l - (n - o) / 2 - Z / r.scale) / W * r.scale,
                            h = (c - (i - a) / 2 - J / r.scale) / W * r.scale;
                        d(Z + f * (1 - t) * W, J + h * (1 - t) * W, W * t)
                    }
                }
            }
        }, ye = B(new z, {
            dispatch: function (e) {
                ye.emit.apply(ye, arguments), "function" == typeof ye.delegate[e] && ye.delegate[e].apply(ye, Array.prototype.slice.call(arguments, 1))
            },
            initialize: A,
            hide: C,
            show: I,
            reset: M,
            scaleBy: k,
            toggleHotspotClass: E,
            select: S,
            unselect: O,
            highlight: x,
            unhighlight: T,
            load: g,
            unload: b,
            attach: m,
            detach: v,
            getSVGSource: p,
            checkComplete: function () {
                return ue
            },
            checkShown: function () {
                return !se
            },
            delegate: {}
        });
        Object.defineProperties(ye, {
            svg: {
                get: function () {
                    return R
                }, enumerable: !0
            }, enableDrawingOptimization: {
                get: function () {
                    return te
                }, set: function (e) {
                    te = !!e
                }, enumerable: !0
            }, enableHoverFilling: {
                get: function () {
                    return re
                }, set: function (e) {
                    re = !!e
                }, enumerable: !0
            }, maxScale: {
                get: function () {
                    return Q
                }, set: function (e) {
                    ie = !!e, Q = Math.max(+e > 0 ? e : 50, ee)
                }, enumerable: !0
            }, minScale: {
                get: function () {
                    return ee
                }, set: function (e) {
                    ee = Math.min(+e > 0 ? e : 1, Q)
                }, enumerable: !0
            }
        }), e.exports = ye
    }, function (e, t, n) {
        n(26);
        var i = n(2);
        window.Cortona3DSolo || (window.Cortona3DSolo = i), i.setMaxListeners(0);
        var r = i.baseUrl || i.baseURL || document.currentScript && document.currentScript.src.replace(/[^\\\/]+$/, "");
        Object.defineProperty(i, "baseURL", {
            get: function () {
                return r
            }, set: function (e) {
                r = e
            }, enumerable: !0
        }), Object.defineProperty(i, "baseUrl", {
            get: function () {
                return r
            }, set: function (e) {
                r = e
            }, enumerable: !0
        });
        var o = n(0), a = o.expand, s = n(27), u = n(1).usedModules;
        console.log("Cortona3D Solo v1.6.6"), e.exports = a(i, {
            use: function (e, t) {
                "Cortona3DSoloSkin" === e ? e = "skin" : "Cortona3DSoloTouch" === e && (e = "touch");
                var r = u[e], s = u.addons[e];
                switch (e) {
                    case"core":
                        if (!r) return new Promise(function (o, s) {
                            u[e] = r = {config: a({}, t)}, i.core = n(33).configure(t), a(i.app, n(28).app), a(i.app, n(30).app), a(i.app, n(29).app), a(i.app, n(31).app), a(i.app, n(32).app), i.once("core.onRuntimeInitialized", function () {
                                o(r)
                            }), i.once("core.onError", s)
                        });
                        break;
                    case"drawing":
                        r || (u[e] = r = {config: a({}, t)}, a(i.app, n(7).configure(t)));
                        break;
                    case"touch":
                        r || (u[e] = r = {config: a({}, t)}, a(i, n(41).configure(t)));
                        break;
                    case"skin":
                        r || (i.use("require"), u[e] = r = {config: a({}, t)}, a(i, n(40).configure(t)));
                        break;
                    case"require":
                        r || (o.detectAMDLoader() ? console.log("The AMD loader is already on the page.") : a(window, n(34)), u[e] = r = {config: a({}, t)}, window.require.onError = function () {
                        }, window.require.config(r.config), n(38), n(36), n(35), n(37), n(39));
                        break;
                    default:
                        return s ? Promise.resolve(s) : i.use("require").then(function () {
                            var n = a({}, t), r = u.require && u.require.config || {}, o = n.prefixURL || i.baseURL;
                            return u.addons[e] = s = {config: n}, o || u.core && ("function" == typeof Module.locateFile ? o = Module.locateFile("") : Module.memoryInitializerPrefixURL && (o = Module.memoryInitializerPrefixURL)), r = a({}, r, {
                                context: "Cortona3DSolo",
                                baseUrl: o,
                                config: {}
                            }), r.config[e] = n, i.app.util.requirePromise([e], window.requirejs.config(r)).then(function (e) {
                                return s.exports = e, s
                            })
                        })
                }
                return Promise.resolve(r)
            }, app: a(n(1).app, {
                util: {
                    xmlToJSON: n(15), loadResource: o.loadResource, toUrl: function (e, t) {
                        var n = "string" != typeof e ? "" : e;
                        if (n.match(/^[a-z]+\:\/\//i)) return n;
                        if (n.match(/^\/\//)) return "http:" + n;
                        if (n.match(/^[a-z]+\:/i)) return n;
                        var i = document.createElement("a");
                        return "/" === n[0] ? (i.href = o.getBaseURL(t), i.href = i.protocol + "//" + i.host + n) : i.href = o.getBaseURL(t) + n, n = i.href, n.match(/^file\:\/\//i) && (n = decodeURI(n)), n.replace(/(\/\.\/|\/[^\/]+\/\.\.\/)/g, "/").replace(/([^:\/])\/{2,}/g, "$1/")
                    }, b64toBlob: s, defineClass: o.defineClass, requirePromise: function (e, t) {
                        return new Promise(function (n, i) {
                            t = t || window.requirejs, Promise.all([t([e], n, i)]).catch(function () {
                            })
                        })
                    }
                }, ui: {createElement: n(4).createElement, html: n(4).createElementsFromHTML, css: n(14), color: n(13)}
            }), expand: a, dispatch: function (e, t) {
                i.emit.apply(i, arguments);
                for (var n = e.split("."), r = n.pop(), o = i; n.length && o;) o = o[n.shift()];
                if (o && "function" == typeof o[r]) switch (arguments.length) {
                    case 1:
                        o[r].call(i);
                        break;
                    case 2:
                        o[r].call(i, arguments[1]);
                        break;
                    case 3:
                        o[r].call(i, arguments[1], arguments[2]);
                        break;
                    case 4:
                        o[r].call(i, arguments[1], arguments[2], arguments[3]);
                        break;
                    case 5:
                        o[r].call(i, arguments[1], arguments[2], arguments[3], arguments[3]);
                        break;
                    default:
                        o[r].apply(i, Array.prototype.slice.call(arguments, 1))
                }
            }
        }), Object.defineProperty(i, "version", {
            get: function () {
                return "1.6.6"
            }, enumerable: !0
        })
    }, function (e, t, n) {
        function i(e) {
            return e.toLowerCase().replace(/\W/g, "")
        }

        function r(e, t) {
            return a.isNumber(t) ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e)
        }

        function o(e, t, n) {
            var i = t;
            return a.isString(t) && (e += t, i = {}), u(e, i, r(arguments, 2))
        }

        var a = n(0), s = n(10).EventEmitter, u = n(4).createElement, l = n(4).createElementsFromHTML, c = n(14),
            d = n(13);
        window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), function (e) {
            e.forEach(function (e) {
                e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment();
                        e.forEach(function (e) {
                            var n = e instanceof Node;
                            t.appendChild(n ? e : document.createTextNode(String(e)))
                        }), this.appendChild(t)
                    }
                })
            })
        }([Element.prototype, Document.prototype, DocumentFragment.prototype]), Element.prototype.remove = function () {
            Array.prototype.slice.call(arguments).forEach(function (e) {
                this.removeChild(e)
            }, this)
        };
        var f = a.defineClass(s, function () {
            this.setMaxListeners(0)
        }, {
            emit: function (e) {
                s.prototype.emit.apply(this, arguments)
            }, append: function () {
                this.$el && Element.prototype.append.apply(this.$el, Array.prototype.slice.call(arguments).map(function (e) {
                    return e instanceof h ? e.$el || "" : e || ""
                }))
            }, remove: function () {
                arguments.length ? Array.prototype.slice.call(arguments).forEach(function (e) {
                    if ("string" == typeof e && this.$el) return e = this.$el.querySelectorAll(e), void this.remove.apply(this, Array.prototype.slice.call(e));
                    e instanceof h && (e = e.$el), e && e.parentNode && e.parentNode.removeChild(e)
                }, this) : this instanceof h && this.$el && this.$el.parentNode.removeChild(this.$el)
            }
        }), h = a.defineClass(f, function () {
            f.call(this)
        }, {
            exports: function (e, t) {
                if (e && (Object.defineProperties(this, {
                    $el: {value: e},
                    element: {value: e}
                }), e.classList && Object.defineProperty(this, "classList", {value: e.classList})), t) for (var n in t) if (t.hasOwnProperty(n)) switch (typeof t[n]) {
                    case"function":
                        Object.defineProperty(this, n, {configurable: !0, enumerable: !0, writable: !0, value: t[n]});
                        break;
                    default:
                        Object.defineProperty(this, n, t[n])
                }
                return this
            }
        }), p = a.defineClass(f, function (e, t) {
            f.call(this), this.name = e;
            var n = document.body;
            t ? n = t : Cortona3DSolo.core && Cortona3DSolo.core.canvas ? n = Cortona3DSolo.core.canvas.parentNode : Cortona3DSolo.drawing && Cortona3DSolo.drawing.svg && (n = Cortona3DSolo.drawing.svg.parentNode);
            var r = n.querySelector(".skin-holder");
            r && r.parentNode === n || (r = function (e) {
                return n.insertBefore(e, n.firstChild).className = "skin-holder", e
            }(document.createElement("div"))), r.classList.add("skin-holder-" + i(this.name)), Object.defineProperties(this, {
                $el: {value: r},
                element: {value: r},
                classList: {value: r.classList}
            })
        }, {
            render: function (e, t) {
                var n, i = this;
                if (e) {
                    if (a.isString(e)) return this.render(this.use(e, t), t);
                    if (a.isFunction(e)) return n = this.create(e, t), this.render(n, t);
                    if (a.isObject(e)) {
                        if (e instanceof h || e instanceof Node) return this.append(e), e;
                        if (e instanceof Promise) return e.then(function (e) {
                            return i.render(e, t)
                        });
                        if (e.forEach) return res = e.map(function (e) {
                            return this.render(e, t)
                        }, this), res.some(function (e) {
                            return e instanceof Promise
                        }) ? Promise.all(res) : res;
                        if (a.isObject(e.rules) && a.isFunction(e.render)) return e.render(), e;
                        if (e.component) return this.render(e.component, Cortona3DSolo.expand(e.options || {}, t || {}))
                    }
                }
                return e
            },
            register: function (e, t) {
                return this.create(e, t)
            },
            use: function (e, t) {
                var n = this;
                return a.isString(e) ? Cortona3DSolo.skin.require(e).then(function (e) {
                    return n.create(e, t)
                }) : a.isFunction(e) ? Promise.resolve(this.create(e, t)) : Promise.reject(new Error("The first argument in use() must be string or factory function."))
            },
            show: function (e) {
                return a.isString(e) ? e = document.querySelector(e) : a.isUndefined(e) && (e = this.$el), e && (e.style.visibility = "visible", e.style.display = ""), e
            },
            hide: function (e, t) {
                return a.isString(e) ? e = document.querySelector(e) : a.isUndefined(e) && (e = this.$el, t = !0), e && (e.style.visibility = "hidden", t && (e.style.display = "none")), e
            },
            toggle: function (e, t) {
                return a.isString(e) ? e = document.querySelector(e) : "boolean" == typeof e ? (e = this.$el, t = e) : a.isUndefined(e) && (e = this.$el), e && (a.isUndefined(t) && (t = "none" === e.style.display), e.style.display = t ? "" : "none", e.style.visibility = t ? "visible" : "hidden"), t
            },
            clear: function (e) {
                a.isString(e) ? e = document.querySelector(e) : a.isUndefined(e) && (e = this.$el), e && (e.innerHTML = "")
            },
            create: function (e, t) {
                function n(e) {
                    return a.isObject(e) && a.isFunction(e.forEach)
                }

                function i(e) {
                    return n(e) ? e.map(i) : a.isObject(e) && e instanceof h ? e.$el || "" : e
                }

                if (a.isFunction(e)) {
                    var r = new h, o = e.call(r, this, t || {}, Cortona3DSolo);
                    return a.isUndefined(o) || (r = o), r || {}
                }
                return u.apply(this, Array.prototype.slice.call(arguments).map(i))
            },
            toolbar: function (e, t) {
                var n = this.div.apply(this, arguments);
                return n.classList.add("skin-toolbar"), n
            },
            container: function (e, t) {
                var n = this.div.apply(this, arguments);
                return n.classList.add("skin-container"), n
            },
            panel: function (e, t) {
                var n = this.div.apply(this, arguments);
                return n.classList.add("skin-panel"), n
            },
            button: function (e, t) {
                var n = o.apply(this, ["button"].concat(r(arguments)));
                return n.classList.add("skin-control"), n
            },
            buttonImg: function (e, t) {
                var n = this.span.apply(this, arguments);
                return n.classList.add("skin-img-button"), n
            },
            input: function (e, t) {
                var n = o.apply(this, ["input"].concat(r(arguments)));
                return n.classList.add("skin-control"), n
            },
            select: function (e, t) {
                var n = o.apply(this, ["select", e].concat(t.map(function (e) {
                    var t = e;
                    return a.isString(e) && (t = {description: e}), this.create("option", {
                        selected: t.selected,
                        value: t.value
                    }, t.description)
                }, this)));
                return n.classList.add("skin-control"), n
            },
            list: function (e, t, n) {
                return "ul" !== e && "ol" !== e && console.error('Type of list must be "ol" or "ul" only.'), o.apply(this, [e, t].concat(n.map(function (e) {
                    return this.create("li", {}, e)
                }, this)))
            },
            ul: function (e, t) {
                return this.list("ul", e, t)
            },
            ol: function (e, t) {
                return this.list("ol", e, t)
            },
            dl: function (e, t) {
                var n = this;
                return o.apply(this, ["dl", e].concat(t.reduce(function (e, t) {
                    return e.concat(n.create("dt", {}, t.term), n.create("dd", {}, t.def))
                }, [])))
            },
            text: function (e, t) {
                var n = this.span.apply(this, arguments);
                return n.classList.add("skin-text"), n
            },
            label: o.bind(this, "label"),
            p: o.bind(this, "p"),
            a: o.bind(this, "a"),
            span: o.bind(this, "span"),
            div: o.bind(this, "div"),
            isHidden: function (e) {
                return !e.offsetWidth && !e.offsetHeight
            },
            isVisible: function (e, t) {
                var n = e.getBoundingClientRect(), i = this.$el.getBoundingClientRect();
                return n.top >= i.top && n.bottom <= i.bottom && (!t || n.left >= i.left && n.right <= i.right)
            },
            createElement: u,
            html: l,
            css: c,
            color: d
        });
        e.exports = p
    }])
});
//# sourceMappingURL=Cortona3DSolo.js.map