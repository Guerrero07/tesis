import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from "../Model/user";
import { Observable } from 'rxjs';
import firebase from 'firebase'
import { environment } from 'src/environments/environment';
// import * as FileSaver from 'file-saver';
// import * as XLXS from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT = '.xlsx';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  redirectUrl='';
  messagingFirebase: firebase.messaging.Messaging;
  enableBackground:boolean=true;
  baseUrl: string = "http://localhost/tesis/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    firebase.initializeApp(environment.firebaseConfig)
    this.messagingFirebase = firebase.messaging();
  }
  //   exportToExcel(json:any[],excelFileName:string):void{
  //     const worksheet:XLXS.WorkSheet=XLXS.utils.json_to_sheet(json);
  //     const workbook:XLXS.WorkBook={Sheets:{'data':worksheet},
  //   SheetNames:['data']
  //   };
  //   const excelBuffer: any=XLXS.write(workbook,{bookType:'xlsx', type:'array'});
  //   this.saveAsExcel(excelBuffer,excelFileName);
  // }
  // private saveAsExcel(buffer:any,fileName:string):void{
  //   const data:Blob=new Blob([buffer],{type:EXCEL_TYPE});
  //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
  // };

  
  requestPermission() {
    return new Promise(async (resolve, reject) => {
      const permiss = await Notification.requestPermission();
      if (permiss === "granted") {
        const tokenFirebase = await this.messagingFirebase.getToken();
        resolve(tokenFirebase);
      }else reject(new Error("no se obtubieron los permisos"))
    })
  }
private messagingObservable=new Observable(observe=>{
  this.messagingFirebase.onMessage(payload=>{
    // observe.next(payload);
    console.log('mensaje recibido', payload);
    if(this.enableBackground){
      const {title,...options}=JSON.parse(payload.data.notification)
      navigator.serviceWorker.getRegistration().then(registration=>
        registration[0].showNotification(title,options))
    }
  })
})
receiveMessage(){
  return this.messagingObservable;
}
guardarToken(codigo: number, token:any) {
  return this.httpClient.post<any>(this.baseUrl+'/guardarToken.php',{codigo, token})
  .pipe(map(usu => {
    return usu;
  }));
}
  listarPersona() {
    return this.httpClient.get(`${this.baseUrl}/listarPersonas.php`);
  }
  listarAlumno() {
    return this.httpClient.get(`${this.baseUrl}/listarAlumno.php`);
  }
  listarDocente() {
    return this.httpClient.get(`${this.baseUrl}/listarDocente.php`);
  }
  AlumnoFilter() {
    return this.httpClient.get(`${this.baseUrl}/AlumnosFilter.php`);
  }
  listarMaterias(codigo) {
    return this.httpClient.post<any>(this.baseUrl+'/listarMaterias.php',{codigo})
    .pipe(map(mateia => {
      return mateia;
    }));
  }
  getHijos(codigo) {
    return this.httpClient.post<any>(this.baseUrl+'/mostrarHijos.php',{codigo})
    .pipe(map(hijo => {
      return hijo;
    }));
  }
  public personaRegister(nombre, paterno, materno, telefono) {
    return this.httpClient.post<any>(this.baseUrl + '/persona.php', { nombre, paterno, materno, telefono })
      .pipe(map(Person => {
        return Person;
      }));
  }
  public solicitudRegister(origen, destinatario, fecha, hora, detalle) {
    return this.httpClient.post<any>(this.baseUrl + '/solicitud.php', { origen, destinatario, fecha, hora, detalle })
      .pipe(map(solicitud => {
        return solicitud;
      }));
  }
  public alumnoRegister(ci, nombre, paterno, materno, telefono, nivel, curso, turno) {
    return this.httpClient.post<any>(this.baseUrl + '/alumno.php', { ci, nombre, paterno, materno, telefono, nivel, curso, turno })
      .pipe(map(alumno => {
        return alumno;
      }));
  }
  tutorRegister(nombre, paterno, materno, telefono, tipo, alumno) {
    return this.httpClient.post<any>(this.baseUrl + '/tutor.php', { nombre, paterno, materno, telefono, tipo, alumno })
      .pipe(map(tutor => {
        return tutor;
      }));
    }
  listarComunicado() {
    return this.httpClient.get(`${this.baseUrl}/listarComunicado.php`);
  }
  listarCPorCurso(codigo) {
    return this.httpClient.post<any>(this.baseUrl+'/listarCPorCurso.php',{codigo})
    .pipe(map(Comun => {
      return Comun;
    }));
  }
  listarSolicitud(codigo) {
    return this.httpClient.post<any>(this.baseUrl+'/listarSolicitud.php',{codigo})
    .pipe(map(soli => {
      return soli;
    }));
  }
  SolicitudPendiente(codigo) {
    return this.httpClient.post<any>(this.baseUrl+'/solicitudesPendientes.php',{codigo})
    .pipe(map(soli => {
      return soli;
    }));
  }
  verCitacion(codigo) {
    return this.httpClient.post<any>(this.baseUrl+'/verCitacion.php',{codigo})
    .pipe(map(cita => {
      return cita;
    }));
  }

  listarPendiente() {
    return this.httpClient.get(`${this.baseUrl}/listaCPendiente.php`);
  }
  comunicadoRegister(tipo, origen, fechap, fechae, horae, descripcion, redactor, nivel, turno, curso ) {
    return this.httpClient.post<any>(this.baseUrl+'/comunicado.php', { tipo, origen, fechap, fechae, horae, descripcion, redactor, nivel, turno, curso })
      .pipe(map(Comun => {
        return Comun;
      }));
  }

  comunicadoUpdate(id, fechap, fechae, horae, descripcion, verificador) {
    return this.httpClient.post<any>(this.baseUrl + '/publicarComunicado.php', { id, fechap, fechae, horae, descripcion, verificador })
      .pipe(map(Comun => {
        return Comun;
      }));
  }

  listarUsuario() {
    return this.httpClient.get(`${this.baseUrl}/listarUsuarios.php`);
  }
  listarDias(codigo) {
    return this.httpClient.post<any>(this.baseUrl +'/listarDias.php', { codigo })
    .pipe(map(dia => {
      return dia;
    }));
  }
  public entrevistaRegister(user, dia, hora) {
    return this.httpClient.post<any>(this.baseUrl +'/entrevista.php', { user, dia, hora })
      .pipe(map(entrevista => {
        return entrevista;
      }));
  }
  public userlogin(email, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  public userregistration(id, username, email, pwd, rol, entrevista) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { id, username, email, pwd, rol, entrevista })
      .pipe(map(Users => {
        return Users;

      }));
  }

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }
  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (typeof user_string != 'undefined') {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
  //token
  setToken(token): void {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}

