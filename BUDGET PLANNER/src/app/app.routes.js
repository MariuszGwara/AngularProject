"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
    { path: 'budget-planner', loadChildren: function () { return Promise.resolve().then(function () { return require('./budget-planner/budget-planner.module'); }).then(function (m) { return m.BudgetPlannerModule; }); } }
];
