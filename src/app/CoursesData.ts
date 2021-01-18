import { ICourse } from './courses/courses';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { observable, Observable } from 'rxjs';

export class CoursesData implements InMemoryDbService
{
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        const coursesData : ICourse[] = [
            {Id : 1, Name : 'Math', Desc : 'Math is like a game :D' },
            {Id : 2, Name : 'French', Desc: 'Aouuuuu Languagouuu thatouuuu freshouuuu speakouuuu XD'},
            {Id : 3, Name : 'Physics', Desc: 'Nature is an interesting game <3'},
            {Id : 4, Name : 'Chemistry', Desc: 'Add some chemicals and heat XD'},
            {Id : 5, Name : 'Arabic', Desc: 'Language that Arab people run away from it to pretend that they are in higher level than they are'}
        ];
        
        return new Observable<ICourse>();
    }
    
}