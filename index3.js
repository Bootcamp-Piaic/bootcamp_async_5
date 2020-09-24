console.log("Before Preparing Food");
function Order_Food(item) {
    let promise = new Promise(function (resolve,reject){
        setTimeout(() => {
            console.log("Food is preparing by chef");
            resolve(item)
        }, 3000);
    });
    return promise;
}

let promise= Order_Food("PIZZA")

promise.then(function(food){
    console.log("Take your Food = ",food)
    return Order_Food("BURGER") // passing new item
}).then(function(food){
    console.log("Take your Food = ",food)
    return Order_Food("SAND-WICH") // passing new item
}).then(function(food){
    console.log("Take your Food = ",food)
})
.catch(function (error){
    console.log("Error : ",error) // this will execute when 'reject'  will call
})
console.log("Food Preparation is done ...!")