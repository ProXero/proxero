import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.css']
})
export class CodeInputComponent implements OnInit {

  wrongCode: boolean = false;
  @Output() codeFound: EventEmitter<void> = new EventEmitter<void>();
  codeInput: string;

  @Input() code: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value); 
    this.codeInput = f.value.code;
    this.wrongCode = f.value.code != this.code;
    if(f.value.code == this.code){
      this.codeFound.emit();
    }
  }
}
