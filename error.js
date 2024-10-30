const { CustomError } = require("./CustomError");

// const error = new Error("Something went wrong!");
// console.log(error.stack);
// console.log(error.message);

// throw new Error("I am error object")

// throw new CustomError("I am custom error object")

// try{
//     doSomething();
// } catch(e){
//     console.log("Error Occurred");
//     console.log(e);
// }

function doSomething(){
    const data = fetch("localhost:300/api")
    // console.log("I am doSomething function");  
    // const data = "I am doSomething function";
    return data;
}

// process.on("uncaughtException", (err) => {
//     console.log("There was an uncaught exception", err);
//     process.exit(1)
// });

// doSomething();


//With Promises

// const promise = new Promise((resolve, reject) => {

//     if(false){
//         resolve(doSomething());
//     }
//     else{
//         reject(doSomething());
//     }
// })

// promise.then((val) => {

//     console.log(val); 
// }).catch((err) => {
//     console.log("Error Occurred");
//     console.log(err);
    
// });

//With Async and Await

const someFunction = async () => {
    try{

        await doSomething();
    }
    catch(err){
        throw new CustomError(err.message);
    }
}

someFunction();