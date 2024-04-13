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
exports.ProfileComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var side_nav_component_1 = require("../side-nav/side-nav.component");
var ProfileComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-profile',
            standalone: true,
            imports: [forms_1.ReactiveFormsModule, common_1.CommonModule, side_nav_component_1.SideNavComponent],
            templateUrl: './profile.component.html',
            styleUrl: './profile.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ProfileComponent = _classThis = /** @class */ (function () {
        function ProfileComponent_1(fb, snackBar) {
            this.fb = fb;
            this.snackBar = snackBar;
        }
        ProfileComponent_1.prototype.ngOnInit = function () {
            this.profileForm = this.fb.group({
                name: ['', forms_1.Validators.required],
                age: ['', [forms_1.Validators.required, forms_1.Validators.min(18)]],
                dob: ['', forms_1.Validators.required],
                gender: ['', forms_1.Validators.required],
                occupation: ['', forms_1.Validators.required],
                email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
                address: ['', forms_1.Validators.required],
                contact: ['', forms_1.Validators.required]
            });
        };
        ProfileComponent_1.prototype.onSubmit = function () {
            if (this.profileForm.valid) {
                console.log("Form Save!!!", this.profileForm.value);
            }
            else {
                this.openSnackBar('Please fill in all fields correctly!', 'Close');
            }
        };
        ProfileComponent_1.prototype.openSnackBar = function (message, action) {
            this.snackBar.open(message, action, {
                duration: 3000
            });
        };
        return ProfileComponent_1;
    }());
    __setFunctionName(_classThis, "ProfileComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProfileComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProfileComponent = _classThis;
}();
exports.ProfileComponent = ProfileComponent;
