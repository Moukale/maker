"use strict";
var Fruit = (function () {
    function Fruit(_Id, _Name) {
        this._Id = _Id;
        this._Name = _Name;
    }
    Object.defineProperty(Fruit.prototype, "Id", {
        get: function () {
            return this._Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fruit.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        enumerable: true,
        configurable: true
    });
    return Fruit;
}());
exports.Fruit = Fruit;
// let pamplemousse:Fruit = new Fruit(1, "pamplemousse", 0);
// let orange:Fruit = new Fruit(1, "orange", 1);
// let citron:Fruit = new Fruit(1, "citron", 3);
// document.writeln(pamplemousse.print());
// document.writeln(orange.print());
// document.writeln(citron.print()); 
//# sourceMappingURL=fruit.js.map