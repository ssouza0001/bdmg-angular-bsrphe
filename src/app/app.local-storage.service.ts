import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storage: any;
  usuario: Usuario;
  constructor() {
    this.storage = window.localStorage;
  }

  set(value: Usuario): Observable<boolean> {
    if (this.storage) {
      return of(this.storage.setItem('usuario', JSON.stringify(value)));
    } else {
      return of(false);
    }
  }
  get(key: string): Observable<Usuario> {
    if (this.storage) {
      this.usuario = JSON.parse(this.storage.getItem(key));
    }
    return of(this.usuario);
  }
}
