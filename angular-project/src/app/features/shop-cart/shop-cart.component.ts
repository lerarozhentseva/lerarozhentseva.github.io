import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})

export class ShopCartComponent {
  cartProducts: any = [{
    "name": "Extra Latte",
    "price": 8.99,
    "quantity": "1",
    "size": "250ml",
    "sugar": "false",
    "img": "assets/img/latte-without-arabic.svg",
  }, {
    "name": "Cappuccino",
    "price": 9.99,
    "quantity": "1",
    "size": "500ml",
    "sugar": "false",
    "img": 'assets/img/cappuccino.jpg',
  }, {
    "name": "Moccachino",
    "price": 7.29,
    "quantity": "1",
    "size": "250ml",
    "sugar": "false",
    "img": "assets/img/moccachino.jpg",
  }];

}
