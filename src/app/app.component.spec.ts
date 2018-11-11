import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AddBookSelectorListComponent } from './ app.component';
import { StaticDataService } from './shared/services/static-data.service';

describe('AddBookSelectorListComponent', () => {
  let component: AddBookSelectorListComponent;
  let fixture: ComponentFixture<AddBookSelectorListComponent>;
  const formBuilder = new FormBuilder();
  const formGroup = new FormGroup({});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [AddBookSelectorListComponent],
      providers: [
        {
          provide: FormBuilder,
          useValue: formBuilder
        },
        {
          provide: FormGroup,
          useValue: formGroup
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookSelectorListComponent);
    component = fixture.com;
    ponentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  describe('Book selector component', () => {
    describe('ngOnInit()', () => {
      beforeEach(() => {
        spyOn(component, 'initForm');
        component.ngOnInit();
      });

      it('should init book info form', () => {
        expect(component.initForm).toHaveBeenCalled();
      });
    });

    describe('initForm()', () => {
      beforeEach(
        fakeAsync(() => {
          component.initForm();
          tick();
          fixture.detectChanges();
        })
      );

      it(
        'should call addBook()',
        fakeAsync(() => {
          component.bookForm.get('bookTitle').setValue('someBook');
          component.bookForm.get('bookCategory').setValue('Technology');
          component.bookForm.get('bookDescription').setValue('test description');
          fixture.detectChanges();
          component.addBook();
        })
      );
    });

    describe('getStaticData()', () => {
      it('[SUCCESS] should fetch static API data', inject(
        [StaticDataService, HttpTestingController],
        (staticDataService: StaticDataService, backend: HttpTestingController) => {
          let apiData = <any>{};
          staticDataService.getStaticData().subscribe(response => (apiData = response), fail);
          const req = backend.expectNone('/bookStore/public/api/v1/static/category');
        }
      ));
    });
  });

  describe('view', () => {
    it('should expect mat-form-fields to be present', () => {
      const formFieldDE: DebugElement = fixture.debugElement.query(By.css('mat-form-field'));
      expect(formFieldDE.nativeElement).toBeDefined();
    });
  });
});
