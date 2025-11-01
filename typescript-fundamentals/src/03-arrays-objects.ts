// # Arrays
let price: number[] = [12, 33, 29, 4]
// let price: number[] = [12, 33, 29, 4, '99']
// price.push('99')

let newPrice: number[] = [...price, 22]
// let newPrice: number[] = [...price, '22']

let fruits: (string | boolean)[] = ['apple', true, 'banana', false]

// # Objects
let car: { brand: string; year: number } = { brand: 'toyota', year: 2025 }

// car.year = '2020'
car.year = 2020
// car.color = 'blue'

const book = { title: 'book', price: 20 }
const pen = { title: 'pen', price: 10 }
const notebook = { title: 'notebook', price: 210 }
const notebook2 = { title: 'notebook' }

const items: { title: string; price: number }[] = [book, pen, notebook]
const items2: { readonly title: string; price?: number }[] = [book, pen, notebook2]
// items2[0].title = 'readonly new title'
