import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public totalCountOfItems: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getTotalCount();
    this.cartService.itemAdded.subscribe(() => {
      this.getTotalCount();
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
}
