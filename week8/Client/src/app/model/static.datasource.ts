import { Injectable } from '@angular/core';
import {Book} from './book.model';
import { Observable, from } from 'rxjs';
@Injectable()
export class StaticDataSource {
    private books:Book[] = [
        new Book(1, 'Book1', 'Author 1', 'Year1', 'Short Description 1', 10),
        new Book(1, 'Book1', 'Author 1', 'Year1', 'Short Description 1', 10),
        new Book(1, 'Book1', 'Author 1', 'Year1', 'Short Description 1', 10),
        new Book(2, 'Book2', 'Author 2', 'Year2', 'Short Description 2', 20),
        new Book(2, 'Book2', 'Author 2', 'Year2', 'Short Description 2', 20),
        new Book(2, 'Book2', 'Author 2', 'Year2', 'Short Description 2', 20),
        new Book(3, 'Book3', 'Author 3', 'Year3', 'Short Description', 30),
        new Book(3, 'Book3', 'Author 3', 'Year3', 'Short Description', 30),
        new Book(3, 'Book3', 'Author 3', 'Year3', 'Short Description', 30),
        new Book(4, 'Book4', 'Author 4', 'Year4', 'Short Description', 40),
        new Book(4, 'Book4', 'Author 4', 'Year4', 'Short Description', 40),
        new Book(4, 'Book4', 'Author 4', 'Year4', 'Short Description', 40),
        new Book(4, 'Book4', 'Author 4', 'Year4', 'Short Description', 40)
    ];
    getBooks():Observable<Book[]> {
        return from([this.books]);
    }
}