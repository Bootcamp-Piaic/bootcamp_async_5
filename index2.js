console.log("Before Preparing Food");
function Order_Food(tell_me_when_food_ready, item) {
    setTimeout(() => {
        console.log("Food is preparing by chef");
        tell_me_when_food_ready(item)
    }, 3000);
}
Order_Food((food) => {
    console.log("Take Your Food from chef = " + food)
    Order_Food((food) => {
        console.log("Take Your Food from chef = " + food)
        Order_Food((food) => {
            console.log("Take Your Food from chef = " + food)
        }, "SANDWICH")
    }, "BURGER")
}, "PIZZA");
console.log("Food Preparation is done ...!")