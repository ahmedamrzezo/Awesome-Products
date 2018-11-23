import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products/products.service';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public productService: ProductsService, private ss: SharedService) {
    this.formIsShown = false;
  }

  logo = 'Awesome-Products';

  subscription: any;
  formIsShown: Boolean;
  modelIsShown = false;

  products: Object;

  showProductsModel() {
    if (this.formIsShown = true) {
      this.formIsShown = false;
    }
    this.products = JSON.stringify(this.productService.getProducts());
    this.modelIsShown = true;
  }

  ngOnInit(): void {
    this.subscription = this.ss.getEmittedValue().subscribe(val => this.formIsShown = val);
  }
}
