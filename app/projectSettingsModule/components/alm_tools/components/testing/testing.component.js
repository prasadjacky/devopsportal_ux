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
var TestingComponent = /** @class */ (function () {
    function TestingComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.enabled = false;
        this.Testing = {
            unit: {
                framework: '',
                framework_version: ''
            },
            functional: {
                driver: '',
                framework: '',
                mode: '',
            }
        };
    }
    TestingComponent.prototype.ngOnInit = function () {
        this._id = this.appService.selectedProjectId;
        this.getProjectTestingApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    TestingComponent.prototype.getProjectTestingApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/project/" + this._id).subscribe(function (res) {
            var temp = JSON.parse(res['_body']);
            _this.Testing = {
                unit: {
                    framework: temp.project_tools.testing.unit.framework,
                    framework_version: temp.project_tools.testing.unit.framework_version,
                },
                functional: {
                    mode: temp.project_tools.testing.functional.mode,
                    driver: temp.project_tools.testing.functional.driver,
                    framework: temp.project_tools.testing.functional.framework
                }
            };
            if (res.status == 200) {
                console.log('successfully populated testing tool');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    TestingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'testing',
            templateUrl: './testing.component.html',
            styleUrls: ['./testing.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], TestingComponent);
    return TestingComponent;
}());
exports.TestingComponent = TestingComponent;
