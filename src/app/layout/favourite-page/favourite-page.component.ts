import {Component, OnChanges, OnInit} from '@angular/core';
import {EMPTY, map, Observable, of} from 'rxjs';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { SubcategoryBindingModel } from 'src/app/models/subcategory-binding-model';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-favourite-page',
  templateUrl: './favourite-page.component.html',
  styleUrls: ['./favourite-page.component.css'],
})
export class FavouritePageComponent implements OnChanges, OnInit {
  products: Observable<ProductsBindingModel[]> = EMPTY;

  constructor(private productService: ProductService) {}

  ngOnChanges(): void {
    this.products = this.productService._getAllFavourites();

  }

  ngOnInit() {
    this.products = this.productService._getAllFavourites();
  }

  removeItem(id: number): void {
    this.products = this.products.pipe(
      map((elements) => {
        // Here goes some condition, apply it to your use case, the condition only will return when condition matches
        return elements.filter((element) => element.id !== id);
      })
    );
  }
}
