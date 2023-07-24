import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() productCart?: any;
  inputItemsValue: number = 1;

  onIncrementItems () {
    this.inputItemsValue++;
  }

  onDecrementItems () {
    if(this.inputItemsValue > 0){
      this.inputItemsValue--;
    }
  }
}
