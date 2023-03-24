import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BookStoreModule } from './book-store/book-store.module';
//import { HeaderComponent } from './partials/header/header.component';
//import { FooterComponent } from './partials/footer/footer.component';
//import { HomeComponent } from './pages/home/home.component';
//import { AboutComponent } from './pages/about/about.component';
//import { ContactComponent } from './pages/contact/contact.component';
//import { ProductsComponent } from './pages/products/products.component';
//import { ServicesComponent } from './pages/services/services.component';
//import { BasePageComponent } from './partials/base-page/base-page.component';
//import { BookStoreComponent } from './book-store/book-store.component';
//import { ModelModule } from './model/model.module';
import { PartialsModule } from './partials/partials.module';
import { BookStoreModule } from './book-store/book-store.module';
import { BookStoreComponent } from "./book-store/book-store.component";
import { CheckoutComponent } from "./book-store/checkout.component";
import { CartDetailComponent } from "./book-store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";


@NgModule({
  imports: [BrowserModule, BookStoreModule, PartialsModule, RouterModule.forRoot([
    { path: "book-store", component: BookStoreComponent, canActivate: [StoreFirstGuard] },
    { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
    { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
    { path: "admin",
      loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
      canActivate: [StoreFirstGuard]
    },
    { path: "**", redirectTo: "/book-store" }
    ])],
  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
