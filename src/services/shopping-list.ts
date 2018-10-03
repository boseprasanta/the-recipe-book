import { Ingredient } from "../models/ingredient";
export class ShoppingListService { 
    private ingredients : Ingredient[] = [];
    addItem(name: string, amount: number){
        this.ingredients.push(new Ingredient(name,amount));
    }
    addItems(items: Ingredient[]){
        this.ingredients.push(...items);
        /* 
            this.ingredients.push(items); --> [1,2,3,[4,5]]
            this.ingredients.push(...items); --> [1,2,3,4,5]
        */
    }
    getItems() {
        return this.ingredients.slice();
    }
    removeItem(index: number){
        this.ingredients.splice(index,1);
    }
}