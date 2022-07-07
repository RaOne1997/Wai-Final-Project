import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomModel } from 'src/app/Models/room/Roomdto';
import { RoomServicesService } from 'src/app/Services/room-services.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  fileForm = new FormGroup({
    description: new FormControl(''),
    RoomNumber: new FormControl(''),
    RoomTypeRefID: new FormControl(''),
    RoomLevel: new FormControl(''),
    RoomPrice: new FormControl('')
  });
  hideupdate:boolean=true
  hideafter:boolean=false
  RoomImagesUplode: any;
  rooms!: RoomModel

  constructor(private roomservices: RoomServicesService, private route: ActivatedRoute, private routers: Router) { }

  ngOnInit(): void {
    console.log("ngoninited")
    this.route.params.subscribe(
      (parameters) => {
        console.log('ngoninited' + parameters['id'])
        var s = this.getbyid(parameters['id'])

      })
  }
  getbyid(id: number) {

    this.roomservices.GetRoomByID(id).subscribe({
      next: (room) => {
        this.rooms = room;
        this.displayallvalue(this.rooms)
        console.log(room)
      }
    });
  }
  displayallvalue(s:RoomModel){
    this.fileForm.controls['RoomNumber'].setValue(s.roomNumber);
    this.fileForm.controls['RoomTypeRefID'].setValue(String(s.roomTypeRefID));
    this.fileForm.controls['RoomLevel'].setValue(String(s.roomLevel));
    this.fileForm.controls['RoomPrice'].setValue(String(s.roomPrice));
    this.fileForm.controls['description'].setValue(s.description);
    
  }

  gotoUpdate()
  {

    this.hideupdate=false
    this.hideafter=true
    const formData: FormData = new FormData();
    formData.append('RoomImagesUplode', this.RoomImagesUplode);
    formData.append('RoomNumber',String(this.fileForm.value.RoomNumber));
    formData.append('description', String(this.fileForm.value.description));
    formData.append('RoomTypeRefID', String(this.fileForm.value.RoomTypeRefID));
    formData.append('RoomLevel', String(this.fileForm.value.RoomLevel));
    formData.append('RoomPrice', String(this.fileForm.value.RoomPrice));
 
      this.roomservices.Addroom(formData);
  }
  goback() {

    this.routers.navigateByUrl('Room')



  }
  handleFileInput(e: any) {
    this.RoomImagesUplode = e?.target?.files[0];
  }
}
