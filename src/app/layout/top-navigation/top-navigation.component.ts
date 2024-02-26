import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/CategoryService';
import { map, Observable } from 'rxjs';
import { CategoryBindingModel } from '../../models/category-binding-model';
import { SubcategoryBindingModel } from 'src/app/models/subcategory-binding-model';
import { UserService } from '../../services/UserService';
import { LoggedUser } from '../../models/logged-user-binding-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  constructor(
    public userService: UserService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  categories!: Observable<CategoryBindingModel[]>;
  subcategories!: Observable<CategoryBindingModel[]>;
  isLogged: boolean = false;
  loggedUser: LoggedUser = {} as LoggedUser;
  searchValue: string = '';

  ngOnInit(): void {
    this.categories = this.categoryService._getCategory();
    this.isLogged = this.userService.isLogged;
    this.loggedUser = this.userService.loggedUser;
  }

  openSubCategories(id: string) {
    this.subcategories = this.categoryService._getSubcategories(id);
  }

  signOut() {
    this.userService._logout();
    this.isLogged = false;
    this.loggedUser = {} as LoggedUser;
  }

  search(keyword: string) {
    this.router.navigate(['search/' + keyword]);
  }
}
