function alwaysHungry(arr) {
    for (var i=0; i<arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy");
        }
    }
}


alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);