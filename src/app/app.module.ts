import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { NovedadesComponent } from './vistas/novedades/novedades.component';
import { MisionVisionComponent } from './vistas/Nosotros/mision-vision/mision-vision.component';
import { DocenteComponent } from './vistas/Nosotros/docente/docente.component';
import { EntrevistaComponent } from './vistas/Padres/entrevista/entrevista.component';
import { CitacionComponent } from './vistas/Padres/citacion/citacion.component';
import { CircularComponent } from './vistas/Padres/circular/circular.component';
import { NuevoComponent } from './vistas/Comunicado/nuevo/nuevo.component';
import { PendienteComponent } from './vistas/Comunicado/pendiente/pendiente.component';
import { ListaComponent } from './vistas/Comunicado/lista/lista.component';
import { DetalleComponent } from './vistas/Comunicado/detalle/detalle.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './vistas/Nosotros/history/history.component';
import { NuevoUsuarioComponent } from './vistas/Usuario/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './vistas/login/login.component';
import { DetallePendienteComponent } from './vistas/Comunicado/detalle-pendiente/detalle-pendiente.component';
import { AdministrarUsuarioComponent } from './vistas/Usuario/administrar-usuario/administrar-usuario.component';


import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EntrevistaComponent,
    DocenteComponent,
    CitacionComponent,
    CircularComponent,
    ListaComponent,
    MisionVisionComponent,
    NovedadesComponent,
    NuevoComponent,
    PendienteComponent,
    DetalleComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    NuevoUsuarioComponent,
    LoginComponent,
    DetallePendienteComponent,
    AdministrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
