import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountcontaint',
  templateUrl: './accountcontaint.component.html',
  styleUrls: ['./accountcontaint.component.css']
})
export class AccountcontaintComponent implements OnInit {

  isLogin:Boolean=true
  constructor() { }

  ngOnInit(): void {
   
  }

  addItem(newItem: Boolean) {
    this.isLogin=newItem
  }
}
