import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServiceService } from '../../../Service/service.service';
import { PersonaInterface } from 'src/app/Model/persona';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  userForm: FormGroup;
  dataForm: FormGroup;
  persona: PersonaInterface;
  horas=[];
  entrevista:{
    user:"",
    dia:"",
    horas:""
  }

  constructor(private fb: FormBuilder,
    private dataService: ServiceService,
    private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.persona = navigation?.extras?.state?.value;

  }

  ngOnInit() {
    if (typeof this.persona === 'undefined') {
      console.log("sin datos para mostrar");
    }
    this.userForm = this.fb.group({
      id: this.persona.id,
      username: this.persona.nombre,
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required],
      entrevista: ['', Validators.required]
    });

    this.dataForm = this.fb.group({
      user: this.persona.id,
      dia: this.fb.array([]),
      hora: this.fb.array([]) 
    });
  }

  createUser(angForm1) {

    this.dataService.userregistration(
      angForm1.value.id,
      angForm1.value.username,
      angForm1.value.email,
      angForm1.value.password,
      angForm1.value.rol,
      angForm1.value.entrevista)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['adminUsuario']);
          console.log("datos", data)
        },
        error => {
          alert('error')
        });
    console.log('formulario ', this.userForm.value)
  }

  createEntrevista(angForm2) {

    // this.dataService.entrevistaRegister(
    //   angForm2.value.id,
    //   angForm2.value.username,
    //   angForm2.value.email)
    // .pipe(first())
    // .subscribe(
    // data => {
    //   this.router.navigate(['adminUsuario']);
    //   console.log("datos",data)
    // },
    // error => {
    //   alert('error')
    // });
    // const time: FormArray = this.dataForm.get('hora') as FormArray;
    // const dato =[];
    // for(var i=0; i<time.length; i++){
    //   dato[i]=time[i].value;
    //   console.log('dati =>', time)
    // }
    console.log('formulario =>', this.dataForm.value)
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.dataForm.get('dia') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    }
    else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

 get getHoras(){
    return this.dataForm.get('hora') as FormArray
  }
  Addhoras() {
    const data: FormArray = this.dataForm.get('hora') as FormArray;
   data.push(this.fb.group({hora:[]}))
  }

  capturar(e){
    // const time: FormArray = this.dataForm.get('hora') as FormArray;
    // const dato =[];
    // for(var i=0; i<time.length; i++){
    //   dato.push(e)
    //   console.log('datos =>',e)
    // }
console.log('datos =>', e)
  }
}