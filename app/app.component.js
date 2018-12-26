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
var core_1 = require("@angular/core");
var user_service_1 = require('./service/user.service');
var AppComponent = (function () {
    function AppComponent(_getUserServiceData) {
        this._getUserServiceData = _getUserServiceData;
        this.users = [];
        this.newUsers = [];
        this.totalGenders = ["All", "Male", "Female"];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.users = this._getUserServiceData.getUsersFromService();
        this.newUsers = this._getUserServiceData.getNewData();
    };
    // Delete user
    AppComponent.prototype.deleteUserData = function (name) {
        this._getUserServiceData.deleteUser(name);
    };
    // Append new data
    AppComponent.prototype.refreshData = function () {
        this.users = this._getUserServiceData.getNewData();
    };
    // User counter
    AppComponent.prototype.getAllGender = function (genderCount, allGender) {
        // Called user data
        var genders = this._getUserServiceData.getUsersFromService();
        var getGender = genders.filter(function (item) {
            if ("Male" == "Male") {
                return item.gender;
            }
            else if ("Female" == "Female") {
                return item.gender == "Female";
            }
            else {
                return getGender.length;
            }
        });
        return getGender.length;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map