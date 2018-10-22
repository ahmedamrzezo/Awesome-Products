import { Component, OnInit } from '@angular/core';

import { IProducts } from '../products/iproducts';
import { ProductsService } from '../products/products.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor(private productService: ProductsService, private ss: SharedService) { }

  products: IProducts[] = [];

  editProduct(index: number) {
    this.ss.change();
    this.productService.isEditing = true;
    this.productService.index = index;
  }

  deleteProduct(index) {
    const confirmation = confirm('Are you sure to delete this product');

    if (confirmation === true) {
      return this.productService.deleteProduct(index);
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
