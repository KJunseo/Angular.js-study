import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit { 

  @Output() clickEvent = new EventEmitter();

  constructor() {

  }

  executeButton(command){
   this.clickEvent.emit(command);
  }
  
  ngOnInit() {
  }

}
