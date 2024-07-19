import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit{

  public mensagem: string;
  public valor = 0;
  public link_foto: string;

  public constructor(){
    //console.log("Chamando construtor....")
    this.mensagem = "Hello world!"
    this.link_foto = "/assets/ISIFLIX.png"
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //console.log("Chamando NgOnInit...")
  }

  public mudarValor(){
    this.valor++;
    this.link_foto = "/assets/ProfileSenai.png"
    console.log(this.valor);
  }
}
