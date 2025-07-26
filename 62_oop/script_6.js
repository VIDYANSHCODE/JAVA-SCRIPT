//////////////////////     geter and setter     /////////////////
class Animal  {
    constructor(name) {
        this._name = name
    }
    fly(){
        console.log("mai ud rha hu")
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
    
}

let a = new Animal("peacock")
a.fly()
a.name = "SPARROW"
console.log(a.name)

console.log(a instanceof Animal)