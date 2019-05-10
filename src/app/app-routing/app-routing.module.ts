import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPageComponent } from '../components/display-page/display-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { ShoppingBasketComponent } from '../components/shopping-basket/shopping-basket.component';
import { AdminComponent } from '../components/admin/admin.component';


const appRoutes : Routes = [
  {path: '', component: DisplayPageComponent},
  {path: 'basket', component: ShoppingBasketComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin', component: AdminComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
