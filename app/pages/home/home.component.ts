import { Component } from "@angular/core";

@Component({
    selector: "home",
    templateUrl: "./pages/home/home.component.html"
})

export class HomeComponent {
    constructor() {
        console.log('constructing homepage');
    }
}