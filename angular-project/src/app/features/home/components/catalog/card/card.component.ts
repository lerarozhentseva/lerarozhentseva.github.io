import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../../../../services/cart.service";
import {ShopcartService} from "../../../../../services/shopcart.service";
import {trigger, state, style, animate, transition} from '@angular/animations';
import {IProduct} from "../../../../../types/product.type";

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
  @Input() product?: any;
  cartProducts: any[] = [];
  radioValue: string = '250';
  checkBoxValue: boolean = false;
  isPopupOpen = false;

  @Output() itemAdded = new EventEmitter<void>();

  constructor(
    private cartService: CartService,
    private shopCartService: ShopcartService
  ) {
  }

  ngOnInit() {
    this.cartProducts = this.shopCartService.getCartItems();
  }

  public addToCart(cardProduct: IProduct) {
    const cartProductIndex = this.cartProducts.findIndex((product: IProduct) =>
      product.name === cardProduct.name &&
      product.size === this.radioValue &&
      product.sugar === this.checkBoxValue
    );
    if (cartProductIndex === -1) {
      const uniqueId = crypto.randomUUID();
      const newCartItem = {
        name: cardProduct.name,
        price: cardProduct.price,
        size: this.radioValue,
        quantity: 1,
        sugar: this.checkBoxValue,
        img: cardProduct.img,
        id: uniqueId
      };

      this.cartProducts = this.shopCartService.getCartItems();
      this.cartProducts.push(newCartItem);
      this.shopCartService.addCartItemsToLocalStorage(this.cartProducts);
      this.cartService.itemAdded.next();
    } else {
      this.cartProducts = this.shopCartService.getCartItems();
      this.cartProducts[cartProductIndex].quantity++;
      this.shopCartService.addCartItemsToLocalStorage(this.cartProducts);
      this.cartService.itemAdded.next();
    }
  }

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
