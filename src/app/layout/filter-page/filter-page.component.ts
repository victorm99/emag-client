import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.css'],
})
export class FilterPageComponent implements OnInit {
  products: Observable<ProductsBindingModel[]> = EMPTY;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService._filterSearchProduct();
  }
}
