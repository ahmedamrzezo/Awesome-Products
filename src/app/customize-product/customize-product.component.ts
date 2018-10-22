import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProducts } from '../products/iproducts';
import { ProductsService } from '../products/products.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-customize-product',
  templateUrl: './customize-product.component.html',
  styleUrls: ['./customize-product.component.css']
})
export class CustomizeProductComponent implements OnInit {

  constructor(private productService: ProductsService, private ss: SharedService) { }

  products: IProducts[] = [];

  addProduct(form: NgForm) {
    this.ss.fire.emit(false);
    this.productService.setProduct(form.value);
  }

  ngOnInit() {
  }

}
