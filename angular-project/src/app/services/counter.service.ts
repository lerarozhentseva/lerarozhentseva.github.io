import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterChange: EventEmitter<number> = new EventEmitter<number>();
  private counter: number = 0;

  updateCounter(count: number) {
    this.counter = count;
    this.counterChange.emit(this.counter);
  }
}
