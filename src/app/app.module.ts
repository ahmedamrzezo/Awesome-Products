import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { CustomizeProductComponent } from './customize-product/customize-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    CustomizeProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
