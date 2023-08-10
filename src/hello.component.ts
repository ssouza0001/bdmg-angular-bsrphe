import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<mat-accordion>
  <mat-expansion-panel
    (opened)="panelOpenState = true"
    (closed)="panelOpenState = false"
  >
    <mat-expansion-panel-header>
      <mat-panel-title>  Para começar leia atentamente as instruções a seguir: </mat-panel-title>
      <mat-panel-description>
       Leia-me
      </mat-panel-description>
    </mat-expansion-panel-header>
    <ol>
    <li>
    Primeiramente, dê fork nesse projeto para sua conta git hub.
  </li>
    <li>
      Veja a estrutura de pastas e utilize os arquivos da pasta app.
    </li>
    <li>
      Seguindo o padrão MVCS, faça a requisição GET da API:
      https://viacep.com.br/ws/30160907/json/
    </li>
    <li>
      Com o dado objeto, construa um formulário em que todos os campos possam ser
      editados, exceto: 'ibge' e 'siafi'.
    </li>
    <li>Encontre uma solução de máscara para o campo 'cep', seguindo o padrão 00000-000;</li>
    <li>Encontre uma solução de máscara para o campo 'complemento', seguindo o padrão de milhar: 0.000;</li>
    <li>Construa o método/função que salve as alterações no localstorage;</li>
    <li>Utilize o Angular Material para facilitar o desenvolvimento: https://material.angular.io/</li>
    <li>Caso necessite, guie-se pela documentação do Angular: https://angular.io/</li>

  
  </ol>
  
  <div>Dúvidas? Entre em contato comigo https://www.linkedin.com/in/klauber-freitas/ </div>

  </mat-expansion-panel>
</mat-accordion>
`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  panelOpenState: boolean;
  @Input() name: string;
}
