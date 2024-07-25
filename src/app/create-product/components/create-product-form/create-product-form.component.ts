import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../library/product.interface';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent {
  createProductForm: FormGroup;
  product!: Product;

  constructor(
    private fb: FormBuilder,
    private api: ApiService, 
    private router: Router
  ) {
    this.createProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      sku: ['', Validators.required],
      cost: [0, [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      profile: this.fb.group({
        type: 'furniture',
        available: true,
        backlog: ''
      })
    });
  }

  onSubmit() {
    if (this.createProductForm.valid) {
      this.api.createProduct(this.createProductForm.value).subscribe(
        () => {
          this.router.navigate(['/library']);
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
