import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component implements OnInit{

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

}
