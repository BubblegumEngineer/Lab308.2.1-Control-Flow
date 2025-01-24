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

