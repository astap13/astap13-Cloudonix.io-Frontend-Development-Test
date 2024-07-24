import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { LibraryItemDescriptionComponent } from './components/library-item-description/library-item-description.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  { path: ':id', component: LibraryItemDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
