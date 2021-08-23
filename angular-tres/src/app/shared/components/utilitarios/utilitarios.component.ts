import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilitarios',
  templateUrl: './utilitarios.component.html',
  styleUrls: ['./utilitarios.component.scss']
})
export class UtilitariosComponent implements OnInit {
  
  title = 'Interpolação de utilitários';
  valor = 100;
  interpolacao2?: string;

  click(){
    alert('Você clicou no botão');
  }

 // cursorsobrebotao(){
  //  alert('Para acessar, clique sobre o link');
 // }

  constructor() { }

  ngOnInit(): void {
  }

}
