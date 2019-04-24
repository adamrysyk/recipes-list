import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pad Kaprao',
      'The best Thai dish',
      'https://cdn.shopify.com/s/files/1/0295/0261/articles/IMG_1805_1_grande.jpg?v=1450745238'
    )
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
