(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        6541: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 8774))
        },
        8774: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n(7437),
                a = n(2265);

            function i(e, t, n) {
                var r;
                return (t = "symbol" == typeof(r = function(e, t) {
                    if ("object" != typeof e || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string")) ? r : r + "") in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        i(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var s = function(e) {
                var t = e.children,
                    n = e.lines,
                    r = void 0 !== n && n,
                    l = e.linear,
                    s = e.className,
                    c = e.style;
                a.useEffect(function() {
                    document.querySelectorAll(".fade-in .fade-element").forEach(function(e, t) {
                        e.style.setProperty("--delay", "".concat(1 + .05 * t, "s"))
                    })
                }, [t]);
                var d = o({
                        display: "inline-block"
                    }, void 0 === c ? {} : c),
                    m = i(i(i({
                        fontSize: "56px",
                        lineHeight: "62px",
                        fontWeight: 500,
                        maxWidth: "750px",
                        color: "#F7F8F8"
                    }, "fontWeight", "500"), "fontFamily", "Inter, sans-serif"), "letterSpacing", "-1.8px"),
                    p = {};
                void 0 !== l && l && (p = r ? {
                    fontSize: "21px",
                    lineHeight: "28px",
                    fontWeight: "400",
                    color: "#B4B5B5",
                    maxWidth: "600px",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "-0.4px"
                } : m);
                var u = o({
                    opacity: 0,
                    filter: "blur(10px)",
                    transform: "translateY(20px)",
                    animationName: "fadeIn",
                    animationDuration: "0.7s",
                    animationTimingFunction: "ease-in-out",
                    animationFillMode: "forwards",
                    animationDelay: "var(--delay)",
                    display: "inline-block"
                }, p);
                return a.createElement("div", {
                    className: "fade-in ".concat(void 0 === s ? "" : s),
                    style: d
                }, a.createElement("style", null, "\n    @keyframes fadeIn {\n      to {\n        opacity: 1;\n        filter: blur(0);\n        transform: translateY(0);\n      }\n    }\n  "), r ? a.Children.toArray(t).map(function(e, t) {
                    return a.createElement("span", {
                        key: t,
                        className: "fade-element",
                        style: u
                    }, e, a.createElement("br", null))
                }) : a.Children.toArray(t).join("").split(" ").filter(function(e) {
                    return "" !== e
                }).map(function(e, t) {
                    return a.createElement("span", {
                        key: t,
                        className: "fade-element",
                        style: u
                    }, e, "\xa0")
                }))
            };

            function c() {
                let e = '"use client"\n\nimport { ContributionCalendar } from \'animated-contribution-heatmap\';\n\nexport default function Home() {\n  return (\n    <div className="h-screen bg-black gap-1 flex flex-col px-10 py-40">\n      <h1 className="text-4xl font-bold text-white mb-4">\n        Animated contribution Heatmap\n      </h1>\n      <p className="text-xl text-gray-300 mb-2">\n       A beautiful, interactive contribution heatmap calendar with 8 animation patterns\n      </p>\n      <p className="text-xl text-gray-300 mb-8">\n        Click on the letters in "Activity" to trigger different animations!\n      </p>\n      <ContributionCalendar\n        githubToken={process.env.NEXT_PUBLIC_GITHUB_TOKEN}\n        username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}\n        theme="dark"\n      />\n    </div>\n  );\n}\n',
                    [t, n] = (0, a.useState)(!1),
                    [i, l] = (0, a.useState)(!1),
                    [o, c] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let e = setTimeout(() => {
                        l(!0)
                    }, 2e3);
                    return () => clearTimeout(e)
                }, []), (0, a.useEffect)(() => {
                    let e = () => {
                        c(window.innerWidth < 640)
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), (0, a.useEffect)(() => {
                    let e = document.createElement("style");
                    return e.type = "text/css", e.innerText = "\n      @keyframes fade-in {\n        from {\n          opacity: 0;\n          transform: translate(1rem, 1rem); /* Start slightly below and to the right */\n        }\n        to {\n          opacity: 1;\n          transform: translate(0, 0); /* End at normal position */\n        }\n      }\n\n      .animate-fade-in {\n        animation: fade-in 0.7s forwards; /* 0.7 seconds for the animation */\n      }\n    ", document.head.appendChild(e), () => {
                        document.head.removeChild(e)
                    }
                }, []), (0, r.jsxs)("div", {
                    className: "items-center sm:items-start h-screen bg-black gap-1 flex flex-col px-10 py-20 sm:py-40 relative",
                    children: [(0, r.jsx)(s, {
                        linear: !0,
                        className: "text-center sm:text-left md:w-[800px] sm:w-[600px] w-[350px] mb-3 xl:ml-40 transition-all",
                        children: o ? "GraphMotion" : "GraphMotion is an npm package that animates GitHub contribution graphs beautifully"
                    }), (0, r.jsx)(s, {
                        className: "text-center sm:text-left max-w-[300px] sm:max-w-[1000px] xl:ml-40 transition-all",
                        linear: !0,
                        lines: !0,
                        children: o ? "A playful, interactive twist on GitHub's classic heatmap." : "A playful, interactive twist on GitHub's classic heatmap."
                    }), o ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsx)(s, {
                        className: "text-center sm:text-left max-w-[300px] sm:max-w-[1000px] xl:ml-40 transition-all",
                        linear: !0,
                        lines: !0,
                        children: "Trigger unique animations by clicking letters."
                    }), i && (0, r.jsxs)("div", {
                        className: "absolute bottom-0 right-0 m-4 p-3 bg-black backdrop-blur bg-opacity-50 outline outline-neutral-800 text-neutral-400 text-xs rounded shadow-lg w-1000 box-border sm:w-1/2 max-w-[600px] max-h-[330px] h-1/3 sm:h-1/2 overflow-y-auto transform transition-all duration-700 translate-x-5 translate-y-5 opacity-0 animate-fade-in",
                        children: [(0, r.jsx)("pre", {
                            className: "whitespace-pre-wrap",
                            children: (0, r.jsx)("code", {
                                children: e
                            })
                        }), (0, r.jsx)("div", {
                            className: "absolute top-0 right-0 px-3 py-2 m-2 outline outline-neutral-800 transition-all rounded hover:bg-neutral-900 cursor-pointer",
                            onClick: () => {
                                navigator.clipboard.writeText(e).then(() => {
                                    n(!0), setTimeout(() => n(!1), 2e3)
                                })
                            },
                            children: t ? "Copied!" : "Copy code"
                        })]
                    })]
                })
            }! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        a = document.createElement("style");
                    a.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
                }
            }("@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\n")
        }
    },
    function(e) {
        e.O(0, [971, 117, 744], function() {
            return e(e.s = 6541)
        }), _N_E = e.O()
    }
]);