import {
  LoginComponent
} from "./chunk-RMSRX2PI.js";
import {
  GameCmsService
} from "./chunk-YQS7B7N5.js";
import "./chunk-QSOTGL7G.js";
import {
  CashierService
} from "./chunk-FQIESEDM.js";
import "./chunk-PYDFV3LO.js";
import {
  CommonUtilService
} from "./chunk-BI23JTGF.js";
import {
  MessageService
} from "./chunk-YCU5ZQFP.js";
import "./chunk-PDHHGWHH.js";
import {
  PlayerService,
  ResetState
} from "./chunk-HXFVUPJ2.js";
import {
  FormsModule
} from "./chunk-FAEKDNT6.js";
import "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-S5ZOBF7L.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ComponentFactoryResolver$1,
  HostListener,
  ViewChild,
  ViewContainerRef,
  debounceTime,
  fromEvent,
  setClassMetadata,
  timer,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-J735AYEO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EAJ6W5YO.js";

// node_modules/swiper/shared/ssr-window.esm.mjs
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent2() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}

// node_modules/swiper/shared/utils.mjs
function classesToTokens(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return classes2.trim().split(" ").filter((c) => !!c.trim());
}
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle2(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle2(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject2(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  const window2 = getWindow();
  const children = [...element.children];
  if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter((el) => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
  }
}
function elementIsChildOf(el, parent) {
  const window2 = getWindow();
  let isChild = parent.contains(el);
  if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
  }
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
  return el;
}
function elementOffset(el) {
  const window2 = getWindow();
  const document2 = getDocument();
  const box = el.getBoundingClientRect();
  const body = document2.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
  const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  if (includeMargins) {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
}
function getRotateFix(swiper) {
  return (v) => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 1e-3;
    }
    return v;
  };
}
function setInnerHTML(el, html) {
  if (html === void 0) {
    html = "";
  }
  if (typeof trustedTypes !== "undefined") {
    el.innerHTML = trustedTypes.createPolicy("html", {
      createHTML: (s) => s
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}

// node_modules/swiper/shared/swiper-core.mjs
var support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
var deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
var browser;
function calcBrowser() {
  const window2 = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach((_ref2) => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function(target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event2) => {
      if (!self.eventsListeners[event2]) self.eventsListeners[event2] = [];
      self.eventsListeners[event2][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events2.split(" ").forEach((event2) => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event2] = [];
      } else if (self.eventsListeners[event2]) {
        self.eventsListeners[event2].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event2].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event2) => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event2, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event2]) {
        self.eventsListeners[event2].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i]) slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slides);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit("slidesUpdated");
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
var toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
var toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
      nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
      prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach((slideEl) => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}
var processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
var unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
var preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
  else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";
    else if (activeIndex < previousIndex) dir = "prev";
    else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === "reset") {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";
  else if (slideIndex < activeIndex) direction = "prev";
  else direction = "reset";
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  const browser2 = getBrowser();
  const isSafari = browser2.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === "next" ? swiper.realIndex : void 0
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute("data-swiper-slide-index", index);
    });
  };
  const clearBlankSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach((el) => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = (amountOfSlides) => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next",
    initial
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    initial,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    initialSlide
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === "auto") {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
  } else if (gridEnabled && params.grid.fill === "row") {
    showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
          if (slides[i2].column === colIndexToPrepend) prependSlidesIndexes.push(i2);
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide2, slideIndex) => {
          if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide2, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate2) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c) => {
        if (!c.destroyed && c.params.loop) c.loopFix(__spreadProps(__spreadValues({}, loopParams), {
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        }));
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix(__spreadProps(__spreadValues({}, loopParams), {
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      }));
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event2, startX) {
  const window2 = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event2.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event2) {
  const swiper = this;
  const document2 = getDocument();
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === "pointerdown") {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === "touchstart") {
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event2) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event2.pointerType === "mouse") return;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === "pointermove") {
    if (data.touchId !== null) return;
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === "touchmove") {
    targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
    document2.activeElement.blur();
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  (/* @__PURE__ */ new Date()).getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event2) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
  if (!isTouchEvent) {
    if (data.touchId !== null) return;
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = "auto";
  }
}
var events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  if (!el || typeof el === "string") return;
  document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]("touchstart", swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("touchmove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("touchend", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("touchcancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
var isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const document2 = getDocument();
  const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
  const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend2(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === "string") return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: "swiper",
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend2(allModulesParams, obj);
  };
}
var prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
var extendedDefaults = {};
var Swiper = class _Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend2({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend2({}, params, {
          el: containerEl
        });
        swipers.push(new _Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend2({}, defaults, allModulesParams);
    swiper.params = extend2({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend2({}, swiper.params);
    swiper.passedParams = extend2({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === "column") {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === "row") {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate(void 0, true);
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e) => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== "string") {
        el.removeAttribute("style");
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute("style");
      }
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend2(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
    const modules2 = _Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules2.indexOf(mod) < 0) {
      modules2.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => _Swiper.installModule(m));
      return _Swiper;
    }
    _Swiper.installModule(module);
    return _Swiper;
  }
};
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

// node_modules/swiper/modules/virtual.mjs
function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document2 = getDocument();
  swiper.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document2.createElement("div");
  function renderSlide(slide2, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide2, index);
      if (typeof slideEl === "string") {
        setInnerHTML(tempDOM, slideEl);
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = createElement("swiper-slide");
    } else {
      slideEl = createElement("div", swiper.params.slideClass);
    }
    slideEl.setAttribute("data-swiper-slide-index", index);
    if (!params.renderSlide) {
      setInnerHTML(slideEl, slide2);
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update2(force, beforeInit, forceActiveIndex) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = typeof forceActiveIndex === "undefined" ? swiper.activeIndex || 0 : forceActiveIndex;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = "right";
    else offsetProp = swiper.isHorizontal() ? "left" : "top";
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit("virtualUpdate");
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach((slideEl) => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit("virtualUpdate");
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: (function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        })()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit("virtualUpdate");
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = (index) => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach((slideEl) => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach((slideEl) => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === "undefined" || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach((index) => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach((index) => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide2(slides) {
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update2(true);
  }
  function prependSlide2(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach((cachedIndex) => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
        if (cachedElIndex) {
          cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update2(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide2(slidesIndexes) {
    if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          Object.keys(swiper.virtual.cache).forEach((key) => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        Object.keys(swiper.virtual.cache).forEach((key) => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update2(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides2() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update2(true);
    swiper.slideTo(0, 0);
  }
  on("beforeInit", () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === "undefined") {
      const slides = [...swiper.slidesEl.children].filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute("data-swiper-slide-index", slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update2(false, true);
  });
  on("setTranslate", () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update2();
      }, 100);
    } else {
      update2();
    }
  });
  on("init update resize", () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide: appendSlide2,
    prependSlide: prependSlide2,
    removeSlide: removeSlide2,
    removeAllSlides: removeAllSlides2,
    update: update2
  });
}

// node_modules/swiper/modules/keyboard.mjs
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  const window2 = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event2) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return void 0;
    }
    if (document2.activeElement && (document2.activeElement.isContentEditable || document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea"))) {
      return void 0;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return void 0;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window2.innerWidth;
      const windowHeight = window2.innerHeight;
      const swiperOffset = elementOffset(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue;
          inView = true;
        }
      }
      if (!inView) return void 0;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit("keyPress", kc);
    return void 0;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document2.addEventListener("keydown", handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document2.removeEventListener("keydown", handle);
    swiper.keyboard.enabled = false;
  }
  on("init", () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on("destroy", () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

// node_modules/swiper/modules/mousewheel.mjs
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit("scroll", newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit("scroll", newEvent.raw);
    }
    lastScrollTime = new window2.Date().getTime();
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  }
  function handle(event2) {
    let e = event2;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? "next" : "prev",
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          clearTimeout(timeout);
          timeout = void 0;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!timeout) {
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) emit("scroll", e);
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  }
  function events2(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]("mouseenter", handleMouseEnter);
    targetEl[method]("mouseleave", handleMouseLeave);
    targetEl[method]("wheel", handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener("wheel", handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events2("addEventListener");
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events2("removeEventListener");
    swiper.mousewheel.enabled = false;
    return true;
  }
  on("init", () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on("destroy", () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

// node_modules/swiper/shared/create-element-if-not-defined.mjs
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}

// node_modules/swiper/modules/navigation.mjs
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === "string") res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update2();
      return;
    }
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}

// node_modules/swiper/shared/classes-to-selector.mjs
function classesToSelector(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return `.${classes2.trim().replace(/([\.:!+\/()[\]])/g, "\\$1").replace(/ /g, ".")}`;
}

// node_modules/swiper/modules/pagination.mjs
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return "next";
    } else if (nextIndex === prevIndex - 1) {
      return "previous";
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === "next") {
        swiper.slideNext();
      } else if (moveDirection === "previous") {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update2() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach((bulletEl) => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          } else if (swiper.isElement) {
            bullet.setAttribute("part", "bullet");
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));
        if (subElIndex === 0) emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0) emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach((subEl) => {
      if (params.type !== "custom") {
        setInnerHTML(subEl, paginationHTML || "");
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.find((subEl) => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
          return true;
        });
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(...(params.clickableClass || "").split(" "));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || "").split(" "));
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update2();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update2();
    }
  });
  on("snapIndexChange", () => {
    update2();
  });
  on("snapGridLengthChange", () => {
    render();
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update2();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update: update2,
    init,
    destroy
  });
}

