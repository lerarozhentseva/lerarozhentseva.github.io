import {EventEmitter, Injectable} from '@angular/core';
import {CounterService} from "./counter.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  itemDeleted = new Subject<string>();
  itemAdded: EventEmitter<void> = new EventEmitter<void>();
  itemUpdated: EventEmitter<void> = new EventEmitter<void>();

  constructor(private counterService: CounterService) { };

  getCartItems(): any[] {
    const localStorageData = localStorage.getItem('cartItems');
    return localStorageData ? JSON.parse(localStorageData) : [];
  }

  addCartItemsToLocalStorage(cartProducts: any) {
    localStorage.setItem('cartItems', JSON.stringify(cartProducts));
  }

  deleteCartItemById(id: string) {
    let cartItems = this.getCartItems();
    cartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.counterService.updateCounter(cartItems.length);
  }
}
