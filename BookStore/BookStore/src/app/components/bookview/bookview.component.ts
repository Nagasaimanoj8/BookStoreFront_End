
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.scss']
})
export class BookviewComponent implements OnInit {
  bookid: any;
  Book: any;
  constructor(private bookservice:BookService,private router: Router) { }

  ngOnInit(): void {
    this.bookid = localStorage.getItem("bookId");
    console.log(this.bookid);
    this.getUserAllBook();
  }
  getUserAllBook() {
    this.bookservice.getallbooks().subscribe((res: any) => {
      res.booksArray.forEach((element: any) => {
        if (element.id == this.bookid) {
          this.Book = element;
        }
      });
    })
  }

  AddToBag(book: any) {
    this.bookservice.addToBag(book.id).subscribe((response: any) => {
      console.log('book add to Bag ', response)
      this.router.navigateByUrl('/cart')
    })
  }
}
