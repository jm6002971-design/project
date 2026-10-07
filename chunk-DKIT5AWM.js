import {
  ResetState
} from "./chunk-PYDFV3LO.js";
import {
  MessageService
} from "./chunk-YCU5ZQFP.js";
import {
  PlayerService
} from "./chunk-HXFVUPJ2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FAEKDNT6.js";
import "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  RouterLink
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-S5ZOBF7L.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/specification/specification.component.ts
var _c0 = (a0) => ({ active: a0 });
var _c1 = (a0, a1) => ({ active: a0, verified: a1 });
function SpecificationComponent_ng_container_18_button_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " WhatsApp Verification ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_ng_container_18_button_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " WhatsApp Verified \u2713 ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_ng_container_18_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SpecificationComponent_ng_container_18_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateProfilepassword("Whatsup"));
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275template(2, SpecificationComponent_ng_container_18_button_1_span_2_Template, 2, 0, "span", 8)(3, SpecificationComponent_ng_container_18_button_1_span_3_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c1, ctx_r1.updateprofilepassword === "Whatsup", (ctx_r1.mobileVerified == null ? null : ctx_r1.mobileVerified.mobileVerified) === true))("disabled", (ctx_r1.mobileVerified == null ? null : ctx_r1.mobileVerified.mobileVerified) === true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.mobileVerified == null ? null : ctx_r1.mobileVerified.mobileVerified) === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.mobileVerified == null ? null : ctx_r1.mobileVerified.mobileVerified) === true);
  }
}
function SpecificationComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SpecificationComponent_ng_container_18_button_1_Template, 4, 7, "button", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.mobileVerified == null ? null : ctx_r1.mobileVerified.mobileVerified) === true || (ctx_r1.mobileVerified == null ? null : ctx_r1.mobileVerified.mobileVerified) === false);
  }
}
function SpecificationComponent_div_19_form_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, " Username and Nickname should not be the same ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_19_form_1_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Copied");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_19_form_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 35)(2, "label")(3, "span", 21);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", true);
  }
}
function SpecificationComponent_div_19_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 18)(1, "div", 19)(2, "div", 20)(3, "label")(4, "span", 21);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Username");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20)(9, "label")(10, "span", 21);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19)(15, "div", 20)(16, "label")(17, "span", 21);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Nickname");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 24);
    \u0275\u0275listener("input", function SpecificationComponent_div_19_form_1_Template_input_input_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sanitizeNickname($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, SpecificationComponent_div_19_form_1_small_21_Template, 2, 0, "small", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 20)(23, "label")(24, "span", 21);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 26);
    \u0275\u0275listener("input", function SpecificationComponent_div_19_form_1_Template_input_input_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sanitizeName($event, "firstName"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "label")(31, "span", 21);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 27);
    \u0275\u0275listener("input", function SpecificationComponent_div_19_form_1_Template_input_input_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sanitizeName($event, "lastName"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 20)(36, "label")(37, "span", 21);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Refer Friend");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 28);
    \u0275\u0275elementStart(41, "span", 29);
    \u0275\u0275listener("click", function SpecificationComponent_div_19_form_1_Template_span_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyMessage(ctx_r1.copytex));
    });
    \u0275\u0275element(42, "i", 30);
    \u0275\u0275template(43, SpecificationComponent_div_19_form_1_span_43_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, SpecificationComponent_div_19_form_1_div_44_Template, 8, 1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.ProfileUpdate);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.loginName)("disabled", true);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r1.isSameUsernameNickname());
    \u0275\u0275advance(22);
    \u0275\u0275property("ngIf", ctx_r1.showCopiedMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mobileVerified.address.phone);
  }
}
function SpecificationComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, SpecificationComponent_div_19_form_1_Template, 45, 6, "form", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loginName);
  }
}
function SpecificationComponent_div_20_div_11_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Old password is required ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_20_div_11_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Minimum 6 characters required ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_20_div_11_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Maximum 15 characters allowed ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_20_div_11_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter alphabets and numeric only ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_20_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, SpecificationComponent_div_20_div_11_small_1_Template, 2, 0, "small", 8)(2, SpecificationComponent_div_20_div_11_small_2_Template, 2, 0, "small", 8)(3, SpecificationComponent_div_20_div_11_small_3_Template, 2, 0, "small", 8)(4, SpecificationComponent_div_20_div_11_small_4_Template, 2, 0, "small", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.updatePassword.get("oldPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.updatePassword.get("oldPassword")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.updatePassword.get("oldPassword")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.updatePassword.get("oldPassword")) == null ? null : tmp_5_0.hasError("pattern")) && !((tmp_5_0 = ctx_r1.updatePassword.get("oldPassword")) == null ? null : tmp_5_0.hasError("minlength")) && !((tmp_5_0 = ctx_r1.updatePassword.get("oldPassword")) == null ? null : tmp_5_0.hasError("maxlength")));
  }
}
function SpecificationComponent_div_20_div_20_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " New password is required ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_20_div_20_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " At least 6 characters ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_20_div_20_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Max 15 characters ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_20_div_20_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter alphabets and numeric only ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_20_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, SpecificationComponent_div_20_div_20_small_1_Template, 2, 0, "small", 8)(2, SpecificationComponent_div_20_div_20_small_2_Template, 2, 0, "small", 8)(3, SpecificationComponent_div_20_div_20_small_3_Template, 2, 0, "small", 8)(4, SpecificationComponent_div_20_div_20_small_4_Template, 2, 0, "small", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.updatePassword.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.updatePassword.get("newPassword")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.updatePassword.get("newPassword")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.updatePassword.get("newPassword")) == null ? null : tmp_5_0.hasError("pattern")) && !((tmp_5_0 = ctx_r1.updatePassword.get("newPassword")) == null ? null : tmp_5_0.hasError("minlength")) && !((tmp_5_0 = ctx_r1.updatePassword.get("newPassword")) == null ? null : tmp_5_0.hasError("maxlength")));
  }
}
function SpecificationComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "form", 18)(2, "div", 19)(3, "div", 20)(4, "label")(5, "span", 21);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Old Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 37)(9, "input", 38);
    \u0275\u0275listener("keydown.space", function SpecificationComponent_div_20_Template_input_keydown_space_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "i", 39);
    \u0275\u0275listener("click", function SpecificationComponent_div_20_Template_i_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showOldPass = !ctx_r1.showOldPass);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SpecificationComponent_div_20_div_11_Template, 5, 4, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20)(13, "label")(14, "span", 21);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 37)(18, "input", 41);
    \u0275\u0275listener("keydown.space", function SpecificationComponent_div_20_Template_input_keydown_space_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "i", 39);
    \u0275\u0275listener("click", function SpecificationComponent_div_20_Template_i_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewPass = !ctx_r1.showNewPass);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, SpecificationComponent_div_20_div_20_Template, 5, 4, "div", 40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.updatePassword);
    \u0275\u0275advance(8);
    \u0275\u0275property("type", ctx_r1.showOldPass ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.showOldPass ? "fa-eye" : "fa-eye-slash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.updatePassword.get("oldPassword")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.updatePassword.get("oldPassword")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showNewPass ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.showNewPass ? "fa-eye" : "fa-eye-slash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.updatePassword.get("newPassword")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx_r1.updatePassword.get("newPassword")) == null ? null : tmp_7_0.invalid));
  }
}
function SpecificationComponent_div_21_div_2_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1, " Enter valid 10-digit mobile number ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "div", 20)(3, "label")(4, "span", 21);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 44);
    \u0275\u0275listener("input", function SpecificationComponent_div_21_div_2_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onlyNumbers($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SpecificationComponent_div_21_div_2_small_8_Template, 2, 0, "small", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.otpForm.get("phone")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.otpForm.get("phone")) == null ? null : tmp_2_0.invalid));
  }
}
function SpecificationComponent_div_21_div_3_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Resend OTP in ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("00:", ctx_r1.timeLeft, "");
  }
}
function SpecificationComponent_div_21_div_3_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function SpecificationComponent_div_21_div_3_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.WhatsupSubmit());
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, "Resend OTP ");
    \u0275\u0275elementEnd();
  }
}
function SpecificationComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 19)(2, "div", 20)(3, "label");
    \u0275\u0275text(4, "Enter OTP sent to WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 46);
    \u0275\u0275listener("input", function SpecificationComponent_div_21_div_3_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onlyNumbers($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SpecificationComponent_div_21_div_3_p_6_Template, 4, 1, "p", 8)(7, SpecificationComponent_div_21_div_3_button_7_Template, 3, 0, "button", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.timeLeft > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canResendOtp);
  }
}
function SpecificationComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "form", 18);
    \u0275\u0275template(2, SpecificationComponent_div_21_div_2_Template, 10, 1, "div", 8)(3, SpecificationComponent_div_21_div_3_Template, 9, 2, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.otpForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showOtpBox);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showOtpBox);
  }
}
function SpecificationComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function SpecificationComponent_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProfileUpDateFormSubmit());
    });
    \u0275\u0275text(1, " Update! ");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isSameUsernameNickname());
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.apiLoader ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function SpecificationComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function SpecificationComponent_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdatePasswordSubmit());
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2, " Update! ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.updatePassword.invalid || ctx_r1.apiLoader1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.apiLoader1 ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function SpecificationComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function SpecificationComponent_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.WhatsupSubmit());
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2, " Verify! ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ((tmp_1_0 = ctx_r1.otpForm.get("phone")) == null ? null : tmp_1_0.invalid) || ctx_r1.apiLoader2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.apiLoader2 ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function SpecificationComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function SpecificationComponent_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verifyWhatsappOtp());
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2, " Verify OTP! ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ((tmp_1_0 = ctx_r1.otpForm.get("otp")) == null ? null : tmp_1_0.invalid) || ctx_r1.apiLoader2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.apiLoader2 ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function SpecificationComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.UpdateProfilemessage, "\n");
  }
}
function SpecificationComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "img", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", "/assets/giflogo.gif?" + ctx_r1.loaderKey, \u0275\u0275sanitizeUrl);
  }
}
var SpecificationComponent = class _SpecificationComponent {
  constructor(store, fb, messageService, playerservice) {
    this.store = store;
    this.fb = fb;
    this.messageService = messageService;
    this.playerservice = playerservice;
    this.updateprofilepassword = "Profile";
    this.playerLoggedIn = false;
    this.showCopiedMessage = false;
    this.UpdateProfilesuccessPop = false;
    this.responseLoader = false;
    this.loaderKey = Date.now();
    this.showOtpBox = false;
    this.apiLoader = false;
    this.apiLoader1 = false;
    this.apiLoader2 = false;
    this.showOldPass = false;
    this.showNewPass = false;
    this.timeLeft = 60;
    this.canResendOtp = false;
    this.whatsapp = false;
  }
  ngOnInit() {
    this.moveToTop();
    this.showLoader();
    this.store.dispatch(new ResetState());
    this.loginSub = this.store.select("loginState").subscribe((loginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
        }
      }
    });
    this.ProfileUpdate = new FormGroup({
      nickname: new FormControl("", [
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z0-9]*")
      ]),
      email: new FormControl({ value: "", disabled: true }, [
        Validators.email
      ]),
      firstName: new FormControl("", [
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z]*")
      ]),
      pixelURL: new FormControl({ value: "", disabled: true }),
      lastName: new FormControl("", Validators.pattern("[a-zA-Z]*")),
      address: new FormGroup({
        city: new FormControl("", Validators.pattern("[a-zA-Z0-9]*")),
        phone: new FormControl({ value: "", disabled: true }, [Validators.pattern("[4-9]\\d{9}")]),
        country: new FormControl()
      })
    });
    this.store.dispatch(new ResetState());
    this.updatePassword = new FormGroup({
      oldPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(/^\S*$/)
      ]),
      newPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(/^\S*$/)
      ])
    });
    this.otpForm = this.fb.group({
      phone: ["", [Validators.required, Validators.pattern("[6-9]\\d{9}")]],
      otp: ["", [Validators.required, Validators.pattern("^[0-9]{6}$")]]
    });
    this.storeSub = this.store.select("playerState").subscribe((playerState) => {
      console.log(playerState);
      if (playerState.profileUpdateResponse) {
        console.log(playerState.profileUpdateResponse);
        console.log(playerState.profileUpdateResponse.success);
        if (playerState.profileUpdateResponse.success == true) {
          this.hideLoader();
          this.apiLoader = false;
          if (playerState.profileUpdateResponse.success) {
            this.messageService.success("Success", "Updated Successfully");
          }
        } else if (playerState.profileUpdateResponse.success == false) {
          this.updateProfileError = playerState.profileUpdateResponse.description;
          this.apiLoader = false;
          this.messageService.error("Failed", this.updateProfileError);
        }
      }
    });
    this.profileApi();
    const getwhatsappstatus = localStorage.getItem("whatsAppStatus");
    if (getwhatsappstatus) {
      let data = JSON.parse(getwhatsappstatus);
      this.whatsapp = data.status;
    }
  }
  sanitizeNickname(event) {
    const input = event.target;
    const value = input.value.replace(/[^a-zA-Z0-9]/g, "");
    input.value = value;
    this.ProfileUpdate.get("nickname")?.setValue(value, { emitEvent: false });
  }
  sanitizeName(event, controlName) {
    const input = event.target;
    const value = input.value.replace(/[^a-zA-Z\s]/g, "");
    input.value = value;
    this.ProfileUpdate.get(controlName)?.setValue(value, { emitEvent: false });
  }
  profileApi() {
    this.playerservice.onPlayerGetProfile().subscribe((data) => {
      if (data) {
        this.profile = data;
        this.loginName = this.profile.login;
        this.copytex = this.profile.pixelURL;
        this.mobileVerified = data;
        this.ProfileUpdate.patchValue({
          nickname: this.profile.nickname,
          email: this.profile.email,
          firstName: this.profile.firstName,
          pixelURL: this.profile.pixelURL,
          lastName: this.profile.lastName,
          address: {
            city: this.profile.address?.city || "",
            phone: this.profile.address?.phone || "",
            country: this.profile.address?.country || ""
          }
        });
        this.hideLoader();
      }
    });
  }
  showLoader() {
    this.loaderKey = Date.now();
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  updateProfilepassword(update) {
    this.apiLoader = false;
    this.apiLoader1 = false;
    this.updateprofilepassword = update;
    this.updatePassword.reset();
  }
  WhatsupSubmit() {
    this.apiLoader2 = false;
    let data = {
      "face": "rajpoker",
      "mobile": this.otpForm.value.phone,
      "serviceType": "whatsapp"
    };
    this.playerservice.getgenerateOTP(data).subscribe((data2) => {
      console.log(data2);
      this.apiLoader2 = false;
      if (data2?.success === true) {
        this.showOtpBox = true;
        this.startOtpTimer();
      } else {
        this.messageService.error("Failed", data2.description);
        this.otpForm.reset();
      }
    });
  }
  verifyWhatsappOtp() {
    const body = {
      otp: this.otpForm.value.otp,
      mobile: this.otpForm.value.phone
    };
    this.playerservice.getvalidateOTP(body).subscribe((res) => {
      console.log(res);
      if (res?.success) {
        let bodyres = {
          mobile: this.otpForm.value.phone
        };
        this.playerservice.getaddMobileVerifyBonus(bodyres).subscribe((data) => {
          console.log(data);
          if (data && data.success) {
            this.messageService.success("Success", "Congratulations!\nYour Mobile Number is Verified Successfully.\nEnjoy Your Free Bonus!. \nThis bonus and any proceeds derived from it are strictly for poker play only. Any use of the bonus for casino games or sports betting will result in forfeiture of the bonus and any associated winnings");
            this.otpForm.reset();
            this.profileApi();
            this.updateProfilepassword("Profile");
          }
        });
        this.showOtpBox = false;
      } else {
        this.messageService.success("Success", res.description);
      }
    });
  }
  moveToTop() {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  onProfileUpDateFormSubmit() {
    this.apiLoader = true;
    const payload = this.ProfileUpdate.getRawValue();
    console.log("Final Payload:", payload);
    this.playerservice.onPlayerUpdateProfile(payload).subscribe((data) => {
      if (data) {
        this.apiLoader = false;
        if (data.success) {
          const nickname = this.ProfileUpdate.value.nickname;
          this.messageService.setNickname(nickname);
          this.messageService.success("Success", "Updated Successfully");
        } else {
          this.messageService.success("Success", data.description);
        }
      }
    });
  }
  copyMessage(val) {
    console.log(val);
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = val;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, tempTextarea.value.length);
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        this.showCopiedMessage = true;
        setTimeout(() => this.showCopiedMessage = false, 2e3);
      }
    } catch (err) {
      console.error("Error copying text: ", err);
    }
    document.body.removeChild(tempTextarea);
  }
  UpdateProfilePopClose() {
    this.store.dispatch(new ResetState());
    this.UpdateProfilemessage = "";
    this.UpdateProfilesuccessPop = false;
  }
  onUpdatePasswordSubmit() {
    this.apiLoader1 = true;
    const body = {
      oldPassword: this.updatePassword.get("oldPassword")?.value,
      newPassword: this.updatePassword.get("newPassword")?.value
    };
    console.log("Password update payload:", body);
    this.playerservice.onPlayerUpdatePassword(body).subscribe((data) => {
      console.log(data);
      if (data) {
        this.apiLoader1 = false;
        if (data.success) {
          this.messageService.success("Success", "Change password updated successfully");
          this.updatePassword.reset();
        } else {
          this.UpdateProfilemessage = data.description;
          setTimeout(() => {
            this.UpdateProfilemessage = "";
          }, 3500);
        }
      }
    });
  }
  startOtpTimer() {
    this.timeLeft = 60;
    this.canResendOtp = false;
    if (this.otpTimer) {
      clearInterval(this.otpTimer);
    }
    this.otpTimer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        clearInterval(this.otpTimer);
        this.canResendOtp = true;
      }
    }, 1e3);
  }
  onlyNumbers(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, "");
    const controlName = input.getAttribute("formcontrolname");
    if (controlName) {
      this.otpForm.get(controlName)?.setValue(input.value, { emitEvent: false });
    }
  }
  isSameUsernameNickname() {
    const nickname = this.ProfileUpdate.get("nickname")?.value;
    return nickname && this.loginName && nickname.toLowerCase() === this.loginName.toLowerCase();
  }
  static {
    this.\u0275fac = function SpecificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpecificationComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(PlayerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecificationComponent, selectors: [["app-specification"]], decls: 29, vars: 16, consts: [[1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15", "live_casino_title"], [1, "button-row"], [1, "btn", 3, "click", "ngClass"], [1, "far", "fa-edit"], [1, "fa", "fa-lock"], [4, "ngIf"], ["class", "profile-container", 4, "ngIf"], ["class", "btn active", 3, "disabled", "click", 4, "ngIf"], ["style", "color: #f00;", 4, "ngIf"], ["class", "loader-wrapper", 4, "ngIf"], ["class", "btn", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "btn", 3, "click", "ngClass", "disabled"], [1, "fab", "fa-whatsapp"], [1, "profile-container"], ["class", "profile-form", 3, "formGroup", 4, "ngIf"], [1, "profile-form", 3, "formGroup"], [1, "form-row"], [1, "form-group"], [1, "gradient-star"], ["type", "text", 3, "value", "disabled"], ["type", "email", "formControlName", "email"], ["type", "text", "formControlName", "nickname", 3, "input"], ["class", "error-msg", 4, "ngIf"], ["type", "text", "formControlName", "firstName", 3, "input"], ["type", "text", "formControlName", "lastName", 3, "input"], ["type", "text", "formControlName", "pixelURL", 2, "padding-right", "45px"], [1, "copyIcon", 3, "click"], [1, "fa", "fa-copy"], ["class", "copied-msg", 4, "ngIf"], ["class", "form-row", 4, "ngIf"], [1, "error-msg"], [1, "copied-msg"], ["formGroupName", "address", 1, "form-group"], ["type", "text", "formControlName", "phone", 3, "disabled"], [1, "fgsdgd"], ["placeholder", "Password", "formControlName", "oldPassword", 3, "keydown.space", "type"], [1, "setCls_eye", "fa", 3, "click", "ngClass"], ["class", "sign-in-desktop__validation-error", 4, "ngIf"], ["placeholder", "Min 6 characters", "formControlName", "newPassword", 3, "keydown.space", "type"], [1, "sign-in-desktop__validation-error"], ["class", "otp-box", 4, "ngIf"], ["type", "text", "placeholder", "Enter WhatsApp number", "formControlName", "phone", "maxlength", "10", "inputmode", "numeric", "autocomplete", "off", 3, "input"], [1, "otp-box"], ["type", "text", "maxlength", "6", "placeholder", "OTP", "formControlName", "otp", "inputmode", "numeric", "autocomplete", "one-time-code", 3, "input"], ["type", "button", "class", "resend-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "resend-btn", 3, "click"], [1, "fas", "fa-redo"], [1, "btn", "active", 3, "click", "disabled"], [2, "color", "#f00"], [1, "loader-wrapper"], ["width", "280", "alt", "loading", 3, "src"]], template: function SpecificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "img", 2);
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "My Account");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "img", 2);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h2", 3);
        \u0275\u0275text(10, "Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "button", 5);
        \u0275\u0275listener("click", function SpecificationComponent_Template_button_click_12_listener() {
          return ctx.updateProfilepassword("Profile");
        });
        \u0275\u0275element(13, "i", 6);
        \u0275\u0275text(14, " Change Profile ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 5);
        \u0275\u0275listener("click", function SpecificationComponent_Template_button_click_15_listener() {
          return ctx.updateProfilepassword("Password");
        });
        \u0275\u0275element(16, "i", 7);
        \u0275\u0275text(17, " Change Password ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, SpecificationComponent_ng_container_18_Template, 2, 1, "ng-container", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, SpecificationComponent_div_19_Template, 2, 1, "div", 9)(20, SpecificationComponent_div_20_Template, 21, 7, "div", 9)(21, SpecificationComponent_div_21_Template, 4, 3, "div", 9);
        \u0275\u0275elementStart(22, "div", 4);
        \u0275\u0275template(23, SpecificationComponent_button_23_Template, 3, 4, "button", 10)(24, SpecificationComponent_button_24_Template, 3, 4, "button", 10)(25, SpecificationComponent_button_25_Template, 3, 3, "button", 10)(26, SpecificationComponent_button_26_Template, 3, 3, "button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, SpecificationComponent_p_27_Template, 2, 1, "p", 11)(28, SpecificationComponent_div_28_Template, 2, 1, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c0, ctx.updateprofilepassword === "Profile"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c0, ctx.updateprofilepassword === "Password"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.whatsapp);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.updateprofilepassword == "Profile");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.updateprofilepassword == "Password");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.updateprofilepassword === "Whatsup");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.updateprofilepassword === "Profile");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.updateprofilepassword === "Password");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.updateprofilepassword === "Whatsup" && !ctx.showOtpBox);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.updateprofilepassword === "Whatsup" && ctx.showOtpBox);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.UpdateProfilemessage && ctx.updateprofilepassword === "Password");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.responseLoader);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, FormGroupName], styles: ["\n\n.copyIcon[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.copyIcon[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  width: 100%;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  top: -30px;\n  right: 20px;\n}\n.copyIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 18px;\n}\n.copied-msg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 0;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 2px;\n  border: 1px solid white;\n  border-radius: 2px;\n}\n.copyIcon[_ngcontent-%COMP%]:hover   .copied-msg[_ngcontent-%COMP%] {\n  display: block;\n}\ni.setCls_eye[_ngcontent-%COMP%] {\n  position: relative;\n  right: 31px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  top: 0px;\n  z-index: 100;\n}\n.fgsdgd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\nspan.fgsdgd[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n}\n.validBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.validBox[_ngcontent-%COMP%] {\n  background: #1d1d1d;\n  max-width: 310px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 7px;\n  text-align: start;\n  font-size: 14px;\n  border: 1px solid #4b4848;\n  position: relative;\n  left: 15px;\n}\n@media (max-width: 768px) {\n  .validBox[_ngcontent-%COMP%] {\n    left: 8px;\n    top: 10px;\n  }\n}\n.btn.verified[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: #fff;\n  cursor: no-drop;\n  opacity: 1;\n}\n.otp-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  letter-spacing: 8px;\n  transition: 0.3s;\n}\n.otp-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #f00;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #f00;\n}\n.otp-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  font-size: 13px;\n  color: #fff;\n}\n.resend-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  background: var(--gradient-primary);\n  color: #fff;\n  cursor: pointer;\n  font-weight: bold;\n  margin-top: 5px;\n  width: 100%;\n  max-width: 150px;\n  padding: 10px;\n  border-radius: 5px;\n}\n.resend-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-right: 5px;\n}\n.otp-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1ebe5d;\n}\n.otp-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  background: #a7e5c2;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=specification.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpecificationComponent, [{
    type: Component,
    args: [{ selector: "app-specification", standalone: true, imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule], template: `<div class="redirectline">\r
  <span routerLink="/home">Home</span>\r
  <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15">\r
  <span>My Account</span>\r
  <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15">\r
  <span>Profile</span>\r
</div>\r
<h2 class="m_t_15 live_casino_title">Profile</h2>\r
\r
<div class="button-row">\r
  <button class="btn" [ngClass]="{ active: updateprofilepassword === 'Profile' }"\r
    (click)="updateProfilepassword('Profile'); ">\r
    <i class='far fa-edit'></i> Change Profile\r
  </button>\r
  <button class="btn" [ngClass]="{ active: updateprofilepassword === 'Password' }"\r
    (click)="updateProfilepassword('Password')">\r
    <i class="fa fa-lock"></i> Change Password\r
  </button>\r
  <ng-container *ngIf="whatsapp">\r
    <button class="btn" *ngIf="mobileVerified?.mobileVerified === true || mobileVerified?.mobileVerified === false"\r
      [ngClass]="{ active: updateprofilepassword === 'Whatsup', verified: mobileVerified?.mobileVerified === true }"\r
      (click)="updateProfilepassword('Whatsup')" [disabled]="mobileVerified?.mobileVerified === true">\r
      <i class="fab fa-whatsapp"></i>\r
      <span *ngIf="mobileVerified?.mobileVerified === false">\r
        WhatsApp Verification\r
      </span>\r
      <span *ngIf="mobileVerified?.mobileVerified === true">\r
        WhatsApp Verified \u2713\r
      </span>\r
    </button>\r
\r
  </ng-container>\r
</div>\r
\r
<div class="profile-container" *ngIf="updateprofilepassword == 'Profile'">\r
  <form class="profile-form" [formGroup]="ProfileUpdate" *ngIf="loginName">\r
    <div class="form-row">\r
      <div class="form-group">\r
        <label><span class="gradient-star">*</span> Username</label>\r
        <input type="text" [value]="loginName" [disabled]="true" />\r
      </div>\r
      <div class="form-group">\r
        <label><span class="gradient-star">*</span> Email</label>\r
        <input type="email" formControlName="email" />\r
      </div>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-group">\r
        <label><span class="gradient-star">*</span> Nickname</label>\r
        <input type="text" formControlName="nickname"   (input)="sanitizeNickname($event)" />\r
        <small class="error-msg"\r
        *ngIf="isSameUsernameNickname()">\r
        Username and Nickname should not be the same\r
      </small>\r
      </div>\r
\r
      <div class="form-group">\r
        <label><span class="gradient-star">*</span> First Name</label>\r
        <input type="text" formControlName="firstName" (input)="sanitizeName($event, 'firstName')"/>\r
      </div>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-group">\r
        <label><span class="gradient-star">*</span> Last Name</label>\r
        <input type="text" formControlName="lastName"   (input)="sanitizeName($event, 'lastName')"/>\r
      </div>\r
      <div class="form-group">\r
        <label><span class="gradient-star">*</span> Refer Friend</label>\r
        <input type="text" formControlName="pixelURL" style="padding-right: 45px;" />\r
        <span class="copyIcon" (click)="copyMessage(copytex)">\r
          <i class="fa fa-copy"></i>\r
          <span *ngIf="showCopiedMessage" class="copied-msg">Copied</span>\r
        </span>\r
      </div>\r
    </div>\r
    <div class="form-row" *ngIf="mobileVerified.address.phone">\r
      <div class="form-group" formGroupName="address">\r
        <label><span class="gradient-star">*</span> Phone</label>\r
        <input type="text" formControlName="phone" [disabled]="true" />\r
      </div>\r
      <div class="form-group"></div>\r
    </div>\r
  </form>\r
</div>\r
<div class="profile-container" *ngIf="updateprofilepassword == 'Password'">\r
  <form class="profile-form" [formGroup]="updatePassword">\r
    <div class="form-row">\r
      <div class="form-group">\r
        <label><span class="gradient-star">*</span> Old Password</label>\r
\r
        <span class="fgsdgd">\r
          <input [type]="showOldPass ? 'text' : 'password'" placeholder="Password" formControlName="oldPassword"\r
            (keydown.space)="$event.preventDefault()" />\r
\r
          <i class="setCls_eye fa" [ngClass]="showOldPass ? 'fa-eye' : 'fa-eye-slash'"\r
            (click)="showOldPass = !showOldPass">\r
          </i>\r
        </span>\r
\r
        <div class="sign-in-desktop__validation-error" *ngIf="updatePassword.get('oldPassword')?.touched &&\r
           updatePassword.get('oldPassword')?.invalid">\r
\r
          <small *ngIf="updatePassword.get('oldPassword')?.errors?.['required']">\r
            Old password is required\r
          </small>\r
\r
          <small *ngIf="updatePassword.get('oldPassword')?.errors?.['minlength']">\r
            Minimum 6 characters required\r
          </small>\r
\r
          <small *ngIf="updatePassword.get('oldPassword')?.errors?.['maxlength']">\r
            Maximum 15 characters allowed\r
          </small>\r
\r
          <small *ngIf="updatePassword.get('oldPassword')?.hasError('pattern') &&\r
    !updatePassword.get('oldPassword')?.hasError('minlength') &&\r
    !updatePassword.get('oldPassword')?.hasError('maxlength')">\r
            Enter alphabets and numeric only\r
\r
          </small>\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label><span class="gradient-star">*</span> New Password</label>\r
        <span class="fgsdgd">\r
          <input [type]="showNewPass ? 'text' : 'password'" placeholder="Min 6 characters" formControlName="newPassword"\r
            (keydown.space)="$event.preventDefault()" />\r
\r
          <i class="setCls_eye fa " [ngClass]="showNewPass ? 'fa-eye' : 'fa-eye-slash'"\r
            (click)="showNewPass = !showNewPass">\r
          </i>\r
\r
        </span>\r
\r
        <div class="sign-in-desktop__validation-error" *ngIf="updatePassword.get('newPassword')?.touched &&\r
           updatePassword.get('newPassword')?.invalid">\r
\r
          <small *ngIf="updatePassword.get('newPassword')?.errors?.['required']">\r
            New password is required\r
          </small>\r
\r
          <small *ngIf="updatePassword.get('newPassword')?.errors?.['minlength']">\r
            At least 6 characters\r
          </small>\r
\r
          <small *ngIf="updatePassword.get('newPassword')?.errors?.['maxlength']">\r
            Max 15 characters\r
          </small>\r
          <small *ngIf="updatePassword.get('newPassword')?.hasError('pattern') &&\r
    !updatePassword.get('newPassword')?.hasError('minlength') &&\r
    !updatePassword.get('newPassword')?.hasError('maxlength')">\r
            Enter alphabets and numeric only\r
          </small>\r
        </div>\r
      </div>\r
\r
\r
    </div>\r
  </form>\r
\r
  <!-- <div class="validBox">\r
<p><i class='fas fa-exclamation-circle' style='font-size: 20px;margin-right: 3px;'></i>Your password should be atleast 8 characters long and should contain atleast one uppercase, one lowercase, one number and a special character</p>\r
  </div> -->\r
</div>\r
<div class="profile-container" *ngIf="updateprofilepassword === 'Whatsup'">\r
  <form class="profile-form" [formGroup]="otpForm">\r
\r
    <!-- PHONE BOX -->\r
    <div *ngIf="!showOtpBox">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label><span class="gradient-star">*</span> Phone</label>\r
          <input\r
          type="text"\r
          placeholder="Enter WhatsApp number"\r
          formControlName="phone"\r
          maxlength="10"\r
          inputmode="numeric"\r
          autocomplete="off"\r
          (input)="onlyNumbers($event)"\r
        />\r
          <small class="sign-in-desktop__validation-error"\r
            *ngIf="otpForm.get('phone')?.touched && otpForm.get('phone')?.invalid">\r
            Enter valid 10-digit mobile number\r
          </small>\r
        </div>\r
        <div class="form-group">\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- OTP BOX -->\r
    <div *ngIf="showOtpBox" class="otp-box">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Enter OTP sent to WhatsApp</label>\r
          <input\r
          type="text"\r
          maxlength="6"\r
          placeholder="OTP"\r
          formControlName="otp"\r
          inputmode="numeric"\r
          autocomplete="one-time-code"\r
          (input)="onlyNumbers($event)"\r
        />\r
        \r
          <p *ngIf="timeLeft > 0">\r
            Resend OTP in <b>00:{{ timeLeft }}</b>\r
          </p>\r
          <button *ngIf="canResendOtp" type="button" class="resend-btn" (click)="WhatsupSubmit()">\r
            <i class='fas fa-redo'></i>Resend OTP\r
          </button>\r
        </div>\r
        <div class="form-group">\r
        </div>\r
      </div>\r
    </div>\r
\r
  </form>\r
</div>\r
\r
\r
<div class="button-row">\r
  <button *ngIf="updateprofilepassword === 'Profile'" class="btn active" (click)=" onProfileUpDateFormSubmit()" [disabled]="isSameUsernameNickname()">\r
    Update!\r
    <i class="{{ apiLoader ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i>\r
  </button>\r
  <button *ngIf="updateprofilepassword === 'Password'" class="btn active" (click)="onUpdatePasswordSubmit()"\r
    [disabled]="updatePassword.invalid || apiLoader1">\r
    <!-- <i *ngIf="!apiLoader1" class="fa fa-lock"></i> -->\r
    <i class="{{ apiLoader1 ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i>\r
    Update!\r
  </button>\r
  <button *ngIf="updateprofilepassword === 'Whatsup' && !showOtpBox" class="btn active" (click)="WhatsupSubmit()"\r
    [disabled]="otpForm.get('phone')?.invalid || apiLoader2">\r
    <i [class]="apiLoader2 ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle'"></i>\r
    Verify!\r
  </button>\r
\r
  <button *ngIf="updateprofilepassword === 'Whatsup' && showOtpBox" class="btn active" (click)="verifyWhatsappOtp()"\r
    [disabled]="otpForm.get('otp')?.invalid || apiLoader2">\r
    <i [class]="apiLoader2 ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle'"></i>\r
    Verify OTP!\r
  </button>\r
\r
</div>\r
<p style="color: #f00;" *ngIf="UpdateProfilemessage && updateprofilepassword === 'Password'">{{UpdateProfilemessage}}\r
</p>\r
<div class="loader-wrapper" *ngIf="responseLoader">\r
  <img [src]="'/assets/giflogo.gif?' + loaderKey" width="280" alt="loading" />\r
</div>`, styles: ["/* src/app/pages/dashboard/specification/specification.component.css */\n.copyIcon:hover {\n  color: #fff;\n}\n.copyIcon {\n  position: relative;\n  right: 0;\n  width: 100%;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  top: -30px;\n  right: 20px;\n}\n.copyIcon i {\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 18px;\n}\n.copied-msg {\n  position: absolute;\n  top: 20px;\n  right: 0;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 2px;\n  border: 1px solid white;\n  border-radius: 2px;\n}\n.copyIcon:hover .copied-msg {\n  display: block;\n}\ni.setCls_eye {\n  position: relative;\n  right: 31px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  top: 0px;\n  z-index: 100;\n}\n.fgsdgd input {\n  width: 100%;\n}\nspan.fgsdgd {\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n}\n.validBox p {\n  margin: 0;\n}\n.validBox {\n  background: #1d1d1d;\n  max-width: 310px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 7px;\n  text-align: start;\n  font-size: 14px;\n  border: 1px solid #4b4848;\n  position: relative;\n  left: 15px;\n}\n@media (max-width: 768px) {\n  .validBox {\n    left: 8px;\n    top: 10px;\n  }\n}\n.btn.verified {\n  background: #25d366;\n  color: #fff;\n  cursor: no-drop;\n  opacity: 1;\n}\n.otp-box input {\n  letter-spacing: 8px;\n  transition: 0.3s;\n}\n.otp-box p b {\n  color: #f00;\n}\n.error-msg {\n  color: #f00;\n}\n.otp-box p {\n  margin: 12px 0;\n  font-size: 13px;\n  color: #fff;\n}\n.resend-btn {\n  background: none;\n  border: none;\n  background: var(--gradient-primary);\n  color: #fff;\n  cursor: pointer;\n  font-weight: bold;\n  margin-top: 5px;\n  width: 100%;\n  max-width: 150px;\n  padding: 10px;\n  border-radius: 5px;\n}\n.resend-btn i {\n  font-size: 15px;\n  margin-right: 5px;\n}\n.otp-box .btn:hover:not(:disabled) {\n  background: #1ebe5d;\n}\n.otp-box .btn:disabled {\n  background: #a7e5c2;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=specification.component.css.map */\n"] }]
  }], () => [{ type: Store }, { type: FormBuilder }, { type: MessageService }, { type: PlayerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecificationComponent, { className: "SpecificationComponent", filePath: "src/app/pages/dashboard/specification/specification.component.ts", lineNumber: 24 });
})();
export {
  SpecificationComponent
};
//# sourceMappingURL=chunk-DKIT5AWM.js.map
