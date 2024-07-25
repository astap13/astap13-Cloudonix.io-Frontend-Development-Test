import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { CreateProductComponent } from './create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';

@NgModule({
  declarations: [CreateProductComponent, CreateProductFormComponent],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CreateProductModule {}
