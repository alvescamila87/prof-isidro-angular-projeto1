import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rotacustom',
  standalone: true,
  imports: [],
  templateUrl: './rotacustom.component.html',
  styleUrl: './rotacustom.component.css'
})
export class RotacustomComponent implements OnInit{

  public idRecebidoUrl: string = "";

  public constructor(private activatedRoute: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    this.idRecebidoUrl = this.activatedRoute.snapshot.params["id"];
    console.log("ID Recebido URL: " + this.idRecebidoUrl)
  }

  public navegar(): void{
    this.router.navigate(['/link3']);
  }

}
