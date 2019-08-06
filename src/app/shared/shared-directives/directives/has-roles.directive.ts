import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Role} from '../../../model/role';
import {AuthService} from '../../../core/services/auth.service';

@Directive({
    selector: '[appHasRoles]'
})
export class HasRolesDirective implements OnInit {
    @Input('appHasRoles') roles: Role[]; // Required permission passed in

    constructor(private el: ElementRef, private authService: AuthService) { }

    ngOnInit() {
        if (!this.authService.hasRoles(this.roles)) {
            this.el.nativeElement.style.display = 'none';
        }
    }

}
