// sets kelvin to always be 293
const kelvin = 0;

// converts kelvin to celsius by subtracting 273
var celsius = kelvin - 273;

// converts celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;

// rounds fahrenheit down to the nearest integer
var fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
