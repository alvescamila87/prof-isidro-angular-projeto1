import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilhoComponent } from "../filho/filho.component";

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [FilhoComponent],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component implements OnInit{

public valor: number = 0;
public valorRecebido: number = 0;

public constructor(private activatedRoute: ActivatedRoute){

  let p1: string;
  let p2: string;

  p1 = this.activatedRoute.snapshot.queryParams['p1'];
  p2 = this.activatedRoute.snapshot.queryParams['p2'];

  console.log("p1 = " + p1);
  console.log("p2 = " + p2);

}
  ngOnInit(): void {
  }

  public incrementa(): void {
    this.valor++;
  }

  public trataEvento(valorVindoDoFilho: number): void {
    console.log("Tratando evento recebido pelo filho = " + valorVindoDoFilho)
    this.valorRecebido = valorVindoDoFilho;
  }

}
