import { Component, OnInit } from '@angular/core';
import { comunicadoInterface } from 'src/app/Model/comunicado';
import { UserInterface } from 'src/app/Model/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
  usuario:UserInterface;
  comunicado:comunicadoInterface;
  constructor( private dataService: ServiceService) {
   }
  ngOnInit(): void {
    this.usuario = this.dataService.getCurrentUser();
    this.ListarComunicado();
  }
  ListarComunicado(){
    this.dataService.listarCPorCurso(this.usuario.id_usuario)
    .subscribe(result=> this.comunicado=result);
  }
}
