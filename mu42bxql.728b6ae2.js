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
})({"bvaFE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a646e936728b6ae2";
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

},{}],"3a4II":[function(require,module,exports) {
/*! Built with http://stenciljs.com */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QrCode", ()=>BpQRCode);
var _qrCodeCoreJs = require("./qr-code.core.js");
var _a;
var s4 = function() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
}, uuid = function() {
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
};
function isDefined(t1) {
    return !!t1 || 0 === t1 || !1 === t1;
}
function isFunction(t1) {
    return "function" == typeof t1;
}
function isNumber(t1) {
    return "number" == typeof t1;
}
function isObject(t1) {
    return "object" == typeof t1 && !!t1;
}
function isString(t1) {
    return "string" == typeof t1;
}
function isArrayLike(t1) {
    return t1 && isFinite(t1.length) && !isString(t1) && !isFunction(t1);
}
function isDOM(t1) {
    return t1.nodeType || t1 instanceof SVGElement;
}
function isOwner(t1, e) {
    return t1.hasOwnProperty(e);
}
var S_INACTIVE = 1, S_PAUSED = 2, S_PLAYING = 3, _ = void 0, measureExpression = /^([+|-]*[0-9]*[.]*?[0-9]+)([a-z%]+)*$/i, CONFIG = "config";
function includes(t1, e) {
    return -1 !== getIndex(t1, e);
}
function getIndex(t1, e) {
    return t1.indexOf(e);
}
function find(t1, e, r) {
    var n = t1 && t1.length;
    if (!n) return _;
    if (e === _) return t1[r ? n - 1 : 0];
    if (r) {
        for(var i = n - 1; i > -1; i--)if (e(t1[i])) return t1[i];
    } else for(i = 0; i < n; i++)if (e(t1[i])) return t1[i];
    return _;
}
function remove(t1, e) {
    var r = t1.indexOf(e);
    return -1 !== r ? t1.splice(r, 1) : _;
}
function sortBy(t1) {
    return function(e, r) {
        var n = e[t1], i = r[t1];
        return n < i ? -1 : n > i ? 1 : 0;
    };
}
function list(t1) {
    return isDefined(t1) ? isArrayLike(t1) ? t1 : [
        t1
    ] : [];
}
function push(t1, e) {
    return e !== _ && Array.prototype.push.call(t1, e), e;
}
function pushDistinct(t1, e) {
    return includes(t1, e) || push(t1, e), e;
}
function mapFlatten(t1, e) {
    var r = [];
    return all(t1, function(t1) {
        var n = e(t1);
        isArrayLike(n) ? all(n, function(t1) {
            return push(r, t1);
        }) : push(r, n);
    }), r;
}
function all(t1, e) {
    for(var r = list(t1), n = 0, i = r.length; n < i; n++)e(r[n], n, i);
}
var APPEND = "append", CANCEL = "cancel", DESTROY = "destroy", FINISH = "finish", INSERT = "insert", PAUSE = "pause", PLAY = "play", REVERSE = "reverse", SET = "set", TICK = "tick", UPDATE = "update", UPDATE_RATE = "rate", UPDATE_TIME = "time", raf = requestAnimationFrame, caf = cancelAnimationFrame, now = function() {
    return performance.now();
}, active = [], lastHandle = _, lastTime = _;
function cancel() {
    caf(lastHandle), lastHandle = lastTime = _;
}
function update() {
    var t1 = active.length;
    if (lastTime = lastTime || now(), t1) {
        var e = now(), r = e - lastTime;
        lastTime = e, lastHandle = raf(update);
        for(var n = t1 - 1; n > -1; n--){
            var i = active[n];
            dispatch(TICK, i, r);
        }
    } else cancel();
}
function loopOn(t1) {
    includes(active, t1) || push(active, t1), lastHandle || (lastHandle = raf(update));
}
function loopOff(t1) {
    remove(active, t1), active.length || cancel();
}
var cancel$1 = function(t1, e, r) {
    all(t1.players, function(t1) {
        return t1.cancel();
    }), t1.state = S_INACTIVE, t1.time = _, t1.round = _, t1.players = _, loopOff(t1.id), r.trigger(CANCEL);
}, destroy = function(t1, e, r) {
    cancel$1(t1, _, r), r.destroyed = !0;
}, abs = Math.abs, flr = Math.floor, max = Math.max, min = Math.min;
function inRange(t1, e, r) {
    return t1 !== _ && e <= t1 && t1 <= r;
}
function minMax(t1, e, r) {
    return min(max(t1, e), r);
}
var plugins = {};
function addPlugin(t1) {
    plugins[t1.name] = t1;
}
var refId = 0, objNameExp = /\[object ([a-z]+)\]/i;
function getName(t1) {
    var e = t1.id || t1.name;
    if (!e) {
        e = Object.prototype.toString.call(t1);
        var r = objNameExp.exec(e);
        r && (e = r[1]);
    }
    return "@" + e + "_" + ++refId;
}
function assignRef(t1, e) {
    for(var r in t1)if (t1[r] === e) return r;
    var n = getName(e);
    return t1[n] = e, n;
}
function replaceWithRefs(t1, e, r) {
    if (!isDefined(e) || isString(e) || isNumber(e)) return e;
    if (isArrayLike(e)) return mapFlatten(e, function(e) {
        return replaceWithRefs(t1, e, r);
    });
    if (isFunction(e)) return assignRef(t1, e);
    if (r) {
        for(var n in e)isOwner(e, n) && (e[n] = replaceWithRefs(t1, e[n], r && "targets" !== n));
        return e;
    }
    return assignRef(t1, e);
}
function resolveRefs(t1, e, r) {
    if (!isDefined(e) || isNumber(e) || isFunction(e)) return e;
    if (isString(e)) {
        var n = e;
        return isOwner(t1, n) && "@" === n.charAt(0) ? t1[n] : n;
    }
    if (isArrayLike(e)) {
        var i = [];
        return all(e, function(e) {
            return push(i, resolveRefs(t1, e, r));
        }), i;
    }
    if (!r || isDOM(e)) return e;
    var a = {};
    for(var o in e)if (isOwner(e, o)) {
        var u = e[o];
        a[o] = r ? resolveRefs(t1, u, "targets" !== o) : u;
    }
    return a;
}
function getTargets(t1) {
    return isString(t1) ? Array.prototype.slice.call(document.querySelectorAll(t1)) : isFunction(t1) ? getTargets(t1()) : isArrayLike(t1) ? mapFlatten(t1, getTargets) : isObject(t1) ? [
        t1
    ] : [];
}
function assign() {
    var t1 = {};
    return all(arguments, function(e) {
        for(var r in e)isOwner(e, r) && (t1[r] = e[r]);
    }), t1;
}
function resolveProperty(t1, e, r, n) {
    return isFunction(t1) ? resolveProperty(t1(e, r, n), e, r, n) : t1;
}
var offsetSorter = sortBy("offset");
function toEffects(t1) {
    var e = t1.keyframes, r = t1.from, n = t1.to, i = t1.stagger || 0, a = t1.duration, o = [];
    return all(getTargets(t1.target), function(u, s, f) {
        var l = {}, c = {};
        for(var d in all(e, function(t1) {
            var e = l[t1.prop] || (l[t1.prop] = []), n = (t1.time - r) / (a || 1), i = t1.easing, o = t1.interpolate, s = resolveProperty(t1.value, u, t1.index, f);
            c[t1.prop] = t1.plugin;
            var d = find(e, function(t1) {
                return t1.offset === n;
            }) || push(e, {
                easing: i,
                offset: n,
                value: s,
                interpolate: o
            });
            d.easing = i, d.value = s, d.interpolate = o;
        }), plugins){
            var p = plugins[d];
            if (p.onWillAnimate && t1.keyframes.some(function(t1) {
                return t1.plugin === d;
            })) {
                var g = assign(t1, {
                    target: u
                });
                p.onWillAnimate(g, l, c);
            }
        }
        for(var h in l){
            var v = l[h], m = c[h], y = plugins[m];
            v && (v.sort(offsetSorter), ensureFirstFrame(t1, v, u, y, h), fillValues(v), fillInterpolators(v), ensureLastFrame(t1, v), push(o, {
                plugin: c[h],
                target: u,
                prop: h,
                from: r + (i ? i * s : 0),
                to: n + (i ? i * s : 0),
                keyframes: v
            }));
        }
    }), o;
}
function fillValues(t1) {
    var e;
    all(t1, function(t1) {
        t1.value !== _ ? e = t1.value : t1.value = e;
    });
}
function fillInterpolators(t1) {
    for(var e, r = t1.length - 1; r > -1; r--){
        var n = t1[r];
        n.interpolate !== _ ? e = n.interpolate : n.interpolate = e;
    }
}
function ensureFirstFrame(t1, e, r, n, i) {
    var a = find(e, function(t1) {
        return 0 === t1.offset;
    });
    if (a === _ || a.value === _) {
        var o = n.getValue(r, i);
        a === _ ? e.splice(0, 0, {
            offset: 0,
            value: o,
            easing: t1.easing,
            interpolate: _
        }) : (a.value = o, a.easing = t1.easing, a.interpolate = _);
    }
}
function ensureLastFrame(t1, e) {
    var r = find(e, function(t1) {
        return 1 === t1.offset;
    }, !0);
    if (r === _ || r.value === _) {
        var n = e[e.length - 1].value;
        r === _ ? push(e, {
            offset: 1,
            value: n,
            easing: t1.easing,
            interpolate: _
        }) : (r.value = n, r.easing = r.easing || t1.easing);
    }
}
function calculatePlayers(t1) {
    t1.duration = max.apply(_, t1.players.filter(function(t1) {
        return isFinite(t1.to);
    }).map(function(t1) {
        return t1.to;
    })), t1.time = isFinite(t1.time) ? t1.time : t1.rate < 0 ? t1.duration : 0;
}
function setup(t1) {
    t1.players = [], all(t1.configs, function(e) {
        return setupTarget(t1, e);
    }), calculatePlayers(t1);
}
function setupTarget(t1, e) {
    all(toEffects(resolveRefs(t1.refs, e, !0)), function(e) {
        var r = plugins[e.plugin].animate(e);
        r && (r.from = e.from, r.to = e.to, push(t1.players, r));
    });
}
var update$1 = function(t1, e, r) {
    t1.players === _ && setup(t1);
    var n = t1.state === S_PLAYING, i = t1.time;
    n || loopOff(t1.id), all(t1.players, function(e) {
        var r = e.from, a = e.to, o = n && inRange(flr(i), r, a), u = minMax((i - r) / (a - r), 0, 1);
        e.update(u, t1.rate, o);
    }), r.trigger(UPDATE);
}, finish = function(t1, e, r) {
    t1.round = 0, t1.state = S_PAUSED, t1.yoyo || (t1.time = t1.rate < 0 ? 0 : t1.duration), loopOff(t1.id), update$1(t1, _, r), r.trigger(FINISH), t1.destroy && destroy(t1, _, r);
}, pause = function(t1, e, r) {
    t1.state = S_PAUSED, loopOff(t1.id), update$1(t1, _, r), r.trigger(PAUSE);
}, play = function(t1, e, r) {
    e && (t1.repeat = e.repeat, t1.yoyo = !!e.alternate, t1.destroy = !!e.destroy), t1.repeat = t1.repeat || 1, t1.yoyo = t1.yoyo || !1, t1.state = S_PLAYING;
    var n = t1.rate >= 0;
    n && t1.time === t1.duration ? t1.time = 0 : n || 0 !== t1.time || (t1.time = t1.duration), loopOn(t1.id), update$1(t1, _, r), r.trigger(PLAY);
}, reverse = function(t1, e, r) {
    t1.rate *= -1, update$1(t1, _, r), r.trigger(REVERSE);
}, tick = function(t1, e, r) {
    var n = t1.duration, i = t1.repeat, a = t1.rate, o = t1.time === _ ? a < 0 ? n : 0 : t1.time, u = t1.round || 0, s = a < 0, f = !1;
    inRange(o += e * a, 0, n) || (t1.round = ++u, o = s ? 0 : n, f = !0, t1.yoyo && (t1.rate = -1 * (t1.rate || 0)), o = t1.rate < 0 ? n : 0), t1.time = o, t1.round = u, f && i === u ? finish(t1, _, r) : update$1(t1, _, r);
}, updateRate = function(t1, e, r) {
    t1.rate = e || 1, update$1(t1, _, r);
}, updateTime = function(t1, e, r) {
    var n = +e;
    t1.time = isFinite(n) ? n : t1.rate < 0 ? t1.duration : 0, update$1(t1, _, r);
}, calculateConfigs = function(t1) {
    for(var e = 0, r = 0, n = t1.configs, i = 0, a = n.length; i < a; i++){
        var o = n[i], u = o.keyframes.map(function(t1) {
            return t1.time;
        }), s = max.apply(_, u), f = min.apply(_, u);
        o.to = s, o.from = f, o.duration = s - f, e = max(s, e), r = max(s + o.endDelay, r);
    }
    t1.cursor = r, t1.duration = e;
}, propKeyframeSort = sortBy("time"), insert = function(t1, e, r) {
    all(e, function(e) {
        if (e.to === _) throw new Error("missing duration");
        all((e = replaceWithRefs(t1.refs, e, !0)).targets, function(n, i, a) {
            var o = addPropertyKeyframes(t1, n, i, a, e);
            r.dirty(o);
        });
    }), calculateConfigs(t1), r.trigger(CONFIG);
};
function addPropertyKeyframes(t1, e, r, n, i) {
    var a = resolveProperty(i.delay, e, r, n) || 0, o = find(t1.configs, function(t1) {
        return t1.target === e;
    }) || push(t1.configs, {
        from: max(i.from + a, 0),
        to: max(i.to + a, 0),
        easing: i.easing || "ease",
        duration: i.to - i.from,
        endDelay: resolveProperty(i.endDelay, e, r, n) || 0,
        stagger: i.stagger || 0,
        target: e,
        targetLength: n,
        propNames: [],
        keyframes: []
    }), u = i.stagger && i.stagger * (r + 1) || 0, s = resolveProperty(i.delay, o, r, o.targetLength) || 0, f = max(u + s + i.from, 0), l = i.to - i.from, c = i.easing || "ease";
    for(var d in plugins)if (isOwner(i, d)) {
        var p = i[d];
        for(var g in p){
            var h = p[g];
            isOwner(p, g) && isDefined(h) && addProperty(o, d, r, g, h, l, f, c);
        }
    }
    return o.keyframes.sort(propKeyframeSort), o;
}
function addProperty(t1, e, r, n, i, a, o, u) {
    var s, f;
    if (!isArrayLike(i) && isObject(i)) {
        var l = i;
        l.easing && (u = l.easing), l.interpolate && (s = l.interpolate), f = list(l.value);
    } else f = list(i);
    var c = f.map(function(e, n, i) {
        var a = resolveProperty(e, t1.target, r, t1.targetLength), o = a, f = isObject(a), l = f ? o.value : a, c = f && isNumber(o.offset) ? o.offset : n === i.length - 1 ? 1 : 0 === n ? 0 : _, d = o && o.interpolate || s;
        return {
            offset: c,
            value: l,
            easing: o && o.easing || u,
            interpolate: d
        };
    });
    inferOffsets(c), all(c, function(i) {
        var u = i.offset, s = i.value, f = flr(a * u + o);
        (find(t1.keyframes, function(t1) {
            return t1.prop === n && t1.time === f;
        }) || push(t1.keyframes, {
            plugin: e,
            easing: i.easing,
            index: r,
            prop: n,
            time: f,
            value: s,
            interpolate: i.interpolate
        })).value = s;
    }), find(t1.keyframes, function(t1) {
        return t1.prop === n && t1.time === o;
    }) || push(t1.keyframes, {
        plugin: e,
        easing: u,
        index: r,
        prop: n,
        time: o,
        value: _,
        interpolate: s
    });
    var d = o + a;
    find(t1.keyframes, function(t1) {
        return t1.prop === n && t1.time === d;
    }, !0) || push(t1.keyframes, {
        plugin: e,
        easing: u,
        index: r,
        prop: n,
        time: d,
        value: _,
        interpolate: s
    }), pushDistinct(t1.propNames, n);
}
function inferOffsets(t1) {
    if (t1.length) {
        var e = find(t1, function(t1) {
            return 0 === t1.offset;
        }) || t1[0];
        isDefined(e.offset) || (e.offset = 0);
        var r = find(t1, function(t1) {
            return 1 === t1.offset;
        }, !0) || t1[t1.length - 1];
        t1.length > 1 && !isDefined(r.offset) && (r.offset = 1);
        for(var n = 1, i = t1.length; n < i; n++)if (!isDefined(t1[n].offset)) for(var a = n + 1; a < i; a++){
            var o = t1[a].offset;
            if (isDefined(o)) {
                for(var u = t1[n - 1].offset, s = o - u, f = a - n + 1, l = 1; l < f; l++)t1[l - 1 + n].offset = l / a * s + u;
                n = a;
                break;
            }
        }
    }
}
var append = function(t1, e, r) {
    var n = t1.cursor, i = list(e).map(function(t1) {
        var e = t1.to, r = t1.from, i = t1.duration, a = isDefined(e), o = isDefined(r), u = isDefined(i), s = t1;
        return s.to = a && (o || u) ? e : u && o ? r + i : a && !u ? n + e : u ? n + i : _, s.from = o && (a || u) ? r : a && u ? e - i : a || u ? n : _, s;
    });
    insert(t1, i, r);
}, set = function(t1, e, r) {
    var n = Object.keys(plugins), i = list(e).map(function(e) {
        var r = e.at || t1.cursor, i = {};
        for(var a in e)if (includes(n, a)) {
            var o = e[a], u = {};
            for(var s in o){
                var f = o[s];
                u[s] = [
                    _,
                    f
                ];
            }
            i[a] = u;
        } else i[a] = e[a];
        return i.from = r - 1e-9, i.to = r, i;
    });
    insert(t1, i, r);
};
function rebuild(t1, e) {
    var r = t1.state;
    switch(all(t1.players, function(t1) {
        return t1.cancel();
    }), t1.players = _, r){
        case S_PAUSED:
            pause(t1, _, e);
            break;
        case S_PLAYING:
            play(t1, _, e);
    }
}
var stateSubs = [], stores = {}, reducers = ((_a = {})[APPEND] = append, _a[CANCEL] = cancel$1, _a[DESTROY] = destroy, _a[FINISH] = finish, _a[INSERT] = insert, _a[PAUSE] = pause, _a[PLAY] = play, _a[REVERSE] = reverse, _a[SET] = set, _a[TICK] = tick, _a[UPDATE] = update$1, _a[UPDATE_RATE] = updateRate, _a[UPDATE_TIME] = updateTime, _a);
function createInitial(t1) {
    var e = {};
    if (t1.references) for(var r in t1.references)e["@" + r] = t1.references[r];
    return {
        configs: [],
        cursor: 0,
        duration: 0,
        id: t1.id,
        players: _,
        rate: 1,
        refs: e,
        repeat: _,
        round: _,
        state: S_INACTIVE,
        time: _,
        yoyo: !1
    };
}
function getState(t1) {
    var e = stores[t1];
    if (!e) throw new Error("not found");
    return e.state;
}
function addState(t1) {
    stores[t1.id] = {
        state: createInitial(t1),
        subs: {}
    };
}
function on(t1, e, r) {
    var n = stores[t1];
    n && pushDistinct(n.subs[e] = n.subs[e] || [], r);
}
function off(t1, e, r) {
    var n = stores[t1];
    n && remove(n.subs[e], r);
}
function dispatch(t1, e, r) {
    var n = reducers[t1], i = stores[e];
    if (!n || !i) throw new Error("not found");
    var a = {
        events: [],
        needUpdate: [],
        trigger: trigger,
        dirty: dirty
    }, o = i.state;
    n(o, r, a), all(a.events, function(t1) {
        var e = i.subs[t1];
        e && all(e, function(t1) {
            t1(o.time);
        });
    }), a.destroyed ? delete stores[e] : a.needUpdate.length && (o.state !== S_INACTIVE ? rebuild(o, a) : calculateConfigs(o), all(stateSubs, function(t1) {
        t1(i);
    }));
}
function trigger(t1) {
    pushDistinct(this.events, t1);
}
function dirty(t1) {
    pushDistinct(this.needUpdate, t1);
}
"undefined" != typeof window && (window.just_devtools = {
    dispatch: dispatch,
    subscribe: function(t1) {
        pushDistinct(stateSubs, t1);
    },
    unsubscribe: function(t1) {
        remove(stateSubs, t1);
    }
});
var timelineProto = {
    get state () {
        return getState(this.id).state;
    },
    get duration () {
        return getState(this.id).duration;
    },
    get currentTime () {
        return getState(this.id).time;
    },
    set currentTime (t){
        dispatch(UPDATE_TIME, this.id, t);
    },
    get playbackRate () {
        return getState(this.id).rate;
    },
    set playbackRate (t){
        dispatch(UPDATE_RATE, this.id, t);
    },
    add: function(t1) {
        return dispatch(APPEND, this.id, t1), this;
    },
    animate: function(t1) {
        return dispatch(APPEND, this.id, t1), this;
    },
    fromTo: function(t1, e, r) {
        return all(r, function(r) {
            r.to = e, r.from = t1;
        }), dispatch(INSERT, this.id, r), this;
    },
    cancel: function() {
        return dispatch(CANCEL, this.id), this;
    },
    destroy: function() {
        dispatch(DESTROY, this.id);
    },
    finish: function() {
        return dispatch(FINISH, this.id), this;
    },
    on: function(t1, e) {
        return on(this.id, t1, e), this;
    },
    once: function(t1, e) {
        var r = this;
        return r.on(t1, function n(i) {
            r.off(t1, n), e(i);
        }), r;
    },
    off: function(t1, e) {
        return off(this.id, t1, e), this;
    },
    pause: function() {
        return dispatch(PAUSE, this.id), this;
    },
    play: function(t1) {
        return dispatch(PLAY, this.id, t1), this;
    },
    reverse: function() {
        return dispatch(REVERSE, this.id), this;
    },
    seek: function(t1) {
        return dispatch(UPDATE_TIME, this.id, t1), this;
    },
    sequence: function(t1) {
        var e = this;
        return all(t1, function(t1) {
            return dispatch(APPEND, e.id, t1);
        }), this;
    },
    set: function(t1) {
        return dispatch(SET, this.id, t1), this;
    }
};
function timeline(t1) {
    var e = Object.create(timelineProto);
    return (t1 = t1 || {}).id = t1.id || uuid(), e.id = t1.id, addState(t1), e;
}
var pi = Math.PI, epsilon = 1e-4, c = "cubic-bezier", s = "steps", ease = c + "(.25,.1,.25,1)", easeIn = c + "(.42,0,1,1)", easeInOut = c + "(.42,0,.58,1)", easeOut = c + "(0,0,.58,1)", linear = c + "(0,0,1,1)", stepEnd = s + "(1,0)", stepStart = s + "(1,1)", steps = function(t1, e) {
    var r = t1 / 1, n = "end" === e ? 0 : "start" === e ? 1 : e || 0;
    return function(t1) {
        return t1 >= 1 ? 1 : n * r + t1 - (n * r + t1) % r;
    };
}, bezier = function(t1, e, r) {
    return 3 * t1 * (1 - r) * (1 - r) * r + 3 * e * (1 - r) * r * r + r * r * r;
}, cubicBezier$$1 = function(t1, e, r, n) {
    return t1 < 0 || t1 > 1 || r < 0 || r > 1 ? function(t1) {
        return t1;
    } : function(i) {
        if (0 === i || 1 === i) return i;
        var a = 0, o = 1, u = 19;
        do {
            var s = .5 * (a + o), f = bezier(t1, r, s);
            if (abs$1(i - f) < epsilon) return bezier(e, n, s);
            f < i ? a = s : o = s;
        }while (--u);
        return i;
    };
}, camelCaseRegex = /([a-z])[- ]([a-z])/gi, cssFunctionRegex = /^([a-z-]+)\(([^\)]+)\)$/i, cssEasings = {
    ease: ease,
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut,
    stepStart: stepStart,
    stepEnd: stepEnd,
    linear: linear
}, camelCaseMatcher = function(t1, e, r) {
    return e + r.toUpperCase();
}, toCamelCase = function(t1) {
    return "string" == typeof t1 ? t1.replace(camelCaseRegex, camelCaseMatcher) : "";
}, find$1 = function(t1) {
    var e = toCamelCase(t1), r = cssEasings[e] || t1, n = cssFunctionRegex.exec(r);
    if (!n) throw new Error("css parse error");
    return [
        n[1]
    ].concat(n[2].split(","));
}, cssFunction = function(t1) {
    var e = find$1(t1), r = e[0];
    if ("steps" === r) return steps(+e[1], e[2]);
    if ("cubic-bezier" === r) return cubicBezier$$1(+e[1], +e[2], +e[3], +e[4]);
    throw new Error("css parse error");
}, abs$1 = Math.abs;
function memoize(t1) {
    var e = [];
    return function() {
        for(var r = arguments, n = 0, i = e.length; n < i; n++){
            var a = e[n].args, o = r.length;
            if (a.length === o) {
                for(var u = 0, s = 0; s < o && a[s] === r[s]; s++)++u;
                if (u === o) return e[n].value;
            }
        }
        var f = t1.apply(_, r);
        return e.push({
            args: r,
            value: f
        }), f;
    };
}
function findEndIndex(t1, e) {
    for(var r = t1.length, n = 0; n < r; n++)if (t1[n] > e) return n;
    return r - 1;
}
var getEasing = memoize(cssFunction), getInterpolator = memoize(function(t1) {
    return memoize(t1);
});
function interpolate(t1, e, r) {
    return t1 + (e - t1) * r;
}
function fallbackInterpolator(t1, e, r) {
    return r < .5 ? t1 : e;
}
function interpolator(t1, e) {
    var r = e.map(function(e) {
        return e.offset * t1;
    });
    return all(e, function(t1) {
        var e = !isFunction(t1.interpolate);
        t1.simpleFn = e, t1.interpolate = e ? isNumber(t1.value) ? interpolate : fallbackInterpolator : getInterpolator(t1.interpolate);
    }), function(n) {
        var i = t1 * n, a = findEndIndex(r, i), o = a ? a - 1 : 0, u = r[a], s = r[o], f = e[o], l = (i - s) / (u - s), c = f.easing ? getEasing(f.easing)(l) : l;
        return f.simpleFn ? f.interpolate(f.value, e[a].value, c) : f.interpolate(f.value, e[a].value)(c);
    };
}
function hyphenate(t1) {
    return t1.replace(/([A-Z])/g, function(t1) {
        return "-" + t1[0].toLowerCase();
    });
}
function csvToList(t1) {
    return t1.split(",");
}
var PROPERTY = 0, ATTRIBUTE = 1, ATTRIBUTE_HYPHENATE = 2, CSSVAR = 3, cssVarExp = /^\-\-[a-z0-9\-]+$/i, viewbox = "viewBox", svgReadonly = [
    viewbox
], noHyphenate = [
    viewbox
], propsPlugin = {
    name: "props",
    animate: function(t1) {
        var e = t1.target, r = t1.prop, n = interpolator(t1.to - t1.from, t1.keyframes), i = getTargetSetter(e, r), a = getTargetGetter(e, r), o = _;
        return {
            cancel: function() {
                o !== _ && i(o), o = _;
            },
            update: function(t1, e, r) {
                o === _ && (o = a()), i(n(t1));
            }
        };
    },
    getValue: function(t1, e) {
        return getTargetGetter(t1, e)();
    }
};
function getTargetType(t1, e) {
    return isDOM(t1) ? cssVarExp.test(e) ? CSSVAR : void 0 === t1[e] || includes(svgReadonly, e) ? includes(noHyphenate, e) ? ATTRIBUTE : ATTRIBUTE_HYPHENATE : PROPERTY : PROPERTY;
}
function getTargetGetter(t1, e) {
    var r = getTargetType(t1, e);
    return r === CSSVAR ? getVariable(t1, e) : r === ATTRIBUTE ? getAttribute(t1, e) : r === ATTRIBUTE_HYPHENATE ? getAttributeHyphenate(t1, e) : getProperty(t1, e);
}
function getTargetSetter(t1, e) {
    var r = getTargetType(t1, e);
    return r === CSSVAR ? setVariable(t1, e) : r === ATTRIBUTE ? setAttribute(t1, e) : r === ATTRIBUTE_HYPHENATE ? setAttributeHyphenate(t1, e) : setProperty(t1, e);
}
function getAttribute(t1, e) {
    return function() {
        return t1.getAttribute(e);
    };
}
function setAttribute(t1, e) {
    return function(r) {
        return t1.setAttribute(e, r);
    };
}
function setAttributeHyphenate(t1, e) {
    var r = hyphenate(e);
    return function(e) {
        return t1.setAttribute(r, e);
    };
}
function getAttributeHyphenate(t1, e) {
    var r = hyphenate(e);
    return function() {
        return t1.getAttribute(r);
    };
}
function getVariable(t1, e) {
    return function() {
        return t1.style.getPropertyValue(e);
    };
}
function setVariable(t1, e) {
    return function(r) {
        return t1.style.setProperty(e, r ? r + "" : "");
    };
}
function setProperty(t1, e) {
    return function(r) {
        return t1[e] = r;
    };
}
function getProperty(t1, e) {
    return function() {
        return t1[e];
    };
}
function animate(t1) {
    return timeline().add(t1);
}
addPlugin(propsPlugin);
var RUNNING = "running", PX = "px", DEG = "deg", X = "X", Y = "Y", Z = "Z", TRANSLATE = "translate", TRANSFORM = "transform", transformAngles = csvToList("rotateX,rotateY,rotateZ,rotate"), transformScales = csvToList("scaleX,scaleY,scaleZ,scale"), transformLengths = csvToList("perspective,x,y,z"), transforms = transformAngles.concat(transformScales, transformLengths), aliases = {
    x: TRANSLATE + X,
    y: TRANSLATE + Y,
    z: TRANSLATE + Z
}, cssLengths = csvToList("backgroundSize,border,borderBottom,borderBottomLeftRadius,borderBottomRightRadius,borderBottomWidth,borderLeft,borderLeftWidth,borderRadius,borderRight,borderRightWidth,borderTop,borderTopLeftRadius,borderTopRightRadius,borderTopWidth,borderWidth,bottom,columnGap,columnRuleWidth,columnWidth,columns,flexBasis,font,fontSize,gridColumnGap,gridGap,gridRowGap,height,left,letterSpacing,lineHeight,margin,marginBottom,marginLeft,marginRight,marginTop,maskSize,maxHeight,maxWidth,minHeight,minWidth,outline,outlineOffset,outlineWidth,padding,paddingBottom,paddingLeft,paddingRight,paddingTop,perspective,right,shapeMargin,tabSize,top,width,wordSpacing"), frameSize = 17;
function animate$1(t1) {
    var e = t1.keyframes, r = t1.prop, n = t1.from, i = t1.to, a = t1.target, o = i - n, u = memoize(function() {
        var t1 = e.map(function(t1) {
            var e, n = t1.offset, i = t1.value, a = t1.easing;
            return (e = {
                offset: n
            })[r] = i, e.easing = a, e;
        }), n = a.animate(t1, {
            duration: o,
            fill: "both"
        });
        return n.pause(), n;
    });
    return {
        cancel: function() {
            u().cancel();
        },
        update: function(t1, e, r) {
            var n = u(), i = o * t1;
            if (abs(n.currentTime - i) > 1 && (n.currentTime = i), r && n.playbackRate !== e) {
                var a = n.currentTime;
                a < 1 ? n.currentTime = 1 : a >= o - 1 && (n.currentTime = o - 1), n.playbackRate = e;
            }
            r && !(n.playState === RUNNING || "finish" === n.playState) && !(e < 0 && i < frameSize) && !(e >= 0 && i > o - frameSize) && n.play(), !r && (n.playState === RUNNING || "pending" === n.playState) && n.pause();
        }
    };
}
function appendUnits(t1) {
    for(var e in t1)if (includes(cssLengths, e)) {
        var r = t1[e];
        for(var n in r){
            var i = r[n];
            isDefined(i) && isNumber(i.value) && (i.value += PX);
        }
    }
}
function parseUnit(t1) {
    var e = {
        unit: _,
        value: _
    };
    if (!isDefined(t1)) return e;
    if (Number(t1)) return e.value = +t1, e;
    var r = measureExpression.exec(t1);
    return r && (e.unit = r[2] || _, e.value = r[1] ? parseFloat(r[1]) : _), e;
}
function combineTransforms(t1, e, r) {
    var n = t1.propNames.filter(function(t1) {
        return includes(transforms, t1);
    });
    if (n.length) {
        if (includes(t1.propNames, TRANSFORM)) throw new Error("transform + shorthand is not allowed");
        var i = [], a = {};
        all(n, function(t1) {
            var r = e[t1];
            r && all(r, function(t1) {
                a[t1.offset] = t1.easing, pushDistinct(i, t1.offset);
            });
        }), i.sort();
        for(var o = i.map(function(t1) {
            var r = {};
            return all(n, function(n) {
                var i = find(e[n], function(e) {
                    return e.offset === t1;
                });
                r[n] = i ? i.value : _;
            }), {
                offset: t1,
                easing: a[t1],
                values: r
            };
        }), u = o.length, s = u - 1; s > -1; --s){
            var f = o[s];
            for(var l in f.values)if (!isDefined(f.values[l])) {
                for(var c = _, d = s - 1; d > -1; d--)if (isDefined(o[d].values[l])) {
                    c = d;
                    break;
                }
                for(var p = _, g = s + 1; g < u; g++)if (isDefined(o[g].values[l])) {
                    p = g;
                    break;
                }
                var h = c !== _;
                if (h && p !== _) for(var v = o[c], m = o[p], y = parseUnit(v.values[l]), w = parseUnit(m.values[l]), b = c + 1; b < p; b++){
                    var R = (i[b] - v.offset) / (m.offset - v.offset), A = y.value + (w.value - y.value) * R + (w.unit || y.unit || "");
                    o[b].values[l] = A;
                }
                else if (h) for(b = c + 1; b < u; b++)o[b].values[l] = o[c].values[l];
            }
        }
        if (o.length) {
            all(n, function(t1) {
                e[t1] = _;
            });
            var T = [];
            all(o, function(t1) {
                var e = _;
                for(var r in t1.values){
                    var n = parseUnit(t1.values[r]);
                    n.value !== _ && (n.unit || (n.unit = includes(transformLengths, r) ? PX : includes(transformAngles, r) ? DEG : ""), e = (e ? e + " " : "") + (aliases[r] || r) + "(" + n.value + n.unit + ")");
                }
                T.push({
                    offset: t1.offset,
                    value: e,
                    easing: t1.easing,
                    interpolate: _
                });
            }), e[TRANSFORM] = T, r[TRANSFORM] = "web";
        }
    }
}
var waapiPlugin = {
    name: "web",
    animate: animate$1,
    getValue: function(t1, e) {
        return getComputedStyle(t1)[e];
    },
    onWillAnimate: function(t1, e, r) {
        isDOM(t1.target) && (appendUnits(e), combineTransforms(t1, e, r));
    }
};
function createCommonjsModule(t1, e) {
    return t1(e = {
        exports: {}
    }, e.exports), e.exports;
}
var HorizontalFocalPoint, VerticalFocalPoint, qrcode_1 = createCommonjsModule(function(t1, e) {
    var r, n = function() {
        var t1 = function(t1, e) {
            var r = t1, n = i[e], o = null, g = 0, h = null, m = [], y = {}, w = function(t1, e) {
                o = function(t1) {
                    for(var e = new Array(t1), r = 0; r < t1; r += 1){
                        e[r] = new Array(t1);
                        for(var n = 0; n < t1; n += 1)e[r][n] = null;
                    }
                    return e;
                }(g = 4 * r + 17), b(0, 0), b(g - 7, 0), b(0, g - 7), A(), R(), C(t1, e), r >= 7 && T(t1), null == h && (h = S(r, n, m)), P(h, e);
            }, b = function(t1, e) {
                for(var r = -1; r <= 7; r += 1)if (!(t1 + r <= -1 || g <= t1 + r)) for(var n = -1; n <= 7; n += 1)e + n <= -1 || g <= e + n || (o[t1 + r][e + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4);
            }, R = function() {
                for(var t1 = 8; t1 < g - 8; t1 += 1)null == o[t1][6] && (o[t1][6] = t1 % 2 == 0);
                for(var e = 8; e < g - 8; e += 1)null == o[6][e] && (o[6][e] = e % 2 == 0);
            }, A = function() {
                for(var t1 = a.getPatternPosition(r), e = 0; e < t1.length; e += 1)for(var n = 0; n < t1.length; n += 1){
                    var i = t1[e], u = t1[n];
                    if (null == o[i][u]) for(var s = -2; s <= 2; s += 1)for(var f = -2; f <= 2; f += 1)o[i + s][u + f] = -2 == s || 2 == s || -2 == f || 2 == f || 0 == s && 0 == f;
                }
            }, T = function(t1) {
                for(var e = a.getBCHTypeNumber(r), n = 0; n < 18; n += 1){
                    var i = !t1 && 1 == (e >> n & 1);
                    o[Math.floor(n / 3)][n % 3 + g - 8 - 3] = i;
                }
                for(n = 0; n < 18; n += 1)i = !t1 && 1 == (e >> n & 1), o[n % 3 + g - 8 - 3][Math.floor(n / 3)] = i;
            }, C = function(t1, e) {
                for(var r = n << 3 | e, i = a.getBCHTypeInfo(r), u = 0; u < 15; u += 1){
                    var s = !t1 && 1 == (i >> u & 1);
                    u < 6 ? o[u][8] = s : u < 8 ? o[u + 1][8] = s : o[g - 15 + u][8] = s;
                }
                for(u = 0; u < 15; u += 1)s = !t1 && 1 == (i >> u & 1), u < 8 ? o[8][g - u - 1] = s : u < 9 ? o[8][15 - u - 1 + 1] = s : o[8][15 - u - 1] = s;
                o[g - 8][8] = !t1;
            }, P = function(t1, e) {
                for(var r = -1, n = g - 1, i = 7, u = 0, s = a.getMaskFunction(e), f = g - 1; f > 0; f -= 2)for(6 == f && (f -= 1);;){
                    for(var l = 0; l < 2; l += 1)if (null == o[n][f - l]) {
                        var c = !1;
                        u < t1.length && (c = 1 == (t1[u] >>> i & 1)), s(n, f - l) && (c = !c), o[n][f - l] = c, -1 == (i -= 1) && (u += 1, i = 7);
                    }
                    if ((n += r) < 0 || g <= n) {
                        n -= r, r = -r;
                        break;
                    }
                }
            }, S = function(t1, e, r) {
                for(var n = s.getRSBlocks(t1, e), i = f(), o = 0; o < r.length; o += 1){
                    var l = r[o];
                    i.put(l.getMode(), 4), i.put(l.getLength(), a.getLengthInBits(l.getMode(), t1)), l.write(i);
                }
                var c = 0;
                for(o = 0; o < n.length; o += 1)c += n[o].dataCount;
                if (i.getLengthInBits() > 8 * c) throw "code length overflow. (" + i.getLengthInBits() + ">" + 8 * c + ")";
                for(i.getLengthInBits() + 4 <= 8 * c && i.put(0, 4); i.getLengthInBits() % 8 != 0;)i.putBit(!1);
                for(; !(i.getLengthInBits() >= 8 * c || (i.put(236, 8), i.getLengthInBits() >= 8 * c));)i.put(17, 8);
                return function(t1, e) {
                    for(var r = 0, n = 0, i = 0, o = new Array(e.length), s = new Array(e.length), f = 0; f < e.length; f += 1){
                        var l = e[f].dataCount, c = e[f].totalCount - l;
                        n = Math.max(n, l), i = Math.max(i, c), o[f] = new Array(l);
                        for(var d = 0; d < o[f].length; d += 1)o[f][d] = 255 & t1.getBuffer()[d + r];
                        r += l;
                        var p = a.getErrorCorrectPolynomial(c), g = u(o[f], p.getLength() - 1).mod(p);
                        for(s[f] = new Array(p.getLength() - 1), d = 0; d < s[f].length; d += 1){
                            var h = d + g.getLength() - s[f].length;
                            s[f][d] = h >= 0 ? g.getAt(h) : 0;
                        }
                    }
                    var v = 0;
                    for(d = 0; d < e.length; d += 1)v += e[d].totalCount;
                    var m = new Array(v), y = 0;
                    for(d = 0; d < n; d += 1)for(f = 0; f < e.length; f += 1)d < o[f].length && (m[y] = o[f][d], y += 1);
                    for(d = 0; d < i; d += 1)for(f = 0; f < e.length; f += 1)d < s[f].length && (m[y] = s[f][d], y += 1);
                    return m;
                }(i, n);
            };
            return y.addData = function(t1, e) {
                var r = null;
                switch(e = e || "Byte"){
                    case "Numeric":
                        r = l(t1);
                        break;
                    case "Alphanumeric":
                        r = c(t1);
                        break;
                    case "Byte":
                        r = d(t1);
                        break;
                    case "Kanji":
                        r = p(t1);
                        break;
                    default:
                        throw "mode:" + e;
                }
                m.push(r), h = null;
            }, y.isDark = function(t1, e) {
                if (t1 < 0 || g <= t1 || e < 0 || g <= e) throw t1 + "," + e;
                return o[t1][e];
            }, y.getModuleCount = function() {
                return g;
            }, y.make = function() {
                if (r < 1) {
                    for(var t1 = 1; t1 < 40; t1++){
                        for(var e = s.getRSBlocks(t1, n), i = f(), o = 0; o < m.length; o++){
                            var u = m[o];
                            i.put(u.getMode(), 4), i.put(u.getLength(), a.getLengthInBits(u.getMode(), t1)), u.write(i);
                        }
                        var l = 0;
                        for(o = 0; o < e.length; o++)l += e[o].dataCount;
                        if (i.getLengthInBits() <= 8 * l) break;
                    }
                    r = t1;
                }
                w(!1, function() {
                    for(var t1 = 0, e = 0, r = 0; r < 8; r += 1){
                        w(!0, r);
                        var n = a.getLostPoint(y);
                        (0 == r || t1 > n) && (t1 = n, e = r);
                    }
                    return e;
                }());
            }, y.createTableTag = function(t1, e) {
                t1 = t1 || 2;
                var r = "";
                r += '<table style="', r += " border-width: 0px; border-style: none;", r += " border-collapse: collapse;", r += " padding: 0px; margin: " + (e = void 0 === e ? 4 * t1 : e) + "px;", r += '">', r += "<tbody>";
                for(var n = 0; n < y.getModuleCount(); n += 1){
                    r += "<tr>";
                    for(var i = 0; i < y.getModuleCount(); i += 1)r += '<td style="', r += " border-width: 0px; border-style: none;", r += " border-collapse: collapse;", r += " padding: 0px; margin: 0px;", r += " width: " + t1 + "px;", r += " height: " + t1 + "px;", r += " background-color: ", r += y.isDark(n, i) ? "#000000" : "#ffffff", r += ";", r += '"/>';
                    r += "</tr>";
                }
                return (r += "</tbody>") + "</table>";
            }, y.createSvgTag = function(t1, e) {
                t1 = t1 || 2, e = void 0 === e ? 4 * t1 : e;
                var r, n, i, a, o = y.getModuleCount() * t1 + 2 * e, u = "";
                for(a = "l" + t1 + ",0 0," + t1 + " -" + t1 + ",0 0,-" + t1 + "z ", u += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', u += ' width="' + o + 'px"', u += ' height="' + o + 'px"', u += ' viewBox="0 0 ' + o + " " + o + '" ', u += ' preserveAspectRatio="xMinYMin meet">', u += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', u += '<path d="', n = 0; n < y.getModuleCount(); n += 1)for(i = n * t1 + e, r = 0; r < y.getModuleCount(); r += 1)y.isDark(n, r) && (u += "M" + (r * t1 + e) + "," + i + a);
                return (u += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, y.createDataURL = function(t1, e) {
                t1 = t1 || 2, e = void 0 === e ? 4 * t1 : e;
                var r = y.getModuleCount() * t1 + 2 * e, n = e, i = r - e;
                return v(r, r, function(e, r) {
                    if (n <= e && e < i && n <= r && r < i) {
                        var a = Math.floor((e - n) / t1), o = Math.floor((r - n) / t1);
                        return y.isDark(o, a) ? 0 : 1;
                    }
                    return 1;
                });
            }, y.createImgTag = function(t1, e, r) {
                t1 = t1 || 2, e = void 0 === e ? 4 * t1 : e;
                var n = y.getModuleCount() * t1 + 2 * e, i = "";
                return i += "<img", i += ' src="', i += y.createDataURL(t1, e), i += '"', i += ' width="', i += n, i += '"', i += ' height="', i += n, i += '"', r && (i += ' alt="', i += r, i += '"'), i + "/>";
            }, y.renderTo2dContext = function(t1, e) {
                e = e || 2;
                for(var r = y.getModuleCount(), n = 0; n < r; n++)for(var i = 0; i < r; i++)t1.fillStyle = y.isDark(n, i) ? "black" : "white", t1.fillRect(n * e, i * e, e, e);
            }, y;
        };
        t1.stringToBytes = (t1.stringToBytesFuncs = {
            default: function(t1) {
                for(var e = [], r = 0; r < t1.length; r += 1){
                    var n = t1.charCodeAt(r);
                    e.push(255 & n);
                }
                return e;
            }
        }).default, t1.createStringToBytes = function(t1, e) {
            var r = function() {
                for(var r = h(t1), n = function() {
                    var t1 = r.read();
                    if (-1 == t1) throw "eof";
                    return t1;
                }, i = 0, a = {};;){
                    var o = r.read();
                    if (-1 == o) break;
                    var u = n(), s = n() << 8 | n();
                    a[String.fromCharCode(o << 8 | u)] = s, i += 1;
                }
                if (i != e) throw i + " != " + e;
                return a;
            }(), n = "?".charCodeAt(0);
            return function(t1) {
                for(var e = [], i = 0; i < t1.length; i += 1){
                    var a = t1.charCodeAt(i);
                    if (a < 128) e.push(a);
                    else {
                        var o = r[t1.charAt(i)];
                        "number" == typeof o ? (255 & o) == o ? e.push(o) : (e.push(o >>> 8), e.push(255 & o)) : e.push(n);
                    }
                }
                return e;
            };
        };
        var e, r, n, i = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, a = (e = [
            [],
            [
                6,
                18
            ],
            [
                6,
                22
            ],
            [
                6,
                26
            ],
            [
                6,
                30
            ],
            [
                6,
                34
            ],
            [
                6,
                22,
                38
            ],
            [
                6,
                24,
                42
            ],
            [
                6,
                26,
                46
            ],
            [
                6,
                28,
                50
            ],
            [
                6,
                30,
                54
            ],
            [
                6,
                32,
                58
            ],
            [
                6,
                34,
                62
            ],
            [
                6,
                26,
                46,
                66
            ],
            [
                6,
                26,
                48,
                70
            ],
            [
                6,
                26,
                50,
                74
            ],
            [
                6,
                30,
                54,
                78
            ],
            [
                6,
                30,
                56,
                82
            ],
            [
                6,
                30,
                58,
                86
            ],
            [
                6,
                34,
                62,
                90
            ],
            [
                6,
                28,
                50,
                72,
                94
            ],
            [
                6,
                26,
                50,
                74,
                98
            ],
            [
                6,
                30,
                54,
                78,
                102
            ],
            [
                6,
                28,
                54,
                80,
                106
            ],
            [
                6,
                32,
                58,
                84,
                110
            ],
            [
                6,
                30,
                58,
                86,
                114
            ],
            [
                6,
                34,
                62,
                90,
                118
            ],
            [
                6,
                26,
                50,
                74,
                98,
                122
            ],
            [
                6,
                30,
                54,
                78,
                102,
                126
            ],
            [
                6,
                26,
                52,
                78,
                104,
                130
            ],
            [
                6,
                30,
                56,
                82,
                108,
                134
            ],
            [
                6,
                34,
                60,
                86,
                112,
                138
            ],
            [
                6,
                30,
                58,
                86,
                114,
                142
            ],
            [
                6,
                34,
                62,
                90,
                118,
                146
            ],
            [
                6,
                30,
                54,
                78,
                102,
                126,
                150
            ],
            [
                6,
                24,
                50,
                76,
                102,
                128,
                154
            ],
            [
                6,
                28,
                54,
                80,
                106,
                132,
                158
            ],
            [
                6,
                32,
                58,
                84,
                110,
                136,
                162
            ],
            [
                6,
                26,
                54,
                82,
                110,
                138,
                166
            ],
            [
                6,
                30,
                58,
                86,
                114,
                142,
                170
            ]
        ], n = function(t1) {
            for(var e = 0; 0 != t1;)e += 1, t1 >>>= 1;
            return e;
        }, (r = {}).getBCHTypeInfo = function(t1) {
            for(var e = t1 << 10; n(e) - n(1335) >= 0;)e ^= 1335 << n(e) - n(1335);
            return 21522 ^ (t1 << 10 | e);
        }, r.getBCHTypeNumber = function(t1) {
            for(var e = t1 << 12; n(e) - n(7973) >= 0;)e ^= 7973 << n(e) - n(7973);
            return t1 << 12 | e;
        }, r.getPatternPosition = function(t1) {
            return e[t1 - 1];
        }, r.getMaskFunction = function(t1) {
            switch(t1){
                case 0:
                    return function(t1, e) {
                        return (t1 + e) % 2 == 0;
                    };
                case 1:
                    return function(t1, e) {
                        return t1 % 2 == 0;
                    };
                case 2:
                    return function(t1, e) {
                        return e % 3 == 0;
                    };
                case 3:
                    return function(t1, e) {
                        return (t1 + e) % 3 == 0;
                    };
                case 4:
                    return function(t1, e) {
                        return (Math.floor(t1 / 2) + Math.floor(e / 3)) % 2 == 0;
                    };
                case 5:
                    return function(t1, e) {
                        return t1 * e % 2 + t1 * e % 3 == 0;
                    };
                case 6:
                    return function(t1, e) {
                        return (t1 * e % 2 + t1 * e % 3) % 2 == 0;
                    };
                case 7:
                    return function(t1, e) {
                        return (t1 * e % 3 + (t1 + e) % 2) % 2 == 0;
                    };
                default:
                    throw "bad maskPattern:" + t1;
            }
        }, r.getErrorCorrectPolynomial = function(t1) {
            for(var e = u([
                1
            ], 0), r = 0; r < t1; r += 1)e = e.multiply(u([
                1,
                o.gexp(r)
            ], 0));
            return e;
        }, r.getLengthInBits = function(t1, e) {
            if (1 <= e && e < 10) switch(t1){
                case 1:
                    return 10;
                case 2:
                    return 9;
                case 4:
                case 8:
                    return 8;
                default:
                    throw "mode:" + t1;
            }
            else if (e < 27) switch(t1){
                case 1:
                    return 12;
                case 2:
                    return 11;
                case 4:
                    return 16;
                case 8:
                    return 10;
                default:
                    throw "mode:" + t1;
            }
            else {
                if (!(e < 41)) throw "type:" + e;
                switch(t1){
                    case 1:
                        return 14;
                    case 2:
                        return 13;
                    case 4:
                        return 16;
                    case 8:
                        return 12;
                    default:
                        throw "mode:" + t1;
                }
            }
        }, r.getLostPoint = function(t1) {
            for(var e = t1.getModuleCount(), r = 0, n = 0; n < e; n += 1)for(var i = 0; i < e; i += 1){
                for(var a = 0, o = t1.isDark(n, i), u = -1; u <= 1; u += 1)if (!(n + u < 0 || e <= n + u)) for(var s = -1; s <= 1; s += 1)i + s < 0 || e <= i + s || 0 == u && 0 == s || o == t1.isDark(n + u, i + s) && (a += 1);
                a > 5 && (r += 3 + a - 5);
            }
            for(n = 0; n < e - 1; n += 1)for(i = 0; i < e - 1; i += 1){
                var f = 0;
                t1.isDark(n, i) && (f += 1), t1.isDark(n + 1, i) && (f += 1), t1.isDark(n, i + 1) && (f += 1), t1.isDark(n + 1, i + 1) && (f += 1), 0 != f && 4 != f || (r += 3);
            }
            for(n = 0; n < e; n += 1)for(i = 0; i < e - 6; i += 1)t1.isDark(n, i) && !t1.isDark(n, i + 1) && t1.isDark(n, i + 2) && t1.isDark(n, i + 3) && t1.isDark(n, i + 4) && !t1.isDark(n, i + 5) && t1.isDark(n, i + 6) && (r += 40);
            for(i = 0; i < e; i += 1)for(n = 0; n < e - 6; n += 1)t1.isDark(n, i) && !t1.isDark(n + 1, i) && t1.isDark(n + 2, i) && t1.isDark(n + 3, i) && t1.isDark(n + 4, i) && !t1.isDark(n + 5, i) && t1.isDark(n + 6, i) && (r += 40);
            var l = 0;
            for(i = 0; i < e; i += 1)for(n = 0; n < e; n += 1)t1.isDark(n, i) && (l += 1);
            return r + Math.abs(100 * l / e / e - 50) / 5 * 10;
        }, r), o = function() {
            for(var t1 = new Array(256), e = new Array(256), r = 0; r < 8; r += 1)t1[r] = 1 << r;
            for(r = 8; r < 256; r += 1)t1[r] = t1[r - 4] ^ t1[r - 5] ^ t1[r - 6] ^ t1[r - 8];
            for(r = 0; r < 255; r += 1)e[t1[r]] = r;
            return {
                glog: function(t1) {
                    if (t1 < 1) throw "glog(" + t1 + ")";
                    return e[t1];
                },
                gexp: function(e) {
                    for(; e < 0;)e += 255;
                    for(; e >= 256;)e -= 255;
                    return t1[e];
                }
            };
        }();
        function u(t1, e) {
            if (void 0 === t1.length) throw t1.length + "/" + e;
            var r = function() {
                for(var r = 0; r < t1.length && 0 == t1[r];)r += 1;
                for(var n = new Array(t1.length - r + e), i = 0; i < t1.length - r; i += 1)n[i] = t1[i + r];
                return n;
            }(), n = {
                getAt: function(t1) {
                    return r[t1];
                },
                getLength: function() {
                    return r.length;
                },
                multiply: function(t1) {
                    for(var e = new Array(n.getLength() + t1.getLength() - 1), r = 0; r < n.getLength(); r += 1)for(var i = 0; i < t1.getLength(); i += 1)e[r + i] ^= o.gexp(o.glog(n.getAt(r)) + o.glog(t1.getAt(i)));
                    return u(e, 0);
                },
                mod: function(t1) {
                    if (n.getLength() - t1.getLength() < 0) return n;
                    for(var e = o.glog(n.getAt(0)) - o.glog(t1.getAt(0)), r = new Array(n.getLength()), i = 0; i < n.getLength(); i += 1)r[i] = n.getAt(i);
                    for(i = 0; i < t1.getLength(); i += 1)r[i] ^= o.gexp(o.glog(t1.getAt(i)) + e);
                    return u(r, 0).mod(t1);
                }
            };
            return n;
        }
        var s = function() {
            var t1 = [
                [
                    1,
                    26,
                    19
                ],
                [
                    1,
                    26,
                    16
                ],
                [
                    1,
                    26,
                    13
                ],
                [
                    1,
                    26,
                    9
                ],
                [
                    1,
                    44,
                    34
                ],
                [
                    1,
                    44,
                    28
                ],
                [
                    1,
                    44,
                    22
                ],
                [
                    1,
                    44,
                    16
                ],
                [
                    1,
                    70,
                    55
                ],
                [
                    1,
                    70,
                    44
                ],
                [
                    2,
                    35,
                    17
                ],
                [
                    2,
                    35,
                    13
                ],
                [
                    1,
                    100,
                    80
                ],
                [
                    2,
                    50,
                    32
                ],
                [
                    2,
                    50,
                    24
                ],
                [
                    4,
                    25,
                    9
                ],
                [
                    1,
                    134,
                    108
                ],
                [
                    2,
                    67,
                    43
                ],
                [
                    2,
                    33,
                    15,
                    2,
                    34,
                    16
                ],
                [
                    2,
                    33,
                    11,
                    2,
                    34,
                    12
                ],
                [
                    2,
                    86,
                    68
                ],
                [
                    4,
                    43,
                    27
                ],
                [
                    4,
                    43,
                    19
                ],
                [
                    4,
                    43,
                    15
                ],
                [
                    2,
                    98,
                    78
                ],
                [
                    4,
                    49,
                    31
                ],
                [
                    2,
                    32,
                    14,
                    4,
                    33,
                    15
                ],
                [
                    4,
                    39,
                    13,
                    1,
                    40,
                    14
                ],
                [
                    2,
                    121,
                    97
                ],
                [
                    2,
                    60,
                    38,
                    2,
                    61,
                    39
                ],
                [
                    4,
                    40,
                    18,
                    2,
                    41,
                    19
                ],
                [
                    4,
                    40,
                    14,
                    2,
                    41,
                    15
                ],
                [
                    2,
                    146,
                    116
                ],
                [
                    3,
                    58,
                    36,
                    2,
                    59,
                    37
                ],
                [
                    4,
                    36,
                    16,
                    4,
                    37,
                    17
                ],
                [
                    4,
                    36,
                    12,
                    4,
                    37,
                    13
                ],
                [
                    2,
                    86,
                    68,
                    2,
                    87,
                    69
                ],
                [
                    4,
                    69,
                    43,
                    1,
                    70,
                    44
                ],
                [
                    6,
                    43,
                    19,
                    2,
                    44,
                    20
                ],
                [
                    6,
                    43,
                    15,
                    2,
                    44,
                    16
                ],
                [
                    4,
                    101,
                    81
                ],
                [
                    1,
                    80,
                    50,
                    4,
                    81,
                    51
                ],
                [
                    4,
                    50,
                    22,
                    4,
                    51,
                    23
                ],
                [
                    3,
                    36,
                    12,
                    8,
                    37,
                    13
                ],
                [
                    2,
                    116,
                    92,
                    2,
                    117,
                    93
                ],
                [
                    6,
                    58,
                    36,
                    2,
                    59,
                    37
                ],
                [
                    4,
                    46,
                    20,
                    6,
                    47,
                    21
                ],
                [
                    7,
                    42,
                    14,
                    4,
                    43,
                    15
                ],
                [
                    4,
                    133,
                    107
                ],
                [
                    8,
                    59,
                    37,
                    1,
                    60,
                    38
                ],
                [
                    8,
                    44,
                    20,
                    4,
                    45,
                    21
                ],
                [
                    12,
                    33,
                    11,
                    4,
                    34,
                    12
                ],
                [
                    3,
                    145,
                    115,
                    1,
                    146,
                    116
                ],
                [
                    4,
                    64,
                    40,
                    5,
                    65,
                    41
                ],
                [
                    11,
                    36,
                    16,
                    5,
                    37,
                    17
                ],
                [
                    11,
                    36,
                    12,
                    5,
                    37,
                    13
                ],
                [
                    5,
                    109,
                    87,
                    1,
                    110,
                    88
                ],
                [
                    5,
                    65,
                    41,
                    5,
                    66,
                    42
                ],
                [
                    5,
                    54,
                    24,
                    7,
                    55,
                    25
                ],
                [
                    11,
                    36,
                    12,
                    7,
                    37,
                    13
                ],
                [
                    5,
                    122,
                    98,
                    1,
                    123,
                    99
                ],
                [
                    7,
                    73,
                    45,
                    3,
                    74,
                    46
                ],
                [
                    15,
                    43,
                    19,
                    2,
                    44,
                    20
                ],
                [
                    3,
                    45,
                    15,
                    13,
                    46,
                    16
                ],
                [
                    1,
                    135,
                    107,
                    5,
                    136,
                    108
                ],
                [
                    10,
                    74,
                    46,
                    1,
                    75,
                    47
                ],
                [
                    1,
                    50,
                    22,
                    15,
                    51,
                    23
                ],
                [
                    2,
                    42,
                    14,
                    17,
                    43,
                    15
                ],
                [
                    5,
                    150,
                    120,
                    1,
                    151,
                    121
                ],
                [
                    9,
                    69,
                    43,
                    4,
                    70,
                    44
                ],
                [
                    17,
                    50,
                    22,
                    1,
                    51,
                    23
                ],
                [
                    2,
                    42,
                    14,
                    19,
                    43,
                    15
                ],
                [
                    3,
                    141,
                    113,
                    4,
                    142,
                    114
                ],
                [
                    3,
                    70,
                    44,
                    11,
                    71,
                    45
                ],
                [
                    17,
                    47,
                    21,
                    4,
                    48,
                    22
                ],
                [
                    9,
                    39,
                    13,
                    16,
                    40,
                    14
                ],
                [
                    3,
                    135,
                    107,
                    5,
                    136,
                    108
                ],
                [
                    3,
                    67,
                    41,
                    13,
                    68,
                    42
                ],
                [
                    15,
                    54,
                    24,
                    5,
                    55,
                    25
                ],
                [
                    15,
                    43,
                    15,
                    10,
                    44,
                    16
                ],
                [
                    4,
                    144,
                    116,
                    4,
                    145,
                    117
                ],
                [
                    17,
                    68,
                    42
                ],
                [
                    17,
                    50,
                    22,
                    6,
                    51,
                    23
                ],
                [
                    19,
                    46,
                    16,
                    6,
                    47,
                    17
                ],
                [
                    2,
                    139,
                    111,
                    7,
                    140,
                    112
                ],
                [
                    17,
                    74,
                    46
                ],
                [
                    7,
                    54,
                    24,
                    16,
                    55,
                    25
                ],
                [
                    34,
                    37,
                    13
                ],
                [
                    4,
                    151,
                    121,
                    5,
                    152,
                    122
                ],
                [
                    4,
                    75,
                    47,
                    14,
                    76,
                    48
                ],
                [
                    11,
                    54,
                    24,
                    14,
                    55,
                    25
                ],
                [
                    16,
                    45,
                    15,
                    14,
                    46,
                    16
                ],
                [
                    6,
                    147,
                    117,
                    4,
                    148,
                    118
                ],
                [
                    6,
                    73,
                    45,
                    14,
                    74,
                    46
                ],
                [
                    11,
                    54,
                    24,
                    16,
                    55,
                    25
                ],
                [
                    30,
                    46,
                    16,
                    2,
                    47,
                    17
                ],
                [
                    8,
                    132,
                    106,
                    4,
                    133,
                    107
                ],
                [
                    8,
                    75,
                    47,
                    13,
                    76,
                    48
                ],
                [
                    7,
                    54,
                    24,
                    22,
                    55,
                    25
                ],
                [
                    22,
                    45,
                    15,
                    13,
                    46,
                    16
                ],
                [
                    10,
                    142,
                    114,
                    2,
                    143,
                    115
                ],
                [
                    19,
                    74,
                    46,
                    4,
                    75,
                    47
                ],
                [
                    28,
                    50,
                    22,
                    6,
                    51,
                    23
                ],
                [
                    33,
                    46,
                    16,
                    4,
                    47,
                    17
                ],
                [
                    8,
                    152,
                    122,
                    4,
                    153,
                    123
                ],
                [
                    22,
                    73,
                    45,
                    3,
                    74,
                    46
                ],
                [
                    8,
                    53,
                    23,
                    26,
                    54,
                    24
                ],
                [
                    12,
                    45,
                    15,
                    28,
                    46,
                    16
                ],
                [
                    3,
                    147,
                    117,
                    10,
                    148,
                    118
                ],
                [
                    3,
                    73,
                    45,
                    23,
                    74,
                    46
                ],
                [
                    4,
                    54,
                    24,
                    31,
                    55,
                    25
                ],
                [
                    11,
                    45,
                    15,
                    31,
                    46,
                    16
                ],
                [
                    7,
                    146,
                    116,
                    7,
                    147,
                    117
                ],
                [
                    21,
                    73,
                    45,
                    7,
                    74,
                    46
                ],
                [
                    1,
                    53,
                    23,
                    37,
                    54,
                    24
                ],
                [
                    19,
                    45,
                    15,
                    26,
                    46,
                    16
                ],
                [
                    5,
                    145,
                    115,
                    10,
                    146,
                    116
                ],
                [
                    19,
                    75,
                    47,
                    10,
                    76,
                    48
                ],
                [
                    15,
                    54,
                    24,
                    25,
                    55,
                    25
                ],
                [
                    23,
                    45,
                    15,
                    25,
                    46,
                    16
                ],
                [
                    13,
                    145,
                    115,
                    3,
                    146,
                    116
                ],
                [
                    2,
                    74,
                    46,
                    29,
                    75,
                    47
                ],
                [
                    42,
                    54,
                    24,
                    1,
                    55,
                    25
                ],
                [
                    23,
                    45,
                    15,
                    28,
                    46,
                    16
                ],
                [
                    17,
                    145,
                    115
                ],
                [
                    10,
                    74,
                    46,
                    23,
                    75,
                    47
                ],
                [
                    10,
                    54,
                    24,
                    35,
                    55,
                    25
                ],
                [
                    19,
                    45,
                    15,
                    35,
                    46,
                    16
                ],
                [
                    17,
                    145,
                    115,
                    1,
                    146,
                    116
                ],
                [
                    14,
                    74,
                    46,
                    21,
                    75,
                    47
                ],
                [
                    29,
                    54,
                    24,
                    19,
                    55,
                    25
                ],
                [
                    11,
                    45,
                    15,
                    46,
                    46,
                    16
                ],
                [
                    13,
                    145,
                    115,
                    6,
                    146,
                    116
                ],
                [
                    14,
                    74,
                    46,
                    23,
                    75,
                    47
                ],
                [
                    44,
                    54,
                    24,
                    7,
                    55,
                    25
                ],
                [
                    59,
                    46,
                    16,
                    1,
                    47,
                    17
                ],
                [
                    12,
                    151,
                    121,
                    7,
                    152,
                    122
                ],
                [
                    12,
                    75,
                    47,
                    26,
                    76,
                    48
                ],
                [
                    39,
                    54,
                    24,
                    14,
                    55,
                    25
                ],
                [
                    22,
                    45,
                    15,
                    41,
                    46,
                    16
                ],
                [
                    6,
                    151,
                    121,
                    14,
                    152,
                    122
                ],
                [
                    6,
                    75,
                    47,
                    34,
                    76,
                    48
                ],
                [
                    46,
                    54,
                    24,
                    10,
                    55,
                    25
                ],
                [
                    2,
                    45,
                    15,
                    64,
                    46,
                    16
                ],
                [
                    17,
                    152,
                    122,
                    4,
                    153,
                    123
                ],
                [
                    29,
                    74,
                    46,
                    14,
                    75,
                    47
                ],
                [
                    49,
                    54,
                    24,
                    10,
                    55,
                    25
                ],
                [
                    24,
                    45,
                    15,
                    46,
                    46,
                    16
                ],
                [
                    4,
                    152,
                    122,
                    18,
                    153,
                    123
                ],
                [
                    13,
                    74,
                    46,
                    32,
                    75,
                    47
                ],
                [
                    48,
                    54,
                    24,
                    14,
                    55,
                    25
                ],
                [
                    42,
                    45,
                    15,
                    32,
                    46,
                    16
                ],
                [
                    20,
                    147,
                    117,
                    4,
                    148,
                    118
                ],
                [
                    40,
                    75,
                    47,
                    7,
                    76,
                    48
                ],
                [
                    43,
                    54,
                    24,
                    22,
                    55,
                    25
                ],
                [
                    10,
                    45,
                    15,
                    67,
                    46,
                    16
                ],
                [
                    19,
                    148,
                    118,
                    6,
                    149,
                    119
                ],
                [
                    18,
                    75,
                    47,
                    31,
                    76,
                    48
                ],
                [
                    34,
                    54,
                    24,
                    34,
                    55,
                    25
                ],
                [
                    20,
                    45,
                    15,
                    61,
                    46,
                    16
                ]
            ], e = function(t1, e) {
                var r = {};
                return r.totalCount = t1, r.dataCount = e, r;
            }, r = {
                getRSBlocks: function(r, n) {
                    var a = function(e, r) {
                        switch(r){
                            case i.L:
                                return t1[4 * (e - 1) + 0];
                            case i.M:
                                return t1[4 * (e - 1) + 1];
                            case i.Q:
                                return t1[4 * (e - 1) + 2];
                            case i.H:
                                return t1[4 * (e - 1) + 3];
                            default:
                                return;
                        }
                    }(r, n);
                    if (void 0 === a) throw "bad rs block @ typeNumber:" + r + "/errorCorrectionLevel:" + n;
                    for(var o = a.length / 3, u = [], s = 0; s < o; s += 1)for(var f = a[3 * s + 0], l = a[3 * s + 1], c = a[3 * s + 2], d = 0; d < f; d += 1)u.push(e(l, c));
                    return u;
                }
            };
            return r;
        }(), f = function() {
            var t1 = [], e = 0, r = {
                getBuffer: function() {
                    return t1;
                },
                getAt: function(e) {
                    var r = Math.floor(e / 8);
                    return 1 == (t1[r] >>> 7 - e % 8 & 1);
                },
                put: function(t1, e) {
                    for(var n = 0; n < e; n += 1)r.putBit(1 == (t1 >>> e - n - 1 & 1));
                },
                getLengthInBits: function() {
                    return e;
                },
                putBit: function(r) {
                    var n = Math.floor(e / 8);
                    t1.length <= n && t1.push(0), r && (t1[n] |= 128 >>> e % 8), e += 1;
                }
            };
            return r;
        }, l = function(t1) {
            var e = t1, r = {
                getMode: function() {
                    return 1;
                },
                getLength: function(t1) {
                    return e.length;
                },
                write: function(t1) {
                    for(var r = e, i = 0; i + 2 < r.length;)t1.put(n(r.substring(i, i + 3)), 10), i += 3;
                    i < r.length && (r.length - i == 1 ? t1.put(n(r.substring(i, i + 1)), 4) : r.length - i == 2 && t1.put(n(r.substring(i, i + 2)), 7));
                }
            }, n = function(t1) {
                for(var e = 0, r = 0; r < t1.length; r += 1)e = 10 * e + i(t1.charAt(r));
                return e;
            }, i = function(t1) {
                if ("0" <= t1 && t1 <= "9") return t1.charCodeAt(0) - "0".charCodeAt(0);
                throw "illegal char :" + t1;
            };
            return r;
        }, c = function(t1) {
            var e = t1, r = {
                getMode: function() {
                    return 2;
                },
                getLength: function(t1) {
                    return e.length;
                },
                write: function(t1) {
                    for(var r = e, i = 0; i + 1 < r.length;)t1.put(45 * n(r.charAt(i)) + n(r.charAt(i + 1)), 11), i += 2;
                    i < r.length && t1.put(n(r.charAt(i)), 6);
                }
            }, n = function(t1) {
                if ("0" <= t1 && t1 <= "9") return t1.charCodeAt(0) - "0".charCodeAt(0);
                if ("A" <= t1 && t1 <= "Z") return t1.charCodeAt(0) - "A".charCodeAt(0) + 10;
                switch(t1){
                    case " ":
                        return 36;
                    case "$":
                        return 37;
                    case "%":
                        return 38;
                    case "*":
                        return 39;
                    case "+":
                        return 40;
                    case "-":
                        return 41;
                    case ".":
                        return 42;
                    case "/":
                        return 43;
                    case ":":
                        return 44;
                    default:
                        throw "illegal char :" + t1;
                }
            };
            return r;
        }, d = function(e) {
            var r = t1.stringToBytes(e);
            return {
                getMode: function() {
                    return 4;
                },
                getLength: function(t1) {
                    return r.length;
                },
                write: function(t1) {
                    for(var e = 0; e < r.length; e += 1)t1.put(r[e], 8);
                }
            };
        }, p = function(e) {
            var r = t1.stringToBytesFuncs.SJIS;
            if (!r) throw "sjis not supported.";
            !function(t1, e) {
                var n = r("\u53CB");
                if (2 != n.length || 38726 != (n[0] << 8 | n[1])) throw "sjis not supported.";
            }();
            var n = r(e);
            return {
                getMode: function() {
                    return 8;
                },
                getLength: function(t1) {
                    return ~~(n.length / 2);
                },
                write: function(t1) {
                    for(var e = n, r = 0; r + 1 < e.length;){
                        var i = (255 & e[r]) << 8 | 255 & e[r + 1];
                        if (33088 <= i && i <= 40956) i -= 33088;
                        else {
                            if (!(57408 <= i && i <= 60351)) throw "illegal char at " + (r + 1) + "/" + i;
                            i -= 49472;
                        }
                        i = 192 * (i >>> 8 & 255) + (255 & i), t1.put(i, 13), r += 2;
                    }
                    if (r < e.length) throw "illegal char at " + (r + 1);
                }
            };
        }, g = function() {
            var t1 = [], e = {
                writeByte: function(e) {
                    t1.push(255 & e);
                },
                writeShort: function(t1) {
                    e.writeByte(t1), e.writeByte(t1 >>> 8);
                },
                writeBytes: function(t1, r, n) {
                    r = r || 0, n = n || t1.length;
                    for(var i = 0; i < n; i += 1)e.writeByte(t1[i + r]);
                },
                writeString: function(t1) {
                    for(var r = 0; r < t1.length; r += 1)e.writeByte(t1.charCodeAt(r));
                },
                toByteArray: function() {
                    return t1;
                },
                toString: function() {
                    var e = "";
                    e += "[";
                    for(var r = 0; r < t1.length; r += 1)r > 0 && (e += ","), e += t1[r];
                    return e + "]";
                }
            };
            return e;
        }, h = function(t1) {
            var e = t1, r = 0, n = 0, i = 0, a = {
                read: function() {
                    for(; i < 8;){
                        if (r >= e.length) {
                            if (0 == i) return -1;
                            throw "unexpected end of file./" + i;
                        }
                        var t1 = e.charAt(r);
                        if (r += 1, "=" == t1) return i = 0, -1;
                        t1.match(/^\s$/) || (n = n << 6 | o(t1.charCodeAt(0)), i += 6);
                    }
                    var a = n >>> i - 8 & 255;
                    return i -= 8, a;
                }
            }, o = function(t1) {
                if (65 <= t1 && t1 <= 90) return t1 - 65;
                if (97 <= t1 && t1 <= 122) return t1 - 97 + 26;
                if (48 <= t1 && t1 <= 57) return t1 - 48 + 52;
                if (43 == t1) return 62;
                if (47 == t1) return 63;
                throw "c:" + t1;
            };
            return a;
        }, v = function(t1, e, r) {
            for(var n = function(t1, e) {
                var r = t1, n = e, i = new Array(t1 * e), a = {
                    setPixel: function(t1, e, n) {
                        i[e * r + t1] = n;
                    },
                    write: function(t1) {
                        t1.writeString("GIF87a"), t1.writeShort(r), t1.writeShort(n), t1.writeByte(128), t1.writeByte(0), t1.writeByte(0), t1.writeByte(0), t1.writeByte(0), t1.writeByte(0), t1.writeByte(255), t1.writeByte(255), t1.writeByte(255), t1.writeString(","), t1.writeShort(0), t1.writeShort(0), t1.writeShort(r), t1.writeShort(n), t1.writeByte(0);
                        var e = o(2);
                        t1.writeByte(2);
                        for(var i = 0; e.length - i > 255;)t1.writeByte(255), t1.writeBytes(e, i, 255), i += 255;
                        t1.writeByte(e.length - i), t1.writeBytes(e, i, e.length - i), t1.writeByte(0), t1.writeString(";");
                    }
                }, o = function(t1) {
                    for(var e = 1 << t1, r = 1 + (1 << t1), n = t1 + 1, a = u(), o = 0; o < e; o += 1)a.add(String.fromCharCode(o));
                    a.add(String.fromCharCode(e)), a.add(String.fromCharCode(r));
                    var s, f, l, c = g(), d = (s = c, f = 0, l = 0, {
                        write: function(t1, e) {
                            if (t1 >>> e != 0) throw "length over";
                            for(; f + e >= 8;)s.writeByte(255 & (t1 << f | l)), e -= 8 - f, t1 >>>= 8 - f, l = 0, f = 0;
                            l |= t1 << f, f += e;
                        },
                        flush: function() {
                            f > 0 && s.writeByte(l);
                        }
                    });
                    d.write(e, n);
                    var p = 0, h = String.fromCharCode(i[p]);
                    for(p += 1; p < i.length;){
                        var v = String.fromCharCode(i[p]);
                        p += 1, a.contains(h + v) ? h += v : (d.write(a.indexOf(h), n), a.size() < 4095 && (a.size() == 1 << n && (n += 1), a.add(h + v)), h = v);
                    }
                    return d.write(a.indexOf(h), n), d.write(r, n), d.flush(), c.toByteArray();
                }, u = function() {
                    var t1 = {}, e = 0, r = {
                        add: function(n) {
                            if (r.contains(n)) throw "dup key:" + n;
                            t1[n] = e, e += 1;
                        },
                        size: function() {
                            return e;
                        },
                        indexOf: function(e) {
                            return t1[e];
                        },
                        contains: function(e) {
                            return void 0 !== t1[e];
                        }
                    };
                    return r;
                };
                return a;
            }(t1, e), i = 0; i < e; i += 1)for(var a = 0; a < t1; a += 1)n.setPixel(a, i, r(a, i));
            var o = g();
            n.write(o);
            for(var u, s, f, l, c, d, p, h = (u = 0, s = 0, f = 0, l = "", d = function(t1) {
                l += String.fromCharCode(p(63 & t1));
            }, p = function(t1) {
                if (t1 < 0) ;
                else {
                    if (t1 < 26) return 65 + t1;
                    if (t1 < 52) return t1 - 26 + 97;
                    if (t1 < 62) return t1 - 52 + 48;
                    if (62 == t1) return 43;
                    if (63 == t1) return 47;
                }
                throw "n:" + t1;
            }, (c = {}).writeByte = function(t1) {
                for(u = u << 8 | 255 & t1, s += 8, f += 1; s >= 6;)d(u >>> s - 6), s -= 6;
            }, c.flush = function() {
                if (s > 0 && (d(u << 6 - s), u = 0, s = 0), f % 3 != 0) for(var t1 = 3 - f % 3, e = 0; e < t1; e += 1)l += "=";
            }, c.toString = function() {
                return l;
            }, c), v = o.toByteArray(), m = 0; m < v.length; m += 1)h.writeByte(v[m]);
            return h.flush(), "data:image/gif;base64," + h;
        };
        return t1;
    }();
    n.stringToBytesFuncs["UTF-8"] = function(t1) {
        return function(t1) {
            for(var e = [], r = 0; r < t1.length; r++){
                var n = t1.charCodeAt(r);
                n < 128 ? e.push(n) : n < 2048 ? e.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? e.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (r++, n = 65536 + ((1023 & n) << 10 | 1023 & t1.charCodeAt(r)), e.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n));
            }
            return e;
        }(t1);
    }, r = function() {
        return n;
    }, t1.exports = r();
}), distanceBetween = function(t1, e, r, n) {
    return Math.hypot(r - t1, n - e);
};
!function(t1) {
    t1[t1.Left = 0] = "Left", t1[t1.Middle = 1] = "Middle", t1[t1.Right = 2] = "Right";
}(HorizontalFocalPoint || (HorizontalFocalPoint = {})), function(t1) {
    t1[t1.Top = 0] = "Top", t1[t1.Center = 1] = "Center", t1[t1.Bottom = 2] = "Bottom";
}(VerticalFocalPoint || (VerticalFocalPoint = {}));
var translatePoint = function(t1) {
    return function(e, r, n, i) {
        return {
            adjustedX: n === HorizontalFocalPoint.Left ? e : n === HorizontalFocalPoint.Right ? e + t1 : e + t1 / 2,
            adjustedY: i === VerticalFocalPoint.Top ? r : i === VerticalFocalPoint.Bottom ? r + t1 : r + t1 / 2
        };
    };
}, adjustRing = translatePoint(7), adjustCenter = translatePoint(3);
function focalPoint(t1, e, r, n, i) {
    return t1 < e ? r : t1 > e ? i : n;
}
var QRCodeEntity, AnimationPreset, innermostPoint = function(t1, e, r, n) {
    var i = r / 2, a = focalPoint(t1, i, HorizontalFocalPoint.Right, HorizontalFocalPoint.Middle, HorizontalFocalPoint.Left), o = focalPoint(e, i, VerticalFocalPoint.Bottom, VerticalFocalPoint.Center, VerticalFocalPoint.Top);
    return n === QRCodeEntity.PositionCenter ? adjustCenter(t1, e, a, o) : n === QRCodeEntity.PositionRing ? adjustRing(t1, e, a, o) : {
        adjustedX: t1,
        adjustedY: e
    };
}, underdampedHarmonicOscillationMaximums = function(t1, e, r) {
    var n = e - Math.pow(r, 2);
    if (n < 0) throw new Error("This method only supports underdamped oscillation.");
    var i = Math.sqrt(n), a = function(e) {
        return function(e) {
            return t1 * Math.pow(Math.E, -r * e);
        }(e) * Math.cos(i * e + 0);
    }, o = function(t1) {
        return (Math.atan(-r / i) + t1 * Math.PI - 0) / i;
    }, u = [];
    u.push({
        time: 0,
        amplitude: a(0)
    });
    for(var s = 0; Math.abs(u[u.length - 1].amplitude) > .01; s++)o(s) >= 0 && u.push({
        time: o(s),
        amplitude: a(o(s))
    });
    return u;
}, scaleOscillationsToOffset = function(t1, e, r) {
    var n = (e - t1) / r[r.length - 1].time;
    return r.map(function(e) {
        var r = e.time, i = e.amplitude;
        return {
            offset: t1 + r * n,
            value: i
        };
    });
}, applyToValues = function(t1, e) {
    return t1.map(function(t1) {
        return {
            offset: t1.offset,
            value: e(t1.value)
        };
    });
};
!function(t1) {
    t1.Module = "module", t1.PositionRing = "position-ring", t1.PositionCenter = "position-center", t1.Icon = "icon";
}(QRCodeEntity || (QRCodeEntity = {})), function(t1) {
    t1.FadeInTopDown = "FadeInTopDown", t1.FadeInCenterOut = "FadeInCenterOut", t1.RadialRipple = "RadialRipple", t1.RadialRippleIn = "RadialRippleIn", t1.MaterializeIn = "MaterializeIn";
}(AnimationPreset || (AnimationPreset = {}));
var FadeInTopDown = function(t1, e, r, n, i) {
    return {
        targets: t1,
        from: 20 * r,
        duration: 300,
        web: {
            opacity: [
                0,
                1
            ]
        }
    };
}, FadeInCenterOut = function(t1, e, r, n, i) {
    var a = innermostPoint(e, r, n, i), o = a.adjustedX, u = a.adjustedY, s = n / 2;
    return {
        targets: t1,
        from: 20 * distanceBetween(o, u, s, s),
        duration: 200,
        web: {
            opacity: [
                0,
                1
            ]
        }
    };
}, MaterializeIn = function(t1, e, r, n, i) {
    return {
        targets: t1,
        from: i === QRCodeEntity.Module ? 200 * Math.random() : 200,
        duration: 200,
        web: {
            opacity: [
                0,
                1
            ]
        }
    };
}, beginOscillation = .2, endOscillation = 1, amplitude = 5, stiffness = 50, damping = 3, radialRippleMaximums = underdampedHarmonicOscillationMaximums(amplitude, stiffness, damping), radialRippleOscillationKeyframes = scaleOscillationsToOffset(beginOscillation, endOscillation, radialRippleMaximums), RadialRipple = function(t1, e, r, n, i) {
    var a = innermostPoint(e, r, n, i), o = a.adjustedX, u = a.adjustedY, s = n / 2;
    return {
        targets: t1,
        from: 7 * distanceBetween(o, u, s, s),
        easing: "cubic-bezier(0.445,  0.050, 0.550, 0.950)",
        duration: 1e3,
        web: {
            scale: (i === QRCodeEntity.Icon ? [
                {
                    offset: 0,
                    value: 1
                },
                {
                    offset: .1,
                    value: .7
                },
                {
                    offset: .2,
                    value: 1
                }
            ] : [
                {
                    offset: 0,
                    value: 1
                }
            ]).concat(applyToValues(radialRippleOscillationKeyframes, function(t1) {
                return 1 + t1 / amplitude * .1;
            }), [
                1
            ])
        }
    };
}, RadialRippleIn = function(t1, e, r, n, i) {
    var a = innermostPoint(e, r, n, i), o = a.adjustedX, u = a.adjustedY, s = n / 2;
    return {
        targets: t1,
        from: 7 * distanceBetween(o, u, s, s),
        easing: "cubic-bezier(0.445,  0.050, 0.550, 0.950)",
        duration: 1e3,
        web: {
            scale: (i === QRCodeEntity.Icon ? [
                {
                    offset: 0,
                    value: 1
                },
                {
                    offset: .1,
                    value: .7
                },
                {
                    offset: .2,
                    value: 1
                }
            ] : [
                {
                    offset: 0,
                    value: 0
                }
            ]).concat(applyToValues(radialRippleOscillationKeyframes, function(t1) {
                return 1 + t1 / amplitude * .1;
            }), [
                1
            ]),
            opacity: [
                {
                    offset: 0,
                    value: 0
                },
                {
                    offset: .05,
                    value: 1
                }
            ]
        }
    };
}, getAnimationPreset = function(t1) {
    switch(t1){
        case AnimationPreset.FadeInTopDown:
            return FadeInTopDown;
        case AnimationPreset.FadeInCenterOut:
            return FadeInCenterOut;
        case AnimationPreset.RadialRipple:
            return RadialRipple;
        case AnimationPreset.RadialRippleIn:
            return RadialRippleIn;
        case AnimationPreset.MaterializeIn:
            return MaterializeIn;
        default:
            throw new Error(t1 + " is not a valid AnimationPreset.");
    }
};
addPlugin(waapiPlugin);
var BpQRCode = function() {
    function t1() {
        this.contents = "", this.protocol = "", this.moduleColor = "#000", this.positionRingColor = "#000", this.positionCenterColor = "#000", this.maskXToYRatio = 1, this.squares = !1;
    }
    return t1.prototype.componentDidLoad = function() {
        this.updateQR();
    }, t1.prototype.componentDidUpdate = function() {
        this.codeRendered.emit();
    }, t1.prototype.updateQR = function() {
        var t1 = this.qrCodeElement === this.qrCodeElement.shadowRoot, e = this.qrCodeElement.shadowRoot.querySelector("slot"), r = t1 ? !!this.qrCodeElement.querySelector("[slot]") : !!e && e.assignedNodes().length > 0;
        this.data = this.generateQRCodeSVG(this.contents, r);
    }, t1.prototype.animateQRCode = function(t1) {
        this.executeAnimation("string" == typeof t1 ? getAnimationPreset(t1) : t1);
    }, t1.prototype.getModuleCount = function() {
        return this.moduleCount;
    }, t1.prototype.executeAnimation = function(t1) {
        var e = this, r = Array.from(this.qrCodeElement.shadowRoot.querySelectorAll(".module")), n = Array.from(this.qrCodeElement.shadowRoot.querySelectorAll(".position-ring")), i = Array.from(this.qrCodeElement.shadowRoot.querySelectorAll(".position-center")), a = Array.from(this.qrCodeElement.shadowRoot.querySelectorAll("#icon-wrapper")), o = function(t1, e) {
            return t1.map(function(t1) {
                return {
                    element: t1,
                    entityType: e
                };
            });
        };
        animate(o(r, QRCodeEntity.Module).concat(o(n, QRCodeEntity.PositionRing), o(i, QRCodeEntity.PositionCenter), o(a, QRCodeEntity.Icon)).map(function(t1) {
            var e = t1.element, r = t1.entityType;
            return {
                element: e,
                positionX: parseInt(e.dataset.column, 10),
                positionY: parseInt(e.dataset.row, 10),
                entityType: r
            };
        }).map(function(r) {
            return t1(r.element, r.positionX, r.positionY, e.moduleCount, r.entityType);
        })).play();
    }, t1.prototype.generateQRCodeSVG = function(t1, e) {
        var r = qrcode_1(0, "H");
        r.addData(t1), r.make(), this.moduleCount = r.getModuleCount();
        var n = this.moduleCount + 8, i = n / 2;
        return '\n    <svg\n        version="1.1"\n        xmlns="http://www.w3.org/2000/svg"\n        width="100%"\n        height="100%"\n        viewBox="' + (0 - i) + " " + (0 - i) + " " + n + " " + n + '"\n        preserveAspectRatio="xMinYMin meet">\n    <rect\n        width="100%"\n        height="100%"\n        fill="white"\n        fill-opacity="0"\n        cx="' + -i + '"\n        cy="' + -i + '"/>\n    ' + (this.squares ? void 0 : function(t1, e, r, n, i) {
            return "\n      " + a(4, 4, 4, r, n, i) + "\n      " + a(t1 - 7 + 4, 4, 4, r, n, i) + "\n      " + a(4, t1 - 7 + 4, 4, r, n, i) + "\n      ";
        }(this.moduleCount, 0, this.positionRingColor, this.positionCenterColor, i)) + "\n    " + function(t1, e, r, n, i, a, s, f) {
            for(var l = "", c = 0; c < e; c += 1)for(var d = c + 4, p = 0; p < e; p += 1)if (t1.isDark(c, p) && (a || !o(p, c, e) && !u(p, c, e, n, i))) {
                var g = p + 4;
                l += a ? '\n            <rect x="' + (d - .5 - f) + '" y="' + (g - .5 - f) + '" width="1" height="1" />\n            ' : '\n            <circle\n                class="module"\n                fill="' + s + '"\n                cx="' + (d - f) + '"\n                cy="' + (g - f) + '"\n                data-column="' + c + '"\n                data-row="' + p + '"\n                r="0.5"/>';
            }
            return l;
        }(r, this.moduleCount, 0, e, this.maskXToYRatio, this.squares, this.moduleColor, i) + "\n    </svg>";
        function a(t1, e, r, n, i, a) {
            return '\n      <path class="position-ring" fill="' + n + '" data-column="' + (t1 - r) + '" data-row="' + (e - r) + '" d="M' + (t1 - a) + " " + (e - .5 - a) + 'h6s.5 0 .5 .5v6s0 .5-.5 .5h-6s-.5 0-.5-.5v-6s0-.5 .5-.5zm.75 1s-.25 0-.25 .25v4.5s0 .25 .25 .25h4.5s.25 0 .25-.25v-4.5s0-.25 -.25 -.25h-4.5z"/>\n      <path class="position-center" fill="' + i + '" data-column="' + (t1 - r + 2) + '" data-row="' + (e - r + 2) + '" d="M' + (t1 + 2 - a) + " " + (e + 1.5 - a) + 'h2s.5 0 .5 .5v2s0 .5-.5 .5h-2s-.5 0-.5-.5v-2s0-.5 .5-.5z"/>\n      ';
        }
        function o(t1, e, r) {
            return t1 <= 7 ? e <= 7 || e >= r - 7 : e <= 7 && t1 >= r - 7;
        }
        function u(t1, e, r, n, i) {
            if (!n) return !1;
            var a = r / 2, o = Math.floor(r * Math.sqrt(.1) / 2), u = o * i, s = o / i;
            return t1 >= a - s && t1 <= a + s && e >= a - u && e <= a + u;
        }
    }, t1.prototype.render = function() {
        return (0, _qrCodeCoreJs.h)("div", {
            id: "qr-container"
        }, (0, _qrCodeCoreJs.h)("div", {
            id: "icon-container",
            style: this.squares ? {
                display: "none",
                visibility: "hidden"
            } : {}
        }, (0, _qrCodeCoreJs.h)("div", {
            id: "icon-wrapper",
            style: {
                width: 18 * this.maskXToYRatio + "%"
            },
            "data-column": this.moduleCount / 2,
            "data-row": this.moduleCount / 2
        }, (0, _qrCodeCoreJs.h)("slot", {
            name: "icon"
        }))), (0, _qrCodeCoreJs.h)("div", {
            innerHTML: this.data
        }));
    }, Object.defineProperty(t1, "is", {
        get: function() {
            return "qr-code";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t1, "encapsulation", {
        get: function() {
            return "shadow";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t1, "properties", {
        get: function() {
            return {
                animateQRCode: {
                    method: !0
                },
                contents: {
                    type: String,
                    attr: "contents",
                    watchCallbacks: [
                        "updateQR"
                    ]
                },
                data: {
                    state: !0
                },
                getModuleCount: {
                    method: !0
                },
                maskXToYRatio: {
                    type: Number,
                    attr: "mask-x-to-y-ratio",
                    watchCallbacks: [
                        "updateQR"
                    ]
                },
                moduleColor: {
                    type: String,
                    attr: "module-color",
                    watchCallbacks: [
                        "updateQR"
                    ]
                },
                moduleCount: {
                    state: !0
                },
                positionCenterColor: {
                    type: String,
                    attr: "position-center-color",
                    watchCallbacks: [
                        "updateQR"
                    ]
                },
                positionRingColor: {
                    type: String,
                    attr: "position-ring-color",
                    watchCallbacks: [
                        "updateQR"
                    ]
                },
                protocol: {
                    type: String,
                    attr: "protocol",
                    watchCallbacks: [
                        "updateQR"
                    ]
                },
                qrCodeElement: {
                    elementRef: !0
                },
                squares: {
                    type: Boolean,
                    attr: "squares",
                    watchCallbacks: [
                        "updateQR"
                    ]
                }
            };
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t1, "events", {
        get: function() {
            return [
                {
                    name: "codeRendered",
                    method: "codeRendered",
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0
                }
            ];
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t1, "style", {
        get: function() {
            return ":host{display:block;contain:content}#qr-container{position:relative}#icon-container{position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}";
        },
        enumerable: !0,
        configurable: !0
    }), t1;
}();

},{"./qr-code.core.js":"3SjN6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bvaFE"], null, "parcelRequire81e0")

//# sourceMappingURL=mu42bxql.728b6ae2.js.map
