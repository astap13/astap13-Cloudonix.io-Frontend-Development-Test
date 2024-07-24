import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { Product } from '../../product.interface';

@Component({
  selector: 'app-library-item-description',
  templateUrl: './library-item-description.component.html',
  styleUrl: './library-item-description.component.scss'
})
export class LibraryItemDescriptionComponent {
  item$!: Observable<Product>;
  
  constructor( private route: ActivatedRoute, public api: ApiService, private router: Router){}

  ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getProductById(params.get('id')!))
    );
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.api.delProductById(id).subscribe(
        () => {
          this.router.navigate(['/library']);
        },
        error => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
  
}
