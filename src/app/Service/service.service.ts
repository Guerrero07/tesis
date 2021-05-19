import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from "../Model/user";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  redirectUrl: string;
  baseUrl: string = "http://localhost/tesis/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  
  listarPersona(){
    return this.httpClient.get(`${this.baseUrl}/listarPersonas.php`);
}

  public personaRegister(nombre, paterno, materno, telefono) {
    return this.httpClient.post<any>(this.baseUrl + '/persona.php', { nombre, paterno, materno, telefono})
        .pipe(map(Person => {
            return Person;
        }));
}

  listarUsuario(){
      return this.httpClient.get(`${this.baseUrl}/listarUsuarios.php`);
  }

  public userlogin(email, password) {
      return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
          .pipe(map(Users => {
              this.setToken(Users[0].name);
              this.getLoggedInName.emit(true);
              return Users;
          }));
  }

  public userregistration(id, username, email, pwd, rol, entrevista, identrevista) {
      return this.httpClient.post<any>(this.baseUrl + '/register.php', {id, username, email, pwd, rol, entrevista, identrevista })
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
    if(typeof user_string != 'undefined') {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
  //token
  setToken(token): void{
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

