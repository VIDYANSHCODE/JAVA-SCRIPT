//////////////////////// constructor overriding   //////////////////////////
class Employee {
    constructor(name){
        this.name = name
        console.log(`${name} employee constructor called`)
    }
    login(){
        console.log("employee logged in")
    }
    logout(){
        console.log("employee logged out")
    }
    requestLeaves(leave){
        console.log(`employee requested for ${leave} leaves`)
    }

}
///////////////////////////   method overriding   //////////////////////////
class programmer extends Employee {
    // constructor(){                 // we can also use constructor overriding
    //     super()
    //     console.log("programmer constructor called")
    // }
    constructor(name){
        super(name)
        console.log(`${name} programmer constructor called`)
        this.name = name
    }
    login(){
        console.log("programmer logged in")
    }

    requestCofee(x){
        console.log(`emplyee has requested for ${x} cofee` )
        
    }
    requestLeaves(leave){
        super.requestLeaves(leave)
        console.log("one extra is granted");
        
    }
}

let e = new Employee("hharry")
e.login()
e.requestLeaves(5)

let p = new programmer("vidyanshu")
p.login()
p.requestLeaves(5)
p.requestCofee(2)
