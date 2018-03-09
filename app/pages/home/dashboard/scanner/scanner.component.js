"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var ScannerComponent = /** @class */ (function () {
    function ScannerComponent(barcode_scanner) {
        this.barcode_scanner = barcode_scanner;
        console.log('constructing barcode scanning component');
    }
    ScannerComponent.prototype.onScan = function () {
        var _this = this;
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
        }).then(function (result) {
            console.log("FINISHED Scanning!@#!@#");
            console.log(JSON.stringify(result));
            _this.code = result.text;
        }, function (errorMessage) {
            console.log("Error when scanning " + errorMessage);
        });
    };
    ScannerComponent = __decorate([
        core_1.Component({
            selector: 'scanner',
            templateUrl: './pages/home/dashboard/scanner/scanner.component.html'
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], ScannerComponent);
    return ScannerComponent;
}());
exports.ScannerComponent = ScannerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywyRUFBNkQ7QUFXN0Q7SUFJSSwwQkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUFBLGlCQW1CQztRQWxCRyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsZUFBZSxFQUFFLElBQUk7WUFDckIsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixDQUFDLEVBQUUsVUFBQyxZQUFZO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUEzQlEsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdURBQXVEO1NBQ3ZFLENBQUM7eUNBS3VDLDRDQUFjO09BSjFDLGdCQUFnQixDQThCNUI7SUFBRCx1QkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcblxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbi8vIHJlZ2lzdGVyRWxlbWVudChcIkJhcmNvZGVTY2FubmVyXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIikuQmFyY29kZVNjYW5uZXJWaWV3KTtcblxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NjYW5uZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9ob21lL2Rhc2hib2FyZC9zY2FubmVyL3NjYW5uZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNjYW5uZXJDb21wb25lbnQge1xuXG4gICAgcHVibGljIGNvZGU6c3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZV9zY2FubmVyOiBCYXJjb2RlU2Nhbm5lcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RpbmcgYmFyY29kZSBzY2FubmluZyBjb21wb25lbnQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TY2FuKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgdG8gc2NhbiEhQCMhQCMhQCMnKTtcbiAgICAgICAgdGhpcy5iYXJjb2RlX3NjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICBmb3JtYXRzOiBcIlFSX0NPREUsIEVBTl8xM1wiLFxuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsICAgXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsICAgICBcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdHJ1ZSwgICAgICAgIFxuICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSwgICAgICAgICAgICAgXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSwgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbjogNTAwLCAgIFxuICAgICAgICAgICAgb3BlblNldHRpbmdzSWZQZXJtaXNzaW9uV2FzUHJldmlvdXNseURlbmllZDogdHJ1ZSAvL2lvcyBvbmx5IFxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklOSVNIRUQgU2Nhbm5pbmchQCMhQCNcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHJlc3VsdC50ZXh0O1xuICAgICAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBzY2FubmluZyBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgXG59Il19