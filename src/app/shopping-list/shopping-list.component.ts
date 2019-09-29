import { Component, OnInit, SimpleChanges, AfterContentChecked } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component ({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, AfterContentChecked {

  ingredients: Ingredient[] = [];
  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
    this.shoppingListService.ingredientsChanged.subscribe( (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    });
  }

}
