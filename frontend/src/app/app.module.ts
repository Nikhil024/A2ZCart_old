import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/main-component/landing-page/landing-page.component';
import { ProductListingComponent } from './components/main-component/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/main-component/product-details/product-details.component';
import { ProductCartComponent } from './components/main-component/product-cart/product-cart.component';
import { CartComponent } from './components/main-component/cart/cart.component';
import { HeaderComponent } from './components/shared-component/navigation/header/header.component';
import { FooterComponent } from './components/shared-component/navigation/footer/footer.component';
import { OrderDetailsComponent } from './components/main-component/order-details/order-details.component';
import { OrderHistoryComponent } from './components/main-component/order-history/order-history.component';
import { OrderComfirmationComponent } from './components/main-component/order-comfirmation/order-comfirmation.component';
import { PaymentComponent } from './components/main-component/payment/payment.component';
import { LoginComponent } from './components/main-component/login/login.component';
import { RegisterComponent } from './components/main-component/register/register.component';
import { ScriptCssInlcudeFilesComponent } from './components/shared-component/script-css-inlcude-files/script-css-inlcude-files.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ProductCartComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    OrderDetailsComponent,
    OrderHistoryComponent,
    OrderComfirmationComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    ScriptCssInlcudeFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
