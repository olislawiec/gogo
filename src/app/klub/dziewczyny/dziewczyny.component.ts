import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dziewczyny',
  templateUrl: './dziewczyny.component.html',
  styleUrls: ['./dziewczyny.component.css']
})
export class DziewczynyComponent implements OnInit {
  kobieta = {
    imie: 'Joanna',
    zdjecie: '/assets/women1.jpg',
    wiek: 18,
    wolna: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
