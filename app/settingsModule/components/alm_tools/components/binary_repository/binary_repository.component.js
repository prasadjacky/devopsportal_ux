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
var http_1 = require("@angular/http");
var app_service_1 = require("../../../../../services/app.service");
var BinaryRepositoryComponent = /** @class */ (function () {
    function BinaryRepositoryComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.br = {
            http_proxy: '',
            tool_category: 'binary_repo',
            tool_instance_name: '',
            tool_url: '',
            tool_name: '',
            tool_version: '',
            proxy_required: false,
            tool_auth: {
                auth_type: '',
                auth_username: '',
                auth_password: '',
                auth_token: ''
            }
        };
        this.viewObj = {
            http_proxy: '',
            tool_category: 'binary_repo',
            tool_instance_name: '',
            tool_url: '',
            tool_name: '',
            tool_version: '',
            proxy_required: false,
            tool_auth: {
                auth_type: '',
                auth_username: '',
                auth_password: '',
                auth_token: ''
            }
        };
        this.proxyNames = [];
        this.showValidations = false;
        this.brArray = [];
    }
    BinaryRepositoryComponent.prototype.addObject = function () {
        $('document').ready(function () {
            $('#vb4').show();
            $('.message').hide();
            $('#sb4').hide();
        });
    };
    BinaryRepositoryComponent.prototype.onValidate = function (event) {
        this.showValidations = true;
        if (!this.brForm.valid) {
            return;
        }
        this.showValidations = false;
        this.brObj = {
            http_proxy: this.br.http_proxy,
            tool_category: this.br.tool_category,
            tool_url: this.br.tool_url,
            tool_instance_name: this.br.tool_instance_name,
            tool_name: this.br.tool_name,
            tool_version: this.br.tool_version,
            proxy_required: this.br.proxy_required,
            tool_auth: {
                auth_type: this.br.tool_auth.auth_type,
                auth_username: this.br.tool_auth.auth_username,
                auth_password: this.br.tool_auth.auth_password,
                auth_token: this.br.tool_auth.auth_token
            }
        };
        if (this.br.tool_auth.auth_type == 'password') {
            delete this.brObj.tool_auth.auth_token;
        }
        else {
            delete this.brObj.tool_auth.auth_password;
            delete this.brObj.tool_auth.auth_username;
        }
        console.log(this.brObj);
        this.postValidateBR();
    };
    BinaryRepositoryComponent.prototype.onSave = function (event) {
        this.postBR();
        this.getBR();
        this.onCancel();
        event.preventDefault();
    };
    BinaryRepositoryComponent.prototype.confirmDelete = function (br) {
        this.viewObj = br;
    };
    BinaryRepositoryComponent.prototype.onDelete = function (br) {
        this.deleteBR(br);
    };
    BinaryRepositoryComponent.prototype.onView = function (br) {
        this.viewObj = br;
    };
    BinaryRepositoryComponent.prototype.onEditSave = function (editBrForm) {
        // this.editObj = {
        //     tool_instance_name:editBrForm.tool_instance_name,
        //     tool_name:editBrForm.tool_name,
        //     tool_version:editBrForm.tool_version,
        //     proxy_required:editBrForm.proxy_required,
        //     tool_auth:{
        //         auth_type:editBrForm.auth_type,
        //         auth_username:editBrForm.auth_username,
        //         auth_password:editBrForm.auth_password,
        //         auth_token:editBrForm.auth_token
        //     }
        // }
        // this.brArray.splice(this.index,1,this.editObj);
        // console.log(this.brArray)
    };
    BinaryRepositoryComponent.prototype.onCancel = function () {
        this.br.http_proxy = '';
        this.br.tool_url = '';
        this.br.tool_instance_name = '';
        this.br.tool_name = '';
        this.br.tool_version = '';
        this.br.proxy_required = false,
            this.br.tool_auth.auth_type = '';
        this.br.tool_auth.auth_username = '';
        this.br.tool_auth.auth_password = '';
        this.br.tool_auth.auth_token = '';
        this.showValidations = false;
        this.valid = false;
    };
    BinaryRepositoryComponent.prototype.ngOnInit = function () {
        this.getBR();
        this.brArray = this.appService.binary_repository;
        this.proxyNames = this.appService.proxyNames;
    };
    //---------api calling functions--------------------------------------------------------------------------------------
    BinaryRepositoryComponent.prototype.postValidateBR = function () {
        var _this = this;
        if (!this.brObj.proxy_required)
            delete this.brObj['http_proxy'];
        this.http.post(this.appService.URL + "/api/validation/binary_repo", this.brObj).subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                _this.valid = true;
                console.log('success');
                $('document').ready(function () {
                    $('#sb4').show();
                    $('#vb4').hide();
                    $('.message').show();
                });
            }
            else {
                $('.message').show();
                _this.valid = false;
                console.log('failure');
            }
        }, function (error) {
            $('.message').show();
            console.log(error);
        });
    };
    BinaryRepositoryComponent.prototype.postBR = function () {
        this.http.post(this.appService.URL + "/api/tool", this.brObj).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully posted binary_repo');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    BinaryRepositoryComponent.prototype.getBR = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/tool?tool_category=binary_repo").subscribe(function (res) {
            _this.brArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated binary_repo');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    BinaryRepositoryComponent.prototype.deleteBR = function (br) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/tool/" + br._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getBR();
                console.log('successfulyl deleted br ' + br.tool_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('brForm'),
        __metadata("design:type", Object)
    ], BinaryRepositoryComponent.prototype, "brForm", void 0);
    BinaryRepositoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'binaryRepository',
            templateUrl: './binary_repository.component.html',
            styleUrls: ['./binary_repository.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], BinaryRepositoryComponent);
    return BinaryRepositoryComponent;
}());
exports.BinaryRepositoryComponent = BinaryRepositoryComponent;
