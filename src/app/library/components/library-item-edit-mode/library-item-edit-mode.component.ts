import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { Product } from '../../product.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-library-item-edit-mode',
  templateUrl: './library-item-edit-mode.component.html',
  styleUrls: ['./library-item-edit-mode.component.scss']
})
export class LibraryItemEditModeComponent implements OnInit {
  editProductForm: FormGroup;
  product!: Product;
  
  item$!: Observable<Product>;
  itemId!: number; 
  
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public api: ApiService,
    private router: Router
  ) {
    this.editProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      cost: [0, [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      profile: this.fb.group({
        type: 'furniture'
      })
    });
  }

  ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getProductById(params.get('id')!)
      )
    );

    this.item$.subscribe(product => {
      this.product = product;
      this.itemId = product.id;
      this.editProductForm.patchValue({
        name: product.name,
        description: product.description,
        sku: product.sku,
        cost: product.cost,
        profile: {
          type: product.profile?.type
        }
      });
    });
  }

  onSubmit() {
    if (this.editProductForm.valid) {
      const formValue = this.editProductForm.value;
      
      const updatedProduct: any = {};
  
      if (formValue.name !== this.product.name) updatedProduct.name = formValue.name;
      if (formValue.description !== this.product.description) updatedProduct.description = formValue.description;
      if (formValue.cost !== this.product.cost) updatedProduct.cost = formValue.cost;
      if (formValue.profile.type !== this.product.profile?.type) updatedProduct.profile = { type: formValue.profile.type };
  
      this.api.updateProduct(this.itemId, updatedProduct).subscribe(
        () => {
          this.router.navigate(['/library', this.itemId]);
        },
        error => {
          console.error('Error updating product:', error);
        }
      );
    }
  }
  
}
