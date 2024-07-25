import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signInGuard } from './sign-in/sign-in.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./library/library.module').then((m) => m.LibraryModule),
    canActivate: [signInGuard] 
  },
  {
    path: 'create-product',
    loadChildren: () =>
      import('./create-product/create-product.module').then(
        (m) => m.CreateProductModule
      ),
    canActivate: [signInGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
