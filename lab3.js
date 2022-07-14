// write a function that loops through an array of numbers and return the total sum of the array

let arrayOfNumbers = [6,98, 16, 22]

sum = 0

for (let i=0; i<arrayOfNumbers.length; i++) {
    sum = sum + arrayOfNumbers[i]
}

console.log(sum)