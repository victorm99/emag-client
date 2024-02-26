import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FavouritePageComponent } from './favourite-page/favourite-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductComponent } from './components/product/product.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { AddProductCardComponent } from './add-product-page/add-product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscountComponentComponent } from './components/discount-component/discount-component.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersCompComponent } from './components/orders/orders-comp/orders-comp.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CreateFilterPageComponent } from './create-filter-page/create-filter-page.component';
import { CreateFilterFormComponent } from './create-filter-page/create-filter-form.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    TopNavigationComponent,
    LandingPageComponent,
    ProductPageComponent,
    ProductCardComponent,
    FavouritePageComponent,
    CartPageComponent,
    ProductOrderComponent,
    ProductComponent,
    SingleProductPageComponent,
    AddProductPageComponent,
    AddProductCardComponent,
    DiscountComponentComponent,
    OrdersComponent,
    OrdersCompComponent,
    SearchPageComponent,
    CreateFilterPageComponent,
    CreateFilterFormComponent,
    FilterPageComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    RouterLink,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule,
    RouterLink,
    MatSidenavModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatListModule,
    MatTableModule,
  ],
  exports: [TopNavigationComponent],
})
export class LayoutModule {}
