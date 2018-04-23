import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AppService } from '../services/app.service';

@Injectable()
export class DetailsService {
    constructor(private http: Http, private appService: AppService) { }
    fetchData(url, key) {
        return this.http.get(`${this.appService.URL}${url}?project_key=${key}`)
            .map(data => {
                return data;
            });
    }
}