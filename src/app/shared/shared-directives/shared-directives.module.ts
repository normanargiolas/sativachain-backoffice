import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HasRolesDirective} from './directives/has-roles.directive';

@NgModule({
    declarations: [HasRolesDirective],
    exports: [HasRolesDirective],
    imports: [
        CommonModule
    ]
})
export class SharedDirectivesModule { }
