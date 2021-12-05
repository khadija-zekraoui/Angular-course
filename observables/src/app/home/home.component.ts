import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    // Create a custom observable that emit a new data(count) every 1 second.
    // The observable is the element that observes(was subscribed to ) this observable
    const customIntervalObservable = Observable.create((observer) => {
      setInterval(() => {
        let count = Math.floor(Math.random() * 10);
        if (count > 8) {
          // When an observable throws an error it's cancels but not completes
          // In this case we don't need to unsubscribe
          observer.error(new Error('Count is greater than 3!'));
        }
        // Set the observable as completed
        // In this case we don't need to unsubscribe
        if (count === 8) {
          observer.complete();
        }
        observer.next(count);
      }, 1000);
    });

    // Store the subscription
    this.subscription = customIntervalObservable.subscribe(
      (data) => {
        console.log(
          'file: home.component.ts ~ line 36 ~ HomeComponent ~ data',
          data
        );
      },
      (error) => {
        alert(error.message);
      },
      () => {
        console.log(
          'file: home.component.ts ~ line 41 ~ HomeComponent ~ completed',
          true
        );
      }
    );
  }

  ngOnDestroy(): void {
    // We have to unsubscribe manually from customIntervalObservable when we leave this component to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
