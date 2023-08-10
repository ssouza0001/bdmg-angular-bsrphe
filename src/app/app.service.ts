import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from './enums/Urls.enum';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(Urls.USUARIO);
  }
}
