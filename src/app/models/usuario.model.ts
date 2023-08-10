export class Usuario {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;

  constructor(init?: Partial<Usuario>) {
    if (init) {
      Object.assign(this, init);
    } else {
      this.cep = '';
      this.logradouro = '';
      this.complemento = '';
      this.bairro = '';
      this.localidade = '';
      this.uf = '';
      this.ibge = '';
      this.gia = '';
      this.ddd = '';
      this.siafi = '';
    }
  }
}
