import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/ProductService';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: ProductsBindingModel = {} as ProductsBindingModel;
  @Input() isFavPage: boolean = false;
  @Input() isCartPage: boolean = false;

  isAdmin: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.userService._isAdmin();
  }

  fav(productId: number) {
    if (this.isFavPage) {
      this.productService._unfavourite(productId);
    } else {
      this.productService._favourite(productId);
    }
  }

  addToCart(productId: number) {
    this.cartService._addToCart(productId);
  }

  delete(productId: number) {
    this.productService._deleteProduct(productId);
    this.router.navigate(['/home']);
  }
}
