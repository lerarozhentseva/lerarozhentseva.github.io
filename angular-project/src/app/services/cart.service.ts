import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {IProduct} from "../types/product.type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  itemAdded: Subject<void> = new Subject<void>();
  public products: IProduct[] | undefined;
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<{products: IProduct[]}> {
    return this.http.get<any>('assets/data/data.json');
  }
}
