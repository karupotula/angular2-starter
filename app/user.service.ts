

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {User} from './user.ts'


@Injectable()
export class UserService {


    constructor(private http: Http) { debugger; }

    validateUser() {
        var user = { email: 'kmadhu.kanna@gmail.com', password: 'test' };
        var data = this.http.get('api/user/ValidateUser', user);
        return data;
    }
}
