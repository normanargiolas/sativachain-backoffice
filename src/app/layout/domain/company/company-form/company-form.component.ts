import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../../core/services/data/company/company.service';
import {Company} from '../../../../model/company';
import {ActivatedRoute, Router} from '@angular/router';
import {BackofficeUser} from '../../../../model/backofficeUser';

@Component({
    selector: 'app-company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
    company: Company = {} as Company;
    state: string;

    constructor(
        private service: CompanyService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.data.subscribe(data => this.state = data.state);
        this.getData();
        if (this.state === 'show') {
            // Object.keys(this.userForm.controls).forEach(key => {
            //     const value = this.userForm.controls[key];
            //     value.disable();
            // });
        }
    }

    getData() {
        let companyId;
        if ( this.state === 'check' ) {
            // TODO create a session storage service to do this
            const user: BackofficeUser = JSON.parse(sessionStorage.getItem('user')) as BackofficeUser;
            if (user.companies.length > 0) {
                companyId = user.companies[0];
                this.state = 'show';
            }
        }
        if (this.state === 'show' || this.state === 'edit') {
            // const id = Number(this.route.snapshot.paramMap.get('id'));
            this.service.findOne(companyId).subscribe(res => {
                this.company = res;
                // this.userForm.reset();
                // this.userForm.setValue(this.user);
            });
        }

    }
}
