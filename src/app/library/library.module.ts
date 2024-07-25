import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibraryItemDescriptionComponent } from './components/library-item-description/library-item-description.component';
import { LibraryItemEditModeComponent } from './components/library-item-edit-mode/library-item-edit-mode.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LibraryComponent,
    LibraryItemDescriptionComponent,
    LibraryItemEditModeComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    ReactiveFormsModule
  ]
})
export class LibraryModule {}
