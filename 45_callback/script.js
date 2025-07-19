// let a = prompt("Enter your Name"); // let cannot be redeclared but can be updated
// let b = prompt("Enter your Age"); // var can be redeclared as well as updated

// console.log("Hello " + a + ", you are " + b + " years old.");

// console.log('start')

// setTimeout(() => {
//     console.log('set timeout function')
// })
// log('end')

function loadscript(src,callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        console.log('script loaded successfully'+ ' from ' + src);
        callback(null,src);
    }
    script.onerror = function() {
        console.log('Error loading script from ' + src);
        callback(new Error('Error loading script from ' + src),src);
    }
    
    document.body.appendChild(script);
}

// Example callback function
const hello = (error,src)=> {
    if (error) {
        console.log(error);
        return;
    }
    alert('hello world'+ ' from ' + src);
}


loadscript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    ,hello);