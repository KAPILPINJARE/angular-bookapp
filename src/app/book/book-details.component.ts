import { Component, OnInit } from "@angular/core";
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from './book';


@Component({
    // selector: 'book-details',
    templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
    
    book:Book;
    
    constructor(private bookService: BookService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((map) => {
            let bookId = Number(map.get("bookId"));
            console.log(bookId);

            this.bookService.findBookById(bookId).subscribe((data) =>{
                this.book = data;
            });

        });
    }
}