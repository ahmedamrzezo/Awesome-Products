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

  getProducts() {
    return this.products;
  }

  setProduct(product) {
    product.date = Date.now();
    product.index = this.products.length - 1;
    product.index++;
    return this.products.push(product);
  }

  deleteProduct(index: number) {
    if (this.products.length <= index ) {
      index = 0;
    }
    return this.products.splice(index, 1);
  }

  constructor() { }

}
