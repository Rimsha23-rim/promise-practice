// Question:1
let promise= new Promise(function(resolve,reject){
    let acountBalance=10000;
    let withdrawlAmount=7000;
    if (acountBalance>=withdrawlAmount){
        resolve("Your balance is sufficient");
    }
    else{
        reject("Your balance is insufficient");
    }
});
promise.then(function(result){
    console.log(result);
})
promise.catch(function(error){
    console.log(error);
});
// Question:2
let check= new Promise(function(resolve,reject){
    let marks=65;
    if (marks>100 || marks<0) {
        reject("Invalid Marks")
    } 
    else if (marks>=50) {
        resolve("Pass");
    }
    else{
        reject("Fail"); 
    }
});
check.then(function(result) {
    console.log(result);
    })
check.catch(function (error) {
    console.log(error);
})
// Question:3
let product= new Promise(function(resolve,reject){
    let delivery=true

    setTimeout(function() {
if (delivery==true)
    {resolve("Product Delivered Successfully");
    }
    else{
        reject("Delivery Failed")
    }
    }, 3000);
});
product.then(function (result) {
    console.log(result);
})
product.catch(function (error) {
    console.log(error);
});

// Question:4
let mypromise= new Promise(function(resolve,reject){
resolve(10);
});
mypromise
.then(function(num) {
    return num+20;
})
.then(function (num) {
    return num*2;
})
.then(function (num) {
    return num-5;
})
.then(function (result) {
    console.log("Final Result=", result);
});
