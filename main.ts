// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {FirstComponent} from "./pages/first/first.component";
import {SecondComponent} from "./pages/second/second.component";


import {routes} from "./app.routes";

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent
        ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
        ],
    

})
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//NativeScriptRouterModule.forRoot(routes)