import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../../core/services/data/company/company.service';
import {Company} from '../../../../model/company';
import {ActivatedRoute, Router} from '@angular/router';
import {BackofficeUser} from '../../../../model/backofficeUser';
import {DynamicFormModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {CompanyFormModel} from './company-form-model';
import {BackofficeUserService} from '../../../../core/services/data/backofficeUser/backoffice-user.service';
import {StorageService} from '../../../../core/services/storage/storage.service';

@Component({
    selector: 'app-company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
    entity: Company = {} as Company;
    user: BackofficeUser;
    state: string;
    entityForm: FormGroup;
    formModel: DynamicFormModel = CompanyFormModel;
    errors: any[];

    constructor(
        private service: CompanyService,
        private userService: BackofficeUserService,
        private router: Router,
        private route: ActivatedRoute,
        private formService: DynamicFormService,
        private storage: StorageService
    ) { }

    ngOnInit() {
        this.route.data.subscribe(data => this.state = data.state);
        this.entityForm = this.formService.createFormGroup(this.formModel);
        this.getData();
        if (this.state === 'show') {
            Object.keys(this.entityForm.controls).forEach(key => {
                const value = this.entityForm.controls[key];
                value.disable();
            });
        }
    }

    getData() {
        let companyId;
        this.user = this.storage.getUser();
        if (this.user.companies && this.user.companies.length > 0) {
            companyId = this.user.companies[0];
            if (this.state === 'check') {
                this.state = 'show';
            }
        } else {
            this.state = 'create';
            this.entityForm.reset();
            this.entityForm.controls.owner.setValue(this.user.id);
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
                    if (!this.user.companies) {
                        this.user.companies = [];
                    }
                    if ( this.user.companies.indexOf(res.id ) < 0 ) {
                        this.user.companies.push(res.id);
                    }
                    this.userService.update(this.user.id, this.user).subscribe(value => {
                        this.storage.setUser(value);
                        // this.entityForm.reset();
                        const thisComponent = this;
                        setTimeout(function() {
                            // thisComponent.ngOnInit();
                            thisComponent.router.navigateByUrl('/company');
                        }, 100);
                    });
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
