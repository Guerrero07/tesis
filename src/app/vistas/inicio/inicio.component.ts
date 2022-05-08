import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/Model/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  rol: any = null;
  usuario: UserInterface;
  citaciones = {};
  comunicados = {};
  i: number = 0;
  c: number = 0;
  constructor(private dataService: ServiceService) {
    dataService.requestPermission().then(data=>{
      this.dataService.guardarToken(this.usuario.id_usuario, data)
      .subscribe(result=> this.usuario=result);
      console.log('el token se guardo ',data)
    })
  }

  ngOnInit(): void {
    this.dataService.receiveMessage().subscribe(payload=>{
      console.log(payload);
    })
    var role = localStorage.getItem('token');
    this.rol = role;
    this.usuario = this.dataService.getCurrentUser();
    this.listarCitacion();
    this.listarComunicados();
  }
  listarCitacion() {
    this.dataService.SolicitudPendiente(this.usuario.id_usuario)
      .subscribe(result => {
        this.citaciones = result
        this.contar(this.citaciones, 3)
      });
  }
  listarComunicados() {
    this.dataService.listarCPorCurso(this.usuario.id_usuario)
      .subscribe(result => {
        this.comunicados = result
        this.contar(this.comunicados, 2)
      });
  }
  contar(data: any, item: number) {
    let array = Object.entries(data)
    if (item == 3) {
      array.forEach((e) => {
        this.i++
      })
    } else if (item == 2) {
      array.forEach((e) => {
        this.c++
      })
    }
  }
}
