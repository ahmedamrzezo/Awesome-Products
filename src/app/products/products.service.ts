import { Injectable } from '@angular/core';
import { IProducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProducts[] = [
    {
    SKU: `A44vd5`,
    name: `Samsung TV`,
    img_url: `./assets/images/samsung-tv.jpg`,
    category: `Electronics`,
    price: 499.99,
    date: Date.now(),
    index: 0
    },
    {
      SKU: `W28SD1`,
      name: `IPhone XS`,
      img_url: `./assets/images/iphone-xs.jpg`,
      category: `Electronics`,
      price: 699.99,
      date: Date.now(),
      index: 1
    }
  ];

  isEditing: boolean;
  index: number;

  getProducts() {
    return this.products;
  }
  setProduct(submittedProduct) {
    submittedProduct.date = Date.now();
    submittedProduct.index = this.products.length - 1;
    if (this.isEditing === true) {
      this.products.splice(this.index, 1);
    } else {
      submittedProduct.index++;
    }
    return this.products.push(submittedProduct);
  }

  updateProduct() {
    return true;
  }

  deleteProduct(index: number) {
    if (this.products.length <= index ) {
      index = 0;
    }
    return this.products.splice(index, 1);
  }

  constructor() { }

}
