import { Component, OnInit } from '@angular/core';
import { PostService } from '../../servicos/post.service';
import { Post } from '../../model/Post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component implements OnInit {

  public lista: Post[];

  public constructor(private service: PostService){
    this.lista = [];
  }
  ngOnInit(): void {
    this.service.consumirPosts().subscribe({
      next: (res: Post[]) => {
        console.log("Sucesso!");
        //console.log(res);
        this.lista = res;
      },
      error: (err: any) => {
        console.log("ERRO");
        console.log(err);
      }
    })
  }

  public enviarDados(): void{
    let postagem: Post = new Post();
    postagem.body = "Teste da Camila tentando fazer a comunicacao com o JSONPlaceHolder";
    postagem.title = "Teste da Camila"
    postagem.userId = 1;

    this.service.adicionarPost(postagem).subscribe({
      next: (res: Post) => {
        console.log("Post adicionado!");
        console.log(res);
      },
      error: (err: any) => {
        console.log("Erro ao adicionar postagem!");
        console.log(err);
      }
    })
  }

}