// node_modules/swiper/modules/scrollbar.mjs
function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
  }
  function setTransition2(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = "";
    dragEl.style.height = "";
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === "auto") {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = "100ms";
    dragEl.style.transitionDuration = "100ms";
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = "0ms";
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "none";
    }
    emit("scrollbarDragStart", e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();
    else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = "0ms";
    el.style.transitionDuration = "0ms";
    dragEl.style.transitionDuration = "0ms";
    emit("scrollbarDragMove", e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "";
      wrapperEl.style.transitionDuration = "";
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
    emit("scrollbarDragEnd", e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events2(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    target[eventMethod]("pointerdown", onDragStart, activeListener);
    document2[eventMethod]("pointermove", onDragMove, activeListener);
    document2[eventMethod]("pointerup", onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events2("on");
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events2("off");
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = document2.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = createElement("div", swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on("changeDirection", () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.scrollbar.enabled === false) {
      disable();
    } else {
      init();
      updateSize2();
      setTranslate2();
    }
  });
  on("update resize observerUpdate lock unlock changeDirection", () => {
    updateSize2();
  });
  on("setTranslate", () => {
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    setTransition2(duration);
  });
  on("enable disable", () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  });
  on("destroy", () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize2();
    setTranslate2();
  };
  const disable = () => {
    swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize: updateSize2,
    setTranslate: setTranslate2,
    init,
    destroy
  });
}

// node_modules/swiper/modules/parallax.mjs
function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute("data-swiper-parallax") || "0";
    let x = el.getAttribute("data-swiper-parallax-x");
    let y = el.getAttribute("data-swiper-parallax-y");
    const scale = el.getAttribute("data-swiper-parallax-scale");
    const opacity = el.getAttribute("data-swiper-parallax-opacity");
    const rotate = el.getAttribute("data-swiper-parallax-rotate");
    if (x || y) {
      x = x || "0";
      y = y || "0";
    } else if (swiper.isHorizontal()) {
      x = p;
      y = "0";
    } else {
      y = p;
      x = "0";
    }
    if (x.indexOf("%") >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf("%") >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== "undefined" && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== "undefined" && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== "undefined" && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate2 = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = elementChildren(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...elementChildren(swiper.hostEl, elementsSelector));
    }
    elements.forEach((subEl) => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl) => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition2 = function(duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach((parallaxEl) => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on("beforeInit", () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on("init", () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate2();
  });
  on("setTranslate", () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate2();
  });
  on("setTransition", (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition2(duration);
  });
}

// node_modules/swiper/modules/zoom.mjs
function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: false,
      toggle: true,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let isPanningWithMouse = false;
  let mousePanStart = {
    x: 0,
    y: 0
  };
  const mousePanSensitivity = -3;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  };
  const image = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, "scale", {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit("zoomChange", value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter((slideEl) => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function onGestureStart(e) {
    if (e.pointerType === "mouse") {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = void 0;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = "0ms";
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === "mouse" && e.type === "pointerout") return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = void 0;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      if (swiper.destroyed) return;
      allowTouchMove();
    });
  }
  function onTouchStart2(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event2 = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event2.pageX;
    image.touchesStart.y = event2.pageY;
  }
  function onTouchMove2(e) {
    const isMouseEvent = e.pointerType === "mouse";
    const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      if (isMousePan) onMouseMove(e);
      return;
    }
    if (isMousePan) {
      onMouseMove(e);
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
      image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = "0ms";
    }
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd2() {
    const zoom = swiper.zoom;
    evCache.length = 0;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = void 0;
      gesture.imageEl = void 0;
      gesture.imageWrapEl = void 0;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function onMouseMove(e) {
    if (currentScale <= 1 || !gesture.imageWrapEl) return;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const currentTransform = window2.getComputedStyle(gesture.imageWrapEl).transform;
    const matrix = new window2.DOMMatrix(currentTransform);
    if (!isPanningWithMouse) {
      isPanningWithMouse = true;
      mousePanStart.x = e.clientX;
      mousePanStart.y = e.clientY;
      image.startX = matrix.e;
      image.startY = matrix.f;
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      return;
    }
    const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
    const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
    const scaledWidth = image.width * currentScale;
    const scaledHeight = image.height * currentScale;
    const slideWidth = gesture.slideWidth;
    const slideHeight = gesture.slideHeight;
    const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
    const maxX = -minX;
    const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
    const maxY = -minY;
    const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
    const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
    gesture.imageWrapEl.style.transitionDuration = "0ms";
    gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    mousePanStart.x = e.clientX;
    mousePanStart.y = e.clientY;
    image.startX = newX;
    image.startY = newY;
    image.currentX = newX;
    image.currentY = newY;
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.touchAction = "none";
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === "undefined" && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const prevScale = currentScale;
    const forceZoomRatio = typeof e === "number" ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = void 0;
      touchY = void 0;
      image.touchesStart.x = void 0;
      image.touchesStart.y = void 0;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = elementOffset(gesture.slideEl).left + window2.scrollX;
      offsetY = elementOffset(gesture.slideEl).top + window2.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      if (prevScale > 0 && forceZoomRatio && typeof image.currentX === "number" && typeof image.currentY === "number") {
        translateX = image.currentX * zoom.scale / prevScale;
        translateY = image.currentY * zoom.scale / prevScale;
      } else {
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
      }
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    image.currentX = translateX;
    image.currentY = translateY;
    gesture.imageWrapEl.style.transitionDuration = "300ms";
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = "300ms";
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = "";
      swiper.wrapperEl.style.touchAction = "";
    }
    zoom.scale = 1;
    currentScale = 1;
    image.currentX = void 0;
    image.currentY = void 0;
    image.touchesStart.x = void 0;
    image.touchesStart.y = void 0;
    gesture.imageWrapEl.style.transitionDuration = "300ms";
    gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
    gesture.imageEl.style.transitionDuration = "300ms";
    gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = void 0;
    gesture.originX = 0;
    gesture.originY = 0;
    if (swiper.params.zoom.panOnMouseMove) {
      mousePanStart = {
        x: 0,
        y: 0
      };
      if (isPanningWithMouse) {
        isPanningWithMouse = false;
        image.startX = 0;
        image.startY = 0;
      }
    }
  }
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      zoomOut();
    } else {
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
    ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });
    swiper.wrapperEl.addEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
    ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });
    swiper.wrapperEl.removeEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
  }
  on("init", () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on("destroy", () => {
    disable();
  });
  on("touchStart", (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart2(e);
  });
  on("touchEnd", (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd2();
  });
  on("doubleTap", (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on("transitionEnd", () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on("slideChange", () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

// node_modules/swiper/modules/controller.mjs
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: void 0,
      inverse: false,
      by: "slide"
      // or 'container'
    }
  });
  swiper.controller = {
    control: void 0
  };
  function LinearSpline(x, y) {
    const binarySearch = /* @__PURE__ */ (function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    })();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate2(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper2 = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;
      const translate2 = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === "slide") {
        getInterpolateFunction(c);
        controlledTranslate = -swiper.controller.spline.interpolate(-translate2);
      }
      if (!controlledTranslate || swiper.params.controller.by === "container") {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate2 - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition2(duration, byController) {
    const Swiper2 = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }
        elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = void 0;
      delete swiper.controller.spline;
    }
  }
  on("beforeInit", () => {
    if (typeof window !== "undefined" && // eslint-disable-line
    (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === "string" ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach((controlElement) => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = (e) => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on("update", () => {
    removeSpline();
  });
  on("resize", () => {
    removeSpline();
  });
  on("observerUpdate", () => {
    removeSpline();
  });
  on("setTranslate", (_s, translate2, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate2, byController);
  });
  on("setTransition", (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate: setTranslate2,
    setTransition: setTransition2
  });
}

// node_modules/swiper/modules/a11y.mjs
function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: true
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    setInnerHTML(notification, message);
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("tabIndex", "0");
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("tabIndex", "-1");
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("role", role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-roledescription", description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-controls", controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-label", label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("id", id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-live", live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-disabled", true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-disabled", false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = makeElementsArray(swiper.navigation.prevEl);
      const nextEls = makeElementsArray(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach((bulletEl) => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, "button");
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
        }
      }
      if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute("aria-current", "true");
      } else {
        bulletEl.removeAttribute("aria-current");
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== "BUTTON") {
      addElRole(el, "button");
      el.addEventListener("keydown", onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = (e) => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = (e) => {
    visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
  };
  const handleFocus = (e) => {
    if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
    if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute("data-swiper-slide-index"))), 0);
      } else {
        swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    if (params.containerRole) {
      addElRole(containerEl, params.containerRole);
    }
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);
    initSlides();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
    }
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach((el) => {
        el.addEventListener("keydown", onEnterOrSpaceKey);
      });
    }
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
    swiper.el.addEventListener("focus", handleFocus, true);
    swiper.el.addEventListener("focus", handleFocus, true);
    swiper.el.addEventListener("pointerdown", handlePointerDown, true);
    swiper.el.addEventListener("pointerup", handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
    }
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach((el) => {
        el.removeEventListener("keydown", onEnterOrSpaceKey);
      });
    }
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("focus", handleFocus, true);
      swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
      swiper.el.removeEventListener("pointerup", handlePointerUp, true);
    }
  }
  on("beforeInit", () => {
    liveRegion = createElement("span", swiper.params.a11y.notificationClass);
    liveRegion.setAttribute("aria-live", "assertive");
    liveRegion.setAttribute("aria-atomic", "true");
  });
  on("afterInit", () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on("fromEdge toEdge afterInit lock unlock", () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on("paginationUpdate", () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on("destroy", () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

// node_modules/swiper/modules/history.mjs
function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: "",
      replaceState: false,
      key: "slides",
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = (text) => {
    return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  };
  const getPathValues = (urlOverride) => {
    const window2 = getWindow();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window2.location;
    }
    const pathArray = location.pathname.slice(1).split("/").filter((part) => part !== "");
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window2 = getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window2.location;
    }
    const slide2 = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide2.getAttribute("data-history"));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ""}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ""}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window2.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window2.history.replaceState({
        value
      }, null, value);
    } else {
      window2.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide2 = swiper.slides[i];
        const slideHistory = slugify(slide2.getAttribute("data-history"));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide2);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window2 = getWindow();
    if (!swiper.params.history) return;
    if (!window2.history || !window2.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window2.addEventListener("popstate", setHistoryPopState);
    }
  };
  const destroy = () => {
    const window2 = getWindow();
    if (!swiper.params.history.replaceState) {
      window2.removeEventListener("popstate", setHistoryPopState);
    }
  };
  on("init", () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on("destroy", () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on("transitionEnd _freeModeNoMomentumRelease", () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on("slideChange", () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

// node_modules/swiper/modules/hash-navigation.mjs
function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document2 = getDocument();
  const window2 = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.find((slideEl) => slideEl.getAttribute("data-hash") === hash);
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
          return index;
        }
        return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit("hashChange");
    const newHash = document2.location.hash.replace("#", "");
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
    if (swiper.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
      window2.history.replaceState(null, null, `#${activeSlideHash}` || "");
      emit("hashSet");
    } else {
      document2.location.hash = activeSlideHash || "";
      emit("hashSet");
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document2.location.hash.replace("#", "");
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window2.addEventListener("hashchange", onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window2.removeEventListener("hashchange", onHashChange);
    }
  };
  on("init", () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on("destroy", () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on("transitionEnd _freeModeNoMomentumRelease", () => {
    if (initialized) {
      setHash();
    }
  });
  on("slideChange", () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

// node_modules/swiper/modules/autoplay.mjs
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains("swiper-slide-active"));
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("pointerenter", onPointerEnter);
      swiper.el.removeEventListener("pointerleave", onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("_freeModeStaticRelease", () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on("_freeModeNoMomentumRelease", () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}

// node_modules/swiper/modules/thumbs.mjs
function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      if (thumbsParams.swiper.destroyed) {
        initialized = false;
        return false;
      }
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (isObject2(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on("tap", onThumbClick);
    return true;
  }
  function update2(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl) => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`);
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
      }
      if (useOffset) {
        newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
      }
    }
  }
  on("beforeInit", () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
      const document2 = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update2(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = (e) => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update2(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update2(true);
    }
  });
  on("slideChange update resize observerUpdate", () => {
    update2();
  });
  on("setTransition", (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on("beforeDestroy", () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update: update2
  });
}

// node_modules/swiper/modules/free-mode.mjs
function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart2() {
    if (swiper.params.cssMode) return;
    const translate2 = swiper.getTranslate();
    swiper.setTranslate(translate2);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove2() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "startX" : "startY"],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
      time: now()
    });
  }
  function onTouchEnd2(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1e3 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once("transitionEnd", () => {
          swiper.loopFix();
        });
      }
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        elementTransitionEnd(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit("momentumBounce");
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit("_freeModeNoMomentumRelease");
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit("_freeModeNoMomentumRelease");
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit("_freeModeStaticRelease");
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart: onTouchStart2,
      onTouchMove: onTouchMove2,
      onTouchEnd: onTouchEnd2
    }
  });
}

// node_modules/swiper/modules/grid.mjs
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = (slides) => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== "auto" && fill === "row") {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach((slide2) => {
        if (slide2.swiperSlideGridSet) {
          slide2.style.height = "";
          slide2.style[swiper.getDirectionLabel("margin-top")] = "";
        }
      });
    }
  };
  const updateSlide = (i, slide2, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === "row" && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide2.style.order = newSlideOrderIndex;
    } else if (fill === "column") {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide2.row = row;
    slide2.column = column;
    slide2.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide2.style[swiper.getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
    slide2.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on("init", onInit);
  on("update", onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}

// node_modules/swiper/modules/manipulation.mjs
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = (slideEl) => {
    if (typeof slideEl === "string") {
      const tempDOM = document.createElement("div");
      setInnerHTML(tempDOM, slideEl);
      slidesEl.append(tempDOM.children[0]);
      setInnerHTML(tempDOM, "");
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = (slideEl) => {
    if (typeof slideEl === "string") {
      const tempDOM = document.createElement("div");
      setInnerHTML(tempDOM, slideEl);
      slidesEl.prepend(tempDOM.children[0]);
      setInnerHTML(tempDOM, "");
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}
function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}

// node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate _virtualUpdated", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition2(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate2();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

// node_modules/swiper/shared/effect-target.mjs
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}

// node_modules/swiper/shared/effect-virtual-transition-end.mjs
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide2 = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide2;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

// node_modules/swiper/modules/effect-fade.mjs
function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate2 = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "fade",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-cube.mjs
function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" "));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" "));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach((slideEl) => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate2 = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser: browser2
    } = swiper;
    const r = getRotateFix(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser2.isSafari || browser2.isWebView) && browser2.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
  };
  const setTransition2 = (duration) => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach((slideEl) => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector(".swiper-cube-shadow");
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  effectInit({
    effect: "cube",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}

// node_modules/swiper/shared/create-shadow.mjs
function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  if (!shadowEl) {
    shadowEl = createElement("div", shadowClass.split(" "));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}

// node_modules/swiper/modules/effect-flip.mjs
function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
    }
    if (!shadowAfter) {
      shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    swiper.params.flipEffect;
    swiper.slides.forEach((slideEl) => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate2 = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = getRotateFix(swiper);
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "flip",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-coverflow.mjs
function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate2 = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate2 = params.depth;
    const r = getRotateFix(swiper);
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      let translateZ = -translate2 * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
      if (Math.abs(translateX) < 1e-3) translateX = 0;
      if (Math.abs(translateY) < 1e-3) translateY = 0;
      if (Math.abs(translateZ) < 1e-3) translateZ = 0;
      if (Math.abs(rotateY) < 1e-3) rotateY = 0;
      if (Math.abs(rotateX) < 1e-3) rotateX = 0;
      if (Math.abs(scale) < 1e-3) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBeforeEl) {
          shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
        }
        if (!shadowAfterEl) {
          shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  effectInit({
    effect: "coverflow",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}

// node_modules/swiper/modules/effect-creative.mjs
function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = (value) => {
    if (typeof value === "string") return value;
    return `${value}px`;
  };
  const setTranslate2 = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = getRotateFix(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(", ");
      const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl && data.shadow) {
          shadowEl = createShadow("creative", slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "creative",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-cards.mjs
function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate2 = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      if (params.slideShadows) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl) {
          shadowEl = createShadow("cards", slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/swiper-bundle.mjs
var modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
Swiper.use(modules);

// node_modules/swiper/shared/update-swiper.mjs
var paramsList = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function isObject3(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object" && !o.__swiper__;
}
function extend3(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject3(src[key]) && isObject3(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];
      else extend3(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params) {
  if (params === void 0) {
    params = {};
  }
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params) {
  if (params === void 0) {
    params = {};
  }
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params) {
  if (params === void 0) {
    params = {};
  }
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function attrToProp(attrName) {
  if (attrName === void 0) {
    attrName = "";
  }
  return attrName.replace(/-[a-z]/g, (l) => l.toUpperCase().replace("-", ""));
}
function updateSwiper(_ref) {
  let {
    swiper,
    slides,
    passedParams,
    changedParams,
    nextEl,
    prevEl,
    scrollbarEl,
    paginationEl
  } = _ref;
  const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;
  let loopNeedDestroy;
  let loopNeedEnable;
  let loopNeedReloop;
  if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) {
    needThumbsInit = true;
  }
  if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }
  if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  const destroyModule = (mod) => {
    if (!swiper[mod]) return;
    swiper[mod].destroy();
    if (mod === "navigation") {
      if (swiper.isElement) {
        swiper[mod].prevEl.remove();
        swiper[mod].nextEl.remove();
      }
      currentParams[mod].prevEl = void 0;
      currentParams[mod].nextEl = void 0;
      swiper[mod].prevEl = void 0;
      swiper[mod].nextEl = void 0;
    } else {
      if (swiper.isElement) {
        swiper[mod].el.remove();
      }
      currentParams[mod].el = void 0;
      swiper[mod].el = void 0;
    }
  };
  if (changedParams.includes("loop") && swiper.isElement) {
    if (currentParams.loop && !passedParams.loop) {
      loopNeedDestroy = true;
    } else if (!currentParams.loop && passedParams.loop) {
      loopNeedEnable = true;
    } else {
      loopNeedReloop = true;
    }
  }
  updateParams.forEach((key) => {
    if (isObject3(currentParams[key]) && isObject3(passedParams[key])) {
      Object.assign(currentParams[key], passedParams[key]);
      if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
        destroyModule(key);
      }
    } else {
      const newValue = passedParams[key];
      if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });
  if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes("virtual") && virtual && currentParams.virtual.enabled) {
    if (slides) virtual.slides = slides;
    virtual.update(true);
  }
  if (changedParams.includes("children") && slides && currentParams.loop) {
    loopNeedReloop = true;
  }
  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized) thumbs.update(true);
  }
  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (needPaginationInit) {
    if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
      paginationEl = document.createElement("div");
      paginationEl.classList.add("swiper-pagination");
      paginationEl.part.add("pagination");
      swiper.el.appendChild(paginationEl);
    }
    if (paginationEl) currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit) {
    if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
      scrollbarEl = document.createElement("div");
      scrollbarEl.classList.add("swiper-scrollbar");
      scrollbarEl.part.add("scrollbar");
      swiper.el.appendChild(scrollbarEl);
    }
    if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit) {
    if (swiper.isElement) {
      if (!nextEl || typeof nextEl === "string") {
        nextEl = document.createElement("div");
        nextEl.classList.add("swiper-button-next");
        setInnerHTML(nextEl, swiper.hostEl.constructor.nextButtonSvg);
        nextEl.part.add("button-next");
        swiper.el.appendChild(nextEl);
      }
      if (!prevEl || typeof prevEl === "string") {
        prevEl = document.createElement("div");
        prevEl.classList.add("swiper-button-prev");
        setInnerHTML(prevEl, swiper.hostEl.constructor.prevButtonSvg);
        prevEl.part.add("button-prev");
        swiper.el.appendChild(prevEl);
      }
    }
    if (nextEl) currentParams.navigation.nextEl = nextEl;
    if (prevEl) currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes("allowSlideNext")) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }
  if (changedParams.includes("allowSlidePrev")) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }
  if (changedParams.includes("direction")) {
    swiper.changeDirection(passedParams.direction, false);
  }
  if (loopNeedDestroy || loopNeedReloop) {
    swiper.loopDestroy();
  }
  if (loopNeedEnable || loopNeedReloop) {
    swiper.loopCreate();
  }
  swiper.update();
}

// node_modules/swiper/shared/get-element-params.mjs
var formatValue = (val) => {
  if (parseFloat(val) === Number(val)) return Number(val);
  if (val === "true") return true;
  if (val === "") return true;
  if (val === "false") return false;
  if (val === "null") return null;
  if (val === "undefined") return void 0;
  if (typeof val === "string" && val.includes("{") && val.includes("}") && val.includes('"')) {
    let v;
    try {
      v = JSON.parse(val);
    } catch (err) {
      v = val;
    }
    return v;
  }
  return val;
};
var modulesParamsList = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
function getParams(element, propName, propValue) {
  const params = {};
  const passedParams = {};
  extend3(params, defaults);
  const localParamsList = [...paramsList, "on"];
  const allowedParams = localParamsList.map((key) => key.replace(/_/, ""));
  localParamsList.forEach((paramName) => {
    paramName = paramName.replace("_", "");
    if (typeof element[paramName] !== "undefined") {
      passedParams[paramName] = element[paramName];
    }
  });
  const attrsList = [...element.attributes];
  if (typeof propName === "string" && typeof propValue !== "undefined") {
    attrsList.push({
      name: propName,
      value: isObject3(propValue) ? __spreadValues({}, propValue) : propValue
    });
  }
  attrsList.forEach((attr) => {
    const moduleParam = modulesParamsList.find((mParam) => attr.name.startsWith(`${mParam}-`));
    if (moduleParam) {
      const parentObjName = attrToProp(moduleParam);
      const subObjName = attrToProp(attr.name.split(`${moduleParam}-`)[1]);
      if (typeof passedParams[parentObjName] === "undefined") {
        passedParams[parentObjName] = {};
      }
      if (passedParams[parentObjName] === true) {
        passedParams[parentObjName] = {
          enabled: true
        };
      }
      if (passedParams[parentObjName] === false) {
        passedParams[parentObjName] = {
          enabled: false
        };
      }
      passedParams[parentObjName][subObjName] = formatValue(attr.value);
    } else {
      const name = attrToProp(attr.name);
      if (!allowedParams.includes(name)) return;
      const value = formatValue(attr.value);
      if (passedParams[name] && modulesParamsList.includes(attr.name) && !isObject3(value)) {
        if (passedParams[name].constructor !== Object) {
          passedParams[name] = {};
        }
        passedParams[name].enabled = !!value;
      } else {
        passedParams[name] = value;
      }
    }
  });
  extend3(params, passedParams);
  if (params.navigation) {
    params.navigation = __spreadValues({
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    }, params.navigation !== true ? params.navigation : {});
  } else if (params.navigation === false) {
    delete params.navigation;
  }
  if (params.scrollbar) {
    params.scrollbar = __spreadValues({
      el: ".swiper-scrollbar"
    }, params.scrollbar !== true ? params.scrollbar : {});
  } else if (params.scrollbar === false) {
    delete params.scrollbar;
  }
  if (params.pagination) {
    params.pagination = __spreadValues({
      el: ".swiper-pagination"
    }, params.pagination !== true ? params.pagination : {});
  } else if (params.pagination === false) {
    delete params.pagination;
  }
  return {
    params,
    passedParams
  };
}

// node_modules/swiper/swiper-element-bundle.mjs
var SwiperCSS = `:host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}`;
var SwiperSlideCSS = `::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}`;
var DummyHTMLElement = class {
};
var ClassToExtend = typeof window === "undefined" || typeof HTMLElement === "undefined" ? DummyHTMLElement : HTMLElement;
var arrowSvg = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `;
var addStyle = (shadowRoot, styles) => {
  if (typeof CSSStyleSheet !== "undefined" && shadowRoot.adoptedStyleSheets) {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(styles);
    shadowRoot.adoptedStyleSheets = [styleSheet];
  } else {
    const style = document.createElement("style");
    style.rel = "stylesheet";
    style.textContent = styles;
    shadowRoot.appendChild(style);
  }
};
var SwiperContainer = class extends ClassToExtend {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
  static get nextButtonSvg() {
    return arrowSvg;
  }
  static get prevButtonSvg() {
    return arrowSvg.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>');
  }
  cssStyles() {
    return [
      SwiperCSS,
      // eslint-disable-line
      ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []
    ].join("\n");
  }
  cssLinks() {
    return this.injectStylesUrls || [];
  }
  calcSlideSlots() {
    const currentSideSlots = this.slideSlots || 0;
    const slideSlotChildren = [...this.querySelectorAll(`[slot^=slide-]`)].map((child) => {
      return parseInt(child.getAttribute("slot").split("slide-")[1], 10);
    });
    this.slideSlots = slideSlotChildren.length ? Math.max(...slideSlotChildren) + 1 : 0;
    if (!this.rendered) return;
    if (this.slideSlots > currentSideSlots) {
      for (let i = currentSideSlots; i < this.slideSlots; i += 1) {
        const slideEl = document.createElement("swiper-slide");
        slideEl.setAttribute("part", `slide slide-${i + 1}`);
        const slotEl = document.createElement("slot");
        slotEl.setAttribute("name", `slide-${i + 1}`);
        slideEl.appendChild(slotEl);
        this.shadowRoot.querySelector(".swiper-wrapper").appendChild(slideEl);
      }
    } else if (this.slideSlots < currentSideSlots) {
      const slides = this.swiper.slides;
      for (let i = slides.length - 1; i >= 0; i -= 1) {
        if (i > this.slideSlots) {
          slides[i].remove();
        }
      }
    }
  }
  render() {
    if (this.rendered) return;
    this.calcSlideSlots();
    let localStyles = this.cssStyles();
    if (this.slideSlots > 0) {
      localStyles = localStyles.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1");
    }
    if (localStyles.length) {
      addStyle(this.shadowRoot, localStyles);
    }
    this.cssLinks().forEach((url) => {
      const linkExists = this.shadowRoot.querySelector(`link[href="${url}"]`);
      if (linkExists) return;
      const linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.href = url;
      this.shadowRoot.appendChild(linkEl);
    });
    const el = document.createElement("div");
    el.classList.add("swiper");
    el.part = "container";
    setInnerHTML(el, `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({
      length: this.slideSlots
    }).map((_, index) => `
        <swiper-slide part="slide slide-${index}">
          <slot name="slide-${index}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${needsNavigation(this.passedParams) ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      ` : ""}
      ${needsPagination(this.passedParams) ? `
        <div part="pagination" class="swiper-pagination"></div>
      ` : ""}
      ${needsScrollbar(this.passedParams) ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      ` : ""}
    `);
    this.shadowRoot.appendChild(el);
    this.rendered = true;
  }
  initialize() {
    var _this = this;
    if (this.swiper && this.swiper.initialized) return;
    const {
      params: swiperParams,
      passedParams
    } = getParams(this);
    this.swiperParams = swiperParams;
    this.passedParams = passedParams;
    delete this.swiperParams.init;
    this.render();
    this.swiper = new Swiper(this.shadowRoot.querySelector(".swiper"), __spreadProps(__spreadValues(__spreadValues({}, swiperParams.virtual ? {} : {
      observer: true
    }), swiperParams), {
      touchEventsTarget: "container",
      onAny: function(name) {
        if (name === "observerUpdate") {
          _this.calcSlideSlots();
        }
        const eventName = swiperParams.eventsPrefix ? `${swiperParams.eventsPrefix}${name.toLowerCase()}` : name.toLowerCase();
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        const event2 = new CustomEvent(eventName, {
          detail: args,
          bubbles: name !== "hashChange",
          cancelable: true
        });
        _this.dispatchEvent(event2);
      }
    }));
  }
  connectedCallback() {
    if (this.swiper && this.swiper.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
      return;
    }
    if (this.init === false || this.getAttribute("init") === "false") {
      return;
    }
    this.initialize();
  }
  disconnectedCallback() {
    if (this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
      return;
    }
    if (this.swiper && this.swiper.destroy) {
      this.swiper.destroy();
    }
  }
  updateSwiperOnPropChange(propName, propValue) {
    const {
      params: swiperParams,
      passedParams
    } = getParams(this, propName, propValue);
    this.passedParams = passedParams;
    this.swiperParams = swiperParams;
    if (this.swiper && this.swiper.params[propName] === propValue) {
      return;
    }
    updateSwiper(__spreadValues(__spreadValues(__spreadValues({
      swiper: this.swiper,
      passedParams: this.passedParams,
      changedParams: [attrToProp(propName)]
    }, propName === "navigation" && passedParams[propName] ? {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    } : {}), propName === "pagination" && passedParams[propName] ? {
      paginationEl: ".swiper-pagination"
    } : {}), propName === "scrollbar" && passedParams[propName] ? {
      scrollbarEl: ".swiper-scrollbar"
    } : {}));
  }
  attributeChangedCallback(attr, prevValue, newValue) {
    if (!(this.swiper && this.swiper.initialized)) return;
    if (prevValue === "true" && newValue === null) {
      newValue = false;
    }
    this.updateSwiperOnPropChange(attr, newValue);
  }
  static get observedAttributes() {
    const attrs = paramsList.filter((param) => param.includes("_")).map((param) => param.replace(/[A-Z]/g, (v) => `-${v}`).replace("_", "").toLowerCase());
    return attrs;
  }
};
paramsList.forEach((paramName) => {
  if (paramName === "init") return;
  paramName = paramName.replace("_", "");
  Object.defineProperty(SwiperContainer.prototype, paramName, {
    configurable: true,
    get() {
      return (this.passedParams || {})[paramName];
    },
    set(value) {
      if (!this.passedParams) this.passedParams = {};
      this.passedParams[paramName] = value;
      if (!(this.swiper && this.swiper.initialized)) return;
      this.updateSwiperOnPropChange(paramName, value);
    }
  });
});
var SwiperSlide = class extends ClassToExtend {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
  render() {
    const lazy = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
    addStyle(this.shadowRoot, SwiperSlideCSS);
    this.shadowRoot.appendChild(document.createElement("slot"));
    if (lazy) {
      const lazyDiv = document.createElement("div");
      lazyDiv.classList.add("swiper-lazy-preloader");
      lazyDiv.part.add("preloader");
      this.shadowRoot.appendChild(lazyDiv);
    }
  }
  initialize() {
    this.render();
  }
  connectedCallback() {
    if (this.swiperLoopMoveDOM) {
      return;
    }
    this.initialize();
  }
};
var register = () => {
  if (typeof window === "undefined") return;
  if (!window.customElements.get("swiper-container")) window.customElements.define("swiper-container", SwiperContainer);
  if (!window.customElements.get("swiper-slide")) window.customElements.define("swiper-slide", SwiperSlide);
};
if (typeof window !== "undefined") {
  window.SwiperElementRegisterParams = (params) => {
    paramsList.push(...params);
  };
}

// src/app/pages/testimonials/testimonials.ts
var _c0 = ["#testimonialSwiper"];
function Testimonials_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function Testimonials_div_14_Template_div_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTestimonial(item_r2));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13);
    \u0275\u0275element(3, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 18);
    \u0275\u0275text(11, "4.9 / 5.0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 19);
    \u0275\u0275element(13, "i", 20);
    \u0275\u0275text(14, " VERIFIED");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 21);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", item_r2.name);
    \u0275\u0275property("src", item_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", item_r2.review, " ");
  }
}
register();
var Testimonials = class _Testimonials {
  constructor() {
    this.testimonials = [
      {
        name: "Askcryptobonus",
        country: "",
        expanded: false,
        link: "https://www.askcryptobonus.com",
        image: "assets/home_icons/askcryptobonus.png",
        review: "RajPoker Affiliates is becoming a recognized name in the iGaming affiliate industry thanks to flexible commission models, crypto payment support, and access to the growing Indian gaming market. Combined with platforms like AskCryptoBonus, affiliates can find quality crypto casino promotions and improve their marketing performance."
      },
      {
        name: "Askslotbonus",
        country: "",
        expanded: false,
        link: "https://askslotbonus.com",
        image: "assets/home_icons/askslotbonus.png",
        review: "As the iGaming industry continues to grow, RajPoker is building a strong reputation through rewarding affiliate plans, seamless crypto payouts, and a solid presence in the expanding Indian gaming sector. In collaboration with AskSlotBonus, affiliates can access popular slot deals, exclusive casino bonuses, and crypto gaming promotions designed to increase traffic, engagement, and conversion potential."
      },
      {
        name: "BonusManiac",
        country: "",
        expanded: false,
        link: "https://bonusmaniac.com",
        image: "assets/home_icons/bonusmaniac.png",
        review: "As the iGaming industry continues to expand, RajPoker is strengthening its position with competitive commission structures, fast crypto-friendly payments, and strong reach within the growing Indian gaming market. Together with BonusManiac, affiliates can explore premium casino bonuses, trending gaming offers, and high-converting promotions that help drive more traffic and improve overall campaign performance."
      },
      {
        name: "Askcryptobonus",
        country: "",
        expanded: false,
        link: "https://www.askcryptobonus.com",
        image: "assets/home_icons/askcryptobonus.png",
        review: "RajPoker Affiliates is becoming a recognized name in the iGaming affiliate industry thanks to flexible commission models, crypto payment support, and access to the growing Indian gaming market. Combined with platforms like AskCryptoBonus, affiliates can find quality crypto casino promotions and improve their marketing performance."
      },
      {
        name: "Askslotbonus",
        country: "",
        expanded: false,
        link: "https://askslotbonus.com",
        image: "assets/home_icons/askslotbonus.png",
        review: "As the iGaming industry continues to grow, RajPoker is building a strong reputation through rewarding affiliate plans, seamless crypto payouts, and a solid presence in the expanding Indian gaming sector. In collaboration with AskSlotBonus, affiliates can access popular slot deals, exclusive casino bonuses, and crypto gaming promotions designed to increase traffic, engagement, and conversion potential."
      },
      {
        name: "BonusManiac",
        country: "",
        expanded: false,
        link: "https://bonusmaniac.com",
        image: "assets/home_icons/bonusmaniac.png",
        review: "As the iGaming industry continues to expand, RajPoker is strengthening its position with competitive commission structures, fast crypto-friendly payments, and strong reach within the growing Indian gaming market. Together with BonusManiac, affiliates can explore premium casino bonuses, trending gaming offers, and high-converting promotions that help drive more traffic and improve overall campaign performance."
      }
    ];
  }
  onTestimonial(item) {
    console.log(item);
    if (item.link) {
      window.open(item.link, "_blank");
    }
  }
  toggleReview(event2, item) {
    event2.stopPropagation();
    item.expanded = !item.expanded;
  }
  ngAfterViewInit() {
    this.restartSwiperAutoplay();
  }
  restartSwiperAutoplay() {
    setTimeout(() => {
      const swiperEl = this.testimonialSwiper?.nativeElement;
      if (swiperEl?.swiper) {
        swiperEl.swiper.autoplay.start();
        swiperEl.swiper.update();
      }
    }, 300);
  }
  static {
    this.\u0275fac = function Testimonials_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Testimonials)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Testimonials, selectors: [["app-testimonials"]], viewQuery: function Testimonials_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.testimonialSwiper = _t.first);
      }
    }, decls: 15, vars: 1, consts: [[1, "testimonial-section"], [1, "section-header"], [1, "endorsed-badge-row"], [1, "endorsed-pill"], [1, "fa-solid", "fa-shield-halved"], [1, "endorsed-section-title"], [1, "gold-gradient-title"], [1, "endorsed-subtitle"], [1, "testimonial-slider"], [1, "testimonial-track"], ["class", "testimonial-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "testimonial-card", 3, "click"], [1, "top-section"], [1, "user-avatar-wrap"], [1, "user-image", 3, "src", "alt"], [1, "user-details"], [1, "trust-stars-row"], [1, "star-rating"], [1, "trust-score-badge"], [1, "verified-seal"], [1, "fa-solid", "fa-circle-check"], [1, "review"]], template: function Testimonials_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " 100% AUDITED & CERTIFIED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h2", 5);
        \u0275\u0275text(7, " GLOBALLY ENDORSED & ");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "RECOGNIZED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, "Trusted by leading international iGaming audit boards, high-roller communities & affiliate networks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
        \u0275\u0275template(14, Testimonials_div_14_Template, 17, 4, "div", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.testimonials);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\n.testimonial-section[_ngcontent-%COMP%] {\n  padding: 50px 20px 70px 20px;\n  background:\n    radial-gradient(\n      ellipse at 50% 10%,\n      rgba(225, 29, 72, 0.08) 0%,\n      rgba(11, 12, 16, 0.98) 70%,\n      #06070a 100%);\n  position: relative;\n  overflow: hidden;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.testimonial-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 600px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(251, 191, 36, 0.5),\n      transparent);\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 38px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.endorsed-badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.endorsed-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #fbbf24;\n  background: rgba(251, 191, 36, 0.12);\n  border: 1px solid rgba(251, 191, 36, 0.35);\n  padding: 5px 14px;\n  border-radius: 999px;\n  text-transform: uppercase;\n}\n.endorsed-section-title[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n  margin: 0;\n  text-transform: uppercase;\n}\n.gold-gradient-title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24 0%,\n      #f59e0b 50%,\n      #d97706 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.endorsed-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.95rem;\n  max-width: 640px;\n  margin: 0 auto;\n  line-height: 1.5;\n}\n.testimonial-slider[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding: 10px 0;\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      #000 8%,\n      #000 92%,\n      transparent 100%);\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      #000 8%,\n      #000 92%,\n      transparent 100%);\n}\n.testimonial-track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  width: max-content;\n  animation: _ngcontent-%COMP%_scrollTestimonials 35s linear infinite;\n}\n.testimonial-slider[_ngcontent-%COMP%]:hover   .testimonial-track[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  width: 480px;\n  min-height: 195px;\n  flex-shrink: 0;\n  position: relative;\n  border-radius: 20px;\n  padding: 24px 28px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 32, 48, 0.98) 0%,\n      rgba(13, 17, 26, 0.98) 100%);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(14px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n}\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n  border-color: rgba(251, 191, 36, 0.65);\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(245, 158, 11, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 42, 64, 0.98) 0%,\n      rgba(16, 21, 32, 0.98) 100%);\n}\n.top-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n}\n.user-avatar-wrap[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  min-width: 58px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1.5px solid rgba(251, 191, 36, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);\n}\n.user-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  object-fit: contain;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.user-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.15rem;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.2;\n}\n.trust-stars-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.star-rating[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 0.95rem;\n  letter-spacing: 2px;\n  text-shadow: 0 0 8px rgba(251, 191, 36, 0.7);\n}\n.trust-score-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.08);\n  padding: 2px 7px;\n  border-radius: 6px;\n}\n.verified-seal[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #4ade80;\n  background: rgba(34, 197, 94, 0.12);\n  border: 1px solid rgba(34, 197, 94, 0.35);\n  padding: 4px 10px;\n  border-radius: 999px;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n}\n.review[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  line-height: 1.6;\n  font-size: 0.9rem;\n  font-weight: 400;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n  width: 100%;\n}\n@keyframes _ngcontent-%COMP%_scrollTestimonials {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n@media (max-width: 768px) {\n  .testimonial-card[_ngcontent-%COMP%] {\n    width: 320px;\n    min-height: 180px;\n    padding: 18px 20px;\n  }\n  .endorsed-section-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=testimonials.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testimonials, [{
    type: Component,
    args: [{ selector: "app-testimonials", imports: [CommonModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: '<div class="testimonial-section">\n\n  <div class="section-header">\n    <div class="endorsed-badge-row">\n      <span class="endorsed-pill"><i class="fa-solid fa-shield-halved"></i> 100% AUDITED &amp; CERTIFIED</span>\n    </div>\n    <h2 class="endorsed-section-title">\n      GLOBALLY ENDORSED &amp; <span class="gold-gradient-title">RECOGNIZED</span>\n    </h2>\n    <p class="endorsed-subtitle">Trusted by leading international iGaming audit boards, high-roller communities &amp; affiliate networks</p>\n  </div>\n\n  <div class="testimonial-slider">\n\n    <div class="testimonial-track">\n\n      <div class="testimonial-card" *ngFor="let item of testimonials" (click)="onTestimonial(item)">\n\n        <div class="top-section">\n\n          <div class="user-avatar-wrap">\n            <img [src]="item.image" class="user-image" alt="{{ item.name }}">\n          </div>\n\n          <div class="user-details">\n            <h3>{{ item.name }}</h3>\n            <div class="trust-stars-row">\n              <span class="star-rating">\u2605\u2605\u2605\u2605\u2605</span>\n              <span class="trust-score-badge">4.9 / 5.0</span>\n            </div>\n          </div>\n\n          <span class="verified-seal"><i class="fa-solid fa-circle-check"></i> VERIFIED</span>\n\n        </div>\n\n        <p class="review">\n          {{ item.review }}\n        </p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>', styles: ['/* src/app/pages/testimonials/testimonials.css */\n.testimonial-section {\n  padding: 50px 20px 70px 20px;\n  background:\n    radial-gradient(\n      ellipse at 50% 10%,\n      rgba(225, 29, 72, 0.08) 0%,\n      rgba(11, 12, 16, 0.98) 70%,\n      #06070a 100%);\n  position: relative;\n  overflow: hidden;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.testimonial-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 600px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(251, 191, 36, 0.5),\n      transparent);\n}\n.section-header {\n  text-align: center;\n  margin-bottom: 38px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.endorsed-badge-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.endorsed-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #fbbf24;\n  background: rgba(251, 191, 36, 0.12);\n  border: 1px solid rgba(251, 191, 36, 0.35);\n  padding: 5px 14px;\n  border-radius: 999px;\n  text-transform: uppercase;\n}\n.endorsed-section-title {\n  font-size: 2.3rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n  margin: 0;\n  text-transform: uppercase;\n}\n.gold-gradient-title {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24 0%,\n      #f59e0b 50%,\n      #d97706 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.endorsed-subtitle {\n  color: #94a3b8;\n  font-size: 0.95rem;\n  max-width: 640px;\n  margin: 0 auto;\n  line-height: 1.5;\n}\n.testimonial-slider {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding: 10px 0;\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      #000 8%,\n      #000 92%,\n      transparent 100%);\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      #000 8%,\n      #000 92%,\n      transparent 100%);\n}\n.testimonial-track {\n  display: flex;\n  gap: 24px;\n  width: max-content;\n  animation: scrollTestimonials 35s linear infinite;\n}\n.testimonial-slider:hover .testimonial-track {\n  animation-play-state: paused;\n}\n.testimonial-card {\n  width: 480px;\n  min-height: 195px;\n  flex-shrink: 0;\n  position: relative;\n  border-radius: 20px;\n  padding: 24px 28px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 32, 48, 0.98) 0%,\n      rgba(13, 17, 26, 0.98) 100%);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(14px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n}\n.testimonial-card:hover {\n  transform: translateY(-6px) scale(1.02);\n  border-color: rgba(251, 191, 36, 0.65);\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(245, 158, 11, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 42, 64, 0.98) 0%,\n      rgba(16, 21, 32, 0.98) 100%);\n}\n.top-section {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n}\n.user-avatar-wrap {\n  width: 58px;\n  height: 58px;\n  min-width: 58px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1.5px solid rgba(251, 191, 36, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);\n}\n.user-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  object-fit: contain;\n}\n.user-details {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.user-details h3 {\n  color: #ffffff;\n  font-size: 1.15rem;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.2;\n}\n.trust-stars-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.star-rating {\n  color: #fbbf24;\n  font-size: 0.95rem;\n  letter-spacing: 2px;\n  text-shadow: 0 0 8px rgba(251, 191, 36, 0.7);\n}\n.trust-score-badge {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.08);\n  padding: 2px 7px;\n  border-radius: 6px;\n}\n.verified-seal {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #4ade80;\n  background: rgba(34, 197, 94, 0.12);\n  border: 1px solid rgba(34, 197, 94, 0.35);\n  padding: 4px 10px;\n  border-radius: 999px;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n}\n.review {\n  color: #cbd5e1;\n  line-height: 1.6;\n  font-size: 0.9rem;\n  font-weight: 400;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n  width: 100%;\n}\n@keyframes scrollTestimonials {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n@media (max-width: 768px) {\n  .testimonial-card {\n    width: 320px;\n    min-height: 180px;\n    padding: 18px 20px;\n  }\n  .endorsed-section-title {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=testimonials.css.map */\n'] }]
  }], null, { testimonialSwiper: [{
    type: ViewChild,
    args: [" #testimonialSwiper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Testimonials, { className: "Testimonials", filePath: "src/app/pages/testimonials/testimonials.ts", lineNumber: 14 });
})();

// src/app/pages/home-page/home-page.ts
var _c02 = ["alertHost"];
var _c1 = ["scrollContainer"];
var _c2 = ["sportsScroller"];
var _c3 = ["scrollContainerLiveCasino"];
var _c4 = ["scrollContainerFeatured"];
var _c5 = ["scrollContainerSlots"];
var _c6 = ["gameIframe"];
var _c7 = ["gifImg"];
var _c8 = () => ["/live-casino"];
var _c9 = () => ["/slots"];
var _c10 = (a0, a1, a2, a3) => ({ live: a0, today: a1, tomorrow: a2, upcoming: a3 });
function HomePage_ng_template_0_Template(rf, ctx) {
}
function HomePage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "button", 132);
    \u0275\u0275listener("click", function HomePage_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.subtabClose());
    });
    \u0275\u0275text(3, " X ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "iframe", 133, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 134);
    \u0275\u0275listener("click", function HomePage_div_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFullScreen());
    });
    \u0275\u0275element(7, "i", 135);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.urlSafe, \u0275\u0275sanitizeResourceUrl);
  }
}
function HomePage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275listener("click", function HomePage_div_9_Template_div_click_0_listener() {
      const img_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.routerLinks(img_r5));
    });
    \u0275\u0275elementStart(1, "div", 137);
    \u0275\u0275element(2, "img", 138);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.bannerCurrentIndex === i_r6);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", img_r5.title || "RajPoker Banner Slide " + (i_r6 + 1));
    \u0275\u0275property("src", ctx_r2.getBannerMedia(img_r5), \u0275\u0275sanitizeUrl);
  }
}
function HomePage_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 139);
    \u0275\u0275listener("click", function HomePage_button_11_Template_button_click_0_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToBannerSlide(i_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.bannerCurrentIndex === i_r8);
    \u0275\u0275attribute("aria-current", ctx_r2.bannerCurrentIndex === i_r8 ? "true" : null)("aria-label", "Go to slide " + (i_r8 + 1));
  }
}
function HomePage_div_156_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 154);
  }
}
function HomePage_div_156_img_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 155);
    \u0275\u0275listener("load", function HomePage_div_156_img_8_Template_img_load_0_listener() {
      \u0275\u0275restoreView(_r10);
      const game_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImageLoad(game_r11.id));
    })("click", function HomePage_div_156_img_8_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const game_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.gvproviderapi(game_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    const game_r11 = ctx_r11.$implicit;
    const i_r13 = ctx_r11.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("loaded", ctx_r2.loadedImages[game_r11.id]);
    \u0275\u0275propertyInterpolate("alt", game_r11.title);
    \u0275\u0275property("src", ctx_r2.getGameImage(game_r11, i_r13), \u0275\u0275sanitizeUrl);
  }
}
function HomePage_div_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140)(1, "div", 141)(2, "span", 142);
    \u0275\u0275element(3, "span", 143);
    \u0275\u0275text(4, " LIVE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 144);
    \u0275\u0275text(6, "VIP");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, HomePage_div_156_div_7_Template, 1, 0, "div", 145)(8, HomePage_div_156_img_8_Template, 1, 4, "img", 146);
    \u0275\u0275elementStart(9, "div", 147)(10, "span", 148);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 149);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 150);
    \u0275\u0275listener("click", function HomePage_div_156_Template_div_click_14_listener() {
      const game_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.gvproviderapi(game_r11));
    });
    \u0275\u0275elementStart(15, "button", 151);
    \u0275\u0275element(16, "i", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 153);
    \u0275\u0275text(18, "ENTER TABLE");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r2.loadedImages[game_r11.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r11.provider == "Evolution" || game_r11.provider == "Ezugi");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r11.provider);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(game_r11.title || "Live Table");
  }
}
function HomePage_ng_container_254_section_12_div_3_video_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 187);
    \u0275\u0275element(1, "source", 188);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_254_section_12_div_3_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 189);
  }
}
function HomePage_ng_container_254_section_12_div_3_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 190);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(image_r16.score == null ? null : image_r16.score.homeScore);
  }
}
function HomePage_ng_container_254_section_12_div_3_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 190);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(image_r16.score == null ? null : image_r16.score.awayScore);
  }
}
function HomePage_ng_container_254_section_12_div_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 191);
    \u0275\u0275listener("click", function HomePage_ng_container_254_section_12_div_3_div_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const image_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.tieleagId(image_r16.homeValuddde._id, image_r16.eventLeagId));
    });
    \u0275\u0275elementStart(1, "div", 192)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(image_r16.homeValuddde.outcomeType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r16.homeValuddde.trueOdds);
  }
}
function HomePage_ng_container_254_section_12_div_3_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 193);
    \u0275\u0275listener("click", function HomePage_ng_container_254_section_12_div_3_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const image_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.tieleagId(image_r16.tieValue._id, image_r16.eventLeagId));
    });
    \u0275\u0275elementStart(1, "div", 192)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(image_r16.tieValue.outcomeType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r16.tieValue.trueOdds);
  }
}
function HomePage_ng_container_254_section_12_div_3_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 194);
    \u0275\u0275listener("click", function HomePage_ng_container_254_section_12_div_3_div_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const image_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.tieleagId(image_r16.awayValue._id, image_r16.eventLeagId));
    });
    \u0275\u0275elementStart(1, "div", 192)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(image_r16.awayValue.outcomeType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r16.awayValue.trueOdds);
  }
}
function HomePage_ng_container_254_section_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 169)(2, "p", 170)(3, "span", 171);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 172);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 173);
    \u0275\u0275template(8, HomePage_ng_container_254_section_12_div_3_video_8_Template, 2, 0, "video", 174)(9, HomePage_ng_container_254_section_12_div_3_img_9_Template, 1, 0, "img", 175);
    \u0275\u0275elementStart(10, "span", 176);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 177)(13, "span", 178);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 179)(16, "div", 180)(17, "p", 181);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, HomePage_ng_container_254_section_12_div_3_span_19_Template, 2, 1, "span", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 180)(21, "p", 181);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, HomePage_ng_container_254_section_12_div_3_span_23_Template, 2, 1, "span", 182);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 183);
    \u0275\u0275template(25, HomePage_ng_container_254_section_12_div_3_div_25_Template, 6, 2, "div", 184)(26, HomePage_ng_container_254_section_12_div_3_div_26_Template, 6, 2, "div", 185)(27, HomePage_ng_container_254_section_12_div_3_div_27_Template, 6, 2, "div", 186);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("title", image_r16.leagueName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(image_r16.leagueName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(17, _c10, image_r16.eventTag === "Live", image_r16.eventTag === "Today", image_r16.eventTag === "Tomorrow", image_r16.eventTag === "Upcoming"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", image_r16.eventTag, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", image_r16.sportName === "Cricket");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", image_r16.sportName === "American Football");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r16.sportName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(image_r16 == null ? null : image_r16.formattedDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", image_r16 == null ? null : image_r16.homeValuddde == null ? null : image_r16.homeValuddde.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", image_r16 == null ? null : image_r16.homeValuddde == null ? null : image_r16.homeValuddde.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", image_r16.score == null ? null : image_r16.score.homeScore);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", image_r16 == null ? null : image_r16.awayValue == null ? null : image_r16.awayValue.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(image_r16 == null ? null : image_r16.awayValue == null ? null : image_r16.awayValue.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", image_r16.score == null ? null : image_r16.score.awayScore);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", image_r16 == null ? null : image_r16.homeValuddde);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", image_r16 == null ? null : image_r16.tieValue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", image_r16 == null ? null : image_r16.awayValue);
  }
}
function HomePage_ng_container_254_section_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 165)(1, "div", 166, 4);
    \u0275\u0275listener("scroll", function HomePage_ng_container_254_section_12_Template_div_scroll_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.checkOverflow());
    });
    \u0275\u0275template(3, HomePage_ng_container_254_section_12_div_3_Template, 28, 22, "div", 167);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.eventsRes);
  }
}
function HomePage_ng_container_254_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 156);
    \u0275\u0275elementStart(1, "section", 157)(2, "div", 70)(3, "h2", 158);
    \u0275\u0275text(4, " SPORTS BOOK");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 76)(6, "button", 159);
    \u0275\u0275listener("click", function HomePage_ng_container_254_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollPrev());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 160);
    \u0275\u0275element(8, "path", 161);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "button", 162);
    \u0275\u0275listener("click", function HomePage_ng_container_254_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollNext());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 160);
    \u0275\u0275element(11, "path", 163);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(12, HomePage_ng_container_254_section_12_Template, 4, 1, "section", 164);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.eventsRes.length > 0);
  }
}
function HomePage_div_280_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 154);
  }
}
function HomePage_div_280_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275listener("click", function HomePage_div_280_Template_div_click_0_listener() {
      const game_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.habanaroGm(game_r21.gameName, game_r21.KeyName));
    });
    \u0275\u0275elementStart(1, "span", 196);
    \u0275\u0275text(2, "HOT");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HomePage_div_280_div_3_Template, 1, 0, "div", 145);
    \u0275\u0275elementStart(4, "img", 197);
    \u0275\u0275listener("load", function HomePage_div_280_Template_img_load_4_listener() {
      const game_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImageLoad(game_r21.KeyName));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 198)(6, "span", 199);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 200)(9, "button", 201);
    \u0275\u0275element(10, "i", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 153);
    \u0275\u0275text(12, "SPIN NOW");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.loadedImages1[game_r21.KeyName]);
    \u0275\u0275advance();
    \u0275\u0275classProp("loaded", ctx_r2.loadedImages1[game_r21.KeyName]);
    \u0275\u0275propertyInterpolate("alt", game_r21.gameName);
    \u0275\u0275property("src", "assets/games/habanero/" + game_r21.KeyName + "_149.webp", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r21.gameName);
  }
}
function HomePage_div_283_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275listener("click", function HomePage_div_283_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePopup());
    });
    \u0275\u0275elementStart(1, "div", 203);
    \u0275\u0275listener("click", function HomePage_div_283_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 204);
    \u0275\u0275listener("click", function HomePage_div_283_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 205);
    \u0275\u0275element(4, "line", 206)(5, "line", 207);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 208);
    \u0275\u0275listener("click", function HomePage_div_283_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openInstagram());
    });
    \u0275\u0275element(7, "img", 209);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 210);
    \u0275\u0275listener("click", function HomePage_div_283_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openInstagram());
    });
    \u0275\u0275element(9, "i", 211);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Follow ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "@RAJPLAY.LIVE");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "i", 212);
    \u0275\u0275elementEnd()()();
  }
}
var HomePage = class _HomePage {
  get urlSafe() {
    return this._urlSafe;
  }
  set urlSafe(value) {
    this._urlSafe = value;
    if (value) {
      window.$crisp?.push(["do", "chat:hide"]);
    } else {
      window.$crisp?.push(["do", "chat:show"]);
    }
  }
  get formattedJackpot() {
    return "\u20B9 " + this.jackpotAmount.toLocaleString("en-IN");
  }
  getBannerMedia(img) {
    if (!img)
      return "assets/homebanner/bannerD1.jpg";
    let media = img.media || img.image || "";
    if (typeof window !== "undefined" && window.innerWidth <= 767) {
      media = media.replace(/bannerD([1-6])\.jpg/g, "bannerM$1.jpg");
      media = media.replace("rajpoker_vip_master.jpg", "rajpoker_vip_master_m.jpg");
      media = media.replace("rajpoker_live_casino_vip.jpg", "rajpoker_live_casino_vip_m.jpg");
    } else if (typeof window !== "undefined" && window.innerWidth <= 992 && window.innerWidth > 767) {
      media = media.replace(/bannerD([1-6])\.jpg/g, "bannerT$1.jpg");
    }
    if (media.startsWith("http://") || media.startsWith("https://") || media.startsWith("assets/")) {
      return media;
    }
    if (media.startsWith("/")) {
      return "https://cms.rajpoker.com" + media;
    }
    return "assets/homebanner/" + media;
  }
  claimWelcomeBonus() {
    this.closePopup();
    if (!this.playerLoggedIn) {
      this.showPopUp("REGISTER");
    } else {
      this.router.navigate(["/promotion"]);
    }
  }
  instantPlayLink() {
    if (typeof window !== "undefined") {
      window.location.href = "/pokerh5?instant-play=true";
    }
  }
  loadFallbackBanners() {
    this.selectVisibleImages(this.fallbackBanners, window.innerWidth, true);
  }
  onEscapeKeyHandler(event2) {
    if (this.showPromotion) {
      this.closePopup();
    }
  }
  constructor(store, route, router, GameCmsService2, cashir, playerservies, datePipe, sanitizer, messageservice, componentFactoryResolver, commonUtilSvc) {
    this.store = store;
    this.route = route;
    this.router = router;
    this.GameCmsService = GameCmsService2;
    this.cashir = cashir;
    this.playerservies = playerservies;
    this.datePipe = datePipe;
    this.sanitizer = sanitizer;
    this.messageservice = messageservice;
    this.componentFactoryResolver = componentFactoryResolver;
    this.commonUtilSvc = commonUtilSvc;
    this.instruction = false;
    this.playerLoggedIn = false;
    this.LiveCasinoGames = [];
    this.BallaGames = [];
    this.HabenaroGames = [];
    this.visibleImages = [];
    this.eventsRes = [];
    this.cricketEventsRes = [];
    this.soccerEventsRes = [];
    this._urlSafe = null;
    this.iosDownloadLink = "";
    this.loadedImages = {};
    this.loadedImages1 = {};
    this.loadedImages2 = {};
    this.loadedImagesmain = {};
    this.loadedImageslive = {};
    this.isMobile = false;
    this.isIosSafari = false;
    this.isWindows1 = false;
    this.isAndroid = false;
    this.currentSlide = 0;
    this.bannerCurrentIndex = 0;
    this.bannerAutoTimer = null;
    this.bannerTouchStartX = 0;
    this.TokenData = null;
    this.HBslotsdata = null;
    this.tokendata = null;
    this.keyname = null;
    this.gameIdIndie = null;
    this.indieUrl_1 = "";
    this.eventsList = [];
    this.activeLiveCasino = 1;
    this.activeBestgame = 1;
    this.showPromotion = true;
    this.heroRevealed = false;
    this.jackpotAmount = 58439210;
    this.fallbackBanners = [
      {
        id: "fb-rakeback-1",
        title: "30% All Players Rake Back",
        subtitle: "Weekly Rakeback for all cash and tournament poker players",
        image: "bannerD3.jpg",
        media: "assets/homebanner/bannerD3.jpg",
        tag: "\u{1F381} 30% RAKEBACK",
        badge: "ALL PLAYERS",
        routerLink: "/promotion",
        desktop: true,
        mobile: true,
        ImageStatus: "active"
      },
      {
        id: "fb-poker-1",
        title: "Biggest Indian Poker Room",
        subtitle: "Compete against India's top poker pros with guaranteed daily prize pools",
        image: "bannerD1.jpg",
        media: "assets/homebanner/bannerD1.jpg",
        tag: "\u{1F525} HIGH STAKES",
        badge: "MEGA GTD",
        routerLink: "/tournaments",
        desktop: true,
        mobile: true,
        ImageStatus: "active"
      },
      {
        id: "fb-casino-slots",
        title: "Live Casino and Slots",
        subtitle: "Real professional dealers & 1000+ top slot jackpot games",
        image: "bannerD4.jpg",
        media: "assets/homebanner/bannerD4.jpg",
        tag: "\u26A1 LIVE 24/7",
        badge: "REAL DEALERS",
        routerLink: "/live-casino",
        desktop: true,
        mobile: true,
        ImageStatus: "active"
      },
      {
        id: "fb-sports-1",
        title: "Sports Bet High Limits",
        subtitle: "In-Play Cricket, Football & Mega Odds with instant settlements",
        image: "bannerD5.jpg",
        media: "assets/homebanner/bannerD5.jpg",
        tag: "\u{1F3CF} LIVE SPORTS",
        badge: "HIGH LIMITS",
        routerLink: "/sports",
        desktop: true,
        mobile: true,
        ImageStatus: "active"
      },
      {
        id: "fb-deposit-1",
        title: "Fast Deposit & Withdrawals",
        subtitle: "Lightning-fast 60s UPI payouts with 0 deduction",
        image: "bannerD6.jpg",
        media: "assets/homebanner/bannerD6.jpg",
        tag: "\u26A1 60s UPI",
        badge: "INSTANT PAY",
        routerLink: "/promotion",
        desktop: true,
        mobile: true,
        ImageStatus: "active"
      },
      {
        id: "fb-tournaments-1",
        title: "Tournaments & Freerolls Daily",
        subtitle: "Daily guaranteed prize pools, freerolls, and mega series",
        image: "bannerD2.jpg",
        media: "assets/homebanner/bannerD2.jpg",
        tag: "\u{1F3C6} FREEROLLS",
        badge: "DAILY GTD",
        routerLink: "/tournaments",
        desktop: true,
        mobile: true,
        ImageStatus: "active"
      },
      {
        id: "fb-vip-1",
        title: "RajPoker High-Limit VIP Tables",
        subtitle: "India's premier high-stakes online poker room \xB7 Certified fair RNG",
        image: "rajpoker_vip_master.jpg",
        media: "assets/homebanner/rajpoker_vip_master.jpg",
        tag: "\u{1F451} OFFICIAL VIP",
        badge: "\u20B910 CR GTD",
        routerLink: "/tournaments",
        desktop: true,
        mobile: true,
        ImageStatus: "active"
      },
      {
        id: "fb-vip-2",
        title: "Live European VIP Casino Lounge",
        subtitle: "Real professional dealers \xB7 4K live streaming Roulette & Blackjack",
        image: "rajpoker_live_casino_vip.jpg",
        media: "assets/homebanner/rajpoker_live_casino_vip.jpg",
        tag: "\u26A1 LIVE 24/7",
        badge: "REAL DEALERS",
        routerLink: "/live-casino",
        desktop: true,
        mobile: true,
        ImageStatus: "active"
      }
    ];
    this.subs = [];
    this.isLiveRunning = false;
    this.isWindows = false;
    this.isWindowsmac = false;
    this.images = [
      { src: "assets/instractions/1.jpg", alt: "Frist" },
      { src: "assets/instractions/2.jpg", alt: "Second" },
      { src: "assets/instractions/3.jpg", alt: "Third" },
      { src: "assets/instractions/4.jpg", alt: "Four" },
      { src: "assets/instractions/5.jpg", alt: "five" },
      { src: "assets/instractions/6.jpg", alt: "six" },
      { src: "assets/instractions/7.jpg", alt: "seven" },
      { src: "assets/instractions/8.jpg", alt: "Final" }
    ];
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.isSwiping = false;
    this.downloadList = [];
    const params1 = new URLSearchParams(window.location.search);
    this.urlTokenForgot = params1.get("token");
    this.urlEventTypeForgot = params1.get("eventType");
  }
  elNative(el) {
    return el && el.nativeElement ? el.nativeElement : null;
  }
  safeCall(fn) {
    try {
      return fn();
    } catch {
      return null;
    }
  }
  ngOnInit() {
    this.moveToTop();
    this.loadAllGames();
    this.detectDevice();
    this.loadFallbackBanners();
    this.startBannerAutoSlide();
    this.jackpotInterval = setInterval(() => {
      this.jackpotAmount += Math.floor(Math.random() * 55) + 15;
    }, 2800);
    const bannersSub = this.GameCmsService.BannersHome().subscribe({
      next: (data) => {
        const list = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : [];
        if (list && list.length > 0) {
          this.selectVisibleImages(list, window.innerWidth);
        }
      },
      error: (err) => {
        console.warn("CMS banners failed, keeping fallback banners:", err);
      }
    });
    this.subs.push(bannersSub);
    const loginSub = this.store.select("loginState").subscribe((loginState) => {
      this.playerLoggedIn = !!loginState?.playerLoggedIn?.loggedIn;
      if (this.playerLoggedIn) {
        const games = sessionStorage.getItem("raj_wSession");
        if (games) {
          const s = this.GameCmsService.indicasino(games).subscribe((response) => {
            this.TokenData = response;
          });
          this.subs.push(s);
        }
      }
    });
    this.subs.push(loginSub);
    const resize$ = fromEvent(window, "resize").pipe(debounceTime(200)).subscribe((_) => {
      this.selectVisibleImages(this.visibleImages.length ? this.visibleImages : this.fallbackBanners, window.innerWidth, true);
    });
    this.subs.push(resize$);
    this.sportsevent();
    this.url = window.location.hostname;
    if (this.router.url === "/register") {
      this.showPromotion = false;
      this.heroRevealed = true;
    } else {
      this.showPromotion = true;
      this.heroRevealed = false;
    }
    this.setDownloadOrder();
  }
  setDownloadOrder() {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    this.url = window.location.hostname;
    const baseList = [
      { name: "Windows", icon: "fa-brands fa-windows", link: "/download/setup.exe" },
      // { name: 'Mac', icon: 'fa-brands fa-apple', isMac: true }, // ✅ NO link
      { name: "Instant_Play", icon: "fa-solid fa-bolt", link: "/pokerh5?instant-play=true" },
      { name: "Android", icon: "fa-brands fa-android", link: "https://app.rajpoker.com/download/mobile/pokermobile.apk" },
      { name: "ios", icon: "fa-brands fa-apple", link: `itms-services://?action=download-manifest&url=https://${this.url}/download/mobile/ios/manifest.plist` }
    ];
    if (isIOS) {
      this.downloadList = [
        baseList[0],
        baseList[3],
        // Android
        baseList[1],
        // baseList[4], // iOS
        baseList[2]
      ];
    } else if (isAndroid) {
      this.downloadList = [
        baseList[0],
        baseList[2],
        // Android
        baseList[1],
        // baseList[4], // iOS
        baseList[3]
      ];
    } else {
      this.downloadList = baseList;
    }
  }
  sportsevent() {
    this.playerservies.getCombinedEvents().subscribe((data) => {
      this.processEvents(data);
    });
  }
  changeSlide(direction) {
    if (direction === "left") {
      this.currentSlide = Math.max(0, this.currentSlide - 1);
    } else if (direction === "right") {
      this.currentSlide = Math.min(this.images.length - 1, this.currentSlide + 1);
    }
  }
  detectDevice() {
    const width = window.innerWidth;
    const ua = navigator.userAgent.toLowerCase();
    this.isMobile = width <= 767;
    this.isAndroid = /android/.test(ua);
    this.isIosSafari = /iphone|ipad|ipod/.test(ua);
    this.isWindows = /windows|macintosh|mac os x/.test(ua) && !this.isAndroid && !this.isIosSafari;
    this.isWindowsmac = /macintosh|mac os x/.test(ua) && !this.isAndroid && !this.isIosSafari;
    this.isWindows1 = /windows nt/.test(ua);
  }
  loadAllGames() {
    this.GameCmsService.getHabaneroGamesJson().subscribe({
      next: (res) => {
        const list = Array.isArray(res) ? res : [];
        this.HabenaroGames = list.slice(0, 24).map((g) => __spreadProps(__spreadValues({}, g), {
          gameName: g.gameName || g.Name || g.KeyName
        }));
      },
      error: (err) => {
        console.warn("Error loading Habanero slots:", err);
      }
    });
    this.playerservies.torrogames().subscribe({
      next: (res) => {
        this.LiveCasinoGames = Array.isArray(res) ? res : [];
      },
      error: (err) => {
        console.warn("Error loading live casino games:", err);
      }
    });
  }
  ngAfterViewInit() {
    const carouselEl = document.getElementById("carouselExampleIndicators");
    if (carouselEl && typeof bootstrap !== "undefined") {
      try {
        if (!carouselEl.getAttribute("data-bs-initialized")) {
          const carousel = new bootstrap.Carousel(carouselEl, {
            interval: 3800,
            ride: "carousel",
            pause: false
          });
          carouselEl.setAttribute("data-bs-initialized", "true");
        }
      } catch {
      }
    }
    timer(50).subscribe(() => this.scrollingActiveBtn());
  }
  openInstagram() {
    if (typeof window !== "undefined") {
      window.open("https://www.instagram.com/raj_poker_casino?igsh=ZDRkaWRrNDhicHlu", "_blank", "noopener,noreferrer");
    }
  }
  closePopup() {
    this.showPromotion = false;
    this.heroRevealed = true;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }
  startBannerAutoSlide() {
    this.stopBannerAutoSlide();
    this.bannerAutoTimer = setInterval(() => {
      this.nextBannerSlide();
    }, 4e3);
  }
  stopBannerAutoSlide() {
    if (this.bannerAutoTimer) {
      clearInterval(this.bannerAutoTimer);
      this.bannerAutoTimer = null;
    }
  }
  nextBannerSlide() {
    if (!this.visibleImages || this.visibleImages.length <= 1)
      return;
    this.bannerCurrentIndex = (this.bannerCurrentIndex + 1) % this.visibleImages.length;
  }
  prevBannerSlide() {
    if (!this.visibleImages || this.visibleImages.length <= 1)
      return;
    this.bannerCurrentIndex = (this.bannerCurrentIndex - 1 + this.visibleImages.length) % this.visibleImages.length;
  }
  goToBannerSlide(index) {
    this.bannerCurrentIndex = index;
    this.startBannerAutoSlide();
  }
  onBannerTouchStart(e) {
    if (e.touches && e.touches.length > 0) {
      this.bannerTouchStartX = e.touches[0].clientX;
    }
  }
  onBannerTouchEnd(e) {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = this.bannerTouchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          this.nextBannerSlide();
        } else {
          this.prevBannerSlide();
        }
        this.startBannerAutoSlide();
      }
    }
  }
  ngOnDestroy() {
    this.stopBannerAutoSlide();
    if (this.jackpotInterval) {
      clearInterval(this.jackpotInterval);
    }
    this.subs.forEach((s) => s.unsubscribe());
    this.subs = [];
    this.subtabClose();
  }
  selectVisibleImages(all, width, forceRefresh = false) {
    if (!Array.isArray(all) || all.length === 0)
      return;
    all.forEach((b) => {
      if (!b.media && b.image)
        b.media = b.image;
      if (!b.media && b.heroBanner?.url)
        b.media = b.heroBanner.url;
      if (!b.media && b.heroBanner?.data?.attributes?.url)
        b.media = b.heroBanner.data.attributes.url;
    });
    const prev = JSON.stringify(this.visibleImages.map((i) => i.documentId || i.image || i.id));
    let selected = [];
    if (width <= 767) {
      selected = all.filter((b) => b.ImageStatus === "active" && (b.mobile === true || b.mobile === "true"));
    } else {
      selected = all.filter((b) => b.ImageStatus === "active" && (b.desktop === true || b.desktop === "true" || b.tablet === true || b.tab === true || b.tablet === "true" || b.tab === "true"));
    }
    if (selected.length === 0) {
      selected = all;
    }
    const next = JSON.stringify(selected.map((i) => i.documentId || i.image || i.id));
    if (forceRefresh || prev !== next) {
      this.visibleImages = selected;
      if (this.bannerCurrentIndex >= this.visibleImages.length) {
        this.bannerCurrentIndex = 0;
      }
      setTimeout(() => this.scrollingActiveBtn(), 50);
    }
  }
  isToday(dateString) {
    if (!dateString)
      return false;
    const eventDate = new Date(dateString);
    const today = /* @__PURE__ */ new Date();
    return eventDate.getFullYear() === today.getFullYear() && eventDate.getMonth() === today.getMonth() && eventDate.getDate() === today.getDate();
  }
  isTomorrow(dateString) {
    if (!dateString)
      return false;
    const eventDate = new Date(dateString);
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return eventDate.getFullYear() === tomorrow.getFullYear() && eventDate.getMonth() === tomorrow.getMonth() && eventDate.getDate() === tomorrow.getDate();
  }
  getEventTag(event2) {
    if (!event2)
      return "Upcoming";
    if (event2.isLive)
      return "Live";
    if (this.isToday(event2.startEventDate || event2.startDate))
      return "Today";
    if (this.isTomorrow(event2.startEventDate || event2.startDate))
      return "Tomorrow";
    return "Upcoming";
  }
  processEvents(data) {
    if (!data)
      return;
    this.eventsRes = [];
    this.cricketEventsRes = [];
    this.soccerEventsRes = [];
    const eventsList = Array.isArray(data.events) ? data.events : [];
    const isValidMarket = (market) => {
      if (!market || !Array.isArray(market.selections))
        return false;
      const types = market.selections.map((s) => s && s.outcomeType || "");
      return types.includes("Home") && types.includes("Away");
    };
    for (const event2 of eventsList) {
      const sportName = (event2.sportName || "").toLowerCase();
      if (!Array.isArray(event2.markets))
        continue;
      for (const market of event2.markets) {
        if (sportName === "american football" || sportName === "football") {
          if (market?.marketType?.name !== "FT Spread")
            continue;
          if (!isValidMarket(market))
            continue;
        } else if (sportName === "cricket") {
          if (!isValidMarket(market))
            continue;
        } else {
          continue;
        }
        market.leagueName = event2.leagueName || "";
        market.eventLeagId = event2._id;
        market.sportName = event2.sportName;
        market.score = event2.score || null;
        market.formattedDate = this.datePipe.transform(market.startDate || event2.startDate, "EEE, MMM d, hh:mm a") || "";
        market.eventTag = this.getEventTag(event2);
        if (Array.isArray(market.selections)) {
          for (const sel of market.selections) {
            if (!sel || !sel.outcomeType)
              continue;
            const t = sel.outcomeType;
            if (t === "Home")
              market.homeValuddde = sel;
            else if (t === "Away")
              market.awayValue = sel;
            else if (t === "Tie" || t === "Draw")
              market.tieValue = sel;
          }
        }
        if (!this.eventsRes.some((e) => e._id === market._id)) {
          this.eventsRes.push(market);
        }
        if (sportName === "cricket")
          this.cricketEventsRes.push(market);
        else
          this.soccerEventsRes.push(market);
      }
    }
    const liveEvents = this.eventsRes.some((e) => e.eventTag === "Live");
    this.manageLiveInterval(liveEvents);
    this.scrollingActiveBtn();
    console.log(this.eventsRes);
  }
  manageLiveInterval(hasLive) {
    if (hasLive && !this.isLiveRunning) {
      this.isLiveRunning = true;
      this.liveInterval = setInterval(() => {
        this.sportsevent();
      }, 6e4);
    }
    if (!hasLive && this.isLiveRunning) {
      clearInterval(this.liveInterval);
      this.isLiveRunning = false;
    }
  }
  scrollingActiveBtn() {
    this.safeCall(() => this.checkOverflow());
    this.safeCall(() => this.checkFeaturedOverflow());
    this.safeCall(() => this.checkSlotsOverflow());
    this.safeCall(() => this.checkNavigationButtonsliveCasino());
    this.safeCall(() => this.updateShadowEffectsliveCasino());
    setTimeout(() => {
      this.safeCall(() => this.checkOverflow());
      this.safeCall(() => this.checkFeaturedOverflow());
      this.safeCall(() => this.checkSlotsOverflow());
      this.safeCall(() => this.checkNavigationButtonsliveCasino());
      this.safeCall(() => this.updateShadowEffectsliveCasino());
    }, 300);
  }
  moveToTop() {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  }
  scrollByElement(el, amount = 300) {
    const native = this.elNative(el);
    if (!native)
      return;
    native.scrollBy({ left: amount, behavior: "smooth" });
  }
  scrollRight() {
    this.scrollByElement(this.scrollContainerFeatured, 300);
    setTimeout(() => this.safeCall(() => this.checkNavigationButtons()), 300);
  }
  scrollLeft() {
    this.scrollByElement(this.scrollContainerFeatured, -300);
    setTimeout(() => this.safeCall(() => this.checkNavigationButtons()), 300);
  }
  scrollRightSlots() {
    this.scrollByElement(this.scrollContainerSlots, 300);
    setTimeout(() => this.safeCall(() => this.checkNavigationButtons()), 300);
  }
  scrollLeftSlots() {
    this.scrollByElement(this.scrollContainerSlots, -300);
    setTimeout(() => this.safeCall(() => this.checkNavigationButtons()), 300);
  }
  scrollNext() {
    const amount = 350 + parseFloat(getComputedStyle(document.documentElement).fontSize || "16");
    const native = this.elNative(this.sportsScroller);
    if (!native)
      return;
    native.scrollBy({ left: amount, behavior: "smooth" });
  }
  scrollPrev() {
    const amount = 350 + parseFloat(getComputedStyle(document.documentElement).fontSize || "16");
    const native = this.elNative(this.sportsScroller);
    if (!native)
      return;
    native.scrollBy({ left: -amount, behavior: "smooth" });
  }
  scrollLeftliveCasino() {
    this.scrollByElement(this.scrollContainerLiveCasino, -300);
    setTimeout(() => {
      this.safeCall(() => this.checkNavigationButtonsliveCasino());
      this.safeCall(() => this.updateShadowEffectsliveCasino());
    }, 300);
  }
  scrollRightliveCasino() {
    this.scrollByElement(this.scrollContainerLiveCasino, 300);
    setTimeout(() => {
      this.safeCall(() => this.checkNavigationButtonsliveCasino());
      this.safeCall(() => this.updateShadowEffectsliveCasino());
    }, 300);
  }
  // Check overflow for sports scroller
  checkOverflow() {
    const container = this.elNative(this.sportsScroller);
    if (!container)
      return;
    const prevBtn = document.querySelector(".sports_btn_prev");
    const nextBtn = document.querySelector(".sports_btn_next");
    if (!prevBtn || !nextBtn)
      return;
    const isOverflowing = container.scrollWidth > container.clientWidth;
    prevBtn.disabled = container.scrollLeft <= 0;
    nextBtn.disabled = !isOverflowing || container.scrollLeft + container.clientWidth >= container.scrollWidth;
    if (!container.hasAttribute("data-sports-listener")) {
      container.setAttribute("data-sports-listener", "true");
      container.addEventListener("scroll", () => {
        prevBtn.disabled = container.scrollLeft <= 0;
        nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      });
    }
  }
  checkFeaturedOverflow() {
    const container = this.elNative(this.scrollContainerFeatured);
    if (!container)
      return;
    const prevBtn = document.querySelector(".featured_btn_prev");
    const nextBtn = document.querySelector(".featured_btn_next");
    if (!prevBtn || !nextBtn)
      return;
    const isOverflowing = container.scrollWidth > container.clientWidth;
    prevBtn.disabled = container.scrollLeft <= 0;
    nextBtn.disabled = !isOverflowing || container.scrollLeft + container.clientWidth >= container.scrollWidth;
    if (!container.hasAttribute("data-featured-listener")) {
      container.setAttribute("data-featured-listener", "true");
      container.addEventListener("scroll", () => {
        prevBtn.disabled = container.scrollLeft <= 0;
        nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      });
    }
  }
  checkSlotsOverflow() {
    const container = this.elNative(this.scrollContainerSlots);
    if (!container)
      return;
    const prevBtn = document.querySelector(".slots_btn_prev");
    const nextBtn = document.querySelector(".slots_btn_next");
    if (!prevBtn || !nextBtn)
      return;
    const isOverflowing = container.scrollWidth > container.clientWidth;
    prevBtn.disabled = container.scrollLeft <= 0;
    nextBtn.disabled = !isOverflowing || container.scrollLeft + container.clientWidth >= container.scrollWidth;
    if (!container.hasAttribute("data-slots-listener")) {
      container.setAttribute("data-slots-listener", "true");
      container.addEventListener("scroll", () => {
        prevBtn.disabled = container.scrollLeft <= 0;
        nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      });
    }
  }
  checkNavigationButtons() {
    const container = this.elNative(this.scrollContainer);
    const prevBtn = document.querySelector(".prev_btn");
    const nextBtn = document.querySelector(".next_btn");
    if (!container || !prevBtn || !nextBtn)
      return;
    prevBtn.disabled = container.scrollLeft <= 10;
    nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
  }
  checkNavigationButtonsliveCasino() {
    const container = this.elNative(this.scrollContainerLiveCasino);
    const prevBtn = document.querySelector(".prev_btnLive");
    const nextBtn = document.querySelector(".next_btnLive");
    if (!container || !prevBtn || !nextBtn)
      return;
    prevBtn.disabled = container.scrollLeft <= 10;
    nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
  }
  updateShadowEffectsliveCasino() {
    const container = this.elNative(this.scrollContainerLiveCasino);
    if (!container)
      return;
    const wrapper = container.parentElement;
    if (!wrapper)
      return;
    const hasLeft = container.scrollLeft > 10;
    const hasRight = container.scrollLeft + container.clientWidth < container.scrollWidth - 10;
    wrapper.classList.toggle("has-left", hasLeft);
    wrapper.classList.toggle("has-right", hasRight);
  }
  onScroll() {
    this.safeCall(() => this.checkNavigationButtons());
  }
  onScrollliveCasino() {
    this.safeCall(() => this.checkNavigationButtonsliveCasino());
    this.safeCall(() => this.updateShadowEffectsliveCasino());
  }
  showPopUp(value) {
    this.store.dispatch(new ResetState());
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
    const hostViewContainerRef = this.alertHost;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.formState = value;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
  navigates(route) {
    this.router.navigate([route]);
  }
  subtabClose() {
    this.urlSafe = null;
    var session = sessionStorage.getItem("closeGameSession");
    if (session) {
      let body = {
        gameSession: session
      };
      this.playerservies.closesession(body).subscribe((data) => {
        console.log(data);
      });
      this.playerservies.gameclose(session).subscribe((data) => {
        console.log(data);
      });
    }
  }
  toggleFullScreen() {
    if (!this.gameIframe || !this.gameIframe.nativeElement) {
      console.warn("iframe not available");
      return;
    }
    const iframe = this.gameIframe.nativeElement;
    if (!document.fullscreenElement) {
      if (iframe.requestFullscreen)
        iframe.requestFullscreen();
      else if (iframe.mozRequestFullScreen)
        iframe.mozRequestFullScreen();
      else if (iframe.webkitRequestFullscreen)
        iframe.webkitRequestFullscreen();
      else if (iframe.msRequestFullscreen)
        iframe.msRequestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  liveDealerMain(gameId, gameName, provider) {
    if (provider === "Evolution")
      this.evogamesin(gameId, gameName);
    else
      this.liveDealer(gameId, gameName);
  }
  liveDealer(gname, gameName) {
    if (!this.playerLoggedIn) {
      this.showPopUp("LOGIN");
      return;
    }
    const wsessionId = sessionStorage.getItem("raj_wSession");
    const sub = this.GameCmsService.getEzugi(wsessionId).subscribe((liveDealerdata) => {
      if (liveDealerdata?.EZUGI_TOKEN) {
        const ezugiLunch = liveDealerdata.EZUGI_GAME_URL + "token=" + liveDealerdata.EZUGI_TOKEN + "&operatorId=" + liveDealerdata.EZUGI_OPERATOR_ID + "&clientType=html5&language=en&selectGame=" + gname;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(ezugiLunch);
        this.moveToTop();
      }
    });
    this.subs.push(sub);
  }
  evogamesin(gameId, gameName) {
    if (!this.playerLoggedIn) {
      this.showPopUp("LOGIN");
      return;
    }
    const wesessioid = sessionStorage.getItem("raj_wSession");
    const sub = this.GameCmsService.getEzugi(wesessioid).subscribe((data) => {
      if (data?.EZUGI_TOKEN) {
        const evourl = `${data.EZUGI_GAME_URL}token=${data.EZUGI_TOKEN}&operatorId=${data.EZUGI_OPERATOR_ID}&language=en&clientType=html5&openTable=${gameId}&homeUrl=${window.location.origin}/home`;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(evourl);
        this.moveToTop();
      }
    });
    this.subs.push(sub);
  }
  habanaroGm(gameName, gameType) {
    if (!this.playerLoggedIn) {
      this.showPopUp("LOGIN");
      return;
    }
    this.keyname = gameType;
    const profile = sessionStorage.getItem("raj_wSession");
    const sub = this.GameCmsService.heblounchSession(profile, this.keyname).subscribe((data) => {
      if (data.STATUS == "SUCCESS") {
        const gamelunchurl = data?.URL;
        if (gamelunchurl) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(gamelunchurl);
          this.moveToTop();
        }
      } else {
        this.messageservice.error("Failed", data.Message);
      }
    }, () => {
    });
    this.subs.push(sub);
  }
  ballagamesLaunch(id, gameName) {
    if (!this.playerLoggedIn) {
      this.showPopUp("LOGIN");
      return;
    }
    this.gameIdIndie = id;
    const token = this.TokenData;
    if (!token) {
      const ses = sessionStorage.getItem("raj_wSession");
      const s = this.GameCmsService.indicasino(ses || "").subscribe((response) => {
        this.TokenData = response;
        this._openIndieGame(id, gameName);
      });
      this.subs.push(s);
      return;
    }
    this._openIndieGame(id, gameName);
  }
  _openIndieGame(id, gameName) {
    try {
      const sendToIndie = `gameId=${id}&playerToken=${encodeURIComponent(this.TokenData?.token || "")}&site=rajpoker`;
      const indieUrlBase = this.TokenData?.url || "";
      this.indieUrl_1 = indieUrlBase.endsWith("/") ? indieUrlBase + gameName + "?" + sendToIndie : indieUrlBase + "/" + gameName + "?" + sendToIndie;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.indieUrl_1);
      this.moveToTop();
    } catch {
    }
  }
  navigateSport() {
    this.router.navigate(["/sports"]);
  }
  onImageLoad(key) {
    this.loadedImages[String(key)] = true;
    this.loadedImages1[String(key)] = true;
    this.loadedImages2[String(key)] = true;
  }
  tieleagId(seleId, eventId) {
    localStorage.setItem("selectionsId", seleId);
    localStorage.setItem("EventId", eventId);
    if (this.playerLoggedIn)
      this.router.navigate(["/sports"]);
    else
      this.showPopUp("LOGIN");
  }
  onImageLoadHome(key) {
    this.loadedImagesmain[String(key)] = true;
  }
  onImageLoadlive(key) {
    this.loadedImageslive[String(key)] = true;
  }
  onChangeActive(num) {
    this.activeLiveCasino = num;
  }
  onChangeActiveBestGame(num) {
    this.activeBestgame = num;
  }
  stopGif() {
    const img = this.gifImg.nativeElement;
    const src = img.src;
    setTimeout(() => {
      img.src = src.replace(".gif", ".png");
    }, 1e3);
  }
  routerLinks(data) {
    const link = data?.routerLink;
    if (!link)
      return;
    const isDashboardLink = link.startsWith("/dashboard");
    if (isDashboardLink && !this.playerLoggedIn) {
      this.showPopUp("LOGIN");
      return;
    }
    this.router.navigate([link]);
  }
  macInstruction(event2, data) {
    event2.preventDefault();
    console.log(data);
    if (data === "open") {
      console.log(data);
      this.instruction = true;
    } else {
      this.instruction = false;
    }
  }
  onTouchStart(event2) {
    this.touchStartX = event2.touches[0].clientX;
    this.isSwiping = true;
  }
  onTouchMove(event2) {
    if (!this.isSwiping)
      return;
    this.touchEndX = event2.touches[0].clientX;
  }
  onTouchEnd() {
    if (!this.isSwiping)
      return;
    const swipeDistance = this.touchStartX - this.touchEndX;
    const minSwipeDistance = 50;
    if (swipeDistance > minSwipeDistance) {
      this.changeSlide("right");
    } else if (swipeDistance < -minSwipeDistance) {
      this.changeSlide("left");
    }
    this.isSwiping = false;
  }
  torromethod(game) {
    console.log(game);
    if (this.playerLoggedIn) {
      const data = localStorage.getItem("providerStatus");
      if (data) {
        const providerData = JSON.parse(data);
        if (providerData.status == false) {
          this.messageservice.success("Success", providerData.message);
          return;
        }
      }
      let body = {
        "gameId": game.game_code,
        "provider": game.provider
      };
      this.playerservies.torrolaunch(body).subscribe((data2) => {
        if (data2) {
          sessionStorage.setItem("closeGameSession", data2.token);
          if (data2.url) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data2.url);
            if (this.urlSafe) {
              this.moveToTop();
            }
          } else {
            this.messageservice.error("Failed", data2.message);
          }
        }
      });
    } else {
      this.showPopUp("LOGIN");
    }
  }
  getGameImage(game, i) {
    return i < 9 ? `assets/GameImgs/evolution_new_games/${game.id}.jpg` : game.images;
  }
  gvproviderapi(data) {
    if (this.playerLoggedIn) {
      let body = {
        "gameId": data.id,
        "provider": data.provider + "GV",
        "language": "en"
      };
      this.playerservies.gvproviderapi(body).subscribe((data2) => {
        if (data2) {
          sessionStorage.setItem("closeGameSession", data2.token);
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data2.url);
          if (this.urlSafe) {
            this.moveToTop();
          }
        }
      });
    } else {
      this.showPopUp("LOGIN");
    }
  }
  vivogameLaunch(game) {
    if (this.playerLoggedIn) {
      if (game.provider == "vivogaming") {
        this.playerservies.gamelunallvivogaming().subscribe((response) => {
          const launchUrl = response.VIVO_GAME_LAUNCH_URL.split("selectedGame=")[0] + `selectedGame=${game.gameId}` + response.VIVO_GAME_LAUNCH_URL.split("selectedGame=All")[1];
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(launchUrl);
          if (this.urlSafe) {
            this.moveToTop();
          }
        });
      } else {
        this.playerservies.gamelunallproviders(game).subscribe((response) => {
          if (response) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(response.url);
            if (this.urlSafe) {
              this.moveToTop();
            }
          }
          console.log(response);
        });
      }
    } else {
      this.showPopUp("LOGIN");
    }
  }
  static {
    this.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(GameCmsService), \u0275\u0275directiveInject(CashierService), \u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(CommonUtilService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home-page"]], viewQuery: function HomePage_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5, ViewContainerRef);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
        \u0275\u0275viewQuery(_c6, 5);
        \u0275\u0275viewQuery(_c7, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sportsScroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainerLiveCasino = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainerFeatured = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainerSlots = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gameIframe = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gifImg = _t.first);
      }
    }, hostBindings: function HomePage_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function HomePage_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeyHandler($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, features: [\u0275\u0275ProvidersFeature([DatePipe])], decls: 284, vars: 16, consts: [["alertHost", ""], ["scrollContainerLiveCasino", ""], ["scrollContainerSlots", ""], ["gameIframe", ""], ["sportsScroller", ""], [4, "ngIf"], ["id", "home-page"], [1, "top-banner-section", 3, "mouseenter", "mouseleave"], [1, "banner-carousel-container", 3, "touchstart", "touchend"], ["id", "carouselExampleIndicators", 1, "carousel", "slide", "banner-native-slider"], [1, "carousel-inner", "banner-carousel-inner"], ["class", "carousel-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "carousel-indicators", "banner-dashed-indicators"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Previous slide", 1, "carousel-control-prev", "banner-nav-chevron", "prev", 3, "click"], ["viewBox", "0 0 24 24", "width", "22", "height", "22", "stroke", "currentColor", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "15 18 9 12 15 6"], ["type", "button", "aria-label", "Next slide", 1, "carousel-control-next", "banner-nav-chevron", "next", 3, "click"], ["points", "9 18 15 12 9 6"], [1, "quick-download-strip"], ["href", "/download/setup.exe", "aria-label", "Download for Windows", 1, "quick-dock-btn", "quick-dock-win"], [1, "dock-btn-icon-wrap"], [1, "fa-brands", "fa-windows"], [1, "dock-btn-text"], [1, "dock-btn-badge"], ["type", "button", "aria-label", "Instant Web Play", 1, "quick-dock-btn", "quick-dock-play", 3, "click"], [1, "fa-solid", "fa-circle-play"], [1, "dock-btn-badge", "play-badge"], ["href", "https://app.rajpoker.com/download/mobile/pokermobile.apk", "aria-label", "Download Android APK", 1, "quick-dock-btn", "quick-dock-android"], [1, "fa-brands", "fa-android"], [1, "dock-btn-badge", "apk-badge"], ["role", "button", "tabindex", "0", "aria-label", "Apple iOS Web App", 1, "quick-dock-btn", "quick-dock-ios", 3, "click"], [1, "fa-brands", "fa-apple"], [1, "dock-btn-badge", "ios-badge"], ["aria-label", "Featured Categories", 1, "stake-feature-section"], [1, "stake-feature-grid"], ["role", "button", "tabindex", "0", 1, "stake-feature-card", "stake-card-casino", 3, "click"], [1, "stake-card-left"], [1, "stake-card-title"], [1, "stake-card-subtitle"], [1, "stake-explore-btn"], [1, "fa-solid", "fa-arrow-right"], [1, "stake-card-graphic"], ["src", "assets/home_images/livecasino.png", "alt", "Casino Games", "loading", "lazy", 1, "stake-graphic-img"], ["role", "button", "tabindex", "0", 1, "stake-feature-card", "stake-card-sports", 3, "click"], ["src", "assets/home_images/sports.png", "alt", "Sports Betting", "loading", "lazy", 1, "stake-graphic-img"], ["role", "button", "tabindex", "0", 1, "stake-feature-card", "stake-card-slots", 3, "click"], ["src", "assets/home_images/slots.png", "alt", "Slots Jackpots", "loading", "lazy", 1, "stake-graphic-img"], ["role", "button", "tabindex", "0", 1, "stake-feature-card", "stake-card-poker", 3, "click"], ["src", "assets/home_images/crash.png", "alt", "Poker and Crash Multipliers", "loading", "lazy", 1, "stake-graphic-img"], [1, "hero-ticker-ribbon"], [1, "ticker-box", "jackpot-box"], [1, "ticker-icon-circle", "gold-pulse"], [1, "fa-solid", "fa-coins"], [1, "ticker-text-group"], [1, "ticker-caption"], [1, "fa-solid", "fa-crown", "text-warning"], [1, "ticker-number", "gold-number"], [1, "ticker-box", "player-box"], [1, "ticker-icon-circle", "green-pulse"], [1, "fa-solid", "fa-users"], [1, "ticker-number"], [1, "ticker-box", "speed-box"], [1, "ticker-icon-circle", "blue-pulse"], [1, "fa-solid", "fa-bolt-lightning"], [1, "ticker-box", "prize-box"], [1, "ticker-icon-circle", "red-pulse"], [1, "fa-solid", "fa-trophy"], ["aria-labelledby", "live-casino-row", 1, "home_live_casino_container"], [1, "trending_header"], [1, "trending_head", "home_live_casino_head"], ["id", "live-casino-row", 1, "live_casino_title", 3, "routerLink"], [1, "live-neon-pill"], [1, "radar-dot"], [1, "gold-gradient-title"], [1, "section-subheading"], [1, "trending_controls"], ["aria-label", "all navigates to live casino", 1, "see_all_btn", 3, "click"], ["aria-label", "prev slide", 1, "nav_btn", "prev_btnLive", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M15 18L9 12L15 6", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "Next slide", 1, "nav_btn", "next_btnLive", 3, "click"], ["d", "M9 18L15 12L9 6", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "home_live_casino_content"], ["role", "button", "tabindex", "0", "aria-label", "move to right", 1, "sub_home_live_casino_content", 3, "scroll"], ["class", "home_live_image_box", "role", "button", "tabindex", "0", "aria-label", "game launch", 4, "ngFor", "ngForOf"], [1, "home_game_grid"], ["role", "button", "tabindex", "0", "aria-label", "Go to Poker", 1, "home_grid_box", "home_grid_poker", 3, "click"], [1, "home_grid_game_icon"], ["src", "assets/home_images/livecasino.webp", "alt", "Poker", "loading", "lazy"], [1, "home_grid_box_content"], [1, "grid-card-tag-row"], [1, "grid-card-genre"], [1, "home_grid_live_badge"], [1, "grid_pulse"], ["id", "sub-main-poker"], [1, "home_grid_tag"], [1, "grid-arrow-icon"], ["role", "button", "tabindex", "0", "aria-label", "Go to Rummy", 1, "home_grid_box", "home_grid_rummy", 3, "click"], ["src", "assets/home_images/slots.webp", "alt", "Rummy", "loading", "lazy"], [1, "grid_pulse", "grid_pulse_purple"], ["id", "sub-main-rummy"], ["role", "button", "tabindex", "0", "aria-label", "Go to Live Casino", 1, "home_grid_box", "home_grid_casino", 3, "click"], ["src", "assets/home_images/livecasino.webp", "alt", "Casino", "loading", "lazy"], [1, "grid_pulse", "grid_pulse_green"], ["id", "sub-main-casino"], ["role", "button", "tabindex", "0", "aria-label", "Go to Sports", 1, "home_grid_box", "home_grid_sports", 3, "click"], ["src", "assets/home_images/sports.webp", "alt", "Sports", "loading", "lazy"], [1, "grid_pulse", "grid_pulse_blue"], ["id", "sub-main-sports"], ["role", "button", "tabindex", "0", "aria-label", "Go to Slots", 1, "home_grid_box", "home_grid_slots", 3, "click"], ["src", "assets/home_images/slots.webp", "alt", "Slots", "loading", "lazy"], [1, "grid_pulse", "grid_pulse_yellow"], ["id", "sub-main-slots"], ["role", "button", "tabindex", "0", "aria-label", "Go to Crash", 1, "home_grid_box", "home_grid_crash", 3, "click"], ["src", "assets/home_images/crash.webp", "alt", "Crash", "loading", "lazy"], [1, "grid_pulse", "grid_pulse_orange"], ["id", "sub-main-crash"], ["class", "sports_games_container", 4, "ngIf"], ["aria-labelledby", "slots-row", 1, "slots_games_container"], [1, "trending_header", "m_b_sm"], ["id", "slots-row", 1, "live_casino_title", 3, "routerLink"], [1, "slot-neon-pill"], [1, "fa-solid", "fa-fire"], ["aria-label", "all games slots", 1, "see_all_btn", 3, "click"], ["aria-label", "Prev slide", 1, "nav_btn", "slots_btn_prev", 3, "click"], ["aria-label", "Next slide", 1, "nav_btn", "slots_btn_next", 3, "click"], [1, "position-relative"], ["role", "button", "tabindex", "0", "aria-label", "move slots", 1, "sub_home_live_casino_content", 3, "scroll"], ["class", "slots_image_box", "role", "button", "tabindex", "0", "aria-label", "open slot games", 3, "click", 4, "ngFor", "ngForOf"], [1, "fd"], ["class", "promo-modal-backdrop", "role", "dialog", "aria-modal", "true", "aria-label", "Official Promotion", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "close game", 1, "game-close-btn", 3, "click"], ["scrolling", "auto", "frameborder", "0", "allowfullscreen", "", "title", "Live casino game", 1, "game-iframe", 3, "src"], ["type", "button", "aria-label", "close game", 3, "click"], ["_ngcontent-wuc-c7", "", 1, "fas", "fa-expand-arrows-alt", "iframe_fullS_icon", "ml-4"], [1, "carousel-item", 3, "click"], [1, "banner-slide-wrapper"], ["loading", "eager", "decoding", "async", 1, "banner-slide-img", 3, "src", "alt"], ["type", "button", 3, "click"], ["role", "button", "tabindex", "0", "aria-label", "game launch", 1, "home_live_image_box"], [1, "live-card-top-badges"], [1, "live_casino_card_badge"], [1, "live-pulse-dot"], [1, "live-table-limit-badge"], ["class", "shimmer", 4, "ngIf"], ["style", "aspect-ratio: 1/1;", "loading", "lazy", "width", "100%", 3, "src", "loaded", "alt", "load", "click", 4, "ngIf"], [1, "live-card-bottom-bar"], [1, "live-game-provider"], [1, "live-game-name"], [1, "play_container", 3, "click"], ["type", "button", "aria-label", "Play icons", 1, "play-pulse-btn"], [1, "fa-solid", "fa-play"], [1, "play-overlay-text"], [1, "shimmer"], ["loading", "lazy", "width", "100%", 2, "aspect-ratio", "1/1", 3, "load", "click", "src", "alt"], [1, "sports_games_container"], ["aria-labelledby", "sports-title", 1, "trending_header"], ["id", "sports-title", 1, "live_casino_title"], ["aria-label", "prev slide", 1, "nav_btn", "sports_btn_prev", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M15 18L9 12L15 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "Next slide", 1, "nav_btn", "sports_btn_next", 3, "click"], ["d", "M9 18L15 12L9 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "position-relative", "aria-labelledby", "sports-row", 4, "ngIf"], ["aria-labelledby", "sports-row", 1, "position-relative"], ["role", "button", "tabindex", "0", "aria-label", "sports-section", 1, "sub_home_live_casino_content", 3, "scroll"], ["class", "sports_games_widget_box", 4, "ngFor", "ngForOf"], [1, "sports_games_widget_box"], [1, "leag_n_Match"], [1, "nameLeg"], [1, "league-text", 3, "title"], [1, "eventTag", 3, "ngClass"], [1, "matchName_icon"], ["class", "gif_img", "autoplay", "", "muted", "", "playsinline", "", "preload", "none", "aria-label", "Cricket animation", 4, "ngIf"], ["width", "31", "height", "31", "loading", "lazy", "decoding", "async", "src", "assets/football123.gif", "alt", "football", 4, "ngIf"], [2, "font-size", "14px", "margin", "0"], [1, "leagNameSportN"], [2, "font-size", "13px", "color", "#ffffff"], [1, "sports_home_FC_div"], [1, "sports_teams"], [1, "fc_names", 3, "title"], ["class", "score", 4, "ngIf"], [1, "sports_home_ratingDiv"], ["class", "rating_divs", "role", "button", "tabindex", "0", "aria-label", "home value", 3, "click", 4, "ngIf"], ["class", "rating_divs", "role", "button", "tabindex", "0", "aria-label", "out value", 3, "click", 4, "ngIf"], ["class", "rating_divs", "role", "button", "tabindex", "0", "aria-label", "tie value", 3, "click", 4, "ngIf"], ["autoplay", "", "muted", "", "playsinline", "", "preload", "none", "aria-label", "Cricket animation", 1, "gif_img"], ["src", "assets/cricket.webm", "type", "video/webm"], ["width", "31", "height", "31", "loading", "lazy", "decoding", "async", "src", "assets/football123.gif", "alt", "football"], [1, "score"], ["role", "button", "tabindex", "0", "aria-label", "home value", 1, "rating_divs", 3, "click"], [1, "sports_home_assist_div"], ["role", "button", "tabindex", "0", "aria-label", "out value", 1, "rating_divs", 3, "click"], ["role", "button", "tabindex", "0", "aria-label", "tie value", 1, "rating_divs", 3, "click"], ["role", "button", "tabindex", "0", "aria-label", "open slot games", 1, "slots_image_box", 3, "click"], [1, "slot_badge"], ["loading", "lazy", "width", "100%", 2, "aspect-ratio", "1/1", 3, "load", "src", "alt"], [1, "slots_info_overlay"], [1, "slots_game_title"], [1, "play_container"], ["type", "button", "aria-label", "Play game", 1, "play-pulse-btn"], ["role", "dialog", "aria-modal", "true", "aria-label", "Official Promotion", 1, "promo-modal-backdrop", 3, "click"], [1, "promo-image-card-container", 3, "click"], ["aria-label", "Close popup", "title", "Close popup", 1, "promo-floating-close-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["role", "button", "tabindex", "0", "title", "Follow our Instagram @RAJPLAY.LIVE", 1, "promo-flyer-clickable", 3, "click"], ["src", "assets/instagram_popup.png", "alt", "Follow Our Instagram Page @RAJPLAY.LIVE", "loading", "eager", 1, "promo-flyer-img"], ["role", "button", "tabindex", "0", "title", "Follow on Instagram", 1, "promo-bottom-hint", 3, "click"], [1, "fa-brands", "fa-instagram"], [1, "fa-solid", "fa-arrow-up-right-from-square", "hint-ext-icon"]], template: function HomePage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, HomePage_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div");
        \u0275\u0275template(3, HomePage_div_3_Template, 8, 1, "div", 5);
        \u0275\u0275elementStart(4, "div", 6)(5, "section", 7);
        \u0275\u0275listener("mouseenter", function HomePage_Template_section_mouseenter_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.stopBannerAutoSlide());
        })("mouseleave", function HomePage_Template_section_mouseleave_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startBannerAutoSlide());
        });
        \u0275\u0275elementStart(6, "div", 8);
        \u0275\u0275listener("touchstart", function HomePage_Template_div_touchstart_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBannerTouchStart($event));
        })("touchend", function HomePage_Template_div_touchend_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBannerTouchEnd($event));
        });
        \u0275\u0275elementStart(7, "div", 9)(8, "div", 10);
        \u0275\u0275template(9, HomePage_div_9_Template, 3, 4, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 12);
        \u0275\u0275template(11, HomePage_button_11_Template, 1, 4, "button", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 14);
        \u0275\u0275listener("click", function HomePage_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.prevBannerSlide());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 15);
        \u0275\u0275element(14, "polyline", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "button", 17);
        \u0275\u0275listener("click", function HomePage_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.nextBannerSlide());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 15);
        \u0275\u0275element(17, "polyline", 18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "div", 19)(19, "a", 20)(20, "span", 21);
        \u0275\u0275element(21, "i", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 23);
        \u0275\u0275text(23, "Windows");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 24);
        \u0275\u0275text(25, "PC");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 25);
        \u0275\u0275listener("click", function HomePage_Template_button_click_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.instantPlayLink());
        });
        \u0275\u0275elementStart(27, "span", 21);
        \u0275\u0275element(28, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 23);
        \u0275\u0275text(30, "Instant Play");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 27);
        \u0275\u0275text(32, "WEB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "a", 28)(34, "span", 21);
        \u0275\u0275element(35, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 23);
        \u0275\u0275text(37, "Android");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 30);
        \u0275\u0275text(39, "APK");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "a", 31);
        \u0275\u0275listener("click", function HomePage_Template_a_click_40_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.macInstruction($event, "open"));
        });
        \u0275\u0275elementStart(41, "span", 21);
        \u0275\u0275element(42, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 23);
        \u0275\u0275text(44, "iOS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 33);
        \u0275\u0275text(46, "PWA");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "section", 34)(48, "div", 35)(49, "div", 36);
        \u0275\u0275listener("click", function HomePage_Template_div_click_49_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/live-casino"));
        });
        \u0275\u0275elementStart(50, "div", 37)(51, "h3", 38);
        \u0275\u0275text(52, "Casino");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 39);
        \u0275\u0275text(54, "Thousands of Games");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 40)(56, "span");
        \u0275\u0275text(57, "Explore Tables");
        \u0275\u0275elementEnd();
        \u0275\u0275element(58, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 42);
        \u0275\u0275element(60, "img", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 44);
        \u0275\u0275listener("click", function HomePage_Template_div_click_61_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/sports"));
        });
        \u0275\u0275elementStart(62, "div", 37)(63, "h3", 38);
        \u0275\u0275text(64, "Sports Betting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p", 39);
        \u0275\u0275text(66, "Support Your Team");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 40)(68, "span");
        \u0275\u0275text(69, "In-Play Odds");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 42);
        \u0275\u0275element(72, "img", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 46);
        \u0275\u0275listener("click", function HomePage_Template_div_click_73_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/slots"));
        });
        \u0275\u0275elementStart(74, "div", 37)(75, "h3", 38);
        \u0275\u0275text(76, "Slots");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 39);
        \u0275\u0275text(78, "Spin & Win Jackpots");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "span", 40)(80, "span");
        \u0275\u0275text(81, "1000+ Jackpots");
        \u0275\u0275elementEnd();
        \u0275\u0275element(82, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 42);
        \u0275\u0275element(84, "img", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 48);
        \u0275\u0275listener("click", function HomePage_Template_div_click_85_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.claimWelcomeBonus());
        });
        \u0275\u0275elementStart(86, "div", 37)(87, "h3", 38);
        \u0275\u0275text(88, "Poker & Crash");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "p", 39);
        \u0275\u0275text(90, "Real Cash Multipliers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "span", 40)(92, "span");
        \u0275\u0275text(93, "Join Action");
        \u0275\u0275elementEnd();
        \u0275\u0275element(94, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 42);
        \u0275\u0275element(96, "img", 49);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(97, "section", 50)(98, "div", 51)(99, "div", 52);
        \u0275\u0275element(100, "i", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 54)(102, "span", 55);
        \u0275\u0275element(103, "i", 56);
        \u0275\u0275text(104, " MEGA POKER JACKPOT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "span", 57);
        \u0275\u0275text(106);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "div", 58)(108, "div", 59);
        \u0275\u0275element(109, "i", 60);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 54)(111, "span", 55);
        \u0275\u0275text(112, "LIVE ACTIVE PLAYERS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "span", 61);
        \u0275\u0275text(114, "18,450+ Online");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(115, "div", 62)(116, "div", 63);
        \u0275\u0275element(117, "i", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div", 54)(119, "span", 55);
        \u0275\u0275text(120, "INSTANT PAYOUT SPEED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "span", 61);
        \u0275\u0275text(122, "Avg 48s via UPI/IMPS");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(123, "div", 65)(124, "div", 66);
        \u0275\u0275element(125, "i", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 54)(127, "span", 55);
        \u0275\u0275text(128, "MONTHLY PRIZE POOLS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "span", 61);
        \u0275\u0275text(130, "\u20B9 10+ Crores GTD");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(131, "section", 68)(132, "div", 69)(133, "div", 70)(134, "h2", 71)(135, "span", 72);
        \u0275\u0275element(136, "span", 73);
        \u0275\u0275text(137, " LIVE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "span", 74);
        \u0275\u0275text(139, "CASINO LOUNGE");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "span", 75);
        \u0275\u0275text(141, "Experience 4K Streams with Real Professional European & Asian Dealers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 76)(143, "button", 77);
        \u0275\u0275listener("click", function HomePage_Template_button_click_143_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/live-casino"));
        });
        \u0275\u0275elementStart(144, "span");
        \u0275\u0275text(145, "View All Tables");
        \u0275\u0275elementEnd();
        \u0275\u0275element(146, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "button", 78);
        \u0275\u0275listener("click", function HomePage_Template_button_click_147_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.scrollLeftliveCasino());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(148, "svg", 79);
        \u0275\u0275element(149, "path", 80);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(150, "button", 81);
        \u0275\u0275listener("click", function HomePage_Template_button_click_150_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.scrollRightliveCasino());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(151, "svg", 79);
        \u0275\u0275element(152, "path", 82);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(153, "div", 83)(154, "div", 84, 1);
        \u0275\u0275listener("scroll", function HomePage_Template_div_scroll_154_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScrollliveCasino());
        });
        \u0275\u0275template(156, HomePage_div_156_Template, 19, 4, "div", 85);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(157, "div", 86)(158, "section", 87);
        \u0275\u0275listener("click", function HomePage_Template_section_click_158_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/tournaments"));
        });
        \u0275\u0275elementStart(159, "div", 88);
        \u0275\u0275element(160, "img", 89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 90)(162, "div", 91)(163, "span", 92);
        \u0275\u0275text(164, "FLAGSHIP POKER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "span", 93);
        \u0275\u0275element(166, "span", 94);
        \u0275\u0275text(167, " 1,420 Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "h6", 95);
        \u0275\u0275text(169, "Poker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "span", 96);
        \u0275\u0275text(171, "Texas Hold'em \xB7 Omaha \xB7 PLO \xB7 Knockouts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(172, "div", 97);
        \u0275\u0275element(173, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "section", 98);
        \u0275\u0275listener("click", function HomePage_Template_section_click_174_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/tournaments"));
        });
        \u0275\u0275elementStart(175, "div", 88);
        \u0275\u0275element(176, "img", 99);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div", 90)(178, "div", 91)(179, "span", 92);
        \u0275\u0275text(180, "CLASSIC CARDS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "span", 93);
        \u0275\u0275element(182, "span", 100);
        \u0275\u0275text(183, " \u20B950L+ Pool");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(184, "h6", 101);
        \u0275\u0275text(185, "Rummy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "span", 96);
        \u0275\u0275text(187, "Points \xB7 101/201 Pool \xB7 Fast Deals");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "div", 97);
        \u0275\u0275element(189, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(190, "section", 102);
        \u0275\u0275listener("click", function HomePage_Template_section_click_190_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/live-casino"));
        });
        \u0275\u0275elementStart(191, "div", 88);
        \u0275\u0275element(192, "img", 103);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "div", 90)(194, "div", 91)(195, "span", 92);
        \u0275\u0275text(196, "LIVE STREAM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "span", 93);
        \u0275\u0275element(198, "span", 104);
        \u0275\u0275text(199, " Real Dealers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(200, "h6", 105);
        \u0275\u0275text(201, "Casino");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "span", 96);
        \u0275\u0275text(203, "Roulette \xB7 Baccarat \xB7 Blackjack Azure");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "div", 97);
        \u0275\u0275element(205, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(206, "section", 106);
        \u0275\u0275listener("click", function HomePage_Template_section_click_206_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/sports"));
        });
        \u0275\u0275elementStart(207, "div", 88);
        \u0275\u0275element(208, "img", 107);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "div", 90)(210, "div", 91)(211, "span", 92);
        \u0275\u0275text(212, "GLOBAL SPORTS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "span", 93);
        \u0275\u0275element(214, "span", 108);
        \u0275\u0275text(215, " In-Play Odds");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(216, "h6", 109);
        \u0275\u0275text(217, "Sports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "span", 96);
        \u0275\u0275text(219, "Cricket IPL \xB7 Football \xB7 Tennis Grand Slam");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(220, "div", 97);
        \u0275\u0275element(221, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "section", 110);
        \u0275\u0275listener("click", function HomePage_Template_section_click_222_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/slots"));
        });
        \u0275\u0275elementStart(223, "div", 88);
        \u0275\u0275element(224, "img", 111);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "div", 90)(226, "div", 91)(227, "span", 92);
        \u0275\u0275text(228, "VEGAS JACKPOT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "span", 93);
        \u0275\u0275element(230, "span", 112);
        \u0275\u0275text(231, " \u20B95.8Cr GTD");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(232, "h6", 113);
        \u0275\u0275text(233, "Slots");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "span", 96);
        \u0275\u0275text(235, "1,000+ Megaways, Hold & Win, Jackpots");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(236, "div", 97);
        \u0275\u0275element(237, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(238, "section", 114);
        \u0275\u0275listener("click", function HomePage_Template_section_click_238_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/crash"));
        });
        \u0275\u0275elementStart(239, "div", 88);
        \u0275\u0275element(240, "img", 115);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "div", 90)(242, "div", 91)(243, "span", 92);
        \u0275\u0275text(244, "INSTANT MULTIPLIER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(245, "span", 93);
        \u0275\u0275element(246, "span", 116);
        \u0275\u0275text(247, " 999x Rush");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(248, "h6", 117);
        \u0275\u0275text(249, "Crash");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "span", 96);
        \u0275\u0275text(251, "Aviator \xB7 Spribe \xB7 Aviatrix \xB7 Torro Spin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(252, "div", 97);
        \u0275\u0275element(253, "i", 41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(254, HomePage_ng_container_254_Template, 13, 1, "ng-container", 118);
        \u0275\u0275elementStart(255, "section", 119)(256, "div", 120)(257, "div", 70)(258, "h2", 121)(259, "span", 122);
        \u0275\u0275element(260, "i", 123);
        \u0275\u0275text(261, " HOT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(262, "span", 74);
        \u0275\u0275text(263, "SLOTS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(264, "span", 75);
        \u0275\u0275text(265, "1,000+ Premium Vegas Jackpots & High-RTP Slot Machines");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(266, "div", 76)(267, "button", 124);
        \u0275\u0275listener("click", function HomePage_Template_button_click_267_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigates("/slots"));
        });
        \u0275\u0275elementStart(268, "span");
        \u0275\u0275text(269, "See All Slots");
        \u0275\u0275elementEnd();
        \u0275\u0275element(270, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(271, "button", 125);
        \u0275\u0275listener("click", function HomePage_Template_button_click_271_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.scrollLeftSlots());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(272, "svg", 79);
        \u0275\u0275element(273, "path", 80);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(274, "button", 126);
        \u0275\u0275listener("click", function HomePage_Template_button_click_274_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.scrollRightSlots());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(275, "svg", 79);
        \u0275\u0275element(276, "path", 82);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(277, "div", 127)(278, "div", 128, 2);
        \u0275\u0275listener("scroll", function HomePage_Template_div_scroll_278_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.checkSlotsOverflow());
        });
        \u0275\u0275template(280, HomePage_div_280_Template, 13, 6, "div", 129);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(281, "div", 130);
        \u0275\u0275element(282, "app-testimonials");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(283, HomePage_div_283_Template, 15, 0, "div", 131);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.urlSafe);
        \u0275\u0275advance();
        \u0275\u0275classProp("hero-hidden-for-popup", !ctx.heroRevealed && ctx.showPromotion)("hero-revealed-active", ctx.heroRevealed || !ctx.showPromotion);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.visibleImages);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.visibleImages);
        \u0275\u0275advance(95);
        \u0275\u0275textInterpolate(ctx.formattedJackpot);
        \u0275\u0275advance(28);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c8));
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", ctx.LiveCasinoGames);
        \u0275\u0275advance(98);
        \u0275\u0275property("ngIf", ctx.eventsRes.length > 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c9));
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", ctx.HabenaroGames);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.showPromotion);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, RouterModule, RouterLink, Testimonials], styles: ['\n\n#home-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  padding-bottom: var(--space-xl);\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n.raj-hero-stage[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background:\n    radial-gradient(\n      circle at 50% -20%,\n      rgba(225, 29, 72, 0.16) 0%,\n      rgba(245, 158, 11, 0.08) 35%,\n      transparent 70%);\n  padding: 10px 0 24px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 24px;\n  overflow: hidden;\n  background: #06070a;\n  border: 1.5px solid rgba(251, 191, 36, 0.35);\n  box-shadow:\n    0 20px 50px -10px rgba(0, 0, 0, 0.9),\n    0 0 35px rgba(225, 29, 72, 0.22),\n    inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%], \n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  border-radius: 22px;\n  overflow: hidden;\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-slide-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 7;\n  max-height: 480px;\n  min-height: 240px;\n  background: #040507;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  cursor: pointer;\n}\n@media (max-width: 992px) {\n  .hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-slide-wrapper[_ngcontent-%COMP%] {\n    aspect-ratio: 16 / 8;\n    max-height: 380px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-slide-wrapper[_ngcontent-%COMP%] {\n    aspect-ratio: 16 / 9;\n    max-height: 260px;\n  }\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-slide-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-slide-wrapper[_ngcontent-%COMP%]:hover   .hero-slide-img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.hero-slide-glass-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 24px 32px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(5, 7, 12, 0.45) 40%,\n      rgba(5, 7, 12, 0.94) 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  pointer-events: none;\n}\n.slide-badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 2px;\n}\n.slide-tag-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48,\n      #be123c);\n  color: #ffffff;\n  padding: 4px 12px;\n  border-radius: 999px;\n  box-shadow: 0 0 12px rgba(225, 29, 72, 0.6);\n}\n.slide-bonus-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  background: rgba(251, 191, 36, 0.22);\n  border: 1px solid rgba(251, 191, 36, 0.6);\n  color: #fef08a;\n  padding: 4px 12px;\n  border-radius: 999px;\n  letter-spacing: 0.06em;\n  box-shadow: 0 0 12px rgba(251, 191, 36, 0.3);\n}\n.slide-headline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 900;\n  color: #ffffff;\n  line-height: 1.25;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);\n}\n.slide-caption[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #e2e8f0;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-control-btn[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: rgba(11, 15, 25, 0.75);\n  backdrop-filter: blur(14px);\n  border: 1px solid rgba(251, 191, 36, 0.4);\n  color: #fbbf24;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);\n  z-index: 6;\n  opacity: 0.85;\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-control-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48,\n      #f59e0b);\n  border-color: #ffffff;\n  color: #ffffff;\n  opacity: 1 !important;\n  transform: translateY(-50%) scale(1.12);\n  box-shadow: 0 0 25px rgba(225, 29, 72, 0.8);\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-control-btn.prev[_ngcontent-%COMP%] {\n  left: 16px;\n}\n.hero-fullwidth-carousel[_ngcontent-%COMP%]   .hero-control-btn.next[_ngcontent-%COMP%] {\n  right: 16px;\n}\n.hero-carousel-dots[_ngcontent-%COMP%] {\n  bottom: 14px;\n  margin-bottom: 0;\n  gap: 8px;\n  z-index: 5;\n}\n.hero-carousel-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 6px !important;\n  border-radius: 999px !important;\n  background-color: rgba(255, 255, 255, 0.35) !important;\n  border: none !important;\n  transition: all 0.35s ease !important;\n}\n.hero-carousel-dots[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 38px !important;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #e11d48) !important;\n  box-shadow: 0 0 12px rgba(251, 191, 36, 0.8) !important;\n}\n.hero-copy-row[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 16px;\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 8px 16px;\n}\n.hero-copy-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 16px;\n  width: 100%;\n  max-width: 100%;\n}\n.hero-vip-badge-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(251, 191, 36, 0.35);\n  padding: 6px 18px;\n  border-radius: 999px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n}\n.hero-vip-crown[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: #fbbf24;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-transform: uppercase;\n}\n.hero-live-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #4ade80;\n  background: rgba(34, 197, 94, 0.15);\n  border: 1px solid rgba(34, 197, 94, 0.4);\n  padding: 2px 9px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  letter-spacing: 0.05em;\n}\n.radar-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 10px #22c55e;\n  animation: pulseDot 1.4s infinite;\n}\n.hero-title-inline[_ngcontent-%COMP%] {\n  font-size: 3.5rem !important;\n  font-weight: 900;\n  line-height: 1.15;\n  letter-spacing: -0.01em;\n  color: #ffffff;\n  margin: 0;\n  text-transform: uppercase;\n  text-align: center;\n  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);\n}\n@media (max-width: 1200px) {\n  .hero-title-inline[_ngcontent-%COMP%] {\n    font-size: 2.8rem !important;\n  }\n}\n@media (max-width: 768px) {\n  .hero-title-inline[_ngcontent-%COMP%] {\n    font-size: 2rem !important;\n  }\n}\n.gold-gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fef08a 25%,\n      #fbbf24 60%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  filter: drop-shadow(0 4px 16px rgba(251, 191, 36, 0.45));\n}\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 1.18rem;\n  line-height: 1.65;\n  color: #cbd5e1;\n  margin: 0 auto;\n  max-width: 950px;\n  width: 100%;\n  text-align: center;\n  font-weight: 500;\n}\n.hero-action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  width: 100%;\n}\n.hero-cta-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 16px 34px !important;\n  border-radius: 18px !important;\n  font-size: 1.1rem !important;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  overflow: hidden;\n  border: none;\n}\n.hero-cta-btn.primary-glow[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48 0%,\n      #f43f5e 50%,\n      #f59e0b 100%);\n  color: #ffffff;\n  box-shadow: 0 12px 30px rgba(225, 29, 72, 0.55), 0 0 20px rgba(245, 158, 11, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.hero-cta-btn.primary-glow[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.03);\n  box-shadow: 0 16px 40px rgba(225, 29, 72, 0.75), 0 0 35px rgba(245, 158, 11, 0.65);\n  color: #ffffff;\n}\n.cta-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 50%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.45),\n      transparent);\n  transform: skewX(-20deg);\n  animation: sweepShine 3.5s infinite;\n}\n.cta-micro-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 900;\n  background: #ffffff;\n  color: #be123c;\n  padding: 3px 8px;\n  border-radius: 999px;\n  letter-spacing: 0.05em;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.hero-cta-btn.instant-play-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1.5px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  backdrop-filter: blur(14px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.hero-cta-btn.instant-play-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.16);\n  border-color: #38bdf8;\n  color: #38bdf8;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(56, 189, 248, 0.35);\n}\n.hero-cta-btn.tourney-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.14) 0%,\n      rgba(225, 29, 72, 0.1) 100%);\n  border: 1.5px solid rgba(245, 158, 11, 0.45);\n  color: #fbbf24;\n  backdrop-filter: blur(14px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.hero-cta-btn.tourney-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.3) 0%,\n      rgba(225, 29, 72, 0.25) 100%);\n  border-color: #fbbf24;\n  color: #ffffff;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(245, 158, 11, 0.4);\n}\n.hero-trust-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  padding: 10px 24px;\n  background: rgba(255, 255, 255, 0.025);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 999px;\n  width: fit-content;\n}\n.trust-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #cbd5e1;\n  font-weight: 600;\n}\n.trust-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 0.92rem;\n}\n.hero-ticker-ribbon[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  padding-top: 8px;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n@media (max-width: 992px) {\n  .hero-ticker-ribbon[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .hero-ticker-ribbon[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ticker-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.035) 0%,\n      rgba(15, 23, 42, 0.9) 100%);\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 16px 20px;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);\n}\n.ticker-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.ticker-box.jackpot-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.16) 0%,\n      rgba(225, 29, 72, 0.12) 60%,\n      rgba(15, 23, 42, 0.96) 100%);\n  border-color: rgba(251, 191, 36, 0.45);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(245, 158, 11, 0.2);\n}\n.ticker-box.jackpot-box[_ngcontent-%COMP%]:hover {\n  border-color: #fbbf24;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(245, 158, 11, 0.4);\n}\n.ticker-box.player-box[_ngcontent-%COMP%]:hover {\n  border-color: #22c55e;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(34, 197, 94, 0.3);\n}\n.ticker-box.speed-box[_ngcontent-%COMP%]:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.3);\n}\n.ticker-box.prize-box[_ngcontent-%COMP%]:hover {\n  border-color: #c084fc;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(192, 132, 252, 0.3);\n}\n.ticker-icon-circle[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.ticker-icon-circle.gold-pulse[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.22);\n  color: #fbbf24;\n  border: 1.5px solid rgba(251, 191, 36, 0.5);\n  box-shadow: 0 0 14px rgba(251, 191, 36, 0.3);\n}\n.ticker-icon-circle.green-pulse[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.18);\n  color: #22c55e;\n  border: 1.5px solid rgba(34, 197, 94, 0.4);\n}\n.ticker-icon-circle.blue-pulse[_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.18);\n  color: #38bdf8;\n  border: 1.5px solid rgba(56, 189, 248, 0.4);\n}\n.ticker-icon-circle.red-pulse[_ngcontent-%COMP%] {\n  background: rgba(225, 29, 72, 0.18);\n  color: #fb7185;\n  border: 1.5px solid rgba(225, 29, 72, 0.4);\n}\n.ticker-text-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.ticker-caption[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.ticker-number[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #ffffff;\n  white-space: nowrap;\n}\n.ticker-number.gold-number[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fef08a 30%,\n      #fbbf24 60%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  font-size: 1.3rem;\n  filter: drop-shadow(0 0 12px rgba(251, 191, 36, 0.5));\n}\n.hero-platform-dock[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.035) 0%,\n      rgba(15, 23, 42, 0.88) 100%) !important;\n  border: 1.5px solid rgba(255, 255, 255, 0.09) !important;\n  border-radius: 24px !important;\n  padding: 22px 28px !important;\n  margin: 16px auto !important;\n  max-width: 1440px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;\n  backdrop-filter: blur(16px);\n}\n.platform-dock-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 260px;\n}\n.dock-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 900;\n  letter-spacing: 0.06em;\n  color: #fbbf24;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-transform: uppercase;\n}\n.dock-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.platform-dock-grid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n.platform-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.04) !important;\n  border: 1px solid rgba(255, 255, 255, 0.1) !important;\n  padding: 12px 20px;\n  border-radius: 16px;\n  text-decoration: none;\n  color: #ffffff;\n  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35) !important;\n}\n.platform-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1) !important;\n  border-color: rgba(251, 191, 36, 0.6) !important;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.55), 0 0 20px rgba(251, 191, 36, 0.3) !important;\n  color: #ffffff !important;\n}\n.platform-card.instant-card[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(225, 29, 72, 0.25),\n      rgba(245, 158, 11, 0.25)) !important;\n  border-color: #fbbf24 !important;\n  box-shadow: 0 12px 28px rgba(245, 158, 11, 0.4) !important;\n}\n.platform-icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  color: #fbbf24;\n}\n.platform-card-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.platform-name[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 800;\n  line-height: 1.15;\n  color: #ffffff;\n}\n.platform-status-badge[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.platform-card-action[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin-left: 4px;\n  transition: color 0.2s ease, transform 0.2s ease;\n}\n.platform-card[_ngcontent-%COMP%]:hover   .platform-card-action[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  transform: translateX(3px);\n}\n@media (max-width: 900px) {\n  .hero-platform-dock[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 18px 20px;\n    gap: 16px;\n  }\n  .platform-dock-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n.home_game_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n@media (max-width: 992px) {\n  .home_game_grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 580px) {\n  .home_game_grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n}\n.home_grid_box[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 22px;\n  padding: 22px 24px;\n  align-items: center;\n  gap: 18px;\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n  justify-content: flex-start;\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);\n}\n.home_grid_box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n}\n.home_grid_box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n}\n.grid-arrow-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.35);\n  transition: all 0.25s ease;\n}\n.home_grid_box[_ngcontent-%COMP%]:hover   .grid-arrow-icon[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  transform: translateX(4px);\n}\n.home_grid_game_icon[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  min-width: 76px;\n  border-radius: 18px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.home_grid_box[_ngcontent-%COMP%]:hover   .home_grid_game_icon[_ngcontent-%COMP%] {\n  transform: scale(1.12) rotate(3deg);\n}\n.home_grid_game_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.home_grid_box_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.grid-card-tag-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 2px;\n}\n.grid-card-genre[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n}\n.home_grid_box_content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0;\n  line-height: 1.2;\n}\n.home_grid_tag[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.65);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.home_grid_live_badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.04em;\n}\n.grid_pulse[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 8px #22c55e;\n  animation: pulseDot 1.4s infinite;\n  flex-shrink: 0;\n}\n.grid_pulse_purple[_ngcontent-%COMP%] {\n  background: #c084fc;\n  box-shadow: 0 0 8px #c084fc;\n}\n.grid_pulse_green[_ngcontent-%COMP%] {\n  background: #34d399;\n  box-shadow: 0 0 8px #34d399;\n}\n.grid_pulse_blue[_ngcontent-%COMP%] {\n  background: #38bdf8;\n  box-shadow: 0 0 8px #38bdf8;\n}\n.grid_pulse_yellow[_ngcontent-%COMP%] {\n  background: #fbbf24;\n  box-shadow: 0 0 8px #fbbf24;\n}\n.grid_pulse_orange[_ngcontent-%COMP%] {\n  background: #f97316;\n  box-shadow: 0 0 8px #f97316;\n}\n.home_grid_poker[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(225, 29, 72, 0.28) 0%,\n      rgba(40, 7, 18, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(225, 29, 72, 0.35);\n}\n.home_grid_poker[_ngcontent-%COMP%]:hover {\n  border-color: #f43f5e;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(225, 29, 72, 0.5);\n}\n.home_grid_rummy[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(147, 51, 234, 0.28) 0%,\n      rgba(28, 10, 52, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(147, 51, 234, 0.35);\n}\n.home_grid_rummy[_ngcontent-%COMP%]:hover {\n  border-color: #a855f7;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(147, 51, 234, 0.5);\n}\n.home_grid_casino[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(16, 185, 129, 0.28) 0%,\n      rgba(6, 40, 28, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(16, 185, 129, 0.35);\n}\n.home_grid_casino[_ngcontent-%COMP%]:hover {\n  border-color: #34d399;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.5);\n}\n.home_grid_sports[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(14, 165, 233, 0.28) 0%,\n      rgba(7, 32, 60, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(14, 165, 233, 0.35);\n}\n.home_grid_sports[_ngcontent-%COMP%]:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(14, 165, 233, 0.5);\n}\n.home_grid_slots[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(245, 158, 11, 0.28) 0%,\n      rgba(52, 32, 6, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.home_grid_slots[_ngcontent-%COMP%]:hover {\n  border-color: #fbbf24;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(245, 158, 11, 0.5);\n}\n.home_grid_crash[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(249, 115, 22, 0.28) 0%,\n      rgba(60, 22, 8, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(249, 115, 22, 0.35);\n}\n.home_grid_crash[_ngcontent-%COMP%]:hover {\n  border-color: #fb923c;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(249, 115, 22, 0.5);\n}\n.trending_game_container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: var(--space-xs);\n}\n.trending_header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.trending_head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-xs);\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n.trending_controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n.nav_btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);\n  flex-shrink: 0;\n  padding: 0;\n}\n.nav_btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  display: block;\n  stroke: #ffffff;\n  position: relative;\n  z-index: 5;\n  transition: all 0.25s ease;\n}\n.nav_btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #ffffff;\n  transition: stroke 0.25s ease;\n}\n.nav_btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n  color: #ffffff;\n  font-size: 15px;\n}\n.nav_btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48 0%,\n      #f59e0b 100%);\n  border-color: #fbbf24;\n  color: #ffffff;\n  transform: scale(1.1);\n  box-shadow: 0 0 16px rgba(225, 29, 72, 0.7), 0 0 10px rgba(251, 191, 36, 0.5);\n}\n.nav_btn[_ngcontent-%COMP%]:not(:disabled):hover   svg[_ngcontent-%COMP%] {\n  stroke: #ffffff;\n  transform: scale(1.1);\n}\n.nav_btn[_ngcontent-%COMP%]:not(:disabled):hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #ffffff;\n}\n.nav_btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.35;\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.nav_btn[_ngcontent-%COMP%]:disabled   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #64748b;\n}\n.see_all_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-xs);\n  padding: var(--space-xs) var(--space-sm);\n  background: none;\n  border: none;\n  border-radius: var(--border-radius);\n  color: var(--text-muted);\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-wrap: nowrap;\n}\n.see_all_btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-secondary);\n}\n.trending_scroll_container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n}\n.trending_scroll_container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.trending_scroll_wrapper[_ngcontent-%COMP%]::before, \n.trending_scroll_wrapper[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 40px;\n  z-index: 10;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n  opacity: 0;\n  border-radius: 8px;\n}\n.trending_scroll_wrapper[_ngcontent-%COMP%]::before {\n  left: 0;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-bg) 0%,\n      transparent 100%);\n}\n.trending_scroll_wrapper[_ngcontent-%COMP%]::after {\n  right: 0;\n  background:\n    linear-gradient(\n      270deg,\n      var(--primary-bg) 0%,\n      transparent 100%);\n}\n.trending_scroll_wrapper.has-left[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.trending_scroll_wrapper.has-right[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.trending_head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.trending_head[_ngcontent-%COMP%]   h2.trending_games_title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background:\n    linear-gradient(\n      91deg,\n      #CC0000 -33%,\n      #FF9D00 70%,\n      #fff 59%,\n      #fff 78%);\n  background-clip: text;\n  color: transparent;\n  font-size: 28px;\n}\n.trending_game_box_container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-sm);\n  padding: var(--space-xs);\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n  position: relative;\n}\n.trending_scroll_wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.trending_scroll_container[_ngcontent-%COMP%] {\n  position: relative;\n  transition: box-shadow 0.3s ease;\n  overflow-x: auto;\n  display: flex;\n  gap: 16px;\n}\n.trending_scroll_container.scrolled[_ngcontent-%COMP%], \n.trending_scroll_container.not-ended[_ngcontent-%COMP%] {\n  position: relative;\n}\n.trending_scroll_container.scrolled[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 30px;\n  background:\n    linear-gradient(\n      270deg,\n      transparent 0%,\n      var(--primary-bg) 100%);\n  pointer-events: none;\n  z-index: 10;\n  border-radius: 8px 0 0 8px;\n}\n.trending_scroll_container.not-ended[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: -8px;\n  top: 0;\n  bottom: 0;\n  width: 30px;\n  background:\n    linear-gradient(\n      270deg,\n      var(--primary-bg) 0%,\n      transparent 100%);\n  pointer-events: none;\n  z-index: 10;\n  border-radius: 0 8px 8px 0;\n}\n.trending_scroll_container.has-left-content[_ngcontent-%COMP%], \n.trending_scroll_container.has-right-content[_ngcontent-%COMP%], \n.trending_scroll_container.has-both-content[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.trending_game_box_container[_ngcontent-%COMP%]::-webkit-scrollbar, \n.sub_home_live_casino_content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.trending_game_box[_ngcontent-%COMP%] {\n  flex: 0 0 227px;\n  background:\n    linear-gradient(\n      180deg,\n      #181d2a 0%,\n      #111420 100%);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  scroll-snap-align: start;\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.trending_game_box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n  border-color: rgba(225, 29, 72, 0.5);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.65), 0 0 18px rgba(225, 29, 72, 0.3);\n}\n.trending_game_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n  border-radius: 12px;\n  transition: transform 0.35s ease;\n}\n.trending_game_box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.trending_game_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 10px 0 4px;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sub_game_title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.trending_game_box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48 0%,\n      #f59e0b 100%);\n  color: #ffffff !important;\n  font-weight: 700;\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0 4px 12px rgba(225, 29, 72, 0.35);\n  transition: all 0.25s ease;\n  padding: 6px 12px;\n}\n.trending_game_box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f43f5e 0%,\n      #fbbf24 100%);\n  box-shadow: 0 6px 18px rgba(225, 29, 72, 0.55), 0 0 10px rgba(245, 158, 11, 0.4);\n  transform: translateY(-2px);\n}\n.number_of_users[_ngcontent-%COMP%] {\n  margin-top: var(--space-sm);\n  font-size: 10px;\n  color: #919191;\n  display: flex;\n  gap: var(--space-xs);\n  align-items: center;\n}\n.number_of_users[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: 2px solid #92fd5859;\n  width: 16px;\n  height: 16px;\n  display: block;\n  border-radius: 50%;\n  position: relative;\n}\n.number_of_users[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: "";\n  width: 6px;\n  height: 6px;\n  background: #92FD58;\n  border-radius: 50%;\n  margin: auto;\n  inset: 0;\n}\n.live_casino_title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  letter-spacing: 0.03em;\n  font-size: 1.85rem;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  margin: 0;\n  text-transform: uppercase;\n}\n.gold-gradient-title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fef08a 35%,\n      #fbbf24 75%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  filter: drop-shadow(0 2px 10px rgba(251, 191, 36, 0.4));\n}\n.live-neon-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 900;\n  color: #ffffff;\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48,\n      #be123c);\n  padding: 4px 12px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  letter-spacing: 0.08em;\n  box-shadow: 0 0 14px rgba(225, 29, 72, 0.6);\n}\n.slot-neon-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 900;\n  color: #1e1302;\n  background:\n    linear-gradient(\n      135deg,\n      #fef08a,\n      #fbbf24);\n  padding: 4px 12px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  letter-spacing: 0.08em;\n  box-shadow: 0 0 14px rgba(251, 191, 36, 0.6);\n}\n.section-subheading[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.home_live_casino_head[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n}\n.home_live_casino_container[_ngcontent-%COMP%] {\n  margin: 20px auto 36px auto;\n  max-width: 1440px;\n  width: 100%;\n  padding: 0 16px;\n}\n.slots_games_container[_ngcontent-%COMP%] {\n  margin: 20px auto 36px auto;\n  max-width: 1440px;\n  width: 100%;\n  padding: 0 16px;\n}\n.trending_header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.trending_controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.see_all_btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #e2e8f0;\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  backdrop-filter: blur(10px);\n}\n.see_all_btn[_ngcontent-%COMP%]:hover {\n  background: rgba(251, 191, 36, 0.15);\n  border-color: #fbbf24;\n  color: #fbbf24;\n  transform: translateY(-2px);\n}\n.home_live_casino_content[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding: 10px 0;\n}\n.sub_home_live_casino_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  gap: 18px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n  padding-bottom: 12px;\n}\n.home_live_image_box[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  position: relative;\n  z-index: 1;\n  border-radius: 20px;\n  overflow: hidden;\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  background: #0a0d14;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);\n  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n}\n.home_live_image_box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.03);\n  border-color: rgba(251, 191, 36, 0.7);\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(225, 29, 72, 0.35);\n}\n.home_live_image_box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 42px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(8, 12, 16, 0.95) 0%,\n      rgba(8, 12, 16, 0.4) 60%,\n      transparent 100%);\n  pointer-events: none;\n  z-index: 2;\n}\n.live-card-top-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 5;\n}\n.live_casino_card_badge[_ngcontent-%COMP%] {\n  background: rgba(225, 29, 72, 0.92);\n  color: #ffffff;\n  font-size: 0.68rem;\n  font-weight: 900;\n  padding: 3px 10px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  letter-spacing: 0.05em;\n  box-shadow: 0 0 10px rgba(225, 29, 72, 0.6);\n}\n.live-pulse-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 8px #22c55e;\n  animation: pulseDot 1.4s infinite;\n}\n.live-table-limit-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: #fbbf24;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(251, 191, 36, 0.4);\n  padding: 2px 8px;\n  border-radius: 999px;\n  letter-spacing: 0.05em;\n  backdrop-filter: blur(8px);\n}\n.home_live_image_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.home_live_image_box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.live-card-bottom-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 12px 14px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(6, 8, 14, 0.92) 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  z-index: 4;\n}\n.live-game-provider[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: #fbbf24;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.live-game-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.slots_image_box[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  position: relative;\n  z-index: 1;\n  border-radius: 20px;\n  overflow: hidden;\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  background: #0a0d14;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);\n  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n}\n.slots_image_box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.04);\n  border-color: #fbbf24;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(245, 158, 11, 0.35);\n}\n.slot_badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #e11d48);\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 900;\n  padding: 2px 8px;\n  border-radius: 999px;\n  z-index: 5;\n  box-shadow: 0 0 8px rgba(245, 158, 11, 0.6);\n  letter-spacing: 0.05em;\n}\n.slots_image_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.slots_image_box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.slots_info_overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 10px 12px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(6, 8, 14, 0.95) 100%);\n  z-index: 4;\n}\n.slots_game_title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #ffffff;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.play_container[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(4px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.28s ease;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10;\n}\n.home_live_image_box[_ngcontent-%COMP%]:hover   .play_container[_ngcontent-%COMP%], \n.slots_image_box[_ngcontent-%COMP%]:hover   .play_container[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.play-pulse-btn[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48,\n      #f59e0b);\n  border: 2px solid #ffffff;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  box-shadow: 0 0 20px rgba(225, 29, 72, 0.8);\n  transition: transform 0.25s ease;\n}\n.play_container[_ngcontent-%COMP%]:hover   .play-pulse-btn[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n}\n.play-overlay-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  color: #fbbf24;\n  text-transform: uppercase;\n}\n.best_game_title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background:\n    linear-gradient(\n      90deg,\n      #CC0000 -8%,\n      #FF9D03 10%,\n      #fff 10%,\n      #fff 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  font-size: 28px;\n}\n.position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.trending_controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 40px;\n}\n.prev_sport_games[_ngcontent-%COMP%]:disabled, \n.next_sport_games[_ngcontent-%COMP%]:disabled, \n.prev_sport_games[_ngcontent-%COMP%]:disabled:before, \n.next_sport_games[_ngcontent-%COMP%]:disabled::before {\n  background: rgba(0, 0, 0, 0.452);\n  border: 0px;\n  color: grey;\n}\n.prev_sport_games[_ngcontent-%COMP%], \n.next_sport_games[_ngcontent-%COMP%] {\n  background: rgb(0, 0, 0);\n  border: 0px;\n  color: #ff9d00;\n}\n.prev_sport_games[_ngcontent-%COMP%]:before, \n.next_sport_games[_ngcontent-%COMP%]::before {\n  padding: 2px;\n}\n.Sport_game_title[_ngcontent-%COMP%] {\n  font-family: "Poppins";\n  font-size: 28px;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  text-align: center;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background: gray;\n  color: white;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n}\n.sport_text[_ngcontent-%COMP%] {\n  color: #3fb500;\n}\n.sports_games_widget_box[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 110px;\n  background:\n    linear-gradient(\n      90deg,\n      #cc0000,\n      #1a48ff);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  justify-content: space-between;\n  cursor: pointer;\n  min-width: 350px;\n  min-height: 200px;\n  position: relative;\n}\n.sports_home_FC_div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.sports_home_ratingDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.rating_divs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.13);\n  backdrop-filter: blur(10px);\n  padding: 5px 10px;\n  border-radius: 20px;\n  width: 49%;\n  align-items: center;\n}\n.rating_divs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.saperation_line[_ngcontent-%COMP%] {\n  border-left: 2px dotted #ffffff87;\n  height: 75%;\n}\n.sports_teams[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40%;\n}\n.sports_home_assist_div[_ngcontent-%COMP%], \n.sports_home_rating_div[_ngcontent-%COMP%] {\n  width: 47%;\n  text-align: center;\n  font-family: "Poppins";\n  font-size: 1rem;\n  line-height: 1.25rem;\n}\n.fc_logos[_ngcontent-%COMP%] {\n  height: 90px;\n}\n.fc_names[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: "Poppins";\n  margin: 0px;\n  text-align: center;\n  max-width: 120px;\n  white-space: nowrap;\n  overflow-x: scroll;\n}\n.fc_names[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sports_home_score_time_Div[_ngcontent-%COMP%] {\n  width: 20%;\n  background: rgb(255 255 255 / 90%);\n  height: fit-content;\n  padding: 5px;\n  border-radius: 10px;\n  color: #000;\n  font-weight: 900;\n  font-family: "Poppins";\n  font-size: 100%;\n}\n.featured_image_box[_ngcontent-%COMP%], \n.slots_image_box[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  scroll-snap-align: start;\n  flex-shrink: 0;\n}\n.slots_image_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.featured_image_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.slots_image_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.mobile_view_icons[_ngcontent-%COMP%] {\n  display: none;\n}\n.desktopverion_img[_ngcontent-%COMP%] {\n  display: block;\n}\n.bgimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.images_banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  min-height: 140px;\n  cursor: pointer;\n}\n.addNewGame[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: fixed;\n  margin: auto;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  cursor: pointer;\n  top: 0;\n}\n.cover_DIV[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #0000003b;\n  z-index: 100;\n}\n.addNewGame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 1px solid #c9b15f;\n}\nspan.closeBTN[_ngcontent-%COMP%] {\n  display: flex;\n  color: #000000;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 23.5%;\n  width: fit-content;\n  margin: auto;\n  left: 20%;\n  right: 4px;\n  font-size: 14px;\n  padding: 6px;\n  cursor: pointer;\n  font-weight: 700;\n  border-radius: 50%;\n  background: #ffffff;\n  border: 1px solid #e54b19;\n  width: 30px;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n}\n.leag_n_Match[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nimg.gif_img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.matchName_icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n@media screen and (min-width: 330px) and (max-width: 580px) {\n  .home_grid_box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .home_grid_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    object-fit: contain;\n  }\n}\n.shimmer-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 8px;\n  height: 310px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      #3e3e3e 25%,\n      #555555 50%,\n      #2d2d2d 75%);\n  background-size: 200% 200%;\n  animation: _ngcontent-%COMP%_shimmer-wave 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer-wave {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.eventTag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  margin-left: 10px;\n}\n.live[_ngcontent-%COMP%] {\n  background: red;\n  color: white;\n}\n.today[_ngcontent-%COMP%] {\n  background: green;\n  color: white;\n}\n.tomorrow[_ngcontent-%COMP%] {\n  background: orange;\n  color: black;\n}\n.upcoming[_ngcontent-%COMP%] {\n  background: #555;\n  color: white;\n}\np.nameLeg[_ngcontent-%COMP%] {\n  margin: 0;\n}\np.leagNameSportN[_ngcontent-%COMP%], \np.nameLeg[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.carousel-item[_ngcontent-%COMP%] {\n  height: auto;\n}\n.carousel-inner[_ngcontent-%COMP%] {\n  height: auto;\n}\n.league-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 120px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n}\n.shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      #323232 25%,\n      #909090 50%,\n      #242424 75%);\n  background-size: 200% 200%;\n  animation: _ngcontent-%COMP%_shimmer 1s ease-in-out infinite;\n  z-index: 1;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.instant-btnw[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  padding: 6px 6px;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  gap: 6px;\n  text-decoration: none;\n  cursor: pointer;\n  height: 41px;\n  border-radius: 5px;\n}\n.instant-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 25px;\n  padding: 6px 6px;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  gap: 6px;\n  text-decoration: none;\n  cursor: pointer;\n  width: 100%;\n  max-width: 150px;\n}\n.carousel-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.shimmer-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      #313131 25%,\n      #757575 50%,\n      #313131 75%);\n  background-size: 200% 200%;\n  animation: _ngcontent-%COMP%_shimmer-wave 2s ease-in-out infinite;\n}\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n@keyframes _ngcontent-%COMP%_shimmer-wave {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.live-score-box[_ngcontent-%COMP%] {\n  background: #111;\n  padding: 10px;\n  border-radius: 6px;\n  color: #fff;\n}\n.team-score[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  padding: 5px 0;\n}\n.team-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.score[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #00ff90;\n  font-size: 12px;\n  line-height: 0;\n  padding: 4px;\n}\n.bgimg[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.desktopverion_img[_ngcontent-%COMP%], \n.mobileverion_img[_ngcontent-%COMP%] {\n  height: auto;\n  display: block;\n}\n.mobileverion_img[_ngcontent-%COMP%] {\n  display: none;\n}\n.app_links[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 40px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.mobile_view_icons[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: 5px;\n  gap: 1px;\n  align-items: center;\n}\n.app_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 250px;\n  border-radius: 4px;\n  padding: 3px;\n}\n.app_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n  font-size: 14px;\n}\n.mobile_view_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  padding: 3px;\n}\n.mobile_view_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n  font-size: 14px;\n}\n.instant-btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  color: #fff;\n  font-weight: 600;\n  text-decoration: none;\n}\n@media (max-width: 1250px) {\n  .app_links[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 16px;\n    top: 37%;\n    transform: translateY(-50%);\n    display: grid;\n    gap: 9px;\n    align-items: center;\n  }\n}\n@media (max-width: 768px) {\n  .desktopverion_img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobileverion_img[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 330px) and (max-width: 768px) {\n  .app_links[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 2px;\n    top: 47%;\n    transform: translateY(-50%);\n    display: grid;\n    gap: 9px;\n    align-items: center;\n  }\n}\n@media (min-width: 768px) and (max-width: 1200px) {\n  .home_container[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .home_container[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .home_container[_ngcontent-%COMP%]   .fd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 170px;\n  }\n  .home_container_bottom_banner[_ngcontent-%COMP%]   .image_sec[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .home_container_bottom_banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    gap: var(--space-sm);\n    text-align: center;\n  }\n  .Download_Icon_para[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .home_grid_box[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-align: left;\n    padding: 16px 20px;\n    gap: 16px;\n    border-radius: 20px;\n  }\n  .banner_button[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n  .mobile_view_icons[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 768px) {\n  .home_container[_ngcontent-%COMP%] {\n    height: auto;\n    text-align: center;\n    padding: var(--space-md);\n  }\n  .home_content[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .home_container_bottom_banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    gap: var(--space-sm);\n    text-align: center;\n  }\n  .app_links[_ngcontent-%COMP%] {\n    margin-left: 0;\n    justify-content: center;\n  }\n  .trending_game_box_container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home_container[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .home_container[_ngcontent-%COMP%]   .fd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 125px;\n  }\n  .banner_button[_ngcontent-%COMP%] {\n    min-width: 120px;\n    font-size: 14px;\n  }\n  .home_container[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .home_container_bottom_banner[_ngcontent-%COMP%]   .image_sec[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .Download_Icon_para[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .home_grid_box[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-align: left;\n    padding: 14px 16px;\n    gap: 14px;\n    border-radius: 18px;\n  }\n  .home_grid_game_icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    min-width: 60px;\n    border-radius: 14px;\n    flex-shrink: 0;\n  }\n  .home_grid_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .home_grid_box_content[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: left;\n  }\n  .home_grid_box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin: 2px 0;\n  }\n  .grid-card-tag-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .grid-arrow-icon[_ngcontent-%COMP%] {\n    margin-left: auto;\n    font-size: 13px;\n  }\n  .seeall_link_[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .play_container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .live_casino_title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .Sport_game_title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n@media (max-width: 580px) {\n  .mobile_view_icons[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  button.see_all_btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .home_container_bottom_banner[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 13px;\n    background:\n      linear-gradient(\n        90deg,\n        #CC0000,\n        #660000);\n    position: relative;\n    isolation: isolate;\n    padding: 10px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .home_subbanner_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 14px;\n  }\n  .home_container_bottom_banner[_ngcontent-%COMP%] {\n    flex-direction: row;\n    height: auto;\n    gap: var(--space-sm);\n    text-align: center;\n  }\n  .mobile_view_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 50px;\n    padding: 0px;\n    position: relative;\n    right: 0px;\n  }\n  .home_live_casino_content[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 0.5rem 0;\n  }\n  .home_live_image_box[_ngcontent-%COMP%], \n   .featured_image_box[_ngcontent-%COMP%], \n   .slots_image_box[_ngcontent-%COMP%] {\n    width: 145px;\n    height: 145px;\n    border-radius: 14px;\n  }\n  .home_live_image_box[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%], \n   .featured_image_box[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%], \n   .slots_image_box[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  .sub_home_live_casino_content[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n  left: 0;\n  right: 0;\n}\n.promotion-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10000;\n  border-radius: 10px;\n  text-align: center;\n}\n.promotion-popup[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  font-size: 24px;\n  cursor: pointer;\n  color: white;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n}\n.ios-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(6px);\n  z-index: 9998;\n}\n.ios-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ios-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  max-width: 380px;\n  height: 520px;\n  background: #0b0b0b;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);\n}\n.ios-slider[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  transition: transform 0.4s ease;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ios-slide[_ngcontent-%COMP%] {\n  min-width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.ios-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 20px;\n}\n.ios-download-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 25px;\n  background: var(--gradient-primary);\n  color: #000;\n  font-weight: 600;\n  border-radius: 30px;\n  padding: 12px 28px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 8px 25px rgba(247, 194, 51, 0.4);\n}\n.nav-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: #fbbf00;\n  font-size: 22px;\n  cursor: pointer;\n}\n.nav-btn.left[_ngcontent-%COMP%] {\n  left: 10px;\n}\n.nav-btn.right[_ngcontent-%COMP%] {\n  right: 10px;\n}\n.nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.home_live_image_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  font-size: 20px;\n  text-align: center;\n  left: 0;\n  right: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: var(--gradient-primary);\n  border: none;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-size: 15px;\n  cursor: pointer;\n}\n.ios-slider[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.download-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 30px;\n  left: 0;\n  z-index: 10;\n  right: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.MacDownload[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #ffffff;\n  border: 2px solid #df3316;\n  padding: 0px 15px;\n  border-radius: 30px;\n  font-size: 16px;\n}\n@media (max-width: 480px) {\n  .ios-wrapper[_ngcontent-%COMP%] {\n    height: 90vh;\n  }\n}\n.leaderboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  width: 100%;\n}\n.table-box[_ngcontent-%COMP%] {\n  flex: 1;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #404040;\n  white-space: nowrap;\n}\ntd.btn_participant[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\ntd.btn_participant[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 1px solid #ffbf00;\n  padding: 4px;\n  margin: auto;\n  background: #d6ba6d;\n  border-radius: 4px;\n  color: #000;\n  cursor: pointer;\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .leaderboard-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.table-box[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.table-box.animate-loading[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\ntd.active-row[_ngcontent-%COMP%] {\n  transition: background 0.3s ease;\n  box-shadow: 0px 2px 12px 0px #000;\n}\nth[_ngcontent-%COMP%] {\n  background: #0a0a0a;\n}\n.active-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\ni.fas.fa-caret-left.active-row[_ngcontent-%COMP%] {\n  font-size: 55px;\n  margin-right: -24px;\n  height: 37px;\n  width: 38px;\n  color: #e44819;\n  margin-top: -22px;\n}\n.lds-spinner[_ngcontent-%COMP%] {\n  color: official;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform-origin: 32px 32px;\n  animation: _ngcontent-%COMP%_lds-spinner 1.2s linear infinite;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 29px;\n  width: 5px;\n  height: 14px;\n  border-radius: 20%;\n  background: #cef;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes _ngcontent-%COMP%_lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.participantsBTN[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  background: var(--gradient-primary);\n  padding: 6px 7px;\n  border-radius: 4px;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n  position: relative;\n  overflow: hidden;\n}\n.download[_ngcontent-%COMP%] {\n  background: #00CCFF;\n}\n.upload[_ngcontent-%COMP%] {\n  background: #F49845;\n}\n.cloud[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 10px;\n  background: white;\n  border-radius: 20px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 13px;\n}\n.cloud[_ngcontent-%COMP%]:before, \n.cloud[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  background: white;\n  border-radius: 50%;\n}\n.cloud[_ngcontent-%COMP%]:before {\n  width: 10px;\n  height: 10px;\n  top: -5px;\n  left: 2px;\n}\n.cloud[_ngcontent-%COMP%]:after {\n  width: 8px;\n  height: 8px;\n  top: -3px;\n  right: 3px;\n}\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 6px;\n  height: 9px;\n  background: #f00;\n}\n.arrow[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: -3px;\n  top: 100%;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #f00;\n}\n.download[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  top: 4px;\n  animation: _ngcontent-%COMP%_downloadMove 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_downloadMove {\n  0% {\n    transform: translateY(-5px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n}\n.upload[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  bottom: 4px;\n  animation: _ngcontent-%COMP%_uploadMove 1s linear infinite;\n}\n.upload[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:after {\n  top: auto;\n  bottom: 100%;\n  border-top: none;\n  border-bottom: 6px solid yellow;\n}\n@keyframes _ngcontent-%COMP%_uploadMove {\n  0% {\n    transform: translateY(5px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n}\n.download-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  color: #fff;\n  text-decoration: none;\n  transition: transform 0.2s ease;\n}\n.download-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.download-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .download-scroll[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    gap: 12px;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px 0px;\n  }\n  .download-card[_ngcontent-%COMP%] {\n    height: 90px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .download-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 5px;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    padding: 5px;\n  }\n  .download-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .download-scroll[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    gap: 15px;\n    padding: 15px 10px;\n    justify-content: flex-start;\n  }\n  .download-card[_ngcontent-%COMP%] {\n    min-width: 160px;\n    flex: unset;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 10px;\n    gap: 15px;\n  }\n  .download-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 32px;\n    margin: 0;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    padding: 5px;\n  }\n}\n@media (min-width: 1025px) {\n  .download-scroll[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    padding: 0px;\n  }\n  .download-card[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 21px;\n    padding: 0 10px;\n  }\n  .download-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 50px;\n    margin: 0;\n    background: rgba(255, 255, 255, 0.1);\n    padding: 7px;\n    border-radius: 50%;\n    height: 50px;\n  }\n  .download-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin: 0;\n  }\n}\n.download-card[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #003055,\n      #0078D6);\n}\n.download-card[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #333,\n      #000);\n}\n.download-card[_ngcontent-%COMP%]:nth-child(3)   i[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #810600,\n      #ff3b30);\n}\n.download-card[_ngcontent-%COMP%]:nth-child(4)   i[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00823a,\n      #3DDC84);\n}\n.download-card[_ngcontent-%COMP%]:nth-child(5)   i[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #333,\n      #000);\n}\n.top-banner-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1440px;\n  margin: 16px auto 0;\n  padding: 0 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.banner-carousel-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  border-radius: 0 !important;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n  border: none !important;\n  background: #000000;\n}\n.banner-carousel-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  border-radius: 0 !important;\n}\n.banner-slide-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1530 / 315;\n  background: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: 0 !important;\n}\n.banner-slide-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  border-radius: 0 !important;\n}\n.banner-dashed-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  z-index: 10;\n  padding: 0;\n}\n.banner-dashed-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 3.5px;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.4);\n  border: none;\n  padding: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.banner-dashed-indicators[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 48px;\n  background-color: #ffffff;\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);\n}\n.banner-native-slider[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%], \n.banner-native-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto !important;\n  overflow: hidden;\n}\n.banner-native-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n.banner-native-slider[_ngcontent-%COMP%]   .carousel-item.active[_ngcontent-%COMP%] {\n  display: block !important;\n  opacity: 1 !important;\n  height: auto !important;\n}\n.banner-native-slider[_ngcontent-%COMP%]   .banner-slide-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n}\n.banner-native-slider[_ngcontent-%COMP%]   .banner-slide-img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: cover !important;\n}\n.banner-nav-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 100%;\n  background: transparent;\n  border: none;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.25s ease;\n  opacity: 0.85;\n}\n.banner-nav-chevron[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #ffffff;\n  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.85));\n  transition: transform 0.2s ease, stroke 0.2s ease;\n}\n.banner-nav-chevron[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.5),\n      transparent);\n}\n.banner-nav-chevron.next[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      -90deg,\n      rgba(0, 0, 0, 0.5),\n      transparent);\n}\n.banner-nav-chevron[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  stroke: #fbbf24;\n  transform: scale(1.15);\n}\n.banner-nav-chevron.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n.banner-nav-chevron.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.quick-download-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  width: 100%;\n  max-width: 1440px;\n  margin: 14px auto 0;\n  padding: 0 16px;\n}\n.quick-dock-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 320px;\n  height: 52px;\n  background:\n    linear-gradient(\n      180deg,\n      #182030 0%,\n      #0d121c 100%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.dock-btn-icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.25s ease;\n  flex-shrink: 0;\n}\n.quick-dock-win[_ngcontent-%COMP%]   .dock-btn-icon-wrap[_ngcontent-%COMP%] {\n  color: #00a4ef;\n  background: rgba(0, 164, 239, 0.14);\n}\n.quick-dock-play[_ngcontent-%COMP%]   .dock-btn-icon-wrap[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.16);\n}\n.quick-dock-android[_ngcontent-%COMP%]   .dock-btn-icon-wrap[_ngcontent-%COMP%] {\n  color: #3ddc84;\n  background: rgba(61, 220, 132, 0.14);\n}\n.quick-dock-ios[_ngcontent-%COMP%]   .dock-btn-icon-wrap[_ngcontent-%COMP%] {\n  color: #f8fafc;\n  background: rgba(255, 255, 255, 0.12);\n}\n.dock-btn-text[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n  margin-left: 10px;\n  letter-spacing: 0.3px;\n  font-size: 14.5px;\n  color: #f1f5f9;\n  font-weight: 600;\n}\n.dock-btn-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  padding: 3px 7px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.play-badge[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border-color: rgba(16, 185, 129, 0.35);\n}\n.apk-badge[_ngcontent-%COMP%] {\n  background: rgba(61, 220, 132, 0.15);\n  color: #4ade80;\n  border-color: rgba(61, 220, 132, 0.35);\n}\n.ios-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: #e2e8f0;\n}\n.quick-dock-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: rgba(251, 191, 36, 0.6);\n  background:\n    linear-gradient(\n      180deg,\n      #1f2a3f 0%,\n      #101622 100%);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8), 0 0 16px rgba(251, 191, 36, 0.25);\n  color: #ffffff;\n}\n.quick-dock-btn[_ngcontent-%COMP%]:hover   .dock-btn-icon-wrap[_ngcontent-%COMP%] {\n  transform: scale(1.12);\n}\n.quick-dock-btn[_ngcontent-%COMP%]:hover   .dock-btn-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.stake-feature-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1440px;\n  margin: 28px auto 0;\n  padding: 0 16px;\n}\n.stake-feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  width: 100%;\n}\n.stake-feature-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 185px;\n  border-radius: 18px;\n  overflow: hidden;\n  padding: 24px 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55);\n}\n.stake-card-casino[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 85% 50%,\n      rgba(59, 130, 246, 0.22) 0%,\n      transparent 70%),\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #0f172a 60%,\n      #090d16 100%);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.stake-card-sports[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 85% 50%,\n      rgba(37, 99, 235, 0.28) 0%,\n      transparent 70%),\n    linear-gradient(\n      135deg,\n      #0f2b5c 0%,\n      #0a192f 60%,\n      #060e1c 100%);\n  border-color: rgba(59, 130, 246, 0.4);\n}\n.stake-card-slots[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 85% 50%,\n      rgba(217, 119, 6, 0.22) 0%,\n      transparent 70%),\n    linear-gradient(\n      135deg,\n      #3b1348 0%,\n      #1a0826 60%,\n      #0b0312 100%);\n  border-color: rgba(212, 175, 55, 0.35);\n}\n.stake-card-poker[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 85% 50%,\n      rgba(225, 29, 72, 0.25) 0%,\n      transparent 70%),\n    linear-gradient(\n      135deg,\n      #450a0a 0%,\n      #260505 60%,\n      #120202 100%);\n  border-color: rgba(239, 68, 68, 0.35);\n}\n.stake-card-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  z-index: 2;\n  max-width: 65%;\n}\n.stake-card-title[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 1.85rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n}\n.stake-card-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 500;\n}\n.stake-explore-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  padding: 6px 14px;\n  border-radius: 9999px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  transition: all 0.25s ease;\n}\n.stake-explore-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  transition: transform 0.25s ease;\n}\n.stake-feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.75);\n}\n.stake-feature-card[_ngcontent-%COMP%]:hover   .stake-explore-btn[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.2);\n  border-color: rgba(212, 175, 55, 0.6);\n  color: #fbbf24;\n}\n.stake-feature-card[_ngcontent-%COMP%]:hover   .stake-explore-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.stake-card-graphic[_ngcontent-%COMP%] {\n  position: relative;\n  width: 145px;\n  height: 145px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.stake-graphic-img[_ngcontent-%COMP%] {\n  max-width: 135px;\n  max-height: 135px;\n  object-fit: contain;\n  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.75));\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.stake-feature-card[_ngcontent-%COMP%]:hover   .stake-graphic-img[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(2deg);\n}\n.promo-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.88);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999999;\n  animation: _ngcontent-%COMP%_promoFadeIn 0.3s ease forwards;\n  padding: 24px 16px;\n  box-sizing: border-box;\n}\n.promo-image-card-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 410px;\n  width: min(88vw, 410px);\n  max-height: 86vh;\n  border-radius: 20px;\n  overflow: visible;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  animation: _ngcontent-%COMP%_promoScaleUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.promo-floating-close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -14px;\n  right: -12px;\n  background:\n    radial-gradient(\n      circle,\n      #1a1e29 0%,\n      #0c0e14 100%);\n  border: 2px solid #eab308;\n  color: #fbbf24;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 50;\n  padding: 0;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.9), 0 0 14px rgba(234, 179, 8, 0.45);\n}\n.promo-floating-close-btn[_ngcontent-%COMP%]:hover {\n  background: #b45309;\n  border-color: #fef08a;\n  color: #ffffff;\n  transform: rotate(90deg) scale(1.1);\n  box-shadow: 0 0 22px rgba(234, 179, 8, 0.85);\n}\n.promo-flyer-clickable[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n  display: block;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.25);\n  border: none;\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.promo-flyer-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: min(78vh, 660px);\n  display: block;\n  object-fit: contain;\n  border-radius: 20px;\n  transition: transform 0.3s ease;\n}\n.promo-flyer-clickable[_ngcontent-%COMP%]:hover   .promo-flyer-img[_ngcontent-%COMP%] {\n  transform: scale(1.015);\n}\n.promo-bottom-hint[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 7px 18px;\n  border-radius: 9999px;\n  background: rgba(15, 20, 32, 0.9);\n  border: 1px solid rgba(234, 179, 8, 0.4);\n  color: #fde047;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(8px);\n  transition: all 0.25s ease;\n}\n.promo-bottom-hint[_ngcontent-%COMP%]:hover {\n  background: rgba(234, 179, 8, 0.25);\n  border-color: #fbbf24;\n  color: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(234, 179, 8, 0.35);\n}\n.hint-ext-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.8;\n}\n@keyframes _ngcontent-%COMP%_promoFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_promoScaleUp {\n  from {\n    transform: scale(0.88);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 992px) {\n  .banner-slide-wrapper[_ngcontent-%COMP%] {\n    aspect-ratio: 860 / 235;\n  }\n  .quick-download-strip[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    padding: 0 16px;\n  }\n  .quick-dock-btn[_ngcontent-%COMP%] {\n    height: 48px;\n    font-size: 14px;\n    padding: 0 12px;\n  }\n  .dock-btn-icon-wrap[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 16px;\n  }\n  .dock-btn-text[_ngcontent-%COMP%] {\n    font-size: 13.5px;\n    margin-left: 8px;\n  }\n  .stake-feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 14px;\n  }\n  .stake-feature-card[_ngcontent-%COMP%] {\n    min-height: 155px;\n    padding: 18px 20px;\n  }\n  .stake-card-graphic[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .stake-graphic-img[_ngcontent-%COMP%] {\n    max-width: 95px;\n    max-height: 95px;\n  }\n  .hero-ticker-ribbon[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 600px) {\n  .top-banner-section[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    margin: 0 auto !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    gap: 10px !important;\n  }\n  .banner-carousel-container[_ngcontent-%COMP%] {\n    border-radius: 0 !important;\n    border: none !important;\n    box-shadow: none !important;\n    width: 100% !important;\n  }\n  .banner-carousel-inner[_ngcontent-%COMP%], \n   .banner-native-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n    border-radius: 0 !important;\n    width: 100% !important;\n  }\n  .banner-slide-wrapper[_ngcontent-%COMP%] {\n    aspect-ratio: 800 / 372 !important;\n    width: 100% !important;\n    height: auto !important;\n    border-radius: 0 !important;\n  }\n  .banner-slide-img[_ngcontent-%COMP%] {\n    width: 100% !important;\n    height: 100% !important;\n    object-fit: cover !important;\n    border-radius: 0 !important;\n    display: block !important;\n  }\n  .banner-dashed-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 3px;\n  }\n  .banner-dashed-indicators[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n    width: 32px;\n  }\n  .banner-nav-chevron[_ngcontent-%COMP%] {\n    width: 34px;\n    font-size: 16px;\n  }\n  .quick-download-strip[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n    padding: 0 12px;\n    margin-top: 10px;\n  }\n  .quick-dock-btn[_ngcontent-%COMP%] {\n    height: 46px;\n    font-size: 13.5px;\n    padding: 0 10px;\n  }\n  .dock-btn-icon-wrap[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 15px;\n  }\n  .dock-btn-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-left: 6px;\n  }\n  .dock-btn-badge[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 2px 5px;\n  }\n  .stake-feature-section[_ngcontent-%COMP%] {\n    padding: 0 12px;\n    margin-top: 14px;\n    width: 100%;\n    max-width: 100%;\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n  .stake-feature-grid[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 10px;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .stake-feature-card[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    min-height: 138px;\n    min-width: 0;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 14px 10px;\n    border-radius: 14px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  .stake-card-left[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    z-index: 2;\n    min-width: 0;\n  }\n  .stake-card-title[_ngcontent-%COMP%] {\n    font-size: 1.02rem;\n    font-weight: 800;\n    line-height: 1.15;\n    margin: 0 0 3px 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .stake-card-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n    margin: 0 0 10px 0;\n    opacity: 0.8;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .stake-explore-btn[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n    padding: 3px 7px;\n    gap: 3px;\n    font-weight: 700;\n    max-width: calc(100% - 48px);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .stake-card-graphic[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 2px;\n    bottom: 4px;\n    width: 48px;\n    height: 48px;\n    z-index: 1;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .stake-graphic-img[_ngcontent-%COMP%] {\n    max-width: 46px;\n    max-height: 46px;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.85));\n  }\n  .hero-ticker-ribbon[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 8px !important;\n    padding: 0 12px !important;\n    margin-top: 14px !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    box-sizing: border-box !important;\n    overflow: hidden !important;\n  }\n  .ticker-box[_ngcontent-%COMP%] {\n    display: flex !important;\n    align-items: center !important;\n    padding: 8px 10px !important;\n    border-radius: 12px !important;\n    gap: 8px !important;\n    min-width: 0 !important;\n    width: 100% !important;\n    box-sizing: border-box !important;\n    overflow: hidden !important;\n  }\n  .ticker-icon-circle[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n    min-width: 30px !important;\n    font-size: 13px !important;\n    border-radius: 10px !important;\n    flex-shrink: 0 !important;\n  }\n  .ticker-text-group[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    min-width: 0 !important;\n    flex: 1 !important;\n    overflow: hidden !important;\n    gap: 1px !important;\n  }\n  .ticker-caption[_ngcontent-%COMP%] {\n    font-size: 8px !important;\n    font-weight: 700 !important;\n    letter-spacing: 0.02em !important;\n    white-space: nowrap !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    line-height: 1.15 !important;\n    display: block !important;\n    max-width: 100% !important;\n  }\n  .ticker-number[_ngcontent-%COMP%] {\n    font-size: clamp(10.5px, 2.8vw, 12.5px) !important;\n    font-weight: 800 !important;\n    white-space: nowrap !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    line-height: 1.2 !important;\n    display: block !important;\n    max-width: 100% !important;\n  }\n  .home_game_grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n    padding: 0 12px;\n    margin-top: 16px;\n  }\n  .home_grid_box[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center !important;\n    text-align: left !important;\n    padding: 12px 14px !important;\n    gap: 14px !important;\n    border-radius: 16px !important;\n  }\n  .home_grid_game_icon[_ngcontent-%COMP%] {\n    width: 56px !important;\n    height: 56px !important;\n    min-width: 56px !important;\n    border-radius: 14px !important;\n    flex-shrink: 0 !important;\n    margin: 0 !important;\n  }\n  .home_grid_box_content[_ngcontent-%COMP%] {\n    flex: 1 !important;\n    min-width: 0 !important;\n    text-align: left !important;\n  }\n  .home_grid_box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n    margin: 2px 0 !important;\n  }\n  .grid-card-tag-row[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n  }\n  .home_grid_tag[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n  }\n  .promo-modal-backdrop[_ngcontent-%COMP%] {\n    padding: 20px 12px;\n  }\n  .promo-image-card-container[_ngcontent-%COMP%] {\n    max-width: min(88vw, 340px);\n    width: 88vw;\n  }\n  .promo-floating-close-btn[_ngcontent-%COMP%] {\n    top: -10px;\n    right: -4px;\n    width: 34px;\n    height: 34px;\n  }\n  .promo-flyer-img[_ngcontent-%COMP%] {\n    max-height: min(74vh, 520px);\n  }\n  .promo-bottom-hint[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 6px 14px;\n    margin-top: 10px;\n  }\n}\n@media (max-width: 380px) {\n  .quick-download-strip[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 6px;\n    padding: 0 8px;\n  }\n  .quick-dock-btn[_ngcontent-%COMP%] {\n    height: 44px;\n    font-size: 12.5px;\n    padding: 0 8px;\n  }\n  .dock-btn-icon-wrap[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    font-size: 13px;\n  }\n  .dock-btn-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin-left: 4px;\n  }\n  .dock-btn-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stake-feature-section[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n  .stake-feature-grid[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .stake-feature-card[_ngcontent-%COMP%] {\n    min-height: 118px;\n    padding: 12px 10px;\n  }\n  .stake-card-title[_ngcontent-%COMP%] {\n    font-size: 0.98rem;\n  }\n  .stake-card-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n    margin-bottom: 6px;\n  }\n  .stake-card-graphic[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 2px;\n    bottom: 2px;\n    width: 42px;\n    height: 42px;\n  }\n  .stake-graphic-img[_ngcontent-%COMP%] {\n    max-width: 40px;\n    max-height: 40px;\n  }\n  .hero-ticker-ribbon[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    padding: 0 8px !important;\n    gap: 6px !important;\n    width: 100% !important;\n    box-sizing: border-box !important;\n    overflow: hidden !important;\n  }\n  .ticker-box[_ngcontent-%COMP%] {\n    padding: 6px 6px !important;\n    gap: 6px !important;\n    border-radius: 10px !important;\n  }\n  .ticker-icon-circle[_ngcontent-%COMP%] {\n    width: 24px !important;\n    height: 24px !important;\n    min-width: 24px !important;\n    font-size: 11px !important;\n    border-radius: 7px !important;\n  }\n  .ticker-caption[_ngcontent-%COMP%] {\n    font-size: 7.5px !important;\n  }\n  .ticker-number[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n}\n/*# sourceMappingURL=home-page.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ standalone: true, selector: "app-home-page", imports: [CommonModule, FormsModule, RouterModule, Testimonials], providers: [DatePipe], template: `<ng-template #alertHost></ng-template>\r
\r
<div>\r
    <div *ngIf="urlSafe">\r
        <div>\r
            <button type="button" aria-label="close game" class="game-close-btn" (click)="subtabClose()"> X </button>\r
            <iframe #gameIframe class="game-iframe" scrolling="auto" frameborder="0" allowfullscreen\r
                title="Live casino game" [src]="urlSafe"></iframe>\r
        </div>\r
        <button type="button" aria-label="close game" (click)="toggleFullScreen()"><i _ngcontent-wuc-c7=""\r
                class="fas fa-expand-arrows-alt iframe_fullS_icon ml-4"></i></button>\r
    </div>\r
    <div id="home-page" [class.hero-hidden-for-popup]="!heroRevealed && showPromotion" [class.hero-revealed-active]="heroRevealed || !showPromotion">\r
        <!-- ===== TOP BANNER CAROUSEL & QUICK ACTION DOCK ===== -->\r
        <section class="top-banner-section" (mouseenter)="stopBannerAutoSlide()" (mouseleave)="startBannerAutoSlide()">\r
            <div class="banner-carousel-container" (touchstart)="onBannerTouchStart($event)" (touchend)="onBannerTouchEnd($event)">\r
                <div id="carouselExampleIndicators" class="carousel slide banner-native-slider">\r
                    \r
                    <!-- Carousel Slides -->\r
                    <div class="carousel-inner banner-carousel-inner">\r
                        <div *ngFor="let img of visibleImages; let i = index" class="carousel-item"\r
                            [class.active]="bannerCurrentIndex === i" (click)="routerLinks(img)">\r
                            <div class="banner-slide-wrapper">\r
                                <img class="banner-slide-img" [src]="getBannerMedia(img)"\r
                                    alt="{{ img.title || 'RajPoker Banner Slide ' + (i + 1) }}" loading="eager" decoding="async">\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Dashed Pagination Lines -->\r
                    <div class="carousel-indicators banner-dashed-indicators">\r
                        <button *ngFor="let img of visibleImages; let i = index" type="button"\r
                            (click)="goToBannerSlide(i)"\r
                            [class.active]="bannerCurrentIndex === i" [attr.aria-current]="bannerCurrentIndex === i ? 'true' : null"\r
                            [attr.aria-label]="'Go to slide ' + (i + 1)">\r
                        </button>\r
                    </div>\r
