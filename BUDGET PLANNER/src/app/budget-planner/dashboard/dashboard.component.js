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
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var icon_1 = require("@angular/material/icon");
var side_nav_component_1 = require("../side-nav/side-nav.component");
var common_1 = require("@angular/common");
var DashboardComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-dashboard',
            standalone: true,
            imports: [icon_1.MatIconModule, side_nav_component_1.SideNavComponent, common_1.CommonModule],
            templateUrl: './dashboard.component.html',
            styleUrl: './dashboard.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DashboardComponent = _classThis = /** @class */ (function () {
        function DashboardComponent_1(router) {
            this.router = router;
            //Income
            this.lastMonthsIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
            this.currentMonthIncome = '$2000';
            //Expense
            this.lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1200'];
            this.currentMonthExpense = '$1500';
            //Todo Trans
            this.todoTransactions = [
                { description: 'Pay electricity bill' },
                { description: 'Submit monthly report' },
                { description: 'Buy groceries' },
                { description: 'Call insurance company' }
            ];
            //Total
            this.totalCurrentMonthIncome = 2000;
            this.totalCurrentMonthExpense = 1500;
        }
        DashboardComponent_1.prototype.onIncome = function () {
            this.router.navigate(['/budget-planner/income']);
        };
        DashboardComponent_1.prototype.onExpense = function () {
            this.router.navigate(['/budget-planner/expense']);
        };
        DashboardComponent_1.prototype.onTodo = function () {
            this.router.navigate(['/budget-planner/todo']);
        };
        Object.defineProperty(DashboardComponent_1.prototype, "currentMonthSavings", {
            //Calculate Total
            get: function () {
                return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
            },
            enumerable: false,
            configurable: true
        });
        return DashboardComponent_1;
    }());
    __setFunctionName(_classThis, "DashboardComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DashboardComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DashboardComponent = _classThis;
}();
exports.DashboardComponent = DashboardComponent;
