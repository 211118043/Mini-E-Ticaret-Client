import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { CustomersModule } from './customers/customers.module';





@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    ProductsModule,
    OrderModule,
    CustomersModule
    
  ]
})
export class ComponentsModule { }
