import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css'],
})
export class RecipesEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode = false;

  constructor(
    private recipeSrv: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params['id']) {
        this.id = params['id'];
        this.editMode = true;
        this.recipe = this.recipeSrv.getRecipe(params['id']);
      }
    });
  }
}
