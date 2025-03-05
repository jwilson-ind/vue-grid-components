import * as xu from "vue";
import { ref as H, computed as G, watchEffect as Mt, onMounted as Ae, cloneVNode as jp, h as se, Fragment as ct, defineComponent as Me, inject as ht, provide as Ct, onUnmounted as St, watch as Ye, shallowRef as $l, unref as ge, getCurrentInstance as Qc, Teleport as Up, reactive as ef, nextTick as Ni, normalizeClass as Ve, createBlock as Gn, openBlock as I, withCtx as bt, createElementVNode as L, toDisplayString as ut, markRaw as Au, createElementBlock as B, createCommentVNode as De, createVNode as Ge, createTextVNode as Gr, isRef as qr, isReactive as Pu, isVNode as Hp, createApp as Dr, renderList as $r, withModifiers as Re, resolveDynamicComponent as Yp, withDirectives as zr, vModelSelect as Vp, vModelText as Wp, vModelDynamic as qp, withKeys as lr, renderSlot as Qe, vShow as gi, Transition as Du, normalizeStyle as gs, useSlots as Gp } from "vue";
function zp(e, t, r) {
  let n = H(r == null ? void 0 : r.value), i = G(() => e.value !== void 0);
  return [G(() => i.value ? e.value : n.value), function(a) {
    return i.value || (n.value = a), t == null ? void 0 : t(a);
  }];
}
function Ll(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function zi() {
  let e = [], t = { addEventListener(r, n, i, a) {
    return r.addEventListener(n, i, a), t.add(() => r.removeEventListener(n, i, a));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: !0 };
    return Ll(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, i) {
    let a = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: a });
    });
  }, group(r) {
    let n = zi();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0) for (let i of e.splice(n, 1)) i();
    };
  }, dispose() {
    for (let r of e.splice(0)) r();
  } };
  return t;
}
var ku;
let Kp = Symbol("headlessui.useid"), Jp = 0;
const Ir = (ku = xu.useId) != null ? ku : function() {
  return xu.inject(Kp, () => `${++Jp}`)();
};
function xe(e) {
  var t;
  if (e == null || e.value == null) return null;
  let r = (t = e.value.$el) != null ? t : e.value;
  return r instanceof Node ? r : null;
}
function yr(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, yr), n;
}
var Xp = Object.defineProperty, Zp = (e, t, r) => t in e ? Xp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Mu = (e, t, r) => (Zp(e, typeof t != "symbol" ? t + "" : t, r), r);
let Qp = class {
  constructor() {
    Mu(this, "current", this.detect()), Mu(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Ki = new Qp();
function ni(e) {
  if (Ki.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = xe(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let el = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Kr = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Kr || {}), tf = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(tf || {}), eh = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(eh || {});
function th(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(el)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var rf = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(rf || {});
function rh(e, t = 0) {
  var r;
  return e === ((r = ni(e)) == null ? void 0 : r.body) ? !1 : yr(t, { 0() {
    return e.matches(el);
  }, 1() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(el)) return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var nh = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(nh || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function gn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let ih = ["textarea", "input"].join(",");
function ah(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ih)) != null ? r : !1;
}
function oh(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null) return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ra(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var a;
  let o = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? r ? oh(e) : e : th(e);
  i.length > 0 && s.length > 1 && (s = s.filter((h) => !i.includes(h))), n = n ?? o.activeElement;
  let u = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, s.indexOf(n)) - 1;
    if (t & 4) return Math.max(0, s.indexOf(n)) + 1;
    if (t & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, y = 0, m = s.length, S;
  do {
    if (y >= m || y + m <= 0) return 0;
    let h = f + y;
    if (t & 16) h = (h + m) % m;
    else {
      if (h < 0) return 3;
      if (h >= m) return 1;
    }
    S = s[h], S == null || S.focus(c), y += u;
  } while (S !== o.activeElement);
  return t & 6 && ah(S) && S.select(), 2;
}
function nf() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function sh() {
  return /Android/gi.test(window.navigator.userAgent);
}
function lh() {
  return nf() || sh();
}
function Sa(e, t, r) {
  Ki.isServer || Mt((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function af(e, t, r) {
  Ki.isServer || Mt((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function uh(e, t, r = G(() => !0)) {
  function n(a, o) {
    if (!r.value || a.defaultPrevented) return;
    let s = o(a);
    if (s === null || !s.getRootNode().contains(s)) return;
    let u = function f(c) {
      return typeof c == "function" ? f(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let f of u) {
      if (f === null) continue;
      let c = f instanceof HTMLElement ? f : xe(f);
      if (c != null && c.contains(s) || a.composed && a.composedPath().includes(c)) return;
    }
    return !rh(s, rf.Loose) && s.tabIndex !== -1 && a.preventDefault(), t(a, s);
  }
  let i = H(null);
  Sa("pointerdown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Sa("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Sa("click", (a) => {
    lh() || i.value && (n(a, () => i.value), i.value = null);
  }, !0), Sa("touchend", (a) => n(a, () => a.target instanceof HTMLElement ? a.target : null), !0), af("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Cu(e, t) {
  if (e) return e;
  let r = t ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function ch(e, t) {
  let r = H(Cu(e.value.type, e.value.as));
  return Ae(() => {
    r.value = Cu(e.value.type, e.value.as);
  }), Mt(() => {
    var n;
    r.value || xe(t) && xe(t) instanceof HTMLButtonElement && !((n = xe(t)) != null && n.hasAttribute("type")) && (r.value = "button");
  }), r;
}
var qa = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(qa || {}), Jr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Jr || {});
function rt({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let o = sf(n, r), s = Object.assign(i, { props: o });
  if (e || t & 2 && o.static) return bs(s);
  if (t & 1) {
    let u = (a = o.unmount) == null || a ? 0 : 1;
    return yr(u, { 0() {
      return null;
    }, 1() {
      return bs({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return bs(s);
}
function bs({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a, o;
  let { as: s, ...u } = Nl(e, ["unmount", "static"]), f = (a = r.default) == null ? void 0 : a.call(r, n), c = {};
  if (n) {
    let y = !1, m = [];
    for (let [S, h] of Object.entries(n)) typeof h == "boolean" && (y = !0), h === !0 && m.push(S);
    y && (c["data-headlessui-state"] = m.join(" "));
  }
  if (s === "template") {
    if (f = of(f ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [y, ...m] = f ?? [];
      if (!dh(y) || m.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((v) => v.trim()).filter((v, b, E) => E.indexOf(v) === b).sort((v, b) => v.localeCompare(b)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let S = sf((o = y.props) != null ? o : {}, u, c), h = jp(y, S, !0);
      for (let v in S) v.startsWith("on") && (h.props || (h.props = {}), h.props[v] = S[v]);
      return h;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return se(s, Object.assign({}, u, c), { default: () => f });
}
function of(e) {
  return e.flatMap((t) => t.type === ct ? of(t.children) : [t]);
}
function sf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, r = {};
  for (let n of e) for (let i in n) i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r) Object.assign(t, { [n](i, ...a) {
    let o = r[n];
    for (let s of o) {
      if (i instanceof Event && i.defaultPrevented) return;
      s(i, ...a);
    }
  } });
  return t;
}
function fh(e) {
  let t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function Nl(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t) n in r && delete r[n];
  return r;
}
function dh(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Fi = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Fi || {});
let Ga = Me({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    var n;
    let { features: i, ...a } = e, o = { "aria-hidden": (i & 2) === 2 ? !0 : (n = a["aria-hidden"]) != null ? n : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return rt({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} }), lf = Symbol("Context");
var gt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(gt || {});
function ph() {
  return Fl() !== null;
}
function Fl() {
  return ht(lf, null);
}
function hh(e) {
  Ct(lf, e);
}
var za = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(za || {});
function mh(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let dn = [];
mh(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && dn[0] !== t.target && (dn.unshift(t.target), dn = dn.filter((r) => r != null && r.isConnected), dn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function yh(e) {
  var t, r;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let i of n.elements) if (i !== e && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
      i.click();
      return;
    }
    (r = n.requestSubmit) == null || r.call(n);
  }
}
function uf(e, t, r, n) {
  Ki.isServer || Mt((i) => {
    e = e ?? window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
var Pi = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Pi || {});
function vh() {
  let e = H(0);
  return af("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function cf(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let n = xe(r);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var ff = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(ff || {});
let bi = Object.assign(Me({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: H(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = H(null);
  n({ el: i, $el: i });
  let a = G(() => ni(i)), o = H(!1);
  Ae(() => o.value = !0), St(() => o.value = !1), bh({ ownerDocument: a }, G(() => o.value && !!(e.features & 16)));
  let s = wh({ ownerDocument: a, container: i, initialFocus: G(() => e.initialFocus) }, G(() => o.value && !!(e.features & 2)));
  Sh({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, G(() => o.value && !!(e.features & 8)));
  let u = vh();
  function f(S) {
    let h = xe(i);
    h && ((v) => v())(() => {
      yr(u.value, { [Pi.Forwards]: () => {
        Ra(h, Kr.First, { skipElements: [S.relatedTarget] });
      }, [Pi.Backwards]: () => {
        Ra(h, Kr.Last, { skipElements: [S.relatedTarget] });
      } });
    });
  }
  let c = H(!1);
  function y(S) {
    S.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function m(S) {
    if (!o.value) return;
    let h = cf(e.containers);
    xe(i) instanceof HTMLElement && h.add(xe(i));
    let v = S.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (df(h, v) || (c.value ? Ra(xe(i), yr(u.value, { [Pi.Forwards]: () => Kr.Next, [Pi.Backwards]: () => Kr.Previous }) | Kr.WrapAround, { relativeTo: S.target }) : S.target instanceof HTMLElement && gn(S.target)));
  }
  return () => {
    let S = {}, h = { ref: i, onKeydown: y, onFocusout: m }, { features: v, initialFocus: b, containers: E, ...x } = e;
    return se(ct, [!!(v & 4) && se(Ga, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Fi.Focusable }), rt({ ourProps: h, theirProps: { ...t, ...x }, slot: S, attrs: t, slots: r, name: "FocusTrap" }), !!(v & 4) && se(Ga, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Fi.Focusable })]);
  };
} }), { features: ff });
function gh(e) {
  let t = H(dn.slice());
  return Ye([e], ([r], [n]) => {
    n === !0 && r === !1 ? Ll(() => {
      t.value.splice(0);
    }) : n === !1 && r === !0 && (t.value = dn.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = t.value.find((n) => n != null && n.isConnected)) != null ? r : null;
  };
}
function bh({ ownerDocument: e }, t) {
  let r = gh(t);
  Ae(() => {
    Mt(() => {
      var n, i;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((i = e.value) == null ? void 0 : i.body) && gn(r());
    }, { flush: "post" });
  }), St(() => {
    t.value && gn(r());
  });
}
function wh({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = H(null), a = H(!1);
  return Ae(() => a.value = !0), St(() => a.value = !1), Ae(() => {
    Ye([t, r, n], (o, s) => {
      if (o.every((f, c) => (s == null ? void 0 : s[c]) === f) || !n.value) return;
      let u = xe(t);
      u && Ll(() => {
        var f, c;
        if (!a.value) return;
        let y = xe(r), m = (f = e.value) == null ? void 0 : f.activeElement;
        if (y) {
          if (y === m) {
            i.value = m;
            return;
          }
        } else if (u.contains(m)) {
          i.value = m;
          return;
        }
        y ? gn(y) : Ra(u, Kr.First | Kr.NoScroll) === tf.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Sh({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  uf((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value) return;
    let s = cf(r);
    xe(t) instanceof HTMLElement && s.add(xe(t));
    let u = n.value;
    if (!u) return;
    let f = o.target;
    f && f instanceof HTMLElement ? df(s, f) ? (n.value = f, gn(f)) : (o.preventDefault(), o.stopPropagation(), gn(u)) : gn(n.value);
  }, !0);
}
function df(e, t) {
  for (let r of e) if (r.contains(t)) return !0;
  return !1;
}
function Oh(e) {
  let t = $l(e.getSnapshot());
  return St(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function _h(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...a) {
    let o = t[i].call(r, ...a);
    o && (r = o, n.forEach((s) => s()));
  } };
}
function Th() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, a = e - i;
    r.style(n, "paddingRight", `${a}px`);
  } };
}
function Eh() {
  return nf() ? { before({ doc: e, d: t, meta: r }) {
    function n(i) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = zi();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let a = (i = window.scrollY) != null ? i : window.pageYOffset, o = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let u = s.target.closest("a");
          if (!u) return;
          let { hash: f } = new URL(u.href), c = e.querySelector(f);
          c && !n(c) && (o = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (n(s.target)) {
          let u = s.target;
          for (; u.parentElement && n(u.parentElement); ) u = u.parentElement;
          t.style(u, "overscrollBehavior", "contain");
        } else t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (n(s.target)) {
            let u = s.target;
            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); ) u = u.parentElement;
            u.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let u = (s = window.scrollY) != null ? s : window.pageYOffset;
        a !== u && window.scrollTo(0, a), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
      });
    });
  } } : {};
}
function xh() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Ah(e) {
  let t = {};
  for (let r of e) Object.assign(t, r(t));
  return t;
}
let mn = _h(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: zi(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Ah(r) }, i = [Eh(), Th(), xh()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(n)), i.forEach(({ after: a }) => a == null ? void 0 : a(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
mn.subscribe(() => {
  let e = mn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e) t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && mn.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && mn.dispatch("TEARDOWN", r);
  }
});
function Ph(e, t, r) {
  let n = Oh(mn), i = G(() => {
    let a = e.value ? n.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Ye([e, t], ([a, o], [s], u) => {
    if (!a || !o) return;
    mn.dispatch("PUSH", a, r);
    let f = !1;
    u(() => {
      f || (mn.dispatch("POP", s ?? a, r), f = !0);
    });
  }, { immediate: !0 }), i;
}
let ws = /* @__PURE__ */ new Map(), wi = /* @__PURE__ */ new Map();
function Ru(e, t = H(!0)) {
  Mt((r) => {
    var n;
    if (!t.value) return;
    let i = xe(e);
    if (!i) return;
    r(function() {
      var o;
      if (!i) return;
      let s = (o = wi.get(i)) != null ? o : 1;
      if (s === 1 ? wi.delete(i) : wi.set(i, s - 1), s !== 1) return;
      let u = ws.get(i);
      u && (u["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", u["aria-hidden"]), i.inert = u.inert, ws.delete(i));
    });
    let a = (n = wi.get(i)) != null ? n : 0;
    wi.set(i, a + 1), a === 0 && (ws.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
function Dh({ defaultContainers: e = [], portals: t, mainTreeNodeRef: r } = {}) {
  let n = H(null), i = ni(n);
  function a() {
    var o, s, u;
    let f = [];
    for (let c of e) c !== null && (c instanceof HTMLElement ? f.push(c) : "value" in c && c.value instanceof HTMLElement && f.push(c.value));
    if (t != null && t.value) for (let c of t.value) f.push(c);
    for (let c of (o = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? o : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(xe(n)) || c.contains((u = (s = xe(n)) == null ? void 0 : s.getRootNode()) == null ? void 0 : u.host) || f.some((y) => c.contains(y)) || f.push(c));
    return f;
  }
  return { resolveContainers: a, contains(o) {
    return a().some((s) => s.contains(o));
  }, mainTreeNodeRef: n, MainTreeNode() {
    return r != null ? null : se(Ga, { features: Fi.Hidden, ref: n });
  } };
}
let pf = Symbol("ForcePortalRootContext");
function kh() {
  return ht(pf, !1);
}
let tl = Me({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return Ct(pf, e.force), () => {
    let { force: n, ...i } = e;
    return rt({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} }), hf = Symbol("StackContext");
var rl = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(rl || {});
function Mh() {
  return ht(hf, () => {
  });
}
function Ch({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Mh();
  function a(...o) {
    n == null || n(...o), i(...o);
  }
  Ae(() => {
    Ye(t, (o, s) => {
      o ? a(0, e, r) : s === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), St(() => {
    t.value && a(1, e, r);
  }), Ct(hf, a);
}
let mf = Symbol("DescriptionContext");
function Rh() {
  let e = ht(mf, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function yf({ slot: e = H({}), name: t = "Description", props: r = {} } = {}) {
  let n = H([]);
  function i(a) {
    return n.value.push(a), () => {
      let o = n.value.indexOf(a);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return Ct(mf, { register: i, slot: e, name: t, props: r }), G(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
Me({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: r }) {
  var n;
  let i = (n = e.id) != null ? n : `headlessui-description-${Ir()}`, a = Rh();
  return Ae(() => St(a.register(i))), () => {
    let { name: o = "Description", slot: s = H({}), props: u = {} } = a, { ...f } = e, c = { ...Object.entries(u).reduce((y, [m, S]) => Object.assign(y, { [m]: ge(S) }), {}), id: i };
    return rt({ ourProps: c, theirProps: f, slot: s.value, attrs: t, slots: r, name: o });
  };
} });
function $h(e) {
  let t = ni(e);
  if (!t) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r) return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
const nl = /* @__PURE__ */ new WeakMap();
function Lh(e) {
  var t;
  return (t = nl.get(e)) != null ? t : 0;
}
function $u(e, t) {
  let r = t(Lh(e));
  return r <= 0 ? nl.delete(e) : nl.set(e, r), r;
}
let vf = Me({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = H(null), i = G(() => ni(n)), a = kh(), o = ht(gf, null), s = H(a === !0 || o == null ? $h(n.value) : o.resolveTarget());
  s.value && $u(s.value, (m) => m + 1);
  let u = H(!1);
  Ae(() => {
    u.value = !0;
  }), Mt(() => {
    a || o != null && (s.value = o.resolveTarget());
  });
  let f = ht(il, null), c = !1, y = Qc();
  return Ye(n, () => {
    if (c || !f) return;
    let m = xe(n);
    m && (St(f.register(m), y), c = !0);
  }), St(() => {
    var m, S;
    let h = (m = i.value) == null ? void 0 : m.getElementById("headlessui-portal-root");
    !h || s.value !== h || $u(s.value, (v) => v - 1) || s.value.children.length > 0 || (S = s.value.parentElement) == null || S.removeChild(s.value);
  }), () => {
    if (!u.value || s.value === null) return null;
    let m = { ref: n, "data-headlessui-portal": "" };
    return se(Up, { to: s.value }, rt({ ourProps: m, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), il = Symbol("PortalParentContext");
function Nh() {
  let e = ht(il, null), t = H([]);
  function r(a) {
    return t.value.push(a), e && e.register(a), () => n(a);
  }
  function n(a) {
    let o = t.value.indexOf(a);
    o !== -1 && t.value.splice(o, 1), e && e.unregister(a);
  }
  let i = { register: r, unregister: n, portals: t };
  return [t, Me({ name: "PortalWrapper", setup(a, { slots: o }) {
    return Ct(il, i), () => {
      var s;
      return (s = o.default) == null ? void 0 : s.call(o);
    };
  } })];
}
let gf = Symbol("PortalGroupContext"), Fh = Me({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = ef({ resolveTarget() {
    return e.target;
  } });
  return Ct(gf, n), () => {
    let { target: i, ...a } = e;
    return rt({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} });
var Ih = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ih || {});
let al = Symbol("DialogContext");
function Ji(e) {
  let t = ht(al, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ji), r;
  }
  return t;
}
let Oa = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Bh = Me({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Oa }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a, o;
  let s = (a = e.id) != null ? a : `headlessui-dialog-${Ir()}`, u = H(!1);
  Ae(() => {
    u.value = !0;
  });
  let f = !1, c = G(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (f || (f = !0, console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), y = H(0), m = Fl(), S = G(() => e.open === Oa && m !== null ? (m.value & gt.Open) === gt.Open : e.open), h = H(null), v = G(() => ni(h));
  if (i({ el: h, $el: h }), !(e.open !== Oa || m !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof S.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${S.value === Oa ? void 0 : e.open}`);
  let b = G(() => u.value && S.value ? 0 : 1), E = G(() => b.value === 0), x = G(() => y.value > 1), O = ht(al, null) !== null, [p, w] = Nh(), { resolveContainers: _, mainTreeNodeRef: T, MainTreeNode: k } = Dh({ portals: p, defaultContainers: [G(() => {
    var te;
    return (te = ye.panelRef.value) != null ? te : h.value;
  })] }), C = G(() => x.value ? "parent" : "leaf"), R = G(() => m !== null ? (m.value & gt.Closing) === gt.Closing : !1), z = G(() => O || R.value ? !1 : E.value), V = G(() => {
    var te, ie, de;
    return (de = Array.from((ie = (te = v.value) == null ? void 0 : te.querySelectorAll("body > *")) != null ? ie : []).find((we) => we.id === "headlessui-portal-root" ? !1 : we.contains(xe(T)) && we instanceof HTMLElement)) != null ? de : null;
  });
  Ru(V, z);
  let q = G(() => x.value ? !0 : E.value), ue = G(() => {
    var te, ie, de;
    return (de = Array.from((ie = (te = v.value) == null ? void 0 : te.querySelectorAll("[data-headlessui-portal]")) != null ? ie : []).find((we) => we.contains(xe(T)) && we instanceof HTMLElement)) != null ? de : null;
  });
  Ru(ue, q), Ch({ type: "Dialog", enabled: G(() => b.value === 0), element: h, onUpdate: (te, ie) => {
    if (ie === "Dialog") return yr(te, { [rl.Add]: () => y.value += 1, [rl.Remove]: () => y.value -= 1 });
  } });
  let re = yf({ name: "DialogDescription", slot: G(() => ({ open: S.value })) }), ne = H(null), ye = { titleId: ne, panelRef: H(null), dialogState: b, setTitleId(te) {
    ne.value !== te && (ne.value = te);
  }, close() {
    t("close", !1);
  } };
  Ct(al, ye);
  let Oe = G(() => !(!E.value || x.value));
  uh(_, (te, ie) => {
    te.preventDefault(), ye.close(), Ni(() => ie == null ? void 0 : ie.focus());
  }, Oe);
  let Le = G(() => !(x.value || b.value !== 0));
  uf((o = v.value) == null ? void 0 : o.defaultView, "keydown", (te) => {
    Le.value && (te.defaultPrevented || te.key === za.Escape && (te.preventDefault(), te.stopPropagation(), ye.close()));
  });
  let K = G(() => !(R.value || b.value !== 0 || O));
  return Ph(v, K, (te) => {
    var ie;
    return { containers: [...(ie = te.containers) != null ? ie : [], _] };
  }), Mt((te) => {
    if (b.value !== 0) return;
    let ie = xe(h);
    if (!ie) return;
    let de = new ResizeObserver((we) => {
      for (let J of we) {
        let Fe = J.target.getBoundingClientRect();
        Fe.x === 0 && Fe.y === 0 && Fe.width === 0 && Fe.height === 0 && ye.close();
      }
    });
    de.observe(ie), te(() => de.disconnect());
  }), () => {
    let { open: te, initialFocus: ie, ...de } = e, we = { ...r, ref: h, id: s, role: c.value, "aria-modal": b.value === 0 ? !0 : void 0, "aria-labelledby": ne.value, "aria-describedby": re.value }, J = { open: b.value === 0 };
    return se(tl, { force: !0 }, () => [se(vf, () => se(Fh, { target: h.value }, () => se(tl, { force: !1 }, () => se(bi, { initialFocus: ie, containers: _, features: E.value ? yr(C.value, { parent: bi.features.RestoreFocus, leaf: bi.features.All & ~bi.features.FocusLock }) : bi.features.None }, () => se(w, {}, () => rt({ ourProps: we, theirProps: { ...de, ...r }, slot: J, attrs: r, slots: n, visible: b.value === 0, features: qa.RenderStrategy | qa.Static, name: "Dialog" })))))), se(k)]);
  };
} }), jh = Me({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: r }) {
  var n;
  let i = (n = e.id) != null ? n : `headlessui-dialog-overlay-${Ir()}`, a = Ji("DialogOverlay");
  function o(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), a.close());
  }
  return () => {
    let { ...s } = e;
    return rt({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: s, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
Me({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-backdrop-${Ir()}`, o = Ji("DialogBackdrop"), s = H(null);
  return n({ el: s, $el: s }), Ae(() => {
    if (o.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...u } = e, f = { id: a, ref: s, "aria-hidden": !0 };
    return se(tl, { force: !0 }, () => se(vf, () => rt({ ourProps: f, theirProps: { ...t, ...u }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
Me({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: r, expose: n }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-panel-${Ir()}`, o = Ji("DialogPanel");
  n({ el: o.panelRef, $el: o.panelRef });
  function s(u) {
    u.stopPropagation();
  }
  return () => {
    let { ...u } = e, f = { id: a, ref: o.panelRef, onClick: s };
    return rt({ ourProps: f, theirProps: u, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
let Uh = Me({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: r }) {
  var n;
  let i = (n = e.id) != null ? n : `headlessui-dialog-title-${Ir()}`, a = Ji("DialogTitle");
  return Ae(() => {
    a.setTitleId(i), St(() => a.setTitleId(null));
  }), () => {
    let { ...o } = e;
    return rt({ ourProps: { id: i }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} }), bf = Symbol("LabelContext");
function wf() {
  let e = ht(bf, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, wf), t;
  }
  return e;
}
function Hh({ slot: e = {}, name: t = "Label", props: r = {} } = {}) {
  let n = H([]);
  function i(a) {
    return n.value.push(a), () => {
      let o = n.value.indexOf(a);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return Ct(bf, { register: i, slot: e, name: t, props: r }), G(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
Me({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: r }) {
  var n;
  let i = (n = e.id) != null ? n : `headlessui-label-${Ir()}`, a = wf();
  return Ae(() => St(a.register(i))), () => {
    let { name: o = "Label", slot: s = {}, props: u = {} } = a, { passive: f, ...c } = e, y = { ...Object.entries(u).reduce((m, [S, h]) => Object.assign(m, { [S]: ge(h) }), {}), id: i };
    return f && (delete y.onClick, delete y.htmlFor, delete c.onClick), rt({ ourProps: y, theirProps: c, slot: s, attrs: r, slots: t, name: o });
  };
} });
let Sf = Symbol("GroupContext");
Me({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: r }) {
  let n = H(null), i = Hh({ name: "SwitchLabel", props: { htmlFor: G(() => {
    var o;
    return (o = n.value) == null ? void 0 : o.id;
  }), onClick(o) {
    n.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(), n.value.click(), n.value.focus({ preventScroll: !0 }));
  } } }), a = yf({ name: "SwitchDescription" });
  return Ct(Sf, { switchRef: n, labelledby: i, describedby: a }), () => rt({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: r, name: "SwitchGroup" });
} });
let Yh = Me({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: null }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let o = (a = e.id) != null ? a : `headlessui-switch-${Ir()}`, s = ht(Sf, null), [u, f] = zp(G(() => e.modelValue), (x) => t("update:modelValue", x), G(() => e.defaultChecked));
  function c() {
    f(!u.value);
  }
  let y = H(null), m = s === null ? y : s.switchRef, S = ch(G(() => ({ as: e.as, type: r.type })), m);
  i({ el: m, $el: m });
  function h(x) {
    x.preventDefault(), c();
  }
  function v(x) {
    x.key === za.Space ? (x.preventDefault(), c()) : x.key === za.Enter && yh(x.currentTarget);
  }
  function b(x) {
    x.preventDefault();
  }
  let E = G(() => {
    var x, O;
    return (O = (x = xe(m)) == null ? void 0 : x.closest) == null ? void 0 : O.call(x, "form");
  });
  return Ae(() => {
    Ye([E], () => {
      if (!E.value || e.defaultChecked === void 0) return;
      function x() {
        f(e.defaultChecked);
      }
      return E.value.addEventListener("reset", x), () => {
        var O;
        (O = E.value) == null || O.removeEventListener("reset", x);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: x, value: O, form: p, tabIndex: w, ..._ } = e, T = { checked: u.value }, k = { id: o, ref: m, role: "switch", type: S.value, tabIndex: w === -1 ? 0 : w, "aria-checked": u.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: h, onKeyup: v, onKeypress: b };
    return se(ct, [x != null && u.value != null ? se(Ga, fh({ features: Fi.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: u.value, form: p, disabled: _.disabled, name: x, value: O })) : null, rt({ ourProps: k, theirProps: { ...r, ...Nl(_, ["modelValue", "defaultChecked"]) }, slot: T, attrs: r, slots: n, name: "Switch" })]);
  };
} });
function Vh(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called) return t.called = !0, e(...r);
  };
}
function Ss(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function _a(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var ol = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ol || {});
function Wh(e, t) {
  let r = zi();
  if (!e) return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, o] = [n, i].map((s) => {
    let [u = 0] = s.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, c) => c - f);
    return u;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Lu(e, t, r, n, i, a) {
  let o = zi(), s = a !== void 0 ? Vh(a) : () => {
  };
  return _a(e, ...i), Ss(e, ...t, ...r), o.nextFrame(() => {
    _a(e, ...r), Ss(e, ...n), o.add(Wh(e, (u) => (_a(e, ...n, ...t), Ss(e, ...i), s(u))));
  }), o.add(() => _a(e, ...t, ...r, ...n, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function un(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Il = Symbol("TransitionContext");
var qh = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(qh || {});
function Gh() {
  return ht(Il, null) !== null;
}
function zh() {
  let e = ht(Il, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Kh() {
  let e = ht(Bl, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Bl = Symbol("NestingContext");
function co(e) {
  return "children" in e ? co(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Of(e) {
  let t = H([]), r = H(!1);
  Ae(() => r.value = !0), St(() => r.value = !1);
  function n(a, o = Jr.Hidden) {
    let s = t.value.findIndex(({ id: u }) => u === a);
    s !== -1 && (yr(o, { [Jr.Unmount]() {
      t.value.splice(s, 1);
    }, [Jr.Hidden]() {
      t.value[s].state = "hidden";
    } }), !co(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = t.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, Jr.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let _f = qa.RenderStrategy, sl = Me({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  let a = H(0);
  function o() {
    a.value |= gt.Opening, t("beforeEnter");
  }
  function s() {
    a.value &= ~gt.Opening, t("afterEnter");
  }
  function u() {
    a.value |= gt.Closing, t("beforeLeave");
  }
  function f() {
    a.value &= ~gt.Closing, t("afterLeave");
  }
  if (!Gh() && ph()) return () => se(Tf, { ...e, onBeforeEnter: o, onAfterEnter: s, onBeforeLeave: u, onAfterLeave: f }, n);
  let c = H(null), y = G(() => e.unmount ? Jr.Unmount : Jr.Hidden);
  i({ el: c, $el: c });
  let { show: m, appear: S } = zh(), { register: h, unregister: v } = Kh(), b = H(m.value ? "visible" : "hidden"), E = { value: !0 }, x = Ir(), O = { value: !1 }, p = Of(() => {
    !O.value && b.value !== "hidden" && (b.value = "hidden", v(x), f());
  });
  Ae(() => {
    let q = h(x);
    St(q);
  }), Mt(() => {
    if (y.value === Jr.Hidden && x) {
      if (m.value && b.value !== "visible") {
        b.value = "visible";
        return;
      }
      yr(b.value, { hidden: () => v(x), visible: () => h(x) });
    }
  });
  let w = un(e.enter), _ = un(e.enterFrom), T = un(e.enterTo), k = un(e.entered), C = un(e.leave), R = un(e.leaveFrom), z = un(e.leaveTo);
  Ae(() => {
    Mt(() => {
      if (b.value === "visible") {
        let q = xe(c);
        if (q instanceof Comment && q.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function V(q) {
    let ue = E.value && !S.value, re = xe(c);
    !re || !(re instanceof HTMLElement) || ue || (O.value = !0, m.value && o(), m.value || u(), q(m.value ? Lu(re, w, _, T, k, (ne) => {
      O.value = !1, ne === ol.Finished && s();
    }) : Lu(re, C, R, z, k, (ne) => {
      O.value = !1, ne === ol.Finished && (co(p) || (b.value = "hidden", v(x), f()));
    })));
  }
  return Ae(() => {
    Ye([m], (q, ue, re) => {
      V(re), E.value = !1;
    }, { immediate: !0 });
  }), Ct(Bl, p), hh(G(() => yr(b.value, { visible: gt.Open, hidden: gt.Closed }) | a.value)), () => {
    let { appear: q, show: ue, enter: re, enterFrom: ne, enterTo: ye, entered: Oe, leave: Le, leaveFrom: K, leaveTo: te, ...ie } = e, de = { ref: c }, we = { ...ie, ...S.value && m.value && Ki.isServer ? { class: Ve([r.class, ie.class, ...w, ..._]) } : {} };
    return rt({ theirProps: we, ourProps: de, slot: {}, slots: n, attrs: r, features: _f, visible: b.value === "visible", name: "TransitionChild" });
  };
} }), Jh = sl, Tf = Me({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Fl(), a = G(() => e.show === null && i !== null ? (i.value & gt.Open) === gt.Open : e.show);
  Mt(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = H(a.value ? "visible" : "hidden"), s = Of(() => {
    o.value = "hidden";
  }), u = H(!0), f = { show: a, appear: G(() => e.appear || !u.value) };
  return Ae(() => {
    Mt(() => {
      u.value = !1, a.value ? o.value = "visible" : co(s) || (o.value = "hidden");
    });
  }), Ct(Bl, s), Ct(Il, f), () => {
    let c = Nl(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y = { unmount: e.unmount };
    return rt({ ourProps: { ...y, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [se(Jh, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...y, ...c }, n.default)] }, attrs: {}, features: _f, visible: o.value === "visible", name: "Transition" });
  };
} });
function Xi(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, r) {
    var n = e.get(t);
    n ? n.push(r) : e.set(t, [r]);
  }, off: function(t, r) {
    var n = e.get(t);
    n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, r) {
    var n = e.get(t);
    n && n.slice().map(function(i) {
      i(r);
    }), (n = e.get("*")) && n.slice().map(function(i) {
      i(t, r);
    });
  } };
}
const Xh = { class: "sr-only" }, Zh = {
  __name: "GridToggle",
  props: {
    label: {
      type: String,
      default() {
        return "toggle";
      }
    },
    record: {
      type: Object,
      required: !0
    },
    columnIndex: {
      type: Number,
      required: !0
    },
    field: {
      type: String
    },
    events: {
      type: Object,
      default() {
        return Xi();
      }
    }
  },
  setup(e) {
    const t = e, r = H(t.field ? n(t.field) : !1);
    Ye(r, (a) => {
      t.field && i(t.field, a), t.events.emit("grid-toggle", {
        columnIndex: t.columnIndex,
        record: t.record,
        value: a
      });
    });
    function n(a) {
      let o = a.indexOf(".") > -1 ? a.split(".") : [a], s = t.record[o.shift()];
      for (let u = 0; u < o.length; u++)
        s = s && o[u] ? s[o[u]] ?? null : null;
      return s;
    }
    function i(a, o) {
      let s = a.indexOf(".") > -1 ? a.split(".") : [a];
      switch (s.length) {
        case 1:
          t.record[a] = o;
          break;
        case 2:
          t.record[s[0]][s[1]] = o;
          break;
        case 3:
          t.record[s[0]][s[1]][s[3]] = o;
          break;
      }
    }
    return (a, o) => (I(), Gn(ge(Yh), {
      modelValue: r.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => r.value = s),
      class: Ve([r.value ? "bg-blue-600" : "bg-gray-200", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"])
    }, {
      default: bt(() => [
        L("span", Xh, ut(e.label), 1),
        L("span", {
          class: Ve([r.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          L("span", {
            class: Ve([r.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, null, 2),
          L("span", {
            class: Ve([r.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, null, 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
};
function Ef(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Qh } = Object.prototype, { getPrototypeOf: jl } = Object, fo = /* @__PURE__ */ ((e) => (t) => {
  const r = Qh.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), zt = (e) => (e = e.toLowerCase(), (t) => fo(t) === e), po = (e) => (t) => typeof t === e, { isArray: ii } = Array, Ii = po("undefined");
function em(e) {
  return e !== null && !Ii(e) && e.constructor !== null && !Ii(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xf = zt("ArrayBuffer");
function tm(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xf(e.buffer), t;
}
const rm = po("string"), wt = po("function"), Af = po("number"), ho = (e) => e !== null && typeof e == "object", nm = (e) => e === !0 || e === !1, $a = (e) => {
  if (fo(e) !== "object")
    return !1;
  const t = jl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, im = zt("Date"), am = zt("File"), om = zt("Blob"), sm = zt("FileList"), lm = (e) => ho(e) && wt(e.pipe), um = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || wt(e.append) && ((t = fo(e)) === "formdata" || // detect form-data instance
  t === "object" && wt(e.toString) && e.toString() === "[object FormData]"));
}, cm = zt("URLSearchParams"), [fm, dm, pm, hm] = ["ReadableStream", "Request", "Response", "Headers"].map(zt), mm = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zi(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), ii(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let s;
    for (n = 0; n < o; n++)
      s = a[n], t.call(null, e[s], s, e);
  }
}
function Pf(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const yn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Df = (e) => !Ii(e) && e !== yn;
function ll() {
  const { caseless: e } = Df(this) && this || {}, t = {}, r = (n, i) => {
    const a = e && Pf(t, i) || i;
    $a(t[a]) && $a(n) ? t[a] = ll(t[a], n) : $a(n) ? t[a] = ll({}, n) : ii(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Zi(arguments[n], r);
  return t;
}
const ym = (e, t, r, { allOwnKeys: n } = {}) => (Zi(t, (i, a) => {
  r && wt(i) ? e[a] = Ef(i, r) : e[a] = i;
}, { allOwnKeys: n }), e), vm = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gm = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, bm = (e, t, r, n) => {
  let i, a, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      o = i[a], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = r !== !1 && jl(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, wm = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Sm = (e) => {
  if (!e) return null;
  if (ii(e)) return e;
  let t = e.length;
  if (!Af(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Om = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && jl(Uint8Array)), _m = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, Tm = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Em = zt("HTMLFormElement"), xm = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Nu = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Am = zt("RegExp"), kf = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Zi(r, (i, a) => {
    let o;
    (o = t(i, a, e)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(e, n);
}, Pm = (e) => {
  kf(e, (t, r) => {
    if (wt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (wt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Dm = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return ii(e) ? n(e) : n(String(e).split(t)), r;
}, km = () => {
}, Mm = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Cm(e) {
  return !!(e && wt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Rm = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (ho(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const a = ii(n) ? [] : {};
        return Zi(n, (o, s) => {
          const u = r(o, i + 1);
          !Ii(u) && (a[s] = u);
        }), t[i] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, $m = zt("AsyncFunction"), Lm = (e) => e && (ho(e) || wt(e)) && wt(e.then) && wt(e.catch), Mf = ((e, t) => e ? setImmediate : t ? ((r, n) => (yn.addEventListener("message", ({ source: i, data: a }) => {
  i === yn && a === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), yn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  wt(yn.postMessage)
), Nm = typeof queueMicrotask < "u" ? queueMicrotask.bind(yn) : typeof process < "u" && process.nextTick || Mf, A = {
  isArray: ii,
  isArrayBuffer: xf,
  isBuffer: em,
  isFormData: um,
  isArrayBufferView: tm,
  isString: rm,
  isNumber: Af,
  isBoolean: nm,
  isObject: ho,
  isPlainObject: $a,
  isReadableStream: fm,
  isRequest: dm,
  isResponse: pm,
  isHeaders: hm,
  isUndefined: Ii,
  isDate: im,
  isFile: am,
  isBlob: om,
  isRegExp: Am,
  isFunction: wt,
  isStream: lm,
  isURLSearchParams: cm,
  isTypedArray: Om,
  isFileList: sm,
  forEach: Zi,
  merge: ll,
  extend: ym,
  trim: mm,
  stripBOM: vm,
  inherits: gm,
  toFlatObject: bm,
  kindOf: fo,
  kindOfTest: zt,
  endsWith: wm,
  toArray: Sm,
  forEachEntry: _m,
  matchAll: Tm,
  isHTMLForm: Em,
  hasOwnProperty: Nu,
  hasOwnProp: Nu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kf,
  freezeMethods: Pm,
  toObjectSet: Dm,
  toCamelCase: xm,
  noop: km,
  toFiniteNumber: Mm,
  findKey: Pf,
  global: yn,
  isContextDefined: Df,
  isSpecCompliantForm: Cm,
  toJSONObject: Rm,
  isAsyncFn: $m,
  isThenable: Lm,
  setImmediate: Mf,
  asap: Nm
};
function Z(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
A.inherits(Z, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Cf = Z.prototype, Rf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Rf[e] = { value: e };
});
Object.defineProperties(Z, Rf);
Object.defineProperty(Cf, "isAxiosError", { value: !0 });
Z.from = (e, t, r, n, i, a) => {
  const o = Object.create(Cf);
  return A.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), Z.call(o, e.message, t, r, n, i), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const Fm = null;
function ul(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function $f(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fu(e, t, r) {
  return e ? e.concat(t).map(function(i, a) {
    return i = $f(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function Im(e) {
  return A.isArray(e) && !e.some(ul);
}
const Bm = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function mo(e, t, r) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = A.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, b) {
    return !A.isUndefined(b[v]);
  });
  const n = r.metaTokens, i = r.visitor || c, a = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
  if (!A.isFunction(i))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (A.isDate(h))
      return h.toISOString();
    if (!u && A.isBlob(h))
      throw new Z("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(h) || A.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, v, b) {
    let E = h;
    if (h && !b && typeof h == "object") {
      if (A.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), h = JSON.stringify(h);
      else if (A.isArray(h) && Im(h) || (A.isFileList(h) || A.endsWith(v, "[]")) && (E = A.toArray(h)))
        return v = $f(v), E.forEach(function(O, p) {
          !(A.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Fu([v], p, a) : o === null ? v : v + "[]",
            f(O)
          );
        }), !1;
    }
    return ul(h) ? !0 : (t.append(Fu(b, v, a), f(h)), !1);
  }
  const y = [], m = Object.assign(Bm, {
    defaultVisitor: c,
    convertValue: f,
    isVisitable: ul
  });
  function S(h, v) {
    if (!A.isUndefined(h)) {
      if (y.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      y.push(h), A.forEach(h, function(E, x) {
        (!(A.isUndefined(E) || E === null) && i.call(
          t,
          E,
          A.isString(x) ? x.trim() : x,
          v,
          m
        )) === !0 && S(E, v ? v.concat(x) : [x]);
      }), y.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function Iu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ul(e, t) {
  this._pairs = [], e && mo(e, this, t);
}
const Lf = Ul.prototype;
Lf.append = function(t, r) {
  this._pairs.push([t, r]);
};
Lf.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Iu);
  } : Iu;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function jm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Nf(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || jm;
  A.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let a;
  if (i ? a = i(t, r) : a = A.isURLSearchParams(t) ? t.toString() : new Ul(t, r).toString(n), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Bu {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    A.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Ff = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Um = typeof URLSearchParams < "u" ? URLSearchParams : Ul, Hm = typeof FormData < "u" ? FormData : null, Ym = typeof Blob < "u" ? Blob : null, Vm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Um,
    FormData: Hm,
    Blob: Ym
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Hl = typeof window < "u" && typeof document < "u", cl = typeof navigator == "object" && navigator || void 0, Wm = Hl && (!cl || ["ReactNative", "NativeScript", "NS"].indexOf(cl.product) < 0), qm = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gm = Hl && window.location.href || "http://localhost", zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Hl,
  hasStandardBrowserEnv: Wm,
  hasStandardBrowserWebWorkerEnv: qm,
  navigator: cl,
  origin: Gm
}, Symbol.toStringTag, { value: "Module" })), et = {
  ...zm,
  ...Vm
};
function Km(e, t) {
  return mo(e, new et.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return et.isNode && A.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Jm(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Xm(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function If(e) {
  function t(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), u = a >= r.length;
    return o = !o && A.isArray(i) ? i.length : o, u ? (A.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !A.isObject(i[o])) && (i[o] = []), t(r, n, i[o], a) && A.isArray(i[o]) && (i[o] = Xm(i[o])), !s);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const r = {};
    return A.forEachEntry(e, (n, i) => {
      t(Jm(n), i, r, 0);
    }), r;
  }
  return null;
}
function Zm(e, t, r) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Qi = {
  transitional: Ff,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = A.isObject(t);
    if (a && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
      return i ? JSON.stringify(If(t)) : t;
    if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t) || A.isReadableStream(t))
      return t;
    if (A.isArrayBufferView(t))
      return t.buffer;
    if (A.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Km(t, this.formSerializer).toString();
      if ((s = A.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return mo(
          s ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Zm(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Qi.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (A.isResponse(t) || A.isReadableStream(t))
      return t;
    if (t && A.isString(t) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? Z.from(s, Z.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: et.classes.FormData,
    Blob: et.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Qi.headers[e] = {};
});
const Qm = A.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ey = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || t[r] && Qm[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ju = Symbol("internals");
function Si(e) {
  return e && String(e).trim().toLowerCase();
}
function La(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(La) : String(e);
}
function ty(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const ry = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Os(e, t, r, n, i) {
  if (A.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!A.isString(t)) {
    if (A.isString(n))
      return t.indexOf(n) !== -1;
    if (A.isRegExp(n))
      return n.test(t);
  }
}
function ny(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function iy(e, t) {
  const r = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, a, o) {
        return this[n].call(this, t, i, a, o);
      },
      configurable: !0
    });
  });
}
let ft = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(s, u, f) {
      const c = Si(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const y = A.findKey(i, c);
      (!y || i[y] === void 0 || f === !0 || f === void 0 && i[y] !== !1) && (i[y || u] = La(s));
    }
    const o = (s, u) => A.forEach(s, (f, c) => a(f, c, u));
    if (A.isPlainObject(t) || t instanceof this.constructor)
      o(t, r);
    else if (A.isString(t) && (t = t.trim()) && !ry(t))
      o(ey(t), r);
    else if (A.isHeaders(t))
      for (const [s, u] of t.entries())
        a(u, s, n);
    else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Si(t), t) {
      const n = A.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return ty(i);
        if (A.isFunction(r))
          return r.call(this, i, n);
        if (A.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Si(t), t) {
      const n = A.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Os(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = Si(o), o) {
        const s = A.findKey(n, o);
        s && (!r || Os(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return A.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Os(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return A.forEach(this, (i, a) => {
      const o = A.findKey(n, a);
      if (o) {
        r[o] = La(i), delete r[a];
        return;
      }
      const s = t ? ny(a) : String(a).trim();
      s !== a && delete r[a], r[s] = La(i), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && A.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[ju] = this[ju] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = Si(o);
      n[s] || (iy(i, o), n[s] = !0);
    }
    return A.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
ft.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(ft.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
A.freezeMethods(ft);
function _s(e, t) {
  const r = this || Qi, n = t || r, i = ft.from(n.headers);
  let a = n.data;
  return A.forEach(e, function(s) {
    a = s.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function Bf(e) {
  return !!(e && e.__CANCEL__);
}
function ai(e, t, r) {
  Z.call(this, e ?? "canceled", Z.ERR_CANCELED, t, r), this.name = "CanceledError";
}
A.inherits(ai, Z, {
  __CANCEL__: !0
});
function jf(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Z(
    "Request failed with status code " + r.status,
    [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ay(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function oy(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const f = Date.now(), c = n[a];
    o || (o = f), r[i] = u, n[i] = f;
    let y = a, m = 0;
    for (; y !== i; )
      m += r[y++], y = y % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), f - o < t)
      return;
    const S = c && f - c;
    return S ? Math.round(m * 1e3 / S) : void 0;
  };
}
function sy(e, t) {
  let r = 0, n = 1e3 / t, i, a;
  const o = (f, c = Date.now()) => {
    r = c, i = null, a && (clearTimeout(a), a = null), e.apply(null, f);
  };
  return [(...f) => {
    const c = Date.now(), y = c - r;
    y >= n ? o(f, c) : (i = f, a || (a = setTimeout(() => {
      a = null, o(i);
    }, n - y)));
  }, () => i && o(i)];
}
const Ka = (e, t, r = 3) => {
  let n = 0;
  const i = oy(50, 250);
  return sy((a) => {
    const o = a.loaded, s = a.lengthComputable ? a.total : void 0, u = o - n, f = i(u), c = o <= s;
    n = o;
    const y = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: u,
      rate: f || void 0,
      estimated: f && s && c ? (s - o) / f : void 0,
      event: a,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(y);
  }, r);
}, Uu = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Hu = (e) => (...t) => A.asap(() => e(...t)), ly = et.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, et.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(et.origin),
  et.navigator && /(msie|trident)/i.test(et.navigator.userAgent)
) : () => !0, uy = et.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, a) {
      const o = [e + "=" + encodeURIComponent(t)];
      A.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), A.isString(n) && o.push("path=" + n), A.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function cy(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fy(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Uf(e, t, r) {
  let n = !cy(t);
  return e && n || r == !1 ? fy(e, t) : t;
}
const Yu = (e) => e instanceof ft ? { ...e } : e;
function Tn(e, t) {
  t = t || {};
  const r = {};
  function n(f, c, y, m) {
    return A.isPlainObject(f) && A.isPlainObject(c) ? A.merge.call({ caseless: m }, f, c) : A.isPlainObject(c) ? A.merge({}, c) : A.isArray(c) ? c.slice() : c;
  }
  function i(f, c, y, m) {
    if (A.isUndefined(c)) {
      if (!A.isUndefined(f))
        return n(void 0, f, y, m);
    } else return n(f, c, y, m);
  }
  function a(f, c) {
    if (!A.isUndefined(c))
      return n(void 0, c);
  }
  function o(f, c) {
    if (A.isUndefined(c)) {
      if (!A.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, c);
  }
  function s(f, c, y) {
    if (y in t)
      return n(f, c);
    if (y in e)
      return n(void 0, f);
  }
  const u = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (f, c, y) => i(Yu(f), Yu(c), y, !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const y = u[c] || i, m = y(e[c], t[c], c);
    A.isUndefined(m) && y !== s || (r[c] = m);
  }), r;
}
const Hf = (e) => {
  const t = Tn({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: s } = t;
  t.headers = o = ft.from(o), t.url = Nf(Uf(t.baseURL, t.url), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let u;
  if (A.isFormData(r)) {
    if (et.hasStandardBrowserEnv || et.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((u = o.getContentType()) !== !1) {
      const [f, ...c] = u ? u.split(";").map((y) => y.trim()).filter(Boolean) : [];
      o.setContentType([f || "multipart/form-data", ...c].join("; "));
    }
  }
  if (et.hasStandardBrowserEnv && (n && A.isFunction(n) && (n = n(t)), n || n !== !1 && ly(t.url))) {
    const f = i && a && uy.read(a);
    f && o.set(i, f);
  }
  return t;
}, dy = typeof XMLHttpRequest < "u", py = dy && function(e) {
  return new Promise(function(r, n) {
    const i = Hf(e);
    let a = i.data;
    const o = ft.from(i.headers).normalize();
    let { responseType: s, onUploadProgress: u, onDownloadProgress: f } = i, c, y, m, S, h;
    function v() {
      S && S(), h && h(), i.cancelToken && i.cancelToken.unsubscribe(c), i.signal && i.signal.removeEventListener("abort", c);
    }
    let b = new XMLHttpRequest();
    b.open(i.method.toUpperCase(), i.url, !0), b.timeout = i.timeout;
    function E() {
      if (!b)
        return;
      const O = ft.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), w = {
        data: !s || s === "text" || s === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: O,
        config: e,
        request: b
      };
      jf(function(T) {
        r(T), v();
      }, function(T) {
        n(T), v();
      }, w), b = null;
    }
    "onloadend" in b ? b.onloadend = E : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, b.onabort = function() {
      b && (n(new Z("Request aborted", Z.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      n(new Z("Network Error", Z.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let p = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const w = i.transitional || Ff;
      i.timeoutErrorMessage && (p = i.timeoutErrorMessage), n(new Z(
        p,
        w.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED,
        e,
        b
      )), b = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in b && A.forEach(o.toJSON(), function(p, w) {
      b.setRequestHeader(w, p);
    }), A.isUndefined(i.withCredentials) || (b.withCredentials = !!i.withCredentials), s && s !== "json" && (b.responseType = i.responseType), f && ([m, h] = Ka(f, !0), b.addEventListener("progress", m)), u && b.upload && ([y, S] = Ka(u), b.upload.addEventListener("progress", y), b.upload.addEventListener("loadend", S)), (i.cancelToken || i.signal) && (c = (O) => {
      b && (n(!O || O.type ? new ai(null, e, b) : O), b.abort(), b = null);
    }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
    const x = ay(i.url);
    if (x && et.protocols.indexOf(x) === -1) {
      n(new Z("Unsupported protocol " + x + ":", Z.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(a || null);
  });
}, hy = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const a = function(f) {
      if (!i) {
        i = !0, s();
        const c = f instanceof Error ? f : this.reason;
        n.abort(c instanceof Z ? c : new ai(c instanceof Error ? c.message : c));
      }
    };
    let o = t && setTimeout(() => {
      o = null, a(new Z(`timeout ${t} of ms exceeded`, Z.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(a) : f.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", a));
    const { signal: u } = n;
    return u.unsubscribe = () => A.asap(s), u;
  }
}, my = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, yy = async function* (e, t) {
  for await (const r of vy(e))
    yield* my(r, t);
}, vy = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Vu = (e, t, r, n) => {
  const i = yy(e, t);
  let a = 0, o, s = (u) => {
    o || (o = !0, n && n(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: f, value: c } = await i.next();
        if (f) {
          s(), u.close();
          return;
        }
        let y = c.byteLength;
        if (r) {
          let m = a += y;
          r(m);
        }
        u.enqueue(new Uint8Array(c));
      } catch (f) {
        throw s(f), f;
      }
    },
    cancel(u) {
      return s(u), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, yo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Yf = yo && typeof ReadableStream == "function", gy = yo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Vf = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, by = Yf && Vf(() => {
  let e = !1;
  const t = new Request(et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Wu = 64 * 1024, fl = Yf && Vf(() => A.isReadableStream(new Response("").body)), Ja = {
  stream: fl && ((e) => e.body)
};
yo && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ja[t] && (Ja[t] = A.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new Z(`Response type '${t}' is not supported`, Z.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const wy = async (e) => {
  if (e == null)
    return 0;
  if (A.isBlob(e))
    return e.size;
  if (A.isSpecCompliantForm(e))
    return (await new Request(et.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (A.isArrayBufferView(e) || A.isArrayBuffer(e))
    return e.byteLength;
  if (A.isURLSearchParams(e) && (e = e + ""), A.isString(e))
    return (await gy(e)).byteLength;
}, Sy = async (e, t) => {
  const r = A.toFiniteNumber(e.getContentLength());
  return r ?? wy(t);
}, Oy = yo && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: i,
    cancelToken: a,
    timeout: o,
    onDownloadProgress: s,
    onUploadProgress: u,
    responseType: f,
    headers: c,
    withCredentials: y = "same-origin",
    fetchOptions: m
  } = Hf(e);
  f = f ? (f + "").toLowerCase() : "text";
  let S = hy([i, a && a.toAbortSignal()], o), h;
  const v = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let b;
  try {
    if (u && by && r !== "get" && r !== "head" && (b = await Sy(c, n)) !== 0) {
      let w = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), _;
      if (A.isFormData(n) && (_ = w.headers.get("content-type")) && c.setContentType(_), w.body) {
        const [T, k] = Uu(
          b,
          Ka(Hu(u))
        );
        n = Vu(w.body, Wu, T, k);
      }
    }
    A.isString(y) || (y = y ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    h = new Request(t, {
      ...m,
      signal: S,
      method: r.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: E ? y : void 0
    });
    let x = await fetch(h);
    const O = fl && (f === "stream" || f === "response");
    if (fl && (s || O && v)) {
      const w = {};
      ["status", "statusText", "headers"].forEach((C) => {
        w[C] = x[C];
      });
      const _ = A.toFiniteNumber(x.headers.get("content-length")), [T, k] = s && Uu(
        _,
        Ka(Hu(s), !0)
      ) || [];
      x = new Response(
        Vu(x.body, Wu, T, () => {
          k && k(), v && v();
        }),
        w
      );
    }
    f = f || "text";
    let p = await Ja[A.findKey(Ja, f) || "text"](x, e);
    return !O && v && v(), await new Promise((w, _) => {
      jf(w, _, {
        data: p,
        headers: ft.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: e,
        request: h
      });
    });
  } catch (E) {
    throw v && v(), E && E.name === "TypeError" && /fetch/i.test(E.message) ? Object.assign(
      new Z("Network Error", Z.ERR_NETWORK, e, h),
      {
        cause: E.cause || E
      }
    ) : Z.from(E, E && E.code, e, h);
  }
}), dl = {
  http: Fm,
  xhr: py,
  fetch: Oy
};
A.forEach(dl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const qu = (e) => `- ${e}`, _y = (e) => A.isFunction(e) || e === null || e === !1, Wf = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let o;
      if (n = r, !_y(r) && (n = dl[(o = String(r)).toLowerCase()], n === void 0))
        throw new Z(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(qu).join(`
`) : " " + qu(a[0]) : "as no adapter specified";
      throw new Z(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: dl
};
function Ts(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ai(null, e);
}
function Gu(e) {
  return Ts(e), e.headers = ft.from(e.headers), e.data = _s.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(e.adapter || Qi.adapter)(e).then(function(n) {
    return Ts(e), n.data = _s.call(
      e,
      e.transformResponse,
      n
    ), n.headers = ft.from(n.headers), n;
  }, function(n) {
    return Bf(n) || (Ts(e), n && n.response && (n.response.data = _s.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = ft.from(n.response.headers))), Promise.reject(n);
  });
}
const qf = "1.8.1", vo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  vo[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const zu = {};
vo.transitional = function(t, r, n) {
  function i(a, o) {
    return "[Axios v" + qf + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (t === !1)
      throw new Z(
        i(o, " has been removed" + (r ? " in " + r : "")),
        Z.ERR_DEPRECATED
      );
    return r && !zu[o] && (zu[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, o, s) : !0;
  };
};
vo.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Ty(e, t, r) {
  if (typeof e != "object")
    throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = t[a];
    if (o) {
      const s = e[a], u = s === void 0 || o(s, a, e);
      if (u !== !0)
        throw new Z("option " + a + " must be " + u, Z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Z("Unknown option " + a, Z.ERR_BAD_OPTION);
  }
}
const Na = {
  assertOptions: Ty,
  validators: vo
}, ur = Na.validators;
let bn = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Bu(),
      response: new Bu()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Tn(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Na.assertOptions(n, {
      silentJSONParsing: ur.transitional(ur.boolean),
      forcedJSONParsing: ur.transitional(ur.boolean),
      clarifyTimeoutError: ur.transitional(ur.boolean)
    }, !1), i != null && (A.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Na.assertOptions(i, {
      encode: ur.function,
      serialize: ur.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Na.assertOptions(r, {
      baseUrl: ur.spelling("baseURL"),
      withXsrfToken: ur.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && A.merge(
      a.common,
      a[r.method]
    );
    a && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete a[h];
      }
    ), r.headers = ft.concat(o, a);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (u = u && v.synchronous, s.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let c, y = 0, m;
    if (!u) {
      const h = [Gu.bind(this), void 0];
      for (h.unshift.apply(h, s), h.push.apply(h, f), m = h.length, c = Promise.resolve(r); y < m; )
        c = c.then(h[y++], h[y++]);
      return c;
    }
    m = s.length;
    let S = r;
    for (y = 0; y < m; ) {
      const h = s[y++], v = s[y++];
      try {
        S = h(S);
      } catch (b) {
        v.call(this, b);
        break;
      }
    }
    try {
      c = Gu.call(this, S);
    } catch (h) {
      return Promise.reject(h);
    }
    for (y = 0, m = f.length; y < m; )
      c = c.then(f[y++], f[y++]);
    return c;
  }
  getUri(t) {
    t = Tn(this.defaults, t);
    const r = Uf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Nf(r, t.params, t.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(t) {
  bn.prototype[t] = function(r, n) {
    return this.request(Tn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, o, s) {
      return this.request(Tn(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  bn.prototype[t] = r(), bn.prototype[t + "Form"] = r(!0);
});
let Ey = class Gf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const o = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, t(function(a, o, s) {
      n.reason || (n.reason = new ai(a, o, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Gf(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function xy(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Ay(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const pl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(pl).forEach(([e, t]) => {
  pl[t] = e;
});
function zf(e) {
  const t = new bn(e), r = Ef(bn.prototype.request, t);
  return A.extend(r, bn.prototype, t, { allOwnKeys: !0 }), A.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return zf(Tn(e, i));
  }, r;
}
const ke = zf(Qi);
ke.Axios = bn;
ke.CanceledError = ai;
ke.CancelToken = Ey;
ke.isCancel = Bf;
ke.VERSION = qf;
ke.toFormData = mo;
ke.AxiosError = Z;
ke.Cancel = ke.CanceledError;
ke.all = function(t) {
  return Promise.all(t);
};
ke.spread = xy;
ke.isAxiosError = Ay;
ke.mergeConfig = Tn;
ke.AxiosHeaders = ft;
ke.formToJSON = (e) => If(A.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = Wf.getAdapter;
ke.HttpStatusCode = pl;
ke.default = ke;
const {
  Axios: TE,
  AxiosError: EE,
  CanceledError: xE,
  isCancel: AE,
  CancelToken: PE,
  VERSION: DE,
  all: kE,
  Cancel: ME,
  isAxiosError: CE,
  spread: RE,
  toFormData: $E,
  AxiosHeaders: LE,
  HttpStatusCode: NE,
  formToJSON: FE,
  getAdapter: IE,
  mergeConfig: BE
} = ke;
var Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Py(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Dy(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var ky = function(t) {
  return My(t) && !Cy(t);
};
function My(e) {
  return !!e && typeof e == "object";
}
function Cy(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Ly(e);
}
var Ry = typeof Symbol == "function" && Symbol.for, $y = Ry ? Symbol.for("react.element") : 60103;
function Ly(e) {
  return e.$$typeof === $y;
}
function Ny(e) {
  return Array.isArray(e) ? [] : {};
}
function Bi(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? zn(Ny(e), e, t) : e;
}
function Fy(e, t, r) {
  return e.concat(t).map(function(n) {
    return Bi(n, r);
  });
}
function Iy(e, t) {
  if (!t.customMerge)
    return zn;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : zn;
}
function By(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Ku(e) {
  return Object.keys(e).concat(By(e));
}
function Kf(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function jy(e, t) {
  return Kf(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Uy(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Ku(e).forEach(function(i) {
    n[i] = Bi(e[i], r);
  }), Ku(t).forEach(function(i) {
    jy(e, i) || (Kf(e, i) && r.isMergeableObject(t[i]) ? n[i] = Iy(i, r)(e[i], t[i], r) : n[i] = Bi(t[i], r));
  }), n;
}
function zn(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Fy, r.isMergeableObject = r.isMergeableObject || ky, r.cloneUnlessOtherwiseSpecified = Bi;
  var n = Array.isArray(t), i = Array.isArray(e), a = n === i;
  return a ? n ? r.arrayMerge(e, t, r) : Uy(e, t, r) : Bi(t, r);
}
zn.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return zn(n, i, r);
  }, {});
};
var Hy = zn, Yy = Hy;
const Vy = /* @__PURE__ */ Py(Yy);
var oi = TypeError;
const Wy = {}, qy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wy
}, Symbol.toStringTag, { value: "Module" })), Gy = /* @__PURE__ */ Dy(qy);
var Yl = typeof Map == "function" && Map.prototype, Es = Object.getOwnPropertyDescriptor && Yl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Xa = Yl && Es && typeof Es.get == "function" ? Es.get : null, Ju = Yl && Map.prototype.forEach, Vl = typeof Set == "function" && Set.prototype, xs = Object.getOwnPropertyDescriptor && Vl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Za = Vl && xs && typeof xs.get == "function" ? xs.get : null, Xu = Vl && Set.prototype.forEach, zy = typeof WeakMap == "function" && WeakMap.prototype, Di = zy ? WeakMap.prototype.has : null, Ky = typeof WeakSet == "function" && WeakSet.prototype, ki = Ky ? WeakSet.prototype.has : null, Jy = typeof WeakRef == "function" && WeakRef.prototype, Zu = Jy ? WeakRef.prototype.deref : null, Xy = Boolean.prototype.valueOf, Zy = Object.prototype.toString, Qy = Function.prototype.toString, ev = String.prototype.match, Wl = String.prototype.slice, Xr = String.prototype.replace, tv = String.prototype.toUpperCase, Qu = String.prototype.toLowerCase, Jf = RegExp.prototype.test, ec = Array.prototype.concat, dr = Array.prototype.join, rv = Array.prototype.slice, tc = Math.floor, hl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, As = Object.getOwnPropertySymbols, ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Kn = typeof Symbol == "function" && typeof Symbol.iterator == "object", Mi = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Kn || !0) ? Symbol.toStringTag : null, Xf = Object.prototype.propertyIsEnumerable, rc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function nc(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Jf.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -tc(-e) : tc(e);
    if (n !== e) {
      var i = String(n), a = Wl.call(t, i.length + 1);
      return Xr.call(i, r, "$&_") + "." + Xr.call(Xr.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Xr.call(t, r, "$&_");
}
var yl = Gy, ic = yl.custom, ac = ed(ic) ? ic : null, Zf = {
  __proto__: null,
  double: '"',
  single: "'"
}, nv = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, go = function e(t, r, n, i) {
  var a = r || {};
  if (kr(a, "quoteStyle") && !kr(Zf, a.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (kr(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = kr(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (kr(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (kr(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return rd(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var u = String(t);
    return s ? nc(t, u) : u;
  }
  if (typeof t == "bigint") {
    var f = String(t) + "n";
    return s ? nc(t, f) : f;
  }
  var c = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof t == "object")
    return vl(t) ? "[Array]" : "[Object]";
  var y = Sv(a, n);
  if (typeof i > "u")
    i = [];
  else if (td(i, t) >= 0)
    return "[Circular]";
  function m(q, ue, re) {
    if (ue && (i = rv.call(i), i.push(ue)), re) {
      var ne = {
        depth: a.depth
      };
      return kr(a, "quoteStyle") && (ne.quoteStyle = a.quoteStyle), e(q, ne, n + 1, i);
    }
    return e(q, a, n + 1, i);
  }
  if (typeof t == "function" && !oc(t)) {
    var S = dv(t), h = Ta(t, m);
    return "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (h.length > 0 ? " { " + dr.call(h, ", ") + " }" : "");
  }
  if (ed(t)) {
    var v = Kn ? Xr.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : ml.call(t);
    return typeof t == "object" && !Kn ? Oi(v) : v;
  }
  if (gv(t)) {
    for (var b = "<" + Qu.call(String(t.nodeName)), E = t.attributes || [], x = 0; x < E.length; x++)
      b += " " + E[x].name + "=" + Qf(iv(E[x].value), "double", a);
    return b += ">", t.childNodes && t.childNodes.length && (b += "..."), b += "</" + Qu.call(String(t.nodeName)) + ">", b;
  }
  if (vl(t)) {
    if (t.length === 0)
      return "[]";
    var O = Ta(t, m);
    return y && !wv(O) ? "[" + gl(O, y) + "]" : "[ " + dr.call(O, ", ") + " ]";
  }
  if (ov(t)) {
    var p = Ta(t, m);
    return !("cause" in Error.prototype) && "cause" in t && !Xf.call(t, "cause") ? "{ [" + String(t) + "] " + dr.call(ec.call("[cause]: " + m(t.cause), p), ", ") + " }" : p.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + dr.call(p, ", ") + " }";
  }
  if (typeof t == "object" && o) {
    if (ac && typeof t[ac] == "function" && yl)
      return yl(t, { depth: c - n });
    if (o !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (pv(t)) {
    var w = [];
    return Ju && Ju.call(t, function(q, ue) {
      w.push(m(ue, t, !0) + " => " + m(q, t));
    }), sc("Map", Xa.call(t), w, y);
  }
  if (yv(t)) {
    var _ = [];
    return Xu && Xu.call(t, function(q) {
      _.push(m(q, t));
    }), sc("Set", Za.call(t), _, y);
  }
  if (hv(t))
    return Ps("WeakMap");
  if (vv(t))
    return Ps("WeakSet");
  if (mv(t))
    return Ps("WeakRef");
  if (lv(t))
    return Oi(m(Number(t)));
  if (cv(t))
    return Oi(m(hl.call(t)));
  if (uv(t))
    return Oi(Xy.call(t));
  if (sv(t))
    return Oi(m(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof Yt < "u" && t === Yt)
    return "{ [object globalThis] }";
  if (!av(t) && !oc(t)) {
    var T = Ta(t, m), k = rc ? rc(t) === Object.prototype : t instanceof Object || t.constructor === Object, C = t instanceof Object ? "" : "null prototype", R = !k && Mi && Object(t) === t && Mi in t ? Wl.call(tn(t), 8, -1) : C ? "Object" : "", z = k || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", V = z + (R || C ? "[" + dr.call(ec.call([], R || [], C || []), ": ") + "] " : "");
    return T.length === 0 ? V + "{}" : y ? V + "{" + gl(T, y) + "}" : V + "{ " + dr.call(T, ", ") + " }";
  }
  return String(t);
};
function Qf(e, t, r) {
  var n = r.quoteStyle || t, i = Zf[n];
  return i + e + i;
}
function iv(e) {
  return Xr.call(String(e), /"/g, "&quot;");
}
function xn(e) {
  return !Mi || !(typeof e == "object" && (Mi in e || typeof e[Mi] < "u"));
}
function vl(e) {
  return tn(e) === "[object Array]" && xn(e);
}
function av(e) {
  return tn(e) === "[object Date]" && xn(e);
}
function oc(e) {
  return tn(e) === "[object RegExp]" && xn(e);
}
function ov(e) {
  return tn(e) === "[object Error]" && xn(e);
}
function sv(e) {
  return tn(e) === "[object String]" && xn(e);
}
function lv(e) {
  return tn(e) === "[object Number]" && xn(e);
}
function uv(e) {
  return tn(e) === "[object Boolean]" && xn(e);
}
function ed(e) {
  if (Kn)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !ml)
    return !1;
  try {
    return ml.call(e), !0;
  } catch {
  }
  return !1;
}
function cv(e) {
  if (!e || typeof e != "object" || !hl)
    return !1;
  try {
    return hl.call(e), !0;
  } catch {
  }
  return !1;
}
var fv = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function kr(e, t) {
  return fv.call(e, t);
}
function tn(e) {
  return Zy.call(e);
}
function dv(e) {
  if (e.name)
    return e.name;
  var t = ev.call(Qy.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function td(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function pv(e) {
  if (!Xa || !e || typeof e != "object")
    return !1;
  try {
    Xa.call(e);
    try {
      Za.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function hv(e) {
  if (!Di || !e || typeof e != "object")
    return !1;
  try {
    Di.call(e, Di);
    try {
      ki.call(e, ki);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function mv(e) {
  if (!Zu || !e || typeof e != "object")
    return !1;
  try {
    return Zu.call(e), !0;
  } catch {
  }
  return !1;
}
function yv(e) {
  if (!Za || !e || typeof e != "object")
    return !1;
  try {
    Za.call(e);
    try {
      Xa.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function vv(e) {
  if (!ki || !e || typeof e != "object")
    return !1;
  try {
    ki.call(e, ki);
    try {
      Di.call(e, Di);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function gv(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function rd(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return rd(Wl.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = nv[t.quoteStyle || "single"];
  i.lastIndex = 0;
  var a = Xr.call(Xr.call(e, i, "\\$1"), /[\x00-\x1f]/g, bv);
  return Qf(a, "single", t);
}
function bv(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + tv.call(t.toString(16));
}
function Oi(e) {
  return "Object(" + e + ")";
}
function Ps(e) {
  return e + " { ? }";
}
function sc(e, t, r, n) {
  var i = n ? gl(r, n) : dr.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function wv(e) {
  for (var t = 0; t < e.length; t++)
    if (td(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function Sv(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = dr.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: dr.call(Array(t + 1), r)
  };
}
function gl(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + dr.call(e, "," + r) + `
` + t.prev;
}
function Ta(e, t) {
  var r = vl(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = kr(e, i) ? t(e[i], e) : "";
  }
  var a = typeof As == "function" ? As(e) : [], o;
  if (Kn) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var u in e)
    kr(e, u) && (r && String(Number(u)) === u && u < e.length || Kn && o["$" + u] instanceof Symbol || (Jf.call(/[^\w$]/, u) ? n.push(t(u, e) + ": " + t(e[u], e)) : n.push(u + ": " + t(e[u], e))));
  if (typeof As == "function")
    for (var f = 0; f < a.length; f++)
      Xf.call(e, a[f]) && n.push("[" + t(a[f]) + "]: " + t(e[a[f]], e));
  return n;
}
var Ov = go, _v = oi, bo = function(e, t, r) {
  for (var n = e, i; (i = n.next) != null; n = i)
    if (i.key === t)
      return n.next = i.next, r || (i.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = i), i;
}, Tv = function(e, t) {
  if (e) {
    var r = bo(e, t);
    return r && r.value;
  }
}, Ev = function(e, t, r) {
  var n = bo(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, xv = function(e, t) {
  return e ? !!bo(e, t) : !1;
}, Av = function(e, t) {
  if (e)
    return bo(e, t, !0);
}, Pv = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new _v("Side channel does not contain " + Ov(n));
    },
    delete: function(n) {
      var i = t && t.next, a = Av(t, n);
      return a && i && i === a && (t = void 0), !!a;
    },
    get: function(n) {
      return Tv(t, n);
    },
    has: function(n) {
      return xv(t, n);
    },
    set: function(n, i) {
      t || (t = {
        next: void 0
      }), Ev(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        i
      );
    }
  };
  return r;
}, nd = Object, Dv = Error, kv = EvalError, Mv = RangeError, Cv = ReferenceError, Rv = SyntaxError, $v = URIError, Lv = Math.abs, Nv = Math.floor, Fv = Math.max, Iv = Math.min, Bv = Math.pow, jv = Math.round, Uv = Number.isNaN || function(t) {
  return t !== t;
}, Hv = Uv, Yv = function(t) {
  return Hv(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, Vv = Object.getOwnPropertyDescriptor, Fa = Vv;
if (Fa)
  try {
    Fa([], "length");
  } catch {
    Fa = null;
  }
var id = Fa, Ia = Object.defineProperty || !1;
if (Ia)
  try {
    Ia({}, "a", { value: 1 });
  } catch {
    Ia = !1;
  }
var Wv = Ia, Ds, lc;
function qv() {
  return lc || (lc = 1, Ds = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var a in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== i || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Ds;
}
var ks, uc;
function Gv() {
  if (uc) return ks;
  uc = 1;
  var e = typeof Symbol < "u" && Symbol, t = qv();
  return ks = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, ks;
}
var Ms, cc;
function ad() {
  return cc || (cc = 1, Ms = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ms;
}
var Cs, fc;
function od() {
  if (fc) return Cs;
  fc = 1;
  var e = nd;
  return Cs = e.getPrototypeOf || null, Cs;
}
var zv = "Function.prototype.bind called on incompatible ", Kv = Object.prototype.toString, Jv = Math.max, Xv = "[object Function]", dc = function(t, r) {
  for (var n = [], i = 0; i < t.length; i += 1)
    n[i] = t[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + t.length] = r[a];
  return n;
}, Zv = function(t, r) {
  for (var n = [], i = r, a = 0; i < t.length; i += 1, a += 1)
    n[a] = t[i];
  return n;
}, Qv = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, eg = function(t) {
  var r = this;
  if (typeof r != "function" || Kv.apply(r) !== Xv)
    throw new TypeError(zv + r);
  for (var n = Zv(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var c = r.apply(
        this,
        dc(n, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return r.apply(
      t,
      dc(n, arguments)
    );
  }, o = Jv(0, r.length - n.length), s = [], u = 0; u < o; u++)
    s[u] = "$" + u;
  if (i = Function("binder", "return function (" + Qv(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var f = function() {
    };
    f.prototype = r.prototype, i.prototype = new f(), f.prototype = null;
  }
  return i;
}, tg = eg, wo = Function.prototype.bind || tg, ql = Function.prototype.call, Rs, pc;
function sd() {
  return pc || (pc = 1, Rs = Function.prototype.apply), Rs;
}
var rg = typeof Reflect < "u" && Reflect && Reflect.apply, ng = wo, ig = sd(), ag = ql, og = rg, sg = og || ng.call(ag, ig), lg = wo, ug = oi, cg = ql, fg = sg, ld = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new ug("a function is required");
  return fg(lg, cg, t);
}, $s, hc;
function dg() {
  if (hc) return $s;
  hc = 1;
  var e = ld, t = id, r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (o) {
    if (!o || typeof o != "object" || !("code" in o) || o.code !== "ERR_PROTO_ACCESS")
      throw o;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, a = i.getPrototypeOf;
  return $s = n && typeof n.get == "function" ? e([n.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return a(s == null ? s : i(s));
    }
  ) : !1, $s;
}
var Ls, mc;
function pg() {
  if (mc) return Ls;
  mc = 1;
  var e = ad(), t = od(), r = dg();
  return Ls = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Ls;
}
var Ns, yc;
function hg() {
  if (yc) return Ns;
  yc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = wo;
  return Ns = r.call(e, t), Ns;
}
var oe, mg = nd, yg = Dv, vg = kv, gg = Mv, bg = Cv, Jn = Rv, Yn = oi, wg = $v, Sg = Lv, Og = Nv, _g = Fv, Tg = Iv, Eg = Bv, xg = jv, Ag = Yv, ud = Function, Fs = function(e) {
  try {
    return ud('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, ji = id, Pg = Wv, Is = function() {
  throw new Yn();
}, Dg = ji ? function() {
  try {
    return arguments.callee, Is;
  } catch {
    try {
      return ji(arguments, "callee").get;
    } catch {
      return Is;
    }
  }
}() : Is, Ln = Gv()(), He = pg(), kg = od(), Mg = ad(), cd = sd(), ea = ql, jn = {}, Cg = typeof Uint8Array > "u" || !He ? oe : He(Uint8Array), wn = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? oe : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? oe : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ln && He ? He([][Symbol.iterator]()) : oe,
  "%AsyncFromSyncIteratorPrototype%": oe,
  "%AsyncFunction%": jn,
  "%AsyncGenerator%": jn,
  "%AsyncGeneratorFunction%": jn,
  "%AsyncIteratorPrototype%": jn,
  "%Atomics%": typeof Atomics > "u" ? oe : Atomics,
  "%BigInt%": typeof BigInt > "u" ? oe : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? oe : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? oe : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? oe : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": yg,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": vg,
  "%Float16Array%": typeof Float16Array > "u" ? oe : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? oe : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? oe : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? oe : FinalizationRegistry,
  "%Function%": ud,
  "%GeneratorFunction%": jn,
  "%Int8Array%": typeof Int8Array > "u" ? oe : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? oe : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? oe : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ln && He ? He(He([][Symbol.iterator]())) : oe,
  "%JSON%": typeof JSON == "object" ? JSON : oe,
  "%Map%": typeof Map > "u" ? oe : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ln || !He ? oe : He((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": mg,
  "%Object.getOwnPropertyDescriptor%": ji,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? oe : Promise,
  "%Proxy%": typeof Proxy > "u" ? oe : Proxy,
  "%RangeError%": gg,
  "%ReferenceError%": bg,
  "%Reflect%": typeof Reflect > "u" ? oe : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? oe : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ln || !He ? oe : He((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? oe : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ln && He ? He(""[Symbol.iterator]()) : oe,
  "%Symbol%": Ln ? Symbol : oe,
  "%SyntaxError%": Jn,
  "%ThrowTypeError%": Dg,
  "%TypedArray%": Cg,
  "%TypeError%": Yn,
  "%Uint8Array%": typeof Uint8Array > "u" ? oe : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? oe : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? oe : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? oe : Uint32Array,
  "%URIError%": wg,
  "%WeakMap%": typeof WeakMap > "u" ? oe : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? oe : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? oe : WeakSet,
  "%Function.prototype.call%": ea,
  "%Function.prototype.apply%": cd,
  "%Object.defineProperty%": Pg,
  "%Object.getPrototypeOf%": kg,
  "%Math.abs%": Sg,
  "%Math.floor%": Og,
  "%Math.max%": _g,
  "%Math.min%": Tg,
  "%Math.pow%": Eg,
  "%Math.round%": xg,
  "%Math.sign%": Ag,
  "%Reflect.getPrototypeOf%": Mg
};
if (He)
  try {
    null.error;
  } catch (e) {
    var Rg = He(He(e));
    wn["%Error.prototype%"] = Rg;
  }
var $g = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Fs("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Fs("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Fs("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && He && (r = He(i.prototype));
  }
  return wn[t] = r, r;
}, vc = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ta = wo, Qa = hg(), Lg = ta.call(ea, Array.prototype.concat), Ng = ta.call(cd, Array.prototype.splice), gc = ta.call(ea, String.prototype.replace), eo = ta.call(ea, String.prototype.slice), Fg = ta.call(ea, RegExp.prototype.exec), Ig = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Bg = /\\(\\)?/g, jg = function(t) {
  var r = eo(t, 0, 1), n = eo(t, -1);
  if (r === "%" && n !== "%")
    throw new Jn("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Jn("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return gc(t, Ig, function(a, o, s, u) {
    i[i.length] = s ? gc(u, Bg, "$1") : o || a;
  }), i;
}, Ug = function(t, r) {
  var n = t, i;
  if (Qa(vc, n) && (i = vc[n], n = "%" + i[0] + "%"), Qa(wn, n)) {
    var a = wn[n];
    if (a === jn && (a = $g(n)), typeof a > "u" && !r)
      throw new Yn("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Jn("intrinsic " + t + " does not exist!");
}, Gl = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Yn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Yn('"allowMissing" argument must be a boolean');
  if (Fg(/^%?[^%]*%?$/, t) === null)
    throw new Jn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = jg(t), i = n.length > 0 ? n[0] : "", a = Ug("%" + i + "%", r), o = a.name, s = a.value, u = !1, f = a.alias;
  f && (i = f[0], Ng(n, Lg([0, 1], f)));
  for (var c = 1, y = !0; c < n.length; c += 1) {
    var m = n[c], S = eo(m, 0, 1), h = eo(m, -1);
    if ((S === '"' || S === "'" || S === "`" || h === '"' || h === "'" || h === "`") && S !== h)
      throw new Jn("property names with quotes must have matching quotes");
    if ((m === "constructor" || !y) && (u = !0), i += "." + m, o = "%" + i + "%", Qa(wn, o))
      s = wn[o];
    else if (s != null) {
      if (!(m in s)) {
        if (!r)
          throw new Yn("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (ji && c + 1 >= n.length) {
        var v = ji(s, m);
        y = !!v, y && "get" in v && !("originalValue" in v.get) ? s = v.get : s = s[m];
      } else
        y = Qa(s, m), s = s[m];
      y && !u && (wn[o] = s);
    }
  }
  return s;
}, fd = Gl, dd = ld, Hg = dd([fd("%String.prototype.indexOf%")]), pd = function(t, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    fd(t, !!r)
  );
  return typeof n == "function" && Hg(t, ".prototype.") > -1 ? dd(
    /** @type {const} */
    [n]
  ) : n;
}, Yg = Gl, ra = pd, Vg = go, Wg = oi, bc = Yg("%Map%", !0), qg = ra("Map.prototype.get", !0), Gg = ra("Map.prototype.set", !0), zg = ra("Map.prototype.has", !0), Kg = ra("Map.prototype.delete", !0), Jg = ra("Map.prototype.size", !0), hd = !!bc && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new Wg("Side channel does not contain " + Vg(n));
    },
    delete: function(n) {
      if (t) {
        var i = Kg(t, n);
        return Jg(t) === 0 && (t = void 0), i;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return qg(t, n);
    },
    has: function(n) {
      return t ? zg(t, n) : !1;
    },
    set: function(n, i) {
      t || (t = new bc()), Gg(t, n, i);
    }
  };
  return r;
}, Xg = Gl, So = pd, Zg = go, Ea = hd, Qg = oi, Nn = Xg("%WeakMap%", !0), eb = So("WeakMap.prototype.get", !0), tb = So("WeakMap.prototype.set", !0), rb = So("WeakMap.prototype.has", !0), nb = So("WeakMap.prototype.delete", !0), ib = Nn ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(i) {
        if (!n.has(i))
          throw new Qg("Side channel does not contain " + Zg(i));
      },
      delete: function(i) {
        if (Nn && i && (typeof i == "object" || typeof i == "function")) {
          if (t)
            return nb(t, i);
        } else if (Ea && r)
          return r.delete(i);
        return !1;
      },
      get: function(i) {
        return Nn && i && (typeof i == "object" || typeof i == "function") && t ? eb(t, i) : r && r.get(i);
      },
      has: function(i) {
        return Nn && i && (typeof i == "object" || typeof i == "function") && t ? rb(t, i) : !!r && r.has(i);
      },
      set: function(i, a) {
        Nn && i && (typeof i == "object" || typeof i == "function") ? (t || (t = new Nn()), tb(t, i, a)) : Ea && (r || (r = Ea()), r.set(i, a));
      }
    };
    return n;
  }
) : Ea, ab = oi, ob = go, sb = Pv, lb = hd, ub = ib, cb = ub || lb || sb, fb = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new ab("Side channel does not contain " + ob(n));
    },
    delete: function(n) {
      return !!t && t.delete(n);
    },
    get: function(n) {
      return t && t.get(n);
    },
    has: function(n) {
      return !!t && t.has(n);
    },
    set: function(n, i) {
      t || (t = cb()), t.set(n, i);
    }
  };
  return r;
}, db = String.prototype.replace, pb = /%20/g, Bs = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, zl = {
  default: Bs.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return db.call(e, pb, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Bs.RFC1738,
  RFC3986: Bs.RFC3986
}, hb = zl, js = Object.prototype.hasOwnProperty, pn = Array.isArray, cr = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), mb = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (pn(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, md = function(t, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, yb = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object" && typeof r != "function") {
    if (pn(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !js.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return pn(t) && !pn(r) && (i = md(t, n)), pn(t) && pn(r) ? (r.forEach(function(a, o) {
    if (js.call(t, o)) {
      var s = t[o];
      s && typeof s == "object" && a && typeof a == "object" ? t[o] = e(s, a, n) : t.push(a);
    } else
      t[o] = a;
  }), t) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return js.call(a, o) ? a[o] = e(a[o], s, n) : a[o] = s, a;
  }, i);
}, vb = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, gb = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Us = 1024, bb = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var o = t;
  if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(S) {
      return "%26%23" + parseInt(S.slice(2), 16) + "%3B";
    });
  for (var s = "", u = 0; u < o.length; u += Us) {
    for (var f = o.length >= Us ? o.slice(u, u + Us) : o, c = [], y = 0; y < f.length; ++y) {
      var m = f.charCodeAt(y);
      if (m === 45 || m === 46 || m === 95 || m === 126 || m >= 48 && m <= 57 || m >= 65 && m <= 90 || m >= 97 && m <= 122 || a === hb.RFC1738 && (m === 40 || m === 41)) {
        c[c.length] = f.charAt(y);
        continue;
      }
      if (m < 128) {
        c[c.length] = cr[m];
        continue;
      }
      if (m < 2048) {
        c[c.length] = cr[192 | m >> 6] + cr[128 | m & 63];
        continue;
      }
      if (m < 55296 || m >= 57344) {
        c[c.length] = cr[224 | m >> 12] + cr[128 | m >> 6 & 63] + cr[128 | m & 63];
        continue;
      }
      y += 1, m = 65536 + ((m & 1023) << 10 | f.charCodeAt(y) & 1023), c[c.length] = cr[240 | m >> 18] + cr[128 | m >> 12 & 63] + cr[128 | m >> 6 & 63] + cr[128 | m & 63];
    }
    s += c.join("");
  }
  return s;
}, wb = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], o = a.obj[a.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
      var f = s[u], c = o[f];
      typeof c == "object" && c !== null && n.indexOf(c) === -1 && (r.push({ obj: o, prop: f }), n.push(c));
    }
  return mb(r), t;
}, Sb = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Ob = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, _b = function(t, r) {
  return [].concat(t, r);
}, Tb = function(t, r) {
  if (pn(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, yd = {
  arrayToObject: md,
  assign: vb,
  combine: _b,
  compact: wb,
  decode: gb,
  encode: bb,
  isBuffer: Ob,
  isRegExp: Sb,
  maybeMap: Tb,
  merge: yb
}, vd = fb, Ba = yd, Ci = zl, Eb = Object.prototype.hasOwnProperty, gd = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, fr = Array.isArray, xb = Array.prototype.push, bd = function(e, t) {
  xb.apply(e, fr(t) ? t : [t]);
}, Ab = Date.prototype.toISOString, wc = Ci.default, je = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  commaRoundTrip: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Ba.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: wc,
  formatter: Ci.formatters[wc],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Ab.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Pb = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Hs = {}, Db = function e(t, r, n, i, a, o, s, u, f, c, y, m, S, h, v, b, E, x) {
  for (var O = t, p = x, w = 0, _ = !1; (p = p.get(Hs)) !== void 0 && !_; ) {
    var T = p.get(t);
    if (w += 1, typeof T < "u") {
      if (T === w)
        throw new RangeError("Cyclic object value");
      _ = !0;
    }
    typeof p.get(Hs) > "u" && (w = 0);
  }
  if (typeof c == "function" ? O = c(r, O) : O instanceof Date ? O = S(O) : n === "comma" && fr(O) && (O = Ba.maybeMap(O, function(K) {
    return K instanceof Date ? S(K) : K;
  })), O === null) {
    if (o)
      return f && !b ? f(r, je.encoder, E, "key", h) : r;
    O = "";
  }
  if (Pb(O) || Ba.isBuffer(O)) {
    if (f) {
      var k = b ? r : f(r, je.encoder, E, "key", h);
      return [v(k) + "=" + v(f(O, je.encoder, E, "value", h))];
    }
    return [v(r) + "=" + v(String(O))];
  }
  var C = [];
  if (typeof O > "u")
    return C;
  var R;
  if (n === "comma" && fr(O))
    b && f && (O = Ba.maybeMap(O, f)), R = [{ value: O.length > 0 ? O.join(",") || null : void 0 }];
  else if (fr(c))
    R = c;
  else {
    var z = Object.keys(O);
    R = y ? z.sort(y) : z;
  }
  var V = u ? String(r).replace(/\./g, "%2E") : String(r), q = i && fr(O) && O.length === 1 ? V + "[]" : V;
  if (a && fr(O) && O.length === 0)
    return q + "[]";
  for (var ue = 0; ue < R.length; ++ue) {
    var re = R[ue], ne = typeof re == "object" && re && typeof re.value < "u" ? re.value : O[re];
    if (!(s && ne === null)) {
      var ye = m && u ? String(re).replace(/\./g, "%2E") : String(re), Oe = fr(O) ? typeof n == "function" ? n(q, ye) : q : q + (m ? "." + ye : "[" + ye + "]");
      x.set(t, w);
      var Le = vd();
      Le.set(Hs, x), bd(C, e(
        ne,
        Oe,
        n,
        i,
        a,
        o,
        s,
        u,
        n === "comma" && b && fr(O) ? null : f,
        c,
        y,
        m,
        S,
        h,
        v,
        b,
        E,
        Le
      ));
    }
  }
  return C;
}, kb = function(t) {
  if (!t)
    return je;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || je.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Ci.default;
  if (typeof t.format < "u") {
    if (!Eb.call(Ci.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = Ci.formatters[n], a = je.filter;
  (typeof t.filter == "function" || fr(t.filter)) && (a = t.filter);
  var o;
  if (t.arrayFormat in gd ? o = t.arrayFormat : "indices" in t ? o = t.indices ? "indices" : "repeat" : o = je.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : je.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : je.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : je.allowEmptyArrays,
    arrayFormat: o,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : je.charsetSentinel,
    commaRoundTrip: !!t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? je.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : je.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : je.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : je.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : je.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : je.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : je.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : je.strictNullHandling
  };
}, Mb = function(e, t) {
  var r = e, n = kb(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : fr(n.filter) && (a = n.filter, i = a);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s = gd[n.arrayFormat], u = s === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var f = vd(), c = 0; c < i.length; ++c) {
    var y = i[c], m = r[y];
    n.skipNulls && m === null || bd(o, Db(
      m,
      y,
      s,
      u,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      f
    ));
  }
  var S = o.join(n.delimiter), h = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), S.length > 0 ? h + S : "";
}, En = yd, bl = Object.prototype.hasOwnProperty, Sc = Array.isArray, Pe = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: En.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1,
  throwOnLimitExceeded: !1
}, Cb = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, wd = function(e, t, r) {
  if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1)
    return e.split(",");
  if (t.throwOnLimitExceeded && r >= t.arrayLimit)
    throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return e;
}, Rb = "utf8=%26%2310003%3B", $b = "utf8=%E2%9C%93", Lb = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(
    r.delimiter,
    r.throwOnLimitExceeded ? a + 1 : a
  );
  if (r.throwOnLimitExceeded && o.length > a)
    throw new RangeError("Parameter limit exceeded. Only " + a + " parameter" + (a === 1 ? "" : "s") + " allowed.");
  var s = -1, u, f = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === $b ? f = "utf-8" : o[u] === Rb && (f = "iso-8859-1"), s = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== s) {
      var c = o[u], y = c.indexOf("]="), m = y === -1 ? c.indexOf("=") : y + 1, S, h;
      m === -1 ? (S = r.decoder(c, Pe.decoder, f, "key"), h = r.strictNullHandling ? null : "") : (S = r.decoder(c.slice(0, m), Pe.decoder, f, "key"), h = En.maybeMap(
        wd(
          c.slice(m + 1),
          r,
          Sc(n[S]) ? n[S].length : 0
        ),
        function(b) {
          return r.decoder(b, Pe.decoder, f, "value");
        }
      )), h && r.interpretNumericEntities && f === "iso-8859-1" && (h = Cb(String(h))), c.indexOf("[]=") > -1 && (h = Sc(h) ? [h] : h);
      var v = bl.call(n, S);
      v && r.duplicates === "combine" ? n[S] = En.combine(n[S], h) : (!v || r.duplicates === "last") && (n[S] = h);
    }
  return n;
}, Nb = function(e, t, r, n) {
  var i = 0;
  if (e.length > 0 && e[e.length - 1] === "[]") {
    var a = e.slice(0, -1).join("");
    i = Array.isArray(t) && t[a] ? t[a].length : 0;
  }
  for (var o = n ? t : wd(t, r, i), s = e.length - 1; s >= 0; --s) {
    var u, f = e[s];
    if (f === "[]" && r.parseArrays)
      u = r.allowEmptyArrays && (o === "" || r.strictNullHandling && o === null) ? [] : En.combine([], o);
    else {
      u = r.plainObjects ? { __proto__: null } : {};
      var c = f.charAt(0) === "[" && f.charAt(f.length - 1) === "]" ? f.slice(1, -1) : f, y = r.decodeDotInKeys ? c.replace(/%2E/g, ".") : c, m = parseInt(y, 10);
      !r.parseArrays && y === "" ? u = { 0: o } : !isNaN(m) && f !== y && String(m) === y && m >= 0 && r.parseArrays && m <= r.arrayLimit ? (u = [], u[m] = o) : y !== "__proto__" && (u[y] = o);
    }
    o = u;
  }
  return o;
}, Fb = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, u = n.depth > 0 && o.exec(a), f = u ? a.slice(0, u.index) : a, c = [];
    if (f) {
      if (!n.plainObjects && bl.call(Object.prototype, f) && !n.allowPrototypes)
        return;
      c.push(f);
    }
    for (var y = 0; n.depth > 0 && (u = s.exec(a)) !== null && y < n.depth; ) {
      if (y += 1, !n.plainObjects && bl.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      c.push(u[1]);
    }
    if (u) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      c.push("[" + a.slice(u.index) + "]");
    }
    return Nb(c, r, n, i);
  }
}, Ib = function(t) {
  if (!t)
    return Pe;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  if (typeof t.throwOnLimitExceeded < "u" && typeof t.throwOnLimitExceeded != "boolean")
    throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  var r = typeof t.charset > "u" ? Pe.charset : t.charset, n = typeof t.duplicates > "u" ? Pe.duplicates : t.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var i = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : Pe.allowDots : !!t.allowDots;
  return {
    allowDots: i,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : Pe.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Pe.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Pe.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Pe.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Pe.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : Pe.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : Pe.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : Pe.decoder,
    delimiter: typeof t.delimiter == "string" || En.isRegExp(t.delimiter) ? t.delimiter : Pe.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Pe.depth,
    duplicates: n,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Pe.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Pe.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Pe.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : Pe.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Pe.strictNullHandling,
    throwOnLimitExceeded: typeof t.throwOnLimitExceeded == "boolean" ? t.throwOnLimitExceeded : !1
  };
}, Bb = function(e, t) {
  var r = Ib(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof e == "string" ? Lb(e, r) : e, i = r.plainObjects ? { __proto__: null } : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], u = Fb(s, n[s], r, typeof e == "string");
    i = En.merge(i, u, r);
  }
  return r.allowSparse === !0 ? i : En.compact(i);
}, jb = Mb, Ub = Bb, Hb = zl, Oc = {
  formats: Hb,
  parse: Ub,
  stringify: jb
}, Yb = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Yt, function() {
    var r = {};
    r.version = "0.2.0";
    var n = r.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    r.configure = function(h) {
      var v, b;
      for (v in h)
        b = h[v], b !== void 0 && h.hasOwnProperty(v) && (n[v] = b);
      return this;
    }, r.status = null, r.set = function(h) {
      var v = r.isStarted();
      h = i(h, n.minimum, 1), r.status = h === 1 ? null : h;
      var b = r.render(!v), E = b.querySelector(n.barSelector), x = n.speed, O = n.easing;
      return b.offsetWidth, s(function(p) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), u(E, o(h, x, O)), h === 1 ? (u(b, {
          transition: "none",
          opacity: 1
        }), b.offsetWidth, setTimeout(function() {
          u(b, {
            transition: "all " + x + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), p();
          }, x);
        }, x)) : setTimeout(p, x);
      }), this;
    }, r.isStarted = function() {
      return typeof r.status == "number";
    }, r.start = function() {
      r.status || r.set(0);
      var h = function() {
        setTimeout(function() {
          r.status && (r.trickle(), h());
        }, n.trickleSpeed);
      };
      return n.trickle && h(), this;
    }, r.done = function(h) {
      return !h && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
    }, r.inc = function(h) {
      var v = r.status;
      return v ? (typeof h != "number" && (h = (1 - v) * i(Math.random() * v, 0.1, 0.95)), v = i(v + h, 0, 0.994), r.set(v)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var h = 0, v = 0;
      r.promise = function(b) {
        return !b || b.state() === "resolved" ? this : (v === 0 && r.start(), h++, v++, b.always(function() {
          v--, v === 0 ? (h = 0, r.done()) : r.set((h - v) / h);
        }), this);
      };
    }(), r.render = function(h) {
      if (r.isRendered()) return document.getElementById("nprogress");
      c(document.documentElement, "nprogress-busy");
      var v = document.createElement("div");
      v.id = "nprogress", v.innerHTML = n.template;
      var b = v.querySelector(n.barSelector), E = h ? "-100" : a(r.status || 0), x = document.querySelector(n.parent), O;
      return u(b, {
        transition: "all 0 linear",
        transform: "translate3d(" + E + "%,0,0)"
      }), n.showSpinner || (O = v.querySelector(n.spinnerSelector), O && S(O)), x != document.body && c(x, "nprogress-custom-parent"), x.appendChild(v), v;
    }, r.remove = function() {
      y(document.documentElement, "nprogress-busy"), y(document.querySelector(n.parent), "nprogress-custom-parent");
      var h = document.getElementById("nprogress");
      h && S(h);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var h = document.body.style, v = "WebkitTransform" in h ? "Webkit" : "MozTransform" in h ? "Moz" : "msTransform" in h ? "ms" : "OTransform" in h ? "O" : "";
      return v + "Perspective" in h ? "translate3d" : v + "Transform" in h ? "translate" : "margin";
    };
    function i(h, v, b) {
      return h < v ? v : h > b ? b : h;
    }
    function a(h) {
      return (-1 + h) * 100;
    }
    function o(h, v, b) {
      var E;
      return n.positionUsing === "translate3d" ? E = { transform: "translate3d(" + a(h) + "%,0,0)" } : n.positionUsing === "translate" ? E = { transform: "translate(" + a(h) + "%,0)" } : E = { "margin-left": a(h) + "%" }, E.transition = "all " + v + "ms " + b, E;
    }
    var s = /* @__PURE__ */ function() {
      var h = [];
      function v() {
        var b = h.shift();
        b && b(v);
      }
      return function(b) {
        h.push(b), h.length == 1 && v();
      };
    }(), u = /* @__PURE__ */ function() {
      var h = ["Webkit", "O", "Moz", "ms"], v = {};
      function b(p) {
        return p.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(w, _) {
          return _.toUpperCase();
        });
      }
      function E(p) {
        var w = document.body.style;
        if (p in w) return p;
        for (var _ = h.length, T = p.charAt(0).toUpperCase() + p.slice(1), k; _--; )
          if (k = h[_] + T, k in w) return k;
        return p;
      }
      function x(p) {
        return p = b(p), v[p] || (v[p] = E(p));
      }
      function O(p, w, _) {
        w = x(w), p.style[w] = _;
      }
      return function(p, w) {
        var _ = arguments, T, k;
        if (_.length == 2)
          for (T in w)
            k = w[T], k !== void 0 && w.hasOwnProperty(T) && O(p, T, k);
        else
          O(p, _[1], _[2]);
      };
    }();
    function f(h, v) {
      var b = typeof h == "string" ? h : m(h);
      return b.indexOf(" " + v + " ") >= 0;
    }
    function c(h, v) {
      var b = m(h), E = b + v;
      f(b, v) || (h.className = E.substring(1));
    }
    function y(h, v) {
      var b = m(h), E;
      f(h, v) && (E = b.replace(" " + v + " ", " "), h.className = E.substring(1, E.length - 1));
    }
    function m(h) {
      return (" " + (h.className || "") + " ").replace(/\s+/gi, " ");
    }
    function S(h) {
      h && h.parentNode && h.parentNode.removeChild(h);
    }
    return r;
  });
})(Yb);
function Sd(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function Br(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Vb = (e) => Br("before", { cancelable: !0, detail: { visit: e } }), Wb = (e) => Br("error", { detail: { errors: e } }), qb = (e) => Br("exception", { cancelable: !0, detail: { exception: e } }), _c = (e) => Br("finish", { detail: { visit: e } }), Gb = (e) => Br("invalid", { cancelable: !0, detail: { response: e } }), _i = (e) => Br("navigate", { detail: { page: e } }), zb = (e) => Br("progress", { detail: { progress: e } }), Kb = (e) => Br("start", { detail: { visit: e } }), Jb = (e) => Br("success", { detail: { page: e } });
function wl(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => wl(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => wl(t));
}
function Od(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && Td(t, _d(r, n), e[n]);
  return t;
}
function _d(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Td(e, t, r) {
  if (Array.isArray(r)) return Array.from(r.keys()).forEach((n) => Td(e, _d(t, n.toString()), r[n]));
  if (r instanceof Date) return e.append(t, r.toISOString());
  if (r instanceof File) return e.append(t, r, r.name);
  if (r instanceof Blob) return e.append(t, r);
  if (typeof r == "boolean") return e.append(t, r ? "1" : "0");
  if (typeof r == "string") return e.append(t, r);
  if (typeof r == "number") return e.append(t, `${r}`);
  if (r == null) return e.append(t, "");
  Od(r, e, t);
}
var Xb = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow) throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(t.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} };
function Fn(e) {
  return new URL(e.toString(), window.location.toString());
}
function Ed(e, t, r, n = "brackets") {
  let i = /^https?:\/\//.test(t.toString()), a = i || t.toString().startsWith("/"), o = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), s = t.toString().includes("?") || e === "get" && Object.keys(r).length, u = t.toString().includes("#"), f = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (f.search = Oc.stringify(Vy(Oc.parse(f.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${f.protocol}//${f.host}` : "", a ? f.pathname : "", o ? f.pathname.substring(1) : "", s ? f.search : "", u ? f.hash : ""].join(""), r];
}
function Ti(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var ja = typeof window > "u", Tc = !ja && /CriOS/.test(window.navigator.userAgent), Ec = (e) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}, Zb = class {
  constructor() {
    this.visitId = null;
  }
  init({ initialPage: t, resolveComponent: r, swapComponent: n }) {
    this.page = t, this.resolveComponent = r, this.swapComponent = n, this.setNavigationType(), this.clearRememberedStateOnReload(), this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
  }
  setNavigationType() {
    this.navigationType = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  clearRememberedStateOnReload() {
    var t;
    this.navigationType === "reload" && ((t = window.history.state) != null && t.rememberedState) && delete window.history.state.rememberedState;
  }
  handleInitialPageVisit(t) {
    let r = window.location.hash;
    this.page.url.includes(r) || (this.page.url += r), this.setPage(t, { preserveScroll: !0, preserveState: !0 }).then(() => _i(t));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", Sd(this.handleScrollEvent.bind(this), 100), !0);
  }
  scrollRegions() {
    return document.querySelectorAll("[scroll-region]");
  }
  handleScrollEvent(t) {
    typeof t.target.hasAttribute == "function" && t.target.hasAttribute("scroll-region") && this.saveScrollPositions();
  }
  saveScrollPositions() {
    this.replaceState({ ...this.page, scrollRegions: Array.from(this.scrollRegions()).map((t) => ({ top: t.scrollTop, left: t.scrollLeft })) });
  }
  resetScrollPositions() {
    Ec(() => {
      var t;
      window.scrollTo(0, 0), this.scrollRegions().forEach((r) => {
        typeof r.scrollTo == "function" ? r.scrollTo(0, 0) : (r.scrollTop = 0, r.scrollLeft = 0);
      }), this.saveScrollPositions(), window.location.hash && ((t = document.getElementById(window.location.hash.slice(1))) == null || t.scrollIntoView());
    });
  }
  restoreScrollPositions() {
    Ec(() => {
      this.page.scrollRegions && this.scrollRegions().forEach((t, r) => {
        let n = this.page.scrollRegions[r];
        if (n) typeof t.scrollTo == "function" ? t.scrollTo(n.left, n.top) : (t.scrollTop = n.top, t.scrollLeft = n.left);
        else return;
      });
    });
  }
  isBackForwardVisit() {
    return window.history.state && this.navigationType === "back_forward";
  }
  handleBackForwardVisit(t) {
    window.history.state.version = t.version, this.setPage(window.history.state, { preserveScroll: !0, preserveState: !0 }).then(() => {
      this.restoreScrollPositions(), _i(t);
    });
  }
  locationVisit(t, r) {
    try {
      let n = { preserveScroll: r };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(n)), window.location.href = t.href, Ti(window.location).href === Ti(t).href && window.location.reload();
    } catch {
      return !1;
    }
  }
  isLocationVisit() {
    try {
      return window.sessionStorage.getItem("inertiaLocationVisit") !== null;
    } catch {
      return !1;
    }
  }
  handleLocationVisit(t) {
    var n, i;
    let r = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
    window.sessionStorage.removeItem("inertiaLocationVisit"), t.url += window.location.hash, t.rememberedState = ((n = window.history.state) == null ? void 0 : n.rememberedState) ?? {}, t.scrollRegions = ((i = window.history.state) == null ? void 0 : i.scrollRegions) ?? [], this.setPage(t, { preserveScroll: r.preserveScroll, preserveState: !0 }).then(() => {
      r.preserveScroll && this.restoreScrollPositions(), _i(t);
    });
  }
  isLocationVisitResponse(t) {
    return !!(t && t.status === 409 && t.headers["x-inertia-location"]);
  }
  isInertiaResponse(t) {
    return !!(t != null && t.headers["x-inertia"]);
  }
  createVisitId() {
    return this.visitId = {}, this.visitId;
  }
  cancelVisit(t, { cancelled: r = !1, interrupted: n = !1 }) {
    t && !t.completed && !t.cancelled && !t.interrupted && (t.cancelToken.abort(), t.onCancel(), t.completed = !1, t.cancelled = r, t.interrupted = n, _c(t), t.onFinish(t));
  }
  finishVisit(t) {
    !t.cancelled && !t.interrupted && (t.completed = !0, t.cancelled = !1, t.interrupted = !1, _c(t), t.onFinish(t));
  }
  resolvePreserveOption(t, r) {
    return typeof t == "function" ? t(r) : t === "errors" ? Object.keys(r.props.errors || {}).length > 0 : t;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(t, { method: r = "get", data: n = {}, replace: i = !1, preserveScroll: a = !1, preserveState: o = !1, only: s = [], except: u = [], headers: f = {}, errorBag: c = "", forceFormData: y = !1, onCancelToken: m = () => {
  }, onBefore: S = () => {
  }, onStart: h = () => {
  }, onProgress: v = () => {
  }, onFinish: b = () => {
  }, onCancel: E = () => {
  }, onSuccess: x = () => {
  }, onError: O = () => {
  }, queryStringArrayFormat: p = "brackets" } = {}) {
    let w = typeof t == "string" ? Fn(t) : t;
    if ((wl(n) || y) && !(n instanceof FormData) && (n = Od(n)), !(n instanceof FormData)) {
      let [C, R] = Ed(r, w, n, p);
      w = Fn(C), n = R;
    }
    let _ = { url: w, method: r, data: n, replace: i, preserveScroll: a, preserveState: o, only: s, except: u, headers: f, errorBag: c, forceFormData: y, queryStringArrayFormat: p, cancelled: !1, completed: !1, interrupted: !1 };
    if (S(_) === !1 || !Vb(_)) return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let T = this.createVisitId();
    this.activeVisit = { ..._, onCancelToken: m, onBefore: S, onStart: h, onProgress: v, onFinish: b, onCancel: E, onSuccess: x, onError: O, queryStringArrayFormat: p, cancelToken: new AbortController() }, m({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), Kb(_), h(_);
    let k = !!(s.length || u.length);
    ke({ method: r, url: Ti(w).href, data: r === "get" ? {} : n, params: r === "get" ? n : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...f, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...k ? { "X-Inertia-Partial-Component": this.page.component } : {}, ...s.length ? { "X-Inertia-Partial-Data": s.join(",") } : {}, ...u.length ? { "X-Inertia-Partial-Except": u.join(",") } : {}, ...c && c.length ? { "X-Inertia-Error-Bag": c } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (C) => {
      n instanceof FormData && (C.percentage = C.progress ? Math.round(C.progress * 100) : 0, zb(C), v(C));
    } }).then((C) => {
      var q;
      if (!this.isInertiaResponse(C)) return Promise.reject({ response: C });
      let R = C.data;
      k && R.component === this.page.component && (R.props = { ...this.page.props, ...R.props }), a = this.resolvePreserveOption(a, R), o = this.resolvePreserveOption(o, R), o && ((q = window.history.state) != null && q.rememberedState) && R.component === this.page.component && (R.rememberedState = window.history.state.rememberedState);
      let z = w, V = Fn(R.url);
      return z.hash && !V.hash && Ti(z).href === V.href && (V.hash = z.hash, R.url = V.href), this.setPage(R, { visitId: T, replace: i, preserveScroll: a, preserveState: o });
    }).then(() => {
      let C = this.page.props.errors || {};
      if (Object.keys(C).length > 0) {
        let R = c ? C[c] ? C[c] : {} : C;
        return Wb(R), O(R);
      }
      return Jb(this.page), x(this.page);
    }).catch((C) => {
      if (this.isInertiaResponse(C.response)) return this.setPage(C.response.data, { visitId: T });
      if (this.isLocationVisitResponse(C.response)) {
        let R = Fn(C.response.headers["x-inertia-location"]), z = w;
        z.hash && !R.hash && Ti(z).href === R.href && (R.hash = z.hash), this.locationVisit(R, a === !0);
      } else if (C.response) Gb(C.response) && Xb.show(C.response.data);
      else return Promise.reject(C);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((C) => {
      if (!ke.isCancel(C)) {
        let R = qb(C);
        if (this.activeVisit && this.finishVisit(this.activeVisit), R) return Promise.reject(C);
      }
    });
  }
  setPage(t, { visitId: r = this.createVisitId(), replace: n = !1, preserveScroll: i = !1, preserveState: a = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(t.component)).then((o) => {
      r === this.visitId && (t.scrollRegions = this.page.scrollRegions || [], t.rememberedState = t.rememberedState || {}, n = n || Fn(t.url).href === window.location.href, n ? this.replaceState(t) : this.pushState(t), this.swapComponent({ component: o, page: t, preserveState: a }).then(() => {
        i ? this.restoreScrollPositions() : this.resetScrollPositions(), n || _i(t);
      }));
    });
  }
  pushState(t) {
    this.page = t, Tc ? setTimeout(() => window.history.pushState(t, "", t.url)) : window.history.pushState(t, "", t.url);
  }
  replaceState(t) {
    this.page = t, Tc ? setTimeout(() => window.history.replaceState(t, "", t.url)) : window.history.replaceState(t, "", t.url);
  }
  handlePopstateEvent(t) {
    if (t.state !== null) {
      let r = t.state, n = this.createVisitId();
      Promise.resolve(this.resolveComponent(r.component)).then((i) => {
        n === this.visitId && (this.page = r, this.swapComponent({ component: i, page: r, preserveState: !1 }).then(() => {
          this.restoreScrollPositions(), _i(r);
        }));
      });
    } else {
      let r = Fn(this.page.url);
      r.hash = window.location.hash, this.replaceState({ ...this.page, url: r.href }), this.resetScrollPositions();
    }
  }
  get(t, r = {}, n = {}) {
    return this.visit(t, { ...n, method: "get", data: r });
  }
  reload(t = {}) {
    return this.visit(window.location.href, { ...t, preserveScroll: !0, preserveState: !0 });
  }
  replace(t, r = {}) {
    return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${r.method ?? "get"}() instead.`), this.visit(t, { preserveState: !0, ...r, replace: !0 });
  }
  post(t, r = {}, n = {}) {
    return this.visit(t, { preserveState: !0, ...n, method: "post", data: r });
  }
  put(t, r = {}, n = {}) {
    return this.visit(t, { preserveState: !0, ...n, method: "put", data: r });
  }
  patch(t, r = {}, n = {}) {
    return this.visit(t, { preserveState: !0, ...n, method: "patch", data: r });
  }
  delete(t, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "delete" });
  }
  remember(t, r = "default") {
    var n;
    ja || this.replaceState({ ...this.page, rememberedState: { ...(n = this.page) == null ? void 0 : n.rememberedState, [r]: t } });
  }
  restore(t = "default") {
    var r, n;
    if (!ja) return (n = (r = window.history.state) == null ? void 0 : r.rememberedState) == null ? void 0 : n[t];
  }
  on(t, r) {
    if (ja) return () => {
    };
    let n = (i) => {
      let a = r(i);
      i.cancelable && !i.defaultPrevented && a === !1 && i.preventDefault();
    };
    return document.addEventListener(`inertia:${t}`, n), () => document.removeEventListener(`inertia:${t}`, n);
  }
}, Qb = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let r = t.content.firstChild;
  if (!e.startsWith("<script ")) return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((i) => {
    n.setAttribute(i, r.getAttribute(i) || "");
  }), n;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let r = e.getAttribute("inertia");
  return r !== null ? t.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: Sd(function(e) {
  let t = e.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var a, o;
    let n = this.findMatchingElementIndex(r, t);
    if (n === -1) {
      (a = r == null ? void 0 : r.parentNode) == null || a.removeChild(r);
      return;
    }
    let i = t.splice(n, 1)[0];
    i && !r.isEqualNode(i) && ((o = r == null ? void 0 : r.parentNode) == null || o.replaceChild(i, r));
  }), t.forEach((r) => document.head.appendChild(r));
}, 1) };
function ew(e, t, r) {
  let n = {}, i = 0;
  function a() {
    let c = i += 1;
    return n[c] = [], c.toString();
  }
  function o(c) {
    c === null || Object.keys(n).indexOf(c) === -1 || (delete n[c], f());
  }
  function s(c, y = []) {
    c !== null && Object.keys(n).indexOf(c) > -1 && (n[c] = y), f();
  }
  function u() {
    let c = t(""), y = { ...c ? { title: `<title inertia="">${c}</title>` } : {} }, m = Object.values(n).reduce((S, h) => S.concat(h), []).reduce((S, h) => {
      if (h.indexOf("<") === -1) return S;
      if (h.indexOf("<title ") === 0) {
        let b = h.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return S.title = b ? `${b[1]}${t(b[2])}${b[3]}` : h, S;
      }
      let v = h.match(/ inertia="[^"]+"/);
      return v ? S[v[0]] = h : S[Object.keys(S).length] = h, S;
    }, y);
    return Object.values(m);
  }
  function f() {
    e ? r(u()) : Qb.update(u());
  }
  return f(), { forceUpdate: f, createProvider: function() {
    let c = a();
    return { update: (y) => s(c, y), disconnect: () => o(c) };
  } };
}
function tw(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Sl = new Zb(), to = { exports: {} };
to.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", u = "[object Date]", f = "[object Error]", c = "[object Function]", y = "[object GeneratorFunction]", m = "[object Map]", S = "[object Number]", h = "[object Object]", v = "[object Promise]", b = "[object RegExp]", E = "[object Set]", x = "[object String]", O = "[object Symbol]", p = "[object WeakMap]", w = "[object ArrayBuffer]", _ = "[object DataView]", T = "[object Float32Array]", k = "[object Float64Array]", C = "[object Int8Array]", R = "[object Int16Array]", z = "[object Int32Array]", V = "[object Uint8Array]", q = "[object Uint8ClampedArray]", ue = "[object Uint16Array]", re = "[object Uint32Array]", ne = /[\\^$.*+?()[\]{}|]/g, ye = /\w*$/, Oe = /^\[object .+?Constructor\]$/, Le = /^(?:0|[1-9]\d*)$/, K = {};
  K[a] = K[o] = K[w] = K[_] = K[s] = K[u] = K[T] = K[k] = K[C] = K[R] = K[z] = K[m] = K[S] = K[h] = K[b] = K[E] = K[x] = K[O] = K[V] = K[q] = K[ue] = K[re] = !0, K[f] = K[c] = K[p] = !1;
  var te = typeof Yt == "object" && Yt && Yt.Object === Object && Yt, ie = typeof self == "object" && self && self.Object === Object && self, de = te || ie || Function("return this")(), we = t && !t.nodeType && t, J = we && !0 && e && !e.nodeType && e, Fe = J && J.exports === we;
  function Xt(l, d) {
    return l.set(d[0], d[1]), l;
  }
  function Ce(l, d) {
    return l.add(d), l;
  }
  function Ft(l, d) {
    for (var g = -1, D = l ? l.length : 0; ++g < D && d(l[g], g, l) !== !1; )
      ;
    return l;
  }
  function mt(l, d) {
    for (var g = -1, D = d.length, X = l.length; ++g < D; )
      l[X + g] = d[g];
    return l;
  }
  function _t(l, d, g, D) {
    for (var X = -1, j = l ? l.length : 0; ++X < j; )
      g = d(g, l[X], X, l);
    return g;
  }
  function Zt(l, d) {
    for (var g = -1, D = Array(l); ++g < l; )
      D[g] = d(g);
    return D;
  }
  function Qt(l, d) {
    return l == null ? void 0 : l[d];
  }
  function er(l) {
    var d = !1;
    if (l != null && typeof l.toString != "function")
      try {
        d = !!(l + "");
      } catch {
      }
    return d;
  }
  function Or(l) {
    var d = -1, g = Array(l.size);
    return l.forEach(function(D, X) {
      g[++d] = [X, D];
    }), g;
  }
  function It(l, d) {
    return function(g) {
      return l(d(g));
    };
  }
  function tr(l) {
    var d = -1, g = Array(l.size);
    return l.forEach(function(D) {
      g[++d] = D;
    }), g;
  }
  var Hr = Array.prototype, Yr = Function.prototype, ze = Object.prototype, it = de["__core-js_shared__"], rr = function() {
    var l = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Tt = Yr.toString, Ke = ze.hasOwnProperty, Bt = ze.toString, Vr = RegExp(
    "^" + Tt.call(Ke).replace(ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Et = Fe ? de.Buffer : void 0, jt = de.Symbol, nn = de.Uint8Array, at = It(Object.getPrototypeOf, Object), Pn = Object.create, Dn = ze.propertyIsEnumerable, ci = Hr.splice, P = Object.getOwnPropertySymbols, N = Et ? Et.isBuffer : void 0, W = It(Object.keys, Object), ae = Ht(de, "DataView"), Q = Ht(de, "Map"), Se = Ht(de, "Promise"), Ie = Ht(de, "Set"), xt = Ht(de, "WeakMap"), nr = Ht(Object, "create"), yt = nt(ae), Ut = nt(Q), ir = nt(Se), At = nt(Ie), an = nt(xt), Pt = jt ? jt.prototype : void 0, _r = Pt ? Pt.valueOf : void 0;
  function Tr(l) {
    var d = -1, g = l ? l.length : 0;
    for (this.clear(); ++d < g; ) {
      var D = l[d];
      this.set(D[0], D[1]);
    }
  }
  function Lo() {
    this.__data__ = nr ? nr(null) : {};
  }
  function No(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function Fo(l) {
    var d = this.__data__;
    if (nr) {
      var g = d[l];
      return g === n ? void 0 : g;
    }
    return Ke.call(d, l) ? d[l] : void 0;
  }
  function ua(l) {
    var d = this.__data__;
    return nr ? d[l] !== void 0 : Ke.call(d, l);
  }
  function fi(l, d) {
    var g = this.__data__;
    return g[l] = nr && d === void 0 ? n : d, this;
  }
  Tr.prototype.clear = Lo, Tr.prototype.delete = No, Tr.prototype.get = Fo, Tr.prototype.has = ua, Tr.prototype.set = fi;
  function We(l) {
    var d = -1, g = l ? l.length : 0;
    for (this.clear(); ++d < g; ) {
      var D = l[d];
      this.set(D[0], D[1]);
    }
  }
  function Io() {
    this.__data__ = [];
  }
  function Bo(l) {
    var d = this.__data__, g = Mn(d, l);
    if (g < 0)
      return !1;
    var D = d.length - 1;
    return g == D ? d.pop() : ci.call(d, g, 1), !0;
  }
  function jo(l) {
    var d = this.__data__, g = Mn(d, l);
    return g < 0 ? void 0 : d[g][1];
  }
  function Uo(l) {
    return Mn(this.__data__, l) > -1;
  }
  function Ho(l, d) {
    var g = this.__data__, D = Mn(g, l);
    return D < 0 ? g.push([l, d]) : g[D][1] = d, this;
  }
  We.prototype.clear = Io, We.prototype.delete = Bo, We.prototype.get = jo, We.prototype.has = Uo, We.prototype.set = Ho;
  function Je(l) {
    var d = -1, g = l ? l.length : 0;
    for (this.clear(); ++d < g; ) {
      var D = l[d];
      this.set(D[0], D[1]);
    }
  }
  function Yo() {
    this.__data__ = {
      hash: new Tr(),
      map: new (Q || We)(),
      string: new Tr()
    };
  }
  function Vo(l) {
    return sn(this, l).delete(l);
  }
  function Wo(l) {
    return sn(this, l).get(l);
  }
  function qo(l) {
    return sn(this, l).has(l);
  }
  function Go(l, d) {
    return sn(this, l).set(l, d), this;
  }
  Je.prototype.clear = Yo, Je.prototype.delete = Vo, Je.prototype.get = Wo, Je.prototype.has = qo, Je.prototype.set = Go;
  function ot(l) {
    this.__data__ = new We(l);
  }
  function zo() {
    this.__data__ = new We();
  }
  function Ko(l) {
    return this.__data__.delete(l);
  }
  function Jo(l) {
    return this.__data__.get(l);
  }
  function Xo(l) {
    return this.__data__.has(l);
  }
  function Zo(l, d) {
    var g = this.__data__;
    if (g instanceof We) {
      var D = g.__data__;
      if (!Q || D.length < r - 1)
        return D.push([l, d]), this;
      g = this.__data__ = new Je(D);
    }
    return g.set(l, d), this;
  }
  ot.prototype.clear = zo, ot.prototype.delete = Ko, ot.prototype.get = Jo, ot.prototype.has = Xo, ot.prototype.set = Zo;
  function kn(l, d) {
    var g = mi(l) || Rn(l) ? Zt(l.length, String) : [], D = g.length, X = !!D;
    for (var j in l)
      Ke.call(l, j) && !(X && (j == "length" || ds(j, D))) && g.push(j);
    return g;
  }
  function ca(l, d, g) {
    var D = l[d];
    (!(Ke.call(l, d) && ma(D, g)) || g === void 0 && !(d in l)) && (l[d] = g);
  }
  function Mn(l, d) {
    for (var g = l.length; g--; )
      if (ma(l[g][0], d))
        return g;
    return -1;
  }
  function ar(l, d) {
    return l && hi(d, vi(d), l);
  }
  function di(l, d, g, D, X, j, pe) {
    var fe;
    if (D && (fe = j ? D(l, X, j, pe) : D(l)), fe !== void 0)
      return fe;
    if (!sr(l))
      return l;
    var Ne = mi(l);
    if (Ne) {
      if (fe = cs(l), !d)
        return ss(l, fe);
    } else {
      var ve = xr(l), Xe = ve == c || ve == y;
      if (ya(l))
        return Cn(l, d);
      if (ve == h || ve == a || Xe && !j) {
        if (er(l))
          return j ? l : {};
        if (fe = or(Xe ? {} : l), !d)
          return ls(l, ar(fe, l));
      } else {
        if (!K[ve])
          return j ? l : {};
        fe = fs(l, ve, di, d);
      }
    }
    pe || (pe = new ot());
    var st = pe.get(l);
    if (st)
      return st;
    if (pe.set(l, fe), !Ne)
      var Be = g ? us(l) : vi(l);
    return Ft(Be || l, function(Ze, qe) {
      Be && (qe = Ze, Ze = l[qe]), ca(fe, qe, di(Ze, d, g, D, qe, l, pe));
    }), fe;
  }
  function Qo(l) {
    return sr(l) ? Pn(l) : {};
  }
  function es(l, d, g) {
    var D = d(l);
    return mi(l) ? D : mt(D, g(l));
  }
  function ts(l) {
    return Bt.call(l);
  }
  function rs(l) {
    if (!sr(l) || hs(l))
      return !1;
    var d = yi(l) || er(l) ? Vr : Oe;
    return d.test(nt(l));
  }
  function ns(l) {
    if (!pa(l))
      return W(l);
    var d = [];
    for (var g in Object(l))
      Ke.call(l, g) && g != "constructor" && d.push(g);
    return d;
  }
  function Cn(l, d) {
    if (d)
      return l.slice();
    var g = new l.constructor(l.length);
    return l.copy(g), g;
  }
  function pi(l) {
    var d = new l.constructor(l.byteLength);
    return new nn(d).set(new nn(l)), d;
  }
  function on(l, d) {
    var g = d ? pi(l.buffer) : l.buffer;
    return new l.constructor(g, l.byteOffset, l.byteLength);
  }
  function fa(l, d, g) {
    var D = d ? g(Or(l), !0) : Or(l);
    return _t(D, Xt, new l.constructor());
  }
  function da(l) {
    var d = new l.constructor(l.source, ye.exec(l));
    return d.lastIndex = l.lastIndex, d;
  }
  function is(l, d, g) {
    var D = d ? g(tr(l), !0) : tr(l);
    return _t(D, Ce, new l.constructor());
  }
  function as(l) {
    return _r ? Object(_r.call(l)) : {};
  }
  function os(l, d) {
    var g = d ? pi(l.buffer) : l.buffer;
    return new l.constructor(g, l.byteOffset, l.length);
  }
  function ss(l, d) {
    var g = -1, D = l.length;
    for (d || (d = Array(D)); ++g < D; )
      d[g] = l[g];
    return d;
  }
  function hi(l, d, g, D) {
    g || (g = {});
    for (var X = -1, j = d.length; ++X < j; ) {
      var pe = d[X], fe = void 0;
      ca(g, pe, fe === void 0 ? l[pe] : fe);
    }
    return g;
  }
  function ls(l, d) {
    return hi(l, Er(l), d);
  }
  function us(l) {
    return es(l, vi, Er);
  }
  function sn(l, d) {
    var g = l.__data__;
    return ps(d) ? g[typeof d == "string" ? "string" : "hash"] : g.map;
  }
  function Ht(l, d) {
    var g = Qt(l, d);
    return rs(g) ? g : void 0;
  }
  var Er = P ? It(P, Object) : ys, xr = ts;
  (ae && xr(new ae(new ArrayBuffer(1))) != _ || Q && xr(new Q()) != m || Se && xr(Se.resolve()) != v || Ie && xr(new Ie()) != E || xt && xr(new xt()) != p) && (xr = function(l) {
    var d = Bt.call(l), g = d == h ? l.constructor : void 0, D = g ? nt(g) : void 0;
    if (D)
      switch (D) {
        case yt:
          return _;
        case Ut:
          return m;
        case ir:
          return v;
        case At:
          return E;
        case an:
          return p;
      }
    return d;
  });
  function cs(l) {
    var d = l.length, g = l.constructor(d);
    return d && typeof l[0] == "string" && Ke.call(l, "index") && (g.index = l.index, g.input = l.input), g;
  }
  function or(l) {
    return typeof l.constructor == "function" && !pa(l) ? Qo(at(l)) : {};
  }
  function fs(l, d, g, D) {
    var X = l.constructor;
    switch (d) {
      case w:
        return pi(l);
      case s:
      case u:
        return new X(+l);
      case _:
        return on(l, D);
      case T:
      case k:
      case C:
      case R:
      case z:
      case V:
      case q:
      case ue:
      case re:
        return os(l, D);
      case m:
        return fa(l, D, g);
      case S:
      case x:
        return new X(l);
      case b:
        return da(l);
      case E:
        return is(l, D, g);
      case O:
        return as(l);
    }
  }
  function ds(l, d) {
    return d = d ?? i, !!d && (typeof l == "number" || Le.test(l)) && l > -1 && l % 1 == 0 && l < d;
  }
  function ps(l) {
    var d = typeof l;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? l !== "__proto__" : l === null;
  }
  function hs(l) {
    return !!rr && rr in l;
  }
  function pa(l) {
    var d = l && l.constructor, g = typeof d == "function" && d.prototype || ze;
    return l === g;
  }
  function nt(l) {
    if (l != null) {
      try {
        return Tt.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function ha(l) {
    return di(l, !0, !0);
  }
  function ma(l, d) {
    return l === d || l !== l && d !== d;
  }
  function Rn(l) {
    return ms(l) && Ke.call(l, "callee") && (!Dn.call(l, "callee") || Bt.call(l) == a);
  }
  var mi = Array.isArray;
  function $n(l) {
    return l != null && va(l.length) && !yi(l);
  }
  function ms(l) {
    return ga(l) && $n(l);
  }
  var ya = N || vs;
  function yi(l) {
    var d = sr(l) ? Bt.call(l) : "";
    return d == c || d == y;
  }
  function va(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= i;
  }
  function sr(l) {
    var d = typeof l;
    return !!l && (d == "object" || d == "function");
  }
  function ga(l) {
    return !!l && typeof l == "object";
  }
  function vi(l) {
    return $n(l) ? kn(l) : ns(l);
  }
  function ys() {
    return [];
  }
  function vs() {
    return !1;
  }
  e.exports = ha;
})(to, to.exports);
to.exports;
var ro = { exports: {} };
ro.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", u = "[object Array]", f = "[object AsyncFunction]", c = "[object Boolean]", y = "[object Date]", m = "[object Error]", S = "[object Function]", h = "[object GeneratorFunction]", v = "[object Map]", b = "[object Number]", E = "[object Null]", x = "[object Object]", O = "[object Promise]", p = "[object Proxy]", w = "[object RegExp]", _ = "[object Set]", T = "[object String]", k = "[object Symbol]", C = "[object Undefined]", R = "[object WeakMap]", z = "[object ArrayBuffer]", V = "[object DataView]", q = "[object Float32Array]", ue = "[object Float64Array]", re = "[object Int8Array]", ne = "[object Int16Array]", ye = "[object Int32Array]", Oe = "[object Uint8Array]", Le = "[object Uint8ClampedArray]", K = "[object Uint16Array]", te = "[object Uint32Array]", ie = /[\\^$.*+?()[\]{}|]/g, de = /^\[object .+?Constructor\]$/, we = /^(?:0|[1-9]\d*)$/, J = {};
  J[q] = J[ue] = J[re] = J[ne] = J[ye] = J[Oe] = J[Le] = J[K] = J[te] = !0, J[s] = J[u] = J[z] = J[c] = J[V] = J[y] = J[m] = J[S] = J[v] = J[b] = J[x] = J[w] = J[_] = J[T] = J[R] = !1;
  var Fe = typeof Yt == "object" && Yt && Yt.Object === Object && Yt, Xt = typeof self == "object" && self && self.Object === Object && self, Ce = Fe || Xt || Function("return this")(), Ft = t && !t.nodeType && t, mt = Ft && !0 && e && !e.nodeType && e, _t = mt && mt.exports === Ft, Zt = _t && Fe.process, Qt = function() {
    try {
      return Zt && Zt.binding && Zt.binding("util");
    } catch {
    }
  }(), er = Qt && Qt.isTypedArray;
  function Or(l, d) {
    for (var g = -1, D = l == null ? 0 : l.length, X = 0, j = []; ++g < D; ) {
      var pe = l[g];
      d(pe, g, l) && (j[X++] = pe);
    }
    return j;
  }
  function It(l, d) {
    for (var g = -1, D = d.length, X = l.length; ++g < D; )
      l[X + g] = d[g];
    return l;
  }
  function tr(l, d) {
    for (var g = -1, D = l == null ? 0 : l.length; ++g < D; )
      if (d(l[g], g, l))
        return !0;
    return !1;
  }
  function Hr(l, d) {
    for (var g = -1, D = Array(l); ++g < l; )
      D[g] = d(g);
    return D;
  }
  function Yr(l) {
    return function(d) {
      return l(d);
    };
  }
  function ze(l, d) {
    return l.has(d);
  }
  function it(l, d) {
    return l == null ? void 0 : l[d];
  }
  function rr(l) {
    var d = -1, g = Array(l.size);
    return l.forEach(function(D, X) {
      g[++d] = [X, D];
    }), g;
  }
  function Tt(l, d) {
    return function(g) {
      return l(d(g));
    };
  }
  function Ke(l) {
    var d = -1, g = Array(l.size);
    return l.forEach(function(D) {
      g[++d] = D;
    }), g;
  }
  var Bt = Array.prototype, Vr = Function.prototype, Et = Object.prototype, jt = Ce["__core-js_shared__"], nn = Vr.toString, at = Et.hasOwnProperty, Pn = function() {
    var l = /[^.]+$/.exec(jt && jt.keys && jt.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Dn = Et.toString, ci = RegExp(
    "^" + nn.call(at).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), P = _t ? Ce.Buffer : void 0, N = Ce.Symbol, W = Ce.Uint8Array, ae = Et.propertyIsEnumerable, Q = Bt.splice, Se = N ? N.toStringTag : void 0, Ie = Object.getOwnPropertySymbols, xt = P ? P.isBuffer : void 0, nr = Tt(Object.keys, Object), yt = Er(Ce, "DataView"), Ut = Er(Ce, "Map"), ir = Er(Ce, "Promise"), At = Er(Ce, "Set"), an = Er(Ce, "WeakMap"), Pt = Er(Object, "create"), _r = nt(yt), Tr = nt(Ut), Lo = nt(ir), No = nt(At), Fo = nt(an), ua = N ? N.prototype : void 0, fi = ua ? ua.valueOf : void 0;
  function We(l) {
    var d = -1, g = l == null ? 0 : l.length;
    for (this.clear(); ++d < g; ) {
      var D = l[d];
      this.set(D[0], D[1]);
    }
  }
  function Io() {
    this.__data__ = Pt ? Pt(null) : {}, this.size = 0;
  }
  function Bo(l) {
    var d = this.has(l) && delete this.__data__[l];
    return this.size -= d ? 1 : 0, d;
  }
  function jo(l) {
    var d = this.__data__;
    if (Pt) {
      var g = d[l];
      return g === n ? void 0 : g;
    }
    return at.call(d, l) ? d[l] : void 0;
  }
  function Uo(l) {
    var d = this.__data__;
    return Pt ? d[l] !== void 0 : at.call(d, l);
  }
  function Ho(l, d) {
    var g = this.__data__;
    return this.size += this.has(l) ? 0 : 1, g[l] = Pt && d === void 0 ? n : d, this;
  }
  We.prototype.clear = Io, We.prototype.delete = Bo, We.prototype.get = jo, We.prototype.has = Uo, We.prototype.set = Ho;
  function Je(l) {
    var d = -1, g = l == null ? 0 : l.length;
    for (this.clear(); ++d < g; ) {
      var D = l[d];
      this.set(D[0], D[1]);
    }
  }
  function Yo() {
    this.__data__ = [], this.size = 0;
  }
  function Vo(l) {
    var d = this.__data__, g = Cn(d, l);
    if (g < 0)
      return !1;
    var D = d.length - 1;
    return g == D ? d.pop() : Q.call(d, g, 1), --this.size, !0;
  }
  function Wo(l) {
    var d = this.__data__, g = Cn(d, l);
    return g < 0 ? void 0 : d[g][1];
  }
  function qo(l) {
    return Cn(this.__data__, l) > -1;
  }
  function Go(l, d) {
    var g = this.__data__, D = Cn(g, l);
    return D < 0 ? (++this.size, g.push([l, d])) : g[D][1] = d, this;
  }
  Je.prototype.clear = Yo, Je.prototype.delete = Vo, Je.prototype.get = Wo, Je.prototype.has = qo, Je.prototype.set = Go;
  function ot(l) {
    var d = -1, g = l == null ? 0 : l.length;
    for (this.clear(); ++d < g; ) {
      var D = l[d];
      this.set(D[0], D[1]);
    }
  }
  function zo() {
    this.size = 0, this.__data__ = {
      hash: new We(),
      map: new (Ut || Je)(),
      string: new We()
    };
  }
  function Ko(l) {
    var d = Ht(this, l).delete(l);
    return this.size -= d ? 1 : 0, d;
  }
  function Jo(l) {
    return Ht(this, l).get(l);
  }
  function Xo(l) {
    return Ht(this, l).has(l);
  }
  function Zo(l, d) {
    var g = Ht(this, l), D = g.size;
    return g.set(l, d), this.size += g.size == D ? 0 : 1, this;
  }
  ot.prototype.clear = zo, ot.prototype.delete = Ko, ot.prototype.get = Jo, ot.prototype.has = Xo, ot.prototype.set = Zo;
  function kn(l) {
    var d = -1, g = l == null ? 0 : l.length;
    for (this.__data__ = new ot(); ++d < g; )
      this.add(l[d]);
  }
  function ca(l) {
    return this.__data__.set(l, n), this;
  }
  function Mn(l) {
    return this.__data__.has(l);
  }
  kn.prototype.add = kn.prototype.push = ca, kn.prototype.has = Mn;
  function ar(l) {
    var d = this.__data__ = new Je(l);
    this.size = d.size;
  }
  function di() {
    this.__data__ = new Je(), this.size = 0;
  }
  function Qo(l) {
    var d = this.__data__, g = d.delete(l);
    return this.size = d.size, g;
  }
  function es(l) {
    return this.__data__.get(l);
  }
  function ts(l) {
    return this.__data__.has(l);
  }
  function rs(l, d) {
    var g = this.__data__;
    if (g instanceof Je) {
      var D = g.__data__;
      if (!Ut || D.length < r - 1)
        return D.push([l, d]), this.size = ++g.size, this;
      g = this.__data__ = new ot(D);
    }
    return g.set(l, d), this.size = g.size, this;
  }
  ar.prototype.clear = di, ar.prototype.delete = Qo, ar.prototype.get = es, ar.prototype.has = ts, ar.prototype.set = rs;
  function ns(l, d) {
    var g = Rn(l), D = !g && ma(l), X = !g && !D && $n(l), j = !g && !D && !X && ga(l), pe = g || D || X || j, fe = pe ? Hr(l.length, String) : [], Ne = fe.length;
    for (var ve in l)
      at.call(l, ve) && !(pe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ve == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      X && (ve == "offset" || ve == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      j && (ve == "buffer" || ve == "byteLength" || ve == "byteOffset") || // Skip index properties.
      fs(ve, Ne))) && fe.push(ve);
    return fe;
  }
  function Cn(l, d) {
    for (var g = l.length; g--; )
      if (ha(l[g][0], d))
        return g;
    return -1;
  }
  function pi(l, d, g) {
    var D = d(l);
    return Rn(l) ? D : It(D, g(l));
  }
  function on(l) {
    return l == null ? l === void 0 ? C : E : Se && Se in Object(l) ? xr(l) : pa(l);
  }
  function fa(l) {
    return sr(l) && on(l) == s;
  }
  function da(l, d, g, D, X) {
    return l === d ? !0 : l == null || d == null || !sr(l) && !sr(d) ? l !== l && d !== d : is(l, d, g, D, da, X);
  }
  function is(l, d, g, D, X, j) {
    var pe = Rn(l), fe = Rn(d), Ne = pe ? u : or(l), ve = fe ? u : or(d);
    Ne = Ne == s ? x : Ne, ve = ve == s ? x : ve;
    var Xe = Ne == x, st = ve == x, Be = Ne == ve;
    if (Be && $n(l)) {
      if (!$n(d))
        return !1;
      pe = !0, Xe = !1;
    }
    if (Be && !Xe)
      return j || (j = new ar()), pe || ga(l) ? hi(l, d, g, D, X, j) : ls(l, d, Ne, g, D, X, j);
    if (!(g & i)) {
      var Ze = Xe && at.call(l, "__wrapped__"), qe = st && at.call(d, "__wrapped__");
      if (Ze || qe) {
        var Wr = Ze ? l.value() : l, Ar = qe ? d.value() : d;
        return j || (j = new ar()), X(Wr, Ar, g, D, j);
      }
    }
    return Be ? (j || (j = new ar()), us(l, d, g, D, X, j)) : !1;
  }
  function as(l) {
    if (!va(l) || ps(l))
      return !1;
    var d = ya(l) ? ci : de;
    return d.test(nt(l));
  }
  function os(l) {
    return sr(l) && yi(l.length) && !!J[on(l)];
  }
  function ss(l) {
    if (!hs(l))
      return nr(l);
    var d = [];
    for (var g in Object(l))
      at.call(l, g) && g != "constructor" && d.push(g);
    return d;
  }
  function hi(l, d, g, D, X, j) {
    var pe = g & i, fe = l.length, Ne = d.length;
    if (fe != Ne && !(pe && Ne > fe))
      return !1;
    var ve = j.get(l);
    if (ve && j.get(d))
      return ve == d;
    var Xe = -1, st = !0, Be = g & a ? new kn() : void 0;
    for (j.set(l, d), j.set(d, l); ++Xe < fe; ) {
      var Ze = l[Xe], qe = d[Xe];
      if (D)
        var Wr = pe ? D(qe, Ze, Xe, d, l, j) : D(Ze, qe, Xe, l, d, j);
      if (Wr !== void 0) {
        if (Wr)
          continue;
        st = !1;
        break;
      }
      if (Be) {
        if (!tr(d, function(Ar, ln) {
          if (!ze(Be, ln) && (Ze === Ar || X(Ze, Ar, g, D, j)))
            return Be.push(ln);
        })) {
          st = !1;
          break;
        }
      } else if (!(Ze === qe || X(Ze, qe, g, D, j))) {
        st = !1;
        break;
      }
    }
    return j.delete(l), j.delete(d), st;
  }
  function ls(l, d, g, D, X, j, pe) {
    switch (g) {
      case V:
        if (l.byteLength != d.byteLength || l.byteOffset != d.byteOffset)
          return !1;
        l = l.buffer, d = d.buffer;
      case z:
        return !(l.byteLength != d.byteLength || !j(new W(l), new W(d)));
      case c:
      case y:
      case b:
        return ha(+l, +d);
      case m:
        return l.name == d.name && l.message == d.message;
      case w:
      case T:
        return l == d + "";
      case v:
        var fe = rr;
      case _:
        var Ne = D & i;
        if (fe || (fe = Ke), l.size != d.size && !Ne)
          return !1;
        var ve = pe.get(l);
        if (ve)
          return ve == d;
        D |= a, pe.set(l, d);
        var Xe = hi(fe(l), fe(d), D, X, j, pe);
        return pe.delete(l), Xe;
      case k:
        if (fi)
          return fi.call(l) == fi.call(d);
    }
    return !1;
  }
  function us(l, d, g, D, X, j) {
    var pe = g & i, fe = sn(l), Ne = fe.length, ve = sn(d), Xe = ve.length;
    if (Ne != Xe && !pe)
      return !1;
    for (var st = Ne; st--; ) {
      var Be = fe[st];
      if (!(pe ? Be in d : at.call(d, Be)))
        return !1;
    }
    var Ze = j.get(l);
    if (Ze && j.get(d))
      return Ze == d;
    var qe = !0;
    j.set(l, d), j.set(d, l);
    for (var Wr = pe; ++st < Ne; ) {
      Be = fe[st];
      var Ar = l[Be], ln = d[Be];
      if (D)
        var Eu = pe ? D(ln, Ar, Be, d, l, j) : D(Ar, ln, Be, l, d, j);
      if (!(Eu === void 0 ? Ar === ln || X(Ar, ln, g, D, j) : Eu)) {
        qe = !1;
        break;
      }
      Wr || (Wr = Be == "constructor");
    }
    if (qe && !Wr) {
      var ba = l.constructor, wa = d.constructor;
      ba != wa && "constructor" in l && "constructor" in d && !(typeof ba == "function" && ba instanceof ba && typeof wa == "function" && wa instanceof wa) && (qe = !1);
    }
    return j.delete(l), j.delete(d), qe;
  }
  function sn(l) {
    return pi(l, vi, cs);
  }
  function Ht(l, d) {
    var g = l.__data__;
    return ds(d) ? g[typeof d == "string" ? "string" : "hash"] : g.map;
  }
  function Er(l, d) {
    var g = it(l, d);
    return as(g) ? g : void 0;
  }
  function xr(l) {
    var d = at.call(l, Se), g = l[Se];
    try {
      l[Se] = void 0;
      var D = !0;
    } catch {
    }
    var X = Dn.call(l);
    return D && (d ? l[Se] = g : delete l[Se]), X;
  }
  var cs = Ie ? function(l) {
    return l == null ? [] : (l = Object(l), Or(Ie(l), function(d) {
      return ae.call(l, d);
    }));
  } : ys, or = on;
  (yt && or(new yt(new ArrayBuffer(1))) != V || Ut && or(new Ut()) != v || ir && or(ir.resolve()) != O || At && or(new At()) != _ || an && or(new an()) != R) && (or = function(l) {
    var d = on(l), g = d == x ? l.constructor : void 0, D = g ? nt(g) : "";
    if (D)
      switch (D) {
        case _r:
          return V;
        case Tr:
          return v;
        case Lo:
          return O;
        case No:
          return _;
        case Fo:
          return R;
      }
    return d;
  });
  function fs(l, d) {
    return d = d ?? o, !!d && (typeof l == "number" || we.test(l)) && l > -1 && l % 1 == 0 && l < d;
  }
  function ds(l) {
    var d = typeof l;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? l !== "__proto__" : l === null;
  }
  function ps(l) {
    return !!Pn && Pn in l;
  }
  function hs(l) {
    var d = l && l.constructor, g = typeof d == "function" && d.prototype || Et;
    return l === g;
  }
  function pa(l) {
    return Dn.call(l);
  }
  function nt(l) {
    if (l != null) {
      try {
        return nn.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function ha(l, d) {
    return l === d || l !== l && d !== d;
  }
  var ma = fa(/* @__PURE__ */ function() {
    return arguments;
  }()) ? fa : function(l) {
    return sr(l) && at.call(l, "callee") && !ae.call(l, "callee");
  }, Rn = Array.isArray;
  function mi(l) {
    return l != null && yi(l.length) && !ya(l);
  }
  var $n = xt || vs;
  function ms(l, d) {
    return da(l, d);
  }
  function ya(l) {
    if (!va(l))
      return !1;
    var d = on(l);
    return d == S || d == h || d == f || d == p;
  }
  function yi(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function va(l) {
    var d = typeof l;
    return l != null && (d == "object" || d == "function");
  }
  function sr(l) {
    return l != null && typeof l == "object";
  }
  var ga = er ? Yr(er) : os;
  function vi(l) {
    return mi(l) ? ns(l) : ss(l);
  }
  function ys() {
    return [];
  }
  function vs() {
    return !1;
  }
  e.exports = ms;
})(ro, ro.exports);
ro.exports;
var vt = H(null), xa = H(null), Ys = $l(null), Aa = H(null), xc = null;
Me({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  vt.value = t ? Au(t) : null, xa.value = e, Aa.value = null;
  let a = typeof window > "u";
  return xc = ew(a, n, i), a || (Sl.init({ initialPage: e, resolveComponent: r, swapComponent: async (o) => {
    vt.value = Au(o.component), xa.value = o.page, Aa.value = o.preserveState ? Aa.value : Date.now();
  } }), Sl.on("navigate", () => xc.forceUpdate())), () => {
    if (vt.value) {
      vt.value.inheritAttrs = !!vt.value.inheritAttrs;
      let o = se(vt.value, { ...xa.value.props, key: Aa.value });
      return Ys.value && (vt.value.layout = Ys.value, Ys.value = null), vt.value.layout ? typeof vt.value.layout == "function" ? vt.value.layout(se, o) : (Array.isArray(vt.value.layout) ? vt.value.layout : [vt.value.layout]).concat(o).reverse().reduce((s, u) => (u.inheritAttrs = !!u.inheritAttrs, se(u, { ...xa.value.props }, () => s))) : o;
    }
  };
} });
Me({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(e) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
}, renderTagStart(e) {
  e.props = e.props || {}, e.props.inertia = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  let t = Object.keys(e.props).reduce((r, n) => {
    let i = e.props[n];
    return ["key", "head-key"].includes(n) ? r : i === "" ? r + ` ${n}` : r + ` ${n}="${i}"`;
  }, "");
  return `<${e.type}${t}>`;
}, renderTagChildren(e) {
  return typeof e.children == "string" ? e.children : e.children.reduce((t, r) => t + this.renderTag(r), "");
}, isFunctionNode(e) {
  return typeof e.type == "function";
}, isComponentNode(e) {
  return typeof e.type == "object";
}, isCommentNode(e) {
  return /(comment|cmt)/i.test(e.type.toString());
}, isFragmentNode(e) {
  return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
}, isTextNode(e) {
  return /(text|txt)/i.test(e.type.toString());
}, renderTag(e) {
  if (this.isTextNode(e)) return e.children;
  if (this.isFragmentNode(e) || this.isCommentNode(e)) return "";
  let t = this.renderTagStart(e);
  return e.children && (t += this.renderTagChildren(e)), this.isUnaryTag(e) || (t += `</${e.type}>`), t;
}, addTitleElement(e) {
  return this.title && !e.find((t) => t.startsWith("<title")) && e.push(`<title inertia>${this.title}</title>`), e;
}, renderNodes(e) {
  return this.addTitleElement(e.flatMap((t) => this.resolveNode(t)).map((t) => this.renderTag(t)).filter((t) => t));
}, resolveNode(e) {
  return this.isFunctionNode(e) ? this.resolveNode(e.type()) : this.isComponentNode(e) ? (console.warn("Using components in the <Head> component is not supported."), []) : this.isTextNode(e) && e.children ? e : this.isFragmentNode(e) && e.children ? e.children.flatMap((t) => this.resolveNode(t)) : this.isCommentNode(e) ? [] : e;
} }, render() {
  this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
} });
var rw = Me({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let n = e.as.toLowerCase(), i = e.method.toLowerCase(), [a, o] = Ed(i, e.href || "", e.data, e.queryStringArrayFormat);
    return n === "a" && i !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${i}" as="button">...</Link>`), se(e.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (s) => {
      tw(s) && (s.preventDefault(), Sl.visit(a, { data: o, method: i, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? i !== "get", only: e.only, except: e.except, headers: e.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, t);
  };
} }), nw = rw;
function iw(e, t) {
  return I(), B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    L("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const aw = ["href", "target"], ow = ["innerHTML"], sw = ["href", "target"], lw = ["innerHTML"], uw = ["innerHTML"], Ac = {
  __name: "GridLink",
  props: {
    type: {
      type: String
    },
    label: {
      type: [String, Number]
    },
    href: {
      type: String
    },
    target: {
      type: String
    }
  },
  setup(e) {
    return (t, r) => (I(), B(ct, null, [
      e.type === "download" ? (I(), B("a", {
        key: 0,
        class: "whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500",
        href: e.href,
        target: e.target ?? "_blank"
      }, [
        Ge(ge(iw), { class: "w-5 inline-block text-secondary align-middle" }),
        r[0] || (r[0] = Gr()),
        L("span", { innerHTML: e.label }, null, 8, ow)
      ], 8, aw)) : De("", !0),
      e.target ? (I(), B("a", {
        key: 1,
        class: "whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500",
        href: e.href,
        target: e.target
      }, [
        L("span", { innerHTML: e.label }, null, 8, lw)
      ], 8, sw)) : (I(), Gn(ge(nw), {
        key: 2,
        class: "whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500",
        href: e.href
      }, {
        default: bt(() => [
          L("span", { innerHTML: e.label }, null, 8, uw)
        ]),
        _: 1
      }, 8, ["href"]))
    ], 64));
  }
}, cw = ["innerHTML"], fw = {
  __name: "GridButton",
  props: {
    label: {
      type: String,
      default() {
        return "Submit";
      }
    },
    record: {
      type: Object,
      required: !0
    },
    columnIndex: {
      type: Number,
      required: !0
    },
    field: {
      type: String
    },
    events: {
      type: Object,
      default() {
        return Xi();
      }
    }
  },
  setup(e) {
    return (t, r) => (I(), B("button", {
      class: "btn-primary",
      onClick: r[0] || (r[0] = (n) => e.events.emit("clicked", { columnIndex: e.columnIndex, record: e.record }))
    }, [
      L("span", { innerHTML: e.label }, null, 8, cw)
    ]));
  }
};
function dw(e, t) {
  return I(), B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    L("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    })
  ]);
}
function pw(e, t) {
  return I(), B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    L("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    })
  ]);
}
function hw(e, t) {
  return I(), B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    L("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function mw(e, t) {
  return I(), B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    L("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function yw(e, t) {
  return I(), B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    L("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    }),
    L("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
function vw(e, t) {
  return I(), B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    L("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
function gw(e, t) {
  return I(), B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    L("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    })
  ]);
}
const bw = { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, ww = { class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" }, Sw = { class: "sm:flex sm:items-start" }, Ow = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, _w = { class: "mt-2" }, Tw = ["innerHTML"], Ew = { class: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse" }, xw = {
  __name: "DeleteConfirmModal",
  props: {
    open: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    message: {
      type: String,
      default: "Are you sure you want to delete this record?"
    },
    title: {
      type: String,
      default: "Delete"
    },
    buttonName: {
      type: String,
      default: "Delete"
    }
  },
  setup(e) {
    return (t, r) => (I(), Gn(ge(Tf), {
      as: "template",
      show: e.open
    }, {
      default: bt(() => [
        Ge(ge(Bh), {
          as: "div",
          class: "fixed z-10 inset-0 overflow-y-auto",
          onClose: r[2] || (r[2] = (n) => e.open = !1)
        }, {
          default: bt(() => [
            L("div", bw, [
              Ge(ge(sl), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: bt(() => [
                  Ge(ge(jh), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                ]),
                _: 1
              }),
              r[4] || (r[4] = L("span", {
                class: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true"
              }, "​", -1)),
              Ge(ge(sl), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              }, {
                default: bt(() => [
                  L("div", ww, [
                    L("div", Sw, [
                      r[3] || (r[3] = L("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                        L("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "h-6 w-6 text-red-600"
                        }, [
                          L("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          })
                        ])
                      ], -1)),
                      L("div", Ow, [
                        Ge(ge(Uh), {
                          as: "h3",
                          class: "text-lg leading-6 font-medium text-gray-900"
                        }, {
                          default: bt(() => [
                            Gr(ut(e.title), 1)
                          ]),
                          _: 1
                        }),
                        L("div", _w, [
                          L("p", {
                            class: "text-sm text-gray-500",
                            innerHTML: e.message
                          }, null, 8, Tw)
                        ])
                      ])
                    ]),
                    L("div", Ew, [
                      L("button", {
                        type: "button",
                        class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",
                        onClick: r[0] || (r[0] = (n) => t.$emit("destroy"))
                      }, ut(e.buttonName), 1),
                      L("button", {
                        type: "button",
                        class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm",
                        onClick: r[1] || (r[1] = (n) => t.$emit("close")),
                        ref: "cancelButtonRef"
                      }, "Cancel", 512)
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["show"]));
  }
};
/*!
  * vue-tippy v6.6.0
  * (c) 2024 
  * @license MIT
  */
var dt = "top", Rt = "bottom", $t = "right", pt = "left", Kl = "auto", na = [dt, Rt, $t, pt], Xn = "start", Ui = "end", Aw = "clippingParents", xd = "viewport", Ei = "popper", Pw = "reference", Pc = /* @__PURE__ */ na.reduce(function(e, t) {
  return e.concat([t + "-" + Xn, t + "-" + Ui]);
}, []), Ad = /* @__PURE__ */ [].concat(na, [Kl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xn, t + "-" + Ui]);
}, []), Dw = "beforeRead", kw = "read", Mw = "afterRead", Cw = "beforeMain", Rw = "main", $w = "afterMain", Lw = "beforeWrite", Nw = "write", Fw = "afterWrite", Iw = [Dw, kw, Mw, Cw, Rw, $w, Lw, Nw, Fw];
function vr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Kt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zn(e) {
  var t = Kt(e).Element;
  return e instanceof t || e instanceof Element;
}
function kt(e) {
  var t = Kt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pd(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Kt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Bw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !kt(a) || !vr(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function jw(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], a = t.attributes[n] || {}, o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = o.reduce(function(u, f) {
        return u[f] = "", u;
      }, {});
      !kt(i) || !vr(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
var Dd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Bw,
  effect: jw,
  requires: ["computeStyles"]
};
function mr(e) {
  return e.split("-")[0];
}
var Sn = Math.max, no = Math.min, Qn = Math.round;
function ei(e, t) {
  t === void 0 && (t = !1);
  var r = e.getBoundingClientRect(), n = 1, i = 1;
  if (kt(e) && t) {
    var a = e.offsetHeight, o = e.offsetWidth;
    o > 0 && (n = Qn(r.width) / o || 1), a > 0 && (i = Qn(r.height) / a || 1);
  }
  return {
    width: r.width / n,
    height: r.height / i,
    top: r.top / i,
    right: r.right / n,
    bottom: r.bottom / i,
    left: r.left / n,
    x: r.left / n,
    y: r.top / i
  };
}
function Jl(e) {
  var t = ei(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function kd(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Pd(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function gr(e) {
  return Kt(e).getComputedStyle(e);
}
function Uw(e) {
  return ["table", "td", "th"].indexOf(vr(e)) >= 0;
}
function rn(e) {
  return ((Zn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Oo(e) {
  return vr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pd(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    rn(e)
  );
}
function Dc(e) {
  return !kt(e) || // https://github.com/popperjs/popper-core/issues/837
  gr(e).position === "fixed" ? null : e.offsetParent;
}
function Hw(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, r = navigator.userAgent.indexOf("Trident") !== -1;
  if (r && kt(e)) {
    var n = gr(e);
    if (n.position === "fixed")
      return null;
  }
  for (var i = Oo(e); kt(i) && ["html", "body"].indexOf(vr(i)) < 0; ) {
    var a = gr(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ia(e) {
  for (var t = Kt(e), r = Dc(e); r && Uw(r) && gr(r).position === "static"; )
    r = Dc(r);
  return r && (vr(r) === "html" || vr(r) === "body" && gr(r).position === "static") ? t : r || Hw(e) || t;
}
function Xl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ri(e, t, r) {
  return Sn(e, no(t, r));
}
function Yw(e, t, r) {
  var n = Ri(e, t, r);
  return n > r ? r : n;
}
function Md() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Cd(e) {
  return Object.assign({}, Md(), e);
}
function Rd(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Vw = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Cd(typeof t != "number" ? t : Rd(t, na));
};
function Ww(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, o = r.modifiersData.popperOffsets, s = mr(r.placement), u = Xl(s), f = [pt, $t].indexOf(s) >= 0, c = f ? "height" : "width";
  if (!(!a || !o)) {
    var y = Vw(i.padding, r), m = Jl(a), S = u === "y" ? dt : pt, h = u === "y" ? Rt : $t, v = r.rects.reference[c] + r.rects.reference[u] - o[u] - r.rects.popper[c], b = o[u] - r.rects.reference[u], E = ia(a), x = E ? u === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, O = v / 2 - b / 2, p = y[S], w = x - m[c] - y[h], _ = x / 2 - m[c] / 2 + O, T = Ri(p, _, w), k = u;
    r.modifiersData[n] = (t = {}, t[k] = T, t.centerOffset = T - _, t);
  }
}
function qw(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || kd(t.elements.popper, i) && (t.elements.arrow = i));
}
var Gw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ww,
  effect: qw,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ti(e) {
  return e.split("-")[1];
}
var zw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Kw(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Qn(t * i) / i || 0,
    y: Qn(r * i) / i || 0
  };
}
function kc(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, u = e.gpuAcceleration, f = e.adaptive, c = e.roundOffsets, y = e.isFixed, m = c === !0 ? Kw(o) : typeof c == "function" ? c(o) : o, S = m.x, h = S === void 0 ? 0 : S, v = m.y, b = v === void 0 ? 0 : v, E = o.hasOwnProperty("x"), x = o.hasOwnProperty("y"), O = pt, p = dt, w = window;
  if (f) {
    var _ = ia(r), T = "clientHeight", k = "clientWidth";
    if (_ === Kt(r) && (_ = rn(r), gr(_).position !== "static" && s === "absolute" && (T = "scrollHeight", k = "scrollWidth")), _ = _, i === dt || (i === pt || i === $t) && a === Ui) {
      p = Rt;
      var C = y && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[T]
      );
      b -= C - n.height, b *= u ? 1 : -1;
    }
    if (i === pt || (i === dt || i === Rt) && a === Ui) {
      O = $t;
      var R = y && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[k]
      );
      h -= R - n.width, h *= u ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: s
  }, f && zw);
  if (u) {
    var V;
    return Object.assign({}, z, (V = {}, V[p] = x ? "0" : "", V[O] = E ? "0" : "", V.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", V));
  }
  return Object.assign({}, z, (t = {}, t[p] = x ? b + "px" : "", t[O] = E ? h + "px" : "", t.transform = "", t));
}
function Jw(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, o = a === void 0 ? !0 : a, s = r.roundOffsets, u = s === void 0 ? !0 : s, f = {
    placement: mr(t.placement),
    variation: ti(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, kc(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, kc(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var Xw = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Jw,
  data: {}
}, Pa = {
  passive: !0
};
function Zw(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, o = n.resize, s = o === void 0 ? !0 : o, u = Kt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && f.forEach(function(c) {
    c.addEventListener("scroll", r.update, Pa);
  }), s && u.addEventListener("resize", r.update, Pa), function() {
    a && f.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Pa);
    }), s && u.removeEventListener("resize", r.update, Pa);
  };
}
var Qw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zw,
  data: {}
}, e0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ua(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return e0[t];
  });
}
var t0 = {
  start: "end",
  end: "start"
};
function Mc(e) {
  return e.replace(/start|end/g, function(t) {
    return t0[t];
  });
}
function Zl(e) {
  var t = Kt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ql(e) {
  return ei(rn(e)).left + Zl(e).scrollLeft;
}
function r0(e) {
  var t = Kt(e), r = rn(e), n = t.visualViewport, i = r.clientWidth, a = r.clientHeight, o = 0, s = 0;
  return n && (i = n.width, a = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = n.offsetLeft, s = n.offsetTop)), {
    width: i,
    height: a,
    x: o + Ql(e),
    y: s
  };
}
function n0(e) {
  var t, r = rn(e), n = Zl(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Sn(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Sn(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Ql(e), u = -n.scrollTop;
  return gr(i || r).direction === "rtl" && (s += Sn(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: u
  };
}
function eu(e) {
  var t = gr(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function $d(e) {
  return ["html", "body", "#document"].indexOf(vr(e)) >= 0 ? e.ownerDocument.body : kt(e) && eu(e) ? e : $d(Oo(e));
}
function $i(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = $d(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Kt(n), o = i ? [a].concat(a.visualViewport || [], eu(n) ? n : []) : n, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat($i(Oo(o)))
  );
}
function Ol(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function i0(e) {
  var t = ei(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Cc(e, t) {
  return t === xd ? Ol(r0(e)) : Zn(t) ? i0(t) : Ol(n0(rn(e)));
}
function a0(e) {
  var t = $i(Oo(e)), r = ["absolute", "fixed"].indexOf(gr(e).position) >= 0, n = r && kt(e) ? ia(e) : e;
  return Zn(n) ? t.filter(function(i) {
    return Zn(i) && kd(i, n) && vr(i) !== "body" && (r ? gr(i).position !== "static" : !0);
  }) : [];
}
function o0(e, t, r) {
  var n = t === "clippingParents" ? a0(e) : [].concat(t), i = [].concat(n, [r]), a = i[0], o = i.reduce(function(s, u) {
    var f = Cc(e, u);
    return s.top = Sn(f.top, s.top), s.right = no(f.right, s.right), s.bottom = no(f.bottom, s.bottom), s.left = Sn(f.left, s.left), s;
  }, Cc(e, a));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Ld(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? mr(n) : null, a = n ? ti(n) : null, o = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, u;
  switch (i) {
    case dt:
      u = {
        x: o,
        y: t.y - r.height
      };
      break;
    case Rt:
      u = {
        x: o,
        y: t.y + t.height
      };
      break;
    case $t:
      u = {
        x: t.x + t.width,
        y: s
      };
      break;
    case pt:
      u = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var f = i ? Xl(i) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (a) {
      case Xn:
        u[f] = u[f] - (t[c] / 2 - r[c] / 2);
        break;
      case Ui:
        u[f] = u[f] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return u;
}
function Hi(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.boundary, o = a === void 0 ? Aw : a, s = r.rootBoundary, u = s === void 0 ? xd : s, f = r.elementContext, c = f === void 0 ? Ei : f, y = r.altBoundary, m = y === void 0 ? !1 : y, S = r.padding, h = S === void 0 ? 0 : S, v = Cd(typeof h != "number" ? h : Rd(h, na)), b = c === Ei ? Pw : Ei, E = e.rects.popper, x = e.elements[m ? b : c], O = o0(Zn(x) ? x : x.contextElement || rn(e.elements.popper), o, u), p = ei(e.elements.reference), w = Ld({
    reference: p,
    element: E,
    placement: i
  }), _ = Ol(Object.assign({}, E, w)), T = c === Ei ? _ : p, k = {
    top: O.top - T.top + v.top,
    bottom: T.bottom - O.bottom + v.bottom,
    left: O.left - T.left + v.left,
    right: T.right - O.right + v.right
  }, C = e.modifiersData.offset;
  if (c === Ei && C) {
    var R = C[i];
    Object.keys(k).forEach(function(z) {
      var V = [$t, Rt].indexOf(z) >= 0 ? 1 : -1, q = [dt, Rt].indexOf(z) >= 0 ? "y" : "x";
      k[z] += R[q] * V;
    });
  }
  return k;
}
function s0(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, o = r.padding, s = r.flipVariations, u = r.allowedAutoPlacements, f = u === void 0 ? Ad : u, c = ti(n), y = c ? s ? Pc : Pc.filter(function(h) {
    return ti(h) === c;
  }) : na, m = y.filter(function(h) {
    return f.indexOf(h) >= 0;
  });
  m.length === 0 && (m = y);
  var S = m.reduce(function(h, v) {
    return h[v] = Hi(e, {
      placement: v,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[mr(v)], h;
  }, {});
  return Object.keys(S).sort(function(h, v) {
    return S[h] - S[v];
  });
}
function l0(e) {
  if (mr(e) === Kl)
    return [];
  var t = Ua(e);
  return [Mc(e), t, Mc(t)];
}
function u0(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !0 : o, u = r.fallbackPlacements, f = r.padding, c = r.boundary, y = r.rootBoundary, m = r.altBoundary, S = r.flipVariations, h = S === void 0 ? !0 : S, v = r.allowedAutoPlacements, b = t.options.placement, E = mr(b), x = E === b, O = u || (x || !h ? [Ua(b)] : l0(b)), p = [b].concat(O).reduce(function(we, J) {
      return we.concat(mr(J) === Kl ? s0(t, {
        placement: J,
        boundary: c,
        rootBoundary: y,
        padding: f,
        flipVariations: h,
        allowedAutoPlacements: v
      }) : J);
    }, []), w = t.rects.reference, _ = t.rects.popper, T = /* @__PURE__ */ new Map(), k = !0, C = p[0], R = 0; R < p.length; R++) {
      var z = p[R], V = mr(z), q = ti(z) === Xn, ue = [dt, Rt].indexOf(V) >= 0, re = ue ? "width" : "height", ne = Hi(t, {
        placement: z,
        boundary: c,
        rootBoundary: y,
        altBoundary: m,
        padding: f
      }), ye = ue ? q ? $t : pt : q ? Rt : dt;
      w[re] > _[re] && (ye = Ua(ye));
      var Oe = Ua(ye), Le = [];
      if (a && Le.push(ne[V] <= 0), s && Le.push(ne[ye] <= 0, ne[Oe] <= 0), Le.every(function(we) {
        return we;
      })) {
        C = z, k = !1;
        break;
      }
      T.set(z, Le);
    }
    if (k)
      for (var K = h ? 3 : 1, te = function(J) {
        var Fe = p.find(function(Xt) {
          var Ce = T.get(Xt);
          if (Ce)
            return Ce.slice(0, J).every(function(Ft) {
              return Ft;
            });
        });
        if (Fe)
          return C = Fe, "break";
      }, ie = K; ie > 0; ie--) {
        var de = te(ie);
        if (de === "break") break;
      }
    t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0);
  }
}
var c0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: u0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Rc(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function $c(e) {
  return [dt, $t, Rt, pt].some(function(t) {
    return e[t] >= 0;
  });
}
function f0(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Hi(t, {
    elementContext: "reference"
  }), s = Hi(t, {
    altBoundary: !0
  }), u = Rc(o, n), f = Rc(s, i, a), c = $c(u), y = $c(f);
  t.modifiersData[r] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: y
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": y
  });
}
var d0 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: f0
};
function p0(e, t, r) {
  var n = mr(e), i = [pt, dt].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [pt, $t].indexOf(n) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function h0(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, o = Ad.reduce(function(c, y) {
    return c[y] = p0(y, t.rects, a), c;
  }, {}), s = o[t.placement], u = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = o;
}
var m0 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: h0
};
function y0(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ld({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
var v0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: y0,
  data: {}
};
function g0(e) {
  return e === "x" ? "y" : "x";
}
function b0(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !1 : o, u = r.boundary, f = r.rootBoundary, c = r.altBoundary, y = r.padding, m = r.tether, S = m === void 0 ? !0 : m, h = r.tetherOffset, v = h === void 0 ? 0 : h, b = Hi(t, {
    boundary: u,
    rootBoundary: f,
    padding: y,
    altBoundary: c
  }), E = mr(t.placement), x = ti(t.placement), O = !x, p = Xl(E), w = g0(p), _ = t.modifiersData.popperOffsets, T = t.rects.reference, k = t.rects.popper, C = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, R = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (_) {
    if (a) {
      var q, ue = p === "y" ? dt : pt, re = p === "y" ? Rt : $t, ne = p === "y" ? "height" : "width", ye = _[p], Oe = ye + b[ue], Le = ye - b[re], K = S ? -k[ne] / 2 : 0, te = x === Xn ? T[ne] : k[ne], ie = x === Xn ? -k[ne] : -T[ne], de = t.elements.arrow, we = S && de ? Jl(de) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Md(), Fe = J[ue], Xt = J[re], Ce = Ri(0, T[ne], we[ne]), Ft = O ? T[ne] / 2 - K - Ce - Fe - R.mainAxis : te - Ce - Fe - R.mainAxis, mt = O ? -T[ne] / 2 + K + Ce + Xt + R.mainAxis : ie + Ce + Xt + R.mainAxis, _t = t.elements.arrow && ia(t.elements.arrow), Zt = _t ? p === "y" ? _t.clientTop || 0 : _t.clientLeft || 0 : 0, Qt = (q = z == null ? void 0 : z[p]) != null ? q : 0, er = ye + Ft - Qt - Zt, Or = ye + mt - Qt, It = Ri(S ? no(Oe, er) : Oe, ye, S ? Sn(Le, Or) : Le);
      _[p] = It, V[p] = It - ye;
    }
    if (s) {
      var tr, Hr = p === "x" ? dt : pt, Yr = p === "x" ? Rt : $t, ze = _[w], it = w === "y" ? "height" : "width", rr = ze + b[Hr], Tt = ze - b[Yr], Ke = [dt, pt].indexOf(E) !== -1, Bt = (tr = z == null ? void 0 : z[w]) != null ? tr : 0, Vr = Ke ? rr : ze - T[it] - k[it] - Bt + R.altAxis, Et = Ke ? ze + T[it] + k[it] - Bt - R.altAxis : Tt, jt = S && Ke ? Yw(Vr, ze, Et) : Ri(S ? Vr : rr, ze, S ? Et : Tt);
      _[w] = jt, V[w] = jt - ze;
    }
    t.modifiersData[n] = V;
  }
}
var w0 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: b0,
  requiresIfExists: ["offset"]
};
function S0(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function O0(e) {
  return e === Kt(e) || !kt(e) ? Zl(e) : S0(e);
}
function _0(e) {
  var t = e.getBoundingClientRect(), r = Qn(t.width) / e.offsetWidth || 1, n = Qn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function T0(e, t, r) {
  r === void 0 && (r = !1);
  var n = kt(t), i = kt(t) && _0(t), a = rn(t), o = ei(e, i), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((vr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  eu(a)) && (s = O0(t)), kt(t) ? (u = ei(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Ql(a))), {
    x: o.left + s.scrollLeft - u.x,
    y: o.top + s.scrollTop - u.y,
    width: o.width,
    height: o.height
  };
}
function E0(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(s) {
      if (!r.has(s)) {
        var u = t.get(s);
        u && i(u);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function x0(e) {
  var t = E0(e);
  return Iw.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function A0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function P0(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Lc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Nc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function D0(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Lc : i;
  return function(s, u, f) {
    f === void 0 && (f = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Lc, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: u
      },
      attributes: {},
      styles: {}
    }, y = [], m = !1, S = {
      state: c,
      setOptions: function(E) {
        var x = typeof E == "function" ? E(c.options) : E;
        v(), c.options = Object.assign({}, a, c.options, x), c.scrollParents = {
          reference: Zn(s) ? $i(s) : s.contextElement ? $i(s.contextElement) : [],
          popper: $i(u)
        };
        var O = x0(P0([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = O.filter(function(p) {
          return p.enabled;
        }), h(), S.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var E = c.elements, x = E.reference, O = E.popper;
          if (Nc(x, O)) {
            c.rects = {
              reference: T0(x, ia(O), c.options.strategy === "fixed"),
              popper: Jl(O)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var p = 0; p < c.orderedModifiers.length; p++) {
              if (c.reset === !0) {
                c.reset = !1, p = -1;
                continue;
              }
              var w = c.orderedModifiers[p], _ = w.fn, T = w.options, k = T === void 0 ? {} : T, C = w.name;
              typeof _ == "function" && (c = _({
                state: c,
                options: k,
                name: C,
                instance: S
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: A0(function() {
        return new Promise(function(b) {
          S.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        v(), m = !0;
      }
    };
    if (!Nc(s, u))
      return S;
    S.setOptions(f).then(function(b) {
      !m && f.onFirstUpdate && f.onFirstUpdate(b);
    });
    function h() {
      c.orderedModifiers.forEach(function(b) {
        var E = b.name, x = b.options, O = x === void 0 ? {} : x, p = b.effect;
        if (typeof p == "function") {
          var w = p({
            state: c,
            name: E,
            instance: S,
            options: O
          }), _ = function() {
          };
          y.push(w || _);
        }
      });
    }
    function v() {
      y.forEach(function(b) {
        return b();
      }), y = [];
    }
    return S;
  };
}
var k0 = [Qw, v0, Xw, Dd, m0, c0, w0, Gw, d0], M0 = /* @__PURE__ */ D0({
  defaultModifiers: k0
}), C0 = "tippy-box", Nd = "tippy-content", Fd = "tippy-backdrop", Id = "tippy-arrow", Bd = "tippy-svg-arrow", fn = {
  passive: !0,
  capture: !0
}, jd = function() {
  return document.body;
};
function Vs(e, t, r) {
  if (Array.isArray(e)) {
    var n = e[t];
    return n ?? (Array.isArray(r) ? r[t] : r);
  }
  return e;
}
function tu(e, t) {
  var r = {}.toString.call(e);
  return r.indexOf("[object") === 0 && r.indexOf(t + "]") > -1;
}
function Ud(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function Fc(e, t) {
  if (t === 0)
    return e;
  var r;
  return function(n) {
    clearTimeout(r), r = setTimeout(function() {
      e(n);
    }, t);
  };
}
function R0(e, t) {
  var r = Object.assign({}, e);
  return t.forEach(function(n) {
    delete r[n];
  }), r;
}
function $0(e) {
  return e.split(/\s+/).filter(Boolean);
}
function hn(e) {
  return [].concat(e);
}
function Ic(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function L0(e) {
  return e.filter(function(t, r) {
    return e.indexOf(t) === r;
  });
}
function Hd(e) {
  return e.split("-")[0];
}
function ri(e) {
  return [].slice.call(e);
}
function Bc(e) {
  return Object.keys(e).reduce(function(t, r) {
    return e[r] !== void 0 && (t[r] = e[r]), t;
  }, {});
}
function On() {
  return document.createElement("div");
}
function _o(e) {
  return ["Element", "Fragment"].some(function(t) {
    return tu(e, t);
  });
}
function N0(e) {
  return tu(e, "NodeList");
}
function ru(e) {
  return tu(e, "MouseEvent");
}
function F0(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function I0(e) {
  return _o(e) ? [e] : N0(e) ? ri(e) : Array.isArray(e) ? e : ri(document.querySelectorAll(e));
}
function Ws(e, t) {
  e.forEach(function(r) {
    r && (r.style.transitionDuration = t + "ms");
  });
}
function Yi(e, t) {
  e.forEach(function(r) {
    r && r.setAttribute("data-state", t);
  });
}
function Yd(e) {
  var t, r = hn(e), n = r[0];
  return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document;
}
function B0(e, t) {
  var r = t.clientX, n = t.clientY;
  return e.every(function(i) {
    var a = i.popperRect, o = i.popperState, s = i.props, u = s.interactiveBorder, f = Hd(o.placement), c = o.modifiersData.offset;
    if (!c)
      return !0;
    var y = f === "bottom" ? c.top.y : 0, m = f === "top" ? c.bottom.y : 0, S = f === "right" ? c.left.x : 0, h = f === "left" ? c.right.x : 0, v = a.top - n + y > u, b = n - a.bottom - m > u, E = a.left - r + S > u, x = r - a.right - h > u;
    return v || b || E || x;
  });
}
function qs(e, t, r) {
  var n = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    e[n](i, r);
  });
}
function jc(e, t) {
  for (var r = t; r; ) {
    var n;
    if (e.contains(r))
      return !0;
    r = r.getRootNode == null || (n = r.getRootNode()) == null ? void 0 : n.host;
  }
  return !1;
}
var pr = {
  isTouch: !1
}, Uc = 0;
function j0() {
  pr.isTouch || (pr.isTouch = !0, window.performance && document.addEventListener("mousemove", Vd));
}
function Vd() {
  var e = performance.now();
  e - Uc < 20 && (pr.isTouch = !1, document.removeEventListener("mousemove", Vd)), Uc = e;
}
function U0() {
  var e = document.activeElement;
  if (F0(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function H0() {
  document.addEventListener("touchstart", j0, fn), window.addEventListener("blur", U0);
}
var Y0 = typeof window < "u" && typeof document < "u", V0 = Y0 ? (
  // @ts-ignore
  !!window.msCrypto
) : !1, W0 = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, q0 = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Vt = Object.assign({
  appendTo: jd,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, W0, q0), G0 = Object.keys(Vt), z0 = function(t) {
  var r = Object.keys(t);
  r.forEach(function(n) {
    Vt[n] = t[n];
  });
};
function Wd(e) {
  var t = e.plugins || [], r = t.reduce(function(n, i) {
    var a = i.name, o = i.defaultValue;
    if (a) {
      var s;
      n[a] = e[a] !== void 0 ? e[a] : (s = Vt[a]) != null ? s : o;
    }
    return n;
  }, {});
  return Object.assign({}, e, r);
}
function K0(e, t) {
  var r = t ? Object.keys(Wd(Object.assign({}, Vt, {
    plugins: t
  }))) : G0, n = r.reduce(function(i, a) {
    var o = (e.getAttribute("data-tippy-" + a) || "").trim();
    if (!o)
      return i;
    if (a === "content")
      i[a] = o;
    else
      try {
        i[a] = JSON.parse(o);
      } catch {
        i[a] = o;
      }
    return i;
  }, {});
  return n;
}
function Hc(e, t) {
  var r = Object.assign({}, t, {
    content: Ud(t.content, [e])
  }, t.ignoreAttributes ? {} : K0(e, t.plugins));
  return r.aria = Object.assign({}, Vt.aria, r.aria), r.aria = {
    expanded: r.aria.expanded === "auto" ? t.interactive : r.aria.expanded,
    content: r.aria.content === "auto" ? t.interactive ? null : "describedby" : r.aria.content
  }, r;
}
var J0 = function() {
  return "innerHTML";
};
function _l(e, t) {
  e[J0()] = t;
}
function Yc(e) {
  var t = On();
  return e === !0 ? t.className = Id : (t.className = Bd, _o(e) ? t.appendChild(e) : _l(t, e)), t;
}
function Vc(e, t) {
  _o(t.content) ? (_l(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? _l(e, t.content) : e.textContent = t.content);
}
function io(e) {
  var t = e.firstElementChild, r = ri(t.children);
  return {
    box: t,
    content: r.find(function(n) {
      return n.classList.contains(Nd);
    }),
    arrow: r.find(function(n) {
      return n.classList.contains(Id) || n.classList.contains(Bd);
    }),
    backdrop: r.find(function(n) {
      return n.classList.contains(Fd);
    })
  };
}
function qd(e) {
  var t = On(), r = On();
  r.className = C0, r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1");
  var n = On();
  n.className = Nd, n.setAttribute("data-state", "hidden"), Vc(n, e.props), t.appendChild(r), r.appendChild(n), i(e.props, e.props);
  function i(a, o) {
    var s = io(t), u = s.box, f = s.content, c = s.arrow;
    o.theme ? u.setAttribute("data-theme", o.theme) : u.removeAttribute("data-theme"), typeof o.animation == "string" ? u.setAttribute("data-animation", o.animation) : u.removeAttribute("data-animation"), o.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof o.maxWidth == "number" ? o.maxWidth + "px" : o.maxWidth, o.role ? u.setAttribute("role", o.role) : u.removeAttribute("role"), (a.content !== o.content || a.allowHTML !== o.allowHTML) && Vc(f, e.props), o.arrow ? c ? a.arrow !== o.arrow && (u.removeChild(c), u.appendChild(Yc(o.arrow))) : u.appendChild(Yc(o.arrow)) : c && u.removeChild(c);
  }
  return {
    popper: t,
    onUpdate: i
  };
}
qd.$$tippy = !0;
var X0 = 1, Da = [], Gs = [];
function Z0(e, t) {
  var r = Hc(e, Object.assign({}, Vt, Wd(Bc(t)))), n, i, a, o = !1, s = !1, u = !1, f = !1, c, y, m, S = [], h = Fc(er, r.interactiveDebounce), v, b = X0++, E = null, x = L0(r.plugins), O = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, p = {
    // properties
    id: b,
    reference: e,
    popper: On(),
    popperInstance: E,
    props: r,
    state: O,
    plugins: x,
    // methods
    clearDelayTimeouts: Vr,
    setProps: Et,
    setContent: jt,
    show: nn,
    hide: at,
    hideWithInteractivity: Pn,
    enable: Ke,
    disable: Bt,
    unmount: Dn,
    destroy: ci
  };
  if (!r.render)
    return p;
  var w = r.render(p), _ = w.popper, T = w.onUpdate;
  _.setAttribute("data-tippy-root", ""), _.id = "tippy-" + p.id, p.popper = _, e._tippy = p, _._tippy = p;
  var k = x.map(function(P) {
    return P.fn(p);
  }), C = e.hasAttribute("aria-expanded");
  return _t(), K(), ye(), Oe("onCreate", [p]), r.showOnCreate && rr(), _.addEventListener("mouseenter", function() {
    p.props.interactive && p.state.isVisible && p.clearDelayTimeouts();
  }), _.addEventListener("mouseleave", function() {
    p.props.interactive && p.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", h);
  }), p;
  function R() {
    var P = p.props.touch;
    return Array.isArray(P) ? P : [P, 0];
  }
  function z() {
    return R()[0] === "hold";
  }
  function V() {
    var P;
    return !!((P = p.props.render) != null && P.$$tippy);
  }
  function q() {
    return v || e;
  }
  function ue() {
    var P = q().parentNode;
    return P ? Yd(P) : document;
  }
  function re() {
    return io(_);
  }
  function ne(P) {
    return p.state.isMounted && !p.state.isVisible || pr.isTouch || c && c.type === "focus" ? 0 : Vs(p.props.delay, P ? 0 : 1, Vt.delay);
  }
  function ye(P) {
    P === void 0 && (P = !1), _.style.pointerEvents = p.props.interactive && !P ? "" : "none", _.style.zIndex = "" + p.props.zIndex;
  }
  function Oe(P, N, W) {
    if (W === void 0 && (W = !0), k.forEach(function(Q) {
      Q[P] && Q[P].apply(Q, N);
    }), W) {
      var ae;
      (ae = p.props)[P].apply(ae, N);
    }
  }
  function Le() {
    var P = p.props.aria;
    if (P.content) {
      var N = "aria-" + P.content, W = _.id, ae = hn(p.props.triggerTarget || e);
      ae.forEach(function(Q) {
        var Se = Q.getAttribute(N);
        if (p.state.isVisible)
          Q.setAttribute(N, Se ? Se + " " + W : W);
        else {
          var Ie = Se && Se.replace(W, "").trim();
          Ie ? Q.setAttribute(N, Ie) : Q.removeAttribute(N);
        }
      });
    }
  }
  function K() {
    if (!(C || !p.props.aria.expanded)) {
      var P = hn(p.props.triggerTarget || e);
      P.forEach(function(N) {
        p.props.interactive ? N.setAttribute("aria-expanded", p.state.isVisible && N === q() ? "true" : "false") : N.removeAttribute("aria-expanded");
      });
    }
  }
  function te() {
    ue().removeEventListener("mousemove", h), Da = Da.filter(function(P) {
      return P !== h;
    });
  }
  function ie(P) {
    if (!(pr.isTouch && (u || P.type === "mousedown"))) {
      var N = P.composedPath && P.composedPath()[0] || P.target;
      if (!(p.props.interactive && jc(_, N))) {
        if (hn(p.props.triggerTarget || e).some(function(W) {
          return jc(W, N);
        })) {
          if (pr.isTouch || p.state.isVisible && p.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Oe("onClickOutside", [p, P]);
        p.props.hideOnClick === !0 && (p.clearDelayTimeouts(), p.hide(), s = !0, setTimeout(function() {
          s = !1;
        }), p.state.isMounted || Fe());
      }
    }
  }
  function de() {
    u = !0;
  }
  function we() {
    u = !1;
  }
  function J() {
    var P = ue();
    P.addEventListener("mousedown", ie, !0), P.addEventListener("touchend", ie, fn), P.addEventListener("touchstart", we, fn), P.addEventListener("touchmove", de, fn);
  }
  function Fe() {
    var P = ue();
    P.removeEventListener("mousedown", ie, !0), P.removeEventListener("touchend", ie, fn), P.removeEventListener("touchstart", we, fn), P.removeEventListener("touchmove", de, fn);
  }
  function Xt(P, N) {
    Ft(P, function() {
      !p.state.isVisible && _.parentNode && _.parentNode.contains(_) && N();
    });
  }
  function Ce(P, N) {
    Ft(P, N);
  }
  function Ft(P, N) {
    var W = re().box;
    function ae(Q) {
      Q.target === W && (qs(W, "remove", ae), N());
    }
    if (P === 0)
      return N();
    qs(W, "remove", y), qs(W, "add", ae), y = ae;
  }
  function mt(P, N, W) {
    W === void 0 && (W = !1);
    var ae = hn(p.props.triggerTarget || e);
    ae.forEach(function(Q) {
      Q.addEventListener(P, N, W), S.push({
        node: Q,
        eventType: P,
        handler: N,
        options: W
      });
    });
  }
  function _t() {
    z() && (mt("touchstart", Qt, {
      passive: !0
    }), mt("touchend", Or, {
      passive: !0
    })), $0(p.props.trigger).forEach(function(P) {
      if (P !== "manual")
        switch (mt(P, Qt), P) {
          case "mouseenter":
            mt("mouseleave", Or);
            break;
          case "focus":
            mt(V0 ? "focusout" : "blur", It);
            break;
          case "focusin":
            mt("focusout", It);
            break;
        }
    });
  }
  function Zt() {
    S.forEach(function(P) {
      var N = P.node, W = P.eventType, ae = P.handler, Q = P.options;
      N.removeEventListener(W, ae, Q);
    }), S = [];
  }
  function Qt(P) {
    var N, W = !1;
    if (!(!p.state.isEnabled || tr(P) || s)) {
      var ae = ((N = c) == null ? void 0 : N.type) === "focus";
      c = P, v = P.currentTarget, K(), !p.state.isVisible && ru(P) && Da.forEach(function(Q) {
        return Q(P);
      }), P.type === "click" && (p.props.trigger.indexOf("mouseenter") < 0 || o) && p.props.hideOnClick !== !1 && p.state.isVisible ? W = !0 : rr(P), P.type === "click" && (o = !W), W && !ae && Tt(P);
    }
  }
  function er(P) {
    var N = P.target, W = q().contains(N) || _.contains(N);
    if (!(P.type === "mousemove" && W)) {
      var ae = it().concat(_).map(function(Q) {
        var Se, Ie = Q._tippy, xt = (Se = Ie.popperInstance) == null ? void 0 : Se.state;
        return xt ? {
          popperRect: Q.getBoundingClientRect(),
          popperState: xt,
          props: r
        } : null;
      }).filter(Boolean);
      B0(ae, P) && (te(), Tt(P));
    }
  }
  function Or(P) {
    var N = tr(P) || p.props.trigger.indexOf("click") >= 0 && o;
    if (!N) {
      if (p.props.interactive) {
        p.hideWithInteractivity(P);
        return;
      }
      Tt(P);
    }
  }
  function It(P) {
    p.props.trigger.indexOf("focusin") < 0 && P.target !== q() || p.props.interactive && P.relatedTarget && _.contains(P.relatedTarget) || Tt(P);
  }
  function tr(P) {
    return pr.isTouch ? z() !== P.type.indexOf("touch") >= 0 : !1;
  }
  function Hr() {
    Yr();
    var P = p.props, N = P.popperOptions, W = P.placement, ae = P.offset, Q = P.getReferenceClientRect, Se = P.moveTransition, Ie = V() ? io(_).arrow : null, xt = Q ? {
      getBoundingClientRect: Q,
      contextElement: Q.contextElement || q()
    } : e, nr = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(ir) {
        var At = ir.state;
        if (V()) {
          var an = re(), Pt = an.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(_r) {
            _r === "placement" ? Pt.setAttribute("data-placement", At.placement) : At.attributes.popper["data-popper-" + _r] ? Pt.setAttribute("data-" + _r, "") : Pt.removeAttribute("data-" + _r);
          }), At.attributes.popper = {};
        }
      }
    }, yt = [{
      name: "offset",
      options: {
        offset: ae
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !Se
      }
    }, nr];
    V() && Ie && yt.push({
      name: "arrow",
      options: {
        element: Ie,
        padding: 3
      }
    }), yt.push.apply(yt, (N == null ? void 0 : N.modifiers) || []), p.popperInstance = M0(xt, _, Object.assign({}, N, {
      placement: W,
      onFirstUpdate: m,
      modifiers: yt
    }));
  }
  function Yr() {
    p.popperInstance && (p.popperInstance.destroy(), p.popperInstance = null);
  }
  function ze() {
    var P = p.props.appendTo, N, W = q();
    p.props.interactive && P === jd || P === "parent" ? N = W.parentNode : N = Ud(P, [W]), N.contains(_) || N.appendChild(_), p.state.isMounted = !0, Hr();
  }
  function it() {
    return ri(_.querySelectorAll("[data-tippy-root]"));
  }
  function rr(P) {
    p.clearDelayTimeouts(), P && Oe("onTrigger", [p, P]), J();
    var N = ne(!0), W = R(), ae = W[0], Q = W[1];
    pr.isTouch && ae === "hold" && Q && (N = Q), N ? n = setTimeout(function() {
      p.show();
    }, N) : p.show();
  }
  function Tt(P) {
    if (p.clearDelayTimeouts(), Oe("onUntrigger", [p, P]), !p.state.isVisible) {
      Fe();
      return;
    }
    if (!(p.props.trigger.indexOf("mouseenter") >= 0 && p.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(P.type) >= 0 && o)) {
      var N = ne(!1);
      N ? i = setTimeout(function() {
        p.state.isVisible && p.hide();
      }, N) : a = requestAnimationFrame(function() {
        p.hide();
      });
    }
  }
  function Ke() {
    p.state.isEnabled = !0;
  }
  function Bt() {
    p.hide(), p.state.isEnabled = !1;
  }
  function Vr() {
    clearTimeout(n), clearTimeout(i), cancelAnimationFrame(a);
  }
  function Et(P) {
    if (!p.state.isDestroyed) {
      Oe("onBeforeUpdate", [p, P]), Zt();
      var N = p.props, W = Hc(e, Object.assign({}, N, Bc(P), {
        ignoreAttributes: !0
      }));
      p.props = W, _t(), N.interactiveDebounce !== W.interactiveDebounce && (te(), h = Fc(er, W.interactiveDebounce)), N.triggerTarget && !W.triggerTarget ? hn(N.triggerTarget).forEach(function(ae) {
        ae.removeAttribute("aria-expanded");
      }) : W.triggerTarget && e.removeAttribute("aria-expanded"), K(), ye(), T && T(N, W), p.popperInstance && (Hr(), it().forEach(function(ae) {
        requestAnimationFrame(ae._tippy.popperInstance.forceUpdate);
      })), Oe("onAfterUpdate", [p, P]);
    }
  }
  function jt(P) {
    p.setProps({
      content: P
    });
  }
  function nn() {
    var P = p.state.isVisible, N = p.state.isDestroyed, W = !p.state.isEnabled, ae = pr.isTouch && !p.props.touch, Q = Vs(p.props.duration, 0, Vt.duration);
    if (!(P || N || W || ae) && !q().hasAttribute("disabled") && (Oe("onShow", [p], !1), p.props.onShow(p) !== !1)) {
      if (p.state.isVisible = !0, V() && (_.style.visibility = "visible"), ye(), J(), p.state.isMounted || (_.style.transition = "none"), V()) {
        var Se = re(), Ie = Se.box, xt = Se.content;
        Ws([Ie, xt], 0);
      }
      m = function() {
        var yt;
        if (!(!p.state.isVisible || f)) {
          if (f = !0, _.offsetHeight, _.style.transition = p.props.moveTransition, V() && p.props.animation) {
            var Ut = re(), ir = Ut.box, At = Ut.content;
            Ws([ir, At], Q), Yi([ir, At], "visible");
          }
          Le(), K(), Ic(Gs, p), (yt = p.popperInstance) == null || yt.forceUpdate(), Oe("onMount", [p]), p.props.animation && V() && Ce(Q, function() {
            p.state.isShown = !0, Oe("onShown", [p]);
          });
        }
      }, ze();
    }
  }
  function at() {
    var P = !p.state.isVisible, N = p.state.isDestroyed, W = !p.state.isEnabled, ae = Vs(p.props.duration, 1, Vt.duration);
    if (!(P || N || W) && (Oe("onHide", [p], !1), p.props.onHide(p) !== !1)) {
      if (p.state.isVisible = !1, p.state.isShown = !1, f = !1, o = !1, V() && (_.style.visibility = "hidden"), te(), Fe(), ye(!0), V()) {
        var Q = re(), Se = Q.box, Ie = Q.content;
        p.props.animation && (Ws([Se, Ie], ae), Yi([Se, Ie], "hidden"));
      }
      Le(), K(), p.props.animation ? V() && Xt(ae, p.unmount) : p.unmount();
    }
  }
  function Pn(P) {
    ue().addEventListener("mousemove", h), Ic(Da, h), h(P);
  }
  function Dn() {
    p.state.isVisible && p.hide(), p.state.isMounted && (Yr(), it().forEach(function(P) {
      P._tippy.unmount();
    }), _.parentNode && _.parentNode.removeChild(_), Gs = Gs.filter(function(P) {
      return P !== p;
    }), p.state.isMounted = !1, Oe("onHidden", [p]));
  }
  function ci() {
    p.state.isDestroyed || (p.clearDelayTimeouts(), p.unmount(), Zt(), delete e._tippy, p.state.isDestroyed = !0, Oe("onDestroy", [p]));
  }
}
function U(e, t) {
  t === void 0 && (t = {});
  var r = Vt.plugins.concat(t.plugins || []);
  H0();
  var n = Object.assign({}, t, {
    plugins: r
  }), i = I0(e), a = i.reduce(function(o, s) {
    var u = s && Z0(s, n);
    return u && o.push(u), o;
  }, []);
  return _o(e) ? a[0] : a;
}
U.defaultProps = Vt;
U.setDefaultProps = z0;
U.currentInput = pr;
var Q0 = Object.assign({}, Dd, {
  effect: function(t) {
    var r = t.state, n = {
      popper: {
        position: r.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(r.elements.popper.style, n.popper), r.styles = n, r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow);
  }
}), eS = function(t, r) {
  var n;
  r === void 0 && (r = {});
  var i = t, a = [], o = [], s, u = r.overrides, f = [], c = !1;
  function y() {
    o = i.map(function(p) {
      return hn(p.props.triggerTarget || p.reference);
    }).reduce(function(p, w) {
      return p.concat(w);
    }, []);
  }
  function m() {
    a = i.map(function(p) {
      return p.reference;
    });
  }
  function S(p) {
    i.forEach(function(w) {
      p ? w.enable() : w.disable();
    });
  }
  function h(p) {
    return i.map(function(w) {
      var _ = w.setProps;
      return w.setProps = function(T) {
        _(T), w.reference === s && p.setProps(T);
      }, function() {
        w.setProps = _;
      };
    });
  }
  function v(p, w) {
    var _ = o.indexOf(w);
    if (w !== s) {
      s = w;
      var T = (u || []).concat("content").reduce(function(k, C) {
        return k[C] = i[_].props[C], k;
      }, {});
      p.setProps(Object.assign({}, T, {
        getReferenceClientRect: typeof T.getReferenceClientRect == "function" ? T.getReferenceClientRect : function() {
          var k;
          return (k = a[_]) == null ? void 0 : k.getBoundingClientRect();
        }
      }));
    }
  }
  S(!1), m(), y();
  var b = {
    fn: function() {
      return {
        onDestroy: function() {
          S(!0);
        },
        onHidden: function() {
          s = null;
        },
        onClickOutside: function(_) {
          _.props.showOnCreate && !c && (c = !0, s = null);
        },
        onShow: function(_) {
          _.props.showOnCreate && !c && (c = !0, v(_, a[0]));
        },
        onTrigger: function(_, T) {
          v(_, T.currentTarget);
        }
      };
    }
  }, E = U(On(), Object.assign({}, R0(r, ["overrides"]), {
    plugins: [b].concat(r.plugins || []),
    triggerTarget: o,
    popperOptions: Object.assign({}, r.popperOptions, {
      modifiers: [].concat(((n = r.popperOptions) == null ? void 0 : n.modifiers) || [], [Q0])
    })
  })), x = E.show;
  E.show = function(p) {
    if (x(), !s && p == null)
      return v(E, a[0]);
    if (!(s && p == null)) {
      if (typeof p == "number")
        return a[p] && v(E, a[p]);
      if (i.indexOf(p) >= 0) {
        var w = p.reference;
        return v(E, w);
      }
      if (a.indexOf(p) >= 0)
        return v(E, p);
    }
  }, E.showNext = function() {
    var p = a[0];
    if (!s)
      return E.show(0);
    var w = a.indexOf(s);
    E.show(a[w + 1] || p);
  }, E.showPrevious = function() {
    var p = a[a.length - 1];
    if (!s)
      return E.show(p);
    var w = a.indexOf(s), _ = a[w - 1] || p;
    E.show(_);
  };
  var O = E.setProps;
  return E.setProps = function(p) {
    u = p.overrides || u, O(p);
  }, E.setInstances = function(p) {
    S(!0), f.forEach(function(w) {
      return w();
    }), i = p, S(!1), m(), y(), f = h(E), E.setProps({
      triggerTarget: o
    });
  }, f = h(E), E;
}, tS = {
  name: "animateFill",
  defaultValue: !1,
  fn: function(t) {
    var r;
    if (!((r = t.props.render) != null && r.$$tippy))
      return {};
    var n = io(t.popper), i = n.box, a = n.content, o = t.props.animateFill ? rS() : null;
    return {
      onCreate: function() {
        o && (i.insertBefore(o, i.firstElementChild), i.setAttribute("data-animatefill", ""), i.style.overflow = "hidden", t.setProps({
          arrow: !1,
          animation: "shift-away"
        }));
      },
      onMount: function() {
        if (o) {
          var u = i.style.transitionDuration, f = Number(u.replace("ms", ""));
          a.style.transitionDelay = Math.round(f / 10) + "ms", o.style.transitionDuration = u, Yi([o], "visible");
        }
      },
      onShow: function() {
        o && (o.style.transitionDuration = "0ms");
      },
      onHide: function() {
        o && Yi([o], "hidden");
      }
    };
  }
};
function rS() {
  var e = On();
  return e.className = Fd, Yi([e], "hidden"), e;
}
var Tl = {
  clientX: 0,
  clientY: 0
}, ka = [];
function Gd(e) {
  var t = e.clientX, r = e.clientY;
  Tl = {
    clientX: t,
    clientY: r
  };
}
function nS(e) {
  e.addEventListener("mousemove", Gd);
}
function iS(e) {
  e.removeEventListener("mousemove", Gd);
}
var aS = {
  name: "followCursor",
  defaultValue: !1,
  fn: function(t) {
    var r = t.reference, n = Yd(t.props.triggerTarget || r), i = !1, a = !1, o = !0, s = t.props;
    function u() {
      return t.props.followCursor === "initial" && t.state.isVisible;
    }
    function f() {
      n.addEventListener("mousemove", m);
    }
    function c() {
      n.removeEventListener("mousemove", m);
    }
    function y() {
      i = !0, t.setProps({
        getReferenceClientRect: null
      }), i = !1;
    }
    function m(v) {
      var b = v.target ? r.contains(v.target) : !0, E = t.props.followCursor, x = v.clientX, O = v.clientY, p = r.getBoundingClientRect(), w = x - p.left, _ = O - p.top;
      (b || !t.props.interactive) && t.setProps({
        // @ts-ignore - unneeded DOMRect properties
        getReferenceClientRect: function() {
          var k = r.getBoundingClientRect(), C = x, R = O;
          E === "initial" && (C = k.left + w, R = k.top + _);
          var z = E === "horizontal" ? k.top : R, V = E === "vertical" ? k.right : C, q = E === "horizontal" ? k.bottom : R, ue = E === "vertical" ? k.left : C;
          return {
            width: V - ue,
            height: q - z,
            top: z,
            right: V,
            bottom: q,
            left: ue
          };
        }
      });
    }
    function S() {
      t.props.followCursor && (ka.push({
        instance: t,
        doc: n
      }), nS(n));
    }
    function h() {
      ka = ka.filter(function(v) {
        return v.instance !== t;
      }), ka.filter(function(v) {
        return v.doc === n;
      }).length === 0 && iS(n);
    }
    return {
      onCreate: S,
      onDestroy: h,
      onBeforeUpdate: function() {
        s = t.props;
      },
      onAfterUpdate: function(b, E) {
        var x = E.followCursor;
        i || x !== void 0 && s.followCursor !== x && (h(), x ? (S(), t.state.isMounted && !a && !u() && f()) : (c(), y()));
      },
      onMount: function() {
        t.props.followCursor && !a && (o && (m(Tl), o = !1), u() || f());
      },
      onTrigger: function(b, E) {
        ru(E) && (Tl = {
          clientX: E.clientX,
          clientY: E.clientY
        }), a = E.type === "focus";
      },
      onHidden: function() {
        t.props.followCursor && (y(), c(), o = !0);
      }
    };
  }
};
function oS(e, t) {
  var r;
  return {
    popperOptions: Object.assign({}, e.popperOptions, {
      modifiers: [].concat((((r = e.popperOptions) == null ? void 0 : r.modifiers) || []).filter(function(n) {
        var i = n.name;
        return i !== t.name;
      }), [t])
    })
  };
}
var sS = {
  name: "inlinePositioning",
  defaultValue: !1,
  fn: function(t) {
    var r = t.reference;
    function n() {
      return !!t.props.inlinePositioning;
    }
    var i, a = -1, o = !1, s = [], u = {
      name: "tippyInlinePositioning",
      enabled: !0,
      phase: "afterWrite",
      fn: function(S) {
        var h = S.state;
        n() && (s.indexOf(h.placement) !== -1 && (s = []), i !== h.placement && s.indexOf(h.placement) === -1 && (s.push(h.placement), t.setProps({
          // @ts-ignore - unneeded DOMRect properties
          getReferenceClientRect: function() {
            return f(h.placement);
          }
        })), i = h.placement);
      }
    };
    function f(m) {
      return lS(Hd(m), r.getBoundingClientRect(), ri(r.getClientRects()), a);
    }
    function c(m) {
      o = !0, t.setProps(m), o = !1;
    }
    function y() {
      o || c(oS(t.props, u));
    }
    return {
      onCreate: y,
      onAfterUpdate: y,
      onTrigger: function(S, h) {
        if (ru(h)) {
          var v = ri(t.reference.getClientRects()), b = v.find(function(x) {
            return x.left - 2 <= h.clientX && x.right + 2 >= h.clientX && x.top - 2 <= h.clientY && x.bottom + 2 >= h.clientY;
          }), E = v.indexOf(b);
          a = E > -1 ? E : a;
        }
      },
      onHidden: function() {
        a = -1;
      }
    };
  }
};
function lS(e, t, r, n) {
  if (r.length < 2 || e === null)
    return t;
  if (r.length === 2 && n >= 0 && r[0].left > r[1].right)
    return r[n] || t;
  switch (e) {
    case "top":
    case "bottom": {
      var i = r[0], a = r[r.length - 1], o = e === "top", s = i.top, u = a.bottom, f = o ? i.left : a.left, c = o ? i.right : a.right, y = c - f, m = u - s;
      return {
        top: s,
        bottom: u,
        left: f,
        right: c,
        width: y,
        height: m
      };
    }
    case "left":
    case "right": {
      var S = Math.min.apply(Math, r.map(function(_) {
        return _.left;
      })), h = Math.max.apply(Math, r.map(function(_) {
        return _.right;
      })), v = r.filter(function(_) {
        return e === "left" ? _.left === S : _.right === h;
      }), b = v[0].top, E = v[v.length - 1].bottom, x = S, O = h, p = O - x, w = E - b;
      return {
        top: b,
        bottom: E,
        left: x,
        right: O,
        width: p,
        height: w
      };
    }
    default:
      return t;
  }
}
var uS = {
  name: "sticky",
  defaultValue: !1,
  fn: function(t) {
    var r = t.reference, n = t.popper;
    function i() {
      return t.popperInstance ? t.popperInstance.state.elements.reference : r;
    }
    function a(f) {
      return t.props.sticky === !0 || t.props.sticky === f;
    }
    var o = null, s = null;
    function u() {
      var f = a("reference") ? i().getBoundingClientRect() : null, c = a("popper") ? n.getBoundingClientRect() : null;
      (f && Wc(o, f) || c && Wc(s, c)) && t.popperInstance && t.popperInstance.update(), o = f, s = c, t.state.isMounted && requestAnimationFrame(u);
    }
    return {
      onMount: function() {
        t.props.sticky && u();
      }
    };
  }
};
function Wc(e, t) {
  return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0;
}
U.setDefaultProps({
  render: qd
});
U.setDefaultProps({
  //@ts-ignore
  onShow: (e) => {
    if (!e.props.content)
      return !1;
  }
});
function cS(e, t = {}, r = { mount: !0, appName: "Tippy" }) {
  r = Object.assign({ mount: !0, appName: "Tippy" }, r);
  const n = Qc(), i = H(), a = H({
    isEnabled: !1,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }), o = $l();
  let s = null;
  const u = () => s || (s = document.createDocumentFragment(), s), f = (T) => {
    let k, C = qr(T) ? T.value : T;
    return Hp(C) ? (o.value || (o.value = Dr({
      name: r.appName,
      setup: () => () => qr(T) ? T.value : T
    }), n && Object.assign(o.value._context, n.appContext), o.value.mount(u())), k = () => u()) : typeof C == "object" ? (o.value || (o.value = Dr({
      name: r.appName,
      setup: () => () => se(qr(T) ? T.value : T)
    }), n && Object.assign(o.value._context, n.appContext), o.value.mount(u())), k = () => u()) : k = C, k;
  }, c = (T) => {
    let k = {};
    return qr(T) ? k = T.value || {} : Pu(T) ? k = { ...T } : k = { ...T }, k.content && (k.content = f(k.content)), k.triggerTarget && (k.triggerTarget = qr(k.triggerTarget) ? k.triggerTarget.value : k.triggerTarget), (!k.plugins || !Array.isArray(k.plugins)) && (k.plugins = []), k.plugins = k.plugins.filter((C) => C.name !== "vueTippyReactiveState"), k.plugins.push({
      name: "vueTippyReactiveState",
      fn: () => ({
        onCreate() {
          a.value.isEnabled = !0;
        },
        onMount() {
          a.value.isMounted = !0;
        },
        onShow() {
          a.value.isMounted = !0, a.value.isVisible = !0;
        },
        onShown() {
          a.value.isShown = !0;
        },
        onHide() {
          a.value.isMounted = !1, a.value.isVisible = !1;
        },
        onHidden() {
          a.value.isShown = !1;
        },
        onUnmounted() {
          a.value.isMounted = !1;
        },
        onDestroy() {
          a.value.isDestroyed = !0;
        }
      })
    }), k;
  }, y = () => {
    i.value && i.value.setProps(c(t));
  }, m = () => {
    !i.value || !t.content || i.value.setContent(f(t.content));
  }, S = (T) => {
    var k;
    (k = i.value) === null || k === void 0 || k.setContent(f(T));
  }, h = (T) => {
    var k;
    (k = i.value) === null || k === void 0 || k.setProps(c(T));
  }, v = () => {
    var T;
    i.value && (i.value.destroy(), i.value = void 0), s = null, (T = o.value) === null || T === void 0 || T.unmount(), o.value = void 0;
  }, b = () => {
    var T;
    (T = i.value) === null || T === void 0 || T.show();
  }, E = () => {
    var T;
    (T = i.value) === null || T === void 0 || T.hide();
  }, x = () => {
    var T;
    (T = i.value) === null || T === void 0 || T.disable(), a.value.isEnabled = !1;
  }, O = () => {
    var T;
    (T = i.value) === null || T === void 0 || T.enable(), a.value.isEnabled = !0;
  }, p = () => {
    var T;
    (T = i.value) === null || T === void 0 || T.unmount();
  }, w = () => {
    if (!e)
      return;
    let T = qr(e) ? e.value : e;
    typeof T == "function" && (T = T()), T && (i.value = U(T, c(t)), T.$tippy = _);
  }, _ = {
    tippy: i,
    refresh: y,
    refreshContent: m,
    setContent: S,
    setProps: h,
    destroy: v,
    hide: E,
    show: b,
    disable: x,
    enable: O,
    unmount: p,
    mount: w,
    state: a
  };
  return r.mount && (n ? n.isMounted ? w() : Ae(w) : w()), n && St(() => {
    v();
  }), qr(t) || Pu(t) ? Ye(t, y, { immediate: !1 }) : qr(t.content) && Ye(t.content, m, { immediate: !1 }), _;
}
function fS(e, t) {
  const r = H();
  return Ae(() => {
    const i = (Array.isArray(e) ? e.map((a) => a.value) : typeof e == "function" ? e() : e.value).map((a) => a instanceof Element ? a._tippy : a).filter(Boolean);
    r.value = eS(i, t ? { allowHTML: !0, ...t } : { allowHTML: !0 });
  }), {
    singleton: r
  };
}
function dS(e) {
  return typeof e == "function" ? e() : ge(e);
}
function pS(e) {
  var t, r;
  const n = dS(e);
  return (r = (t = n) === null || t === void 0 ? void 0 : t.$el) !== null && r !== void 0 ? r : n;
}
const Ha = Me({
  props: {
    to: {
      type: [String, Function]
    },
    tag: {
      type: [String, Object],
      default: "span"
    },
    contentTag: {
      type: [String, Object],
      default: "span"
    },
    contentClass: {
      type: String,
      default: null
    },
    appendTo: { default: () => U.defaultProps.appendTo },
    aria: { default: () => U.defaultProps.aria },
    delay: { default: () => U.defaultProps.delay },
    duration: { default: () => U.defaultProps.duration },
    getReferenceClientRect: { default: () => U.defaultProps.getReferenceClientRect },
    hideOnClick: { type: [Boolean, String], default: () => U.defaultProps.hideOnClick },
    ignoreAttributes: { type: Boolean, default: () => U.defaultProps.ignoreAttributes },
    interactive: { type: Boolean, default: () => U.defaultProps.interactive },
    interactiveBorder: { default: () => U.defaultProps.interactiveBorder },
    interactiveDebounce: { default: () => U.defaultProps.interactiveDebounce },
    moveTransition: { default: () => U.defaultProps.moveTransition },
    offset: { default: () => U.defaultProps.offset },
    onAfterUpdate: { default: () => U.defaultProps.onAfterUpdate },
    onBeforeUpdate: { default: () => U.defaultProps.onBeforeUpdate },
    onCreate: { default: () => U.defaultProps.onCreate },
    onDestroy: { default: () => U.defaultProps.onDestroy },
    onHidden: { default: () => U.defaultProps.onHidden },
    onHide: { default: () => U.defaultProps.onHide },
    onMount: { default: () => U.defaultProps.onMount },
    onShow: { default: () => U.defaultProps.onShow },
    onShown: { default: () => U.defaultProps.onShown },
    onTrigger: { default: () => U.defaultProps.onTrigger },
    onUntrigger: { default: () => U.defaultProps.onUntrigger },
    onClickOutside: { default: () => U.defaultProps.onClickOutside },
    placement: { default: () => U.defaultProps.placement },
    plugins: { default: () => U.defaultProps.plugins },
    popperOptions: { default: () => U.defaultProps.popperOptions },
    render: { default: () => U.defaultProps.render },
    showOnCreate: { type: Boolean, default: () => U.defaultProps.showOnCreate },
    touch: { type: [Boolean, String, Array], default: () => U.defaultProps.touch },
    trigger: { default: () => U.defaultProps.trigger },
    triggerTarget: { default: () => U.defaultProps.triggerTarget },
    animateFill: { type: Boolean, default: () => U.defaultProps.animateFill },
    followCursor: { type: [Boolean, String], default: () => U.defaultProps.followCursor },
    inlinePositioning: { type: Boolean, default: () => U.defaultProps.inlinePositioning },
    sticky: { type: [Boolean, String], default: () => U.defaultProps.sticky },
    allowHTML: { type: Boolean, default: () => U.defaultProps.allowHTML },
    animation: { default: () => U.defaultProps.animation },
    arrow: { default: () => U.defaultProps.arrow },
    content: { default: () => U.defaultProps.content },
    inertia: { default: () => U.defaultProps.inertia },
    maxWidth: { default: () => U.defaultProps.maxWidth },
    role: { default: () => U.defaultProps.role },
    theme: { default: () => U.defaultProps.theme },
    zIndex: { default: () => U.defaultProps.zIndex }
  },
  emits: ["state"],
  setup(e, { slots: t, emit: r, expose: n }) {
    const i = H(), a = H(), o = H(), s = H(!1), u = () => {
      let S = { ...e };
      for (const h of ["to", "tag", "contentTag", "contentClass"])
        S.hasOwnProperty(h) && delete S[h];
      return S;
    };
    let f = () => pS(i);
    e.to && (typeof Element < "u" && e.to instanceof Element ? f = () => e.to : e.to === "parent" ? f = () => {
      let S = i.value;
      return S || (S = i.value = a.value.parentElement), S;
    } : (typeof e.to == "string" || e.to instanceof String) && (f = () => document.querySelector(e.to)));
    const c = cS(f, u());
    let y = t.content;
    !y && e.to === "parent" && (y = t.default), Ae(() => {
      s.value = !0, Ni(() => {
        y && c.setContent(() => o.value);
      });
    }), Ye(c.state, () => {
      r("state", ge(c.state));
    }, { immediate: !0, deep: !0 }), Ye(() => e, () => {
      c.setProps(u()), y && c.setContent(() => o.value);
    }, { deep: !0 });
    let m = ef({
      elem: i,
      contentElem: o,
      mounted: s,
      ...c
    });
    return n(m), () => {
      const S = (typeof e.contentTag == "string", e.contentTag), h = y ? se(S, {
        ref: o,
        style: { display: s.value ? "inherit" : "none" },
        class: e.contentClass
      }, y(m)) : null;
      if (e.to === "parent") {
        const E = [];
        if (!i.value) {
          const x = se("span", {
            ref: a,
            "data-v-tippy": "",
            style: { display: "none" }
          });
          E.push(x);
        }
        return h && E.push(h), E;
      }
      const v = t.default ? t.default(m) : [];
      if (!e.tag) {
        const E = se(v[0], {
          ref: i,
          "data-v-tippy": ""
        });
        return h ? [E, h] : E;
      }
      const b = (typeof e.tag == "string", e.tag);
      return se(b, { ref: i, "data-v-tippy": "" }, h ? [v, h] : v);
    };
  }
}), hS = [
  "a11y",
  "allowHTML",
  "arrow",
  "flip",
  "flipOnUpdate",
  "hideOnClick",
  "ignoreAttributes",
  "inertia",
  "interactive",
  "lazy",
  "multiple",
  "showOnInit",
  "touch",
  "touchHold"
];
let El = {};
Object.keys(U.defaultProps).forEach((e) => {
  hS.includes(e) ? El[e] = {
    type: Boolean,
    default: function() {
      return U.defaultProps[e];
    }
  } : El[e] = {
    default: function() {
      return U.defaultProps[e];
    }
  };
});
Me({
  props: El,
  setup(e) {
    const t = H([]), { singleton: r } = fS(t, e);
    return { instances: t, singleton: r };
  },
  mounted() {
    var e;
    const r = this.$el.parentElement.querySelectorAll("[data-v-tippy]");
    this.instances = Array.from(r).map((n) => n._tippy).filter(Boolean), (e = this.singleton) === null || e === void 0 || e.setInstances(this.instances);
  },
  render() {
    let e = this.$slots.default ? this.$slots.default() : [];
    return se(() => e);
  }
});
const mS = U.setDefaultProps;
mS({
  ignoreAttributes: !0,
  plugins: [uS, sS, aS, tS]
});
const yS = { class: "flex items-center space-x-2 justify-center" }, vS = ["onClick"], gS = {
  __name: "GridActions",
  props: {
    events: {
      type: Object,
      default() {
        return Xi();
      }
    },
    actions: {
      type: Array,
      default: ["view", "edit", "delete"]
    },
    confirm: {
      type: Boolean,
      default: !0
    },
    record: {
      type: Object,
      required: !0
    },
    columnIndex: {
      type: Number,
      required: !0
    }
  },
  setup(e) {
    const t = e, r = H(!1), n = [
      { name: "view", tip: "View", icon: yw, class: "btn-blue text-white px-1 py-1 rounded-full" },
      { name: "edit", tip: "Edit", icon: vw, class: "btn-green text-white px-1 py-1 rounded-full" },
      { name: "delete", tip: "Delete", icon: gw, class: "btn-red text-white px-1 py-1 rounded-full" }
    ], i = G(() => t.actions.map((o) => {
      let s = n.find((u) => u.name === o);
      return s || (s = n.find((u) => u.name === o.name), s ? { ...s, ...o } : o);
    }));
    function a(o) {
      var u, f;
      const s = o === "edit" ? "update" : o;
      return (f = (u = t.record.policy) == null ? void 0 : u.can) != null && f.hasOwnProperty(s) ? t.record.policy.can[s] : !0;
    }
    return (o, s) => (I(), B("div", yS, [
      (I(!0), B(ct, null, $r(i.value, (u) => (I(), Gn(ge(Ha), {
        content: u.tip ?? u.name,
        class: "leading-none"
      }, {
        default: bt(() => [
          a(u.name) ? (I(), B("button", {
            key: 0,
            class: Ve(u.class ?? (u.iconClass ? "" : "bg-gray-200 px-1 py-1 rounded-full")),
            onClick: Re((f) => u.name === "delete" && e.confirm ? r.value = !0 : e.events.emit(u.name, { columnIndex: e.columnIndex, record: e.record }), ["stop"])
          }, [
            (I(), Gn(Yp(u.icon), {
              class: Ve(u.iconClass ?? "h-4 w-4")
            }, null, 8, ["class"]))
          ], 10, vS)) : De("", !0)
        ]),
        _: 2
      }, 1032, ["content"]))), 256)),
      Ge(xw, {
        open: r.value,
        onDestroy: s[0] || (s[0] = (u) => {
          e.events.emit("delete", { columnIndex: e.columnIndex, record: e.record }), r.value = !1;
        }),
        onClose: s[1] || (s[1] = (u) => r.value = !1)
      }, null, 8, ["open"])
    ]));
  }
};
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var zd;
function $() {
  return zd.apply(null, arguments);
}
function bS(e) {
  zd = e;
}
function qt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function _n(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function he(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function nu(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (he(e, t))
      return !1;
  return !0;
}
function lt(e) {
  return e === void 0;
}
function Fr(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function aa(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Kd(e, t) {
  var r = [], n, i = e.length;
  for (n = 0; n < i; ++n)
    r.push(t(e[n], n));
  return r;
}
function Zr(e, t) {
  for (var r in t)
    he(t, r) && (e[r] = t[r]);
  return he(t, "toString") && (e.toString = t.toString), he(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function wr(e, t, r, n) {
  return gp(e, t, r, n, !0).utc();
}
function wS() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function ee(e) {
  return e._pf == null && (e._pf = wS()), e._pf;
}
var xl;
Array.prototype.some ? xl = Array.prototype.some : xl = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function iu(e) {
  var t = null, r = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = ee(e), r = xl.call(t.parsedDateParts, function(i) {
    return i != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function To(e) {
  var t = wr(NaN);
  return e != null ? Zr(ee(t), e) : ee(t).userInvalidated = !0, t;
}
var qc = $.momentProperties = [], zs = !1;
function au(e, t) {
  var r, n, i, a = qc.length;
  if (lt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), lt(t._i) || (e._i = t._i), lt(t._f) || (e._f = t._f), lt(t._l) || (e._l = t._l), lt(t._strict) || (e._strict = t._strict), lt(t._tzm) || (e._tzm = t._tzm), lt(t._isUTC) || (e._isUTC = t._isUTC), lt(t._offset) || (e._offset = t._offset), lt(t._pf) || (e._pf = ee(t)), lt(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      n = qc[r], i = t[n], lt(i) || (e[n] = i);
  return e;
}
function oa(e) {
  au(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), zs === !1 && (zs = !0, $.updateOffset(this), zs = !1);
}
function Gt(e) {
  return e instanceof oa || e != null && e._isAMomentObject != null;
}
function Jd(e) {
  $.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Lt(e, t) {
  var r = !0;
  return Zr(function() {
    if ($.deprecationHandler != null && $.deprecationHandler(null, e), r) {
      var n = [], i, a, o, s = arguments.length;
      for (a = 0; a < s; a++) {
        if (i = "", typeof arguments[a] == "object") {
          i += `
[` + a + "] ";
          for (o in arguments[0])
            he(arguments[0], o) && (i += o + ": " + arguments[0][o] + ", ");
          i = i.slice(0, -2);
        } else
          i = arguments[a];
        n.push(i);
      }
      Jd(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Gc = {};
function Xd(e, t) {
  $.deprecationHandler != null && $.deprecationHandler(e, t), Gc[e] || (Jd(t), Gc[e] = !0);
}
$.suppressDeprecationWarnings = !1;
$.deprecationHandler = null;
function Sr(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function SS(e) {
  var t, r;
  for (r in e)
    he(e, r) && (t = e[r], Sr(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Al(e, t) {
  var r = Zr({}, e), n;
  for (n in t)
    he(t, n) && (_n(e[n]) && _n(t[n]) ? (r[n] = {}, Zr(r[n], e[n]), Zr(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    he(e, n) && !he(t, n) && _n(e[n]) && (r[n] = Zr({}, r[n]));
  return r;
}
function ou(e) {
  e != null && this.set(e);
}
var Pl;
Object.keys ? Pl = Object.keys : Pl = function(e) {
  var t, r = [];
  for (t in e)
    he(e, t) && r.push(t);
  return r;
};
var OS = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function _S(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Sr(n) ? n.call(t, r) : n;
}
function br(e, t, r) {
  var n = "" + Math.abs(e), i = t - n.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n;
}
var su = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ma = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ks = {}, Vn = {};
function Y(e, t, r, n) {
  var i = n;
  typeof n == "string" && (i = function() {
    return this[n]();
  }), e && (Vn[e] = i), t && (Vn[t[0]] = function() {
    return br(i.apply(this, arguments), t[1], t[2]);
  }), r && (Vn[r] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      e
    );
  });
}
function TS(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ES(e) {
  var t = e.match(su), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Vn[t[r]] ? t[r] = Vn[t[r]] : t[r] = TS(t[r]);
  return function(i) {
    var a = "", o;
    for (o = 0; o < n; o++)
      a += Sr(t[o]) ? t[o].call(i, e) : t[o];
    return a;
  };
}
function Ya(e, t) {
  return e.isValid() ? (t = Zd(t, e.localeData()), Ks[t] = Ks[t] || ES(t), Ks[t](e)) : e.localeData().invalidDate();
}
function Zd(e, t) {
  var r = 5;
  function n(i) {
    return t.longDateFormat(i) || i;
  }
  for (Ma.lastIndex = 0; r >= 0 && Ma.test(e); )
    e = e.replace(
      Ma,
      n
    ), Ma.lastIndex = 0, r -= 1;
  return e;
}
var xS = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function AS(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(su).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var PS = "Invalid date";
function DS() {
  return this._invalidDate;
}
var kS = "%d", MS = /\d{1,2}/;
function CS(e) {
  return this._ordinal.replace("%d", e);
}
var RS = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function $S(e, t, r, n) {
  var i = this._relativeTime[r];
  return Sr(i) ? i(e, t, r, n) : i.replace(/%d/i, e);
}
function LS(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return Sr(r) ? r(t) : r.replace(/%s/i, t);
}
var zc = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Nt(e) {
  return typeof e == "string" ? zc[e] || zc[e.toLowerCase()] : void 0;
}
function lu(e) {
  var t = {}, r, n;
  for (n in e)
    he(e, n) && (r = Nt(n), r && (t[r] = e[n]));
  return t;
}
var NS = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function FS(e) {
  var t = [], r;
  for (r in e)
    he(e, r) && t.push({ unit: r, priority: NS[r] });
  return t.sort(function(n, i) {
    return n.priority - i.priority;
  }), t;
}
var Qd = /\d/, Ot = /\d\d/, ep = /\d{3}/, uu = /\d{4}/, Eo = /[+-]?\d{6}/, Te = /\d\d?/, tp = /\d\d\d\d?/, rp = /\d\d\d\d\d\d?/, xo = /\d{1,3}/, cu = /\d{1,4}/, Ao = /[+-]?\d{1,6}/, si = /\d+/, Po = /[+-]?\d+/, IS = /Z|[+-]\d\d:?\d\d/gi, Do = /Z|[+-]\d\d(?::?\d\d)?/gi, BS = /[+-]?\d+(\.\d{1,3})?/, sa = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, li = /^[1-9]\d?/, fu = /^([1-9]\d|\d)/, ao;
ao = {};
function F(e, t, r) {
  ao[e] = Sr(t) ? t : function(n, i) {
    return n && r ? r : t;
  };
}
function jS(e, t) {
  return he(ao, e) ? ao[e](t._strict, t._locale) : new RegExp(US(e));
}
function US(e) {
  return Lr(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, i, a) {
        return r || n || i || a;
      }
    )
  );
}
function Lr(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Dt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function le(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Dt(t)), r;
}
var Dl = {};
function be(e, t) {
  var r, n = t, i;
  for (typeof e == "string" && (e = [e]), Fr(t) && (n = function(a, o) {
    o[t] = le(a);
  }), i = e.length, r = 0; r < i; r++)
    Dl[e[r]] = n;
}
function la(e, t) {
  be(e, function(r, n, i, a) {
    i._w = i._w || {}, t(r, i._w, i, a);
  });
}
function HS(e, t, r) {
  t != null && he(Dl, e) && Dl[e](t, r._a, r, e);
}
function ko(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var tt = 0, Cr = 1, hr = 2, Ue = 3, Wt = 4, Rr = 5, vn = 6, YS = 7, VS = 8;
Y("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? br(e, 4) : "+" + e;
});
Y(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Y(0, ["YYYY", 4], 0, "year");
Y(0, ["YYYYY", 5], 0, "year");
Y(0, ["YYYYYY", 6, !0], 0, "year");
F("Y", Po);
F("YY", Te, Ot);
F("YYYY", cu, uu);
F("YYYYY", Ao, Eo);
F("YYYYYY", Ao, Eo);
be(["YYYYY", "YYYYYY"], tt);
be("YYYY", function(e, t) {
  t[tt] = e.length === 2 ? $.parseTwoDigitYear(e) : le(e);
});
be("YY", function(e, t) {
  t[tt] = $.parseTwoDigitYear(e);
});
be("Y", function(e, t) {
  t[tt] = parseInt(e, 10);
});
function Li(e) {
  return ko(e) ? 366 : 365;
}
$.parseTwoDigitYear = function(e) {
  return le(e) + (le(e) > 68 ? 1900 : 2e3);
};
var np = ui("FullYear", !0);
function WS() {
  return ko(this.year());
}
function ui(e, t) {
  return function(r) {
    return r != null ? (ip(this, e, r), $.updateOffset(this, t), this) : Vi(this, e);
  };
}
function Vi(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return n ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return n ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return n ? r.getUTCHours() : r.getHours();
    case "Date":
      return n ? r.getUTCDate() : r.getDate();
    case "Day":
      return n ? r.getUTCDay() : r.getDay();
    case "Month":
      return n ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return n ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function ip(e, t, r) {
  var n, i, a, o, s;
  if (!(!e.isValid() || isNaN(r))) {
    switch (n = e._d, i = e._isUTC, t) {
      case "Milliseconds":
        return void (i ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
      case "Seconds":
        return void (i ? n.setUTCSeconds(r) : n.setSeconds(r));
      case "Minutes":
        return void (i ? n.setUTCMinutes(r) : n.setMinutes(r));
      case "Hours":
        return void (i ? n.setUTCHours(r) : n.setHours(r));
      case "Date":
        return void (i ? n.setUTCDate(r) : n.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    a = r, o = e.month(), s = e.date(), s = s === 29 && o === 1 && !ko(a) ? 28 : s, i ? n.setUTCFullYear(a, o, s) : n.setFullYear(a, o, s);
  }
}
function qS(e) {
  return e = Nt(e), Sr(this[e]) ? this[e]() : this;
}
function GS(e, t) {
  if (typeof e == "object") {
    e = lu(e);
    var r = FS(e), n, i = r.length;
    for (n = 0; n < i; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = Nt(e), Sr(this[e]))
    return this[e](t);
  return this;
}
function zS(e, t) {
  return (e % t + t) % t;
}
var $e;
Array.prototype.indexOf ? $e = Array.prototype.indexOf : $e = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function du(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = zS(t, 12);
  return e += (t - r) / 12, r === 1 ? ko(e) ? 29 : 28 : 31 - r % 7 % 2;
}
Y("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Y("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
Y("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
F("M", Te, li);
F("MM", Te, Ot);
F("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
F("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
be(["M", "MM"], function(e, t) {
  t[Cr] = le(e) - 1;
});
be(["MMM", "MMMM"], function(e, t, r, n) {
  var i = r._locale.monthsParse(e, n, r._strict);
  i != null ? t[Cr] = i : ee(r).invalidMonth = e;
});
var KS = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ap = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), op = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, JS = sa, XS = sa;
function ZS(e, t) {
  return e ? qt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || op).test(t) ? "format" : "standalone"][e.month()] : qt(this._months) ? this._months : this._months.standalone;
}
function QS(e, t) {
  return e ? qt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[op.test(t) ? "format" : "standalone"][e.month()] : qt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function e1(e, t, r) {
  var n, i, a, o = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = wr([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (i = $e.call(this._shortMonthsParse, o), i !== -1 ? i : null) : (i = $e.call(this._longMonthsParse, o), i !== -1 ? i : null) : t === "MMM" ? (i = $e.call(this._shortMonthsParse, o), i !== -1 ? i : (i = $e.call(this._longMonthsParse, o), i !== -1 ? i : null)) : (i = $e.call(this._longMonthsParse, o), i !== -1 ? i : (i = $e.call(this._shortMonthsParse, o), i !== -1 ? i : null));
}
function t1(e, t, r) {
  var n, i, a;
  if (this._monthsParseExact)
    return e1.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (i = wr([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(i, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(i, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function sp(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = le(t);
    else if (t = e.localeData().monthsParse(t), !Fr(t))
      return e;
  }
  var r = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, du(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n), e;
}
function lp(e) {
  return e != null ? (sp(this, e), $.updateOffset(this, !0), this) : Vi(this, "Month");
}
function r1() {
  return du(this.year(), this.month());
}
function n1(e) {
  return this._monthsParseExact ? (he(this, "_monthsRegex") || up.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (he(this, "_monthsShortRegex") || (this._monthsShortRegex = JS), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function i1(e) {
  return this._monthsParseExact ? (he(this, "_monthsRegex") || up.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (he(this, "_monthsRegex") || (this._monthsRegex = XS), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function up() {
  function e(u, f) {
    return f.length - u.length;
  }
  var t = [], r = [], n = [], i, a, o, s;
  for (i = 0; i < 12; i++)
    a = wr([2e3, i]), o = Lr(this.monthsShort(a, "")), s = Lr(this.months(a, "")), t.push(o), r.push(s), n.push(s), n.push(o);
  t.sort(e), r.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function a1(e, t, r, n, i, a, o) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, t, r, n, i, a, o), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, r, n, i, a, o), s;
}
function Wi(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function oo(e, t, r) {
  var n = 7 + t - r, i = (7 + Wi(e, 0, n).getUTCDay() - t) % 7;
  return -i + n - 1;
}
function cp(e, t, r, n, i) {
  var a = (7 + r - n) % 7, o = oo(e, n, i), s = 1 + 7 * (t - 1) + a + o, u, f;
  return s <= 0 ? (u = e - 1, f = Li(u) + s) : s > Li(e) ? (u = e + 1, f = s - Li(e)) : (u = e, f = s), {
    year: u,
    dayOfYear: f
  };
}
function qi(e, t, r) {
  var n = oo(e.year(), t, r), i = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, o;
  return i < 1 ? (o = e.year() - 1, a = i + Nr(o, t, r)) : i > Nr(e.year(), t, r) ? (a = i - Nr(e.year(), t, r), o = e.year() + 1) : (o = e.year(), a = i), {
    week: a,
    year: o
  };
}
function Nr(e, t, r) {
  var n = oo(e, t, r), i = oo(e + 1, t, r);
  return (Li(e) - n + i) / 7;
}
Y("w", ["ww", 2], "wo", "week");
Y("W", ["WW", 2], "Wo", "isoWeek");
F("w", Te, li);
F("ww", Te, Ot);
F("W", Te, li);
F("WW", Te, Ot);
la(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = le(e);
  }
);
function o1(e) {
  return qi(e, this._week.dow, this._week.doy).week;
}
var s1 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function l1() {
  return this._week.dow;
}
function u1() {
  return this._week.doy;
}
function c1(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function f1(e) {
  var t = qi(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
Y("d", 0, "do", "day");
Y("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
Y("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
Y("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
Y("e", 0, 0, "weekday");
Y("E", 0, 0, "isoWeekday");
F("d", Te);
F("e", Te);
F("E", Te);
F("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
F("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
F("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
la(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var i = r._locale.weekdaysParse(e, n, r._strict);
  i != null ? t.d = i : ee(r).invalidWeekday = e;
});
la(["d", "e", "E"], function(e, t, r, n) {
  t[n] = le(e);
});
function d1(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function p1(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function pu(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var h1 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), fp = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), m1 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), y1 = sa, v1 = sa, g1 = sa;
function b1(e, t) {
  var r = qt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? pu(r, this._week.dow) : e ? r[e.day()] : r;
}
function w1(e) {
  return e === !0 ? pu(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function S1(e) {
  return e === !0 ? pu(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function O1(e, t, r) {
  var n, i, a, o = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = wr([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (i = $e.call(this._weekdaysParse, o), i !== -1 ? i : null) : t === "ddd" ? (i = $e.call(this._shortWeekdaysParse, o), i !== -1 ? i : null) : (i = $e.call(this._minWeekdaysParse, o), i !== -1 ? i : null) : t === "dddd" ? (i = $e.call(this._weekdaysParse, o), i !== -1 || (i = $e.call(this._shortWeekdaysParse, o), i !== -1) ? i : (i = $e.call(this._minWeekdaysParse, o), i !== -1 ? i : null)) : t === "ddd" ? (i = $e.call(this._shortWeekdaysParse, o), i !== -1 || (i = $e.call(this._weekdaysParse, o), i !== -1) ? i : (i = $e.call(this._minWeekdaysParse, o), i !== -1 ? i : null)) : (i = $e.call(this._minWeekdaysParse, o), i !== -1 || (i = $e.call(this._weekdaysParse, o), i !== -1) ? i : (i = $e.call(this._shortWeekdaysParse, o), i !== -1 ? i : null));
}
function _1(e, t, r) {
  var n, i, a;
  if (this._weekdaysParseExact)
    return O1.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (i = wr([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function T1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Vi(this, "Day");
  return e != null ? (e = d1(e, this.localeData()), this.add(e - t, "d")) : t;
}
function E1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function x1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = p1(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function A1(e) {
  return this._weekdaysParseExact ? (he(this, "_weekdaysRegex") || hu.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (he(this, "_weekdaysRegex") || (this._weekdaysRegex = y1), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function P1(e) {
  return this._weekdaysParseExact ? (he(this, "_weekdaysRegex") || hu.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (he(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = v1), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function D1(e) {
  return this._weekdaysParseExact ? (he(this, "_weekdaysRegex") || hu.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (he(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = g1), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function hu() {
  function e(c, y) {
    return y.length - c.length;
  }
  var t = [], r = [], n = [], i = [], a, o, s, u, f;
  for (a = 0; a < 7; a++)
    o = wr([2e3, 1]).day(a), s = Lr(this.weekdaysMin(o, "")), u = Lr(this.weekdaysShort(o, "")), f = Lr(this.weekdays(o, "")), t.push(s), r.push(u), n.push(f), i.push(s), i.push(u), i.push(f);
  t.sort(e), r.sort(e), n.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function mu() {
  return this.hours() % 12 || 12;
}
function k1() {
  return this.hours() || 24;
}
Y("H", ["HH", 2], 0, "hour");
Y("h", ["hh", 2], 0, mu);
Y("k", ["kk", 2], 0, k1);
Y("hmm", 0, 0, function() {
  return "" + mu.apply(this) + br(this.minutes(), 2);
});
Y("hmmss", 0, 0, function() {
  return "" + mu.apply(this) + br(this.minutes(), 2) + br(this.seconds(), 2);
});
Y("Hmm", 0, 0, function() {
  return "" + this.hours() + br(this.minutes(), 2);
});
Y("Hmmss", 0, 0, function() {
  return "" + this.hours() + br(this.minutes(), 2) + br(this.seconds(), 2);
});
function dp(e, t) {
  Y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
dp("a", !0);
dp("A", !1);
function pp(e, t) {
  return t._meridiemParse;
}
F("a", pp);
F("A", pp);
F("H", Te, fu);
F("h", Te, li);
F("k", Te, li);
F("HH", Te, Ot);
F("hh", Te, Ot);
F("kk", Te, Ot);
F("hmm", tp);
F("hmmss", rp);
F("Hmm", tp);
F("Hmmss", rp);
be(["H", "HH"], Ue);
be(["k", "kk"], function(e, t, r) {
  var n = le(e);
  t[Ue] = n === 24 ? 0 : n;
});
be(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
be(["h", "hh"], function(e, t, r) {
  t[Ue] = le(e), ee(r).bigHour = !0;
});
be("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[Ue] = le(e.substr(0, n)), t[Wt] = le(e.substr(n)), ee(r).bigHour = !0;
});
be("hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[Ue] = le(e.substr(0, n)), t[Wt] = le(e.substr(n, 2)), t[Rr] = le(e.substr(i)), ee(r).bigHour = !0;
});
be("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[Ue] = le(e.substr(0, n)), t[Wt] = le(e.substr(n));
});
be("Hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[Ue] = le(e.substr(0, n)), t[Wt] = le(e.substr(n, 2)), t[Rr] = le(e.substr(i));
});
function M1(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var C1 = /[ap]\.?m?\.?/i, R1 = ui("Hours", !0);
function $1(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var hp = {
  calendar: OS,
  longDateFormat: xS,
  invalidDate: PS,
  ordinal: kS,
  dayOfMonthOrdinalParse: MS,
  relativeTime: RS,
  months: KS,
  monthsShort: ap,
  week: s1,
  weekdays: h1,
  weekdaysMin: m1,
  weekdaysShort: fp,
  meridiemParse: C1
}, Ee = {}, xi = {}, Gi;
function L1(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function Kc(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function N1(e) {
  for (var t = 0, r, n, i, a; t < e.length; ) {
    for (a = Kc(e[t]).split("-"), r = a.length, n = Kc(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (i = Mo(a.slice(0, r).join("-")), i)
        return i;
      if (n && n.length >= r && L1(a, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return Gi;
}
function F1(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Mo(e) {
  var t = null, r;
  if (Ee[e] === void 0 && typeof module < "u" && module && module.exports && F1(e))
    try {
      t = Gi._abbr, r = require, r("./locale/" + e), en(t);
    } catch {
      Ee[e] = null;
    }
  return Ee[e];
}
function en(e, t) {
  var r;
  return e && (lt(t) ? r = jr(e) : r = yu(e, t), r ? Gi = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Gi._abbr;
}
function yu(e, t) {
  if (t !== null) {
    var r, n = hp;
    if (t.abbr = e, Ee[e] != null)
      Xd(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = Ee[e]._config;
    else if (t.parentLocale != null)
      if (Ee[t.parentLocale] != null)
        n = Ee[t.parentLocale]._config;
      else if (r = Mo(t.parentLocale), r != null)
        n = r._config;
      else
        return xi[t.parentLocale] || (xi[t.parentLocale] = []), xi[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Ee[e] = new ou(Al(n, t)), xi[e] && xi[e].forEach(function(i) {
      yu(i.name, i.config);
    }), en(e), Ee[e];
  } else
    return delete Ee[e], null;
}
function I1(e, t) {
  if (t != null) {
    var r, n, i = hp;
    Ee[e] != null && Ee[e].parentLocale != null ? Ee[e].set(Al(Ee[e]._config, t)) : (n = Mo(e), n != null && (i = n._config), t = Al(i, t), n == null && (t.abbr = e), r = new ou(t), r.parentLocale = Ee[e], Ee[e] = r), en(e);
  } else
    Ee[e] != null && (Ee[e].parentLocale != null ? (Ee[e] = Ee[e].parentLocale, e === en() && en(e)) : Ee[e] != null && delete Ee[e]);
  return Ee[e];
}
function jr(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Gi;
  if (!qt(e)) {
    if (t = Mo(e), t)
      return t;
    e = [e];
  }
  return N1(e);
}
function B1() {
  return Pl(Ee);
}
function vu(e) {
  var t, r = e._a;
  return r && ee(e).overflow === -2 && (t = r[Cr] < 0 || r[Cr] > 11 ? Cr : r[hr] < 1 || r[hr] > du(r[tt], r[Cr]) ? hr : r[Ue] < 0 || r[Ue] > 24 || r[Ue] === 24 && (r[Wt] !== 0 || r[Rr] !== 0 || r[vn] !== 0) ? Ue : r[Wt] < 0 || r[Wt] > 59 ? Wt : r[Rr] < 0 || r[Rr] > 59 ? Rr : r[vn] < 0 || r[vn] > 999 ? vn : -1, ee(e)._overflowDayOfYear && (t < tt || t > hr) && (t = hr), ee(e)._overflowWeeks && t === -1 && (t = YS), ee(e)._overflowWeekday && t === -1 && (t = VS), ee(e).overflow = t), e;
}
var j1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, U1 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, H1 = /Z|[+-]\d\d(?::?\d\d)?/, Ca = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Js = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Y1 = /^\/?Date\((-?\d+)/i, V1 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, W1 = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function mp(e) {
  var t, r, n = e._i, i = j1.exec(n) || U1.exec(n), a, o, s, u, f = Ca.length, c = Js.length;
  if (i) {
    for (ee(e).iso = !0, t = 0, r = f; t < r; t++)
      if (Ca[t][1].exec(i[1])) {
        o = Ca[t][0], a = Ca[t][2] !== !1;
        break;
      }
    if (o == null) {
      e._isValid = !1;
      return;
    }
    if (i[3]) {
      for (t = 0, r = c; t < r; t++)
        if (Js[t][1].exec(i[3])) {
          s = (i[2] || " ") + Js[t][0];
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && s != null) {
      e._isValid = !1;
      return;
    }
    if (i[4])
      if (H1.exec(i[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = o + (s || "") + (u || ""), bu(e);
  } else
    e._isValid = !1;
}
function q1(e, t, r, n, i, a) {
  var o = [
    G1(e),
    ap.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(i, 10)
  ];
  return a && o.push(parseInt(a, 10)), o;
}
function G1(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function z1(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function K1(e, t, r) {
  if (e) {
    var n = fp.indexOf(e), i = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== i)
      return ee(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function J1(e, t, r) {
  if (e)
    return W1[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), i = n % 100, a = (n - i) / 100;
  return a * 60 + i;
}
function yp(e) {
  var t = V1.exec(z1(e._i)), r;
  if (t) {
    if (r = q1(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !K1(t[1], r, e))
      return;
    e._a = r, e._tzm = J1(t[8], t[9], t[10]), e._d = Wi.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), ee(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function X1(e) {
  var t = Y1.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (mp(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (yp(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : $.createFromInputFallback(e);
}
$.createFromInputFallback = Lt(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Un(e, t, r) {
  return e ?? t ?? r;
}
function Z1(e) {
  var t = new Date($.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function gu(e) {
  var t, r, n = [], i, a, o;
  if (!e._d) {
    for (i = Z1(e), e._w && e._a[hr] == null && e._a[Cr] == null && Q1(e), e._dayOfYear != null && (o = Un(e._a[tt], i[tt]), (e._dayOfYear > Li(o) || e._dayOfYear === 0) && (ee(e)._overflowDayOfYear = !0), r = Wi(o, 0, e._dayOfYear), e._a[Cr] = r.getUTCMonth(), e._a[hr] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Ue] === 24 && e._a[Wt] === 0 && e._a[Rr] === 0 && e._a[vn] === 0 && (e._nextDay = !0, e._a[Ue] = 0), e._d = (e._useUTC ? Wi : a1).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ue] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (ee(e).weekdayMismatch = !0);
  }
}
function Q1(e) {
  var t, r, n, i, a, o, s, u, f;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, o = 4, r = Un(
    t.GG,
    e._a[tt],
    qi(_e(), 1, 4).year
  ), n = Un(t.W, 1), i = Un(t.E, 1), (i < 1 || i > 7) && (u = !0)) : (a = e._locale._week.dow, o = e._locale._week.doy, f = qi(_e(), a, o), r = Un(t.gg, e._a[tt], f.year), n = Un(t.w, f.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (u = !0)) : t.e != null ? (i = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : i = a), n < 1 || n > Nr(r, a, o) ? ee(e)._overflowWeeks = !0 : u != null ? ee(e)._overflowWeekday = !0 : (s = cp(r, n, i, a, o), e._a[tt] = s.year, e._dayOfYear = s.dayOfYear);
}
$.ISO_8601 = function() {
};
$.RFC_2822 = function() {
};
function bu(e) {
  if (e._f === $.ISO_8601) {
    mp(e);
    return;
  }
  if (e._f === $.RFC_2822) {
    yp(e);
    return;
  }
  e._a = [], ee(e).empty = !0;
  var t = "" + e._i, r, n, i, a, o, s = t.length, u = 0, f, c;
  for (i = Zd(e._f, e._locale).match(su) || [], c = i.length, r = 0; r < c; r++)
    a = i[r], n = (t.match(jS(a, e)) || [])[0], n && (o = t.substr(0, t.indexOf(n)), o.length > 0 && ee(e).unusedInput.push(o), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), Vn[a] ? (n ? ee(e).empty = !1 : ee(e).unusedTokens.push(a), HS(a, n, e)) : e._strict && !n && ee(e).unusedTokens.push(a);
  ee(e).charsLeftOver = s - u, t.length > 0 && ee(e).unusedInput.push(t), e._a[Ue] <= 12 && ee(e).bigHour === !0 && e._a[Ue] > 0 && (ee(e).bigHour = void 0), ee(e).parsedDateParts = e._a.slice(0), ee(e).meridiem = e._meridiem, e._a[Ue] = eO(
    e._locale,
    e._a[Ue],
    e._meridiem
  ), f = ee(e).era, f !== null && (e._a[tt] = e._locale.erasConvertYear(f, e._a[tt])), gu(e), vu(e);
}
function eO(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function tO(e) {
  var t, r, n, i, a, o, s = !1, u = e._f.length;
  if (u === 0) {
    ee(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < u; i++)
    a = 0, o = !1, t = au({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], bu(t), iu(t) && (o = !0), a += ee(t).charsLeftOver, a += ee(t).unusedTokens.length * 10, ee(t).score = a, s ? a < n && (n = a, r = t) : (n == null || a < n || o) && (n = a, r = t, o && (s = !0));
  Zr(e, r || t);
}
function rO(e) {
  if (!e._d) {
    var t = lu(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Kd(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), gu(e);
  }
}
function nO(e) {
  var t = new oa(vu(vp(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function vp(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || jr(e._l), t === null || r === void 0 && t === "" ? To({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Gt(t) ? new oa(vu(t)) : (aa(t) ? e._d = t : qt(r) ? tO(e) : r ? bu(e) : iO(e), iu(e) || (e._d = null), e));
}
function iO(e) {
  var t = e._i;
  lt(t) ? e._d = new Date($.now()) : aa(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? X1(e) : qt(t) ? (e._a = Kd(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), gu(e)) : _n(t) ? rO(e) : Fr(t) ? e._d = new Date(t) : $.createFromInputFallback(e);
}
function gp(e, t, r, n, i) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (_n(e) && nu(e) || qt(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = r, a._i = e, a._f = t, a._strict = n, nO(a);
}
function _e(e, t, r, n) {
  return gp(e, t, r, n, !1);
}
var aO = Lt(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = _e.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : To();
  }
), oO = Lt(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = _e.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : To();
  }
);
function bp(e, t) {
  var r, n;
  if (t.length === 1 && qt(t[0]) && (t = t[0]), !t.length)
    return _e();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function sO() {
  var e = [].slice.call(arguments, 0);
  return bp("isBefore", e);
}
function lO() {
  var e = [].slice.call(arguments, 0);
  return bp("isAfter", e);
}
var uO = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ai = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function cO(e) {
  var t, r = !1, n, i = Ai.length;
  for (t in e)
    if (he(e, t) && !($e.call(Ai, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < i; ++n)
    if (e[Ai[n]]) {
      if (r)
        return !1;
      parseFloat(e[Ai[n]]) !== le(e[Ai[n]]) && (r = !0);
    }
  return !0;
}
function fO() {
  return this._isValid;
}
function dO() {
  return Jt(NaN);
}
function Co(e) {
  var t = lu(e), r = t.year || 0, n = t.quarter || 0, i = t.month || 0, a = t.week || t.isoWeek || 0, o = t.day || 0, s = t.hour || 0, u = t.minute || 0, f = t.second || 0, c = t.millisecond || 0;
  this._isValid = cO(t), this._milliseconds = +c + f * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +o + a * 7, this._months = +i + n * 3 + r * 12, this._data = {}, this._locale = jr(), this._bubble();
}
function Va(e) {
  return e instanceof Co;
}
function kl(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function pO(e, t, r) {
  var n = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), a = 0, o;
  for (o = 0; o < n; o++)
    le(e[o]) !== le(t[o]) && a++;
  return a + i;
}
function wp(e, t) {
  Y(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + br(~~(r / 60), 2) + t + br(~~r % 60, 2);
  });
}
wp("Z", ":");
wp("ZZ", "");
F("Z", Do);
F("ZZ", Do);
be(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = wu(Do, e);
});
var hO = /([\+\-]|\d\d)/gi;
function wu(e, t) {
  var r = (t || "").match(e), n, i, a;
  return r === null ? null : (n = r[r.length - 1] || [], i = (n + "").match(hO) || ["-", 0, 0], a = +(i[1] * 60) + le(i[2]), a === 0 ? 0 : i[0] === "+" ? a : -a);
}
function Su(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (Gt(e) || aa(e) ? e.valueOf() : _e(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), $.updateOffset(r, !1), r) : _e(e).local();
}
function Ml(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
$.updateOffset = function() {
};
function mO(e, t, r) {
  var n = this._offset || 0, i;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = wu(Do, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (i = Ml(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), n !== e && (!t || this._changeInProgress ? _p(
      this,
      Jt(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, $.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Ml(this);
}
function yO(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function vO(e) {
  return this.utcOffset(0, e);
}
function gO(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ml(this), "m")), this;
}
function bO() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = wu(IS, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function wO(e) {
  return this.isValid() ? (e = e ? _e(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function SO() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function OO() {
  if (!lt(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return au(e, this), e = vp(e), e._a ? (t = e._isUTC ? wr(e._a) : _e(e._a), this._isDSTShifted = this.isValid() && pO(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function _O() {
  return this.isValid() ? !this._isUTC : !1;
}
function TO() {
  return this.isValid() ? this._isUTC : !1;
}
function Sp() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var EO = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, xO = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Jt(e, t) {
  var r = e, n = null, i, a, o;
  return Va(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Fr(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = EO.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: le(n[hr]) * i,
    h: le(n[Ue]) * i,
    m: le(n[Wt]) * i,
    s: le(n[Rr]) * i,
    ms: le(kl(n[vn] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (n = xO.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: cn(n[2], i),
    M: cn(n[3], i),
    w: cn(n[4], i),
    d: cn(n[5], i),
    h: cn(n[6], i),
    m: cn(n[7], i),
    s: cn(n[8], i)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (o = AO(
    _e(r.from),
    _e(r.to)
  ), r = {}, r.ms = o.milliseconds, r.M = o.months), a = new Co(r), Va(e) && he(e, "_locale") && (a._locale = e._locale), Va(e) && he(e, "_isValid") && (a._isValid = e._isValid), a;
}
Jt.fn = Co.prototype;
Jt.invalid = dO;
function cn(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Jc(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function AO(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Su(t, e), e.isBefore(t) ? r = Jc(e, t) : (r = Jc(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Op(e, t) {
  return function(r, n) {
    var i, a;
    return n !== null && !isNaN(+n) && (Xd(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = n, n = a), i = Jt(r, n), _p(this, i, e), this;
  };
}
function _p(e, t, r, n) {
  var i = t._milliseconds, a = kl(t._days), o = kl(t._months);
  e.isValid() && (n = n ?? !0, o && sp(e, Vi(e, "Month") + o * r), a && ip(e, "Date", Vi(e, "Date") + a * r), i && e._d.setTime(e._d.valueOf() + i * r), n && $.updateOffset(e, a || o));
}
var PO = Op(1, "add"), DO = Op(-1, "subtract");
function Tp(e) {
  return typeof e == "string" || e instanceof String;
}
function kO(e) {
  return Gt(e) || aa(e) || Tp(e) || Fr(e) || CO(e) || MO(e) || e === null || e === void 0;
}
function MO(e) {
  var t = _n(e) && !nu(e), r = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, a, o = n.length;
  for (i = 0; i < o; i += 1)
    a = n[i], r = r || he(e, a);
  return t && r;
}
function CO(e) {
  var t = qt(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !Fr(n) && Tp(e);
  }).length === 0), t && r;
}
function RO(e) {
  var t = _n(e) && !nu(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, a;
  for (i = 0; i < n.length; i += 1)
    a = n[i], r = r || he(e, a);
  return t && r;
}
function $O(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function LO(e, t) {
  arguments.length === 1 && (arguments[0] ? kO(arguments[0]) ? (e = arguments[0], t = void 0) : RO(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || _e(), n = Su(r, this).startOf("day"), i = $.calendarFormat(this, n) || "sameElse", a = t && (Sr(t[i]) ? t[i].call(this, r) : t[i]);
  return this.format(
    a || this.localeData().calendar(i, this, _e(r))
  );
}
function NO() {
  return new oa(this);
}
function FO(e, t) {
  var r = Gt(e) ? e : _e(e);
  return this.isValid() && r.isValid() ? (t = Nt(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function IO(e, t) {
  var r = Gt(e) ? e : _e(e);
  return this.isValid() && r.isValid() ? (t = Nt(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function BO(e, t, r, n) {
  var i = Gt(e) ? e : _e(e), a = Gt(t) ? t : _e(t);
  return this.isValid() && i.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(i, r) : !this.isBefore(i, r)) && (n[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function jO(e, t) {
  var r = Gt(e) ? e : _e(e), n;
  return this.isValid() && r.isValid() ? (t = Nt(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function UO(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function HO(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function YO(e, t, r) {
  var n, i, a;
  if (!this.isValid())
    return NaN;
  if (n = Su(e, this), !n.isValid())
    return NaN;
  switch (i = (n.utcOffset() - this.utcOffset()) * 6e4, t = Nt(t), t) {
    case "year":
      a = Wa(this, n) / 12;
      break;
    case "month":
      a = Wa(this, n);
      break;
    case "quarter":
      a = Wa(this, n) / 3;
      break;
    case "second":
      a = (this - n) / 1e3;
      break;
    case "minute":
      a = (this - n) / 6e4;
      break;
    case "hour":
      a = (this - n) / 36e5;
      break;
    case "day":
      a = (this - n - i) / 864e5;
      break;
    case "week":
      a = (this - n - i) / 6048e5;
      break;
    default:
      a = this - n;
  }
  return r ? a : Dt(a);
}
function Wa(e, t) {
  if (e.date() < t.date())
    return -Wa(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), i, a;
  return t - n < 0 ? (i = e.clone().add(r - 1, "months"), a = (t - n) / (n - i)) : (i = e.clone().add(r + 1, "months"), a = (t - n) / (i - n)), -(r + a) || 0;
}
$.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
$.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function VO() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function WO(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Ya(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Sr(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ya(r, "Z")) : Ya(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function qO() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, i, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + n + i + a);
}
function GO(e) {
  e || (e = this.isUtc() ? $.defaultFormatUtc : $.defaultFormat);
  var t = Ya(this, e);
  return this.localeData().postformat(t);
}
function zO(e, t) {
  return this.isValid() && (Gt(e) && e.isValid() || _e(e).isValid()) ? Jt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function KO(e) {
  return this.from(_e(), e);
}
function JO(e, t) {
  return this.isValid() && (Gt(e) && e.isValid() || _e(e).isValid()) ? Jt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function XO(e) {
  return this.to(_e(), e);
}
function Ep(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = jr(e), t != null && (this._locale = t), this);
}
var xp = Lt(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ap() {
  return this._locale;
}
var so = 1e3, Wn = 60 * so, lo = 60 * Wn, Pp = (365 * 400 + 97) * 24 * lo;
function qn(e, t) {
  return (e % t + t) % t;
}
function Dp(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Pp : new Date(e, t, r).valueOf();
}
function kp(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Pp : Date.UTC(e, t, r);
}
function ZO(e) {
  var t, r;
  if (e = Nt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? kp : Dp, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= qn(
        t + (this._isUTC ? 0 : this.utcOffset() * Wn),
        lo
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= qn(t, Wn);
      break;
    case "second":
      t = this._d.valueOf(), t -= qn(t, so);
      break;
  }
  return this._d.setTime(t), $.updateOffset(this, !0), this;
}
function QO(e) {
  var t, r;
  if (e = Nt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? kp : Dp, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += lo - qn(
        t + (this._isUTC ? 0 : this.utcOffset() * Wn),
        lo
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Wn - qn(t, Wn) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += so - qn(t, so) - 1;
      break;
  }
  return this._d.setTime(t), $.updateOffset(this, !0), this;
}
function e_() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function t_() {
  return Math.floor(this.valueOf() / 1e3);
}
function r_() {
  return new Date(this.valueOf());
}
function n_() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function i_() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function a_() {
  return this.isValid() ? this.toISOString() : null;
}
function o_() {
  return iu(this);
}
function s_() {
  return Zr({}, ee(this));
}
function l_() {
  return ee(this).overflow;
}
function u_() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Y("N", 0, 0, "eraAbbr");
Y("NN", 0, 0, "eraAbbr");
Y("NNN", 0, 0, "eraAbbr");
Y("NNNN", 0, 0, "eraName");
Y("NNNNN", 0, 0, "eraNarrow");
Y("y", ["y", 1], "yo", "eraYear");
Y("y", ["yy", 2], 0, "eraYear");
Y("y", ["yyy", 3], 0, "eraYear");
Y("y", ["yyyy", 4], 0, "eraYear");
F("N", Ou);
F("NN", Ou);
F("NNN", Ou);
F("NNNN", w_);
F("NNNNN", S_);
be(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var i = r._locale.erasParse(e, n, r._strict);
    i ? ee(r).era = i : ee(r).invalidEra = e;
  }
);
F("y", si);
F("yy", si);
F("yyy", si);
F("yyyy", si);
F("yo", O_);
be(["y", "yy", "yyy", "yyyy"], tt);
be(["yo"], function(e, t, r, n) {
  var i;
  r._locale._eraYearOrdinalRegex && (i = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[tt] = r._locale.eraYearOrdinalParse(e, i) : t[tt] = parseInt(e, 10);
});
function c_(e, t) {
  var r, n, i, a = this._eras || jr("en")._eras;
  for (r = 0, n = a.length; r < n; ++r) {
    switch (typeof a[r].since) {
      case "string":
        i = $(a[r].since).startOf("day"), a[r].since = i.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        i = $(a[r].until).startOf("day").valueOf(), a[r].until = i.valueOf();
        break;
    }
  }
  return a;
}
function f_(e, t, r) {
  var n, i, a = this.eras(), o, s, u;
  for (e = e.toUpperCase(), n = 0, i = a.length; n < i; ++n)
    if (o = a[n].name.toUpperCase(), s = a[n].abbr.toUpperCase(), u = a[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (s === e)
            return a[n];
          break;
        case "NNNN":
          if (o === e)
            return a[n];
          break;
        case "NNNNN":
          if (u === e)
            return a[n];
          break;
      }
    else if ([o, s, u].indexOf(e) >= 0)
      return a[n];
}
function d_(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? $(e.since).year() : $(e.since).year() + (t - e.offset) * r;
}
function p_() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function h_() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function m_() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function y_() {
  var e, t, r, n, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (r = i[e].since <= i[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
      return (this.year() - $(i[e].since).year()) * r + i[e].offset;
  return this.year();
}
function v_(e) {
  return he(this, "_erasNameRegex") || _u.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function g_(e) {
  return he(this, "_erasAbbrRegex") || _u.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function b_(e) {
  return he(this, "_erasNarrowRegex") || _u.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Ou(e, t) {
  return t.erasAbbrRegex(e);
}
function w_(e, t) {
  return t.erasNameRegex(e);
}
function S_(e, t) {
  return t.erasNarrowRegex(e);
}
function O_(e, t) {
  return t._eraYearOrdinalRegex || si;
}
function _u() {
  var e = [], t = [], r = [], n = [], i, a, o, s, u, f = this.eras();
  for (i = 0, a = f.length; i < a; ++i)
    o = Lr(f[i].name), s = Lr(f[i].abbr), u = Lr(f[i].narrow), t.push(o), e.push(s), r.push(u), n.push(o), n.push(s), n.push(u);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
Y(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Y(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ro(e, t) {
  Y(0, [e, e.length], 0, t);
}
Ro("gggg", "weekYear");
Ro("ggggg", "weekYear");
Ro("GGGG", "isoWeekYear");
Ro("GGGGG", "isoWeekYear");
F("G", Po);
F("g", Po);
F("GG", Te, Ot);
F("gg", Te, Ot);
F("GGGG", cu, uu);
F("gggg", cu, uu);
F("GGGGG", Ao, Eo);
F("ggggg", Ao, Eo);
la(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = le(e);
  }
);
la(["gg", "GG"], function(e, t, r, n) {
  t[n] = $.parseTwoDigitYear(e);
});
function __(e) {
  return Mp.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function T_(e) {
  return Mp.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function E_() {
  return Nr(this.year(), 1, 4);
}
function x_() {
  return Nr(this.isoWeekYear(), 1, 4);
}
function A_() {
  var e = this.localeData()._week;
  return Nr(this.year(), e.dow, e.doy);
}
function P_() {
  var e = this.localeData()._week;
  return Nr(this.weekYear(), e.dow, e.doy);
}
function Mp(e, t, r, n, i) {
  var a;
  return e == null ? qi(this, n, i).year : (a = Nr(e, n, i), t > a && (t = a), D_.call(this, e, t, r, n, i));
}
function D_(e, t, r, n, i) {
  var a = cp(e, t, r, n, i), o = Wi(a.year, 0, a.dayOfYear);
  return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
}
Y("Q", 0, "Qo", "quarter");
F("Q", Qd);
be("Q", function(e, t) {
  t[Cr] = (le(e) - 1) * 3;
});
function k_(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Y("D", ["DD", 2], "Do", "date");
F("D", Te, li);
F("DD", Te, Ot);
F("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
be(["D", "DD"], hr);
be("Do", function(e, t) {
  t[hr] = le(e.match(Te)[0]);
});
var Cp = ui("Date", !0);
Y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
F("DDD", xo);
F("DDDD", ep);
be(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = le(e);
});
function M_(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Y("m", ["mm", 2], 0, "minute");
F("m", Te, fu);
F("mm", Te, Ot);
be(["m", "mm"], Wt);
var C_ = ui("Minutes", !1);
Y("s", ["ss", 2], 0, "second");
F("s", Te, fu);
F("ss", Te, Ot);
be(["s", "ss"], Rr);
var R_ = ui("Seconds", !1);
Y("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Y(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Y(0, ["SSS", 3], 0, "millisecond");
Y(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Y(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Y(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Y(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Y(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Y(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
F("S", xo, Qd);
F("SS", xo, Ot);
F("SSS", xo, ep);
var Qr, Rp;
for (Qr = "SSSS"; Qr.length <= 9; Qr += "S")
  F(Qr, si);
function $_(e, t) {
  t[vn] = le(("0." + e) * 1e3);
}
for (Qr = "S"; Qr.length <= 9; Qr += "S")
  be(Qr, $_);
Rp = ui("Milliseconds", !1);
Y("z", 0, 0, "zoneAbbr");
Y("zz", 0, 0, "zoneName");
function L_() {
  return this._isUTC ? "UTC" : "";
}
function N_() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var M = oa.prototype;
M.add = PO;
M.calendar = LO;
M.clone = NO;
M.diff = YO;
M.endOf = QO;
M.format = GO;
M.from = zO;
M.fromNow = KO;
M.to = JO;
M.toNow = XO;
M.get = qS;
M.invalidAt = l_;
M.isAfter = FO;
M.isBefore = IO;
M.isBetween = BO;
M.isSame = jO;
M.isSameOrAfter = UO;
M.isSameOrBefore = HO;
M.isValid = o_;
M.lang = xp;
M.locale = Ep;
M.localeData = Ap;
M.max = oO;
M.min = aO;
M.parsingFlags = s_;
M.set = GS;
M.startOf = ZO;
M.subtract = DO;
M.toArray = n_;
M.toObject = i_;
M.toDate = r_;
M.toISOString = WO;
M.inspect = qO;
typeof Symbol < "u" && Symbol.for != null && (M[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
M.toJSON = a_;
M.toString = VO;
M.unix = t_;
M.valueOf = e_;
M.creationData = u_;
M.eraName = p_;
M.eraNarrow = h_;
M.eraAbbr = m_;
M.eraYear = y_;
M.year = np;
M.isLeapYear = WS;
M.weekYear = __;
M.isoWeekYear = T_;
M.quarter = M.quarters = k_;
M.month = lp;
M.daysInMonth = r1;
M.week = M.weeks = c1;
M.isoWeek = M.isoWeeks = f1;
M.weeksInYear = A_;
M.weeksInWeekYear = P_;
M.isoWeeksInYear = E_;
M.isoWeeksInISOWeekYear = x_;
M.date = Cp;
M.day = M.days = T1;
M.weekday = E1;
M.isoWeekday = x1;
M.dayOfYear = M_;
M.hour = M.hours = R1;
M.minute = M.minutes = C_;
M.second = M.seconds = R_;
M.millisecond = M.milliseconds = Rp;
M.utcOffset = mO;
M.utc = vO;
M.local = gO;
M.parseZone = bO;
M.hasAlignedHourOffset = wO;
M.isDST = SO;
M.isLocal = _O;
M.isUtcOffset = TO;
M.isUtc = Sp;
M.isUTC = Sp;
M.zoneAbbr = L_;
M.zoneName = N_;
M.dates = Lt(
  "dates accessor is deprecated. Use date instead.",
  Cp
);
M.months = Lt(
  "months accessor is deprecated. Use month instead",
  lp
);
M.years = Lt(
  "years accessor is deprecated. Use year instead",
  np
);
M.zone = Lt(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  yO
);
M.isDSTShifted = Lt(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  OO
);
function F_(e) {
  return _e(e * 1e3);
}
function I_() {
  return _e.apply(null, arguments).parseZone();
}
function $p(e) {
  return e;
}
var me = ou.prototype;
me.calendar = _S;
me.longDateFormat = AS;
me.invalidDate = DS;
me.ordinal = CS;
me.preparse = $p;
me.postformat = $p;
me.relativeTime = $S;
me.pastFuture = LS;
me.set = SS;
me.eras = c_;
me.erasParse = f_;
me.erasConvertYear = d_;
me.erasAbbrRegex = g_;
me.erasNameRegex = v_;
me.erasNarrowRegex = b_;
me.months = ZS;
me.monthsShort = QS;
me.monthsParse = t1;
me.monthsRegex = i1;
me.monthsShortRegex = n1;
me.week = o1;
me.firstDayOfYear = u1;
me.firstDayOfWeek = l1;
me.weekdays = b1;
me.weekdaysMin = S1;
me.weekdaysShort = w1;
me.weekdaysParse = _1;
me.weekdaysRegex = A1;
me.weekdaysShortRegex = P1;
me.weekdaysMinRegex = D1;
me.isPM = M1;
me.meridiem = $1;
function uo(e, t, r, n) {
  var i = jr(), a = wr().set(n, t);
  return i[r](a, e);
}
function Lp(e, t, r) {
  if (Fr(e) && (t = e, e = void 0), e = e || "", t != null)
    return uo(e, t, r, "month");
  var n, i = [];
  for (n = 0; n < 12; n++)
    i[n] = uo(e, n, r, "month");
  return i;
}
function Tu(e, t, r, n) {
  typeof e == "boolean" ? (Fr(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Fr(t) && (r = t, t = void 0), t = t || "");
  var i = jr(), a = e ? i._week.dow : 0, o, s = [];
  if (r != null)
    return uo(t, (r + a) % 7, n, "day");
  for (o = 0; o < 7; o++)
    s[o] = uo(t, (o + a) % 7, n, "day");
  return s;
}
function B_(e, t) {
  return Lp(e, t, "months");
}
function j_(e, t) {
  return Lp(e, t, "monthsShort");
}
function U_(e, t, r) {
  return Tu(e, t, r, "weekdays");
}
function H_(e, t, r) {
  return Tu(e, t, r, "weekdaysShort");
}
function Y_(e, t, r) {
  return Tu(e, t, r, "weekdaysMin");
}
en("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = le(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
$.lang = Lt(
  "moment.lang is deprecated. Use moment.locale instead.",
  en
);
$.langData = Lt(
  "moment.langData is deprecated. Use moment.localeData instead.",
  jr
);
var Pr = Math.abs;
function V_() {
  var e = this._data;
  return this._milliseconds = Pr(this._milliseconds), this._days = Pr(this._days), this._months = Pr(this._months), e.milliseconds = Pr(e.milliseconds), e.seconds = Pr(e.seconds), e.minutes = Pr(e.minutes), e.hours = Pr(e.hours), e.months = Pr(e.months), e.years = Pr(e.years), this;
}
function Np(e, t, r, n) {
  var i = Jt(t, r);
  return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble();
}
function W_(e, t) {
  return Np(this, e, t, 1);
}
function q_(e, t) {
  return Np(this, e, t, -1);
}
function Xc(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function G_() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, i, a, o, s, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Xc(Cl(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, i = Dt(e / 1e3), n.seconds = i % 60, a = Dt(i / 60), n.minutes = a % 60, o = Dt(a / 60), n.hours = o % 24, t += Dt(o / 24), u = Dt(Fp(t)), r += u, t -= Xc(Cl(u)), s = Dt(r / 12), r %= 12, n.days = t, n.months = r, n.years = s, this;
}
function Fp(e) {
  return e * 4800 / 146097;
}
function Cl(e) {
  return e * 146097 / 4800;
}
function z_(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = Nt(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + Fp(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(Cl(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ur(e) {
  return function() {
    return this.as(e);
  };
}
var Ip = Ur("ms"), K_ = Ur("s"), J_ = Ur("m"), X_ = Ur("h"), Z_ = Ur("d"), Q_ = Ur("w"), eT = Ur("M"), tT = Ur("Q"), rT = Ur("y"), nT = Ip;
function iT() {
  return Jt(this);
}
function aT(e) {
  return e = Nt(e), this.isValid() ? this[e + "s"]() : NaN;
}
function An(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var oT = An("milliseconds"), sT = An("seconds"), lT = An("minutes"), uT = An("hours"), cT = An("days"), fT = An("months"), dT = An("years");
function pT() {
  return Dt(this.days() / 7);
}
var Mr = Math.round, Hn = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function hT(e, t, r, n, i) {
  return i.relativeTime(t || 1, !!r, e, n);
}
function mT(e, t, r, n) {
  var i = Jt(e).abs(), a = Mr(i.as("s")), o = Mr(i.as("m")), s = Mr(i.as("h")), u = Mr(i.as("d")), f = Mr(i.as("M")), c = Mr(i.as("w")), y = Mr(i.as("y")), m = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || o <= 1 && ["m"] || o < r.m && ["mm", o] || s <= 1 && ["h"] || s < r.h && ["hh", s] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (m = m || c <= 1 && ["w"] || c < r.w && ["ww", c]), m = m || f <= 1 && ["M"] || f < r.M && ["MM", f] || y <= 1 && ["y"] || ["yy", y], m[2] = t, m[3] = +e > 0, m[4] = n, hT.apply(null, m);
}
function yT(e) {
  return e === void 0 ? Mr : typeof e == "function" ? (Mr = e, !0) : !1;
}
function vT(e, t) {
  return Hn[e] === void 0 ? !1 : t === void 0 ? Hn[e] : (Hn[e] = t, e === "s" && (Hn.ss = t - 1), !0);
}
function gT(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Hn, i, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Hn, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), i = this.localeData(), a = mT(this, !r, n, i), r && (a = i.pastFuture(+this, a)), i.postformat(a);
}
var Xs = Math.abs;
function In(e) {
  return (e > 0) - (e < 0) || +e;
}
function $o() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Xs(this._milliseconds) / 1e3, t = Xs(this._days), r = Xs(this._months), n, i, a, o, s = this.asSeconds(), u, f, c, y;
  return s ? (n = Dt(e / 60), i = Dt(n / 60), e %= 60, n %= 60, a = Dt(r / 12), r %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = s < 0 ? "-" : "", f = In(this._months) !== In(s) ? "-" : "", c = In(this._days) !== In(s) ? "-" : "", y = In(this._milliseconds) !== In(s) ? "-" : "", u + "P" + (a ? f + a + "Y" : "") + (r ? f + r + "M" : "") + (t ? c + t + "D" : "") + (i || n || e ? "T" : "") + (i ? y + i + "H" : "") + (n ? y + n + "M" : "") + (e ? y + o + "S" : "")) : "P0D";
}
var ce = Co.prototype;
ce.isValid = fO;
ce.abs = V_;
ce.add = W_;
ce.subtract = q_;
ce.as = z_;
ce.asMilliseconds = Ip;
ce.asSeconds = K_;
ce.asMinutes = J_;
ce.asHours = X_;
ce.asDays = Z_;
ce.asWeeks = Q_;
ce.asMonths = eT;
ce.asQuarters = tT;
ce.asYears = rT;
ce.valueOf = nT;
ce._bubble = G_;
ce.clone = iT;
ce.get = aT;
ce.milliseconds = oT;
ce.seconds = sT;
ce.minutes = lT;
ce.hours = uT;
ce.days = cT;
ce.weeks = pT;
ce.months = fT;
ce.years = dT;
ce.humanize = gT;
ce.toISOString = $o;
ce.toString = $o;
ce.toJSON = $o;
ce.locale = Ep;
ce.localeData = Ap;
ce.toIsoString = Lt(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  $o
);
ce.lang = xp;
Y("X", 0, 0, "unix");
Y("x", 0, 0, "valueOf");
F("x", Po);
F("X", BS);
be("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
be("x", function(e, t, r) {
  r._d = new Date(le(e));
});
//! moment.js
$.version = "2.30.1";
bS(_e);
$.fn = M;
$.min = sO;
$.max = lO;
$.now = uO;
$.utc = wr;
$.unix = F_;
$.months = B_;
$.isDate = aa;
$.locale = en;
$.invalid = To;
$.duration = Jt;
$.isMoment = Gt;
$.weekdays = U_;
$.parseZone = I_;
$.localeData = jr;
$.isDuration = Va;
$.monthsShort = j_;
$.weekdaysMin = Y_;
$.defineLocale = yu;
$.updateLocale = I1;
$.locales = B1;
$.weekdaysShort = H_;
$.normalizeUnits = Nt;
$.relativeTimeRounding = yT;
$.relativeTimeThreshold = vT;
$.calendarFormat = $O;
$.prototype = M;
$.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function Bn(e, t) {
  if (!(typeof e != "object" || typeof t != "string"))
    return t.split(".").reduce((r, n) => r ? r[n] : null, e);
}
function Rl(e) {
  return typeof e == "string" ? e.replaceAll(".", " ").replaceAll("_", " ").replace(/\w\S*/g, function(t) {
    return t.charAt(0).toUpperCase() + t.substring(1).toLowerCase();
  }) : "";
}
function bT(e) {
  return (parseFloat(e) || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function wT(e) {
  return (e < 0 ? "-" : "") + "$" + Number(parseFloat(e) || 0).toFixed(2).replace("-", "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function ST(e, t = "MM/DD/YYYY") {
  return typeof e == "string" ? $(e).format(t) : null;
}
const OT = ["id", "disabled"], _T = ["value"], TT = ["id", "rows", "placeholder", "disabled"], ET = ["id", "type", "placeholder", "autocomplete", "required", "disabled"], xT = { key: 3 }, AT = { class: "text-sm text-red-600" }, PT = {
  __name: "GridInput",
  props: {
    record: {
      type: Object,
      required: !0
    },
    columnIndex: {
      type: Number,
      required: !0
    },
    field: {
      type: String,
      required: !0
    },
    input: {
      type: Object,
      required: !0
    },
    events: {
      type: Object,
      default() {
        return Xi();
      }
    }
  },
  setup(e) {
    const t = e, r = G(() => t.input.id ? t.input.id : t.field + "_" + Math.random().toString(36).slice(2)), n = G(() => t.record.errors && t.record.errors[t.field] ? t.record.errors[t.field] : []);
    function i(a) {
      t.events.emit("updated-record", {
        columnIndex: t.columnIndex,
        field: t.field,
        value: a
      });
    }
    return (a, o) => (I(), B(ct, null, [
      e.input.select ? zr((I(), B("select", {
        key: 0,
        id: r.value,
        class: "input-select",
        "onUpdate:modelValue": o[0] || (o[0] = (s) => e.record[e.field] = s),
        disabled: e.input.disabled,
        "on:update:modelValue": i
      }, [
        o[3] || (o[3] = L("option", { value: null }, "select...", -1)),
        (I(!0), B(ct, null, $r(e.input.select.options, (s) => (I(), B("option", {
          value: s[e.input.select.field ?? "id"] ?? s
        }, ut(s[e.input.select.label ?? "name"] ?? s), 9, _T))), 256))
      ], 40, OT)), [
        [Vp, e.record[e.field]]
      ]) : e.input.type === "textarea" ? zr((I(), B("textarea", {
        key: 1,
        id: r.value,
        class: "input-textarea",
        rows: e.input.rows ?? "10",
        "onUpdate:modelValue": o[1] || (o[1] = (s) => e.record[e.field] = s),
        placeholder: e.input.placeholder ?? ge(Rl)(t.field),
        disabled: e.input.disabled,
        "on:update:modelValue": i
      }, null, 40, TT)), [
        [Wp, e.record[e.field]]
      ]) : zr((I(), B("input", {
        key: 2,
        id: r.value,
        class: Ve([e.input.type === "checkbox" ? "input-checkbox" : "input-text"]),
        type: e.input.type,
        "onUpdate:modelValue": o[2] || (o[2] = (s) => e.record[e.field] = s),
        placeholder: e.input.placeholder ?? ge(Rl)(t.field),
        autocomplete: e.input.autocomplete,
        required: e.input.required,
        disabled: e.input.disabled,
        "on:update:modelValue": i
      }, null, 42, ET)), [
        [qp, e.record[e.field]]
      ]),
      n.value.length ? (I(), B("div", xT, [
        (I(!0), B(ct, null, $r(n.value, (s) => (I(), B("p", AT, ut(s), 1))), 256))
      ])) : De("", !0)
    ], 64));
  }
}, DT = ["innerHTML"], kT = {
  __name: "Cell",
  props: {
    columnIndex: {
      type: Number,
      required: !0
    },
    column: {
      default() {
        return {
          header: "--",
          content: () => "--"
        };
      }
    },
    record: {
      default() {
        return {};
      }
    },
    cellClass: {
      type: String,
      default: ""
    },
    loading: {
      required: !0,
      default() {
        return !1;
      }
    },
    events: {}
  },
  emits: ["rendered"],
  setup(e, { emit: t }) {
    const r = t, n = e;
    let i = H(null), a = H(null);
    const o = H(null);
    Ae(() => {
      s();
    }), Ye(a, (f) => {
      r("rendered", f);
    });
    function s() {
      if (n.loading)
        return "";
      if (n.column.hasOwnProperty("content") && typeof n.column.content == "function")
        return a.value = n.column.content(n.record);
      switch (n.column.type) {
        case "actions":
          return o.value = Dr({
            render: () => se(gS, {
              actions: n.column.actions,
              confirm: n.column.hasOwnProperty("confirm") ? n.column.confirm : !0,
              columnIndex: n.columnIndex,
              record: n.record,
              events: n.column.events ? n.column.events : n.events,
              class: n.column.actionsClass
            })
          }), o.value.mount(i.value);
        case "button":
          return o.value = Dr({
            render: () => se(fw, {
              columnIndex: n.columnIndex,
              record: n.record,
              field: n.column.field,
              events: n.column.events ? n.column.events : n.events,
              class: n.column.buttonClass,
              label: n.column.label
            })
          }), o.value.mount(i.value);
        case "toggle":
          return o.value = Dr({
            render: () => se(Zh, {
              columnIndex: n.columnIndex,
              record: n.record,
              field: n.column.field,
              events: n.column.events ? n.column.events : n.events
            })
          }), o.value.mount(i.value);
        case "input":
          return o.value = Dr({
            render: () => se(PT, {
              columnIndex: n.columnIndex,
              record: n.record,
              field: n.column.field,
              input: n.column.input,
              events: n.column.events ? n.column.events : n.events
            })
          }), o.value.mount(i.value);
        case "link":
        case "download":
          let c = "";
          return n.column.href ? (c = n.column.href, typeof n.column.href == "function" && (c = n.column.href(n.record))) : n.column.hasOwnProperty("field") && (c = u(n.column.field)), a.value = n.column.label ?? (n.column.hasOwnProperty("field") ? u(n.column.field) : null), n.column.label && typeof n.column.label == "function" && (a.value = n.column.label(n.record)), o.value = Dr({
            render: () => se(Ac, {
              href: c,
              label: a.value,
              type: n.column.type,
              target: n.column.target
            })
          }), o.value.mount(i.value);
        case "modelLink":
          return a.value = u(n.column.field), o.value = Dr({
            render: () => se(Ac, {
              href: `${n.column.modelPath}/${n.column.modelIdField ? u(n.column.modelIdField) : n.record.id}` + (n.column.modelPathSuffix ? `/${n.column.modelPathSuffix}` : ""),
              label: a.value
            })
          }), o.value.mount(i.value);
        case "date":
          return a.value = ST(u(n.column.field));
        case "number":
          return a.value = bT(u(n.column.field) ?? 0);
        case "money":
          return a.value = wT(u(n.column.field) ?? 0);
      }
      if (n.column.hasOwnProperty("field"))
        return a.value = u(n.column.field);
      const f = {
        columnIndex: n.columnIndex,
        record: n.record
      };
      n.events && (f.events = n.events);
      for (let c in n.column.content.props)
        typeof n.column.content.props[c] == "function" ? f[c] = n.column.content.props[c](n.record) : f[c] = n.column.content.props[c];
      o.value = Dr({
        props: n.column.props,
        render: () => se(n.column.content.component, f)
      }), o.value.mount(i.value);
    }
    function u(f) {
      let c = f.indexOf(".") > -1 ? f.split(".") : [f], y = n.record[c.shift()];
      for (let m = 0; m < c.length; m++)
        y = y && c[m] ? y[c[m]] ?? null : null;
      return y;
    }
    return Ye(() => n.record, () => {
      o.value && o.value.unmount(), Ni(s);
    }, { deep: !0 }), (f, c) => e.loading ? (I(), B("td", {
      key: 0,
      class: Ve([e.column.class, e.cellClass, "px-6 py-4 whitespace-nowrap text-sm text-gray-500"])
    }, c[0] || (c[0] = [
      L("div", { class: "h-8 bg-slate-400 rounded" }, null, -1)
    ]), 2)) : (I(), B("td", {
      key: 1,
      class: Ve([e.column.class, e.cellClass, "px-6 py-4 whitespace-nowrap text-sm text-gray-500"]),
      ref_key: "cell",
      ref: i
    }, [
      L("div", { innerHTML: ge(a) }, null, 8, DT)
    ], 2));
  }
};
function Zs(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function MT(e) {
  return (...t) => !e(...t);
}
function CT(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function RT(e) {
  return e.filter((t) => !t.$isLabel);
}
function Qs(e, t) {
  return (r) => r.reduce((n, i) => i[e] && i[e].length ? (n.push({
    $groupLabel: i[t],
    $isLabel: !0
  }), n.concat(i[e])) : n, []);
}
const Zc = (...e) => (t) => e.reduce((r, n) => n(r), t);
var $T = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: !1
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: !1
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(e, t) {
        return Zs(e) ? "" : t ? e[t] : e;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: !1
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
     */
    preventAutofocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Allows a custom function for sorting search/filtered results.
     * @default null
     * @type {Function}
     */
    filteringSortFunc: {
      type: Function,
      default: null
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const e = this.search || "", t = e.toLowerCase().trim();
      let r = this.options.concat();
      return this.internalSearch ? r = this.groupValues ? this.filterAndFlat(r, t, this.label) : this.filterOptions(r, t, this.label, this.customLabel) : r = this.groupValues ? Qs(this.groupValues, this.groupLabel)(r) : r, r = this.hideSelected ? r.filter(MT(this.isSelected)) : r, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? r.push({ isTag: !0, label: e }) : r.unshift({ isTag: !0, label: e })), r.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((e) => e[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((t) => this.customLabel(t, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue: {
      handler() {
        this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
      },
      deep: !0
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(e, t, r) {
      return Zc(
        this.filterGroups(t, r, this.groupValues, this.groupLabel, this.customLabel),
        Qs(this.groupValues, this.groupLabel)
      )(e);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(e) {
      return Zc(
        Qs(this.groupValues, this.groupLabel),
        RT
      )(e);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(e) {
      this.search = e;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(e) {
      return this.options ? this.optionKeys.indexOf(e) > -1 : !1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(e) {
      const t = this.trackBy ? e[this.trackBy] : e;
      return this.valueKeys.indexOf(t) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(e) {
      return !!e.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(e) {
      if (Zs(e)) return "";
      if (e.isTag) return e.label;
      if (e.$isLabel) return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return Zs(t) ? "" : t;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(e, t) {
      if (e.$isLabel && this.groupSelect) {
        this.selectGroup(e);
        return;
      }
      if (!(this.blockKeys.indexOf(t) !== -1 || this.disabled || e.$isDisabled || e.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(t === "Tab" && !this.pointerDirty)) {
        if (e.isTag)
          this.$emit("tag", e.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(e)) {
            t !== "Tab" && this.removeElement(e);
            return;
          }
          this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([e])) : this.$emit("update:modelValue", e), this.$emit("select", e, this.id), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(e) {
      const t = this.options.find((r) => r[this.groupLabel] === e.$groupLabel);
      if (t) {
        if (this.wholeGroupSelected(t)) {
          this.$emit("remove", t[this.groupValues], this.id);
          const r = this.trackBy ? t[this.groupValues].map((i) => i[this.trackBy]) : t[this.groupValues], n = this.internalValue.filter(
            (i) => r.indexOf(this.trackBy ? i[this.trackBy] : i) === -1
          );
          this.$emit("update:modelValue", n);
        } else {
          const r = t[this.groupValues].filter(
            (n) => !(this.isOptionDisabled(n) || this.isSelected(n))
          );
          this.max && r.splice(this.max - this.internalValue.length), this.$emit("select", r, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(r)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(e) {
      return e[this.groupValues].every(
        (t) => this.isSelected(t) || this.isOptionDisabled(t)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(e) {
      return e[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(e, t = !0) {
      if (this.disabled || e.$isDisabled) return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const r = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.multiple) {
        const n = this.internalValue.slice(0, r).concat(this.internalValue.slice(r + 1));
        this.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", null);
      this.$emit("remove", e, this.id), this.closeOnSelect && t && this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.preventAutofocus || this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.preventAutofocus || typeof this.$el < "u" && this.$el.focus(), this.$emit("open", this.id));
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search !== null && typeof this.$refs.search < "u" && this.$refs.search.blur() : typeof this.$el < "u" && this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window > "u") return;
      const e = this.$el.getBoundingClientRect().top, t = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      t > this.maxHeight || t > e || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(t - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(e - 40, this.maxHeight));
    },
    /**
     * Filters and sorts the options ready for selection
     * @param {Array} options
     * @param {String} search
     * @param {String} label
     * @param {Function} customLabel
     * @returns {Array}
     */
    filterOptions(e, t, r, n) {
      return t ? e.filter((i) => CT(n(i, r), t)).sort((i, a) => typeof this.filteringSortFunc == "function" ? this.filteringSortFunc(i, a) : n(i, r).length - n(a, r).length) : e;
    },
    /**
     *
     * @param {String} search
     * @param {String} label
     * @param {String} values
     * @param {String} groupLabel
     * @param {function} customLabel
     * @returns {function(*): *}
     */
    filterGroups(e, t, r, n, i) {
      return (a) => a.map((o) => {
        if (!o[r])
          return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
        const s = this.filterOptions(o[r], e, t, i);
        return s.length ? {
          [n]: o[n],
          [r]: s
        } : [];
      });
    }
  }
}, LT = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(e, t) {
      return {
        "multiselect__option--highlight": e === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(t)
      };
    },
    groupHighlight(e, t) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": t.$isLabel }
        ];
      const r = this.options.find((n) => n[this.groupLabel] === t.$groupLabel);
      return r && !this.wholeGroupDisabled(r) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(r) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: e } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], e), this.pointerReset();
    },
    pointerForward() {
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(e) {
      this.pointer = e, this.pointerDirty = !0;
    }
  }
}, Bp = {
  name: "vue-multiselect",
  mixins: [$T, LT],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: !1
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ""
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: !0
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (e) => `and ${e} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
      type: Boolean,
      default: !1
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ""
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    /**
     * Adds Required attribute to the input element when there is no value selected
     * @default false
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasOptionGroup() {
      return this.groupValues && this.groupLabel && this.groupSelect;
    },
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    },
    isRequired() {
      return this.required === !1 ? !1 : this.internalValue.length <= 0;
    }
  }
};
const NT = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"], FT = {
  ref: "tags",
  class: "multiselect__tags"
}, IT = { class: "multiselect__tags-wrap" }, BT = ["textContent"], jT = ["onKeypress", "onMousedown"], UT = ["textContent"], HT = { class: "multiselect__spinner" }, YT = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"], VT = ["id", "aria-multiselectable"], WT = { key: 0 }, qT = { class: "multiselect__option" }, GT = ["aria-selected", "id", "role"], zT = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"], KT = ["data-select", "data-deselect", "onMouseenter", "onMousedown"], JT = { class: "multiselect__option" }, XT = { class: "multiselect__option" };
function ZT(e, t, r, n, i, a) {
  return I(), B("div", {
    tabindex: e.searchable ? -1 : r.tabindex,
    class: Ve([{ "multiselect--active": e.isOpen, "multiselect--disabled": r.disabled, "multiselect--above": a.isAbove, "multiselect--has-options-group": a.hasOptionGroup }, "multiselect"]),
    onFocus: t[14] || (t[14] = (o) => e.activate()),
    onBlur: t[15] || (t[15] = (o) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = lr(Re((o) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = lr(Re((o) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = lr(Re((o) => e.addPointerElement(o), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = lr((o) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-expanded": e.isOpen,
    "aria-owns": "listbox-" + e.id,
    "aria-activedescendant": e.isOpen && e.pointer !== null ? e.id + "-" + e.pointer : null
  }, [
    Qe(e.$slots, "caret", { toggle: e.toggle }, () => [
      L(
        "div",
        {
          onMousedown: t[0] || (t[0] = Re((o) => e.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]),
    Qe(e.$slots, "clear", { search: e.search }),
    L(
      "div",
      FT,
      [
        Qe(e.$slots, "selection", {
          search: e.search,
          remove: e.removeElement,
          values: a.visibleValues,
          isOpen: e.isOpen
        }, () => [
          zr(L(
            "div",
            IT,
            [
              (I(!0), B(
                ct,
                null,
                $r(a.visibleValues, (o, s) => Qe(e.$slots, "tag", {
                  option: o,
                  search: e.search,
                  remove: e.removeElement
                }, () => [
                  (I(), B(
                    "span",
                    {
                      class: "multiselect__tag",
                      key: s,
                      onMousedown: t[1] || (t[1] = Re(() => {
                      }, ["prevent"]))
                    },
                    [
                      L("span", {
                        textContent: ut(e.getOptionLabel(o))
                      }, null, 8, BT),
                      L("i", {
                        tabindex: "1",
                        onKeypress: lr(Re((u) => e.removeElement(o), ["prevent"]), ["enter"]),
                        onMousedown: Re((u) => e.removeElement(o), ["prevent"]),
                        class: "multiselect__tag-icon"
                      }, null, 40, jT)
                    ],
                    32
                    /* NEED_HYDRATION */
                  ))
                ])),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [gi, a.visibleValues.length > 0]
          ]),
          e.internalValue && e.internalValue.length > r.limit ? Qe(e.$slots, "limit", { key: 0 }, () => [
            L("strong", {
              class: "multiselect__strong",
              textContent: ut(r.limitText(e.internalValue.length - r.limit))
            }, null, 8, UT)
          ]) : De("v-if", !0)
        ]),
        Ge(Du, { name: "multiselect__loading" }, {
          default: bt(() => [
            Qe(e.$slots, "loading", {}, () => [
              zr(L(
                "div",
                HT,
                null,
                512
                /* NEED_PATCH */
              ), [
                [gi, r.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        e.searchable ? (I(), B("input", {
          key: 0,
          ref: "search",
          name: r.name,
          id: e.id,
          type: "text",
          autocomplete: "off",
          spellcheck: r.spellcheck,
          placeholder: e.placeholder,
          required: a.isRequired,
          style: gs(a.inputStyle),
          value: e.search,
          disabled: r.disabled,
          tabindex: r.tabindex,
          "aria-label": r.name + "-searchbox",
          onInput: t[2] || (t[2] = (o) => e.updateSearch(o.target.value)),
          onFocus: t[3] || (t[3] = Re((o) => e.activate(), ["prevent"])),
          onBlur: t[4] || (t[4] = Re((o) => e.deactivate(), ["prevent"])),
          onKeyup: t[5] || (t[5] = lr((o) => e.deactivate(), ["esc"])),
          onKeydown: [
            t[6] || (t[6] = lr(Re((o) => e.pointerForward(), ["prevent"]), ["down"])),
            t[7] || (t[7] = lr(Re((o) => e.pointerBackward(), ["prevent"]), ["up"])),
            t[9] || (t[9] = lr(Re((o) => e.removeLastElement(), ["stop"]), ["delete"]))
          ],
          onKeypress: t[8] || (t[8] = lr(Re((o) => e.addPointerElement(o), ["prevent", "stop", "self"]), ["enter"])),
          class: "multiselect__input",
          "aria-controls": "listbox-" + e.id
        }, null, 44, YT)) : De("v-if", !0),
        a.isSingleLabelVisible ? (I(), B(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: t[10] || (t[10] = Re((...o) => e.toggle && e.toggle(...o), ["prevent"]))
          },
          [
            Qe(e.$slots, "singleLabel", { option: a.singleValue }, () => [
              Gr(
                ut(e.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : De("v-if", !0),
        a.isPlaceholderVisible ? (I(), B(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: t[11] || (t[11] = Re((...o) => e.toggle && e.toggle(...o), ["prevent"]))
          },
          [
            Qe(e.$slots, "placeholder", {}, () => [
              Gr(
                ut(e.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : De("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ),
    Ge(Du, {
      name: "multiselect",
      persisted: ""
    }, {
      default: bt(() => [
        zr(L(
          "div",
          {
            class: "multiselect__content-wrapper",
            onFocus: t[12] || (t[12] = (...o) => e.activate && e.activate(...o)),
            tabindex: "-1",
            onMousedown: t[13] || (t[13] = Re(() => {
            }, ["prevent"])),
            style: gs({ maxHeight: e.optimizedHeight + "px" }),
            ref: "list"
          },
          [
            L("ul", {
              class: "multiselect__content",
              style: gs(a.contentStyle),
              role: "listbox",
              id: "listbox-" + e.id,
              "aria-multiselectable": e.multiple
            }, [
              Qe(e.$slots, "beforeList"),
              e.multiple && e.max === e.internalValue.length ? (I(), B("li", WT, [
                L("span", qT, [
                  Qe(e.$slots, "maxElements", {}, () => [
                    Gr(
                      "Maximum of " + ut(e.max) + " options selected. First remove a selected option to select another.",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])) : De("v-if", !0),
              !e.max || e.internalValue.length < e.max ? (I(!0), B(
                ct,
                { key: 1 },
                $r(e.filteredOptions, (o, s) => (I(), B("li", {
                  class: "multiselect__element",
                  key: s,
                  "aria-selected": e.isSelected(o),
                  id: e.id + "-" + s,
                  role: o && (o.$isLabel || o.$isDisabled) ? null : "option"
                }, [
                  o && (o.$isLabel || o.$isDisabled) ? De("v-if", !0) : (I(), B("span", {
                    key: 0,
                    class: Ve([e.optionHighlight(s, o), "multiselect__option"]),
                    onClick: Re((u) => e.select(o), ["stop"]),
                    onMouseenter: Re((u) => e.pointerSet(s), ["self"]),
                    "data-select": o && o.isTag ? e.tagPlaceholder : a.selectLabelText,
                    "data-selected": a.selectedLabelText,
                    "data-deselect": a.deselectLabelText
                  }, [
                    Qe(e.$slots, "option", {
                      option: o,
                      search: e.search,
                      index: s
                    }, () => [
                      L(
                        "span",
                        null,
                        ut(e.getOptionLabel(o)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, zT)),
                  o && (o.$isLabel || o.$isDisabled) ? (I(), B("span", {
                    key: 1,
                    "data-select": e.groupSelect && a.selectGroupLabelText,
                    "data-deselect": e.groupSelect && a.deselectGroupLabelText,
                    class: Ve([e.groupHighlight(s, o), "multiselect__option"]),
                    onMouseenter: Re((u) => e.groupSelect && e.pointerSet(s), ["self"]),
                    onMousedown: Re((u) => e.selectGroup(o), ["prevent"])
                  }, [
                    Qe(e.$slots, "option", {
                      option: o,
                      search: e.search,
                      index: s
                    }, () => [
                      L(
                        "span",
                        null,
                        ut(e.getOptionLabel(o)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, KT)) : De("v-if", !0)
                ], 8, GT))),
                128
                /* KEYED_FRAGMENT */
              )) : De("v-if", !0),
              zr(L(
                "li",
                null,
                [
                  L("span", JT, [
                    Qe(e.$slots, "noResult", { search: e.search }, () => [
                      t[20] || (t[20] = Gr("No elements found. Consider changing the search query."))
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [gi, r.showNoResults && e.filteredOptions.length === 0 && e.search && !r.loading]
              ]),
              zr(L(
                "li",
                null,
                [
                  L("span", XT, [
                    Qe(e.$slots, "noOptions", {}, () => [
                      t[21] || (t[21] = Gr("List is empty."))
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [gi, r.showNoOptions && (e.options.length === 0 || a.hasOptionGroup === !0 && e.filteredOptions.length === 0) && !e.search && !r.loading]
              ]),
              Qe(e.$slots, "afterList")
            ], 12, VT)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        ), [
          [gi, e.isOpen]
        ])
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 42, NT);
}
Bp.render = ZT;
const QT = { class: "flow-root" }, eE = { class: "bg-gray-50" }, tE = { class: "inline-flex items-center" }, rE = ["onClick"], nE = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4"
}, iE = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4"
}, aE = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4"
}, oE = {
  key: 0,
  class: "flex items-center relative"
}, sE = ["onClick"], lE = {
  key: 0,
  class: "absolute w-64"
}, uE = ["onClick"], cE = {
  key: 0,
  class: "flex sm:justify-center bg-gray-100 w-full"
}, fE = {
  key: 0,
  class: "pl-4 sm:px-0 py-4"
}, UE = {
  __name: "Grid",
  props: {
    records: {
      type: Array,
      required: !0,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      required: !0,
      default() {
        return [];
      }
    },
    filterable: {
      type: Boolean,
      default: !1
    },
    filters: {
      type: Array,
      default: null
    },
    sortable: {
      type: Boolean,
      default: !1
    },
    sortBy: {},
    sortAscending: {
      type: Boolean,
      default: !0
    },
    headerClass: {
      type: String,
      default: ""
    },
    cellClass: {
      type: String,
      default: ""
    },
    oddClass: {
      type: String,
      default: "bg-white"
    },
    evenClass: {
      type: String,
      default: "bg-gray-50"
    },
    paginate: {
      type: [Boolean, Object],
      default() {
        return !1;
      }
    },
    loading: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    events: {
      default() {
        return Xi();
      }
    }
  },
  emits: ["rendered-records"],
  setup(e, { emit: t }) {
    const r = Gp(), n = t, i = e;
    let a = null;
    i.paginate && i.paginate.type === "scroll" && (a = i.paginate.page);
    const o = H({ by: null, ascending: !0 }), s = H({}), u = H({}), f = G(() => {
      var O;
      return i.loading === !0 ? new Array(((O = i.paginate) == null ? void 0 : O.count) ?? 10).fill({}) : m(S(i.records), o.value.by, o.value.ascending);
    }), c = H([]);
    Ye(f, (O) => {
      const p = O.map((w) => w.id);
      c.value = c.value.filter((w) => p.includes(w.id)), n("rendered-records", c.value);
    }), Ye(() => i.columns, (O) => {
      const p = O.filter((w) => w.field !== "id").map((w) => x(w));
      Ni(() => {
        c.value = c.value.map((w) => {
          let _ = { id: w.id };
          return p.forEach((T) => _[T] = w[T]), _;
        }), n("rendered-records", c.value);
      });
    });
    function y(O, p, w) {
      let _ = c.value.find((k) => k.id === O.id);
      const T = x(p);
      if (_)
        _[T] = w;
      else {
        let k = { id: O.id };
        k[T] = w, c.value.push(k);
      }
      n("rendered-records", c.value);
    }
    function m(O, p, w = !0) {
      if (!p)
        return O;
      const _ = typeof p == "function" ? p : (T, k) => {
        let C = Bn(w ? T : k, p), R = Bn(w ? k : T, p);
        return C = C === null ? C === "number" ? 0 : "0" : C, R = R === null ? R === "number" ? 0 : "0" : R, typeof T == "number" ? C - R : C > R ? 1 : C < R ? -1 : 0;
      };
      return O.sort(_);
    }
    function S(O) {
      let p = O;
      return Object.keys(s.value).forEach((w) => {
        const _ = s.value[w];
        _.hasOwnProperty("value") && (typeof _.value == "function" ? p = p.filter((T) => _.value(T)) : p = p.filter((T) => Bn(T, w) == _.value));
      }), p;
    }
    function h(O) {
      return O.filterOptions ? typeof O.filterOptions == "function" ? O.filterOptions(i.records) : O.filterOptions : i.records.map((p) => Bn(p, O.field)).filter((p, w, _) => _.indexOf(p) === w).map((p) => ({ label: p ?? "- No Value -", value: p })).sort((p, w) => typeof p.label == "number" ? p.label - w.label : p.label > w.label ? 1 : p.label < w.label ? -1 : 0);
    }
    function v(O) {
      delete s.value[O.field];
    }
    function b(O) {
      return s.value.hasOwnProperty(O.field);
    }
    Ae(() => {
      o.value.by = i.sortBy, o.value.ascending = i.sortAscending, i.filters && (s.value = i.filters);
    }), Ye(() => i.sortBy, (O) => o.value.by = O), Ye(() => i.sortAscending, (O) => o.value.ascending = O);
    function E(O) {
      Ni(() => {
        document.getElementById("filter-select-" + O).focus();
      });
    }
    function x(O) {
      return O.header ? O.header : O.field ? Rl(O.field) : O.type === "actions" ? "Actions" : "";
    }
    return (O, p) => (I(), B("div", QT, [
      L("div", null, [
        L("table", {
          class: Ve(["min-w-full border-separate border-spacing-0", `${e.loading ? "animate-pulse" : ""}`])
        }, [
          L("thead", eE, [
            L("tr", null, [
              (I(!0), B(ct, null, $r(e.columns, (w, _) => (I(), B("th", {
                key: w.field ?? _,
                scope: "col",
                class: Ve([e.headerClass, e.cellClass, w.class ?? w.type === "actions" ? "text-center" : "", "px-6 py-3 text-left text-xs whitespace-nowrap font-bold text-gray-600 uppercase tracking-wider sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter"])
              }, [
                L("div", tE, [
                  Gr(ut(x(w)) + " ", 1),
                  Ge(ge(Ha), {
                    content: "Sort " + (o.value.by === w.field && o.value.ascending ? "Descending" : "Ascending"),
                    style: { "line-height": "0" }
                  }, {
                    default: bt(() => [
                      (w.field || w.sortBy) && (e.sortable && w.sortable !== !1 || w.sortable) ? (I(), B("button", {
                        key: 0,
                        onClick: (T) => {
                          o.value.ascending = o.value.by === (w.sortBy ?? w.field) ? !o.value.ascending : !0, o.value.by = w.sortBy ?? w.field;
                        },
                        class: "ml-2 inline-flex justify-center items-center"
                      }, [
                        o.value.by === (w.sortBy ?? w.field) && o.value.ascending ? (I(), B("svg", nE, p[1] || (p[1] = [
                          L("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
                          }, null, -1)
                        ]))) : o.value.by === (w.sortBy ?? w.field) && !o.value.ascending ? (I(), B("svg", iE, p[2] || (p[2] = [
                          L("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                          }, null, -1)
                        ]))) : (I(), B("svg", aE, p[3] || (p[3] = [
                          L("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                          }, null, -1)
                        ])))
                      ], 8, rE)) : De("", !0)
                    ]),
                    _: 2
                  }, 1032, ["content"]),
                  (w.field || w.filterBy) && (e.filterable && w.filterable !== !1 || w.filterable) ? (I(), B("div", oE, [
                    Ge(ge(Ha), {
                      content: s.value[w.field] ? "Filtered: " + s.value[w.field].label : "Filter",
                      style: { "line-height": "0" }
                    }, {
                      default: bt(() => [
                        u.value[w.field] ? De("", !0) : (I(), B("button", {
                          key: 0,
                          onClick: (T) => {
                            u.value[w.field] = !0, E(w.field);
                          },
                          class: "ml-2 inline-flex justify-center items-center"
                        }, [
                          (I(), B("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: Ve(["w-4 h-4", { "fill-green-500": b(w) }])
                          }, p[4] || (p[4] = [
                            L("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                            }, null, -1)
                          ]), 2))
                        ], 8, sE))
                      ]),
                      _: 2
                    }, 1032, ["content"]),
                    u.value[w.field] ? (I(), B("div", lE, [
                      Ge(ge(Bp), {
                        modelValue: s.value[w.field],
                        "onUpdate:modelValue": [(T) => s.value[w.field] = T, (T) => u.value[w.field] = !1],
                        id: "filter-select-" + w.field,
                        trackBy: "label",
                        label: "label",
                        options: h(w),
                        multiple: !1,
                        "show-labels": !1,
                        "allow-empty": !1,
                        placeholder: "Filter",
                        onClose: (T) => u.value[w.field] = !1
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "options", "onClose"])
                    ])) : De("", !0),
                    Ge(ge(Ha), {
                      content: "Clear Filter",
                      style: { "line-height": "0" }
                    }, {
                      default: bt(() => [
                        b(w) ? (I(), B("button", {
                          key: 0,
                          onClick: (T) => v(w)
                        }, p[5] || (p[5] = [
                          L("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "w-4 h-4"
                          }, [
                            L("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18 18 6M6 6l12 12"
                            })
                          ], -1)
                        ]), 8, uE)) : De("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ])) : De("", !0)
                ])
              ], 2))), 128))
            ])
          ]),
          L("tbody", null, [
            (I(!0), B(ct, null, $r(f.value, (w, _) => (I(), B("tr", {
              key: w.id,
              class: Ve([_ % 2 === 0 ? e.oddClass : e.evenClass, "group"])
            }, [
              w.hasOwnProperty("__rowType") ? De("", !0) : (I(!0), B(ct, { key: 0 }, $r(e.columns, (T, k) => (I(), Gn(kT, {
                key: T.field ?? k,
                "column-index": k,
                column: T,
                events: e.events,
                record: w,
                "cell-class": e.cellClass,
                loading: e.loading,
                onRendered: (C) => y(w, T, C)
              }, null, 8, ["column-index", "column", "events", "record", "cell-class", "loading", "onRendered"]))), 128))
            ], 2))), 128))
          ])
        ], 2),
        f.value.length === 0 && !e.loading ? (I(), B("div", cE, [
          ge(r)["no-records"] ? De("", !0) : (I(), B("span", fE, "No Records")),
          Qe(O.$slots, "no-records")
        ])) : De("", !0),
        e.paginate && e.paginate.type === "scroll" && f.value.length < e.paginate.total && !e.loading ? (I(), B("button", {
          key: 1,
          onClick: p[0] || (p[0] = (...w) => ge(a) && ge(a)(...w)),
          class: "flex sm:justify-center bg-gray-200 w-full",
          style: { "grid-column": "1 / -1" }
        }, p[6] || (p[6] = [
          L("span", { class: "pl-4 sm:px-0 py-4" }, "See More", -1)
        ]))) : De("", !0)
      ])
    ]));
  }
}, dE = { class: "pagination" }, pE = ["disabled"], hE = ["disabled"], mE = { key: 0 }, yE = ["onClick", "disabled"], vE = { key: 1 }, gE = ["disabled"], bE = ["disabled"], HE = {
  __name: "Pagination",
  props: {
    offset: {
      type: Number,
      required: !0
    },
    limit: {
      type: Number,
      required: !0
    },
    total: {
      type: Number,
      required: !0
    }
  },
  emits: ["paginate"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = G(() => Math.ceil(r.total / r.limit)), a = G(() => Math.floor(r.offset / r.limit) + 1), o = G(() => {
      const c = [];
      let m = a.value - 2, S = a.value + 2;
      m < 1 && (m = 1, S = m + 2 * 2), S > i.value && (S = i.value, m = i.value - 2 * 2);
      for (let h = m; h <= S; h++)
        h > 0 && h <= i.value && c.push(h);
      return c;
    }), s = G(() => o.value[0] > 1), u = G(() => o.value[o.value.length - 1] < i.value), f = (c) => {
      if (c >= 1 && c <= i.value) {
        const y = (c - 1) * r.limit;
        n("paginate", y);
      }
    };
    return (c, y) => (I(), B("div", dE, [
      L("button", {
        class: "page-button",
        onClick: y[0] || (y[0] = (m) => f(1)),
        disabled: a.value === 1
      }, [
        y[4] || (y[4] = L("span", { class: "sr-only" }, "First page", -1)),
        Ge(ge(dw), {
          class: "h-5 w-5",
          "aria-hidden": "true"
        })
      ], 8, pE),
      L("button", {
        class: "page-button",
        onClick: y[1] || (y[1] = (m) => f(a.value - 1)),
        disabled: a.value === 1
      }, [
        y[5] || (y[5] = L("span", { class: "sr-only" }, "Previous", -1)),
        Ge(ge(hw), {
          class: "h-5 w-5",
          "aria-hidden": "true"
        })
      ], 8, hE),
      s.value ? (I(), B("span", mE, "...")) : De("", !0),
      (I(!0), B(ct, null, $r(o.value, (m) => (I(), B("button", {
        class: Ve(["page-button", a.value === m ? "active" : ""]),
        key: m,
        onClick: (S) => f(m),
        disabled: a.value === m
      }, ut(m), 11, yE))), 128)),
      u.value ? (I(), B("span", vE, "...")) : De("", !0),
      L("button", {
        class: "page-button",
        onClick: y[2] || (y[2] = (m) => f(a.value + 1)),
        disabled: a.value === i.value
      }, [
        y[6] || (y[6] = L("span", { class: "sr-only" }, "Next", -1)),
        Ge(ge(mw), {
          class: "h-5 w-5",
          "aria-hidden": "true"
        })
      ], 8, gE),
      L("button", {
        class: "page-button",
        onClick: y[3] || (y[3] = (m) => f(i.value)),
        disabled: a.value === i.value
      }, [
        y[7] || (y[7] = L("span", { class: "sr-only" }, "Last page", -1)),
        Ge(ge(pw), {
          class: "h-5 w-5",
          "aria-hidden": "true"
        })
      ], 8, bE)
    ]));
  }
};
export {
  kT as Cell,
  UE as Grid,
  gS as GridActions,
  fw as GridButton,
  PT as GridInput,
  Ac as GridLink,
  Zh as GridToggle,
  HE as Pagination
};
