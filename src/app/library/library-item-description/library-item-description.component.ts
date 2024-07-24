import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-library-item-description',
  templateUrl: './library-item-description.component.html',
  styleUrl: './library-item-description.component.scss'
})
export class LibraryItemDescriptionComponent {
  item$!: Observable<Product>;
  
  constructor( private route: ActivatedRoute, public api: ApiService){}

  ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getProductById(params.get('id')!))
    );
  }
  
}
