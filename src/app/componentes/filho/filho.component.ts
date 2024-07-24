import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent implements OnInit {

  // recebe informacao de pai atraves de valorFilho atraves de property binding
@Input() public valorFilho: number = 0;

// informacao do filho para o pai
@Output() public eventoFilho: EventEmitter<number> = new EventEmitter<number>();

public outroValor: number = 0;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  public mudaValorFilho(): void {
    this.outroValor += 10;
    //$event do component1 (pai) recebe esse valor emitido do filho
    this.eventoFilho.emit(this.outroValor);
  }

}
