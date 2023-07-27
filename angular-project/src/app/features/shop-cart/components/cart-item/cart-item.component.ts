import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShopcartService} from "../../../../services/shopcart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent{
  @Input() productCart?: any;
  @Output() incrementEvent = new EventEmitter<string>();
  @Output() decrementEvent = new EventEmitter<string>();
  constructor(private shopcartService: ShopcartService) {}

  onIncrementItems (id: string) {
    this.productCart.quantity++;
    this.incrementEvent.emit(this.productCart?.id);
    this.shopcartService.itemAdded.next();
  }

  onDecrementItems (id: string) {
    if (this.productCart.quantity > 0) {
      this.productCart.quantity--;
      this.decrementEvent.emit(this.productCart?.id);
      if (this.productCart.quantity === 0) {
        this.shopcartService.deleteCartItemById(id);
        this.shopcartService.itemDeleted.next(id);
      }
    }
  }

  onDeleteItem(id: string) {
    this.shopcartService.deleteCartItemById(id);
    this.shopcartService.itemDeleted.next(id);
  }
}
