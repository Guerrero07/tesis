import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { comunicadoInterface } from 'src/app/Model/comunicado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.css']
})
export class PendienteComponent implements OnInit {
  comunicado:comunicadoInterface
  config:any;
p:number=1;
  navigationExtras:NavigationExtras={
    state:{
      value:null
}
  };
  constructor(private dataService: ServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.ListarPendiente();

  }

  ListarPendiente(){
    this.dataService.listarPendiente().subscribe(result=> this.comunicado=result);
  }
  
  detalle(item:any):void{
    this.navigationExtras.state.value=item;
    this.router.navigate(['detallePendiente'],this.navigationExtras);
  }

}
