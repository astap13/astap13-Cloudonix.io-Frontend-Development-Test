import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) }, { path: 'library', loadChildren: () => import('./library/library.module').then(m => m.LibraryModule) }, { path: 'create-product', loadChildren: () => import('./create-product/create-product.module').then(m => m.CreateProductModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
