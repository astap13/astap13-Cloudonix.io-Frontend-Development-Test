import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../library/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://rest-items.research.cloudonix.io/';
  authToken = '01234567890'

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.get(`${this.apiUrl}/items`, { headers }).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  getProductById(id:  string | number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.get(`${this.apiUrl}/items/${id}`, { headers }).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }
  
  delProductById(id: string | number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.delete<void>(`${this.apiUrl}/items/${id}`, { headers }).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  createProduct(data: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`,
      'Content-Type': 'application/json'
    });

    const jsonData = JSON.stringify(data);

    return this.http.post(`${this.apiUrl}/items`, jsonData, { headers }).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  updateProduct(id: number | string, data: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`,
      'Content-Type': 'application/json'
    });

    const jsonData = JSON.stringify(data);

    console.log(jsonData)

    return this.http.patch(`${this.apiUrl}/items/${id}`, jsonData, { headers }).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

}
