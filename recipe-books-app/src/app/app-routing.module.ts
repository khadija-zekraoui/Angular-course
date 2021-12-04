import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // empty path is part of every route. Ony redirect if the all path is empty
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent, pathMatch: 'full' }, // http://localhost:4200/recipes
      { path: 'new', component: RecipesEditComponent }, // http://localhost:4200/recipes/new
      { path: ':id', component: RecipeDetailComponent }, // http://localhost:4200/recipes/23b399db-b146-4fd2-bc0a-aa0560a87ce4
      { path: ':id/edit', component: RecipesEditComponent }, // http://localhost:4200/recipes/23b399db-b146-4fd2-bc0a-aa0560a87ce4/edit
    ],
  }, // http://localhost:4200/recipes
  { path: 'shopping-list', component: ShoppingListComponent }, // http://localhost:4200/shopping-list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
