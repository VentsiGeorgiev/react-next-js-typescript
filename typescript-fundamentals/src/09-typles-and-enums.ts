const person: [string, number?] = ['john']
const person1: [string, number?] = ['john', 25]
// const person: [string, number] = [25, 'john']

const date: readonly [number, number, number] = [4, 11, 2025]

const UserRole = {
  Admin: 'Admin',
  Manager: 'Manager',
  Employee: 'Employee',
} as const
type UserRole = (typeof UserRole)[keyof typeof UserRole]

type User = {
  id: number
  name: string
  role: UserRole
  contact: [string, string]
}

function createUser(user: User): User {
  return user
}

const user: User = createUser({
  id: 1,
  name: 'joe',
  role: UserRole.Admin,
  contact: ['joe@gmail.com', '+333431234567'],
})

console.log(user)
console.log(UserRole)
