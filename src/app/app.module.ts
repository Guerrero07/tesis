import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './vistas/Nosotros/history/history.component';
import { NuevoUsuarioComponent } from './vistas/Usuario/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './vistas/login/login.component';
import { DetallePendienteComponent } from './vistas/Comunicado/detalle-pendiente/detalle-pendiente.component';
import { AdministrarUsuarioComponent } from './vistas/Usuario/administrar-usuario/administrar-usuario.component';
import { AdministrarPersonaComponent } from './vistas/Registro/administrar-persona/administrar-persona.component';
import { PersonaComponent } from './vistas/Registro/persona/persona.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ServiceService } from './Service/service.service';
import{ NgxPaginationModule } from 'ngx-pagination';
import { ReportesComponent } from './vistas/Comunicado/reportes/reportes.component';
import { CitasComponent } from './vistas/Perfil/citas/citas.component';
import { AlunmoManagerComponent } from './vistas/Registro/alunmo-manager/alunmo-manager.component';
import { DocenteManagerComponent } from './vistas/Registro/docente-manager/docente-manager.component';
import { AdministrativoMamagerComponent } from './vistas/Registro/administrativo-mamager/administrativo-mamager.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
    AdministrarUsuarioComponent,
    PersonaComponent,
    AdministrarPersonaComponent,
    ReportesComponent,
    CitasComponent,
    AlunmoManagerComponent,
    DocenteManagerComponent,
    AdministrativoMamagerComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
