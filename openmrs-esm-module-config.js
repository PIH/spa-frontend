System.register(["react"], function (t) {
  var n;
  return {
    setters: [
      function (t) {
        n = t;
      },
    ],
    execute: function () {
      t(
        (function (t) {
          var n = {};
          function r(e) {
            if (n[e]) return n[e].exports;
            var o = (n[e] = { i: e, l: !1, exports: {} });
            return t[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
          }
          return (
            (r.m = t),
            (r.c = n),
            (r.d = function (t, n, e) {
              r.o(t, n) ||
                Object.defineProperty(t, n, { enumerable: !0, get: e });
            }),
            (r.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (r.t = function (t, n) {
              if ((1 & n && (t = r(t)), 8 & n)) return t;
              if (4 & n && "object" == typeof t && t && t.__esModule) return t;
              var e = Object.create(null);
              if (
                (r.r(e),
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & n && "string" != typeof t)
              )
                for (var o in t)
                  r.d(
                    e,
                    o,
                    function (n) {
                      return t[n];
                    }.bind(null, o)
                  );
              return e;
            }),
            (r.n = function (t) {
              var n =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return r.d(n, "a", n), n;
            }),
            (r.o = function (t, n) {
              return Object.prototype.hasOwnProperty.call(t, n);
            }),
            (r.p = ""),
            r((r.s = 30))
          );
        })([
          function (t, n, r) {
            var e = r(1),
              o = r(2);
            t.exports = function (t) {
              return function n(r, u) {
                switch (arguments.length) {
                  case 0:
                    return n;
                  case 1:
                    return o(r)
                      ? n
                      : e(function (n) {
                          return t(r, n);
                        });
                  default:
                    return o(r) && o(u)
                      ? n
                      : o(r)
                      ? e(function (n) {
                          return t(n, u);
                        })
                      : o(u)
                      ? e(function (n) {
                          return t(r, n);
                        })
                      : t(r, u);
                }
              };
            };
          },
          function (t, n, r) {
            var e = r(2);
            t.exports = function (t) {
              return function n(r) {
                return 0 === arguments.length || e(r)
                  ? n
                  : t.apply(this, arguments);
              };
            };
          },
          function (t, n) {
            t.exports = function (t) {
              return (
                null != t &&
                "object" == typeof t &&
                !0 === t["@@functional/placeholder"]
              );
            };
          },
          function (t, n, r) {
            var e = r(1),
              o = r(0),
              u = r(2);
            t.exports = function (t) {
              return function n(r, c, i) {
                switch (arguments.length) {
                  case 0:
                    return n;
                  case 1:
                    return u(r)
                      ? n
                      : o(function (n, e) {
                          return t(r, n, e);
                        });
                  case 2:
                    return u(r) && u(c)
                      ? n
                      : u(r)
                      ? o(function (n, r) {
                          return t(n, c, r);
                        })
                      : u(c)
                      ? o(function (n, e) {
                          return t(r, n, e);
                        })
                      : e(function (n) {
                          return t(r, c, n);
                        });
                  default:
                    return u(r) && u(c) && u(i)
                      ? n
                      : u(r) && u(c)
                      ? o(function (n, r) {
                          return t(n, r, i);
                        })
                      : u(r) && u(i)
                      ? o(function (n, r) {
                          return t(n, c, r);
                        })
                      : u(c) && u(i)
                      ? o(function (n, e) {
                          return t(r, n, e);
                        })
                      : u(r)
                      ? e(function (n) {
                          return t(n, c, i);
                        })
                      : u(c)
                      ? e(function (n) {
                          return t(r, n, i);
                        })
                      : u(i)
                      ? e(function (n) {
                          return t(r, c, n);
                        })
                      : t(r, c, i);
                }
              };
            };
          },
          function (t, n) {
            t.exports = function (t, n) {
              switch (t) {
                case 0:
                  return function () {
                    return n.apply(this, arguments);
                  };
                case 1:
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                case 2:
                  return function (t, r) {
                    return n.apply(this, arguments);
                  };
                case 3:
                  return function (t, r, e) {
                    return n.apply(this, arguments);
                  };
                case 4:
                  return function (t, r, e, o) {
                    return n.apply(this, arguments);
                  };
                case 5:
                  return function (t, r, e, o, u) {
                    return n.apply(this, arguments);
                  };
                case 6:
                  return function (t, r, e, o, u, c) {
                    return n.apply(this, arguments);
                  };
                case 7:
                  return function (t, r, e, o, u, c, i) {
                    return n.apply(this, arguments);
                  };
                case 8:
                  return function (t, r, e, o, u, c, i, f) {
                    return n.apply(this, arguments);
                  };
                case 9:
                  return function (t, r, e, o, u, c, i, f, a) {
                    return n.apply(this, arguments);
                  };
                case 10:
                  return function (t, r, e, o, u, c, i, f, a, s) {
                    return n.apply(this, arguments);
                  };
                default:
                  throw new Error(
                    "First argument to _arity must be a non-negative integer no greater than ten"
                  );
              }
            };
          },
          function (t, n) {
            t.exports = function (t, n) {
              return Object.prototype.hasOwnProperty.call(n, t);
            };
          },
          function (t, r) {
            t.exports = n;
          },
          function (t, n, r) {
            var e = r(13),
              o = r(15),
              u = r(16);
            function c(t, n, r) {
              for (var e = r.next(); !e.done; ) {
                if (
                  (n = t["@@transducer/step"](n, e.value)) &&
                  n["@@transducer/reduced"]
                ) {
                  n = n["@@transducer/value"];
                  break;
                }
                e = r.next();
              }
              return t["@@transducer/result"](n);
            }
            function i(t, n, r, e) {
              return t["@@transducer/result"](
                r[e](u(t["@@transducer/step"], t), n)
              );
            }
            var f =
              "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
            t.exports = function (t, n, r) {
              if (("function" == typeof t && (t = o(t)), e(r)))
                return (function (t, n, r) {
                  for (var e = 0, o = r.length; e < o; ) {
                    if (
                      (n = t["@@transducer/step"](n, r[e])) &&
                      n["@@transducer/reduced"]
                    ) {
                      n = n["@@transducer/value"];
                      break;
                    }
                    e += 1;
                  }
                  return t["@@transducer/result"](n);
                })(t, n, r);
              if ("function" == typeof r["fantasy-land/reduce"])
                return i(t, n, r, "fantasy-land/reduce");
              if (null != r[f]) return c(t, n, r[f]());
              if ("function" == typeof r.next) return c(t, n, r);
              if ("function" == typeof r.reduce) return i(t, n, r, "reduce");
              throw new TypeError("reduce: list must be array or iterable");
            };
          },
          function (t, n) {
            t.exports =
              Array.isArray ||
              function (t) {
                return (
                  null != t &&
                  t.length >= 0 &&
                  "[object Array]" === Object.prototype.toString.call(t)
                );
              };
          },
          function (t, n, r) {
            var e = r(3)(r(7));
            t.exports = e;
          },
          function (t, n, r) {
            var e = r(0),
              o = r(17),
              u = e(function (t, n) {
                return o(
                  function (t, n, r) {
                    return r;
                  },
                  t,
                  n
                );
              });
            t.exports = u;
          },
          function (t, n, r) {
            var e = r(0),
              o = r(20),
              u = r(22),
              c = r(7),
              i = r(23),
              f = r(25),
              a = r(27),
              s = e(
                o(["fantasy-land/map", "map"], i, function (t, n) {
                  switch (Object.prototype.toString.call(n)) {
                    case "[object Function]":
                      return f(n.length, function () {
                        return t.call(this, n.apply(this, arguments));
                      });
                    case "[object Object]":
                      return c(
                        function (r, e) {
                          return (r[e] = t(n[e])), r;
                        },
                        {},
                        a(n)
                      );
                    default:
                      return u(t, n);
                  }
                })
              );
            t.exports = s;
          },
          function (t, n, r) {
            var e = r(0),
              o = r(29),
              u = e(function (t, n) {
                return o([t], n);
              });
            t.exports = u;
          },
          function (t, n, r) {
            var e = r(1),
              o = r(8),
              u = r(14),
              c = e(function (t) {
                return (
                  !!o(t) ||
                  (!!t &&
                    "object" == typeof t &&
                    !u(t) &&
                    (1 === t.nodeType
                      ? !!t.length
                      : 0 === t.length ||
                        (t.length > 0 &&
                          t.hasOwnProperty(0) &&
                          t.hasOwnProperty(t.length - 1))))
                );
              });
            t.exports = c;
          },
          function (t, n) {
            t.exports = function (t) {
              return "[object String]" === Object.prototype.toString.call(t);
            };
          },
          function (t, n) {
            var r = (function () {
              function t(t) {
                this.f = t;
              }
              return (
                (t.prototype["@@transducer/init"] = function () {
                  throw new Error("init not implemented on XWrap");
                }),
                (t.prototype["@@transducer/result"] = function (t) {
                  return t;
                }),
                (t.prototype["@@transducer/step"] = function (t, n) {
                  return this.f(t, n);
                }),
                t
              );
            })();
            t.exports = function (t) {
              return new r(t);
            };
          },
          function (t, n, r) {
            var e = r(4),
              o = r(0)(function (t, n) {
                return e(t.length, function () {
                  return t.apply(n, arguments);
                });
              });
            t.exports = o;
          },
          function (t, n, r) {
            var e = r(3),
              o = r(18),
              u = r(19),
              c = e(function t(n, r, e) {
                return u(
                  function (r, e, u) {
                    return o(e) && o(u) ? t(n, e, u) : n(r, e, u);
                  },
                  r,
                  e
                );
              });
            t.exports = c;
          },
          function (t, n) {
            t.exports = function (t) {
              return "[object Object]" === Object.prototype.toString.call(t);
            };
          },
          function (t, n, r) {
            var e = r(3),
              o = r(5),
              u = e(function (t, n, r) {
                var e,
                  u = {};
                for (e in n)
                  o(e, n) && (u[e] = o(e, r) ? t(e, n[e], r[e]) : n[e]);
                for (e in r) o(e, r) && !o(e, u) && (u[e] = r[e]);
                return u;
              });
            t.exports = u;
          },
          function (t, n, r) {
            var e = r(8),
              o = r(21);
            t.exports = function (t, n, r) {
              return function () {
                if (0 === arguments.length) return r();
                var u = Array.prototype.slice.call(arguments, 0),
                  c = u.pop();
                if (!e(c)) {
                  for (var i = 0; i < t.length; ) {
                    if ("function" == typeof c[t[i]])
                      return c[t[i]].apply(c, u);
                    i += 1;
                  }
                  if (o(c)) {
                    var f = n.apply(null, u);
                    return f(c);
                  }
                }
                return r.apply(this, arguments);
              };
            };
          },
          function (t, n) {
            t.exports = function (t) {
              return null != t && "function" == typeof t["@@transducer/step"];
            };
          },
          function (t, n) {
            t.exports = function (t, n) {
              for (var r = 0, e = n.length, o = Array(e); r < e; )
                (o[r] = t(n[r])), (r += 1);
              return o;
            };
          },
          function (t, n, r) {
            var e = r(0),
              o = r(24),
              u = (function () {
                function t(t, n) {
                  (this.xf = n), (this.f = t);
                }
                return (
                  (t.prototype["@@transducer/init"] = o.init),
                  (t.prototype["@@transducer/result"] = o.result),
                  (t.prototype["@@transducer/step"] = function (t, n) {
                    return this.xf["@@transducer/step"](t, this.f(n));
                  }),
                  t
                );
              })(),
              c = e(function (t, n) {
                return new u(t, n);
              });
            t.exports = c;
          },
          function (t, n) {
            t.exports = {
              init: function () {
                return this.xf["@@transducer/init"]();
              },
              result: function (t) {
                return this.xf["@@transducer/result"](t);
              },
            };
          },
          function (t, n, r) {
            var e = r(4),
              o = r(1),
              u = r(0),
              c = r(26),
              i = u(function (t, n) {
                return 1 === t ? o(n) : e(t, c(t, [], n));
              });
            t.exports = i;
          },
          function (t, n, r) {
            var e = r(4),
              o = r(2);
            t.exports = function t(n, r, u) {
              return function () {
                for (
                  var c = [], i = 0, f = n, a = 0;
                  a < r.length || i < arguments.length;

                ) {
                  var s;
                  a < r.length && (!o(r[a]) || i >= arguments.length)
                    ? (s = r[a])
                    : ((s = arguments[i]), (i += 1)),
                    (c[a] = s),
                    o(s) || (f -= 1),
                    (a += 1);
                }
                return f <= 0 ? u.apply(this, c) : e(f, t(n, c, u));
              };
            };
          },
          function (t, n, r) {
            var e = r(1),
              o = r(5),
              u = r(28),
              c = !{ toString: null }.propertyIsEnumerable("toString"),
              i = [
                "constructor",
                "valueOf",
                "isPrototypeOf",
                "toString",
                "propertyIsEnumerable",
                "hasOwnProperty",
                "toLocaleString",
              ],
              f = (function () {
                "use strict";
                return arguments.propertyIsEnumerable("length");
              })(),
              a = function (t, n) {
                for (var r = 0; r < t.length; ) {
                  if (t[r] === n) return !0;
                  r += 1;
                }
                return !1;
              },
              s =
                "function" != typeof Object.keys || f
                  ? e(function (t) {
                      if (Object(t) !== t) return [];
                      var n,
                        r,
                        e = [],
                        s = f && u(t);
                      for (n in t)
                        !o(n, t) || (s && "length" === n) || (e[e.length] = n);
                      if (c)
                        for (r = i.length - 1; r >= 0; )
                          o((n = i[r]), t) && !a(e, n) && (e[e.length] = n),
                            (r -= 1);
                      return e;
                    })
                  : e(function (t) {
                      return Object(t) !== t ? [] : Object.keys(t);
                    });
            t.exports = s;
          },
          function (t, n, r) {
            var e = r(5),
              o = Object.prototype.toString,
              u = (function () {
                return "[object Arguments]" === o.call(arguments)
                  ? function (t) {
                      return "[object Arguments]" === o.call(t);
                    }
                  : function (t) {
                      return e("callee", t);
                    };
              })();
            t.exports = u;
          },
          function (t, n, r) {
            var e = r(0)(function (t, n) {
              for (var r = n, e = 0; e < t.length; ) {
                if (null == r) return;
                (r = r[t[e]]), (e += 1);
              }
              return r;
            });
            t.exports = e;
          },
          function (t, n, r) {
            "use strict";
            r.r(n);
            var e = r(12),
              o = r.n(e),
              u = r(11),
              c = r.n(u),
              i = r(10),
              f = r.n(i),
              a = r(9),
              s = r.n(a);
            const l = [],
              p = {};
            function y(t, n) {
              p[t] = n;
            }
            function h(t) {
              l.push(t);
            }
            let d;
            async function g(t) {
              return (
                d ||
                  (d = (async function () {
                    let t;
                    try {
                      System.resolve("config-file"), (t = !0);
                    } catch (n) {
                      t = !1;
                    }
                    if (t)
                      try {
                        const t = await System.import("config-file");
                        l.unshift(t.default);
                      } catch (t) {
                        throw Error("Problem importing config-file: " + t);
                      }
                  })()),
                await d,
                (function (t) {
                  if (!p.hasOwnProperty(t))
                    throw Error("No config schema has been defined for " + t);
                  const n = p[t],
                    r = s()(f.a, {}),
                    e = c()(o()(t), l),
                    u = r(e);
                  !(function n(r, e) {
                    let o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "";
                    for (let [u, c] of Object.entries(e)) {
                      const e = o + u;
                      if (!r.hasOwnProperty(u))
                        throw Error(
                          "Unknown config key '"
                            .concat(e, "' provided for module ")
                            .concat(t, ". Please see the config schema for ")
                            .concat(t, ".")
                        );
                      if ("object" == typeof c && null !== c) {
                        n(r[u], c, e + ".");
                      } else if (r[u].validators)
                        for (let t of r[u].validators) {
                          const n = t(c);
                          if ("string" == typeof n)
                            throw Error(
                              "Invalid configuration value "
                                .concat(c, " for ")
                                .concat(e, ": ")
                                .concat(n)
                            );
                        }
                    }
                  })(n, u);
                  const i = (t, n) => {
                    for (let r of Object.keys(t))
                      if (t[r].hasOwnProperty("default"))
                        n.hasOwnProperty(r) || (n[r] = t[r].default);
                      else {
                        const e = t[r],
                          o = n.hasOwnProperty(r) ? n[r] : {};
                        n[r] = i(e, o);
                      }
                    return n;
                  };
                  return i(n, u);
                })(t)
              );
            }
            var v = r(6),
              b = r.n(v);
            const x = b.a.createContext(null);
            let m,
              w = {};
            function O() {
              const t = b.a.useContext(x);
              if (!t)
                throw Error(
                  "ModuleNameContext has not been provided. This should come from openmrs-react-root-decorator"
                );
              if (m) throw m;
              if (w[t]) return w[t];
              debugger;
              throw g(t)
                .then((n) => {
                  w[t] = n;
                })
                .catch((t) => {
                  m = t;
                });
            }
            function j(t, n) {
              return (r) => {
                if (!t(r)) return n;
              };
            }
            r.d(n, "defineConfigSchema", function () {
              return y;
            }),
              r.d(n, "getConfig", function () {
                return g;
              }),
              r.d(n, "provide", function () {
                return h;
              }),
              r.d(n, "ModuleNameContext", function () {
                return x;
              }),
              r.d(n, "useConfig", function () {
                return O;
              }),
              r.d(n, "validator", function () {
                return j;
              });
          },
        ])
      );
    },
  };
});
//# sourceMappingURL=openmrs-esm-module-config.js.map
