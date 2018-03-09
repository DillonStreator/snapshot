import { Component } from "@angular/core";
import { ScannerComponent } from "./scanner/scanner.component";

@Component({
    selector: "dashboard",
    templateUrl: "./pages/home/dashboard/dashboard.component.html"
})

export class DashboardComponent {
    constructor(){
        console.log('constructing dashboard component');
    }
}