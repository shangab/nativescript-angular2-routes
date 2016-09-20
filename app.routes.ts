import {FirstComponent} from "./pages/first/first.component";
import {SecondComponent} from "./pages/second/second.component";

export const routes = [
    { path: "", redirectTo: "/first", pathMatch: "full", terminal: true },
    { path: "first", component: FirstComponent },
    { path: "second", component: SecondComponent },
];