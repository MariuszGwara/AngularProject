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
exports.ExpenseComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var icon_1 = require("@angular/material/icon");
var ExpenseComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-expense',
            standalone: true,
            imports: [forms_1.ReactiveFormsModule, common_1.CommonModule, icon_1.MatIconModule],
            templateUrl: './expense.component.html',
            styleUrl: './expense.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ExpenseComponent = _classThis = /** @class */ (function () {
        function ExpenseComponent_1(fb, router) {
            this.fb = fb;
            this.router = router;
            this.expenses = [
                { month: 'January', expenseAmount: 1500 },
                { month: 'February', expenseAmount: 2000 },
                { month: 'March', expenseAmount: 1800 }
            ];
            this.monthSelected = false;
            this.januaryExpense = [
                { expenseType: 'Rent', expenseAmount: 1000 },
                { expenseType: 'Groceries', expenseAmount: 500 },
            ];
            this.februaryExpense = [
                { expenseType: 'Utilities', expenseAmount: 200 },
                { expenseType: 'Groceries', expenseAmount: 400 }
            ];
            this.marchExpense = [
                { expenseType: 'Rent', expenseAmount: 1100 },
                { expenseType: 'Utilities', expenseAmount: 250 }
            ];
            this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
        }
        ExpenseComponent_1.prototype.ngOnInit = function () {
            this.expenseForm = this.fb.group({
                month: ['', forms_1.Validators.required],
                expenseType: ['', forms_1.Validators.required],
                expenseAmount: ['', forms_1.Validators.required]
            });
        };
        ExpenseComponent_1.prototype.onSubmitExpense = function () {
            if (this.expenseForm.valid) {
                var newExpense = this.expenseForm.value;
                this.getFilteredExpenses().push(newExpense);
                this.expenseForm.reset();
            }
        };
        ExpenseComponent_1.prototype.onChangeExpense = function (event) {
            this.selectedMonth = event.target.value;
            this.monthSelected = true;
            this.getFilteredExpenses();
        };
        ExpenseComponent_1.prototype.getFilteredExpenses = function () {
            switch (this.selectedMonth) {
                case 'January':
                    return this.januaryExpense;
                case 'February':
                    return this.februaryExpense;
                case 'March':
                    return this.marchExpense;
                default:
                    return [];
            }
        };
        ExpenseComponent_1.prototype.calculateTotalExpense = function (month) {
            return this.getFilteredExpenses().reduce(function (acc, curr) { return acc + curr.expenseAmount; }, 0);
        };
        ExpenseComponent_1.prototype.onSave = function () {
            if (this.expenseForm.valid) {
                this.expenseForm.reset({ month: this.selectedMonth });
                this.getFilteredExpenses();
            }
        };
        ExpenseComponent_1.prototype.saveForm = function () {
            console.log("Form saved!");
        };
        ExpenseComponent_1.prototype.onBack = function () {
            this.router.navigate(['/budget-planner/dashboard']);
        };
        return ExpenseComponent_1;
    }());
    __setFunctionName(_classThis, "ExpenseComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ExpenseComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ExpenseComponent = _classThis;
}();
exports.ExpenseComponent = ExpenseComponent;
