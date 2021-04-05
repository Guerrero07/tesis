import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServiceService } from '../../../Service/service.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  angForm: FormGroup;
  
    constructor(private fb: FormBuilder,private dataService: ServiceService,private router:Router) {
  
      this.angForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        name: ['', Validators.required],
        rol: ['', Validators.required],
      });
    }
  
      ngOnInit() { }
  
      postdata(angForm1){
        this.dataService.userregistration(angForm1.value.name,angForm1.value.email,angForm1.value.password,angForm1.value.rol)
        .pipe(first())
        .subscribe(
        data => {
          this.router.navigate(['adminUsuario']);
        },
        error => {
        });
      }
  
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  get rol() { return this.angForm.get('rol').value; }
  }