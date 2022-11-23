import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:4000/books/';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any>{
    return this.http.get(this.url);
  }

  deleteBook(id:string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  createBook(book: Book): Observable<any>{
    return this.http.post(this.url, book);
  }

  getBook(id:string): Observable<any>{
    return this.http.get(this.url + id);
  }

  updateBook(id:string, book:Book): Observable<any>{
    return this.http.put(this.url + id, book);
  }
}
