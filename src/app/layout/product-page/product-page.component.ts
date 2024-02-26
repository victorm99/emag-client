import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { ProductImageBindingModel } from 'src/app/models/product-image-binding-model';
import { SubcategoryBindingModel } from 'src/app/models/subcategory-binding-model';
import { ProductService } from 'src/app/services/ProductService';
import { of } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  products: Observable<ProductsBindingModel[]> = EMPTY;
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters and update products whenever they change
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.products = id ? this.productService._getProducts(id) : EMPTY;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.routeSub.unsubscribe();
  }
}
