const sayHello = (name,greeting)=>console.log(greeting+" "+name);
    
const x = {
    name:"harry",
    role: "JS Developer",
    exp: 30,
    show:function (){
        console.log(`this name is ${this.name}\n the role is ${this.role}`);
        
    }
}
// console.log(x.name, x.role)
// sayHello("vidyansu","goodmorning")
x.show()