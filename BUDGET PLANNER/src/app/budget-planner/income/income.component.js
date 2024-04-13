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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var IncomeComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-income',
            standalone: true,
            imports: [forms_1.ReactiveFormsModule, common_1.CommonModule],
            templateUrl: './income.component.html',
            styleUrl: './income.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var IncomeComponent = _classThis = /** @class */ (function () {
        function IncomeComponent_1(fb, router) {
            this.fb = fb;
            this.router = router;
            this.januaryIncomes = [
                { source: 'Salary', amount: 5000, investments: '401(k)' },
                { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
            ];
            this.februaryIncomes = [
                { source: 'Salary', amount: 5500, investments: '401(k)' },
                { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
            ];
            this.marchIncomes = [
                { source: 'Salary', amount: 5200, investments: '401(k)' },
                { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
                { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
            ];
            this.monthSelected = false;
            var currentDate = new Date();
            this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
        }
        IncomeComponent_1.prototype.ngOnInit = function () {
            this.incomeForm = this.fb.group({
                month: ['', forms_1.Validators.required],
                source: ['', forms_1.Validators.required],
                amount: ['', forms_1.Validators.required],
                investments: ['', forms_1.Validators.required]
            });
        };
        IncomeComponent_1.prototype.onChange = function (event) {
            this.selectedMonth = event.target.value;
            this.monthSelected = true;
            this.getFilteredIncomes();
        };
        IncomeComponent_1.prototype.calculateTotalIncome = function (month) {
            var totalIncome = 0;
            for (var _i = 0, _a = this.getIncomesForMonth(month); _i < _a.length; _i++) {
                var income = _a[_i];
                totalIncome += income.amount;
            }
            return totalIncome;
        };
        IncomeComponent_1.prototype.getIncomesForMonth = function (month) {
            switch (month) {
                case 'January':
                    return this.januaryIncomes;
                case 'February':
                    return this.februaryIncomes;
                case 'March':
                    return this.marchIncomes;
                default:
                    return [];
            }
        };
        IncomeComponent_1.prototype.getFilteredIncomes = function () {
            var filteredIncomes = [];
            switch (this.selectedMonth) {
                case 'January':
                    filteredIncomes = __spreadArray([], this.januaryIncomes, true);
                    break;
                case 'February':
                    filteredIncomes = __spreadArray([], this.februaryIncomes, true);
                    break;
                case 'March':
                    filteredIncomes = __spreadArray([], this.marchIncomes, true);
                    break;
                default:
                    break;
            }
            return filteredIncomes;
        };
        IncomeComponent_1.prototype.onSubmit = function () {
            if (this.incomeForm.valid) {
                var newIncome = this.incomeForm.value;
                switch (this.selectedMonth) {
                    case 'January':
                        this.januaryIncomes.push(newIncome);
                        break;
                    case 'February':
                        this.februaryIncomes.push(newIncome);
                        break;
                    case 'March':
                        this.marchIncomes.push(newIncome);
                        break;
                    default:
                        break;
                }
                this.incomeForm.reset();
                this.incomeForm.patchValue({ month: '', source: '', amount: '', investments: '' });
            }
        };
        IncomeComponent_1.prototype.saveForm = function () {
            console.log("Form saved!");
        };
        IncomeComponent_1.prototype.onBack = function () {
            this.router.navigate(['/budget-planner/dashboard']);
        };
        return IncomeComponent_1;
    }());
    __setFunctionName(_classThis, "IncomeComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IncomeComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IncomeComponent = _classThis;
}();
exports.IncomeComponent = IncomeComponent;
