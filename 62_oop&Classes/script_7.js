class complex{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    add(c){
        this.real += c.real;
        this.imaginary += c.imaginary;
        return this;

    }

}

let a = new complex(10, 20);
let b = new complex(30, 40);
let c = a.add(b);
console.log(c.real);
console.log(c.imaginary);