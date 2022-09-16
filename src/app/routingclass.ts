// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { UserinformationComponent } from './Account/userinformation/userinformation.component';
// import { CityMasterDetailsComponent } from './Admin/City/city-master-details/city-master-details.component';
// import { CityMasterComponent } from './Admin/City/city-master/city-master.component';
// import { HotelMasterComponent } from './Admin/Hotel/hotel-master/hotel-master.component';
// import { RoombyhotelComponent } from './Admin/Hotel/roombyhotel/roombyhotel.component';
// import { RoomDetailComponent } from './Admin/Room/room-detail/room-detail.component';
// import { RoomMasterComponent } from './Admin/Room/room-master/room-master.component';
// import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
// import { PassengerInfoComponent } from './booking-ticket/passenger-info/passenger-info.component';
// import { ContactpageComponent } from './contactpage/contactpage.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { FlightComponent } from './SearchFlight/Flight.component';

// @NgModule({
//     imports: [

//         RouterModule.forRoot([
//             { path: '', component: HomepageComponent },
//             { path: 'home', component: HomepageComponent },
//             { path: 'ContactUs', component: ContactpageComponent },
//             { path: 'Flight', component: FlightComponent },
//             {
//                 path: 'CityMaster', component: CityMasterComponent, children: [
//                     { path: 'detail/:id', component: CityMasterDetailsComponent }
//                 ],
//             },
//             { path: 'Room', component: RoomMasterComponent },
//             {
//                 path: 'roomdetails/:id',
//                 component: RoomDetailComponent
//             },
//             {
//                 path: 'Hotel',
//                 component: HotelMasterComponent
//             },
//             {
//                 path: 'Roombyhotel',
//                 component: RoombyhotelComponent
//             },
//             {
//                 path: 'FlightBooking/:ID',
//                 component: PassengerInfoComponent
//             },
//             {
//                 path: 'BookingTicket/:id',
//                 component: BookingTicketComponent
//             },
//             {
//                 path: 'Creating/:id',
//                 component: UserinformationComponent
//             },
//             // { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule), canActivate: [AuthGuard] },
//             { path: 'authentication', loadChildren: () => import('./Account/loginnagivation').then(m => m.AuthenticationModule) }
//             // { path: 'privacy', component: PrivacyComponent, canActivate: [AuthGuard, AuthGuard] },
//             // { path: '404', component : NotFoundComponent},
//             // { path: 'forbidden', component: ForbiddenComponent },
//             // { path: '', redirectTo: '/home', pathMatch: 'full' },
//             // { path: '**', redirectTo: '/404', pathMatch: 'full'}
//         ]),
        
//     ],
//     exports: [RouterModule],
// })
// export class routingmodel { }