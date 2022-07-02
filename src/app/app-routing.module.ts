import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarrersComponent } from './carrers/carrers.component';

import { CityMasterComponent } from './city-master/city-master.component';
import { CityMasterDetailsComponent } from './city-master-details/city-master-details.component';

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
    path:'details',
    component:CityMasterDetailsComponent 
     
   
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
