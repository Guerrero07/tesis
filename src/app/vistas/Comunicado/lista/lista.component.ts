import { Component, OnInit} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { comunicadoInterface } from 'src/app/Model/comunicado';
import { ServiceService } from 'src/app/Service/service.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-lista',
  templateUrl:'./lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
comunicado:comunicadoInterface
p:number=1;
  navigationExtras:NavigationExtras={
    state:{
      value:null
}
  };
  constructor(
    private dataService: ServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.ListarComunicado();
  }
  // exportExcel(data:any[]):void{
  //   this.dataService.exportToExcel(data,'my_export');
  // }
  ListarComunicado(){
    this.dataService.listarComunicado().subscribe(result=> this.comunicado=result);
  }
  
  detalle(item:any):void{
    this.navigationExtras.state.value=item;
    this.router.navigate(['detalles'],this.navigationExtras);
  }
  obtenerDatos():void{
    let materiales = [];
    document.querySelectorAll('.table tbody tr').forEach(function(e){
      let fila = {
        tipo: e.querySelector('.tipo').textContent,
        origen: e.querySelector('.origen').textContent,
        varios: e.querySelector('.varios').textContent,
        publicacion: e.querySelector('.publicacion').textContent,
        evento: e.querySelector('.evento').textContent
      };
      materiales.push(fila);
    });
    // this.exportExcel(materiales);
    // console.log(materiales);
  }


  getPDF(){
    const doc = new jsPDF()
autoTable(doc, { html: '#tablaReport' })
doc.save('table.pdf')
  }
 
}
