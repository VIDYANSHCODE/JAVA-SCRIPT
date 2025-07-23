



try{
    // throw new Error("harry is not good")
    let age = prompt("enter your age")
    age = Number.parseInt(age)
    if(age>120){
        throw new ReferenceError("this is probably not true")
    }
    
    
    
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
}