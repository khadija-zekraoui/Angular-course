import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// Use the interface as a type of CanDeactivate
@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  // This method will be called by Angular router once we try to leave a route
  // component will be the component that implements the CanComponentDeactivate interface and it will has the canDeactivate method
  // The nextState is where we want to go, because this method is executed when we are leaving the currentRoute 
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Call canDeactivate() method on the component that implements the CanComponentDeactivate interface
    return component.canDeactivate();
  }
  
}