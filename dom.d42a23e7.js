// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iWZTt":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b4a00a01d42a23e7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2ZDLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyPolyfill", ()=>applyPolyfill);
function applyPolyfill(window, document) {
    /*! document-register-element, 1.7.0
https://github.com/WebReflection/document-register-element
(C) Andrea Giammarchi - @WebReflection - Mit Style License */ if (!window["s-ce1"]) {
        window["s-ce1"] = true;
        (function(e, t) {
            "use strict";
            function Ht() {
                var e = wt.splice(0, wt.length);
                Et = 0;
                while(e.length)e.shift().call(null, e.shift());
            }
            function Bt(e, t) {
                for(var n = 0, r = e.length; n < r; n++)Jt(e[n], t);
            }
            function jt(e) {
                for(var t = 0, n = e.length, r; t < n; t++)r = e[t], Pt(r, A[It(r)]);
            }
            function Ft(e) {
                return function(t) {
                    ut(t) && (Jt(t, e), O.length && Bt(t.querySelectorAll(O), e));
                };
            }
            function It(e) {
                var t = ht.call(e, "is"), n = e.nodeName.toUpperCase(), r = _.call(L, t ? N + t.toUpperCase() : T + n);
                return t && -1 < r && !qt(n, t) ? -1 : r;
            }
            function qt(e, t) {
                return -1 < O.indexOf(e + '[is="' + t + '"]');
            }
            function Rt(e) {
                var t = e.currentTarget, n = e.attrChange, r = e.attrName, i = e.target, s = e[y] || 2, o = e[w] || 3;
                kt && (!i || i === t) && t[h] && r !== "style" && (e.prevValue !== e.newValue || e.newValue === "" && (n === s || n === o)) && t[h](r, n === s ? null : e.prevValue, n === o ? null : e.newValue);
            }
            function Ut(e) {
                var t = Ft(e);
                return function(e) {
                    wt.push(t, e.target), Et && clearTimeout(Et), Et = setTimeout(Ht, 1);
                };
            }
            function zt(e) {
                Ct && (Ct = !1, e.currentTarget.removeEventListener(S, zt)), O.length && Bt((e.target || n).querySelectorAll(O), e.detail === l ? l : a), st && Vt();
            }
            function Wt(e, t) {
                var n = this;
                vt.call(n, e, t), Lt.call(n, {
                    target: n
                });
            }
            function Xt(e, t) {
                nt(e, t), Mt ? Mt.observe(e, yt) : (Nt && (e.setAttribute = Wt, e[o] = Ot(e), e[u](x, Lt)), e[u](E, Rt)), e[m] && kt && (e.created = !0, e[m](), e.created = !1);
            }
            function Vt() {
                for(var e, t = 0, n = at.length; t < n; t++)e = at[t], M.contains(e) || (n--, at.splice(t--, 1), Jt(e, l));
            }
            function $t(e) {
                throw new Error("A " + e + " type is already registered");
            }
            function Jt(e, t) {
                var n, r = It(e), i;
                -1 < r && (Dt(e, A[r]), r = 0, t === a && !e[a] ? (e[l] = !1, e[a] = !0, i = "connected", r = 1, st && _.call(at, e) < 0 && at.push(e)) : t === l && !e[l] && (e[a] = !1, e[l] = !0, i = "disconnected", r = 1), r && (n = e[t + f] || e[i + f]) && n.call(e));
            }
            function Kt() {}
            function Qt(e, t, r) {
                var i = r && r[c] || "", o = t.prototype, u = tt(o), a = t.observedAttributes || j, f = {
                    prototype: u
                };
                ot(u, m, {
                    value: function() {
                        if (Q) Q = !1;
                        else if (!this[W]) {
                            this[W] = !0, new t(this), o[m] && o[m].call(this);
                            var e = G[Z.get(t)];
                            (!V || e.create.length > 1) && Zt(this);
                        }
                    }
                }), ot(u, h, {
                    value: function(e) {
                        -1 < _.call(a, e) && o[h].apply(this, arguments);
                    }
                }), o[d] && ot(u, p, {
                    value: o[d]
                }), o[v] && ot(u, g, {
                    value: o[v]
                }), i && (f[c] = i), e = e.toUpperCase(), G[e] = {
                    constructor: t,
                    create: i ? [
                        i,
                        et(e)
                    ] : [
                        e
                    ]
                }, Z.set(t, e), n[s](e.toLowerCase(), f), en(e), Y[e].r();
            }
            function Gt(e) {
                var t = G[e.toUpperCase()];
                return t && t.constructor;
            }
            function Yt(e) {
                return typeof e == "string" ? e : e && e.is || "";
            }
            function Zt(e) {
                var t = e[h], n = t ? e.attributes : j, r = n.length, i;
                while(r--)i = n[r], t.call(e, i.name || i.nodeName, null, i.value || i.nodeValue);
            }
            function en(e) {
                return e = e.toUpperCase(), e in Y || (Y[e] = {}, Y[e].p = new K(function(t) {
                    Y[e].r = t;
                })), Y[e].p;
            }
            function tn() {
                X && delete e.customElements, B(e, "customElements", {
                    configurable: !0,
                    value: new Kt
                }), B(e, "CustomElementRegistry", {
                    configurable: !0,
                    value: Kt
                });
                for(var t = function(t) {
                    var r = e[t];
                    if (r) {
                        e[t] = function(t) {
                            var i, s;
                            return t || (t = this), t[W] || (Q = !0, i = G[Z.get(t.constructor)], s = V && i.create.length === 1, t = s ? Reflect.construct(r, j, i.constructor) : n.createElement.apply(n, i.create), t[W] = !0, Q = !1, s || Zt(t)), t;
                        }, e[t].prototype = r.prototype;
                        try {
                            r.prototype.constructor = e[t];
                        } catch (i) {
                            z = !0, B(r, W, {
                                value: e[t]
                            });
                        }
                    }
                }, r = i.get(/^HTML[A-Z]*[a-z]/), o = r.length; o--; t(r[o]));
                n.createElement = function(e, t) {
                    var n = Yt(t);
                    return n ? gt.call(this, e, et(n)) : gt.call(this, e);
                }, St || (Tt = !0, n[s](""));
            }
            var n = e.document, r = e.Object, i = function(e) {
                var t = /^[A-Z]+[a-z]/, n = function(e) {
                    var t = [], n;
                    for(n in s)e.test(n) && t.push(n);
                    return t;
                }, i = function(e, t) {
                    t = t.toLowerCase(), t in s || (s[e] = (s[e] || []).concat(t), s[t] = s[t.toUpperCase()] = e);
                }, s = (r.create || r)(null), o = {}, u, a, f, l;
                for(a in e)for(l in e[a]){
                    f = e[a][l], s[l] = f;
                    for(u = 0; u < f.length; u++)s[f[u].toLowerCase()] = s[f[u].toUpperCase()] = l;
                }
                return o.get = function(r) {
                    return typeof r == "string" ? s[r] || (t.test(r) ? [] : "") : n(r);
                }, o.set = function(n, r) {
                    return t.test(n) ? i(n, r) : i(r, n), o;
                }, o;
            }({
                collections: {
                    HTMLAllCollection: [
                        "all"
                    ],
                    HTMLCollection: [
                        "forms"
                    ],
                    HTMLFormControlsCollection: [
                        "elements"
                    ],
                    HTMLOptionsCollection: [
                        "options"
                    ]
                },
                elements: {
                    Element: [
                        "element"
                    ],
                    HTMLAnchorElement: [
                        "a"
                    ],
                    HTMLAppletElement: [
                        "applet"
                    ],
                    HTMLAreaElement: [
                        "area"
                    ],
                    HTMLAttachmentElement: [
                        "attachment"
                    ],
                    HTMLAudioElement: [
                        "audio"
                    ],
                    HTMLBRElement: [
                        "br"
                    ],
                    HTMLBaseElement: [
                        "base"
                    ],
                    HTMLBodyElement: [
                        "body"
                    ],
                    HTMLButtonElement: [
                        "button"
                    ],
                    HTMLCanvasElement: [
                        "canvas"
                    ],
                    HTMLContentElement: [
                        "content"
                    ],
                    HTMLDListElement: [
                        "dl"
                    ],
                    HTMLDataElement: [
                        "data"
                    ],
                    HTMLDataListElement: [
                        "datalist"
                    ],
                    HTMLDetailsElement: [
                        "details"
                    ],
                    HTMLDialogElement: [
                        "dialog"
                    ],
                    HTMLDirectoryElement: [
                        "dir"
                    ],
                    HTMLDivElement: [
                        "div"
                    ],
                    HTMLDocument: [
                        "document"
                    ],
                    HTMLElement: [
                        "element",
                        "abbr",
                        "address",
                        "article",
                        "aside",
                        "b",
                        "bdi",
                        "bdo",
                        "cite",
                        "code",
                        "command",
                        "dd",
                        "dfn",
                        "dt",
                        "em",
                        "figcaption",
                        "figure",
                        "footer",
                        "header",
                        "i",
                        "kbd",
                        "mark",
                        "nav",
                        "noscript",
                        "rp",
                        "rt",
                        "ruby",
                        "s",
                        "samp",
                        "section",
                        "small",
                        "strong",
                        "sub",
                        "summary",
                        "sup",
                        "u",
                        "var",
                        "wbr"
                    ],
                    HTMLEmbedElement: [
                        "embed"
                    ],
                    HTMLFieldSetElement: [
                        "fieldset"
                    ],
                    HTMLFontElement: [
                        "font"
                    ],
                    HTMLFormElement: [
                        "form"
                    ],
                    HTMLFrameElement: [
                        "frame"
                    ],
                    HTMLFrameSetElement: [
                        "frameset"
                    ],
                    HTMLHRElement: [
                        "hr"
                    ],
                    HTMLHeadElement: [
                        "head"
                    ],
                    HTMLHeadingElement: [
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6"
                    ],
                    HTMLHtmlElement: [
                        "html"
                    ],
                    HTMLIFrameElement: [
                        "iframe"
                    ],
                    HTMLImageElement: [
                        "img"
                    ],
                    HTMLInputElement: [
                        "input"
                    ],
                    HTMLKeygenElement: [
                        "keygen"
                    ],
                    HTMLLIElement: [
                        "li"
                    ],
                    HTMLLabelElement: [
                        "label"
                    ],
                    HTMLLegendElement: [
                        "legend"
                    ],
                    HTMLLinkElement: [
                        "link"
                    ],
                    HTMLMapElement: [
                        "map"
                    ],
                    HTMLMarqueeElement: [
                        "marquee"
                    ],
                    HTMLMediaElement: [
                        "media"
                    ],
                    HTMLMenuElement: [
                        "menu"
                    ],
                    HTMLMenuItemElement: [
                        "menuitem"
                    ],
                    HTMLMetaElement: [
                        "meta"
                    ],
                    HTMLMeterElement: [
                        "meter"
                    ],
                    HTMLModElement: [
                        "del",
                        "ins"
                    ],
                    HTMLOListElement: [
                        "ol"
                    ],
                    HTMLObjectElement: [
                        "object"
                    ],
                    HTMLOptGroupElement: [
                        "optgroup"
                    ],
                    HTMLOptionElement: [
                        "option"
                    ],
                    HTMLOutputElement: [
                        "output"
                    ],
                    HTMLParagraphElement: [
                        "p"
                    ],
                    HTMLParamElement: [
                        "param"
                    ],
                    HTMLPictureElement: [
                        "picture"
                    ],
                    HTMLPreElement: [
                        "pre"
                    ],
                    HTMLProgressElement: [
                        "progress"
                    ],
                    HTMLQuoteElement: [
                        "blockquote",
                        "q",
                        "quote"
                    ],
                    HTMLScriptElement: [
                        "script"
                    ],
                    HTMLSelectElement: [
                        "select"
                    ],
                    HTMLShadowElement: [
                        "shadow"
                    ],
                    HTMLSlotElement: [
                        "slot"
                    ],
                    HTMLSourceElement: [
                        "source"
                    ],
                    HTMLSpanElement: [
                        "span"
                    ],
                    HTMLStyleElement: [
                        "style"
                    ],
                    HTMLTableCaptionElement: [
                        "caption"
                    ],
                    HTMLTableCellElement: [
                        "td",
                        "th"
                    ],
                    HTMLTableColElement: [
                        "col",
                        "colgroup"
                    ],
                    HTMLTableElement: [
                        "table"
                    ],
                    HTMLTableRowElement: [
                        "tr"
                    ],
                    HTMLTableSectionElement: [
                        "thead",
                        "tbody",
                        "tfoot"
                    ],
                    HTMLTemplateElement: [
                        "template"
                    ],
                    HTMLTextAreaElement: [
                        "textarea"
                    ],
                    HTMLTimeElement: [
                        "time"
                    ],
                    HTMLTitleElement: [
                        "title"
                    ],
                    HTMLTrackElement: [
                        "track"
                    ],
                    HTMLUListElement: [
                        "ul"
                    ],
                    HTMLUnknownElement: [
                        "unknown",
                        "vhgroupv",
                        "vkeygen"
                    ],
                    HTMLVideoElement: [
                        "video"
                    ]
                },
                nodes: {
                    Attr: [
                        "node"
                    ],
                    Audio: [
                        "audio"
                    ],
                    CDATASection: [
                        "node"
                    ],
                    CharacterData: [
                        "node"
                    ],
                    Comment: [
                        "#comment"
                    ],
                    Document: [
                        "#document"
                    ],
                    DocumentFragment: [
                        "#document-fragment"
                    ],
                    DocumentType: [
                        "node"
                    ],
                    HTMLDocument: [
                        "#document"
                    ],
                    Image: [
                        "img"
                    ],
                    Option: [
                        "option"
                    ],
                    ProcessingInstruction: [
                        "node"
                    ],
                    ShadowRoot: [
                        "#shadow-root"
                    ],
                    Text: [
                        "#text"
                    ],
                    XMLDocument: [
                        "xml"
                    ]
                }
            });
            typeof t != "object" && (t = {
                type: t || "auto"
            });
            var s = "registerElement", o = "__" + s + (e.Math.random() * 1e5 >> 0), u = "addEventListener", a = "attached", f = "Callback", l = "detached", c = "extends", h = "attributeChanged" + f, p = a + f, d = "connected" + f, v = "disconnected" + f, m = "created" + f, g = l + f, y = "ADDITION", b = "MODIFICATION", w = "REMOVAL", E = "DOMAttrModified", S = "DOMContentLoaded", x = "DOMSubtreeModified", T = "<", N = "=", C = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/, k = [
                "ANNOTATION-XML",
                "COLOR-PROFILE",
                "FONT-FACE",
                "FONT-FACE-SRC",
                "FONT-FACE-URI",
                "FONT-FACE-FORMAT",
                "FONT-FACE-NAME",
                "MISSING-GLYPH"
            ], L = [], A = [], O = "", M = n.documentElement, _ = L.indexOf || function(e) {
                for(var t = this.length; t-- && this[t] !== e;);
                return t;
            }, D = r.prototype, P = D.hasOwnProperty, H = D.isPrototypeOf, B = r.defineProperty, j = [], F = r.getOwnPropertyDescriptor, I = r.getOwnPropertyNames, q = r.getPrototypeOf, R = r.setPrototypeOf, U = !!r.__proto__, z = !1, W = "__dreCEv1", X = e.customElements, V = !/^force/.test(t.type) && !!(X && X.define && X.get && X.whenDefined), $ = r.create || r, J = e.Map || function() {
                var t = [], n = [], r;
                return {
                    get: function(e) {
                        return n[_.call(t, e)];
                    },
                    set: function(e, i) {
                        r = _.call(t, e), r < 0 ? n[t.push(e) - 1] = i : n[r] = i;
                    }
                };
            }, K = e.Promise || function(e) {
                function i(e) {
                    n = !0;
                    while(t.length)t.shift()(e);
                }
                var t = [], n = !1, r = {
                    "catch": function() {
                        return r;
                    },
                    then: function(e) {
                        return t.push(e), n && setTimeout(i, 1), r;
                    }
                };
                return e(i), r;
            }, Q = !1, G = $(null), Y = $(null), Z = new J, et = function(e) {
                return e.toLowerCase();
            }, tt = r.create || function sn(e) {
                return e ? (sn.prototype = e, new sn) : this;
            }, nt = R || (U ? function(e, t) {
                return e.__proto__ = t, e;
            } : I && F ? function() {
                function e(e, t) {
                    for(var n, r = I(t), i = 0, s = r.length; i < s; i++)n = r[i], P.call(e, n) || B(e, n, F(t, n));
                }
                return function(t, n) {
                    do e(t, n);
                    while ((n = q(n)) && !H.call(n, t));
                    return t;
                };
            }() : function(e, t) {
                for(var n in t)e[n] = t[n];
                return e;
            }), rt = e.MutationObserver || e.WebKitMutationObserver, it = (e.HTMLElement || e.Element || e.Node).prototype, st = !H.call(it, M), ot = st ? function(e, t, n) {
                return e[t] = n.value, e;
            } : B, ut = st ? function(e) {
                return e.nodeType === 1;
            } : function(e) {
                return H.call(it, e);
            }, at = st && [], ft = it.attachShadow, lt = it.cloneNode, ct = it.dispatchEvent, ht = it.getAttribute, pt = it.hasAttribute, dt = it.removeAttribute, vt = it.setAttribute, mt = n.createElement, gt = mt, yt = rt && {
                attributes: !0,
                characterData: !0,
                attributeOldValue: !0
            }, bt = rt || function(e) {
                Nt = !1, M.removeEventListener(E, bt);
            }, wt, Et = 0, St = s in n && !/^force-all/.test(t.type), xt = !0, Tt = !1, Nt = !0, Ct = !0, kt = !0, Lt, At, Ot, Mt, _t, Dt, Pt;
            St || (R || U ? (Dt = function(e, t) {
                H.call(t, e) || Xt(e, t);
            }, Pt = Xt) : (Dt = function(e, t) {
                e[o] || (e[o] = r(!0), Xt(e, t));
            }, Pt = Dt), st ? (Nt = !1, function() {
                var e = F(it, u), t = e.value, n = function(e) {
                    var t = new CustomEvent(E, {
                        bubbles: !0
                    });
                    t.attrName = e, t.prevValue = ht.call(this, e), t.newValue = null, t[w] = t.attrChange = 2, dt.call(this, e), ct.call(this, t);
                }, r = function(e, t) {
                    var n = pt.call(this, e), r = n && ht.call(this, e), i = new CustomEvent(E, {
                        bubbles: !0
                    });
                    vt.call(this, e, t), i.attrName = e, i.prevValue = n ? r : null, i.newValue = t, n ? i[b] = i.attrChange = 1 : i[y] = i.attrChange = 0, ct.call(this, i);
                }, i = function(e) {
                    var t = e.currentTarget, n = t[o], r = e.propertyName, i;
                    n.hasOwnProperty(r) && (n = n[r], i = new CustomEvent(E, {
                        bubbles: !0
                    }), i.attrName = n.name, i.prevValue = n.value || null, i.newValue = n.value = t[r] || null, i.prevValue == null ? i[y] = i.attrChange = 0 : i[b] = i.attrChange = 1, ct.call(t, i));
                };
                e.value = function(e, s, u) {
                    e === E && this[h] && this.setAttribute !== r && (this[o] = {
                        className: {
                            name: "class",
                            value: this.className
                        }
                    }, this.setAttribute = r, this.removeAttribute = n, t.call(this, "propertychange", i)), t.call(this, e, s, u);
                }, B(it, u, e);
            }()) : rt || (M[u](E, bt), M.setAttribute(o, 1), M.removeAttribute(o), Nt && (Lt = function(e) {
                var t = this, n, r, i;
                if (t === e.target) {
                    n = t[o], t[o] = r = Ot(t);
                    for(i in r){
                        if (!(i in n)) return At(0, t, i, n[i], r[i], y);
                        if (r[i] !== n[i]) return At(1, t, i, n[i], r[i], b);
                    }
                    for(i in n)if (!(i in r)) return At(2, t, i, n[i], r[i], w);
                }
            }, At = function(e, t, n, r, i, s) {
                var o = {
                    attrChange: e,
                    currentTarget: t,
                    attrName: n,
                    prevValue: r,
                    newValue: i
                };
                o[s] = e, Rt(o);
            }, Ot = function(e) {
                for(var t, n, r = {}, i = e.attributes, s = 0, o = i.length; s < o; s++)t = i[s], n = t.name, n !== "setAttribute" && (r[n] = t.value);
                return r;
            })), n[s] = function(t, r) {
                p = t.toUpperCase(), xt && (xt = !1, rt ? (Mt = function(e, t) {
                    function n(e, t) {
                        for(var n = 0, r = e.length; n < r; t(e[n++]));
                    }
                    return new rt(function(r) {
                        for(var i, s, o, u = 0, a = r.length; u < a; u++)i = r[u], i.type === "childList" ? (n(i.addedNodes, e), n(i.removedNodes, t)) : (s = i.target, kt && s[h] && i.attributeName !== "style" && (o = ht.call(s, i.attributeName), o !== i.oldValue && s[h](i.attributeName, i.oldValue, o)));
                    });
                }(Ft(a), Ft(l)), _t = function(e) {
                    return Mt.observe(e, {
                        childList: !0,
                        subtree: !0
                    }), e;
                }, _t(n), ft && (it.attachShadow = function() {
                    return _t(ft.apply(this, arguments));
                })) : (wt = [], n[u]("DOMNodeInserted", Ut(a)), n[u]("DOMNodeRemoved", Ut(l))), n[u](S, zt), n[u]("readystatechange", zt), it.cloneNode = function(e) {
                    var t = lt.call(this, !!e), n = It(t);
                    return -1 < n && Pt(t, A[n]), e && O.length && jt(t.querySelectorAll(O)), t;
                });
                if (Tt) return Tt = !1;
                -2 < _.call(L, N + p) + _.call(L, T + p) && $t(t);
                if (!C.test(p) || -1 < _.call(k, p)) throw new Error("The type " + t + " is invalid");
                var i = function() {
                    return o ? n.createElement(f, p) : n.createElement(f);
                }, s = r || D, o = P.call(s, c), f = o ? r[c].toUpperCase() : p, p, d;
                return o && -1 < _.call(L, T + f) && $t(f), d = L.push((o ? N : T) + p) - 1, O = O.concat(O.length ? "," : "", o ? f + '[is="' + t.toLowerCase() + '"]' : f), i.prototype = A[d] = P.call(s, "prototype") ? s.prototype : tt(it), O.length && Bt(n.querySelectorAll(O), a), i;
            }, n.createElement = gt = function(e, t) {
                var r = Yt(t), i = r ? mt.call(n, e, et(r)) : mt.call(n, e), s = "" + e, o = _.call(L, (r ? N : T) + (r || s).toUpperCase()), u = -1 < o;
                return r && (i.setAttribute("is", r = r.toLowerCase()), u && (u = qt(s.toUpperCase(), r))), kt = !n.createElement.innerHTMLHelper, u && Pt(i, A[o]), i;
            }), Kt.prototype = {
                constructor: Kt,
                define: V ? function(e, t, n) {
                    if (n) Qt(e, t, n);
                    else {
                        var r = e.toUpperCase();
                        G[r] = {
                            constructor: t,
                            create: [
                                r
                            ]
                        }, Z.set(t, r), X.define(e, t);
                    }
                } : Qt,
                get: V ? function(e) {
                    return X.get(e) || Gt(e);
                } : Gt,
                whenDefined: V ? function(e) {
                    return K.race([
                        X.whenDefined(e),
                        en(e)
                    ]);
                } : en
            };
            if (!X || /^force/.test(t.type)) tn();
            else if (!t.noBuiltIn) try {
                (function(t, r, i) {
                    r[c] = "a", t.prototype = tt(HTMLAnchorElement.prototype), t.prototype.constructor = t, e.customElements.define(i, t, r);
                    if (ht.call(n.createElement("a", {
                        is: i
                    }), "is") !== i || V && ht.call(new t, "is") !== i) throw r;
                })(function on() {
                    return Reflect.construct(HTMLAnchorElement, [], on);
                }, {}, "document-register-element-a");
            } catch (nn) {
                tn();
            }
            if (!t.noBuiltIn) try {
                mt.call(n, "a", "a");
            } catch (rn) {
                et = function(e) {
                    return {
                        is: e.toLowerCase()
                    };
                };
            }
        })(window);
    }
    /*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/ (function(a) {
        "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function(a) {
            a = (this.document || this.ownerDocument).querySelectorAll(a);
            for(var b = 0; a[b] && a[b] !== this;)++b;
            return !!a[b];
        });
        "function" !== typeof a.closest && (a.closest = function(a) {
            for(var b = this; b && 1 === b.nodeType;){
                if (b.matches(a)) return b;
                b = b.parentNode;
            }
            return null;
        });
    })(window.Element.prototype);
    /*!
Element.remove()
https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
*/ (function(b) {
        b.forEach(function(a) {
            a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    null !== this.parentNode && this.parentNode.removeChild(this);
                }
            });
        });
    })([
        Element.prototype,
        CharacterData.prototype,
        DocumentType.prototype
    ]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iWZTt"], null, "parcelRequire81e0")

//# sourceMappingURL=dom.d42a23e7.js.map
