import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/Model/user';
import { ServiceService } from 'src/app/Service/service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private dataService: ServiceService, private router: Router) { }

  user:UserInterface;
  autorice:boolean=false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkUserLogin(route);
  }
  checkUserLogin(route:ActivatedRouteSnapshot):boolean{
    this.user=this.dataService.getCurrentUser();

    for(let numero of route.data.guards){  
  
      if(this.user.rol.includes(numero))
      {
        this.autorice=true
      }
    }
    if(this.autorice===true)
      {
        return true;
      }
      else{
        this.router.navigate(['/inicio'], { queryParams: { returnUrl: route } });
        return false;
      }  
  }
}
