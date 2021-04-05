import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  redirectUrl: string;
  baseUrl: string = "http://localhost:8080/tesis/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  listarUsuario(){
      return this.httpClient.get(`${this.baseUrl}/listarUsuarios.php`);
  }

  public userlogin(username, password) {
      //alert(username)
      return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
          .pipe(map(Users => {
              this.setToken(Users[0].name);
              this.getLoggedInName.emit(true);
              return Users;
          }));
  }
  // obtenerRol(){
  //     return this.httpClient.get(`${this.baseUrl}/login.php`);
  // }
  public userregistration(name, email, pwd, rol) {
      return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd, rol })
          .pipe(map(Users => {
              return Users;
          }));
  }

  //token
  setToken(token: string) {
      localStorage.setItem('token', token);
  }
  getToken() {
      return localStorage.getItem('token');
  }
  deleteToken() {
      localStorage.removeItem('token');
  }
  isLoggedIn() {
      const usertoken = this.getToken();
      if (usertoken != null) {
          return true
      }
      return false;
  }
}
