import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['auth']);
            return false;
        } else {
            return true;
        }
    }
}
