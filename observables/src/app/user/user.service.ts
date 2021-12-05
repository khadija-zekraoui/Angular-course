import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class UserService {
  // A Subject is a special kind of observable
  // Is used if we are using them as cross component event emitters, where we manually call next
  onActivate: Subject<boolean> = new Subject<boolean>();
}
