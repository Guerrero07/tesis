import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlumnoInterface } from 'src/app/Model/alumno';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-administrar-persona',
  templateUrl: './administrar-persona.component.html',
  styleUrls: ['./administrar-persona.component.css']
})
export class AdministrarPersonaComponent implements OnInit {
  alumnoForm: FormGroup;
  tutorForm:FormGroup;
  alumno: AlumnoInterface;
  idAlumno=null;
  p:number=1;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private fb: FormBuilder,
    private dataService: ServiceService,
    private router: Router) {

    this.alumnoForm = this.fb.group({
      ci: ['', Validators.required],
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      telefono: ['', Validators.required],
      nivel: ['nivel', Validators.required],
      curso: ['curso', Validators.required],
      turno: ['turno', Validators.required]
    });
  
  this.tutorForm = this.fb.group({
    CIt: ['', Validators.required],
    nombret: ['', Validators.required],
    paternot: ['', Validators.required],
    maternot: ['', Validators.required],
    telefonot: ['', Validators.required],
    direcciont: ['', Validators.required],
    tipot: ['', Validators.required],
    alumnot: ['', Validators.required]
  });
}

  ngOnInit(): void {
    this.ListarPersona();
  }
  ListarPersona() {
    this.dataService.listarAlumno().subscribe(result => this.alumno = result);
  }

  obtnerUltimo() {
    let ultimo: FormArray = this.alumno as FormArray;

    for (var i = 0; i < ultimo.length; i++) {
      this.alumno = Object.values(this.alumno)[i]
    }
    this.idAlumno=this.alumno.id
    console.log('dato', this.idAlumno)
  }
  detalle(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['NuevoUsuario'], this.navigationExtras);
  }

  addAlumno(angForm1) {

    this.dataService.alumnoRegister(
      angForm1.value.ci,
      angForm1.value.nombre,
      angForm1.value.paterno,
      angForm1.value.materno,
      angForm1.value.telefono,
      angForm1.value.nivel,
      angForm1.value.curso,
      angForm1.value.turno)
      .pipe(first())
      .subscribe(
        data => {
          alert('registro exitoso');
          this.ListarPersona();
        },
        error => {
          console.log(error)
        });
  }

  addTutor(angForm2) {

    this.dataService.tutorRegister(
      angForm2.value.nombret,
      angForm2.value.paternot,
      angForm2.value.maternot,
      angForm2.value.telefonot,
      angForm2.value.tipot,
      this.idAlumno
      )
      .pipe(first())
      .subscribe(
        data => {
          alert('registro exitoso')
          this.ListarPersona();
        },
        error => {
          alert('registro falido')
          console.log(error)
        });
  }
}
