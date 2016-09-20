"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <StackLayout>\n    <StackLayout class=\"nav\">\n        <Button text=\"First\" [nsRouterLink]=\"['/first']\"></Button>\n        <Button text=\"Second\" [nsRouterLink]=\"['/second']\"></Button>\n    </StackLayout>\n\n    <page-router-outlet></page-router-outlet>\n</StackLayout>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map