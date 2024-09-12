/**
 * 
 * 
 * 
 */

// variables
const PI = 3.1415;
let radius = 5;
let area = PI * radius * radius;
let plantSpace = 0.8;
let plantStart = 20;

// Plant Growth Control Flow
let weeks = 1;
let states = plantStart * Math.pow(2, weeks);
let capacity = area / (plantSpace * plantStart);
let percentage = states / capacity;

// Pruned
if (capacity > 80) {
    console.log('pruned');
} else if (capacity >= 50 && capacity <= 80) {
    console.log('monitered')
} else {
    console.log('More room to grow plants')
}
