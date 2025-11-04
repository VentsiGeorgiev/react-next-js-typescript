interface Person {
  name: string
  getDetails(): string
}

interface DogOwner {
  dogName: string
  getDogDetails(): string
}

interface Person {
  age: number
}

const person = {
  name: 'john',
  age: 22,
  getDetails() {
    return `${this.name}, ${this.age}`
  },
}

interface Employee extends Person {
  employeeId: number
}

const employeePerson: Employee = {
  employeeId: 1,
  name: 'john',
  age: 22,
  getDetails() {
    return `"${this.employeeId} ${this.name}, ${this.age}`
  },
}

console.log(person.getDetails)
console.log(employeePerson)

interface Manager extends Person, DogOwner {
  managePeople(): void
}

const manager: Manager = {
  name: 'bob',
  age: 33,
  dogName: 'bobo',
  getDetails() {
    return `Bob details: ${this.name} - ${this.age}`
  },
  getDogDetails() {
    return `Bob dog: ${this.dogName}`
  },
  managePeople() {
    console.log('Manage people')
  },
}
manager.managePeople()
