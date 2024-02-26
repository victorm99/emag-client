import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CategoryBindingModel } from '../models/category-binding-model';
import { SubcategoryBindingModel } from '../models/subcategory-binding-model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  categoryId: string = '';

  _getCategory(): Observable<CategoryBindingModel[]> {
    return this.http
      .get<CategoryBindingModel[]>(environment.baseUrl + '/categories')
      .pipe(
        map((result) => {
          for (let el of result) {
            this.categoryId = el.id;
          }
          return result;
        })
      );
  }

  _getSubcategories(categoryId: string): Observable<CategoryBindingModel[]> {
    return this.http.get<CategoryBindingModel[]>(
      environment.baseUrl + '/subcategories/' + categoryId
    );
  }

  _getAllSubcategories(): Observable<SubcategoryBindingModel[]> {
    return this.http.get<SubcategoryBindingModel[]>(
      environment.baseUrl + '/subcategories/findAll'
    );
  }
}
