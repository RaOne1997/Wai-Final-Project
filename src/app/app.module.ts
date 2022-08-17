
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ProductComponent } from './product/product.component';
import { FlightComponent } from './SearchFlight/Flight.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CityMasterComponent } from './Admin/City/city-master/city-master.component';
import { CityMasterDetailsComponent } from './Admin/City/city-master-details/city-master-details.component';
import { RoomDetailComponent } from './Admin/Room/room-detail/room-detail.component';
import { RoomMasterComponent } from './Admin/Room/room-master/room-master.component';
import { RoomMasterdetailsComponent } from './Admin/Room/room-masterdetails/room-masterdetails.component';
import { Citymasterservices } from './Services/CityMasterservices';
import { HotelMasterComponent } from './Admin/Hotel/hotel-master/hotel-master.component';
import { RoombyhotelComponent } from './Admin/Hotel/roombyhotel/roombyhotel.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { PassengerInfoComponent } from './booking-ticket/passenger-info/passenger-info.component';
import { LoginComponent } from './Account/login/login.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './Account/sign-up/sign-up.component';
import { UserinformationComponent } from './Account/userinformation/userinformation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpageComponent,
    ProductComponent,
    FlightComponent,
    AboutUsComponent,
    CityMasterComponent,
    CityMasterDetailsComponent,
    RoomMasterComponent,
    RoomMasterdetailsComponent,
    RoomDetailComponent,
    HotelMasterComponent,
    RoombyhotelComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeaderComponent,
    FooterComponent,
    BookingTicketComponent,
    PassengerInfoComponent,
    LoginComponent,
    SignUpComponent,
    UserinformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule    
       ,ReactiveFormsModule,
       BrowserAnimationsModule,
 
     ToastrModule.forRoot()

    
  
 
  ],
  providers: [Citymasterservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