\r
                    <!-- Chevron Navigation Controls with sharp SVGs -->\r
                    <button class="carousel-control-prev banner-nav-chevron prev" type="button"\r
                        (click)="prevBannerSlide()" aria-label="Previous slide">\r
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">\r
                            <polyline points="15 18 9 12 15 6"></polyline>\r
                        </svg>\r
                    </button>\r
                    <button class="carousel-control-next banner-nav-chevron next" type="button"\r
                        (click)="nextBannerSlide()" aria-label="Next slide">\r
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">\r
                            <polyline points="9 18 15 12 9 6"></polyline>\r
                        </svg>\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <!-- Sleek Luxury Horizontal Quick Action Bar (Windows | Instant Play | Android | iOS) -->\r
            <div class="quick-download-strip">\r
                <a class="quick-dock-btn quick-dock-win" href="/download/setup.exe" aria-label="Download for Windows">\r
                    <span class="dock-btn-icon-wrap"><i class="fa-brands fa-windows"></i></span>\r
                    <span class="dock-btn-text">Windows</span>\r
                    <span class="dock-btn-badge">PC</span>\r
                </a>\r
                <button type="button" class="quick-dock-btn quick-dock-play" (click)="instantPlayLink()" aria-label="Instant Web Play">\r
                    <span class="dock-btn-icon-wrap"><i class="fa-solid fa-circle-play"></i></span>\r
                    <span class="dock-btn-text">Instant Play</span>\r
                    <span class="dock-btn-badge play-badge">WEB</span>\r
                </button>\r
                <a class="quick-dock-btn quick-dock-android" href="https://app.rajpoker.com/download/mobile/pokermobile.apk" aria-label="Download Android APK">\r
                    <span class="dock-btn-icon-wrap"><i class="fa-brands fa-android"></i></span>\r
                    <span class="dock-btn-text">Android</span>\r
                    <span class="dock-btn-badge apk-badge">APK</span>\r
                </a>\r
                <a class="quick-dock-btn quick-dock-ios" (click)="macInstruction($event, 'open')" role="button" tabindex="0" aria-label="Apple iOS Web App">\r
                    <span class="dock-btn-icon-wrap"><i class="fa-brands fa-apple"></i></span>\r
                    <span class="dock-btn-text">iOS</span>\r
                    <span class="dock-btn-badge ios-badge">PWA</span>\r
                </a>\r
            </div>\r
        </section>\r
