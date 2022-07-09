import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roombyhotel',
  templateUrl: './roombyhotel.component.html',
  styleUrls: ['./roombyhotel.component.css']
})
export class RoombyhotelComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  backtohotel(){
    this.router.navigateByUrl('Hotel')
  
  }
}


