import { Component, OnInit } from '@angular/core';
import { PostService } from '../../servicos/post.service';
import { Post } from '../../model/Post';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component implements OnInit {

  public loading: boolean;

  public lista: Post[];

  public constructor(private service: PostService){
    this.lista = [];
    this.loading = false;
  }
  ngOnInit(): void {
    this.loading = true;
    this.service.consumirPosts().subscribe({
      next: (res: Post[]) => {
        console.log("Sucesso!");
        //console.log(res);
        this.lista = res;
        this.loading = false;
      },
      error: (err: any) => {
        console.log("ERRO");
        console.log(err);
        this.loading = false;
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
