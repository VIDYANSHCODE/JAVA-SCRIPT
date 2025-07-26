// 4 pillars of OOPs
// 1> Abstraction   
// 2> Encapsulation
// 3> Inheritance
// 4> Polymorphism
//////////////////////       rototype based inheritance  //////////////////////////
// let a = {
//     name:"harry",
//     age:20,
//     language:"english",
//     // run:()=>{                  // if the object has same function name then it will override the function 
//     //     alert("self running")
    
//     // }
// }
// console.log(a)

// let p = {
//     run:()=>{
//         alert("running")
    
//     }
// }
// a.__proto__ = p
// a.run()

// p.__proto__ ={
//     name2:"vidyanshu",
//     age:19
// }

// console.log(a.name2)

//////////////////////////  CLASSES AND OBJECTS /////////////////////////////////
// class RailwayForm {
//     submit(){
//         alert(this.name +" form submitted for the train number "+this.number+"")
//     }
//     cancel(){
//        alert(this.name +"  form cancelled for the train number "+this.number+"")
//     }
//     fill(givenName, trainNumber){
//         this.name = givenName
//         this.number = trainNumber

//     }
// }

// let harryForm = new RailwayForm()
// harryForm.fill("harry", 420)
// let vidyanshuForm1 = new RailwayForm()
// let vidyanshuForm2 = new RailwayForm()
// vidyanshuForm1.fill("vidyanshu",101)
// vidyanshuForm2.fill("vidyanshu",9211)

// harryForm.submit()
// harryForm.cancel()

// vidyanshuForm1.submit()
// vidyanshuForm2.submit()
// vidyanshuForm2.cancel()
//////////////////////////////    CONSTRUCTORS ////////////////////////////////

// class RailwayForm {
//     constructor(name,trainNumber){
//         console.log("constructor called" + name + trainNumber)
//         this.name = name
//         this.number = trainNumber
        
//     }
//     submit(){
//         console.log(this.name +" form submitted for the train number "+this.number+"")
//     }
//     cancel(){
//        console.log(this.name +"  form cancelled for the train number "+this.number+"")
//     }
//     // fill(givenName, trainNumber){          // we will remove the fill method
//     //     this.name = givenName
//     //     this.number = trainNumber

//     // }
// }

// let harryForm = new RailwayForm("harry", 420)
// // harryForm.fill("harry", 420)      // IF I FORGOT TO FILL THE FORM
// let vidyanshuForm1 = new RailwayForm()
// let vidyanshuForm2 = new RailwayForm()
// // vidyanshuForm1.fill("vidyanshu",101)
// // vidyanshuForm2.fill("vidyanshu",9211)

// harryForm.submit()
// harryForm.cancel()

// vidyanshuForm1.submit()
// vidyanshuForm2.submit()
// vidyanshuForm2.cancel()