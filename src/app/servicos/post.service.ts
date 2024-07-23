import { Post } from './../model/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // aqui vao os metodos de consumo da API

  public consumirPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }

  public adicionarPost(postagem : Post): Observable<Post> {
    // tem todos os metodos que precisar usar nas APIs Http
    //this.http.put
    //this.http.delete
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts", postagem);
  }


}
