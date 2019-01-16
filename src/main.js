const util = require('util');


let timoutMain = ()=> {
    let setTimoutPromise = util.promisify(setTimeout);
    
    let mpromise = setTimoutPromise(1000, "Hello World");
    mpromise.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
};


let intervalMain = ()=> {
    setInterval((data)=>{
        console.log(new Date(), data)
    }, 1000, new Date());
};


// Execution control
let main = intervalMain;
main();