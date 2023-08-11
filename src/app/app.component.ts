import { Component, OnInit, VERSION } from '@angular/core';
import { AppService } from './app.service';
import { Usuario } from './models/usuario.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  usuario: Usuario;
  formUsuario: FormGroup;

  constructor(private service: AppService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm(new Usuario());
    this.service._getUsuario().subscribe({
      next: (u: Usuario) => {
        this.usuario = u;
        this.createForm(this.usuario);
      },
      error: () => {},
    });
  }

  createForm(usuario: Usuario) {
    this.formUsuario = this.formBuilder.group({
      cep: [usuario.cep],
      logradouro: [usuario.logradouro],
      complemento: [usuario.complemento],
      bairro: [usuario.bairro],
      localidade: [usuario.localidade],
      uf: [usuario.uf],
      ibge: [usuario.ibge],
      gia: [usuario.gia],
      ddd: [usuario.ddd],
      siafi: [usuario.siafi],
    });
    this.formUsuario.controls['ibge'].disable();
    this.formUsuario.controls['siafi'].disable();
  }

  onSubmit() {
    this.service.salvaUsuario(this.formUsuario.value).subscribe({
      next: (e) => {
        console.log(e);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  retornaUsuarioStorage() {
    this.service.retornaUsuarioStorage().subscribe({
      next: (e: any) => {
        console.log(e);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
