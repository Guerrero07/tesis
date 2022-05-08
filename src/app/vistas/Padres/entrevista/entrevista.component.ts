import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from 'src/app/Model/persona';
import { UserInterface } from 'src/app/Model/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {
  usuario:UserInterface;
  hijos:PersonaInterface;
  materia=null;
  dia=null;
  clave:number;
  constructor(private dataService: ServiceService) { }

  ngOnInit(): void {
    this.usuario = this.dataService.getCurrentUser();
    this.obtenerHijos();
  }

  obtenerHijos(){
    this.dataService.getHijos(this.usuario.id_usuario)
    .subscribe(result=> this.hijos=result);
  }

  getClave(e){
this.clave=e.target.value;
console.log(this.clave)
  }
  ListarMateria(e) {
    console.log(e.target.value)
    this.dataService.listarMaterias(e.target.value)
    .subscribe(result => this.materia = result);
  }

  ListarDias(e) {
    this.dataService.listarDias(e.target.value)
    .subscribe(result => this.dia = result);
  }
}
