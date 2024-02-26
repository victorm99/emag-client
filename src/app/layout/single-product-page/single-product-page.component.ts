import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { SubcategoryBindingModel } from 'src/app/models/subcategory-binding-model';
import { ProductService } from 'src/app/services/ProductService';
import {ReviewModel} from "../../models/review.model";
import {ReviewService} from "../../services/ReviewService";

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css'],
})
export class SingleProductPageComponent implements OnInit {
  product: Observable<ProductsBindingModel> = EMPTY;
  reviews: Observable<ReviewModel[]> = EMPTY;

  review: ReviewModel = {} as ReviewModel;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = id ? this.productService._getProductById(id) : EMPTY;
    this.reviews = id ? this.reviewService._getReviewsForProduct(id):EMPTY;
  }

  addReview(review: ReviewModel) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService._addReview(id, review);
  }

}
