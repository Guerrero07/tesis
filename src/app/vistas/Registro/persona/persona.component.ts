import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
personaForm: FormGroup;

  constructor(private fb: FormBuilder,
    private dataService: ServiceService,
    private router:Router) {
      
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      telefono: ['', Validators.required]
    });
   }

  ngOnInit() { }

  postdata(angForm1){-
    this.dataService.personaRegister(
        angForm1.value.nombre,
        angForm1.value.paterno,
        angForm1.value.materno,
        angForm1.value.telefono)
    .pipe(first())
    .subscribe(
    data => { 
      this.router.navigate(['adminUsuario']);
    },
    error => {
    });
  }

}
