let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response)=>{
    console.log(response.status);
    return response.json()
}).then((value2)=>{
    console.log(value2);
    
})

let p = 