import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AppService } from './services/app.service';

@Injectable()
export class MainService {
    onboardingURL = 'https://10.103.21.91:8888';
    constructor(private http:Http, private appService: AppService) { }
    api(thisStep) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        switch (thisStep) {
            case 1:
                // return this.http.post(`${this.onboardingURL}`, this.appService.projectInformation, headers)
            default:
                return this.http.request('/')
        }
    }
}