\r
        <!-- ===== STAKE-STYLE FEATURE SHOWCASE CARDS (CASINO, SPORTS BETTING, SLOTS, POKER) (IMAGE 1) ===== -->\r
        <section class="stake-feature-section" aria-label="Featured Categories">\r
            <div class="stake-feature-grid">\r
                \r
                <!-- 1. CASINO (Thousands of Games) -->\r
                <div class="stake-feature-card stake-card-casino" (click)="navigates('/live-casino')" role="button" tabindex="0">\r
                    <div class="stake-card-left">\r
                        <h3 class="stake-card-title">Casino</h3>\r
                        <p class="stake-card-subtitle">Thousands of Games</p>\r
                        <span class="stake-explore-btn">\r
                            <span>Explore Tables</span>\r
                            <i class="fa-solid fa-arrow-right"></i>\r
                        </span>\r
                    </div>\r
                    <div class="stake-card-graphic">\r
                        <img src="assets/home_images/livecasino.png" alt="Casino Games" class="stake-graphic-img" loading="lazy" />\r
                    </div>\r
                </div>\r
\r
                <!-- 2. SPORTS BETTING (Support Your Team) -->\r
                <div class="stake-feature-card stake-card-sports" (click)="navigates('/sports')" role="button" tabindex="0">\r
                    <div class="stake-card-left">\r
                        <h3 class="stake-card-title">Sports Betting</h3>\r
                        <p class="stake-card-subtitle">Support Your Team</p>\r
                        <span class="stake-explore-btn">\r
                            <span>In-Play Odds</span>\r
                            <i class="fa-solid fa-arrow-right"></i>\r
                        </span>\r
                    </div>\r
                    <div class="stake-card-graphic">\r
                        <img src="assets/home_images/sports.png" alt="Sports Betting" class="stake-graphic-img" loading="lazy" />\r
                    </div>\r
                </div>\r
