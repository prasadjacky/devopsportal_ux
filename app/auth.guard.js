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
var router_1 = require("@angular/router");
var authenticate_service_1 = require("./services/authenticate.service");
var login_component_1 = require("./components/login/login.component");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this._auth.isAuth()) {
            var roles = route.data["expectedRoles"];
            for (var i = 0; i < roles.length; i++) {
                if (roles[i] === authenticate_service_1.User.role) {
                    this._auth.isAdmin.next(true);
                    login_component_1.LI.next(true);
                    if (authenticate_service_1.User.role === "admin") {
                        login_component_1.IA.next(true);
                    }
                    else {
                        login_component_1.IA.next(false);
                    }
                    return true;
                }
            }
            /* alert("You don't have permission to access this page!!");
            this._router.navigate(['']); */
            login_component_1.LI.next(true);
            return true;
        }
        else {
            this._router.navigate(['']);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authenticate_service_1.AuthenticateService,
            router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
