import {Component, OnInit} from '@angular/core';
import {BackofficeUser} from '../../../../model/backofficeUser';
import {FormGroup} from '@angular/forms';
import {DynamicFormModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {BackofficeUserService} from '../../../../core/services/data/backofficeUser/backoffice-user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageService} from '../../../../core/services/storage/storage.service';
import {SeedService} from '../../../../core/services/data/seed/seed.service';
import {Seed} from '../../../../model/seed';
import {SeedFormModel} from './seed-form-model';

@Component({
  selector: 'app-seed-form',
  templateUrl: './seed-form.component.html',
  styleUrls: ['./seed-form.component.scss']
})
export class SeedFormComponent  implements OnInit {
    entity: Seed = {} as Seed;
    user: BackofficeUser;
    state: string;
    entityForm: FormGroup;
    formModel: DynamicFormModel = SeedFormModel;
    errors: any[];

    constructor(
        private service: SeedService,
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
        this.user = this.storage.getUser();

        if (this.state === 'create') {
            this.entityForm.reset();
            this.entityForm.controls.owner.setValue(this.user.id);
        }
        if (this.state === 'show' || this.state === 'edit') {
            const entityId = Number(this.route.snapshot.paramMap.get('id'));
            this.service.findOne(entityId).subscribe(res => {
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
                    this.router.navigateByUrl('/seed');
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

    resetForm() {
        this.entityForm.reset();
    }
}
