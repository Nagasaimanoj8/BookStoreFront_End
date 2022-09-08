import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any;
  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  getallbooks() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getservice('http://127.0.0.1:8000/api/showBooks', true, header)
  }
  addToBag(data: any) {
    console.log('book_id', data)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postservice('http://127.0.0.1:8000/api/addBookTocart',data, true, header)
  }

  getCart() {
    // this.token = localStorage.getItem('token');
    // //  console.log('token', this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getservice('http://127.0.0.1:8000/api/getAllBooks', true, header)
  }

  incrementQuantity(data: any) {
    console.log(data);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
      body: { id: data }
    }
    return this.httpService.postservice('http://127.0.0.1:8000/api/updateQuantityInCart', data, true, header)
  }

  

 
  addToWishlist(book_id: any) {
    console.log('book_id', book_id)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postservice('/addBookToWishlistByBookId', { book_id }, true, header)
  }

  getWishlist() {
    // this.token = localStorage.getItem('token');
    // //  console.log('token', this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
        
      })
    }
    return this.httpService.getservice('/getAllBooksInWishlist', true, header)
  }


  //  order(data: any) {
  //   this.token = localStorage.getItem('token');
  //   let options = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer ' + this.token,
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.httpService.postService('/placeorder',data,true, options);
  // }




 
  // removecartitem(id: any) {
  //   this.token = localStorage.getItem('token');
  //   console.log(id)
  //   let header = {
  //     header: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //       // 'x-access-token':  'Bearer ' + this.token
  //     }),
  //     body: { id: id }
  //   }
  //   return this.httpService.deleteservice("/deleteBookByCartId", true, header)
  // }


  // removewishlist(reqdata: any) {
  //   console.log(reqdata);
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization' : 'Bearer '+ this.token,
  //     }),
  //   };
  //   console.log("Deleted wishlist",reqdata)
  //   return this.httpService.deleteservice( '/deleteBookByWishlistId',  true,header );
  // }



  // order(reqData: any) {
  //   console.log(reqData)
  //   let headers = {
  //     address_id: reqData.orders.address_id,
  //     name: reqData.orders.name,
  //     quantity: reqData.orders.quantity
  //   }
    
  //   //   console.log(this.user);
  //   this.getToken();
  //   return this.httpService.postservice('/placeorder', headers, true, this.header);
  // }



  // getToken() {
  //   this.header = {
  //     headers: { Authorization: "Bearer " + this.user }
  //   }
  // }
}
