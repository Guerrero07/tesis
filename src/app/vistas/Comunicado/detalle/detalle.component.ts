import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { comunicadoInterface } from 'src/app/Model/comunicado';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalle:comunicadoInterface;
  navigationExtras:NavigationExtras={
    state:{
      value:null
}
  };
  constructor(private router: Router) {
      const navigation= this.router.getCurrentNavigation();
      this.detalle = navigation?.extras?.state?.value;
     }

  ngOnInit(): void {
       if(typeof this.detalle === 'undefined'){
      this.router.navigate(['lista']);
    }
  }
}