\r
                <!-- 3. SLOTS (Spin to Win Jackpots) -->\r
                <div class="stake-feature-card stake-card-slots" (click)="navigates('/slots')" role="button" tabindex="0">\r
                    <div class="stake-card-left">\r
                        <h3 class="stake-card-title">Slots</h3>\r
                        <p class="stake-card-subtitle">Spin &amp; Win Jackpots</p>\r
                        <span class="stake-explore-btn">\r
                            <span>1000+ Jackpots</span>\r
                            <i class="fa-solid fa-arrow-right"></i>\r
                        </span>\r
                    </div>\r
                    <div class="stake-card-graphic">\r
                        <img src="assets/home_images/slots.png" alt="Slots Jackpots" class="stake-graphic-img" loading="lazy" />\r
                    </div>\r
                </div>\r
\r
                <!-- 4. POKER & CRASH (Real Cash Multipliers) -->\r
                <div class="stake-feature-card stake-card-poker" (click)="claimWelcomeBonus()" role="button" tabindex="0">\r
                    <div class="stake-card-left">\r
                        <h3 class="stake-card-title">Poker &amp; Crash</h3>\r
                        <p class="stake-card-subtitle">Real Cash Multipliers</p>\r
                        <span class="stake-explore-btn">\r
                            <span>Join Action</span>\r
                            <i class="fa-solid fa-arrow-right"></i>\r
                        </span>\r
                    </div>\r
                    <div class="stake-card-graphic">\r
                        <img src="assets/home_images/crash.png" alt="Poker and Crash Multipliers" class="stake-graphic-img" loading="lazy" />\r
                    </div>\r
                </div>\r
