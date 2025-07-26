/////////////////////////////////   inheritance   //////////////////////////////////
class Animal {
    constructor(name,color) {
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running")
    
    }
    shouting(){
        console.log(this.name + " is shouting")
    
    }
}

class Monkey extends Animal {
    constructor(name,color) {
        super(name,color)
    }
    jump(){
        console.log(this.name + " is jumping")
    
    }
}
let lion = new Animal("lion","yellow")
let monkey1 = new Monkey("chimpi","black")
lion.run()
lion.shouting()
monkey1.run()
monkey1.shouting()
monkey1.jump()