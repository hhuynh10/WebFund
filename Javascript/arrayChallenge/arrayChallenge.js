// Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 'food'){
            console.log('yummy')
            count ++
        }
    }
    if (count == 0){
        console.log('Im hungry')
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);


// High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


// Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i ++){
        sum = (sum + arr[i])
    }
    let average = sum / arr.length
    var count = 0
    for (let j = 0; j < arr.length; j ++){
        if (arr[j] > average){
            count ++
        }
    }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


// Array Reverse
// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    let newArr = []
    for (let i = 0, j = arr.length-1; i < arr.length; i++, j--){
        newArr[i] = arr[j]
    }
    return newArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);