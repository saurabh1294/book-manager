import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StaticDataList } from './static-data.interface';

@Injectable({
  providedIn: 'root' // singleton service
})
export class StaticDataService {
  port = '3456';
  baseUrl = `http://localhost:${this.port}`;
  constructor(private http: HttpClient) {}

  getStaticData(): Observable<StaticDataList> {
    return this.http.get<StaticDataList>(`${this.baseUrl}/bookStore/public/api/v1/static/category`).pipe(
      catchError(err => {
        console.log('Handling service error locally and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
}
