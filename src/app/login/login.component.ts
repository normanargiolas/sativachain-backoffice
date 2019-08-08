import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {AuthService} from '../core/services/auth.service';
import {NgForm} from '@angular/forms';
import {BackofficeUserService} from '../core/services/data/backofficeUser/backoffice-user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(
        public auth: AuthService,
        public userService: BackofficeUserService,
        public router: Router
    ) { }

    ngOnInit() {
    }

    login(f: NgForm) {
        this.auth.login(f.value);
        this.userService.getUser(f.value.username).subscribe(res => {
            // TODO create a session storage service to do this
            if (res.length > 0){
                sessionStorage.setItem('user', JSON.stringify(res[0]));
            }
        });
    }
}
