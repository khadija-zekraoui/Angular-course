import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingSrv: ShoppingService) {
    this.shoppingSrv.onAddIngredient.subscribe(() => {
      this.ingredients = this.shoppingSrv.getIngredients();
    });
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingSrv.getIngredients();
  }
}
