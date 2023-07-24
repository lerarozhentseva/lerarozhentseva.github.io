import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product?: any;
  radioValue: string = '';
  checkBoxValue: boolean = false;

  @Output() itemAdded = new EventEmitter<void>();

  public reload() {
    window.location.reload();
  }

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
    cartItems.push(object);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.itemAdded.emit();
    this.reload();
  }
}