\r
            </div>\r
        </section>\r
\r
        <!-- LIVE STATS & JACKPOT TICKER STRIP -->\r
        <section class="hero-ticker-ribbon">\r
            <div class="ticker-box jackpot-box">\r
                <div class="ticker-icon-circle gold-pulse">\r
                    <i class="fa-solid fa-coins"></i>\r
                </div>\r
                <div class="ticker-text-group">\r
                    <span class="ticker-caption"><i class="fa-solid fa-crown text-warning"></i> MEGA POKER JACKPOT</span>\r
                    <span class="ticker-number gold-number">{{ formattedJackpot }}</span>\r
                </div>\r
            </div>\r
            <div class="ticker-box player-box">\r
                <div class="ticker-icon-circle green-pulse">\r
                    <i class="fa-solid fa-users"></i>\r
                </div>\r
                <div class="ticker-text-group">\r
                    <span class="ticker-caption">LIVE ACTIVE PLAYERS</span>\r
                    <span class="ticker-number">18,450+ Online</span>\r
                </div>\r
            </div>\r
            <div class="ticker-box speed-box">\r
                <div class="ticker-icon-circle blue-pulse">\r
                    <i class="fa-solid fa-bolt-lightning"></i>\r
                </div>\r
                <div class="ticker-text-group">\r
                    <span class="ticker-caption">INSTANT PAYOUT SPEED</span>\r
                    <span class="ticker-number">Avg 48s via UPI/IMPS</span>\r
                </div>\r
            </div>\r
            <div class="ticker-box prize-box">\r
                <div class="ticker-icon-circle red-pulse">\r
                    <i class="fa-solid fa-trophy"></i>\r
                </div>\r
                <div class="ticker-text-group">\r
                    <span class="ticker-caption">MONTHLY PRIZE POOLS</span>\r
                    <span class="ticker-number">\u20B9 10+ Crores GTD</span>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <!-- ===== LIVE CASINO SECTION ===== -->\r
        <section class="home_live_casino_container" aria-labelledby="live-casino-row">\r
            <div class="trending_header">\r
                <div class="trending_head home_live_casino_head">\r
                    <h2 class="live_casino_title" id="live-casino-row" [routerLink]="['/live-casino']">\r
                        <span class="live-neon-pill"><span class="radar-dot"></span> LIVE</span>\r
                        <span class="gold-gradient-title">CASINO LOUNGE</span>\r
                    </h2>\r
                    <span class="section-subheading">Experience 4K Streams with Real Professional European &amp; Asian Dealers</span>\r
                </div>\r
                <div class="trending_controls">\r
                    <button class="see_all_btn" aria-label="all navigates to live casino"\r
                        (click)="navigates('/live-casino')">\r
                        <span>View All Tables</span>\r
                        <i class="fa-solid fa-arrow-right"></i>\r
                    </button>\r
                    <button class="nav_btn prev_btnLive" aria-label="prev slide" (click)="scrollLeftliveCasino()">\r
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">\r
                            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />\r
                        </svg>\r
                    </button>\r
                    <button class="nav_btn next_btnLive" aria-label="Next slide" (click)="scrollRightliveCasino()">\r
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">\r
                            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />\r
                        </svg>\r
                    </button>\r
                </div>\r
            </div>\r
            <div class="home_live_casino_content">\r
                <div role="button" tabindex="0" aria-label="move to right" class="sub_home_live_casino_content"\r
                    #scrollContainerLiveCasino (scroll)="onScrollliveCasino()">\r
                    <div class="home_live_image_box" role="button" tabindex="0" aria-label="game launch"\r
                        *ngFor="let game of LiveCasinoGames; let i = index">\r
                        <div class="live-card-top-badges">\r
                            <span class="live_casino_card_badge"><span class="live-pulse-dot"></span> LIVE</span>\r
                            <span class="live-table-limit-badge">VIP</span>\r
                        </div>\r
                        <div class="shimmer" *ngIf="!loadedImages[game.id]"></div>\r
                        <img *ngIf="game.provider == 'Evolution' || game.provider == 'Ezugi'"\r
                            [src]="getGameImage(game, i)" style="aspect-ratio: 1/1;"\r
                            [class.loaded]="loadedImages[game.id]" (load)="onImageLoad(game.id)" alt="{{game.title}}"\r
                            loading="lazy" width="100%" (click)="gvproviderapi(game)" />\r
                        <div class="live-card-bottom-bar">\r
                            <span class="live-game-provider">{{game.provider}}</span>\r
                            <span class="live-game-name">{{game.title || 'Live Table'}}</span>\r
                        </div>\r
                        <div class="play_container" (click)="gvproviderapi(game)">\r
                            <button type="button" aria-label="Play icons" class="play-pulse-btn">\r
                                <i class="fa-solid fa-play"></i>\r
                            </button>\r
                            <span class="play-overlay-text">ENTER TABLE</span>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <!-- ===== GAME CATEGORY CARDS GRID ===== -->\r
        <div class="home_game_grid">\r
\r
            <!-- POKER -->\r
            <section class="home_grid_box home_grid_poker" role="button" tabindex="0"\r
                (click)="navigates('/tournaments')" aria-label="Go to Poker">\r
                <div class="home_grid_game_icon">\r
                    <img src="assets/home_images/livecasino.webp" alt="Poker" loading="lazy" />\r
                </div>\r
                <div class="home_grid_box_content">\r
                    <div class="grid-card-tag-row">\r
                        <span class="grid-card-genre">FLAGSHIP POKER</span>\r
                        <span class="home_grid_live_badge"><span class="grid_pulse"></span> 1,420 Active</span>\r
                    </div>\r
                    <h6 id="sub-main-poker">Poker</h6>\r
                    <span class="home_grid_tag">Texas Hold'em \xB7 Omaha \xB7 PLO \xB7 Knockouts</span>\r
                </div>\r
                <div class="grid-arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>\r
            </section>\r
\r
            <!-- RUMMY -->\r
            <section class="home_grid_box home_grid_rummy" role="button" tabindex="0"\r
                (click)="navigates('/tournaments')" aria-label="Go to Rummy">\r
                <div class="home_grid_game_icon">\r
                    <img src="assets/home_images/slots.webp" alt="Rummy" loading="lazy" />\r
                </div>\r
                <div class="home_grid_box_content">\r
                    <div class="grid-card-tag-row">\r
                        <span class="grid-card-genre">CLASSIC CARDS</span>\r
                        <span class="home_grid_live_badge"><span class="grid_pulse grid_pulse_purple"></span> \u20B950L+ Pool</span>\r
                    </div>\r
                    <h6 id="sub-main-rummy">Rummy</h6>\r
                    <span class="home_grid_tag">Points \xB7 101/201 Pool \xB7 Fast Deals</span>\r
                </div>\r
                <div class="grid-arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>\r
            </section>\r
\r
            <!-- CASINO -->\r
            <section class="home_grid_box home_grid_casino" role="button" tabindex="0"\r
                (click)="navigates('/live-casino')" aria-label="Go to Live Casino">\r
                <div class="home_grid_game_icon">\r
                    <img src="assets/home_images/livecasino.webp" alt="Casino" loading="lazy" />\r
                </div>\r
                <div class="home_grid_box_content">\r
                    <div class="grid-card-tag-row">\r
                        <span class="grid-card-genre">LIVE STREAM</span>\r
                        <span class="home_grid_live_badge"><span class="grid_pulse grid_pulse_green"></span> Real Dealers</span>\r
                    </div>\r
                    <h6 id="sub-main-casino">Casino</h6>\r
                    <span class="home_grid_tag">Roulette \xB7 Baccarat \xB7 Blackjack Azure</span>\r
                </div>\r
                <div class="grid-arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>\r
            </section>\r
\r
            <!-- SPORTS -->\r
            <section class="home_grid_box home_grid_sports" role="button" tabindex="0"\r
                (click)="navigates('/sports')" aria-label="Go to Sports">\r
                <div class="home_grid_game_icon">\r
                    <img src="assets/home_images/sports.webp" alt="Sports" loading="lazy" />\r
                </div>\r
                <div class="home_grid_box_content">\r
                    <div class="grid-card-tag-row">\r
                        <span class="grid-card-genre">GLOBAL SPORTS</span>\r
                        <span class="home_grid_live_badge"><span class="grid_pulse grid_pulse_blue"></span> In-Play Odds</span>\r
                    </div>\r
                    <h6 id="sub-main-sports">Sports</h6>\r
                    <span class="home_grid_tag">Cricket IPL \xB7 Football \xB7 Tennis Grand Slam</span>\r
                </div>\r
                <div class="grid-arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>\r
            </section>\r
\r
            <!-- SLOTS -->\r
            <section class="home_grid_box home_grid_slots" role="button" tabindex="0"\r
                (click)="navigates('/slots')" aria-label="Go to Slots">\r
                <div class="home_grid_game_icon">\r
                    <img src="assets/home_images/slots.webp" alt="Slots" loading="lazy" />\r
                </div>\r
                <div class="home_grid_box_content">\r
                    <div class="grid-card-tag-row">\r
                        <span class="grid-card-genre">VEGAS JACKPOT</span>\r
                        <span class="home_grid_live_badge"><span class="grid_pulse grid_pulse_yellow"></span> \u20B95.8Cr GTD</span>\r
                    </div>\r
                    <h6 id="sub-main-slots">Slots</h6>\r
                    <span class="home_grid_tag">1,000+ Megaways, Hold &amp; Win, Jackpots</span>\r
                </div>\r
                <div class="grid-arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>\r
            </section>\r
\r
            <!-- CRASH -->\r
            <section class="home_grid_box home_grid_crash" role="button" tabindex="0"\r
                (click)="navigates('/crash')" aria-label="Go to Crash">\r
                <div class="home_grid_game_icon">\r
                    <img src="assets/home_images/crash.webp" alt="Crash" loading="lazy" />\r
                </div>\r
                <div class="home_grid_box_content">\r
                    <div class="grid-card-tag-row">\r
                        <span class="grid-card-genre">INSTANT MULTIPLIER</span>\r
                        <span class="home_grid_live_badge"><span class="grid_pulse grid_pulse_orange"></span> 999x Rush</span>\r
                    </div>\r
                    <h6 id="sub-main-crash">Crash</h6>\r
                    <span class="home_grid_tag">Aviator \xB7 Spribe \xB7 Aviatrix \xB7 Torro Spin</span>\r
                </div>\r
                <div class="grid-arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>\r
            </section>\r
\r
        </div>\r
\r
        <!-- <ng-container class="sports_games_container" *ngIf="eventsRes?.length>0 && commonUtilSvc.hasPermission('bti')"> -->\r
        <ng-container class="sports_games_container" *ngIf="eventsRes.length > 0">\r
            <section class="trending_header" aria-labelledby="sports-title">\r
                <div class="trending_head home_live_casino_head">\r
                    <h2 class="live_casino_title" id="sports-title"> SPORTS BOOK</h2>\r
                </div>\r
                <div class="trending_controls">\r
                    <button class="nav_btn sports_btn_prev" aria-label="prev slide" (click)="scrollPrev()">\r
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">\r
                            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"\r
                                stroke-linejoin="round" />\r
\r
                        </svg>\r
                    </button>\r
\r
                    <button class="nav_btn  sports_btn_next" aria-label="Next slide" (click)="scrollNext()">\r
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">\r
                            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"\r
                                stroke-linejoin="round" />\r
                        </svg>\r
                    </button>\r
                </div>\r
            </section>\r
\r
\r
            <section class="position-relative" *ngIf="eventsRes.length > 0" aria-labelledby="sports-row">\r
\r
                <div class="sub_home_live_casino_content" role="button" tabindex="0" aria-label="sports-section"\r
                    #sportsScroller (scroll)="checkOverflow()">\r
                    <div class="sports_games_widget_box" *ngFor="let image of eventsRes">\r
                        <div class="leag_n_Match">\r
                            <p class="nameLeg">\r
                                <span class="league-text" [title]="image.leagueName">{{ image.leagueName }}</span>\r
                                <span class="eventTag" [ngClass]="{\r
                            live: image.eventTag === 'Live',\r
                            today: image.eventTag === 'Today',\r
                            tomorrow: image.eventTag === 'Tomorrow',\r
                            upcoming: image.eventTag === 'Upcoming'\r
                          }">\r
                                    {{ image.eventTag }}\r
                                </span>\r
                            </p>\r
                            <div class="matchName_icon">\r
                                <video *ngIf="image.sportName === 'Cricket'" class="gif_img" autoplay muted playsinline\r
                                    preload="none" aria-label="Cricket animation">\r
                                    <source src="assets/cricket.webm" type="video/webm">\r
                                </video>\r
                                <img width="31" height="31" loading="lazy" decoding="async"\r
                                    *ngIf="image.sportName === 'American Football'" src="assets/football123.gif"\r
                                    alt="football">\r
                                <span style="font-size: 14px;margin: 0;">{{image.sportName}}</span>\r
                            </div>\r
                        </div>\r
                        <div class="leagNameSportN">\r
                            <span style="font-size: 13px;color: #ffffff;">{{ image?.formattedDate }}</span>\r
                        </div>\r
\r
                        <div class="sports_home_FC_div">\r
                            <div class="sports_teams">\r
                                <p class="fc_names" [title]="image?.homeValuddde?.name">{{ image?.homeValuddde?.name }}\r
                                </p>\r
                                <span class="score" *ngIf="image.score?.homeScore">{{ image.score?.homeScore }}</span>\r
                            </div>\r
                            <div class="sports_teams">\r
                                <p class="fc_names" [title]="image?.awayValue?.name">{{ image?.awayValue?.name }}</p>\r
                                <span class="score" *ngIf=" image.score?.awayScore">{{ image.score?.awayScore }}</span>\r
\r
                            </div>\r
                        </div>\r
\r
                        <div class="sports_home_ratingDiv">\r
                            <div class="rating_divs" role="button" tabindex="0" aria-label="home value"\r
                                *ngIf="image?.homeValuddde"\r
                                (click)="tieleagId(image.homeValuddde._id, image.eventLeagId)">\r
                                <div class="sports_home_assist_div">\r
                                    <p>{{ image.homeValuddde.outcomeType }}</p>\r
                                    <p>{{ image.homeValuddde.trueOdds }}</p>\r
                                </div>\r
                            </div>\r
\r
                            <!-- TIE / DRAW -->\r
                            <div class="rating_divs" *ngIf="image?.tieValue" role="button" tabindex="0"\r
                                aria-label="out value" (click)="tieleagId(image.tieValue._id, image.eventLeagId)">\r
                                <div class="sports_home_assist_div">\r
                                    <p>{{ image.tieValue.outcomeType }}</p>\r
                                    <p>{{ image.tieValue.trueOdds }}</p>\r
                                </div>\r
                            </div>\r
\r
                            <!-- AWAY -->\r
                            <div class="rating_divs" *ngIf="image?.awayValue" role="button" tabindex="0"\r
                                aria-label="tie value" (click)="tieleagId(image.awayValue._id, image.eventLeagId)">\r
                                <div class="sports_home_assist_div">\r
                                    <p>{{ image.awayValue.outcomeType }}</p>\r
                                    <p>{{ image.awayValue.trueOdds }}</p>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </ng-container>\r
        <section class="slots_games_container" aria-labelledby="slots-row">\r
            <div class="trending_header m_b_sm">\r
                <div class="trending_head home_live_casino_head">\r
                    <h2 id="slots-row" class="live_casino_title" [routerLink]="['/slots']">\r
                        <span class="slot-neon-pill"><i class="fa-solid fa-fire"></i> HOT</span>\r
                        <span class="gold-gradient-title">SLOTS</span>\r
                    </h2>\r
                    <span class="section-subheading">1,000+ Premium Vegas Jackpots &amp; High-RTP Slot Machines</span>\r
                </div>\r
                <div class="trending_controls">\r
                    <button class="see_all_btn" aria-label="all games slots" (click)="navigates('/slots')">\r
                        <span>See All Slots</span>\r
                        <i class="fa-solid fa-arrow-right"></i>\r
                    </button>\r
                    <button class="nav_btn slots_btn_prev" aria-label="Prev slide" (click)="scrollLeftSlots()">\r
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">\r
                            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />\r
                        </svg>\r
                    </button>\r
\r
                    <button class="nav_btn slots_btn_next" (click)="scrollRightSlots()" aria-label="Next slide">\r
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">\r
                            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />\r
                        </svg>\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <div class="position-relative">\r
                <div class="sub_home_live_casino_content" role="button" tabindex="0" aria-label="move slots"\r
                    #scrollContainerSlots (scroll)="checkSlotsOverflow()">\r
                    <div class="slots_image_box" *ngFor="let game of HabenaroGames" role="button" tabindex="0"\r
                        aria-label="open slot games" (click)="habanaroGm(game.gameName, game.KeyName)">\r
                        <span class="slot_badge">HOT</span>\r
                        <div class="shimmer" *ngIf="!loadedImages1[game.KeyName]"></div>\r
