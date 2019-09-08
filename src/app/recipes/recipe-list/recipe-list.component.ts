import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe1', 'This is a Test Recipe 1 ', 'imgPath1'),
    new Recipe('Recipe2', 'This is a Test Recipe 2', 'imgPath2')
  ];
  constructor() { }

  ngOnInit() {
  }

}
