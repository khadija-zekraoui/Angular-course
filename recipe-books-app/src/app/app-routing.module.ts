import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // empty path is part of every route. Ony redirect if the all path is empty
  { path: 'recipes', component: RecipesComponent }, // http://localhost:4200/recipes
  { path: 'shopping-list', component: ShoppingListComponent }, // http://localhost:4200/shopping-list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
