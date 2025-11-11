// let array1: string[] = ['apple', 'banana']
// let array2: number[] = [1, 2]
// let array3: boolean[] = [true, false]

function genericFn<T>(arg: T): T {
  return arg
}
const stringValue = genericFn<string>('hello world')
const numberValue = genericFn<number>(2)

interface GenericInterface<T> {
  value: T
  getValue: () => T
}

const genericString: GenericInterface<string> = {
  value: 'hi',
  getValue() {
    return this.value
  },
}

async function someFunc(): Promise<string> {
  return 'hello world'
}

const result = someFunc()

function generateStringArray(length: number, value: string): string[] {
  let result: string[] = []
  result = Array(length).fill(value)
  return result
}

console.log(generateStringArray(6, 'hi'))

function createArray<T>(length: number, value: T): Array<T> {
  let result: Array<T> = []
  result = Array(length).fill(value)
  return result
}
console.log(createArray<boolean>(4, true))
console.log(createArray<number>(5, 1))

function pair<T, U>(id: T, email: U): [T, U] {
  return [id, email]
}

console.log(pair(123, 'john@gmail.com'))
