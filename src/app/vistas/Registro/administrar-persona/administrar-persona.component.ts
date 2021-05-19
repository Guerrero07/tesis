import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-administrar-persona',
  templateUrl: './administrar-persona.component.html',
  styleUrls: ['./administrar-persona.component.css']
})
export class AdministrarPersonaComponent implements OnInit {

  personas=null;
  navigationExtras:NavigationExtras={
    state:{
      value:null
}
  };
  constructor(
    private dataService: ServiceService,
    private router: Router) { }

  ngOnInit(): void {
   this.ListarPersona();
  }
  ListarPersona(){
    this.dataService.listarPersona().subscribe(result=> this.personas=result);
  }
  
  detalle(item:any):void{
    this.navigationExtras.state.value=item;
    this.router.navigate(['NuevoUsuario'],this.navigationExtras);
  }
}
