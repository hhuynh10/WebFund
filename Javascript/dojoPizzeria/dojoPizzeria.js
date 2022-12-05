function pizzaOven (crustType, sauceType, cheeses, toppings){
    let pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];
let sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];
let cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];
let toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];
function randomPizza(){
    let pizza = {}
    for (let i = 0; i <= crustTypes.length; i++){
        pizza.crustType = crustTypes[Math.floor(i * Math.random())]
    }
    for (let i = 0; i <= sauceTypes.length; i++ ){
        pizza.sauceTypes = sauceTypes[Math.floor(i * Math.random())]
    }
    for (let i = 0; i <= cheeses.length; i++ ){
        pizza.cheeses = cheeses[Math.floor(i * Math.random())]
    }
    for (let i = 0; i <= toppings.length; i++ ){
        pizza.toppings = toppings[Math.floor(i * Math.random())]
    }
    return pizza
}

let pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])

console.log(pizza1)
console.log(pizza2)

console.log(randomPizza())