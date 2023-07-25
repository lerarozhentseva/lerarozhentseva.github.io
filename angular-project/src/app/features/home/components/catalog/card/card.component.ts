import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartService} from "../../../../../services/cart.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product?: any;
  radioValue: string = '250ml';
  checkBoxValue: boolean = false;

  @Output() itemAdded = new EventEmitter<void>();
  constructor(private cartService: CartService) {}

  public getItem(product: any) {
    const uniqueId = crypto.randomUUID();
    let object = {
      name: product.name,
      price: product.price,
      size: this.radioValue,
      quantity: 1,
      sugar: this.checkBoxValue,
      img: product.img,
      id: uniqueId
    };

    let cartItems = [];
    const localStorageData = localStorage.getItem('cartItems');
    if (localStorageData) {
      cartItems = JSON.parse(localStorageData);
    }
    if (object.size) {
      cartItems.push(object);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      this.cartService.itemAdded.next();
    }
  }
}
