import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterChange: EventEmitter<number> = new EventEmitter<number>();
}
