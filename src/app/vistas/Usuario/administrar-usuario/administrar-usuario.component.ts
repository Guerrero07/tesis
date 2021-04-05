import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-administrar-usuario',
  templateUrl: './administrar-usuario.component.html',
  styleUrls: ['./administrar-usuario.component.css']
})
export class AdministrarUsuarioComponent implements OnInit {

  usuarios=null;

  user={
      id:null,
      name:null,
      email:null,
      password:null,
      rol:null
  };
  constructor(private dataService: ServiceService) { }

  ngOnInit(){
    this.ListarUsuario();
  }

  ListarUsuario(){
    this.dataService.listarUsuario().subscribe(result=> this.usuarios=result);
  }
}
