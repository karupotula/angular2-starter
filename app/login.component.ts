Enter file contents hereimport {Component} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {User} from './user.ts';
import {UserService} from './user.service.ts';


@Component({

    selector: 'login-page',
    templateUrl: 'app/views/login.html',
    providers:[UserService]
})



@Injectable()
export class loginComponent {

    constructor(private _userService: UserService) { }

    validateUser() {
        debugger;
        this._userService.validateUser().subscribe(
            data => {
                debugger;
                this.user = data
            },
            err => { this._error = err }
        );
    }

    name: string = '';
    displayname: string = '';
    email: string = '';
    password: string = '';
    user: User;
    _error: string;
}
