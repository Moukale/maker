export class Fruit{

    get Id():number{
        return this._Id;
    }

    get Name():string{
        return this._Name;
    }

    constructor(private _Id:number, private _Name:string){}

}


// let pamplemousse:Fruit = new Fruit(1, "pamplemousse", 0);
// let orange:Fruit = new Fruit(1, "orange", 1);
// let citron:Fruit = new Fruit(1, "citron", 3);

// document.writeln(pamplemousse.print());
// document.writeln(orange.print());
// document.writeln(citron.print());