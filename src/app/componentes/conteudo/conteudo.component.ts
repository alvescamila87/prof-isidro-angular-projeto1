import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit{

  public mensagem: string;
  public valor = 0;
  public link_foto: string;
  public textoForm: string;
  public senha: string = "";
  //public clicado: number;
  public clicado: boolean;

  public constructor(){
    //console.log("Chamando construtor....")
    this.mensagem = "Hello world!";
    this.link_foto = "/assets/ISIFLIX.png";
    this.textoForm = "";
    //this.clicado = 0;
    this.clicado = false;
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

  public enviarDados(){
    //console.log("Texto do formulario: " + this.textoForm);
    //this.textoForm = "teste1"
    console.log(this.textoForm + " / " + this.senha + " / " + this.clicado);
  }
}
