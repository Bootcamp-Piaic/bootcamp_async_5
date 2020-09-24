console.log("Before Preparing Food");
function Order_Food(tell_me_when_food_ready, item) {
    setTimeout(() => {
        console.log("Food is preparing by chef");
        tell_me_when_food_ready(item)
    }, 3000);
}
function Item_Ready_Again_Again(food) {
    console.log("Take Your Food from chef = " + food)
    console.log("Finish")
}
function Item_Ready_Again(food) {
    console.log("Take Your Food from chef = " + food)
    Order_Food(Item_Ready_Again_Again, "Sand-Wich")
}
function Item_Ready(food) {
    console.log("Take Your Food from chef = " + food)
    Order_Food(Item_Ready_Again, "BURGER")
}
Order_Food(Item_Ready, "PIZZA")
console.log("Food Preparation is done ...!")