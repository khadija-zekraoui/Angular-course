import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterActive: number = 0;
  counterInactive: number = 0;
  counterUpdated = new EventEmitter();

  addActionActive() {
    this.counterActive ++;
    this.counterUpdated.emit();
  }

  addActionInactive() {
    this.counterInactive ++;
    this.counterUpdated.emit();
  }
} 