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
    this.service.getUsuario().subscribe({
      next: (u: Usuario) => {
        this.formUsuario.value.cep = u.cep;
        this.formUsuario.value.logradouro = u.logradouro;
        this.formUsuario.value.complemento = u.complemento;
        this.formUsuario.value.bairro = u.bairro;
        this.formUsuario.value.localidade = u.localidade;
        this.formUsuario.value.uf = u.uf;
        this.formUsuario.value.ibge = u.ibge;
        this.formUsuario.value.gia = u.gia;
        this.formUsuario.value.ddd = u.ddd;
        this.formUsuario.value.siafi = u.siafi;
      },
      error: (e) => {
        console.log(e);
      },
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
  }

  onSubmit() {
    console.log(this.formUsuario.value);
  }
}
