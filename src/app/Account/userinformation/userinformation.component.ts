import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, Customers } from 'src/app/Models/Account/Usser';
import { Account } from 'src/app/Services/AccountServices';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css']
})
export class UserinformationComponent implements OnInit {


  customer: Customers = {
    accountRefID: 0,
    firstName: ' ',
    lastName: ' ',
    profilePhotoTouplode: ' ',
    profilePhoto: null,
    fullName: '',
    gender: '',
    dateOfBirth: '',
    address1: '',
    address2: '',
    address3: '',
    cityRefId: 0,
    stateRefId: 0,
    countryRefId: 0,
    pinCode: 0,
    telephone1: 0,
    email1: '',
  }

  // fileForm = new FormGroup({
  //   accountRefID: new FormControl(0),
  //   profilePhotoTouplode: new FormControl(),
  //   profilePhoto: new FormControl(),
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   fullName: new FormControl(''),
  //   dateOfBirth: new FormControl(''),
  //   address1: new FormControl(''),
  //   address2: new FormControl(''),
  //   address3: new FormControl(''),
  //   cityRefId: new FormControl(0),
  //   stateRefId: new FormControl(0),
  //   countryRefId: new FormControl(0),
  //   pinCode: new FormControl(0),
  //   telephone1: new FormControl(0),
  //   email1: new FormControl('')
  // });

  number!: number

  ProfilePhotoTouplode: any
  displayProfileImageUrl = '';
  Fullname: string = "FUllName"
  constructor(private addinfor: Account, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (parameters) => {
        this.number = Number(parameters['id'])
     console.log(parameters)
      })


    this.addinfor.geutloginuser(this.number).subscribe({
      next: (user) => {
        if (user != null) {
          this.customer = user
         
        } 
        
  
        this.setImage(this.customer.profilePhoto)
     



      }
    })
  }
  
  ngOnInit(): void {

    this.route.params.subscribe(
      (parameters) => {
        this.number = Number(parameters['id'])
        console.log(this.number)
      })


    this.addinfor.geutloginuser(this.number).subscribe({
      next: (user) => {
        if (user != null) {
          this.customer = user
         
        } 
        
        console.log("oninit")
        this.setImage(this.customer.profilePhoto)
     



      }
    })
  }
  // fullnamedisplay(FirstName: String = "", lastName: String = "") {

  //   if (FirstName == "" && lastName == "") {
  //     this.fileForm.controls['fullName'].setValue("")

  //   }
  //   else {
  //     this.fileForm.controls['fullName'].setValue(FirstName + " " + lastName)
  //     this.Fullname = FirstName + " " + lastName

  //   }
  // }


  private setImage(userimage: any): void {

    if (userimage!=null) {
      this.displayProfileImageUrl = 'data:image/jpeg;base64,' + userimage;
    } else {
      // Display a default
      this.displayProfileImageUrl = '/assets/user.png';
    }
  }

  // displayvalue(user:any)
  // {
  //    this.setImage(user.profilePhoto)
  //   this.fullnamedisplay(user.firstName, user.lastName)
  //   this.fileForm.controls['accountRefID'].setValue(user.accountRefID)
  //   this.fileForm.controls['firstName'].setValue(user.firstName)
  //   this.fileForm.controls['profilePhoto'].setValue(user.profilePhoto)
  //   this.fileForm.controls['lastName'].setValue(user.lastName)
  //   this.fileForm.controls['dateOfBirth'].setValue(user.dateOfBirth)
  //   this.fileForm.controls['address1'].setValue(user.address1)
  //   this.fileForm.controls['address2'].setValue(user.address2)
  //   this.fileForm.controls['address3'].setValue(user.address3)
  //   this.fileForm.controls['cityRefId'].setValue(user.cityRefId)
  //   this.fileForm.controls['stateRefId'].setValue(user.stateRefId)
  //   this.fileForm.controls['countryRefId'].setValue(user.countryRefId)
  //   this.fileForm.controls['pinCode'].setValue(user.pinCode)
  //   this.fileForm.controls['telephone1'].setValue(user.telephone1)
  //   this.fileForm.controls['email1'].setValue(user.email1)


  // }

  handleFileInput(e: any) {
    this.customer.profilePhotoTouplode = e?.target?.files[0];
    console.log(this.customer.profilePhotoTouplode)
  }
  addAccount() {
    this.customer.accountRefID=this.number
    const formData = new FormData();
    formData.append('ProfilePhotoTouplode',this.customer.profilePhotoTouplode);
    formData.append('AccountRefID', String(this.customer.accountRefID))
    formData.append('FirstName', String(this.customer.firstName))
    formData.append('LastName', String(this.customer.lastName))
    formData.append('FullName', String(this.customer.fullName))
    formData.append('DateOfBirth', this.customer.dateOfBirth)
    formData.append('Gender', this.customer.gender)
    formData.append('Address1', String(this.customer.address1))
    formData.append('Address2', String(this.customer.address2))
    formData.append('Address3', String(this.customer.address3))
    formData.append('CityRefId', String(this.customer.cityRefId))
    formData.append('StateRefId', String(this.customer.stateRefId))
    formData.append('CountryRefId', String(this.customer.countryRefId))
    formData.append('PinCode', String(this.customer.pinCode))
    formData.append('Telephone1', String(this.customer.telephone1))
    formData.append('Email1', String(this.customer.email1))
     this.addinfor.Customer(formData).subscribe({next :(value)=>{ console.log(value)}})
  }
}
