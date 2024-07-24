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

navigateToItem(itemId: number) {
  this.router.navigate(['library', itemId]);
}
}
