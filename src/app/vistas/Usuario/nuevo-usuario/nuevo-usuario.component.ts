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
  userForm: FormGroup;
  persona: any = null;
    constructor(private fb: FormBuilder,
      private dataService: ServiceService,
      private router:Router) {
        const navigation= this.router.getCurrentNavigation();
        this.persona = navigation?.extras?.state?.value;
       
      this.userForm = this.fb.group({
        id: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        rol: ['', Validators.required],
        entrevista: ['', Validators.required],
        identrevista: ['', Validators.required],
      });
    }
  
      ngOnInit() { 
        if(typeof this.persona === 'undefined'){
          console.log("sin datos para mostrar");
        }
      }
  
      createUser(angForm1){
        // console.log("usuario ",angForm1.value.username, "correo ",angForm1.value.email,"contrasena ",angForm1.value.password,"rol ",angForm1.value.rol,"entrevista ",angForm1.value.entrevista,angForm1.value.identrevista)
        this.dataService.userregistration(
          angForm1.value.id,
          angForm1.value.username,
          angForm1.value.email,
          angForm1.value.password,
          angForm1.value.rol,
          angForm1.value.entrevista,
          angForm1.value.identrevista)
        .pipe(first())
        .subscribe(
        data => {
          this.router.navigate(['adminUsuario']);
          console.log(data)
        },
        error => {
        });
      }
      get username() { return this.userForm.get('username'); }
      get email() { return this.userForm.get('email'); }
      get password() { return this.userForm.get('password'); }
      get rol() { return this.userForm.get('rol').value; }
      get entrevista() { return this.userForm.get('checkvista').value; }
      get identrevista() { return this.userForm.get('identrevista') }
  }