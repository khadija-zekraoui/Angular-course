import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    // Create a custom observable that emits new data(count) every 1 second.
    // The observer is the element that observes(was subscribed to ) this observable
    const customIntervalObservable = Observable.create((observer) => {
      setInterval(() => {
        let count = Math.floor(Math.random() * 10);
        if (count > 8) {
          // When an observable throws an error it cancels but not completes
          // In this case, we don't need to unsubscribe
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
    // Pipe allows us to use operators to apply actions on the data before sending it to the observer.
    // In this, case we use two operators: filter and map
    this.subscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + data;
        })
      )
      .subscribe(
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
