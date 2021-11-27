import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  onAddIngredient = new EventEmitter();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 20),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onAddIngredient.emit();
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]){
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // To avoid emitting several events
    this.ingredients.push(...ingredients);
    this.onAddIngredient.emit();
  }
}
