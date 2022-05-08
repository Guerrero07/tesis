import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlumnoInterface } from 'src/app/Model/alumno';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-docente-manager',
  templateUrl: './docente-manager.component.html',
  styleUrls: ['./docente-manager.component.css']
})
export class DocenteManagerComponent implements OnInit {
 docenteForm: FormGroup;
  docente: AlumnoInterface;
  p:number=1;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private fb: FormBuilder,
    private dataService: ServiceService,
    private router: Router) {

    this.docenteForm = this.fb.group({
      ci: ['', Validators.required],
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      telefono: ['', Validators.required],
      nivel: ['nivel', Validators.required],
      curso: ['curso', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ListarDocente();
  }
  ListarDocente() {
    this.dataService.listarDocente().subscribe(result => this.docente = result);
  }

  detalle(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['NuevoUsuario'], this.navigationExtras);
  }

  addDocente(angForm1) {

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
          this.ListarDocente();
        },
        error => {
          console.log(error)
        });
  }
}
