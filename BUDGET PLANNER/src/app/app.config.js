"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
exports.appConfig = {
    providers: [(0, router_1.provideRouter)(app_routes_1.routes), (0, platform_browser_1.provideClientHydration)(), (0, animations_1.provideAnimations)()]
};
