import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalCountOfItems: number = 0;

  ngOnInit() {
    this.getTotalCount();
  }

  getTotalCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    this.totalCountOfItems = cartItems.reduce((total: number, item: any) => {
      const itemQuantity = parseInt(item.quantity, 10);
      return isNaN(itemQuantity) ? total : total + itemQuantity;
    }, 0);
  }
}
