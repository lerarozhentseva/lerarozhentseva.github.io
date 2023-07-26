import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShopcartService} from "../../../../services/shopcart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent{
  @Input() productCart?: any;
  inputItemsValue: number = 1;
  @Output() incrementEvent = new EventEmitter<string>();
  constructor(private shopcartService: ShopcartService) {}

  onIncrementItems () {
    this.inputItemsValue++;
    this.incrementEvent.emit(this.productCart?.id);
    this.shopcartService.itemAdded.next();
  }

  onDecrementItems (id: string) {
    if(this.inputItemsValue > 0){
      this.inputItemsValue--;
      this.shopcartService.deleteCartItemById(id);
      this.shopcartService.itemDeleted.next(id);
    }
  }

  onDeleteItem(id: string) {
    this.shopcartService.deleteCartItemById(id);
    this.shopcartService.itemDeleted.next(id);
  }
}
