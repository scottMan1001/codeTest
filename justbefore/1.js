function a (){
    console.log(1)
    let promise = new Promise(function (resolve,reject){
        console.log("Promise")
        resolve("2")
    })
    promise.then(res=>console.log(res))
}
setTimeout(() => {
    console.log(1)
  
}, 0);
let promise = new Promise(function (resolve,reject){
    console.log("Promise")
    resolve("2")
})
promise.then(res=>console.log(res))
