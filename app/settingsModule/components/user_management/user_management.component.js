"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#UserDirectories').tab('show');
            $('#UserManagementTabs .pad').click(function (e) {
                e.preventDefault();
                $('#UserManagementTabs div.titleTab').removeClass('titleTab tabArrow');
                $('#UserManagementTabs a.active').removeClass('active');
                $(this).children().addClass('active');
                $(this).children().parent().addClass('titleTab tabArrow');
                $(this).children().tab('show');
            });
        });
    };
    UserManagementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userManagement',
            templateUrl: 'user_management.component.html',
            styleUrls: ['./user_management.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;
