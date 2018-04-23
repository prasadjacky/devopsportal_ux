import { AppService } from '../../../services/app.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'alm',
    templateUrl: 'alm.component.html',
    styleUrls: ['./alm.component.css']
})

export class AlmComponent implements OnInit {
    @ViewChild('sourceControl') sourceControl;
    @ViewChild('planning') planning;
    @ViewChild('build') build;
    @ViewChild('testing') testing;
    @ViewChild('codeAnalysis') codeAnalysis;
    @ViewChild('binaryRepository') binaryRepository;
    @ViewChild('continuousIntegration') continuousIntegration;
    @ViewChild('deployment') deployment;
    @ViewChild('release') release;
    firstElement = true;
    lastElement = false;
    constructor(private appService: AppService) {
        // $(document).ready(function () {
        //     $('#ALM .row.pad').click(function () {
        //         $('div.titleTab').removeClass('titleTab tabArrow');
        //         $('a.active').removeClass('active');
        //         $(this).children().addClass('active');
        //         $(this).addClass('titleTab tabArrow');
        //         $(this).children().tab('show');
        //     });
        // });
    }
    nextElement() {
        var _this = this;
        var thisTab = $('#ALM .ALMTools.active a')[0].innerText;
        var thisTabDisabled = false;
        switch (thisTab) {
            case "Source Control":
                console.log(_this.sourceControl.SourceControl);
                _this.sourceControl.showValidations = true;
                if (!_this.sourceControl.onValidate()) {
                    return;
                }
                break;
            case "Planning":
                console.log(_this.planning.Planning);
                _this.planning.showValidations = true;
                thisTabDisabled = this.planning.disabled;
                if (!_this.planning.onValidate()) {
                    return;
                }
                break;
            case "Development":
                console.log(_this.build.Build);
                _this.build.showValidations = true;
                if (!_this.build.onValidate()) {
                    return;
                }
                break;
            case "Testing":
                console.log(_this.testing.Testing);
                _this.testing.showValidations = true;
                if (!_this.testing.onValidate()) {
                    thisTabDisabled = this.testing.disabled;
                    return;
                }
                thisTabDisabled = this.testing.disabled;
                break;
            case "Code Analysis":
                console.log(_this.codeAnalysis.CodeAnalysis);
                _this.codeAnalysis.showValidations = true;
                thisTabDisabled = this.codeAnalysis.disabled;
                if (!_this.codeAnalysis.onValidate()) {
                    return;
                }
                break;
            case "Binary Repository":
                console.log(_this.binaryRepository.BinaryRepository);
                _this.binaryRepository.showValidations = true;
                thisTabDisabled = this.binaryRepository.disabled;
                if (!_this.binaryRepository.onValidate()) {
                    return;
                }
                break;
            case "Continuous Integration":
                console.log(_this.continuousIntegration.ContinuousIntegration);
                _this.continuousIntegration.showValidations = true;
                if (!_this.continuousIntegration.onValidate()) {
                    return;
                }
                break;
            case "Deployment":
                console.log(_this.deployment.Deployment);
                console.log(_this.deployment.AppServer);
                console.log(_this.deployment.Database);
                thisTabDisabled = this.deployment.disabled;
                _this.appService.Environment.app_server.server_type = this.deployment.Deployment.deployment_type;
                // _this.appService.flags.environment.appServerDisabled = this.deployment.AppServer.configured;
                // _this.appService.flags.environment.databaseDisabled = this.deployment.Database.configured;
                // console.log(_this.appService.Environment.app_server.server_type);
                _this.deployment.showValidations = true;
                if (!_this.deployment.onValidate()) {
                    return;
                }
                break;
            // case "Release":
            //     console.log(_this.release.Release);
            //     _this.release.showValidations = true;
            //     if (!_this.release.onValidate()) {
            //         return;
            //     }
            //     break;
            default: console.log('error');
        }
        if ($('#ALM .ALMTools.next').length === 0) {
            $('#ALM .ALMTools.active a');
            $('#ALM .ALMTools.next').first().removeClass('next').addClass('active');
            if (thisTabDisabled) {
                $('#ALM .ALMTools.active').first().removeClass('enabled').addClass('notenabled');
            } else {
                $('#ALM .ALMTools.active').first().removeClass('notenabled').addClass('enabled');
            }
            $('#ALM .ALMTools.active a').addClass('active');

            _this.lastElement = true;
        } else {
            // $('#ALM .row.pad.titleTab.tabArrow a').removeClass('active');
            // $('#ALM .row.pad.titleTab.tabArrow').removeClass('titleTab tabArrow').addClass('previous');
            // $('#ALM .row.pad.next').first().removeClass('next').addClass('titleTab tabArrow');
            // $('#ALM .row.pad.titleTab.tabArrow a').addClass('active');

            $('#ALM .ALMTools.active a').removeClass('active');
            $('#ALM .ALMTools.next').first().removeClass('next').addClass('active');
            if (thisTabDisabled) {
                $('#ALM .ALMTools.active').first().removeClass('active').addClass('previous').removeClass('enabled').addClass('notenabled');
            } else {
                $('#ALM .ALMTools.active').first().removeClass('active').addClass('previous').removeClass('notenabled').addClass('enabled');
            }
            $('#ALM .ALMTools.active a').addClass('active');

            $('#ALM .tab-pane.active').removeClass('active').addClass('previous');
            $('#ALM .tab-pane.next').first().removeClass('next').addClass('active');
            _this.lastElement = false;
        }
        return _this.lastElement;
    }
    previousElement() {
        var _this = this;
        _this.lastElement = false;
        if ($('#ALM .ALMTools.previous').length === 0) {
            _this.firstElement = true;
        } else {
            $('#ALM .ALMTools.active a').removeClass('active');
            $('#ALM .ALMTools.previous').last().removeClass('previous').addClass('active');
            $('#ALM .ALMTools.active').last().removeClass('active').addClass('next');
            $('#ALM .ALMTools.active a').addClass('active');
            // $('#ALM .row.pad.titleTab.tabArrow a').removeClass('active');
            // $('#ALM .row.pad.titleTab.tabArrow').removeClass('titleTab tabArrow').addClass('next');
            // $('#ALM .row.pad.previous').last().removeClass('previous').addClass('titleTab tabArrow');
            // $('#ALM .row.pad.titleTab.tabArrow a').addClass('active');
            $('#ALM .tab-pane.previous').last().removeClass('previous').addClass('active');
            $('#ALM .tab-pane.active').last().removeClass('active').addClass('next');
            _this.firstElement = false;
        }
        return _this.firstElement;
    }
    ngOnInit() {

    }
}