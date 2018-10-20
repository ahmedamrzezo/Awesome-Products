import { Injectable } from '@angular/core';
import { IProducts } from './iproducts';
import { Observable } from 'rxjs';

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
    date: Date.now()
    },
    {
      SKU: `W28SD1`,
      name: `IPhone XS`,
      img_url: `./assets/images/iphone-xs.jpg`,
      category: `Electronics`,
      price: 699.99,
      date: Date.now()
    }
  ];

  getProducts() {
    return this.products;
  }

  setProduct(product) {
    product.date = Date.now();
    return this.products.push(product);
  }

  constructor() { }

}
