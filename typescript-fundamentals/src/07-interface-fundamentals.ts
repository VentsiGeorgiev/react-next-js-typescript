interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  printAuthor(): void
  printTitle(msg: string): string
  printNumber: (n: number) => number
}

const deepWork: Book = {
  isbn: 1,
  title: 'deep work',
  author: 'cal newport',
  // # first option
  // printAuthor() {
  //   console.log(this.author)
  // },
  // # second option
  printAuthor: () => {
    console.log(deepWork.author)
  },
  printTitle(msg) {
    return `${this.title} ${msg}!`
  },
  // # fist option
  // printNumber: function (n) {
  //   return n
  // },
  // # second option
  // printNumber: (n) => {
  //   // console.log(this)
  //   return n
  // },
  // # third option
  printNumber(n) {
    return n
  },
}

deepWork.printAuthor()
console.log(deepWork.printTitle('is an awesome book!'))
console.log(deepWork.printNumber(21))
