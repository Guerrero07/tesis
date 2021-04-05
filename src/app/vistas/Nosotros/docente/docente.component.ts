import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent{

  loginbtn: boolean;
  logoutbtn: boolean;

    constructor(private dataService: ServiceService) {
        dataService.getLoggedInName.subscribe(name => this.changeName(name));
        
        if (this.dataService.isLoggedIn()) {
            // console.log("loggedin");
            this.loginbtn = false;
            this.logoutbtn = true;
        }
        else {
            this.loginbtn = true;
            this.logoutbtn = false;
        }

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
