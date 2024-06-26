"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-login',
            standalone: true,
            imports: [forms_1.ReactiveFormsModule, common_1.CommonModule],
            templateUrl: './login.component.html',
            styleUrl: './login.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var LoginComponent = _classThis = /** @class */ (function () {
        function LoginComponent_1(fb, router, snackBar) {
            this.fb = fb;
            this.router = router;
            this.snackBar = snackBar;
            this.activeForm = 'login';
        }
        LoginComponent_1.prototype.ngOnInit = function () {
            this.loginForm = this.fb.group({
                email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
                password: ['', forms_1.Validators.required]
            });
            this.registerForm = this.fb.group({
                username: ['', forms_1.Validators.required],
                email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
                password: ['', forms_1.Validators.required]
            });
        };
        LoginComponent_1.prototype.toggleForm = function (form) {
            this.activeForm = form;
        };
        LoginComponent_1.prototype.login = function () {
            if (this.loginForm.valid) {
                console.log("Login info==>", this.loginForm.value);
                this.router.navigate(['/budget-planner/dashboard']);
            }
            else {
                this.snackBar.open('Invalid email or password!', 'Close', { duration: 3000 });
            }
        };
        LoginComponent_1.prototype.register = function () {
            if (this.registerForm.valid) {
                console.log("Register info==>>", this.registerForm.value);
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
                this.router.navigate(['/budget-planner/login']);
            }
            else {
                this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 3000 });
            }
        };
        return LoginComponent_1;
    }());
    __setFunctionName(_classThis, "LoginComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoginComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginComponent = _classThis;
}();
exports.LoginComponent = LoginComponent;
