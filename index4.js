console.log("Before Preparing Food");
function Order_Food(item) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (item !== "Burger") {
                console.log("Food is preparing by chef");
                resolve(item)
            } else {
                reject("Food should not be Burger")
            }
        }, 3000);
    });
    return promise;
}

async function Start_Process() {
    try {
        let food1 = await Order_Food("Biryani");
        console.log("Take your Food = ", food1);
        let food2 = await Order_Food("Burger");
        console.log("Take your Food = ", food2);
        let food3 = await Order_Food("Pizza");
        console.log("Take your Food = ", food3, "\n Finish");
    }
    catch (error) {
        console.log("Error in catch = ", error)
    }
}
Start_Process()
console.log("Food Preparation is done ...!")