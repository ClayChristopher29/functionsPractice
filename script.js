// Functions Practice 1

// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.************************************

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

//     if (currentNumber % 5 === 0) {
//         console.log("monkey",currentNumber)
//     }
// }
// for (let currentNumber=1; currentNumber <=100; currentNumber++){
//     if (currentNumber % 7 ===0) {
//         console.log("chickenMonkey",currentNumber)
//     }
// }

// functions Practice 2*******************************************************************************************************

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.*******************************************
// let bandNumber = 1

// const takeNumber = function (bandName){
//     const bandSent = `${bandName},${bandNumber++}`
//     return bandSent
// }


// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console


// // Functions Practice 3****************************************

// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }
// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// const cookedFood = [];
// function grill (currentObject) {
//     // Modify the food so that it is cooked
//     currentObject.cooked = true;
//     cookedFood.push(currentObject);
// };
// grill(hamburger)
// grill(zucchini)
// grill(chickenBreast)
// grill(corn)
// grill(steak)

// console.log(cookedFood)

// Functions Practice4*********************************

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/


// function addExcitement(theWordArray) {
//     let buildMeUp = ""
//     for (let i = 0; i < theWordArray.length; i++) {
//         if ((i + 1) % 3 === 0) {
//             buildMeUp = buildMeUp + " " + theWordArray[i] + ["!"]
//         }
//         else(buildMeUp=buildMeUp +" "+ theWordArray[i])
//         console.log(buildMeUp)

//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)

function addExcitement (theWordArray,punctuation,multiply){
    let buildMeup = ""
    for (let i = 0; i < theWordArray.length; i++){
        if(i%3===0 && i !=0){
            buildMeup = buildMeUp + punctuation.repeat(multiply) + " " + theWordArray[i]
        } else {
            buildMeup = buildMeup + " " + theWordArray[i]
        }
    }
}
addExcitement(sentence,"?",4)