function sayHi(name: string) {
  console.log(`Hi ${name.toUpperCase()}`)
}

sayHi('john')
// sayHi(3)

function calculateDiscount(price: number): number {
  let hasDiscount = true

  if (hasDiscount) {
    return price
  }

  return price * 0.9
}

const price = calculateDiscount(200)
console.log(price)

const names: string[] = ['john', 'smith', 'bob']

function isNameInList(names: string[]): boolean {
  return names.includes('bob')
}
const checkName = isNameInList(names)
console.log(checkName)

function calculatePrice(price: number, discount?: number) {
  // return discount ? price - discount : price
  // discount: number = 0 as param
  // return price - discount
  return price - (discount || 0)
}
console.log(calculatePrice(100, 20))
console.log(calculatePrice(100))

function sum(message: string, ...numbers: number[]) {
  const total = numbers.reduce((prev, curr) => prev + curr, 0)
  return `${message} ${total}`
}
console.log(sum('Total amount is:', 1, 3, 4, 5, 6))

function logMessage(message: string): void {
  console.log(message)
}
logMessage('hello world')

function processInput(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase())
  }
  if (typeof value === 'number') {
    console.log(value * 2)
  }
}

processInput(2)
processInput('Hi there')
