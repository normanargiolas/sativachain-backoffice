import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../../core/services/data/company/company.service';
import {Company} from '../../../../model/company';
import {ActivatedRoute, Router} from '@angular/router';
import {BackofficeUser} from '../../../../model/backofficeUser';
import {DynamicFormModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {CompanyFormModel} from './company-form-model';

@Component({
    selector: 'app-company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
    entity: Company = {} as Company;
    state: string;
    entityForm: FormGroup;
    formModel: DynamicFormModel = CompanyFormModel;
    errors: any[];

    constructor(
        private service: CompanyService,
        private router: Router,
        private route: ActivatedRoute,
        private formService: DynamicFormService
    ) { }

    ngOnInit() {
        this.route.data.subscribe(data => this.state = data.state);
        this.getData();
        this.entityForm = this.formService.createFormGroup(this.formModel);
        if (this.state === 'show') {
            Object.keys(this.entityForm.controls).forEach(key => {
                const value = this.entityForm.controls[key];
                value.disable();
            });
        }
    }

    getData() {
        let companyId;
        // TODO create a session storage service to do this
        const user: BackofficeUser = JSON.parse(sessionStorage.getItem('user')) as BackofficeUser;
        if (user.companies.length > 0) {
            companyId = user.companies[0];
            if (this.state === 'check') {
                this.state = 'show';
            }
        }
        if (this.state === 'show' || this.state === 'edit') {
            // const id = Number(this.route.snapshot.paramMap.get('id'));
            this.service.findOne(companyId).subscribe(res => {
                this.entity = res;
                this.entityForm.reset();
                this.entityForm.setValue(this.entity);
            });
        }

    }

    onSubmit() {
        if (!this.entityForm.invalid) {
            this.entity = this.entityForm.value;
            let obs = this.service.save(this.entity);
            if (this.state === 'create') {
                obs = this.service.save(this.entity);
            }
            if (this.state === 'edit') {
                obs = this.service.update(this.entity.id, this.entity);
            }
            obs.subscribe(res => {
                    this.router.navigateByUrl('/company');
                    this.entityForm.reset();
                },
                error => {
                    this.errors = error.error._embedded.errors.map(err => err.message);
                });
        }
    }

    delete() {
    }

    lockData() {
    }
}
