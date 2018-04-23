import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService,User } from './services/authenticate.service';
import {LI, IA} from './components/login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _auth: AuthenticateService,
        private _router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
           
        if (this._auth.isAuth()) {
            let roles = route.data["expectedRoles"] as Array<string>;
            for(var i=0;i<roles.length;i++) {
                if (roles[i] === User.role ) {
                    this._auth.isAdmin.next(true);
                    LI.next(true);
                   if(User.role==="admin"){
                        IA.next(true);
                   }
                   else{
                    IA.next(false);
                   }
                    return true;
                }
            }
            /* alert("You don't have permission to access this page!!");
            this._router.navigate(['']); */ 
            LI.next(true); 
            return true;        
        }else {
            this._router.navigate(['']);
            return false;
        }      
    }
}