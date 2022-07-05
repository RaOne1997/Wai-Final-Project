import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ProductComponent } from './product/product.component';
import { CarrersComponent } from './carrers/carrers.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { CityMasterDetailsComponent } from './City/city-master-details/city-master-details.component';
import { Citymasterservices } from './Services/CityMasterservices';
import { RoomMasterComponent } from './Room/room-master/room-master.component';
import { CityMasterComponent } from './City/city-master/city-master.component';

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
    RoomMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    FormsModule,
    NgxPaginationModule
 
  ],
  providers: [Citymasterservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
