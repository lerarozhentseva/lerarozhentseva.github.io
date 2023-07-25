import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { CartService } from "../services/cart.service";
import { Observable } from "rxjs";

@Injectable()
export class ProductResolver implements Resolve<Observable<any>> {
  constructor(private service: CartService) {}

  resolve(): Observable<any> {
    return this.service.fetchProducts();
  }
}