\r
                        <img [src]="'assets/games/habanero/' + game.KeyName + '_149.webp'"\r
                            alt="{{game.gameName}}" loading="lazy" (load)="onImageLoad(game.KeyName)"\r
                            style="aspect-ratio: 1/1;" width="100%"\r
                            [class.loaded]="loadedImages1[game.KeyName]" />\r
                        <div class="slots_info_overlay">\r
                            <span class="slots_game_title">{{ game.gameName }}</span>\r
                        </div>\r
                        <div class="play_container">\r
                            <button type="button" aria-label="Play game" class="play-pulse-btn">\r
                                <i class="fa-solid fa-play"></i>\r
                            </button>\r
                            <span class="play-overlay-text">SPIN NOW</span>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </section>\r
\r
        <!-- <section *ngIf="commonUtilSvc.hasPermission('ballagames')" class="featured_games_container" aria-labelledby="indian games row"> -->\r
        <!-- <section  class="featured_games_container" aria-labelledby="indian games row">\r
            <div class="trending_header m_b_sm">\r
                <div class="trending_head home_live_casino_head">\r
                    <h2 class="live_casino_title" id="indian games row" [routerLink]="['/indiangames']">CRASH GAMES</h2>\r
\r
                </div>\r
                <div class="trending_controls">\r
                    <button class="see_all_btn" type="button" aria-label="see all game indian"\r
                        (click)="navigates('/indiangames')">\r
                        See All\r
                    </button>\r
\r
                    <button class="nav_btn featured_btn_prev" (click)="scrollLeft()" aria-label="prev_slide">\r
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">\r
                            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"\r
                                stroke-linejoin="round" />\r
\r
                        </svg>\r
                    </button>\r
\r
                    <button class="nav_btn featured_btn_next" (click)="scrollRight()" aria-label="next_slide">\r
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">\r
                            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"\r
                                stroke-linejoin="round" />\r
                        </svg>\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <div class="position-relative">\r
                <div role="button" tabindex="0" aria-label="indian games row" class="sub_home_live_casino_content"\r
                    #scrollContainerFeatured (scroll)="checkFeaturedOverflow()">\r
                    <div role="button" tabindex="0" aria-label="indian games launch" class="featured_image_box"\r
                        *ngFor="let game of BallaGames" (click)="ballagamesLaunch(game.gameId, game.gameName)">\r
\r
                        shimmer until THAT game's image loads\r
                        <div class="shimmer" *ngIf="!loadedImages2[ game.gameId]"></div>\r
                        <img [src]="'assets/GameImgs/indiecasino/' + game.className + '.png'"\r
                            alt="{{game.gameName}}" [class.loaded]="loadedImages2[game.gameId]"\r
                            (load)="onImageLoad(game.gameId)" loading="lazy" />\r
\r
                        <div class="play_container">\r
                            <button type="button" aria-label="Play indian game">\r
                                <img src="assets/home_icons/live_casino/play_icon.png" alt="play icon"\r
                                    loading="lazy" />\r
                            </button>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section> -->\r
    </div>\r
\r
    <div class="fd">\r
        <app-testimonials></app-testimonials>\r
    </div>\r
</div>\r
\r
<!-- Official RajPoker Instagram Promotion Popup Modal (Luxury Floating Design) -->\r
<div class="promo-modal-backdrop" *ngIf="showPromotion" (click)="closePopup()" role="dialog" aria-modal="true" aria-label="Official Promotion">\r
    <div class="promo-image-card-container" (click)="$event.stopPropagation()">\r
        <!-- Close Button (X) Floating Outside Top Right -->\r
        <button class="promo-floating-close-btn" (click)="closePopup()" aria-label="Close popup" title="Close popup">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"\r
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">\r
                <line x1="18" y1="6" x2="6" y2="18"></line>\r
                <line x1="6" y1="6" x2="18" y2="18"></line>\r
            </svg>\r
        </button>\r
\r
        <!-- Entire Flyer Graphic: Click to open Instagram -->\r
        <div class="promo-flyer-clickable" (click)="openInstagram()" role="button" tabindex="0" title="Follow our Instagram @RAJPLAY.LIVE">\r
            <img src="assets/instagram_popup.png" alt="Follow Our Instagram Page @RAJPLAY.LIVE" class="promo-flyer-img" loading="eager" />\r
        </div>\r
\r
        <!-- Follow Us Interactive Badge Below Flyer -->\r
        <div class="promo-bottom-hint" (click)="openInstagram()" role="button" tabindex="0" title="Follow on Instagram">\r
            <i class="fa-brands fa-instagram"></i>\r
            <span>Follow <strong>&#64;RAJPLAY.LIVE</strong></span>\r
            <i class="fa-solid fa-arrow-up-right-from-square hint-ext-icon"></i>\r
        </div>\r
    </div>\r
