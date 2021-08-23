import { Component, OnInit } from '@angular/core';
import { Moradores } from '../../../models/lista-moradores';

@Component({
  templateUrl: './moradores-page.component.html',
  styleUrls: ['./moradores-page.component.scss']
})
export class MoradoresPageComponent implements OnInit {

  moradores: Array<Moradores> = [
    {
     id: 1,
    bloco: 4,
    apartamento: 402,
    name: 'mendes'

    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
