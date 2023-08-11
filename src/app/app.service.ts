import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  salvaUsuario(usuario: Usuario): Observable<string> {
    let mensagem = 'Salvo com sucesso!';
    return of(mensagem);
  }
}
