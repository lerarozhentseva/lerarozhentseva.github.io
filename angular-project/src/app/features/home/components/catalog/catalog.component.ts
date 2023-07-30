import {Component} from '@angular/core';
import {IProduct} from "../../../../types/product.type";
import {GetItemsService} from "../../../../services/get-items.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {
  public products?: IProduct[];

  constructor(private service: GetItemsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((value) => {
      this.service.products = value['products'].products;
      this.products = this.service.products;
    });
  }
}
