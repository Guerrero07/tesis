import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../Service/service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private dataService: ServiceService,private router: Router ) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
const routeurl: string = state.url;
return this.isLogin(routeurl);
}

isLogin(routeurl: string) {
if (this.dataService.isLoggedIn()) {
return true;
}

this.dataService.redirectUrl = routeurl;
this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
}
}