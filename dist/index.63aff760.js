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
})({"6DoTH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
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

},{}],"adjPd":[function(require,module,exports) {
var _redom = require("redom");
var _createForm = require("./createForm");
var _mainCss = require("./main.css");
var _cvv = require("card-validator/dist/cvv");
//создаем страницу с формой
function createPage() {
    return (0, _redom.el)("div.container", [
        (0, _redom.el)("h1.title", "\u0424\u043E\u0440\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B"),
        (0, _createForm.createPaymentForm)().form
    ]);
}
//доавляем форму на страницу
(0, _redom.setChildren)(document.body, createPage());
//переменные для работы с формой 
const form = document.getElementById("form"), cardInput = document.getElementById("card"), dateInput = document.getElementById("date"), cvvInput = document.getElementById("cvv"), emailInput = document.getElementById("email"), button = document.getElementById("button"), //массив инпутов, чтобы не повторять код проверок а использовать forEach
fields = [
    cardInput,
    dateInput,
    cvvInput,
    emailInput
], //валидаторы
validator = require("827840e7a025e597"), emailValidator = require("b7be329def0b6ae4"), //переменные классов
ERROR_CLASS = "error", SUCCESS_CLASS = "success", DISABLED_BTN = "form__btn--disabled";
function validateForm() {
    //на старте проверки делаем кнопку активной
    button.disabled = false;
    button.classList.remove(DISABLED_BTN);
    //создаем массив из пар инпут-валидатор, чтобы дальше сделать проверку циклом
    const validators = [
        [
            cardInput,
            validator.number
        ],
        [
            dateInput,
            validator.expirationDate
        ],
        [
            cvvInput,
            validator.cvv
        ],
        [
            emailInput,
            (value)=>({
                    isValid: emailValidator.validate(value)
                })
        ]
    ];
    //цикл проверки каждого инпута
    validators.forEach(([input, validate])=>{
        //если поле пустое 
        if (!input.value) {
            //блокируем кнопку
            button.disabled = true;
            button.classList.add(DISABLED_BTN);
            //прекращаем проверку
            return;
        }
        //если значение некорректное
        if (!validate(input.value).isValid) {
            //блокируем кнопку
            button.disabled = true;
            button.classList.add(DISABLED_BTN);
            //стилизуем ошибку поля
            input.classList.add(ERROR_CLASS);
        } else //иначе стилизуем успешное заполнение инпута
        input.classList.add(SUCCESS_CLASS);
    });
}
//функция сброса стилей ошибки/успешного заполнения
function resetValidityStyles(event) {
    event.target.classList.remove(ERROR_CLASS, SUCCESS_CLASS);
}
fields.forEach((input)=>{
    //проверка формы по событию блюр
    input.addEventListener("blur", validateForm);
    //сброс стилей при вводе в любое поле
    input.addEventListener("input", resetValidityStyles);
});

},{"redom":"cWIuY","./createForm":"8Vgdn","./main.css":"cvfZG","card-validator/dist/cvv":"hl7bb","827840e7a025e597":"1dvO8","b7be329def0b6ae4":"gi6bx"}],"cWIuY":[function(require,module,exports) {
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    function createElement(query, ns) {
        var ref = parse(query);
        var tag = ref.tag;
        var id = ref.id;
        var className = ref.className;
        var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
        if (id) element.id = id;
        if (className) {
            if (ns) element.setAttribute("class", className);
            else element.className = className;
        }
        return element;
    }
    function parse(query) {
        var chunks = query.split(/([.#])/);
        var className = "";
        var id = "";
        for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
            case ".":
                className += " " + chunks[i + 1];
                break;
            case "#":
                id = chunks[i + 1];
        }
        return {
            className: className.trim(),
            tag: chunks[0] || "div",
            id: id
        };
    }
    function html(query) {
        var args = [], len = arguments.length - 1;
        while(len-- > 0)args[len] = arguments[len + 1];
        var element;
        var type = typeof query;
        if (type === "string") element = createElement(query);
        else if (type === "function") {
            var Query = query;
            element = new (Function.prototype.bind.apply(Query, [
                null
            ].concat(args)));
        } else throw new Error("At least one argument required");
        parseArgumentsInternal(getEl(element), args, true);
        return element;
    }
    var el = html;
    var h = html;
    html.extend = function extendHtml() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return html.bind.apply(html, [
            this
        ].concat(args));
    };
    function unmount(parent, child) {
        var parentEl = getEl(parent);
        var childEl = getEl(child);
        if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
        child = childEl.__redom_view;
        if (childEl.parentNode) {
            doUnmount(child, childEl, parentEl);
            parentEl.removeChild(childEl);
        }
        return child;
    }
    function doUnmount(child, childEl, parentEl) {
        var hooks = childEl.__redom_lifecycle;
        if (hooksAreEmpty(hooks)) {
            childEl.__redom_lifecycle = {};
            return;
        }
        var traverse = parentEl;
        if (childEl.__redom_mounted) trigger(childEl, "onunmount");
        while(traverse){
            var parentHooks = traverse.__redom_lifecycle || {};
            for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
            if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
            traverse = traverse.parentNode;
        }
    }
    function hooksAreEmpty(hooks) {
        if (hooks == null) return true;
        for(var key in hooks){
            if (hooks[key]) return false;
        }
        return true;
    }
    /* global Node, ShadowRoot */ var hookNames = [
        "onmount",
        "onremount",
        "onunmount"
    ];
    var shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
    function mount(parent, child, before, replace) {
        var parentEl = getEl(parent);
        var childEl = getEl(child);
        if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
        child = childEl.__redom_view;
        if (child !== childEl) childEl.__redom_view = child;
        var wasMounted = childEl.__redom_mounted;
        var oldParent = childEl.parentNode;
        if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
        if (before != null) {
            if (replace) {
                var beforeEl = getEl(before);
                if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
                parentEl.replaceChild(childEl, beforeEl);
            } else parentEl.insertBefore(childEl, getEl(before));
        } else parentEl.appendChild(childEl);
        doMount(child, childEl, parentEl, oldParent);
        return child;
    }
    function trigger(el, eventName) {
        if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
        else if (eventName === "onunmount") el.__redom_mounted = false;
        var hooks = el.__redom_lifecycle;
        if (!hooks) return;
        var view = el.__redom_view;
        var hookCount = 0;
        view && view[eventName] && view[eventName]();
        for(var hook in hooks)if (hook) hookCount++;
        if (hookCount) {
            var traverse = el.firstChild;
            while(traverse){
                var next = traverse.nextSibling;
                trigger(traverse, eventName);
                traverse = next;
            }
        }
    }
    function doMount(child, childEl, parentEl, oldParent) {
        var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
        var remount = parentEl === oldParent;
        var hooksFound = false;
        for(var i = 0, list = hookNames; i < list.length; i += 1){
            var hookName = list[i];
            if (!remount) {
                // if already mounted, skip this phase
                if (child !== childEl) // only Views can have lifecycle events
                {
                    if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
                }
            }
            if (hooks[hookName]) hooksFound = true;
        }
        if (!hooksFound) {
            childEl.__redom_lifecycle = {};
            return;
        }
        var traverse = parentEl;
        var triggered = false;
        if (remount || traverse && traverse.__redom_mounted) {
            trigger(childEl, remount ? "onremount" : "onmount");
            triggered = true;
        }
        while(traverse){
            var parent = traverse.parentNode;
            var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
            for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
            if (triggered) break;
            else {
                if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
                    trigger(traverse, remount ? "onremount" : "onmount");
                    triggered = true;
                }
                traverse = parent;
            }
        }
    }
    function setStyle(view, arg1, arg2) {
        var el = getEl(view);
        if (typeof arg1 === "object") for(var key in arg1)setStyleValue(el, key, arg1[key]);
        else setStyleValue(el, arg1, arg2);
    }
    function setStyleValue(el, key, value) {
        el.style[key] = value == null ? "" : value;
    }
    /* global SVGElement */ var xlinkns = "http://www.w3.org/1999/xlink";
    function setAttr(view, arg1, arg2) {
        setAttrInternal(view, arg1, arg2);
    }
    function setAttrInternal(view, arg1, arg2, initial) {
        var el = getEl(view);
        var isObj = typeof arg1 === "object";
        if (isObj) for(var key in arg1)setAttrInternal(el, key, arg1[key], initial);
        else {
            var isSVG = el instanceof SVGElement;
            var isFunc = typeof arg2 === "function";
            if (arg1 === "style" && typeof arg2 === "object") setStyle(el, arg2);
            else if (isSVG && isFunc) el[arg1] = arg2;
            else if (arg1 === "dataset") setData(el, arg2);
            else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
            else {
                if (isSVG && arg1 === "xlink") {
                    setXlink(el, arg2);
                    return;
                }
                if (initial && arg1 === "class") arg2 = el.className + " " + arg2;
                if (arg2 == null) el.removeAttribute(arg1);
                else el.setAttribute(arg1, arg2);
            }
        }
    }
    function setXlink(el, arg1, arg2) {
        if (typeof arg1 === "object") for(var key in arg1)setXlink(el, key, arg1[key]);
        else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
        else el.removeAttributeNS(xlinkns, arg1, arg2);
    }
    function setData(el, arg1, arg2) {
        if (typeof arg1 === "object") for(var key in arg1)setData(el, key, arg1[key]);
        else if (arg2 != null) el.dataset[arg1] = arg2;
        else delete el.dataset[arg1];
    }
    function text(str) {
        return document.createTextNode(str != null ? str : "");
    }
    function parseArgumentsInternal(element, args, initial) {
        for(var i = 0, list = args; i < list.length; i += 1){
            var arg = list[i];
            if (arg !== 0 && !arg) continue;
            var type = typeof arg;
            if (type === "function") arg(element);
            else if (type === "string" || type === "number") element.appendChild(text(arg));
            else if (isNode(getEl(arg))) mount(element, arg);
            else if (arg.length) parseArgumentsInternal(element, arg, initial);
            else if (type === "object") setAttrInternal(element, arg, null, initial);
        }
    }
    function ensureEl(parent) {
        return typeof parent === "string" ? html(parent) : getEl(parent);
    }
    function getEl(parent) {
        return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
    }
    function isNode(arg) {
        return arg && arg.nodeType;
    }
    function dispatch(child, data, eventName) {
        if (eventName === void 0) eventName = "redom";
        var childEl = getEl(child);
        var event = new CustomEvent(eventName, {
            bubbles: true,
            detail: data
        });
        childEl.dispatchEvent(event);
    }
    function setChildren(parent) {
        var children = [], len = arguments.length - 1;
        while(len-- > 0)children[len] = arguments[len + 1];
        var parentEl = getEl(parent);
        var current = traverse(parent, children, parentEl.firstChild);
        while(current){
            var next = current.nextSibling;
            unmount(parent, current);
            current = next;
        }
    }
    function traverse(parent, children, _current) {
        var current = _current;
        var childEls = Array(children.length);
        for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
        for(var i$1 = 0; i$1 < children.length; i$1++){
            var child = children[i$1];
            if (!child) continue;
            var childEl = childEls[i$1];
            if (childEl === current) {
                current = current.nextSibling;
                continue;
            }
            if (isNode(childEl)) {
                var next = current && current.nextSibling;
                var exists = child.__redom_index != null;
                var replace = exists && next === childEls[i$1 + 1];
                mount(parent, child, current, replace);
                if (replace) current = next;
                continue;
            }
            if (child.length != null) current = traverse(parent, child, current);
        }
        return current;
    }
    function listPool(View, key, initData) {
        return new ListPool(View, key, initData);
    }
    var ListPool = function ListPool(View, key, initData) {
        this.View = View;
        this.initData = initData;
        this.oldLookup = {};
        this.lookup = {};
        this.oldViews = [];
        this.views = [];
        if (key != null) this.key = typeof key === "function" ? key : propKey(key);
    };
    ListPool.prototype.update = function update(data, context) {
        var ref = this;
        var View = ref.View;
        var key = ref.key;
        var initData = ref.initData;
        var keySet = key != null;
        var oldLookup = this.lookup;
        var newLookup = {};
        var newViews = Array(data.length);
        var oldViews = this.views;
        for(var i = 0; i < data.length; i++){
            var item = data[i];
            var view = void 0;
            if (keySet) {
                var id = key(item);
                view = oldLookup[id] || new View(initData, item, i, data);
                newLookup[id] = view;
                view.__redom_id = id;
            } else view = oldViews[i] || new View(initData, item, i, data);
            view.update && view.update(item, i, data, context);
            var el = getEl(view.el);
            el.__redom_view = view;
            newViews[i] = view;
        }
        this.oldViews = oldViews;
        this.views = newViews;
        this.oldLookup = oldLookup;
        this.lookup = newLookup;
    };
    function propKey(key) {
        return function(item) {
            return item[key];
        };
    }
    function list(parent, View, key, initData) {
        return new List(parent, View, key, initData);
    }
    var List = function List(parent, View, key, initData) {
        this.View = View;
        this.initData = initData;
        this.views = [];
        this.pool = new ListPool(View, key, initData);
        this.el = ensureEl(parent);
        this.keySet = key != null;
    };
    List.prototype.update = function update(data, context) {
        if (data === void 0) data = [];
        var ref = this;
        var keySet = ref.keySet;
        var oldViews = this.views;
        this.pool.update(data, context);
        var ref$1 = this.pool;
        var views = ref$1.views;
        var lookup = ref$1.lookup;
        if (keySet) for(var i = 0; i < oldViews.length; i++){
            var oldView = oldViews[i];
            var id = oldView.__redom_id;
            if (lookup[id] == null) {
                oldView.__redom_index = null;
                unmount(this, oldView);
            }
        }
        for(var i$1 = 0; i$1 < views.length; i$1++){
            var view = views[i$1];
            view.__redom_index = i$1;
        }
        setChildren(this, views);
        if (keySet) this.lookup = lookup;
        this.views = views;
    };
    List.extend = function extendList(parent, View, key, initData) {
        return List.bind(List, parent, View, key, initData);
    };
    list.extend = List.extend;
    /* global Node */ function place(View, initData) {
        return new Place(View, initData);
    }
    var Place = function Place(View, initData) {
        this.el = text("");
        this.visible = false;
        this.view = null;
        this._placeholder = this.el;
        if (View instanceof Node) this._el = View;
        else if (View.el instanceof Node) {
            this._el = View;
            this.view = View;
        } else this._View = View;
        this._initData = initData;
    };
    Place.prototype.update = function update(visible, data) {
        var placeholder = this._placeholder;
        var parentNode = this.el.parentNode;
        if (visible) {
            if (!this.visible) {
                if (this._el) {
                    mount(parentNode, this._el, placeholder);
                    unmount(parentNode, placeholder);
                    this.el = getEl(this._el);
                    this.visible = visible;
                } else {
                    var View = this._View;
                    var view = new View(this._initData);
                    this.el = getEl(view);
                    this.view = view;
                    mount(parentNode, view, placeholder);
                    unmount(parentNode, placeholder);
                }
            }
            this.view && this.view.update && this.view.update(data);
        } else if (this.visible) {
            if (this._el) {
                mount(parentNode, placeholder, this._el);
                unmount(parentNode, this._el);
                this.el = placeholder;
                this.visible = visible;
                return;
            }
            mount(parentNode, placeholder, this.view);
            unmount(parentNode, this.view);
            this.el = placeholder;
            this.view = null;
        }
        this.visible = visible;
    };
    /* global Node */ function router(parent, views, initData) {
        return new Router(parent, views, initData);
    }
    var Router = function Router(parent, views, initData) {
        this.el = ensureEl(parent);
        this.views = views;
        this.Views = views; // backwards compatibility
        this.initData = initData;
    };
    Router.prototype.update = function update(route, data) {
        if (route !== this.route) {
            var views = this.views;
            var View = views[route];
            this.route = route;
            if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
            else this.view = View && new View(this.initData, data);
            setChildren(this.el, [
                this.view
            ]);
        }
        this.view && this.view.update && this.view.update(data, route);
    };
    var ns = "http://www.w3.org/2000/svg";
    function svg(query) {
        var args = [], len = arguments.length - 1;
        while(len-- > 0)args[len] = arguments[len + 1];
        var element;
        var type = typeof query;
        if (type === "string") element = createElement(query, ns);
        else if (type === "function") {
            var Query = query;
            element = new (Function.prototype.bind.apply(Query, [
                null
            ].concat(args)));
        } else throw new Error("At least one argument required");
        parseArgumentsInternal(getEl(element), args, true);
        return element;
    }
    var s = svg;
    svg.extend = function extendSvg() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return svg.bind.apply(svg, [
            this
        ].concat(args));
    };
    svg.ns = ns;
    function viewFactory(views, key) {
        if (!views || typeof views !== "object") throw new Error("views must be an object");
        if (!key || typeof key !== "string") throw new Error("key must be a string");
        return function(initData, item, i, data) {
            var viewKey = item[key];
            var View = views[viewKey];
            if (View) return new View(initData, item, i, data);
            else throw new Error("view " + viewKey + " not found");
        };
    }
    exports1.List = List;
    exports1.ListPool = ListPool;
    exports1.Place = Place;
    exports1.Router = Router;
    exports1.dispatch = dispatch;
    exports1.el = el;
    exports1.h = h;
    exports1.html = html;
    exports1.list = list;
    exports1.listPool = listPool;
    exports1.mount = mount;
    exports1.place = place;
    exports1.router = router;
    exports1.s = s;
    exports1.setAttr = setAttr;
    exports1.setChildren = setChildren;
    exports1.setData = setData;
    exports1.setStyle = setStyle;
    exports1.setXlink = setXlink;
    exports1.svg = svg;
    exports1.text = text;
    exports1.unmount = unmount;
    exports1.viewFactory = viewFactory;
});

},{}],"8Vgdn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPaymentForm", ()=>createPaymentForm);
var _redom = require("redom");
var _cleaveJs = require("cleave.js");
var _cleaveJsDefault = parcelHelpers.interopDefault(_cleaveJs);
var _mainCss = require("./main.css");
//функция получения минимально возможной даты для маски 
function getMinDate() {
    const currentDate = new Date();
    let minMonth = String(currentDate.getMonth() + 2);
    const minYear = String(currentDate.getFullYear()).split("").splice(2, 2).join("");
    if (minMonth < 10) minMonth = `${0}${minMonth}`;
    const minDate = `${minYear}-${minMonth}`;
    return minDate;
}
const createPaymentForm = ()=>{
    //создаем элементы
    const form = (0, _redom.el)("form.form#form", {
        novalidate: "novalidate"
    }), wrapperTop = (0, _redom.el)("div.form__wrapper-top"), cardLabel = (0, _redom.el)("label.form__label.form__label--card", "\u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B", {
        for: "card"
    }), cardInput = (0, _redom.el)("input.form__input#card", {
        type: "text",
        required: " ",
        name: "card",
        placeholder: "xxxx xxxx xxxx xxxx"
    }), wrapperBtm = (0, _redom.el)("div.form__wrapper-btm"), dateLabel = (0, _redom.el)("label.form__label.form__label--date", "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F", {
        for: "date"
    }), dateInput = (0, _redom.el)("input.form__input#date", {
        type: "text",
        required: " ",
        name: "date",
        placeholder: "\u043C\u043C/\u0433\u0433"
    }), cvvLabel = (0, _redom.el)("label.form__label.form__label--cvc", "CVC/CVV", {
        for: "cvv"
    }), cvvInput = (0, _redom.el)("input.form__input#cvv", {
        maxLength: "3",
        onKeyPress: "return event.charCode >= 48 && event.charCode <= 57",
        required: " ",
        name: "cvv",
        placeholder: "000"
    }), emailLabel = (0, _redom.el)("label.form__label.form__label--email", "Email", {
        for: "email"
    }), emailInput = (0, _redom.el)("input.form__input#email", {
        type: "email",
        required: " ",
        name: "email",
        placeholder: "example@example.ru"
    }), button = (0, _redom.el)("button.form__btn.form__btn--disabled#button", "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C", {
        type: "submit"
    });
    //маска для номера карты
    const cardInputMask = new (0, _cleaveJsDefault.default)(cardInput, {
        creditCard: true,
        creditCardStrictMode: true
    });
    //маска для срока действия
    const dateInputMask = new (0, _cleaveJsDefault.default)(dateInput, {
        date: true,
        dateMin: getMinDate(),
        dateMax: "99-12",
        datePattern: [
            "m",
            "y"
        ]
    });
    //монтируем элементы
    (0, _redom.mount)(cardLabel, cardInput);
    (0, _redom.mount)(dateLabel, dateInput);
    (0, _redom.mount)(cvvLabel, cvvInput);
    (0, _redom.mount)(emailLabel, emailInput);
    (0, _redom.mount)(wrapperTop, cardLabel);
    (0, _redom.setChildren)(wrapperBtm, [
        dateLabel,
        cvvLabel
    ]);
    (0, _redom.setChildren)(form, [
        wrapperTop,
        wrapperBtm,
        emailLabel,
        button
    ]);
    return {
        form,
        cardInput,
        dateInput,
        cvvInput,
        emailInput
    };
};

},{"redom":"cWIuY","cleave.js":"dYrzx","./main.css":"cvfZG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dYrzx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
var commonjsGlobal = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var NumeralFormatter = function(numeralDecimalMark, numeralIntegerScale, numeralDecimalScale, numeralThousandsGroupStyle, numeralPositiveOnly, stripLeadingZeroes, prefix, signBeforePrefix, tailPrefix, delimiter) {
    var owner = this;
    owner.numeralDecimalMark = numeralDecimalMark || ".";
    owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
    owner.numeralPositiveOnly = !!numeralPositiveOnly;
    owner.stripLeadingZeroes = stripLeadingZeroes !== false;
    owner.prefix = prefix || prefix === "" ? prefix : "";
    owner.signBeforePrefix = !!signBeforePrefix;
    owner.tailPrefix = !!tailPrefix;
    owner.delimiter = delimiter || delimiter === "" ? delimiter : ",";
    owner.delimiterRE = delimiter ? new RegExp("\\" + delimiter, "g") : "";
};
NumeralFormatter.groupStyle = {
    thousand: "thousand",
    lakh: "lakh",
    wan: "wan",
    none: "none"
};
NumeralFormatter.prototype = {
    getRawValue: function(value) {
        return value.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".");
    },
    format: function(value) {
        var owner = this, parts, partSign, partSignAndPrefix, partInteger, partDecimal = "";
        // strip alphabet letters
        value = value.replace(/[A-Za-z]/g, "")// replace the first decimal mark with reserved placeholder
        .replace(owner.numeralDecimalMark, "M")// strip non numeric letters except minus and "M"
        // this is to ensure prefix has been stripped
        .replace(/[^\dM-]/g, "")// replace the leading minus with reserved placeholder
        .replace(/^\-/, "N")// strip the other minus sign (if present)
        .replace(/\-/g, "")// replace the minus sign (if present)
        .replace("N", owner.numeralPositiveOnly ? "" : "-")// replace decimal mark
        .replace("M", owner.numeralDecimalMark);
        // strip any leading zeros
        if (owner.stripLeadingZeroes) value = value.replace(/^(-)?0+(?=\d)/, "$1");
        partSign = value.slice(0, 1) === "-" ? "-" : "";
        if (typeof owner.prefix != "undefined") {
            if (owner.signBeforePrefix) partSignAndPrefix = partSign + owner.prefix;
            else partSignAndPrefix = owner.prefix + partSign;
        } else partSignAndPrefix = partSign;
        partInteger = value;
        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
            parts = value.split(owner.numeralDecimalMark);
            partInteger = parts[0];
            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
        }
        if (partSign === "-") partInteger = partInteger.slice(1);
        if (owner.numeralIntegerScale > 0) partInteger = partInteger.slice(0, owner.numeralIntegerScale);
        switch(owner.numeralThousandsGroupStyle){
            case NumeralFormatter.groupStyle.lakh:
                partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + owner.delimiter);
                break;
            case NumeralFormatter.groupStyle.wan:
                partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, "$1" + owner.delimiter);
                break;
            case NumeralFormatter.groupStyle.thousand:
                partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, "$1" + owner.delimiter);
                break;
        }
        if (owner.tailPrefix) return partSign + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : "") + owner.prefix;
        return partSignAndPrefix + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : "");
    }
};
var NumeralFormatter_1 = NumeralFormatter;
var DateFormatter = function(datePattern, dateMin, dateMax) {
    var owner = this;
    owner.date = [];
    owner.blocks = [];
    owner.datePattern = datePattern;
    owner.dateMin = dateMin.split("-").reverse().map(function(x) {
        return parseInt(x, 10);
    });
    if (owner.dateMin.length === 2) owner.dateMin.unshift(0);
    owner.dateMax = dateMax.split("-").reverse().map(function(x) {
        return parseInt(x, 10);
    });
    if (owner.dateMax.length === 2) owner.dateMax.unshift(0);
    owner.initBlocks();
};
DateFormatter.prototype = {
    initBlocks: function() {
        var owner = this;
        owner.datePattern.forEach(function(value) {
            if (value === "Y") owner.blocks.push(4);
            else owner.blocks.push(2);
        });
    },
    getISOFormatDate: function() {
        var owner = this, date = owner.date;
        return date[2] ? date[2] + "-" + owner.addLeadingZero(date[1]) + "-" + owner.addLeadingZero(date[0]) : "";
    },
    getBlocks: function() {
        return this.blocks;
    },
    getValidatedDate: function(value) {
        var owner = this, result = "";
        value = value.replace(/[^\d]/g, "");
        owner.blocks.forEach(function(length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length), sub0 = sub.slice(0, 1), rest = value.slice(length);
                switch(owner.datePattern[index]){
                    case "d":
                        if (sub === "00") sub = "01";
                        else if (parseInt(sub0, 10) > 3) sub = "0" + sub0;
                        else if (parseInt(sub, 10) > 31) sub = "31";
                        break;
                    case "m":
                        if (sub === "00") sub = "01";
                        else if (parseInt(sub0, 10) > 1) sub = "0" + sub0;
                        else if (parseInt(sub, 10) > 12) sub = "12";
                        break;
                }
                result += sub;
                // update remaining string
                value = rest;
            }
        });
        return this.getFixedDateString(result);
    },
    getFixedDateString: function(value) {
        var owner = this, datePattern = owner.datePattern, date = [], dayIndex = 0, monthIndex = 0, yearIndex = 0, dayStartIndex = 0, monthStartIndex = 0, yearStartIndex = 0, day, month, year, fullYearDone = false;
        // mm-dd || dd-mm
        if (value.length === 4 && datePattern[0].toLowerCase() !== "y" && datePattern[1].toLowerCase() !== "y") {
            dayStartIndex = datePattern[0] === "d" ? 0 : 2;
            monthStartIndex = 2 - dayStartIndex;
            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
            date = this.getFixedDate(day, month, 0);
        }
        // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd
        if (value.length === 8) {
            datePattern.forEach(function(type, index) {
                switch(type){
                    case "d":
                        dayIndex = index;
                        break;
                    case "m":
                        monthIndex = index;
                        break;
                    default:
                        yearIndex = index;
                        break;
                }
            });
            yearStartIndex = yearIndex * 2;
            dayStartIndex = dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2;
            monthStartIndex = monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2;
            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);
            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;
            date = this.getFixedDate(day, month, year);
        }
        // mm-yy || yy-mm
        if (value.length === 4 && (datePattern[0] === "y" || datePattern[1] === "y")) {
            monthStartIndex = datePattern[0] === "m" ? 0 : 2;
            yearStartIndex = 2 - monthStartIndex;
            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 2), 10);
            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 2).length === 2;
            date = [
                0,
                month,
                year
            ];
        }
        // mm-yyyy || yyyy-mm
        if (value.length === 6 && (datePattern[0] === "Y" || datePattern[1] === "Y")) {
            monthStartIndex = datePattern[0] === "m" ? 0 : 4;
            yearStartIndex = 2 - 0.5 * monthStartIndex;
            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);
            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;
            date = [
                0,
                month,
                year
            ];
        }
        date = owner.getRangeFixedDate(date);
        owner.date = date;
        var result = date.length === 0 ? value : datePattern.reduce(function(previous, current) {
            switch(current){
                case "d":
                    return previous + (date[0] === 0 ? "" : owner.addLeadingZero(date[0]));
                case "m":
                    return previous + (date[1] === 0 ? "" : owner.addLeadingZero(date[1]));
                case "y":
                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], false) : "");
                case "Y":
                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], true) : "");
            }
        }, "");
        return result;
    },
    getRangeFixedDate: function(date) {
        var owner = this, datePattern = owner.datePattern, dateMin = owner.dateMin || [], dateMax = owner.dateMax || [];
        if (!date.length || dateMin.length < 3 && dateMax.length < 3) return date;
        if (datePattern.find(function(x) {
            return x.toLowerCase() === "y";
        }) && date[2] === 0) return date;
        if (dateMax.length && (dateMax[2] < date[2] || dateMax[2] === date[2] && (dateMax[1] < date[1] || dateMax[1] === date[1] && dateMax[0] < date[0]))) return dateMax;
        if (dateMin.length && (dateMin[2] > date[2] || dateMin[2] === date[2] && (dateMin[1] > date[1] || dateMin[1] === date[1] && dateMin[0] > date[0]))) return dateMin;
        return date;
    },
    getFixedDate: function(day, month, year) {
        day = Math.min(day, 31);
        month = Math.min(month, 12);
        year = parseInt(year || 0, 10);
        if (month < 7 && month % 2 === 0 || month > 8 && month % 2 === 1) day = Math.min(day, month === 2 ? this.isLeapYear(year) ? 29 : 28 : 30);
        return [
            day,
            month,
            year
        ];
    },
    isLeapYear: function(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    addLeadingZero: function(number) {
        return (number < 10 ? "0" : "") + number;
    },
    addLeadingZeroForYear: function(number, fullYearMode) {
        if (fullYearMode) return (number < 10 ? "000" : number < 100 ? "00" : number < 1000 ? "0" : "") + number;
        return (number < 10 ? "0" : "") + number;
    }
};
var DateFormatter_1 = DateFormatter;
var TimeFormatter = function(timePattern, timeFormat) {
    var owner = this;
    owner.time = [];
    owner.blocks = [];
    owner.timePattern = timePattern;
    owner.timeFormat = timeFormat;
    owner.initBlocks();
};
TimeFormatter.prototype = {
    initBlocks: function() {
        var owner = this;
        owner.timePattern.forEach(function() {
            owner.blocks.push(2);
        });
    },
    getISOFormatTime: function() {
        var owner = this, time = owner.time;
        return time[2] ? owner.addLeadingZero(time[0]) + ":" + owner.addLeadingZero(time[1]) + ":" + owner.addLeadingZero(time[2]) : "";
    },
    getBlocks: function() {
        return this.blocks;
    },
    getTimeFormatOptions: function() {
        var owner = this;
        if (String(owner.timeFormat) === "12") return {
            maxHourFirstDigit: 1,
            maxHours: 12,
            maxMinutesFirstDigit: 5,
            maxMinutes: 60
        };
        return {
            maxHourFirstDigit: 2,
            maxHours: 23,
            maxMinutesFirstDigit: 5,
            maxMinutes: 60
        };
    },
    getValidatedTime: function(value) {
        var owner = this, result = "";
        value = value.replace(/[^\d]/g, "");
        var timeFormatOptions = owner.getTimeFormatOptions();
        owner.blocks.forEach(function(length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length), sub0 = sub.slice(0, 1), rest = value.slice(length);
                switch(owner.timePattern[index]){
                    case "h":
                        if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) sub = "0" + sub0;
                        else if (parseInt(sub, 10) > timeFormatOptions.maxHours) sub = timeFormatOptions.maxHours + "";
                        break;
                    case "m":
                    case "s":
                        if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) sub = "0" + sub0;
                        else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) sub = timeFormatOptions.maxMinutes + "";
                        break;
                }
                result += sub;
                // update remaining string
                value = rest;
            }
        });
        return this.getFixedTimeString(result);
    },
    getFixedTimeString: function(value) {
        var owner = this, timePattern = owner.timePattern, time = [], secondIndex = 0, minuteIndex = 0, hourIndex = 0, secondStartIndex = 0, minuteStartIndex = 0, hourStartIndex = 0, second, minute, hour;
        if (value.length === 6) {
            timePattern.forEach(function(type, index) {
                switch(type){
                    case "s":
                        secondIndex = index * 2;
                        break;
                    case "m":
                        minuteIndex = index * 2;
                        break;
                    case "h":
                        hourIndex = index * 2;
                        break;
                }
            });
            hourStartIndex = hourIndex;
            minuteStartIndex = minuteIndex;
            secondStartIndex = secondIndex;
            second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);
            time = this.getFixedTime(hour, minute, second);
        }
        if (value.length === 4 && owner.timePattern.indexOf("s") < 0) {
            timePattern.forEach(function(type, index) {
                switch(type){
                    case "m":
                        minuteIndex = index * 2;
                        break;
                    case "h":
                        hourIndex = index * 2;
                        break;
                }
            });
            hourStartIndex = hourIndex;
            minuteStartIndex = minuteIndex;
            second = 0;
            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);
            time = this.getFixedTime(hour, minute, second);
        }
        owner.time = time;
        return time.length === 0 ? value : timePattern.reduce(function(previous, current) {
            switch(current){
                case "s":
                    return previous + owner.addLeadingZero(time[2]);
                case "m":
                    return previous + owner.addLeadingZero(time[1]);
                case "h":
                    return previous + owner.addLeadingZero(time[0]);
            }
        }, "");
    },
    getFixedTime: function(hour, minute, second) {
        second = Math.min(parseInt(second || 0, 10), 60);
        minute = Math.min(minute, 60);
        hour = Math.min(hour, 60);
        return [
            hour,
            minute,
            second
        ];
    },
    addLeadingZero: function(number) {
        return (number < 10 ? "0" : "") + number;
    }
};
var TimeFormatter_1 = TimeFormatter;
var PhoneFormatter = function(formatter, delimiter) {
    var owner = this;
    owner.delimiter = delimiter || delimiter === "" ? delimiter : " ";
    owner.delimiterRE = delimiter ? new RegExp("\\" + delimiter, "g") : "";
    owner.formatter = formatter;
};
PhoneFormatter.prototype = {
    setFormatter: function(formatter) {
        this.formatter = formatter;
    },
    format: function(phoneNumber) {
        var owner = this;
        owner.formatter.clear();
        // only keep number and +
        phoneNumber = phoneNumber.replace(/[^\d+]/g, "");
        // strip non-leading +
        phoneNumber = phoneNumber.replace(/^\+/, "B").replace(/\+/g, "").replace("B", "+");
        // strip delimiter
        phoneNumber = phoneNumber.replace(owner.delimiterRE, "");
        var result = "", current, validated = false;
        for(var i = 0, iMax = phoneNumber.length; i < iMax; i++){
            current = owner.formatter.inputDigit(phoneNumber.charAt(i));
            // has ()- or space inside
            if (/[\s()-]/g.test(current)) {
                result = current;
                validated = true;
            } else if (!validated) result = current;
        }
        // strip ()
        // e.g. US: 7161234567 returns (716) 123-4567
        result = result.replace(/[()]/g, "");
        // replace library delimiter with user customized delimiter
        result = result.replace(/[\s-]/g, owner.delimiter);
        return result;
    }
};
var PhoneFormatter_1 = PhoneFormatter;
var CreditCardDetector = {
    blocks: {
        uatp: [
            4,
            5,
            6
        ],
        amex: [
            4,
            6,
            5
        ],
        diners: [
            4,
            6,
            4
        ],
        discover: [
            4,
            4,
            4,
            4
        ],
        mastercard: [
            4,
            4,
            4,
            4
        ],
        dankort: [
            4,
            4,
            4,
            4
        ],
        instapayment: [
            4,
            4,
            4,
            4
        ],
        jcb15: [
            4,
            6,
            5
        ],
        jcb: [
            4,
            4,
            4,
            4
        ],
        maestro: [
            4,
            4,
            4,
            4
        ],
        visa: [
            4,
            4,
            4,
            4
        ],
        mir: [
            4,
            4,
            4,
            4
        ],
        unionPay: [
            4,
            4,
            4,
            4
        ],
        general: [
            4,
            4,
            4,
            4
        ]
    },
    re: {
        // starts with 1; 15 digits, not starts with 1800 (jcb card)
        uatp: /^(?!1800)1\d{0,14}/,
        // starts with 34/37; 15 digits
        amex: /^3[47]\d{0,13}/,
        // starts with 6011/65/644-649; 16 digits
        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
        // starts with 300-305/309 or 36/38/39; 14 digits
        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
        // starts with 51-55/2221–2720; 16 digits
        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
        // starts with 5019/4175/4571; 16 digits
        dankort: /^(5019|4175|4571)\d{0,12}/,
        // starts with 637-639; 16 digits
        instapayment: /^63[7-9]\d{0,13}/,
        // starts with 2131/1800; 15 digits
        jcb15: /^(?:2131|1800)\d{0,11}/,
        // starts with 2131/1800/35; 16 digits
        jcb: /^(?:35\d{0,2})\d{0,12}/,
        // starts with 50/56-58/6304/67; 16 digits
        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
        // starts with 22; 16 digits
        mir: /^220[0-4]\d{0,12}/,
        // starts with 4; 16 digits
        visa: /^4\d{0,15}/,
        // starts with 62/81; 16 digits
        unionPay: /^(62|81)\d{0,14}/
    },
    getStrictBlocks: function(block) {
        var total = block.reduce(function(prev, current) {
            return prev + current;
        }, 0);
        return block.concat(19 - total);
    },
    getInfo: function(value, strictMode) {
        var blocks = CreditCardDetector.blocks, re = CreditCardDetector.re;
        // Some credit card can have up to 19 digits number.
        // Set strictMode to true will remove the 16 max-length restrain,
        // however, I never found any website validate card number like
        // this, hence probably you don't want to enable this option.
        strictMode = !!strictMode;
        for(var key in re)if (re[key].test(value)) {
            var matchedBlocks = blocks[key];
            return {
                type: key,
                blocks: strictMode ? this.getStrictBlocks(matchedBlocks) : matchedBlocks
            };
        }
        return {
            type: "unknown",
            blocks: strictMode ? this.getStrictBlocks(blocks.general) : blocks.general
        };
    }
};
var CreditCardDetector_1 = CreditCardDetector;
var Util = {
    noop: function() {},
    strip: function(value, re) {
        return value.replace(re, "");
    },
    getPostDelimiter: function(value, delimiter, delimiters) {
        // single delimiter
        if (delimiters.length === 0) return value.slice(-delimiter.length) === delimiter ? delimiter : "";
        // multiple delimiters
        var matchedDelimiter = "";
        delimiters.forEach(function(current) {
            if (value.slice(-current.length) === current) matchedDelimiter = current;
        });
        return matchedDelimiter;
    },
    getDelimiterREByDelimiter: function(delimiter) {
        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
    },
    getNextCursorPosition: function(prevPos, oldValue, newValue, delimiter, delimiters) {
        // If cursor was at the end of value, just place it back.
        // Because new value could contain additional chars.
        if (oldValue.length === prevPos) return newValue.length;
        return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters);
    },
    getPositionOffset: function(prevPos, oldValue, newValue, delimiter, delimiters) {
        var oldRawValue, newRawValue, lengthOffset;
        oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
        newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
        lengthOffset = oldRawValue.length - newRawValue.length;
        return lengthOffset !== 0 ? lengthOffset / Math.abs(lengthOffset) : 0;
    },
    stripDelimiters: function(value, delimiter, delimiters) {
        var owner = this;
        // single delimiter
        if (delimiters.length === 0) {
            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : "";
            return value.replace(delimiterRE, "");
        }
        // multiple delimiters
        delimiters.forEach(function(current) {
            current.split("").forEach(function(letter) {
                value = value.replace(owner.getDelimiterREByDelimiter(letter), "");
            });
        });
        return value;
    },
    headStr: function(str, length) {
        return str.slice(0, length);
    },
    getMaxLength: function(blocks) {
        return blocks.reduce(function(previous, current) {
            return previous + current;
        }, 0);
    },
    // strip prefix
    // Before type  |   After type    |     Return value
    // PEFIX-...    |   PEFIX-...     |     ''
    // PREFIX-123   |   PEFIX-123     |     123
    // PREFIX-123   |   PREFIX-23     |     23
    // PREFIX-123   |   PREFIX-1234   |     1234
    getPrefixStrippedValue: function(value, prefix, prefixLength, prevResult, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix) {
        // No prefix
        if (prefixLength === 0) return value;
        // Value is prefix
        if (value === prefix && value !== "") return "";
        if (signBeforePrefix && value.slice(0, 1) == "-") {
            var prev = prevResult.slice(0, 1) == "-" ? prevResult.slice(1) : prevResult;
            return "-" + this.getPrefixStrippedValue(value.slice(1), prefix, prefixLength, prev, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix);
        }
        // Pre result prefix string does not match pre-defined prefix
        if (prevResult.slice(0, prefixLength) !== prefix && !tailPrefix) {
            // Check if the first time user entered something
            if (noImmediatePrefix && !prevResult && value) return value;
            return "";
        } else if (prevResult.slice(-prefixLength) !== prefix && tailPrefix) {
            // Check if the first time user entered something
            if (noImmediatePrefix && !prevResult && value) return value;
            return "";
        }
        var prevValue = this.stripDelimiters(prevResult, delimiter, delimiters);
        // New value has issue, someone typed in between prefix letters
        // Revert to pre value
        if (value.slice(0, prefixLength) !== prefix && !tailPrefix) return prevValue.slice(prefixLength);
        else if (value.slice(-prefixLength) !== prefix && tailPrefix) return prevValue.slice(0, -prefixLength - 1);
        // No issue, strip prefix for new value
        return tailPrefix ? value.slice(0, -prefixLength) : value.slice(prefixLength);
    },
    getFirstDiffIndex: function(prev, current) {
        var index = 0;
        while(prev.charAt(index) === current.charAt(index)){
            if (prev.charAt(index++) === "") return -1;
        }
        return index;
    },
    getFormattedValue: function(value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
        var result = "", multipleDelimiters = delimiters.length > 0, currentDelimiter = "";
        // no options, normal input
        if (blocksLength === 0) return value;
        blocks.forEach(function(length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length), rest = value.slice(length);
                if (multipleDelimiters) currentDelimiter = delimiters[delimiterLazyShow ? index - 1 : index] || currentDelimiter;
                else currentDelimiter = delimiter;
                if (delimiterLazyShow) {
                    if (index > 0) result += currentDelimiter;
                    result += sub;
                } else {
                    result += sub;
                    if (sub.length === length && index < blocksLength - 1) result += currentDelimiter;
                }
                // update remaining string
                value = rest;
            }
        });
        return result;
    },
    // move cursor to the end
    // the first time user focuses on an input with prefix
    fixPrefixCursor: function(el, prefix, delimiter, delimiters) {
        if (!el) return;
        var val = el.value, appendix = delimiter || delimiters[0] || " ";
        if (!el.setSelectionRange || !prefix || prefix.length + appendix.length <= val.length) return;
        var len = val.length * 2;
        // set timeout to avoid blink
        setTimeout(function() {
            el.setSelectionRange(len, len);
        }, 1);
    },
    // Check if input field is fully selected
    checkFullSelection: function(value) {
        try {
            var selection = window.getSelection() || document.getSelection() || {};
            return selection.toString().length === value.length;
        } catch (ex) {
        // Ignore
        }
        return false;
    },
    setSelection: function(element, position, doc) {
        if (element !== this.getActiveElement(doc)) return;
        // cursor is already in the end
        if (element && element.value.length <= position) return;
        if (element.createTextRange) {
            var range = element.createTextRange();
            range.move("character", position);
            range.select();
        } else try {
            element.setSelectionRange(position, position);
        } catch (e) {
            // eslint-disable-next-line
            console.warn("The input element type does not support selection");
        }
    },
    getActiveElement: function(parent) {
        var activeElement = parent.activeElement;
        if (activeElement && activeElement.shadowRoot) return this.getActiveElement(activeElement.shadowRoot);
        return activeElement;
    },
    isAndroid: function() {
        return navigator && /android/i.test(navigator.userAgent);
    },
    // On Android chrome, the keyup and keydown events
    // always return key code 229 as a composition that
    // buffers the user’s keystrokes
    // see https://github.com/nosir/cleave.js/issues/147
    isAndroidBackspaceKeydown: function(lastInputValue, currentInputValue) {
        if (!this.isAndroid() || !lastInputValue || !currentInputValue) return false;
        return currentInputValue === lastInputValue.slice(0, -1);
    }
};
var Util_1 = Util;
/**
 * Props Assignment
 *
 * Separate this, so react module can share the usage
 */ var DefaultProperties = {
    // Maybe change to object-assign
    // for now just keep it as simple
    assign: function(target, opts) {
        target = target || {};
        opts = opts || {};
        // credit card
        target.creditCard = !!opts.creditCard;
        target.creditCardStrictMode = !!opts.creditCardStrictMode;
        target.creditCardType = "";
        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || function() {};
        // phone
        target.phone = !!opts.phone;
        target.phoneRegionCode = opts.phoneRegionCode || "AU";
        target.phoneFormatter = {};
        // time
        target.time = !!opts.time;
        target.timePattern = opts.timePattern || [
            "h",
            "m",
            "s"
        ];
        target.timeFormat = opts.timeFormat || "24";
        target.timeFormatter = {};
        // date
        target.date = !!opts.date;
        target.datePattern = opts.datePattern || [
            "d",
            "m",
            "Y"
        ];
        target.dateMin = opts.dateMin || "";
        target.dateMax = opts.dateMax || "";
        target.dateFormatter = {};
        // numeral
        target.numeral = !!opts.numeral;
        target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
        target.numeralDecimalMark = opts.numeralDecimalMark || ".";
        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || "thousand";
        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
        target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;
        target.signBeforePrefix = !!opts.signBeforePrefix;
        target.tailPrefix = !!opts.tailPrefix;
        // others
        target.swapHiddenInput = !!opts.swapHiddenInput;
        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;
        target.uppercase = !!opts.uppercase;
        target.lowercase = !!opts.lowercase;
        target.prefix = target.creditCard || target.date ? "" : opts.prefix || "";
        target.noImmediatePrefix = !!opts.noImmediatePrefix;
        target.prefixLength = target.prefix.length;
        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
        target.copyDelimiter = !!opts.copyDelimiter;
        target.initValue = opts.initValue !== undefined && opts.initValue !== null ? opts.initValue.toString() : "";
        target.delimiter = opts.delimiter || opts.delimiter === "" ? opts.delimiter : opts.date ? "/" : opts.time ? ":" : opts.numeral ? "," : opts.phone ? " " : " ";
        target.delimiterLength = target.delimiter.length;
        target.delimiterLazyShow = !!opts.delimiterLazyShow;
        target.delimiters = opts.delimiters || [];
        target.blocks = opts.blocks || [];
        target.blocksLength = target.blocks.length;
        target.root = typeof commonjsGlobal === "object" && commonjsGlobal ? commonjsGlobal : window;
        target.document = opts.document || target.root.document;
        target.maxLength = 0;
        target.backspace = false;
        target.result = "";
        target.onValueChanged = opts.onValueChanged || function() {};
        return target;
    }
};
var DefaultProperties_1 = DefaultProperties;
/**
 * Construct a new Cleave instance by passing the configuration object
 *
 * @param {String | HTMLElement} element
 * @param {Object} opts
 */ var Cleave = function(element, opts) {
    var owner = this;
    var hasMultipleElements = false;
    if (typeof element === "string") {
        owner.element = document.querySelector(element);
        hasMultipleElements = document.querySelectorAll(element).length > 1;
    } else if (typeof element.length !== "undefined" && element.length > 0) {
        owner.element = element[0];
        hasMultipleElements = element.length > 1;
    } else owner.element = element;
    if (!owner.element) throw new Error("[cleave.js] Please check the element");
    if (hasMultipleElements) try {
        // eslint-disable-next-line
        console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.");
    } catch (e) {
    // Old IE
    }
    opts.initValue = owner.element.value;
    owner.properties = Cleave.DefaultProperties.assign({}, opts);
    owner.init();
};
Cleave.prototype = {
    init: function() {
        var owner = this, pps = owner.properties;
        // no need to use this lib
        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.time && !pps.date && pps.blocksLength === 0 && !pps.prefix) {
            owner.onInput(pps.initValue);
            return;
        }
        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
        owner.isAndroid = Cleave.Util.isAndroid();
        owner.lastInputValue = "";
        owner.isBackward = "";
        owner.onChangeListener = owner.onChange.bind(owner);
        owner.onKeyDownListener = owner.onKeyDown.bind(owner);
        owner.onFocusListener = owner.onFocus.bind(owner);
        owner.onCutListener = owner.onCut.bind(owner);
        owner.onCopyListener = owner.onCopy.bind(owner);
        owner.initSwapHiddenInput();
        owner.element.addEventListener("input", owner.onChangeListener);
        owner.element.addEventListener("keydown", owner.onKeyDownListener);
        owner.element.addEventListener("focus", owner.onFocusListener);
        owner.element.addEventListener("cut", owner.onCutListener);
        owner.element.addEventListener("copy", owner.onCopyListener);
        owner.initPhoneFormatter();
        owner.initDateFormatter();
        owner.initTimeFormatter();
        owner.initNumeralFormatter();
        // avoid touch input field if value is null
        // otherwise Firefox will add red box-shadow for <input required />
        if (pps.initValue || pps.prefix && !pps.noImmediatePrefix) owner.onInput(pps.initValue);
    },
    initSwapHiddenInput: function() {
        var owner = this, pps = owner.properties;
        if (!pps.swapHiddenInput) return;
        var inputFormatter = owner.element.cloneNode(true);
        owner.element.parentNode.insertBefore(inputFormatter, owner.element);
        owner.elementSwapHidden = owner.element;
        owner.elementSwapHidden.type = "hidden";
        owner.element = inputFormatter;
        owner.element.id = "";
    },
    initNumeralFormatter: function() {
        var owner = this, pps = owner.properties;
        if (!pps.numeral) return;
        pps.numeralFormatter = new Cleave.NumeralFormatter(pps.numeralDecimalMark, pps.numeralIntegerScale, pps.numeralDecimalScale, pps.numeralThousandsGroupStyle, pps.numeralPositiveOnly, pps.stripLeadingZeroes, pps.prefix, pps.signBeforePrefix, pps.tailPrefix, pps.delimiter);
    },
    initTimeFormatter: function() {
        var owner = this, pps = owner.properties;
        if (!pps.time) return;
        pps.timeFormatter = new Cleave.TimeFormatter(pps.timePattern, pps.timeFormat);
        pps.blocks = pps.timeFormatter.getBlocks();
        pps.blocksLength = pps.blocks.length;
        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
    },
    initDateFormatter: function() {
        var owner = this, pps = owner.properties;
        if (!pps.date) return;
        pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern, pps.dateMin, pps.dateMax);
        pps.blocks = pps.dateFormatter.getBlocks();
        pps.blocksLength = pps.blocks.length;
        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
    },
    initPhoneFormatter: function() {
        var owner = this, pps = owner.properties;
        if (!pps.phone) return;
        // Cleave.AsYouTypeFormatter should be provided by
        // external google closure lib
        try {
            pps.phoneFormatter = new Cleave.PhoneFormatter(new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode), pps.delimiter);
        } catch (ex) {
            throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib");
        }
    },
    onKeyDown: function(event) {
        var owner = this, charCode = event.which || event.keyCode;
        owner.lastInputValue = owner.element.value;
        owner.isBackward = charCode === 8;
    },
    onChange: function(event) {
        var owner = this, pps = owner.properties, Util = Cleave.Util;
        owner.isBackward = owner.isBackward || event.inputType === "deleteContentBackward";
        var postDelimiter = Util.getPostDelimiter(owner.lastInputValue, pps.delimiter, pps.delimiters);
        if (owner.isBackward && postDelimiter) pps.postDelimiterBackspace = postDelimiter;
        else pps.postDelimiterBackspace = false;
        this.onInput(this.element.value);
    },
    onFocus: function() {
        var owner = this, pps = owner.properties;
        owner.lastInputValue = owner.element.value;
        if (pps.prefix && pps.noImmediatePrefix && !owner.element.value) this.onInput(pps.prefix);
        Cleave.Util.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
    },
    onCut: function(e) {
        if (!Cleave.Util.checkFullSelection(this.element.value)) return;
        this.copyClipboardData(e);
        this.onInput("");
    },
    onCopy: function(e) {
        if (!Cleave.Util.checkFullSelection(this.element.value)) return;
        this.copyClipboardData(e);
    },
    copyClipboardData: function(e) {
        var owner = this, pps = owner.properties, Util = Cleave.Util, inputValue = owner.element.value, textToCopy = "";
        if (!pps.copyDelimiter) textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters);
        else textToCopy = inputValue;
        try {
            if (e.clipboardData) e.clipboardData.setData("Text", textToCopy);
            else window.clipboardData.setData("Text", textToCopy);
            e.preventDefault();
        } catch (ex) {
        //  empty
        }
    },
    onInput: function(value) {
        var owner = this, pps = owner.properties, Util = Cleave.Util;
        // case 1: delete one more character "4"
        // 1234*| -> hit backspace -> 123|
        // case 2: last character is not delimiter which is:
        // 12|34* -> hit backspace -> 1|34*
        // note: no need to apply this for numeral mode
        var postDelimiterAfter = Util.getPostDelimiter(value, pps.delimiter, pps.delimiters);
        if (!pps.numeral && pps.postDelimiterBackspace && !postDelimiterAfter) value = Util.headStr(value, value.length - pps.postDelimiterBackspace.length);
        // phone formatter
        if (pps.phone) {
            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length);
            else pps.result = pps.phoneFormatter.format(value);
            owner.updateValueState();
            return;
        }
        // numeral formatter
        if (pps.numeral) {
            // Do not show prefix when noImmediatePrefix is specified
            // This mostly because we need to show user the native input placeholder
            if (pps.prefix && pps.noImmediatePrefix && value.length === 0) pps.result = "";
            else pps.result = pps.numeralFormatter.format(value);
            owner.updateValueState();
            return;
        }
        // date
        if (pps.date) value = pps.dateFormatter.getValidatedDate(value);
        // time
        if (pps.time) value = pps.timeFormatter.getValidatedTime(value);
        // strip delimiters
        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);
        // strip prefix
        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
        // strip non-numeric characters
        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;
        // convert case
        value = pps.uppercase ? value.toUpperCase() : value;
        value = pps.lowercase ? value.toLowerCase() : value;
        // prevent from showing prefix when no immediate option enabled with empty input value
        if (pps.prefix) {
            if (pps.tailPrefix) value = value + pps.prefix;
            else value = pps.prefix + value;
            // no blocks specified, no need to do formatting
            if (pps.blocksLength === 0) {
                pps.result = value;
                owner.updateValueState();
                return;
            }
        }
        // update credit card props
        if (pps.creditCard) owner.updateCreditCardPropsByValue(value);
        // strip over length characters
        value = Util.headStr(value, pps.maxLength);
        // apply blocks
        pps.result = Util.getFormattedValue(value, pps.blocks, pps.blocksLength, pps.delimiter, pps.delimiters, pps.delimiterLazyShow);
        owner.updateValueState();
    },
    updateCreditCardPropsByValue: function(value) {
        var owner = this, pps = owner.properties, Util = Cleave.Util, creditCardInfo;
        // At least one of the first 4 characters has changed
        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) return;
        creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);
        pps.blocks = creditCardInfo.blocks;
        pps.blocksLength = pps.blocks.length;
        pps.maxLength = Util.getMaxLength(pps.blocks);
        // credit card type changed
        if (pps.creditCardType !== creditCardInfo.type) {
            pps.creditCardType = creditCardInfo.type;
            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
        }
    },
    updateValueState: function() {
        var owner = this, Util = Cleave.Util, pps = owner.properties;
        if (!owner.element) return;
        var endPos = owner.element.selectionEnd;
        var oldValue = owner.element.value;
        var newValue = pps.result;
        endPos = Util.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters);
        // fix Android browser type="text" input field
        // cursor not jumping issue
        if (owner.isAndroid) {
            window.setTimeout(function() {
                owner.element.value = newValue;
                Util.setSelection(owner.element, endPos, pps.document, false);
                owner.callOnValueChanged();
            }, 1);
            return;
        }
        owner.element.value = newValue;
        if (pps.swapHiddenInput) owner.elementSwapHidden.value = owner.getRawValue();
        Util.setSelection(owner.element, endPos, pps.document, false);
        owner.callOnValueChanged();
    },
    callOnValueChanged: function() {
        var owner = this, pps = owner.properties;
        pps.onValueChanged.call(owner, {
            target: {
                name: owner.element.name,
                value: pps.result,
                rawValue: owner.getRawValue()
            }
        });
    },
    setPhoneRegionCode: function(phoneRegionCode) {
        var owner = this, pps = owner.properties;
        pps.phoneRegionCode = phoneRegionCode;
        owner.initPhoneFormatter();
        owner.onChange();
    },
    setRawValue: function(value) {
        var owner = this, pps = owner.properties;
        value = value !== undefined && value !== null ? value.toString() : "";
        if (pps.numeral) value = value.replace(".", pps.numeralDecimalMark);
        pps.postDelimiterBackspace = false;
        owner.element.value = value;
        owner.onInput(value);
    },
    getRawValue: function() {
        var owner = this, pps = owner.properties, Util = Cleave.Util, rawValue = owner.element.value;
        if (pps.rawValueTrimPrefix) rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
        if (pps.numeral) rawValue = pps.numeralFormatter.getRawValue(rawValue);
        else rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
        return rawValue;
    },
    getISOFormatDate: function() {
        var owner = this, pps = owner.properties;
        return pps.date ? pps.dateFormatter.getISOFormatDate() : "";
    },
    getISOFormatTime: function() {
        var owner = this, pps = owner.properties;
        return pps.time ? pps.timeFormatter.getISOFormatTime() : "";
    },
    getFormattedValue: function() {
        return this.element.value;
    },
    destroy: function() {
        var owner = this;
        owner.element.removeEventListener("input", owner.onChangeListener);
        owner.element.removeEventListener("keydown", owner.onKeyDownListener);
        owner.element.removeEventListener("focus", owner.onFocusListener);
        owner.element.removeEventListener("cut", owner.onCutListener);
        owner.element.removeEventListener("copy", owner.onCopyListener);
    },
    toString: function() {
        return "[Cleave Object]";
    }
};
Cleave.NumeralFormatter = NumeralFormatter_1;
Cleave.DateFormatter = DateFormatter_1;
Cleave.TimeFormatter = TimeFormatter_1;
Cleave.PhoneFormatter = PhoneFormatter_1;
Cleave.CreditCardDetector = CreditCardDetector_1;
Cleave.Util = Util_1;
Cleave.DefaultProperties = DefaultProperties_1;
// for angular directive
(typeof commonjsGlobal === "object" && commonjsGlobal ? commonjsGlobal : window)["Cleave"] = Cleave;
// CommonJS
var Cleave_1 = Cleave;
exports.default = Cleave_1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cvfZG":[function() {},{}],"cvfZG":[function() {},{}],"hl7bb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cvv = void 0;
var DEFAULT_LENGTH = 3;
function includes(array, thing) {
    for(var i = 0; i < array.length; i++){
        if (thing === array[i]) return true;
    }
    return false;
}
function max(array) {
    var maximum = DEFAULT_LENGTH;
    var i = 0;
    for(; i < array.length; i++)maximum = array[i] > maximum ? array[i] : maximum;
    return maximum;
}
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function cvv(value, maxLength) {
    if (maxLength === void 0) maxLength = DEFAULT_LENGTH;
    maxLength = maxLength instanceof Array ? maxLength : [
        maxLength
    ];
    if (typeof value !== "string") return verification(false, false);
    if (!/^\d*$/.test(value)) return verification(false, false);
    if (includes(maxLength, value.length)) return verification(true, true);
    if (value.length < Math.min.apply(null, maxLength)) return verification(false, true);
    if (value.length > max(maxLength)) return verification(false, false);
    return verification(true, true);
}
exports.cvv = cvv;

},{}],"1dvO8":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var creditCardType = __importStar(require("1d3e08c74e8c57b6"));
var cardholder_name_1 = require("6d5d9c2b8eef212");
var card_number_1 = require("12de689611a5b354");
var expiration_date_1 = require("53dbbc0eeef46d42");
var expiration_month_1 = require("3558029ddb7d8ac0");
var expiration_year_1 = require("900cc6d26d05f76f");
var cvv_1 = require("aea98623c473d5cc");
var postal_code_1 = require("db1a29fa06887272");
var cardValidator = {
    creditCardType: creditCardType,
    cardholderName: cardholder_name_1.cardholderName,
    number: card_number_1.cardNumber,
    expirationDate: expiration_date_1.expirationDate,
    expirationMonth: expiration_month_1.expirationMonth,
    expirationYear: expiration_year_1.expirationYear,
    cvv: cvv_1.cvv,
    postalCode: postal_code_1.postalCode
};
module.exports = cardValidator;

},{"1d3e08c74e8c57b6":"bfoG6","6d5d9c2b8eef212":"bAkQL","12de689611a5b354":"5ZDe5","53dbbc0eeef46d42":"gwVE0","3558029ddb7d8ac0":"9z72Q","900cc6d26d05f76f":"liFsO","aea98623c473d5cc":"hl7bb","db1a29fa06887272":"5ejfE"}],"bfoG6":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cardTypes = require("85712e0c1cba7199");
var add_matching_cards_to_results_1 = require("938b984176c9165c");
var is_valid_input_type_1 = require("47c8180a2047ef8e");
var find_best_match_1 = require("f8d0f39fb43c912b");
var clone_1 = require("cae954e0d0b5a14c");
var customCards = {};
var cardNames = {
    VISA: "visa",
    MASTERCARD: "mastercard",
    AMERICAN_EXPRESS: "american-express",
    DINERS_CLUB: "diners-club",
    DISCOVER: "discover",
    JCB: "jcb",
    UNIONPAY: "unionpay",
    MAESTRO: "maestro",
    ELO: "elo",
    MIR: "mir",
    HIPER: "hiper",
    HIPERCARD: "hipercard"
};
var ORIGINAL_TEST_ORDER = [
    cardNames.VISA,
    cardNames.MASTERCARD,
    cardNames.AMERICAN_EXPRESS,
    cardNames.DINERS_CLUB,
    cardNames.DISCOVER,
    cardNames.JCB,
    cardNames.UNIONPAY,
    cardNames.MAESTRO,
    cardNames.ELO,
    cardNames.MIR,
    cardNames.HIPER,
    cardNames.HIPERCARD
];
var testOrder = clone_1.clone(ORIGINAL_TEST_ORDER);
function findType(cardType) {
    return customCards[cardType] || cardTypes[cardType];
}
function getAllCardTypes() {
    return testOrder.map(function(cardType) {
        return clone_1.clone(findType(cardType));
    });
}
function getCardPosition(name, ignoreErrorForNotExisting) {
    if (ignoreErrorForNotExisting === void 0) ignoreErrorForNotExisting = false;
    var position = testOrder.indexOf(name);
    if (!ignoreErrorForNotExisting && position === -1) throw new Error('"' + name + '" is not a supported card type.');
    return position;
}
function creditCardType(cardNumber) {
    var results = [];
    if (!is_valid_input_type_1.isValidInputType(cardNumber)) return results;
    if (cardNumber.length === 0) return getAllCardTypes();
    testOrder.forEach(function(cardType) {
        var cardConfiguration = findType(cardType);
        add_matching_cards_to_results_1.addMatchingCardsToResults(cardNumber, cardConfiguration, results);
    });
    var bestMatch = find_best_match_1.findBestMatch(results);
    if (bestMatch) return [
        bestMatch
    ];
    return results;
}
creditCardType.getTypeInfo = function(cardType) {
    return clone_1.clone(findType(cardType));
};
creditCardType.removeCard = function(name) {
    var position = getCardPosition(name);
    testOrder.splice(position, 1);
};
creditCardType.addCard = function(config) {
    var existingCardPosition = getCardPosition(config.type, true);
    customCards[config.type] = config;
    if (existingCardPosition === -1) testOrder.push(config.type);
};
creditCardType.updateCard = function(cardType, updates) {
    var originalObject = customCards[cardType] || cardTypes[cardType];
    if (!originalObject) throw new Error('"' + cardType + "\" is not a recognized type. Use `addCard` instead.'");
    if (updates.type && originalObject.type !== updates.type) throw new Error("Cannot overwrite type parameter.");
    var clonedCard = clone_1.clone(originalObject);
    clonedCard = __assign(__assign({}, clonedCard), updates);
    customCards[clonedCard.type] = clonedCard;
};
creditCardType.changeOrder = function(name, position) {
    var currentPosition = getCardPosition(name);
    testOrder.splice(currentPosition, 1);
    testOrder.splice(position, 0, name);
};
creditCardType.resetModifications = function() {
    testOrder = clone_1.clone(ORIGINAL_TEST_ORDER);
    customCards = {};
};
creditCardType.types = cardNames;
module.exports = creditCardType;

},{"85712e0c1cba7199":"dSbPR","938b984176c9165c":"4fqpt","47c8180a2047ef8e":"8cWBU","f8d0f39fb43c912b":"gDRfn","cae954e0d0b5a14c":"debrE"}],"dSbPR":[function(require,module,exports) {
"use strict";
var cardTypes = {
    visa: {
        niceType: "Visa",
        type: "visa",
        patterns: [
            4
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            18,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    mastercard: {
        niceType: "Mastercard",
        type: "mastercard",
        patterns: [
            [
                51,
                55
            ],
            [
                2221,
                2229
            ],
            [
                223,
                229
            ],
            [
                23,
                26
            ],
            [
                270,
                271
            ],
            2720
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    "american-express": {
        niceType: "American Express",
        type: "american-express",
        patterns: [
            34,
            37
        ],
        gaps: [
            4,
            10
        ],
        lengths: [
            15
        ],
        code: {
            name: "CID",
            size: 4
        }
    },
    "diners-club": {
        niceType: "Diners Club",
        type: "diners-club",
        patterns: [
            [
                300,
                305
            ],
            36,
            38,
            39
        ],
        gaps: [
            4,
            10
        ],
        lengths: [
            14,
            16,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    discover: {
        niceType: "Discover",
        type: "discover",
        patterns: [
            6011,
            [
                644,
                649
            ],
            65
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            19
        ],
        code: {
            name: "CID",
            size: 3
        }
    },
    jcb: {
        niceType: "JCB",
        type: "jcb",
        patterns: [
            2131,
            1800,
            [
                3528,
                3589
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    unionpay: {
        niceType: "UnionPay",
        type: "unionpay",
        patterns: [
            620,
            [
                624,
                626
            ],
            [
                62100,
                62182
            ],
            [
                62184,
                62187
            ],
            [
                62185,
                62197
            ],
            [
                62200,
                62205
            ],
            [
                622010,
                622999
            ],
            622018,
            [
                622019,
                622999
            ],
            [
                62207,
                62209
            ],
            [
                622126,
                622925
            ],
            [
                623,
                626
            ],
            6270,
            6272,
            6276,
            [
                627700,
                627779
            ],
            [
                627781,
                627799
            ],
            [
                6282,
                6289
            ],
            6291,
            6292,
            810,
            [
                8110,
                8131
            ],
            [
                8132,
                8151
            ],
            [
                8152,
                8163
            ],
            [
                8164,
                8171
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            14,
            15,
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVN",
            size: 3
        }
    },
    maestro: {
        niceType: "Maestro",
        type: "maestro",
        patterns: [
            493698,
            [
                500000,
                504174
            ],
            [
                504176,
                506698
            ],
            [
                506779,
                508999
            ],
            [
                56,
                59
            ],
            63,
            67,
            6
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    elo: {
        niceType: "Elo",
        type: "elo",
        patterns: [
            401178,
            401179,
            438935,
            457631,
            457632,
            431274,
            451416,
            457393,
            504175,
            [
                506699,
                506778
            ],
            [
                509000,
                509999
            ],
            627780,
            636297,
            636368,
            [
                650031,
                650033
            ],
            [
                650035,
                650051
            ],
            [
                650405,
                650439
            ],
            [
                650485,
                650538
            ],
            [
                650541,
                650598
            ],
            [
                650700,
                650718
            ],
            [
                650720,
                650727
            ],
            [
                650901,
                650978
            ],
            [
                651652,
                651679
            ],
            [
                655000,
                655019
            ],
            [
                655021,
                655058
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVE",
            size: 3
        }
    },
    mir: {
        niceType: "Mir",
        type: "mir",
        patterns: [
            [
                2200,
                2204
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVP2",
            size: 3
        }
    },
    hiper: {
        niceType: "Hiper",
        type: "hiper",
        patterns: [
            637095,
            63737423,
            63743358,
            637568,
            637599,
            637609,
            637612
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    hipercard: {
        niceType: "Hipercard",
        type: "hipercard",
        patterns: [
            606282
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    }
};
module.exports = cardTypes;

},{}],"4fqpt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addMatchingCardsToResults = void 0;
var clone_1 = require("4ba80497c6ccd5d4");
var matches_1 = require("f863fee5bdc6faeb");
function addMatchingCardsToResults(cardNumber, cardConfiguration, results) {
    var i, patternLength;
    for(i = 0; i < cardConfiguration.patterns.length; i++){
        var pattern = cardConfiguration.patterns[i];
        if (!matches_1.matches(cardNumber, pattern)) continue;
        var clonedCardConfiguration = clone_1.clone(cardConfiguration);
        if (Array.isArray(pattern)) patternLength = String(pattern[0]).length;
        else patternLength = String(pattern).length;
        if (cardNumber.length >= patternLength) clonedCardConfiguration.matchStrength = patternLength;
        results.push(clonedCardConfiguration);
        break;
    }
}
exports.addMatchingCardsToResults = addMatchingCardsToResults;

},{"4ba80497c6ccd5d4":"debrE","f863fee5bdc6faeb":"6RvrK"}],"debrE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clone = void 0;
function clone(originalObject) {
    if (!originalObject) return null;
    return JSON.parse(JSON.stringify(originalObject));
}
exports.clone = clone;

},{}],"6RvrK":[function(require,module,exports) {
"use strict";
/*
 * Adapted from https://github.com/polvo-labs/card-type/blob/aaab11f80fa1939bccc8f24905a06ae3cd864356/src/cardType.js#L37-L42
 * */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matches = void 0;
function matchesRange(cardNumber, min, max) {
    var maxLengthToCheck = String(min).length;
    var substr = cardNumber.substr(0, maxLengthToCheck);
    var integerRepresentationOfCardNumber = parseInt(substr, 10);
    min = parseInt(String(min).substr(0, substr.length), 10);
    max = parseInt(String(max).substr(0, substr.length), 10);
    return integerRepresentationOfCardNumber >= min && integerRepresentationOfCardNumber <= max;
}
function matchesPattern(cardNumber, pattern) {
    pattern = String(pattern);
    return pattern.substring(0, cardNumber.length) === cardNumber.substring(0, pattern.length);
}
function matches(cardNumber, pattern) {
    if (Array.isArray(pattern)) return matchesRange(cardNumber, pattern[0], pattern[1]);
    return matchesPattern(cardNumber, pattern);
}
exports.matches = matches;

},{}],"8cWBU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidInputType = void 0;
function isValidInputType(cardNumber) {
    return typeof cardNumber === "string" || cardNumber instanceof String;
}
exports.isValidInputType = isValidInputType;

},{}],"gDRfn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findBestMatch = void 0;
function hasEnoughResultsToDetermineBestMatch(results) {
    var numberOfResultsWithMaxStrengthProperty = results.filter(function(result) {
        return result.matchStrength;
    }).length;
    /*
     * if all possible results have a maxStrength property that means the card
     * number is sufficiently long enough to determine conclusively what the card
     * type is
     * */ return numberOfResultsWithMaxStrengthProperty > 0 && numberOfResultsWithMaxStrengthProperty === results.length;
}
function findBestMatch(results) {
    if (!hasEnoughResultsToDetermineBestMatch(results)) return null;
    return results.reduce(function(bestMatch, result) {
        if (!bestMatch) return result;
        /*
         * If the current best match pattern is less specific than this result, set
         * the result as the new best match
         * */ if (Number(bestMatch.matchStrength) < Number(result.matchStrength)) return result;
        return bestMatch;
    });
}
exports.findBestMatch = findBestMatch;

},{}],"bAkQL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cardholderName = void 0;
var CARD_NUMBER_REGEX = /^[\d\s-]*$/;
var MAX_LENGTH = 255;
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function cardholderName(value) {
    if (typeof value !== "string") return verification(false, false);
    if (value.length === 0) return verification(false, true);
    if (value.length > MAX_LENGTH) return verification(false, false);
    if (CARD_NUMBER_REGEX.test(value)) return verification(false, true);
    return verification(true, true);
}
exports.cardholderName = cardholderName;

},{}],"5ZDe5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cardNumber = void 0;
var luhn10 = require("b76f36fc6ea6b135");
var getCardTypes = require("57979caee5e93b86");
function verification(card, isPotentiallyValid, isValid) {
    return {
        card: card,
        isPotentiallyValid: isPotentiallyValid,
        isValid: isValid
    };
}
function cardNumber(value, options) {
    if (options === void 0) options = {};
    var isPotentiallyValid, isValid, maxLength;
    if (typeof value !== "string" && typeof value !== "number") return verification(null, false, false);
    var testCardValue = String(value).replace(/-|\s/g, "");
    if (!/^\d*$/.test(testCardValue)) return verification(null, false, false);
    var potentialTypes = getCardTypes(testCardValue);
    if (potentialTypes.length === 0) return verification(null, false, false);
    else if (potentialTypes.length !== 1) return verification(null, true, false);
    var cardType = potentialTypes[0];
    if (options.maxLength && testCardValue.length > options.maxLength) return verification(cardType, false, false);
    if (options.skipLuhnValidation === true || cardType.type === getCardTypes.types.UNIONPAY && options.luhnValidateUnionPay !== true) isValid = true;
    else isValid = luhn10(testCardValue);
    maxLength = Math.max.apply(null, cardType.lengths);
    if (options.maxLength) maxLength = Math.min(options.maxLength, maxLength);
    for(var i = 0; i < cardType.lengths.length; i++)if (cardType.lengths[i] === testCardValue.length) {
        isPotentiallyValid = testCardValue.length < maxLength || isValid;
        return verification(cardType, isPotentiallyValid, isValid);
    }
    return verification(cardType, testCardValue.length < maxLength, false);
}
exports.cardNumber = cardNumber;

},{"b76f36fc6ea6b135":"5vhkk","57979caee5e93b86":"bfoG6"}],"5vhkk":[function(require,module,exports) {
/* eslint-disable */ /*
 * Luhn algorithm implementation in JavaScript
 * Copyright (c) 2009 Nicholas C. Zakas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ "use strict";
function luhn10(identifier) {
    var sum = 0;
    var alt = false;
    var i = identifier.length - 1;
    var num;
    while(i >= 0){
        num = parseInt(identifier.charAt(i), 10);
        if (alt) {
            num *= 2;
            if (num > 9) num = num % 10 + 1; // eslint-disable-line no-extra-parens
        }
        alt = !alt;
        sum += num;
        i--;
    }
    return sum % 10 === 0;
}
module.exports = luhn10;

},{}],"gwVE0":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationDate = void 0;
var parse_date_1 = require("5c5d87ca73cc3887");
var expiration_month_1 = require("42c778c88cc7c395");
var expiration_year_1 = require("d3b08b7a0eece1a6");
function verification(isValid, isPotentiallyValid, month, year) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        month: month,
        year: year
    };
}
function expirationDate(value, maxElapsedYear) {
    var date;
    if (typeof value === "string") {
        value = value.replace(/^(\d\d) (\d\d(\d\d)?)$/, "$1/$2");
        date = (0, parse_date_1.parseDate)(String(value));
    } else if (value !== null && typeof value === "object") {
        var fullDate = __assign({}, value);
        date = {
            month: String(fullDate.month),
            year: String(fullDate.year)
        };
    } else return verification(false, false, null, null);
    var monthValid = (0, expiration_month_1.expirationMonth)(date.month);
    var yearValid = (0, expiration_year_1.expirationYear)(date.year, maxElapsedYear);
    if (monthValid.isValid) {
        if (yearValid.isCurrentYear) {
            var isValidForThisYear = monthValid.isValidForThisYear;
            return verification(isValidForThisYear, isValidForThisYear, date.month, date.year);
        }
        if (yearValid.isValid) return verification(true, true, date.month, date.year);
    }
    if (monthValid.isPotentiallyValid && yearValid.isPotentiallyValid) return verification(false, true, null, null);
    return verification(false, false, null, null);
}
exports.expirationDate = expirationDate;

},{"5c5d87ca73cc3887":"dNsIu","42c778c88cc7c395":"9z72Q","d3b08b7a0eece1a6":"liFsO"}],"dNsIu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseDate = void 0;
var expiration_year_1 = require("c88724e2b0e48bb");
var is_array_1 = require("6021106b5fe9a350");
function getNumberOfMonthDigitsInDateString(dateString) {
    var firstCharacter = Number(dateString[0]);
    var assumedYear;
    /*
      if the first character in the string starts with `0`,
      we know that the month will be 2 digits.
  
      '0122' => {month: '01', year: '22'}
    */ if (firstCharacter === 0) return 2;
    /*
      if the first character in the string starts with
      number greater than 1, it must be a 1 digit month
  
      '322' => {month: '3', year: '22'}
    */ if (firstCharacter > 1) return 1;
    /*
      if the first 2 characters make up a number between
      13-19, we know that the month portion must be 1
  
      '139' => {month: '1', year: '39'}
    */ if (firstCharacter === 1 && Number(dateString[1]) > 2) return 1;
    /*
      if the first 2 characters make up a number between
      10-12, we check if the year portion would be considered
      valid if we assumed that the month was 1. If it is
      not potentially valid, we assume the month must have
      2 digits.
  
      '109' => {month: '10', year: '9'}
      '120' => {month: '1', year: '20'} // when checked in the year 2019
      '120' => {month: '12', year: '0'} // when checked in the year 2021
    */ if (firstCharacter === 1) {
        assumedYear = dateString.substr(1);
        return (0, expiration_year_1.expirationYear)(assumedYear).isPotentiallyValid ? 1 : 2;
    }
    /*
      If the length of the value is exactly 5 characters,
      we assume a full year was passed in, meaning the remaining
      single leading digit must be the month value.
  
      '12202' => {month: '1', year: '2202'}
    */ if (dateString.length === 5) return 1;
    /*
      If the length of the value is more than five characters,
      we assume a full year was passed in addition to the month
      and therefore the month portion must be 2 digits.
  
      '112020' => {month: '11', year: '2020'}
    */ if (dateString.length > 5) return 2;
    /*
      By default, the month value is the first value
    */ return 1;
}
function parseDate(datestring) {
    var date;
    if (/^\d{4}-\d{1,2}$/.test(datestring)) date = datestring.split("-").reverse();
    else if (/\//.test(datestring)) date = datestring.split(/\s*\/\s*/g);
    else if (/\s/.test(datestring)) date = datestring.split(/ +/g);
    if ((0, is_array_1.isArray)(date)) return {
        month: date[0] || "",
        year: date.slice(1).join()
    };
    var numberOfDigitsInMonth = getNumberOfMonthDigitsInDateString(datestring);
    var month = datestring.substr(0, numberOfDigitsInMonth);
    return {
        month: month,
        year: datestring.substr(month.length)
    };
}
exports.parseDate = parseDate;

},{"c88724e2b0e48bb":"liFsO","6021106b5fe9a350":"4eFPr"}],"liFsO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationYear = void 0;
var DEFAULT_VALID_NUMBER_OF_YEARS_IN_THE_FUTURE = 19;
function verification(isValid, isPotentiallyValid, isCurrentYear) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        isCurrentYear: isCurrentYear || false
    };
}
function expirationYear(value, maxElapsedYear) {
    if (maxElapsedYear === void 0) maxElapsedYear = DEFAULT_VALID_NUMBER_OF_YEARS_IN_THE_FUTURE;
    var isCurrentYear;
    if (typeof value !== "string") return verification(false, false);
    if (value.replace(/\s/g, "") === "") return verification(false, true);
    if (!/^\d*$/.test(value)) return verification(false, false);
    var len = value.length;
    if (len < 2) return verification(false, true);
    var currentYear = new Date().getFullYear();
    if (len === 3) {
        // 20x === 20x
        var firstTwo = value.slice(0, 2);
        var currentFirstTwo = String(currentYear).slice(0, 2);
        return verification(false, firstTwo === currentFirstTwo);
    }
    if (len > 4) return verification(false, false);
    var numericValue = parseInt(value, 10);
    var twoDigitYear = Number(String(currentYear).substr(2, 2));
    var valid = false;
    if (len === 2) {
        if (String(currentYear).substr(0, 2) === value) return verification(false, true);
        isCurrentYear = twoDigitYear === numericValue;
        valid = numericValue >= twoDigitYear && numericValue <= twoDigitYear + maxElapsedYear;
    } else if (len === 4) {
        isCurrentYear = currentYear === numericValue;
        valid = numericValue >= currentYear && numericValue <= currentYear + maxElapsedYear;
    }
    return verification(valid, valid, isCurrentYear);
}
exports.expirationYear = expirationYear;

},{}],"4eFPr":[function(require,module,exports) {
"use strict";
// Polyfill taken from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill>.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArray = void 0;
exports.isArray = Array.isArray || function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
};

},{}],"9z72Q":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationMonth = void 0;
function verification(isValid, isPotentiallyValid, isValidForThisYear) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        isValidForThisYear: isValidForThisYear || false
    };
}
function expirationMonth(value) {
    var currentMonth = new Date().getMonth() + 1;
    if (typeof value !== "string") return verification(false, false);
    if (value.replace(/\s/g, "") === "" || value === "0") return verification(false, true);
    if (!/^\d*$/.test(value)) return verification(false, false);
    var month = parseInt(value, 10);
    if (isNaN(Number(value))) return verification(false, false);
    var result = month > 0 && month < 13;
    return verification(result, result, result && month >= currentMonth);
}
exports.expirationMonth = expirationMonth;

},{}],"5ejfE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postalCode = void 0;
var DEFAULT_MIN_POSTAL_CODE_LENGTH = 3;
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function postalCode(value, options) {
    if (options === void 0) options = {};
    var minLength = options.minLength || DEFAULT_MIN_POSTAL_CODE_LENGTH;
    if (typeof value !== "string") return verification(false, false);
    else if (value.length < minLength) return verification(false, true);
    return verification(true, true);
}
exports.postalCode = postalCode;

},{}],"gi6bx":[function(require,module,exports) {
"use strict";
var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
exports.validate = function(email) {
    if (!email) return false;
    if (email.length > 254) return false;
    var valid = tester.test(email);
    if (!valid) return false;
    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if (parts[0].length > 64) return false;
    var domainParts = parts[1].split(".");
    if (domainParts.some(function(part) {
        return part.length > 63;
    })) return false;
    return true;
};

},{}]},["6DoTH","adjPd"], "adjPd", "parcelRequire496d")

//# sourceMappingURL=index.63aff760.js.map
