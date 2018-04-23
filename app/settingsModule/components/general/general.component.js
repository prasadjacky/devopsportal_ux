"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GeneralComponent = /** @class */ (function () {
    function GeneralComponent() {
    }
    GeneralComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#GeneralTabs').tab('show');
            $('#GeneralTabs .pad').click(function (e) {
                e.preventDefault();
                $('#GeneralTabs div.titleTab').removeClass('titleTab tabArrow');
                $('#GeneralTabs a.active').removeClass('active');
                $(this).children().addClass('active');
                $(this).children().parent().addClass('titleTab tabArrow');
                $(this).children().tab('show');
            });
        });
    };
    GeneralComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'general',
            templateUrl: 'general.component.html',
            styleUrls: ['./general.component.css']
        })
    ], GeneralComponent);
    return GeneralComponent;
}());
exports.GeneralComponent = GeneralComponent;