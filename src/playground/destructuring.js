// const person = {
//   name: 'Sam',
//   age: 38,
//   location: {
//     city: 'Seoul',
//     temp: 66,
//   },
// }

// const { name, age } = person
// // const name = person.name
// // const age = person.age

// console.log(`${person.name} is ${person.age}`)

// // if (person.location.city && person.location.temp){
// // console.log(`It's ${person.location.temp}` in ${person.location.city});
// // }

// const { city, temp } = person.location
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// }

// const { name: publisherName = 'Self Published' } = book.publisher

// console.log(publisherName)

//
// Array Destructuring
//

// const address = [
//   '1299 S Juniper Street',
//   'Philadelphia',
//   'Pennsylvania',
//   '19147',
// ]

// const [, city, state = 'New York', zip] = address

// console.log(`You are in ${city} ${state} ${zip}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [foodItem, small, medium, large] = item

console.log(`A medium ${foodItem} costs ${medium} `)
