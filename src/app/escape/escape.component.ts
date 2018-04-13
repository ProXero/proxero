import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.css']
})
export class EscapeComponent implements OnInit {

  step1Complete: boolean;

  constructor() { }

  ngOnInit() {
  }

  ready(){
    this.step1Complete = true;
  }
}
