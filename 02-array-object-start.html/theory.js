const names = ['Филипп', 'Максим', 'Леха', 'Тимур']


// names.push('Кирилл')
// names.unshift('Кирилл')
// names.shift()
//  names.pop()
// console.log('names: ', names)

// console.log(names.reverse())

// console.log(names.toReversed())
// console.log(names)

// console.log(names.toSorted())
// console.log(names)

// const index = names.indexOf('Максим')
// console.log(index)

// const newNames = names.with(3, '')

// names[index] = ''
// const capitalNames = names.map(function(name, index){
//     if (index === 1){
//         return name.toUpperCase()
//     }
//     return name
// })

// console.log(names.includes('Максим'))

// console.log(names.indexOf('Максим') !== -1)
const people = [
    {name: 'Максим', budget: 4200},
    {name: 'Филипп', budget: 15000},
    {name: 'Леха', budget: 3000},
    {name: 'Тимур', budget: 10}
]

// for (let person of people){
//     if (person.budget === 4200){
//         findedPerson = person
//     }
// }

// const findedPerson = people.find(function(person){
//     return person.budget == 3000
// })

// const finded = people.findIndex((person) => person.name === 'Максим')
// console.log(finded)
// let sumBudget = 0
// const filtered = people.filter((person) => person.budget > 4000)

// console.log(filtered)
// filtered.forEach(function(person){
//     sumBudget += person.budget
//     return sumBudget
// })

// console.log(sumBudget)
// // console.log(filtered)



// const sumBudget = people
//     .filter((person) => person.budget > 4000)
//     .map((person) => person.budget)
//     .reduce((acc, p) => acc + p, 0)
// console.log(sumBudget)

// const string = 'Привет, как дела?'

// const reversed = string
//     .split('')
//     .toReversed()
//     .join('!')
//     .split('!')
//     .filter((symbol) => symbol !== '!')
//     .join("")

// console.log(reversed)
const numbers = [1, 2, 3, 4, 5]


