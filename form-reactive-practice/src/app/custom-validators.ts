import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  // Custom validator
  static forbiddenNoneProjectName(control: FormControl): {
    [key: string]: boolean;
  } {
    if (control.value.includes('none')) {
      return { nameIsForbidden: true };
    }
    return null; // this tells angular the condition is valid
  }

  // Asynchronous validator
  static forbiddenProjectNames(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value.includes('test')) {
          resolve({ projectNameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
