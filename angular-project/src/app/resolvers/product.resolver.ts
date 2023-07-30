import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { GetItemsService } from "../services/get-items.service";
import { Observable } from "rxjs";

@Injectable()
export class ProductResolver implements Resolve<Observable<any>> {
  constructor(private service: GetItemsService) {}

  resolve(): Observable<any> {
    return this.service.fetchProducts();
  }
}
