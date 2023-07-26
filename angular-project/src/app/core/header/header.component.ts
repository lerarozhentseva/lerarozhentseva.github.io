import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CounterService} from "../../services/counter.service";
import {ShopcartService} from "../../services/shopcart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public totalCountOfItems: number = 0;
  constructor(private cartService: CartService, private counterService: CounterService,
              private cartUpdateService: ShopcartService) {}

  ngOnInit() {
    this.getTotalCount();
    this.cartService.itemAdded.subscribe(() => {
      this.getTotalCount();
    });

    this.cartUpdateService.itemDeleted.subscribe((id: string) => {
      this.updateTotalCountOnItemDeleted(id);
    });
  }

  getTotalCount() {
    const localStorageData = localStorage.getItem('cartItems');
    let cartItems: any[];
    try {
      cartItems = JSON.parse(localStorageData ?? '[]');
    } catch (error) {
      cartItems = [];
    }
    this.totalCountOfItems = cartItems.reduce((total: number, item: any) => {
      const itemQuantity = parseInt(item.quantity, 10);
      return isNaN(itemQuantity) ? total : total + itemQuantity;
    }, 0);
  }

  updateTotalCountOnItemDeleted(id: string) {
    this.cartUpdateService.deleteCartItemById(id);
    this.getTotalCount();
  }
}
