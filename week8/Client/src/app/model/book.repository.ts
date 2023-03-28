import { Injectable } from '@angular/core';
import {Book} from './book.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class BookRepository {
    private books:Book[] = [];
    private authors: string[] = [];
    
    constructor(private dataSource:RestDataSource) {
        dataSource.getBooks().subscribe(data => {
            this.books = data;
            this.authors = data.map(p=>p.author!).filter((a, index, array) => array.indexOf(a)===index).sort();
        });
    }

    getBooks(author:string=""):Book[] {
        return this.books.filter(b => author == "" || author === b.author);
    }

    getBook(id: number): Book {
        return (this.books.find(b=>b.id == id)!);
    }

    getAuthors(): string[] {
        return this.authors;
    }

    saveBook(book: Book) {
        if (book.id == null || book.id == 0) {
            this.dataSource.saveBook(book).subscribe((p: Book) => this.books.push(p));
        } else {
            this.dataSource.updateBook(book)
            .subscribe(p => {
                this.books.splice(this.books.findIndex(p => p.id == book.id), 1, book);
            });
        }
    }

    deleteBook(id: number) {
        this.dataSource.deleteBook(id).subscribe(p => {
            this.books.splice(this.books.findIndex(p => p.id == id), 1);
        })
    }
}