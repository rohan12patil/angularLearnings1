import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('EggPlant Parmesan', 'This is a Recipe for EggPlant Parmesan ', 'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg'),
    new Recipe('Crescent', 'Recipe for making delicious Crescent', 'https://images-gmi-pmc.edge-generalmills.com/23bcd559-1e27-4c54-90a7-812690764c7f.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
