import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import { fade, slide } from './animation';

@Component({
  selector: 'tab-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  animations: [ fade, slide ]
})
export class BooksComponent implements OnInit {
  addNewBookForm: FormGroup;
  books: Book[];

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService ) { }

  ngOnInit() {
    this.getBooks();
    this.addNewBookForm = this.fb.group( {
      title: [
        null,
        [
          Validators.required
        ]
      ],
      category: [
        null,
        [
          Validators.required
        ]
      ],
      description: [
        null,
        [
          Validators.required
        ]
      ]
    });
  }

  addBook(formDirective: NgForm) {
    this.booksService.addBook( this.addNewBookForm.value ).subscribe( ( book: Book ) => {
      formDirective.resetForm();
      this.addNewBookForm.root.reset();
      this.books = [book, ...this.books]
    }, ( error ) => {
      console.log( error );
    } );
  }

  private getBooks() {
    this.booksService.getBooks().subscribe( books => this.books = books);
  }
}
