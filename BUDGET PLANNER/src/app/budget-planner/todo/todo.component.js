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
exports.TodoComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var icon_1 = require("@angular/material/icon");
var TodoComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-todo',
            standalone: true,
            imports: [forms_1.ReactiveFormsModule, common_1.CommonModule, icon_1.MatIconModule],
            templateUrl: './todo.component.html',
            styleUrl: './todo.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TodoComponent = _classThis = /** @class */ (function () {
        function TodoComponent_1(fb, router) {
            this.fb = fb;
            this.router = router;
            this.expenses = [
                { month: 'January', expenseAmount: 1500 },
                { month: 'February', expenseAmount: 2000 },
                { month: 'March', expenseAmount: 1800 }
            ];
            this.monthSelected = false;
            this.januaryExpense = [
                { expenseType: 'Recharge', expenseAmount: 1000 },
                { expenseType: 'Light Bills', expenseAmount: 500 },
            ];
            this.februaryExpense = [
                { expenseType: 'Essentials', expenseAmount: 200 },
                { expenseType: 'Light Bills', expenseAmount: 400 }
            ];
            this.marchExpense = [
                { expenseType: 'Recharge', expenseAmount: 1100 },
                { expenseType: 'Essentials', expenseAmount: 250 }
            ];
            var currentDate = new Date();
            var currentMonth = currentDate.toLocaleString('default', { month: 'long' });
            this.selectedMonth = currentMonth;
        }
        TodoComponent_1.prototype.ngOnInit = function () {
            this.todoForm = this.fb.group({
                month: ['', forms_1.Validators.required],
                expenseType: ['', forms_1.Validators.required],
                expenseAmount: ['', forms_1.Validators.required]
            });
        };
        TodoComponent_1.prototype.onSubmitExpense = function () {
            if (this.todoForm.valid) {
                var newExpense = this.todoForm.value;
                switch (this.selectedMonth) {
                    case 'January':
                        this.januaryExpense.push(newExpense);
                        break;
                    case 'February':
                        this.februaryExpense.push(newExpense);
                        break;
                    case 'March':
                        this.marchExpense.push(newExpense);
                        break;
                    default:
                        break;
                }
                this.todoForm.reset();
                this.todoForm.patchValue({ month: '', expenseType: '', expenseAmount: '' });
            }
        };
        TodoComponent_1.prototype.onChangeExpense = function (event) {
            this.selectedMonth = event.target.value;
            this.monthSelected = true;
            this.getFilteredExpenses();
        };
        TodoComponent_1.prototype.getFilteredExpenses = function () {
            var filteredExpense = [];
            switch (this.selectedMonth) {
                case 'January':
                    filteredExpense = __spreadArray([], this.januaryExpense, true);
                    break;
                case 'February':
                    filteredExpense = __spreadArray([], this.februaryExpense, true);
                    break;
                case 'March':
                    filteredExpense = __spreadArray([], this.marchExpense, true);
                    break;
                default:
                    break;
            }
            return filteredExpense;
        };
        TodoComponent_1.prototype.calculateTotalExpense = function (month) {
            var totalExpense = 0;
            for (var _i = 0, _a = this.gettodoFormonth(month); _i < _a.length; _i++) {
                var income = _a[_i];
                totalExpense += income.expenseAmount;
            }
            return totalExpense;
        };
        TodoComponent_1.prototype.gettodoFormonth = function (month) {
            switch (month) {
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
        TodoComponent_1.prototype.onSave = function () {
            if (this.todoForm.valid) {
                var incomeData = this.todoForm.value;
                this.todoForm.reset({ month: this.selectedMonth });
                this.getFilteredExpenses();
            }
        };
        TodoComponent_1.prototype.saveForm = function () {
            console.log("Form saved!");
        };
        TodoComponent_1.prototype.onBack = function () {
            this.router.navigate(['/budget-planner/dashboard']);
        };
        TodoComponent_1.prototype.toggleSelection = function (expense) {
            expense.selected = !expense.selected;
        };
        return TodoComponent_1;
    }());
    __setFunctionName(_classThis, "TodoComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TodoComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TodoComponent = _classThis;
}();
exports.TodoComponent = TodoComponent;
