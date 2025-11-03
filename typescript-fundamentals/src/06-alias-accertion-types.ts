type User = {
  id: number
  name: string
  isActive: boolean
}

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
}
const maria: User = {
  id: 2,
  name: 'maria',
  isActive: false,
}

function createUser(user: User): User {
  console.log(`Hi ${user.name} with number: ${user.id} - user is: ${user.isActive}`)
  return {
    id: user.id,
    name: user.name,
    isActive: user.isActive,
  }
}

type Theme = 'light' | 'dark'
let theme: Theme

function setTheme(t: Theme) {
  theme = t
}
setTheme('dark')
setTheme('light')

type Employee = { id: number; name: string; department: string }
type Manager = { id: number; name: string; employees: Employee[] }

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' }
const martin: Employee = { id: 2, name: 'martin', department: 'HR' }

const bob: Manager = { id: 3, name: 'bob', employees: [alice, martin] }

type Staff = Employee | Manager

function printStuffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(`Manager: ${staff.name}, employees: ${staff.employees.join(';')}`)
  } else {
    console.log(`Employee: ${staff.name}, department ${staff.department}`)
  }
}

type Book = {
  id: number
  name: string
  price: number
}
type DiscountedBook = Book & {
  discount: number
  valid: string
}

const book: Book = {
  id: 1,
  name: 'The secret life of unicorns II',
  price: 18,
}

const discountedBook: DiscountedBook = {
  id: 1,
  name: 'The secret life of unicorns',
  price: 18,
  discount: 4,
  valid: '30 Of November 2025',
}
