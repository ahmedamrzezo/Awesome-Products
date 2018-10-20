import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products/iproducts';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  products: IProducts[] = [];

  editProduct() {
    alert('sacksm');
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
