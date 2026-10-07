import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-J735AYEO.js";
import {
  __spreadValues
} from "./chunk-EAJ6W5YO.js";

// src/app/reusables/message/message.service.ts
var MessageService = class _MessageService {
  constructor() {
    this.nicknameSource = new BehaviorSubject("");
    this.nickname$ = this.nicknameSource.asObservable();
    this.messages = [];
    this.messageSubject = new BehaviorSubject([]);
  }
  setNickname(name) {
    this.nicknameSource.next(name);
  }
  getMessages() {
    return this.messageSubject.asObservable();
  }
  success(title, content) {
    this.add({ type: "success", title, content });
  }
  error(title, content) {
    this.add({ type: "error", title, content });
  }
  info(title, content) {
    this.add({ type: "info", title, content });
  }
  warning(title, content) {
    this.add({ type: "warning", title, content });
  }
  add(data) {
    const message = __spreadValues({
      id: Date.now()
    }, data);
    this.messages.push(message);
    this.messageSubject.next([...this.messages]);
  }
  remove(id) {
    this.messages = this.messages.filter((m) => m.id !== id);
    this.messageSubject.next([...this.messages]);
  }
  clearAll() {
    this.messages = [];
    this.messageSubject.next([]);
  }
  static {
    this.\u0275fac = function MessageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessageService, factory: _MessageService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  MessageService
};
//# sourceMappingURL=chunk-YCU5ZQFP.js.map
