import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private onAddIngredientSub: Subscription;

  constructor(private shoppingSrv: ShoppingService) {
    this.onAddIngredientSub = this.shoppingSrv.onAddIngredient.subscribe(() => {
      this.ingredients = this.shoppingSrv.getIngredients();
    });
  }

  ngOnDestroy(): void {
    this.onAddIngredientSub.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingSrv.getIngredients();
  }
}
