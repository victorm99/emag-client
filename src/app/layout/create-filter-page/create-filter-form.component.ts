import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterBindingModel } from 'src/app/models/filter-binding-model';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-create-filter-form',
  templateUrl: './create-filter-form.component.html',
  styleUrls: ['./create-filter-form.component.css'],
})
export class CreateFilterFormComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}
  productForm!: FormGroup;

  model: FilterBindingModel = {
    subcategoryId: undefined,
    searchKeyword: undefined,
    brand: undefined,
    model: undefined,
    maxPrice: undefined,
    minPrice: undefined,
    discountedOnly: undefined,
    orderByPrice: undefined,
    sortDesc: undefined,
    productsPerPage: undefined,
    pageNumber: undefined,
  };

  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = new FormGroup<any>({
      subcategoryId: new FormControl('', []),
      searchKeyword: new FormControl('', []),
      brand: new FormControl('', []),
      model: new FormControl('', []),
      maxPrice: new FormControl('', []),
      minPrice: new FormControl('', []),
      discountedOnly: new FormControl('', []),
      orderByPrice: new FormControl('', []),
      sortDesc: new FormControl('', []),
      productsPerPage: new FormControl('', []),
      pageNumber: new FormControl('', []),
    });
  }

  search(model: FilterBindingModel) {
    this.productService.filter = model;
    console.log(this.productService);
    this.router.navigate(['filter-search']);
  }
}
