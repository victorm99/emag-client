import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, map, switchMap} from 'rxjs';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  products: Observable<any> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.route.paramMap.pipe(
      map(params => params.get('keyword')!),
      switchMap(keyword => this.productService._searchProduct(keyword)),
      map(res => res.content)
    );
  }
}
