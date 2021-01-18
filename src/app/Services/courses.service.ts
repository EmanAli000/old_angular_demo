import { ICourse } from './../courses/courses';
import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CoursesService
{
    constructor(private httpClient : HttpClient){ }

    private baseUrl = "www.myWebService.com/api/courses";

    getCourse(courseId : number) : Observable<ICourse>
    {
        debugger;
        let url = `${this.baseUrl}/${courseId}`;
        return this.httpClient.get<ICourse>(url).pipe(
            tap(data => console.log(JSON.stringify(data)) )
        );
    }

    getCourses() : ICourse[]
    {
        return [
            {Id : 1, Name : 'Math', Desc : 'Math is like a game :D' },
            {Id : 2, Name : 'French', Desc: 'Aouuuuu Languagouuu thatouuuu freshouuuu speakouuuu XD'},
            {Id : 3, Name : 'Physics', Desc: 'Nature is an interesting game <3'},
            {Id : 4, Name : 'Chemistry', Desc: 'Add some chemicals and heat XD'},
            {Id : 5, Name : 'Arabic', Desc: 'Language that Arab people run away from it to pretend that they are in higher level than they are'}
        ];
    }

    updateCourse(course : ICourse):Observable<ICourse>
    {
        let url = `${this.baseUrl}/${course.Id}`;
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
        return this.httpClient.put<ICourse>(url,course,{ headers: headers });
    }

    createCourse(course : ICourse):Observable<ICourse>
    {
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
        return this.httpClient.post<ICourse>(this.baseUrl,course,{ headers: headers });
    }

    deleteCourse(id : string):Observable<{}>
    {
        let url = `${this.baseUrl}/${id}`;
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
        return this.httpClient.post<ICourse>(url,{ headers: headers });
    }
}