import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/Model/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-citacion',
  templateUrl: './citacion.component.html',
  styleUrls: ['./citacion.component.css']
})
export class CitacionComponent implements OnInit {
  usuario:UserInterface;
  citaciones=null;
  visto=null;

  date;
  constructor(private dataService: ServiceService) { }

  ngOnInit(): void {
    this.usuario = this.dataService.getCurrentUser();
    this.listarCitacion();
  }
  listarCitacion(){
    this.dataService.listarSolicitud(this.usuario.id_usuario)
    .subscribe(result=> {
      this.citaciones=result
      this.date =(this.citaciones.fecha);
      // convertir(this.date)
      console.log('npo',this.date)
    });
  }
  verCitacion(e){
    this.dataService.verCitacion(e.target.value)
    .subscribe(result=> this.visto=result);
  }

  consola(e){
    console.log('esta funcionando prros', e.target.value)
  }
}
function convertir(fecha:Date) {
//  var result = Date.toDateString();
// console.log(result);
// Creamos array con los meses del año
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Creamos array con los días de la semana
const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
// Creamos el objeto fecha instanciándolo con la clase Date
// Construimos el formato de salida
console.log(dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
}