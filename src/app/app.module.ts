import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ProductComponent } from './product/product.component';
import { CarrersComponent } from './carrers/carrers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CityMasterComponent } from './Admin/City/city-master/city-master.component';
import { CityMasterDetailsComponent } from './Admin/City/city-master-details/city-master-details.component';
import { RoomDetailComponent } from './Admin/Room/room-detail/room-detail.component';
import { RoomMasterComponent } from './Admin/Room/room-master/room-master.component';
import { RoomMasterdetailsComponent } from './Admin/Room/room-masterdetails/room-masterdetails.component';
import { Citymasterservices } from './Services/CityMasterservices';
import { HotelMasterComponent } from './Admin/Hotel/hotel-master/hotel-master.component';
import { RoombyhotelComponent } from './Admin/Hotel/roombyhotel/roombyhotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpageComponent,
    ProductComponent,
    CarrersComponent,
    AboutUsComponent,
    CityMasterComponent,
    CityMasterDetailsComponent,
    RoomMasterComponent,
    RoomMasterdetailsComponent,
    RoomDetailComponent,
    HotelMasterComponent,
    RoombyhotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    FormsModule,ReactiveFormsModule,
    NgxPaginationModule
  
 
  ],
  providers: [Citymasterservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
