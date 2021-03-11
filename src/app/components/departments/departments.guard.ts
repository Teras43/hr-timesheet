import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsGuard implements CanActivate {
  constructor(private router: Router) {}  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const id = +route.url[0].parameters.id;
        if (isNaN(id) || id < 1 || id > 3) {
            alert('Invalid Department Id');
            this.router.navigate(['/departments'])
            return false
        }
    return true;
  }
  
}
