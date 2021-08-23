import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  pipeum = new Date('2021-08-19')

  constructor() { }

  ngOnInit(): void {
  }

}
