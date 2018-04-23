import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';
import { FilterDataService } from './services/filterdata.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { LoginComponent, IA, LI } from "./components/login/login.component";
import { AuthenticateService, User } from './services/authenticate.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit, OnDestroy {
   
    @Input('projectsCount') projectsCount: number = this.filterDataService.projectsCount;
    @Input('technicalDebt') technicalDebt: number = this.filterDataService.technicalDebt;
    @Input('buildSuccessRatio') buildSuccessRatio: number = this.filterDataService.buildSuccessRatio;
    @Input('bugRatio') bugRatio: number = this.filterDataService.bugRatio;
    @Input('testCoverage') testCoverage: number = this.filterDataService.testCoverage;
    subscription: Subscription;
    isAdmin = false;
    isLoggedIn = false;
    ngOnInit() {
        window.onscroll = function () { scrollFunction() };
        this.showIcons =this._auth.isAuthenticatedUser;
        LI.subscribe(res => {
            this.isLoggedIn = res;
          })
        IA.subscribe(res => {
            this.isAdmin = res;
        })
        function scrollFunction() {
          let halfWindowHeight = Math.trunc(window.innerHeight / 2);
            if (document.body.scrollTop > halfWindowHeight || document.documentElement.scrollTop > halfWindowHeight) {
                document.getElementById("navbar").style.top = "50px";
                //document.getElementById("navbar").style.display = "block";
                //document.getElementById("navbar").style.transition = "top 0.3s";
            } else {
                document.getElementById("navbar").style.top = "-106px";
                //document.getElementById("navbar").style.display = "none";
            }
        }                
    }
    ngOnDestroy(): void {
        
    }
    public projectSelected: boolean = false;
    public showIcons;
    constructor(private _auth: AuthenticateService, private appService: AppService, private filterDataService: FilterDataService, private router: Router) {
        this.subscription = this.filterDataService.filterServiceProjectsLoadingEvent.subscribe((res) => {            
            this.projectsCount = res.length;
            this.technicalDebt = this.filterDataService.technicalDebt;
            this.buildSuccessRatio = this.filterDataService.buildSuccessRatio;
            this.bugRatio = this.filterDataService.bugRatio;
            this.testCoverage = this.filterDataService.testCoverage;
        });
        this.subscription = this.filterDataService.filterServiceProjectsFilterEvent.subscribe(()=>{
            this.projectsCount = this.filterDataService.projectsCount;
            this.technicalDebt = this.filterDataService.technicalDebt;
            this.buildSuccessRatio = this.filterDataService.buildSuccessRatio;
            this.bugRatio = this.filterDataService.bugRatio;
            this.testCoverage = this.filterDataService.testCoverage;
        });
    }
    ngDoCheck() {
        this.showIcons = this._auth.isAuthenticatedUser;
    }
    onLogOut() {
        this.isAdmin = false;
        this.isLoggedIn= false;
        this._auth.logout();
    }    
}
