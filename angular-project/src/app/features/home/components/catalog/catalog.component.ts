import {Component} from '@angular/core';
import {products as data} from "../../../../../assets/data/products";
import {IProduct} from "../../../../../assets/models/product";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {
  // products: IProduct[] = data;
  products: any = [{
    "name": "Extra Latte",
    "price": 8.99,
    "quantity": "1",
    "size": "250ml",
    "sugar": "false",
    "image": "",
    "img": "assets/img/latte-without-arabic.svg",
    "rotateImg": "assets/icons/rotate-arabic.svg",
    "radioName": "Late-ML",
    "radioId1": "Late-option1",
    "radioId2": "Late-option2",
    "checkBoxName": "Late-ML-myCheckbox"
  }, {
    "name": "Cappuccino",
    "price": 9.99,
    "quantity": "1",
    "size": "500ml",
    "sugar": "false",
    "img": 'assets/img/cappuccino.jpg',
    "radioName": "Cappuccino-ML",
    "radioId1": "Cappuccino-option1",
    "radioId2": "Cappuccino-option2",
    "checkBoxName": "Cappuccino-ML-myCheckbox"
  }, {
    "name": "Moccachino",
    "price": 7.29,
    "quantity": "1",
    "size": "250ml",
    "sugar": "false",
    "img": "assets/img/moccachino.jpg",
    "radioName": "Moccachino-ML",
    "radioId1": "Moccachino-option1",
    "radioId2": "Moccachino-option2",
    "checkBoxName": "Moccachino-ML-myCheckbox"
  }];
}
