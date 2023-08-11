import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './app.local-storage.service';
import { Urls } from './enums/Urls.enum';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  mensagem!: string;
  usuario: Usuario;
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  _getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(Urls.USUARIO);
  }

  salvaUsuario(usuario: Usuario): Observable<string> {
    this.storage.set(usuario).subscribe({
      next: () => {
        this.mensagem = 'Salvo com sucesso!';
      },
      error: () => {},
    });
    return of(this.mensagem);
  }

  retornaUsuarioStorage(): Observable<Usuario> {
    this.storage.get('usuario').subscribe({
      next: (u) => {
        this.usuario = u;
      },
      error: (e) => {
        return of(e);
      },
    });
    return of(this.usuario);
  }
}
