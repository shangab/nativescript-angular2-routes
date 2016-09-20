"use strict";
var first_component_1 = require("./pages/first/first.component");
var second_component_1 = require("./pages/second/second.component");
exports.routes = [
    { path: "", redirectTo: "/first", pathMatch: "full", terminal: true },
    { path: "first", component: first_component_1.FirstComponent },
    { path: "second", component: second_component_1.SecondComponent },
];
//# sourceMappingURL=app.routes.js.map