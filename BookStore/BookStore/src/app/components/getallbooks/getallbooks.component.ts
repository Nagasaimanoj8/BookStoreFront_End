import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';
import { DataserviceService } from 'src/app/services/dataservice/dataservice.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  @Input() childMessage: any;
  booksArray: any = [];
  searchBook = "";
  Book: any;
  booksquantity: any;
  constructor(private bookservice: BookService, private router: Router,private data: DataserviceService,) { }
  totalLength: any;
  page: number = 1;
   
  ngOnInit(): void {
    this.getAllBook();
    this.data.incomingData.subscribe((res) => {
      console.log("Searching Process", res)
      this.searchBook = res;
    })
  }
  getAllBook() {
    this.bookservice.getallbooks().subscribe((response: any) => {
      console.log(response);
      this.booksquantity = response.length;
      this .totalLength=  response.length;
      this.booksArray = response;
      console.log(this.booksArray);
    });
  }

  lowtohigh() {
    this.booksArray = this.booksArray.sort((low: any, high: any) => low.price - high.price);
  }
  hightolow() {
    this.booksArray = this.booksArray.sort((low: any, high: any) => high.price - low.price);
  }
  newestarrivals() {
    this.booksArray.reverse();
  }
  bookview(Book: any) {

     localStorage.setItem('BookId', Book.id);
     this.router.navigateByUrl('/dashboard/bookview')

  }
  AddToBag(book: any) {
    this.bookservice.addToBag(book.id).subscribe((response: any) => {
      console.log('book add to Bag ', response)
      // this.snackbar.open('Added to cart ', '', {
      //   duration: 2000,
      // });
      this.router.navigateByUrl('/bookview')
    })
  }

  AddToWishlist(Book: any) {
    this.bookservice.addToWishlist(Book.id).subscribe((response: any) => {
      console.log('book added to wishlist ', response)
      // this.snackbar.open('Added to wishlist ', '', {
      //   duration: 2000,
      // });
      this.router.navigateByUrl('/wishlist')
    })
  }

}
