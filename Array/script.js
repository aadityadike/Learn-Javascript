const items = [
    { name: 'shubham', interest: 'machines', age: 20 },
    { name: 'aditya', interest: 'computers', age: 19 },
    { name: 'om', interest: 'accounts', age: 100 },
    { name: 'sahil', interest: 'business', age: 19 },
    { name: 'siddhesh', interest: 'gold', age: 20 },
    { name: 'viraj', interest: 'games', age: 21 }
]

// Filter Method.
const filterItems = items.filter((item) => {
    return item.age > 20 && item.age < 100
})

console.log(filterItems)

/*------------------------------------------------------------------------------------------*/

// Map Method.
const mapItems = items.map((item) => {
    console.log(`Name: ${item.name}\nInterest: ${item.interest}`)
})

/*------------------------------------------------------------------------------------------*/

// Find Method
const findItems = items.find((item) => {
    return item.name === 'aditya'
})

console.log(findItems)

/*------------------------------------------------------------------------------------------*/

// For-each Method
const forEachItems = items.forEach((item, index) => {
    console.log(`${index}: ${item.name} `)
})

/*------------------------------------------------------------------------------------------*/

// Some Method (if one of element is 100 then it returns true)
const hasAgeHundred = items.some((item) => {
    return item.age >= 100
})

console.log(hasAgeHundred)

/*------------------------------------------------------------------------------------------*/

// Every Method (if every age is lesser than 20 than return true otherwise return false)
const everyItems = items.every((item) => {
    return item.age <= 20
})

console.log(everyItems)

/*------------------------------------------------------------------------------------------*/

// Reduce Method
const reduceItems = items.reduce((currentTotal, item) => {
    return item.age + currentTotal
}, 0)

console.log(reduceItems)

/*------------------------------------------------------------------------------------------*/

// Includes Method (Its very continent when we need to findOut a particular element is there or not )
const arr = [1, 2, 3, 4, 5]
console.log(arr.includes(2))

