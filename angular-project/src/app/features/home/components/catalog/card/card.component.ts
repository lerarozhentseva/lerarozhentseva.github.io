import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../../../../services/cart.service";
import {ShopcartService} from "../../../../../services/shopcart.service";
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({opacity: 0})),
      transition(':enter, :leave', [animate(300)])
    ])
  ]
})

export class CardComponent implements OnInit {
  cartProducts: any[] = [];
  @Input() product?: any;
  radioValue: string = '250';
  checkBoxValue: boolean = false;

  @Output() itemAdded = new EventEmitter<void>();

  constructor(private cartService: CartService, private shopCartService: ShopcartService) {
  }

  ngOnInit() {
    this.cartProducts = this.shopCartService.getCartItems();
  }

  public getItem(cardProduct: any) {
    const cartProduct = this.cartProducts.find((product) => product.name === cardProduct.name);
    console.log(this.cartProducts);

    if (!cartProduct) {
      const uniqueId = crypto.randomUUID();
      let object = {
        name: cardProduct.name,
        price: cardProduct.price,
        size: this.radioValue,
        quantity: 1,
        sugar: this.checkBoxValue,
        img: cardProduct.img,
        id: uniqueId
      };

      let cartItems = [];
      const localStorageData = localStorage.getItem('cartItems');
      if (localStorageData) {
        cartItems = JSON.parse(localStorageData);
      }
      if (object.size) {
        cartItems.push(object);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.cartService.itemAdded.next();
      }
    } else {
      cartProduct.quantity++;
      localStorage.setItem('cartItems', JSON.stringify(this.cartProducts));
      this.cartProducts = this.shopCartService.getCartItems();
    }
  }

  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  private transformKey(key: string): string {
    return key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (str) => str.toUpperCase());
  }

  getRegularDetails(): any[] {
    const {vitaminD, calcium, ...regularDetails} = this.product?.details || {};

    return Object.entries(regularDetails).map(([key, value]) => ({key: this.transformKey(key), value}));
  }

  getLastTwoDetails(): any[] {
    return [
      {key: 'Vitamin D', value: this.product?.details?.vitaminD},
      {key: 'Calcium', value: this.product?.details?.calcium}
    ];
  }

}
