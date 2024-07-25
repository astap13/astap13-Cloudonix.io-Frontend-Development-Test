import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { LibraryItemDescriptionComponent } from './components/library-item-description/library-item-description.component';
import { LibraryItemEditModeComponent } from './components/library-item-edit-mode/library-item-edit-mode.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  { path: ':id', component: LibraryItemDescriptionComponent },
  { path: 'edit/:id', component: LibraryItemEditModeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
