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

  constructor(private shopCartService: ShopcartService) {
  }

  onIncrementItems () {
    this.productCart.quantity++;
    this.incrementEvent.emit(this.productCart?.id);
    this.shopCartService.itemAdded.next();
    this.shopCartService.itemUpdated.next();
  }

  onDecrementItems (id: string) {
    if (this.productCart.quantity > 0) {
      this.productCart.quantity--;
      this.decrementEvent.emit(this.productCart?.id);
      if (this.productCart.quantity === 0) {
        this.shopCartService.deleteCartItemById(id);
        this.shopCartService.itemDeleted.next(id);
      }
    }
    this.shopCartService.itemUpdated.next();
  }

  onDeleteItem(id: string) {
    this.shopCartService.deleteCartItemById(id);
    this.shopCartService.itemDeleted.next(id);
  }
}
