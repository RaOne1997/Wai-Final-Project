import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regristration',
  templateUrl: './regristration.component.html',
  styleUrls: ['./regristration.component.css']
})
export class RegristrationComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  log(value:Boolean){
    this.newItemEvent.emit(value);
  }
 
}
