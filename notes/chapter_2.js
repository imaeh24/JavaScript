//Chapter 2 Practice Problems

/* 
    1. Define a variable called name and set it equal to a string that contains your name. 
       Then, demonstrate how you would change its value to your full name.
*/
let name = "isabella"
name = "Isabella Hesselton"

console.log(name)

/* 
    2. How would you compare two variables, a and b, to check equality?
*/

let a = '7'
let b = '7'

console.log(a===b)


/* 
    3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. 
       If true, it should log "Adult" to the console; otherwise, it should log "Minor".
*/

let age = 22

if (age > 18) {
    console.log('adult')
} 
else {
    console.log('minor')
}



/* 
    4. Create a for loop that iterates from 0 to 10, but only prints even numbers
*/

let numbers_one_to_ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array_length = numbers_one_to_ten.length

for (let i = 0; i < array_length; i++) {
    let current_value = numbers_one_to_ten[i]
    let is_even = current_value % 2 === 0
    if (is_even) {
        console.log(current_value)
    }
}


/* 
   5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.
*/

let array_of_numbers = [10, 6, 14, 22, 7, 34, 77, 986, 45, 49]

let sum = 0
let i = 0

while (sum < 100) {
    let new_current_value = array_of_numbers[i]
    sum = sum + new_current_value

    i++
}

console.log(sum)

/* 
    6. Define a function named calculateArea that takes two parameters, width and height, 
       and returns the area of a rectangle. // width * height
*/

function calculateArea(width, height) {
    let area = width * height
    return area
}

let area_one = calculateArea(7, 20)
let area_two = calculateArea(10, 9)

console.log('The calculated area: ', area_one)
console.log('The calculated area: ', area_two)