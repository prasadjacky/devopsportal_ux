"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AlmToolsComponent = /** @class */ (function () {
    function AlmToolsComponent() {
    }
    AlmToolsComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#Planning').tab('show');
            $('#AlmToolsTabs').click(function (e) {
                e.preventDefault();
                $('#AlmToolsTabs div.titleTab').removeClass('titleTab tabArrow');
                $('#AlmToolsTabs a.active').removeClass('active');
                $(this).children().addClass('active');
                $(this).children().children('ul').children('li.active').children().addClass('active');
                $(this).children().parent().addClass('titleTab tabArrow');
                $(this).children().tab('show');
            });
        });
    };
    AlmToolsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'almTools',
            templateUrl: 'alm_tools.component.html',
            styleUrls: ['./alm_tools.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AlmToolsComponent);
    return AlmToolsComponent;
}());
exports.AlmToolsComponent = AlmToolsComponent;
