import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeSrv: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeSrv.getRecipe(params['id']);
    });
  }

  onAddIngredientsToShoppingList() {
    this.recipeSrv.addIngredientsToShopping(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
    });
  }
}
