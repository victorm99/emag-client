import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserProfileModule } from './user-profile/user-profile.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {CustomInterceptor} from "./config/CustomInterceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    UserProfileModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor ,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
