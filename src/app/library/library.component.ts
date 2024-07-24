import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Product } from './product.interface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit{

editProduct(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(public api: ApiService, public router: Router){}

  allProducts!: Array<Product>

  ngOnInit(): void {
  this.getAllProducts()
}

getAllProducts() {
  this.api.getAllProducts().subscribe(result => {
    this.allProducts = result
  })
}

deleteProduct(id: number): void {
  if (confirm('Are you sure you want to delete this product?')) {
    this.api.delProductById(id).subscribe(
      () => {
        this.allProducts = this.allProducts.filter(product => product.id !== id);
      },
      error => {
        console.error('Error deleting product:', error);
      }
    );
  }
}

navigateToItem(itemId: number) {
  this.router.navigate(['library', itemId]);
}
}
