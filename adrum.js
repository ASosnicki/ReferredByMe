; /* Version 0cb09c7f88688e75af157693cb56e5b6 v:4.2.3.1, c:138707c62b0fc07c5e5a874c92b5042ff80a4dbb, b:4557 n:57-4.2.3.next-build */
(function() {
    new function() {
        if (!window.ADRUM && !0 !== window["adrum-disable"]) {
            var g = window.ADRUM = {};
            window["adrum-start-time"] = window["adrum-start-time"] || (new Date).getTime();
            (function(a) {
                (function(a) {
                    a.cd = function() {
                        for (var a = [], d = 0; d < arguments.length; d++) a[d - 0] = arguments[d];
                        for (d = 0; d < a.length; d++) {
                            var b = a[d];
                            b && b.setUp()
                        }
                    }
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                a = a.conf || (a.conf = {});
                a.beaconUrlHttp = "http://col.eum-appdynamics.com";
                a.beaconUrlHttps = "https://col.eum-appdynamics.com";
                a.corsEndpointPath = "/eumcollector/beacons/browser/v1";
                a.imageEndpointPath = "/eumcollector/adrum.gif?";
                a.appKey = window["adrum-app-key"] || "AD-AAB-AAC-SRR";
                var d = "https:" === document.location.protocol;
                a.adrumExtUrl = (d ? "https://cdn.appdynamics.com" : "http://cdn.appdynamics.com") + "/adrum-ext.0cb09c7f88688e75af157693cb56e5b6.js";
                a.adrumXdUrl = "https://cdn.appdynamics.com/adrum-xd.0cb09c7f88688e75af157693cb56e5b6.html";
                a.agentVer = "4.2.3.1";
                a.sendImageBeacon = "false";
                if (window["adrum-geo-resolver-url"]) {
                    var f = window["adrum-geo-resolver-url"],
                        c = f.indexOf("://"); - 1 !=
                        c && (f = f.substring(c + 3));
                    f = (d ? "https://" : "http://") + f
                } else f = d ? "" : "";
                a.geoResolverUrl = f;
                a.useStrictDomainCookies = !0 === window["adrum-use-strict-domain-cookies"];
                a.userConf = window["adrum-config"];
                a.de = 10
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    function f(a) {
                        return "undefined" !== typeof a && null !== a
                    }

                    function c(a) {
                        return "[object Array]" === Object.prototype.toString.apply(a)
                    }

                    function b(a) {
                        return "object" == typeof a && !c(a) && null !== a
                    }

                    function e(a) {
                        return "string" ==
                            typeof a
                    }

                    function h(a, e) {
                        for (var q in e) {
                            var d = e[q];
                            if (e.hasOwnProperty(q) && f(d)) {
                                var g = a[q];
                                b(d) && b(g) ? h(g, d) : a[q] = c(g) && c(d) ? g.concat(d) : d
                            }
                        }
                        return a
                    }

                    function q(a) {
                        return e(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a
                    }
                    d.isDefined = f;
                    d.isArray = c;
                    d.isObject = b;
                    d.isFunction = function(a) {
                        return "function" == typeof a || !1
                    };
                    d.isString = e;
                    d.isNumber = function(a) {
                        return "number" == typeof a
                    };
                    d.Xa = function(a) { setTimeout(a, 0) };
                    d.addEventListener = function(h, b, e) {
                        function q() {
                            try {
                                return e.apply(this, Array.prototype.slice.call(arguments))
                            } catch (d) {
                                a.exception(d,
                                    "M1", b, h, d)
                            }
                        }
                        a.isDebug && a.log("M0", b, h);
                        h.addEventListener ? h.addEventListener(b, q, !1) : h.attachEvent && h.attachEvent("on" + b, q)
                    };
                    d.loadScriptAsync = function(h) {
                        var b = document.createElement("script");
                        b.async = !0;
                        b.src = h;
                        var e = document.getElementsByTagName("script")[0];
                        e ? (e.parentNode.insertBefore(b, e), a.log("M2", h)) : a.log("M3", h)
                    };
                    d.mergeJSON = h;
                    d.sd = function(a) {
                        var h = [];
                        a && (d.isObject(a) ? h = [a] : d.isArray(a) && (h = a));
                        return h
                    };
                    d.generateGUID = "undefined" !== typeof window.crypto && "undefined" !== typeof window.crypto.getRandomValues ?
                        function() {
                            function a(h) {
                                for (h = h.toString(16); 4 > h.length;) h = "0" + h;
                                return h
                            }
                            var h = new Uint16Array(8);
                            window.crypto.getRandomValues(h);
                            return a(h[0]) + a(h[1]) + "_" + a(h[2]) + "_" + a(h[3]) + "_" + a(h[4]) + "_" + a(h[5]) + a(h[6]) + a(h[7])
                        } : function() {
                            return "xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                                var h = 16 * Math.random() | 0;
                                return ("x" == a ? h : h & 3 | 8).toString(16)
                            })
                        };
                    d.kd = function(a) {
                        return a ? (a = a.stack) && "string" === typeof a ? a : null : null
                    };
                    d.trim = q;
                    d.Bg = function(a) {
                        var h = {},
                            b, e;
                        if (!a) return h;
                        var d =
                            a.split("\n");
                        for (e = 0; e < d.length; e++) {
                            var c = d[e];
                            b = c.indexOf(":");
                            a = q(c.substr(0, b)).toLowerCase();
                            b = q(c.substr(b + 1));
                            a && (h[a] = h[a] ? h[a] + (", " + b) : b)
                        }
                        return h
                    };
                    d.tryPeriodically = function(a, h, b, e) {
                        function q() {
                            if (h()) b && b();
                            else {
                                var c = a(++d);
                                0 < c ? setTimeout(q, c) : e && e()
                            }
                        }
                        var d = 0;
                        q()
                    };
                    d.Ub = function(a) {
                        return a.charAt(0).toUpperCase() + a.slice(1)
                    };
                    d.Mc = function(a) {
                        for (var h = [], b = 1; b < arguments.length; b++) h[b - 1] = arguments[b];
                        return function() {
                            for (var b = [], e = 0; e < arguments.length; e++) b[e - 0] = arguments[e];
                            return a.apply(this,
                                h.concat(b))
                        }
                    };
                    d.now = Date && Date.now || function() {
                        return (new Date).getTime()
                    }
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                function d(h, b, e, d) {
                    h = a.conf.beaconUrlHttps + "/eumcollector/error.gif?version=1&appKey=" + e + "&msg=" + encodeURIComponent(h.substring(0, 500));
                    d && (h += "&stack=", h += encodeURIComponent(d.substring(0, 1500 - h.length)));
                    return h
                }

                function f(h, b) { 2 <= e || ((new Image).src = d(h, 0, a.conf.appKey, b), e++) }

                function c(a) {
                    return 0 <= a.location.search.indexOf("ADRUM_debug=true") || 0 <= a.cookie.search(/(^|;)\s*ADRUM_debug=true/)
                }
                a.iDR = c;
                a.isDebug = c(document);
                var b = [];
                a.logMessages = b;
                a.log = function(h) {
                    for (var e = 1; e < arguments.length; e++);
                    a.isDebug && b.push(Array.prototype.slice.call(arguments).join(" | "))
                };
                a.error = function(h) {
                    for (var b = 1; b < arguments.length; b++);
                    b = Array.prototype.slice.call(arguments).join(" | ");
                    a.log(b);
                    f(b, null)
                };
                a.exception = function() {
                    for (var h = [], b = 0; b < arguments.length; b++) h[b - 0] = arguments[b];
                    1 > arguments.length || (h = Array.prototype.slice.call(arguments), b = a.utils.kd(h[0]), h = h.slice(1).join(" | "), a.log(h),
                        f(h, b))
                };
                a.assert = function(h, b) { h || a.error("Assert fail: " + b) };
                a.dumpLog = a.isDebug ? function() {
                    for (var a = "", e = 0; e < b.length; e++) a += b[e].replace(RegExp("<br/>", "g"), "\n\t") + "\n";
                    return a
                } : function() {};
                a.cIEBU = d;
                var e = 0;
                a.log("M4")
            })(g || (g = {}));
            (function(a) {
                var d = function() {
                        function a(b) {
                            this.max = b;
                            this.Da = 0
                        }
                        a.prototype.Sf = function() { this.na() || this.Da++ };
                        a.prototype.na = function() {
                            return this.Da >= this.max
                        };
                        a.prototype.reset = function() { this.Da = 0 };
                        return a
                    }(),
                    f = function() {
                        function c() {
                            this.ja = [];
                            this.Za =
                                new d(c.se);
                            this.Oa = new d(c.ge)
                        }
                        c.prototype.submit = function(b) { this.push(b) && a.initEXTDone && this.processQ() };
                        c.prototype.processQ = function() {
                            for (var b = this.jf(), e = 0; e < b.length; e++) {
                                var h = b[e];
                                "function" === typeof a.commands[h[0]] ? (a.isDebug && a.log("M5", h[0], h.slice(1).join(", ")), a.commands[h[0]].apply(a, h.slice(1))) : a.error("M6", h[0])
                            }
                        };
                        c.prototype.fg = function(a) {
                            return "reportXhr" === a || "reportPageError" === a
                        };
                        c.prototype.push = function(b) {
                            var e = b[0],
                                h = this.fg(e),
                                d = h ? this.Za : this.Oa;
                            if (d.na()) return a.log("M7",
                                h ? "spontaneous" : "non spontaneous", e), !1;
                            this.ja.push(b);
                            d.Sf();
                            return !0
                        };
                        c.prototype.jf = function() {
                            var a = this.ja;
                            this.reset();
                            return a
                        };
                        c.prototype.size = function() {
                            return this.ja.length
                        };
                        c.prototype.reset = function() {
                            this.ja = [];
                            this.Za.reset();
                            this.Oa.reset()
                        };
                        c.prototype.isSpontaneousQueueDead = function() {
                            return this.Za.na()
                        };
                        c.prototype.isNonSpontaneousQueueDead = function() {
                            return this.Oa.na()
                        };
                        c.se = 100;
                        c.ge = 100;
                        return c
                    }();
                a.Gd = f
            })(g || (g = {}));
            (function(a) {
                a.q = new a.Gd;
                a.command = function(d) {
                    for (var f =
                            1; f < arguments.length; f++);
                    a.isDebug && a.log("M8", d, Array.prototype.slice.call(arguments).slice(1).join(", "));
                    a.q.submit(Array.prototype.slice.call(arguments))
                }
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function a() { this.status = {} }
                        a.prototype.setUp = function() {};
                        a.prototype.set = function(a, e) { this.status[a] = e };
                        return a
                    }();
                    a.qb = f
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    window.ADRUM.aop = d;
                    d.support = function(a) {
                        return !a || "apply" in a
                    };
                    d.around = function(f, c, b, e) {
                        a.assert(d.support(f),
                            "aop.around called on a function which does not support interception");
                        f = f || function() {};
                        return function() {
                            a.isDebug && a.log("M9", e, Array.prototype.slice.call(arguments).join(", "));
                            var h = Array.prototype.slice.call(arguments),
                                d;
                            try { c && (d = c.apply(this, h)) } catch (m) { a.exception(m, "M10", e, m) }
                            a.assert(!d || "[object Array]" === Object.prototype.toString.call(d));
                            var k = void 0;
                            try { k = f.apply(this, d || h) } finally {
                                try { b && b.apply(this, h) } catch (g) { a.exception(g, "M11", e, g) }
                            }
                            return k
                        }
                    };
                    d.before = function(a, c) {
                        return d.around(a,
                            c)
                    };
                    d.after = function(a, c) {
                        return d.around(a, null, c)
                    }
                })(a.aop || (a.aop = {}))
            })(g || (g = {}));
            (function(a) {
                a = a.EventType || (a.EventType = {});
                a[a.BASE_PAGE = 0] = "BASE_PAGE";
                a[a.IFRAME = 1] = "IFRAME";
                a[a.XHR = 2] = "XHR";
                a[a.VIRTUAL_PAGE = 3] = "VIRTUAL_PAGE";
                a[a.PAGE_ERROR = 4] = "PAGE_ERROR";
                a[a.ABSTRACT = 100] = "ABSTRACT";
                a[a.ADRUM_XHR = 101] = "ADRUM_XHR";
                a[a.NG_VIRTUAL_PAGE = 102] = "NG_VIRTUAL_PAGE"
            })(g || (g = {}));
            (function(a) {
                a = a.events || (a.events = {});
                a.n = {};
                a.n[100] = {
                    guid: "string",
                    url: "string",
                    parentGUID: "string",
                    parentUrl: "string",
                    parentType: "number",
                    timestamp: "number"
                };
                a.n[3] = { resTiming: "object" };
                a.n[102] = { digestCount: "number" };
                a.n[2] = { method: "string", parentPhase: "string", parentPhaseId: "number", error: "object" };
                a.n[101] = { xhr: "object" };
                a.n[4] = { msg: "string", line: "number", stack: "string" }
            })(g || (g = {}));
            (function(a) {
                var d = function() {
                    function a() { this.A = {} }
                    a.prototype.a = function(a, e) { f.a.apply(this, arguments) };
                    a.prototype.Jf = function(a) {
                        return (a = this.B(a)) && a.startTime
                    };
                    a.prototype.pa = function(a, e, h) { f.pa.apply(this, arguments) };
                    a.prototype.B =
                        function(a) {
                            return f.B.call(this, a)
                        };
                    a.ka = function(a) {
                        return f.ka(a)
                    };
                    return a
                }();
                a.za = d;
                var f;
                (function(d) {
                    d.a;
                    d.pa;
                    d.B;
                    d.ka;
                    var b = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance,
                        e = b && b.timing && b.timing.navigationStart ? b.timing.navigationStart : window["adrum-start-time"],
                        h = a.utils.now;
                    d.a = function(b, e) { this.A[b] = { name: b, entryType: "mark", startTime: a.utils.isDefined(e) ? e : h(), duration: 0 } };
                    d.pa = function(b, d, c) {
                        this.A.hasOwnProperty(d) && this.A.hasOwnProperty(c) ?
                            this.A[b] = { name: b, entryType: "measure", startTime: d ? this.A[d].startTime : e, duration: (c ? this.A[c].startTime : h()) - (d ? this.A[d].startTime : e) } : a.error("M12" + (this.A.hasOwnProperty(d) ? c : d) + " does not exist. ")
                    };
                    d.B = function(a) {
                        return this.A[a] || null
                    };
                    d.ka = function(a) {
                        return a + e
                    }
                })(f || (f = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    function f(b, h) {
                        b = b || {};
                        for (var d in b) h[d] = function() {
                            var h = d,
                                c = b[d];
                            return function(b) {
                                var e = "_" + h,
                                    d = this[e];
                                if (a.utils.isDefined(b))
                                    if (typeof b === c) this[e] = b;
                                    else throw TypeError("wrong type of " +
                                        h + " value, " + typeof b + " passed in but should be a " + c + ".");
                                return d
                            }
                        }()
                    }

                    function c(a) {
                        var h = {},
                            b;
                        for (b in a) {
                            var d = a[b];
                            h[d.start] = !0;
                            h[d.end] = !0
                        }
                        return h
                    }
                    var b = function() {
                        function b(h) {
                            this.g = new a.za;
                            this.timestamp(a.utils.now());
                            this.guid(a.utils.generateGUID());
                            this.url(document.URL);
                            this.bd(h)
                        }
                        b.prototype.type = function() {
                            return 100
                        };
                        b.prototype.bd = function(b) {
                            if (a.utils.isObject(b))
                                for (var e in b) {
                                    var d = this[e] || this["mark" + a.utils.Ub(e)];
                                    d && a.utils.isFunction(d) && d.call(this, b[e])
                                }
                        };
                        b.Qb = function(a,
                            b, e) {
                            return {
                                guid: function() {
                                    return a
                                },
                                url: function() {
                                    return b
                                },
                                type: function() {
                                    return e
                                }
                            }
                        };
                        b.prototype.Hf = function() {
                            return b.Qb(this.parentGUID(), this.parentUrl(), this.parentType())
                        };
                        b.prototype.parent = function(b) {
                            var e = this.Hf();
                            a.utils.isDefined(b) && (this.parentGUID(b.guid()), this.parentUrl(b.url()), this.parentType(b.type()));
                            return e
                        };
                        return b
                    }();
                    d.EventTracker = b;
                    d.Y = f;
                    d.Rb = function(b, h) {
                        b = b || {};
                        var d = c(b),
                            m;
                        for (m in d) d = a.utils.Ub(m), h["mark" + d] = a.utils.Mc(function(a, b) { this.g.a(a, b) }, m), h["get" +
                            d] = a.utils.Mc(function(a) {
                            return this.g.Jf(a)
                        }, m)
                    };
                    f(d.n[100], b.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            var s = this.Le || function(a, d) {
                function f() { this.constructor = a }
                for (var c in d) d.hasOwnProperty(c) && (a[c] = d[c]);
                f.prototype = d.prototype;
                a.prototype = new f
            };
            (function(a) {
                (function(a) {
                    var f = function(a) {
                        function b(b) { a.call(this, b) }
                        s(b, a);
                        b.prototype.type = function() {
                            return 4
                        };
                        return b
                    }(a.EventTracker);
                    a.Error = f;
                    a.Y(a.n[4], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f =
                        function(d) {
                            function b() { d.apply(this, arguments) }
                            s(b, d);
                            b.prototype.setUp = function() {
                                d.prototype.setUp.call(this);
                                a.listenForErrors = this.Ec;
                                this.Ec()
                            };
                            b.prototype.Ec = function() {
                                if (a.aop.support(window.onerror)) {
                                    var e = this;
                                    window.onerror = a.aop.around(window.onerror, function(h, d, c, f, g) { b.Ma || (b.errorsSent >= a.conf.de ? a.log("M13") : (f = a.utils.kd(g), a.command("reportPageError", new a.events.Error(a.utils.mergeJSON({ msg: h, url: d, line: c, stack: f }, e.status))), b.errorsSent++, b.Ma = !0)) }, function() { b.Ma = !1 }, "onerror");
                                    a.log("M14")
                                } else a.log("M15")
                            };
                            b.Ma = !1;
                            b.errorsSent = 0;
                            return b
                        }(d.qb);
                    d.ErrorMonitor = f;
                    d.cc = new d.ErrorMonitor
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                var d = function() {
                    function d() {
                        this.wa = [];
                        this.ra(d.Aa, 0)
                    }
                    d.prototype.tg = function(a) { this.ra(d.Kb, a) };
                    d.prototype.vg = function(a) { this.ra(d.Sb, a) };
                    d.prototype.ug = function(a) { this.ra(d.Mb, a) };
                    d.prototype.ra = function(a, b) {
                        this.wa.push({ sg: (new Date).getTime(), rg: b, Nc: a });
                        this.ef = a
                    };
                    d.prototype.getPhaseName = function() {
                        return this.ef
                    };
                    d.prototype.getPhaseID =
                        function(a) {
                            for (var b = 0; b < d.Pb.length; b++)
                                if (d.Pb[b] === a) return b;
                            return null
                        };
                    d.prototype.getPhaseCallbackTime = function(a) {
                        for (var b = this.wa, d = 0; d < b.length; d++)
                            if (b[d].Nc === a) return b[d].sg;
                        return null
                    };
                    d.prototype.findPhaseAtNominalTime = function(c) {
                        a.assert(0 <= c);
                        for (var b = this.wa, e = b.length - 1; 0 <= e; e--)
                            if (c >= b[e].rg) return b[e].Nc;
                        a.error("M16", c, a.utils.kf(b));
                        return d.Aa
                    };
                    d.Aa = "AFTER_FIRST_BYTE";
                    d.Kb = "AFTER_DOM_INTERACTIVE";
                    d.Sb = "AT_ONLOAD";
                    d.Mb = "AFTER_ONLOAD";
                    d.Pb = [d.Aa, d.Kb, d.Sb, d.Mb];
                    return d
                }();
                a.th = d;
                a.lifecycle = new d;
                a.lifecycle = a.lifecycle
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function(a) {
                        function b() { a.apply(this, arguments) }
                        s(b, a);
                        b.prototype.type = function() {
                            return 0
                        };
                        return b
                    }(a.EventTracker);
                    a.PageView = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() {}
                        c.prototype.setUp = function() {
                            c.Pg();
                            c.Og()
                        };
                        c.Og = function() {
                            a.utils.addEventListener(window, "load", c.sa);
                            a.utils.addEventListener(window, "load", c.yg)
                        };
                        c.yg = function(b) {
                            a.lifecycle.vg(b &&
                                b.timeStamp);
                            a.utils.Xa(function() {
                                var b = (new Date).getTime();
                                a.lifecycle.ug(b);
                                a.command("mark", "onload", b);
                                d.Cb.g && (d.perfMonitor.af(), d.perfMonitor.bf());
                                a.command("reportOnload", new a.events.PageView);
                                a.utils.loadScriptAsync(a.conf.adrumExtUrl)
                            });
                            a.log("M17")
                        };
                        c.Pg = function() {
                            if (document.addEventListener) document.addEventListener("DOMContentLoaded", c.ea, !1);
                            else {
                                document.attachEvent("onreadystatechange", c.ea);
                                var b = null;
                                try { b = null === window.frameElement ? document.documentElement : null } catch (d) {}
                                null !=
                                    b && b.doScroll && function q() {
                                        if (!c.isReady) {
                                            try { b.doScroll("left") } catch (a) {
                                                setTimeout(q, 10);
                                                return
                                            }
                                            c.sa()
                                        }
                                    }()
                            }
                            a.log("M18")
                        };
                        c.sa = function(b) { c.Hc || (a.lifecycle.tg(b && b.timeStamp), a.command("mark", "onready", (new Date).getTime()), c.Hc = !0) };
                        c.ea = function(a) { document.addEventListener ? (document.removeEventListener("DOMContentLoaded", c.ea, !1), c.sa(a)) : "complete" === document.readyState && (document.detachEvent("onreadystatechange", c.ea), c.sa(a)) };
                        c.isReady = !1;
                        c.Hc = !1;
                        return c
                    }();
                    d.Id = f;
                    d.hf = new d.Id
                })(a.monitor ||
                    (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function d() { this.navTiming = this.resTiming = null }
                        d.prototype.setUp = function() { d.g = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance };
                        d.prototype.af = function() {
                            var b = d.g;
                            if (b = b && b.timing)
                                if (b.navigationStart && b.navigationStart <= b.loadEventEnd) {
                                    var e = {},
                                        h;
                                    for (h in b) {
                                        var q = b[h];
                                        "number" === typeof q && (e[h] = q)
                                    }
                                    this.navTiming = e
                                } else a.log("M20");
                            else a.log("M19")
                        };
                        d.prototype.bf = function() {
                            this.resTiming =
                                this.mc()
                        };
                        d.prototype.mc = function() {
                            var b = d.g,
                                e = [];
                            b && b.getEntriesByType && (b = b.getEntriesByType("resource")) && b.length && 0 < b.length && b.unshift && (e = b);
                            0 == e.length && a.log("M21");
                            return e
                        };
                        d.g = null;
                        return d
                    }();
                    d.Cb = f;
                    d.perfMonitor = new d.Cb
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                a = a.events || (a.events = {});
                a = a.b || (a.b = {});
                a.navigationStart = "navigationStart";
                a.domainLookupStart = "domainLookupStart";
                a.domainLookupEnd = "domainLookupEnd";
                a.connectStart = "connectStart";
                a.secureConnectionStart = "secureConnectionStart";
                a.connectEnd = "connectEnd";
                a.requestStart = "requestStart";
                a.responseStart = "responseStart";
                a.responseEnd = "responseEnd";
                a.domContentLoadedEventStart = "domContentLoadedEventStart";
                a.loadEventEnd = "loadEventEnd";
                a.$c = "sendTime";
                a.ec = "firstByteTime";
                a.Wc = "respAvailTime";
                a.Xc = "respProcTime";
                a.hb = "viewChangeStart";
                a.od = "viewChangeEnd";
                a.ib = "viewDOMLoaded";
                a.ud = "xhrRequestsCompleted";
                a.$h = "viewFragmentsLoaded";
                a.ai = "viewResourcesLoaded";
                a.jb = "virtualPageStart";
                a.ih = "virtualPageEnd"
            })(g || (g = {}));
            (function(a) {
                a =
                    a.events || (a.events = {});
                a.D = {};
                a.D[0] = {
                    pf: { start: a.b.navigationStart, end: a.b.loadEventEnd, name: "PLT" },
                    vf: { start: a.b.navigationStart, end: a.b.responseStart, name: "FBT" },
                    Wh: { start: a.b.navigationStart, end: a.b.requestStart, name: "SCT" },
                    Xh: { start: a.b.secureConnectionStart, end: a.b.connectEnd, name: "SHT" },
                    Dh: { start: a.b.domainLookupStart, end: a.b.domainLookupEnd, name: "DLT" },
                    Zh: { start: a.b.connectStart, end: a.b.connectEnd, name: "TCP" },
                    Uh: { start: a.b.requestStart, end: a.b.responseStart, name: "RAT" },
                    Fh: {
                        start: a.b.responseStart,
                        end: a.b.loadEventEnd,
                        name: "FET"
                    },
                    Hh: { start: a.b.responseStart, end: a.b.domContentLoadedEventStart, name: "DRT" },
                    xh: { start: a.b.responseStart, end: a.b.responseEnd, name: "DDT" },
                    Bh: { start: a.b.responseEnd, end: a.b.domContentLoadedEventStart, name: "DPT" },
                    Th: { start: a.b.domContentLoadedEventStart, end: a.b.loadEventEnd, name: "PRT" },
                    Ch: { start: a.b.navigationStart, end: a.b.domContentLoadedEventStart, name: "DOM" }
                };
                a.D[2] = {
                    vf: { start: a.b.$c, end: a.b.ec, name: "FBT" },
                    Gh: { start: a.b.ec, end: a.b.Wc, name: "DDT" },
                    wh: {
                        start: a.b.Wc,
                        end: a.b.Xc,
                        name: "DPT"
                    },
                    pf: { start: a.b.$c, end: a.b.Xc, name: "PLT" }
                };
                a.D[3] = {
                    Nh: { start: a.b.jb, end: a.b.ih, name: "PLT" },
                    zh: { start: a.b.hb, end: a.b.od, name: "DDT" },
                    Kh: { start: a.b.hb, end: a.b.ib, name: "DRT" },
                    oh: { start: a.b.od, end: a.b.ib, name: "DPT" },
                    ph: { start: a.b.hb, end: a.b.ib, name: "DOM" },
                    Sh: { start: "viewChangeEnd", end: "xhrRequestsCompleted", name: null },
                    Lh: { start: "viewChangeEnd", end: "viewPartialsLoaded", name: null },
                    Jh: { start: "viewPartialsLoaded", end: "viewFragmentsLoaded", name: null },
                    Mh: {
                        start: "viewPartialsLoaded",
                        end: "viewResourcesLoaded",
                        name: null
                    }
                };
                a.D[102] = a.D[3]
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function(a) {
                        function b(b) { a.call(this, b) }
                        s(b, a);
                        b.prototype.type = function() {
                            return 2
                        };
                        return b
                    }(a.EventTracker);
                    a.Ajax = f;
                    a.Y(a.n[2], f.prototype);
                    a.Rb(a.D[2], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function(a) {
                        function b(b) { a.call(this, b) }
                        s(b, a);
                        b.prototype.type = function() {
                            return 2
                        };
                        return b
                    }(a.Ajax);
                    a.AdrumAjax = f;
                    a.Y(a.n[101], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f =
                        function(d) {
                            function b() {
                                d.call(this);
                                this.conf = null;
                                this.$a = !1;
                                !0 === window["adrum-xhr-disable"] ? a.log("M22") : window.XMLHttpRequest ? (this.conf = { exclude: [{ urls: [{ pattern: a.conf.beaconUrlHttp + a.conf.corsEndpointPath }, { pattern: a.conf.beaconUrlHttps + a.conf.corsEndpointPath }] }], include: [] }, b.Qc(this.conf, a.conf.userConf && a.conf.userConf.xhr), (this.d = window.XMLHttpRequest.prototype) ? "open" in this.d && "send" in this.d ? (this.$a = a.aop.support(this.d.open) && a.aop.support(this.d.send)) || a.log("M26") : a.log("M25") :
                                    a.log("M24")) : a.log("M23")
                            }
                            s(b, d);
                            b.Qc = function(d, h) {
                                h && (h.include = a.utils.sd(h.include), h.exclude = a.utils.sd(h.exclude), a.utils.mergeJSON(d, h));
                                var q = d.exclude;
                                if (q)
                                    for (var m = 0; m < q.length; m++) {
                                        var c = q[m].urls;
                                        c && 0 < c.length && (q[m].urls = b.Yb(c))
                                    }
                                if (q = d.include)
                                    for (m = 0; m < q.length; m++)(c = q[m].urls) && 0 < c.length && (q[m].urls = b.Yb(c))
                            };
                            b.Yb = function(b) {
                                for (var h = [], d = 0; d < b.length; d++) {
                                    var c = b[d].pattern;
                                    if ("string" === typeof c) try { h.push(new RegExp(c)) } catch (f) { a.exception(f, "Parse regex pattern failed.") } else a.error("xhr filter pattern should be a string")
                                }
                                return h
                            };
                            b.dd = function(a, h, d) {
                                var c = d && d.include;
                                d = d && d.exclude;
                                return c && 0 < c.length && !b.Bc(h, a, c) || d && 0 < d.length && b.Bc(h, a, d)
                            };
                            b.prototype.setUp = function() {
                                if (this.$a) {
                                    a.log("M27");
                                    a.xhrConstructor = window.XMLHttpRequest;
                                    a.xhrOpen = this.xhrOpen = this.d.open;
                                    a.xhrSend = this.xhrSend = this.d.send;
                                    var d = this;
                                    this.d.open = a.aop.around(this.d.open, function() {
                                        var h = 1 <= arguments.length ? String(arguments[0]) : "",
                                            q = 2 <= arguments.length ? String(arguments[1]) : "";
                                        b.dd(q, h, d.conf) || (this._adrumAjaxT = new a.events.AdrumAjax(a.utils.mergeJSON({
                                            method: h,
                                            url: q,
                                            xhr: this
                                        }, d.status)))
                                    }, null, "XHR.open");
                                    this.d.send = a.aop.around(this.d.send, function() {
                                        var h = this,
                                            q = h._adrumAjaxT;
                                        if (q) {
                                            var c = a.utils.now(),
                                                f = q.getSendTime();
                                            a.assert(null === f, "M28");
                                            q.timestamp(c);
                                            q.markSendTime(f || c);
                                            q.parentPhase(a.lifecycle.getPhaseName());
                                            b.dg(q.url()) ? h.setRequestHeader("ADRUM", "isAjax:true") : a.log("M29", document.location.href, q.url());
                                            var g = 0,
                                                l = function() {
                                                    if (4 == h.readyState) a.log("M30"), d.xa(h);
                                                    else {
                                                        var q = null;
                                                        try { q = h.onreadystatechange } catch (c) {
                                                            a.log("M31", c);
                                                            d.xa(h);
                                                            return
                                                        }
                                                        g++;
                                                        q ? a.aop.support(q) ? (h.onreadystatechange = d.Zb(q, h, "XHR.onReadyStateChange"), a.log("M32", g)) : (a.log("M33"), d.xa(h)) : g < b.Je ? a.utils.Xa(l) : (a.log("M34"), d.xa(h))
                                                    }
                                                };
                                            l()
                                        }
                                    }, null, "XHR.send");
                                    "addEventListener" in this.d && "removeEventListener" in this.d && a.aop.support(this.d.addEventListener) && a.aop.support(this.d.removeEventListener) ? (this.d.addEventListener = a.aop.around(this.d.addEventListener, this.df(), null, "XHR.addEventListener"), this.d.removeEventListener = a.aop.around(this.d.removeEventListener,
                                        function(b, d) {
                                            if (this._adrumAjaxT) {
                                                var e = Array.prototype.slice.call(arguments);
                                                d.__adrumInterceptor ? (e[1] = d.__adrumInterceptor, a.log("M35")) : a.log("M36");
                                                return e
                                            }
                                        }, null, "XHR.removeEventListener")) : a.log("M37");
                                    a.log("M38")
                                }
                            };
                            b.pg = function(a, b) {
                                for (var d = !1, c = 0; c < b.length; c++) {
                                    var f = b[c];
                                    if (f && f.test(a)) {
                                        d = !0;
                                        break
                                    }
                                }
                                return d
                            };
                            b.Bc = function(a, d, q) {
                                var c = !1;
                                if (d && q)
                                    for (var f = 0; f < q.length; f++) {
                                        var g = q[f];
                                        if (!(g.method && a !== g.method || g.urls && !b.pg(d, g.urls))) {
                                            c = !0;
                                            break
                                        }
                                    }
                                return c
                            };
                            b.dg = function(a) {
                                var b =
                                    document.createElement("a");
                                b.href = a;
                                a = document.location;
                                return ":" === b.protocol && "" === b.hostname && "" === b.port || b.protocol === a.protocol && b.hostname === a.hostname && b.port === a.port
                            };
                            b.sc = function(b) {
                                var d = b._adrumAjaxT;
                                if (d) {
                                    var q = (new Date).getTime();
                                    2 == b.readyState ? d.markFirstByteTime(d.getFirstByteTime() || q) : 4 == b.readyState && (a.assert(null === d.getRespAvailTime(), "M39"), d.markRespAvailTime(d.getRespAvailTime() || q), d.markFirstByteTime(d.getFirstByteTime() || q))
                                }
                            };
                            b.prototype.Zb = function(d, h, q) {
                                return b.mh(d,
                                    function() { b.sc(this) },
                                    function() {
                                        var d = h._adrumAjaxT;
                                        if (d && 4 == h.readyState) {
                                            var e = (new Date).getTime();
                                            a.assert(null === d.getRespProcTime(), "M40");
                                            d.markRespProcTime(d.getRespProcTime() || e);
                                            b.f(h, d)
                                        }
                                    }, q)
                            };
                            b.f = function(b, d) {
                                var q = b.status;
                                if (400 <= q) {
                                    var c = b.responseText;
                                    d.error({ status: q, msg: a.utils.isString(c) ? c : "" })
                                }
                                a.command("reportXhr", d)
                            };
                            b.prototype.xa = function(d) {
                                if (d._adrumAjaxT) {
                                    var h = (new Date).getTime() + 3E4,
                                        q = function() {
                                            b.sc(d);
                                            var c = d._adrumAjaxT;
                                            if (c) {
                                                var f = (new Date).getTime();
                                                4 == d.readyState ?
                                                    (a.assert(null === c.getRespProcTime(), "M41"), c.markRespProcTime(c.markRespProcTime() || f), a.log("M42"), b.f(d, c), delete d._adrumAjaxT) : f < h ? setTimeout(q, b.pb) : (delete d._adrumAjaxT, a.log("M43"))
                                            }
                                        };
                                    q()
                                }
                            };
                            b.mh = function(b, d, c, f) {
                                var g = b;
                                b && "object" === typeof b && "toString" in b && "[xpconnect wrapped nsIDOMEventListener]" === b.toString() && "handleEvent" in b && (g = function() { b.handleEvent.apply(this, Array.prototype.slice.call(arguments)) });
                                return a.aop.around(g, d, c, f)
                            };
                            b.prototype.df = function() {
                                for (var b = 0; b < arguments.length; b++);
                                var d = this;
                                return function(b, e) {
                                    if (("load" === b || "error" === b) && e && this._adrumAjaxT) {
                                        var c;
                                        c = e;
                                        if (c.__adrumInterceptor) c = c.__adrumInterceptor;
                                        else if (a.aop.support(c)) {
                                            var f = d.Zb(c, this, "XHR.invokeEventListener");
                                            c = c.__adrumInterceptor = f
                                        } else c = null;
                                        if (c) return f = Array.prototype.slice.call(arguments), f[1] = c, a.log("M44"), f;
                                        a.log("M45", b, e)
                                    }
                                }
                            };
                            b.Je = 5;
                            b.pb = 50;
                            return b
                        }(d.qb);
                    d.ha = f;
                    d.lb = new d.ha
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    function f(a, b) {
                        var d = [],
                            c = /^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a);
                        if (c) {
                            var f = c[1],
                                c = c[2].replace(/^"|"$/g, ""),
                                c = decodeURIComponent(c).split("|"),
                                g = c[0].split(":");
                            if ("R" === g[0] && Number(g[1]) === b)
                                for (e(f), f = 1; f < c.length; f++) d.push(c[f])
                        }
                        return d
                    }

                    function c(a, b) {
                        var d = /^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a);
                        if (d) {
                            var c = d[1],
                                f = d[4],
                                g = d[5];
                            if (Number(d[3]) === b) return e(c), { index: Number(f), value: g }
                        }
                        return null
                    }

                    function b(b) {
                        var d = /^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b);
                        if (d) {
                            a.log("M48", b);
                            if (3 === d.length) return e("ADRUM"), { startTime: Number(d[1]), startPage: d[2] };
                            a.error("M49", b);
                            return null
                        }
                    }

                    function e(b) {
                        a.log("M47", b);
                        var d = new Date;
                        d.setTime(d.getTime() - 1E3);
                        document.cookie = b + "=;Expires=" + d.toUTCString()
                    }
                    d.startTimeCookie = null;
                    d.cookieMetadataChunks = null;
                    d.ac = function(h, e) {
                        a.log("M46");
                        for (var g = e ? e.length : 0, k = [], p = h.split(";"), l = 0; l < p.length; l++) {
                            var n = p[l],
                                s = c(n, g);
                            s ? k.push(s) : (n = b(n), null != n && (d.startTimeCookie = n))
                        }
                        Array.prototype.sort.call(k, function(a, b) {
                            return a.index - b.index
                        });
                        n = [];
                        for (l = 0; l < k.length; l++) n.push(k[l].value);
                        for (l = 0; l < p.length; l++)(k =
                            f(p[l], g)) && 0 < k.length && (n = n.concat(k));
                        d.cookieMetadataChunks = n
                    };
                    a.correlation.eck = d.ac
                })(a.correlation || (a.correlation = {}))
            })(g || (g = {}));
            (function(a) { a.report = function(d) { a.utils.Xa(function() { a.command("reportEvent", d) }) } })(g || (g = {}));
            (function(a) {
                "APP_KEY_NOT_SET" === a.conf.appKey && "undefined" !== typeof console && "undefined" !== typeof console.log && console.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");
                a.correlation.ac(document.cookie, document.referrer);
                a.command("mark", "firstbyte", window["adrum-start-time"]);
                a.monitor.cd(a.monitor.cc, a.monitor.hf, a.monitor.perfMonitor, a.monitor.lb)
            })(g || (g = {}));
            (function(a) {
                a = a.ng || (a.ng = {});
                a = a.c || (a.c = {});
                a.Fc = "locationChangeStart";
                a.lg = "locationChangeSuccess";
                a.Yc = "routeChangeStart";
                a.Zc = "routeChangeSuccess";
                a.fd = "stateChangeStart";
                a.gd = "stateChangeSuccess";
                a.pd = "viewContentLoaded";
                a.Pf = "includeContentRequested";
                a.Of = "includeContentLoaded";
                a.$b = "digest";
                a.Ph = "outstandingRequestsComplete";
                a.Tb = "beforeNgXhrRequested";
                a.Lb = "afterNgXhrRequested";
                a.Oh = "ngXhrLoaded";
                a.Wb = "$$completeOutstandingRequest"
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    function f(b, e, h, c, f, g) {
                        if (e) try {
                            return e.apply(b, [h, c, f].concat(g))
                        } catch (p) {
                            return b.error(h, c, f, g, a.Error.Qd, "an exception occurred in a caller-provided callback function", p)
                        }
                    }

                    function c(b, e) {
                        return function() {
                            var h = this.current,
                                c = e[h] || e[a.ga] || h,
                                g = Array.prototype.slice.call(arguments);
                            if (this.Ze(b)) return this.error(b, h, c, g, a.Error.Rd, "event " + b + " inappropriate in current state " +
                                this.current);
                            if (!1 === f(this, this["onbefore" + b], b, h, c, g)) return a.fa.mb;
                            c === a.ga && (c = h);
                            if (h === c) return f(this, this["onafter" + b] || this["on" + b], b, h, c, g), a.fa.ue;
                            var k = this;
                            this.transition = function() {
                                k.transition = null;
                                k.current = c;
                                f(k, k["onenter" + c] || k["on" + c], b, h, c, g);
                                f(k, k["onafter" + b] || k["on" + b], b, h, c, g);
                                return a.fa.Ce
                            };
                            if (!1 === f(this, this["onleave" + h], b, h, c, g)) return this.transition = null, a.fa.mb;
                            if (this.transition) return this.transition()
                        }
                    }
                    a.VERSION = "2.3.5";
                    a.fa = { Ce: 1, ue: 2, mb: 3, rh: 4 };
                    a.Error = {
                        Rd: 100,
                        sh: 200,
                        Qd: 300
                    };
                    a.ga = "*";
                    a.create = function(b, e) {
                        function h(b) {
                            var h = b.from instanceof Array ? b.from : b.from ? [b.from] : [a.ga];
                            l[b.name] = l[b.name] || {};
                            for (var e = 0; e < h.length; e++) n[h[e]] = n[h[e]] || [], n[h[e]].push(b.name), l[b.name][h[e]] = b.to || h[e]
                        }
                        var f = "string" == typeof b.initial ? { state: b.initial } : b.initial,
                            g = e || b.target || {},
                            k = b.events || [],
                            p = b.callbacks || {},
                            l = {},
                            n = {};
                        f && (f.event = f.event || "startup", h({ name: f.event, from: "none", to: f.state }));
                        for (var s = 0; s < k.length; s++) h(k[s]);
                        for (var u in l) l.hasOwnProperty(u) &&
                            (g[u] = c(u, l[u]));
                        for (u in p) p.hasOwnProperty(u) && (g[u] = p[u]);
                        g.current = "none";
                        g.Ih = function(a) {
                            return a instanceof Array ? 0 <= a.indexOf(this.current) : this.current === a
                        };
                        g.Ye = function(b) {
                            return !this.transition && (l[b].hasOwnProperty(this.current) || l[b].hasOwnProperty(a.ga))
                        };
                        g.Ze = function(a) {
                            return !this.Ye(a)
                        };
                        g.wa = function() {
                            return n[this.current]
                        };
                        g.error = b.error || function(a, b, d, h, e, c, f) {
                            throw f || c;
                        };
                        if (f && !f.defer) g[f.event]();
                        return g
                    }
                })(a.Fb || (a.Fb = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f =
                        function(c) {
                            function b(b) {
                                c.call(this, b);
                                this.g = new a.za;
                                this.start()
                            }
                            s(b, c);
                            b.prototype.type = function() {
                                return 3
                            };
                            b.prototype.Df = function() {
                                return d.EventTracker.Qb(this.guid(), this.url(), this.type())
                            };
                            b.prototype.ed = function(b) {
                                var d = this.Df();
                                b.set("parent", d);
                                a.log("M50", d.guid(), d.url())
                            };
                            b.prototype.startCorrelatingXhrs = function() {
                                a.log("M51");
                                this.ed(a.monitor.lb)
                            };
                            b.prototype.stopCorrelatingXhrs = function() {
                                a.monitor.lb.set("parent", null);
                                a.log("M52")
                            };
                            b.prototype.Sg = function() {
                                a.log("M53");
                                this.ed(a.monitor.cc)
                            };
                            b.prototype.start = function() {
                                this.markVirtualPageStart();
                                this.startCorrelatingXhrs()
                            };
                            b.prototype.end = function() {
                                this.markVirtualPageEnd();
                                this.stopCorrelatingXhrs()
                            };
                            return b
                        }(d.EventTracker);
                    d.VPageView = f;
                    d.Y(d.n[3], f.prototype);
                    d.Rb(d.D[3], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                var d = a.ng || (a.ng = {}),
                    d = d.conf || (d.conf = {});
                d.disabled = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.disable;
                d.xhr = {};
                d.metrics = { includeResTimingInEndUserResponseTiming: !0 };
                a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.vp && (a.conf.userConf.spa.angular.vp.xhr && a.monitor.ha.Qc(d.xhr, a.conf.userConf.spa.angular.vp.xhr), a.conf.userConf.spa.angular.vp.metrics && a.utils.mergeJSON(d.metrics, a.conf.userConf.spa.angular.vp.metrics))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function(c) {
                        function b(a) {
                            c.call(this, a);
                            this.zc = !0;
                            this.$ = {};
                            this.W = 0;
                            this.stopCorrelatingXhrs()
                        }
                        s(b, c);
                        b.prototype.type =
                            function() {
                                return 3
                            };
                        b.prototype.jb = function() {
                            this.markViewChangeStart();
                            this.markVirtualPageStart(this.getViewChangeStart());
                            this.timestamp(this.getViewChangeStart())
                        };
                        b.prototype.qf = function(b) {
                            var d = this.identifier();
                            b = b.identifier();
                            var c = !1;
                            return c = !a.utils.isDefined(d) && !a.utils.isDefined(b) || d === b ? !0 : a.utils.isDefined(d) && a.utils.isDefined(b) ? d.state || b.state ? a.utils.isDefined(d.state) && a.utils.isDefined(b.state) ? d.state.name === b.state.name && d.state.aa === b.state.aa && d.state.ba === b.state.ba &&
                                d.state.url === b.state.url : !1 : d.h && b.h ? d.h.Qa === b.h.Qa && d.h.aa === b.h.aa && d.h.ba === b.h.ba : d.url === b.url : !1
                        };
                        b.prototype.Qf = function() { this.digestCount(this.digestCount() + 1) };
                        b.prototype.Rf = function() {
                            this.W++;
                            a.log("increasing xhr count " + this.W + " pending xhr requests")
                        };
                        b.prototype.ff = function() {
                            this.W--;
                            a.log("decreasing xhr count " + this.W + " pending xhr requests")
                        };
                        b.prototype.Lf = function() {
                            a.log("xhrCount " + this.W + " xhrReuqestCompleted " + this.g.B(a.events.b.ud));
                            return 0 < this.W
                        };
                        b.prototype.Ve = function() {
                            var a = { va: 0 },
                                d = document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]");
                            if (d && 0 < d.length)
                                for (var c in b.Vc)
                                    for (var f = 0; f < d.length; f++) {
                                        var g = angular.element(d[f]).find(c);
                                        if (0 < g.length)
                                            for (var p = 0; p < g.length; p++) {
                                                var l = g[p][b.Vc[c].bb];
                                                (l = l ? decodeURIComponent(l) : null) && !a[l] && (a[l] = c, a.va++)
                                            }
                                    }
                            this.$ = a
                        };
                        b.prototype.Ue = function(a) {
                            return !!this.$[decodeURIComponent(a.name)]
                        };
                        b.prototype.We = function() {
                            var b = [],
                                d = this;
                            0 < this.$.va && (b = a.monitor.perfMonitor.mc().filter(function(a) {
                                return d.Ue(a)
                            }));
                            this.resTiming(b)
                        };
                        b.sf = function(b) {
                            for (var h = [], c = 0; c < b.length; c++) {
                                var f = b[c];
                                2 !== b[c].eventType && 101 !== b[c].eventType || a.monitor.ha.dd(f.eventUrl, f.method, d.conf.xhr) || h.push(b[c])
                            }
                            return h
                        };
                        b.Ef = function(a) {
                            var b, d, c = -1;
                            b = 0;
                            for (d = a.length; b < d; b++) c = Math.max(c, a[b].timestamp + a[b].metrics.PLT);
                            return c
                        };
                        b.prototype.Pe = function() {
                            if (d.conf.xhr) {
                                var c = b.sf(a.channel.getEventsWithParentGUID(this.guid())),
                                    c = b.Ef(c);
                                if (0 < c) {
                                    var h = this.g.B(a.events.b.ud);
                                    this.markXhrRequestsCompleted(Math.min(h && h.startTime ||
                                        Number.MAX_VALUE, c))
                                }
                            }
                        };
                        b.prototype.adjustTimings = function() {
                            this.Pe();
                            var b = this.getViewDOMLoaded(),
                                h = this.getXhrRequestsCompleted(),
                                b = Math.max(b, h);
                            d.conf.metrics.includeResTimingInEndUserResponseTiming && (this.Oe(), h = this.getViewResourcesLoaded(), h = Math.max(b, h), a.log("adjust this.end from %s to %s", b, h), b = h);
                            this.markVirtualPageEnd(b)
                        };
                        b.prototype.Oe = function() {
                            if (0 < this.$.va) {
                                this.We();
                                var b = this.resTiming();
                                if (b && b.length >= this.$.va) {
                                    for (var d = [], c = 0; c < b.length; c++) d.push(b[c].responseEnd);
                                    b =
                                        Math.max.apply(Math, d);
                                    this.markViewResourcesLoaded(a.za.ka(b))
                                }
                            }
                        };
                        b.prototype.identifier = function(d) {
                            var c = this.rd;
                            a.utils.isDefined(d) && (this.rd = b.rf(d), this.url(this.rd.url));
                            return c
                        };
                        b.rf = function(b) {
                            var d = {};
                            b && b.h ? (d.h = { Qa: "" }, a.utils.mergeJSON(d.h, { Qa: b.h.originalPath, aa: b.h.template, ba: b.h.templateUrl })) : b && b.state && (d.state = { url: "" }, a.utils.mergeJSON(d.state, { url: b.state.url, name: b.state.name, aa: b.state.template, ba: b.state.templateUrl }));
                            return d
                        };
                        b.Vc = {
                            img: { bb: "src" },
                            script: { bb: "src" },
                            link: { bb: "href" }
                        };
                        return b
                    }(a.events.VPageView);
                    d.NgVPageView = f;
                    a.events.Y(a.events.n[102], f.prototype)
                })(a.ng || (a.ng = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() { this.e = new d.NgVPageView }
                        c.prototype.Ig = function() {
                            var b = this;
                            d.conf.metrics.includeResTimingInEndUserResponseTiming ? (a.log("M54"), setTimeout(function() { b.Ta() }, c.Ee)) : setTimeout(function() { b.Ta() }, c.Fe)
                        };
                        c.prototype.Ta = function() {
                            a.log("M55");
                            var b = this.e;
                            a.command("call", function() {
                                b.adjustTimings();
                                a.reporter.reportEvent(b)
                            })
                        };
                        c.prototype.Ng = function(a) { this.e = a };
                        c.Ee = 5E3;
                        c.Fe = 2 * a.monitor.ha.pb;
                        return c
                    }();
                    d.VirtualPageStateMachine = f;
                    a.Fb.create({
                        events: [{ name: "start", from: "none", to: "ChangeView" }, { name: "viewLoaded", from: "ChangeView", to: "XhrPending" }, { name: "xhrCompleted", from: "XhrPending", to: "End" }, { name: "abort", from: "*", to: "none" }, { name: "init", from: "*", to: "none" }, { name: "locChange", from: "*", to: "*" }, { name: "beforeXhrReq", from: "*", to: "*" }, { name: "afterXhrReq", from: "*", to: "*" }],
                        error: function(d) { a.log("M56" + d) },
                        callbacks: {
                            onChangeView: function() {
                                this.e.jb();
                                this.e.Sg()
                            },
                            onviewLoaded: function() { this.e.markViewDOMLoaded() },
                            onXhrPending: function() { this.e.zc && this.xhrCompleted() },
                            onleaveXhrPending: function(a, b, d) {
                                if ("abort" === a) return this.Ta(), !0;
                                if ("xhrCompleted" === a && "End" === d) {
                                    if (this.e.Lf()) return !1;
                                    this.e.markXhrRequestsCompleted();
                                    return !0
                                }
                            },
                            onEnd: function() {
                                this.e.Ve();
                                this.Ig()
                            },
                            oninit: function(a, b, d, h) { this.Ng(h) },
                            onlocChange: function(a, b, d, h) { this.e.identifier.url = h },
                            onbeforeXhrReq: function(d, b, f, h) {
                                var g = this.e;
                                g.zc = !1;
                                a.log("M57", h && h[1] || "",
                                    g.guid());
                                g.Rf();
                                g.startCorrelatingXhrs();
                                h[3] && (h[3] = a.aop.before(h[3], function(b, d, c) {
                                    a.log("M58");
                                    g.ff();
                                    c && (b = a.utils.Bg(c)["content-type"]) && 0 <= b.indexOf("text/html") && g.markViewFragmentsLoaded()
                                }));
                                return h
                            },
                            onafterXhrReq: function() { this.e.stopCorrelatingXhrs() }
                        }
                    }, f.prototype)
                })(a.ng || (a.ng = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() { this.l = new d.VirtualPageStateMachine }
                        c.prototype.j = function(b, c) {
                            a.log("M59", b);
                            switch (b) {
                                case d.c.Yc:
                                case d.c.fd:
                                    this.l.start();
                                    var h = new d.NgVPageView({ url: c.next.url, identifier: c.next });
                                    this.l.e.qf(h) ? this.l.e.bd({ url: c.next.url, identifier: c.next }) : this.Xg(h);
                                    break;
                                case d.c.Zc:
                                case d.c.gd:
                                    this.l.e.markViewChangeEnd();
                                    break;
                                case d.c.pd:
                                    this.l.viewLoaded();
                                    break;
                                case d.c.Tb:
                                    this.l.beforeXhrReq(c);
                                    break;
                                case d.c.Lb:
                                    this.l.afterXhrReq();
                                    break;
                                case d.c.Wb:
                                    this.l.xhrCompleted();
                                    break;
                                case d.c.Fc:
                                    this.l.locChange(c.next.url);
                                    break;
                                case d.c.$b:
                                    this.l.e.Qf()
                            }
                        };
                        c.prototype.Xg = function(a) {
                            this.l.abort();
                            this.l.init(a);
                            this.l.start()
                        };
                        return c
                    }();
                    d.He = f
                })(a.ng || (a.ng = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() { this.k = new d.He }
                        c.prototype.setUp = function() {
                            var b = this;
                            a.utils.addEventListener(document, "DOMContentLoaded", function() {
                                a.log("M60");
                                b.init()
                            })
                        };
                        c.prototype.init = function() {
                            if ("undefined" != typeof angular) {
                                a.log("M61");
                                var b = this,
                                    d = angular.module("ng");
                                d.config(["$provide", function(a) {
                                    b.Wf(a);
                                    b.Vf(a)
                                }]);
                                d.run(["$browser", function(a) { b.Uf(a) }]);
                                a.log("M62")
                            }
                        };
                        c.prototype.Vf = function(b) {
                            var c = a.aop,
                                h = this;
                            b.decorator("$httpBackend", ["$delegate", function(a) {
                                return a = c.around(a, function() {
                                    var a = Array.prototype.slice.call(arguments);
                                    h.k.j(d.c.Tb, a);
                                    return a
                                }, function() { h.k.j(d.c.Lb) })
                            }])
                        };
                        c.prototype.Wf = function(b) {
                            var c = a.aop,
                                h = this;
                            b.decorator("$rootScope", ["$delegate", function(a) {
                                a.$digest = c.after(a.$digest, function() { h.k.j(d.c.$b) });
                                a.$on("$locationChangeStart", function(a, b) {
                                    var c = { url: b },
                                        f = a && a.Z && a.Z.$state && a.Z.$state.current;
                                    f && (c.state = f);
                                    h.k.j(d.c.Fc, { next: c })
                                });
                                a.$on("$locationChangeSuccess",
                                    function() { h.k.j(d.c.lg) });
                                a.$on("$routeChangeStart", function(a, b) {
                                    var c = { url: location.href },
                                        f = b && b.$$route;
                                    f && (c.h = f);
                                    h.k.j(d.c.Yc, { next: c })
                                });
                                a.$on("$routeChangeSuccess", function() { h.k.j(d.c.Zc) });
                                a.$on("$stateChangeStart", function(a, b) { h.k.j(d.c.fd, { next: { state: b } }) });
                                a.$on("$stateChangeSuccess", function() { h.k.j(d.c.gd) });
                                a.$on("$viewContentLoaded", function(a) {
                                    var b = { url: location.href };
                                    if (a = a && a.Z && a.Z.$state && a.Z.$state.current) b.state = a;
                                    h.k.j(d.c.pd, { next: b })
                                });
                                a.$on("$includeContentRequested",
                                    function() { h.k.j(d.c.Pf) });
                                a.$on("$includeContentLoaded", function() { h.k.j(d.c.Of) });
                                return a
                            }])
                        };
                        c.prototype.Uf = function(b) {
                            var c = this;
                            b.$$completeOutstandingRequest = a.aop.before(b.$$completeOutstandingRequest, function() { c.k.j(d.c.Wb) })
                        };
                        return c
                    }();
                    d.nh = f;
                    d.ngMonitor = new f
                })(a.ng || (a.ng = {}))
            })(g || (g = {}));
            (function(a) {
                var d = a.ng || (a.ng = {});
                d.conf.disabled || a.monitor.cd(d.ngMonitor)
            })(g || (g = {}))
        }
    };
})();