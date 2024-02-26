import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductsBindingModel } from '../models/products-binding-model';
import { SnackbarService } from './SnackbarService';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  _addToCart(productId: number): Observable<ProductsBindingModel[]> {
    this.snackbarService.openErrorSnackbar('Products added to cart', 'success');
    return this.http.post<ProductsBindingModel[]>(environment.baseUrl + '/cart/' + productId, {});
  }

  _removeFromCart(productId: number): Observable<ProductsBindingModel[]> {
    this.snackbarService.openErrorSnackbar('Product removed to cart', 'success');
    return this.http.delete<ProductsBindingModel[]>(
      environment.baseUrl + '/cart/' + productId
    ).pipe(map(res => {
      this._getCart();
      return res;
    }));
  }

  _getCart(): Observable<ProductsBindingModel[]> {
    return this.http.get<ProductsBindingModel[]>(environment.baseUrl + '/cart');
  }
}
