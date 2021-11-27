import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeSrv: RecipeService) {
    this.recipeSrv.onSetSelectedRecipe.subscribe(() => {
      this.recipe = this.recipeSrv.selectedRecipe;
    })
  }

  ngOnInit(): void {
    this.recipe = this.recipeSrv.selectedRecipe;
  }

  onAddIngredientsToShoppingList() {
    this.recipeSrv.addIngredientsToShopping(this.recipe.ingredients);
  }
}
