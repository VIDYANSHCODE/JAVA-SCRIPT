class Animal{
    constructor(name){
        this.name = name
    }
    walk(){
        console.log(`${Animal.capitalize(this.name)} Animal is walking`)
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

}

let j = new Animal("jack")
j.walk()