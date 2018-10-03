import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list';
import { Ingredient } from '../../models/ingredient';
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  ingredientList:Ingredient[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private slService : ShoppingListService) {
  }

  onAddItem(form:NgForm){
    this.slService.addItem(form.value.ingredientName,form.value.ingredientAmount);
    form.reset(); // Resets the form object
    this.loadItems();
  }

  ionViewWillEnter(){ // Will load even if page is being cached
    this.loadItems();
  }

  onRemoveItem(index:number){
    this.slService.removeItem(index);
    this.loadItems();
  }

  private loadItems(){
    this.ingredientList = this.slService.getItems();
  }

}
