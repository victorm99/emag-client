import { Component, OnChanges, OnInit } from '@angular/core';
import { EMPTY, Observable, of, map } from 'rxjs';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { SubcategoryBindingModel } from 'src/app/models/subcategory-binding-model';
import { CartService } from 'src/app/services/CartService';
import { OrderService } from '../../services/OrderService';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit, OnChanges {
  sub: SubcategoryBindingModel = {
    id: 1,
    subcategoryName: 'test',
  };

  products: Observable<ProductsBindingModel[]> = EMPTY;
  sum: number = 0;
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.products = this.cartService._getCart();
    this.products
      .pipe(
        map((products) => {
          products.map((pr) => {
            // this.sum += pr.discountedPrice == 0 ? pr.price : pr.discountedPrice;
            if (pr.discountedPrice === null || pr.discountedPrice == 0) {
              this.sum += pr.price;
            } else {
              this.sum += pr.discountedPrice!;
            }
          });
        })
      )
      .subscribe();
  }

  ngOnChanges() {
    this.products = this.cartService._getCart().pipe(
      map((products) => {
        products.map((pr) => {
          if (pr.discountedPrice === null || pr.discountedPrice == 0) {
            this.sum += pr.price;
          } else {
            this.sum += pr.discountedPrice!;
          }
        });
        return products;
      })
    );
  }

  order() {
    this.orderService._order();
  }

  removeItem(productId: number) {
    this.sum = 0;
    this.products = this.products.pipe(
      map((elements) => {
        elements = elements.filter((element) => element.id !== productId);
        elements = elements.map((pr) => {
          if (pr.discountedPrice === null || pr.discountedPrice == 0) {
            this.sum += pr.price;
          } else {
            this.sum += pr.discountedPrice!;
          }
          return pr;
        });
        return elements.filter((element) => element.id !== productId);
      })
    );
  }
}
