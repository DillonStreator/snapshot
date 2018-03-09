import { Component } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";

// import { registerElement } from "nativescript-angular/element-registry";
// registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

import * as dialogs from "ui/dialogs";

@Component({
    selector: 'scanner',
    templateUrl: './pages/home/dashboard/scanner/scanner.component.html'
})
export class ScannerComponent {

    public code:string;
    
    constructor(private barcode_scanner: BarcodeScanner){
        console.log('constructing barcode scanning component');
    }

    public onScan() {
        console.log('Starting to scan!!@#!@#!@#');
        this.barcode_scanner.scan({
            formats: "QR_CODE, EAN_13",
            showFlipCameraButton: true,   
            preferFrontCamera: false,     
            showTorchButton: true,        
            beepOnScan: true,             
            torchOn: false,               
            resultDisplayDuration: 500,   
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then((result) => {
            console.log("FINISHED Scanning!@#!@#");
            console.log(JSON.stringify(result));
            this.code = result.text;
            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }

    
}