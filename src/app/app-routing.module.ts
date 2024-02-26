import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { RegisterPageComponent } from './user-profile/register-page/register-page.component';
import { LoginPageComponent } from './user-profile/login-page/login-page.component';
import { ROUTE_PATHS } from './top-routes/routes';
import { ProductPageComponent } from './layout/product-page/product-page.component';
import { ForgottenPasswordComponent } from './user-profile/forgotten-password/forgotten-password.component';
import { MyAccountComponent } from './user-profile/my-account/my-account.component';
import { FavouritePageComponent } from './layout/favourite-page/favourite-page.component';
import { CartPageComponent } from './layout/cart-page/cart-page.component';
import { SingleProductPageComponent } from './layout/single-product-page/single-product-page.component';
import { AddProductPageComponent } from './layout/add-product-page/add-product-page.component';
import { AddProductCardComponent } from './layout/add-product-page/add-product-card.component';
import { OrdersComponent } from './layout/components/orders/orders.component';
import { OrdersCompComponent } from './layout/components/orders/orders-comp/orders-comp.component';
import { SearchPageComponent } from './layout/search-page/search-page.component';
import { CreateFilterPageComponent } from './layout/create-filter-page/create-filter-page.component';
import { FilterPageComponent } from './layout/filter-page/filter-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: ROUTE_PATHS.home,
    component: LandingPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'category/:id',
    component: ProductPageComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
    children: [
      {
        path: '',
        component: OrdersCompComponent,
      },
    ],
  },
  {
    path: 'subcategory/:id',
    component: ProductPageComponent,
  },
  {
    path: 'forgotten-password',
    component: ForgottenPasswordComponent,
  },
  {
    path: 'my-account',
    component: MyAccountComponent,
  },
  {
    path: 'favourites',
    component: FavouritePageComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'product/edit/:id',
    component: AddProductPageComponent,
  },
  {
    path: 'product/add',
    component: AddProductPageComponent,
  },
  {
    path: 'product/:id',
    component: SingleProductPageComponent,
  },
  {
    path: 'search/:keyword',
    component: SearchPageComponent,
  },
  {
    path: 'filter',
    component: CreateFilterPageComponent,
  },
  {
    path: 'filter-search',
    component: FilterPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
