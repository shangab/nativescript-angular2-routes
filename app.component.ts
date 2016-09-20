import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template:`
    <StackLayout>
    <StackLayout class="nav">
        <Button text="First" [nsRouterLink]="['/first']"></Button>
        <Button text="Second" [nsRouterLink]="['/second']"></Button>
    </StackLayout>

    <page-router-outlet></page-router-outlet>
</StackLayout>
`
})
export class AppComponent {
    
}
