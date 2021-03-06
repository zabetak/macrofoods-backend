import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodsService } from './foods.service';
import { RecipeService } from './recipe.service';
import { TagService } from './tag.service';
import { SessionService } from './session.service';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ManageIngredientsComponent } from './create-recipe/manage-ingredients/manage-ingredients.component';
import { ManageStepsComponent } from './create-recipe/manage-steps/manage-steps.component';
import { AppRoutingModule } from './/app-routing.module';
import { TopRecipesComponent } from './top-recipes/top-recipes.component';
import { SearchTagsComponent } from './create-recipe/search-tags/search-tags.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NutrientListComponent } from './nutrient-list/nutrient-list.component';
import { NutrientDetailsComponent } from './nutrient-details/nutrient-details.component';
import { DisplayImageComponent } from './display-image/display-image.component';
import { LoginComponent } from './login/login.component';
import { httpInterceptorProviders } from './http-interceptors/index';


@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    ImageUploadComponent,
    CreateRecipeComponent,
    ManageIngredientsComponent,
    ManageStepsComponent,
    TopRecipesComponent,
    SearchTagsComponent,
    RecipeDetailsComponent,
    NutrientListComponent,
    NutrientDetailsComponent,
    DisplayImageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    FoodsService,
    RecipeService,
    TagService,
    SessionService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
