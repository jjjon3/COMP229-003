import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import { BookRepository } from '../model/book.repository';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {
  constructor(private repository:BookRepository) { }
  
  ngOnInit(): void {

  }

  get books():Book[] {
    return this.repository.getBooks();
  }

  get authors():string[] {
    return this.repository.getAuthors();
  }
}
