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
var UserService = (function () {
    function UserService() {
        this.users = [];
        this.newUsers = [];
        this.users = [
            { userId: 1, name: 'Darshan', address: 'Mulund', gender: 'Male' },
            { userId: 2, name: 'Madhavi', address: 'Ambernath', gender: 'Female' },
            { userId: 3, name: 'Radhakrishna', address: 'Ghansoli', gender: 'Male' },
            { userId: 4, name: 'Abhishek', address: 'Rabale', gender: 'Male' },
            { userId: 5, name: 'Siddharth', address: 'Titwala', gender: 'Male' },
            { userId: 6, name: 'Arvind', address: 'Thane', gender: 'Male' },
            { userId: 6, name: 'Manisha', address: 'Vashi', gender: 'Female' },
        ];
        this.newUsers = [
            { userId: 1, name: 'Darshan', address: 'Mulund', gender: 'Male' },
            { userId: 2, name: 'Madhavi', address: 'Ambernath', gender: 'Female' },
            { userId: 3, name: 'Radhakrishna', address: 'Ghansoli', gender: 'Male' },
            { userId: 4, name: 'Abhishek', address: 'Rabale', gender: 'Male' },
            { userId: 5, name: 'Siddharth', address: 'Titwala', gender: 'Male' },
            { userId: 6, name: 'Arvind', address: 'Thane', gender: 'Male' },
            { userId: 6, name: 'Manisha', address: 'Vashi', gender: 'Female' },
        ];
    }
    ;
    UserService.prototype.getUsersFromService = function () {
        return this.users;
    };
    UserService.prototype.deleteUser = function (name) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].name === name) {
                this.users.splice(i, 1);
            }
        }
        // var myCounter = 0;
        // [true,false,true,false,true].forEach(v => v ? myCounter++ : v);
        // console.log(myCounter);
    };
    UserService.prototype.getNewData = function () {
        return this.newUsers;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map