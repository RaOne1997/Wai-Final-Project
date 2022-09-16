import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CityMasterDetailsComponent } from './Admin/City/city-master-details/city-master-details.component';
import { CityMasterComponent } from './Admin/City/city-master/city-master.component';
import { HotelMasterComponent } from './Admin/Hotel/hotel-master/hotel-master.component';
import { RoombyhotelComponent } from './Admin/Hotel/roombyhotel/roombyhotel.component';
import { RoomDetailComponent } from './Admin/Room/room-detail/room-detail.component';
import { RoomMasterComponent } from './Admin/Room/room-master/room-master.component';
import { FlightComponent } from './SearchFlight/Flight.component';




import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { PassengerInfoComponent } from './booking-ticket/passenger-info/passenger-info.component';
import { UserinformationComponent } from './Account/userinformation/userinformation.component';
import { UserComponent } from './tokenauth/user/user.component';
import { LoginComponenttokde } from './tokenauth/login/login.component';
import { RegristrationComponent } from './tokenauth/regristration/regristration.component';
import { HomeComponenttoken } from './tokenauth/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AccountcontaintComponent } from './tokenauth/accountcontaint/accountcontaint.component';


const routes: Routes = [

  {path:'',redirectTo:'/user/provi',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegristrationComponent },
      { path: 'login', component: LoginComponenttokde },
      {path:'provi',component:AccountcontaintComponent}
    ]
  },

{path:'Home',component:HomeComponenttoken,canActivate:[AuthGuard]}



  // {
  //   path:'aa',
  //   component:HomepageComponent
  // },

  // {
  //   path:'ContactUs',
  //   component:ContactpageComponent
  // },
  // {
  //   path:'Product',
  //   component:ProductComponent
  // },
  // {
  //   path:'AboutUs',
  //   component:AboutUsComponent
  // },
  // {
  //   path:'Flight',
  //   component:FlightComponent
  // },
  // {
  //   path:'CityMaster',
  //   component:CityMasterComponent , children: [
  //     { path: 'detail/:id', component: CityMasterDetailsComponent }
  //  ],
  // },
  // {
  //   path:'Room',
  //   component:RoomMasterComponent 
   
  // },
  // {
  //   path:'roomdetails/:id',
  //   component:RoomDetailComponent
  // },
  // {
  //   path:'Hotel',
  //   component:HotelMasterComponent
  // },
  // {
  //   path:'Roombyhotel',
  //   component:RoombyhotelComponent
  // },
  // {
  //   path:'FlightBooking/:ID',
  //   component:PassengerInfoComponent
  // },
  // {
  //   path:'BookingTicket',
  //   component:BookingTicketComponent
  // },
  // {
  //   path:'Creating/:id',
  //   component:UserinformationComponent
  // }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
