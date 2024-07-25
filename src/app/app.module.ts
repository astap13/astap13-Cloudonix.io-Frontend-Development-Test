import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LibraryItemDescriptionComponent } from './library/components/library-item-description/library-item-description.component';
import { HeaderComponent } from './core/header/header.component';
import { LibraryItemEditModeComponent } from './library/components/library-item-edit-mode/library-item-edit-mode.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
