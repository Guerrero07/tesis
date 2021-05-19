import { Component, OnInit } from '@angular/core';
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
  loginbtn: boolean;
  logoutbtn: boolean;

  isAdmin:boolean=false;
  isSecretaria:boolean=false;
  isDocente:boolean=false;
  isTutor:boolean=false;

    constructor(private dataService: ServiceService) {
        dataService.getLoggedInName.subscribe(name => this.changeName(name));
        
        if (this.dataService.isLoggedIn()) {
            this.loginbtn = false;
            this.logoutbtn = true;
        }
        else {
            this.loginbtn = true;
            this.logoutbtn = false;
        }
    }

    ngOnInit(): void {
        this.user=this.dataService.getCurrentUser();
        this.rol=this.user.tipo_usuario;
        this.checkAdmin();
        this.checkSecre();
        this.checkProfe();
        this.checkTutor();
      }
    
    private changeName(name: boolean): void {
        this.logoutbtn = name;
        this.loginbtn = !name;
    }
    logout() {
        this.dataService.deleteToken();
        window.location.href = window.location.href;
    }

    checkAdmin(){
        if (this.rol==='1') {
            this.isAdmin=true
            this.isSecretaria=true
            // console.log('el rol del ususario',this.rol)
        }
    }
    checkSecre(){
        if (this.rol==='3') {
            this.isSecretaria=true
            // console.log('el rol del ususario ',this.rol)
        }
    }
    checkProfe(){
        if (this.rol==='2') {
            this.isDocente=true
            // console.log('el rol del ususario ',this.rol)
        }
    }
    checkTutor(){
        if (this.rol==='4') {
            this.isTutor=true
            // console.log('el rol del ususario ',this.rol)
        }
    }
}