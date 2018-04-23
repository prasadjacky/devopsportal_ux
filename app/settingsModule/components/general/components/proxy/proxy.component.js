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
var http_1 = require("@angular/http");
var ProxyComponent = /** @class */ (function () {
    function ProxyComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.proxySettings = {
            _id: '',
            http_proxy_name: '',
            http_proxy_host: '',
            http_proxy_port: null,
            http_proxy_auth: {
                auth_required: false,
                auth_username: '',
                auth_password: ''
            }
        };
        this.editObj = {
            _id: '',
            http_proxy_name: '',
            http_proxy_host: '',
            http_proxy_port: null,
            http_proxy_auth: {
                auth_required: false,
                auth_username: '',
                auth_password: ''
            }
        };
        this.showValidations = false;
        this.proxyArray = [];
    }
    ProxyComponent.prototype.onSave = function (event) {
        this.showValidations = true;
        if (!this.proxySettingsForm.valid) {
            return;
        }
        this.showValidations = false;
        $('#myProxyModal').modal('hide');
        this.proxyObj = {
            _id: '',
            http_proxy_name: this.proxySettings.http_proxy_name,
            http_proxy_host: this.proxySettings.http_proxy_host,
            http_proxy_port: this.proxySettings.http_proxy_port,
            http_proxy_auth: {
                auth_required: this.proxySettings.http_proxy_auth.auth_required,
                auth_username: this.proxySettings.http_proxy_auth.auth_username,
                auth_password: this.proxySettings.http_proxy_auth.auth_password
            }
        };
        this.postProxyApi(this.proxyObj);
        this.onCancel();
        event.preventDefault();
    };
    ProxyComponent.prototype.onDelete = function (proxy) {
        this.deleteProxy(proxy);
    };
    ProxyComponent.prototype.onEdit = function (proxy) {
        this.editObj = proxy;
    };
    ProxyComponent.prototype.onEditSave = function (event) {
        this.editObj = {
            _id: this.editObj._id,
            http_proxy_name: this.editObj.http_proxy_name,
            http_proxy_host: this.editObj.http_proxy_host,
            http_proxy_port: this.editObj.http_proxy_port,
            http_proxy_auth: {
                auth_required: this.editObj.http_proxy_auth.auth_required,
                auth_username: this.editObj.http_proxy_auth.auth_username,
                auth_password: this.editObj.http_proxy_auth.auth_password
            }
        };
        console.log(this.editObj);
        this.editProxy(this.editObj);
    };
    ProxyComponent.prototype.onCancel = function () {
        this.proxySettings.http_proxy_name = '';
        this.proxySettings.http_proxy_host = '';
        this.proxySettings.http_proxy_port = null;
        this.proxySettings.http_proxy_auth.auth_required = false;
        this.proxySettings.http_proxy_auth.auth_username = '';
        this.proxySettings.http_proxy_auth.auth_password = '';
        this.showValidations = false;
    };
    ProxyComponent.prototype.ngOnInit = function () {
        this.getProxyApi();
    };
    //---------api calling functions--------------------------------------------------------------------------------------
    ProxyComponent.prototype.getProxyApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/http_proxy").subscribe(function (res) {
            _this.proxyArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated proxy');
                for (var i = 0; i < _this.proxyArray.length; i++) {
                    _this.appService.proxyNames.push(_this.proxyArray[i].http_proxy_name);
                }
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProxyComponent.prototype.postProxyApi = function (proxyObj) {
        var _this = this;
        delete proxyObj._id;
        this.http.post(this.appService.URL + "/api/http_proxy", proxyObj).subscribe(function (res) {
            if (res.status == 200) {
                _this.getProxyApi();
                console.log('successfully posted proxy');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProxyComponent.prototype.deleteProxy = function (proxy) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/http_proxy/" + proxy._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getProxyApi();
                console.log('successfulyl deleted user ' + proxy.http_proxy_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProxyComponent.prototype.editProxy = function (proxy) {
        var _this = this;
        console.log(proxy._id);
        this.http.get(this.appService.URL + "/api/http_proxy/" + proxy._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getProxyApi();
                console.log('successfulyl deleted user ' + proxy.http_proxy_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('proxySettingsForm'),
        __metadata("design:type", Object)
    ], ProxyComponent.prototype, "proxySettingsForm", void 0);
    ProxyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proxy',
            templateUrl: 'proxy.component.html',
            styleUrls: ['./proxy.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], ProxyComponent);
    return ProxyComponent;
}());
exports.ProxyComponent = ProxyComponent;
