function Ih(r, i) {
  for (var l = 0; l < i.length; l++) {
    const a = i[l];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const c in a)
        if (c !== "default" && !(c in r)) {
          const f = Object.getOwnPropertyDescriptor(a, c);
          f && Object.defineProperty(r, c, f.get ? f : {
            enumerable: !0,
            get: () => a[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
function Ma(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ua = { exports: {} }, To = {}, ca = { exports: {} }, we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Df;
function Fh() {
  if (Df) return we;
  Df = 1;
  var r = Symbol.for("react.element"), i = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), v = Symbol.iterator;
  function S(b) {
    return b === null || typeof b != "object" ? null : (b = v && b[v] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var _ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, w = {};
  function C(b, I, ce) {
    this.props = b, this.context = I, this.refs = w, this.updater = ce || _;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(b, I) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, I, "setState");
  }, C.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function N() {
  }
  N.prototype = C.prototype;
  function T(b, I, ce) {
    this.props = b, this.context = I, this.refs = w, this.updater = ce || _;
  }
  var z = T.prototype = new N();
  z.constructor = T, P(z, C.prototype), z.isPureReactComponent = !0;
  var D = Array.isArray, B = Object.prototype.hasOwnProperty, Q = { current: null }, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function G(b, I, ce) {
    var ue, ve = {}, ye = null, he = null;
    if (I != null) for (ue in I.ref !== void 0 && (he = I.ref), I.key !== void 0 && (ye = "" + I.key), I) B.call(I, ue) && !$.hasOwnProperty(ue) && (ve[ue] = I[ue]);
    var fe = arguments.length - 2;
    if (fe === 1) ve.children = ce;
    else if (1 < fe) {
      for (var Se = Array(fe), be = 0; be < fe; be++) Se[be] = arguments[be + 2];
      ve.children = Se;
    }
    if (b && b.defaultProps) for (ue in fe = b.defaultProps, fe) ve[ue] === void 0 && (ve[ue] = fe[ue]);
    return { $$typeof: r, type: b, key: ye, ref: he, props: ve, _owner: Q.current };
  }
  function q(b, I) {
    return { $$typeof: r, type: b.type, key: I, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function re(b) {
    return typeof b == "object" && b !== null && b.$$typeof === r;
  }
  function oe(b) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(ce) {
      return I[ce];
    });
  }
  var X = /\/+/g;
  function de(b, I) {
    return typeof b == "object" && b !== null && b.key != null ? oe("" + b.key) : I.toString(36);
  }
  function ae(b, I, ce, ue, ve) {
    var ye = typeof b;
    (ye === "undefined" || ye === "boolean") && (b = null);
    var he = !1;
    if (b === null) he = !0;
    else switch (ye) {
      case "string":
      case "number":
        he = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case r:
          case i:
            he = !0;
        }
    }
    if (he) return he = b, ve = ve(he), b = ue === "" ? "." + de(he, 0) : ue, D(ve) ? (ce = "", b != null && (ce = b.replace(X, "$&/") + "/"), ae(ve, I, ce, "", function(be) {
      return be;
    })) : ve != null && (re(ve) && (ve = q(ve, ce + (!ve.key || he && he.key === ve.key ? "" : ("" + ve.key).replace(X, "$&/") + "/") + b)), I.push(ve)), 1;
    if (he = 0, ue = ue === "" ? "." : ue + ":", D(b)) for (var fe = 0; fe < b.length; fe++) {
      ye = b[fe];
      var Se = ue + de(ye, fe);
      he += ae(ye, I, ce, Se, ve);
    }
    else if (Se = S(b), typeof Se == "function") for (b = Se.call(b), fe = 0; !(ye = b.next()).done; ) ye = ye.value, Se = ue + de(ye, fe++), he += ae(ye, I, ce, Se, ve);
    else if (ye === "object") throw I = String(b), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return he;
  }
  function xe(b, I, ce) {
    if (b == null) return b;
    var ue = [], ve = 0;
    return ae(b, ue, "", "", function(ye) {
      return I.call(ce, ye, ve++);
    }), ue;
  }
  function pe(b) {
    if (b._status === -1) {
      var I = b._result;
      I = I(), I.then(function(ce) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = ce);
      }, function(ce) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = ce);
      }), b._status === -1 && (b._status = 0, b._result = I);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var ie = { current: null }, M = { transition: null }, K = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: M, ReactCurrentOwner: Q };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return we.Children = { map: xe, forEach: function(b, I, ce) {
    xe(b, function() {
      I.apply(this, arguments);
    }, ce);
  }, count: function(b) {
    var I = 0;
    return xe(b, function() {
      I++;
    }), I;
  }, toArray: function(b) {
    return xe(b, function(I) {
      return I;
    }) || [];
  }, only: function(b) {
    if (!re(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, we.Component = C, we.Fragment = l, we.Profiler = c, we.PureComponent = T, we.StrictMode = a, we.Suspense = h, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, we.act = H, we.cloneElement = function(b, I, ce) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var ue = P({}, b.props), ve = b.key, ye = b.ref, he = b._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ye = I.ref, he = Q.current), I.key !== void 0 && (ve = "" + I.key), b.type && b.type.defaultProps) var fe = b.type.defaultProps;
      for (Se in I) B.call(I, Se) && !$.hasOwnProperty(Se) && (ue[Se] = I[Se] === void 0 && fe !== void 0 ? fe[Se] : I[Se]);
    }
    var Se = arguments.length - 2;
    if (Se === 1) ue.children = ce;
    else if (1 < Se) {
      fe = Array(Se);
      for (var be = 0; be < Se; be++) fe[be] = arguments[be + 2];
      ue.children = fe;
    }
    return { $$typeof: r, type: b.type, key: ve, ref: ye, props: ue, _owner: he };
  }, we.createContext = function(b) {
    return b = { $$typeof: d, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: f, _context: b }, b.Consumer = b;
  }, we.createElement = G, we.createFactory = function(b) {
    var I = G.bind(null, b);
    return I.type = b, I;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, we.isValidElement = re, we.lazy = function(b) {
    return { $$typeof: x, _payload: { _status: -1, _result: b }, _init: pe };
  }, we.memo = function(b, I) {
    return { $$typeof: g, type: b, compare: I === void 0 ? null : I };
  }, we.startTransition = function(b) {
    var I = M.transition;
    M.transition = {};
    try {
      b();
    } finally {
      M.transition = I;
    }
  }, we.unstable_act = H, we.useCallback = function(b, I) {
    return ie.current.useCallback(b, I);
  }, we.useContext = function(b) {
    return ie.current.useContext(b);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(b) {
    return ie.current.useDeferredValue(b);
  }, we.useEffect = function(b, I) {
    return ie.current.useEffect(b, I);
  }, we.useId = function() {
    return ie.current.useId();
  }, we.useImperativeHandle = function(b, I, ce) {
    return ie.current.useImperativeHandle(b, I, ce);
  }, we.useInsertionEffect = function(b, I) {
    return ie.current.useInsertionEffect(b, I);
  }, we.useLayoutEffect = function(b, I) {
    return ie.current.useLayoutEffect(b, I);
  }, we.useMemo = function(b, I) {
    return ie.current.useMemo(b, I);
  }, we.useReducer = function(b, I, ce) {
    return ie.current.useReducer(b, I, ce);
  }, we.useRef = function(b) {
    return ie.current.useRef(b);
  }, we.useState = function(b) {
    return ie.current.useState(b);
  }, we.useSyncExternalStore = function(b, I, ce) {
    return ie.current.useSyncExternalStore(b, I, ce);
  }, we.useTransition = function() {
    return ie.current.useTransition();
  }, we.version = "18.3.1", we;
}
var If;
function ja() {
  return If || (If = 1, ca.exports = Fh()), ca.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ff;
function Bh() {
  if (Ff) return To;
  Ff = 1;
  var r = ja(), i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, h, g) {
    var x, v = {}, S = null, _ = null;
    g !== void 0 && (S = "" + g), h.key !== void 0 && (S = "" + h.key), h.ref !== void 0 && (_ = h.ref);
    for (x in h) a.call(h, x) && !f.hasOwnProperty(x) && (v[x] = h[x]);
    if (p && p.defaultProps) for (x in h = p.defaultProps, h) v[x] === void 0 && (v[x] = h[x]);
    return { $$typeof: i, type: p, key: S, ref: _, props: v, _owner: c.current };
  }
  return To.Fragment = l, To.jsx = d, To.jsxs = d, To;
}
var Bf;
function Wh() {
  return Bf || (Bf = 1, ua.exports = Bh()), ua.exports;
}
var j = Wh(), rl = {}, fa = { exports: {} }, st = {}, da = { exports: {} }, pa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wf;
function $h() {
  return Wf || (Wf = 1, function(r) {
    function i(M, K) {
      var H = M.length;
      M.push(K);
      e: for (; 0 < H; ) {
        var b = H - 1 >>> 1, I = M[b];
        if (0 < c(I, K)) M[b] = K, M[H] = I, H = b;
        else break e;
      }
    }
    function l(M) {
      return M.length === 0 ? null : M[0];
    }
    function a(M) {
      if (M.length === 0) return null;
      var K = M[0], H = M.pop();
      if (H !== K) {
        M[0] = H;
        e: for (var b = 0, I = M.length, ce = I >>> 1; b < ce; ) {
          var ue = 2 * (b + 1) - 1, ve = M[ue], ye = ue + 1, he = M[ye];
          if (0 > c(ve, H)) ye < I && 0 > c(he, ve) ? (M[b] = he, M[ye] = H, b = ye) : (M[b] = ve, M[ue] = H, b = ue);
          else if (ye < I && 0 > c(he, H)) M[b] = he, M[ye] = H, b = ye;
          else break e;
        }
      }
      return K;
    }
    function c(M, K) {
      var H = M.sortIndex - K.sortIndex;
      return H !== 0 ? H : M.id - K.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      r.unstable_now = function() {
        return d.now() - p;
      };
    }
    var h = [], g = [], x = 1, v = null, S = 3, _ = !1, P = !1, w = !1, C = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function z(M) {
      for (var K = l(g); K !== null; ) {
        if (K.callback === null) a(g);
        else if (K.startTime <= M) a(g), K.sortIndex = K.expirationTime, i(h, K);
        else break;
        K = l(g);
      }
    }
    function D(M) {
      if (w = !1, z(M), !P) if (l(h) !== null) P = !0, pe(B);
      else {
        var K = l(g);
        K !== null && ie(D, K.startTime - M);
      }
    }
    function B(M, K) {
      P = !1, w && (w = !1, N(G), G = -1), _ = !0;
      var H = S;
      try {
        for (z(K), v = l(h); v !== null && (!(v.expirationTime > K) || M && !oe()); ) {
          var b = v.callback;
          if (typeof b == "function") {
            v.callback = null, S = v.priorityLevel;
            var I = b(v.expirationTime <= K);
            K = r.unstable_now(), typeof I == "function" ? v.callback = I : v === l(h) && a(h), z(K);
          } else a(h);
          v = l(h);
        }
        if (v !== null) var ce = !0;
        else {
          var ue = l(g);
          ue !== null && ie(D, ue.startTime - K), ce = !1;
        }
        return ce;
      } finally {
        v = null, S = H, _ = !1;
      }
    }
    var Q = !1, $ = null, G = -1, q = 5, re = -1;
    function oe() {
      return !(r.unstable_now() - re < q);
    }
    function X() {
      if ($ !== null) {
        var M = r.unstable_now();
        re = M;
        var K = !0;
        try {
          K = $(!0, M);
        } finally {
          K ? de() : (Q = !1, $ = null);
        }
      } else Q = !1;
    }
    var de;
    if (typeof T == "function") de = function() {
      T(X);
    };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), xe = ae.port2;
      ae.port1.onmessage = X, de = function() {
        xe.postMessage(null);
      };
    } else de = function() {
      C(X, 0);
    };
    function pe(M) {
      $ = M, Q || (Q = !0, de());
    }
    function ie(M, K) {
      G = C(function() {
        M(r.unstable_now());
      }, K);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, r.unstable_continueExecution = function() {
      P || _ || (P = !0, pe(B));
    }, r.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < M ? Math.floor(1e3 / M) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, r.unstable_getFirstCallbackNode = function() {
      return l(h);
    }, r.unstable_next = function(M) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = S;
      }
      var H = S;
      S = K;
      try {
        return M();
      } finally {
        S = H;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(M, K) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var H = S;
      S = M;
      try {
        return K();
      } finally {
        S = H;
      }
    }, r.unstable_scheduleCallback = function(M, K, H) {
      var b = r.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? b + H : b) : H = b, M) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = H + I, M = { id: x++, callback: K, priorityLevel: M, startTime: H, expirationTime: I, sortIndex: -1 }, H > b ? (M.sortIndex = H, i(g, M), l(h) === null && M === l(g) && (w ? (N(G), G = -1) : w = !0, ie(D, H - b))) : (M.sortIndex = I, i(h, M), P || _ || (P = !0, pe(B))), M;
    }, r.unstable_shouldYield = oe, r.unstable_wrapCallback = function(M) {
      var K = S;
      return function() {
        var H = S;
        S = K;
        try {
          return M.apply(this, arguments);
        } finally {
          S = H;
        }
      };
    };
  }(pa)), pa;
}
var $f;
function Vh() {
  return $f || ($f = 1, da.exports = $h()), da.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vf;
function Uh() {
  if (Vf) return st;
  Vf = 1;
  var r = ja(), i = Vh();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), c = {};
  function f(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, x = {}, v = {};
  function S(e) {
    return h.call(v, e) ? !0 : h.call(x, e) ? !1 : g.test(e) ? v[e] = !0 : (x[e] = !0, !1);
  }
  function _(e, t, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function P(e, t, n, o) {
    if (t === null || typeof t > "u" || _(e, t, n, o)) return !0;
    if (o) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function w(e, t, n, o, s, u, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = m;
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    C[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    C[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    C[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    C[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    C[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    C[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    C[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    C[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    C[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var N = /[\-:]([a-z])/g;
  function T(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      N,
      T
    );
    C[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(N, T);
    C[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(N, T);
    C[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    C[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), C.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    C[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function z(e, t, n, o) {
    var s = C.hasOwnProperty(t) ? C[t] : null;
    (s !== null ? s.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (P(t, n, s, o) && (n = null), o || s === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, o = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
  }
  var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), Q = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), oe = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), xe = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var H = Object.assign, b;
  function I(e) {
    if (b === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      b = t && t[1] || "";
    }
    return `
` + b + e;
  }
  var ce = !1;
  function ue(e, t) {
    if (!e || ce) return "";
    ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (L) {
          var o = L;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (L) {
          o = L;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (L) {
          o = L;
        }
        e();
      }
    } catch (L) {
      if (L && o && typeof L.stack == "string") {
        for (var s = L.stack.split(`
`), u = o.stack.split(`
`), m = s.length - 1, y = u.length - 1; 1 <= m && 0 <= y && s[m] !== u[y]; ) y--;
        for (; 1 <= m && 0 <= y; m--, y--) if (s[m] !== u[y]) {
          if (m !== 1 || y !== 1)
            do
              if (m--, y--, 0 > y || s[m] !== u[y]) {
                var E = `
` + s[m].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
              }
            while (1 <= m && 0 <= y);
          break;
        }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ue(e.type, !1), e;
      case 11:
        return e = ue(e.type.render, !1), e;
      case 1:
        return e = ue(e.type, !0), e;
      default:
        return "";
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case Q:
        return "Portal";
      case q:
        return "Profiler";
      case G:
        return "StrictMode";
      case de:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case oe:
        return (e.displayName || "Context") + ".Consumer";
      case re:
        return (e._context.displayName || "Context") + ".Provider";
      case X:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xe:
        return t = e.displayName || null, t !== null ? t : ye(e.type) || "Memo";
      case pe:
        t = e._payload, e = e._init;
        try {
          return ye(e(t));
        } catch {
        }
    }
    return null;
  }
  function he(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ye(t);
      case 8:
        return t === G ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function fe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Se(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function be(e) {
    var t = Se(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(m) {
        o = "" + m, u.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Pe(e) {
    e._valueTracker || (e._valueTracker = be(e));
  }
  function te(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), o = "";
    return e && (o = Se(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ke(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Te(e, t) {
    var n = t.checked;
    return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ve(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
    n = fe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: o, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function at(e, t) {
    t = t.checked, t != null && z(e, "checked", t, !1);
  }
  function ut(e, t) {
    at(e, t);
    var n = fe(t.value), o = t.type;
    if (n != null) o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? vt(e, t.type, n) : t.hasOwnProperty("defaultValue") && vt(e, t.type, fe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function jt(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function vt(e, t, n) {
    (t !== "number" || ke(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ct = Array.isArray;
  function yt(e, t, n, o) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && o && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + fe(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, o && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function tr(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (ct(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: fe(n) };
  }
  function Fr(e, t) {
    var n = fe(t.value), o = fe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), o != null && (e.defaultValue = "" + o);
  }
  function Br(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Qo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function nr(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var rr, or = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, o, s);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (rr = rr || document.createElement("div"), rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function wt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Wr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kt).forEach(function(e) {
    Wr.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Kt[t] = Kt[e];
    });
  });
  function In(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kt.hasOwnProperty(e) && Kt[e] ? ("" + t).trim() : t + "px";
  }
  function Ko(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var o = n.indexOf("--") === 0, s = In(n, t[n], o);
      n === "float" && (n = "cssFloat"), o ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var Pl = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function $r(e, t) {
    if (t) {
      if (Pl[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function Vr(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ur = null;
  function ir(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Hr = null, Gt = null, Yt = null;
  function Qr(e) {
    if (e = vo(e)) {
      if (typeof Hr != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = yi(t), Hr(e.stateNode, e.type, t));
    }
  }
  function Go(e) {
    Gt ? Yt ? Yt.push(e) : Yt = [e] : Gt = e;
  }
  function Kr() {
    if (Gt) {
      var e = Gt, t = Yt;
      if (Yt = Gt = null, Qr(e), t) for (e = 0; e < t.length; e++) Qr(t[e]);
    }
  }
  function Gr(e, t) {
    return e(t);
  }
  function Yo() {
  }
  var Nl = !1;
  function ou(e, t, n) {
    if (Nl) return e(t, n);
    Nl = !0;
    try {
      return Gr(e, t, n);
    } finally {
      Nl = !1, (Gt !== null || Yt !== null) && (Yo(), Kr());
    }
  }
  function Yr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = yi(n);
    if (o === null) return null;
    n = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var bl = !1;
  if (p) try {
    var Xr = {};
    Object.defineProperty(Xr, "passive", { get: function() {
      bl = !0;
    } }), window.addEventListener("test", Xr, Xr), window.removeEventListener("test", Xr, Xr);
  } catch {
    bl = !1;
  }
  function Hp(e, t, n, o, s, u, m, y, E) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (W) {
      this.onError(W);
    }
  }
  var Zr = !1, Xo = null, Zo = !1, Rl = null, Qp = { onError: function(e) {
    Zr = !0, Xo = e;
  } };
  function Kp(e, t, n, o, s, u, m, y, E) {
    Zr = !1, Xo = null, Hp.apply(Qp, arguments);
  }
  function Gp(e, t, n, o, s, u, m, y, E) {
    if (Kp.apply(this, arguments), Zr) {
      if (Zr) {
        var L = Xo;
        Zr = !1, Xo = null;
      } else throw Error(l(198));
      Zo || (Zo = !0, Rl = L);
    }
  }
  function Fn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function iu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function lu(e) {
    if (Fn(e) !== e) throw Error(l(188));
  }
  function Yp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Fn(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (o = s.return, o !== null) {
          n = o;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return lu(s), e;
          if (u === o) return lu(s), t;
          u = u.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== o.return) n = s, o = u;
      else {
        for (var m = !1, y = s.child; y; ) {
          if (y === n) {
            m = !0, n = s, o = u;
            break;
          }
          if (y === o) {
            m = !0, o = s, n = u;
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = u.child; y; ) {
            if (y === n) {
              m = !0, n = u, o = s;
              break;
            }
            if (y === o) {
              m = !0, o = u, n = s;
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(l(189));
        }
      }
      if (n.alternate !== o) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function su(e) {
    return e = Yp(e), e !== null ? au(e) : null;
  }
  function au(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = au(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var uu = i.unstable_scheduleCallback, cu = i.unstable_cancelCallback, Xp = i.unstable_shouldYield, Zp = i.unstable_requestPaint, Ie = i.unstable_now, Jp = i.unstable_getCurrentPriorityLevel, _l = i.unstable_ImmediatePriority, fu = i.unstable_UserBlockingPriority, Jo = i.unstable_NormalPriority, qp = i.unstable_LowPriority, du = i.unstable_IdlePriority, qo = null, Dt = null;
  function em(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
      Dt.onCommitFiberRoot(qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nt = Math.clz32 ? Math.clz32 : rm, tm = Math.log, nm = Math.LN2;
  function rm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (tm(e) / nm | 0) | 0;
  }
  var ei = 64, ti = 4194304;
  function Jr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ni(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0, s = e.suspendedLanes, u = e.pingedLanes, m = n & 268435455;
    if (m !== 0) {
      var y = m & ~s;
      y !== 0 ? o = Jr(y) : (u &= m, u !== 0 && (o = Jr(u)));
    } else m = n & ~s, m !== 0 ? o = Jr(m) : u !== 0 && (o = Jr(u));
    if (o === 0) return 0;
    if (t !== 0 && t !== o && !(t & s) && (s = o & -o, u = t & -t, s >= u || s === 16 && (u & 4194240) !== 0)) return t;
    if (o & 4 && (o |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= o; 0 < t; ) n = 31 - Nt(t), s = 1 << n, o |= e[n], t &= ~s;
    return o;
  }
  function om(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function im(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var m = 31 - Nt(u), y = 1 << m, E = s[m];
      E === -1 ? (!(y & n) || y & o) && (s[m] = om(y, t)) : E <= t && (e.expiredLanes |= y), u &= ~y;
    }
  }
  function Ol(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function pu() {
    var e = ei;
    return ei <<= 1, !(ei & 4194240) && (ei = 64), e;
  }
  function Al(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function qr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Nt(t), e[t] = n;
  }
  function lm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - Nt(n), u = 1 << s;
      t[s] = 0, o[s] = -1, e[s] = -1, n &= ~u;
    }
  }
  function Tl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var o = 31 - Nt(n), s = 1 << o;
      s & t | e[o] & t && (e[o] |= t), n &= ~s;
    }
  }
  var Ne = 0;
  function mu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var hu, Ll, gu, vu, yu, zl = !1, ri = [], an = null, un = null, cn = null, eo = /* @__PURE__ */ new Map(), to = /* @__PURE__ */ new Map(), fn = [], sm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        an = null;
        break;
      case "dragenter":
      case "dragleave":
        un = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        eo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        to.delete(t.pointerId);
    }
  }
  function no(e, t, n, o, s, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: o, nativeEvent: u, targetContainers: [s] }, t !== null && (t = vo(t), t !== null && Ll(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function am(e, t, n, o, s) {
    switch (t) {
      case "focusin":
        return an = no(an, e, t, n, o, s), !0;
      case "dragenter":
        return un = no(un, e, t, n, o, s), !0;
      case "mouseover":
        return cn = no(cn, e, t, n, o, s), !0;
      case "pointerover":
        var u = s.pointerId;
        return eo.set(u, no(eo.get(u) || null, e, t, n, o, s)), !0;
      case "gotpointercapture":
        return u = s.pointerId, to.set(u, no(to.get(u) || null, e, t, n, o, s)), !0;
    }
    return !1;
  }
  function xu(e) {
    var t = Bn(e.target);
    if (t !== null) {
      var n = Fn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = iu(n), t !== null) {
            e.blockedOn = t, yu(e.priority, function() {
              gu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function oi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        Ur = o, n.target.dispatchEvent(o), Ur = null;
      } else return t = vo(n), t !== null && Ll(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Su(e, t, n) {
    oi(e) && n.delete(t);
  }
  function um() {
    zl = !1, an !== null && oi(an) && (an = null), un !== null && oi(un) && (un = null), cn !== null && oi(cn) && (cn = null), eo.forEach(Su), to.forEach(Su);
  }
  function ro(e, t) {
    e.blockedOn === t && (e.blockedOn = null, zl || (zl = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, um)));
  }
  function oo(e) {
    function t(s) {
      return ro(s, e);
    }
    if (0 < ri.length) {
      ro(ri[0], e);
      for (var n = 1; n < ri.length; n++) {
        var o = ri[n];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (an !== null && ro(an, e), un !== null && ro(un, e), cn !== null && ro(cn, e), eo.forEach(t), to.forEach(t), n = 0; n < fn.length; n++) o = fn[n], o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < fn.length && (n = fn[0], n.blockedOn === null); ) xu(n), n.blockedOn === null && fn.shift();
  }
  var lr = D.ReactCurrentBatchConfig, ii = !0;
  function cm(e, t, n, o) {
    var s = Ne, u = lr.transition;
    lr.transition = null;
    try {
      Ne = 1, Ml(e, t, n, o);
    } finally {
      Ne = s, lr.transition = u;
    }
  }
  function fm(e, t, n, o) {
    var s = Ne, u = lr.transition;
    lr.transition = null;
    try {
      Ne = 4, Ml(e, t, n, o);
    } finally {
      Ne = s, lr.transition = u;
    }
  }
  function Ml(e, t, n, o) {
    if (ii) {
      var s = jl(e, t, n, o);
      if (s === null) ql(e, t, o, li, n), wu(e, o);
      else if (am(s, e, t, n, o)) o.stopPropagation();
      else if (wu(e, o), t & 4 && -1 < sm.indexOf(e)) {
        for (; s !== null; ) {
          var u = vo(s);
          if (u !== null && hu(u), u = jl(e, t, n, o), u === null && ql(e, t, o, li, n), u === s) break;
          s = u;
        }
        s !== null && o.stopPropagation();
      } else ql(e, t, o, null, n);
    }
  }
  var li = null;
  function jl(e, t, n, o) {
    if (li = null, e = ir(o), e = Bn(e), e !== null) if (t = Fn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = iu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return li = e, null;
  }
  function ku(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Jp()) {
          case _l:
            return 1;
          case fu:
            return 4;
          case Jo:
          case qp:
            return 16;
          case du:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var dn = null, Dl = null, si = null;
  function Eu() {
    if (si) return si;
    var e, t = Dl, n = t.length, o, s = "value" in dn ? dn.value : dn.textContent, u = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var m = n - e;
    for (o = 1; o <= m && t[n - o] === s[u - o]; o++) ;
    return si = s.slice(e, 1 < o ? 1 - o : void 0);
  }
  function ai(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ui() {
    return !0;
  }
  function Cu() {
    return !1;
  }
  function ft(e) {
    function t(n, o, s, u, m) {
      this._reactName = n, this._targetInst = s, this.type = o, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ui : Cu, this.isPropagationStopped = Cu, this;
    }
    return H(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ui);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ui);
    }, persist: function() {
    }, isPersistent: ui }), t;
  }
  var sr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Il = ft(sr), io = H({}, sr, { view: 0, detail: 0 }), dm = ft(io), Fl, Bl, lo, ci = H({}, io, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $l, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== lo && (lo && e.type === "mousemove" ? (Fl = e.screenX - lo.screenX, Bl = e.screenY - lo.screenY) : Bl = Fl = 0, lo = e), Fl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Bl;
  } }), Pu = ft(ci), pm = H({}, ci, { dataTransfer: 0 }), mm = ft(pm), hm = H({}, io, { relatedTarget: 0 }), Wl = ft(hm), gm = H({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vm = ft(gm), ym = H({}, sr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), wm = ft(ym), xm = H({}, sr, { data: 0 }), Nu = ft(xm), Sm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, km = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Em = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Cm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Em[e]) ? !!t[e] : !1;
  }
  function $l() {
    return Cm;
  }
  var Pm = H({}, io, { key: function(e) {
    if (e.key) {
      var t = Sm[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? km[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $l, charCode: function(e) {
    return e.type === "keypress" ? ai(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ai(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Nm = ft(Pm), bm = H({}, ci, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bu = ft(bm), Rm = H({}, io, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $l }), _m = ft(Rm), Om = H({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Am = ft(Om), Tm = H({}, ci, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Lm = ft(Tm), zm = [9, 13, 27, 32], Vl = p && "CompositionEvent" in window, so = null;
  p && "documentMode" in document && (so = document.documentMode);
  var Mm = p && "TextEvent" in window && !so, Ru = p && (!Vl || so && 8 < so && 11 >= so), _u = " ", Ou = !1;
  function Au(e, t) {
    switch (e) {
      case "keyup":
        return zm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Tu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ar = !1;
  function jm(e, t) {
    switch (e) {
      case "compositionend":
        return Tu(t);
      case "keypress":
        return t.which !== 32 ? null : (Ou = !0, _u);
      case "textInput":
        return e = t.data, e === _u && Ou ? null : e;
      default:
        return null;
    }
  }
  function Dm(e, t) {
    if (ar) return e === "compositionend" || !Vl && Au(e, t) ? (e = Eu(), si = Dl = dn = null, ar = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ru && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Im = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Im[e.type] : t === "textarea";
  }
  function zu(e, t, n, o) {
    Go(o), t = hi(t, "onChange"), 0 < t.length && (n = new Il("onChange", "change", null, n, o), e.push({ event: n, listeners: t }));
  }
  var ao = null, uo = null;
  function Fm(e) {
    Ju(e, 0);
  }
  function fi(e) {
    var t = pr(e);
    if (te(t)) return e;
  }
  function Bm(e, t) {
    if (e === "change") return t;
  }
  var Mu = !1;
  if (p) {
    var Ul;
    if (p) {
      var Hl = "oninput" in document;
      if (!Hl) {
        var ju = document.createElement("div");
        ju.setAttribute("oninput", "return;"), Hl = typeof ju.oninput == "function";
      }
      Ul = Hl;
    } else Ul = !1;
    Mu = Ul && (!document.documentMode || 9 < document.documentMode);
  }
  function Du() {
    ao && (ao.detachEvent("onpropertychange", Iu), uo = ao = null);
  }
  function Iu(e) {
    if (e.propertyName === "value" && fi(uo)) {
      var t = [];
      zu(t, uo, e, ir(e)), ou(Fm, t);
    }
  }
  function Wm(e, t, n) {
    e === "focusin" ? (Du(), ao = t, uo = n, ao.attachEvent("onpropertychange", Iu)) : e === "focusout" && Du();
  }
  function $m(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fi(uo);
  }
  function Vm(e, t) {
    if (e === "click") return fi(t);
  }
  function Um(e, t) {
    if (e === "input" || e === "change") return fi(t);
  }
  function Hm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var bt = typeof Object.is == "function" ? Object.is : Hm;
  function co(e, t) {
    if (bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var s = n[o];
      if (!h.call(t, s) || !bt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function Fu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bu(e, t) {
    var n = Fu(e);
    e = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (o = e + n.textContent.length, e <= t && o >= t) return { node: n, offset: t - e };
        e = o;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Fu(n);
    }
  }
  function Wu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $u() {
    for (var e = window, t = ke(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ke(e.document);
    }
    return t;
  }
  function Ql(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Qm(e) {
    var t = $u(), n = e.focusedElem, o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Wu(n.ownerDocument.documentElement, n)) {
      if (o !== null && Ql(n)) {
        if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, u = Math.min(o.start, s);
          o = o.end === void 0 ? u : Math.min(o.end, s), !e.extend && u > o && (s = o, o = u, u = s), s = Bu(n, u);
          var m = Bu(
            n,
            o
          );
          s && m && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), u > o ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Km = p && "documentMode" in document && 11 >= document.documentMode, ur = null, Kl = null, fo = null, Gl = !1;
  function Vu(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gl || ur == null || ur !== ke(o) || (o = ur, "selectionStart" in o && Ql(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), fo && co(fo, o) || (fo = o, o = hi(Kl, "onSelect"), 0 < o.length && (t = new Il("onSelect", "select", null, t, n), e.push({ event: t, listeners: o }), t.target = ur)));
  }
  function di(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var cr = { animationend: di("Animation", "AnimationEnd"), animationiteration: di("Animation", "AnimationIteration"), animationstart: di("Animation", "AnimationStart"), transitionend: di("Transition", "TransitionEnd") }, Yl = {}, Uu = {};
  p && (Uu = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
  function pi(e) {
    if (Yl[e]) return Yl[e];
    if (!cr[e]) return e;
    var t = cr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Uu) return Yl[e] = t[n];
    return e;
  }
  var Hu = pi("animationend"), Qu = pi("animationiteration"), Ku = pi("animationstart"), Gu = pi("transitionend"), Yu = /* @__PURE__ */ new Map(), Xu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function pn(e, t) {
    Yu.set(e, t), f(t, [e]);
  }
  for (var Xl = 0; Xl < Xu.length; Xl++) {
    var Zl = Xu[Xl], Gm = Zl.toLowerCase(), Ym = Zl[0].toUpperCase() + Zl.slice(1);
    pn(Gm, "on" + Ym);
  }
  pn(Hu, "onAnimationEnd"), pn(Qu, "onAnimationIteration"), pn(Ku, "onAnimationStart"), pn("dblclick", "onDoubleClick"), pn("focusin", "onFocus"), pn("focusout", "onBlur"), pn(Gu, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var po = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(po));
  function Zu(e, t, n) {
    var o = e.type || "unknown-event";
    e.currentTarget = n, Gp(o, t, void 0, e), e.currentTarget = null;
  }
  function Ju(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n], s = o.event;
      o = o.listeners;
      e: {
        var u = void 0;
        if (t) for (var m = o.length - 1; 0 <= m; m--) {
          var y = o[m], E = y.instance, L = y.currentTarget;
          if (y = y.listener, E !== u && s.isPropagationStopped()) break e;
          Zu(s, y, L), u = E;
        }
        else for (m = 0; m < o.length; m++) {
          if (y = o[m], E = y.instance, L = y.currentTarget, y = y.listener, E !== u && s.isPropagationStopped()) break e;
          Zu(s, y, L), u = E;
        }
      }
    }
    if (Zo) throw e = Rl, Zo = !1, Rl = null, e;
  }
  function _e(e, t) {
    var n = t[is];
    n === void 0 && (n = t[is] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    n.has(o) || (qu(t, e, 2, !1), n.add(o));
  }
  function Jl(e, t, n) {
    var o = 0;
    t && (o |= 4), qu(n, e, o, t);
  }
  var mi = "_reactListening" + Math.random().toString(36).slice(2);
  function mo(e) {
    if (!e[mi]) {
      e[mi] = !0, a.forEach(function(n) {
        n !== "selectionchange" && (Xm.has(n) || Jl(n, !1, e), Jl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mi] || (t[mi] = !0, Jl("selectionchange", !1, t));
    }
  }
  function qu(e, t, n, o) {
    switch (ku(t)) {
      case 1:
        var s = cm;
        break;
      case 4:
        s = fm;
        break;
      default:
        s = Ml;
    }
    n = s.bind(null, t, n, e), s = void 0, !bl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), o ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function ql(e, t, n, o, s) {
    var u = o;
    if (!(t & 1) && !(t & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var y = o.stateNode.containerInfo;
        if (y === s || y.nodeType === 8 && y.parentNode === s) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var E = m.tag;
          if ((E === 3 || E === 4) && (E = m.stateNode.containerInfo, E === s || E.nodeType === 8 && E.parentNode === s)) return;
          m = m.return;
        }
        for (; y !== null; ) {
          if (m = Bn(y), m === null) return;
          if (E = m.tag, E === 5 || E === 6) {
            o = u = m;
            continue e;
          }
          y = y.parentNode;
        }
      }
      o = o.return;
    }
    ou(function() {
      var L = u, W = ir(n), V = [];
      e: {
        var F = Yu.get(e);
        if (F !== void 0) {
          var Y = Il, J = e;
          switch (e) {
            case "keypress":
              if (ai(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = Nm;
              break;
            case "focusin":
              J = "focus", Y = Wl;
              break;
            case "focusout":
              J = "blur", Y = Wl;
              break;
            case "beforeblur":
            case "afterblur":
              Y = Wl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = Pu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = mm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = _m;
              break;
            case Hu:
            case Qu:
            case Ku:
              Y = vm;
              break;
            case Gu:
              Y = Am;
              break;
            case "scroll":
              Y = dm;
              break;
            case "wheel":
              Y = Lm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = wm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = bu;
          }
          var ee = (t & 4) !== 0, Fe = !ee && e === "scroll", O = ee ? F !== null ? F + "Capture" : null : F;
          ee = [];
          for (var R = L, A; R !== null; ) {
            A = R;
            var U = A.stateNode;
            if (A.tag === 5 && U !== null && (A = U, O !== null && (U = Yr(R, O), U != null && ee.push(ho(R, U, A)))), Fe) break;
            R = R.return;
          }
          0 < ee.length && (F = new Y(F, J, null, n, W), V.push({ event: F, listeners: ee }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", F && n !== Ur && (J = n.relatedTarget || n.fromElement) && (Bn(J) || J[Xt])) break e;
          if ((Y || F) && (F = W.window === W ? W : (F = W.ownerDocument) ? F.defaultView || F.parentWindow : window, Y ? (J = n.relatedTarget || n.toElement, Y = L, J = J ? Bn(J) : null, J !== null && (Fe = Fn(J), J !== Fe || J.tag !== 5 && J.tag !== 6) && (J = null)) : (Y = null, J = L), Y !== J)) {
            if (ee = Pu, U = "onMouseLeave", O = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ee = bu, U = "onPointerLeave", O = "onPointerEnter", R = "pointer"), Fe = Y == null ? F : pr(Y), A = J == null ? F : pr(J), F = new ee(U, R + "leave", Y, n, W), F.target = Fe, F.relatedTarget = A, U = null, Bn(W) === L && (ee = new ee(O, R + "enter", J, n, W), ee.target = A, ee.relatedTarget = Fe, U = ee), Fe = U, Y && J) t: {
              for (ee = Y, O = J, R = 0, A = ee; A; A = fr(A)) R++;
              for (A = 0, U = O; U; U = fr(U)) A++;
              for (; 0 < R - A; ) ee = fr(ee), R--;
              for (; 0 < A - R; ) O = fr(O), A--;
              for (; R--; ) {
                if (ee === O || O !== null && ee === O.alternate) break t;
                ee = fr(ee), O = fr(O);
              }
              ee = null;
            }
            else ee = null;
            Y !== null && ec(V, F, Y, ee, !1), J !== null && Fe !== null && ec(V, Fe, J, ee, !0);
          }
        }
        e: {
          if (F = L ? pr(L) : window, Y = F.nodeName && F.nodeName.toLowerCase(), Y === "select" || Y === "input" && F.type === "file") var ne = Bm;
          else if (Lu(F)) if (Mu) ne = Um;
          else {
            ne = $m;
            var le = Wm;
          }
          else (Y = F.nodeName) && Y.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (ne = Vm);
          if (ne && (ne = ne(e, L))) {
            zu(V, ne, n, W);
            break e;
          }
          le && le(e, F, L), e === "focusout" && (le = F._wrapperState) && le.controlled && F.type === "number" && vt(F, "number", F.value);
        }
        switch (le = L ? pr(L) : window, e) {
          case "focusin":
            (Lu(le) || le.contentEditable === "true") && (ur = le, Kl = L, fo = null);
            break;
          case "focusout":
            fo = Kl = ur = null;
            break;
          case "mousedown":
            Gl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gl = !1, Vu(V, n, W);
            break;
          case "selectionchange":
            if (Km) break;
          case "keydown":
          case "keyup":
            Vu(V, n, W);
        }
        var se;
        if (Vl) e: {
          switch (e) {
            case "compositionstart":
              var me = "onCompositionStart";
              break e;
            case "compositionend":
              me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              me = "onCompositionUpdate";
              break e;
          }
          me = void 0;
        }
        else ar ? Au(e, n) && (me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (me = "onCompositionStart");
        me && (Ru && n.locale !== "ko" && (ar || me !== "onCompositionStart" ? me === "onCompositionEnd" && ar && (se = Eu()) : (dn = W, Dl = "value" in dn ? dn.value : dn.textContent, ar = !0)), le = hi(L, me), 0 < le.length && (me = new Nu(me, e, null, n, W), V.push({ event: me, listeners: le }), se ? me.data = se : (se = Tu(n), se !== null && (me.data = se)))), (se = Mm ? jm(e, n) : Dm(e, n)) && (L = hi(L, "onBeforeInput"), 0 < L.length && (W = new Nu("onBeforeInput", "beforeinput", null, n, W), V.push({ event: W, listeners: L }), W.data = se));
      }
      Ju(V, t);
    });
  }
  function ho(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function hi(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
      var s = e, u = s.stateNode;
      s.tag === 5 && u !== null && (s = u, u = Yr(e, n), u != null && o.unshift(ho(e, u, s)), u = Yr(e, t), u != null && o.push(ho(e, u, s))), e = e.return;
    }
    return o;
  }
  function fr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ec(e, t, n, o, s) {
    for (var u = t._reactName, m = []; n !== null && n !== o; ) {
      var y = n, E = y.alternate, L = y.stateNode;
      if (E !== null && E === o) break;
      y.tag === 5 && L !== null && (y = L, s ? (E = Yr(n, u), E != null && m.unshift(ho(n, E, y))) : s || (E = Yr(n, u), E != null && m.push(ho(n, E, y)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Zm = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
  function tc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zm, `
`).replace(Jm, "");
  }
  function gi(e, t, n) {
    if (t = tc(t), tc(e) !== t && n) throw Error(l(425));
  }
  function vi() {
  }
  var es = null, ts = null;
  function ns(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var rs = typeof setTimeout == "function" ? setTimeout : void 0, qm = typeof clearTimeout == "function" ? clearTimeout : void 0, nc = typeof Promise == "function" ? Promise : void 0, eh = typeof queueMicrotask == "function" ? queueMicrotask : typeof nc < "u" ? function(e) {
    return nc.resolve(null).then(e).catch(th);
  } : rs;
  function th(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function os(e, t) {
    var n = t, o = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (o === 0) {
          e.removeChild(s), oo(t);
          return;
        }
        o--;
      } else n !== "$" && n !== "$?" && n !== "$!" || o++;
      n = s;
    } while (n);
    oo(t);
  }
  function mn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function rc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var dr = Math.random().toString(36).slice(2), It = "__reactFiber$" + dr, go = "__reactProps$" + dr, Xt = "__reactContainer$" + dr, is = "__reactEvents$" + dr, nh = "__reactListeners$" + dr, rh = "__reactHandles$" + dr;
  function Bn(e) {
    var t = e[It];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Xt] || n[It]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = rc(e); e !== null; ) {
          if (n = e[It]) return n;
          e = rc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function vo(e) {
    return e = e[It] || e[Xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function pr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function yi(e) {
    return e[go] || null;
  }
  var ls = [], mr = -1;
  function hn(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > mr || (e.current = ls[mr], ls[mr] = null, mr--);
  }
  function Re(e, t) {
    mr++, ls[mr] = e.current, e.current = t;
  }
  var gn = {}, Ye = hn(gn), nt = hn(!1), Wn = gn;
  function hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return gn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var s = {}, u;
    for (u in n) s[u] = t[u];
    return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function rt(e) {
    return e = e.childContextTypes, e != null;
  }
  function wi() {
    Oe(nt), Oe(Ye);
  }
  function oc(e, t, n) {
    if (Ye.current !== gn) throw Error(l(168));
    Re(Ye, t), Re(nt, n);
  }
  function ic(e, t, n) {
    var o = e.stateNode;
    if (t = t.childContextTypes, typeof o.getChildContext != "function") return n;
    o = o.getChildContext();
    for (var s in o) if (!(s in t)) throw Error(l(108, he(e) || "Unknown", s));
    return H({}, n, o);
  }
  function xi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, Wn = Ye.current, Re(Ye, e), Re(nt, nt.current), !0;
  }
  function lc(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(l(169));
    n ? (e = ic(e, t, Wn), o.__reactInternalMemoizedMergedChildContext = e, Oe(nt), Oe(Ye), Re(Ye, e)) : Oe(nt), Re(nt, n);
  }
  var Zt = null, Si = !1, ss = !1;
  function sc(e) {
    Zt === null ? Zt = [e] : Zt.push(e);
  }
  function oh(e) {
    Si = !0, sc(e);
  }
  function vn() {
    if (!ss && Zt !== null) {
      ss = !0;
      var e = 0, t = Ne;
      try {
        var n = Zt;
        for (Ne = 1; e < n.length; e++) {
          var o = n[e];
          do
            o = o(!0);
          while (o !== null);
        }
        Zt = null, Si = !1;
      } catch (s) {
        throw Zt !== null && (Zt = Zt.slice(e + 1)), uu(_l, vn), s;
      } finally {
        Ne = t, ss = !1;
      }
    }
    return null;
  }
  var gr = [], vr = 0, ki = null, Ei = 0, xt = [], St = 0, $n = null, Jt = 1, qt = "";
  function Vn(e, t) {
    gr[vr++] = Ei, gr[vr++] = ki, ki = e, Ei = t;
  }
  function ac(e, t, n) {
    xt[St++] = Jt, xt[St++] = qt, xt[St++] = $n, $n = e;
    var o = Jt;
    e = qt;
    var s = 32 - Nt(o) - 1;
    o &= ~(1 << s), n += 1;
    var u = 32 - Nt(t) + s;
    if (30 < u) {
      var m = s - s % 5;
      u = (o & (1 << m) - 1).toString(32), o >>= m, s -= m, Jt = 1 << 32 - Nt(t) + s | n << s | o, qt = u + e;
    } else Jt = 1 << u | n << s | o, qt = e;
  }
  function as(e) {
    e.return !== null && (Vn(e, 1), ac(e, 1, 0));
  }
  function us(e) {
    for (; e === ki; ) ki = gr[--vr], gr[vr] = null, Ei = gr[--vr], gr[vr] = null;
    for (; e === $n; ) $n = xt[--St], xt[St] = null, qt = xt[--St], xt[St] = null, Jt = xt[--St], xt[St] = null;
  }
  var dt = null, pt = null, Le = !1, Rt = null;
  function uc(e, t) {
    var n = Pt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function cc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dt = e, pt = mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dt = e, pt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $n !== null ? { id: Jt, overflow: qt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, dt = e, pt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function cs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function fs(e) {
    if (Le) {
      var t = pt;
      if (t) {
        var n = t;
        if (!cc(e, t)) {
          if (cs(e)) throw Error(l(418));
          t = mn(n.nextSibling);
          var o = dt;
          t && cc(e, t) ? uc(o, n) : (e.flags = e.flags & -4097 | 2, Le = !1, dt = e);
        }
      } else {
        if (cs(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Le = !1, dt = e;
      }
    }
  }
  function fc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    dt = e;
  }
  function Ci(e) {
    if (e !== dt) return !1;
    if (!Le) return fc(e), Le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ns(e.type, e.memoizedProps)), t && (t = pt)) {
      if (cs(e)) throw dc(), Error(l(418));
      for (; t; ) uc(e, t), t = mn(t.nextSibling);
    }
    if (fc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                pt = mn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        pt = null;
      }
    } else pt = dt ? mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function dc() {
    for (var e = pt; e; ) e = mn(e.nextSibling);
  }
  function yr() {
    pt = dt = null, Le = !1;
  }
  function ds(e) {
    Rt === null ? Rt = [e] : Rt.push(e);
  }
  var ih = D.ReactCurrentBatchConfig;
  function yo(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(l(309));
          var o = n.stateNode;
        }
        if (!o) throw Error(l(147, e));
        var s = o, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(m) {
          var y = s.refs;
          m === null ? delete y[u] : y[u] = m;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Pi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function pc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function mc(e) {
    function t(O, R) {
      if (e) {
        var A = O.deletions;
        A === null ? (O.deletions = [R], O.flags |= 16) : A.push(R);
      }
    }
    function n(O, R) {
      if (!e) return null;
      for (; R !== null; ) t(O, R), R = R.sibling;
      return null;
    }
    function o(O, R) {
      for (O = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? O.set(R.key, R) : O.set(R.index, R), R = R.sibling;
      return O;
    }
    function s(O, R) {
      return O = Pn(O, R), O.index = 0, O.sibling = null, O;
    }
    function u(O, R, A) {
      return O.index = A, e ? (A = O.alternate, A !== null ? (A = A.index, A < R ? (O.flags |= 2, R) : A) : (O.flags |= 2, R)) : (O.flags |= 1048576, R);
    }
    function m(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function y(O, R, A, U) {
      return R === null || R.tag !== 6 ? (R = ra(A, O.mode, U), R.return = O, R) : (R = s(R, A), R.return = O, R);
    }
    function E(O, R, A, U) {
      var ne = A.type;
      return ne === $ ? W(O, R, A.props.children, U, A.key) : R !== null && (R.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === pe && pc(ne) === R.type) ? (U = s(R, A.props), U.ref = yo(O, R, A), U.return = O, U) : (U = Yi(A.type, A.key, A.props, null, O.mode, U), U.ref = yo(O, R, A), U.return = O, U);
    }
    function L(O, R, A, U) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== A.containerInfo || R.stateNode.implementation !== A.implementation ? (R = oa(A, O.mode, U), R.return = O, R) : (R = s(R, A.children || []), R.return = O, R);
    }
    function W(O, R, A, U, ne) {
      return R === null || R.tag !== 7 ? (R = Zn(A, O.mode, U, ne), R.return = O, R) : (R = s(R, A), R.return = O, R);
    }
    function V(O, R, A) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = ra("" + R, O.mode, A), R.return = O, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case B:
            return A = Yi(R.type, R.key, R.props, null, O.mode, A), A.ref = yo(O, null, R), A.return = O, A;
          case Q:
            return R = oa(R, O.mode, A), R.return = O, R;
          case pe:
            var U = R._init;
            return V(O, U(R._payload), A);
        }
        if (ct(R) || K(R)) return R = Zn(R, O.mode, A, null), R.return = O, R;
        Pi(O, R);
      }
      return null;
    }
    function F(O, R, A, U) {
      var ne = R !== null ? R.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number") return ne !== null ? null : y(O, R, "" + A, U);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case B:
            return A.key === ne ? E(O, R, A, U) : null;
          case Q:
            return A.key === ne ? L(O, R, A, U) : null;
          case pe:
            return ne = A._init, F(
              O,
              R,
              ne(A._payload),
              U
            );
        }
        if (ct(A) || K(A)) return ne !== null ? null : W(O, R, A, U, null);
        Pi(O, A);
      }
      return null;
    }
    function Y(O, R, A, U, ne) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return O = O.get(A) || null, y(R, O, "" + U, ne);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case B:
            return O = O.get(U.key === null ? A : U.key) || null, E(R, O, U, ne);
          case Q:
            return O = O.get(U.key === null ? A : U.key) || null, L(R, O, U, ne);
          case pe:
            var le = U._init;
            return Y(O, R, A, le(U._payload), ne);
        }
        if (ct(U) || K(U)) return O = O.get(A) || null, W(R, O, U, ne, null);
        Pi(R, U);
      }
      return null;
    }
    function J(O, R, A, U) {
      for (var ne = null, le = null, se = R, me = R = 0, Qe = null; se !== null && me < A.length; me++) {
        se.index > me ? (Qe = se, se = null) : Qe = se.sibling;
        var Ce = F(O, se, A[me], U);
        if (Ce === null) {
          se === null && (se = Qe);
          break;
        }
        e && se && Ce.alternate === null && t(O, se), R = u(Ce, R, me), le === null ? ne = Ce : le.sibling = Ce, le = Ce, se = Qe;
      }
      if (me === A.length) return n(O, se), Le && Vn(O, me), ne;
      if (se === null) {
        for (; me < A.length; me++) se = V(O, A[me], U), se !== null && (R = u(se, R, me), le === null ? ne = se : le.sibling = se, le = se);
        return Le && Vn(O, me), ne;
      }
      for (se = o(O, se); me < A.length; me++) Qe = Y(se, O, me, A[me], U), Qe !== null && (e && Qe.alternate !== null && se.delete(Qe.key === null ? me : Qe.key), R = u(Qe, R, me), le === null ? ne = Qe : le.sibling = Qe, le = Qe);
      return e && se.forEach(function(Nn) {
        return t(O, Nn);
      }), Le && Vn(O, me), ne;
    }
    function ee(O, R, A, U) {
      var ne = K(A);
      if (typeof ne != "function") throw Error(l(150));
      if (A = ne.call(A), A == null) throw Error(l(151));
      for (var le = ne = null, se = R, me = R = 0, Qe = null, Ce = A.next(); se !== null && !Ce.done; me++, Ce = A.next()) {
        se.index > me ? (Qe = se, se = null) : Qe = se.sibling;
        var Nn = F(O, se, Ce.value, U);
        if (Nn === null) {
          se === null && (se = Qe);
          break;
        }
        e && se && Nn.alternate === null && t(O, se), R = u(Nn, R, me), le === null ? ne = Nn : le.sibling = Nn, le = Nn, se = Qe;
      }
      if (Ce.done) return n(
        O,
        se
      ), Le && Vn(O, me), ne;
      if (se === null) {
        for (; !Ce.done; me++, Ce = A.next()) Ce = V(O, Ce.value, U), Ce !== null && (R = u(Ce, R, me), le === null ? ne = Ce : le.sibling = Ce, le = Ce);
        return Le && Vn(O, me), ne;
      }
      for (se = o(O, se); !Ce.done; me++, Ce = A.next()) Ce = Y(se, O, me, Ce.value, U), Ce !== null && (e && Ce.alternate !== null && se.delete(Ce.key === null ? me : Ce.key), R = u(Ce, R, me), le === null ? ne = Ce : le.sibling = Ce, le = Ce);
      return e && se.forEach(function(Dh) {
        return t(O, Dh);
      }), Le && Vn(O, me), ne;
    }
    function Fe(O, R, A, U) {
      if (typeof A == "object" && A !== null && A.type === $ && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case B:
            e: {
              for (var ne = A.key, le = R; le !== null; ) {
                if (le.key === ne) {
                  if (ne = A.type, ne === $) {
                    if (le.tag === 7) {
                      n(O, le.sibling), R = s(le, A.props.children), R.return = O, O = R;
                      break e;
                    }
                  } else if (le.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === pe && pc(ne) === le.type) {
                    n(O, le.sibling), R = s(le, A.props), R.ref = yo(O, le, A), R.return = O, O = R;
                    break e;
                  }
                  n(O, le);
                  break;
                } else t(O, le);
                le = le.sibling;
              }
              A.type === $ ? (R = Zn(A.props.children, O.mode, U, A.key), R.return = O, O = R) : (U = Yi(A.type, A.key, A.props, null, O.mode, U), U.ref = yo(O, R, A), U.return = O, O = U);
            }
            return m(O);
          case Q:
            e: {
              for (le = A.key; R !== null; ) {
                if (R.key === le) if (R.tag === 4 && R.stateNode.containerInfo === A.containerInfo && R.stateNode.implementation === A.implementation) {
                  n(O, R.sibling), R = s(R, A.children || []), R.return = O, O = R;
                  break e;
                } else {
                  n(O, R);
                  break;
                }
                else t(O, R);
                R = R.sibling;
              }
              R = oa(A, O.mode, U), R.return = O, O = R;
            }
            return m(O);
          case pe:
            return le = A._init, Fe(O, R, le(A._payload), U);
        }
        if (ct(A)) return J(O, R, A, U);
        if (K(A)) return ee(O, R, A, U);
        Pi(O, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, R !== null && R.tag === 6 ? (n(O, R.sibling), R = s(R, A), R.return = O, O = R) : (n(O, R), R = ra(A, O.mode, U), R.return = O, O = R), m(O)) : n(O, R);
    }
    return Fe;
  }
  var wr = mc(!0), hc = mc(!1), Ni = hn(null), bi = null, xr = null, ps = null;
  function ms() {
    ps = xr = bi = null;
  }
  function hs(e) {
    var t = Ni.current;
    Oe(Ni), e._currentValue = t;
  }
  function gs(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Sr(e, t) {
    bi = e, ps = xr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ot = !0), e.firstContext = null);
  }
  function kt(e) {
    var t = e._currentValue;
    if (ps !== e) if (e = { context: e, memoizedValue: t, next: null }, xr === null) {
      if (bi === null) throw Error(l(308));
      xr = e, bi.dependencies = { lanes: 0, firstContext: e };
    } else xr = xr.next = e;
    return t;
  }
  var Un = null;
  function vs(e) {
    Un === null ? Un = [e] : Un.push(e);
  }
  function gc(e, t, n, o) {
    var s = t.interleaved;
    return s === null ? (n.next = n, vs(t)) : (n.next = s.next, s.next = n), t.interleaved = n, en(e, o);
  }
  function en(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var yn = !1;
  function ys(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function vc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function tn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wn(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ee & 2) {
      var s = o.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, en(e, n);
    }
    return s = o.interleaved, s === null ? (t.next = t, vs(o)) : (t.next = s.next, s.next = t), o.interleaved = t, en(e, n);
  }
  function Ri(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, Tl(e, n);
    }
  }
  function yc(e, t) {
    var n = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, n === o)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? s = u = m : u = u.next = m, n = n.next;
        } while (n !== null);
        u === null ? s = u = t : u = u.next = t;
      } else s = u = t;
      n = { baseState: o.baseState, firstBaseUpdate: s, lastBaseUpdate: u, shared: o.shared, effects: o.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function _i(e, t, n, o) {
    var s = e.updateQueue;
    yn = !1;
    var u = s.firstBaseUpdate, m = s.lastBaseUpdate, y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var E = y, L = E.next;
      E.next = null, m === null ? u = L : m.next = L, m = E;
      var W = e.alternate;
      W !== null && (W = W.updateQueue, y = W.lastBaseUpdate, y !== m && (y === null ? W.firstBaseUpdate = L : y.next = L, W.lastBaseUpdate = E));
    }
    if (u !== null) {
      var V = s.baseState;
      m = 0, W = L = E = null, y = u;
      do {
        var F = y.lane, Y = y.eventTime;
        if ((o & F) === F) {
          W !== null && (W = W.next = {
            eventTime: Y,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var J = e, ee = y;
            switch (F = t, Y = n, ee.tag) {
              case 1:
                if (J = ee.payload, typeof J == "function") {
                  V = J.call(Y, V, F);
                  break e;
                }
                V = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ee.payload, F = typeof J == "function" ? J.call(Y, V, F) : J, F == null) break e;
                V = H({}, V, F);
                break e;
              case 2:
                yn = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, F = s.effects, F === null ? s.effects = [y] : F.push(y));
        } else Y = { eventTime: Y, lane: F, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, W === null ? (L = W = Y, E = V) : W = W.next = Y, m |= F;
        if (y = y.next, y === null) {
          if (y = s.shared.pending, y === null) break;
          F = y, y = F.next, F.next = null, s.lastBaseUpdate = F, s.shared.pending = null;
        }
      } while (!0);
      if (W === null && (E = V), s.baseState = E, s.firstBaseUpdate = L, s.lastBaseUpdate = W, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          m |= s.lane, s = s.next;
        while (s !== t);
      } else u === null && (s.shared.lanes = 0);
      Kn |= m, e.lanes = m, e.memoizedState = V;
    }
  }
  function wc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var o = e[t], s = o.callback;
      if (s !== null) {
        if (o.callback = null, o = n, typeof s != "function") throw Error(l(191, s));
        s.call(o);
      }
    }
  }
  var wo = {}, Ft = hn(wo), xo = hn(wo), So = hn(wo);
  function Hn(e) {
    if (e === wo) throw Error(l(174));
    return e;
  }
  function ws(e, t) {
    switch (Re(So, t), Re(xo, e), Re(Ft, wo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : nr(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = nr(t, e);
    }
    Oe(Ft), Re(Ft, t);
  }
  function kr() {
    Oe(Ft), Oe(xo), Oe(So);
  }
  function xc(e) {
    Hn(So.current);
    var t = Hn(Ft.current), n = nr(t, e.type);
    t !== n && (Re(xo, e), Re(Ft, n));
  }
  function xs(e) {
    xo.current === e && (Oe(Ft), Oe(xo));
  }
  var ze = hn(0);
  function Oi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ss = [];
  function ks() {
    for (var e = 0; e < Ss.length; e++) Ss[e]._workInProgressVersionPrimary = null;
    Ss.length = 0;
  }
  var Ai = D.ReactCurrentDispatcher, Es = D.ReactCurrentBatchConfig, Qn = 0, Me = null, We = null, Ue = null, Ti = !1, ko = !1, Eo = 0, lh = 0;
  function Xe() {
    throw Error(l(321));
  }
  function Cs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!bt(e[n], t[n])) return !1;
    return !0;
  }
  function Ps(e, t, n, o, s, u) {
    if (Qn = u, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ai.current = e === null || e.memoizedState === null ? ch : fh, e = n(o, s), ko) {
      u = 0;
      do {
        if (ko = !1, Eo = 0, 25 <= u) throw Error(l(301));
        u += 1, Ue = We = null, t.updateQueue = null, Ai.current = dh, e = n(o, s);
      } while (ko);
    }
    if (Ai.current = Mi, t = We !== null && We.next !== null, Qn = 0, Ue = We = Me = null, Ti = !1, t) throw Error(l(300));
    return e;
  }
  function Ns() {
    var e = Eo !== 0;
    return Eo = 0, e;
  }
  function Bt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Me.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function Et() {
    if (We === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = Ue === null ? Me.memoizedState : Ue.next;
    if (t !== null) Ue = t, We = e;
    else {
      if (e === null) throw Error(l(310));
      We = e, e = { memoizedState: We.memoizedState, baseState: We.baseState, baseQueue: We.baseQueue, queue: We.queue, next: null }, Ue === null ? Me.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function Co(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bs(e) {
    var t = Et(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var o = We, s = o.baseQueue, u = n.pending;
    if (u !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = u.next, u.next = m;
      }
      o.baseQueue = s = u, n.pending = null;
    }
    if (s !== null) {
      u = s.next, o = o.baseState;
      var y = m = null, E = null, L = u;
      do {
        var W = L.lane;
        if ((Qn & W) === W) E !== null && (E = E.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), o = L.hasEagerState ? L.eagerState : e(o, L.action);
        else {
          var V = {
            lane: W,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          E === null ? (y = E = V, m = o) : E = E.next = V, Me.lanes |= W, Kn |= W;
        }
        L = L.next;
      } while (L !== null && L !== u);
      E === null ? m = o : E.next = y, bt(o, t.memoizedState) || (ot = !0), t.memoizedState = o, t.baseState = m, t.baseQueue = E, n.lastRenderedState = o;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        u = s.lane, Me.lanes |= u, Kn |= u, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Rs(e) {
    var t = Et(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch, s = n.pending, u = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var m = s = s.next;
      do
        u = e(u, m.action), m = m.next;
      while (m !== s);
      bt(u, t.memoizedState) || (ot = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, o];
  }
  function Sc() {
  }
  function kc(e, t) {
    var n = Me, o = Et(), s = t(), u = !bt(o.memoizedState, s);
    if (u && (o.memoizedState = s, ot = !0), o = o.queue, _s(Pc.bind(null, n, o, e), [e]), o.getSnapshot !== t || u || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, Po(9, Cc.bind(null, n, o, s, t), void 0, null), He === null) throw Error(l(349));
      Qn & 30 || Ec(n, t, s);
    }
    return s;
  }
  function Ec(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Cc(e, t, n, o) {
    t.value = n, t.getSnapshot = o, Nc(t) && bc(e);
  }
  function Pc(e, t, n) {
    return n(function() {
      Nc(t) && bc(e);
    });
  }
  function Nc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !bt(e, n);
    } catch {
      return !0;
    }
  }
  function bc(e) {
    var t = en(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function Rc(e) {
    var t = Bt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Co, lastRenderedState: e }, t.queue = e, e = e.dispatch = uh.bind(null, Me, e), [t.memoizedState, e];
  }
  function Po(e, t, n, o) {
    return e = { tag: e, create: t, destroy: n, deps: o, next: null }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (o = n.next, n.next = e, e.next = o, t.lastEffect = e)), e;
  }
  function _c() {
    return Et().memoizedState;
  }
  function Li(e, t, n, o) {
    var s = Bt();
    Me.flags |= e, s.memoizedState = Po(1 | t, n, void 0, o === void 0 ? null : o);
  }
  function zi(e, t, n, o) {
    var s = Et();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (We !== null) {
      var m = We.memoizedState;
      if (u = m.destroy, o !== null && Cs(o, m.deps)) {
        s.memoizedState = Po(t, n, u, o);
        return;
      }
    }
    Me.flags |= e, s.memoizedState = Po(1 | t, n, u, o);
  }
  function Oc(e, t) {
    return Li(8390656, 8, e, t);
  }
  function _s(e, t) {
    return zi(2048, 8, e, t);
  }
  function Ac(e, t) {
    return zi(4, 2, e, t);
  }
  function Tc(e, t) {
    return zi(4, 4, e, t);
  }
  function Lc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function zc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, zi(4, 4, Lc.bind(null, t, e), n);
  }
  function Os() {
  }
  function Mc(e, t) {
    var n = Et();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Cs(t, o[1]) ? o[0] : (n.memoizedState = [e, t], e);
  }
  function jc(e, t) {
    var n = Et();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Cs(t, o[1]) ? o[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Dc(e, t, n) {
    return Qn & 21 ? (bt(n, t) || (n = pu(), Me.lanes |= n, Kn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ot = !0), e.memoizedState = n);
  }
  function sh(e, t) {
    var n = Ne;
    Ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var o = Es.transition;
    Es.transition = {};
    try {
      e(!1), t();
    } finally {
      Ne = n, Es.transition = o;
    }
  }
  function Ic() {
    return Et().memoizedState;
  }
  function ah(e, t, n) {
    var o = En(e);
    if (n = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null }, Fc(e)) Bc(t, n);
    else if (n = gc(e, t, n, o), n !== null) {
      var s = et();
      Tt(n, e, o, s), Wc(n, t, o);
    }
  }
  function uh(e, t, n) {
    var o = En(e), s = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Fc(e)) Bc(t, s);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var m = t.lastRenderedState, y = u(m, n);
        if (s.hasEagerState = !0, s.eagerState = y, bt(y, m)) {
          var E = t.interleaved;
          E === null ? (s.next = s, vs(t)) : (s.next = E.next, E.next = s), t.interleaved = s;
          return;
        }
      } catch {
      } finally {
      }
      n = gc(e, t, s, o), n !== null && (s = et(), Tt(n, e, o, s), Wc(n, t, o));
    }
  }
  function Fc(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function Bc(e, t) {
    ko = Ti = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Wc(e, t, n) {
    if (n & 4194240) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, Tl(e, n);
    }
  }
  var Mi = { readContext: kt, useCallback: Xe, useContext: Xe, useEffect: Xe, useImperativeHandle: Xe, useInsertionEffect: Xe, useLayoutEffect: Xe, useMemo: Xe, useReducer: Xe, useRef: Xe, useState: Xe, useDebugValue: Xe, useDeferredValue: Xe, useTransition: Xe, useMutableSource: Xe, useSyncExternalStore: Xe, useId: Xe, unstable_isNewReconciler: !1 }, ch = { readContext: kt, useCallback: function(e, t) {
    return Bt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: kt, useEffect: Oc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Li(
      4194308,
      4,
      Lc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Li(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Li(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Bt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var o = Bt();
    return t = n !== void 0 ? n(t) : t, o.memoizedState = o.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, o.queue = e, e = e.dispatch = ah.bind(null, Me, e), [o.memoizedState, e];
  }, useRef: function(e) {
    var t = Bt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Rc, useDebugValue: Os, useDeferredValue: function(e) {
    return Bt().memoizedState = e;
  }, useTransition: function() {
    var e = Rc(!1), t = e[0];
    return e = sh.bind(null, e[1]), Bt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var o = Me, s = Bt();
    if (Le) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), He === null) throw Error(l(349));
      Qn & 30 || Ec(o, t, n);
    }
    s.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return s.queue = u, Oc(Pc.bind(
      null,
      o,
      u,
      e
    ), [e]), o.flags |= 2048, Po(9, Cc.bind(null, o, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Bt(), t = He.identifierPrefix;
    if (Le) {
      var n = qt, o = Jt;
      n = (o & ~(1 << 32 - Nt(o) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Eo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = lh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, fh = {
    readContext: kt,
    useCallback: Mc,
    useContext: kt,
    useEffect: _s,
    useImperativeHandle: zc,
    useInsertionEffect: Ac,
    useLayoutEffect: Tc,
    useMemo: jc,
    useReducer: bs,
    useRef: _c,
    useState: function() {
      return bs(Co);
    },
    useDebugValue: Os,
    useDeferredValue: function(e) {
      var t = Et();
      return Dc(t, We.memoizedState, e);
    },
    useTransition: function() {
      var e = bs(Co)[0], t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Sc,
    useSyncExternalStore: kc,
    useId: Ic,
    unstable_isNewReconciler: !1
  }, dh = { readContext: kt, useCallback: Mc, useContext: kt, useEffect: _s, useImperativeHandle: zc, useInsertionEffect: Ac, useLayoutEffect: Tc, useMemo: jc, useReducer: Rs, useRef: _c, useState: function() {
    return Rs(Co);
  }, useDebugValue: Os, useDeferredValue: function(e) {
    var t = Et();
    return We === null ? t.memoizedState = e : Dc(t, We.memoizedState, e);
  }, useTransition: function() {
    var e = Rs(Co)[0], t = Et().memoizedState;
    return [e, t];
  }, useMutableSource: Sc, useSyncExternalStore: kc, useId: Ic, unstable_isNewReconciler: !1 };
  function _t(e, t) {
    if (e && e.defaultProps) {
      t = H({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function As(e, t, n, o) {
    t = e.memoizedState, n = n(o, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ji = { isMounted: function(e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var o = et(), s = En(e), u = tn(o, s);
    u.payload = t, n != null && (u.callback = n), t = wn(e, u, s), t !== null && (Tt(t, e, s, o), Ri(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var o = et(), s = En(e), u = tn(o, s);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = wn(e, u, s), t !== null && (Tt(t, e, s, o), Ri(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = et(), o = En(e), s = tn(n, o);
    s.tag = 2, t != null && (s.callback = t), t = wn(e, s, o), t !== null && (Tt(t, e, o, n), Ri(t, e, o));
  } };
  function $c(e, t, n, o, s, u, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, u, m) : t.prototype && t.prototype.isPureReactComponent ? !co(n, o) || !co(s, u) : !0;
  }
  function Vc(e, t, n) {
    var o = !1, s = gn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = kt(u) : (s = rt(t) ? Wn : Ye.current, o = t.contextTypes, u = (o = o != null) ? hr(e, s) : gn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ji, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Uc(e, t, n, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && ji.enqueueReplaceState(t, t.state, null);
  }
  function Ts(e, t, n, o) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, ys(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? s.context = kt(u) : (u = rt(t) ? Wn : Ye.current, s.context = hr(e, u)), s.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (As(e, t, u, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && ji.enqueueReplaceState(s, s.state, null), _i(e, n, s, o), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Er(e, t) {
    try {
      var n = "", o = t;
      do
        n += ve(o), o = o.return;
      while (o);
      var s = n;
    } catch (u) {
      s = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Ls(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function zs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var ph = typeof WeakMap == "function" ? WeakMap : Map;
  function Hc(e, t, n) {
    n = tn(-1, n), n.tag = 3, n.payload = { element: null };
    var o = t.value;
    return n.callback = function() {
      Vi || (Vi = !0, Ys = o), zs(e, t);
    }, n;
  }
  function Qc(e, t, n) {
    n = tn(-1, n), n.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = t.value;
      n.payload = function() {
        return o(s);
      }, n.callback = function() {
        zs(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      zs(e, t), typeof o != "function" && (Sn === null ? Sn = /* @__PURE__ */ new Set([this]) : Sn.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function Kc(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new ph();
      var s = /* @__PURE__ */ new Set();
      o.set(t, s);
    } else s = o.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), o.set(t, s));
    s.has(n) || (s.add(n), e = bh.bind(null, e, t, n), t.then(e, e));
  }
  function Gc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Yc(e, t, n, o, s) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tn(-1, 1), t.tag = 2, wn(n, t, 1))), n.lanes |= 1), e);
  }
  var mh = D.ReactCurrentOwner, ot = !1;
  function qe(e, t, n, o) {
    t.child = e === null ? hc(t, null, n, o) : wr(t, e.child, n, o);
  }
  function Xc(e, t, n, o, s) {
    n = n.render;
    var u = t.ref;
    return Sr(t, s), o = Ps(e, t, n, o, u, s), n = Ns(), e !== null && !ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, nn(e, t, s)) : (Le && n && as(t), t.flags |= 1, qe(e, t, o, s), t.child);
  }
  function Zc(e, t, n, o, s) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !na(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Jc(e, t, u, o, s)) : (e = Yi(n.type, null, o, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !(e.lanes & s)) {
      var m = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : co, n(m, o) && e.ref === t.ref) return nn(e, t, s);
    }
    return t.flags |= 1, e = Pn(u, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Jc(e, t, n, o, s) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (co(u, o) && e.ref === t.ref) if (ot = !1, t.pendingProps = o = u, (e.lanes & s) !== 0) e.flags & 131072 && (ot = !0);
      else return t.lanes = e.lanes, nn(e, t, s);
    }
    return Ms(e, t, n, o, s);
  }
  function qc(e, t, n) {
    var o = t.pendingProps, s = o.children, u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Re(Pr, mt), mt |= n;
    else {
      if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Re(Pr, mt), mt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = u !== null ? u.baseLanes : n, Re(Pr, mt), mt |= o;
    }
    else u !== null ? (o = u.baseLanes | n, t.memoizedState = null) : o = n, Re(Pr, mt), mt |= o;
    return qe(e, t, s, n), t.child;
  }
  function ef(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ms(e, t, n, o, s) {
    var u = rt(n) ? Wn : Ye.current;
    return u = hr(t, u), Sr(t, s), n = Ps(e, t, n, o, u, s), o = Ns(), e !== null && !ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, nn(e, t, s)) : (Le && o && as(t), t.flags |= 1, qe(e, t, n, s), t.child);
  }
  function tf(e, t, n, o, s) {
    if (rt(n)) {
      var u = !0;
      xi(t);
    } else u = !1;
    if (Sr(t, s), t.stateNode === null) Ii(e, t), Vc(t, n, o), Ts(t, n, o, s), o = !0;
    else if (e === null) {
      var m = t.stateNode, y = t.memoizedProps;
      m.props = y;
      var E = m.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = kt(L) : (L = rt(n) ? Wn : Ye.current, L = hr(t, L));
      var W = n.getDerivedStateFromProps, V = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      V || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (y !== o || E !== L) && Uc(t, m, o, L), yn = !1;
      var F = t.memoizedState;
      m.state = F, _i(t, o, m, s), E = t.memoizedState, y !== o || F !== E || nt.current || yn ? (typeof W == "function" && (As(t, n, W, o), E = t.memoizedState), (y = yn || $c(t, n, y, o, F, E, L)) ? (V || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = E), m.props = o, m.state = E, m.context = L, o = y) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      m = t.stateNode, vc(e, t), y = t.memoizedProps, L = t.type === t.elementType ? y : _t(t.type, y), m.props = L, V = t.pendingProps, F = m.context, E = n.contextType, typeof E == "object" && E !== null ? E = kt(E) : (E = rt(n) ? Wn : Ye.current, E = hr(t, E));
      var Y = n.getDerivedStateFromProps;
      (W = typeof Y == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (y !== V || F !== E) && Uc(t, m, o, E), yn = !1, F = t.memoizedState, m.state = F, _i(t, o, m, s);
      var J = t.memoizedState;
      y !== V || F !== J || nt.current || yn ? (typeof Y == "function" && (As(t, n, Y, o), J = t.memoizedState), (L = yn || $c(t, n, L, o, F, J, E) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, J, E), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, J, E)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || y === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = J), m.props = o, m.state = J, m.context = E, o = L) : (typeof m.componentDidUpdate != "function" || y === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return js(e, t, n, o, u, s);
  }
  function js(e, t, n, o, s, u) {
    ef(e, t);
    var m = (t.flags & 128) !== 0;
    if (!o && !m) return s && lc(t, n, !1), nn(e, t, u);
    o = t.stateNode, mh.current = t;
    var y = m && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1, e !== null && m ? (t.child = wr(t, e.child, null, u), t.child = wr(t, null, y, u)) : qe(e, t, y, u), t.memoizedState = o.state, s && lc(t, n, !0), t.child;
  }
  function nf(e) {
    var t = e.stateNode;
    t.pendingContext ? oc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && oc(e, t.context, !1), ws(e, t.containerInfo);
  }
  function rf(e, t, n, o, s) {
    return yr(), ds(s), t.flags |= 256, qe(e, t, n, o), t.child;
  }
  var Ds = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Is(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function of(e, t, n) {
    var o = t.pendingProps, s = ze.current, u = !1, m = (t.flags & 128) !== 0, y;
    if ((y = m) || (y = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), y ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Re(ze, s & 1), e === null)
      return fs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (m = o.children, e = o.fallback, u ? (o = t.mode, u = t.child, m = { mode: "hidden", children: m }, !(o & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = m) : u = Xi(m, o, 0, null), e = Zn(e, o, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Is(n), t.memoizedState = Ds, e) : Fs(t, m));
    if (s = e.memoizedState, s !== null && (y = s.dehydrated, y !== null)) return hh(e, t, m, o, y, s, n);
    if (u) {
      u = o.fallback, m = t.mode, s = e.child, y = s.sibling;
      var E = { mode: "hidden", children: o.children };
      return !(m & 1) && t.child !== s ? (o = t.child, o.childLanes = 0, o.pendingProps = E, t.deletions = null) : (o = Pn(s, E), o.subtreeFlags = s.subtreeFlags & 14680064), y !== null ? u = Pn(y, u) : (u = Zn(u, m, n, null), u.flags |= 2), u.return = t, o.return = t, o.sibling = u, t.child = o, o = u, u = t.child, m = e.child.memoizedState, m = m === null ? Is(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, u.memoizedState = m, u.childLanes = e.childLanes & ~n, t.memoizedState = Ds, o;
    }
    return u = e.child, e = u.sibling, o = Pn(u, { mode: "visible", children: o.children }), !(t.mode & 1) && (o.lanes = n), o.return = t, o.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o;
  }
  function Fs(e, t) {
    return t = Xi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Di(e, t, n, o) {
    return o !== null && ds(o), wr(t, e.child, null, n), e = Fs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function hh(e, t, n, o, s, u, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, o = Ls(Error(l(422))), Di(e, t, m, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = o.fallback, s = t.mode, o = Xi({ mode: "visible", children: o.children }, s, 0, null), u = Zn(u, s, m, null), u.flags |= 2, o.return = t, u.return = t, o.sibling = u, t.child = o, t.mode & 1 && wr(t, e.child, null, m), t.child.memoizedState = Is(m), t.memoizedState = Ds, u);
    if (!(t.mode & 1)) return Di(e, t, m, null);
    if (s.data === "$!") {
      if (o = s.nextSibling && s.nextSibling.dataset, o) var y = o.dgst;
      return o = y, u = Error(l(419)), o = Ls(u, o, void 0), Di(e, t, m, o);
    }
    if (y = (m & e.childLanes) !== 0, ot || y) {
      if (o = He, o !== null) {
        switch (m & -m) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        s = s & (o.suspendedLanes | m) ? 0 : s, s !== 0 && s !== u.retryLane && (u.retryLane = s, en(e, s), Tt(o, e, s, -1));
      }
      return ta(), o = Ls(Error(l(421))), Di(e, t, m, o);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Rh.bind(null, e), s._reactRetry = t, null) : (e = u.treeContext, pt = mn(s.nextSibling), dt = t, Le = !0, Rt = null, e !== null && (xt[St++] = Jt, xt[St++] = qt, xt[St++] = $n, Jt = e.id, qt = e.overflow, $n = t), t = Fs(t, o.children), t.flags |= 4096, t);
  }
  function lf(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), gs(e.return, t, n);
  }
  function Bs(e, t, n, o, s) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: n, tailMode: s } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = o, u.tail = n, u.tailMode = s);
  }
  function sf(e, t, n) {
    var o = t.pendingProps, s = o.revealOrder, u = o.tail;
    if (qe(e, t, o.children, n), o = ze.current, o & 2) o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lf(e, n, t);
        else if (e.tag === 19) lf(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      o &= 1;
    }
    if (Re(ze, o), !(t.mode & 1)) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Oi(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Bs(t, !1, s, n, u);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Oi(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Bs(t, !0, n, null, u);
        break;
      case "together":
        Bs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ii(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Kn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function gh(e, t, n) {
    switch (t.tag) {
      case 3:
        nf(t), yr();
        break;
      case 5:
        xc(t);
        break;
      case 1:
        rt(t.type) && xi(t);
        break;
      case 4:
        ws(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context, s = t.memoizedProps.value;
        Re(Ni, o._currentValue), o._currentValue = s;
        break;
      case 13:
        if (o = t.memoizedState, o !== null)
          return o.dehydrated !== null ? (Re(ze, ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? of(e, t, n) : (Re(ze, ze.current & 1), e = nn(e, t, n), e !== null ? e.sibling : null);
        Re(ze, ze.current & 1);
        break;
      case 19:
        if (o = (n & t.childLanes) !== 0, e.flags & 128) {
          if (o) return sf(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Re(ze, ze.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, qc(e, t, n);
    }
    return nn(e, t, n);
  }
  var af, Ws, uf, cf;
  af = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Ws = function() {
  }, uf = function(e, t, n, o) {
    var s = e.memoizedProps;
    if (s !== o) {
      e = t.stateNode, Hn(Ft.current);
      var u = null;
      switch (n) {
        case "input":
          s = Te(e, s), o = Te(e, o), u = [];
          break;
        case "select":
          s = H({}, s, { value: void 0 }), o = H({}, o, { value: void 0 }), u = [];
          break;
        case "textarea":
          s = Dn(e, s), o = Dn(e, o), u = [];
          break;
        default:
          typeof s.onClick != "function" && typeof o.onClick == "function" && (e.onclick = vi);
      }
      $r(n, o);
      var m;
      n = null;
      for (L in s) if (!o.hasOwnProperty(L) && s.hasOwnProperty(L) && s[L] != null) if (L === "style") {
        var y = s[L];
        for (m in y) y.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (c.hasOwnProperty(L) ? u || (u = []) : (u = u || []).push(L, null));
      for (L in o) {
        var E = o[L];
        if (y = s?.[L], o.hasOwnProperty(L) && E !== y && (E != null || y != null)) if (L === "style") if (y) {
          for (m in y) !y.hasOwnProperty(m) || E && E.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in E) E.hasOwnProperty(m) && y[m] !== E[m] && (n || (n = {}), n[m] = E[m]);
        } else n || (u || (u = []), u.push(
          L,
          n
        )), n = E;
        else L === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, y = y ? y.__html : void 0, E != null && y !== E && (u = u || []).push(L, E)) : L === "children" ? typeof E != "string" && typeof E != "number" || (u = u || []).push(L, "" + E) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (c.hasOwnProperty(L) ? (E != null && L === "onScroll" && _e("scroll", e), u || y === E || (u = [])) : (u = u || []).push(L, E));
      }
      n && (u = u || []).push("style", n);
      var L = u;
      (t.updateQueue = L) && (t.flags |= 4);
    }
  }, cf = function(e, t, n, o) {
    n !== o && (t.flags |= 4);
  };
  function No(e, t) {
    if (!Le) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var o = null; n !== null; ) n.alternate !== null && (o = n), n = n.sibling;
        o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
    }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, o = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, o |= s.subtreeFlags & 14680064, o |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, o |= s.subtreeFlags, o |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= o, e.childLanes = n, t;
  }
  function vh(e, t, n) {
    var o = t.pendingProps;
    switch (us(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ze(t), null;
      case 1:
        return rt(t.type) && wi(), Ze(t), null;
      case 3:
        return o = t.stateNode, kr(), Oe(nt), Oe(Ye), ks(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (Ci(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Rt !== null && (Js(Rt), Rt = null))), Ws(e, t), Ze(t), null;
      case 5:
        xs(t);
        var s = Hn(So.current);
        if (n = t.type, e !== null && t.stateNode != null) uf(e, t, n, o, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return Ze(t), null;
          }
          if (e = Hn(Ft.current), Ci(t)) {
            o = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (o[It] = t, o[go] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                _e("cancel", o), _e("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", o);
                break;
              case "video":
              case "audio":
                for (s = 0; s < po.length; s++) _e(po[s], o);
                break;
              case "source":
                _e("error", o);
                break;
              case "img":
              case "image":
              case "link":
                _e(
                  "error",
                  o
                ), _e("load", o);
                break;
              case "details":
                _e("toggle", o);
                break;
              case "input":
                Ve(o, u), _e("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!u.multiple }, _e("invalid", o);
                break;
              case "textarea":
                tr(o, u), _e("invalid", o);
            }
            $r(n, u), s = null;
            for (var m in u) if (u.hasOwnProperty(m)) {
              var y = u[m];
              m === "children" ? typeof y == "string" ? o.textContent !== y && (u.suppressHydrationWarning !== !0 && gi(o.textContent, y, e), s = ["children", y]) : typeof y == "number" && o.textContent !== "" + y && (u.suppressHydrationWarning !== !0 && gi(
                o.textContent,
                y,
                e
              ), s = ["children", "" + y]) : c.hasOwnProperty(m) && y != null && m === "onScroll" && _e("scroll", o);
            }
            switch (n) {
              case "input":
                Pe(o), jt(o, u, !0);
                break;
              case "textarea":
                Pe(o), Br(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = vi);
            }
            o = s, t.updateQueue = o, o !== null && (t.flags |= 4);
          } else {
            m = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = m.createElement(n, { is: o.is }) : (e = m.createElement(n), n === "select" && (m = e, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : e = m.createElementNS(e, n), e[It] = t, e[go] = o, af(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = Vr(n, o), n) {
                case "dialog":
                  _e("cancel", e), _e("close", e), s = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  _e("load", e), s = o;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < po.length; s++) _e(po[s], e);
                  s = o;
                  break;
                case "source":
                  _e("error", e), s = o;
                  break;
                case "img":
                case "image":
                case "link":
                  _e(
                    "error",
                    e
                  ), _e("load", e), s = o;
                  break;
                case "details":
                  _e("toggle", e), s = o;
                  break;
                case "input":
                  Ve(e, o), s = Te(e, o), _e("invalid", e);
                  break;
                case "option":
                  s = o;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!o.multiple }, s = H({}, o, { value: void 0 }), _e("invalid", e);
                  break;
                case "textarea":
                  tr(e, o), s = Dn(e, o), _e("invalid", e);
                  break;
                default:
                  s = o;
              }
              $r(n, s), y = s;
              for (u in y) if (y.hasOwnProperty(u)) {
                var E = y[u];
                u === "style" ? Ko(e, E) : u === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && or(e, E)) : u === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && wt(e, E) : typeof E == "number" && wt(e, "" + E) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? E != null && u === "onScroll" && _e("scroll", e) : E != null && z(e, u, E, m));
              }
              switch (n) {
                case "input":
                  Pe(e), jt(e, o, !1);
                  break;
                case "textarea":
                  Pe(e), Br(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + fe(o.value));
                  break;
                case "select":
                  e.multiple = !!o.multiple, u = o.value, u != null ? yt(e, !!o.multiple, u, !1) : o.defaultValue != null && yt(
                    e,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = vi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ze(t), null;
      case 6:
        if (e && t.stateNode != null) cf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(l(166));
          if (n = Hn(So.current), Hn(Ft.current), Ci(t)) {
            if (o = t.stateNode, n = t.memoizedProps, o[It] = t, (u = o.nodeValue !== n) && (e = dt, e !== null)) switch (e.tag) {
              case 3:
                gi(o.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && gi(o.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o), o[It] = t, t.stateNode = o;
        }
        return Ze(t), null;
      case 13:
        if (Oe(ze), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Le && pt !== null && t.mode & 1 && !(t.flags & 128)) dc(), yr(), t.flags |= 98560, u = !1;
          else if (u = Ci(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
              u[It] = t;
            } else yr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ze(t), u = !1;
          } else Rt !== null && (Js(Rt), Rt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, t.mode & 1 && (e === null || ze.current & 1 ? $e === 0 && ($e = 3) : ta())), t.updateQueue !== null && (t.flags |= 4), Ze(t), null);
      case 4:
        return kr(), Ws(e, t), e === null && mo(t.stateNode.containerInfo), Ze(t), null;
      case 10:
        return hs(t.type._context), Ze(t), null;
      case 17:
        return rt(t.type) && wi(), Ze(t), null;
      case 19:
        if (Oe(ze), u = t.memoizedState, u === null) return Ze(t), null;
        if (o = (t.flags & 128) !== 0, m = u.rendering, m === null) if (o) No(u, !1);
        else {
          if ($e !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (m = Oi(e), m !== null) {
              for (t.flags |= 128, No(u, !1), o = m.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = n, n = t.child; n !== null; ) u = n, e = o, u.flags &= 14680066, m = u.alternate, m === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = m.childLanes, u.lanes = m.lanes, u.child = m.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = m.memoizedProps, u.memoizedState = m.memoizedState, u.updateQueue = m.updateQueue, u.type = m.type, e = m.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Re(ze, ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Ie() > Nr && (t.flags |= 128, o = !0, No(u, !1), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = Oi(m), e !== null) {
            if (t.flags |= 128, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), No(u, !0), u.tail === null && u.tailMode === "hidden" && !m.alternate && !Le) return Ze(t), null;
          } else 2 * Ie() - u.renderingStartTime > Nr && n !== 1073741824 && (t.flags |= 128, o = !0, No(u, !1), t.lanes = 4194304);
          u.isBackwards ? (m.sibling = t.child, t.child = m) : (n = u.last, n !== null ? n.sibling = m : t.child = m, u.last = m);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Ie(), t.sibling = null, n = ze.current, Re(ze, o ? n & 1 | 2 : n & 1), t) : (Ze(t), null);
      case 22:
      case 23:
        return ea(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && t.mode & 1 ? mt & 1073741824 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function yh(e, t) {
    switch (us(t), t.tag) {
      case 1:
        return rt(t.type) && wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return kr(), Oe(nt), Oe(Ye), ks(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return xs(t), null;
      case 13:
        if (Oe(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          yr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Oe(ze), null;
      case 4:
        return kr(), null;
      case 10:
        return hs(t.type._context), null;
      case 22:
      case 23:
        return ea(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fi = !1, Je = !1, wh = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
  function Cr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (o) {
      De(e, t, o);
    }
    else n.current = null;
  }
  function $s(e, t, n) {
    try {
      n();
    } catch (o) {
      De(e, t, o);
    }
  }
  var ff = !1;
  function xh(e, t) {
    if (es = ii, e = $u(), Ql(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var s = o.anchorOffset, u = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var m = 0, y = -1, E = -1, L = 0, W = 0, V = e, F = null;
          t: for (; ; ) {
            for (var Y; V !== n || s !== 0 && V.nodeType !== 3 || (y = m + s), V !== u || o !== 0 && V.nodeType !== 3 || (E = m + o), V.nodeType === 3 && (m += V.nodeValue.length), (Y = V.firstChild) !== null; )
              F = V, V = Y;
            for (; ; ) {
              if (V === e) break t;
              if (F === n && ++L === s && (y = m), F === u && ++W === o && (E = m), (Y = V.nextSibling) !== null) break;
              V = F, F = V.parentNode;
            }
            V = Y;
          }
          n = y === -1 || E === -1 ? null : { start: y, end: E };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ts = { focusedElem: e, selectionRange: n }, ii = !1, Z = t; Z !== null; ) if (t = Z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Z = e;
    else for (; Z !== null; ) {
      t = Z;
      try {
        var J = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (J !== null) {
              var ee = J.memoizedProps, Fe = J.memoizedState, O = t.stateNode, R = O.getSnapshotBeforeUpdate(t.elementType === t.type ? ee : _t(t.type, ee), Fe);
              O.__reactInternalSnapshotBeforeUpdate = R;
            }
            break;
          case 3:
            var A = t.stateNode.containerInfo;
            A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (U) {
        De(t, t.return, U);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Z = e;
        break;
      }
      Z = t.return;
    }
    return J = ff, ff = !1, J;
  }
  function bo(e, t, n) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var s = o = o.next;
      do {
        if ((s.tag & e) === e) {
          var u = s.destroy;
          s.destroy = void 0, u !== void 0 && $s(t, n, u);
        }
        s = s.next;
      } while (s !== o);
    }
  }
  function Bi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var o = n.create;
          n.destroy = o();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Vs(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function df(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, df(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[It], delete t[go], delete t[is], delete t[nh], delete t[rh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function pf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function mf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || pf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Us(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vi));
    else if (o !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
  }
  function Hs(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && (e = e.child, e !== null)) for (Hs(e, t, n), e = e.sibling; e !== null; ) Hs(e, t, n), e = e.sibling;
  }
  var Ke = null, Ot = !1;
  function xn(e, t, n) {
    for (n = n.child; n !== null; ) hf(e, t, n), n = n.sibling;
  }
  function hf(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
      Dt.onCommitFiberUnmount(qo, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Je || Cr(n, t);
      case 6:
        var o = Ke, s = Ot;
        Ke = null, xn(e, t, n), Ke = o, Ot = s, Ke !== null && (Ot ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ke.removeChild(n.stateNode));
        break;
      case 18:
        Ke !== null && (Ot ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? os(e.parentNode, n) : e.nodeType === 1 && os(e, n), oo(e)) : os(Ke, n.stateNode));
        break;
      case 4:
        o = Ke, s = Ot, Ke = n.stateNode.containerInfo, Ot = !0, xn(e, t, n), Ke = o, Ot = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Je && (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          s = o = o.next;
          do {
            var u = s, m = u.destroy;
            u = u.tag, m !== void 0 && (u & 2 || u & 4) && $s(n, t, m), s = s.next;
          } while (s !== o);
        }
        xn(e, t, n);
        break;
      case 1:
        if (!Je && (Cr(n, t), o = n.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = n.memoizedProps, o.state = n.memoizedState, o.componentWillUnmount();
        } catch (y) {
          De(n, t, y);
        }
        xn(e, t, n);
        break;
      case 21:
        xn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Je = (o = Je) || n.memoizedState !== null, xn(e, t, n), Je = o) : xn(e, t, n);
        break;
      default:
        xn(e, t, n);
    }
  }
  function gf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new wh()), t.forEach(function(o) {
        var s = _h.bind(null, e, o);
        n.has(o) || (n.add(o), o.then(s, s));
      });
    }
  }
  function At(e, t) {
    var n = t.deletions;
    if (n !== null) for (var o = 0; o < n.length; o++) {
      var s = n[o];
      try {
        var u = e, m = t, y = m;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              Ke = y.stateNode, Ot = !1;
              break e;
            case 3:
              Ke = y.stateNode.containerInfo, Ot = !0;
              break e;
            case 4:
              Ke = y.stateNode.containerInfo, Ot = !0;
              break e;
          }
          y = y.return;
        }
        if (Ke === null) throw Error(l(160));
        hf(u, m, s), Ke = null, Ot = !1;
        var E = s.alternate;
        E !== null && (E.return = null), s.return = null;
      } catch (L) {
        De(s, t, L);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vf(t, e), t = t.sibling;
  }
  function vf(e, t) {
    var n = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (At(t, e), Wt(e), o & 4) {
          try {
            bo(3, e, e.return), Bi(3, e);
          } catch (ee) {
            De(e, e.return, ee);
          }
          try {
            bo(5, e, e.return);
          } catch (ee) {
            De(e, e.return, ee);
          }
        }
        break;
      case 1:
        At(t, e), Wt(e), o & 512 && n !== null && Cr(n, n.return);
        break;
      case 5:
        if (At(t, e), Wt(e), o & 512 && n !== null && Cr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            wt(s, "");
          } catch (ee) {
            De(e, e.return, ee);
          }
        }
        if (o & 4 && (s = e.stateNode, s != null)) {
          var u = e.memoizedProps, m = n !== null ? n.memoizedProps : u, y = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            y === "input" && u.type === "radio" && u.name != null && at(s, u), Vr(y, m);
            var L = Vr(y, u);
            for (m = 0; m < E.length; m += 2) {
              var W = E[m], V = E[m + 1];
              W === "style" ? Ko(s, V) : W === "dangerouslySetInnerHTML" ? or(s, V) : W === "children" ? wt(s, V) : z(s, W, V, L);
            }
            switch (y) {
              case "input":
                ut(s, u);
                break;
              case "textarea":
                Fr(s, u);
                break;
              case "select":
                var F = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!u.multiple;
                var Y = u.value;
                Y != null ? yt(s, !!u.multiple, Y, !1) : F !== !!u.multiple && (u.defaultValue != null ? yt(
                  s,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : yt(s, !!u.multiple, u.multiple ? [] : "", !1));
            }
            s[go] = u;
          } catch (ee) {
            De(e, e.return, ee);
          }
        }
        break;
      case 6:
        if (At(t, e), Wt(e), o & 4) {
          if (e.stateNode === null) throw Error(l(162));
          s = e.stateNode, u = e.memoizedProps;
          try {
            s.nodeValue = u;
          } catch (ee) {
            De(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (At(t, e), Wt(e), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
          oo(t.containerInfo);
        } catch (ee) {
          De(e, e.return, ee);
        }
        break;
      case 4:
        At(t, e), Wt(e);
        break;
      case 13:
        At(t, e), Wt(e), s = e.child, s.flags & 8192 && (u = s.memoizedState !== null, s.stateNode.isHidden = u, !u || s.alternate !== null && s.alternate.memoizedState !== null || (Gs = Ie())), o & 4 && gf(e);
        break;
      case 22:
        if (W = n !== null && n.memoizedState !== null, e.mode & 1 ? (Je = (L = Je) || W, At(t, e), Je = L) : At(t, e), Wt(e), o & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !W && e.mode & 1) for (Z = e, W = e.child; W !== null; ) {
            for (V = Z = W; Z !== null; ) {
              switch (F = Z, Y = F.child, F.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bo(4, F, F.return);
                  break;
                case 1:
                  Cr(F, F.return);
                  var J = F.stateNode;
                  if (typeof J.componentWillUnmount == "function") {
                    o = F, n = F.return;
                    try {
                      t = o, J.props = t.memoizedProps, J.state = t.memoizedState, J.componentWillUnmount();
                    } catch (ee) {
                      De(o, n, ee);
                    }
                  }
                  break;
                case 5:
                  Cr(F, F.return);
                  break;
                case 22:
                  if (F.memoizedState !== null) {
                    xf(V);
                    continue;
                  }
              }
              Y !== null ? (Y.return = F, Z = Y) : xf(V);
            }
            W = W.sibling;
          }
          e: for (W = null, V = e; ; ) {
            if (V.tag === 5) {
              if (W === null) {
                W = V;
                try {
                  s = V.stateNode, L ? (u = s.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (y = V.stateNode, E = V.memoizedProps.style, m = E != null && E.hasOwnProperty("display") ? E.display : null, y.style.display = In("display", m));
                } catch (ee) {
                  De(e, e.return, ee);
                }
              }
            } else if (V.tag === 6) {
              if (W === null) try {
                V.stateNode.nodeValue = L ? "" : V.memoizedProps;
              } catch (ee) {
                De(e, e.return, ee);
              }
            } else if ((V.tag !== 22 && V.tag !== 23 || V.memoizedState === null || V === e) && V.child !== null) {
              V.child.return = V, V = V.child;
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null; ) {
              if (V.return === null || V.return === e) break e;
              W === V && (W = null), V = V.return;
            }
            W === V && (W = null), V.sibling.return = V.return, V = V.sibling;
          }
        }
        break;
      case 19:
        At(t, e), Wt(e), o & 4 && gf(e);
        break;
      case 21:
        break;
      default:
        At(
          t,
          e
        ), Wt(e);
    }
  }
  function Wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (pf(n)) {
              var o = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (o.tag) {
          case 5:
            var s = o.stateNode;
            o.flags & 32 && (wt(s, ""), o.flags &= -33);
            var u = mf(e);
            Hs(e, u, s);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, y = mf(e);
            Us(e, y, m);
            break;
          default:
            throw Error(l(161));
        }
      } catch (E) {
        De(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sh(e, t, n) {
    Z = e, yf(e);
  }
  function yf(e, t, n) {
    for (var o = (e.mode & 1) !== 0; Z !== null; ) {
      var s = Z, u = s.child;
      if (s.tag === 22 && o) {
        var m = s.memoizedState !== null || Fi;
        if (!m) {
          var y = s.alternate, E = y !== null && y.memoizedState !== null || Je;
          y = Fi;
          var L = Je;
          if (Fi = m, (Je = E) && !L) for (Z = s; Z !== null; ) m = Z, E = m.child, m.tag === 22 && m.memoizedState !== null ? Sf(s) : E !== null ? (E.return = m, Z = E) : Sf(s);
          for (; u !== null; ) Z = u, yf(u), u = u.sibling;
          Z = s, Fi = y, Je = L;
        }
        wf(e);
      } else s.subtreeFlags & 8772 && u !== null ? (u.return = s, Z = u) : wf(e);
    }
  }
  function wf(e) {
    for (; Z !== null; ) {
      var t = Z;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Je || Bi(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !Je) if (n === null) o.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                o.componentDidUpdate(s, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && wc(t, u, o);
              break;
            case 3:
              var m = t.updateQueue;
              if (m !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                wc(t, m, n);
              }
              break;
            case 5:
              var y = t.stateNode;
              if (n === null && t.flags & 4) {
                n = y;
                var E = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    E.autoFocus && n.focus();
                    break;
                  case "img":
                    E.src && (n.src = E.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var L = t.alternate;
                if (L !== null) {
                  var W = L.memoizedState;
                  if (W !== null) {
                    var V = W.dehydrated;
                    V !== null && oo(V);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(l(163));
          }
          Je || t.flags & 512 && Vs(t);
        } catch (F) {
          De(t, t.return, F);
        }
      }
      if (t === e) {
        Z = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, Z = n;
        break;
      }
      Z = t.return;
    }
  }
  function xf(e) {
    for (; Z !== null; ) {
      var t = Z;
      if (t === e) {
        Z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Z = n;
        break;
      }
      Z = t.return;
    }
  }
  function Sf(e) {
    for (; Z !== null; ) {
      var t = Z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Bi(4, t);
            } catch (E) {
              De(t, n, E);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var s = t.return;
              try {
                o.componentDidMount();
              } catch (E) {
                De(t, s, E);
              }
            }
            var u = t.return;
            try {
              Vs(t);
            } catch (E) {
              De(t, u, E);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Vs(t);
            } catch (E) {
              De(t, m, E);
            }
        }
      } catch (E) {
        De(t, t.return, E);
      }
      if (t === e) {
        Z = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, Z = y;
        break;
      }
      Z = t.return;
    }
  }
  var kh = Math.ceil, Wi = D.ReactCurrentDispatcher, Qs = D.ReactCurrentOwner, Ct = D.ReactCurrentBatchConfig, Ee = 0, He = null, Be = null, Ge = 0, mt = 0, Pr = hn(0), $e = 0, Ro = null, Kn = 0, $i = 0, Ks = 0, _o = null, it = null, Gs = 0, Nr = 1 / 0, rn = null, Vi = !1, Ys = null, Sn = null, Ui = !1, kn = null, Hi = 0, Oo = 0, Xs = null, Qi = -1, Ki = 0;
  function et() {
    return Ee & 6 ? Ie() : Qi !== -1 ? Qi : Qi = Ie();
  }
  function En(e) {
    return e.mode & 1 ? Ee & 2 && Ge !== 0 ? Ge & -Ge : ih.transition !== null ? (Ki === 0 && (Ki = pu()), Ki) : (e = Ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ku(e.type)), e) : 1;
  }
  function Tt(e, t, n, o) {
    if (50 < Oo) throw Oo = 0, Xs = null, Error(l(185));
    qr(e, n, o), (!(Ee & 2) || e !== He) && (e === He && (!(Ee & 2) && ($i |= n), $e === 4 && Cn(e, Ge)), lt(e, o), n === 1 && Ee === 0 && !(t.mode & 1) && (Nr = Ie() + 500, Si && vn()));
  }
  function lt(e, t) {
    var n = e.callbackNode;
    im(e, t);
    var o = ni(e, e === He ? Ge : 0);
    if (o === 0) n !== null && cu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = o & -o, e.callbackPriority !== t) {
      if (n != null && cu(n), t === 1) e.tag === 0 ? oh(Ef.bind(null, e)) : sc(Ef.bind(null, e)), eh(function() {
        !(Ee & 6) && vn();
      }), n = null;
      else {
        switch (mu(o)) {
          case 1:
            n = _l;
            break;
          case 4:
            n = fu;
            break;
          case 16:
            n = Jo;
            break;
          case 536870912:
            n = du;
            break;
          default:
            n = Jo;
        }
        n = Af(n, kf.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function kf(e, t) {
    if (Qi = -1, Ki = 0, Ee & 6) throw Error(l(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n) return null;
    var o = ni(e, e === He ? Ge : 0);
    if (o === 0) return null;
    if (o & 30 || o & e.expiredLanes || t) t = Gi(e, o);
    else {
      t = o;
      var s = Ee;
      Ee |= 2;
      var u = Pf();
      (He !== e || Ge !== t) && (rn = null, Nr = Ie() + 500, Yn(e, t));
      do
        try {
          Ph();
          break;
        } catch (y) {
          Cf(e, y);
        }
      while (!0);
      ms(), Wi.current = u, Ee = s, Be !== null ? t = 0 : (He = null, Ge = 0, t = $e);
    }
    if (t !== 0) {
      if (t === 2 && (s = Ol(e), s !== 0 && (o = s, t = Zs(e, s))), t === 1) throw n = Ro, Yn(e, 0), Cn(e, o), lt(e, Ie()), n;
      if (t === 6) Cn(e, o);
      else {
        if (s = e.current.alternate, !(o & 30) && !Eh(s) && (t = Gi(e, o), t === 2 && (u = Ol(e), u !== 0 && (o = u, t = Zs(e, u))), t === 1)) throw n = Ro, Yn(e, 0), Cn(e, o), lt(e, Ie()), n;
        switch (e.finishedWork = s, e.finishedLanes = o, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Xn(e, it, rn);
            break;
          case 3:
            if (Cn(e, o), (o & 130023424) === o && (t = Gs + 500 - Ie(), 10 < t)) {
              if (ni(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & o) !== o) {
                et(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = rs(Xn.bind(null, e, it, rn), t);
              break;
            }
            Xn(e, it, rn);
            break;
          case 4:
            if (Cn(e, o), (o & 4194240) === o) break;
            for (t = e.eventTimes, s = -1; 0 < o; ) {
              var m = 31 - Nt(o);
              u = 1 << m, m = t[m], m > s && (s = m), o &= ~u;
            }
            if (o = s, o = Ie() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * kh(o / 1960)) - o, 10 < o) {
              e.timeoutHandle = rs(Xn.bind(null, e, it, rn), o);
              break;
            }
            Xn(e, it, rn);
            break;
          case 5:
            Xn(e, it, rn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return lt(e, Ie()), e.callbackNode === n ? kf.bind(null, e) : null;
  }
  function Zs(e, t) {
    var n = _o;
    return e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256), e = Gi(e, t), e !== 2 && (t = it, it = n, t !== null && Js(t)), e;
  }
  function Js(e) {
    it === null ? it = e : it.push.apply(it, e);
  }
  function Eh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var o = 0; o < n.length; o++) {
          var s = n[o], u = s.getSnapshot;
          s = s.value;
          try {
            if (!bt(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Cn(e, t) {
    for (t &= ~Ks, t &= ~$i, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Nt(t), o = 1 << n;
      e[n] = -1, t &= ~o;
    }
  }
  function Ef(e) {
    if (Ee & 6) throw Error(l(327));
    br();
    var t = ni(e, 0);
    if (!(t & 1)) return lt(e, Ie()), null;
    var n = Gi(e, t);
    if (e.tag !== 0 && n === 2) {
      var o = Ol(e);
      o !== 0 && (t = o, n = Zs(e, o));
    }
    if (n === 1) throw n = Ro, Yn(e, 0), Cn(e, t), lt(e, Ie()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xn(e, it, rn), lt(e, Ie()), null;
  }
  function qs(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      Ee = n, Ee === 0 && (Nr = Ie() + 500, Si && vn());
    }
  }
  function Gn(e) {
    kn !== null && kn.tag === 0 && !(Ee & 6) && br();
    var t = Ee;
    Ee |= 1;
    var n = Ct.transition, o = Ne;
    try {
      if (Ct.transition = null, Ne = 1, e) return e();
    } finally {
      Ne = o, Ct.transition = n, Ee = t, !(Ee & 6) && vn();
    }
  }
  function ea() {
    mt = Pr.current, Oe(Pr);
  }
  function Yn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, qm(n)), Be !== null) for (n = Be.return; n !== null; ) {
      var o = n;
      switch (us(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && wi();
          break;
        case 3:
          kr(), Oe(nt), Oe(Ye), ks();
          break;
        case 5:
          xs(o);
          break;
        case 4:
          kr();
          break;
        case 13:
          Oe(ze);
          break;
        case 19:
          Oe(ze);
          break;
        case 10:
          hs(o.type._context);
          break;
        case 22:
        case 23:
          ea();
      }
      n = n.return;
    }
    if (He = e, Be = e = Pn(e.current, null), Ge = mt = t, $e = 0, Ro = null, Ks = $i = Kn = 0, it = _o = null, Un !== null) {
      for (t = 0; t < Un.length; t++) if (n = Un[t], o = n.interleaved, o !== null) {
        n.interleaved = null;
        var s = o.next, u = n.pending;
        if (u !== null) {
          var m = u.next;
          u.next = s, o.next = m;
        }
        n.pending = o;
      }
      Un = null;
    }
    return e;
  }
  function Cf(e, t) {
    do {
      var n = Be;
      try {
        if (ms(), Ai.current = Mi, Ti) {
          for (var o = Me.memoizedState; o !== null; ) {
            var s = o.queue;
            s !== null && (s.pending = null), o = o.next;
          }
          Ti = !1;
        }
        if (Qn = 0, Ue = We = Me = null, ko = !1, Eo = 0, Qs.current = null, n === null || n.return === null) {
          $e = 1, Ro = t, Be = null;
          break;
        }
        e: {
          var u = e, m = n.return, y = n, E = t;
          if (t = Ge, y.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var L = E, W = y, V = W.tag;
            if (!(W.mode & 1) && (V === 0 || V === 11 || V === 15)) {
              var F = W.alternate;
              F ? (W.updateQueue = F.updateQueue, W.memoizedState = F.memoizedState, W.lanes = F.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var Y = Gc(m);
            if (Y !== null) {
              Y.flags &= -257, Yc(Y, m, y, u, t), Y.mode & 1 && Kc(u, L, t), t = Y, E = L;
              var J = t.updateQueue;
              if (J === null) {
                var ee = /* @__PURE__ */ new Set();
                ee.add(E), t.updateQueue = ee;
              } else J.add(E);
              break e;
            } else {
              if (!(t & 1)) {
                Kc(u, L, t), ta();
                break e;
              }
              E = Error(l(426));
            }
          } else if (Le && y.mode & 1) {
            var Fe = Gc(m);
            if (Fe !== null) {
              !(Fe.flags & 65536) && (Fe.flags |= 256), Yc(Fe, m, y, u, t), ds(Er(E, y));
              break e;
            }
          }
          u = E = Er(E, y), $e !== 4 && ($e = 2), _o === null ? _o = [u] : _o.push(u), u = m;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var O = Hc(u, E, t);
                yc(u, O);
                break e;
              case 1:
                y = E;
                var R = u.type, A = u.stateNode;
                if (!(u.flags & 128) && (typeof R.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (Sn === null || !Sn.has(A)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var U = Qc(u, y, t);
                  yc(u, U);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        bf(n);
      } catch (ne) {
        t = ne, Be === n && n !== null && (Be = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Pf() {
    var e = Wi.current;
    return Wi.current = Mi, e === null ? Mi : e;
  }
  function ta() {
    ($e === 0 || $e === 3 || $e === 2) && ($e = 4), He === null || !(Kn & 268435455) && !($i & 268435455) || Cn(He, Ge);
  }
  function Gi(e, t) {
    var n = Ee;
    Ee |= 2;
    var o = Pf();
    (He !== e || Ge !== t) && (rn = null, Yn(e, t));
    do
      try {
        Ch();
        break;
      } catch (s) {
        Cf(e, s);
      }
    while (!0);
    if (ms(), Ee = n, Wi.current = o, Be !== null) throw Error(l(261));
    return He = null, Ge = 0, $e;
  }
  function Ch() {
    for (; Be !== null; ) Nf(Be);
  }
  function Ph() {
    for (; Be !== null && !Xp(); ) Nf(Be);
  }
  function Nf(e) {
    var t = Of(e.alternate, e, mt);
    e.memoizedProps = e.pendingProps, t === null ? bf(e) : Be = t, Qs.current = null;
  }
  function bf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = yh(n, t), n !== null) {
          n.flags &= 32767, Be = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          $e = 6, Be = null;
          return;
        }
      } else if (n = vh(n, t, mt), n !== null) {
        Be = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Xn(e, t, n) {
    var o = Ne, s = Ct.transition;
    try {
      Ct.transition = null, Ne = 1, Nh(e, t, n, o);
    } finally {
      Ct.transition = s, Ne = o;
    }
    return null;
  }
  function Nh(e, t, n, o) {
    do
      br();
    while (kn !== null);
    if (Ee & 6) throw Error(l(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (lm(e, u), e === He && (Be = He = null, Ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ui || (Ui = !0, Af(Jo, function() {
      return br(), null;
    })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
      u = Ct.transition, Ct.transition = null;
      var m = Ne;
      Ne = 1;
      var y = Ee;
      Ee |= 4, Qs.current = null, xh(e, n), vf(n, e), Qm(ts), ii = !!es, ts = es = null, e.current = n, Sh(n), Zp(), Ee = y, Ne = m, Ct.transition = u;
    } else e.current = n;
    if (Ui && (Ui = !1, kn = e, Hi = s), u = e.pendingLanes, u === 0 && (Sn = null), em(n.stateNode), lt(e, Ie()), t !== null) for (o = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], o(s.value, { componentStack: s.stack, digest: s.digest });
    if (Vi) throw Vi = !1, e = Ys, Ys = null, e;
    return Hi & 1 && e.tag !== 0 && br(), u = e.pendingLanes, u & 1 ? e === Xs ? Oo++ : (Oo = 0, Xs = e) : Oo = 0, vn(), null;
  }
  function br() {
    if (kn !== null) {
      var e = mu(Hi), t = Ct.transition, n = Ne;
      try {
        if (Ct.transition = null, Ne = 16 > e ? 16 : e, kn === null) var o = !1;
        else {
          if (e = kn, kn = null, Hi = 0, Ee & 6) throw Error(l(331));
          var s = Ee;
          for (Ee |= 4, Z = e.current; Z !== null; ) {
            var u = Z, m = u.child;
            if (Z.flags & 16) {
              var y = u.deletions;
              if (y !== null) {
                for (var E = 0; E < y.length; E++) {
                  var L = y[E];
                  for (Z = L; Z !== null; ) {
                    var W = Z;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bo(8, W, u);
                    }
                    var V = W.child;
                    if (V !== null) V.return = W, Z = V;
                    else for (; Z !== null; ) {
                      W = Z;
                      var F = W.sibling, Y = W.return;
                      if (df(W), W === L) {
                        Z = null;
                        break;
                      }
                      if (F !== null) {
                        F.return = Y, Z = F;
                        break;
                      }
                      Z = Y;
                    }
                  }
                }
                var J = u.alternate;
                if (J !== null) {
                  var ee = J.child;
                  if (ee !== null) {
                    J.child = null;
                    do {
                      var Fe = ee.sibling;
                      ee.sibling = null, ee = Fe;
                    } while (ee !== null);
                  }
                }
                Z = u;
              }
            }
            if (u.subtreeFlags & 2064 && m !== null) m.return = u, Z = m;
            else e: for (; Z !== null; ) {
              if (u = Z, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  bo(9, u, u.return);
              }
              var O = u.sibling;
              if (O !== null) {
                O.return = u.return, Z = O;
                break e;
              }
              Z = u.return;
            }
          }
          var R = e.current;
          for (Z = R; Z !== null; ) {
            m = Z;
            var A = m.child;
            if (m.subtreeFlags & 2064 && A !== null) A.return = m, Z = A;
            else e: for (m = R; Z !== null; ) {
              if (y = Z, y.flags & 2048) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bi(9, y);
                }
              } catch (ne) {
                De(y, y.return, ne);
              }
              if (y === m) {
                Z = null;
                break e;
              }
              var U = y.sibling;
              if (U !== null) {
                U.return = y.return, Z = U;
                break e;
              }
              Z = y.return;
            }
          }
          if (Ee = s, vn(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
            Dt.onPostCommitFiberRoot(qo, e);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ne = n, Ct.transition = t;
      }
    }
    return !1;
  }
  function Rf(e, t, n) {
    t = Er(n, t), t = Hc(e, t, 1), e = wn(e, t, 1), t = et(), e !== null && (qr(e, 1, t), lt(e, t));
  }
  function De(e, t, n) {
    if (e.tag === 3) Rf(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Rf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Sn === null || !Sn.has(o))) {
          e = Er(n, e), e = Qc(t, e, 1), t = wn(t, e, 1), e = et(), t !== null && (qr(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function bh(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t), t = et(), e.pingedLanes |= e.suspendedLanes & n, He === e && (Ge & n) === n && ($e === 4 || $e === 3 && (Ge & 130023424) === Ge && 500 > Ie() - Gs ? Yn(e, 0) : Ks |= n), lt(e, t);
  }
  function _f(e, t) {
    t === 0 && (e.mode & 1 ? (t = ti, ti <<= 1, !(ti & 130023424) && (ti = 4194304)) : t = 1);
    var n = et();
    e = en(e, t), e !== null && (qr(e, t, n), lt(e, n));
  }
  function Rh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), _f(e, n);
  }
  function _h(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    o !== null && o.delete(t), _f(e, n);
  }
  var Of;
  Of = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || nt.current) ot = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ot = !1, gh(e, t, n);
      ot = !!(e.flags & 131072);
    }
    else ot = !1, Le && t.flags & 1048576 && ac(t, Ei, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var o = t.type;
        Ii(e, t), e = t.pendingProps;
        var s = hr(t, Ye.current);
        Sr(t, n), s = Ps(null, t, o, e, s, n);
        var u = Ns();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rt(o) ? (u = !0, xi(t)) : u = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ys(t), s.updater = ji, t.stateNode = s, s._reactInternals = t, Ts(t, o, e, n), t = js(null, t, o, !0, u, n)) : (t.tag = 0, Le && u && as(t), qe(null, t, s, n), t = t.child), t;
      case 16:
        o = t.elementType;
        e: {
          switch (Ii(e, t), e = t.pendingProps, s = o._init, o = s(o._payload), t.type = o, s = t.tag = Ah(o), e = _t(o, e), s) {
            case 0:
              t = Ms(null, t, o, e, n);
              break e;
            case 1:
              t = tf(null, t, o, e, n);
              break e;
            case 11:
              t = Xc(null, t, o, e, n);
              break e;
            case 14:
              t = Zc(null, t, o, _t(o.type, e), n);
              break e;
          }
          throw Error(l(
            306,
            o,
            ""
          ));
        }
        return t;
      case 0:
        return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : _t(o, s), Ms(e, t, o, s, n);
      case 1:
        return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : _t(o, s), tf(e, t, o, s, n);
      case 3:
        e: {
          if (nf(t), e === null) throw Error(l(387));
          o = t.pendingProps, u = t.memoizedState, s = u.element, vc(e, t), _i(t, o, null, n);
          var m = t.memoizedState;
          if (o = m.element, u.isDehydrated) if (u = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            s = Er(Error(l(423)), t), t = rf(e, t, o, n, s);
            break e;
          } else if (o !== s) {
            s = Er(Error(l(424)), t), t = rf(e, t, o, n, s);
            break e;
          } else for (pt = mn(t.stateNode.containerInfo.firstChild), dt = t, Le = !0, Rt = null, n = hc(t, null, o, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (yr(), o === s) {
              t = nn(e, t, n);
              break e;
            }
            qe(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return xc(t), e === null && fs(t), o = t.type, s = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = s.children, ns(o, s) ? m = null : u !== null && ns(o, u) && (t.flags |= 32), ef(e, t), qe(e, t, m, n), t.child;
      case 6:
        return e === null && fs(t), null;
      case 13:
        return of(e, t, n);
      case 4:
        return ws(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = wr(t, null, o, n) : qe(e, t, o, n), t.child;
      case 11:
        return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : _t(o, s), Xc(e, t, o, s, n);
      case 7:
        return qe(e, t, t.pendingProps, n), t.child;
      case 8:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (o = t.type._context, s = t.pendingProps, u = t.memoizedProps, m = s.value, Re(Ni, o._currentValue), o._currentValue = m, u !== null) if (bt(u.value, m)) {
            if (u.children === s.children && !nt.current) {
              t = nn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var y = u.dependencies;
            if (y !== null) {
              m = u.child;
              for (var E = y.firstContext; E !== null; ) {
                if (E.context === o) {
                  if (u.tag === 1) {
                    E = tn(-1, n & -n), E.tag = 2;
                    var L = u.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var W = L.pending;
                      W === null ? E.next = E : (E.next = W.next, W.next = E), L.pending = E;
                    }
                  }
                  u.lanes |= n, E = u.alternate, E !== null && (E.lanes |= n), gs(
                    u.return,
                    n,
                    t
                  ), y.lanes |= n;
                  break;
                }
                E = E.next;
              }
            } else if (u.tag === 10) m = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (m = u.return, m === null) throw Error(l(341));
              m.lanes |= n, y = m.alternate, y !== null && (y.lanes |= n), gs(m, n, t), m = u.sibling;
            } else m = u.child;
            if (m !== null) m.return = u;
            else for (m = u; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (u = m.sibling, u !== null) {
                u.return = m.return, m = u;
                break;
              }
              m = m.return;
            }
            u = m;
          }
          qe(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, o = t.pendingProps.children, Sr(t, n), s = kt(s), o = o(s), t.flags |= 1, qe(e, t, o, n), t.child;
      case 14:
        return o = t.type, s = _t(o, t.pendingProps), s = _t(o.type, s), Zc(e, t, o, s, n);
      case 15:
        return Jc(e, t, t.type, t.pendingProps, n);
      case 17:
        return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : _t(o, s), Ii(e, t), t.tag = 1, rt(o) ? (e = !0, xi(t)) : e = !1, Sr(t, n), Vc(t, o, s), Ts(t, o, s, n), js(null, t, o, !0, e, n);
      case 19:
        return sf(e, t, n);
      case 22:
        return qc(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function Af(e, t) {
    return uu(e, t);
  }
  function Oh(e, t, n, o) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(e, t, n, o) {
    return new Oh(e, t, n, o);
  }
  function na(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ah(e) {
    if (typeof e == "function") return na(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === X) return 11;
      if (e === xe) return 14;
    }
    return 2;
  }
  function Pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Yi(e, t, n, o, s, u) {
    var m = 2;
    if (o = e, typeof e == "function") na(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case $:
        return Zn(n.children, s, u, t);
      case G:
        m = 8, s |= 8;
        break;
      case q:
        return e = Pt(12, n, t, s | 2), e.elementType = q, e.lanes = u, e;
      case de:
        return e = Pt(13, n, t, s), e.elementType = de, e.lanes = u, e;
      case ae:
        return e = Pt(19, n, t, s), e.elementType = ae, e.lanes = u, e;
      case ie:
        return Xi(n, s, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case re:
            m = 10;
            break e;
          case oe:
            m = 9;
            break e;
          case X:
            m = 11;
            break e;
          case xe:
            m = 14;
            break e;
          case pe:
            m = 16, o = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = Pt(m, n, t, s), t.elementType = e, t.type = o, t.lanes = u, t;
  }
  function Zn(e, t, n, o) {
    return e = Pt(7, e, o, t), e.lanes = n, e;
  }
  function Xi(e, t, n, o) {
    return e = Pt(22, e, o, t), e.elementType = ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ra(e, t, n) {
    return e = Pt(6, e, null, t), e.lanes = n, e;
  }
  function oa(e, t, n) {
    return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Th(e, t, n, o, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Al(0), this.expirationTimes = Al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Al(0), this.identifierPrefix = o, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function ia(e, t, n, o, s, u, m, y, E) {
    return e = new Th(e, t, n, y, E), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Pt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: o, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ys(u), e;
  }
  function Lh(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Q, key: o == null ? null : "" + o, children: e, containerInfo: t, implementation: n };
  }
  function Tf(e) {
    if (!e) return gn;
    e = e._reactInternals;
    e: {
      if (Fn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (rt(n)) return ic(e, n, t);
    }
    return t;
  }
  function Lf(e, t, n, o, s, u, m, y, E) {
    return e = ia(n, o, !0, e, s, u, m, y, E), e.context = Tf(null), n = e.current, o = et(), s = En(n), u = tn(o, s), u.callback = t ?? null, wn(n, u, s), e.current.lanes = s, qr(e, s, o), lt(e, o), e;
  }
  function Zi(e, t, n, o) {
    var s = t.current, u = et(), m = En(s);
    return n = Tf(n), t.context === null ? t.context = n : t.pendingContext = n, t = tn(u, m), t.payload = { element: e }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = wn(s, t, m), e !== null && (Tt(e, s, m, u), Ri(e, s, m)), m;
  }
  function Ji(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function zf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function la(e, t) {
    zf(e, t), (e = e.alternate) && zf(e, t);
  }
  var Mf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function sa(e) {
    this._internalRoot = e;
  }
  qi.prototype.render = sa.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    Zi(e, t, null, null);
  }, qi.prototype.unmount = sa.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Gn(function() {
        Zi(null, e, null, null);
      }), t[Xt] = null;
    }
  };
  function qi(e) {
    this._internalRoot = e;
  }
  qi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = vu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++) ;
      fn.splice(n, 0, e), n === 0 && xu(e);
    }
  };
  function aa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function el(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function jf() {
  }
  function zh(e, t, n, o, s) {
    if (s) {
      if (typeof o == "function") {
        var u = o;
        o = function() {
          var L = Ji(m);
          u.call(L);
        };
      }
      var m = Lf(t, o, e, 0, null, !1, !1, "", jf);
      return e._reactRootContainer = m, e[Xt] = m.current, mo(e.nodeType === 8 ? e.parentNode : e), Gn(), m;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof o == "function") {
      var y = o;
      o = function() {
        var L = Ji(E);
        y.call(L);
      };
    }
    var E = ia(e, 0, !1, null, null, !1, !1, "", jf);
    return e._reactRootContainer = E, e[Xt] = E.current, mo(e.nodeType === 8 ? e.parentNode : e), Gn(function() {
      Zi(t, E, n, o);
    }), E;
  }
  function tl(e, t, n, o, s) {
    var u = n._reactRootContainer;
    if (u) {
      var m = u;
      if (typeof s == "function") {
        var y = s;
        s = function() {
          var E = Ji(m);
          y.call(E);
        };
      }
      Zi(t, m, e, s);
    } else m = zh(n, t, e, s, o);
    return Ji(m);
  }
  hu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jr(t.pendingLanes);
          n !== 0 && (Tl(t, n | 1), lt(t, Ie()), !(Ee & 6) && (Nr = Ie() + 500, vn()));
        }
        break;
      case 13:
        Gn(function() {
          var o = en(e, 1);
          if (o !== null) {
            var s = et();
            Tt(o, e, 1, s);
          }
        }), la(e, 1);
    }
  }, Ll = function(e) {
    if (e.tag === 13) {
      var t = en(e, 134217728);
      if (t !== null) {
        var n = et();
        Tt(t, e, 134217728, n);
      }
      la(e, 134217728);
    }
  }, gu = function(e) {
    if (e.tag === 13) {
      var t = En(e), n = en(e, t);
      if (n !== null) {
        var o = et();
        Tt(n, e, t, o);
      }
      la(e, t);
    }
  }, vu = function() {
    return Ne;
  }, yu = function(e, t) {
    var n = Ne;
    try {
      return Ne = e, t();
    } finally {
      Ne = n;
    }
  }, Hr = function(e, t, n) {
    switch (t) {
      case "input":
        if (ut(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var o = n[t];
            if (o !== e && o.form === e.form) {
              var s = yi(o);
              if (!s) throw Error(l(90));
              te(o), ut(o, s);
            }
          }
        }
        break;
      case "textarea":
        Fr(e, n);
        break;
      case "select":
        t = n.value, t != null && yt(e, !!n.multiple, t, !1);
    }
  }, Gr = qs, Yo = Gn;
  var Mh = { usingClientEntryPoint: !1, Events: [vo, pr, yi, Go, Kr, qs] }, Ao = { findFiberByHostInstance: Bn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jh = { bundleType: Ao.bundleType, version: Ao.version, rendererPackageName: Ao.rendererPackageName, rendererConfig: Ao.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: D.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = su(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ao.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nl.isDisabled && nl.supportsFiber) try {
      qo = nl.inject(jh), Dt = nl;
    } catch {
    }
  }
  return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mh, st.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!aa(t)) throw Error(l(200));
    return Lh(e, t, null, n);
  }, st.createRoot = function(e, t) {
    if (!aa(e)) throw Error(l(299));
    var n = !1, o = "", s = Mf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = ia(e, 1, !1, null, null, n, !1, o, s), e[Xt] = t.current, mo(e.nodeType === 8 ? e.parentNode : e), new sa(t);
  }, st.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = su(t), e = e === null ? null : e.stateNode, e;
  }, st.flushSync = function(e) {
    return Gn(e);
  }, st.hydrate = function(e, t, n) {
    if (!el(t)) throw Error(l(200));
    return tl(null, e, t, !0, n);
  }, st.hydrateRoot = function(e, t, n) {
    if (!aa(e)) throw Error(l(405));
    var o = n != null && n.hydratedSources || null, s = !1, u = "", m = Mf;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), t = Lf(t, null, e, 1, n ?? null, s, !1, u, m), e[Xt] = t.current, mo(e), o) for (e = 0; e < o.length; e++) n = o[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new qi(t);
  }, st.render = function(e, t, n) {
    if (!el(t)) throw Error(l(200));
    return tl(null, e, t, !1, n);
  }, st.unmountComponentAtNode = function(e) {
    if (!el(e)) throw Error(l(40));
    return e._reactRootContainer ? (Gn(function() {
      tl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Xt] = null;
      });
    }), !0) : !1;
  }, st.unstable_batchedUpdates = qs, st.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
    if (!el(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return tl(e, t, n, !1, o);
  }, st.version = "18.3.1-next-f1338f8080-20240426", st;
}
var Uf;
function Ed() {
  if (Uf) return fa.exports;
  Uf = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), fa.exports = Uh(), fa.exports;
}
var Hf;
function Hh() {
  if (Hf) return rl;
  Hf = 1;
  var r = Ed();
  return rl.createRoot = r.createRoot, rl.hydrateRoot = r.hydrateRoot, rl;
}
var Qh = Hh();
const Cd = /* @__PURE__ */ Ma(Qh);
var k = ja();
const Kh = /* @__PURE__ */ Ma(k), Gh = /* @__PURE__ */ Ih({
  __proto__: null,
  default: Kh
}, [k]);
var Da = Ed();
const Yh = /* @__PURE__ */ Ma(Da);
function Qf(r, i) {
  if (typeof r == "function")
    return r(i);
  r != null && (r.current = i);
}
function Ia(...r) {
  return (i) => {
    let l = !1;
    const a = r.map((c) => {
      const f = Qf(c, i);
      return !l && typeof f == "function" && (l = !0), f;
    });
    if (l)
      return () => {
        for (let c = 0; c < a.length; c++) {
          const f = a[c];
          typeof f == "function" ? f() : Qf(r[c], null);
        }
      };
  };
}
function Mn(...r) {
  return k.useCallback(Ia(...r), r);
}
var Pd = k.forwardRef((r, i) => {
  const { children: l, ...a } = r, c = k.Children.toArray(l), f = c.find(Zh);
  if (f) {
    const d = f.props.children, p = c.map((h) => h === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : h);
    return /* @__PURE__ */ j.jsx(Ca, { ...a, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, p) : null });
  }
  return /* @__PURE__ */ j.jsx(Ca, { ...a, ref: i, children: l });
});
Pd.displayName = "Slot";
var Ca = k.forwardRef((r, i) => {
  const { children: l, ...a } = r;
  if (k.isValidElement(l)) {
    const c = qh(l);
    return k.cloneElement(l, {
      ...Jh(a, l.props),
      // @ts-ignore
      ref: i ? Ia(i, c) : c
    });
  }
  return k.Children.count(l) > 1 ? k.Children.only(null) : null;
});
Ca.displayName = "SlotClone";
var Xh = ({ children: r }) => /* @__PURE__ */ j.jsx(j.Fragment, { children: r });
function Zh(r) {
  return k.isValidElement(r) && r.type === Xh;
}
function Jh(r, i) {
  const l = { ...i };
  for (const a in i) {
    const c = r[a], f = i[a];
    /^on[A-Z]/.test(a) ? c && f ? l[a] = (...p) => {
      f(...p), c(...p);
    } : c && (l[a] = c) : a === "style" ? l[a] = { ...c, ...f } : a === "className" && (l[a] = [c, f].filter(Boolean).join(" "));
  }
  return { ...r, ...l };
}
function qh(r) {
  let i = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning;
  return l ? r.ref : (i = Object.getOwnPropertyDescriptor(r, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning, l ? r.props.ref : r.props.ref || r.ref);
}
var eg = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Ht = eg.reduce((r, i) => {
  const l = k.forwardRef((a, c) => {
    const { asChild: f, ...d } = a, p = f ? Pd : i;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ j.jsx(p, { ...d, ref: c });
  });
  return l.displayName = `Primitive.${i}`, { ...r, [i]: l };
}, {});
function tg(r, i) {
  r && Da.flushSync(() => r.dispatchEvent(i));
}
var ng = "Label", cl = k.forwardRef((r, i) => /* @__PURE__ */ j.jsx(
  Ht.label,
  {
    ...r,
    ref: i,
    onMouseDown: (l) => {
      l.target.closest("button, input, select, textarea") || (r.onMouseDown?.(l), !l.defaultPrevented && l.detail > 1 && l.preventDefault());
    }
  }
));
cl.displayName = ng;
function Kf(r, i) {
  if (typeof r == "function")
    return r(i);
  r != null && (r.current = i);
}
function rg(...r) {
  return (i) => {
    let l = !1;
    const a = r.map((c) => {
      const f = Kf(c, i);
      return !l && typeof f == "function" && (l = !0), f;
    });
    if (l)
      return () => {
        for (let c = 0; c < a.length; c++) {
          const f = a[c];
          typeof f == "function" ? f() : Kf(r[c], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function og(r) {
  const i = /* @__PURE__ */ lg(r), l = k.forwardRef((a, c) => {
    const { children: f, ...d } = a, p = k.Children.toArray(f), h = p.find(ag);
    if (h) {
      const g = h.props.children, x = p.map((v) => v === h ? k.Children.count(g) > 1 ? k.Children.only(null) : k.isValidElement(g) ? g.props.children : null : v);
      return /* @__PURE__ */ j.jsx(i, { ...d, ref: c, children: k.isValidElement(g) ? k.cloneElement(g, void 0, x) : null });
    }
    return /* @__PURE__ */ j.jsx(i, { ...d, ref: c, children: f });
  });
  return l.displayName = `${r}.Slot`, l;
}
var ig = /* @__PURE__ */ og("Slot");
// @__NO_SIDE_EFFECTS__
function lg(r) {
  const i = k.forwardRef((l, a) => {
    const { children: c, ...f } = l;
    if (k.isValidElement(c)) {
      const d = cg(c), p = ug(f, c.props);
      return c.type !== k.Fragment && (p.ref = a ? rg(a, d) : d), k.cloneElement(c, p);
    }
    return k.Children.count(c) > 1 ? k.Children.only(null) : null;
  });
  return i.displayName = `${r}.SlotClone`, i;
}
var sg = Symbol("radix.slottable");
function ag(r) {
  return k.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === sg;
}
function ug(r, i) {
  const l = { ...i };
  for (const a in i) {
    const c = r[a], f = i[a];
    /^on[A-Z]/.test(a) ? c && f ? l[a] = (...p) => {
      const h = f(...p);
      return c(...p), h;
    } : c && (l[a] = c) : a === "style" ? l[a] = { ...c, ...f } : a === "className" && (l[a] = [c, f].filter(Boolean).join(" "));
  }
  return { ...r, ...l };
}
function cg(r) {
  let i = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning;
  return l ? r.ref : (i = Object.getOwnPropertyDescriptor(r, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning, l ? r.props.ref : r.props.ref || r.ref);
}
function Nd(r) {
  var i, l, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (i = 0; i < c; i++) r[i] && (l = Nd(r[i])) && (a && (a += " "), a += l);
  } else for (l in r) r[l] && (a && (a += " "), a += l);
  return a;
}
function bd() {
  for (var r, i, l = 0, a = "", c = arguments.length; l < c; l++) (r = arguments[l]) && (i = Nd(r)) && (a && (a += " "), a += i);
  return a;
}
const Gf = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Yf = bd, fg = (r, i) => (l) => {
  var a;
  if (i?.variants == null) return Yf(r, l?.class, l?.className);
  const { variants: c, defaultVariants: f } = i, d = Object.keys(c).map((g) => {
    const x = l?.[g], v = f?.[g];
    if (x === null) return null;
    const S = Gf(x) || Gf(v);
    return c[g][S];
  }), p = l && Object.entries(l).reduce((g, x) => {
    let [v, S] = x;
    return S === void 0 || (g[v] = S), g;
  }, {}), h = i == null || (a = i.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((g, x) => {
    let { class: v, className: S, ..._ } = x;
    return Object.entries(_).every((P) => {
      let [w, C] = P;
      return Array.isArray(C) ? C.includes({
        ...f,
        ...p
      }[w]) : {
        ...f,
        ...p
      }[w] === C;
    }) ? [
      ...g,
      v,
      S
    ] : g;
  }, []);
  return Yf(r, d, h, l?.class, l?.className);
}, Fa = "-", dg = (r) => {
  const i = mg(r), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: a
  } = r;
  return {
    getClassGroupId: (d) => {
      const p = d.split(Fa);
      return p[0] === "" && p.length !== 1 && p.shift(), Rd(p, i) || pg(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const h = l[d] || [];
      return p && a[d] ? [...h, ...a[d]] : h;
    }
  };
}, Rd = (r, i) => {
  if (r.length === 0)
    return i.classGroupId;
  const l = r[0], a = i.nextPart.get(l), c = a ? Rd(r.slice(1), a) : void 0;
  if (c)
    return c;
  if (i.validators.length === 0)
    return;
  const f = r.join(Fa);
  return i.validators.find(({
    validator: d
  }) => d(f))?.classGroupId;
}, Xf = /^\[(.+)\]$/, pg = (r) => {
  if (Xf.test(r)) {
    const i = Xf.exec(r)[1], l = i?.substring(0, i.indexOf(":"));
    if (l)
      return "arbitrary.." + l;
  }
}, mg = (r) => {
  const {
    theme: i,
    prefix: l
  } = r, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return gg(Object.entries(r.classGroups), l).forEach(([f, d]) => {
    Pa(d, a, f, i);
  }), a;
}, Pa = (r, i, l, a) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const f = c === "" ? i : Zf(i, c);
      f.classGroupId = l;
      return;
    }
    if (typeof c == "function") {
      if (hg(c)) {
        Pa(c(a), i, l, a);
        return;
      }
      i.validators.push({
        validator: c,
        classGroupId: l
      });
      return;
    }
    Object.entries(c).forEach(([f, d]) => {
      Pa(d, Zf(i, f), l, a);
    });
  });
}, Zf = (r, i) => {
  let l = r;
  return i.split(Fa).forEach((a) => {
    l.nextPart.has(a) || l.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), l = l.nextPart.get(a);
  }), l;
}, hg = (r) => r.isThemeGetter, gg = (r, i) => i ? r.map(([l, a]) => {
  const c = a.map((f) => typeof f == "string" ? i + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(([d, p]) => [i + d, p])) : f);
  return [l, c];
}) : r, vg = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const c = (f, d) => {
    l.set(f, d), i++, i > r && (i = 0, a = l, l = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let d = l.get(f);
      if (d !== void 0)
        return d;
      if ((d = a.get(f)) !== void 0)
        return c(f, d), d;
    },
    set(f, d) {
      l.has(f) ? l.set(f, d) : c(f, d);
    }
  };
}, _d = "!", yg = (r) => {
  const {
    separator: i,
    experimentalParseClassName: l
  } = r, a = i.length === 1, c = i[0], f = i.length, d = (p) => {
    const h = [];
    let g = 0, x = 0, v;
    for (let C = 0; C < p.length; C++) {
      let N = p[C];
      if (g === 0) {
        if (N === c && (a || p.slice(C, C + f) === i)) {
          h.push(p.slice(x, C)), x = C + f;
          continue;
        }
        if (N === "/") {
          v = C;
          continue;
        }
      }
      N === "[" ? g++ : N === "]" && g--;
    }
    const S = h.length === 0 ? p : p.substring(x), _ = S.startsWith(_d), P = _ ? S.substring(1) : S, w = v && v > x ? v - x : void 0;
    return {
      modifiers: h,
      hasImportantModifier: _,
      baseClassName: P,
      maybePostfixModifierPosition: w
    };
  };
  return l ? (p) => l({
    className: p,
    parseClassName: d
  }) : d;
}, wg = (r) => {
  if (r.length <= 1)
    return r;
  const i = [];
  let l = [];
  return r.forEach((a) => {
    a[0] === "[" ? (i.push(...l.sort(), a), l = []) : l.push(a);
  }), i.push(...l.sort()), i;
}, xg = (r) => ({
  cache: vg(r.cacheSize),
  parseClassName: yg(r),
  ...dg(r)
}), Sg = /\s+/, kg = (r, i) => {
  const {
    parseClassName: l,
    getClassGroupId: a,
    getConflictingClassGroupIds: c
  } = i, f = [], d = r.trim().split(Sg);
  let p = "";
  for (let h = d.length - 1; h >= 0; h -= 1) {
    const g = d[h], {
      modifiers: x,
      hasImportantModifier: v,
      baseClassName: S,
      maybePostfixModifierPosition: _
    } = l(g);
    let P = !!_, w = a(P ? S.substring(0, _) : S);
    if (!w) {
      if (!P) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (w = a(S), !w) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      P = !1;
    }
    const C = wg(x).join(":"), N = v ? C + _d : C, T = N + w;
    if (f.includes(T))
      continue;
    f.push(T);
    const z = c(w, P);
    for (let D = 0; D < z.length; ++D) {
      const B = z[D];
      f.push(N + B);
    }
    p = g + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Eg() {
  let r = 0, i, l, a = "";
  for (; r < arguments.length; )
    (i = arguments[r++]) && (l = Od(i)) && (a && (a += " "), a += l);
  return a;
}
const Od = (r) => {
  if (typeof r == "string")
    return r;
  let i, l = "";
  for (let a = 0; a < r.length; a++)
    r[a] && (i = Od(r[a])) && (l && (l += " "), l += i);
  return l;
};
function Cg(r, ...i) {
  let l, a, c, f = d;
  function d(h) {
    const g = i.reduce((x, v) => v(x), r());
    return l = xg(g), a = l.cache.get, c = l.cache.set, f = p, p(h);
  }
  function p(h) {
    const g = a(h);
    if (g)
      return g;
    const x = kg(h, l);
    return c(h, x), x;
  }
  return function() {
    return f(Eg.apply(null, arguments));
  };
}
const Ae = (r) => {
  const i = (l) => l[r] || [];
  return i.isThemeGetter = !0, i;
}, Ad = /^\[(?:([a-z-]+):)?(.+)\]$/i, Pg = /^\d+\/\d+$/, Ng = /* @__PURE__ */ new Set(["px", "full", "screen"]), bg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Rg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _g = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Og = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ag = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, on = (r) => Ar(r) || Ng.has(r) || Pg.test(r), bn = (r) => jr(r, "length", Fg), Ar = (r) => !!r && !Number.isNaN(Number(r)), ma = (r) => jr(r, "number", Ar), Lo = (r) => !!r && Number.isInteger(Number(r)), Tg = (r) => r.endsWith("%") && Ar(r.slice(0, -1)), ge = (r) => Ad.test(r), Rn = (r) => bg.test(r), Lg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), zg = (r) => jr(r, Lg, Td), Mg = (r) => jr(r, "position", Td), jg = /* @__PURE__ */ new Set(["image", "url"]), Dg = (r) => jr(r, jg, Wg), Ig = (r) => jr(r, "", Bg), zo = () => !0, jr = (r, i, l) => {
  const a = Ad.exec(r);
  return a ? a[1] ? typeof i == "string" ? a[1] === i : i.has(a[1]) : l(a[2]) : !1;
}, Fg = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Rg.test(r) && !_g.test(r)
), Td = () => !1, Bg = (r) => Og.test(r), Wg = (r) => Ag.test(r), $g = () => {
  const r = Ae("colors"), i = Ae("spacing"), l = Ae("blur"), a = Ae("brightness"), c = Ae("borderColor"), f = Ae("borderRadius"), d = Ae("borderSpacing"), p = Ae("borderWidth"), h = Ae("contrast"), g = Ae("grayscale"), x = Ae("hueRotate"), v = Ae("invert"), S = Ae("gap"), _ = Ae("gradientColorStops"), P = Ae("gradientColorStopPositions"), w = Ae("inset"), C = Ae("margin"), N = Ae("opacity"), T = Ae("padding"), z = Ae("saturate"), D = Ae("scale"), B = Ae("sepia"), Q = Ae("skew"), $ = Ae("space"), G = Ae("translate"), q = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], oe = () => ["auto", ge, i], X = () => [ge, i], de = () => ["", on, bn], ae = () => ["auto", Ar, ge], xe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], pe = () => ["solid", "dashed", "dotted", "double", "none"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], K = () => ["", "0", ge], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], b = () => [Ar, ge];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [zo],
      spacing: [on, bn],
      blur: ["none", "", Rn, ge],
      brightness: b(),
      borderColor: [r],
      borderRadius: ["none", "", "full", Rn, ge],
      borderSpacing: X(),
      borderWidth: de(),
      contrast: b(),
      grayscale: K(),
      hueRotate: b(),
      invert: K(),
      gap: X(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Tg, bn],
      inset: oe(),
      margin: oe(),
      opacity: b(),
      padding: X(),
      saturate: b(),
      scale: b(),
      sepia: K(),
      skew: b(),
      space: X(),
      translate: X()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ge]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Rn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...xe(), ge]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Lo, ge]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: oe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ge]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: K()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: K()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Lo, ge]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [zo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Lo, ge]
        }, ge]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [zo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Lo, ge]
        }, ge]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ae()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ge]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ge]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [S]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [S]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [S]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...M()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...M(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...M(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [T]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [T]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [T]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [T]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [T]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [T]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [T]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [T]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [T]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [C]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [C]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [C]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [C]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [C]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [C]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [C]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [C]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [C]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [$]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [$]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ge, i]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ge, i, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ge, i, "none", "full", "min", "max", "fit", "prose", {
          screen: [Rn]
        }, Rn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ge, i, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ge, i, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ge, i, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ge, i, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Rn, bn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ma]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ge]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ar, ma]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", on, ge]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ge]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ge]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [N]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [N]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...pe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", on, bn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", on, ge]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: X()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ge]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ge]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [N]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...xe(), Mg]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", zg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Dg]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [P]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [P]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [P]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [f]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [f]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [f]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [f]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [f]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [f]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [f]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [f]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [f]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [f]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [f]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [f]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [f]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [f]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [f]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [p]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [p]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [p]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [p]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [p]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [p]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [p]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [p]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [p]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [N]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...pe(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [p]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [p]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [N]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: pe()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [c]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...pe()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [on, ge]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [on, bn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: de()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [on, bn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Rn, Ig]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [zo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ie(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [l]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Rn, ge]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [B]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [l]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [B]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ge]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: b()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ge]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: b()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ge]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Lo, ge]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [G]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [G]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Q]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Q]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ge]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ge]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": X()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": X()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": X()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": X()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": X()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": X()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": X()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": X()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": X()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": X()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": X()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": X()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": X()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": X()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": X()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": X()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": X()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": X()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ge]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [on, bn, ma]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Vg = /* @__PURE__ */ Cg($g);
function tt(...r) {
  return Vg(bd(r));
}
const Ug = fg(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Do = k.forwardRef(({ className: r, variant: i, size: l, asChild: a = !1, ...c }, f) => {
  const d = a ? ig : "button";
  return /* @__PURE__ */ j.jsx(
    d,
    {
      className: tt(Ug({ variant: i, size: l, className: r })),
      ref: f,
      ...c
    }
  );
});
Do.displayName = "Button";
const Na = k.forwardRef(({ className: r, type: i, ...l }, a) => /* @__PURE__ */ j.jsx(
  "input",
  {
    type: i,
    className: tt(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      r
    ),
    ref: a,
    ...l
  }
));
Na.displayName = "Input";
const Ld = k.forwardRef(({ className: r, ...i }, l) => /* @__PURE__ */ j.jsx(
  "textarea",
  {
    className: tt(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      r
    ),
    ref: l,
    ...i
  }
));
Ld.displayName = "Textarea";
function On(r, i, { checkForDefaultPrevented: l = !0 } = {}) {
  return function(c) {
    if (r?.(c), l === !1 || !c.defaultPrevented)
      return i?.(c);
  };
}
function zd(r, i = []) {
  let l = [];
  function a(f, d) {
    const p = k.createContext(d), h = l.length;
    l = [...l, d];
    const g = (v) => {
      const { scope: S, children: _, ...P } = v, w = S?.[r]?.[h] || p, C = k.useMemo(() => P, Object.values(P));
      return /* @__PURE__ */ j.jsx(w.Provider, { value: C, children: _ });
    };
    g.displayName = f + "Provider";
    function x(v, S) {
      const _ = S?.[r]?.[h] || p, P = k.useContext(_);
      if (P) return P;
      if (d !== void 0) return d;
      throw new Error(`\`${v}\` must be used within \`${f}\``);
    }
    return [g, x];
  }
  const c = () => {
    const f = l.map((d) => k.createContext(d));
    return function(p) {
      const h = p?.[r] || f;
      return k.useMemo(
        () => ({ [`__scope${r}`]: { ...p, [r]: h } }),
        [p, h]
      );
    };
  };
  return c.scopeName = r, [a, Hg(c, ...i)];
}
function Hg(...r) {
  const i = r[0];
  if (r.length === 1) return i;
  const l = () => {
    const a = r.map((c) => ({
      useScope: c(),
      scopeName: c.scopeName
    }));
    return function(f) {
      const d = a.reduce((p, { useScope: h, scopeName: g }) => {
        const v = h(f)[`__scope${g}`];
        return { ...p, ...v };
      }, {});
      return k.useMemo(() => ({ [`__scope${i.scopeName}`]: d }), [d]);
    };
  };
  return l.scopeName = i.scopeName, l;
}
function An(r) {
  const i = k.useRef(r);
  return k.useEffect(() => {
    i.current = r;
  }), k.useMemo(() => (...l) => i.current?.(...l), []);
}
function Qg(r, i = globalThis?.document) {
  const l = An(r);
  k.useEffect(() => {
    const a = (c) => {
      c.key === "Escape" && l(c);
    };
    return i.addEventListener("keydown", a, { capture: !0 }), () => i.removeEventListener("keydown", a, { capture: !0 });
  }, [l, i]);
}
var Kg = "DismissableLayer", ba = "dismissableLayer.update", Gg = "dismissableLayer.pointerDownOutside", Yg = "dismissableLayer.focusOutside", Jf, Md = k.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), jd = k.forwardRef(
  (r, i) => {
    const {
      disableOutsidePointerEvents: l = !1,
      onEscapeKeyDown: a,
      onPointerDownOutside: c,
      onFocusOutside: f,
      onInteractOutside: d,
      onDismiss: p,
      ...h
    } = r, g = k.useContext(Md), [x, v] = k.useState(null), S = x?.ownerDocument ?? globalThis?.document, [, _] = k.useState({}), P = Mn(i, ($) => v($)), w = Array.from(g.layers), [C] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), N = w.indexOf(C), T = x ? w.indexOf(x) : -1, z = g.layersWithOutsidePointerEventsDisabled.size > 0, D = T >= N, B = Jg(($) => {
      const G = $.target, q = [...g.branches].some((re) => re.contains(G));
      !D || q || (c?.($), d?.($), $.defaultPrevented || p?.());
    }, S), Q = qg(($) => {
      const G = $.target;
      [...g.branches].some((re) => re.contains(G)) || (f?.($), d?.($), $.defaultPrevented || p?.());
    }, S);
    return Qg(($) => {
      T === g.layers.size - 1 && (a?.($), !$.defaultPrevented && p && ($.preventDefault(), p()));
    }, S), k.useEffect(() => {
      if (x)
        return l && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (Jf = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(x)), g.layers.add(x), qf(), () => {
          l && g.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = Jf);
        };
    }, [x, S, l, g]), k.useEffect(() => () => {
      x && (g.layers.delete(x), g.layersWithOutsidePointerEventsDisabled.delete(x), qf());
    }, [x, g]), k.useEffect(() => {
      const $ = () => _({});
      return document.addEventListener(ba, $), () => document.removeEventListener(ba, $);
    }, []), /* @__PURE__ */ j.jsx(
      Ht.div,
      {
        ...h,
        ref: P,
        style: {
          pointerEvents: z ? D ? "auto" : "none" : void 0,
          ...r.style
        },
        onFocusCapture: On(r.onFocusCapture, Q.onFocusCapture),
        onBlurCapture: On(r.onBlurCapture, Q.onBlurCapture),
        onPointerDownCapture: On(
          r.onPointerDownCapture,
          B.onPointerDownCapture
        )
      }
    );
  }
);
jd.displayName = Kg;
var Xg = "DismissableLayerBranch", Zg = k.forwardRef((r, i) => {
  const l = k.useContext(Md), a = k.useRef(null), c = Mn(i, a);
  return k.useEffect(() => {
    const f = a.current;
    if (f)
      return l.branches.add(f), () => {
        l.branches.delete(f);
      };
  }, [l.branches]), /* @__PURE__ */ j.jsx(Ht.div, { ...r, ref: c });
});
Zg.displayName = Xg;
function Jg(r, i = globalThis?.document) {
  const l = An(r), a = k.useRef(!1), c = k.useRef(() => {
  });
  return k.useEffect(() => {
    const f = (p) => {
      if (p.target && !a.current) {
        let h = function() {
          Dd(
            Gg,
            l,
            g,
            { discrete: !0 }
          );
        };
        const g = { originalEvent: p };
        p.pointerType === "touch" ? (i.removeEventListener("click", c.current), c.current = h, i.addEventListener("click", c.current, { once: !0 })) : h();
      } else
        i.removeEventListener("click", c.current);
      a.current = !1;
    }, d = window.setTimeout(() => {
      i.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(d), i.removeEventListener("pointerdown", f), i.removeEventListener("click", c.current);
    };
  }, [i, l]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => a.current = !0
  };
}
function qg(r, i = globalThis?.document) {
  const l = An(r), a = k.useRef(!1);
  return k.useEffect(() => {
    const c = (f) => {
      f.target && !a.current && Dd(Yg, l, { originalEvent: f }, {
        discrete: !1
      });
    };
    return i.addEventListener("focusin", c), () => i.removeEventListener("focusin", c);
  }, [i, l]), {
    onFocusCapture: () => a.current = !0,
    onBlurCapture: () => a.current = !1
  };
}
function qf() {
  const r = new CustomEvent(ba);
  document.dispatchEvent(r);
}
function Dd(r, i, l, { discrete: a }) {
  const c = l.originalEvent.target, f = new CustomEvent(r, { bubbles: !1, cancelable: !0, detail: l });
  i && c.addEventListener(r, i, { once: !0 }), a ? tg(c, f) : c.dispatchEvent(f);
}
var ha = 0;
function ev() {
  k.useEffect(() => {
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", r[0] ?? ed()), document.body.insertAdjacentElement("beforeend", r[1] ?? ed()), ha++, () => {
      ha === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()), ha--;
    };
  }, []);
}
function ed() {
  const r = document.createElement("span");
  return r.setAttribute("data-radix-focus-guard", ""), r.tabIndex = 0, r.style.outline = "none", r.style.opacity = "0", r.style.position = "fixed", r.style.pointerEvents = "none", r;
}
var ga = "focusScope.autoFocusOnMount", va = "focusScope.autoFocusOnUnmount", td = { bubbles: !1, cancelable: !0 }, tv = "FocusScope", Id = k.forwardRef((r, i) => {
  const {
    loop: l = !1,
    trapped: a = !1,
    onMountAutoFocus: c,
    onUnmountAutoFocus: f,
    ...d
  } = r, [p, h] = k.useState(null), g = An(c), x = An(f), v = k.useRef(null), S = Mn(i, (w) => h(w)), _ = k.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  k.useEffect(() => {
    if (a) {
      let w = function(z) {
        if (_.paused || !p) return;
        const D = z.target;
        p.contains(D) ? v.current = D : _n(v.current, { select: !0 });
      }, C = function(z) {
        if (_.paused || !p) return;
        const D = z.relatedTarget;
        D !== null && (p.contains(D) || _n(v.current, { select: !0 }));
      }, N = function(z) {
        if (document.activeElement === document.body)
          for (const B of z)
            B.removedNodes.length > 0 && _n(p);
      };
      document.addEventListener("focusin", w), document.addEventListener("focusout", C);
      const T = new MutationObserver(N);
      return p && T.observe(p, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", C), T.disconnect();
      };
    }
  }, [a, p, _.paused]), k.useEffect(() => {
    if (p) {
      rd.add(_);
      const w = document.activeElement;
      if (!p.contains(w)) {
        const N = new CustomEvent(ga, td);
        p.addEventListener(ga, g), p.dispatchEvent(N), N.defaultPrevented || (nv(sv(Fd(p)), { select: !0 }), document.activeElement === w && _n(p));
      }
      return () => {
        p.removeEventListener(ga, g), setTimeout(() => {
          const N = new CustomEvent(va, td);
          p.addEventListener(va, x), p.dispatchEvent(N), N.defaultPrevented || _n(w ?? document.body, { select: !0 }), p.removeEventListener(va, x), rd.remove(_);
        }, 0);
      };
    }
  }, [p, g, x, _]);
  const P = k.useCallback(
    (w) => {
      if (!l && !a || _.paused) return;
      const C = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, N = document.activeElement;
      if (C && N) {
        const T = w.currentTarget, [z, D] = rv(T);
        z && D ? !w.shiftKey && N === D ? (w.preventDefault(), l && _n(z, { select: !0 })) : w.shiftKey && N === z && (w.preventDefault(), l && _n(D, { select: !0 })) : N === T && w.preventDefault();
      }
    },
    [l, a, _.paused]
  );
  return /* @__PURE__ */ j.jsx(Ht.div, { tabIndex: -1, ...d, ref: S, onKeyDown: P });
});
Id.displayName = tv;
function nv(r, { select: i = !1 } = {}) {
  const l = document.activeElement;
  for (const a of r)
    if (_n(a, { select: i }), document.activeElement !== l) return;
}
function rv(r) {
  const i = Fd(r), l = nd(i, r), a = nd(i.reverse(), r);
  return [l, a];
}
function Fd(r) {
  const i = [], l = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const c = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || c ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; l.nextNode(); ) i.push(l.currentNode);
  return i;
}
function nd(r, i) {
  for (const l of r)
    if (!ov(l, { upTo: i })) return l;
}
function ov(r, { upTo: i }) {
  if (getComputedStyle(r).visibility === "hidden") return !0;
  for (; r; ) {
    if (i !== void 0 && r === i) return !1;
    if (getComputedStyle(r).display === "none") return !0;
    r = r.parentElement;
  }
  return !1;
}
function iv(r) {
  return r instanceof HTMLInputElement && "select" in r;
}
function _n(r, { select: i = !1 } = {}) {
  if (r && r.focus) {
    const l = document.activeElement;
    r.focus({ preventScroll: !0 }), r !== l && iv(r) && i && r.select();
  }
}
var rd = lv();
function lv() {
  let r = [];
  return {
    add(i) {
      const l = r[0];
      i !== l && l?.pause(), r = od(r, i), r.unshift(i);
    },
    remove(i) {
      r = od(r, i), r[0]?.resume();
    }
  };
}
function od(r, i) {
  const l = [...r], a = l.indexOf(i);
  return a !== -1 && l.splice(a, 1), l;
}
function sv(r) {
  return r.filter((i) => i.tagName !== "A");
}
var Jn = globalThis?.document ? k.useLayoutEffect : () => {
}, av = Gh.useId || (() => {
}), uv = 0;
function cv(r) {
  const [i, l] = k.useState(av());
  return Jn(() => {
    r || l((a) => a ?? String(uv++));
  }, [r]), r || (i ? `radix-${i}` : "");
}
const fv = ["top", "right", "bottom", "left"], Tn = Math.min, ht = Math.max, ml = Math.round, ol = Math.floor, Vt = (r) => ({
  x: r,
  y: r
}), dv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pv = {
  start: "end",
  end: "start"
};
function Ra(r, i, l) {
  return ht(r, Tn(i, l));
}
function ln(r, i) {
  return typeof r == "function" ? r(i) : r;
}
function sn(r) {
  return r.split("-")[0];
}
function Dr(r) {
  return r.split("-")[1];
}
function Ba(r) {
  return r === "x" ? "y" : "x";
}
function Wa(r) {
  return r === "y" ? "height" : "width";
}
function Ln(r) {
  return ["top", "bottom"].includes(sn(r)) ? "y" : "x";
}
function $a(r) {
  return Ba(Ln(r));
}
function mv(r, i, l) {
  l === void 0 && (l = !1);
  const a = Dr(r), c = $a(r), f = Wa(c);
  let d = c === "x" ? a === (l ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return i.reference[f] > i.floating[f] && (d = hl(d)), [d, hl(d)];
}
function hv(r) {
  const i = hl(r);
  return [_a(r), i, _a(i)];
}
function _a(r) {
  return r.replace(/start|end/g, (i) => pv[i]);
}
function gv(r, i, l) {
  const a = ["left", "right"], c = ["right", "left"], f = ["top", "bottom"], d = ["bottom", "top"];
  switch (r) {
    case "top":
    case "bottom":
      return l ? i ? c : a : i ? a : c;
    case "left":
    case "right":
      return i ? f : d;
    default:
      return [];
  }
}
function vv(r, i, l, a) {
  const c = Dr(r);
  let f = gv(sn(r), l === "start", a);
  return c && (f = f.map((d) => d + "-" + c), i && (f = f.concat(f.map(_a)))), f;
}
function hl(r) {
  return r.replace(/left|right|bottom|top/g, (i) => dv[i]);
}
function yv(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Bd(r) {
  return typeof r != "number" ? yv(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function gl(r) {
  const {
    x: i,
    y: l,
    width: a,
    height: c
  } = r;
  return {
    width: a,
    height: c,
    top: l,
    left: i,
    right: i + a,
    bottom: l + c,
    x: i,
    y: l
  };
}
function id(r, i, l) {
  let {
    reference: a,
    floating: c
  } = r;
  const f = Ln(i), d = $a(i), p = Wa(d), h = sn(i), g = f === "y", x = a.x + a.width / 2 - c.width / 2, v = a.y + a.height / 2 - c.height / 2, S = a[p] / 2 - c[p] / 2;
  let _;
  switch (h) {
    case "top":
      _ = {
        x,
        y: a.y - c.height
      };
      break;
    case "bottom":
      _ = {
        x,
        y: a.y + a.height
      };
      break;
    case "right":
      _ = {
        x: a.x + a.width,
        y: v
      };
      break;
    case "left":
      _ = {
        x: a.x - c.width,
        y: v
      };
      break;
    default:
      _ = {
        x: a.x,
        y: a.y
      };
  }
  switch (Dr(i)) {
    case "start":
      _[d] -= S * (l && g ? -1 : 1);
      break;
    case "end":
      _[d] += S * (l && g ? -1 : 1);
      break;
  }
  return _;
}
const wv = async (r, i, l) => {
  const {
    placement: a = "bottom",
    strategy: c = "absolute",
    middleware: f = [],
    platform: d
  } = l, p = f.filter(Boolean), h = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let g = await d.getElementRects({
    reference: r,
    floating: i,
    strategy: c
  }), {
    x,
    y: v
  } = id(g, a, h), S = a, _ = {}, P = 0;
  for (let w = 0; w < p.length; w++) {
    const {
      name: C,
      fn: N
    } = p[w], {
      x: T,
      y: z,
      data: D,
      reset: B
    } = await N({
      x,
      y: v,
      initialPlacement: a,
      placement: S,
      strategy: c,
      middlewareData: _,
      rects: g,
      platform: d,
      elements: {
        reference: r,
        floating: i
      }
    });
    x = T ?? x, v = z ?? v, _ = {
      ..._,
      [C]: {
        ..._[C],
        ...D
      }
    }, B && P <= 50 && (P++, typeof B == "object" && (B.placement && (S = B.placement), B.rects && (g = B.rects === !0 ? await d.getElementRects({
      reference: r,
      floating: i,
      strategy: c
    }) : B.rects), {
      x,
      y: v
    } = id(g, S, h)), w = -1);
  }
  return {
    x,
    y: v,
    placement: S,
    strategy: c,
    middlewareData: _
  };
};
async function Io(r, i) {
  var l;
  i === void 0 && (i = {});
  const {
    x: a,
    y: c,
    platform: f,
    rects: d,
    elements: p,
    strategy: h
  } = r, {
    boundary: g = "clippingAncestors",
    rootBoundary: x = "viewport",
    elementContext: v = "floating",
    altBoundary: S = !1,
    padding: _ = 0
  } = ln(i, r), P = Bd(_), C = p[S ? v === "floating" ? "reference" : "floating" : v], N = gl(await f.getClippingRect({
    element: (l = await (f.isElement == null ? void 0 : f.isElement(C))) == null || l ? C : C.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
    boundary: g,
    rootBoundary: x,
    strategy: h
  })), T = v === "floating" ? {
    x: a,
    y: c,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, z = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating)), D = await (f.isElement == null ? void 0 : f.isElement(z)) ? await (f.getScale == null ? void 0 : f.getScale(z)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, B = gl(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: T,
    offsetParent: z,
    strategy: h
  }) : T);
  return {
    top: (N.top - B.top + P.top) / D.y,
    bottom: (B.bottom - N.bottom + P.bottom) / D.y,
    left: (N.left - B.left + P.left) / D.x,
    right: (B.right - N.right + P.right) / D.x
  };
}
const xv = (r) => ({
  name: "arrow",
  options: r,
  async fn(i) {
    const {
      x: l,
      y: a,
      placement: c,
      rects: f,
      platform: d,
      elements: p,
      middlewareData: h
    } = i, {
      element: g,
      padding: x = 0
    } = ln(r, i) || {};
    if (g == null)
      return {};
    const v = Bd(x), S = {
      x: l,
      y: a
    }, _ = $a(c), P = Wa(_), w = await d.getDimensions(g), C = _ === "y", N = C ? "top" : "left", T = C ? "bottom" : "right", z = C ? "clientHeight" : "clientWidth", D = f.reference[P] + f.reference[_] - S[_] - f.floating[P], B = S[_] - f.reference[_], Q = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(g));
    let $ = Q ? Q[z] : 0;
    (!$ || !await (d.isElement == null ? void 0 : d.isElement(Q))) && ($ = p.floating[z] || f.floating[P]);
    const G = D / 2 - B / 2, q = $ / 2 - w[P] / 2 - 1, re = Tn(v[N], q), oe = Tn(v[T], q), X = re, de = $ - w[P] - oe, ae = $ / 2 - w[P] / 2 + G, xe = Ra(X, ae, de), pe = !h.arrow && Dr(c) != null && ae !== xe && f.reference[P] / 2 - (ae < X ? re : oe) - w[P] / 2 < 0, ie = pe ? ae < X ? ae - X : ae - de : 0;
    return {
      [_]: S[_] + ie,
      data: {
        [_]: xe,
        centerOffset: ae - xe - ie,
        ...pe && {
          alignmentOffset: ie
        }
      },
      reset: pe
    };
  }
}), Sv = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(i) {
      var l, a;
      const {
        placement: c,
        middlewareData: f,
        rects: d,
        initialPlacement: p,
        platform: h,
        elements: g
      } = i, {
        mainAxis: x = !0,
        crossAxis: v = !0,
        fallbackPlacements: S,
        fallbackStrategy: _ = "bestFit",
        fallbackAxisSideDirection: P = "none",
        flipAlignment: w = !0,
        ...C
      } = ln(r, i);
      if ((l = f.arrow) != null && l.alignmentOffset)
        return {};
      const N = sn(c), T = Ln(p), z = sn(p) === p, D = await (h.isRTL == null ? void 0 : h.isRTL(g.floating)), B = S || (z || !w ? [hl(p)] : hv(p)), Q = P !== "none";
      !S && Q && B.push(...vv(p, w, P, D));
      const $ = [p, ...B], G = await Io(i, C), q = [];
      let re = ((a = f.flip) == null ? void 0 : a.overflows) || [];
      if (x && q.push(G[N]), v) {
        const ae = mv(c, d, D);
        q.push(G[ae[0]], G[ae[1]]);
      }
      if (re = [...re, {
        placement: c,
        overflows: q
      }], !q.every((ae) => ae <= 0)) {
        var oe, X;
        const ae = (((oe = f.flip) == null ? void 0 : oe.index) || 0) + 1, xe = $[ae];
        if (xe)
          return {
            data: {
              index: ae,
              overflows: re
            },
            reset: {
              placement: xe
            }
          };
        let pe = (X = re.filter((ie) => ie.overflows[0] <= 0).sort((ie, M) => ie.overflows[1] - M.overflows[1])[0]) == null ? void 0 : X.placement;
        if (!pe)
          switch (_) {
            case "bestFit": {
              var de;
              const ie = (de = re.filter((M) => {
                if (Q) {
                  const K = Ln(M.placement);
                  return K === T || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((K) => K > 0).reduce((K, H) => K + H, 0)]).sort((M, K) => M[1] - K[1])[0]) == null ? void 0 : de[0];
              ie && (pe = ie);
              break;
            }
            case "initialPlacement":
              pe = p;
              break;
          }
        if (c !== pe)
          return {
            reset: {
              placement: pe
            }
          };
      }
      return {};
    }
  };
};
function ld(r, i) {
  return {
    top: r.top - i.height,
    right: r.right - i.width,
    bottom: r.bottom - i.height,
    left: r.left - i.width
  };
}
function sd(r) {
  return fv.some((i) => r[i] >= 0);
}
const kv = function(r) {
  return r === void 0 && (r = {}), {
    name: "hide",
    options: r,
    async fn(i) {
      const {
        rects: l
      } = i, {
        strategy: a = "referenceHidden",
        ...c
      } = ln(r, i);
      switch (a) {
        case "referenceHidden": {
          const f = await Io(i, {
            ...c,
            elementContext: "reference"
          }), d = ld(f, l.reference);
          return {
            data: {
              referenceHiddenOffsets: d,
              referenceHidden: sd(d)
            }
          };
        }
        case "escaped": {
          const f = await Io(i, {
            ...c,
            altBoundary: !0
          }), d = ld(f, l.floating);
          return {
            data: {
              escapedOffsets: d,
              escaped: sd(d)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ev(r, i) {
  const {
    placement: l,
    platform: a,
    elements: c
  } = r, f = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), d = sn(l), p = Dr(l), h = Ln(l) === "y", g = ["left", "top"].includes(d) ? -1 : 1, x = f && h ? -1 : 1, v = ln(i, r);
  let {
    mainAxis: S,
    crossAxis: _,
    alignmentAxis: P
  } = typeof v == "number" ? {
    mainAxis: v,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: v.mainAxis || 0,
    crossAxis: v.crossAxis || 0,
    alignmentAxis: v.alignmentAxis
  };
  return p && typeof P == "number" && (_ = p === "end" ? P * -1 : P), h ? {
    x: _ * x,
    y: S * g
  } : {
    x: S * g,
    y: _ * x
  };
}
const Cv = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(i) {
      var l, a;
      const {
        x: c,
        y: f,
        placement: d,
        middlewareData: p
      } = i, h = await Ev(i, r);
      return d === ((l = p.offset) == null ? void 0 : l.placement) && (a = p.arrow) != null && a.alignmentOffset ? {} : {
        x: c + h.x,
        y: f + h.y,
        data: {
          ...h,
          placement: d
        }
      };
    }
  };
}, Pv = function(r) {
  return r === void 0 && (r = {}), {
    name: "shift",
    options: r,
    async fn(i) {
      const {
        x: l,
        y: a,
        placement: c
      } = i, {
        mainAxis: f = !0,
        crossAxis: d = !1,
        limiter: p = {
          fn: (C) => {
            let {
              x: N,
              y: T
            } = C;
            return {
              x: N,
              y: T
            };
          }
        },
        ...h
      } = ln(r, i), g = {
        x: l,
        y: a
      }, x = await Io(i, h), v = Ln(sn(c)), S = Ba(v);
      let _ = g[S], P = g[v];
      if (f) {
        const C = S === "y" ? "top" : "left", N = S === "y" ? "bottom" : "right", T = _ + x[C], z = _ - x[N];
        _ = Ra(T, _, z);
      }
      if (d) {
        const C = v === "y" ? "top" : "left", N = v === "y" ? "bottom" : "right", T = P + x[C], z = P - x[N];
        P = Ra(T, P, z);
      }
      const w = p.fn({
        ...i,
        [S]: _,
        [v]: P
      });
      return {
        ...w,
        data: {
          x: w.x - l,
          y: w.y - a,
          enabled: {
            [S]: f,
            [v]: d
          }
        }
      };
    }
  };
}, Nv = function(r) {
  return r === void 0 && (r = {}), {
    options: r,
    fn(i) {
      const {
        x: l,
        y: a,
        placement: c,
        rects: f,
        middlewareData: d
      } = i, {
        offset: p = 0,
        mainAxis: h = !0,
        crossAxis: g = !0
      } = ln(r, i), x = {
        x: l,
        y: a
      }, v = Ln(c), S = Ba(v);
      let _ = x[S], P = x[v];
      const w = ln(p, i), C = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (h) {
        const z = S === "y" ? "height" : "width", D = f.reference[S] - f.floating[z] + C.mainAxis, B = f.reference[S] + f.reference[z] - C.mainAxis;
        _ < D ? _ = D : _ > B && (_ = B);
      }
      if (g) {
        var N, T;
        const z = S === "y" ? "width" : "height", D = ["top", "left"].includes(sn(c)), B = f.reference[v] - f.floating[z] + (D && ((N = d.offset) == null ? void 0 : N[v]) || 0) + (D ? 0 : C.crossAxis), Q = f.reference[v] + f.reference[z] + (D ? 0 : ((T = d.offset) == null ? void 0 : T[v]) || 0) - (D ? C.crossAxis : 0);
        P < B ? P = B : P > Q && (P = Q);
      }
      return {
        [S]: _,
        [v]: P
      };
    }
  };
}, bv = function(r) {
  return r === void 0 && (r = {}), {
    name: "size",
    options: r,
    async fn(i) {
      var l, a;
      const {
        placement: c,
        rects: f,
        platform: d,
        elements: p
      } = i, {
        apply: h = () => {
        },
        ...g
      } = ln(r, i), x = await Io(i, g), v = sn(c), S = Dr(c), _ = Ln(c) === "y", {
        width: P,
        height: w
      } = f.floating;
      let C, N;
      v === "top" || v === "bottom" ? (C = v, N = S === (await (d.isRTL == null ? void 0 : d.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (N = v, C = S === "end" ? "top" : "bottom");
      const T = w - x.top - x.bottom, z = P - x.left - x.right, D = Tn(w - x[C], T), B = Tn(P - x[N], z), Q = !i.middlewareData.shift;
      let $ = D, G = B;
      if ((l = i.middlewareData.shift) != null && l.enabled.x && (G = z), (a = i.middlewareData.shift) != null && a.enabled.y && ($ = T), Q && !S) {
        const re = ht(x.left, 0), oe = ht(x.right, 0), X = ht(x.top, 0), de = ht(x.bottom, 0);
        _ ? G = P - 2 * (re !== 0 || oe !== 0 ? re + oe : ht(x.left, x.right)) : $ = w - 2 * (X !== 0 || de !== 0 ? X + de : ht(x.top, x.bottom));
      }
      await h({
        ...i,
        availableWidth: G,
        availableHeight: $
      });
      const q = await d.getDimensions(p.floating);
      return P !== q.width || w !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function wl() {
  return typeof window < "u";
}
function Ir(r) {
  return Wd(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function gt(r) {
  var i;
  return (r == null || (i = r.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function Qt(r) {
  var i;
  return (i = (Wd(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : i.documentElement;
}
function Wd(r) {
  return wl() ? r instanceof Node || r instanceof gt(r).Node : !1;
}
function zt(r) {
  return wl() ? r instanceof Element || r instanceof gt(r).Element : !1;
}
function Ut(r) {
  return wl() ? r instanceof HTMLElement || r instanceof gt(r).HTMLElement : !1;
}
function ad(r) {
  return !wl() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof gt(r).ShadowRoot;
}
function Vo(r) {
  const {
    overflow: i,
    overflowX: l,
    overflowY: a,
    display: c
  } = Mt(r);
  return /auto|scroll|overlay|hidden|clip/.test(i + a + l) && !["inline", "contents"].includes(c);
}
function Rv(r) {
  return ["table", "td", "th"].includes(Ir(r));
}
function xl(r) {
  return [":popover-open", ":modal"].some((i) => {
    try {
      return r.matches(i);
    } catch {
      return !1;
    }
  });
}
function Va(r) {
  const i = Ua(), l = zt(r) ? Mt(r) : r;
  return l.transform !== "none" || l.perspective !== "none" || (l.containerType ? l.containerType !== "normal" : !1) || !i && (l.backdropFilter ? l.backdropFilter !== "none" : !1) || !i && (l.filter ? l.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((a) => (l.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some((a) => (l.contain || "").includes(a));
}
function _v(r) {
  let i = zn(r);
  for (; Ut(i) && !zr(i); ) {
    if (Va(i))
      return i;
    if (xl(i))
      return null;
    i = zn(i);
  }
  return null;
}
function Ua() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zr(r) {
  return ["html", "body", "#document"].includes(Ir(r));
}
function Mt(r) {
  return gt(r).getComputedStyle(r);
}
function Sl(r) {
  return zt(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function zn(r) {
  if (Ir(r) === "html")
    return r;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    ad(r) && r.host || // Fallback.
    Qt(r)
  );
  return ad(i) ? i.host : i;
}
function $d(r) {
  const i = zn(r);
  return zr(i) ? r.ownerDocument ? r.ownerDocument.body : r.body : Ut(i) && Vo(i) ? i : $d(i);
}
function Fo(r, i, l) {
  var a;
  i === void 0 && (i = []), l === void 0 && (l = !0);
  const c = $d(r), f = c === ((a = r.ownerDocument) == null ? void 0 : a.body), d = gt(c);
  if (f) {
    const p = Oa(d);
    return i.concat(d, d.visualViewport || [], Vo(c) ? c : [], p && l ? Fo(p) : []);
  }
  return i.concat(c, Fo(c, [], l));
}
function Oa(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
function Vd(r) {
  const i = Mt(r);
  let l = parseFloat(i.width) || 0, a = parseFloat(i.height) || 0;
  const c = Ut(r), f = c ? r.offsetWidth : l, d = c ? r.offsetHeight : a, p = ml(l) !== f || ml(a) !== d;
  return p && (l = f, a = d), {
    width: l,
    height: a,
    $: p
  };
}
function Ha(r) {
  return zt(r) ? r : r.contextElement;
}
function Tr(r) {
  const i = Ha(r);
  if (!Ut(i))
    return Vt(1);
  const l = i.getBoundingClientRect(), {
    width: a,
    height: c,
    $: f
  } = Vd(i);
  let d = (f ? ml(l.width) : l.width) / a, p = (f ? ml(l.height) : l.height) / c;
  return (!d || !Number.isFinite(d)) && (d = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: d,
    y: p
  };
}
const Ov = /* @__PURE__ */ Vt(0);
function Ud(r) {
  const i = gt(r);
  return !Ua() || !i.visualViewport ? Ov : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function Av(r, i, l) {
  return i === void 0 && (i = !1), !l || i && l !== gt(r) ? !1 : i;
}
function qn(r, i, l, a) {
  i === void 0 && (i = !1), l === void 0 && (l = !1);
  const c = r.getBoundingClientRect(), f = Ha(r);
  let d = Vt(1);
  i && (a ? zt(a) && (d = Tr(a)) : d = Tr(r));
  const p = Av(f, l, a) ? Ud(f) : Vt(0);
  let h = (c.left + p.x) / d.x, g = (c.top + p.y) / d.y, x = c.width / d.x, v = c.height / d.y;
  if (f) {
    const S = gt(f), _ = a && zt(a) ? gt(a) : a;
    let P = S, w = Oa(P);
    for (; w && a && _ !== P; ) {
      const C = Tr(w), N = w.getBoundingClientRect(), T = Mt(w), z = N.left + (w.clientLeft + parseFloat(T.paddingLeft)) * C.x, D = N.top + (w.clientTop + parseFloat(T.paddingTop)) * C.y;
      h *= C.x, g *= C.y, x *= C.x, v *= C.y, h += z, g += D, P = gt(w), w = Oa(P);
    }
  }
  return gl({
    width: x,
    height: v,
    x: h,
    y: g
  });
}
function Qa(r, i) {
  const l = Sl(r).scrollLeft;
  return i ? i.left + l : qn(Qt(r)).left + l;
}
function Hd(r, i, l) {
  l === void 0 && (l = !1);
  const a = r.getBoundingClientRect(), c = a.left + i.scrollLeft - (l ? 0 : (
    // RTL <body> scrollbar.
    Qa(r, a)
  )), f = a.top + i.scrollTop;
  return {
    x: c,
    y: f
  };
}
function Tv(r) {
  let {
    elements: i,
    rect: l,
    offsetParent: a,
    strategy: c
  } = r;
  const f = c === "fixed", d = Qt(a), p = i ? xl(i.floating) : !1;
  if (a === d || p && f)
    return l;
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  }, g = Vt(1);
  const x = Vt(0), v = Ut(a);
  if ((v || !v && !f) && ((Ir(a) !== "body" || Vo(d)) && (h = Sl(a)), Ut(a))) {
    const _ = qn(a);
    g = Tr(a), x.x = _.x + a.clientLeft, x.y = _.y + a.clientTop;
  }
  const S = d && !v && !f ? Hd(d, h, !0) : Vt(0);
  return {
    width: l.width * g.x,
    height: l.height * g.y,
    x: l.x * g.x - h.scrollLeft * g.x + x.x + S.x,
    y: l.y * g.y - h.scrollTop * g.y + x.y + S.y
  };
}
function Lv(r) {
  return Array.from(r.getClientRects());
}
function zv(r) {
  const i = Qt(r), l = Sl(r), a = r.ownerDocument.body, c = ht(i.scrollWidth, i.clientWidth, a.scrollWidth, a.clientWidth), f = ht(i.scrollHeight, i.clientHeight, a.scrollHeight, a.clientHeight);
  let d = -l.scrollLeft + Qa(r);
  const p = -l.scrollTop;
  return Mt(a).direction === "rtl" && (d += ht(i.clientWidth, a.clientWidth) - c), {
    width: c,
    height: f,
    x: d,
    y: p
  };
}
function Mv(r, i) {
  const l = gt(r), a = Qt(r), c = l.visualViewport;
  let f = a.clientWidth, d = a.clientHeight, p = 0, h = 0;
  if (c) {
    f = c.width, d = c.height;
    const g = Ua();
    (!g || g && i === "fixed") && (p = c.offsetLeft, h = c.offsetTop);
  }
  return {
    width: f,
    height: d,
    x: p,
    y: h
  };
}
function jv(r, i) {
  const l = qn(r, !0, i === "fixed"), a = l.top + r.clientTop, c = l.left + r.clientLeft, f = Ut(r) ? Tr(r) : Vt(1), d = r.clientWidth * f.x, p = r.clientHeight * f.y, h = c * f.x, g = a * f.y;
  return {
    width: d,
    height: p,
    x: h,
    y: g
  };
}
function ud(r, i, l) {
  let a;
  if (i === "viewport")
    a = Mv(r, l);
  else if (i === "document")
    a = zv(Qt(r));
  else if (zt(i))
    a = jv(i, l);
  else {
    const c = Ud(r);
    a = {
      x: i.x - c.x,
      y: i.y - c.y,
      width: i.width,
      height: i.height
    };
  }
  return gl(a);
}
function Qd(r, i) {
  const l = zn(r);
  return l === i || !zt(l) || zr(l) ? !1 : Mt(l).position === "fixed" || Qd(l, i);
}
function Dv(r, i) {
  const l = i.get(r);
  if (l)
    return l;
  let a = Fo(r, [], !1).filter((p) => zt(p) && Ir(p) !== "body"), c = null;
  const f = Mt(r).position === "fixed";
  let d = f ? zn(r) : r;
  for (; zt(d) && !zr(d); ) {
    const p = Mt(d), h = Va(d);
    !h && p.position === "fixed" && (c = null), (f ? !h && !c : !h && p.position === "static" && !!c && ["absolute", "fixed"].includes(c.position) || Vo(d) && !h && Qd(r, d)) ? a = a.filter((x) => x !== d) : c = p, d = zn(d);
  }
  return i.set(r, a), a;
}
function Iv(r) {
  let {
    element: i,
    boundary: l,
    rootBoundary: a,
    strategy: c
  } = r;
  const d = [...l === "clippingAncestors" ? xl(i) ? [] : Dv(i, this._c) : [].concat(l), a], p = d[0], h = d.reduce((g, x) => {
    const v = ud(i, x, c);
    return g.top = ht(v.top, g.top), g.right = Tn(v.right, g.right), g.bottom = Tn(v.bottom, g.bottom), g.left = ht(v.left, g.left), g;
  }, ud(i, p, c));
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top
  };
}
function Fv(r) {
  const {
    width: i,
    height: l
  } = Vd(r);
  return {
    width: i,
    height: l
  };
}
function Bv(r, i, l) {
  const a = Ut(i), c = Qt(i), f = l === "fixed", d = qn(r, !0, f, i);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const h = Vt(0);
  if (a || !a && !f)
    if ((Ir(i) !== "body" || Vo(c)) && (p = Sl(i)), a) {
      const S = qn(i, !0, f, i);
      h.x = S.x + i.clientLeft, h.y = S.y + i.clientTop;
    } else c && (h.x = Qa(c));
  const g = c && !a && !f ? Hd(c, p) : Vt(0), x = d.left + p.scrollLeft - h.x - g.x, v = d.top + p.scrollTop - h.y - g.y;
  return {
    x,
    y: v,
    width: d.width,
    height: d.height
  };
}
function ya(r) {
  return Mt(r).position === "static";
}
function cd(r, i) {
  if (!Ut(r) || Mt(r).position === "fixed")
    return null;
  if (i)
    return i(r);
  let l = r.offsetParent;
  return Qt(r) === l && (l = l.ownerDocument.body), l;
}
function Kd(r, i) {
  const l = gt(r);
  if (xl(r))
    return l;
  if (!Ut(r)) {
    let c = zn(r);
    for (; c && !zr(c); ) {
      if (zt(c) && !ya(c))
        return c;
      c = zn(c);
    }
    return l;
  }
  let a = cd(r, i);
  for (; a && Rv(a) && ya(a); )
    a = cd(a, i);
  return a && zr(a) && ya(a) && !Va(a) ? l : a || _v(r) || l;
}
const Wv = async function(r) {
  const i = this.getOffsetParent || Kd, l = this.getDimensions, a = await l(r.floating);
  return {
    reference: Bv(r.reference, await i(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function $v(r) {
  return Mt(r).direction === "rtl";
}
const Vv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Tv,
  getDocumentElement: Qt,
  getClippingRect: Iv,
  getOffsetParent: Kd,
  getElementRects: Wv,
  getClientRects: Lv,
  getDimensions: Fv,
  getScale: Tr,
  isElement: zt,
  isRTL: $v
};
function Uv(r, i) {
  let l = null, a;
  const c = Qt(r);
  function f() {
    var p;
    clearTimeout(a), (p = l) == null || p.disconnect(), l = null;
  }
  function d(p, h) {
    p === void 0 && (p = !1), h === void 0 && (h = 1), f();
    const {
      left: g,
      top: x,
      width: v,
      height: S
    } = r.getBoundingClientRect();
    if (p || i(), !v || !S)
      return;
    const _ = ol(x), P = ol(c.clientWidth - (g + v)), w = ol(c.clientHeight - (x + S)), C = ol(g), T = {
      rootMargin: -_ + "px " + -P + "px " + -w + "px " + -C + "px",
      threshold: ht(0, Tn(1, h)) || 1
    };
    let z = !0;
    function D(B) {
      const Q = B[0].intersectionRatio;
      if (Q !== h) {
        if (!z)
          return d();
        Q ? d(!1, Q) : a = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      z = !1;
    }
    try {
      l = new IntersectionObserver(D, {
        ...T,
        // Handle <iframe>s
        root: c.ownerDocument
      });
    } catch {
      l = new IntersectionObserver(D, T);
    }
    l.observe(r);
  }
  return d(!0), f;
}
function Hv(r, i, l, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: c = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: h = !1
  } = a, g = Ha(r), x = c || f ? [...g ? Fo(g) : [], ...Fo(i)] : [];
  x.forEach((N) => {
    c && N.addEventListener("scroll", l, {
      passive: !0
    }), f && N.addEventListener("resize", l);
  });
  const v = g && p ? Uv(g, l) : null;
  let S = -1, _ = null;
  d && (_ = new ResizeObserver((N) => {
    let [T] = N;
    T && T.target === g && _ && (_.unobserve(i), cancelAnimationFrame(S), S = requestAnimationFrame(() => {
      var z;
      (z = _) == null || z.observe(i);
    })), l();
  }), g && !h && _.observe(g), _.observe(i));
  let P, w = h ? qn(r) : null;
  h && C();
  function C() {
    const N = qn(r);
    w && (N.x !== w.x || N.y !== w.y || N.width !== w.width || N.height !== w.height) && l(), w = N, P = requestAnimationFrame(C);
  }
  return l(), () => {
    var N;
    x.forEach((T) => {
      c && T.removeEventListener("scroll", l), f && T.removeEventListener("resize", l);
    }), v?.(), (N = _) == null || N.disconnect(), _ = null, h && cancelAnimationFrame(P);
  };
}
const Qv = Cv, Kv = Pv, Gv = Sv, Yv = bv, Xv = kv, fd = xv, Zv = Nv, Jv = (r, i, l) => {
  const a = /* @__PURE__ */ new Map(), c = {
    platform: Vv,
    ...l
  }, f = {
    ...c.platform,
    _c: a
  };
  return wv(r, i, {
    ...c,
    platform: f
  });
};
var fl = typeof document < "u" ? k.useLayoutEffect : k.useEffect;
function vl(r, i) {
  if (r === i)
    return !0;
  if (typeof r != typeof i)
    return !1;
  if (typeof r == "function" && r.toString() === i.toString())
    return !0;
  let l, a, c;
  if (r && i && typeof r == "object") {
    if (Array.isArray(r)) {
      if (l = r.length, l !== i.length) return !1;
      for (a = l; a-- !== 0; )
        if (!vl(r[a], i[a]))
          return !1;
      return !0;
    }
    if (c = Object.keys(r), l = c.length, l !== Object.keys(i).length)
      return !1;
    for (a = l; a-- !== 0; )
      if (!{}.hasOwnProperty.call(i, c[a]))
        return !1;
    for (a = l; a-- !== 0; ) {
      const f = c[a];
      if (!(f === "_owner" && r.$$typeof) && !vl(r[f], i[f]))
        return !1;
    }
    return !0;
  }
  return r !== r && i !== i;
}
function Gd(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function dd(r, i) {
  const l = Gd(r);
  return Math.round(i * l) / l;
}
function wa(r) {
  const i = k.useRef(r);
  return fl(() => {
    i.current = r;
  }), i;
}
function qv(r) {
  r === void 0 && (r = {});
  const {
    placement: i = "bottom",
    strategy: l = "absolute",
    middleware: a = [],
    platform: c,
    elements: {
      reference: f,
      floating: d
    } = {},
    transform: p = !0,
    whileElementsMounted: h,
    open: g
  } = r, [x, v] = k.useState({
    x: 0,
    y: 0,
    strategy: l,
    placement: i,
    middlewareData: {},
    isPositioned: !1
  }), [S, _] = k.useState(a);
  vl(S, a) || _(a);
  const [P, w] = k.useState(null), [C, N] = k.useState(null), T = k.useCallback((M) => {
    M !== Q.current && (Q.current = M, w(M));
  }, []), z = k.useCallback((M) => {
    M !== $.current && ($.current = M, N(M));
  }, []), D = f || P, B = d || C, Q = k.useRef(null), $ = k.useRef(null), G = k.useRef(x), q = h != null, re = wa(h), oe = wa(c), X = wa(g), de = k.useCallback(() => {
    if (!Q.current || !$.current)
      return;
    const M = {
      placement: i,
      strategy: l,
      middleware: S
    };
    oe.current && (M.platform = oe.current), Jv(Q.current, $.current, M).then((K) => {
      const H = {
        ...K,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: X.current !== !1
      };
      ae.current && !vl(G.current, H) && (G.current = H, Da.flushSync(() => {
        v(H);
      }));
    });
  }, [S, i, l, oe, X]);
  fl(() => {
    g === !1 && G.current.isPositioned && (G.current.isPositioned = !1, v((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [g]);
  const ae = k.useRef(!1);
  fl(() => (ae.current = !0, () => {
    ae.current = !1;
  }), []), fl(() => {
    if (D && (Q.current = D), B && ($.current = B), D && B) {
      if (re.current)
        return re.current(D, B, de);
      de();
    }
  }, [D, B, de, re, q]);
  const xe = k.useMemo(() => ({
    reference: Q,
    floating: $,
    setReference: T,
    setFloating: z
  }), [T, z]), pe = k.useMemo(() => ({
    reference: D,
    floating: B
  }), [D, B]), ie = k.useMemo(() => {
    const M = {
      position: l,
      left: 0,
      top: 0
    };
    if (!pe.floating)
      return M;
    const K = dd(pe.floating, x.x), H = dd(pe.floating, x.y);
    return p ? {
      ...M,
      transform: "translate(" + K + "px, " + H + "px)",
      ...Gd(pe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: l,
      left: K,
      top: H
    };
  }, [l, p, pe.floating, x.x, x.y]);
  return k.useMemo(() => ({
    ...x,
    update: de,
    refs: xe,
    elements: pe,
    floatingStyles: ie
  }), [x, de, xe, pe, ie]);
}
const ey = (r) => {
  function i(l) {
    return {}.hasOwnProperty.call(l, "current");
  }
  return {
    name: "arrow",
    options: r,
    fn(l) {
      const {
        element: a,
        padding: c
      } = typeof r == "function" ? r(l) : r;
      return a && i(a) ? a.current != null ? fd({
        element: a.current,
        padding: c
      }).fn(l) : {} : a ? fd({
        element: a,
        padding: c
      }).fn(l) : {};
    }
  };
}, ty = (r, i) => ({
  ...Qv(r),
  options: [r, i]
}), ny = (r, i) => ({
  ...Kv(r),
  options: [r, i]
}), ry = (r, i) => ({
  ...Zv(r),
  options: [r, i]
}), oy = (r, i) => ({
  ...Gv(r),
  options: [r, i]
}), iy = (r, i) => ({
  ...Yv(r),
  options: [r, i]
}), ly = (r, i) => ({
  ...Xv(r),
  options: [r, i]
}), sy = (r, i) => ({
  ...ey(r),
  options: [r, i]
});
var ay = "Arrow", Yd = k.forwardRef((r, i) => {
  const { children: l, width: a = 10, height: c = 5, ...f } = r;
  return /* @__PURE__ */ j.jsx(
    Ht.svg,
    {
      ...f,
      ref: i,
      width: a,
      height: c,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: r.asChild ? l : /* @__PURE__ */ j.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Yd.displayName = ay;
var uy = Yd;
function cy(r) {
  const [i, l] = k.useState(void 0);
  return Jn(() => {
    if (r) {
      l({ width: r.offsetWidth, height: r.offsetHeight });
      const a = new ResizeObserver((c) => {
        if (!Array.isArray(c) || !c.length)
          return;
        const f = c[0];
        let d, p;
        if ("borderBoxSize" in f) {
          const h = f.borderBoxSize, g = Array.isArray(h) ? h[0] : h;
          d = g.inlineSize, p = g.blockSize;
        } else
          d = r.offsetWidth, p = r.offsetHeight;
        l({ width: d, height: p });
      });
      return a.observe(r, { box: "border-box" }), () => a.unobserve(r);
    } else
      l(void 0);
  }, [r]), i;
}
var Ka = "Popper", [Xd, Zd] = zd(Ka), [fy, Jd] = Xd(Ka), qd = (r) => {
  const { __scopePopper: i, children: l } = r, [a, c] = k.useState(null);
  return /* @__PURE__ */ j.jsx(fy, { scope: i, anchor: a, onAnchorChange: c, children: l });
};
qd.displayName = Ka;
var ep = "PopperAnchor", tp = k.forwardRef(
  (r, i) => {
    const { __scopePopper: l, virtualRef: a, ...c } = r, f = Jd(ep, l), d = k.useRef(null), p = Mn(i, d);
    return k.useEffect(() => {
      f.onAnchorChange(a?.current || d.current);
    }), a ? null : /* @__PURE__ */ j.jsx(Ht.div, { ...c, ref: p });
  }
);
tp.displayName = ep;
var Ga = "PopperContent", [dy, py] = Xd(Ga), np = k.forwardRef(
  (r, i) => {
    const {
      __scopePopper: l,
      side: a = "bottom",
      sideOffset: c = 0,
      align: f = "center",
      alignOffset: d = 0,
      arrowPadding: p = 0,
      avoidCollisions: h = !0,
      collisionBoundary: g = [],
      collisionPadding: x = 0,
      sticky: v = "partial",
      hideWhenDetached: S = !1,
      updatePositionStrategy: _ = "optimized",
      onPlaced: P,
      ...w
    } = r, C = Jd(Ga, l), [N, T] = k.useState(null), z = Mn(i, (he) => T(he)), [D, B] = k.useState(null), Q = cy(D), $ = Q?.width ?? 0, G = Q?.height ?? 0, q = a + (f !== "center" ? "-" + f : ""), re = typeof x == "number" ? x : { top: 0, right: 0, bottom: 0, left: 0, ...x }, oe = Array.isArray(g) ? g : [g], X = oe.length > 0, de = {
      padding: re,
      boundary: oe.filter(hy),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: X
    }, { refs: ae, floatingStyles: xe, placement: pe, isPositioned: ie, middlewareData: M } = qv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: q,
      whileElementsMounted: (...he) => Hv(...he, {
        animationFrame: _ === "always"
      }),
      elements: {
        reference: C.anchor
      },
      middleware: [
        ty({ mainAxis: c + G, alignmentAxis: d }),
        h && ny({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? ry() : void 0,
          ...de
        }),
        h && oy({ ...de }),
        iy({
          ...de,
          apply: ({ elements: he, rects: fe, availableWidth: Se, availableHeight: be }) => {
            const { width: Pe, height: te } = fe.reference, ke = he.floating.style;
            ke.setProperty("--radix-popper-available-width", `${Se}px`), ke.setProperty("--radix-popper-available-height", `${be}px`), ke.setProperty("--radix-popper-anchor-width", `${Pe}px`), ke.setProperty("--radix-popper-anchor-height", `${te}px`);
          }
        }),
        D && sy({ element: D, padding: p }),
        gy({ arrowWidth: $, arrowHeight: G }),
        S && ly({ strategy: "referenceHidden", ...de })
      ]
    }), [K, H] = ip(pe), b = An(P);
    Jn(() => {
      ie && b?.();
    }, [ie, b]);
    const I = M.arrow?.x, ce = M.arrow?.y, ue = M.arrow?.centerOffset !== 0, [ve, ye] = k.useState();
    return Jn(() => {
      N && ye(window.getComputedStyle(N).zIndex);
    }, [N]), /* @__PURE__ */ j.jsx(
      "div",
      {
        ref: ae.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...xe,
          transform: ie ? xe.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            M.transformOrigin?.x,
            M.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...M.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: r.dir,
        children: /* @__PURE__ */ j.jsx(
          dy,
          {
            scope: l,
            placedSide: K,
            onArrowChange: B,
            arrowX: I,
            arrowY: ce,
            shouldHideArrow: ue,
            children: /* @__PURE__ */ j.jsx(
              Ht.div,
              {
                "data-side": K,
                "data-align": H,
                ...w,
                ref: z,
                style: {
                  ...w.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: ie ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
np.displayName = Ga;
var rp = "PopperArrow", my = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, op = k.forwardRef(function(i, l) {
  const { __scopePopper: a, ...c } = i, f = py(rp, a), d = my[f.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ j.jsx(
      "span",
      {
        ref: f.onArrowChange,
        style: {
          position: "absolute",
          left: f.arrowX,
          top: f.arrowY,
          [d]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[f.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[f.placedSide],
          visibility: f.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ j.jsx(
          uy,
          {
            ...c,
            ref: l,
            style: {
              ...c.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
op.displayName = rp;
function hy(r) {
  return r !== null;
}
var gy = (r) => ({
  name: "transformOrigin",
  options: r,
  fn(i) {
    const { placement: l, rects: a, middlewareData: c } = i, d = c.arrow?.centerOffset !== 0, p = d ? 0 : r.arrowWidth, h = d ? 0 : r.arrowHeight, [g, x] = ip(l), v = { start: "0%", center: "50%", end: "100%" }[x], S = (c.arrow?.x ?? 0) + p / 2, _ = (c.arrow?.y ?? 0) + h / 2;
    let P = "", w = "";
    return g === "bottom" ? (P = d ? v : `${S}px`, w = `${-h}px`) : g === "top" ? (P = d ? v : `${S}px`, w = `${a.floating.height + h}px`) : g === "right" ? (P = `${-h}px`, w = d ? v : `${_}px`) : g === "left" && (P = `${a.floating.width + h}px`, w = d ? v : `${_}px`), { data: { x: P, y: w } };
  }
});
function ip(r) {
  const [i, l = "center"] = r.split("-");
  return [i, l];
}
var vy = qd, lp = tp, yy = np, wy = op, xy = "Portal", sp = k.forwardRef((r, i) => {
  const { container: l, ...a } = r, [c, f] = k.useState(!1);
  Jn(() => f(!0), []);
  const d = l || c && globalThis?.document?.body;
  return d ? Yh.createPortal(/* @__PURE__ */ j.jsx(Ht.div, { ...a, ref: i }), d) : null;
});
sp.displayName = xy;
function Sy(r, i) {
  return k.useReducer((l, a) => i[l][a] ?? l, r);
}
var Ya = (r) => {
  const { present: i, children: l } = r, a = ky(i), c = typeof l == "function" ? l({ present: a.isPresent }) : k.Children.only(l), f = Mn(a.ref, Ey(c));
  return typeof l == "function" || a.isPresent ? k.cloneElement(c, { ref: f }) : null;
};
Ya.displayName = "Presence";
function ky(r) {
  const [i, l] = k.useState(), a = k.useRef({}), c = k.useRef(r), f = k.useRef("none"), d = r ? "mounted" : "unmounted", [p, h] = Sy(d, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return k.useEffect(() => {
    const g = il(a.current);
    f.current = p === "mounted" ? g : "none";
  }, [p]), Jn(() => {
    const g = a.current, x = c.current;
    if (x !== r) {
      const S = f.current, _ = il(g);
      r ? h("MOUNT") : _ === "none" || g?.display === "none" ? h("UNMOUNT") : h(x && S !== _ ? "ANIMATION_OUT" : "UNMOUNT"), c.current = r;
    }
  }, [r, h]), Jn(() => {
    if (i) {
      let g;
      const x = i.ownerDocument.defaultView ?? window, v = (_) => {
        const w = il(a.current).includes(_.animationName);
        if (_.target === i && w && (h("ANIMATION_END"), !c.current)) {
          const C = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", g = x.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = C);
          });
        }
      }, S = (_) => {
        _.target === i && (f.current = il(a.current));
      };
      return i.addEventListener("animationstart", S), i.addEventListener("animationcancel", v), i.addEventListener("animationend", v), () => {
        x.clearTimeout(g), i.removeEventListener("animationstart", S), i.removeEventListener("animationcancel", v), i.removeEventListener("animationend", v);
      };
    } else
      h("ANIMATION_END");
  }, [i, h]), {
    isPresent: ["mounted", "unmountSuspended"].includes(p),
    ref: k.useCallback((g) => {
      g && (a.current = getComputedStyle(g)), l(g);
    }, [])
  };
}
function il(r) {
  return r?.animationName || "none";
}
function Ey(r) {
  let i = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning;
  return l ? r.ref : (i = Object.getOwnPropertyDescriptor(r, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning, l ? r.props.ref : r.props.ref || r.ref);
}
var ap = k.forwardRef((r, i) => {
  const { children: l, ...a } = r, c = k.Children.toArray(l), f = c.find(Py);
  if (f) {
    const d = f.props.children, p = c.map((h) => h === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : h);
    return /* @__PURE__ */ j.jsx(Aa, { ...a, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, p) : null });
  }
  return /* @__PURE__ */ j.jsx(Aa, { ...a, ref: i, children: l });
});
ap.displayName = "Slot";
var Aa = k.forwardRef((r, i) => {
  const { children: l, ...a } = r;
  if (k.isValidElement(l)) {
    const c = by(l);
    return k.cloneElement(l, {
      ...Ny(a, l.props),
      // @ts-ignore
      ref: i ? Ia(i, c) : c
    });
  }
  return k.Children.count(l) > 1 ? k.Children.only(null) : null;
});
Aa.displayName = "SlotClone";
var Cy = ({ children: r }) => /* @__PURE__ */ j.jsx(j.Fragment, { children: r });
function Py(r) {
  return k.isValidElement(r) && r.type === Cy;
}
function Ny(r, i) {
  const l = { ...i };
  for (const a in i) {
    const c = r[a], f = i[a];
    /^on[A-Z]/.test(a) ? c && f ? l[a] = (...p) => {
      f(...p), c(...p);
    } : c && (l[a] = c) : a === "style" ? l[a] = { ...c, ...f } : a === "className" && (l[a] = [c, f].filter(Boolean).join(" "));
  }
  return { ...r, ...l };
}
function by(r) {
  let i = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning;
  return l ? r.ref : (i = Object.getOwnPropertyDescriptor(r, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning, l ? r.props.ref : r.props.ref || r.ref);
}
function Ry({
  prop: r,
  defaultProp: i,
  onChange: l = () => {
  }
}) {
  const [a, c] = _y({ defaultProp: i, onChange: l }), f = r !== void 0, d = f ? r : a, p = An(l), h = k.useCallback(
    (g) => {
      if (f) {
        const v = typeof g == "function" ? g(r) : g;
        v !== r && p(v);
      } else
        c(g);
    },
    [f, r, c, p]
  );
  return [d, h];
}
function _y({
  defaultProp: r,
  onChange: i
}) {
  const l = k.useState(r), [a] = l, c = k.useRef(a), f = An(i);
  return k.useEffect(() => {
    c.current !== a && (f(a), c.current = a);
  }, [a, c, f]), l;
}
var Oy = function(r) {
  if (typeof document > "u")
    return null;
  var i = Array.isArray(r) ? r[0] : r;
  return i.ownerDocument.body;
}, Rr = /* @__PURE__ */ new WeakMap(), ll = /* @__PURE__ */ new WeakMap(), sl = {}, xa = 0, up = function(r) {
  return r && (r.host || up(r.parentNode));
}, Ay = function(r, i) {
  return i.map(function(l) {
    if (r.contains(l))
      return l;
    var a = up(l);
    return a && r.contains(a) ? a : (console.error("aria-hidden", l, "in not contained inside", r, ". Doing nothing"), null);
  }).filter(function(l) {
    return !!l;
  });
}, Ty = function(r, i, l, a) {
  var c = Ay(i, Array.isArray(r) ? r : [r]);
  sl[l] || (sl[l] = /* @__PURE__ */ new WeakMap());
  var f = sl[l], d = [], p = /* @__PURE__ */ new Set(), h = new Set(c), g = function(v) {
    !v || p.has(v) || (p.add(v), g(v.parentNode));
  };
  c.forEach(g);
  var x = function(v) {
    !v || h.has(v) || Array.prototype.forEach.call(v.children, function(S) {
      if (p.has(S))
        x(S);
      else
        try {
          var _ = S.getAttribute(a), P = _ !== null && _ !== "false", w = (Rr.get(S) || 0) + 1, C = (f.get(S) || 0) + 1;
          Rr.set(S, w), f.set(S, C), d.push(S), w === 1 && P && ll.set(S, !0), C === 1 && S.setAttribute(l, "true"), P || S.setAttribute(a, "true");
        } catch (N) {
          console.error("aria-hidden: cannot operate on ", S, N);
        }
    });
  };
  return x(i), p.clear(), xa++, function() {
    d.forEach(function(v) {
      var S = Rr.get(v) - 1, _ = f.get(v) - 1;
      Rr.set(v, S), f.set(v, _), S || (ll.has(v) || v.removeAttribute(a), ll.delete(v)), _ || v.removeAttribute(l);
    }), xa--, xa || (Rr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), ll = /* @__PURE__ */ new WeakMap(), sl = {});
  };
}, Ly = function(r, i, l) {
  l === void 0 && (l = "data-aria-hidden");
  var a = Array.from(Array.isArray(r) ? r : [r]), c = Oy(r);
  return c ? (a.push.apply(a, Array.from(c.querySelectorAll("[aria-live]"))), Ty(a, c, l, "aria-hidden")) : function() {
    return null;
  };
}, $t = function() {
  return $t = Object.assign || function(i) {
    for (var l, a = 1, c = arguments.length; a < c; a++) {
      l = arguments[a];
      for (var f in l) Object.prototype.hasOwnProperty.call(l, f) && (i[f] = l[f]);
    }
    return i;
  }, $t.apply(this, arguments);
};
function cp(r, i) {
  var l = {};
  for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && i.indexOf(a) < 0 && (l[a] = r[a]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, a = Object.getOwnPropertySymbols(r); c < a.length; c++)
      i.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, a[c]) && (l[a[c]] = r[a[c]]);
  return l;
}
function zy(r, i, l) {
  if (l || arguments.length === 2) for (var a = 0, c = i.length, f; a < c; a++)
    (f || !(a in i)) && (f || (f = Array.prototype.slice.call(i, 0, a)), f[a] = i[a]);
  return r.concat(f || Array.prototype.slice.call(i));
}
var dl = "right-scroll-bar-position", pl = "width-before-scroll-bar", My = "with-scroll-bars-hidden", jy = "--removed-body-scroll-bar-size";
function Sa(r, i) {
  return typeof r == "function" ? r(i) : r && (r.current = i), r;
}
function Dy(r, i) {
  var l = k.useState(function() {
    return {
      // value
      value: r,
      // last callback
      callback: i,
      // "memoized" public interface
      facade: {
        get current() {
          return l.value;
        },
        set current(a) {
          var c = l.value;
          c !== a && (l.value = a, l.callback(a, c));
        }
      }
    };
  })[0];
  return l.callback = i, l.facade;
}
var Iy = typeof window < "u" ? k.useLayoutEffect : k.useEffect, pd = /* @__PURE__ */ new WeakMap();
function Fy(r, i) {
  var l = Dy(null, function(a) {
    return r.forEach(function(c) {
      return Sa(c, a);
    });
  });
  return Iy(function() {
    var a = pd.get(l);
    if (a) {
      var c = new Set(a), f = new Set(r), d = l.current;
      c.forEach(function(p) {
        f.has(p) || Sa(p, null);
      }), f.forEach(function(p) {
        c.has(p) || Sa(p, d);
      });
    }
    pd.set(l, r);
  }, [r]), l;
}
function By(r) {
  return r;
}
function Wy(r, i) {
  i === void 0 && (i = By);
  var l = [], a = !1, c = {
    read: function() {
      if (a)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return l.length ? l[l.length - 1] : r;
    },
    useMedium: function(f) {
      var d = i(f, a);
      return l.push(d), function() {
        l = l.filter(function(p) {
          return p !== d;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (a = !0; l.length; ) {
        var d = l;
        l = [], d.forEach(f);
      }
      l = {
        push: function(p) {
          return f(p);
        },
        filter: function() {
          return l;
        }
      };
    },
    assignMedium: function(f) {
      a = !0;
      var d = [];
      if (l.length) {
        var p = l;
        l = [], p.forEach(f), d = l;
      }
      var h = function() {
        var x = d;
        d = [], x.forEach(f);
      }, g = function() {
        return Promise.resolve().then(h);
      };
      g(), l = {
        push: function(x) {
          d.push(x), g();
        },
        filter: function(x) {
          return d = d.filter(x), l;
        }
      };
    }
  };
  return c;
}
function $y(r) {
  r === void 0 && (r = {});
  var i = Wy(null);
  return i.options = $t({ async: !0, ssr: !1 }, r), i;
}
var fp = function(r) {
  var i = r.sideCar, l = cp(r, ["sideCar"]);
  if (!i)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var a = i.read();
  if (!a)
    throw new Error("Sidecar medium not found");
  return k.createElement(a, $t({}, l));
};
fp.isSideCarExport = !0;
function Vy(r, i) {
  return r.useMedium(i), fp;
}
var dp = $y(), ka = function() {
}, kl = k.forwardRef(function(r, i) {
  var l = k.useRef(null), a = k.useState({
    onScrollCapture: ka,
    onWheelCapture: ka,
    onTouchMoveCapture: ka
  }), c = a[0], f = a[1], d = r.forwardProps, p = r.children, h = r.className, g = r.removeScrollBar, x = r.enabled, v = r.shards, S = r.sideCar, _ = r.noIsolation, P = r.inert, w = r.allowPinchZoom, C = r.as, N = C === void 0 ? "div" : C, T = r.gapMode, z = cp(r, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), D = S, B = Fy([l, i]), Q = $t($t({}, z), c);
  return k.createElement(
    k.Fragment,
    null,
    x && k.createElement(D, { sideCar: dp, removeScrollBar: g, shards: v, noIsolation: _, inert: P, setCallbacks: f, allowPinchZoom: !!w, lockRef: l, gapMode: T }),
    d ? k.cloneElement(k.Children.only(p), $t($t({}, Q), { ref: B })) : k.createElement(N, $t({}, Q, { className: h, ref: B }), p)
  );
});
kl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
kl.classNames = {
  fullWidth: pl,
  zeroRight: dl
};
var Uy = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Hy() {
  if (!document)
    return null;
  var r = document.createElement("style");
  r.type = "text/css";
  var i = Uy();
  return i && r.setAttribute("nonce", i), r;
}
function Qy(r, i) {
  r.styleSheet ? r.styleSheet.cssText = i : r.appendChild(document.createTextNode(i));
}
function Ky(r) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(r);
}
var Gy = function() {
  var r = 0, i = null;
  return {
    add: function(l) {
      r == 0 && (i = Hy()) && (Qy(i, l), Ky(i)), r++;
    },
    remove: function() {
      r--, !r && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
    }
  };
}, Yy = function() {
  var r = Gy();
  return function(i, l) {
    k.useEffect(function() {
      return r.add(i), function() {
        r.remove();
      };
    }, [i && l]);
  };
}, pp = function() {
  var r = Yy(), i = function(l) {
    var a = l.styles, c = l.dynamic;
    return r(a, c), null;
  };
  return i;
}, Xy = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ea = function(r) {
  return parseInt(r || "", 10) || 0;
}, Zy = function(r) {
  var i = window.getComputedStyle(document.body), l = i[r === "padding" ? "paddingLeft" : "marginLeft"], a = i[r === "padding" ? "paddingTop" : "marginTop"], c = i[r === "padding" ? "paddingRight" : "marginRight"];
  return [Ea(l), Ea(a), Ea(c)];
}, Jy = function(r) {
  if (r === void 0 && (r = "margin"), typeof window > "u")
    return Xy;
  var i = Zy(r), l = document.documentElement.clientWidth, a = window.innerWidth;
  return {
    left: i[0],
    top: i[1],
    right: i[2],
    gap: Math.max(0, a - l + i[2] - i[0])
  };
}, qy = pp(), Lr = "data-scroll-locked", e0 = function(r, i, l, a) {
  var c = r.left, f = r.top, d = r.right, p = r.gap;
  return l === void 0 && (l = "margin"), `
  .`.concat(My, ` {
   overflow: hidden `).concat(a, `;
   padding-right: `).concat(p, "px ").concat(a, `;
  }
  body[`).concat(Lr, `] {
    overflow: hidden `).concat(a, `;
    overscroll-behavior: contain;
    `).concat([
    i && "position: relative ".concat(a, ";"),
    l === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p, "px ").concat(a, `;
    `),
    l === "padding" && "padding-right: ".concat(p, "px ").concat(a, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(dl, ` {
    right: `).concat(p, "px ").concat(a, `;
  }
  
  .`).concat(pl, ` {
    margin-right: `).concat(p, "px ").concat(a, `;
  }
  
  .`).concat(dl, " .").concat(dl, ` {
    right: 0 `).concat(a, `;
  }
  
  .`).concat(pl, " .").concat(pl, ` {
    margin-right: 0 `).concat(a, `;
  }
  
  body[`).concat(Lr, `] {
    `).concat(jy, ": ").concat(p, `px;
  }
`);
}, md = function() {
  var r = parseInt(document.body.getAttribute(Lr) || "0", 10);
  return isFinite(r) ? r : 0;
}, t0 = function() {
  k.useEffect(function() {
    return document.body.setAttribute(Lr, (md() + 1).toString()), function() {
      var r = md() - 1;
      r <= 0 ? document.body.removeAttribute(Lr) : document.body.setAttribute(Lr, r.toString());
    };
  }, []);
}, n0 = function(r) {
  var i = r.noRelative, l = r.noImportant, a = r.gapMode, c = a === void 0 ? "margin" : a;
  t0();
  var f = k.useMemo(function() {
    return Jy(c);
  }, [c]);
  return k.createElement(qy, { styles: e0(f, !i, c, l ? "" : "!important") });
}, Ta = !1;
if (typeof window < "u")
  try {
    var al = Object.defineProperty({}, "passive", {
      get: function() {
        return Ta = !0, !0;
      }
    });
    window.addEventListener("test", al, al), window.removeEventListener("test", al, al);
  } catch {
    Ta = !1;
  }
var _r = Ta ? { passive: !1 } : !1, r0 = function(r) {
  return r.tagName === "TEXTAREA";
}, mp = function(r, i) {
  if (!(r instanceof Element))
    return !1;
  var l = window.getComputedStyle(r);
  return (
    // not-not-scrollable
    l[i] !== "hidden" && // contains scroll inside self
    !(l.overflowY === l.overflowX && !r0(r) && l[i] === "visible")
  );
}, o0 = function(r) {
  return mp(r, "overflowY");
}, i0 = function(r) {
  return mp(r, "overflowX");
}, hd = function(r, i) {
  var l = i.ownerDocument, a = i;
  do {
    typeof ShadowRoot < "u" && a instanceof ShadowRoot && (a = a.host);
    var c = hp(r, a);
    if (c) {
      var f = gp(r, a), d = f[1], p = f[2];
      if (d > p)
        return !0;
    }
    a = a.parentNode;
  } while (a && a !== l.body);
  return !1;
}, l0 = function(r) {
  var i = r.scrollTop, l = r.scrollHeight, a = r.clientHeight;
  return [
    i,
    l,
    a
  ];
}, s0 = function(r) {
  var i = r.scrollLeft, l = r.scrollWidth, a = r.clientWidth;
  return [
    i,
    l,
    a
  ];
}, hp = function(r, i) {
  return r === "v" ? o0(i) : i0(i);
}, gp = function(r, i) {
  return r === "v" ? l0(i) : s0(i);
}, a0 = function(r, i) {
  return r === "h" && i === "rtl" ? -1 : 1;
}, u0 = function(r, i, l, a, c) {
  var f = a0(r, window.getComputedStyle(i).direction), d = f * a, p = l.target, h = i.contains(p), g = !1, x = d > 0, v = 0, S = 0;
  do {
    var _ = gp(r, p), P = _[0], w = _[1], C = _[2], N = w - C - f * P;
    (P || N) && hp(r, p) && (v += N, S += P), p instanceof ShadowRoot ? p = p.host : p = p.parentNode;
  } while (
    // portaled content
    !h && p !== document.body || // self content
    h && (i.contains(p) || i === p)
  );
  return (x && (Math.abs(v) < 1 || !c) || !x && (Math.abs(S) < 1 || !c)) && (g = !0), g;
}, ul = function(r) {
  return "changedTouches" in r ? [r.changedTouches[0].clientX, r.changedTouches[0].clientY] : [0, 0];
}, gd = function(r) {
  return [r.deltaX, r.deltaY];
}, vd = function(r) {
  return r && "current" in r ? r.current : r;
}, c0 = function(r, i) {
  return r[0] === i[0] && r[1] === i[1];
}, f0 = function(r) {
  return `
  .block-interactivity-`.concat(r, ` {pointer-events: none;}
  .allow-interactivity-`).concat(r, ` {pointer-events: all;}
`);
}, d0 = 0, Or = [];
function p0(r) {
  var i = k.useRef([]), l = k.useRef([0, 0]), a = k.useRef(), c = k.useState(d0++)[0], f = k.useState(pp)[0], d = k.useRef(r);
  k.useEffect(function() {
    d.current = r;
  }, [r]), k.useEffect(function() {
    if (r.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var w = zy([r.lockRef.current], (r.shards || []).map(vd), !0).filter(Boolean);
      return w.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), w.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [r.inert, r.lockRef.current, r.shards]);
  var p = k.useCallback(function(w, C) {
    if ("touches" in w && w.touches.length === 2 || w.type === "wheel" && w.ctrlKey)
      return !d.current.allowPinchZoom;
    var N = ul(w), T = l.current, z = "deltaX" in w ? w.deltaX : T[0] - N[0], D = "deltaY" in w ? w.deltaY : T[1] - N[1], B, Q = w.target, $ = Math.abs(z) > Math.abs(D) ? "h" : "v";
    if ("touches" in w && $ === "h" && Q.type === "range")
      return !1;
    var G = hd($, Q);
    if (!G)
      return !0;
    if (G ? B = $ : (B = $ === "v" ? "h" : "v", G = hd($, Q)), !G)
      return !1;
    if (!a.current && "changedTouches" in w && (z || D) && (a.current = B), !B)
      return !0;
    var q = a.current || B;
    return u0(q, C, w, q === "h" ? z : D, !0);
  }, []), h = k.useCallback(function(w) {
    var C = w;
    if (!(!Or.length || Or[Or.length - 1] !== f)) {
      var N = "deltaY" in C ? gd(C) : ul(C), T = i.current.filter(function(B) {
        return B.name === C.type && (B.target === C.target || C.target === B.shadowParent) && c0(B.delta, N);
      })[0];
      if (T && T.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!T) {
        var z = (d.current.shards || []).map(vd).filter(Boolean).filter(function(B) {
          return B.contains(C.target);
        }), D = z.length > 0 ? p(C, z[0]) : !d.current.noIsolation;
        D && C.cancelable && C.preventDefault();
      }
    }
  }, []), g = k.useCallback(function(w, C, N, T) {
    var z = { name: w, delta: C, target: N, should: T, shadowParent: m0(N) };
    i.current.push(z), setTimeout(function() {
      i.current = i.current.filter(function(D) {
        return D !== z;
      });
    }, 1);
  }, []), x = k.useCallback(function(w) {
    l.current = ul(w), a.current = void 0;
  }, []), v = k.useCallback(function(w) {
    g(w.type, gd(w), w.target, p(w, r.lockRef.current));
  }, []), S = k.useCallback(function(w) {
    g(w.type, ul(w), w.target, p(w, r.lockRef.current));
  }, []);
  k.useEffect(function() {
    return Or.push(f), r.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: S
    }), document.addEventListener("wheel", h, _r), document.addEventListener("touchmove", h, _r), document.addEventListener("touchstart", x, _r), function() {
      Or = Or.filter(function(w) {
        return w !== f;
      }), document.removeEventListener("wheel", h, _r), document.removeEventListener("touchmove", h, _r), document.removeEventListener("touchstart", x, _r);
    };
  }, []);
  var _ = r.removeScrollBar, P = r.inert;
  return k.createElement(
    k.Fragment,
    null,
    P ? k.createElement(f, { styles: f0(c) }) : null,
    _ ? k.createElement(n0, { gapMode: r.gapMode }) : null
  );
}
function m0(r) {
  for (var i = null; r !== null; )
    r instanceof ShadowRoot && (i = r.host, r = r.host), r = r.parentNode;
  return i;
}
const h0 = Vy(dp, p0);
var vp = k.forwardRef(function(r, i) {
  return k.createElement(kl, $t({}, r, { ref: i, sideCar: h0 }));
});
vp.classNames = kl.classNames;
var Xa = "Popover", [yp, Pw] = zd(Xa, [
  Zd
]), Uo = Zd(), [g0, jn] = yp(Xa), wp = (r) => {
  const {
    __scopePopover: i,
    children: l,
    open: a,
    defaultOpen: c,
    onOpenChange: f,
    modal: d = !1
  } = r, p = Uo(i), h = k.useRef(null), [g, x] = k.useState(!1), [v = !1, S] = Ry({
    prop: a,
    defaultProp: c,
    onChange: f
  });
  return /* @__PURE__ */ j.jsx(vy, { ...p, children: /* @__PURE__ */ j.jsx(
    g0,
    {
      scope: i,
      contentId: cv(),
      triggerRef: h,
      open: v,
      onOpenChange: S,
      onOpenToggle: k.useCallback(() => S((_) => !_), [S]),
      hasCustomAnchor: g,
      onCustomAnchorAdd: k.useCallback(() => x(!0), []),
      onCustomAnchorRemove: k.useCallback(() => x(!1), []),
      modal: d,
      children: l
    }
  ) });
};
wp.displayName = Xa;
var xp = "PopoverAnchor", v0 = k.forwardRef(
  (r, i) => {
    const { __scopePopover: l, ...a } = r, c = jn(xp, l), f = Uo(l), { onCustomAnchorAdd: d, onCustomAnchorRemove: p } = c;
    return k.useEffect(() => (d(), () => p()), [d, p]), /* @__PURE__ */ j.jsx(lp, { ...f, ...a, ref: i });
  }
);
v0.displayName = xp;
var Sp = "PopoverTrigger", kp = k.forwardRef(
  (r, i) => {
    const { __scopePopover: l, ...a } = r, c = jn(Sp, l), f = Uo(l), d = Mn(i, c.triggerRef), p = /* @__PURE__ */ j.jsx(
      Ht.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": c.open,
        "aria-controls": c.contentId,
        "data-state": bp(c.open),
        ...a,
        ref: d,
        onClick: On(r.onClick, c.onOpenToggle)
      }
    );
    return c.hasCustomAnchor ? p : /* @__PURE__ */ j.jsx(lp, { asChild: !0, ...f, children: p });
  }
);
kp.displayName = Sp;
var Za = "PopoverPortal", [y0, w0] = yp(Za, {
  forceMount: void 0
}), Ep = (r) => {
  const { __scopePopover: i, forceMount: l, children: a, container: c } = r, f = jn(Za, i);
  return /* @__PURE__ */ j.jsx(y0, { scope: i, forceMount: l, children: /* @__PURE__ */ j.jsx(Ya, { present: l || f.open, children: /* @__PURE__ */ j.jsx(sp, { asChild: !0, container: c, children: a }) }) });
};
Ep.displayName = Za;
var Mr = "PopoverContent", Cp = k.forwardRef(
  (r, i) => {
    const l = w0(Mr, r.__scopePopover), { forceMount: a = l.forceMount, ...c } = r, f = jn(Mr, r.__scopePopover);
    return /* @__PURE__ */ j.jsx(Ya, { present: a || f.open, children: f.modal ? /* @__PURE__ */ j.jsx(x0, { ...c, ref: i }) : /* @__PURE__ */ j.jsx(S0, { ...c, ref: i }) });
  }
);
Cp.displayName = Mr;
var x0 = k.forwardRef(
  (r, i) => {
    const l = jn(Mr, r.__scopePopover), a = k.useRef(null), c = Mn(i, a), f = k.useRef(!1);
    return k.useEffect(() => {
      const d = a.current;
      if (d) return Ly(d);
    }, []), /* @__PURE__ */ j.jsx(vp, { as: ap, allowPinchZoom: !0, children: /* @__PURE__ */ j.jsx(
      Pp,
      {
        ...r,
        ref: c,
        trapFocus: l.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: On(r.onCloseAutoFocus, (d) => {
          d.preventDefault(), f.current || l.triggerRef.current?.focus();
        }),
        onPointerDownOutside: On(
          r.onPointerDownOutside,
          (d) => {
            const p = d.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, g = p.button === 2 || h;
            f.current = g;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: On(
          r.onFocusOutside,
          (d) => d.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), S0 = k.forwardRef(
  (r, i) => {
    const l = jn(Mr, r.__scopePopover), a = k.useRef(!1), c = k.useRef(!1);
    return /* @__PURE__ */ j.jsx(
      Pp,
      {
        ...r,
        ref: i,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (f) => {
          r.onCloseAutoFocus?.(f), f.defaultPrevented || (a.current || l.triggerRef.current?.focus(), f.preventDefault()), a.current = !1, c.current = !1;
        },
        onInteractOutside: (f) => {
          r.onInteractOutside?.(f), f.defaultPrevented || (a.current = !0, f.detail.originalEvent.type === "pointerdown" && (c.current = !0));
          const d = f.target;
          l.triggerRef.current?.contains(d) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && c.current && f.preventDefault();
        }
      }
    );
  }
), Pp = k.forwardRef(
  (r, i) => {
    const {
      __scopePopover: l,
      trapFocus: a,
      onOpenAutoFocus: c,
      onCloseAutoFocus: f,
      disableOutsidePointerEvents: d,
      onEscapeKeyDown: p,
      onPointerDownOutside: h,
      onFocusOutside: g,
      onInteractOutside: x,
      ...v
    } = r, S = jn(Mr, l), _ = Uo(l);
    return ev(), /* @__PURE__ */ j.jsx(
      Id,
      {
        asChild: !0,
        loop: !0,
        trapped: a,
        onMountAutoFocus: c,
        onUnmountAutoFocus: f,
        children: /* @__PURE__ */ j.jsx(
          jd,
          {
            asChild: !0,
            disableOutsidePointerEvents: d,
            onInteractOutside: x,
            onEscapeKeyDown: p,
            onPointerDownOutside: h,
            onFocusOutside: g,
            onDismiss: () => S.onOpenChange(!1),
            children: /* @__PURE__ */ j.jsx(
              yy,
              {
                "data-state": bp(S.open),
                role: "dialog",
                id: S.contentId,
                ..._,
                ...v,
                ref: i,
                style: {
                  ...v.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Np = "PopoverClose", k0 = k.forwardRef(
  (r, i) => {
    const { __scopePopover: l, ...a } = r, c = jn(Np, l);
    return /* @__PURE__ */ j.jsx(
      Ht.button,
      {
        type: "button",
        ...a,
        ref: i,
        onClick: On(r.onClick, () => c.onOpenChange(!1))
      }
    );
  }
);
k0.displayName = Np;
var E0 = "PopoverArrow", C0 = k.forwardRef(
  (r, i) => {
    const { __scopePopover: l, ...a } = r, c = Uo(l);
    return /* @__PURE__ */ j.jsx(wy, { ...c, ...a, ref: i });
  }
);
C0.displayName = E0;
function bp(r) {
  return r ? "open" : "closed";
}
var P0 = wp, N0 = kp, b0 = Ep, Rp = Cp;
const R0 = P0, _0 = N0, _p = k.forwardRef(({ className: r, align: i = "center", sideOffset: l = 4, ...a }, c) => /* @__PURE__ */ j.jsx(b0, { children: /* @__PURE__ */ j.jsx(
  Rp,
  {
    ref: c,
    align: i,
    sideOffset: l,
    className: tt(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r
    ),
    ...a
  }
) }));
_p.displayName = Rp.displayName;
const yd = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.widget{--background: 0 0% 100%;--foreground: 222.2 84% 4.9%;--card: 0 0% 100%;--card-foreground: 222.2 84% 4.9%;--popover: 0 0% 100%;--popover-foreground: 222.2 84% 4.9%;--primary: 222.2 47.4% 11.2%;--primary-foreground: 210 40% 98%;--secondary: 210 40% 96.1%;--secondary-foreground: 222.2 47.4% 11.2%;--muted: 210 40% 96.1%;--muted-foreground: 215.4 16.3% 46.9%;--accent: 210 40% 96.1%;--accent-foreground: 222.2 47.4% 11.2%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 210 40% 98%;--border: 214.3 31.8% 91.4%;--input: 214.3 31.8% 91.4%;--ring: 222.2 84% 4.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem }*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-bottom-12{bottom:-3rem}.-left-12{left:-3rem}.-right-12{right:-3rem}.-top-12{top:-3rem}.bottom-4{bottom:1rem}.left-1\\/2{left:50%}.right-4{right:1rem}.top-1\\/2{top:50%}.z-50{z-index:50}.-ml-4{margin-left:-1rem}.-mt-4{margin-top:-1rem}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mt-4{margin-top:1rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-8{height:2rem}.h-9{height:2.25rem}.min-h-\\[100px\\]{min-height:100px}.min-h-\\[80px\\]{min-height:80px}.w-10{width:2.5rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-72{width:18rem}.w-8{width:2rem}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.shrink-0{flex-shrink:0}.grow-0{flex-grow:0}.basis-full{flex-basis:100%}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.border{border-width:1px}.border-input{border-color:hsl(var(--input))}.bg-background{background-color:hsl(var(--background))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.fill-muted{fill:hsl(var(--muted))}.fill-primary{fill:hsl(var(--primary))}.stroke-muted-foreground{stroke:hsl(var(--muted-foreground))}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.pl-4{padding-left:1rem}.pt-0{padding-top:0}.pt-4{padding-top:1rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.text-card-foreground{color:hsl(var(--card-foreground))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.file\\:text-foreground::file-selector-button{color:hsl(var(--foreground))}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:scale-105:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}@media (min-width: 768px){.md\\:text-sm{font-size:.875rem;line-height:1.25rem}}.\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\&_svg\\]\\:size-4 svg{width:1rem;height:1rem}.\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}', O0 = (r) => /* @__PURE__ */ j.jsx(
  "svg",
  {
    ...r,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ j.jsx("path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" })
  }
), A0 = (r) => /* @__PURE__ */ j.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...r,
    children: /* @__PURE__ */ j.jsx("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" })
  }
), T0 = ({ projectId: r }) => {
  const [i, l] = k.useState(3), [a, c] = k.useState(!1), f = (p) => {
    l(p + 1);
  }, d = async (p) => {
    p.preventDefault();
    const h = "http://localhost:3000", g = p.target, x = {
      userName: g.name.value,
      userEmail: g.email.value,
      message: g.feedback.value,
      rating: i,
      projectId: r
    };
    try {
      const v = await fetch(`${h}/api/add-feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(x)
      }), S = await v.json();
      v.ok ? (console.log("Feedback added with ID:", S.feedbackId), c(!0)) : console.error("Error adding feedback:", S.error);
    } catch (v) {
      console.error("Error:", v);
    }
  };
  return /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsx("style", { children: yd }),
    /* @__PURE__ */ j.jsx("div", { className: "widget fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ j.jsxs(R0, { children: [
      /* @__PURE__ */ j.jsx(_0, { asChild: !0, children: /* @__PURE__ */ j.jsxs(Do, { className: "rounded-full shadow-lg hover:scale-105", children: [
        /* @__PURE__ */ j.jsx(A0, { className: "mr-1 h-5 w-5" }),
        "Feedback"
      ] }) }),
      /* @__PURE__ */ j.jsxs(
        _p,
        {
          sideOffset: 4,
          align: "end",
          className: "widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md",
          children: [
            /* @__PURE__ */ j.jsx("style", { children: yd }),
            /* @__PURE__ */ j.jsx("div", { children: a ? /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
              /* @__PURE__ */ j.jsx("h3", { className: "text-lg font-semibold", children: "Thanks for your feedback!" }),
              /* @__PURE__ */ j.jsx("p", { className: "mt-4", children: "We appreciate your feedback. It helps us improve our product and provide better service to our users." })
            ] }) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
              /* @__PURE__ */ j.jsx("h3", { className: "text-lg font-semibold", children: "Feedback" }),
              /* @__PURE__ */ j.jsxs("form", { className: "space-y-2", onSubmit: d, children: [
                /* @__PURE__ */ j.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ j.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ j.jsx(cl, { htmlFor: "name", children: "Name" }),
                    /* @__PURE__ */ j.jsx(
                      Na,
                      {
                        type: "text",
                        id: "name",
                        placeholder: "Enter your name"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ j.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ j.jsx(cl, { htmlFor: "email", children: "Email" }),
                    /* @__PURE__ */ j.jsx(
                      Na,
                      {
                        type: "email",
                        id: "email",
                        placeholder: "Enter your email"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ j.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ j.jsx(cl, { htmlFor: "feedback", children: "Feedback" }),
                  /* @__PURE__ */ j.jsx(
                    Ld,
                    {
                      id: "feedback",
                      name: "feedback",
                      placeholder: "Tell us about your experience",
                      className: "min-h-[100px]"
                    }
                  )
                ] }),
                /* @__PURE__ */ j.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ j.jsx("div", { className: "flex gap-2", children: [...Array(5)].map((p, h) => /* @__PURE__ */ j.jsx(
                    O0,
                    {
                      className: `h-5 w-5 cursor-pointer ${i > h ? "fill-primary" : "fill-muted stroke-muted-foreground"} `,
                      onClick: () => f(h)
                    },
                    h
                  )) }),
                  /* @__PURE__ */ j.jsx(Do, { type: "submit", children: "Submit" })
                ] })
              ] })
            ] }) })
          ]
        }
      )
    ] }) })
  ] });
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L0 = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Op = (...r) => r.filter((i, l, a) => !!i && i.trim() !== "" && a.indexOf(i) === l).join(" ").trim();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var z0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M0 = k.forwardRef(
  ({
    color: r = "currentColor",
    size: i = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: a,
    className: c = "",
    children: f,
    iconNode: d,
    ...p
  }, h) => k.createElement(
    "svg",
    {
      ref: h,
      ...z0,
      width: i,
      height: i,
      stroke: r,
      strokeWidth: a ? Number(l) * 24 / Number(i) : l,
      className: Op("lucide", c),
      ...p
    },
    [
      ...d.map(([g, x]) => k.createElement(g, x)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = (r, i) => {
  const l = k.forwardRef(
    ({ className: a, ...c }, f) => k.createElement(M0, {
      ref: f,
      iconNode: i,
      className: Op(`lucide-${L0(r)}`, a),
      ...c
    })
  );
  return l.displayName = `${r}`, l;
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j0 = Ja("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D0 = Ja("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = Ja("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
function F0(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function wd(r) {
  return F0(r) || Array.isArray(r);
}
function B0() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function qa(r, i) {
  const l = Object.keys(r), a = Object.keys(i);
  if (l.length !== a.length) return !1;
  const c = JSON.stringify(Object.keys(r.breakpoints || {})), f = JSON.stringify(Object.keys(i.breakpoints || {}));
  return c !== f ? !1 : l.every((d) => {
    const p = r[d], h = i[d];
    return typeof p == "function" ? `${p}` == `${h}` : !wd(p) || !wd(h) ? p === h : qa(p, h);
  });
}
function xd(r) {
  return r.concat().sort((i, l) => i.name > l.name ? 1 : -1).map((i) => i.options);
}
function W0(r, i) {
  if (r.length !== i.length) return !1;
  const l = xd(r), a = xd(i);
  return l.every((c, f) => {
    const d = a[f];
    return qa(c, d);
  });
}
function eu(r) {
  return typeof r == "number";
}
function La(r) {
  return typeof r == "string";
}
function El(r) {
  return typeof r == "boolean";
}
function Sd(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function je(r) {
  return Math.abs(r);
}
function tu(r) {
  return Math.sign(r);
}
function jo(r, i) {
  return je(r - i);
}
function $0(r, i) {
  if (r === 0 || i === 0 || je(r) <= je(i)) return 0;
  const l = jo(je(r), je(i));
  return je(l / r);
}
function V0(r) {
  return Math.round(r * 100) / 100;
}
function Bo(r) {
  return Wo(r).map(Number);
}
function Lt(r) {
  return r[Ho(r)];
}
function Ho(r) {
  return Math.max(0, r.length - 1);
}
function nu(r, i) {
  return i === Ho(r);
}
function kd(r, i = 0) {
  return Array.from(Array(r), (l, a) => i + a);
}
function Wo(r) {
  return Object.keys(r);
}
function Ap(r, i) {
  return [r, i].reduce((l, a) => (Wo(a).forEach((c) => {
    const f = l[c], d = a[c], p = Sd(f) && Sd(d);
    l[c] = p ? Ap(f, d) : d;
  }), l), {});
}
function za(r, i) {
  return typeof i.MouseEvent < "u" && r instanceof i.MouseEvent;
}
function U0(r, i) {
  const l = {
    start: a,
    center: c,
    end: f
  };
  function a() {
    return 0;
  }
  function c(h) {
    return f(h) / 2;
  }
  function f(h) {
    return i - h;
  }
  function d(h, g) {
    return La(r) ? l[r](h) : r(i, h, g);
  }
  return {
    measure: d
  };
}
function $o() {
  let r = [];
  function i(c, f, d, p = {
    passive: !0
  }) {
    let h;
    if ("addEventListener" in c)
      c.addEventListener(f, d, p), h = () => c.removeEventListener(f, d, p);
    else {
      const g = c;
      g.addListener(d), h = () => g.removeListener(d);
    }
    return r.push(h), a;
  }
  function l() {
    r = r.filter((c) => c());
  }
  const a = {
    add: i,
    clear: l
  };
  return a;
}
function H0(r, i, l, a) {
  const c = $o(), f = 1e3 / 60;
  let d = null, p = 0, h = 0;
  function g() {
    c.add(r, "visibilitychange", () => {
      r.hidden && P();
    });
  }
  function x() {
    _(), c.clear();
  }
  function v(C) {
    if (!h) return;
    d || (d = C, l(), l());
    const N = C - d;
    for (d = C, p += N; p >= f; )
      l(), p -= f;
    const T = p / f;
    a(T), h && (h = i.requestAnimationFrame(v));
  }
  function S() {
    h || (h = i.requestAnimationFrame(v));
  }
  function _() {
    i.cancelAnimationFrame(h), d = null, p = 0, h = 0;
  }
  function P() {
    d = null, p = 0;
  }
  return {
    init: g,
    destroy: x,
    start: S,
    stop: _,
    update: l,
    render: a
  };
}
function Q0(r, i) {
  const l = i === "rtl", a = r === "y", c = a ? "y" : "x", f = a ? "x" : "y", d = !a && l ? -1 : 1, p = x(), h = v();
  function g(P) {
    const {
      height: w,
      width: C
    } = P;
    return a ? w : C;
  }
  function x() {
    return a ? "top" : l ? "right" : "left";
  }
  function v() {
    return a ? "bottom" : l ? "left" : "right";
  }
  function S(P) {
    return P * d;
  }
  return {
    scroll: c,
    cross: f,
    startEdge: p,
    endEdge: h,
    measureSize: g,
    direction: S
  };
}
function er(r = 0, i = 0) {
  const l = je(r - i);
  function a(g) {
    return g < r;
  }
  function c(g) {
    return g > i;
  }
  function f(g) {
    return a(g) || c(g);
  }
  function d(g) {
    return f(g) ? a(g) ? r : i : g;
  }
  function p(g) {
    return l ? g - l * Math.ceil((g - i) / l) : g;
  }
  return {
    length: l,
    max: i,
    min: r,
    constrain: d,
    reachedAny: f,
    reachedMax: c,
    reachedMin: a,
    removeOffset: p
  };
}
function Tp(r, i, l) {
  const {
    constrain: a
  } = er(0, r), c = r + 1;
  let f = d(i);
  function d(S) {
    return l ? je((c + S) % c) : a(S);
  }
  function p() {
    return f;
  }
  function h(S) {
    return f = d(S), v;
  }
  function g(S) {
    return x().set(p() + S);
  }
  function x() {
    return Tp(r, p(), l);
  }
  const v = {
    get: p,
    set: h,
    add: g,
    clone: x
  };
  return v;
}
function K0(r, i, l, a, c, f, d, p, h, g, x, v, S, _, P, w, C, N, T) {
  const {
    cross: z,
    direction: D
  } = r, B = ["INPUT", "SELECT", "TEXTAREA"], Q = {
    passive: !1
  }, $ = $o(), G = $o(), q = er(50, 225).constrain(_.measure(20)), re = {
    mouse: 300,
    touch: 400
  }, oe = {
    mouse: 500,
    touch: 600
  }, X = P ? 43 : 25;
  let de = !1, ae = 0, xe = 0, pe = !1, ie = !1, M = !1, K = !1;
  function H(te) {
    if (!T) return;
    function ke(Ve) {
      (El(T) || T(te, Ve)) && ye(Ve);
    }
    const Te = i;
    $.add(Te, "dragstart", (Ve) => Ve.preventDefault(), Q).add(Te, "touchmove", () => {
    }, Q).add(Te, "touchend", () => {
    }).add(Te, "touchstart", ke).add(Te, "mousedown", ke).add(Te, "touchcancel", fe).add(Te, "contextmenu", fe).add(Te, "click", Se, !0);
  }
  function b() {
    $.clear(), G.clear();
  }
  function I() {
    const te = K ? l : i;
    G.add(te, "touchmove", he, Q).add(te, "touchend", fe).add(te, "mousemove", he, Q).add(te, "mouseup", fe);
  }
  function ce(te) {
    const ke = te.nodeName || "";
    return B.includes(ke);
  }
  function ue() {
    return (P ? oe : re)[K ? "mouse" : "touch"];
  }
  function ve(te, ke) {
    const Te = v.add(tu(te) * -1), Ve = x.byDistance(te, !P).distance;
    return P || je(te) < q ? Ve : C && ke ? Ve * 0.5 : x.byIndex(Te.get(), 0).distance;
  }
  function ye(te) {
    const ke = za(te, a);
    K = ke, M = P && ke && !te.buttons && de, de = jo(c.get(), d.get()) >= 2, !(ke && te.button !== 0) && (ce(te.target) || (pe = !0, f.pointerDown(te), g.useFriction(0).useDuration(0), c.set(d), I(), ae = f.readPoint(te), xe = f.readPoint(te, z), S.emit("pointerDown")));
  }
  function he(te) {
    if (!za(te, a) && te.touches.length >= 2) return fe(te);
    const Te = f.readPoint(te), Ve = f.readPoint(te, z), at = jo(Te, ae), ut = jo(Ve, xe);
    if (!ie && !K && (!te.cancelable || (ie = at > ut, !ie)))
      return fe(te);
    const jt = f.pointerMove(te);
    at > w && (M = !0), g.useFriction(0.3).useDuration(0.75), p.start(), c.add(D(jt)), te.preventDefault();
  }
  function fe(te) {
    const Te = x.byDistance(0, !1).index !== v.get(), Ve = f.pointerUp(te) * ue(), at = ve(D(Ve), Te), ut = $0(Ve, at), jt = X - 10 * ut, vt = N + ut / 50;
    ie = !1, pe = !1, G.clear(), g.useDuration(jt).useFriction(vt), h.distance(at, !P), K = !1, S.emit("pointerUp");
  }
  function Se(te) {
    M && (te.stopPropagation(), te.preventDefault(), M = !1);
  }
  function be() {
    return pe;
  }
  return {
    init: H,
    destroy: b,
    pointerDown: be
  };
}
function G0(r, i) {
  let a, c;
  function f(v) {
    return v.timeStamp;
  }
  function d(v, S) {
    const P = `client${(S || r.scroll) === "x" ? "X" : "Y"}`;
    return (za(v, i) ? v : v.touches[0])[P];
  }
  function p(v) {
    return a = v, c = v, d(v);
  }
  function h(v) {
    const S = d(v) - d(c), _ = f(v) - f(a) > 170;
    return c = v, _ && (a = v), S;
  }
  function g(v) {
    if (!a || !c) return 0;
    const S = d(c) - d(a), _ = f(v) - f(a), P = f(v) - f(c) > 170, w = S / _;
    return _ && !P && je(w) > 0.1 ? w : 0;
  }
  return {
    pointerDown: p,
    pointerMove: h,
    pointerUp: g,
    readPoint: d
  };
}
function Y0() {
  function r(l) {
    const {
      offsetTop: a,
      offsetLeft: c,
      offsetWidth: f,
      offsetHeight: d
    } = l;
    return {
      top: a,
      right: c + f,
      bottom: a + d,
      left: c,
      width: f,
      height: d
    };
  }
  return {
    measure: r
  };
}
function X0(r) {
  function i(a) {
    return r * (a / 100);
  }
  return {
    measure: i
  };
}
function Z0(r, i, l, a, c, f, d) {
  const p = [r].concat(a);
  let h, g, x = [], v = !1;
  function S(C) {
    return c.measureSize(d.measure(C));
  }
  function _(C) {
    if (!f) return;
    g = S(r), x = a.map(S);
    function N(T) {
      for (const z of T) {
        if (v) return;
        const D = z.target === r, B = a.indexOf(z.target), Q = D ? g : x[B], $ = S(D ? r : a[B]);
        if (je($ - Q) >= 0.5) {
          C.reInit(), i.emit("resize");
          break;
        }
      }
    }
    h = new ResizeObserver((T) => {
      (El(f) || f(C, T)) && N(T);
    }), l.requestAnimationFrame(() => {
      p.forEach((T) => h.observe(T));
    });
  }
  function P() {
    v = !0, h && h.disconnect();
  }
  return {
    init: _,
    destroy: P
  };
}
function J0(r, i, l, a, c, f) {
  let d = 0, p = 0, h = c, g = f, x = r.get(), v = 0;
  function S() {
    const Q = a.get() - r.get(), $ = !h;
    let G = 0;
    return $ ? (d = 0, l.set(a), r.set(a), G = Q) : (l.set(r), d += Q / h, d *= g, x += d, r.add(d), G = x - v), p = tu(G), v = x, B;
  }
  function _() {
    const Q = a.get() - i.get();
    return je(Q) < 1e-3;
  }
  function P() {
    return h;
  }
  function w() {
    return p;
  }
  function C() {
    return d;
  }
  function N() {
    return z(c);
  }
  function T() {
    return D(f);
  }
  function z(Q) {
    return h = Q, B;
  }
  function D(Q) {
    return g = Q, B;
  }
  const B = {
    direction: w,
    duration: P,
    velocity: C,
    seek: S,
    settled: _,
    useBaseFriction: T,
    useBaseDuration: N,
    useFriction: D,
    useDuration: z
  };
  return B;
}
function q0(r, i, l, a, c) {
  const f = c.measure(10), d = c.measure(50), p = er(0.1, 0.99);
  let h = !1;
  function g() {
    return !(h || !r.reachedAny(l.get()) || !r.reachedAny(i.get()));
  }
  function x(_) {
    if (!g()) return;
    const P = r.reachedMin(i.get()) ? "min" : "max", w = je(r[P] - i.get()), C = l.get() - i.get(), N = p.constrain(w / d);
    l.subtract(C * N), !_ && je(C) < f && (l.set(r.constrain(l.get())), a.useDuration(25).useBaseFriction());
  }
  function v(_) {
    h = !_;
  }
  return {
    shouldConstrain: g,
    constrain: x,
    toggleActive: v
  };
}
function ew(r, i, l, a, c) {
  const f = er(-i + r, 0), d = v(), p = x(), h = S();
  function g(P, w) {
    return jo(P, w) <= 1;
  }
  function x() {
    const P = d[0], w = Lt(d), C = d.lastIndexOf(P), N = d.indexOf(w) + 1;
    return er(C, N);
  }
  function v() {
    return l.map((P, w) => {
      const {
        min: C,
        max: N
      } = f, T = f.constrain(P), z = !w, D = nu(l, w);
      return z ? N : D || g(C, T) ? C : g(N, T) ? N : T;
    }).map((P) => parseFloat(P.toFixed(3)));
  }
  function S() {
    if (i <= r + c) return [f.max];
    if (a === "keepSnaps") return d;
    const {
      min: P,
      max: w
    } = p;
    return d.slice(P, w);
  }
  return {
    snapsContained: h,
    scrollContainLimit: p
  };
}
function tw(r, i, l) {
  const a = i[0], c = l ? a - r : Lt(i);
  return {
    limit: er(c, a)
  };
}
function nw(r, i, l, a) {
  const f = i.min + 0.1, d = i.max + 0.1, {
    reachedMin: p,
    reachedMax: h
  } = er(f, d);
  function g(S) {
    return S === 1 ? h(l.get()) : S === -1 ? p(l.get()) : !1;
  }
  function x(S) {
    if (!g(S)) return;
    const _ = r * (S * -1);
    a.forEach((P) => P.add(_));
  }
  return {
    loop: x
  };
}
function rw(r) {
  const {
    max: i,
    length: l
  } = r;
  function a(f) {
    const d = f - i;
    return l ? d / -l : 0;
  }
  return {
    get: a
  };
}
function ow(r, i, l, a, c) {
  const {
    startEdge: f,
    endEdge: d
  } = r, {
    groupSlides: p
  } = c, h = v().map(i.measure), g = S(), x = _();
  function v() {
    return p(a).map((w) => Lt(w)[d] - w[0][f]).map(je);
  }
  function S() {
    return a.map((w) => l[f] - w[f]).map((w) => -je(w));
  }
  function _() {
    return p(g).map((w) => w[0]).map((w, C) => w + h[C]);
  }
  return {
    snaps: g,
    snapsAligned: x
  };
}
function iw(r, i, l, a, c, f) {
  const {
    groupSlides: d
  } = c, {
    min: p,
    max: h
  } = a, g = x();
  function x() {
    const S = d(f), _ = !r || i === "keepSnaps";
    return l.length === 1 ? [f] : _ ? S : S.slice(p, h).map((P, w, C) => {
      const N = !w, T = nu(C, w);
      if (N) {
        const z = Lt(C[0]) + 1;
        return kd(z);
      }
      if (T) {
        const z = Ho(f) - Lt(C)[0] + 1;
        return kd(z, Lt(C)[0]);
      }
      return P;
    });
  }
  return {
    slideRegistry: g
  };
}
function lw(r, i, l, a, c) {
  const {
    reachedAny: f,
    removeOffset: d,
    constrain: p
  } = a;
  function h(P) {
    return P.concat().sort((w, C) => je(w) - je(C))[0];
  }
  function g(P) {
    const w = r ? d(P) : p(P), C = i.map((T, z) => ({
      diff: x(T - w, 0),
      index: z
    })).sort((T, z) => je(T.diff) - je(z.diff)), {
      index: N
    } = C[0];
    return {
      index: N,
      distance: w
    };
  }
  function x(P, w) {
    const C = [P, P + l, P - l];
    if (!r) return P;
    if (!w) return h(C);
    const N = C.filter((T) => tu(T) === w);
    return N.length ? h(N) : Lt(C) - l;
  }
  function v(P, w) {
    const C = i[P] - c.get(), N = x(C, w);
    return {
      index: P,
      distance: N
    };
  }
  function S(P, w) {
    const C = c.get() + P, {
      index: N,
      distance: T
    } = g(C), z = !r && f(C);
    if (!w || z) return {
      index: N,
      distance: P
    };
    const D = i[N] - T, B = P + x(D, 0);
    return {
      index: N,
      distance: B
    };
  }
  return {
    byDistance: S,
    byIndex: v,
    shortcut: x
  };
}
function sw(r, i, l, a, c, f, d) {
  function p(v) {
    const S = v.distance, _ = v.index !== i.get();
    f.add(S), S && (a.duration() ? r.start() : (r.update(), r.render(1), r.update())), _ && (l.set(i.get()), i.set(v.index), d.emit("select"));
  }
  function h(v, S) {
    const _ = c.byDistance(v, S);
    p(_);
  }
  function g(v, S) {
    const _ = i.clone().set(v), P = c.byIndex(_.get(), S);
    p(P);
  }
  return {
    distance: h,
    index: g
  };
}
function aw(r, i, l, a, c, f, d, p) {
  const h = {
    passive: !0,
    capture: !0
  };
  let g = 0;
  function x(_) {
    if (!p) return;
    function P(w) {
      if ((/* @__PURE__ */ new Date()).getTime() - g > 10) return;
      d.emit("slideFocusStart"), r.scrollLeft = 0;
      const T = l.findIndex((z) => z.includes(w));
      eu(T) && (c.useDuration(0), a.index(T, 0), d.emit("slideFocus"));
    }
    f.add(document, "keydown", v, !1), i.forEach((w, C) => {
      f.add(w, "focus", (N) => {
        (El(p) || p(_, N)) && P(C);
      }, h);
    });
  }
  function v(_) {
    _.code === "Tab" && (g = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: x
  };
}
function Mo(r) {
  let i = r;
  function l() {
    return i;
  }
  function a(h) {
    i = d(h);
  }
  function c(h) {
    i += d(h);
  }
  function f(h) {
    i -= d(h);
  }
  function d(h) {
    return eu(h) ? h : h.get();
  }
  return {
    get: l,
    set: a,
    add: c,
    subtract: f
  };
}
function Lp(r, i) {
  const l = r.scroll === "x" ? d : p, a = i.style;
  let c = null, f = !1;
  function d(S) {
    return `translate3d(${S}px,0px,0px)`;
  }
  function p(S) {
    return `translate3d(0px,${S}px,0px)`;
  }
  function h(S) {
    if (f) return;
    const _ = V0(r.direction(S));
    _ !== c && (a.transform = l(_), c = _);
  }
  function g(S) {
    f = !S;
  }
  function x() {
    f || (a.transform = "", i.getAttribute("style") || i.removeAttribute("style"));
  }
  return {
    clear: x,
    to: h,
    toggleActive: g
  };
}
function uw(r, i, l, a, c, f, d, p, h) {
  const x = Bo(c), v = Bo(c).reverse(), S = N().concat(T());
  function _($, G) {
    return $.reduce((q, re) => q - c[re], G);
  }
  function P($, G) {
    return $.reduce((q, re) => _(q, G) > 0 ? q.concat([re]) : q, []);
  }
  function w($) {
    return f.map((G, q) => ({
      start: G - a[q] + 0.5 + $,
      end: G + i - 0.5 + $
    }));
  }
  function C($, G, q) {
    const re = w(G);
    return $.map((oe) => {
      const X = q ? 0 : -l, de = q ? l : 0, ae = q ? "end" : "start", xe = re[oe][ae];
      return {
        index: oe,
        loopPoint: xe,
        slideLocation: Mo(-1),
        translate: Lp(r, h[oe]),
        target: () => p.get() > xe ? X : de
      };
    });
  }
  function N() {
    const $ = d[0], G = P(v, $);
    return C(G, l, !1);
  }
  function T() {
    const $ = i - d[0] - 1, G = P(x, $);
    return C(G, -l, !0);
  }
  function z() {
    return S.every(({
      index: $
    }) => {
      const G = x.filter((q) => q !== $);
      return _(G, i) <= 0.1;
    });
  }
  function D() {
    S.forEach(($) => {
      const {
        target: G,
        translate: q,
        slideLocation: re
      } = $, oe = G();
      oe !== re.get() && (q.to(oe), re.set(oe));
    });
  }
  function B() {
    S.forEach(($) => $.translate.clear());
  }
  return {
    canLoop: z,
    clear: B,
    loop: D,
    loopPoints: S
  };
}
function cw(r, i, l) {
  let a, c = !1;
  function f(h) {
    if (!l) return;
    function g(x) {
      for (const v of x)
        if (v.type === "childList") {
          h.reInit(), i.emit("slidesChanged");
          break;
        }
    }
    a = new MutationObserver((x) => {
      c || (El(l) || l(h, x)) && g(x);
    }), a.observe(r, {
      childList: !0
    });
  }
  function d() {
    a && a.disconnect(), c = !0;
  }
  return {
    init: f,
    destroy: d
  };
}
function fw(r, i, l, a) {
  const c = {};
  let f = null, d = null, p, h = !1;
  function g() {
    p = new IntersectionObserver((P) => {
      h || (P.forEach((w) => {
        const C = i.indexOf(w.target);
        c[C] = w;
      }), f = null, d = null, l.emit("slidesInView"));
    }, {
      root: r.parentElement,
      threshold: a
    }), i.forEach((P) => p.observe(P));
  }
  function x() {
    p && p.disconnect(), h = !0;
  }
  function v(P) {
    return Wo(c).reduce((w, C) => {
      const N = parseInt(C), {
        isIntersecting: T
      } = c[N];
      return (P && T || !P && !T) && w.push(N), w;
    }, []);
  }
  function S(P = !0) {
    if (P && f) return f;
    if (!P && d) return d;
    const w = v(P);
    return P && (f = w), P || (d = w), w;
  }
  return {
    init: g,
    destroy: x,
    get: S
  };
}
function dw(r, i, l, a, c, f) {
  const {
    measureSize: d,
    startEdge: p,
    endEdge: h
  } = r, g = l[0] && c, x = P(), v = w(), S = l.map(d), _ = C();
  function P() {
    if (!g) return 0;
    const T = l[0];
    return je(i[p] - T[p]);
  }
  function w() {
    if (!g) return 0;
    const T = f.getComputedStyle(Lt(a));
    return parseFloat(T.getPropertyValue(`margin-${h}`));
  }
  function C() {
    return l.map((T, z, D) => {
      const B = !z, Q = nu(D, z);
      return B ? S[z] + x : Q ? S[z] + v : D[z + 1][p] - T[p];
    }).map(je);
  }
  return {
    slideSizes: S,
    slideSizesWithGaps: _,
    startGap: x,
    endGap: v
  };
}
function pw(r, i, l, a, c, f, d, p, h) {
  const {
    startEdge: g,
    endEdge: x,
    direction: v
  } = r, S = eu(l);
  function _(N, T) {
    return Bo(N).filter((z) => z % T === 0).map((z) => N.slice(z, z + T));
  }
  function P(N) {
    return N.length ? Bo(N).reduce((T, z, D) => {
      const B = Lt(T) || 0, Q = B === 0, $ = z === Ho(N), G = c[g] - f[B][g], q = c[g] - f[z][x], re = !a && Q ? v(d) : 0, oe = !a && $ ? v(p) : 0, X = je(q - oe - (G + re));
      return D && X > i + h && T.push(z), $ && T.push(N.length), T;
    }, []).map((T, z, D) => {
      const B = Math.max(D[z - 1] || 0);
      return N.slice(B, T);
    }) : [];
  }
  function w(N) {
    return S ? _(N, l) : P(N);
  }
  return {
    groupSlides: w
  };
}
function mw(r, i, l, a, c, f, d) {
  const {
    align: p,
    axis: h,
    direction: g,
    startIndex: x,
    loop: v,
    duration: S,
    dragFree: _,
    dragThreshold: P,
    inViewThreshold: w,
    slidesToScroll: C,
    skipSnaps: N,
    containScroll: T,
    watchResize: z,
    watchSlides: D,
    watchDrag: B,
    watchFocus: Q
  } = f, $ = 2, G = Y0(), q = G.measure(i), re = l.map(G.measure), oe = Q0(h, g), X = oe.measureSize(q), de = X0(X), ae = U0(p, X), xe = !v && !!T, pe = v || !!T, {
    slideSizes: ie,
    slideSizesWithGaps: M,
    startGap: K,
    endGap: H
  } = dw(oe, q, re, l, pe, c), b = pw(oe, X, C, v, q, re, K, H, $), {
    snaps: I,
    snapsAligned: ce
  } = ow(oe, ae, q, re, b), ue = -Lt(I) + Lt(M), {
    snapsContained: ve,
    scrollContainLimit: ye
  } = ew(X, ue, ce, T, $), he = xe ? ve : ce, {
    limit: fe
  } = tw(ue, he, v), Se = Tp(Ho(he), x, v), be = Se.clone(), Pe = Bo(l), te = ({
    dragHandler: wt,
    scrollBody: Kt,
    scrollBounds: Wr,
    options: {
      loop: In
    }
  }) => {
    In || Wr.constrain(wt.pointerDown()), Kt.seek();
  }, ke = ({
    scrollBody: wt,
    translate: Kt,
    location: Wr,
    offsetLocation: In,
    previousLocation: Ko,
    scrollLooper: Pl,
    slideLooper: $r,
    dragHandler: Vr,
    animation: Ur,
    eventHandler: ir,
    scrollBounds: Hr,
    options: {
      loop: Gt
    }
  }, Yt) => {
    const Qr = wt.settled(), Go = !Hr.shouldConstrain(), Kr = Gt ? Qr : Qr && Go, Gr = Kr && !Vr.pointerDown();
    Gr && Ur.stop();
    const Yo = Wr.get() * Yt + Ko.get() * (1 - Yt);
    In.set(Yo), Gt && (Pl.loop(wt.direction()), $r.loop()), Kt.to(In.get()), Gr && ir.emit("settle"), Kr || ir.emit("scroll");
  }, Te = H0(a, c, () => te(or), (wt) => ke(or, wt)), Ve = 0.68, at = he[Se.get()], ut = Mo(at), jt = Mo(at), vt = Mo(at), ct = Mo(at), yt = J0(ut, vt, jt, ct, S, Ve), Dn = lw(v, he, ue, fe, ct), tr = sw(Te, Se, be, yt, Dn, ct, d), Fr = rw(fe), Br = $o(), Qo = fw(i, l, d, w), {
    slideRegistry: nr
  } = iw(xe, T, he, ye, b, Pe), rr = aw(r, l, nr, tr, yt, Br, d, Q), or = {
    ownerDocument: a,
    ownerWindow: c,
    eventHandler: d,
    containerRect: q,
    slideRects: re,
    animation: Te,
    axis: oe,
    dragHandler: K0(oe, r, a, c, ct, G0(oe, c), ut, Te, tr, yt, Dn, Se, d, de, _, P, N, Ve, B),
    eventStore: Br,
    percentOfView: de,
    index: Se,
    indexPrevious: be,
    limit: fe,
    location: ut,
    offsetLocation: vt,
    previousLocation: jt,
    options: f,
    resizeHandler: Z0(i, d, c, l, oe, z, G),
    scrollBody: yt,
    scrollBounds: q0(fe, vt, ct, yt, de),
    scrollLooper: nw(ue, fe, vt, [ut, vt, jt, ct]),
    scrollProgress: Fr,
    scrollSnapList: he.map(Fr.get),
    scrollSnaps: he,
    scrollTarget: Dn,
    scrollTo: tr,
    slideLooper: uw(oe, X, ue, ie, M, I, he, vt, l),
    slideFocus: rr,
    slidesHandler: cw(i, d, D),
    slidesInView: Qo,
    slideIndexes: Pe,
    slideRegistry: nr,
    slidesToScroll: b,
    target: ct,
    translate: Lp(oe, i)
  };
  return or;
}
function hw() {
  let r = {}, i;
  function l(g) {
    i = g;
  }
  function a(g) {
    return r[g] || [];
  }
  function c(g) {
    return a(g).forEach((x) => x(i, g)), h;
  }
  function f(g, x) {
    return r[g] = a(g).concat([x]), h;
  }
  function d(g, x) {
    return r[g] = a(g).filter((v) => v !== x), h;
  }
  function p() {
    r = {};
  }
  const h = {
    init: l,
    emit: c,
    off: d,
    on: f,
    clear: p
  };
  return h;
}
const gw = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function vw(r) {
  function i(f, d) {
    return Ap(f, d || {});
  }
  function l(f) {
    const d = f.breakpoints || {}, p = Wo(d).filter((h) => r.matchMedia(h).matches).map((h) => d[h]).reduce((h, g) => i(h, g), {});
    return i(f, p);
  }
  function a(f) {
    return f.map((d) => Wo(d.breakpoints || {})).reduce((d, p) => d.concat(p), []).map(r.matchMedia);
  }
  return {
    mergeOptions: i,
    optionsAtMedia: l,
    optionsMediaQueries: a
  };
}
function yw(r) {
  let i = [];
  function l(f, d) {
    return i = d.filter(({
      options: p
    }) => r.optionsAtMedia(p).active !== !1), i.forEach((p) => p.init(f, r)), d.reduce((p, h) => Object.assign(p, {
      [h.name]: h
    }), {});
  }
  function a() {
    i = i.filter((f) => f.destroy());
  }
  return {
    init: l,
    destroy: a
  };
}
function yl(r, i, l) {
  const a = r.ownerDocument, c = a.defaultView, f = vw(c), d = yw(f), p = $o(), h = hw(), {
    mergeOptions: g,
    optionsAtMedia: x,
    optionsMediaQueries: v
  } = f, {
    on: S,
    off: _,
    emit: P
  } = h, w = oe;
  let C = !1, N, T = g(gw, yl.globalOptions), z = g(T), D = [], B, Q, $;
  function G() {
    const {
      container: Pe,
      slides: te
    } = z;
    Q = (La(Pe) ? r.querySelector(Pe) : Pe) || r.children[0];
    const Te = La(te) ? Q.querySelectorAll(te) : te;
    $ = [].slice.call(Te || Q.children);
  }
  function q(Pe) {
    const te = mw(r, Q, $, a, c, Pe, h);
    if (Pe.loop && !te.slideLooper.canLoop()) {
      const ke = Object.assign({}, Pe, {
        loop: !1
      });
      return q(ke);
    }
    return te;
  }
  function re(Pe, te) {
    C || (T = g(T, Pe), z = x(T), D = te || D, G(), N = q(z), v([T, ...D.map(({
      options: ke
    }) => ke)]).forEach((ke) => p.add(ke, "change", oe)), z.active && (N.translate.to(N.location.get()), N.animation.init(), N.slidesInView.init(), N.slideFocus.init(be), N.eventHandler.init(be), N.resizeHandler.init(be), N.slidesHandler.init(be), N.options.loop && N.slideLooper.loop(), Q.offsetParent && $.length && N.dragHandler.init(be), B = d.init(be, D)));
  }
  function oe(Pe, te) {
    const ke = b();
    X(), re(g({
      startIndex: ke
    }, Pe), te), h.emit("reInit");
  }
  function X() {
    N.dragHandler.destroy(), N.eventStore.clear(), N.translate.clear(), N.slideLooper.clear(), N.resizeHandler.destroy(), N.slidesHandler.destroy(), N.slidesInView.destroy(), N.animation.destroy(), d.destroy(), p.clear();
  }
  function de() {
    C || (C = !0, p.clear(), X(), h.emit("destroy"), h.clear());
  }
  function ae(Pe, te, ke) {
    !z.active || C || (N.scrollBody.useBaseFriction().useDuration(te === !0 ? 0 : z.duration), N.scrollTo.index(Pe, ke || 0));
  }
  function xe(Pe) {
    const te = N.index.add(1).get();
    ae(te, Pe, -1);
  }
  function pe(Pe) {
    const te = N.index.add(-1).get();
    ae(te, Pe, 1);
  }
  function ie() {
    return N.index.add(1).get() !== b();
  }
  function M() {
    return N.index.add(-1).get() !== b();
  }
  function K() {
    return N.scrollSnapList;
  }
  function H() {
    return N.scrollProgress.get(N.offsetLocation.get());
  }
  function b() {
    return N.index.get();
  }
  function I() {
    return N.indexPrevious.get();
  }
  function ce() {
    return N.slidesInView.get();
  }
  function ue() {
    return N.slidesInView.get(!1);
  }
  function ve() {
    return B;
  }
  function ye() {
    return N;
  }
  function he() {
    return r;
  }
  function fe() {
    return Q;
  }
  function Se() {
    return $;
  }
  const be = {
    canScrollNext: ie,
    canScrollPrev: M,
    containerNode: fe,
    internalEngine: ye,
    destroy: de,
    off: _,
    on: S,
    emit: P,
    plugins: ve,
    previousScrollSnap: I,
    reInit: w,
    rootNode: he,
    scrollNext: xe,
    scrollPrev: pe,
    scrollProgress: H,
    scrollSnapList: K,
    scrollTo: ae,
    selectedScrollSnap: b,
    slideNodes: Se,
    slidesInView: ce,
    slidesNotInView: ue
  };
  return re(i, l), setTimeout(() => h.emit("init"), 0), be;
}
yl.globalOptions = void 0;
function ru(r = {}, i = []) {
  const l = k.useRef(r), a = k.useRef(i), [c, f] = k.useState(), [d, p] = k.useState(), h = k.useCallback(() => {
    c && c.reInit(l.current, a.current);
  }, [c]);
  return k.useEffect(() => {
    qa(l.current, r) || (l.current = r, h());
  }, [r, h]), k.useEffect(() => {
    W0(a.current, i) || (a.current = i, h());
  }, [i, h]), k.useEffect(() => {
    if (B0() && d) {
      yl.globalOptions = ru.globalOptions;
      const g = yl(d, l.current, a.current);
      return f(g), () => g.destroy();
    } else
      f(void 0);
  }, [d, f]), [p, c];
}
ru.globalOptions = void 0;
const zp = k.createContext(null);
function Cl() {
  const r = k.useContext(zp);
  if (!r)
    throw new Error("useCarousel must be used within a <Carousel />");
  return r;
}
const Mp = k.forwardRef(({
  orientation: r = "horizontal",
  opts: i,
  setApi: l,
  plugins: a,
  className: c,
  children: f,
  ...d
}, p) => {
  const [h, g] = ru({
    ...i,
    axis: r === "horizontal" ? "x" : "y"
  }, a), [x, v] = k.useState(!1), [S, _] = k.useState(!1), P = k.useCallback((T) => {
    T && (v(T.canScrollPrev()), _(T.canScrollNext()));
  }, []), w = k.useCallback(() => {
    g?.scrollPrev();
  }, [g]), C = k.useCallback(() => {
    g?.scrollNext();
  }, [g]), N = k.useCallback((T) => {
    T.key === "ArrowLeft" ? (T.preventDefault(), w()) : T.key === "ArrowRight" && (T.preventDefault(), C());
  }, [w, C]);
  return k.useEffect(() => {
    !g || !l || l(g);
  }, [g, l]), k.useEffect(() => {
    if (g)
      return P(g), g.on("reInit", P), g.on("select", P), () => {
        g?.off("select", P);
      };
  }, [g, P]), /* @__PURE__ */ j.jsx(
    zp.Provider,
    {
      value: {
        carouselRef: h,
        api: g,
        opts: i,
        orientation: r || (i?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: w,
        scrollNext: C,
        canScrollPrev: x,
        canScrollNext: S
      },
      children: /* @__PURE__ */ j.jsx(
        "div",
        {
          ref: p,
          onKeyDownCapture: N,
          className: tt("relative", c),
          role: "region",
          "aria-roledescription": "carousel",
          ...d,
          children: f
        }
      )
    }
  );
});
Mp.displayName = "Carousel";
const jp = k.forwardRef(({ className: r, ...i }, l) => {
  const { carouselRef: a, orientation: c } = Cl();
  return /* @__PURE__ */ j.jsx("div", { ref: a, className: "overflow-hidden", children: /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: l,
      className: tt(
        "flex",
        c === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        r
      ),
      ...i
    }
  ) });
});
jp.displayName = "CarouselContent";
const Dp = k.forwardRef(({ className: r, ...i }, l) => {
  const { orientation: a } = Cl();
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: l,
      role: "group",
      "aria-roledescription": "slide",
      className: tt(
        "min-w-0 shrink-0 grow-0 basis-full",
        a === "horizontal" ? "pl-4" : "pt-4",
        r
      ),
      ...i
    }
  );
});
Dp.displayName = "CarouselItem";
const Ip = k.forwardRef(({ className: r, variant: i = "outline", size: l = "icon", ...a }, c) => {
  const { orientation: f, scrollPrev: d, canScrollPrev: p } = Cl();
  return /* @__PURE__ */ j.jsxs(
    Do,
    {
      ref: c,
      variant: i,
      size: l,
      className: tt("absolute  h-8 w-8 rounded-full", f === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", r),
      disabled: !p,
      onClick: d,
      ...a,
      children: [
        /* @__PURE__ */ j.jsx(j0, { className: "h-4 w-4" }),
        /* @__PURE__ */ j.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
Ip.displayName = "CarouselPrevious";
const Fp = k.forwardRef(({ className: r, variant: i = "outline", size: l = "icon", ...a }, c) => {
  const { orientation: f, scrollNext: d, canScrollNext: p } = Cl();
  return /* @__PURE__ */ j.jsxs(
    Do,
    {
      ref: c,
      variant: i,
      size: l,
      className: tt("absolute h-8 w-8 rounded-full", f === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", r),
      disabled: !p,
      onClick: d,
      ...a,
      children: [
        /* @__PURE__ */ j.jsx(D0, { className: "h-4 w-4" }),
        /* @__PURE__ */ j.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
Fp.displayName = "CarouselNext";
const Bp = k.forwardRef(({ className: r, ...i }, l) => /* @__PURE__ */ j.jsx(
  "div",
  {
    ref: l,
    className: tt("rounded-lg border bg-card text-card-foreground shadow-sm", r),
    ...i
  }
));
Bp.displayName = "Card";
const Wp = k.forwardRef(({ className: r, ...i }, l) => /* @__PURE__ */ j.jsx(
  "div",
  {
    ref: l,
    className: tt("flex flex-col space-y-1.5 p-6", r),
    ...i
  }
));
Wp.displayName = "CardHeader";
const $p = k.forwardRef(({ className: r, ...i }, l) => /* @__PURE__ */ j.jsx(
  "div",
  {
    ref: l,
    className: tt("text-2xl font-semibold leading-none tracking-tight", r),
    ...i
  }
));
$p.displayName = "CardTitle";
const ww = k.forwardRef(({ className: r, ...i }, l) => /* @__PURE__ */ j.jsx(
  "div",
  {
    ref: l,
    className: tt("text-sm text-muted-foreground", r),
    ...i
  }
));
ww.displayName = "CardDescription";
const Vp = k.forwardRef(({ className: r, ...i }, l) => /* @__PURE__ */ j.jsx("div", { ref: l, className: tt("p-6 pt-0", r), ...i }));
Vp.displayName = "CardContent";
const xw = k.forwardRef(({ className: r, ...i }, l) => /* @__PURE__ */ j.jsx(
  "div",
  {
    ref: l,
    className: tt("flex items-center p-6 pt-0", r),
    ...i
  }
));
xw.displayName = "CardFooter";
const Sw = ({ feedback: r }) => /* @__PURE__ */ j.jsx(Dp, { children: /* @__PURE__ */ j.jsxs(Bp, { className: "w-full max-w-sm", children: [
  /* @__PURE__ */ j.jsx(Wp, { children: /* @__PURE__ */ j.jsxs($p, { children: [
    "Rating: ",
    r?.rating
  ] }) }),
  /* @__PURE__ */ j.jsx(Vp, { children: /* @__PURE__ */ j.jsx("p", { children: r?.message }) })
] }) }), kw = ({ projectId: r }) => {
  const [i, l] = k.useState([]), [a, c] = k.useState(!0);
  return k.useEffect(() => {
    (async () => {
      const h = await (await fetch(`http://localhost:3000/api/get-feedbacks?projectId=${r}`)).json();
      l(h), c(!1);
    })();
  }, [r]), a ? /* @__PURE__ */ j.jsx("div", { className: "animate-spin", children: /* @__PURE__ */ j.jsx(I0, { className: "mr-2 h-4 w-4 animate-spin" }) }) : /* @__PURE__ */ j.jsxs(Mp, { children: [
    /* @__PURE__ */ j.jsx(jp, { children: i.map((f) => /* @__PURE__ */ j.jsx(Sw, { feedback: f })) }),
    /* @__PURE__ */ j.jsx(Ip, {}),
    /* @__PURE__ */ j.jsx(Fp, {})
  ] });
}, Up = (r) => r.replace(/-([a-z])/g, (i, l) => l.toUpperCase());
class Ew extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  getPropsFromAttributes() {
    const i = {};
    for (const { name: l, value: a } of this.attributes)
      i[Up(l)] = a;
    return i;
  }
  connectedCallback() {
    const i = this.getPropsFromAttributes();
    Cd.createRoot(this.shadowRoot).render(/* @__PURE__ */ j.jsx(T0, { ...i }));
  }
}
class Cw extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  getPropsFromAttributes() {
    const i = {};
    for (const { name: l, value: a } of this.attributes)
      i[Up(l)] = a;
    return i;
  }
  connectedCallback() {
    const i = this.getPropsFromAttributes();
    Cd.createRoot(this.shadowRoot).render(/* @__PURE__ */ j.jsx(kw, { ...i }));
  }
}
customElements.define("feedback-form", Ew);
customElements.define("feedback-widget", Cw);
