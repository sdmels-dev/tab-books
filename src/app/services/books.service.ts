import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of} from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[];

  // constructor() {
  //   this.books = [
  //     {
  //       'id': 1,
  //       'title': 'my book 1',
  //       'category': 'comedy',
  //       'description': 'my book 1 description'
  //     },
  //     {
  //       'id': 2,
  //       'title': 'my book 2',
  //       'category': 'drama',
  //       'description': 'my book 2 description'
  //     },
  //     {
  //       'id': 3,
  //       'title': 'my book 3',
  //       'category': 'sport',
  //       'description': 'my book 3 description'
  //     }
  //   ];
  // }
  //
  // getBooks(): Observable<Book[]> {
  //   return of (this.books);
  // }
  //
  // addBook( book: Book ): Observable<any> {
  //   this.books = [book, ...this.books];
  //   return of(this.books);
  // }

  private bookUrl = `${environment.endPoint}/books`;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>( this.bookUrl );
  }

  addBook( book: Book ): Observable<Book> {
    return this.http.post( this.bookUrl, book ).pipe(
      map( (bk: Book)  => {
        return bk;
      } )
    );
  }
}
