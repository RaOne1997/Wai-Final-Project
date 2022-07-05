import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RoomServicesService } from 'src/app/Services/room-services.service';

@Component({
  selector: 'app-room-master',
  templateUrl: './room-master.component.html',
  styleUrls: ['./room-master.component.css']
})
export class RoomMasterComponent implements OnInit {

  Rooms:any;
  thumbnail:any
  constructor(private roomService: RoomServicesService, private route: ActivatedRoute,private sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.roomService.GetallRoom()
      .subscribe({
        next: (rooms) => {
          this.Rooms = rooms;
          console.log(this.Rooms);
          
          let objectURL = 'data:image/png;base64,' + this.Rooms.roomImage;
  this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  console.log(this.thumbnail)

      
        },
        error: (response) => {
          console.log(response)
        }

      })
  }



}
