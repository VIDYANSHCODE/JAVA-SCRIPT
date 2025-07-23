let p1 = new Promise((resolve, reject) => {
    console.log("hey I am not resolved yet");
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

p1.then(() => {
    console.log("hurrey");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( 4);
        }, 5000);
    })
}).then((value) => {
    console.log(value);
})

p1.then(()=> {
    console.log("I am resolved now");
})

