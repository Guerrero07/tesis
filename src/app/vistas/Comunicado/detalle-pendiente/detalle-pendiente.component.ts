import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { comunicadoInterface } from 'src/app/Model/comunicado';
import { UserInterface } from 'src/app/Model/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-detalle-pendiente',
  templateUrl: './detalle-pendiente.component.html',
  styleUrls: ['./detalle-pendiente.component.css']
})
export class DetallePendienteComponent implements OnInit {

  user:UserInterface
  detalle:comunicadoInterface
  conumicado:FormGroup
  today=new Date();
  date='';

  navigationExtras:NavigationExtras={
    state:{
      value:null
}
  };
  constructor(private fb: FormBuilder,
    private dataService: ServiceService,
    private router: Router) {
      const navigation= this.router.getCurrentNavigation();
      this.detalle = navigation?.extras?.state?.value;
      this.date=formatDate(this.today,'yyyy-MM-dd','en-US');
     }

  ngOnInit(): void {
    if(typeof this.detalle === 'undefined'){
      this.router.navigate(['pendientes']);
    }

    this.user = this.dataService.getCurrentUser();

    this.conumicado=this.fb.group({
      id: this.detalle.id,
      fechap:this.date,
      fechae:[this.detalle.fecha_Evento,[Validators.required]],
      horae: [this.detalle.hora_Evento,[Validators.required]],
      descripcion: [this.detalle.detalle,[Validators.required]],
      verificador:this.user.id_usuario
      });
  }
updateComunicado(form){
  this.dataService.comunicadoUpdate(
    form.value.id,
    form.value.fechap,
    form.value.fechae,
    form.value.horae,
    form.value.descripcion,
    form.value.verificador)
    .pipe(first())
    .subscribe(
    data => { 
     this.router.navigate(['lista']);
      console.log("datos enviados",data)
    },
    error => {
     alert('Ha ocurrido un error al insertar')
    });
   }
}
