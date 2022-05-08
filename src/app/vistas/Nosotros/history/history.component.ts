import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AlumnoFilterInterface } from 'src/app/Model/alumnoFilter';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
 
  entrevista=null;
  data: AlumnoFilterInterface;
  filtroAlumno = null;
  copiaFiltro= null;
  copiaNivel=null;
  copiaCurso=null;
  sw=false;
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  constructor(private dataService: ServiceService, private fb: FormBuilder) { }

  ngOnInit(){
    // this.ListarDias();
    this. ListarAlumno();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nombre_completo',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }
  onSelectNivel(nivel){
    if(this.sw==false){
      this.copiaFiltro=this.filtroAlumno;
      this.filtroAlumno= this.filtroAlumno.filter(e => e.nivel==nivel.target.value);
      this.copiaNivel=this.filtroAlumno;
      this.sw=true;
      console.log(this.filtroAlumno)
    }else{
      this.filtroAlumno=this.copiaFiltro;
      this.filtroAlumno= this.filtroAlumno.filter(e => e.nivel==nivel.target.value);
      this.copiaNivel=this.filtroAlumno;
      console.log(this.filtroAlumno)
  }
}
  onSelectCurso(curso){
    if(this.sw==false){
      this.copiaFiltro=this.filtroAlumno;
      this.filtroAlumno= this.filtroAlumno.filter(e => e.curso==curso.target.value);
      this.sw=true;
      console.log(this.filtroAlumno)
    }else if(this.copiaNivel!=null){
        this.filtroAlumno=this.copiaNivel;
        console.log('entro al curso con datos de nivel null')
      }else{ this.filtroAlumno=this.copiaFiltro;}
    this.filtroAlumno= this.filtroAlumno.filter(e => e.curso==curso.target.value);
    this.copiaCurso=this.filtroAlumno;
    console.log(this.filtroAlumno)
}
  onSelectTurno(turno){
    if(this.sw==false){
      this.copiaFiltro=this.filtroAlumno;
      this.filtroAlumno= this.filtroAlumno.filter(e => e.turno==turno.target.value);
      this.sw=true;
    console.log(this.filtroAlumno)
    }else if(this.copiaCurso!=null){
      this.filtroAlumno=this.copiaCurso;
    }else{ this.filtroAlumno=this.copiaFiltro;}
    this.filtroAlumno= this.filtroAlumno.filter(e => e.turno==turno.target.value);
    console.log(this.filtroAlumno)
  }
  onItemSelect(item: any) {
    console.log(item.nombre_completo);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  // ListarDias(){
  //   this.dataService.listarDias().subscribe(result=> this.entrevista=result);
  // }

  ListarAlumno(){
    this.dataService.AlumnoFilter().subscribe(result=> this.filtroAlumno=result);
  }
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
}
