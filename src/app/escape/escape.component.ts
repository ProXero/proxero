import { Component, OnInit, ViewChild } from '@angular/core';
import {MatVerticalStepper} from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.css']
})


export class EscapeComponent implements OnInit {
  @ViewChild('stepper') stepper: MatVerticalStepper;

  code: string = "1234";
  codeInput: string = "";
  tabSelectedIndex: number;
  pointsCollection = [];

  step0Complete: boolean;
  step1Complete: boolean;
  step2Complete: boolean;
  step3Complete: boolean;
  step4Complete: boolean;
  step5Complete: boolean;

  constructor() { }

  ngOnInit() {
    // 54 x 15 bal felső
    // 161 x 128
    // 107 x 113    26x30   4,28   3,9
    //  11x11    18x14   8x25

    // 3
    this.pointsCollection = [
      // 3
      [{x: 11, y: 11},{x: 18, y: 14},{x: 8, y: 25}],
      // 6
      [{x: 1, y: 7},{x: 8, y: 28},{x: 14, y: 12}, {x: 23,y: 19}],
      // 4
      [{x: 8, y: 22},{x: 20, y: 7},{x: 26, y: 2}, {x:21, y:29}, {x:12, y:6}],
      // 8
      [{x: 1, y: 27},{x: 2, y: 26},{x: 3, y: 25}, {x:4,y:26}, {x: 5,y:27}]
    ];
  }

  code0Found(){
    this.step0Complete = true;
  }
  code1Found(){
    this.step1Complete = true;
  }
  code2Found(){
    this.step2Complete = true;
  }
  code3Found(){
    this.step3Complete = true;
  }
  code4Found(){
    this.step4Complete = true;
  }
  code5Found(){
    this.step5Complete = true;
  }

  startGame(){
    this.tabSelectedIndex = 0;
    this.tabSelectedIndex = 1;
  }
}
