"use strict";
var RecipeLine = (function () {
    function RecipeLine(fruit, quantity) {
        this.fruit = fruit;
        this.quantity = quantity;
    }
    return RecipeLine;
}());
var Recipe = (function () {
    function Recipe() {
        this.fruitList = [];
    }
    Recipe.prototype.addFruit = function (fruit, quantity) {
        this.fruitList.push(new RecipeLine(fruit, quantity));
    };
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.js.map