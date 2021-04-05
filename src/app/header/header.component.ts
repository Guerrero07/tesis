import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  
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