import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { ModelModule } from "../model/model.module";
import { BookStoreComponent } from "./book-store.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CounterDirective } from './counter.directive';
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [BookStoreComponent, CounterDirective, CartDetailComponent, CheckoutComponent],
    exports: [BookStoreComponent, CartDetailComponent, CheckoutComponent]
})

export class BookStoreModule {
    
}