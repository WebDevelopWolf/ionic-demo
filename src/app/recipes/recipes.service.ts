import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://img.taste.com.au/0CqH2IP5/taste/2021/04/air-fryer-chicken-schnitzel-170781-1.jpg',
      ingrediants: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Salmon',
      imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/7f4554ba-8c3b-483f-ab26-7e2235343c73.jpg',
      ingrediants: ['Salmon', 'Baby Potatoes', 'Button Mushrooms']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
