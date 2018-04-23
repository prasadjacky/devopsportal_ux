import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';
@Component({
    moduleId: module.id,
    selector: 'onboardingSummary',
    templateUrl: './onboarding_summary.component.html',
    styleUrls: ['./onboarding_summary.component.css']
})
export class OnboardingSummaryComponent {
    progress = 0;
    background = '#3489db';
    progressStatus = 'Initiating..';
    Stage = [{},{
        label: 'Project Created'
    },{
        label: 'Users Created'
    },{
        label: 'Environments Created'
    },{
        label: 'ALM Tools Created'
    },{
        label: 'Project Created'
    },{
        label: 'Project Created'
    },{
        label: 'Project Created'
    },{
        label: 'Project Created'
    },{
        label: 'Project Created'
    }]
    Messages = {
        pp: '',
        scp: '',
        scr: '',
        cap: '',
        cip: ''
    };
    Times = [];
    index = 1;
    flags = {
        enablePlanning: true,
        enableCodeAnalysis: true,
        enableDeployment: true
    }
    constructor(private appService: AppService){}
    checkFlags() {
        this.flags.enablePlanning = this.appService.alm.planning.configured;
        this.flags.enableCodeAnalysis = this.appService.alm.code_analysis.configured;
        this.flags.enableDeployment = this.appService.alm.deployment.configured;
        console.log(this.flags);
    }
    incProgress() {
        this.progress += 100 / 9;
        this.doughnutChartData = [0, 0, this.progress, 100 - this.progress];
        if (this.Times[this.index] !== undefined) {
            if (this.Times[this.index] > 500) {
                this.Times[this.index] = Math.round(this.Times[this.index] / 100) / 10;
                this.Times[this.index] += 's';
            } else {
                this.Times[this.index] += 'ms';
            }
        }
        this.progressStatus = `${Math.ceil(this.progress)}%`;
        this.index += 1;
    }
    success() {
        this.background = '#27ae60';
        this.progressStatus = 'Onboarding..';
        setTimeout(()=>{
            this.progressStatus = 'Onboarded!';
        }, 1000)
        this.doughnutChartData = [0, 1000000, 0, 0];
    }
    failure() {
        this.background = 'orangered';
        this.progress = 100;
        this.progressStatus = 'Failed!';
        this.doughnutChartData = [1000000, 0, 0, 0];
    }
    public doughnutChartColors: Array<any> = [{
        backgroundColor: ['orangered', '#20ae60', '#3498db', '#EEE'],
        borderWidth: [0, 0, 0, 0]
    }];
    public doughnutChartData: number[] = [0, 0, 0, 100];
    public doughnutChartType: string = 'doughnut';
    public doughnutChartOptions: any = {
        plugins: {
            datalabels: {
              display: false
            }
        },
        cutoutPercentage: 70,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }
}