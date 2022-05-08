import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { UserInterface } from '../Model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
 user:UserInterface;
  rol:any=null;
  usuario:any=null;
  loginbtn: boolean;
  logoutbtn: boolean;

    constructor(private dataService: ServiceService,  private router: Router) {
        dataService.getLoggedInName.subscribe(name => this.changeName(name));
         var role = localStorage.getItem('token');
         this.user =  this.dataService.getCurrentUser();

        if (this.dataService.isLoggedIn()) {
            this.rol = role;
            this.usuario=this.user.username
            this.loginbtn = false;
            this.logoutbtn = true;
        }
        else {
            this.loginbtn = true;
            this.logoutbtn = false;    
        }
    }

    ngOnInit(): void {

    }
    private changeName(name: boolean): void {
        this.logoutbtn = name;
        this.loginbtn = !name;
    }
    logout() {
        this.dataService.deleteToken();
        window.location.href = window.location.href;
    }
  
}