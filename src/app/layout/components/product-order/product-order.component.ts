import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css'],
})
export class ProductOrderComponent implements OnInit {
  @Input() product: ProductsBindingModel = {} as ProductsBindingModel;
  @Output() removeItem = new EventEmitter<number>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {

  }

  removeFromCart(productId: number) {
    this.cartService._removeFromCart(productId).subscribe();
    this.removeItem.emit(productId);
  }
}
