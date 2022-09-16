import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-token',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponenttoken implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Logout(){

    localStorage.removeItem('token')
    window.location.reload();
  }
}
