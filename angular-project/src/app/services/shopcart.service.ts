import {EventEmitter, Injectable} from '@angular/core';
import {CounterService} from "./counter.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopcartService {
  itemDeleted = new Subject<string>();
  itemAdded: EventEmitter<void> = new EventEmitter<void>();
  itemUpdated: EventEmitter<void> = new EventEmitter<void>();

  getCartItems(): any[] {
    const localStorageData = localStorage.getItem('cartItems');
    return localStorageData ? JSON.parse(localStorageData) : [];
  }

  constructor(private counterService: CounterService) { };

  deleteCartItemById(id: string) {
    let cartItems = this.getCartItems();
    cartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.counterService.updateCounter(cartItems.length);
  }
}
