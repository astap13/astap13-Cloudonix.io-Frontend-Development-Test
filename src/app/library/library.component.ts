import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

export interface ProductProfile {
  type: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  sku: string;
  cost: number;
  profile: ProductProfile;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit{
  constructor(public api: ApiService){}

  allProducts!: Array<Product>

  ngOnInit(): void {
  this.getAllProducts()
}

getAllProducts() {
  this.api.getAllProducts().subscribe(result => {
    this.allProducts = result
  })
}
}
