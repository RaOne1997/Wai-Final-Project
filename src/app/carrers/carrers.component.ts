import { Component, OnInit } from '@angular/core';
import { CityMaster } from '../Models/CityModels';
import { Citymasterservices } from '../Services/CityMasterservices';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.css']
})
export class CarrersComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  citys! : any

  constructor( private bookService: Citymasterservices) { }

  ngOnInit(): void {
   this.fetchPosts()
  }


  fetchPosts(){
    this.bookService.getBooks()
    .subscribe({
      next:(city)=>{
        this.citys = city;
  
        console.log(city);
    },
    error:(response)=>{
      console.log(response)
    }
  
    })
  }
  // onTableDataChange(event: any) {
  //   this.page = event;
  //   this.fetchPosts();
  // }
  // onTableSizeChange(event: any): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.fetchPosts();
  // }

}
