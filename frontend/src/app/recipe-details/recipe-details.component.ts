import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  editMode: boolean = false;
  allowEdit: boolean;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private sessionService: SessionService,
    private location: Location
  ) { }

  edit():void {
    this.editMode=true;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
    this.allowEdit = this.sessionService.isTokenValid();
  }

}
