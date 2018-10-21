import { Component } from '@angular/core';
import { ProductsService } from './products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private productService: ProductsService) {}

  logo = 'Awesome-Products';

  formIsShown = false;
  modelIsShown = false;

  products: Object;

  showProductsModel() {
    if (this.formIsShown = true) {
      this.formIsShown = false;
    }
    this.products = JSON.stringify(this.productService.getProducts());
    this.modelIsShown = true;
  }
}
