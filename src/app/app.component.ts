import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { ConteudoComponent } from "./componentes/conteudo/conteudo.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, ConteudoComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'isiFlix';
}
