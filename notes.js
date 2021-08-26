// comment
// console.log("hello " + "world")

// variables, old way 'var', new way 'let' or 'const'
  // - store data for the ref later
  // - multiple word camelCase
  // Can have letter, number, _ $
  // Have to start with letter, _, $  (numbers may give error)
  // stay away from reserve words (class, var, String, etc)
  // descriptive
//var balance = 1000
//console.log(balance)
  // dont use var because of the scope

// scope of this is going to be where it is defined
// const is used for other things in javascript JS

// let - change items you are assigning
// const - items should not be changed, constant variable

//let name = "bob"
//name = "jim"
//console.log(name)

//const name = "bob"
//name = "jim"
//console.log(name)

// var planet = "Earth";
// var greeting = "Hello";
// console.log(greeting);
// // => "Hello"

// var planetGreeting = "Hello " + planet;
// console.log(planetGreeting);
// // => "Hello Earth"

// var meaning = "The meaing of life is " + 42;
// console.log(meaning);
// // => "The meaning of life is 42"

// var value = "The value is " + 3/4;
// console.log(value);
// // => "The value is 0.75" (What happened here?)

// var tabbedName = "Name:\tDave";
// console.log(tabbedName);
// // => "Name: Dave"

// var nixon = "I \"am not a crook\" - Nixon";
// console.log(nixon);
// // => "I "am not a crook" - Nixon"


// var escapeBackSlash = "You can do it put your \\ into it";
// console.log(escapeBackSlash);
// // => "You can do it put your \ into it"

// var newLine = "Roses are red\nViolets are blue";
// console.log(newLine);
// // => "Roses are red
// // Violets are blue"

//let colors = ["Pink", "Yellow", "Blue",]
//console.log(colors[1])
//console.log(colors.indexOf("Blue"))
//console.log(colors.join(", "))
//colors.push("Purple") //  add to end of list
//colors.unshift("Green") // add to the front of list
// remove a item
//colors.pop() // remove item from end
//console.log(colors.slice(2)) // cutting out certain number of items
//console.log(colors)
//console.log(colors.length)
//console.log(colors.reverse())

//let colors = ["Pink", "Yellow", "Blue",]
//for (let i = 0; i < colors.length; i++) {
//  console.log(colors[i])
//}

//colors.forEach( color => {
//  console.log(color)
//})

// colors.forEach( color => {
//   console.log(color)
// })

// for (let color of colors) {
//   console.log(color)
// }

// prefered way
// colors.map( color => {
//   console.log(color)
// })

// var numbers = [1,2,3,4,5,6,7,8]

// var even = numbers.filter( function(num) {
//   return num % 2 === 0
// })

// console.log(even)

// var numbers = [1,2,3,4,5,6,7,8]

// // total = accumulator && num = currentValue
// var sum = numbers.reduce( function(total, num) {
//   return total + num
// }, 0 )

// console.log(sum)

// hashes 
// object - Noun, item and tools
// hashes, 
// JSON
// class
// let person = { name: "judy", age: 24 }
// console.log(person['name'])
// console.log(person.name)
// console.log(person.age)
// person.age = 26
// person.hair = "brown"
// console.log(person.age)
// console.log(person)

//let ppl = [
//    { name: 'bob', age: 2 },
//    { name: 'jill', age: 56 },
//    { name: 'judy', age: 21 },
//  ]

// ppl.map( person => {
// console.log(person.name)
// console.log(person.age)
// })