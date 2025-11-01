let tax: number | string = 10
tax = '20'

let request: 'pending' | 'success' | 'error' = 'pending'
// request = 'random'
// request = ''
request = 'success'

let someValue: any = ''
someValue = 20
someValue = true
someValue = [1, 2, 3]

// any by default
let age
age = 44
age = '33'

const books = ['1984', 'Brave new world', 'Fahrenheit']
let foundBook: string | undefined

for (const book of books) {
  if (book === '1984') {
    foundBook = book
    break
  } else if (book === '1111') {
    foundBook = book
  }
}

foundBook?.length
