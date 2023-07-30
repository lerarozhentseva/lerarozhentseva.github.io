import {Component, OnInit} from '@angular/core';
import {GetItemsService} from "../../services/get-items.service";
import {ShopCartService} from "../../services/shop-cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public totalCountOfItems: number = 0;
  constructor(
    private cartService: GetItemsService,
    private shopCartService: ShopCartService
  ) {}

  ngOnInit() {
    this.getTotalCount();
    this.cartService.itemAdded.subscribe(() => {
      this.getTotalCount();
    });

    this.shopCartService.itemDeleted.subscribe((id: string) => {
      this.updateTotalCountOnItemDeleted(id);
    });

    this.shopCartService.itemUpdated.subscribe(() => {
      this.getTotalCount();
    });
  }

  getTotalCount() {
    const cartItems = this.shopCartService.getCartItems();
    this.totalCountOfItems = cartItems.reduce((total: number, item: any) => {
      const itemQuantity = parseInt(item.quantity, 10);
      return isNaN(itemQuantity) ? total : total + itemQuantity;
    }, 0);
  }

  updateTotalCountOnItemDeleted(id: string) {
    this.shopCartService.deleteCartItemById(id);
    this.getTotalCount();
  }
}
