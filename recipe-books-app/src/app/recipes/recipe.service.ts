import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { v4 as uuidv4 } from 'uuid';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe: Recipe;
  recipes: Recipe[] = [
    new Recipe(
      uuidv4(),
      'Couscous',
      'In Morocco the term “couscous” refers to a whole dish made usually of meat and vegetables cooked in a delicious broth served on a bed of steamed semolina granules.',
      'https://qph.fs.quoracdn.net/main-qimg-86960383d10b5cad66d6c81bb8106f5e',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Semolina', 1),
        new Ingredient('Pumpkin', 1),
      ]
    ),
    new Recipe(
      uuidv4(),
      'Tajine',
      'Moroccan tajine dishes are slow-cooked savory stews, typically made with sliced meat, poultry or fish together with vegetables or fruit.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tajine_marocain.jpg/1280px-Tajine_marocain.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Carrot', 3),
        new Ingredient('potato', 2),
      ]
    ),
  ];

  onSetSelectedRecipe = new EventEmitter();

  constructor(private shoppingSrv: ShoppingService) {}

  // Give a copy of the recipes array and not the reference
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(recipeId: string): Recipe {
    return  this.recipes.find(({ id }) => id === recipeId);
  }

  setSelectedRecipe(recipe) {
    this.selectedRecipe = recipe;
    this.onSetSelectedRecipe.emit();
  }

  addIngredientsToShopping(ingredients: Ingredient[]) {
    this.shoppingSrv.addIngredientsFromRecipe(ingredients);
  }
}
