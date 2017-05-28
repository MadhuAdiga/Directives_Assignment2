"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Import Component and ngOnInit dependenicies
var app_services_1 = require('./app.services'); // Import AppService 
var AppComponent = (function () {
    function AppComponent(_appServives) {
        this._appServives = _appServives;
        this.cartoons = [{}]; //Declare an array of objects
        this.showMsg = "Hide Table"; // Set default value of display msg to Hide
        this.showTable = true; //Declare a variable to set current value of table display
    } //Declare a private variable of the type AppServices
    AppComponent.prototype.ngOnInit = function () {
        this.cartoons = this._appServives.getData(); //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
    };
    AppComponent.prototype.toggleShow = function () {
        this.showTable = !this.showTable; // on click of the button, negate the value of the showTable 
        if (this.showTable) {
            this.showMsg = "Hide Table"; //if the table is shown, change the display msg to "Hide"
        }
        else {
            this.showMsg = "Show Table"; //if the table is hidden, change the display msg to "Show"
        }
    };
    AppComponent = __decorate([
        // Import AppService 
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"container container-fluid\">\n             <h2>Toggling display using Structural directives</h2><br>\n\n             <button class=\"btn btn-primary\" (click)=\"toggleShow()\">{{showMsg}}</button> <!-- Create a button which, on click triggers a function toggleShow and the display msg changes --> \n             <h4>The data for the below table is provided by a service and display is toggled using a structural directive</h4><br><br>\n             <table *ngIf=\"showTable\" class=\"table table-bordered\"> <!-- Display the table only if the showTable value is true --> \n                <thead>\n                    <tr [ngClass]=\"{classTableHead:true}\"> <!-- Assign an attribute directive ngClass to the table head --> \n                        <th>Name</th>\n                        <th>DOB</th>\n                        <th>Email</th>\n                        <th>Status</th>\n                        <th>Enroll link</th>\n                </thead>\n                <tbody>\n                    <tr  *ngFor=\"let cartoon of cartoons\" [ngClass]=\"{classTableBody:true}\"> <!-- Loop through the array of cartoons and display each value as table row. Assign an attribute directive ngClass to the table body -->  \n                        <td>{{cartoon.name}}</td>\n                        <td>{{cartoon.DOB}}</td>\n                        <td>{{cartoon.email}}</td>\n                        <td>{{cartoon.status}}</td>\n                        <td><a href=\"{{cartoon.enroll}}\">{{cartoon.enroll}}</a></td>\n                    </tr>\n                </tbody>\n             </table>\n             </div>",
            styles: ["\n            .classTableHead {background-color:\t#ffa69f;\n                             border: 3px solid #ffb69f}\n            .classTableBody {background-color:\t#ffe69f;\n                             border: 3px solid #ffd69f}\n         "] // Two styles are defined, one for the table head and one for the table body
        }), 
        __metadata('design:paramtypes', [app_services_1.AppServices])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map