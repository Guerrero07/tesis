import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: ServiceService, private router: Router) {
      this.userForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });
  }

  ngOnInit() {
  }
  login(dataForm) {
      this.dataService.userlogin(dataForm.value.email, dataForm.value.password)
          .pipe(first())
          .subscribe(
              data => {
                  // console.log(data);
                  this.dataService.setUser(data[0])
                  let token=data[0].id_person;
                  this.dataService.setToken(token);
                  const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/inicio';
                  this.router.navigate([redirect]);
              },
              _error => {
                  alert("User name or password is incorrect")
              });
  }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  
}