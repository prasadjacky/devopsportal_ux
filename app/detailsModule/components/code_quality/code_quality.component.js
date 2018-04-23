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
var details_service_1 = require("../../details.service");
var core_1 = require("@angular/core");
var app_service_1 = require("../../../services/app.service");
var CodeQualityComponent = /** @class */ (function () {
    function CodeQualityComponent(detailsService, appService) {
        var _this = this;
        this.detailsService = detailsService;
        this.appService = appService;
        if (sessionStorage.getItem("is_reloaded"))
            this.key = this.appService.getNavChangeEmitter1();
        this.appService.getCodeQualityDatas(this.key).subscribe(function (codeQuality) {
            _this.codeQuality = codeQuality;
            _this.tech_debt = _this.codeQuality.technical_debt.replace("hours", "hrs");
        });
        sessionStorage.setItem("is_reloaded", true);
    }
    // codeQualityObj = {
    //     coverage: 44.7,
    //     vulnerabilities: 1,
    //     technical_debt: "7 hrs",
    //     bugs: 1,
    //     code_smells: 110,
    //     duplication: 0,
    // 	documentation: 44.7,
    // }
    CodeQualityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCodeQualityData().subscribe(function (codeQuality) {
            _this.codeQuality = codeQuality;
            //   this.codeQualityObj.bugs = this.codeQuality["Bugs"];
            //   this.codeQualityObj.vulnerabilities = this.codeQuality["Vulnerabilities"];
            //   this.codeQualityObj.code_smells = this.codeQuality["Code Smells"];
            //   this.codeQualityObj.duplication = this.codeQuality["Duplication"];
            //   this.codeQualityObj.technical_debt = this.codeQuality["Technical Debt"];
            //   this.codeQualityObj.documentation = this.codeQuality["Documentation"];
            //   this.codeQualityObj.coverage = this.codeQuality["Coverage"];
        });
        // this.detailsService.fetchData('/api/presentation/project_code_quality',`${this.appService.selectedProject.project_key}`).subscribe(res=> {
        // 	this.codeQuality= JSON.parse(res['_body']);
        // 	console.log(this.codeQualityObj)
        // 	this.codeQualityObj={
        // 		code_coverage:this.codeQuality.code_coverage,
        // 		vulnerabilities:this.codeQuality.vulnerabilities,
        // 		technical_debt:this.codeQuality.technical_debt,
        // 		bugs:this.codeQuality.bugs,
        // 		code_smells:this.codeQuality.code_smells,
        // 		duplication:this.codeQuality.duplication
        // 	}
        // 	},
        // 	err => {
        // 		console.log(err);
        // })
    };
    CodeQualityComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'code-quality',
            templateUrl: 'code_quality.component.html',
            styleUrls: ['./code_quality.component.css']
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, app_service_1.AppService])
    ], CodeQualityComponent);
    return CodeQualityComponent;
}());
exports.CodeQualityComponent = CodeQualityComponent;
