import {Component, OnInit} from '@angular/core';
import {ShopcartService} from "../../services/shopcart.service";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
})

export class ShopCartComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrices: any[] = [];
  customButtonClass = 'custom-button';

  constructor(private shopCartService: ShopcartService) {
  }

  ngOnInit() {
    this.cartProducts = this.shopCartService.getCartItems();
    this.calculateTotalPrices();
    this.shopCartService.itemDeleted.subscribe((id: string) => {
      this.onCartItemDeleted(id);
    });
    this.shopCartService.itemAdded.subscribe(() => {
      this.cartProducts = this.shopCartService.getCartItems();
      this.calculateTotalPrices();
    });
  }

  calculateTotalPrices() {
    const productsMap = new Map<string, any>();

    this.cartProducts.forEach(product => {
      const name = product.name;
      const price = product.price[product.size];
      const quantity = product.quantity || 0;
      const existingProduct = productsMap.get(name);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        productsMap.set(name, {name, price, quantity});
      }
    });

    this.totalPrices = [...productsMap.values()].map(item => {
      const total = item.price * item.quantity;
      return {...item, total};
    });
  }


  getTotalSumWithDelivery(): number {
    const totalSum = this.totalPrices.reduce((sum, item) => sum + item.total, 0);
    const deliveryCost = 5;
    return totalSum + deliveryCost;
  }

  onCartItemDeleted(id: string) {
    this.shopCartService.deleteCartItemById(id);
    this.cartProducts = this.shopCartService.getCartItems();
    this.calculateTotalPrices();
  }

  onCartItemIncremented(id: string) {
    const cartProduct = this.cartProducts.find((product) => product.id === id);
    if (!cartProduct) {
      this.addItem(cartProduct);
    } else {
      const cartProducts = this.shopCartService.getCartItems();
      const productDetails = cartProducts.find((product: any) => product.id === id);
      productDetails.quantity++;

      this.shopCartService.addCartItemsToLocalStorage(cartProducts);
      this.cartProducts = this.shopCartService.getCartItems();
      this.calculateTotalPrices();
    }
  }

  onCartItemDecremented(id: string) {
    const cartProducts = this.shopCartService.getCartItems();
    const productDetails = cartProducts.find((product: any) => product.id === id);
    productDetails.quantity--;
    this.shopCartService.addCartItemsToLocalStorage(cartProducts);

    this.cartProducts = this.shopCartService.getCartItems();
    this.calculateTotalPrices();
  }

  addItem(product: any) {
    const uniqueId = crypto.randomUUID();
    let object = {
      name: product.name,
      price: product.price,
      size: product.size,
      quantity: 1,
      sugar: product.sugar,
      img: product.img,
      id: uniqueId
    };

    const cartItems = this.shopCartService.getCartItems();

    if (object.size) {
      cartItems.push(object);
      this.shopCartService.addCartItemsToLocalStorage(cartItems);
      this.shopCartService.itemAdded.next();
    }
  }
}
