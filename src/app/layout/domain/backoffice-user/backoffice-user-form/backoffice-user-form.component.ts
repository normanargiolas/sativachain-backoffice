import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DynamicFormModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackofficeUser} from '../../../../model/backofficeUser';
import {BackofficeUserService} from '../../../../core/services/data/backofficeUser/backoffice-user.service';
import {BackofficeUserFormModel} from './backoffice-user-form-model';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../../components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-backoffice-user-form',
    templateUrl: './backoffice-user-form.component.html',
    styleUrls: ['./backoffice-user-form.component.scss']
})
export class BackofficeUserFormComponent implements OnInit {
    state: string;
    user: BackofficeUser;
    formModel: DynamicFormModel = BackofficeUserFormModel;
    userForm: FormGroup;
    public dialog: MatDialog;
    private errors: any[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private formService: DynamicFormService,
        private service: BackofficeUserService,
    ) { }

    onSubmit() {
        if(!this.userForm.invalid) {
            this.user = this.userForm.value;
            const obs = this.service.save(this.user);
            if (this.state === "edit") {

            }
            obs.subscribe(res => {
                    this.router.navigateByUrl('/users');
                    this.resetForm();
                },
                error => {
                    this.errors = error.error._embedded.errors.map(err => err.message);
                });
        }
    }

    ngOnInit(): void {
        this.route.data.subscribe(data => this.state=data.state);
        this.getData();
        this.userForm = this.formService.createFormGroup(this.formModel);
    }

    getData() {
        if (this.state==='show' || this.state==='edit'){
            let id = Number(this.route.snapshot.paramMap.get('id'));
            this.service.findOne(id).subscribe(res => {
                this.user = res;
                this.userForm.reset();
                this.userForm.setValue(this.user);
            })
        }
    }

    deleteUser() {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
            data: 'Do you confirm the deletion of this data?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.service.delete(this.user.id).subscribe(res => {
                    this.router.navigateByUrl('/users');
                });
            }
        });
    }

    resetForm() {
        this.userForm.reset();
    }
}
