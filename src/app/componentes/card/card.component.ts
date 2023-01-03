import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  estado=true;

  mostrar(){
    this.estado=!this.estado;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
