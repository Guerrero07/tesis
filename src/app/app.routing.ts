import { RouterModule } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { CircularComponent } from './vistas/Padres/circular/circular.component';
import { CitacionComponent } from './vistas/Padres/citacion/citacion.component';
import { EntrevistaComponent } from './vistas/Padres/entrevista/entrevista.component';
import { NuevoComponent } from './vistas/Comunicado/nuevo/nuevo.component';
import { DetalleComponent } from './vistas/Comunicado/detalle/detalle.component';
import { ListaComponent } from './vistas/Comunicado/lista/lista.component';
import { PendienteComponent } from './vistas/Comunicado/pendiente/pendiente.component';
import { MisionVisionComponent } from './vistas/Nosotros/mision-vision/mision-vision.component';
import { NovedadesComponent } from './vistas/novedades/novedades.component';
import { DocenteComponent } from './vistas/Nosotros/docente/docente.component';
import {HistoryComponent} from './vistas/Nosotros/history/history.component';
import { NuevoUsuarioComponent } from './vistas/Usuario/nuevo-usuario/nuevo-usuario.component';

const appRoutes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'comunicado', component: NuevoComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'circulares', component: CircularComponent},
  { path: 'citaciones', component: CitacionComponent},
  { path: 'detalles', component: DetalleComponent},
  { path: 'entrevista', component: EntrevistaComponent},
  { path: 'mision', component: MisionVisionComponent},
  { path: 'novedades', component: NovedadesComponent},
  { path: 'pendientes', component: PendienteComponent},
  { path: 'docentes', component: DocenteComponent},
  { path: 'historia', component: HistoryComponent},
  { path: 'NuevoUsuario', component: NuevoUsuarioComponent},
  
];
export const routing = RouterModule.forRoot(appRoutes);