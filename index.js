const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
//console.log("Garden area is:", area, "square meters.");
plantSize = 0.8;
numPlants = 20;
originalPlantSpace = numPlants * plantSize




console.log("CONTROL FLOW LAB")
console.log("=================================");

// Predict the plant growth after a specific number of weeks.


console.log("Original number of plants is " + numPlants)

let growth1Wk = numPlants * 2
console.log('Number of plants after 1 week is :' + growth1Wk);

let growth2Wk = growth1Wk * 2
console.log('Number of plants after 2 weeks is :' + growth2Wk);

let growth3Wk = growth2Wk * 2
console.log('Number of plants after 3 weeks is :' + growth3Wk);

console.log("=================================");

// Plant space after 1, 2 and 3 weeks:

console.log("Original plant space is : " + originalPlantSpace + " square meters.");

let plantSpaceWk1 = originalPlantSpace * 2
console.log("Plant space after 1 week is: " + plantSpaceWk1 + " square meters.");

let plantSpaceWk2 = plantSpaceWk1 * 2
console.log("Plant space after 2 weeks is: " + plantSpaceWk2 + " square meters.");

let plantSpaceWk3 = plantSpaceWk2 * 2
console.log("Plant space after 3 weeks is: " + plantSpaceWk3 + " square meters.");

console.log("=================================");

// Garden Area per week: 

console.log("The total garden area is:", area, "square meters.");

let wk0GardenArea = (originalPlantSpace / area) * 100;
console.log("In the initial week: the plants take " + wk0GardenArea + " % of the garden area.")

let wk1GardenArea = (plantSpaceWk1 / area) * 100;
console.log("In week 1: the plants would take " + wk1GardenArea + " % of the garden area.")

let wk2GardenArea = (plantSpaceWk2 / area) * 100;
console.log("In week 2: the plants would take " + wk2GardenArea + " % of the garden area.")

let wk3GardenArea = (plantSpaceWk3 / area) * 100;
console.log("In week 3: the plants would take " + wk3GardenArea + " % of the garden area.")

console.log("=================================");

// Implement control flow to make decisions on whether the plants should be:

if (wk1GardenArea > 80) {
    console.log("Week 1: Pruned, too many plants.");
} else if (wk1GardenArea >= 50 && wk1GardenArea <= 80) {
    console.log("Week 1: Monitored, growth is acceptable.");
} else {
    console.log("Week 1: Planted, more room for plants.");
}

if (wk2GardenArea > 80) {
    console.log("Week 2: Pruned, too many plants.");
} else if (wk2GardenArea >= 50 && wk3GardenArea <= 80) {
    console.log("Week 2: Monitored, growth is acceptable.");
} else {
    console.log("Week 2: Planted, more room for plants.");
}

if (wk3GardenArea > 80) {
    console.log("Week 3: Pruned, too many plants.");
} else if (wk3GardenArea >= 50 && wk3GardenArea <= 80) {
    console.log("Week 3: Monitored, growth is acceptable.");
} else {
    console.log("Week 3: Planted, more room for plants.");
}

console.log("=================================");

// Part 2

console.log("Part 2: Thinking Bigger");

console.log("=================================");

//Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.


let numPlants100 = 100;
let newPlantSpace100 = numPlants100 * plantSize; //80
console.log("The starting plant space for 100 plants for week 0 is: " + newPlantSpace100 + " square meters.");

let week = 0;
do {
    newPlantSpace100 *= 2;
    week ++;
} while (week < 10);

    console.log("At week "+ week + " it needs " + newPlantSpace100 + " square meters.");


// If the space remained circular, what would be the radius of this expanded garden?
// const area = PI * radius * radius;

let radius100 = Math.sqrt(newPlantSpace100/Math.PI);
console.log("The radius of this expanded garden would be: " + radius100 + " meters.");

console.log("=================================");

// Part 3

console.log("Part 3: Errors in Judgement");

console.log("=================================");


// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.


try {
    if(radius100 > radius) throw "Not enough space.";
  } 
// catch only happens when the try block is thrown
// if throw happens, catch happens. 
  catch (error) {
    console.log("An error occurred: Not enough space available.");
  }