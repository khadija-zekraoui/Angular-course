import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Couscous', 
      'Es un plato tradicional de la cocina marroquí, a base de sémola de trigo duro',
      'https://qph.fs.quoracdn.net/main-qimg-86960383d10b5cad66d6c81bb8106f5e'
    ),
    new Recipe(
      'Tajine', 
      'Es un plato tradicional de la Gastronomía marroquí que lleva el nombre de la olla de barro en la que se cocina.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tajine_marocain.jpg/1280px-Tajine_marocain.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
