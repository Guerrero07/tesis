import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { UserInterface } from 'src/app/Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  user:UserInterface

  constructor(private fb: FormBuilder, private dataService: ServiceService, private router: Router) {
      this.userForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });
  }

  ngOnInit() {
     if(typeof this.user != null){
      this.router.navigate(['inicio']);
    }
  }
  login(dataForm) {
      this.dataService.userlogin(dataForm.value.email, dataForm.value.password)
          .pipe(first())
          .subscribe(
              data => {
 
                  this.dataService.setUser(data[0])
                  let token=data[0].rol;
                  this.dataService.setToken(token);
                  const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/inicio';
                  this.router.navigate([redirect]);
                  this.locationreload();
              },
              _error => {
                  alert("Usuario o contraseña incorrecto")
              });
  }
  locationreload() {
 
    location.reload();      
    }
  
}