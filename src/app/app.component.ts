import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

/** @title Datepicker emulating a Year and month picker */
@Component({
  selector: 'app-root app-add-book-selection',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    // add providers here if any
	// providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
  ]
})
export class AddBookSelectorListComponent implements OnInit {
  bookForm: FormGroup;
  booksList: Array<any> = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // initialize variables here
    this.initForm();
  }

  initForm() {
    this.bookForm = this.fb.group({
      bookTitle: ['', [Validators.required]],
      bookCategory: ['', [Validators.required]],
      bookDescription: ['', [Validators.required]]
    });
  }

  addBook() {
    console.log('add book', this.bookForm.invalid);
    if (!this.bookForm.invalid) {
      const bookName = this.bookForm.get('bookTitle').value,
        bookCategory = this.bookForm.get('bookCategory').value,
        bookDescription = this.bookForm.get('bookDescription').value;

      const obj = {
        name: bookName,
        category: bookCategory,
        description: bookDescription
      };

      this.booksList.push(obj);

      this.bookForm.reset();
    }
  }
}
