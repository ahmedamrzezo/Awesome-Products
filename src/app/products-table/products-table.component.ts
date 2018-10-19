import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor() { }

  products = [
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

  ngOnInit() {
  }

}
