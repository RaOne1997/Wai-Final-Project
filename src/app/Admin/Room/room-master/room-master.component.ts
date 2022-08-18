import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomModel } from 'src/app/Models/room/Roomdto';
import { RoomServicesService } from 'src/app/Services/room-services.service';

@Component({
  selector: 'app-room-master',
  templateUrl: './room-master.component.html',
  styleUrls: ['./room-master.component.css']
})
export class RoomMasterComponent implements OnInit {

  fileForm = new FormGroup({
    
    description: new FormControl(''),
    RoomNumber: new FormControl(''),
    RoomTypeRefID: new FormControl(''),
    RoomLevel: new FormControl(''),
    RoomPrice: new FormControl('')
  });

  roomModel: RoomModel[] = []
  RoomImagesUplode: any;
   flag: number=2;
  constructor(private roomService: RoomServicesService, private route: ActivatedRoute, private routers:Router,   
    private sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.roomService.GetallRoom()
      .subscribe({
        next: (rooms) => {
          this.roomModel = rooms;
          console.log(this.roomModel);
                },
        error: (response) => {
          console.log(response)
        }

      })
  }

  hideadd(flag: number) {
    this.flag = flag
  }

  handleFileInput(e: any) {
    this.RoomImagesUplode = e?.target?.files[0];
    }
  
  AddRoom() {

 
    const formData: FormData = new FormData();

    
    formData.append('RoomImagesUplode', this.RoomImagesUplode);
    formData.append('RoomNumber',String(this.fileForm.value.RoomNumber));
    formData.append('description', String(this.fileForm.value.description));
    formData.append('RoomTypeRefID', String(this.fileForm.value.RoomTypeRefID));
    formData.append('RoomLevel', String(this.fileForm.value.RoomLevel));
    formData.append('RoomPrice', String(this.fileForm.value.RoomPrice));
 
      this.roomService.Addroom(formData);



  }



  details(n:number){

    this.routers.navigate(['roomdetails',n])    
  
    
  }

}