</div>`, styles: ['/* src/app/pages/home-page/home-page.css */\n#home-page {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  padding-bottom: var(--space-xl);\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n.raj-hero-stage {\n  position: relative;\n  width: 100%;\n  background:\n    radial-gradient(\n      circle at 50% -20%,\n      rgba(225, 29, 72, 0.16) 0%,\n      rgba(245, 158, 11, 0.08) 35%,\n      transparent 70%);\n  padding: 10px 0 24px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n.hero-fullwidth-carousel {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n.hero-fullwidth-carousel .carousel.slide {\n  position: relative;\n  border-radius: 24px;\n  overflow: hidden;\n  background: #06070a;\n  border: 1.5px solid rgba(251, 191, 36, 0.35);\n  box-shadow:\n    0 20px 50px -10px rgba(0, 0, 0, 0.9),\n    0 0 35px rgba(225, 29, 72, 0.22),\n    inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n.hero-fullwidth-carousel .carousel-inner,\n.hero-fullwidth-carousel .carousel-item {\n  border-radius: 22px;\n  overflow: hidden;\n}\n.hero-fullwidth-carousel .hero-slide-wrapper {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 7;\n  max-height: 480px;\n  min-height: 240px;\n  background: #040507;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  cursor: pointer;\n}\n@media (max-width: 992px) {\n  .hero-fullwidth-carousel .hero-slide-wrapper {\n    aspect-ratio: 16 / 8;\n    max-height: 380px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-fullwidth-carousel .hero-slide-wrapper {\n    aspect-ratio: 16 / 9;\n    max-height: 260px;\n  }\n}\n.hero-fullwidth-carousel .hero-slide-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.hero-fullwidth-carousel .hero-slide-wrapper:hover .hero-slide-img {\n  transform: scale(1.03);\n}\n.hero-slide-glass-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 24px 32px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(5, 7, 12, 0.45) 40%,\n      rgba(5, 7, 12, 0.94) 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  pointer-events: none;\n}\n.slide-badge-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 2px;\n}\n.slide-tag-pill {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48,\n      #be123c);\n  color: #ffffff;\n  padding: 4px 12px;\n  border-radius: 999px;\n  box-shadow: 0 0 12px rgba(225, 29, 72, 0.6);\n}\n.slide-bonus-pill {\n  font-size: 0.72rem;\n  font-weight: 800;\n  background: rgba(251, 191, 36, 0.22);\n  border: 1px solid rgba(251, 191, 36, 0.6);\n  color: #fef08a;\n  padding: 4px 12px;\n  border-radius: 999px;\n  letter-spacing: 0.06em;\n  box-shadow: 0 0 12px rgba(251, 191, 36, 0.3);\n}\n.slide-headline {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 900;\n  color: #ffffff;\n  line-height: 1.25;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);\n}\n.slide-caption {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #e2e8f0;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);\n}\n.hero-fullwidth-carousel .hero-control-btn {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: rgba(11, 15, 25, 0.75);\n  backdrop-filter: blur(14px);\n  border: 1px solid rgba(251, 191, 36, 0.4);\n  color: #fbbf24;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);\n  z-index: 6;\n  opacity: 0.85;\n}\n.hero-fullwidth-carousel .hero-control-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48,\n      #f59e0b);\n  border-color: #ffffff;\n  color: #ffffff;\n  opacity: 1 !important;\n  transform: translateY(-50%) scale(1.12);\n  box-shadow: 0 0 25px rgba(225, 29, 72, 0.8);\n}\n.hero-fullwidth-carousel .hero-control-btn.prev {\n  left: 16px;\n}\n.hero-fullwidth-carousel .hero-control-btn.next {\n  right: 16px;\n}\n.hero-carousel-dots {\n  bottom: 14px;\n  margin-bottom: 0;\n  gap: 8px;\n  z-index: 5;\n}\n.hero-carousel-dots button {\n  width: 14px !important;\n  height: 6px !important;\n  border-radius: 999px !important;\n  background-color: rgba(255, 255, 255, 0.35) !important;\n  border: none !important;\n  transition: all 0.35s ease !important;\n}\n.hero-carousel-dots button.active {\n  width: 38px !important;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #e11d48) !important;\n  box-shadow: 0 0 12px rgba(251, 191, 36, 0.8) !important;\n}\n.hero-copy-row {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 16px;\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 8px 16px;\n}\n.hero-copy-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 16px;\n  width: 100%;\n  max-width: 100%;\n}\n.hero-vip-badge-row {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(251, 191, 36, 0.35);\n  padding: 6px 18px;\n  border-radius: 999px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n}\n.hero-vip-crown {\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: #fbbf24;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-transform: uppercase;\n}\n.hero-live-badge {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #4ade80;\n  background: rgba(34, 197, 94, 0.15);\n  border: 1px solid rgba(34, 197, 94, 0.4);\n  padding: 2px 9px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  letter-spacing: 0.05em;\n}\n.radar-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 10px #22c55e;\n  animation: pulseDot 1.4s infinite;\n}\n.hero-title-inline {\n  font-size: 3.5rem !important;\n  font-weight: 900;\n  line-height: 1.15;\n  letter-spacing: -0.01em;\n  color: #ffffff;\n  margin: 0;\n  text-transform: uppercase;\n  text-align: center;\n  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);\n}\n@media (max-width: 1200px) {\n  .hero-title-inline {\n    font-size: 2.8rem !important;\n  }\n}\n@media (max-width: 768px) {\n  .hero-title-inline {\n    font-size: 2rem !important;\n  }\n}\n.gold-gradient-text {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fef08a 25%,\n      #fbbf24 60%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  filter: drop-shadow(0 4px 16px rgba(251, 191, 36, 0.45));\n}\n.hero-description {\n  font-size: 1.18rem;\n  line-height: 1.65;\n  color: #cbd5e1;\n  margin: 0 auto;\n  max-width: 950px;\n  width: 100%;\n  text-align: center;\n  font-weight: 500;\n}\n.hero-action-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  width: 100%;\n}\n.hero-cta-btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 16px 34px !important;\n  border-radius: 18px !important;\n  font-size: 1.1rem !important;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  overflow: hidden;\n  border: none;\n}\n.hero-cta-btn.primary-glow {\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48 0%,\n      #f43f5e 50%,\n      #f59e0b 100%);\n  color: #ffffff;\n  box-shadow: 0 12px 30px rgba(225, 29, 72, 0.55), 0 0 20px rgba(245, 158, 11, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.hero-cta-btn.primary-glow:hover {\n  transform: translateY(-4px) scale(1.03);\n  box-shadow: 0 16px 40px rgba(225, 29, 72, 0.75), 0 0 35px rgba(245, 158, 11, 0.65);\n  color: #ffffff;\n}\n.cta-shine {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 50%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.45),\n      transparent);\n  transform: skewX(-20deg);\n  animation: sweepShine 3.5s infinite;\n}\n.cta-micro-badge {\n  font-size: 0.72rem;\n  font-weight: 900;\n  background: #ffffff;\n  color: #be123c;\n  padding: 3px 8px;\n  border-radius: 999px;\n  letter-spacing: 0.05em;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.hero-cta-btn.instant-play-btn {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1.5px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  backdrop-filter: blur(14px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.hero-cta-btn.instant-play-btn:hover {\n  background: rgba(255, 255, 255, 0.16);\n  border-color: #38bdf8;\n  color: #38bdf8;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(56, 189, 248, 0.35);\n}\n.hero-cta-btn.tourney-btn {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.14) 0%,\n      rgba(225, 29, 72, 0.1) 100%);\n  border: 1.5px solid rgba(245, 158, 11, 0.45);\n  color: #fbbf24;\n  backdrop-filter: blur(14px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.hero-cta-btn.tourney-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.3) 0%,\n      rgba(225, 29, 72, 0.25) 100%);\n  border-color: #fbbf24;\n  color: #ffffff;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(245, 158, 11, 0.4);\n}\n.hero-trust-strip {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  padding: 10px 24px;\n  background: rgba(255, 255, 255, 0.025);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 999px;\n  width: fit-content;\n}\n.trust-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #cbd5e1;\n  font-weight: 600;\n}\n.trust-item i {\n  color: #fbbf24;\n  font-size: 0.92rem;\n}\n.hero-ticker-ribbon {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  padding-top: 8px;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n@media (max-width: 992px) {\n  .hero-ticker-ribbon {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .hero-ticker-ribbon {\n    grid-template-columns: 1fr;\n  }\n}\n.ticker-box {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.035) 0%,\n      rgba(15, 23, 42, 0.9) 100%);\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 16px 20px;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);\n}\n.ticker-box:hover {\n  transform: translateY(-4px);\n}\n.ticker-box.jackpot-box {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.16) 0%,\n      rgba(225, 29, 72, 0.12) 60%,\n      rgba(15, 23, 42, 0.96) 100%);\n  border-color: rgba(251, 191, 36, 0.45);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(245, 158, 11, 0.2);\n}\n.ticker-box.jackpot-box:hover {\n  border-color: #fbbf24;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(245, 158, 11, 0.4);\n}\n.ticker-box.player-box:hover {\n  border-color: #22c55e;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(34, 197, 94, 0.3);\n}\n.ticker-box.speed-box:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.3);\n}\n.ticker-box.prize-box:hover {\n  border-color: #c084fc;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(192, 132, 252, 0.3);\n}\n.ticker-icon-circle {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.ticker-icon-circle.gold-pulse {\n  background: rgba(251, 191, 36, 0.22);\n  color: #fbbf24;\n  border: 1.5px solid rgba(251, 191, 36, 0.5);\n  box-shadow: 0 0 14px rgba(251, 191, 36, 0.3);\n}\n.ticker-icon-circle.green-pulse {\n  background: rgba(34, 197, 94, 0.18);\n  color: #22c55e;\n  border: 1.5px solid rgba(34, 197, 94, 0.4);\n}\n.ticker-icon-circle.blue-pulse {\n  background: rgba(56, 189, 248, 0.18);\n  color: #38bdf8;\n  border: 1.5px solid rgba(56, 189, 248, 0.4);\n}\n.ticker-icon-circle.red-pulse {\n  background: rgba(225, 29, 72, 0.18);\n  color: #fb7185;\n  border: 1.5px solid rgba(225, 29, 72, 0.4);\n}\n.ticker-text-group {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.ticker-caption {\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.ticker-number {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #ffffff;\n  white-space: nowrap;\n}\n.ticker-number.gold-number {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fef08a 30%,\n      #fbbf24 60%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  font-size: 1.3rem;\n  filter: drop-shadow(0 0 12px rgba(251, 191, 36, 0.5));\n}\n.hero-platform-dock {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.035) 0%,\n      rgba(15, 23, 42, 0.88) 100%) !important;\n  border: 1.5px solid rgba(255, 255, 255, 0.09) !important;\n  border-radius: 24px !important;\n  padding: 22px 28px !important;\n  margin: 16px auto !important;\n  max-width: 1440px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;\n  backdrop-filter: blur(16px);\n}\n.platform-dock-header {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 260px;\n}\n.dock-title {\n  font-size: 1.05rem;\n  font-weight: 900;\n  letter-spacing: 0.06em;\n  color: #fbbf24;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-transform: uppercase;\n}\n.dock-subtitle {\n  font-size: 0.82rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.platform-dock-grid {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n.platform-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.04) !important;\n  border: 1px solid rgba(255, 255, 255, 0.1) !important;\n  padding: 12px 20px;\n  border-radius: 16px;\n  text-decoration: none;\n  color: #ffffff;\n  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35) !important;\n}\n.platform-card:hover {\n  background: rgba(255, 255, 255, 0.1) !important;\n  border-color: rgba(251, 191, 36, 0.6) !important;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.55), 0 0 20px rgba(251, 191, 36, 0.3) !important;\n  color: #ffffff !important;\n}\n.platform-card.instant-card:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(225, 29, 72, 0.25),\n      rgba(245, 158, 11, 0.25)) !important;\n  border-color: #fbbf24 !important;\n  box-shadow: 0 12px 28px rgba(245, 158, 11, 0.4) !important;\n}\n.platform-icon-wrap {\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  color: #fbbf24;\n}\n.platform-card-details {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.platform-name {\n  font-size: 0.92rem;\n  font-weight: 800;\n  line-height: 1.15;\n  color: #ffffff;\n}\n.platform-status-badge {\n  font-size: 0.74rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.platform-card-action {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin-left: 4px;\n  transition: color 0.2s ease, transform 0.2s ease;\n}\n.platform-card:hover .platform-card-action {\n  color: #fbbf24;\n  transform: translateX(3px);\n}\n@media (max-width: 900px) {\n  .hero-platform-dock {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 18px 20px;\n    gap: 16px;\n  }\n  .platform-dock-grid {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n.home_game_grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n@media (max-width: 992px) {\n  .home_game_grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 580px) {\n  .home_game_grid {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n}\n.home_grid_box {\n  display: flex;\n  border-radius: 22px;\n  padding: 22px 24px;\n  align-items: center;\n  gap: 18px;\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n  justify-content: flex-start;\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);\n}\n.home_grid_box::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n}\n.home_grid_box:hover {\n  transform: translateY(-6px) scale(1.02);\n}\n.grid-arrow-icon {\n  margin-left: auto;\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.35);\n  transition: all 0.25s ease;\n}\n.home_grid_box:hover .grid-arrow-icon {\n  color: #fbbf24;\n  transform: translateX(4px);\n}\n.home_grid_game_icon {\n  width: 76px;\n  height: 76px;\n  min-width: 76px;\n  border-radius: 18px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.home_grid_box:hover .home_grid_game_icon {\n  transform: scale(1.12) rotate(3deg);\n}\n.home_grid_game_icon img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.home_grid_box_content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.grid-card-tag-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 2px;\n}\n.grid-card-genre {\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n}\n.home_grid_box_content h6 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0;\n  line-height: 1.2;\n}\n.home_grid_tag {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.65);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.home_grid_live_badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.04em;\n}\n.grid_pulse {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 8px #22c55e;\n  animation: pulseDot 1.4s infinite;\n  flex-shrink: 0;\n}\n.grid_pulse_purple {\n  background: #c084fc;\n  box-shadow: 0 0 8px #c084fc;\n}\n.grid_pulse_green {\n  background: #34d399;\n  box-shadow: 0 0 8px #34d399;\n}\n.grid_pulse_blue {\n  background: #38bdf8;\n  box-shadow: 0 0 8px #38bdf8;\n}\n.grid_pulse_yellow {\n  background: #fbbf24;\n  box-shadow: 0 0 8px #fbbf24;\n}\n.grid_pulse_orange {\n  background: #f97316;\n  box-shadow: 0 0 8px #f97316;\n}\n.home_grid_poker {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(225, 29, 72, 0.28) 0%,\n      rgba(40, 7, 18, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(225, 29, 72, 0.35);\n}\n.home_grid_poker:hover {\n  border-color: #f43f5e;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(225, 29, 72, 0.5);\n}\n.home_grid_rummy {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(147, 51, 234, 0.28) 0%,\n      rgba(28, 10, 52, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(147, 51, 234, 0.35);\n}\n.home_grid_rummy:hover {\n  border-color: #a855f7;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(147, 51, 234, 0.5);\n}\n.home_grid_casino {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(16, 185, 129, 0.28) 0%,\n      rgba(6, 40, 28, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(16, 185, 129, 0.35);\n}\n.home_grid_casino:hover {\n  border-color: #34d399;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.5);\n}\n.home_grid_sports {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(14, 165, 233, 0.28) 0%,\n      rgba(7, 32, 60, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(14, 165, 233, 0.35);\n}\n.home_grid_sports:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(14, 165, 233, 0.5);\n}\n.home_grid_slots {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(245, 158, 11, 0.28) 0%,\n      rgba(52, 32, 6, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.home_grid_slots:hover {\n  border-color: #fbbf24;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(245, 158, 11, 0.5);\n}\n.home_grid_crash {\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(249, 115, 22, 0.28) 0%,\n      rgba(60, 22, 8, 0.95) 70%,\n      #08090f 100%);\n  border-color: rgba(249, 115, 22, 0.35);\n}\n.home_grid_crash:hover {\n  border-color: #fb923c;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(249, 115, 22, 0.5);\n}\n.trending_game_container {\n  position: relative;\n  margin-top: var(--space-xs);\n}\n.trending_header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.trending_head {\n  margin-bottom: var(--space-xs);\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n.trending_controls {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n.nav_btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);\n  flex-shrink: 0;\n  padding: 0;\n}\n.nav_btn svg {\n  width: 18px;\n  height: 18px;\n  display: block;\n  stroke: #ffffff;\n  position: relative;\n  z-index: 5;\n  transition: all 0.25s ease;\n}\n.nav_btn svg path {\n  stroke: #ffffff;\n  transition: stroke 0.25s ease;\n}\n.nav_btn i {\n  position: relative;\n  z-index: 5;\n  color: #ffffff;\n  font-size: 15px;\n}\n.nav_btn:not(:disabled):hover {\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48 0%,\n      #f59e0b 100%);\n  border-color: #fbbf24;\n  color: #ffffff;\n  transform: scale(1.1);\n  box-shadow: 0 0 16px rgba(225, 29, 72, 0.7), 0 0 10px rgba(251, 191, 36, 0.5);\n}\n.nav_btn:not(:disabled):hover svg {\n  stroke: #ffffff;\n  transform: scale(1.1);\n}\n.nav_btn:not(:disabled):hover svg path {\n  stroke: #ffffff;\n}\n.nav_btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.35;\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.nav_btn:disabled svg path {\n  stroke: #64748b;\n}\n.see_all_btn {\n  display: flex;\n  align-items: center;\n  gap: var(--space-xs);\n  padding: var(--space-xs) var(--space-sm);\n  background: none;\n  border: none;\n  border-radius: var(--border-radius);\n  color: var(--text-muted);\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-wrap: nowrap;\n}\n.see_all_btn:hover {\n  color: var(--text-secondary);\n}\n.trending_scroll_container {\n  display: flex;\n  gap: 16px;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n}\n.trending_scroll_container::-webkit-scrollbar {\n  display: none;\n}\n.trending_scroll_wrapper::before,\n.trending_scroll_wrapper::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 40px;\n  z-index: 10;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n  opacity: 0;\n  border-radius: 8px;\n}\n.trending_scroll_wrapper::before {\n  left: 0;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-bg) 0%,\n      transparent 100%);\n}\n.trending_scroll_wrapper::after {\n  right: 0;\n  background:\n    linear-gradient(\n      270deg,\n      var(--primary-bg) 0%,\n      transparent 100%);\n}\n.trending_scroll_wrapper.has-left::before {\n  opacity: 1;\n}\n.trending_scroll_wrapper.has-right::after {\n  opacity: 1;\n}\n.trending_head img {\n  width: 24px;\n  height: 24px;\n}\n.trending_head h2.trending_games_title {\n  font-weight: 500;\n  background:\n    linear-gradient(\n      91deg,\n      #CC0000 -33%,\n      #FF9D00 70%,\n      #fff 59%,\n      #fff 78%);\n  background-clip: text;\n  color: transparent;\n  font-size: 28px;\n}\n.trending_game_box_container {\n  display: flex;\n  gap: var(--space-sm);\n  padding: var(--space-xs);\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n  position: relative;\n}\n.trending_scroll_wrapper {\n  position: relative;\n  width: 100%;\n}\n.trending_scroll_container {\n  position: relative;\n  transition: box-shadow 0.3s ease;\n  overflow-x: auto;\n  display: flex;\n  gap: 16px;\n}\n.trending_scroll_container.scrolled,\n.trending_scroll_container.not-ended {\n  position: relative;\n}\n.trending_scroll_container.scrolled::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 30px;\n  background:\n    linear-gradient(\n      270deg,\n      transparent 0%,\n      var(--primary-bg) 100%);\n  pointer-events: none;\n  z-index: 10;\n  border-radius: 8px 0 0 8px;\n}\n.trending_scroll_container.not-ended::after {\n  content: "";\n  position: absolute;\n  right: -8px;\n  top: 0;\n  bottom: 0;\n  width: 30px;\n  background:\n    linear-gradient(\n      270deg,\n      var(--primary-bg) 0%,\n      transparent 100%);\n  pointer-events: none;\n  z-index: 10;\n  border-radius: 0 8px 8px 0;\n}\n.trending_scroll_container.has-left-content,\n.trending_scroll_container.has-right-content,\n.trending_scroll_container.has-both-content {\n  box-shadow: none;\n}\n.trending_game_box_container::-webkit-scrollbar,\n.sub_home_live_casino_content::-webkit-scrollbar {\n  display: none;\n}\n.trending_game_box {\n  flex: 0 0 227px;\n  background:\n    linear-gradient(\n      180deg,\n      #181d2a 0%,\n      #111420 100%);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  scroll-snap-align: start;\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.trending_game_box:hover {\n  transform: translateY(-6px) scale(1.02);\n  border-color: rgba(225, 29, 72, 0.5);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.65), 0 0 18px rgba(225, 29, 72, 0.3);\n}\n.trending_game_box img {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n  border-radius: 12px;\n  transition: transform 0.35s ease;\n}\n.trending_game_box:hover img {\n  transform: scale(1.05);\n}\n.trending_game_name {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 10px 0 4px;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sub_game_title {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.trending_game_box button {\n  margin-top: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48 0%,\n      #f59e0b 100%);\n  color: #ffffff !important;\n  font-weight: 700;\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0 4px 12px rgba(225, 29, 72, 0.35);\n  transition: all 0.25s ease;\n  padding: 6px 12px;\n}\n.trending_game_box button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f43f5e 0%,\n      #fbbf24 100%);\n  box-shadow: 0 6px 18px rgba(225, 29, 72, 0.55), 0 0 10px rgba(245, 158, 11, 0.4);\n  transform: translateY(-2px);\n}\n.number_of_users {\n  margin-top: var(--space-sm);\n  font-size: 10px;\n  color: #919191;\n  display: flex;\n  gap: var(--space-xs);\n  align-items: center;\n}\n.number_of_users span {\n  border: 2px solid #92fd5859;\n  width: 16px;\n  height: 16px;\n  display: block;\n  border-radius: 50%;\n  position: relative;\n}\n.number_of_users span::after {\n  position: absolute;\n  content: "";\n  width: 6px;\n  height: 6px;\n  background: #92FD58;\n  border-radius: 50%;\n  margin: auto;\n  inset: 0;\n}\n.live_casino_title {\n  font-weight: 800;\n  letter-spacing: 0.03em;\n  font-size: 1.85rem;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  margin: 0;\n  text-transform: uppercase;\n}\n.gold-gradient-title {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fef08a 35%,\n      #fbbf24 75%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  filter: drop-shadow(0 2px 10px rgba(251, 191, 36, 0.4));\n}\n.live-neon-pill {\n  font-size: 0.72rem;\n  font-weight: 900;\n  color: #ffffff;\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48,\n      #be123c);\n  padding: 4px 12px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  letter-spacing: 0.08em;\n  box-shadow: 0 0 14px rgba(225, 29, 72, 0.6);\n}\n.slot-neon-pill {\n  font-size: 0.72rem;\n  font-weight: 900;\n  color: #1e1302;\n  background:\n    linear-gradient(\n      135deg,\n      #fef08a,\n      #fbbf24);\n  padding: 4px 12px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  letter-spacing: 0.08em;\n  box-shadow: 0 0 14px rgba(251, 191, 36, 0.6);\n}\n.section-subheading {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.home_live_casino_head {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n}\n.home_live_casino_container {\n  margin: 20px auto 36px auto;\n  max-width: 1440px;\n  width: 100%;\n  padding: 0 16px;\n}\n.slots_games_container {\n  margin: 20px auto 36px auto;\n  max-width: 1440px;\n  width: 100%;\n  padding: 0 16px;\n}\n.trending_header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.trending_controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.see_all_btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #e2e8f0;\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  backdrop-filter: blur(10px);\n}\n.see_all_btn:hover {\n  background: rgba(251, 191, 36, 0.15);\n  border-color: #fbbf24;\n  color: #fbbf24;\n  transform: translateY(-2px);\n}\n.home_live_casino_content {\n  width: 100%;\n  position: relative;\n  padding: 10px 0;\n}\n.sub_home_live_casino_content {\n  width: 100%;\n  display: flex;\n  gap: 18px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n  padding-bottom: 12px;\n}\n.home_live_image_box {\n  width: 220px;\n  height: 220px;\n  position: relative;\n  z-index: 1;\n  border-radius: 20px;\n  overflow: hidden;\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  background: #0a0d14;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);\n  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n}\n.home_live_image_box:hover {\n  transform: translateY(-8px) scale(1.03);\n  border-color: rgba(251, 191, 36, 0.7);\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(225, 29, 72, 0.35);\n}\n.home_live_image_box::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 42px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(8, 12, 16, 0.95) 0%,\n      rgba(8, 12, 16, 0.4) 60%,\n      transparent 100%);\n  pointer-events: none;\n  z-index: 2;\n}\n.live-card-top-badges {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 5;\n}\n.live_casino_card_badge {\n  background: rgba(225, 29, 72, 0.92);\n  color: #ffffff;\n  font-size: 0.68rem;\n  font-weight: 900;\n  padding: 3px 10px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  letter-spacing: 0.05em;\n  box-shadow: 0 0 10px rgba(225, 29, 72, 0.6);\n}\n.live-pulse-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 8px #22c55e;\n  animation: pulseDot 1.4s infinite;\n}\n.live-table-limit-badge {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: #fbbf24;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(251, 191, 36, 0.4);\n  padding: 2px 8px;\n  border-radius: 999px;\n  letter-spacing: 0.05em;\n  backdrop-filter: blur(8px);\n}\n.home_live_image_box img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.home_live_image_box:hover img {\n  transform: scale(1.08);\n}\n.live-card-bottom-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 12px 14px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(6, 8, 14, 0.92) 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  z-index: 4;\n}\n.live-game-provider {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: #fbbf24;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.live-game-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.slots_image_box {\n  width: 180px;\n  height: 180px;\n  position: relative;\n  z-index: 1;\n  border-radius: 20px;\n  overflow: hidden;\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  background: #0a0d14;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);\n  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n}\n.slots_image_box:hover {\n  transform: translateY(-8px) scale(1.04);\n  border-color: #fbbf24;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(245, 158, 11, 0.35);\n}\n.slot_badge {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #e11d48);\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 900;\n  padding: 2px 8px;\n  border-radius: 999px;\n  z-index: 5;\n  box-shadow: 0 0 8px rgba(245, 158, 11, 0.6);\n  letter-spacing: 0.05em;\n}\n.slots_image_box img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.slots_image_box:hover img {\n  transform: scale(1.08);\n}\n.slots_info_overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 10px 12px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(6, 8, 14, 0.95) 100%);\n  z-index: 4;\n}\n.slots_game_title {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #ffffff;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.play_container {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(4px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.28s ease;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10;\n}\n.home_live_image_box:hover .play_container,\n.slots_image_box:hover .play_container {\n  opacity: 1;\n  pointer-events: auto;\n}\n.play-pulse-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #e11d48,\n      #f59e0b);\n  border: 2px solid #ffffff;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  box-shadow: 0 0 20px rgba(225, 29, 72, 0.8);\n  transition: transform 0.25s ease;\n}\n.play_container:hover .play-pulse-btn {\n  transform: scale(1.15);\n}\n.play-overlay-text {\n  font-size: 0.75rem;\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  color: #fbbf24;\n  text-transform: uppercase;\n}\n.best_game_title {\n  font-weight: 500;\n  background:\n    linear-gradient(\n      90deg,\n      #CC0000 -8%,\n      #FF9D03 10%,\n      #fff 10%,\n      #fff 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  font-size: 28px;\n}\n.position-relative {\n  position: relative;\n}\n.trending_controls button {\n  min-width: 40px;\n}\n.prev_sport_games:disabled,\n.next_sport_games:disabled,\n.prev_sport_games:disabled:before,\n.next_sport_games:disabled::before {\n  background: rgba(0, 0, 0, 0.452);\n  border: 0px;\n  color: grey;\n}\n.prev_sport_games,\n.next_sport_games {\n  background: rgb(0, 0, 0);\n  border: 0px;\n  color: #ff9d00;\n}\n.prev_sport_games:before,\n.next_sport_games::before {\n  padding: 2px;\n}\n.Sport_game_title {\n  font-family: "Poppins";\n  font-size: 28px;\n}\n.pagination-controls {\n  margin-top: 15px;\n  text-align: center;\n}\n.pagination-controls button {\n  margin: 0 5px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.pagination-controls button:disabled {\n  background: gray;\n  color: white;\n}\n.pagination-controls button {\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n}\n.sport_text {\n  color: #3fb500;\n}\n.sports_games_widget_box {\n  width: 350px;\n  height: 110px;\n  background:\n    linear-gradient(\n      90deg,\n      #cc0000,\n      #1a48ff);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  justify-content: space-between;\n  cursor: pointer;\n  min-width: 350px;\n  min-height: 200px;\n  position: relative;\n}\n.sports_home_FC_div {\n  display: flex;\n  justify-content: space-between;\n}\n.sports_home_ratingDiv {\n  display: flex;\n  justify-content: space-between;\n}\n.rating_divs {\n  display: flex;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.13);\n  backdrop-filter: blur(10px);\n  padding: 5px 10px;\n  border-radius: 20px;\n  width: 49%;\n  align-items: center;\n}\n.rating_divs p {\n  margin: 0;\n}\n.saperation_line {\n  border-left: 2px dotted #ffffff87;\n  height: 75%;\n}\n.sports_teams {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40%;\n}\n.sports_home_assist_div,\n.sports_home_rating_div {\n  width: 47%;\n  text-align: center;\n  font-family: "Poppins";\n  font-size: 1rem;\n  line-height: 1.25rem;\n}\n.fc_logos {\n  height: 90px;\n}\n.fc_names {\n  font-size: 1rem;\n  font-family: "Poppins";\n  margin: 0px;\n  text-align: center;\n  max-width: 120px;\n  white-space: nowrap;\n  overflow-x: scroll;\n}\n.fc_names::-webkit-scrollbar {\n  display: none;\n}\n.sports_home_score_time_Div {\n  width: 20%;\n  background: rgb(255 255 255 / 90%);\n  height: fit-content;\n  padding: 5px;\n  border-radius: 10px;\n  color: #000;\n  font-weight: 900;\n  font-family: "Poppins";\n  font-size: 100%;\n}\n.featured_image_box,\n.slots_image_box {\n  position: relative;\n  z-index: 1;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  scroll-snap-align: start;\n  flex-shrink: 0;\n}\n.slots_image_box img {\n  border-radius: 8px;\n}\n.featured_image_box img,\n.slots_image_box img {\n  height: 100%;\n  width: 100%;\n}\n.mobile_view_icons {\n  display: none;\n}\n.desktopverion_img {\n  display: block;\n}\n.bgimg img {\n  width: 100%;\n}\n.images_banner img {\n  width: 100%;\n  border-radius: 5px;\n  min-height: 140px;\n  cursor: pointer;\n}\n.addNewGame {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: fixed;\n  margin: auto;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  cursor: pointer;\n  top: 0;\n}\n.cover_DIV {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #0000003b;\n  z-index: 100;\n}\n.addNewGame img {\n  border: 1px solid #c9b15f;\n}\nspan.closeBTN {\n  display: flex;\n  color: #000000;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 23.5%;\n  width: fit-content;\n  margin: auto;\n  left: 20%;\n  right: 4px;\n  font-size: 14px;\n  padding: 6px;\n  cursor: pointer;\n  font-weight: 700;\n  border-radius: 50%;\n  background: #ffffff;\n  border: 1px solid #e54b19;\n  width: 30px;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n}\n.leag_n_Match {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nimg.gif_img {\n  width: 30px;\n  height: 30px;\n}\n.matchName_icon {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n@media screen and (min-width: 330px) and (max-width: 580px) {\n  .home_grid_box h6 {\n    font-size: 13px !important;\n  }\n  .home_grid_box img {\n    width: 70px;\n    height: 70px;\n    object-fit: contain;\n  }\n}\n.shimmer-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 8px;\n  height: 310px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      #3e3e3e 25%,\n      #555555 50%,\n      #2d2d2d 75%);\n  background-size: 200% 200%;\n  animation: shimmer-wave 2s ease-in-out infinite;\n}\n@keyframes shimmer-wave {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.eventTag {\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  margin-left: 10px;\n}\n.live {\n  background: red;\n  color: white;\n}\n.today {\n  background: green;\n  color: white;\n}\n.tomorrow {\n  background: orange;\n  color: black;\n}\n.upcoming {\n  background: #555;\n  color: white;\n}\np.nameLeg {\n  margin: 0;\n}\np.leagNameSportN,\np.nameLeg {\n  margin: 0;\n}\n.carousel-item {\n  height: auto;\n}\n.carousel-inner {\n  height: auto;\n}\n.league-text {\n  display: inline-block;\n  max-width: 120px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n}\n.shimmer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      #323232 25%,\n      #909090 50%,\n      #242424 75%);\n  background-size: 200% 200%;\n  animation: shimmer 1s ease-in-out infinite;\n  z-index: 1;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.instant-btnw {\n  background: #000;\n  color: #fff;\n  padding: 6px 6px;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  gap: 6px;\n  text-decoration: none;\n  cursor: pointer;\n  height: 41px;\n  border-radius: 5px;\n}\n.instant-btn {\n  color: #fff;\n  border-radius: 25px;\n  padding: 6px 6px;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  gap: 6px;\n  text-decoration: none;\n  cursor: pointer;\n  width: 100%;\n  max-width: 150px;\n}\n.carousel-item {\n  position: relative;\n}\n.shimmer-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      #313131 25%,\n      #757575 50%,\n      #313131 75%);\n  background-size: 200% 200%;\n  animation: shimmer-wave 2s ease-in-out infinite;\n}\n.carousel-item img {\n  z-index: 1;\n}\n@keyframes shimmer-wave {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.live-score-box {\n  background: #111;\n  padding: 10px;\n  border-radius: 6px;\n  color: #fff;\n}\n.team-score {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  padding: 5px 0;\n}\n.team-name {\n  font-weight: 600;\n}\n.score {\n  font-weight: 700;\n  color: #00ff90;\n  font-size: 12px;\n  line-height: 0;\n  padding: 4px;\n}\n.bgimg {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.desktopverion_img,\n.mobileverion_img {\n  height: auto;\n  display: block;\n}\n.mobileverion_img {\n  display: none;\n}\n.app_links {\n  position: absolute;\n  right: 40px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.mobile_view_icons {\n  position: absolute;\n  right: 0px;\n  bottom: 5px;\n  gap: 1px;\n  align-items: center;\n}\n.app_links a {\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 250px;\n  border-radius: 4px;\n  padding: 3px;\n}\n.app_links a p {\n  color: #fff;\n  margin: 0;\n  font-size: 14px;\n}\n.mobile_view_icons a {\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  padding: 3px;\n}\n.mobile_view_icons a p {\n  color: #fff;\n  margin: 0;\n  font-size: 14px;\n}\n.instant-btn {\n  padding: 10px 18px;\n  color: #fff;\n  font-weight: 600;\n  text-decoration: none;\n}\n@media (max-width: 1250px) {\n  .app_links {\n    position: absolute;\n    right: 16px;\n    top: 37%;\n    transform: translateY(-50%);\n    display: grid;\n    gap: 9px;\n    align-items: center;\n  }\n}\n@media (max-width: 768px) {\n  .desktopverion_img {\n    display: none;\n  }\n  .mobileverion_img {\n    display: block;\n  }\n}\n@media (min-width: 330px) and (max-width: 768px) {\n  .app_links {\n    position: absolute;\n    right: 2px;\n    top: 47%;\n    transform: translateY(-50%);\n    display: grid;\n    gap: 9px;\n    align-items: center;\n  }\n}\n@media (min-width: 768px) and (max-width: 1200px) {\n  .home_container h1.title {\n    font-size: 25px;\n  }\n  .home_container .sub_title {\n    font-size: 14px;\n  }\n  .home_container .fd img {\n    max-height: 170px;\n  }\n  .home_container_bottom_banner .image_sec {\n    display: none;\n  }\n  .home_container_bottom_banner {\n    flex-direction: column;\n    height: auto;\n    gap: var(--space-sm);\n    text-align: center;\n  }\n  .Download_Icon_para {\n    display: none;\n  }\n  .home_grid_box {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-align: left;\n    padding: 16px 20px;\n    gap: 16px;\n    border-radius: 20px;\n  }\n  .banner_button {\n    min-width: 150px;\n  }\n  .mobile_view_icons {\n    display: flex;\n  }\n}\n@media (max-width: 768px) {\n  .home_container {\n    height: auto;\n    text-align: center;\n    padding: var(--space-md);\n  }\n  .home_content {\n    align-items: center;\n  }\n  .home_container_bottom_banner {\n    flex-direction: column;\n    height: auto;\n    gap: var(--space-sm);\n    text-align: center;\n  }\n  .app_links {\n    margin-left: 0;\n    justify-content: center;\n  }\n  .trending_game_box_container {\n    width: 100%;\n  }\n  .home_container h1.title {\n    font-size: 20px;\n  }\n  .home_container .fd img {\n    max-height: 125px;\n  }\n  .banner_button {\n    min-width: 120px;\n    font-size: 14px;\n  }\n  .home_container .sub_title {\n    display: none;\n  }\n  .home_container_bottom_banner .image_sec {\n    display: none;\n  }\n  .Download_Icon_para {\n    display: none;\n  }\n  .home_grid_box {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-align: left;\n    padding: 14px 16px;\n    gap: 14px;\n    border-radius: 18px;\n  }\n  .home_grid_game_icon {\n    width: 60px;\n    height: 60px;\n    min-width: 60px;\n    border-radius: 14px;\n    flex-shrink: 0;\n  }\n  .home_grid_box img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .home_grid_box_content {\n    flex: 1;\n    min-width: 0;\n    text-align: left;\n  }\n  .home_grid_box h6 {\n    font-size: 16px;\n    margin: 2px 0;\n  }\n  .grid-card-tag-row {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .grid-arrow-icon {\n    margin-left: auto;\n    font-size: 13px;\n  }\n  .seeall_link_ {\n    display: none !important;\n  }\n  .play_container {\n    display: none;\n  }\n  .live_casino_title {\n    font-size: 25px;\n  }\n  .Sport_game_title {\n    font-size: 25px;\n  }\n}\n@media (max-width: 580px) {\n  .mobile_view_icons {\n    display: flex;\n  }\n  button.see_all_btn {\n    display: none !important;\n  }\n  .home_container_bottom_banner {\n    width: 100%;\n    border-radius: 13px;\n    background:\n      linear-gradient(\n        90deg,\n        #CC0000,\n        #660000);\n    position: relative;\n    isolation: isolate;\n    padding: 10px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .home_subbanner_content h2 {\n    font-weight: 500;\n    font-size: 14px;\n  }\n  .home_container_bottom_banner {\n    flex-direction: row;\n    height: auto;\n    gap: var(--space-sm);\n    text-align: center;\n  }\n  .mobile_view_icons img {\n    width: 100%;\n    max-width: 50px;\n    padding: 0px;\n    position: relative;\n    right: 0px;\n  }\n  .home_live_casino_content {\n    height: auto;\n    padding: 0.5rem 0;\n  }\n  .home_live_image_box,\n  .featured_image_box,\n  .slots_image_box {\n    width: 145px;\n    height: 145px;\n    border-radius: 14px;\n  }\n  .home_live_image_box img.loaded,\n  .featured_image_box img.loaded,\n  .slots_image_box img.loaded {\n    width: 100%;\n    height: 100%;\n  }\n  .sub_home_live_casino_content {\n    gap: 12px;\n  }\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n  left: 0;\n  right: 0;\n}\n.promotion-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10000;\n  border-radius: 10px;\n  text-align: center;\n}\n.promotion-popup img {\n  border-radius: 5px;\n}\n.close-btn {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  font-size: 24px;\n  cursor: pointer;\n  color: white;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n}\n.ios-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(6px);\n  z-index: 9998;\n}\n.ios-popup {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ios-wrapper {\n  position: relative;\n  width: 90%;\n  max-width: 380px;\n  height: 520px;\n  background: #0b0b0b;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);\n}\n.ios-slider {\n  display: flex;\n  height: 100%;\n  transition: transform 0.4s ease;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ios-slide {\n  min-width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.ios-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 20px;\n}\n.ios-download-btn {\n  position: absolute;\n  bottom: 25px;\n  background: var(--gradient-primary);\n  color: #000;\n  font-weight: 600;\n  border-radius: 30px;\n  padding: 12px 28px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 8px 25px rgba(247, 194, 51, 0.4);\n}\n.nav-btn {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: #fbbf00;\n  font-size: 22px;\n  cursor: pointer;\n}\n.nav-btn.left {\n  left: 10px;\n}\n.nav-btn.right {\n  right: 10px;\n}\n.nav-btn:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.home_live_image_box p {\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  font-size: 20px;\n  text-align: center;\n  left: 0;\n  right: 0;\n}\n.close-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: var(--gradient-primary);\n  border: none;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-size: 15px;\n  cursor: pointer;\n}\n.ios-slider {\n  touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.download-wrapper {\n  position: relative;\n  bottom: 30px;\n  left: 0;\n  z-index: 10;\n  right: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.MacDownload {\n  background: var(--gradient-primary);\n  color: #ffffff;\n  border: 2px solid #df3316;\n  padding: 0px 15px;\n  border-radius: 30px;\n  font-size: 16px;\n}\n@media (max-width: 480px) {\n  .ios-wrapper {\n    height: 90vh;\n  }\n}\n.leaderboard-container {\n  display: flex;\n  gap: 20px;\n  width: 100%;\n}\n.table-box {\n  flex: 1;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth,\ntd {\n  padding: 10px;\n  border: 1px solid #404040;\n  white-space: nowrap;\n}\ntd.btn_participant {\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\ntd.btn_participant div {\n  border: 1px solid #ffbf00;\n  padding: 4px;\n  margin: auto;\n  background: #d6ba6d;\n  border-radius: 4px;\n  color: #000;\n  cursor: pointer;\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .leaderboard-container {\n    flex-direction: column;\n  }\n}\n.table-box::-webkit-scrollbar {\n  display: none;\n}\n.table-box.animate-loading {\n  overflow: hidden !important;\n}\ntd.active-row {\n  transition: background 0.3s ease;\n  box-shadow: 0px 2px 12px 0px #000;\n}\nth {\n  background: #0a0a0a;\n}\n.active-row td {\n  font-weight: 600;\n  color: #fff;\n}\ni.fas.fa-caret-left.active-row {\n  font-size: 55px;\n  margin-right: -24px;\n  height: 37px;\n  width: 38px;\n  color: #e44819;\n  margin-top: -22px;\n}\n.lds-spinner {\n  color: official;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  margin: auto;\n}\n.lds-spinner div {\n  transform-origin: 32px 32px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 29px;\n  width: 5px;\n  height: 14px;\n  border-radius: 20%;\n  background: #cef;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.participantsBTN {\n  cursor: pointer;\n  border: none;\n  background: var(--gradient-primary);\n  padding: 6px 7px;\n  border-radius: 4px;\n}\n.btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n  position: relative;\n  overflow: hidden;\n}\n.download {\n  background: #00CCFF;\n}\n.upload {\n  background: #F49845;\n}\n.cloud {\n  width: 25px;\n  height: 10px;\n  background: white;\n  border-radius: 20px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 13px;\n}\n.cloud:before,\n.cloud:after {\n  content: "";\n  position: absolute;\n  background: white;\n  border-radius: 50%;\n}\n.cloud:before {\n  width: 10px;\n  height: 10px;\n  top: -5px;\n  left: 2px;\n}\n.cloud:after {\n  width: 8px;\n  height: 8px;\n  top: -3px;\n  right: 3px;\n}\n.arrow {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 6px;\n  height: 9px;\n  background: #f00;\n}\n.arrow:after {\n  content: "";\n  position: absolute;\n  left: -3px;\n  top: 100%;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #f00;\n}\n.download .arrow {\n  top: 4px;\n  animation: downloadMove 1s linear infinite;\n}\n@keyframes downloadMove {\n  0% {\n    transform: translateY(-5px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n}\n.upload .arrow {\n  bottom: 4px;\n  animation: uploadMove 1s linear infinite;\n}\n.upload .arrow:after {\n  top: auto;\n  bottom: 100%;\n  border-top: none;\n  border-bottom: 6px solid yellow;\n}\n@keyframes uploadMove {\n  0% {\n    transform: translateY(5px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n}\n.download-card {\n  border-radius: 15px;\n  color: #fff;\n  text-decoration: none;\n  transition: transform 0.2s ease;\n}\n.download-card:hover {\n  transform: scale(1.05);\n}\n.download-card p {\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .download-scroll {\n    display: flex;\n    overflow-x: auto;\n    gap: 12px;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px 0px;\n  }\n  .download-card {\n    height: 90px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .download-card i {\n    font-size: 25px;\n    margin-bottom: 5px;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    padding: 5px;\n  }\n  .download-card p {\n    font-size: 12px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .download-scroll {\n    display: flex;\n    overflow-x: auto;\n    gap: 15px;\n    padding: 15px 10px;\n    justify-content: flex-start;\n  }\n  .download-card {\n    min-width: 160px;\n    flex: unset;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 10px;\n    gap: 15px;\n  }\n  .download-card i {\n    font-size: 32px;\n    margin: 0;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    padding: 5px;\n  }\n}\n@media (min-width: 1025px) {\n  .download-scroll {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    padding: 0px;\n  }\n  .download-card {\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 21px;\n    padding: 0 10px;\n  }\n  .download-card i {\n    font-size: 32px;\n    width: 50px;\n    margin: 0;\n    background: rgba(255, 255, 255, 0.1);\n    padding: 7px;\n    border-radius: 50%;\n    height: 50px;\n  }\n  .download-card p {\n    font-size: 16px;\n    margin: 0;\n  }\n}\n.download-card:nth-child(1) i {\n  background:\n    linear-gradient(\n      135deg,\n      #003055,\n      #0078D6);\n}\n.download-card:nth-child(2) i {\n  background:\n    linear-gradient(\n      135deg,\n      #333,\n      #000);\n}\n.download-card:nth-child(3) i {\n  background:\n    linear-gradient(\n      135deg,\n      #810600,\n      #ff3b30);\n}\n.download-card:nth-child(4) i {\n  background:\n    linear-gradient(\n      135deg,\n      #00823a,\n      #3DDC84);\n}\n.download-card:nth-child(5) i {\n  background:\n    linear-gradient(\n      135deg,\n      #333,\n      #000);\n}\n.top-banner-section {\n  width: 100%;\n  max-width: 1440px;\n  margin: 16px auto 0;\n  padding: 0 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.banner-carousel-container {\n  position: relative;\n  width: 100%;\n  border-radius: 0 !important;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n  border: none !important;\n  background: #000000;\n}\n.banner-carousel-inner {\n  width: 100%;\n  position: relative;\n  border-radius: 0 !important;\n}\n.banner-slide-wrapper {\n  width: 100%;\n  aspect-ratio: 1530 / 315;\n  background: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: 0 !important;\n}\n.banner-slide-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  border-radius: 0 !important;\n}\n.banner-dashed-indicators {\n  position: absolute;\n  bottom: 12px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  z-index: 10;\n  padding: 0;\n}\n.banner-dashed-indicators button {\n  width: 32px;\n  height: 3.5px;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.4);\n  border: none;\n  padding: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.banner-dashed-indicators button.active {\n  width: 48px;\n  background-color: #ffffff;\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);\n}\n.banner-native-slider .carousel-inner,\n.banner-native-slider .carousel-item {\n  position: relative;\n  width: 100%;\n  height: auto !important;\n  overflow: hidden;\n}\n.banner-native-slider .carousel-item {\n  display: none;\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n.banner-native-slider .carousel-item.active {\n  display: block !important;\n  opacity: 1 !important;\n  height: auto !important;\n}\n.banner-native-slider .banner-slide-wrapper {\n  width: 100%;\n  height: auto !important;\n}\n.banner-native-slider .banner-slide-img {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: cover !important;\n}\n.banner-nav-chevron {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 100%;\n  background: transparent;\n  border: none;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.25s ease;\n  opacity: 0.85;\n}\n.banner-nav-chevron svg {\n  stroke: #ffffff;\n  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.85));\n  transition: transform 0.2s ease, stroke 0.2s ease;\n}\n.banner-nav-chevron:hover {\n  opacity: 1;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.5),\n      transparent);\n}\n.banner-nav-chevron.next:hover {\n  background:\n    linear-gradient(\n      -90deg,\n      rgba(0, 0, 0, 0.5),\n      transparent);\n}\n.banner-nav-chevron:hover svg {\n  stroke: #fbbf24;\n  transform: scale(1.15);\n}\n.banner-nav-chevron.prev {\n  left: 0;\n}\n.banner-nav-chevron.next {\n  right: 0;\n}\n.quick-download-strip {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  width: 100%;\n  max-width: 1440px;\n  margin: 14px auto 0;\n  padding: 0 16px;\n}\n.quick-dock-btn {\n  flex: 1;\n  max-width: 320px;\n  height: 52px;\n  background:\n    linear-gradient(\n      180deg,\n      #182030 0%,\n      #0d121c 100%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.dock-btn-icon-wrap {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.25s ease;\n  flex-shrink: 0;\n}\n.quick-dock-win .dock-btn-icon-wrap {\n  color: #00a4ef;\n  background: rgba(0, 164, 239, 0.14);\n}\n.quick-dock-play .dock-btn-icon-wrap {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.16);\n}\n.quick-dock-android .dock-btn-icon-wrap {\n  color: #3ddc84;\n  background: rgba(61, 220, 132, 0.14);\n}\n.quick-dock-ios .dock-btn-icon-wrap {\n  color: #f8fafc;\n  background: rgba(255, 255, 255, 0.12);\n}\n.dock-btn-text {\n  flex: 1;\n  text-align: left;\n  margin-left: 10px;\n  letter-spacing: 0.3px;\n  font-size: 14.5px;\n  color: #f1f5f9;\n  font-weight: 600;\n}\n.dock-btn-badge {\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  padding: 3px 7px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.play-badge {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border-color: rgba(16, 185, 129, 0.35);\n}\n.apk-badge {\n  background: rgba(61, 220, 132, 0.15);\n  color: #4ade80;\n  border-color: rgba(61, 220, 132, 0.35);\n}\n.ios-badge {\n  background: rgba(255, 255, 255, 0.12);\n  color: #e2e8f0;\n}\n.quick-dock-btn:hover {\n  transform: translateY(-3px);\n  border-color: rgba(251, 191, 36, 0.6);\n  background:\n    linear-gradient(\n      180deg,\n      #1f2a3f 0%,\n      #101622 100%);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8), 0 0 16px rgba(251, 191, 36, 0.25);\n  color: #ffffff;\n}\n.quick-dock-btn:hover .dock-btn-icon-wrap {\n  transform: scale(1.12);\n}\n.quick-dock-btn:hover .dock-btn-text {\n  color: #ffffff;\n}\n.stake-feature-section {\n  width: 100%;\n  max-width: 1440px;\n  margin: 28px auto 0;\n  padding: 0 16px;\n}\n.stake-feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  width: 100%;\n}\n.stake-feature-card {\n  position: relative;\n  min-height: 185px;\n  border-radius: 18px;\n  overflow: hidden;\n  padding: 24px 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55);\n}\n.stake-card-casino {\n  background:\n    radial-gradient(\n      circle at 85% 50%,\n      rgba(59, 130, 246, 0.22) 0%,\n      transparent 70%),\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #0f172a 60%,\n      #090d16 100%);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.stake-card-sports {\n  background:\n    radial-gradient(\n      circle at 85% 50%,\n      rgba(37, 99, 235, 0.28) 0%,\n      transparent 70%),\n    linear-gradient(\n      135deg,\n      #0f2b5c 0%,\n      #0a192f 60%,\n      #060e1c 100%);\n  border-color: rgba(59, 130, 246, 0.4);\n}\n.stake-card-slots {\n  background:\n    radial-gradient(\n      circle at 85% 50%,\n      rgba(217, 119, 6, 0.22) 0%,\n      transparent 70%),\n    linear-gradient(\n      135deg,\n      #3b1348 0%,\n      #1a0826 60%,\n      #0b0312 100%);\n  border-color: rgba(212, 175, 55, 0.35);\n}\n.stake-card-poker {\n  background:\n    radial-gradient(\n      circle at 85% 50%,\n      rgba(225, 29, 72, 0.25) 0%,\n      transparent 70%),\n    linear-gradient(\n      135deg,\n      #450a0a 0%,\n      #260505 60%,\n      #120202 100%);\n  border-color: rgba(239, 68, 68, 0.35);\n}\n.stake-card-left {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  z-index: 2;\n  max-width: 65%;\n}\n.stake-card-title {\n  margin: 0 0 6px 0;\n  font-size: 1.85rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n}\n.stake-card-subtitle {\n  margin: 0 0 16px 0;\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 500;\n}\n.stake-explore-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  padding: 6px 14px;\n  border-radius: 9999px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  transition: all 0.25s ease;\n}\n.stake-explore-btn i {\n  color: #fbbf24;\n  transition: transform 0.25s ease;\n}\n.stake-feature-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.75);\n}\n.stake-feature-card:hover .stake-explore-btn {\n  background: rgba(212, 175, 55, 0.2);\n  border-color: rgba(212, 175, 55, 0.6);\n  color: #fbbf24;\n}\n.stake-feature-card:hover .stake-explore-btn i {\n  transform: translateX(4px);\n}\n.stake-card-graphic {\n  position: relative;\n  width: 145px;\n  height: 145px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.stake-graphic-img {\n  max-width: 135px;\n  max-height: 135px;\n  object-fit: contain;\n  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.75));\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.stake-feature-card:hover .stake-graphic-img {\n  transform: scale(1.1) rotate(2deg);\n}\n.promo-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.88);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999999;\n  animation: promoFadeIn 0.3s ease forwards;\n  padding: 24px 16px;\n  box-sizing: border-box;\n}\n.promo-image-card-container {\n  position: relative;\n  max-width: 410px;\n  width: min(88vw, 410px);\n  max-height: 86vh;\n  border-radius: 20px;\n  overflow: visible;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  animation: promoScaleUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.promo-floating-close-btn {\n  position: absolute;\n  top: -14px;\n  right: -12px;\n  background:\n    radial-gradient(\n      circle,\n      #1a1e29 0%,\n      #0c0e14 100%);\n  border: 2px solid #eab308;\n  color: #fbbf24;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 50;\n  padding: 0;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.9), 0 0 14px rgba(234, 179, 8, 0.45);\n}\n.promo-floating-close-btn:hover {\n  background: #b45309;\n  border-color: #fef08a;\n  color: #ffffff;\n  transform: rotate(90deg) scale(1.1);\n  box-shadow: 0 0 22px rgba(234, 179, 8, 0.85);\n}\n.promo-flyer-clickable {\n  width: 100%;\n  cursor: pointer;\n  display: block;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.25);\n  border: none;\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.promo-flyer-img {\n  width: 100%;\n  height: auto;\n  max-height: min(78vh, 660px);\n  display: block;\n  object-fit: contain;\n  border-radius: 20px;\n  transition: transform 0.3s ease;\n}\n.promo-flyer-clickable:hover .promo-flyer-img {\n  transform: scale(1.015);\n}\n.promo-bottom-hint {\n  margin-top: 12px;\n  padding: 7px 18px;\n  border-radius: 9999px;\n  background: rgba(15, 20, 32, 0.9);\n  border: 1px solid rgba(234, 179, 8, 0.4);\n  color: #fde047;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(8px);\n  transition: all 0.25s ease;\n}\n.promo-bottom-hint:hover {\n  background: rgba(234, 179, 8, 0.25);\n  border-color: #fbbf24;\n  color: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(234, 179, 8, 0.35);\n}\n.hint-ext-icon {\n  font-size: 11px;\n  opacity: 0.8;\n}\n@keyframes promoFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes promoScaleUp {\n  from {\n    transform: scale(0.88);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 992px) {\n  .banner-slide-wrapper {\n    aspect-ratio: 860 / 235;\n  }\n  .quick-download-strip {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    padding: 0 16px;\n  }\n  .quick-dock-btn {\n    height: 48px;\n    font-size: 14px;\n    padding: 0 12px;\n  }\n  .dock-btn-icon-wrap {\n    width: 30px;\n    height: 30px;\n    font-size: 16px;\n  }\n  .dock-btn-text {\n    font-size: 13.5px;\n    margin-left: 8px;\n  }\n  .stake-feature-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 14px;\n  }\n  .stake-feature-card {\n    min-height: 155px;\n    padding: 18px 20px;\n  }\n  .stake-card-graphic {\n    width: 100px;\n    height: 100px;\n  }\n  .stake-graphic-img {\n    max-width: 95px;\n    max-height: 95px;\n  }\n  .hero-ticker-ribbon {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 600px) {\n  .top-banner-section {\n    padding: 0 !important;\n    margin: 0 auto !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    gap: 10px !important;\n  }\n  .banner-carousel-container {\n    border-radius: 0 !important;\n    border: none !important;\n    box-shadow: none !important;\n    width: 100% !important;\n  }\n  .banner-carousel-inner,\n  .banner-native-slider .carousel-item {\n    border-radius: 0 !important;\n    width: 100% !important;\n  }\n  .banner-slide-wrapper {\n    aspect-ratio: 800 / 372 !important;\n    width: 100% !important;\n    height: auto !important;\n    border-radius: 0 !important;\n  }\n  .banner-slide-img {\n    width: 100% !important;\n    height: 100% !important;\n    object-fit: cover !important;\n    border-radius: 0 !important;\n    display: block !important;\n  }\n  .banner-dashed-indicators button {\n    width: 22px;\n    height: 3px;\n  }\n  .banner-dashed-indicators button.active {\n    width: 32px;\n  }\n  .banner-nav-chevron {\n    width: 34px;\n    font-size: 16px;\n  }\n  .quick-download-strip {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n    padding: 0 12px;\n    margin-top: 10px;\n  }\n  .quick-dock-btn {\n    height: 46px;\n    font-size: 13.5px;\n    padding: 0 10px;\n  }\n  .dock-btn-icon-wrap {\n    width: 28px;\n    height: 28px;\n    font-size: 15px;\n  }\n  .dock-btn-text {\n    font-size: 13px;\n    margin-left: 6px;\n  }\n  .dock-btn-badge {\n    font-size: 9px;\n    padding: 2px 5px;\n  }\n  .stake-feature-section {\n    padding: 0 12px;\n    margin-top: 14px;\n    width: 100%;\n    max-width: 100%;\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n  .stake-feature-grid {\n    display: grid !important;\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 10px;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .stake-feature-card {\n    position: relative;\n    overflow: hidden;\n    min-height: 138px;\n    min-width: 0;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 14px 10px;\n    border-radius: 14px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  .stake-card-left {\n    max-width: 100%;\n    width: 100%;\n    z-index: 2;\n    min-width: 0;\n  }\n  .stake-card-title {\n    font-size: 1.02rem;\n    font-weight: 800;\n    line-height: 1.15;\n    margin: 0 0 3px 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .stake-card-subtitle {\n    font-size: 0.68rem;\n    margin: 0 0 10px 0;\n    opacity: 0.8;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .stake-explore-btn {\n    font-size: 0.62rem;\n    padding: 3px 7px;\n    gap: 3px;\n    font-weight: 700;\n    max-width: calc(100% - 48px);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .stake-card-graphic {\n    position: absolute;\n    right: 2px;\n    bottom: 4px;\n    width: 48px;\n    height: 48px;\n    z-index: 1;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .stake-graphic-img {\n    max-width: 46px;\n    max-height: 46px;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.85));\n  }\n  .hero-ticker-ribbon {\n    display: grid !important;\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 8px !important;\n    padding: 0 12px !important;\n    margin-top: 14px !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    box-sizing: border-box !important;\n    overflow: hidden !important;\n  }\n  .ticker-box {\n    display: flex !important;\n    align-items: center !important;\n    padding: 8px 10px !important;\n    border-radius: 12px !important;\n    gap: 8px !important;\n    min-width: 0 !important;\n    width: 100% !important;\n    box-sizing: border-box !important;\n    overflow: hidden !important;\n  }\n  .ticker-icon-circle {\n    width: 30px !important;\n    height: 30px !important;\n    min-width: 30px !important;\n    font-size: 13px !important;\n    border-radius: 10px !important;\n    flex-shrink: 0 !important;\n  }\n  .ticker-text-group {\n    display: flex !important;\n    flex-direction: column !important;\n    min-width: 0 !important;\n    flex: 1 !important;\n    overflow: hidden !important;\n    gap: 1px !important;\n  }\n  .ticker-caption {\n    font-size: 8px !important;\n    font-weight: 700 !important;\n    letter-spacing: 0.02em !important;\n    white-space: nowrap !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    line-height: 1.15 !important;\n    display: block !important;\n    max-width: 100% !important;\n  }\n  .ticker-number {\n    font-size: clamp(10.5px, 2.8vw, 12.5px) !important;\n    font-weight: 800 !important;\n    white-space: nowrap !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    line-height: 1.2 !important;\n    display: block !important;\n    max-width: 100% !important;\n  }\n  .home_game_grid {\n    grid-template-columns: 1fr;\n    gap: 10px;\n    padding: 0 12px;\n    margin-top: 16px;\n  }\n  .home_grid_box {\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center !important;\n    text-align: left !important;\n    padding: 12px 14px !important;\n    gap: 14px !important;\n    border-radius: 16px !important;\n  }\n  .home_grid_game_icon {\n    width: 56px !important;\n    height: 56px !important;\n    min-width: 56px !important;\n    border-radius: 14px !important;\n    flex-shrink: 0 !important;\n    margin: 0 !important;\n  }\n  .home_grid_box_content {\n    flex: 1 !important;\n    min-width: 0 !important;\n    text-align: left !important;\n  }\n  .home_grid_box h6 {\n    font-size: 16px !important;\n    margin: 2px 0 !important;\n  }\n  .grid-card-tag-row {\n    font-size: 11px !important;\n  }\n  .home_grid_tag {\n    font-size: 11px !important;\n  }\n  .promo-modal-backdrop {\n    padding: 20px 12px;\n  }\n  .promo-image-card-container {\n    max-width: min(88vw, 340px);\n    width: 88vw;\n  }\n  .promo-floating-close-btn {\n    top: -10px;\n    right: -4px;\n    width: 34px;\n    height: 34px;\n  }\n  .promo-flyer-img {\n    max-height: min(74vh, 520px);\n  }\n  .promo-bottom-hint {\n    font-size: 12px;\n    padding: 6px 14px;\n    margin-top: 10px;\n  }\n}\n@media (max-width: 380px) {\n  .quick-download-strip {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 6px;\n    padding: 0 8px;\n  }\n  .quick-dock-btn {\n    height: 44px;\n    font-size: 12.5px;\n    padding: 0 8px;\n  }\n  .dock-btn-icon-wrap {\n    width: 24px;\n    height: 24px;\n    font-size: 13px;\n  }\n  .dock-btn-text {\n    font-size: 12px;\n    margin-left: 4px;\n  }\n  .dock-btn-badge {\n    display: none;\n  }\n  .stake-feature-section {\n    padding: 0 8px;\n  }\n  .stake-feature-grid {\n    gap: 8px;\n  }\n  .stake-feature-card {\n    min-height: 118px;\n    padding: 12px 10px;\n  }\n  .stake-card-title {\n    font-size: 0.98rem;\n  }\n  .stake-card-subtitle {\n    font-size: 0.68rem;\n    margin-bottom: 6px;\n  }\n  .stake-card-graphic {\n    position: absolute;\n    right: 2px;\n    bottom: 2px;\n    width: 42px;\n    height: 42px;\n  }\n  .stake-graphic-img {\n    max-width: 40px;\n    max-height: 40px;\n  }\n  .hero-ticker-ribbon {\n    display: grid !important;\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    padding: 0 8px !important;\n    gap: 6px !important;\n    width: 100% !important;\n    box-sizing: border-box !important;\n    overflow: hidden !important;\n  }\n  .ticker-box {\n    padding: 6px 6px !important;\n    gap: 6px !important;\n    border-radius: 10px !important;\n  }\n  .ticker-icon-circle {\n    width: 24px !important;\n    height: 24px !important;\n    min-width: 24px !important;\n    font-size: 11px !important;\n    border-radius: 7px !important;\n  }\n  .ticker-caption {\n    font-size: 7.5px !important;\n  }\n  .ticker-number {\n    font-size: 10px !important;\n  }\n}\n/*# sourceMappingURL=home-page.css.map */\n'] }]
  }], () => [{ type: Store }, { type: ActivatedRoute }, { type: Router }, { type: GameCmsService }, { type: CashierService }, { type: PlayerService }, { type: DatePipe }, { type: DomSanitizer }, { type: MessageService }, { type: ComponentFactoryResolver$1 }, { type: CommonUtilService }], { onEscapeKeyHandler: [{
    type: HostListener,
    args: ["document:keydown.escape", ["$event"]]
  }], alertHost: [{
    type: ViewChild,
    args: ["alertHost", { read: ViewContainerRef }]
  }], scrollContainer: [{
    type: ViewChild,
    args: ["scrollContainer"]
  }], sportsScroller: [{
    type: ViewChild,
    args: ["sportsScroller"]
  }], scrollContainerLiveCasino: [{
    type: ViewChild,
    args: ["scrollContainerLiveCasino"]
  }], scrollContainerFeatured: [{
    type: ViewChild,
    args: ["scrollContainerFeatured"]
  }], scrollContainerSlots: [{
    type: ViewChild,
    args: ["scrollContainerSlots"]
  }], gameIframe: [{
    type: ViewChild,
    args: ["gameIframe", { static: false }]
  }], gifImg: [{
    type: ViewChild,
    args: ["gifImg"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/home-page/home-page.ts", lineNumber: 30 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-J434RX3I.js.map
