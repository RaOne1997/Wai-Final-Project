import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CityMasterDetailsComponent } from './Admin/City/city-master-details/city-master-details.component';
import { CityMasterComponent } from './Admin/City/city-master/city-master.component';
import { HotelMasterComponent } from './Admin/Hotel/hotel-master/hotel-master.component';
import { RoombyhotelComponent } from './Admin/Hotel/roombyhotel/roombyhotel.component';
import { RoomDetailComponent } from './Admin/Room/room-detail/room-detail.component';
import { RoomMasterComponent } from './Admin/Room/room-master/room-master.component';
import { CarrersComponent } from './carrers/carrers.component';




import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path:'Home',
    component:HomepageComponent
  },
  {
    path:'ContactUs',
    component:ContactpageComponent
  },
  {
    path:'Product',
    component:ProductComponent
  },
  {
    path:'AboutUs',
    component:AboutUsComponent
  },
  {
    path:'Carrers',
    component:CarrersComponent
  },
  {
    path:'CityMaster',
    component:CityMasterComponent , children: [
      { path: 'detail/:id', component: CityMasterDetailsComponent }
   ],
  },
  {
    path:'Room',
    component:RoomMasterComponent 
   
  },
  {
    path:'roomdetails/:id',
    component:RoomDetailComponent
  },
  {
    path:'Hotel',
    component:HotelMasterComponent
  },
  {
    path:'Roombyhotel',
    component:RoombyhotelComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
