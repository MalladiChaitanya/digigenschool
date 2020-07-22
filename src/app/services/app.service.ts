import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
    user = { 'username': '' };
    lesson = {
        'title': '',
        'description': '',
        'id': '',
        'tags': [],
        'user': ''
    };

    constructor(private _http: HttpClient) {
    }
    postQuestion(lesson: any) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        lesson['username'] = this.user.username;
        const body = JSON.stringify(lesson);
        console.log(body);
        return this._http.post(`http://localhost:3000/addQuestion`, body, { headers: headers });
    }
    getQuestion(url): Observable<any[]> {
        return this._http.get<any[]>(url);
    }
    getAssignment(url, id) {
        const temp = {};
        temp['_id'] = id;
        return this._http.post<any[]>(url, temp);
    }
    postAssignment(url, data) {
        return this._http.post(url, data);
    }
    userlogin(usr: any) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        return this._http.post(`http://localhost:3000/checkLogin`, usr);
    }

    registerUser(reusr: any) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        const body = JSON.stringify(reusr);
        console.log(body);
        return this._http.post(`http://localhost:3000/register`, body, { headers: headers });
    }

    like(url, data) {
        return this._http.post(url, data);
    }

    dislike(url, data) {
        return this._http.post(url, data);
    }

}
