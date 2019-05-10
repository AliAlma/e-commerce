import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing/app-routing.module'
import { HttpClientModule } from '@angular/common/http/'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayPageComponent } from './components/display-page/display-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { BikeItemComponent } from './components/bike-item/bike-item.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayPageComponent,
    CheckoutComponent,
    ShoppingBasketComponent,
    BikesComponent,
    BikeItemComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
