import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserInterface } from 'src/app/Model/user';
import { ServiceService } from 'src/app/Service/service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  myForm:FormGroup;
  comunForm: FormGroup;
  usuario: UserInterface;
  today = new Date();
  date = '';
  // hora="";
  filtroAlumno = null;
  copiaFiltro = null;
  copiaNivel = null;
  copiaCurso = null;
  sw = false;
  disabled=true;
  disabledCurso=true;
  tutor: number;
  nivel= [];
  curso= [];
  turno= [];
  auxn: Array<number> = [];
  auxc: Array<number> = [];
  auxt: Array<number> = [];
  selectedItemsNivel: Array<any> = [];
  selectedItemsCurso: Array<any> = [];
  selectedItemsTurno: Array<any> = [];
  cursoSettings: IDropdownSettings;
  dropdownSettings: IDropdownSettings;

  niveles = [
    { name: 'INICIAL', id: '1' },
    { name: 'PRIMARIA', id: '2' },
    { name: 'SECUNDARIA', id: '3' }
  ];
  cursos = [
    { name: 'KINDER', id: '7', isDisabled: this.disabledCurso },
    { name: 'PRE-KINDER', id: '8', isDisabled: this.disabledCurso },
    { name: '1-PRIMERO', id: '1' },
    { name: '2-SEGUNDO', id: '2' },
    { name: '3-TERCERO', id: '3' },
    { name: '4-CUARTO', id: '4' },
    { name: '5-QUINTO', id: '5' },
    { name: '6-SEXTO', id: '6' }
  ];
  turnos = [
    { name: 'MAÑANA', id: '1' },
    { name: 'TARDE', id: '2' },
  ];

  constructor(private fb: FormBuilder,
    private dataService: ServiceService) {
    this.date = formatDate(this.today, 'yyyy-MM-dd', 'en-US');
    // this.hora=formatDate(this.today,'HH:mm:ss','en-US'); 
  }
  ngOnInit(): void {
    this.usuario = this.dataService.getCurrentUser();
    this.ListarAlumno();
    this.selectedItemsNivel = [
      { name: 'INICIAL', id: '1' },
      { name: 'PRIMARIA', id: '2' },
      { name: 'SECUNDARIA', id: '3' }    
    ];
    this.selectedItemsCurso = [
      { name: 'KINDER', id: '7'},
      { name: 'PRE-KINDER', id: '8'},
      { name: '1-PRIMERO', id: '1' },
      { name: '2-SEGUNDO', id: '2' },
      { name: '3-TERCERO', id: '3' },
      { name: '4-CUARTO', id: '4' },
      { name: '5-QUINTO', id: '5' },
      { name: '6-SEXTO', id: '6' }
    ];
    this.cursoSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Marcar Todos',
      unSelectAllText: 'Desmarcar Todos',
      itemsShowLimit: 1,
      allowSearchFilter: false,
      maxHeight: 180
    };

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'tutor',
      textField: 'nombre_completo',
      searchPlaceholderText: 'Buscar',
      allowSearchFilter: true,
      closeDropDownOnSelection: true,
      noDataAvailablePlaceholderText: 'No hay datos disponibles',
      maxHeight: 180
    };
    // this.myForm = this.fb.group({
    //   nivel: [this.selectedItemsNivel],
    //   curso: [this.selectedItemsCurso],
    //   turno: [this.selectedItemsTurno]
    // });
    this.comunForm = this.fb.group({
      tipo: ['Seleccione', Validators.required],
      origen: ['Seleccione', Validators.required],
      fechap: this.date,
      fechae: ['', Validators.required],
      horae: ['', Validators.required],
      descripcion: ['', Validators.required],
      redactor: this.usuario.id_usuario,
      nivel: this.fb.array([]),
      turno: this.fb.array([]),
      curso: this.fb.array([])
    });
  }
  

  postdata(Form) {
    if (Form.value.tipo == 4) {
      // console.log("destinatario>", Form.value)
      this.dataService.solicitudRegister(
        this.usuario.id_usuario,
        this.tutor,
        Form.value.fechae,
        Form.value.horae,
        Form.value.descripcion)
        .pipe(first())
        .subscribe(
          data => {
            //  this.router.navigate(['pendientes']);
            console.log("datos enviados", data)
          },
          error => {
            console.log('ocurrio un error al insertar',error)
          });
    } else {
      this.dataService.comunicadoRegister(
        Form.value.tipo,
        Form.value.origen,
        Form.value.fechap,
        Form.value.fechae,
        Form.value.horae,
        Form.value.descripcion,
        Form.value.redactor,
        this.nivel,
        this.turno,
        this.curso)
        .pipe(first())
        .subscribe(
          data => {
            //  this.router.navigate(['pendientes']);
            console.log("datos enviados", data)
          },
          error => {
            console.log('ocurrio un error', error)
          });
      // console.log("datos enviados",Form.value)
    }
  }
  ListarAlumno() {
    this.dataService.AlumnoFilter().subscribe(result => this.filtroAlumno = result);
  }
  onSelectNivel(nivel) {
    if (this.sw == false) {
      this.copiaFiltro = this.filtroAlumno;
      this.filtroAlumno = this.filtroAlumno.filter(e => e.nivel == nivel.target.value);
      this.copiaNivel = this.filtroAlumno;
      this.sw = true;
      console.log(this.filtroAlumno)
    } else {
      this.filtroAlumno = this.copiaFiltro;
      this.filtroAlumno = this.filtroAlumno.filter(e => e.nivel == nivel.target.value);
      this.copiaNivel = this.filtroAlumno;
      console.log(this.filtroAlumno)
    }
  }
  onSelectCurso(curso) {
    if (this.sw == false) {
      this.copiaFiltro = this.filtroAlumno;
      this.filtroAlumno = this.filtroAlumno.filter(e => e.curso == curso.target.value);
      this.sw = true;
      console.log(this.filtroAlumno)
    } else if (this.copiaNivel != null) {
      this.filtroAlumno = this.copiaNivel;
    } else { this.filtroAlumno = this.copiaFiltro; }
    this.filtroAlumno = this.filtroAlumno.filter(e => e.curso == curso.target.value);
    this.copiaCurso = this.filtroAlumno;
    console.log(this.filtroAlumno)
  }
  onSelectTurno(turno) {
    if (this.sw == false) {
      this.copiaFiltro = this.filtroAlumno;
      this.filtroAlumno = this.filtroAlumno.filter(e => e.turno == turno.target.value);
      this.sw = true;

    } else if (this.copiaCurso != null) {
      this.filtroAlumno = this.copiaCurso;
    } else { this.filtroAlumno = this.copiaFiltro; }
    this.filtroAlumno = this.filtroAlumno.filter(e => e.turno == turno.target.value);

  }
  onItemSelect(item: any) {
    this.tutor = item.tutor
    console.log(this.tutor);
  }

  // ----Multiselec Nivel----//

  NivelSelect(item: any) {
    if(item.id==1){
      this.handleDisableCurso();
    }else{
      this.disabled=false;
      this.auxn.push(item.id)
      this.nivel = [...new Set(this.auxn)]
      console.log(this.nivel)
    }
  }
  NivelDeSelect(items: any){
    if(items.id==1){
      this.handleDisableCurso();
    }
    else{
      this.auxn = this.auxn.filter(item => 
        item != items.id)
        this.nivel=this.auxn
      console.log(this.nivel)
    }
  }
  onNivelAll(items: any) {
    this.disabled=false;
    items.map(e =>{
      if(e.id==1){
        this.handleDisableCurso();}
        else
      this.auxn.push(e.id)})
    this.nivel = [...new Set(this.auxn)]
    console.log(this.nivel)
  }
  ofNivelAll(){
    this.nivel=[];
    this.auxn=[];
    this.handleDisableCurso();
    // console.log(this.nivel)
  }

   // ----Multiselec Curso----//

  CursoSelect(item: any) {
    this.auxc.push(item.id)
    this.curso = [...new Set(this.auxc)]
    console.log(this.curso)
  }

  CursoDeSelect(items: any){
    this.auxc = this.auxc.filter(item => 
      item != items.id)
      this.curso=this.auxc
    // console.log(this.curso)
  }
  onCursoAll(items: any) {
    items.map(e =>
      this.auxc.push(e.id))
    this.curso = [...new Set(this.auxc)]
    // console.log(this.curso)
  }
  ofCursoAll(){
    this.curso=[];
    this.auxc=[];
    // console.log(this.curso)
  }

  // ----Multiselec turno----//

  TurnoSelect(item: any) {
    this.turno = item.id
    console.log(this.turno);
  }
  TurnoDeSelect(items: any){
    this.auxt = this.auxt.filter(item => 
      item != items.id)
      this.turno=this.auxt
    // console.log(this.turno)
  }
  onTurnoAll(items: any) {
    items.map(e =>
      this.auxt.push(e.id))
    this.turno = [...new Set(this.auxt)]
    // console.log(this.turno)
  }
  ofTurnoAll(){
    this.turno=[];
    this.auxt=[];
    // console.log(this.turno)
  }
  handleDisableCurso() {
    this.disabledCurso=!this.disabledCurso
    this.cursos[0].isDisabled = this.disabledCurso;
    this.cursos[1].isDisabled = this.disabledCurso;
    this.cursos = [...this.cursos];
  }
}