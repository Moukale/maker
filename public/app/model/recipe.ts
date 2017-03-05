import {Fruit} from './fruit'

class RecipeLine{
    
    constructor(public fruit : Fruit, public quantity: number){}
}

export class Recipe{
    fruitList : Array<RecipeLine> = []

    addFruit(fruit:Fruit, quantity:number){
        this.fruitList.push( new RecipeLine(fruit, quantity));
    }

}