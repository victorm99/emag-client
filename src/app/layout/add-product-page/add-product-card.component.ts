import { Component, OnInit } from '@angular/core';
import {ProductBindingModel} from "../../models/product-binding-model";
import {Observable} from "rxjs";
import {SubcategoryBindingModel} from "../../models/subcategory-binding-model";
import {CategoryService} from "../../services/CategoryService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/ProductService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-product-card',
  templateUrl: './add-product-card.component.html',
  styleUrls: ['./add-product-card.component.css']
})
export class AddProductCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,private productService: ProductService, private categoryService: CategoryService) { }

  subCategories!: Observable<SubcategoryBindingModel[]>;



  productForm!: FormGroup;

  model: ProductBindingModel = {
    name: '',
    subCategoryId: '',
    brand: '',
    model: '',
    price: '',
    quantity: '',
    description: '',
    warrantyMonths: 0,
  }
  ngOnInit(): void {
    this.createProductForm();
    this.subCategories = this.categoryService._getAllSubcategories();
  }

  createProductForm() {
    this.productForm = new FormGroup<any>({
      name: new FormControl('', [Validators.required]),
      subCategoryId: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      warrantyMonths: new FormControl('', []),
    })
  }

  addProduct(product: ProductBindingModel) {
    this.productService._addProduct(product);
  }

  editProduct(product: ProductBindingModel) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService._editProduct(id, product);
  }
}
