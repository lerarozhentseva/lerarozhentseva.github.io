import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product?: any;
  radioValue: string = '';
  checkBoxValue: boolean = false;

  public getItem (product: any) {
    let object = {
      name: product.name,
      price: product.price,
      size: this.radioValue,
      sugar: this.checkBoxValue,
      img: product.img,
    }
    console.log(object);
  }
}
