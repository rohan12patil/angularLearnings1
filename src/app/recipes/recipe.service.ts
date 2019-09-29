import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'EggPlant Parmesan',
     'This is a Recipe for EggPlant Parmesan ',
     'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg',
     [ new Ingredient('EggPlant', 1), new Ingredient('Onion', 2)]
     ),
    new Recipe(
      'Crescent',
      'Recipe for making delicious Crescent',
      'https://images-gmi-pmc.edge-generalmills.com/23bcd559-1e27-4c54-90a7-812690764c7f.jpg',
      [ new Ingredient('Eggs', 3), new Ingredient('Flour', 1)]
      )
  ];

  constructor(
    private shoppingListService: ShoppingListService
  ){}
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
