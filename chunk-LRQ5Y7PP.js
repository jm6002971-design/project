import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-J735AYEO.js";

// src/app/reusables/datepipe/dateformate.pipe.ts
var RemoveDateFormatPipe = class _RemoveDateFormatPipe {
  transform(value) {
    if (!value)
      return "";
    return value.replace("T", " ").replace("[UTC]", "").replace(/Z$/, "").replace(/\.\d+/, "").trim();
  }
  static {
    this.\u0275fac = function RemoveDateFormatPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoveDateFormatPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "removeDateFormat", type: _RemoveDateFormatPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoveDateFormatPipe, [{
    type: Pipe,
    args: [{
      name: "removeDateFormat",
      standalone: true
    }]
  }], null, null);
})();

export {
  RemoveDateFormatPipe
};
//# sourceMappingURL=chunk-LRQ5Y7PP.js.map
