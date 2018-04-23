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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../../../../../services/app.service");
var RolesComponent = /** @class */ (function () {
    function RolesComponent(appService) {
        this.appService = appService;
        this.showValidations = false;
        this.role = {
            role_name: '',
            role_id: ''
        };
        this.editObj = {
            role_name: '',
            role_id: ''
        };
        this.roleArray = [];
    }
    RolesComponent.prototype.onSave = function (event) {
        this.showValidations = true;
        if (!this.rolesForm.valid) {
            return;
        }
        this.showValidations = false;
        $('#myRolesModal').modal('hide');
        this.roleObj = {
            role_name: this.role.role_name,
            role_id: this.role.role_id
        };
        this.role.role_name = '';
        this.role.role_id = '';
        this.roleArray.push(this.roleObj);
        console.log(this.roleObj);
        console.log(this.roleArray);
        event.preventDefault();
    };
    RolesComponent.prototype.onDelete = function (index) {
        this.roleArray.splice(index, 1);
        console.log(this.roleArray);
    };
    RolesComponent.prototype.onEdit = function (role, index) {
        this.index = index;
        this.editObj = role;
        console.log(this.editObj, this.index);
    };
    RolesComponent.prototype.onEditSave = function (editRoleForm) {
        this.roleArray.splice(this.index, 1, editRoleForm);
        console.log(this.roleArray);
    };
    RolesComponent.prototype.onCancel = function () {
        this.role.role_name = '';
        this.role.role_id = '';
        this.showValidations = false;
    };
    RolesComponent.prototype.ngOnInit = function () {
        this.roleArray = this.appService.roles;
    };
    __decorate([
        core_1.ViewChild('rolesForm'),
        __metadata("design:type", Object)
    ], RolesComponent.prototype, "rolesForm", void 0);
    RolesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'roles',
            templateUrl: 'roles.component.html',
            styleUrls: ['./roles.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], RolesComponent);
    return RolesComponent;
}());
exports.RolesComponent = RolesComponent;
