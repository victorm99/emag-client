import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/ProductService';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductsBindingModel = {} as ProductsBindingModel;
  @Input() isFavPage: boolean = false;
  @Input() isCartPage: boolean = false;
  @Output() removeItem = new EventEmitter<number>();

  isAdmin: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.userService._isAdmin();
  }

  fav(productId: number) {
    if (this.isFavPage) {
      this.productService._unfavourite(productId).subscribe();
      this.removeItem.emit(productId);
    } else {
      this.productService._favourite(productId).subscribe();
    }
  }

  addToCart(productId: number) {
    this.cartService._addToCart(productId).subscribe();
  }

  delete(productId: number) {
    this.productService._deleteProduct(productId);
  }
}
