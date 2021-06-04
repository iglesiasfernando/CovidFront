import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class CustomHttpClient {

    constructor(private http: HttpClient, private _router: Router) { }

    createAuthorizationHeader(headers: Headers, needsAuthorization: boolean) {
        headers.append("Content-Type", "application/json");

    }

    addCustomHeaders(headers: Headers, customHeaders: any) {
        if (customHeaders) {
            for (var prop in customHeaders) {
                headers.append(prop, customHeaders[prop]);
            }
        }
    }

    get(url, needsAuthorization: boolean, customHeaders?: any) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers, needsAuthorization);
        this.addCustomHeaders(headers, customHeaders);
        return this.http.get(url, {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
              })
        });
    }
  
    post(url, data, needsAuthorization: boolean, customHeaders?: any) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers, needsAuthorization);
        this.addCustomHeaders(headers, customHeaders);
        return this.http.post(url, data, {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
        })
    }
}