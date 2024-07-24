import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { CreateProductComponent } from './create-product.component';
import { CreateProductFormComponent } from './componrnts/create-product-form/create-product-form.component';


@NgModule({
  declarations: [
    CreateProductComponent,
    CreateProductFormComponent
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule
  ]
})
export class CreateProductModule { }
