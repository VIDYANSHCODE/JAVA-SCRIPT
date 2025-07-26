class Railwayform{
    constructor(name,number,adress){
        this.name = name;
        this.number = number;
        this.adress = adress
    }
    submit(){
        alert(this.name +" form submitted for the train number "+this.number+"at "+this.adress+" ")
    }
    cancel(){
        alert(this.name +"  form cancelled for the train number "+this.number+"at "+this.adress+" ")
        this.trainNumber = 0
    }
}

let harryForm = new Railwayform("harry", 420,"delhi")
harryForm.submit()
harryForm.cancel()