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
var core_1 = require('@angular/core'); //Import injectable from angular
var AppServices = (function () {
    function AppServices() {
    }
    AppServices.prototype.getData = function () {
        return [
            { "name": "Angelina Pickles", "DOB": "29-12-1993", "email": "angie@email.com", "status": "active", "enroll": "http://edition.cnn.com/" },
            { "name": "Donald Duck", "DOB": "17-06-1934", "email": "donnie@email.com", "status": "active", "enroll": "http://channel.nationalgeographic.com/" },
            { "name": "Lola Bunny", "DOB": "02-12-1938", "email": "lola@email.com", "status": "active", "enroll": "https://www.tlc.com/" },
            { "name": "Uncle Scrooge", "DOB": "28-11-1912", "email": "uncle@email.com", "status": "active", "enroll": "http://www.foxnews.com/" }
        ];
    };
    AppServices = __decorate([
        //Import injectable from angular
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppServices);
    return AppServices;
}());
exports.AppServices = AppServices;
//# sourceMappingURL=app.services.js.map