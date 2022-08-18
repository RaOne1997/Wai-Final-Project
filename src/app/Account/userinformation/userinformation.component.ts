import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/Models/Account/Usser';
import { Account } from 'src/app/Services/AccountServices';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css']
})
export class UserinformationComponent implements OnInit {

  fileForm = new FormGroup({
    accountRefID: new FormControl(0),
    profilePhotoTouplode:new FormControl(),
    profilePhoto:new FormControl(),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    fullName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    address3: new FormControl(''),
    cityRefId: new FormControl(0),
    stateRefId: new FormControl(0),
    countryRefId: new FormControl(0),
    pinCode: new FormControl(0),
    telephone1: new FormControl(0),
    email1: new FormControl('')
  });


  ProfilePhotoTouplode: any

  Fullname: string = "FUllName"
  constructor(private addinfor: Account) {
    debugger
    let a =  sessionStorage.getItem('data')
    if(a!=null)

    this.fileForm.controls['accountRefID'].setValue(Number(a))


  }


  ngOnInit(): void {



  }
  fullnamedisplay(FirstName: String = "", lastName: String = "") {

    if (FirstName == "" && lastName == "") {
      this.fileForm.controls['fullName'].setValue("")

    }
    else {
      this.fileForm.controls['fullName'].setValue(FirstName + " " + lastName)
      this.Fullname = FirstName + " " + lastName

    }
  }


  handleFileInput(e: any) {
    this.ProfilePhotoTouplode = e?.target?.files[0];
    console.log(this.ProfilePhotoTouplode)
  }
  addAccount() {
     const formData: FormData = new FormData();
     formData.append('ProfilePhotoTouplode', this.ProfilePhotoTouplode);
     formData.append('AccountRefID', String(this.fileForm.value.accountRefID))
     formData.append('FirstName', String(this.fileForm.value.firstName))
     formData.append('LastName', String(this.fileForm.value.lastName))
     formData.append('FullName', String(this.fileForm.value.fullName))
     formData.append('DateOfBirth', String(this.fileForm.value.dateOfBirth))
     formData.append('Address1', String(this.fileForm.value.address1))
     formData.append('Address2', String(this.fileForm.value.address2))
     formData.append('Address3', String(this.fileForm.value.address3))
     formData.append('CityRefId', String(this.fileForm.value.cityRefId))
     formData.append('StateRefId', String(this.fileForm.value.stateRefId))
     formData.append('CountryRefId', String(this.fileForm.value.countryRefId))
     formData.append('PinCode', String(this.fileForm.value.pinCode))
     formData.append('Telephone1', String(this.fileForm.value.telephone1))
     formData.append('Email1', String(this.fileForm.value.email1))
   
     this.addinfor.Customer(formData);
  }
}
