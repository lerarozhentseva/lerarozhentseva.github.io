import {Component, OnInit} from '@angular/core';
import {ShopcartService} from "../../services/shopcart.service";
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
})

export class ShopCartComponent implements OnInit{
  cartProducts: any[] = [];
  totalPrices: any[] = [];
  constructor(private cartService: ShopcartService) {}
  customButtonClass = 'custom-button';

  ngOnInit() {
    this.cartProducts = this.cartService.getCartItems();
    this.calculateTotalPrices();
    this.cartService.itemDeleted.subscribe((id: string) => {
      this.onCartItemDeleted(id);
    });
    this.cartService.itemAdded.subscribe(() => {
      this.cartProducts = this.cartService.getCartItems();
      this.calculateTotalPrices();
    });
  }

  calculateTotalPrices() {
    const productsMap = new Map<string, any>();

    this.cartProducts.forEach(product => {
      const name = product.name;
      const price = product.price;
      const quantity = product.quantity || 0;
      const existingProduct = productsMap.get(name);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        productsMap.set(name, { name, price, quantity });
      }
    });

    this.totalPrices = Array.from(productsMap.values()).map(item => {
      const total = item.price * item.quantity;
      return { ...item, total };
    });
  }


  getTotalSumWithDelivery(): number {
    const totalSum = this.totalPrices.reduce((sum, item) => sum + item.total, 0);
    const deliveryCost = 5;
    return totalSum + deliveryCost;
  }

  onCartItemDeleted(id: string) {
    this.cartService.deleteCartItemById(id);
    this.cartProducts = this.cartService.getCartItems();
    this.calculateTotalPrices();
  }

  onCartItemIncremented(id: string) {
    const cartProduct = this.cartProducts.find((product) => product.id === id);
    if (!cartProduct) {
      this.addItem(cartProduct);
    } else {
      const localStorageData = localStorage.getItem('cartItems');
      const cartProducts = localStorageData ? JSON.parse(localStorageData) : [];
      const productDetails = cartProducts.find((product: any) => product.id === id);
      productDetails.quantity++;
      console.log(productDetails);
      localStorage.setItem('cartItems', JSON.stringify(cartProducts));
      this.cartProducts = this.cartService.getCartItems();
      this.calculateTotalPrices();
    }
  }

  onCartItemDecremented(id: string) {
      const localStorageData = localStorage.getItem('cartItems');
      const cartProducts = localStorageData ? JSON.parse(localStorageData) : [];
      const productDetails = cartProducts.find((product: any) => product.id === id);
      productDetails.quantity--;
      console.log(productDetails);
      localStorage.setItem('cartItems', JSON.stringify(cartProducts));
      this.cartProducts = this.cartService.getCartItems();
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
  }
}
