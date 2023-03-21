import { NgModule } from "@angular/core";
import { BookRepository } from "./book.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({
    providers:[BookRepository, StaticDataSource, Cart, Order, OrderRepository]
})
export class ModelModule { }