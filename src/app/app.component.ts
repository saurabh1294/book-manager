import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StaticDataService } from './shared/services/static-data.service';

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
  categories: Array<any> = [];

  constructor(private fb: FormBuilder, private staticDataService: StaticDataService) {}

  ngOnInit() {
    // initialize variables here
    this.staticDataService.getStaticData().subscribe(response => {
      this.categories = response.data ? response.data['categories'] : [];
      console.log('Response from the web service', this.categories);
    });
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
    // add book only if all fields entered by user
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
      this.bookForm.markAsPristine();
    }
  }
}
