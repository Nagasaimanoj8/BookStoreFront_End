import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cart_details:any;
  message:any;
  search_text:string=''
  data: any;
  constructor() { }

  ngOnInit(): void {
    this.data.currentSearch.subscribe((message: any)=>this.message=message)
    this.data.currentCount.subscribe((count: any)=>this.cart_details=count)
    console.log(this.cart_details)
  }
  onKeyUp(event:any){
    this.search_text = event.target.value
    this.data.changeSearch(this.search_text)
  }

}
